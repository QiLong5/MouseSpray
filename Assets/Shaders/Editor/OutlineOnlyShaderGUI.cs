using UnityEngine;
using UnityEditor;

/// <summary>
/// OutlineOnly shader的材质编辑器
/// 用于独立的描边材质，可叠加到任何主材质上
/// </summary>
public class OutlineOnlyShaderGUI : ShaderGUI
{
    private MaterialProperty outlineWidth;
    private MaterialProperty outlineColor;
    private MaterialProperty useVertexColor;
    private MaterialProperty alphaClip;
    private MaterialProperty cutoff;
    private MaterialProperty baseMap;

    public override void OnGUI(MaterialEditor materialEditor, MaterialProperty[] properties)
    {
        Material material = materialEditor.target as Material;

        FindProperties(properties);

        EditorGUILayout.Space();
        EditorGUILayout.LabelField("纯描边材质 (Outline Only)", EditorStyles.boldLabel);

        EditorGUILayout.BeginVertical("box");
        EditorGUILayout.HelpBox(
            "这是一个独立的描边材质，使用方法：\n" +
            "1. 将此材质作为第二材质添加到Renderer\n" +
            "2. 主材质使用优化版shader以支持GPU Instancing\n" +
            "3. 描边效果由这个材质单独渲染",
            MessageType.Info);
        EditorGUILayout.EndVertical();

        // Outline Settings
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("描边设置", EditorStyles.boldLabel);

        materialEditor.ShaderProperty(outlineWidth, "描边粗细");
        materialEditor.ShaderProperty(outlineColor, "描边颜色");

        EditorGUILayout.Space();
        materialEditor.ShaderProperty(useVertexColor, "使用顶点色平滑法线");

        if (useVertexColor.floatValue > 0.5f)
        {
            material.EnableKeyword("_USE_VERTEX_COLOR");
            EditorGUILayout.HelpBox(
                "描边断裂时使用，需要先烘焙平滑法线到顶点色\n" +
                "选中模型 > 右键MeshFilter组件 > Outline > Bake Smooth Normals to Color",
                MessageType.Info);
        }
        else
        {
            material.DisableKeyword("_USE_VERTEX_COLOR");
        }

        // Alpha Clip Settings
        EditorGUILayout.Space();
        EditorGUILayout.LabelField("透明度裁剪（可选）", EditorStyles.boldLabel);

        materialEditor.ShaderProperty(alphaClip, "启用透明度裁剪");
        if (alphaClip.floatValue > 0.5f)
        {
            material.EnableKeyword("_ALPHATEST_ON");
            materialEditor.TexturePropertySingleLine(new GUIContent("基础贴图（Alpha通道）"), baseMap);
            materialEditor.ShaderProperty(cutoff, "裁剪阈值");
            EditorGUILayout.HelpBox("如果主材质使用了Alpha裁剪，这里也需要启用并使用相同的贴图", MessageType.Info);
        }
        else
        {
            material.DisableKeyword("_ALPHATEST_ON");
        }

        // GPU Instancing
        EditorGUILayout.Space();

        EditorGUI.BeginChangeCheck();
        materialEditor.EnableInstancingField();
        if (EditorGUI.EndChangeCheck())
        {
            foreach (Material mat in materialEditor.targets)
            {
                mat.enableInstancing = materialEditor.targets[0] is Material m && m.enableInstancing;
            }
        }

        if (EditorGUI.EndChangeCheck())
        {
            materialEditor.PropertiesChanged();
        }
    }

    private void FindProperties(MaterialProperty[] properties)
    {
        outlineWidth = FindProperty("_OutlineWidth", properties);
        outlineColor = FindProperty("_OutlineColor", properties);
        useVertexColor = FindProperty("_UseVertexColor", properties);
        alphaClip = FindProperty("_AlphaClip", properties);
        cutoff = FindProperty("_Cutoff", properties);
        baseMap = FindProperty("_BaseMap", properties);
    }
}
