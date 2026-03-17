Shader "Custom/NavPath"
{
    Properties
    {
        _MainTex("箭头纹理", 2D) = "white" {}
        _ScrollYSpeed("Y轴滚动速度", Range(-20, 20)) = 2

        [Toggle] _EnableFade("启用渐隐", Float) = 1
        _FadeDistance("渐隐范围", Range(0, 1)) = 1
    }
    SubShader
    {
        Tags
        {
            "Queue" = "Transparent"
            "RenderType" = "Transparent"
            "RenderPipeline" = "UniversalPipeline"
        }
        LOD 100

        ZWrite Off
        Cull Off // 双面渲染
        Blend SrcAlpha OneMinusSrcAlpha // Alpha混合

        Pass
        {
            Name "NavPathPass"
            Tags { "LightMode" = "UniversalForward" }

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma shader_feature_local _ENABLEFADE_ON

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float2 uv : TEXCOORD0;
                float4 positionCS : SV_POSITION;
            };

            TEXTURE2D(_MainTex);
            SAMPLER(sampler_MainTex);

            CBUFFER_START(UnityPerMaterial)
                float4 _MainTex_ST;
                half _ScrollYSpeed;
                half _FadeDistance;
            CBUFFER_END

            Varyings vert(Attributes input)
            {
                Varyings output;
                output.positionCS = TransformObjectToHClip(input.positionOS.xyz);
                output.uv = input.uv;
                return output;
            }

            half4 frag(Varyings input) : SV_Target
            {
                // 【调试禁用】禁用NavPath shader
            //    return half4(0, 1, 0, 1); // 绿色

                // UV滚动动画
                float2 scrolledUV = frac(input.uv * _MainTex_ST.xy + float2(0, _ScrollYSpeed) * _Time.y);
                half4 col = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, scrolledUV);

                #ifdef _ENABLEFADE_ON
                    float fadeStart = 1.0 - _FadeDistance;
                    float fade = saturate((input.uv.y - fadeStart) / _FadeDistance);
                    col.a *= (1.0 - fade);
                #endif

                return col;
            }
            ENDHLSL
        }
    }

    FallBack "Universal Render Pipeline/Unlit"
}
