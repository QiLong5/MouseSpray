Shader "Custom/Outline Only"
{
    Properties
    {
        [Header(Outline Settings)]
        _OutlineWidth("描边粗细", Range(0, 0.1)) = 0.01
        _OutlineColor("描边颜色", Color) = (0,0,0,1)

        [Header(Advanced)]
        [Toggle(_USE_VERTEX_COLOR)] _UseVertexColor("使用顶点色平滑法线", Float) = 0

        // 用于Alpha Clip支持（如果主材质有透明裁剪）
        [Toggle(_ALPHATEST_ON)] _AlphaClip("透明度裁剪", Float) = 0
        _Cutoff("裁剪阈值", Range(0,1)) = 0.5
        _BaseMap("基础贴图（用于Alpha）", 2D) = "white" {}
    }

    SubShader
    {
        Tags
        {
            "RenderType" = "Opaque"
            "Queue" = "Geometry"
            "RenderPipeline" = "UniversalPipeline"
        }

        // 纯Outline Pass - 只渲染描边
        Pass
        {
            Name "OutlineOnly"
            Tags { "LightMode" = "SRPDefaultUnlit" }

            Cull Front  // 剔除正面，只渲染背面
            ZWrite On
            ZTest LEqual

            HLSLPROGRAM
            #pragma target 3.0

            #pragma vertex OutlineVertex
            #pragma fragment OutlineFragment

            // 支持GPU Instancing（描边也能批处理！）
            #pragma multi_compile_instancing
            #pragma multi_compile_fog

            #pragma shader_feature_local _USE_VERTEX_COLOR
            #pragma shader_feature_local _ALPHATEST_ON

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float4 color : COLOR;
                float2 uv : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv : TEXCOORD0;
                float fogCoord : TEXCOORD1;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            TEXTURE2D(_BaseMap);
            SAMPLER(sampler_BaseMap);

            CBUFFER_START(UnityPerMaterial)
                float4 _BaseMap_ST;
                float _OutlineWidth;
                float4 _OutlineColor;
                float _Cutoff;
            CBUFFER_END

            Varyings OutlineVertex(Attributes input)
            {
                Varyings output;
                UNITY_SETUP_INSTANCE_ID(input);
                UNITY_TRANSFER_INSTANCE_ID(input, output);

                float3 normalOS = input.normalOS;

                #ifdef _USE_VERTEX_COLOR
                    // 使用顶点色作为平滑法线（需要预先烘焙）
                    normalOS = input.color.rgb * 2.0 - 1.0;
                #endif

                // 沿法线方向扩展
                float3 positionWS = TransformObjectToWorld(input.positionOS.xyz);
                float3 normalWS = TransformObjectToWorldNormal(normalOS);
                positionWS += normalize(normalWS) * _OutlineWidth;

                output.positionCS = TransformWorldToHClip(positionWS);
                output.uv = TRANSFORM_TEX(input.uv, _BaseMap);
                output.fogCoord = ComputeFogFactor(output.positionCS.z);

                return output;
            }

            half4 OutlineFragment(Varyings input) : SV_Target
            {
                UNITY_SETUP_INSTANCE_ID(input);

                // 支持Alpha裁剪（与主材质保持一致）
                #ifdef _ALPHATEST_ON
                    float alpha = SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, input.uv).a;
                    clip(alpha - _Cutoff);
                #endif

                // 应用雾效
                half3 outlineColor = MixFog(_OutlineColor.rgb, input.fogCoord);

                return half4(outlineColor, _OutlineColor.a);
            }
            ENDHLSL
        }
    }

    CustomEditor "OutlineOnlyShaderGUI"
    Fallback Off
}
