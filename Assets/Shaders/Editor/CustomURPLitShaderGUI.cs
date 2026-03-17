using UnityEngine;
using UnityEditor;

public class CustomURPLitShaderGUI : ShaderGUI
{
    private MaterialProperty renderMode;
    private MaterialProperty receiveShadows;
    private MaterialProperty alphaClip;
    private MaterialProperty cutoff;
    private MaterialProperty doubleSided;

    private MaterialProperty baseMap;
    private MaterialProperty baseColor;

    private MaterialProperty metallicMap;
    private MaterialProperty metallic;
    private MaterialProperty smoothness;
    private MaterialProperty occlusionMap;
    private MaterialProperty occlusionStrength;

    private MaterialProperty useNormalMap;
    private MaterialProperty normalMap;
    private MaterialProperty normalScale;

    private MaterialProperty useEmission;
    private MaterialProperty emissionMap;
    private MaterialProperty emissionColor;

    private MaterialProperty useRimLight;
    private MaterialProperty rimColor;
    private MaterialProperty rimPower;
    private MaterialProperty rimIntensity;

    private MaterialProperty useStylizedLighting;
    private MaterialProperty shadowSteps;
    private MaterialProperty shadowSmoothness;

    private MaterialProperty useCustomLighting;
    private MaterialProperty customLightColor;
    private MaterialProperty customAmbientColor;

    private MaterialProperty mainTiling;
    private MaterialProperty queueOffset;

    private MaterialProperty useFakePointLight;
    private MaterialProperty useVertexColor;
    private MaterialProperty[] fakeLightEnabled = new MaterialProperty[12];
    private MaterialProperty[] fakeLightPos = new MaterialProperty[12];
    private MaterialProperty[] fakeLightColor = new MaterialProperty[12];
    private MaterialProperty[] fakeLightIntensity = new MaterialProperty[12];
    private MaterialProperty[] fakeLightRange = new MaterialProperty[12];
    private MaterialProperty[] fakeLightAttenuationPower = new MaterialProperty[12];

    private bool m_FirstTimeApply = true;

    public override void OnGUI(MaterialEditor materialEditor, MaterialProperty[] properties)
    {
        Material material = materialEditor.target as Material;

        FindProperties(properties);

        // First time setup
        if (m_FirstTimeApply)
        {
            OnOpenGUI(material, materialEditor);
            m_FirstTimeApply = false;
        }

        EditorGUI.BeginChangeCheck();

        // Render Settings
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("渲染设置", EditorStyles.boldLabel);

        EditorGUI.BeginChangeCheck();
        renderMode.floatValue = EditorGUILayout.Popup("渲染模式", (int)renderMode.floatValue, new string[] { "不透明", "透明" });
        if (EditorGUI.EndChangeCheck())
        {
            UpdateRenderMode(material);
        }

        materialEditor.ShaderProperty(receiveShadows, "接受阴影");
        if (receiveShadows.floatValue > 0.5f)
        {
            material.EnableKeyword("_RECEIVE_SHADOWS");
        }
        else
        {
            material.DisableKeyword("_RECEIVE_SHADOWS");
        }

        materialEditor.ShaderProperty(alphaClip, "透明度裁剪");
        if (alphaClip.floatValue > 0.5f)
        {
            material.EnableKeyword("_ALPHATEST_ON");
            materialEditor.ShaderProperty(cutoff, "裁剪阈值");
        }
        else
        {
            material.DisableKeyword("_ALPHATEST_ON");
        }

        materialEditor.ShaderProperty(doubleSided, "双面渲染");
        UpdateCullMode(material);

        // Base
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("基础", EditorStyles.boldLabel);
        materialEditor.TexturePropertySingleLine(new GUIContent("基础贴图"), baseMap, baseColor);

        // Custom Lighting
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("自定义光照", EditorStyles.boldLabel);
        materialEditor.ShaderProperty(useCustomLighting, "使用自定义光照颜色");
        if (useCustomLighting.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_CUSTOM_LIGHTING");
            materialEditor.ShaderProperty(customLightColor, "自定义光源颜色");
            materialEditor.ShaderProperty(customAmbientColor, "自定义环境光颜色");
            EditorGUILayout.HelpBox("将覆盖场景光照，用于特殊风格化效果", MessageType.Info);
        }
        else
        {
            material.DisableKeyword("_USE_CUSTOM_LIGHTING");
        }

        // Surface
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("表面", EditorStyles.boldLabel);
        materialEditor.TexturePropertySingleLine(new GUIContent("金属度贴图"), metallicMap);
        materialEditor.ShaderProperty(metallic, "金属度");
        materialEditor.ShaderProperty(smoothness, "光滑度");
        materialEditor.TexturePropertySingleLine(new GUIContent("环境光遮蔽 (AO)"), occlusionMap);
        if (occlusionMap.textureValue != null)
        {
            materialEditor.ShaderProperty(occlusionStrength, "AO强度");
        }

        // Normal
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("法线", EditorStyles.boldLabel);
        materialEditor.ShaderProperty(useNormalMap, "使用法线贴图");
        if (useNormalMap.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_NORMAL_MAP");
            materialEditor.TexturePropertySingleLine(new GUIContent("法线贴图"), normalMap);
            materialEditor.ShaderProperty(normalScale, "法线强度");
        }
        else
        {
            material.DisableKeyword("_USE_NORMAL_MAP");
        }

        // Emission
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("自发光", EditorStyles.boldLabel);
        materialEditor.ShaderProperty(useEmission, "使用自发光");
        if (useEmission.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_EMISSION");
            materialEditor.TexturePropertySingleLine(new GUIContent("自发光贴图"), emissionMap, emissionColor);
        }
        else
        {
            material.DisableKeyword("_USE_EMISSION");
        }

        // Rim Light
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("边缘光", EditorStyles.boldLabel);
        materialEditor.ShaderProperty(useRimLight, "启用边缘光");
        if (useRimLight.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_RIM_LIGHT");
            materialEditor.ShaderProperty(rimColor, "边缘光颜色");
            materialEditor.ShaderProperty(rimPower, "边缘光范围");
            materialEditor.ShaderProperty(rimIntensity, "边缘光强度");
        }
        else
        {
            material.DisableKeyword("_USE_RIM_LIGHT");
        }

        // 注释掉未使用的风格化光照部分
        /*
        // Stylized Lighting
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("风格化光照", EditorStyles.boldLabel);
        materialEditor.ShaderProperty(useStylizedLighting, "启用卡通光照");
        if (useStylizedLighting.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_STYLIZED_LIGHTING");
            materialEditor.ShaderProperty(shadowSteps, "阴影分层数");
            materialEditor.ShaderProperty(shadowSmoothness, "阴影平滑度");
        }
        else
        {
            material.DisableKeyword("_USE_STYLIZED_LIGHTING");
        }
        */

        // Tiling and Offset
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("平铺和偏移", EditorStyles.boldLabel);
        Vector4 tilingOffset = mainTiling.vectorValue;
        Vector2 tiling = new Vector2(tilingOffset.x, tilingOffset.y);
        Vector2 offset = new Vector2(tilingOffset.z, tilingOffset.w);

        tiling = EditorGUILayout.Vector2Field("平铺", tiling);
        offset = EditorGUILayout.Vector2Field("偏移", offset);
        mainTiling.vectorValue = new Vector4(tiling.x, tiling.y, offset.x, offset.y);

        // Fake Point Lights
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("假点光源", EditorStyles.boldLabel);

        // 顶点颜色烘焙选项
        materialEditor.ShaderProperty(useVertexColor, "使用顶点颜色光照（烘焙）");
        if (useVertexColor.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_VERTEX_COLOR");
            EditorGUILayout.HelpBox(
                "✓ 使用烘焙到顶点颜色的光照数据\n" +
                "• 性能：极低（只读取顶点颜色）\n" +
                "• 支持批处理，减少 Draw Call\n" +
                "• 使用 假光源管理器 > 烘焙光照 Tab 进行烘焙",
                MessageType.Info);
        }
        else
        {
            material.DisableKeyword("_USE_VERTEX_COLOR");
        }

        EditorGUILayout.Space(5);

        materialEditor.ShaderProperty(useFakePointLight, "启用假点光源");

        if (useFakePointLight.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_FAKE_POINT_LIGHT");

            EditorGUILayout.HelpBox("假点光源：模拟点光源效果，性能开销低于真实光源\n建议使用 假光源管理器 工具进行批量设置（Tools > 假光源管理器）", MessageType.Info);

            // 如果同时启用了顶点颜色，显示警告
            if (useVertexColor.floatValue > 0.5f)
            {
                EditorGUILayout.HelpBox(
                    "⚠️ 同时启用了 顶点颜色 和 假点光源\n" +
                    "两者会叠加，可能导致光照过亮。\n" +
                    "建议：烘焙后关闭假点光源",
                    MessageType.Warning);
            }

            // 统计启用的光源数量
            int enabledCount = 0;
            for (int i = 0; i < 12; i++)
            {
                if (fakeLightEnabled[i].floatValue > 0.5f)
                    enabledCount++;
            }
            EditorGUILayout.LabelField($"已启用光源数量: {enabledCount}/12", EditorStyles.miniLabel);

            EditorGUILayout.Space(5);

            for (int i = 0; i < 12; i++)
            {
                EditorGUILayout.BeginVertical("box");

                // 使用 Toggle 勾选框代替数值输入
                bool isEnabled = fakeLightEnabled[i].floatValue > 0.5f;
                EditorGUI.BeginChangeCheck();

                // 添加颜色指示器
                GUIStyle labelStyle = new GUIStyle(EditorStyles.label);
                if (isEnabled)
                {
                    Color lightColor = fakeLightColor[i].colorValue;
                    labelStyle.normal.textColor = new Color(lightColor.r * 0.8f + 0.2f, lightColor.g * 0.8f + 0.2f, lightColor.b * 0.8f + 0.2f);
                }

                isEnabled = EditorGUILayout.Toggle(new GUIContent($"光源 {i + 1} 启用",
                    isEnabled ? $"位置: ({fakeLightPos[i].vectorValue.x:F1}, {fakeLightPos[i].vectorValue.y:F1}, {fakeLightPos[i].vectorValue.z:F1})" : ""),
                    isEnabled);

                if (EditorGUI.EndChangeCheck())
                {
                    fakeLightEnabled[i].floatValue = isEnabled ? 1.0f : 0.0f;
                }

                if (isEnabled)
                {
                    EditorGUI.indentLevel++;

                    // 颜色和强度放在同一行
                    EditorGUILayout.BeginHorizontal();
                    materialEditor.ShaderProperty(fakeLightColor[i], "颜色");
                    EditorGUILayout.EndHorizontal();

                    materialEditor.ShaderProperty(fakeLightIntensity[i], new GUIContent("强度", "光照强度，无上限"));

                    // 位置使用Vector3字段以便更直观
                    Vector3 pos = new Vector3(
                        fakeLightPos[i].vectorValue.x,
                        fakeLightPos[i].vectorValue.y,
                        fakeLightPos[i].vectorValue.z);
                    EditorGUI.BeginChangeCheck();
                    pos = EditorGUILayout.Vector3Field("位置", pos);
                    if (EditorGUI.EndChangeCheck())
                    {
                        fakeLightPos[i].vectorValue = new Vector4(pos.x, pos.y, pos.z, 0);
                    }

                    materialEditor.ShaderProperty(fakeLightRange[i], "范围");
                    materialEditor.ShaderProperty(fakeLightAttenuationPower[i], new GUIContent("衰减指数", "控制光照衰减速度，值越大衰减越快"));

                    EditorGUI.indentLevel--;
                }

                EditorGUILayout.EndVertical();
                EditorGUILayout.Space(2);
            }
        }
        else
        {
            material.DisableKeyword("_USE_FAKE_POINT_LIGHT");
        }

        // Advanced
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("高级", EditorStyles.boldLabel);

        // GPU Instancing
        EditorGUI.BeginChangeCheck();
        materialEditor.EnableInstancingField();
        if (EditorGUI.EndChangeCheck())
        {
            // GPU Instancing状态改变时的处理
            foreach (Material mat in materialEditor.targets)
            {
                mat.enableInstancing = materialEditor.targets[0] is Material m && m.enableInstancing;
            }
        }

        // Queue Offset
        EditorGUI.BeginChangeCheck();
        materialEditor.ShaderProperty(queueOffset, "渲染队列偏移");
        if (EditorGUI.EndChangeCheck())
        {
            UpdateRenderQueue(material);
        }

        // Display current render queue
        EditorGUILayout.LabelField("当前渲染队列", material.renderQueue.ToString());

        if (EditorGUI.EndChangeCheck())
        {
            materialEditor.PropertiesChanged();
        }
    }

    private void FindProperties(MaterialProperty[] properties)
    {
        renderMode = FindProperty("_RenderMode", properties);
        receiveShadows = FindProperty("_ReceiveShadows", properties);
        alphaClip = FindProperty("_AlphaClip", properties);
        cutoff = FindProperty("_Cutoff", properties);
        doubleSided = FindProperty("_DoubleSided", properties);

        baseMap = FindProperty("_BaseMap", properties);
        baseColor = FindProperty("_BaseColor", properties);

        metallicMap = FindProperty("_MetallicMap", properties);
        metallic = FindProperty("_Metallic", properties);
        smoothness = FindProperty("_Smoothness", properties);
        occlusionMap = FindProperty("_OcclusionMap", properties);
        occlusionStrength = FindProperty("_OcclusionStrength", properties);

        useNormalMap = FindProperty("_UseNormalMap", properties);
        normalMap = FindProperty("_NormalMap", properties);
        normalScale = FindProperty("_NormalScale", properties);

        useEmission = FindProperty("_UseEmission", properties);
        emissionMap = FindProperty("_EmissionMap", properties);
        emissionColor = FindProperty("_EmissionColor", properties);

        useRimLight = FindProperty("_UseRimLight", properties);
        rimColor = FindProperty("_RimColor", properties);
        rimPower = FindProperty("_RimPower", properties);
        rimIntensity = FindProperty("_RimIntensity", properties);

        // 注释掉未使用的风格化光照属性查找
        // useStylizedLighting = FindProperty("_UseStylizedLighting", properties);
        // shadowSteps = FindProperty("_ShadowSteps", properties);
        // shadowSmoothness = FindProperty("_ShadowSmoothness", properties);

        useCustomLighting = FindProperty("_UseCustomLighting", properties);
        customLightColor = FindProperty("_CustomLightColor", properties);
        customAmbientColor = FindProperty("_CustomAmbientColor", properties);

        mainTiling = FindProperty("_MainTiling", properties);
        queueOffset = FindProperty("_QueueOffset", properties);

        useFakePointLight = FindProperty("_UseFakePointLight", properties);
        useVertexColor = FindProperty("_UseVertexColor", properties);
        for (int i = 0; i < 12; i++)
        {
            fakeLightEnabled[i] = FindProperty($"_FakeLight{i + 1}_Enabled", properties);
            fakeLightPos[i] = FindProperty($"_FakeLight{i + 1}_Pos", properties);
            fakeLightColor[i] = FindProperty($"_FakeLight{i + 1}_Color", properties);
            fakeLightIntensity[i] = FindProperty($"_FakeLight{i + 1}_Intensity", properties);
            fakeLightRange[i] = FindProperty($"_FakeLight{i + 1}_Range", properties);
            fakeLightAttenuationPower[i] = FindProperty($"_FakeLight{i + 1}_AttenuationPower", properties);
        }
    }

    private void UpdateRenderMode(Material material)
    {
        // 安全检查：如果属性未初始化，直接从材质读取值
        float renderModeValue = renderMode != null ? renderMode.floatValue : material.GetFloat("_RenderMode");

        switch ((int)renderModeValue)
        {
            case 0: // Opaque
                material.SetOverrideTag("RenderType", "Opaque");
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.One);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.Zero);
                material.SetInt("_ZWrite", 1);
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Geometry;
                break;
            case 1: // Transparent
                material.SetOverrideTag("RenderType", "Transparent");
                material.SetInt("_SrcBlend", (int)UnityEngine.Rendering.BlendMode.SrcAlpha);
                material.SetInt("_DstBlend", (int)UnityEngine.Rendering.BlendMode.OneMinusSrcAlpha);
                material.SetInt("_ZWrite", 1);
                material.renderQueue = (int)UnityEngine.Rendering.RenderQueue.Transparent;
                break;
        }
        UpdateRenderQueue(material);
    }

    private void UpdateRenderQueue(Material material)
    {
        if (queueOffset == null)
        {
            // 如果属性未初始化，尝试从材质获取，如果没有则使用默认值0
            if (!material.HasProperty("_QueueOffset"))
                return;
        }

        float renderModeValue = renderMode != null ? renderMode.floatValue : material.GetFloat("_RenderMode");
        float offsetValue = queueOffset != null ? queueOffset.floatValue : material.GetFloat("_QueueOffset");

        int baseQueue = (int)renderModeValue == 0
            ? (int)UnityEngine.Rendering.RenderQueue.Geometry
            : (int)UnityEngine.Rendering.RenderQueue.Transparent;

        int offset = (int)offsetValue;
        material.renderQueue = baseQueue + offset;
    }

    private void UpdateCullMode(Material material)
    {
        if (doubleSided == null) return;

        if (doubleSided.floatValue > 0.5f)
        {
            material.SetInt("_Cull", (int)UnityEngine.Rendering.CullMode.Off);
        }
        else
        {
            material.SetInt("_Cull", (int)UnityEngine.Rendering.CullMode.Back);
        }
    }

    public override void AssignNewShaderToMaterial(Material material, Shader oldShader, Shader newShader)
    {
        // Clear all keywords
        material.shaderKeywords = null;

        base.AssignNewShaderToMaterial(material, oldShader, newShader);

        // Set default render state
        material.SetFloat("_RenderMode", 0);
        UpdateRenderMode(material);

        // Set default queue offset
        material.SetFloat("_QueueOffset", 0);
    }

    private void OnOpenGUI(Material material, MaterialEditor editor)
    {
        // Ensure render state is correct on first open
        UpdateRenderMode(material);
    }
}
