var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i751 = data
  i750.name = i751[0]
  i750.halfPrecision = !!i751[1]
  i750.useSimplification = !!i751[2]
  i750.useUInt32IndexFormat = !!i751[3]
  i750.vertexCount = i751[4]
  i750.aabb = i751[5]
  var i753 = i751[6]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( !!i753[i + 0] );
  }
  i750.streams = i752
  i750.vertices = i751[7]
  var i755 = i751[8]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i755[i + 0]) );
  }
  i750.subMeshes = i754
  var i757 = i751[9]
  var i756 = []
  for(var i = 0; i < i757.length; i += 16) {
    i756.push( new pc.Mat4().setData(i757[i + 0], i757[i + 1], i757[i + 2], i757[i + 3],  i757[i + 4], i757[i + 5], i757[i + 6], i757[i + 7],  i757[i + 8], i757[i + 9], i757[i + 10], i757[i + 11],  i757[i + 12], i757[i + 13], i757[i + 14], i757[i + 15]) );
  }
  i750.bindposes = i756
  var i759 = i751[10]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i759[i + 0]) );
  }
  i750.blendShapes = i758
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i765 = data
  i764.triangles = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i771 = data
  i770.name = i771[0]
  var i773 = i771[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i773[i + 0]) );
  }
  i770.frames = i772
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i774 = root || new pc.UnityMaterial()
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'shader')
  i774.renderQueue = i775[3]
  i774.enableInstancing = !!i775[4]
  var i777 = i775[5]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i777[i + 0]) );
  }
  i774.floatParameters = i776
  var i779 = i775[6]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i779[i + 0]) );
  }
  i774.colorParameters = i778
  var i781 = i775[7]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i781[i + 0]) );
  }
  i774.vectorParameters = i780
  var i783 = i775[8]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i783[i + 0]) );
  }
  i774.textureParameters = i782
  var i785 = i775[9]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i785[i + 0]) );
  }
  i774.materialFlags = i784
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i789 = data
  i788.name = i789[0]
  i788.value = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i793 = data
  i792.name = i793[0]
  i792.value = new pc.Color(i793[1], i793[2], i793[3], i793[4])
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i797 = data
  i796.name = i797[0]
  i796.value = new pc.Vec4( i797[1], i797[2], i797[3], i797[4] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i801 = data
  i800.name = i801[0]
  request.r(i801[1], i801[2], 0, i800, 'value')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i805 = data
  i804.name = i805[0]
  i804.enabled = !!i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i807 = data
  i806.name = i807[0]
  i806.width = i807[1]
  i806.height = i807[2]
  i806.mipmapCount = i807[3]
  i806.anisoLevel = i807[4]
  i806.filterMode = i807[5]
  i806.hdr = !!i807[6]
  i806.format = i807[7]
  i806.wrapMode = i807[8]
  i806.alphaIsTransparency = !!i807[9]
  i806.alphaSource = i807[10]
  i806.graphicsFormat = i807[11]
  i806.sRGBTexture = !!i807[12]
  i806.desiredColorSpace = i807[13]
  i806.wrapU = i807[14]
  i806.wrapV = i807[15]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i809 = data
  i808.position = new pc.Vec3( i809[0], i809[1], i809[2] )
  i808.scale = new pc.Vec3( i809[3], i809[4], i809[5] )
  i808.rotation = new pc.Quat(i809[6], i809[7], i809[8], i809[9])
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'sharedMesh')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'additionalVertexStreams')
  i812.enabled = !!i813[2]
  request.r(i813[3], i813[4], 0, i812, 'sharedMaterial')
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[6]
  i812.shadowCastingMode = i813[7]
  i812.sortingLayerID = i813[8]
  i812.sortingOrder = i813[9]
  i812.lightmapIndex = i813[10]
  i812.lightmapSceneIndex = i813[11]
  i812.lightmapScaleOffset = new pc.Vec4( i813[12], i813[13], i813[14], i813[15] )
  i812.lightProbeUsage = i813[16]
  i812.reflectionProbeUsage = i813[17]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i819 = data
  i818.name = i819[0]
  i818.tagId = i819[1]
  i818.enabled = !!i819[2]
  i818.isStatic = !!i819[3]
  i818.layer = i819[4]
  return i818
}

Deserializers["Elevator"] = function (request, data, root) {
  var i820 = root || request.c( 'Elevator' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'elevatorPlatform')
  request.r(i821[2], i821[3], 0, i820, 'elevatorCenter')
  i820.moveDistance = i821[4]
  i820.moveToCenterDuration = i821[5]
  i820.duration = i821[6]
  i820.easeType = i821[7]
  var i823 = i821[8]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i820.colliders = i822
  var i825 = i821[9]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 1, i824, '')
  }
  i820.farmerStandingPositions = i824
  request.r(i821[10], i821[11], 0, i820, 'topQueuePath')
  i820.farmerBoardSpeed = i821[12]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i831 = data
  i830.center = new pc.Vec3( i831[0], i831[1], i831[2] )
  i830.size = new pc.Vec3( i831[3], i831[4], i831[5] )
  i830.enabled = !!i831[6]
  i830.isTrigger = !!i831[7]
  request.r(i831[8], i831[9], 0, i830, 'material')
  return i830
}

Deserializers["Item"] = function (request, data, root) {
  var i832 = root || request.c( 'Item' )
  var i833 = data
  i832.itemType = i833[0]
  i832.movementEase = new pc.AnimationCurve( { keys_flow: i833[1] } )
  i832.stackHeight = i833[2]
  i832.itemWidth = i833[3]
  i832.value = i833[4]
  return i832
}

Deserializers["Wheat"] = function (request, data, root) {
  var i834 = root || request.c( 'Wheat' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'normalState')
  request.r(i835[2], i835[3], 0, i834, 'harvestedState')
  i834.regrowTime = i835[4]
  i834.itemType = i835[5]
  i834.movementEase = new pc.AnimationCurve( { keys_flow: i835[6] } )
  i834.stackHeight = i835[7]
  i834.itemWidth = i835[8]
  i834.value = i835[9]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i837 = data
  i836.mass = i837[0]
  i836.drag = i837[1]
  i836.angularDrag = i837[2]
  i836.useGravity = !!i837[3]
  i836.isKinematic = !!i837[4]
  i836.constraints = i837[5]
  i836.maxAngularVelocity = i837[6]
  i836.collisionDetectionMode = i837[7]
  i836.interpolation = i837[8]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i839 = data
  i838.center = new pc.Vec3( i839[0], i839[1], i839[2] )
  i838.radius = i839[3]
  i838.height = i839[4]
  i838.direction = i839[5]
  i838.enabled = !!i839[6]
  i838.isTrigger = !!i839[7]
  request.r(i839[8], i839[9], 0, i838, 'material')
  return i838
}

Deserializers["AttackRangeIndicator"] = function (request, data, root) {
  var i840 = root || request.c( 'AttackRangeIndicator' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'indicatorMaterial')
  i840.radius = i841[2]
  i840.startAngle = i841[3]
  i840.endAngle = i841[4]
  i840.segments = i841[5]
  i840.indicatorColor = new pc.Color(i841[6], i841[7], i841[8], i841[9])
  i840.heightOffset = i841[10]
  i840.fadeDuration = i841[11]
  return i840
}

Deserializers["FarmerPatientItem"] = function (request, data, root) {
  var i842 = root || request.c( 'FarmerPatientItem' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'farmerItemStackManager')
  i842.farmerState = i843[2]
  request.r(i843[3], i843[4], 0, i842, 'mAnimator')
  i842.npcType = i843[5]
  request.r(i843[6], i843[7], 0, i842, 'mCollider')
  request.r(i843[8], i843[9], 0, i842, 'mRigidbody')
  i842.mMoveSpeed = i843[10]
  i842.mTurnSmoothTime = i843[11]
  i842.currentState = i843[12]
  i842.itemType = i843[13]
  i842.movementEase = new pc.AnimationCurve( { keys_flow: i843[14] } )
  i842.stackHeight = i843[15]
  i842.itemWidth = i843[16]
  i842.value = i843[17]
  i842.harvestInterval = i843[18]
  return i842
}

Deserializers["AnimationInvoke"] = function (request, data, root) {
  var i844 = root || request.c( 'AnimationInvoke' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'enemy')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'animatorController')
  request.r(i847[2], i847[3], 0, i846, 'avatar')
  i846.updateMode = i847[4]
  i846.hasTransformHierarchy = !!i847[5]
  i846.applyRootMotion = !!i847[6]
  var i849 = i847[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.humanBones = i848
  i846.enabled = !!i847[8]
  return i846
}

Deserializers["ItemStackManager"] = function (request, data, root) {
  var i852 = root || request.c( 'ItemStackManager' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('ItemStack')))
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 1, i854, '')
  }
  i852.stackList = i854
  i852.startPosition = new pc.Vec3( i853[1], i853[2], i853[3] )
  i852.spacingDirection = new pc.Vec3( i853[4], i853[5], i853[6] )
  i852.amountOfStackInUse = i853[7]
  return i852
}

Deserializers["ItemStack"] = function (request, data, root) {
  var i858 = root || request.c( 'ItemStack' )
  var i859 = data
  i858.maxStackAmount = i859[0]
  i858.maxHeight = i859[1]
  i858.offsetRotation = new pc.Vec3( i859[2], i859[3], i859[4] )
  var i861 = i859[5]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i858.stackedItemList = i860
  i858.iscomplet_bend = !!i859[6]
  i858.iscomplet_origina = !!i859[7]
  i858.stackedItemType = i859[8]
  i858.isOpenBend = !!i859[9]
  i858.bendDistance = i859[10]
  i858.bendDuration = i859[11]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.radius = i865[3]
  i864.enabled = !!i865[4]
  i864.isTrigger = !!i865[5]
  request.r(i865[6], i865[7], 0, i864, 'material')
  return i864
}

Deserializers["FighterPatientItem"] = function (request, data, root) {
  var i866 = root || request.c( 'FighterPatientItem' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'mAttackCollider')
  request.r(i867[2], i867[3], 0, i866, 'attackRangeIndicator')
  request.r(i867[4], i867[5], 0, i866, 'mAnimator')
  i866.npcType = i867[6]
  request.r(i867[7], i867[8], 0, i866, 'mCollider')
  request.r(i867[9], i867[10], 0, i866, 'mRigidbody')
  i866.mMoveSpeed = i867[11]
  i866.mTurnSmoothTime = i867[12]
  i866.currentState = i867[13]
  i866.itemType = i867[14]
  i866.movementEase = new pc.AnimationCurve( { keys_flow: i867[15] } )
  i866.stackHeight = i867[16]
  i866.itemWidth = i867[17]
  i866.value = i867[18]
  i866.standMinRadius = i867[19]
  i866.standMaxRadius = i867[20]
  i866.standAngleRange = i867[21]
  i866.coinInterval = i867[22]
  i866.coinsPerDrop = i867[23]
  i866.fighterMaxHp = i867[24]
  i866.hpLossInterval = i867[25]
  i866.hpLossPercent = i867[26]
  i866.turnDuration = i867[27]
  return i866
}

Deserializers["Enemy"] = function (request, data, root) {
  var i868 = root || request.c( 'Enemy' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'attackCollider')
  request.r(i869[2], i869[3], 0, i868, 'alertCollider')
  i868.currentState = i869[4]
  i868.isDie = !!i869[5]
  i868.mHp = i869[6]
  i868.mHpMax = i869[7]
  i868.isSelect = !!i869[8]
  i868.shouldDropLoot = !!i869[9]
  i868.isStationary = !!i869[10]
  request.r(i869[11], i869[12], 0, i868, 'mAnimator')
  i868.npcType = i869[13]
  request.r(i869[14], i869[15], 0, i868, 'mCollider')
  request.r(i869[16], i869[17], 0, i868, 'mRigidbody')
  i868.mMoveSpeed = i869[18]
  i868.mTurnSmoothTime = i869[19]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i871 = data
  i870.pivot = new pc.Vec2( i871[0], i871[1] )
  i870.anchorMin = new pc.Vec2( i871[2], i871[3] )
  i870.anchorMax = new pc.Vec2( i871[4], i871[5] )
  i870.sizeDelta = new pc.Vec2( i871[6], i871[7] )
  i870.anchoredPosition3D = new pc.Vec3( i871[8], i871[9], i871[10] )
  i870.rotation = new pc.Quat(i871[11], i871[12], i871[13], i871[14])
  i870.scale = new pc.Vec3( i871[15], i871[16], i871[17] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i873 = data
  i872.cullTransparentMesh = !!i873[0]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i875 = data
  i874.m_Alpha = i875[0]
  i874.m_Interactable = !!i875[1]
  i874.m_BlocksRaycasts = !!i875[2]
  i874.m_IgnoreParentGroups = !!i875[3]
  i874.enabled = !!i875[4]
  return i874
}

Deserializers["UIHealthBar"] = function (request, data, root) {
  var i876 = root || request.c( 'UIHealthBar' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'fillImage')
  request.r(i877[2], i877[3], 0, i876, 'bufferFillImage')
  i876.fillAnimDuration = i877[4]
  i876.bufferDelay = i877[5]
  i876.bufferAnimDuration = i877[6]
  request.r(i877[7], i877[8], 0, i876, 'targetObject')
  request.r(i877[9], i877[10], 0, i876, 'canvasGroup')
  request.r(i877[11], i877[12], 0, i876, 'animationRoot')
  i876.worldOffset = new pc.Vec3( i877[13], i877[14], i877[15] )
  i876.cameraScaleFactor = i877[16]
  i876.showAnim = request.d('ShowAnimSettings', i877[17], i876.showAnim)
  i876.hideAnim = request.d('HideAnimSettings', i877[18], i876.hideAnim)
  i876.loopAnim = request.d('LoopAnimSettings', i877[19], i876.loopAnim)
  return i876
}

Deserializers["ShowAnimSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'ShowAnimSettings' )
  var i879 = data
  i878.animMode = i879[0]
  i878.scaleStart = i879[1]
  i878.scaleBounce = i879[2]
  i878.duration = i879[3]
  i878.fadeDuration = i879[4]
  i878.floatHeight = i879[5]
  i878.floatDuration = i879[6]
  return i878
}

Deserializers["HideAnimSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'HideAnimSettings' )
  var i881 = data
  i880.animMode = i881[0]
  i880.duration = i881[1]
  return i880
}

Deserializers["LoopAnimSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'LoopAnimSettings' )
  var i883 = data
  i882.animMode = i883[0]
  i882.scaleAmount = i883[1]
  i882.scaleDuration = i883[2]
  i882.floatHeight = i883[3]
  i882.floatDuration = i883[4]
  return i882
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Image' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_Sprite')
  i884.m_Type = i885[2]
  i884.m_PreserveAspect = !!i885[3]
  i884.m_FillCenter = !!i885[4]
  i884.m_FillMethod = i885[5]
  i884.m_FillAmount = i885[6]
  i884.m_FillClockwise = !!i885[7]
  i884.m_FillOrigin = i885[8]
  i884.m_UseSpriteMesh = !!i885[9]
  i884.m_PixelsPerUnitMultiplier = i885[10]
  request.r(i885[11], i885[12], 0, i884, 'm_Material')
  i884.m_Maskable = !!i885[13]
  i884.m_Color = new pc.Color(i885[14], i885[15], i885[16], i885[17])
  i884.m_RaycastTarget = !!i885[18]
  i884.m_RaycastPadding = new pc.Vec4( i885[19], i885[20], i885[21], i885[22] )
  return i884
}

Deserializers["PurchaseZone_Clerk"] = function (request, data, root) {
  var i886 = root || request.c( 'PurchaseZone_Clerk' )
  var i887 = data
  i886.completeAction = request.d('UnityEngine.Events.UnityEvent', i887[0], i886.completeAction)
  i886.id = i887[1]
  i886.price = i887[2]
  i886.requiredItemType = i887[3]
  i886.iscomplete = !!i887[4]
  i886.mPurchase = request.d('UnityEngine.Events.UnityEvent', i887[5], i886.mPurchase)
  i886.isCanBreath = !!i887[6]
  request.r(i887[7], i887[8], 0, i886, 'fillImage')
  request.r(i887[9], i887[10], 0, i886, 'remainTxt')
  request.r(i887[11], i887[12], 0, i886, 'borderNomal')
  request.r(i887[13], i887[14], 0, i886, 'contentHeighLight')
  request.r(i887[15], i887[16], 0, i886, 'borderNomoney')
  return i886
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i889 = data
  i888.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i889[0], i888.m_PersistentCalls)
  return i888
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.Events.PersistentCall', i893[i + 0]));
  }
  i890.m_Calls = i892
  return i890
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'm_Target')
  i896.m_TargetAssemblyTypeName = i897[2]
  i896.m_MethodName = i897[3]
  i896.m_Mode = i897[4]
  i896.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i897[5], i896.m_Arguments)
  i896.m_CallState = i897[6]
  return i896
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_ObjectArgument')
  i898.m_ObjectArgumentAssemblyTypeName = i899[2]
  i898.m_IntArgument = i899[3]
  i898.m_FloatArgument = i899[4]
  i898.m_StringArgument = i899[5]
  i898.m_BoolArgument = !!i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i901 = data
  i900.planeDistance = i901[0]
  i900.referencePixelsPerUnit = i901[1]
  i900.isFallbackOverlay = !!i901[2]
  i900.renderMode = i901[3]
  i900.renderOrder = i901[4]
  i900.sortingLayerName = i901[5]
  i900.sortingOrder = i901[6]
  i900.scaleFactor = i901[7]
  request.r(i901[8], i901[9], 0, i900, 'worldCamera')
  i900.overrideSorting = !!i901[10]
  i900.pixelPerfect = !!i901[11]
  i900.targetDisplay = i901[12]
  i900.overridePixelPerfect = !!i901[13]
  i900.enabled = !!i901[14]
  return i900
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i903 = data
  i902.m_UiScaleMode = i903[0]
  i902.m_ReferencePixelsPerUnit = i903[1]
  i902.m_ScaleFactor = i903[2]
  i902.m_ReferenceResolution = new pc.Vec2( i903[3], i903[4] )
  i902.m_ScreenMatchMode = i903[5]
  i902.m_MatchWidthOrHeight = i903[6]
  i902.m_PhysicalUnit = i903[7]
  i902.m_FallbackScreenDPI = i903[8]
  i902.m_DefaultSpriteDPI = i903[9]
  i902.m_DynamicPixelsPerUnit = i903[10]
  i902.m_PresetInfoIsWorld = !!i903[11]
  return i902
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i905 = data
  i904.m_IgnoreReversedGraphics = !!i905[0]
  i904.m_BlockingObjects = i905[1]
  i904.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i905[2] )
  return i904
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i907 = data
  i906.m_hasFontAssetChanged = !!i907[0]
  request.r(i907[1], i907[2], 0, i906, 'm_baseMaterial')
  i906.m_maskOffset = new pc.Vec4( i907[3], i907[4], i907[5], i907[6] )
  i906.m_text = i907[7]
  i906.m_isRightToLeft = !!i907[8]
  request.r(i907[9], i907[10], 0, i906, 'm_fontAsset')
  request.r(i907[11], i907[12], 0, i906, 'm_sharedMaterial')
  var i909 = i907[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.m_fontSharedMaterials = i908
  request.r(i907[14], i907[15], 0, i906, 'm_fontMaterial')
  var i911 = i907[16]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i906.m_fontMaterials = i910
  i906.m_fontColor32 = UnityEngine.Color32.ConstructColor(i907[17], i907[18], i907[19], i907[20])
  i906.m_fontColor = new pc.Color(i907[21], i907[22], i907[23], i907[24])
  i906.m_enableVertexGradient = !!i907[25]
  i906.m_colorMode = i907[26]
  i906.m_fontColorGradient = request.d('TMPro.VertexGradient', i907[27], i906.m_fontColorGradient)
  request.r(i907[28], i907[29], 0, i906, 'm_fontColorGradientPreset')
  request.r(i907[30], i907[31], 0, i906, 'm_spriteAsset')
  i906.m_tintAllSprites = !!i907[32]
  request.r(i907[33], i907[34], 0, i906, 'm_StyleSheet')
  i906.m_TextStyleHashCode = i907[35]
  i906.m_overrideHtmlColors = !!i907[36]
  i906.m_faceColor = UnityEngine.Color32.ConstructColor(i907[37], i907[38], i907[39], i907[40])
  i906.m_fontSize = i907[41]
  i906.m_fontSizeBase = i907[42]
  i906.m_fontWeight = i907[43]
  i906.m_enableAutoSizing = !!i907[44]
  i906.m_fontSizeMin = i907[45]
  i906.m_fontSizeMax = i907[46]
  i906.m_fontStyle = i907[47]
  i906.m_HorizontalAlignment = i907[48]
  i906.m_VerticalAlignment = i907[49]
  i906.m_textAlignment = i907[50]
  i906.m_characterSpacing = i907[51]
  i906.m_wordSpacing = i907[52]
  i906.m_lineSpacing = i907[53]
  i906.m_lineSpacingMax = i907[54]
  i906.m_paragraphSpacing = i907[55]
  i906.m_charWidthMaxAdj = i907[56]
  i906.m_enableWordWrapping = !!i907[57]
  i906.m_wordWrappingRatios = i907[58]
  i906.m_overflowMode = i907[59]
  request.r(i907[60], i907[61], 0, i906, 'm_linkedTextComponent')
  request.r(i907[62], i907[63], 0, i906, 'parentLinkedComponent')
  i906.m_enableKerning = !!i907[64]
  i906.m_enableExtraPadding = !!i907[65]
  i906.checkPaddingRequired = !!i907[66]
  i906.m_isRichText = !!i907[67]
  i906.m_parseCtrlCharacters = !!i907[68]
  i906.m_isOrthographic = !!i907[69]
  i906.m_isCullingEnabled = !!i907[70]
  i906.m_horizontalMapping = i907[71]
  i906.m_verticalMapping = i907[72]
  i906.m_uvLineOffset = i907[73]
  i906.m_geometrySortingOrder = i907[74]
  i906.m_IsTextObjectScaleStatic = !!i907[75]
  i906.m_VertexBufferAutoSizeReduction = !!i907[76]
  i906.m_useMaxVisibleDescender = !!i907[77]
  i906.m_pageToDisplay = i907[78]
  i906.m_margin = new pc.Vec4( i907[79], i907[80], i907[81], i907[82] )
  i906.m_isUsingLegacyAnimationComponent = !!i907[83]
  i906.m_isVolumetricText = !!i907[84]
  request.r(i907[85], i907[86], 0, i906, 'm_Material')
  i906.m_Maskable = !!i907[87]
  i906.m_Color = new pc.Color(i907[88], i907[89], i907[90], i907[91])
  i906.m_RaycastTarget = !!i907[92]
  i906.m_RaycastPadding = new pc.Vec4( i907[93], i907[94], i907[95], i907[96] )
  return i906
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.VertexGradient' )
  var i913 = data
  i912.topLeft = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.topRight = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.bottomLeft = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.bottomRight = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i915 = data
  i914.m_Spacing = i915[0]
  i914.m_ChildForceExpandWidth = !!i915[1]
  i914.m_ChildForceExpandHeight = !!i915[2]
  i914.m_ChildControlWidth = !!i915[3]
  i914.m_ChildControlHeight = !!i915[4]
  i914.m_ChildScaleWidth = !!i915[5]
  i914.m_ChildScaleHeight = !!i915[6]
  i914.m_ReverseArrangement = !!i915[7]
  i914.m_Padding = UnityEngine.RectOffset.FromPaddings(i915[8], i915[9], i915[10], i915[11])
  i914.m_ChildAlignment = i915[12]
  return i914
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i917 = data
  i916.m_HorizontalFit = i917[0]
  i916.m_VerticalFit = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i919 = data
  i918.name = i919[0]
  i918.index = i919[1]
  i918.startup = !!i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i921 = data
  i920.aspect = i921[0]
  i920.orthographic = !!i921[1]
  i920.orthographicSize = i921[2]
  i920.backgroundColor = new pc.Color(i921[3], i921[4], i921[5], i921[6])
  i920.nearClipPlane = i921[7]
  i920.farClipPlane = i921[8]
  i920.fieldOfView = i921[9]
  i920.depth = i921[10]
  i920.clearFlags = i921[11]
  i920.cullingMask = i921[12]
  i920.rect = i921[13]
  request.r(i921[14], i921[15], 0, i920, 'targetTexture')
  i920.usePhysicalProperties = !!i921[16]
  i920.focalLength = i921[17]
  i920.sensorSize = new pc.Vec2( i921[18], i921[19] )
  i920.lensShift = new pc.Vec2( i921[20], i921[21] )
  i920.gateFit = i921[22]
  i920.commandBufferCount = i921[23]
  i920.cameraType = i921[24]
  i920.enabled = !!i921[25]
  return i920
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i923 = data
  i922.m_RenderShadows = !!i923[0]
  i922.m_RequiresDepthTextureOption = i923[1]
  i922.m_RequiresOpaqueTextureOption = i923[2]
  i922.m_CameraType = i923[3]
  var i925 = i923[4]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 1, i924, '')
  }
  i922.m_Cameras = i924
  i922.m_RendererIndex = i923[5]
  i922.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i923[6] )
  request.r(i923[7], i923[8], 0, i922, 'm_VolumeTrigger')
  i922.m_VolumeFrameworkUpdateModeOption = i923[9]
  i922.m_RenderPostProcessing = !!i923[10]
  i922.m_Antialiasing = i923[11]
  i922.m_AntialiasingQuality = i923[12]
  i922.m_StopNaN = !!i923[13]
  i922.m_Dithering = !!i923[14]
  i922.m_ClearDepth = !!i923[15]
  i922.m_AllowXRRendering = !!i923[16]
  i922.m_AllowHDROutput = !!i923[17]
  i922.m_UseScreenCoordOverride = !!i923[18]
  i922.m_ScreenSizeOverride = new pc.Vec4( i923[19], i923[20], i923[21], i923[22] )
  i922.m_ScreenCoordScaleBias = new pc.Vec4( i923[23], i923[24], i923[25], i923[26] )
  i922.m_RequiresDepthTexture = !!i923[27]
  i922.m_RequiresColorTexture = !!i923[28]
  i922.m_Version = i923[29]
  i922.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i923[30], i922.m_TaaSettings)
  return i922
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i929 = data
  i928.m_Quality = i929[0]
  i928.m_FrameInfluence = i929[1]
  i928.m_JitterScale = i929[2]
  i928.m_MipBias = i929[3]
  i928.m_VarianceClampScale = i929[4]
  i928.m_ContrastAdaptiveSharpening = i929[5]
  return i928
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i930 = root || request.c( 'CameraManager' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'mCamera')
  i930.isCress = !!i931[2]
  i930.mCameraCressNum = i931[3]
  i930.mCameraVerNum = i931[4]
  i930.mCameraCressNumFar = i931[5]
  i930.mCameraVerNumFar = i931[6]
  i930.switchTimer = i931[7]
  i930.stayTimer = i931[8]
  var i933 = i931[9]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i930.forceCameras = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i935 = data
  i934.type = i935[0]
  i934.color = new pc.Color(i935[1], i935[2], i935[3], i935[4])
  i934.cullingMask = i935[5]
  i934.intensity = i935[6]
  i934.range = i935[7]
  i934.spotAngle = i935[8]
  i934.shadows = i935[9]
  i934.shadowNormalBias = i935[10]
  i934.shadowBias = i935[11]
  i934.shadowStrength = i935[12]
  i934.shadowResolution = i935[13]
  i934.lightmapBakeType = i935[14]
  i934.renderMode = i935[15]
  request.r(i935[16], i935[17], 0, i934, 'cookie')
  i934.cookieSize = i935[18]
  i934.shadowNearPlane = i935[19]
  i934.occlusionMaskChannel = i935[20]
  i934.enabled = !!i935[21]
  return i934
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i937 = data
  i936.m_Version = i937[0]
  i936.m_UsePipelineSettings = !!i937[1]
  i936.m_AdditionalLightsShadowResolutionTier = i937[2]
  i936.m_LightLayerMask = i937[3]
  i936.m_RenderingLayers = i937[4]
  i936.m_CustomShadowLayers = !!i937[5]
  i936.m_ShadowLayerMask = i937[6]
  i936.m_ShadowRenderingLayers = i937[7]
  i936.m_LightCookieSize = new pc.Vec2( i937[8], i937[9] )
  i936.m_LightCookieOffset = new pc.Vec2( i937[10], i937[11] )
  i936.m_SoftShadowQuality = i937[12]
  return i936
}

Deserializers["ObjectFX"] = function (request, data, root) {
  var i938 = root || request.c( 'ObjectFX' )
  var i939 = data
  i938.showEffectType = i939[0]
  i938.hideEffectType = i939[1]
  i938.duration = i939[2]
  i938.easeType = i939[3]
  i938.moveDistance = i939[4]
  i938.autoPlayOnEnable = !!i939[5]
  i938.onShowComplete = request.d('UnityEngine.Events.UnityEvent', i939[6], i938.onShowComplete)
  i938.onHideComplete = request.d('UnityEngine.Events.UnityEvent', i939[7], i938.onHideComplete)
  return i938
}

Deserializers["ClerkManager"] = function (request, data, root) {
  var i940 = root || request.c( 'ClerkManager' )
  var i941 = data
  var i943 = i941[0]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('PurchaseZone_Clerk')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i940.clerks = i942
  var i945 = i941[1]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i940.hideObjs = i944
  return i940
}

Deserializers["GuildManager"] = function (request, data, root) {
  var i950 = root || request.c( 'GuildManager' )
  var i951 = data
  return i950
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i952 = root || request.c( 'LunaManager' )
  var i953 = data
  i952.isGameStart = !!i953[0]
  i952.isGameOver = !!i953[1]
  return i952
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i954 = root || request.c( 'AudioManager' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'mBgm')
  request.r(i955[2], i955[3], 0, i954, 'mGoin')
  return i954
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i956 = root || request.c( 'PoolManager' )
  var i957 = data
  var i959 = i957[0]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i956.itemPrefabs = i958
  var i961 = i957[1]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('Npc')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i956.npcPrefabs = i960
  request.r(i957[2], i957[3], 0, i956, 'mEnemyHpPrefab')
  request.r(i957[4], i957[5], 0, i956, 'mFighterHpPrefab')
  return i956
}

Deserializers["NpcManagerOv"] = function (request, data, root) {
  var i964 = root || request.c( 'NpcManagerOv' )
  var i965 = data
  i964.maxPatienNum = i965[0]
  i964.maxFarmerPatienNum = i965[1]
  var i967 = i965[2]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i964.areaLst = i966
  request.r(i965[3], i965[4], 0, i964, 'fighterCoinStack')
  request.r(i965[5], i965[6], 0, i964, 'fighterStationRoot')
  request.r(i965[7], i965[8], 0, i964, 'enemyPathRoot')
  request.r(i965[9], i965[10], 0, i964, 'levelUpTf')
  var i969 = i965[11]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i964.mEnemies = i968
  var i971 = i965[12]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i964.mCustomerPath = i970
  var i973 = i965[13]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i964.mCustomerExitPath = i972
  i964.isUnlockFarmer = !!i965[14]
  return i964
}

Deserializers["Customer"] = function (request, data, root) {
  var i976 = root || request.c( 'Customer' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'mAnimator')
  i976.npcType = i977[2]
  request.r(i977[3], i977[4], 0, i976, 'mCollider')
  request.r(i977[5], i977[6], 0, i976, 'mRigidbody')
  i976.mMoveSpeed = i977[7]
  i976.mTurnSmoothTime = i977[8]
  return i976
}

Deserializers["PorterNpc"] = function (request, data, root) {
  var i978 = root || request.c( 'PorterNpc' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'loaderNpcPath')
  var i981 = i979[2]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('BedProcess')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i978.bedProcessList = i980
  request.r(i979[3], i979[4], 0, i978, 'itemStackManager')
  i978.loadUnloadDelay = i979[5]
  i978.itemDropOffTimer = i979[6]
  i978.itemDropOffCooldown = i979[7]
  request.r(i979[8], i979[9], 0, i978, 'mAnimator')
  i978.npcType = i979[10]
  request.r(i979[11], i979[12], 0, i978, 'mCollider')
  request.r(i979[13], i979[14], 0, i978, 'mRigidbody')
  i978.mMoveSpeed = i979[15]
  i978.mTurnSmoothTime = i979[16]
  return i978
}

Deserializers["ArrowsManager"] = function (request, data, root) {
  var i984 = root || request.c( 'ArrowsManager' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'lineMaterial')
  i984.lineWidth = i985[2]
  request.r(i985[3], i985[4], 0, i984, 'mArrowsParent')
  var i987 = i985[5]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.targets = i986
  i984.closeDistanceThreshold = i985[6]
  i984.yOffset = i985[7]
  request.r(i985[8], i985[9], 0, i984, 'playerTransform')
  i984.isCan = !!i985[10]
  return i984
}

Deserializers["UIManager"] = function (request, data, root) {
  var i988 = root || request.c( 'UIManager' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i988.mCress = i990
  var i993 = i989[1]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i988.mVer = i992
  var i995 = i989[2]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i988.mNumSprites = i994
  var i997 = i989[3]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i988.gold = i996
  request.r(i989[4], i989[5], 0, i988, 'mGoinUI')
  request.r(i989[6], i989[7], 0, i988, 'mCanvas')
  request.r(i989[8], i989[9], 0, i988, 'mDangerImage')
  i988.mIsDanger = !!i989[10]
  request.r(i989[11], i989[12], 0, i988, 'mEnemyHps')
  request.r(i989[13], i989[14], 0, i988, 'mCoinUI')
  return i988
}

Deserializers["MainPanel"] = function (request, data, root) {
  var i1002 = root || request.c( 'MainPanel' )
  var i1003 = data
  i1002.mTime = i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'Tip')
  request.r(i1003[3], i1003[4], 0, i1002, 'player')
  request.r(i1003[5], i1003[6], 0, i1002, 'joystickTip')
  return i1002
}

Deserializers["TouchArea"] = function (request, data, root) {
  var i1004 = root || request.c( 'TouchArea' )
  var i1005 = data
  i1004.mOutPos = new pc.Vec2( i1005[0], i1005[1] )
  request.r(i1005[2], i1005[3], 0, i1004, 'mJoystickBG')
  request.r(i1005[4], i1005[5], 0, i1004, 'mJoystickHandle')
  request.r(i1005[6], i1005[7], 0, i1004, 'mCanvasGp')
  i1004.IsTouching = !!i1005[8]
  i1004.mTime = i1005[9]
  return i1004
}

Deserializers["YangJoystick"] = function (request, data, root) {
  var i1006 = root || request.c( 'YangJoystick' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'BG')
  return i1006
}

Deserializers["UIBubbleExpression"] = function (request, data, root) {
  var i1008 = root || request.c( 'UIBubbleExpression' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'expressionImage')
  request.r(i1009[2], i1009[3], 0, i1008, 'defaultExpression')
  request.r(i1009[4], i1009[5], 0, i1008, 'happyExpression')
  request.r(i1009[6], i1009[7], 0, i1008, 'angryExpression')
  i1008.isAutoHide = !!i1009[8]
  i1008.autoHideDelay = i1009[9]
  request.r(i1009[10], i1009[11], 0, i1008, 'targetObject')
  request.r(i1009[12], i1009[13], 0, i1008, 'canvasGroup')
  request.r(i1009[14], i1009[15], 0, i1008, 'animationRoot')
  i1008.worldOffset = new pc.Vec3( i1009[16], i1009[17], i1009[18] )
  i1008.cameraScaleFactor = i1009[19]
  i1008.showAnim = request.d('ShowAnimSettings', i1009[20], i1008.showAnim)
  i1008.hideAnim = request.d('HideAnimSettings', i1009[21], i1008.hideAnim)
  i1008.loopAnim = request.d('LoopAnimSettings', i1009[22], i1008.loopAnim)
  return i1008
}

Deserializers["UIProgress"] = function (request, data, root) {
  var i1010 = root || request.c( 'UIProgress' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'progressFillImage')
  var i1013 = i1011[2]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 1, i1012, '')
  }
  i1010.numberImages = i1012
  i1010.progressAnimDuration = i1011[3]
  request.r(i1011[4], i1011[5], 0, i1010, 'targetObject')
  request.r(i1011[6], i1011[7], 0, i1010, 'canvasGroup')
  request.r(i1011[8], i1011[9], 0, i1010, 'animationRoot')
  i1010.worldOffset = new pc.Vec3( i1011[10], i1011[11], i1011[12] )
  i1010.cameraScaleFactor = i1011[13]
  i1010.showAnim = request.d('ShowAnimSettings', i1011[14], i1010.showAnim)
  i1010.hideAnim = request.d('HideAnimSettings', i1011[15], i1010.hideAnim)
  i1010.loopAnim = request.d('LoopAnimSettings', i1011[16], i1010.loopAnim)
  return i1010
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Button' )
  var i1015 = data
  i1014.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1015[0], i1014.m_OnClick)
  i1014.m_Navigation = request.d('UnityEngine.UI.Navigation', i1015[1], i1014.m_Navigation)
  i1014.m_Transition = i1015[2]
  i1014.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1015[3], i1014.m_Colors)
  i1014.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1015[4], i1014.m_SpriteState)
  i1014.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1015[5], i1014.m_AnimationTriggers)
  i1014.m_Interactable = !!i1015[6]
  request.r(i1015[7], i1015[8], 0, i1014, 'm_TargetGraphic')
  return i1014
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1017 = data
  i1016.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1017[0], i1016.m_PersistentCalls)
  return i1016
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1019 = data
  i1018.m_Mode = i1019[0]
  i1018.m_WrapAround = !!i1019[1]
  request.r(i1019[2], i1019[3], 0, i1018, 'm_SelectOnUp')
  request.r(i1019[4], i1019[5], 0, i1018, 'm_SelectOnDown')
  request.r(i1019[6], i1019[7], 0, i1018, 'm_SelectOnLeft')
  request.r(i1019[8], i1019[9], 0, i1018, 'm_SelectOnRight')
  return i1018
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1021 = data
  i1020.m_NormalColor = new pc.Color(i1021[0], i1021[1], i1021[2], i1021[3])
  i1020.m_HighlightedColor = new pc.Color(i1021[4], i1021[5], i1021[6], i1021[7])
  i1020.m_PressedColor = new pc.Color(i1021[8], i1021[9], i1021[10], i1021[11])
  i1020.m_SelectedColor = new pc.Color(i1021[12], i1021[13], i1021[14], i1021[15])
  i1020.m_DisabledColor = new pc.Color(i1021[16], i1021[17], i1021[18], i1021[19])
  i1020.m_ColorMultiplier = i1021[20]
  i1020.m_FadeDuration = i1021[21]
  return i1020
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'm_HighlightedSprite')
  request.r(i1023[2], i1023[3], 0, i1022, 'm_PressedSprite')
  request.r(i1023[4], i1023[5], 0, i1022, 'm_SelectedSprite')
  request.r(i1023[6], i1023[7], 0, i1022, 'm_DisabledSprite')
  return i1022
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1025 = data
  i1024.m_NormalTrigger = i1025[0]
  i1024.m_HighlightedTrigger = i1025[1]
  i1024.m_PressedTrigger = i1025[2]
  i1024.m_SelectedTrigger = i1025[3]
  i1024.m_DisabledTrigger = i1025[4]
  return i1024
}

Deserializers["Player"] = function (request, data, root) {
  var i1026 = root || request.c( 'Player' )
  var i1027 = data
  i1026.isStop = !!i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'mJoystick')
  request.r(i1027[3], i1027[4], 0, i1026, 'mRigidbody')
  i1026.mAngleDis = i1027[5]
  request.r(i1027[6], i1027[7], 0, i1026, 'mAnimator')
  request.r(i1027[8], i1027[9], 0, i1026, 'mCollider')
  i1026.mHp = i1027[10]
  i1026.mHpMax = i1027[11]
  request.r(i1027[12], i1027[13], 0, i1026, 'mHpUi')
  request.r(i1027[14], i1027[15], 0, i1026, 'itemStackManager')
  request.r(i1027[16], i1027[17], 0, i1026, 'targetGroundStackManager')
  i1026.itemDropOffTimer = i1027[18]
  i1026.itemDropOffCooldown = i1027[19]
  i1026.isDroppingOffItem = !!i1027[20]
  i1026.isCollectingItem = !!i1027[21]
  request.r(i1027[22], i1027[23], 0, i1026, 'maxImg')
  request.r(i1027[24], i1027[25], 0, i1026, 'mAttackCollider')
  request.r(i1027[26], i1027[27], 0, i1026, 'attackRangeIndicator')
  i1026.IsAtHome = !!i1027[28]
  return i1026
}

Deserializers["GameDataEditor"] = function (request, data, root) {
  var i1028 = root || request.c( 'GameDataEditor' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'gameConfig')
  i1028.playerSpeed = i1029[2]
  i1028.playerTurnSmoothTime = i1029[3]
  i1028.playerMaxHp = i1029[4]
  i1028.playerAamage = i1029[5]
  i1028.playerAttackInterval = i1029[6]
  i1028.playerAttackRadius = i1029[7]
  i1028.startAngle = i1029[8]
  i1028.endAngle = i1029[9]
  i1028.itemHeightY = i1029[10]
  i1028.enemyCount = i1029[11]
  i1028.enemySpeed = i1029[12]
  i1028.enemyKnockbackForc = i1029[13]
  i1028.enemyMaxHp = i1029[14]
  i1028.enemyAlertRadius = i1029[15]
  i1028.enemyAttackRadius = i1029[16]
  i1028.enemyAttackInterval = i1029[17]
  request.r(i1029[18], i1029[19], 0, i1028, 'patrolAreaMin')
  request.r(i1029[20], i1029[21], 0, i1028, 'patrolAreaMax')
  request.r(i1029[22], i1029[23], 0, i1028, 'enemyHurtMat')
  i1028.customerNeedCount = i1029[24]
  i1028.customerGiveGoin = i1029[25]
  i1028.itemSpawnInterval = i1029[26]
  i1028.enemyDropNum = i1029[27]
  i1028.enemyInitNum = i1029[28]
  return i1028
}

Deserializers["BedProcess"] = function (request, data, root) {
  var i1030 = root || request.c( 'BedProcess' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'moneyPos')
  request.r(i1031[2], i1031[3], 0, i1030, 'path')
  request.r(i1031[4], i1031[5], 0, i1030, 'doorPos')
  request.r(i1031[6], i1031[7], 0, i1030, 'groundItemStack')
  return i1030
}

Deserializers["GroundItemStackManager"] = function (request, data, root) {
  var i1032 = root || request.c( 'GroundItemStackManager' )
  var i1033 = data
  i1032.stackedItemType = i1033[0]
  var i1035 = i1033[1]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('GroundItemStack')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1032.stackList = i1034
  i1032.totalStackedItemsAmount = i1033[2]
  i1032.totalMaxAmount = i1033[3]
  i1032.stackItemAcion = request.d('UnityEngine.Events.UnityEvent', i1033[4], i1032.stackItemAcion)
  i1032.Test = !!i1033[5]
  request.r(i1033[6], i1033[7], 0, i1032, 'nomalSR')
  request.r(i1033[8], i1033[9], 0, i1032, 'heighLightSR')
  return i1032
}

Deserializers["GroundItemStack"] = function (request, data, root) {
  var i1038 = root || request.c( 'GroundItemStack' )
  var i1039 = data
  i1038.maxStackAmount = i1039[0]
  i1038.maxHeight = i1039[1]
  i1038.offsetRotation = new pc.Vec3( i1039[2], i1039[3], i1039[4] )
  var i1041 = i1039[5]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1038.stackedItemList = i1040
  i1038.iscomplet_bend = !!i1039[6]
  i1038.iscomplet_origina = !!i1039[7]
  i1038.stackedItemType = i1039[8]
  i1038.bendDistance = i1039[9]
  i1038.bendDuration = i1039[10]
  i1038.isOpenBend = !!i1039[11]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1043 = data
  i1042.color = new pc.Color(i1043[0], i1043[1], i1043[2], i1043[3])
  request.r(i1043[4], i1043[5], 0, i1042, 'sprite')
  i1042.flipX = !!i1043[6]
  i1042.flipY = !!i1043[7]
  i1042.drawMode = i1043[8]
  i1042.size = new pc.Vec2( i1043[9], i1043[10] )
  i1042.tileMode = i1043[11]
  i1042.adaptiveModeThreshold = i1043[12]
  i1042.maskInteraction = i1043[13]
  i1042.spriteSortPoint = i1043[14]
  i1042.enabled = !!i1043[15]
  request.r(i1043[16], i1043[17], 0, i1042, 'sharedMaterial')
  var i1045 = i1043[18]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 2, i1044, '')
  }
  i1042.sharedMaterials = i1044
  i1042.receiveShadows = !!i1043[19]
  i1042.shadowCastingMode = i1043[20]
  i1042.sortingLayerID = i1043[21]
  i1042.sortingOrder = i1043[22]
  i1042.lightmapIndex = i1043[23]
  i1042.lightmapSceneIndex = i1043[24]
  i1042.lightmapScaleOffset = new pc.Vec4( i1043[25], i1043[26], i1043[27], i1043[28] )
  i1042.lightProbeUsage = i1043[29]
  i1042.reflectionProbeUsage = i1043[30]
  return i1042
}

Deserializers["PatientInjection"] = function (request, data, root) {
  var i1046 = root || request.c( 'PatientInjection' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'itemGround')
  request.r(i1047[2], i1047[3], 0, i1046, 'nomalSR')
  request.r(i1047[4], i1047[5], 0, i1046, 'heighLightSR')
  request.r(i1047[6], i1047[7], 0, i1046, 'nurseNpc')
  return i1046
}

Deserializers["NurseNpc"] = function (request, data, root) {
  var i1048 = root || request.c( 'NurseNpc' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'mAnimator')
  i1048.npcType = i1049[2]
  request.r(i1049[3], i1049[4], 0, i1048, 'mCollider')
  request.r(i1049[5], i1049[6], 0, i1048, 'mRigidbody')
  i1048.mMoveSpeed = i1049[7]
  i1048.mTurnSmoothTime = i1049[8]
  return i1048
}

Deserializers["WheatManager"] = function (request, data, root) {
  var i1050 = root || request.c( 'WheatManager' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'topLeftPoint')
  request.r(i1051[2], i1051[3], 0, i1050, 'bottomRightPoint')
  i1050.xSpacing = i1051[4]
  i1050.zSpacing = i1051[5]
  return i1050
}

Deserializers["SoakManager"] = function (request, data, root) {
  var i1052 = root || request.c( 'SoakManager' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'poolStack')
  request.r(i1053[2], i1053[3], 0, i1052, 'wheatDeliveryStack')
  i1052.wheatPerPatient = i1053[4]
  i1052.wheatFlyDelay = i1053[5]
  request.r(i1053[6], i1053[7], 0, i1052, 'moneyDropPoint')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1055 = data
  i1054.ambientIntensity = i1055[0]
  i1054.reflectionIntensity = i1055[1]
  i1054.ambientMode = i1055[2]
  i1054.ambientLight = new pc.Color(i1055[3], i1055[4], i1055[5], i1055[6])
  i1054.ambientSkyColor = new pc.Color(i1055[7], i1055[8], i1055[9], i1055[10])
  i1054.ambientGroundColor = new pc.Color(i1055[11], i1055[12], i1055[13], i1055[14])
  i1054.ambientEquatorColor = new pc.Color(i1055[15], i1055[16], i1055[17], i1055[18])
  i1054.fogColor = new pc.Color(i1055[19], i1055[20], i1055[21], i1055[22])
  i1054.fogEndDistance = i1055[23]
  i1054.fogStartDistance = i1055[24]
  i1054.fogDensity = i1055[25]
  i1054.fog = !!i1055[26]
  request.r(i1055[27], i1055[28], 0, i1054, 'skybox')
  i1054.fogMode = i1055[29]
  var i1057 = i1055[30]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1057[i + 0]) );
  }
  i1054.lightmaps = i1056
  i1054.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1055[31], i1054.lightProbes)
  i1054.lightmapsMode = i1055[32]
  i1054.mixedBakeMode = i1055[33]
  i1054.environmentLightingMode = i1055[34]
  i1054.ambientProbe = new pc.SphericalHarmonicsL2(i1055[35])
  i1054.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1055[36])
  i1054.useReferenceAmbientProbe = !!i1055[37]
  request.r(i1055[38], i1055[39], 0, i1054, 'customReflection')
  request.r(i1055[40], i1055[41], 0, i1054, 'defaultReflection')
  i1054.defaultReflectionMode = i1055[42]
  i1054.defaultReflectionResolution = i1055[43]
  i1054.sunLightObjectId = i1055[44]
  i1054.pixelLightCount = i1055[45]
  i1054.defaultReflectionHDR = !!i1055[46]
  i1054.hasLightDataAsset = !!i1055[47]
  i1054.hasManualGenerate = !!i1055[48]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'lightmapColor')
  request.r(i1061[2], i1061[3], 0, i1060, 'lightmapDirection')
  request.r(i1061[4], i1061[5], 0, i1060, 'shadowMask')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1062 = root || new UnityEngine.LightProbes()
  var i1063 = data
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1071 = data
  i1070.AdditionalLightsRenderingMode = i1071[0]
  i1070.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1071[1], i1070.LightRenderingMode)
  i1070.MainLightRenderingModeValue = i1071[2]
  i1070.SupportsMainLightShadows = !!i1071[3]
  i1070.MainLightShadowmapResolutionValue = i1071[4]
  i1070.SupportsSoftShadows = !!i1071[5]
  i1070.SoftShadowQualityValue = i1071[6]
  i1070.ShadowDistance = i1071[7]
  i1070.ShadowCascadeCount = i1071[8]
  i1070.Cascade2Split = i1071[9]
  i1070.Cascade3Split = new pc.Vec2( i1071[10], i1071[11] )
  i1070.Cascade4Split = new pc.Vec3( i1071[12], i1071[13], i1071[14] )
  i1070.CascadeBorder = i1071[15]
  i1070.ShadowDepthBias = i1071[16]
  i1070.ShadowNormalBias = i1071[17]
  i1070.RequireDepthTexture = !!i1071[18]
  i1070.RequireOpaqueTexture = !!i1071[19]
  i1070.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1071[20], i1070.scriptableRendererData)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1073 = data
  i1072.Disabled = i1073[0]
  i1072.PerVertex = i1073[1]
  i1072.PerPixel = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1075 = data
  i1074.opaqueLayerMask = i1075[0]
  i1074.transparentLayerMask = i1075[1]
  var i1077 = i1075[2]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1077[i + 0]) );
  }
  i1074.RenderObjectsFeatures = i1076
  i1074.name = i1075[3]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1081 = data
  i1080.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1081[0], i1080.settings)
  i1080.name = i1081[1]
  i1080.typeName = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1085[i + 0]));
  }
  i1082.ShaderCompilationErrors = i1084
  i1082.name = i1083[1]
  i1082.guid = i1083[2]
  var i1087 = i1083[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.shaderDefinedKeywords = i1086
  var i1089 = i1083[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1089[i + 0]) );
  }
  i1082.passes = i1088
  var i1091 = i1083[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1091[i + 0]) );
  }
  i1082.usePasses = i1090
  var i1093 = i1083[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1093[i + 0]) );
  }
  i1082.defaultParameterValues = i1092
  request.r(i1083[7], i1083[8], 0, i1082, 'unityFallbackShader')
  i1082.readDepth = !!i1083[9]
  i1082.hasDepthOnlyPass = !!i1083[10]
  i1082.isCreatedByShaderGraph = !!i1083[11]
  i1082.disableBatching = !!i1083[12]
  i1082.compiled = !!i1083[13]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1097 = data
  i1096.shaderName = i1097[0]
  i1096.errorMessage = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1102 = root || new pc.UnityShaderPass()
  var i1103 = data
  i1102.id = i1103[0]
  i1102.subShaderIndex = i1103[1]
  i1102.name = i1103[2]
  i1102.passType = i1103[3]
  i1102.grabPassTextureName = i1103[4]
  i1102.usePass = !!i1103[5]
  i1102.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[6], i1102.zTest)
  i1102.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[7], i1102.zWrite)
  i1102.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[8], i1102.culling)
  i1102.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[9], i1102.blending)
  i1102.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[10], i1102.alphaBlending)
  i1102.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[11], i1102.colorWriteMask)
  i1102.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[12], i1102.offsetUnits)
  i1102.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[13], i1102.offsetFactor)
  i1102.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[14], i1102.stencilRef)
  i1102.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[15], i1102.stencilReadMask)
  i1102.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[16], i1102.stencilWriteMask)
  i1102.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[17], i1102.stencilOp)
  i1102.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[18], i1102.stencilOpFront)
  i1102.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[19], i1102.stencilOpBack)
  var i1105 = i1103[20]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1105[i + 0]) );
  }
  i1102.tags = i1104
  var i1107 = i1103[21]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.passDefinedKeywords = i1106
  var i1109 = i1103[22]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1109[i + 0]) );
  }
  i1102.passDefinedKeywordGroups = i1108
  var i1111 = i1103[23]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1111[i + 0]) );
  }
  i1102.variants = i1110
  var i1113 = i1103[24]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1113[i + 0]) );
  }
  i1102.excludedVariants = i1112
  i1102.hasDepthReader = !!i1103[25]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1115 = data
  i1114.val = i1115[0]
  i1114.name = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1117 = data
  i1116.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[0], i1116.src)
  i1116.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[1], i1116.dst)
  i1116.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[2], i1116.op)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1119 = data
  i1118.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[0], i1118.pass)
  i1118.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[1], i1118.fail)
  i1118.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[2], i1118.zFail)
  i1118.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[3], i1118.comp)
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.value = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.keywords = i1128
  i1126.hasDiscard = !!i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1133 = data
  i1132.passId = i1133[0]
  i1132.subShaderIndex = i1133[1]
  var i1135 = i1133[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1132.keywords = i1134
  i1132.vertexProgram = i1133[3]
  i1132.fragmentProgram = i1133[4]
  i1132.exportedForWebGl2 = !!i1133[5]
  i1132.readDepth = !!i1133[6]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'shader')
  i1138.pass = i1139[2]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.type = i1143[1]
  i1142.value = new pc.Vec4( i1143[2], i1143[3], i1143[4], i1143[5] )
  i1142.textureValue = i1143[6]
  i1142.shaderPropertyFlag = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1145 = data
  i1144.name = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'texture')
  i1144.aabb = i1145[3]
  i1144.vertices = i1145[4]
  i1144.triangles = i1145[5]
  i1144.textureRect = UnityEngine.Rect.MinMaxRect(i1145[6], i1145[7], i1145[8], i1145[9])
  i1144.packedRect = UnityEngine.Rect.MinMaxRect(i1145[10], i1145[11], i1145[12], i1145[13])
  i1144.border = new pc.Vec4( i1145[14], i1145[15], i1145[16], i1145[17] )
  i1144.transparency = i1145[18]
  i1144.bounds = i1145[19]
  i1144.pixelsPerUnit = i1145[20]
  i1144.textureWidth = i1145[21]
  i1144.textureHeight = i1145[22]
  i1144.nativeSize = new pc.Vec2( i1145[23], i1145[24] )
  i1144.pivot = new pc.Vec2( i1145[25], i1145[26] )
  i1144.textureRectOffset = new pc.Vec2( i1145[27], i1145[28] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.wrapMode = i1147[1]
  i1146.isLooping = !!i1147[2]
  i1146.length = i1147[3]
  var i1149 = i1147[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1149[i + 0]) );
  }
  i1146.curves = i1148
  var i1151 = i1147[5]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1151[i + 0]) );
  }
  i1146.events = i1150
  i1146.halfPrecision = !!i1147[6]
  i1146._frameRate = i1147[7]
  i1146.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1147[8], i1146.localBounds)
  i1146.hasMuscleCurves = !!i1147[9]
  var i1153 = i1147[10]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1146.clipMuscleConstant = i1152
  i1146.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1147[11], i1146.clipBindingConstant)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1157 = data
  i1156.path = i1157[0]
  i1156.hash = i1157[1]
  i1156.componentType = i1157[2]
  i1156.property = i1157[3]
  i1156.keys = i1157[4]
  var i1159 = i1157[5]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1159[i + 0]) );
  }
  i1156.objectReferenceKeys = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1163 = data
  i1162.functionName = i1163[0]
  i1162.floatParameter = i1163[1]
  i1162.intParameter = i1163[2]
  i1162.stringParameter = i1163[3]
  request.r(i1163[4], i1163[5], 0, i1162, 'objectReferenceParameter')
  i1162.time = i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1165 = data
  i1164.center = new pc.Vec3( i1165[0], i1165[1], i1165[2] )
  i1164.extends = new pc.Vec3( i1165[3], i1165[4], i1165[5] )
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1168.genericBindings = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1168.pptrCurveMapping = i1172
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1177 = data
  i1176.time = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'value')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.ascent = i1179[1]
  i1178.originalLineHeight = i1179[2]
  i1178.fontSize = i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1181[i + 0]) );
  }
  i1178.characterInfo = i1180
  request.r(i1179[5], i1179[6], 0, i1178, 'texture')
  i1178.originalFontSize = i1179[7]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1185 = data
  i1184.index = i1185[0]
  i1184.advance = i1185[1]
  i1184.bearing = i1185[2]
  i1184.glyphWidth = i1185[3]
  i1184.glyphHeight = i1185[4]
  i1184.minX = i1185[5]
  i1184.maxX = i1185[6]
  i1184.minY = i1185[7]
  i1184.maxY = i1185[8]
  i1184.uvBottomLeftX = i1185[9]
  i1184.uvBottomLeftY = i1185[10]
  i1184.uvBottomRightX = i1185[11]
  i1184.uvBottomRightY = i1185[12]
  i1184.uvTopLeftX = i1185[13]
  i1184.uvTopLeftY = i1185[14]
  i1184.uvTopRightX = i1185[15]
  i1184.uvTopRightY = i1185[16]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1187 = data
  i1186.name = i1187[0]
  var i1189 = i1187[1]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1189[i + 0]) );
  }
  i1186.layers = i1188
  var i1191 = i1187[2]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1191[i + 0]) );
  }
  i1186.parameters = i1190
  i1186.animationClips = i1187[3]
  i1186.avatarUnsupported = i1187[4]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.defaultWeight = i1195[1]
  i1194.blendingMode = i1195[2]
  i1194.avatarMask = i1195[3]
  i1194.syncedLayerIndex = i1195[4]
  i1194.syncedLayerAffectsTiming = !!i1195[5]
  i1194.syncedLayers = i1195[6]
  i1194.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1195[7], i1194.stateMachine)
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.name = i1197[1]
  i1196.path = i1197[2]
  var i1199 = i1197[3]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1199[i + 0]) );
  }
  i1196.states = i1198
  var i1201 = i1197[4]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1201[i + 0]) );
  }
  i1196.machines = i1200
  var i1203 = i1197[5]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1203[i + 0]) );
  }
  i1196.entryStateTransitions = i1202
  var i1205 = i1197[6]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1205[i + 0]) );
  }
  i1196.exitStateTransitions = i1204
  var i1207 = i1197[7]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1207[i + 0]) );
  }
  i1196.anyStateTransitions = i1206
  i1196.defaultStateId = i1197[8]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1211 = data
  i1210.id = i1211[0]
  i1210.name = i1211[1]
  i1210.cycleOffset = i1211[2]
  i1210.cycleOffsetParameter = i1211[3]
  i1210.cycleOffsetParameterActive = !!i1211[4]
  i1210.mirror = !!i1211[5]
  i1210.mirrorParameter = i1211[6]
  i1210.mirrorParameterActive = !!i1211[7]
  i1210.motionId = i1211[8]
  i1210.nameHash = i1211[9]
  i1210.fullPathHash = i1211[10]
  i1210.speed = i1211[11]
  i1210.speedParameter = i1211[12]
  i1210.speedParameterActive = !!i1211[13]
  i1210.tag = i1211[14]
  i1210.tagHash = i1211[15]
  i1210.writeDefaultValues = !!i1211[16]
  var i1213 = i1211[17]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 2, i1212, '')
  }
  i1210.behaviours = i1212
  var i1215 = i1211[18]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1215[i + 0]) );
  }
  i1210.transitions = i1214
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1221 = data
  i1220.fullPath = i1221[0]
  i1220.canTransitionToSelf = !!i1221[1]
  i1220.duration = i1221[2]
  i1220.exitTime = i1221[3]
  i1220.hasExitTime = !!i1221[4]
  i1220.hasFixedDuration = !!i1221[5]
  i1220.interruptionSource = i1221[6]
  i1220.offset = i1221[7]
  i1220.orderedInterruption = !!i1221[8]
  i1220.destinationStateId = i1221[9]
  i1220.isExit = !!i1221[10]
  i1220.mute = !!i1221[11]
  i1220.solo = !!i1221[12]
  var i1223 = i1221[13]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1223[i + 0]) );
  }
  i1220.conditions = i1222
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1227 = data
  i1226.mode = i1227[0]
  i1226.parameter = i1227[1]
  i1226.threshold = i1227[2]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1233 = data
  i1232.destinationStateId = i1233[0]
  i1232.isExit = !!i1233[1]
  i1232.mute = !!i1233[2]
  i1232.solo = !!i1233[3]
  var i1235 = i1233[4]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1235[i + 0]) );
  }
  i1232.conditions = i1234
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1239 = data
  i1238.defaultBool = !!i1239[0]
  i1238.defaultFloat = i1239[1]
  i1238.defaultInt = i1239[2]
  i1238.name = i1239[3]
  i1238.nameHash = i1239[4]
  i1238.type = i1239[5]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.bytes64 = i1241[1]
  i1240.data = i1241[2]
  return i1240
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'atlas')
  i1242.normalStyle = i1243[2]
  i1242.normalSpacingOffset = i1243[3]
  i1242.boldStyle = i1243[4]
  i1242.boldSpacing = i1243[5]
  i1242.italicStyle = i1243[6]
  i1242.tabSize = i1243[7]
  i1242.hashCode = i1243[8]
  request.r(i1243[9], i1243[10], 0, i1242, 'material')
  i1242.materialHashCode = i1243[11]
  i1242.m_Version = i1243[12]
  i1242.m_SourceFontFileGUID = i1243[13]
  request.r(i1243[14], i1243[15], 0, i1242, 'm_SourceFontFile_EditorRef')
  request.r(i1243[16], i1243[17], 0, i1242, 'm_SourceFontFile')
  i1242.m_AtlasPopulationMode = i1243[18]
  i1242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1243[19], i1242.m_FaceInfo)
  var i1245 = i1243[20]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('UnityEngine.TextCore.Glyph', i1245[i + 0]));
  }
  i1242.m_GlyphTable = i1244
  var i1247 = i1243[21]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_Character', i1247[i + 0]));
  }
  i1242.m_CharacterTable = i1246
  var i1249 = i1243[22]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1242.m_AtlasTextures = i1248
  i1242.m_AtlasTextureIndex = i1243[23]
  i1242.m_IsMultiAtlasTexturesEnabled = !!i1243[24]
  i1242.m_ClearDynamicDataOnBuild = !!i1243[25]
  var i1251 = i1243[26]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.GlyphRect', i1251[i + 0]));
  }
  i1242.m_UsedGlyphRects = i1250
  var i1253 = i1243[27]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('UnityEngine.TextCore.GlyphRect', i1253[i + 0]));
  }
  i1242.m_FreeGlyphRects = i1252
  i1242.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1243[28], i1242.m_fontInfo)
  i1242.m_AtlasWidth = i1243[29]
  i1242.m_AtlasHeight = i1243[30]
  i1242.m_AtlasPadding = i1243[31]
  i1242.m_AtlasRenderMode = i1243[32]
  var i1255 = i1243[33]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.TMP_Glyph', i1255[i + 0]));
  }
  i1242.m_glyphInfoList = i1254
  i1242.m_KerningTable = request.d('TMPro.KerningTable', i1243[34], i1242.m_KerningTable)
  i1242.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1243[35], i1242.m_FontFeatureTable)
  var i1257 = i1243[36]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 1, i1256, '')
  }
  i1242.fallbackFontAssets = i1256
  var i1259 = i1243[37]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1242.m_FallbackFontAssetTable = i1258
  i1242.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1243[38], i1242.m_CreationSettings)
  var i1261 = i1243[39]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('TMPro.TMP_FontWeightPair', i1261[i + 0]) );
  }
  i1242.m_FontWeightTable = i1260
  var i1263 = i1243[40]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('TMPro.TMP_FontWeightPair', i1263[i + 0]) );
  }
  i1242.fontWeights = i1262
  return i1242
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1265 = data
  i1264.m_FaceIndex = i1265[0]
  i1264.m_FamilyName = i1265[1]
  i1264.m_StyleName = i1265[2]
  i1264.m_PointSize = i1265[3]
  i1264.m_Scale = i1265[4]
  i1264.m_UnitsPerEM = i1265[5]
  i1264.m_LineHeight = i1265[6]
  i1264.m_AscentLine = i1265[7]
  i1264.m_CapLine = i1265[8]
  i1264.m_MeanLine = i1265[9]
  i1264.m_Baseline = i1265[10]
  i1264.m_DescentLine = i1265[11]
  i1264.m_SuperscriptOffset = i1265[12]
  i1264.m_SuperscriptSize = i1265[13]
  i1264.m_SubscriptOffset = i1265[14]
  i1264.m_SubscriptSize = i1265[15]
  i1264.m_UnderlineOffset = i1265[16]
  i1264.m_UnderlineThickness = i1265[17]
  i1264.m_StrikethroughOffset = i1265[18]
  i1264.m_StrikethroughThickness = i1265[19]
  i1264.m_TabWidth = i1265[20]
  return i1264
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1269 = data
  i1268.m_Index = i1269[0]
  i1268.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1269[1], i1268.m_Metrics)
  i1268.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1269[2], i1268.m_GlyphRect)
  i1268.m_Scale = i1269[3]
  i1268.m_AtlasIndex = i1269[4]
  i1268.m_ClassDefinitionType = i1269[5]
  return i1268
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1271 = data
  i1270.m_Width = i1271[0]
  i1270.m_Height = i1271[1]
  i1270.m_HorizontalBearingX = i1271[2]
  i1270.m_HorizontalBearingY = i1271[3]
  i1270.m_HorizontalAdvance = i1271[4]
  return i1270
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1273 = data
  i1272.m_X = i1273[0]
  i1272.m_Y = i1273[1]
  i1272.m_Width = i1273[2]
  i1272.m_Height = i1273[3]
  return i1272
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_Character' )
  var i1277 = data
  i1276.m_ElementType = i1277[0]
  i1276.m_Unicode = i1277[1]
  i1276.m_GlyphIndex = i1277[2]
  i1276.m_Scale = i1277[3]
  return i1276
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1283 = data
  i1282.Name = i1283[0]
  i1282.PointSize = i1283[1]
  i1282.Scale = i1283[2]
  i1282.CharacterCount = i1283[3]
  i1282.LineHeight = i1283[4]
  i1282.Baseline = i1283[5]
  i1282.Ascender = i1283[6]
  i1282.CapHeight = i1283[7]
  i1282.Descender = i1283[8]
  i1282.CenterLine = i1283[9]
  i1282.SuperscriptOffset = i1283[10]
  i1282.SubscriptOffset = i1283[11]
  i1282.SubSize = i1283[12]
  i1282.Underline = i1283[13]
  i1282.UnderlineThickness = i1283[14]
  i1282.strikethrough = i1283[15]
  i1282.strikethroughThickness = i1283[16]
  i1282.TabWidth = i1283[17]
  i1282.Padding = i1283[18]
  i1282.AtlasWidth = i1283[19]
  i1282.AtlasHeight = i1283[20]
  return i1282
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.x = i1287[1]
  i1286.y = i1287[2]
  i1286.width = i1287[3]
  i1286.height = i1287[4]
  i1286.xOffset = i1287[5]
  i1286.yOffset = i1287[6]
  i1286.xAdvance = i1287[7]
  i1286.scale = i1287[8]
  return i1286
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.KerningTable' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.KerningPair', i1291[i + 0]));
  }
  i1288.kerningPairs = i1290
  return i1288
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.KerningPair' )
  var i1295 = data
  i1294.xOffset = i1295[0]
  i1294.m_FirstGlyph = i1295[1]
  i1294.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[2], i1294.m_FirstGlyphAdjustments)
  i1294.m_SecondGlyph = i1295[3]
  i1294.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[4], i1294.m_SecondGlyphAdjustments)
  i1294.m_IgnoreSpacingAdjustments = !!i1295[5]
  return i1294
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1299[i + 0]));
  }
  i1296.m_GlyphPairAdjustmentRecords = i1298
  return i1296
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1303 = data
  i1302.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1303[0], i1302.m_FirstAdjustmentRecord)
  i1302.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1303[1], i1302.m_SecondAdjustmentRecord)
  i1302.m_FeatureLookupFlags = i1303[2]
  return i1302
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1305 = data
  i1304.m_GlyphIndex = i1305[0]
  i1304.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1305[1], i1304.m_GlyphValueRecord)
  return i1304
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1307 = data
  i1306.m_XPlacement = i1307[0]
  i1306.m_YPlacement = i1307[1]
  i1306.m_XAdvance = i1307[2]
  i1306.m_YAdvance = i1307[3]
  return i1306
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1311 = data
  i1310.sourceFontFileName = i1311[0]
  i1310.sourceFontFileGUID = i1311[1]
  i1310.pointSizeSamplingMode = i1311[2]
  i1310.pointSize = i1311[3]
  i1310.padding = i1311[4]
  i1310.packingMode = i1311[5]
  i1310.atlasWidth = i1311[6]
  i1310.atlasHeight = i1311[7]
  i1310.characterSetSelectionMode = i1311[8]
  i1310.characterSequence = i1311[9]
  i1310.referencedFontAssetGUID = i1311[10]
  i1310.referencedTextAssetGUID = i1311[11]
  i1310.fontStyle = i1311[12]
  i1310.fontStyleModifier = i1311[13]
  i1310.renderMode = i1311[14]
  i1310.includeFontFeatures = !!i1311[15]
  return i1310
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'regularTypeface')
  request.r(i1315[2], i1315[3], 0, i1314, 'italicTypeface')
  return i1314
}

Deserializers["ExcelTool.GameConfig"] = function (request, data, root) {
  var i1316 = root || request.c( 'ExcelTool.GameConfig' )
  var i1317 = data
  i1316._excelFilePath = i1317[0]
  i1316._sheetIndices = i1317[1]
  i1316.玩家数据 = request.d('ExcelTool.GameConfig+玩家数据Data', i1317[2], i1316.玩家数据)
  i1316.老鼠数据 = request.d('ExcelTool.GameConfig+老鼠数据Data', i1317[3], i1316.老鼠数据)
  i1316.其他配置 = request.d('ExcelTool.GameConfig+其他配置Data', i1317[4], i1316.其他配置)
  var i1319 = i1317[5]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('ExcelTool.GameConfig+ClerkInfoItem')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('ExcelTool.GameConfig+ClerkInfoItem', i1319[i + 0]));
  }
  i1316.clerkInfo = i1318
  var i1321 = i1317[6]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('ExcelTool.GameConfig+GuildInfoItem')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('ExcelTool.GameConfig+GuildInfoItem', i1321[i + 0]));
  }
  i1316.guildInfo = i1320
  return i1316
}

Deserializers["ExcelTool.GameConfig+玩家数据Data"] = function (request, data, root) {
  var i1322 = root || request.c( 'ExcelTool.GameConfig+玩家数据Data' )
  var i1323 = data
  i1322.playerSpeed = i1323[0]
  i1322.playerTurnSmoothTime = i1323[1]
  i1322.playerMaxHp = i1323[2]
  return i1322
}

Deserializers["ExcelTool.GameConfig+老鼠数据Data"] = function (request, data, root) {
  var i1324 = root || request.c( 'ExcelTool.GameConfig+老鼠数据Data' )
  var i1325 = data
  i1324.enemyCount = i1325[0]
  i1324.enemySpeed = i1325[1]
  i1324.enemyKnockbackForc = i1325[2]
  i1324.enemyDropMoney = i1325[3]
  i1324.enemyInitNum = i1325[4]
  return i1324
}

Deserializers["ExcelTool.GameConfig+其他配置Data"] = function (request, data, root) {
  var i1326 = root || request.c( 'ExcelTool.GameConfig+其他配置Data' )
  var i1327 = data
  i1326.wheatTime = i1327[0]
  i1326.patientNum = i1327[1]
  i1326.farmerPatientNum = i1327[2]
  i1326.elevatorTime = i1327[3]
  i1326.patienMoney = i1327[4]
  i1326.farmerPatienMoney = i1327[5]
  i1326.wheatPerPatient = i1327[6]
  i1326.maxPatient1 = i1327[7]
  i1326.maxPatient2 = i1327[8]
  i1326.maxPatient3 = i1327[9]
  i1326.moneyValue = i1327[10]
  i1326.collectTime = i1327[11]
  i1326.collectNum = i1327[12]
  i1326.HpTime = i1327[13]
  i1326.HpPecent = i1327[14]
  i1326.maxPatienNum = i1327[15]
  i1326.maxfarmerPatienNum = i1327[16]
  i1326.maxSoakNum = i1327[17]
  i1326.maxElevatorNum = i1327[18]
  return i1326
}

Deserializers["ExcelTool.GameConfig+ClerkInfoItem"] = function (request, data, root) {
  var i1330 = root || request.c( 'ExcelTool.GameConfig+ClerkInfoItem' )
  var i1331 = data
  i1330.id = i1331[0]
  i1330.getTotalCoin = i1331[1]
  var i1333 = i1331[2]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(i1333[i + 0]);
  }
  i1330.unlockIds = i1332
  i1330.price = i1331[3]
  i1330.eventStr = i1331[4]
  return i1330
}

Deserializers["ExcelTool.GameConfig+GuildInfoItem"] = function (request, data, root) {
  var i1338 = root || request.c( 'ExcelTool.GameConfig+GuildInfoItem' )
  var i1339 = data
  i1338.id = i1339[0]
  i1338.priority = i1339[1]
  i1338.triggerType = i1339[2]
  i1338.triggerNum = i1339[3]
  i1338.triggerName = i1339[4]
  i1338.hideType = i1339[5]
  i1338.hideNum = i1339[6]
  i1338.hideName = i1339[7]
  return i1338
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1341 = data
  i1340.useSafeMode = !!i1341[0]
  i1340.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1341[1], i1340.safeModeOptions)
  i1340.timeScale = i1341[2]
  i1340.unscaledTimeScale = i1341[3]
  i1340.useSmoothDeltaTime = !!i1341[4]
  i1340.maxSmoothUnscaledTime = i1341[5]
  i1340.rewindCallbackMode = i1341[6]
  i1340.showUnityEditorReport = !!i1341[7]
  i1340.logBehaviour = i1341[8]
  i1340.drawGizmos = !!i1341[9]
  i1340.defaultRecyclable = !!i1341[10]
  i1340.defaultAutoPlay = i1341[11]
  i1340.defaultUpdateType = i1341[12]
  i1340.defaultTimeScaleIndependent = !!i1341[13]
  i1340.defaultEaseType = i1341[14]
  i1340.defaultEaseOvershootOrAmplitude = i1341[15]
  i1340.defaultEasePeriod = i1341[16]
  i1340.defaultAutoKill = !!i1341[17]
  i1340.defaultLoopType = i1341[18]
  i1340.debugMode = !!i1341[19]
  i1340.debugStoreTargetId = !!i1341[20]
  i1340.showPreviewPanel = !!i1341[21]
  i1340.storeSettingsLocation = i1341[22]
  i1340.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1341[23], i1340.modules)
  i1340.createASMDEF = !!i1341[24]
  i1340.showPlayingTweens = !!i1341[25]
  i1340.showPausedTweens = !!i1341[26]
  return i1340
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1343 = data
  i1342.logBehaviour = i1343[0]
  i1342.nestedTweenFailureBehaviour = i1343[1]
  return i1342
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1344 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1345 = data
  i1344.showPanel = !!i1345[0]
  i1344.audioEnabled = !!i1345[1]
  i1344.physicsEnabled = !!i1345[2]
  i1344.physics2DEnabled = !!i1345[3]
  i1344.spriteEnabled = !!i1345[4]
  i1344.uiEnabled = !!i1345[5]
  i1344.textMeshProEnabled = !!i1345[6]
  i1344.tk2DEnabled = !!i1345[7]
  i1344.deAudioEnabled = !!i1345[8]
  i1344.deUnityExtendedEnabled = !!i1345[9]
  i1344.epoOutlineEnabled = !!i1345[10]
  return i1344
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Settings' )
  var i1347 = data
  i1346.m_enableWordWrapping = !!i1347[0]
  i1346.m_enableKerning = !!i1347[1]
  i1346.m_enableExtraPadding = !!i1347[2]
  i1346.m_enableTintAllSprites = !!i1347[3]
  i1346.m_enableParseEscapeCharacters = !!i1347[4]
  i1346.m_EnableRaycastTarget = !!i1347[5]
  i1346.m_GetFontFeaturesAtRuntime = !!i1347[6]
  i1346.m_missingGlyphCharacter = i1347[7]
  i1346.m_warningsDisabled = !!i1347[8]
  request.r(i1347[9], i1347[10], 0, i1346, 'm_defaultFontAsset')
  i1346.m_defaultFontAssetPath = i1347[11]
  i1346.m_defaultFontSize = i1347[12]
  i1346.m_defaultAutoSizeMinRatio = i1347[13]
  i1346.m_defaultAutoSizeMaxRatio = i1347[14]
  i1346.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1347[15], i1347[16] )
  i1346.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1347[17], i1347[18] )
  i1346.m_autoSizeTextContainer = !!i1347[19]
  i1346.m_IsTextObjectScaleStatic = !!i1347[20]
  var i1349 = i1347[21]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1346.m_fallbackFontAssets = i1348
  i1346.m_matchMaterialPreset = !!i1347[22]
  request.r(i1347[23], i1347[24], 0, i1346, 'm_defaultSpriteAsset')
  i1346.m_defaultSpriteAssetPath = i1347[25]
  i1346.m_enableEmojiSupport = !!i1347[26]
  i1346.m_MissingCharacterSpriteUnicode = i1347[27]
  i1346.m_defaultColorGradientPresetsPath = i1347[28]
  request.r(i1347[29], i1347[30], 0, i1346, 'm_defaultStyleSheet')
  i1346.m_StyleSheetsResourcePath = i1347[31]
  request.r(i1347[32], i1347[33], 0, i1346, 'm_leadingCharacters')
  request.r(i1347[34], i1347[35], 0, i1346, 'm_followingCharacters')
  i1346.m_UseModernHangulLineBreakingRules = !!i1347[36]
  return i1346
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'spriteSheet')
  var i1353 = i1351[2]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.add(request.d('TMPro.TMP_Sprite', i1353[i + 0]));
  }
  i1350.spriteInfoList = i1352
  var i1355 = i1351[3]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1350.fallbackSpriteAssets = i1354
  i1350.hashCode = i1351[4]
  request.r(i1351[5], i1351[6], 0, i1350, 'material')
  i1350.materialHashCode = i1351[7]
  i1350.m_Version = i1351[8]
  i1350.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1351[9], i1350.m_FaceInfo)
  var i1357 = i1351[10]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteCharacter', i1357[i + 0]));
  }
  i1350.m_SpriteCharacterTable = i1356
  var i1359 = i1351[11]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.add(request.d('TMPro.TMP_SpriteGlyph', i1359[i + 0]));
  }
  i1350.m_SpriteGlyphTable = i1358
  return i1350
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.hashCode = i1363[1]
  i1362.unicode = i1363[2]
  i1362.pivot = new pc.Vec2( i1363[3], i1363[4] )
  request.r(i1363[5], i1363[6], 0, i1362, 'sprite')
  i1362.id = i1363[7]
  i1362.x = i1363[8]
  i1362.y = i1363[9]
  i1362.width = i1363[10]
  i1362.height = i1363[11]
  i1362.xOffset = i1363[12]
  i1362.yOffset = i1363[13]
  i1362.xAdvance = i1363[14]
  i1362.scale = i1363[15]
  return i1362
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_HashCode = i1369[1]
  i1368.m_ElementType = i1369[2]
  i1368.m_Unicode = i1369[3]
  i1368.m_GlyphIndex = i1369[4]
  i1368.m_Scale = i1369[5]
  return i1368
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'sprite')
  i1372.m_Index = i1373[2]
  i1372.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1373[3], i1372.m_Metrics)
  i1372.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1373[4], i1372.m_GlyphRect)
  i1372.m_Scale = i1373[5]
  i1372.m_AtlasIndex = i1373[6]
  i1372.m_ClassDefinitionType = i1373[7]
  return i1372
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('TMPro.TMP_Style', i1377[i + 0]));
  }
  i1374.m_StyleList = i1376
  return i1374
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1380 = root || request.c( 'TMPro.TMP_Style' )
  var i1381 = data
  i1380.m_Name = i1381[0]
  i1380.m_HashCode = i1381[1]
  i1380.m_OpeningDefinition = i1381[2]
  i1380.m_ClosingDefinition = i1381[3]
  i1380.m_OpeningTagArray = i1381[4]
  i1380.m_ClosingTagArray = i1381[5]
  i1380.m_OpeningTagUnicodeArray = i1381[6]
  i1380.m_ClosingTagUnicodeArray = i1381[7]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1385[i + 0]) );
  }
  i1382.files = i1384
  i1382.componentToPrefabIds = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1389 = data
  i1388.path = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'unityObject')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1393[i + 0]) );
  }
  i1390.scriptsExecutionOrder = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1395[i + 0]) );
  }
  i1390.sortingLayers = i1394
  var i1397 = i1391[2]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1397[i + 0]) );
  }
  i1390.cullingLayers = i1396
  i1390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1391[3], i1390.timeSettings)
  i1390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1391[4], i1390.physicsSettings)
  i1390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1391[5], i1390.physics2DSettings)
  i1390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1391[6], i1390.qualitySettings)
  i1390.enableRealtimeShadows = !!i1391[7]
  i1390.enableAutoInstancing = !!i1391[8]
  i1390.enableStaticBatching = !!i1391[9]
  i1390.enableDynamicBatching = !!i1391[10]
  i1390.lightmapEncodingQuality = i1391[11]
  i1390.desiredColorSpace = i1391[12]
  var i1399 = i1391[13]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1390.allTags = i1398
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.value = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1407 = data
  i1406.id = i1407[0]
  i1406.name = i1407[1]
  i1406.value = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1413 = data
  i1412.fixedDeltaTime = i1413[0]
  i1412.maximumDeltaTime = i1413[1]
  i1412.timeScale = i1413[2]
  i1412.maximumParticleTimestep = i1413[3]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1415 = data
  i1414.gravity = new pc.Vec3( i1415[0], i1415[1], i1415[2] )
  i1414.defaultSolverIterations = i1415[3]
  i1414.bounceThreshold = i1415[4]
  i1414.autoSyncTransforms = !!i1415[5]
  i1414.autoSimulation = !!i1415[6]
  var i1417 = i1415[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'material')
  i1422.gravity = new pc.Vec2( i1423[2], i1423[3] )
  i1422.positionIterations = i1423[4]
  i1422.velocityIterations = i1423[5]
  i1422.velocityThreshold = i1423[6]
  i1422.maxLinearCorrection = i1423[7]
  i1422.maxAngularCorrection = i1423[8]
  i1422.maxTranslationSpeed = i1423[9]
  i1422.maxRotationSpeed = i1423[10]
  i1422.baumgarteScale = i1423[11]
  i1422.baumgarteTOIScale = i1423[12]
  i1422.timeToSleep = i1423[13]
  i1422.linearSleepTolerance = i1423[14]
  i1422.angularSleepTolerance = i1423[15]
  i1422.defaultContactOffset = i1423[16]
  i1422.autoSimulation = !!i1423[17]
  i1422.queriesHitTriggers = !!i1423[18]
  i1422.queriesStartInColliders = !!i1423[19]
  i1422.callbacksOnDisable = !!i1423[20]
  i1422.reuseCollisionCallbacks = !!i1423[21]
  i1422.autoSyncTransforms = !!i1423[22]
  var i1425 = i1423[23]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[i + 0]) );
  }
  i1430.qualityLevels = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.names = i1434
  i1430.shadows = i1431[2]
  i1430.anisotropicFiltering = i1431[3]
  i1430.antiAliasing = i1431[4]
  i1430.lodBias = i1431[5]
  i1430.shadowCascades = i1431[6]
  i1430.shadowDistance = i1431[7]
  i1430.shadowmaskMode = i1431[8]
  i1430.shadowProjection = i1431[9]
  i1430.shadowResolution = i1431[10]
  i1430.softParticles = !!i1431[11]
  i1430.softVegetation = !!i1431[12]
  i1430.activeColorSpace = i1431[13]
  i1430.desiredColorSpace = i1431[14]
  i1430.masterTextureLimit = i1431[15]
  i1430.maxQueuedFrames = i1431[16]
  i1430.particleRaycastBudget = i1431[17]
  i1430.pixelLightCount = i1431[18]
  i1430.realtimeReflectionProbes = !!i1431[19]
  i1430.shadowCascade2Split = i1431[20]
  i1430.shadowCascade4Split = new pc.Vec3( i1431[21], i1431[22], i1431[23] )
  i1430.streamingMipmapsActive = !!i1431[24]
  i1430.vSyncCount = i1431[25]
  i1430.asyncUploadBufferSize = i1431[26]
  i1430.asyncUploadTimeSlice = i1431[27]
  i1430.billboardsFaceCameraPosition = !!i1431[28]
  i1430.shadowNearPlaneOffset = i1431[29]
  i1430.streamingMipmapsMemoryBudget = i1431[30]
  i1430.maximumLODLevel = i1431[31]
  i1430.streamingMipmapsAddAllCameras = !!i1431[32]
  i1430.streamingMipmapsMaxLevelReduction = i1431[33]
  i1430.streamingMipmapsRenderersPerFrame = i1431[34]
  i1430.resolutionScalingFixedDPIFactor = i1431[35]
  i1430.streamingMipmapsMaxFileIORequests = i1431[36]
  i1430.currentQualityLevel = i1431[37]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1441 = data
  i1440.weight = i1441[0]
  i1440.vertices = i1441[1]
  i1440.normals = i1441[2]
  i1440.tangents = i1441[3]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1443 = data
  i1442.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[0], i1442.Event)
  i1442.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1443[1], i1442.filterSettings)
  i1442.overrideMaterialId = i1443[2]
  i1442.overrideMaterialPassIndex = i1443[3]
  i1442.overrideShaderId = i1443[4]
  i1442.overrideShaderPassIndex = i1443[5]
  i1442.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[6], i1442.overrideMode)
  i1442.overrideDepthState = !!i1443[7]
  i1442.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[8], i1442.depthCompareFunction)
  i1442.enableWrite = !!i1443[9]
  i1442.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1443[10], i1442.stencilSettings)
  i1442.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1443[11], i1442.cameraSettings)
  return i1442
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1445 = data
  i1444.xPlacement = i1445[0]
  i1444.yPlacement = i1445[1]
  i1444.xAdvance = i1445[2]
  i1444.yAdvance = i1445[3]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1447 = data
  i1446.Value = i1447[0]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1449 = data
  i1448.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1449[0], i1448.RenderQueueType)
  i1448.LayerMask = i1449[1]
  var i1451 = i1449[2]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1448.PassNames = i1450
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1453 = data
  i1452.overrideStencilState = !!i1453[0]
  i1452.stencilReference = i1453[1]
  i1452.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[2], i1452.stencilCompareFunctionValue)
  i1452.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[3], i1452.passOperationValue)
  i1452.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[4], i1452.failOperationValue)
  i1452.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[5], i1452.zFailOperationValue)
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1455 = data
  i1454.overrideCamera = !!i1455[0]
  i1454.restoreCamera = !!i1455[1]
  i1454.offset = new pc.Vec4( i1455[2], i1455[3], i1455[4], i1455[5] )
  i1454.cameraFieldOfView = i1455[6]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[42],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[98],"106":[98],"107":[98],"108":[98],"109":[98],"110":[98],"111":[42],"112":[5],"113":[114],"115":[114],"34":[25],"15":[3,5],"116":[46],"117":[3,5],"118":[25],"119":[42],"44":[42],"47":[46],"120":[121],"122":[25],"123":[25],"36":[34],"29":[26,25],"124":[25],"35":[34],"39":[25],"125":[25],"38":[25],"126":[25],"127":[25],"128":[25],"129":[25],"130":[25],"131":[25],"132":[26,25],"133":[25],"134":[25],"135":[25],"136":[25],"137":[26,25],"138":[25],"139":[140],"141":[140],"142":[140],"143":[140],"144":[42],"145":[42],"146":[121],"147":[25],"148":[5,25],"33":[25,26],"149":[25],"150":[26,25],"151":[5],"152":[26,25],"153":[25],"154":[121]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Elevator","UnityEngine.BoxCollider","Item","Wheat","UnityEngine.GameObject","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","AttackRangeIndicator","FarmerPatientItem","ItemStackManager","UnityEngine.Animator","AnimationInvoke","UnityEditor.Animations.AnimatorController","ItemStack","UnityEngine.SphereCollider","FighterPatientItem","Enemy","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UIHealthBar","UnityEngine.UI.Image","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","PurchaseZone_Clerk","TMPro.TextMeshProUGUI","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TMPro.TMP_FontAsset","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","NpcManagerOv","LunaManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","CameraManager","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","ObjectFX","ClerkManager","GuildManager","AudioManager","PoolManager","GroundItemStackManager","Customer","PorterNpc","BedProcess","ArrowsManager","UIManager","MainPanel","TouchArea","YangJoystick","UIBubbleExpression","UIProgress","UnityEngine.UI.Button","Player","GameDataEditor","ExcelTool.GameConfig","GroundItemStack","UnityEngine.SpriteRenderer","PatientInjection","NurseNpc","WheatManager","SoakManager","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","FakeLightSetup","HighResPlaneGenerator","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3c1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/05/2026 09:50:41";

Deserializers.lunaDaysRunning = "11.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "灭鼠喷雾";

Deserializers.lunaAppID = "37274";

Deserializers.projectId = "557b5b614ba9021468899f7566834b85";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1695";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4758";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "08a65350-2235-470c-a9df-cf96494fb302";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","MemoryProfiler","Editor","MemoryProfilerSettings","RuntimeInitialize"],["Unity","MemoryProfiler","Editor","EditorGUICompatibilityHelper","RuntimeInitialize"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"],["Unity","MemoryProfiler","MetadataInjector","PlayerInitMetadata"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

