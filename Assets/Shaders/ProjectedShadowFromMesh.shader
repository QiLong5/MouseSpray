Shader "Custom/ProjectedShadowFromMesh"
{
    Properties
    {
        [Header(Shadow Appearance)]
        _ShadowColor ("Shadow Color (阴影颜色)", Color) = (0, 0, 0, 0.6)
        _ShadowIntensity ("Intensity (强度)", Range(0, 1)) = 0.6

        [Header(Light Settings)]
        _LightPosX ("Light X (光源X)", Float) = 0
        _LightPosY ("Light Y (光源Y)", Float) = 10
        _LightPosZ ("Light Z (光源Z)", Float) = 0
        _ShadowPlaneY ("Shadow Plane Y (阴影平面高度)", Float) = 0

        [Header(Model Center)]
        _ModelCenterX ("Model Center X (模型中心X)", Float) = 0
        _ModelCenterY ("Model Center Y (模型中心Y)", Float) = 0
        _ModelCenterZ ("Model Center Z (模型中心Z)", Float) = 0

        [Header(Attenuation)]
        _AttenuationRange ("Attenuation Range (衰减范围)", Float) = 10
        _EdgeSoftness ("Edge Softness (边界软化范围)", Float) = 0.5
    }

    SubShader
    {
        Tags
        {
            "RenderType"="Transparent"
            "Queue"="Transparent-1"
            "RenderPipeline"="UniversalPipeline"
        }

        Pass
        {
            Name "ProjectedShadowPass"
            Tags { "LightMode"="UniversalForward" }

            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off
            Cull Back

            Stencil
            {
                Ref 1
                Comp NotEqual
                Pass Replace
            }

            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 worldPos : TEXCOORD0;
            };

            CBUFFER_START(UnityPerMaterial)
                half4 _ShadowColor;
                half _ShadowIntensity;
                float _LightPosX;
                float _LightPosY;
                float _LightPosZ;
                float _ShadowPlaneY;
                float _ModelCenterX;
                float _ModelCenterY;
                float _ModelCenterZ;
                float _AttenuationRange;
                float _EdgeSoftness;
            CBUFFER_END

            Varyings vert (Attributes input)
            {
                Varyings output;

                // 获取顶点的世界空间位置
                float3 worldVertexPos = TransformObjectToWorld(input.positionOS.xyz);

                // 点光源位置
                float3 lightPos = float3(_LightPosX, _LightPosY, _LightPosZ);

                // 从光源指向顶点的方向
                float3 lightDir = worldVertexPos - lightPos;

                // 计算投影位置
                float3 projectedPos;

                // 防止除以零
                if (abs(lightDir.y) > 0.0001)
                {
                    float t = (_ShadowPlaneY - lightPos.y) / lightDir.y;

                    // 只有当t > 0时才是有效投影
                    if (t > 0.0)
                    {
                        projectedPos = lightPos + lightDir * t;
                        projectedPos.y += 0.01; // 稍微抬高避免Z-fighting
                    }
                    else
                    {
                        // 顶点在光源上方，隐藏
                        projectedPos = float3(0, _ShadowPlaneY - 1000.0, 0);
                    }
                }
                else
                {
                    // 光线平行于地面，隐藏
                    projectedPos = float3(0, _ShadowPlaneY - 1000.0, 0);
                }

                // 计算阴影扩散距离用于衰减（从模型中心位置向外扩散）
                // 传递投影后的世界坐标到片段着色器，在片段着色器中计算距离
                output.worldPos = projectedPos;

                // 转换到裁剪空间
                output.positionCS = TransformWorldToHClip(projectedPos);

                return output;
            }

            half4 frag (Varyings input) : SV_Target
            {
                // 在片段着色器中计算距离（避免varying插值问题）
                // 只计算XZ平面的2D距离，忽略Y轴差值
                float2 projectedPosXZ = float2(input.worldPos.x, input.worldPos.z);
                float2 modelCenterXZ = float2(_ModelCenterX, _ModelCenterZ);
                float spreadDistance = length(projectedPosXZ - modelCenterXZ);

                // 超出范围直接丢弃片段
                if (_AttenuationRange > 0.0 && spreadDistance > _AttenuationRange)
                {
                    discard;
                }

                half4 color = _ShadowColor;
                float attenuation = 1.0;

                // 边界软化：在边界附近衰减透明度
                if (_AttenuationRange > 0.0 && _EdgeSoftness > 0.0)
                {
                    // 软化区域的起始距离
                    float edgeStart = _AttenuationRange - _EdgeSoftness;
                    if (spreadDistance > edgeStart)
                    {
                        // 在软化区域内，从1平滑过渡到0
                        attenuation = smoothstep(0.0, 1.0, (_AttenuationRange - spreadDistance) / _EdgeSoftness);
                    }
                }

                color.a *= _ShadowIntensity * attenuation;
                return color;
            }
            ENDHLSL
        }
    }

    FallBack "Universal Render Pipeline/Unlit"
}
