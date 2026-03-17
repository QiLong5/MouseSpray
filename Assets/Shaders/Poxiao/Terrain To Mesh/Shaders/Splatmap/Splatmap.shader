Shader "Poxiao/Terrain To Mesh/Splatmap"
{
    Properties
    {

//[HideInInspector][CurvedWorldBendSettings] _CurvedWorldBendSettings("0|1|1", Vector) = (0, 0, 0, 0)

//Terrain To Mesh Properties/////////////////////////////////////////////////////////////////////////////////////////////////////////
[HideInInspector] [TerrainToMeshLayerCounter] _T2M_Layer_Count ("Layer Count", float) = 0

[Space]
 [NoScaleOffset] _T2M_SplatMap_0 ("Splat Map #0 (RGBA)", 2D) = "black" {}

[HideInInspector] _T2M_Layer_0_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_0_Diffuse ("Paint Map 1 (R)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_0_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_0_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_0_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_0_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_0_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_0_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_0_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_0_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_0_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_0_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_1_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_1_Diffuse ("Paint Map 1 (R)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_1_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_1_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_1_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_1_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_1_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_1_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_1_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_1_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_1_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_1_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_2_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_2_Diffuse ("Paint Map 2 (G)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_2_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_2_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_2_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_2_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_2_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_2_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_2_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_2_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_2_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_2_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_3_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_3_Diffuse ("Paint Map 3 (B)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_3_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_3_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_3_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_3_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_3_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_3_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_3_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_3_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_3_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_3_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)


[HideInInspector] [NoScaleOffset] _T2M_SplatMap_1 ("Splat Map #1 (RGBA)", 2D) = "black" {}

[HideInInspector] _T2M_Layer_4_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_4_Diffuse ("Paint Map 4 (A)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_4_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_4_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_4_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_4_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_4_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_4_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_4_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_4_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_4_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_4_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_5_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_5_Diffuse ("Paint Map 5 (R)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_5_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_5_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_5_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_5_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_5_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_5_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_5_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_5_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_5_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_5_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_6_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_6_Diffuse ("Paint Map 6 (G)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_6_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_6_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_6_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_6_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_6_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_6_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_6_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_6_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_6_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_6_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_7_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_7_Diffuse ("Paint Map 7 (B)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_7_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_7_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_7_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_7_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_7_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_7_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_7_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_7_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_7_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_7_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)


[HideInInspector] [NoScaleOffset] _T2M_SplatMap_2 ("Splat Map #2 (RGBA)", 2D) = "black" {}

[HideInInspector] _T2M_Layer_8_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_8_Diffuse ("Paint Map 8 (A)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_8_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_8_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_8_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_8_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_8_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_8_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_8_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_8_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_8_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_8_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_9_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_9_Diffuse ("Paint Map 9 (R)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_9_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_9_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_9_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_9_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_9_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_9_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_9_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_9_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_9_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_9_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_10_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_10_Diffuse ("Paint Map 10 (G)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_10_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_10_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_10_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_10_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_10_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_10_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_10_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_10_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_10_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_10_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_11_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_11_Diffuse ("Paint Map 11 (B)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_11_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_11_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_11_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_11_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_11_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_11_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_11_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_11_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_11_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_11_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)


[HideInInspector] [NoScaleOffset] _T2M_SplatMap_3 ("Splat Map #3 (RGBA)", 2D) = "black" {}

[HideInInspector] _T2M_Layer_12_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_12_Diffuse ("Paint Map 12 (A)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_12_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_12_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_12_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_12_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_12_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_12_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_12_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_12_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_12_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_12_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_13_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_13_Diffuse ("Paint Map 13 (R)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_13_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_13_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_13_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_13_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_13_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_13_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_13_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_13_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_13_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_13_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_14_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_14_Diffuse ("Paint Map 14 (G)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_14_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_14_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_14_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_14_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_14_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_14_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_14_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_14_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_14_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_14_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)

[HideInInspector] _T2M_Layer_15_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _T2M_Layer_15_Diffuse ("Paint Map 15 (B)", 2D) = "white" {}
[HideInInspector] _T2M_Layer_15_NormalScale("Strength", float) = 1
[HideInInspector] [NoScaleOffset] _T2M_Layer_15_NormalMap("Bump", 2D) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_Layer_15_Mask ("Mask", 2D) = "white" {}
[HideInInspector] _T2M_Layer_15_uvScaleOffset("UV Scale", Vector) = (1, 1, 0, 0)
[HideInInspector] _T2M_Layer_15_MapsUsage("Maps Usage", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_15_MetallicOcclusionSmoothness("Metallic (R), Occlusion (G), Smoothness(A)", Vector) = (0, 1, 0, 0)
[HideInInspector] _T2M_Layer_15_SmoothnessFromDiffuseAlpha("", float) = 0
[HideInInspector] _T2M_Layer_15_OpacityAsDensity("", float) = 0
[HideInInspector] _T2M_Layer_15_MaskMapRemapMin("Maskmap Remap Min", Vector) = (0, 0, 0, 0)
[HideInInspector] _T2M_Layer_15_MaskMapRemapMax("Maskmap Remap Max", Vector) = (1, 1, 1, 1)


//Texture 2D Array
[HideInInspector] [NoScaleOffset] _T2M_SplatMaps2DArray("SplatMaps 2D Array", 2DArray) = "black" {}
[HideInInspector] [NoScaleOffset] _T2M_DiffuseMaps2DArray("DiffuseMaps 2D Array", 2DArray) = "white" {}
[HideInInspector] [NoScaleOffset] _T2M_NormalMaps2DArray("NormalMaps 2D Array", 2DArray) = "bump" {}
[HideInInspector] [NoScaleOffset] _T2M_MaskMaps2DArray("MaskMaps 2D Array", 2DArray) = "white" {}

//Holesmap
[HideInInspector] [NoScaleOffset] _T2M_HolesMap ("Holes Map", 2D) = "white" {}

//Height Blend
[HideInInspector] [Toggle(_T2M_ENABLE_HEIGHT_BLEND)] _T2M_EnableHeightBlend("Enable Height Blend", Float) = 0.0
[HideInInspector] _T2M_HeightTransition("Height Transition", Range(0, 1.0)) = 0.0

//Fallback use only
[HideInInspector] _Color("Color", Color) = (1, 1, 1, 1)
[HideInInspector] [NoScaleOffset] _BaseMap("Fallback Diffuse", 2D) = "white" {}
[HideInInspector] [NoScaleOffset] _BumpMap("Fallback Normal", 2D) = "bump" {}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        [Header(Fake Point Lights)]
        [Toggle(_USE_FAKE_POINT_LIGHT)] _UseFakePointLight("启用假点光源", Float) = 0

        _FakeLight1_Enabled ("光源1启用", Float) = 0
        _FakeLight1_Pos ("光源1位置", Vector) = (0, 5, 0, 0)
        _FakeLight1_Color ("光源1颜色", Color) = (1, 0.9, 0.7, 1)
        _FakeLight1_Intensity ("光源1强度", Float) = 1
        _FakeLight1_Range ("光源1范围", Range(1, 50)) = 10
        _FakeLight1_AttenuationPower ("光源1衰减", Range(1, 4)) = 2

        _FakeLight2_Enabled ("光源2启用", Float) = 0
        _FakeLight2_Pos ("光源2位置", Vector) = (5, 5, 0, 0)
        _FakeLight2_Color ("光源2颜色", Color) = (0.7, 0.9, 1, 1)
        _FakeLight2_Intensity ("光源2强度", Float) = 1
        _FakeLight2_Range ("光源2范围", Range(1, 50)) = 10
        _FakeLight2_AttenuationPower ("光源2衰减", Range(1, 4)) = 2

        _FakeLight3_Enabled ("光源3启用", Float) = 0
        _FakeLight3_Pos ("光源3位置", Vector) = (-5, 5, 0, 0)
        _FakeLight3_Color ("光源3颜色", Color) = (1, 0.7, 0.9, 1)
        _FakeLight3_Intensity ("光源3强度", Float) = 1
        _FakeLight3_Range ("光源3范围", Range(1, 50)) = 10
        _FakeLight3_AttenuationPower ("光源3衰减", Range(1, 4)) = 2

        _FakeLight4_Enabled ("光源4启用", Float) = 0
        _FakeLight4_Pos ("光源4位置", Vector) = (0, 5, 5, 0)
        _FakeLight4_Color ("光源4颜色", Color) = (0.9, 1, 0.7, 1)
        _FakeLight4_Intensity ("光源4强度", Float) = 1
        _FakeLight4_Range ("光源4范围", Range(1, 50)) = 10
        _FakeLight4_AttenuationPower ("光源4衰减", Range(1, 4)) = 2

        _FakeLight5_Enabled ("光源5启用", Float) = 0
        _FakeLight5_Pos ("光源5位置", Vector) = (0, 5, -5, 0)
        _FakeLight5_Color ("光源5颜色", Color) = (1, 1, 0.7, 1)
        _FakeLight5_Intensity ("光源5强度", Float) = 1
        _FakeLight5_Range ("光源5范围", Range(1, 50)) = 10
        _FakeLight5_AttenuationPower ("光源5衰减", Range(1, 4)) = 2

        _FakeLight6_Enabled ("光源6启用", Float) = 0
        _FakeLight6_Pos ("光源6位置", Vector) = (-5, 5, 5, 0)
        _FakeLight6_Color ("光源6颜色", Color) = (0.7, 1, 1, 1)
        _FakeLight6_Intensity ("光源6强度", Float) = 1
        _FakeLight6_Range ("光源6范围", Range(1, 50)) = 10
        _FakeLight6_AttenuationPower ("光源6衰减", Range(1, 4)) = 2

        _FakeLight7_Enabled ("光源7启用", Float) = 0
        _FakeLight7_Pos ("光源7位置", Vector) = (5, 5, 5, 0)
        _FakeLight7_Color ("光源7颜色", Color) = (1, 0.7, 0.7, 1)
        _FakeLight7_Intensity ("光源7强度", Float) = 1
        _FakeLight7_Range ("光源7范围", Range(1, 50)) = 10
        _FakeLight7_AttenuationPower ("光源7衰减", Range(1, 4)) = 2

        _FakeLight8_Enabled ("光源8启用", Float) = 0
        _FakeLight8_Pos ("光源8位置", Vector) = (-5, 5, -5, 0)
        _FakeLight8_Color ("光源8颜色", Color) = (0.7, 0.7, 1, 1)
        _FakeLight8_Intensity ("光源8强度", Float) = 1
        _FakeLight8_Range ("光源8范围", Range(1, 50)) = 10
        _FakeLight8_AttenuationPower ("光源8衰减", Range(1, 4)) = 2

        _FakeLight9_Enabled ("光源9启用", Float) = 0
        _FakeLight9_Pos ("光源9位置", Vector) = (5, 5, -5, 0)
        _FakeLight9_Color ("光源9颜色", Color) = (1, 1, 0.7, 1)
        _FakeLight9_Intensity ("光源9强度", Float) = 1
        _FakeLight9_Range ("光源9范围", Range(1, 50)) = 10
        _FakeLight9_AttenuationPower ("光源9衰减", Range(1, 4)) = 2

        _FakeLight10_Enabled ("光源10启用", Float) = 0
        _FakeLight10_Pos ("光源10位置", Vector) = (0, 10, 0, 0)
        _FakeLight10_Color ("光源10颜色", Color) = (1, 1, 1, 1)
        _FakeLight10_Intensity ("光源10强度", Float) = 1
        _FakeLight10_Range ("光源10范围", Range(1, 50)) = 10
        _FakeLight10_AttenuationPower ("光源10衰减", Range(1, 4)) = 2

        _FakeLight11_Enabled ("光源11启用", Float) = 0
        _FakeLight11_Pos ("光源11位置", Vector) = (10, 5, 0, 0)
        _FakeLight11_Color ("光源11颜色", Color) = (0.9, 0.9, 1, 1)
        _FakeLight11_Intensity ("光源11强度", Float) = 1
        _FakeLight11_Range ("光源11范围", Range(1, 50)) = 10
        _FakeLight11_AttenuationPower ("光源11衰减", Range(1, 4)) = 2

        _FakeLight12_Enabled ("光源12启用", Float) = 0
        _FakeLight12_Pos ("光源12位置", Vector) = (-10, 5, 0, 0)
        _FakeLight12_Color ("光源12颜色", Color) = (1, 0.9, 0.9, 1)
        _FakeLight12_Intensity ("光源12强度", Float) = 1
        _FakeLight12_Range ("光源12范围", Range(1, 50)) = 10
        _FakeLight12_AttenuationPower ("光源12衰减", Range(1, 4)) = 2

        [HideInInspector]_QueueOffset("_QueueOffset", Float) = 0
        [HideInInspector]_QueueControl("_QueueControl", Float) = -1
        [HideInInspector][NoScaleOffset]unity_Lightmaps("unity_Lightmaps", 2DArray) = "" {}
        [HideInInspector][NoScaleOffset]unity_LightmapsInd("unity_LightmapsInd", 2DArray) = "" {}
        [HideInInspector][NoScaleOffset]unity_ShadowMasks("unity_ShadowMasks", 2DArray) = "" {}
    }

    SubShader
    {
        Tags
        {
            "RenderPipeline"        = "UniversalPipeline"
            "RenderType"            = "Opaque"
            "UniversalMaterialType" = "Lit"
            "Queue"                 = "Geometry"
            "IgnoreProjector"       = "True"
        }

        // ══════════════════════════════════════════════════════════════════════
        // Pass 1 : ForwardLit — PBR lighting via splatmap blending
        // ══════════════════════════════════════════════════════════════════════
        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }

            Cull Back
            ZWrite On
            ZTest LEqual
            Blend One Zero

            HLSLPROGRAM
            #pragma target 3.0
            #pragma only_renderers d3d11 gles gles3
            #pragma vertex   vert
            #pragma fragment frag

            // ── URP pipeline keywords (Playworks-trimmed) ────────────────────
            #pragma multi_compile _ _MAIN_LIGHT_SHADOWS _MAIN_LIGHT_SHADOWS_CASCADE
            #pragma multi_compile _ _ADDITIONAL_LIGHTS_VERTEX _ADDITIONAL_LIGHTS
            #pragma multi_compile_fragment _ _ADDITIONAL_LIGHT_SHADOWS
            #pragma multi_compile_fragment _ _SHADOWS_SOFT
            #pragma shader_feature_local _RECEIVE_SHADOWS_OFF

            // ── Unity lighting / lightmap keywords ───────────────────────────
            #pragma multi_compile _ LIGHTMAP_SHADOW_MIXING
            #pragma multi_compile _ SHADOWS_SHADOWMASK
            #pragma multi_compile _ DIRLIGHTMAP_COMBINED
            #pragma multi_compile _ LIGHTMAP_ON
            #pragma multi_compile _ EVALUATE_SH_MIXED EVALUATE_SH_VERTEX
            #pragma multi_compile_fog

            // ── GPU Instancing ───────────────────────────────────────────────
            #pragma multi_compile_instancing

            // ── T2M material keywords ────────────────────────────────────────
            #pragma shader_feature_local _ALPHATEST_ON
            #pragma shader_feature_local_fragment _USE_FAKE_POINT_LIGHT
            #pragma shader_feature_local_fragment _ _T2M_TEXTURE_SAMPLE_TYPE_ARRAY
            #pragma shader_feature_local_fragment _ _T2M_LAYER_COUNT_3 _T2M_LAYER_COUNT_4 _T2M_LAYER_COUNT_5 _T2M_LAYER_COUNT_6 _T2M_LAYER_COUNT_7 _T2M_LAYER_COUNT_8 _T2M_LAYER_COUNT_9 _T2M_LAYER_COUNT_10 _T2M_LAYER_COUNT_11 _T2M_LAYER_COUNT_12 _T2M_LAYER_COUNT_13 _T2M_LAYER_COUNT_14 _T2M_LAYER_COUNT_15 _T2M_LAYER_COUNT_16
            #pragma shader_feature_local_fragment _T2M_ENABLE_HEIGHT_BLEND
            #pragma shader_feature_local_fragment _T2M_LAYER_0_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_1_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_2_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_3_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_4_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_5_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_6_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_7_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_8_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_9_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_10_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_11_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_12_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_13_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_14_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_15_NORMAL
            #pragma shader_feature_local_fragment _T2M_LAYER_0_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_1_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_2_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_3_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_4_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_5_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_6_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_7_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_8_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_9_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_10_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_11_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_12_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_13_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_14_MASK
            #pragma shader_feature_local_fragment _T2M_LAYER_15_MASK

            // ── T2M defines ─────────────────────────────────────────────────
            #define TERRAIN_TO_MESH_HLSL_GENERATED
            #define TERRAIN_TO_MESH_NEED_NORMAL
            #define TERRAIN_TO_MESH_NEED_METALLIC_SMOOTHNESS_OCCLUSION
            #define TERRAIN_TO_MESH_UNIVERSAL_RP
            #define TERRAIN_TO_MESH_SHADERPASS_FORWARD

            // Lower this to reduce darkening caused by steep blended normal maps in PlayAd builds.
            #ifndef T2M_NORMALMAP_INTENSITY
                #define T2M_NORMALMAP_INTENSITY 0.75
            #endif

            // ── URP includes ────────────────────────────────────────────────
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            // ── SRP Batcher CBUFFER ─────────────────────────────────────────
            CBUFFER_START(UnityPerMaterial)
                #include "../cginc/VariablesCBuffer.cginc"
            CBUFFER_END

            // ── T2M splatmap logic ──────────────────────────────────────────
            #include "Splatmap.cginc"

            // ── Structs ─────────────────────────────────────────────────────
            struct Attributes
            {
                float4 positionOS       : POSITION;
                float3 normalOS         : NORMAL;
                float4 tangentOS        : TANGENT;
                float2 uv               : TEXCOORD0;
                float2 staticLightmapUV : TEXCOORD1;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionHCS : SV_POSITION;
                float2 uv          : TEXCOORD0;
                float3 positionWS  : TEXCOORD1;
                half3  normalWS    : TEXCOORD2;
                half4  tangentWS   : TEXCOORD3;
                DECLARE_LIGHTMAP_OR_SH(staticLightmapUV, vertexSH, 4);
                half   fogFactor   : TEXCOORD5;
                #ifdef _ADDITIONAL_LIGHTS_VERTEX
                half3  vertexLighting : TEXCOORD6;
                #endif
                #ifdef _USE_FAKE_POINT_LIGHT
                half3  geometricNormalWS : TEXCOORD7; // 假光源专用几何法线（不受法线贴图影响）
                #endif
                UNITY_VERTEX_INPUT_INSTANCE_ID
                UNITY_VERTEX_OUTPUT_STEREO
            };

            // ── Vertex shader ───────────────────────────────────────────────
            Varyings vert(Attributes IN)
            {
                Varyings OUT;
                UNITY_SETUP_INSTANCE_ID(IN);
                UNITY_TRANSFER_INSTANCE_ID(IN, OUT);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(OUT);

                float3 modifiedPos, modifiedNormal;
                SplatmapModifyVertex_float(IN.positionOS.xyz, IN.normalOS, IN.tangentOS, modifiedPos, modifiedNormal);

                VertexPositionInputs posInputs    = GetVertexPositionInputs(modifiedPos);
                VertexNormalInputs   normalInputs = GetVertexNormalInputs(modifiedNormal, IN.tangentOS);

                OUT.positionHCS = posInputs.positionCS;
                OUT.positionWS  = posInputs.positionWS;
                OUT.normalWS    = NormalizeNormalPerVertex(normalInputs.normalWS);
                OUT.uv          = IN.uv;
                OUT.fogFactor   = ComputeFogFactor(posInputs.positionCS.z);
                real sign       = IN.tangentOS.w * GetOddNegativeScale();
                OUT.tangentWS   = half4(normalInputs.tangentWS.xyz, sign);

                #ifdef _USE_FAKE_POINT_LIGHT
                    // 保存原始几何法线，供假光源使用（不受法线贴图影响）
                    OUT.geometricNormalWS = NormalizeNormalPerVertex(normalInputs.normalWS);
                #endif

                OUTPUT_LIGHTMAP_UV(IN.staticLightmapUV, unity_LightmapST, OUT.staticLightmapUV);
                OUTPUT_SH(OUT.normalWS.xyz, OUT.vertexSH);

                #ifdef _ADDITIONAL_LIGHTS_VERTEX
                    OUT.vertexLighting = VertexLighting(posInputs.positionWS, normalInputs.normalWS);
                #endif

                return OUT;
            }

            // ── Fragment shader ─────────────────────────────────────────────
            half4 frag(Varyings IN) : SV_Target
            {
                UNITY_SETUP_INSTANCE_ID(IN);
                UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(IN);

                SplatmapAlphaClip_float(IN.uv);

                SurfaceData surfaceData;
                SplatmapInitializeSurfaceData_float(IN.uv, surfaceData);
                surfaceData.metallic   = saturate(surfaceData.metallic);
                surfaceData.smoothness = saturate(surfaceData.smoothness);

                // 保存原始albedo用于假光源计算（WebGL精度优化）
                half3 originalAlbedo = surfaceData.albedo;

                half3 baseNormalWS = NormalizeNormalPerPixel(IN.normalWS);
                half3 normalWS = baseNormalWS;
                {
                    half  sgn       = IN.tangentWS.w;
                    half3 bitangent = sgn * cross(IN.normalWS, IN.tangentWS.xyz);
                    half3 normalTSf = normalize(lerp(half3(0, 0, 1), surfaceData.normalTS, saturate(T2M_NORMALMAP_INTENSITY)));
                    normalWS = NormalizeNormalPerPixel(
                        TransformTangentToWorld(normalTSf,
                            half3x3(IN.tangentWS.xyz, bitangent, IN.normalWS)));
                }

                InputData inputData = (InputData)0;
                inputData.positionWS      = IN.positionWS;
                inputData.positionCS      = IN.positionHCS;
                inputData.normalWS        = normalWS;
                inputData.viewDirectionWS = GetWorldSpaceNormalizeViewDir(IN.positionWS);

                #if defined(_RECEIVE_SHADOWS_OFF)
                    inputData.shadowCoord = float4(0, 0, 0, 0);
                #elif defined(REQUIRES_VERTEX_SHADOW_COORD_INTERPOLATOR) || defined(MAIN_LIGHT_CALCULATE_SHADOWS)
                    inputData.shadowCoord = TransformWorldToShadowCoord(IN.positionWS);
                #else
                    inputData.shadowCoord = float4(0, 0, 0, 0);
                #endif

                inputData.fogCoord                = IN.fogFactor;
                inputData.normalizedScreenSpaceUV = GetNormalizedScreenSpaceUV(IN.positionHCS);

                #ifdef _ADDITIONAL_LIGHTS_VERTEX
                    inputData.vertexLighting = IN.vertexLighting;
                #else
                    inputData.vertexLighting = half3(0, 0, 0);
                #endif

                // Keep GI on geometric normal to avoid excessive darkening from blended normal maps.
                inputData.bakedGI    = SAMPLE_GI(IN.staticLightmapUV, IN.vertexSH, baseNormalWS);
                inputData.shadowMask = SAMPLE_SHADOWMASK(IN.staticLightmapUV);

                half4 color = UniversalFragmentPBR(inputData, surfaceData);

                // ── Fake Point Lights ───────────────────────────────────────
                #ifdef _USE_FAKE_POINT_LIGHT
                    // WebGL精度优化：使用float进行光照累积，最后再转换为half
                    float3 totalFakeLight = float3(0, 0, 0);

                    // 使用几何法线（不受法线贴图影响），确保假光源基于真实几何形状计算
                    half3 fakeLightNormal = normalize(IN.geometricNormalWS);

                    // 光源计算宏
                    #define CALCULATE_FAKE_LIGHT(enabled, pos, color, intensity, range, attenPower) \
                    if (enabled > 0.5) { \
                        float3 lightPos = pos; \
                        float3 lightVector = lightPos - inputData.positionWS; \
                        float distanceSqr = dot(lightVector, lightVector); \
                        float rangeSqr = range * range; \
                        \
                        if (distanceSqr < rangeSqr) { \
                            float distanceAttenuation = 1.0 / max(distanceSqr, 0.01 * 0.01); \
                            float rangeAttenuation = saturate(1.0 - (distanceSqr / rangeSqr)); \
                            rangeAttenuation = pow(rangeAttenuation, attenPower); \
                            float attenuation = distanceAttenuation * rangeAttenuation; \
                            \
                            if (attenuation > 0.001) { \
                                float3 lightDir = normalize(lightVector); \
                                float NdotL = max(0.0, dot(fakeLightNormal, lightDir)); \
                                totalFakeLight += color * intensity * NdotL * attenuation; \
                            } \
                        } \
                    }

                    // 计算所有12个假点光源
                    CALCULATE_FAKE_LIGHT(_FakeLight1_Enabled, _FakeLight1_Pos.xyz, _FakeLight1_Color.rgb, _FakeLight1_Intensity, _FakeLight1_Range, _FakeLight1_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight2_Enabled, _FakeLight2_Pos.xyz, _FakeLight2_Color.rgb, _FakeLight2_Intensity, _FakeLight2_Range, _FakeLight2_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight3_Enabled, _FakeLight3_Pos.xyz, _FakeLight3_Color.rgb, _FakeLight3_Intensity, _FakeLight3_Range, _FakeLight3_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight4_Enabled, _FakeLight4_Pos.xyz, _FakeLight4_Color.rgb, _FakeLight4_Intensity, _FakeLight4_Range, _FakeLight4_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight5_Enabled, _FakeLight5_Pos.xyz, _FakeLight5_Color.rgb, _FakeLight5_Intensity, _FakeLight5_Range, _FakeLight5_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight6_Enabled, _FakeLight6_Pos.xyz, _FakeLight6_Color.rgb, _FakeLight6_Intensity, _FakeLight6_Range, _FakeLight6_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight7_Enabled, _FakeLight7_Pos.xyz, _FakeLight7_Color.rgb, _FakeLight7_Intensity, _FakeLight7_Range, _FakeLight7_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight8_Enabled, _FakeLight8_Pos.xyz, _FakeLight8_Color.rgb, _FakeLight8_Intensity, _FakeLight8_Range, _FakeLight8_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight9_Enabled, _FakeLight9_Pos.xyz, _FakeLight9_Color.rgb, _FakeLight9_Intensity, _FakeLight9_Range, _FakeLight9_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight10_Enabled, _FakeLight10_Pos.xyz, _FakeLight10_Color.rgb, _FakeLight10_Intensity, _FakeLight10_Range, _FakeLight10_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight11_Enabled, _FakeLight11_Pos.xyz, _FakeLight11_Color.rgb, _FakeLight11_Intensity, _FakeLight11_Range, _FakeLight11_AttenuationPower)
                    CALCULATE_FAKE_LIGHT(_FakeLight12_Enabled, _FakeLight12_Pos.xyz, _FakeLight12_Color.rgb, _FakeLight12_Intensity, _FakeLight12_Range, _FakeLight12_AttenuationPower)

                    #undef CALCULATE_FAKE_LIGHT

                    // 叠加假光源贡献（使用原始albedo，避免精度损失和双重应用）
                    color.rgb += originalAlbedo * totalFakeLight;
                #endif

                color.rgb   = MixFog(color.rgb, inputData.fogCoord);
                color.a     = surfaceData.alpha;

                return color;
            }
            ENDHLSL
        }

        // ══════════════════════════════════════════════════════════════════════
        // Pass 2 : ShadowCaster
        // ══════════════════════════════════════════════════════════════════════
        Pass
        {
            Name "ShadowCaster"
            Tags { "LightMode" = "ShadowCaster" }

            ZWrite On
            ZTest LEqual
            ColorMask 0
            Cull Back

            HLSLPROGRAM
            #pragma target 3.0
            // #pragma only_renderers d3d11 gles gles3
            #pragma vertex   ShadowVert
            #pragma fragment ShadowFrag

            #pragma shader_feature_local _ALPHATEST_ON
            #pragma multi_compile_instancing
            #pragma multi_compile_vertex _ _CASTING_PUNCTUAL_LIGHT_SHADOW

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.core/ShaderLibrary/CommonMaterial.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Shadows.hlsl"

            #ifdef _ALPHATEST_ON
                TEXTURE2D(_T2M_HolesMap); SAMPLER(sampler_T2M_HolesMap);
            #endif

            CBUFFER_START(UnityPerMaterial)
                #include "../cginc/VariablesCBuffer.cginc"
            CBUFFER_END

            float3 _LightDirection;
            float3 _LightPosition;

            struct ShadowAttribs
            {
                float4 positionOS : POSITION;
                float3 normalOS   : NORMAL;
                float2 uv         : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct ShadowVaryings
            {
                float4 positionCS : SV_POSITION;
                float2 uv         : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            ShadowVaryings ShadowVert(ShadowAttribs IN)
            {
                ShadowVaryings OUT;
                UNITY_SETUP_INSTANCE_ID(IN);
                UNITY_TRANSFER_INSTANCE_ID(IN, OUT);

                float3 positionWS = TransformObjectToWorld(IN.positionOS.xyz);
                float3 normalWS   = TransformObjectToWorldNormal(IN.normalOS);

                #if _CASTING_PUNCTUAL_LIGHT_SHADOW
                    float3 lightDir = normalize(_LightPosition - positionWS);
                #else
                    float3 lightDir = _LightDirection;
                #endif

                float4 posCS = TransformWorldToHClip(ApplyShadowBias(positionWS, normalWS, lightDir));
                #if UNITY_REVERSED_Z
                    posCS.z = min(posCS.z, UNITY_NEAR_CLIP_VALUE);
                #else
                    posCS.z = max(posCS.z, UNITY_NEAR_CLIP_VALUE);
                #endif

                OUT.positionCS = posCS;
                OUT.uv         = IN.uv;
                return OUT;
            }

            half4 ShadowFrag(ShadowVaryings IN) : SV_TARGET
            {
                #ifdef _ALPHATEST_ON
                    clip(SAMPLE_TEXTURE2D(_T2M_HolesMap, sampler_T2M_HolesMap, IN.uv).r - 0.5);
                #endif
                return 0;
            }
            ENDHLSL
        }

        // ══════════════════════════════════════════════════════════════════════
        // Pass 3 : DepthOnly
        // ══════════════════════════════════════════════════════════════════════
        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode" = "DepthOnly" }

            ZWrite On
            ColorMask R
            Cull Back

            HLSLPROGRAM
            #pragma target 3.0
            #pragma only_renderers d3d11 gles gles3
            #pragma vertex   DepthVert
            #pragma fragment DepthFrag

            #pragma shader_feature_local _ALPHATEST_ON
            #pragma multi_compile_instancing

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            #ifdef _ALPHATEST_ON
                TEXTURE2D(_T2M_HolesMap); SAMPLER(sampler_T2M_HolesMap);
            #endif

            CBUFFER_START(UnityPerMaterial)
                #include "../cginc/VariablesCBuffer.cginc"
            CBUFFER_END

            struct DepthAttribs
            {
                float4 positionOS : POSITION;
                float2 uv         : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct DepthVaryings
            {
                float4 positionCS : SV_POSITION;
                float2 uv         : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            DepthVaryings DepthVert(DepthAttribs IN)
            {
                DepthVaryings OUT;
                UNITY_SETUP_INSTANCE_ID(IN);
                UNITY_TRANSFER_INSTANCE_ID(IN, OUT);
                OUT.positionCS = TransformObjectToHClip(IN.positionOS.xyz);
                OUT.uv         = IN.uv;
                return OUT;
            }

            half DepthFrag(DepthVaryings IN) : SV_TARGET
            {
                #ifdef _ALPHATEST_ON
                    clip(SAMPLE_TEXTURE2D(_T2M_HolesMap, sampler_T2M_HolesMap, IN.uv).r - 0.5);
                #endif
                return IN.positionCS.z;
            }
            ENDHLSL
        }

        // ══════════════════════════════════════════════════════════════════════
        // Pass 4 : DepthNormals
        // ══════════════════════════════════════════════════════════════════════
        Pass
        {
            Name "DepthNormals"
            Tags { "LightMode" = "DepthNormals" }

            ZWrite On
            Cull Back

            HLSLPROGRAM
            #pragma target 3.0
            #pragma only_renderers d3d11 gles gles3
            #pragma vertex   DepthNormalsVert
            #pragma fragment DepthNormalsFrag

            #pragma shader_feature_local _ALPHATEST_ON
            #pragma multi_compile_instancing

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            #ifdef _ALPHATEST_ON
                TEXTURE2D(_T2M_HolesMap); SAMPLER(sampler_T2M_HolesMap);
            #endif

            CBUFFER_START(UnityPerMaterial)
                #include "../cginc/VariablesCBuffer.cginc"
            CBUFFER_END

            struct DNAttribs
            {
                float4 positionOS : POSITION;
                float3 normalOS   : NORMAL;
                float2 uv         : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct DNVaryings
            {
                float4 positionCS : SV_POSITION;
                float2 uv         : TEXCOORD0;
                half3  normalWS   : TEXCOORD1;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            DNVaryings DepthNormalsVert(DNAttribs IN)
            {
                DNVaryings OUT;
                UNITY_SETUP_INSTANCE_ID(IN);
                UNITY_TRANSFER_INSTANCE_ID(IN, OUT);

                VertexPositionInputs posInputs  = GetVertexPositionInputs(IN.positionOS.xyz);
                VertexNormalInputs normalInputs = GetVertexNormalInputs(IN.normalOS);

                OUT.positionCS = posInputs.positionCS;
                OUT.normalWS   = normalInputs.normalWS;
                OUT.uv         = IN.uv;

                return OUT;
            }

            float4 DepthNormalsFrag(DNVaryings IN) : SV_TARGET
            {
                #ifdef _ALPHATEST_ON
                    clip(SAMPLE_TEXTURE2D(_T2M_HolesMap, sampler_T2M_HolesMap, IN.uv).r - 0.5);
                #endif

                half3 normalWS = NormalizeNormalPerPixel(IN.normalWS);
                return float4(PackNormalOctRectEncode(TransformWorldToViewDir(normalWS, true)), 0, 0);
            }
            ENDHLSL
        }
    }

    CustomEditor "UnityEditor.ShaderGraph.GenericShaderGraphMaterialGUI"
    CustomEditorForRenderPipeline "AmazingAssets.TerrainToMesh.Editor.SplatmapShaderGUI" "UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset"
    FallBack "Hidden/Amazing Assets/Terrain To Mesh/Fallback/Splatmap"
}
