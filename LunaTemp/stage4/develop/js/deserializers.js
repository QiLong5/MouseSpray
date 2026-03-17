var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.JointSpring' )
  var i5097 = data
  i5096.spring = i5097[0]
  i5096.damper = i5097[1]
  i5096.targetPosition = i5097[2]
  return i5096
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5098 = root || request.c( 'UnityEngine.JointMotor' )
  var i5099 = data
  i5098.m_TargetVelocity = i5099[0]
  i5098.m_Force = i5099[1]
  i5098.m_FreeSpin = i5099[2]
  return i5098
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5100 = root || request.c( 'UnityEngine.JointLimits' )
  var i5101 = data
  i5100.m_Min = i5101[0]
  i5100.m_Max = i5101[1]
  i5100.m_Bounciness = i5101[2]
  i5100.m_BounceMinVelocity = i5101[3]
  i5100.m_ContactDistance = i5101[4]
  i5100.minBounce = i5101[5]
  i5100.maxBounce = i5101[6]
  return i5100
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5102 = root || request.c( 'UnityEngine.JointDrive' )
  var i5103 = data
  i5102.m_PositionSpring = i5103[0]
  i5102.m_PositionDamper = i5103[1]
  i5102.m_MaximumForce = i5103[2]
  i5102.m_UseAcceleration = i5103[3]
  return i5102
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5104 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5105 = data
  i5104.m_Spring = i5105[0]
  i5104.m_Damper = i5105[1]
  return i5104
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5106 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5107 = data
  i5106.m_Limit = i5107[0]
  i5106.m_Bounciness = i5107[1]
  i5106.m_ContactDistance = i5107[2]
  return i5106
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5108 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5109 = data
  i5108.m_ExtremumSlip = i5109[0]
  i5108.m_ExtremumValue = i5109[1]
  i5108.m_AsymptoteSlip = i5109[2]
  i5108.m_AsymptoteValue = i5109[3]
  i5108.m_Stiffness = i5109[4]
  return i5108
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5110 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5111 = data
  i5110.m_LowerAngle = i5111[0]
  i5110.m_UpperAngle = i5111[1]
  return i5110
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5112 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5113 = data
  i5112.m_MotorSpeed = i5113[0]
  i5112.m_MaximumMotorTorque = i5113[1]
  return i5112
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5114 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5115 = data
  i5114.m_DampingRatio = i5115[0]
  i5114.m_Frequency = i5115[1]
  i5114.m_Angle = i5115[2]
  return i5114
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5116 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5117 = data
  i5116.m_LowerTranslation = i5117[0]
  i5116.m_UpperTranslation = i5117[1]
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5119 = data
  i5118.name = i5119[0]
  i5118.halfPrecision = !!i5119[1]
  i5118.useSimplification = !!i5119[2]
  i5118.useUInt32IndexFormat = !!i5119[3]
  i5118.vertexCount = i5119[4]
  i5118.aabb = i5119[5]
  var i5121 = i5119[6]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 1) {
    i5120.push( !!i5121[i + 0] );
  }
  i5118.streams = i5120
  i5118.vertices = i5119[7]
  var i5123 = i5119[8]
  var i5122 = []
  for(var i = 0; i < i5123.length; i += 1) {
    i5122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5123[i + 0]) );
  }
  i5118.subMeshes = i5122
  var i5125 = i5119[9]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 16) {
    i5124.push( new pc.Mat4().setData(i5125[i + 0], i5125[i + 1], i5125[i + 2], i5125[i + 3],  i5125[i + 4], i5125[i + 5], i5125[i + 6], i5125[i + 7],  i5125[i + 8], i5125[i + 9], i5125[i + 10], i5125[i + 11],  i5125[i + 12], i5125[i + 13], i5125[i + 14], i5125[i + 15]) );
  }
  i5118.bindposes = i5124
  var i5127 = i5119[10]
  var i5126 = []
  for(var i = 0; i < i5127.length; i += 1) {
    i5126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5127[i + 0]) );
  }
  i5118.blendShapes = i5126
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5133 = data
  i5132.triangles = i5133[0]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5139 = data
  i5138.name = i5139[0]
  var i5141 = i5139[1]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5141[i + 0]) );
  }
  i5138.frames = i5140
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5142 = root || new pc.UnityMaterial()
  var i5143 = data
  i5142.name = i5143[0]
  request.r(i5143[1], i5143[2], 0, i5142, 'shader')
  i5142.renderQueue = i5143[3]
  i5142.enableInstancing = !!i5143[4]
  var i5145 = i5143[5]
  var i5144 = []
  for(var i = 0; i < i5145.length; i += 1) {
    i5144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5145[i + 0]) );
  }
  i5142.floatParameters = i5144
  var i5147 = i5143[6]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 1) {
    i5146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5147[i + 0]) );
  }
  i5142.colorParameters = i5146
  var i5149 = i5143[7]
  var i5148 = []
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5149[i + 0]) );
  }
  i5142.vectorParameters = i5148
  var i5151 = i5143[8]
  var i5150 = []
  for(var i = 0; i < i5151.length; i += 1) {
    i5150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5151[i + 0]) );
  }
  i5142.textureParameters = i5150
  var i5153 = i5143[9]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5153[i + 0]) );
  }
  i5142.materialFlags = i5152
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5157 = data
  i5156.name = i5157[0]
  i5156.value = i5157[1]
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5161 = data
  i5160.name = i5161[0]
  i5160.value = new pc.Color(i5161[1], i5161[2], i5161[3], i5161[4])
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5165 = data
  i5164.name = i5165[0]
  i5164.value = new pc.Vec4( i5165[1], i5165[2], i5165[3], i5165[4] )
  return i5164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5169 = data
  i5168.name = i5169[0]
  request.r(i5169[1], i5169[2], 0, i5168, 'value')
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5173 = data
  i5172.name = i5173[0]
  i5172.enabled = !!i5173[1]
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5175 = data
  i5174.name = i5175[0]
  i5174.width = i5175[1]
  i5174.height = i5175[2]
  i5174.mipmapCount = i5175[3]
  i5174.anisoLevel = i5175[4]
  i5174.filterMode = i5175[5]
  i5174.hdr = !!i5175[6]
  i5174.format = i5175[7]
  i5174.wrapMode = i5175[8]
  i5174.alphaIsTransparency = !!i5175[9]
  i5174.alphaSource = i5175[10]
  i5174.graphicsFormat = i5175[11]
  i5174.sRGBTexture = !!i5175[12]
  i5174.desiredColorSpace = i5175[13]
  i5174.wrapU = i5175[14]
  i5174.wrapV = i5175[15]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5177 = data
  i5176.position = new pc.Vec3( i5177[0], i5177[1], i5177[2] )
  i5176.scale = new pc.Vec3( i5177[3], i5177[4], i5177[5] )
  i5176.rotation = new pc.Quat(i5177[6], i5177[7], i5177[8], i5177[9])
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5179 = data
  request.r(i5179[0], i5179[1], 0, i5178, 'sharedMesh')
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5181 = data
  request.r(i5181[0], i5181[1], 0, i5180, 'additionalVertexStreams')
  i5180.enabled = !!i5181[2]
  request.r(i5181[3], i5181[4], 0, i5180, 'sharedMaterial')
  var i5183 = i5181[5]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 2) {
  request.r(i5183[i + 0], i5183[i + 1], 2, i5182, '')
  }
  i5180.sharedMaterials = i5182
  i5180.receiveShadows = !!i5181[6]
  i5180.shadowCastingMode = i5181[7]
  i5180.sortingLayerID = i5181[8]
  i5180.sortingOrder = i5181[9]
  i5180.lightmapIndex = i5181[10]
  i5180.lightmapSceneIndex = i5181[11]
  i5180.lightmapScaleOffset = new pc.Vec4( i5181[12], i5181[13], i5181[14], i5181[15] )
  i5180.lightProbeUsage = i5181[16]
  i5180.reflectionProbeUsage = i5181[17]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5187 = data
  i5186.name = i5187[0]
  i5186.tagId = i5187[1]
  i5186.enabled = !!i5187[2]
  i5186.isStatic = !!i5187[3]
  i5186.layer = i5187[4]
  return i5186
}

Deserializers["Elevator"] = function (request, data, root) {
  var i5188 = root || request.c( 'Elevator' )
  var i5189 = data
  request.r(i5189[0], i5189[1], 0, i5188, 'elevatorPlatform')
  request.r(i5189[2], i5189[3], 0, i5188, 'elevatorCenter')
  i5188.moveDistance = i5189[4]
  i5188.moveToCenterDuration = i5189[5]
  i5188.duration = i5189[6]
  i5188.easeType = i5189[7]
  var i5191 = i5189[8]
  var i5190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider')))
  for(var i = 0; i < i5191.length; i += 2) {
  request.r(i5191[i + 0], i5191[i + 1], 1, i5190, '')
  }
  i5188.colliders = i5190
  var i5193 = i5189[9]
  var i5192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5193.length; i += 2) {
  request.r(i5193[i + 0], i5193[i + 1], 1, i5192, '')
  }
  i5188.farmerStandingPositions = i5192
  request.r(i5189[10], i5189[11], 0, i5188, 'topQueuePath')
  i5188.farmerBoardSpeed = i5189[12]
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5199 = data
  i5198.center = new pc.Vec3( i5199[0], i5199[1], i5199[2] )
  i5198.size = new pc.Vec3( i5199[3], i5199[4], i5199[5] )
  i5198.enabled = !!i5199[6]
  i5198.isTrigger = !!i5199[7]
  request.r(i5199[8], i5199[9], 0, i5198, 'material')
  return i5198
}

Deserializers["Item"] = function (request, data, root) {
  var i5200 = root || request.c( 'Item' )
  var i5201 = data
  i5200.itemType = i5201[0]
  i5200.movementEase = new pc.AnimationCurve( { keys_flow: i5201[1] } )
  i5200.stackHeight = i5201[2]
  i5200.itemWidth = i5201[3]
  i5200.value = i5201[4]
  return i5200
}

Deserializers["Wheat"] = function (request, data, root) {
  var i5202 = root || request.c( 'Wheat' )
  var i5203 = data
  request.r(i5203[0], i5203[1], 0, i5202, 'normalState')
  request.r(i5203[2], i5203[3], 0, i5202, 'harvestedState')
  i5202.regrowTime = i5203[4]
  i5202.itemType = i5203[5]
  i5202.movementEase = new pc.AnimationCurve( { keys_flow: i5203[6] } )
  i5202.stackHeight = i5203[7]
  i5202.itemWidth = i5203[8]
  i5202.value = i5203[9]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5205 = data
  i5204.mass = i5205[0]
  i5204.drag = i5205[1]
  i5204.angularDrag = i5205[2]
  i5204.useGravity = !!i5205[3]
  i5204.isKinematic = !!i5205[4]
  i5204.constraints = i5205[5]
  i5204.maxAngularVelocity = i5205[6]
  i5204.collisionDetectionMode = i5205[7]
  i5204.interpolation = i5205[8]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5207 = data
  i5206.center = new pc.Vec3( i5207[0], i5207[1], i5207[2] )
  i5206.radius = i5207[3]
  i5206.height = i5207[4]
  i5206.direction = i5207[5]
  i5206.enabled = !!i5207[6]
  i5206.isTrigger = !!i5207[7]
  request.r(i5207[8], i5207[9], 0, i5206, 'material')
  return i5206
}

Deserializers["AttackRangeIndicator"] = function (request, data, root) {
  var i5208 = root || request.c( 'AttackRangeIndicator' )
  var i5209 = data
  request.r(i5209[0], i5209[1], 0, i5208, 'indicatorMaterial')
  i5208.radius = i5209[2]
  i5208.startAngle = i5209[3]
  i5208.endAngle = i5209[4]
  i5208.segments = i5209[5]
  i5208.indicatorColor = new pc.Color(i5209[6], i5209[7], i5209[8], i5209[9])
  i5208.heightOffset = i5209[10]
  i5208.fadeDuration = i5209[11]
  return i5208
}

Deserializers["FarmerPatientItem"] = function (request, data, root) {
  var i5210 = root || request.c( 'FarmerPatientItem' )
  var i5211 = data
  request.r(i5211[0], i5211[1], 0, i5210, 'farmerItemStackManager')
  i5210.farmerState = i5211[2]
  request.r(i5211[3], i5211[4], 0, i5210, 'mAnimator')
  i5210.npcType = i5211[5]
  request.r(i5211[6], i5211[7], 0, i5210, 'mCollider')
  request.r(i5211[8], i5211[9], 0, i5210, 'mRigidbody')
  i5210.mMoveSpeed = i5211[10]
  i5210.mTurnSmoothTime = i5211[11]
  i5210.currentState = i5211[12]
  i5210.itemType = i5211[13]
  i5210.movementEase = new pc.AnimationCurve( { keys_flow: i5211[14] } )
  i5210.stackHeight = i5211[15]
  i5210.itemWidth = i5211[16]
  i5210.value = i5211[17]
  i5210.harvestInterval = i5211[18]
  return i5210
}

Deserializers["AnimationInvoke"] = function (request, data, root) {
  var i5212 = root || request.c( 'AnimationInvoke' )
  var i5213 = data
  request.r(i5213[0], i5213[1], 0, i5212, 'enemy')
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'animatorController')
  request.r(i5215[2], i5215[3], 0, i5214, 'avatar')
  i5214.updateMode = i5215[4]
  i5214.hasTransformHierarchy = !!i5215[5]
  i5214.applyRootMotion = !!i5215[6]
  var i5217 = i5215[7]
  var i5216 = []
  for(var i = 0; i < i5217.length; i += 2) {
  request.r(i5217[i + 0], i5217[i + 1], 2, i5216, '')
  }
  i5214.humanBones = i5216
  i5214.enabled = !!i5215[8]
  return i5214
}

Deserializers["ItemStackManager"] = function (request, data, root) {
  var i5220 = root || request.c( 'ItemStackManager' )
  var i5221 = data
  var i5223 = i5221[0]
  var i5222 = new (System.Collections.Generic.List$1(Bridge.ns('ItemStack')))
  for(var i = 0; i < i5223.length; i += 2) {
  request.r(i5223[i + 0], i5223[i + 1], 1, i5222, '')
  }
  i5220.stackList = i5222
  i5220.startPosition = new pc.Vec3( i5221[1], i5221[2], i5221[3] )
  i5220.spacingDirection = new pc.Vec3( i5221[4], i5221[5], i5221[6] )
  i5220.amountOfStackInUse = i5221[7]
  return i5220
}

Deserializers["ItemStack"] = function (request, data, root) {
  var i5226 = root || request.c( 'ItemStack' )
  var i5227 = data
  i5226.maxStackAmount = i5227[0]
  i5226.maxHeight = i5227[1]
  i5226.offsetRotation = new pc.Vec3( i5227[2], i5227[3], i5227[4] )
  var i5229 = i5227[5]
  var i5228 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5229.length; i += 2) {
  request.r(i5229[i + 0], i5229[i + 1], 1, i5228, '')
  }
  i5226.stackedItemList = i5228
  i5226.iscomplet_bend = !!i5227[6]
  i5226.iscomplet_origina = !!i5227[7]
  i5226.stackedItemType = i5227[8]
  i5226.isOpenBend = !!i5227[9]
  i5226.bendDistance = i5227[10]
  i5226.bendDuration = i5227[11]
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5233 = data
  i5232.center = new pc.Vec3( i5233[0], i5233[1], i5233[2] )
  i5232.radius = i5233[3]
  i5232.enabled = !!i5233[4]
  i5232.isTrigger = !!i5233[5]
  request.r(i5233[6], i5233[7], 0, i5232, 'material')
  return i5232
}

Deserializers["FighterPatientItem"] = function (request, data, root) {
  var i5234 = root || request.c( 'FighterPatientItem' )
  var i5235 = data
  request.r(i5235[0], i5235[1], 0, i5234, 'mAttackCollider')
  request.r(i5235[2], i5235[3], 0, i5234, 'attackRangeIndicator')
  request.r(i5235[4], i5235[5], 0, i5234, 'mAnimator')
  i5234.npcType = i5235[6]
  request.r(i5235[7], i5235[8], 0, i5234, 'mCollider')
  request.r(i5235[9], i5235[10], 0, i5234, 'mRigidbody')
  i5234.mMoveSpeed = i5235[11]
  i5234.mTurnSmoothTime = i5235[12]
  i5234.currentState = i5235[13]
  i5234.itemType = i5235[14]
  i5234.movementEase = new pc.AnimationCurve( { keys_flow: i5235[15] } )
  i5234.stackHeight = i5235[16]
  i5234.itemWidth = i5235[17]
  i5234.value = i5235[18]
  i5234.standMinRadius = i5235[19]
  i5234.standMaxRadius = i5235[20]
  i5234.standAngleRange = i5235[21]
  i5234.coinInterval = i5235[22]
  i5234.coinsPerDrop = i5235[23]
  i5234.fighterMaxHp = i5235[24]
  i5234.hpLossInterval = i5235[25]
  i5234.hpLossPercent = i5235[26]
  i5234.turnDuration = i5235[27]
  return i5234
}

Deserializers["Enemy"] = function (request, data, root) {
  var i5236 = root || request.c( 'Enemy' )
  var i5237 = data
  request.r(i5237[0], i5237[1], 0, i5236, 'attackCollider')
  request.r(i5237[2], i5237[3], 0, i5236, 'alertCollider')
  i5236.currentState = i5237[4]
  i5236.isDie = !!i5237[5]
  i5236.mHp = i5237[6]
  i5236.mHpMax = i5237[7]
  i5236.isSelect = !!i5237[8]
  i5236.shouldDropLoot = !!i5237[9]
  i5236.isStationary = !!i5237[10]
  request.r(i5237[11], i5237[12], 0, i5236, 'mAnimator')
  i5236.npcType = i5237[13]
  request.r(i5237[14], i5237[15], 0, i5236, 'mCollider')
  request.r(i5237[16], i5237[17], 0, i5236, 'mRigidbody')
  i5236.mMoveSpeed = i5237[18]
  i5236.mTurnSmoothTime = i5237[19]
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5239 = data
  i5238.pivot = new pc.Vec2( i5239[0], i5239[1] )
  i5238.anchorMin = new pc.Vec2( i5239[2], i5239[3] )
  i5238.anchorMax = new pc.Vec2( i5239[4], i5239[5] )
  i5238.sizeDelta = new pc.Vec2( i5239[6], i5239[7] )
  i5238.anchoredPosition3D = new pc.Vec3( i5239[8], i5239[9], i5239[10] )
  i5238.rotation = new pc.Quat(i5239[11], i5239[12], i5239[13], i5239[14])
  i5238.scale = new pc.Vec3( i5239[15], i5239[16], i5239[17] )
  return i5238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5241 = data
  i5240.cullTransparentMesh = !!i5241[0]
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5243 = data
  i5242.m_Alpha = i5243[0]
  i5242.m_Interactable = !!i5243[1]
  i5242.m_BlocksRaycasts = !!i5243[2]
  i5242.m_IgnoreParentGroups = !!i5243[3]
  i5242.enabled = !!i5243[4]
  return i5242
}

Deserializers["UIHealthBar"] = function (request, data, root) {
  var i5244 = root || request.c( 'UIHealthBar' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, 'fillImage')
  request.r(i5245[2], i5245[3], 0, i5244, 'bufferFillImage')
  i5244.fillAnimDuration = i5245[4]
  i5244.bufferDelay = i5245[5]
  i5244.bufferAnimDuration = i5245[6]
  request.r(i5245[7], i5245[8], 0, i5244, 'targetObject')
  request.r(i5245[9], i5245[10], 0, i5244, 'canvasGroup')
  request.r(i5245[11], i5245[12], 0, i5244, 'animationRoot')
  i5244.worldOffset = new pc.Vec3( i5245[13], i5245[14], i5245[15] )
  i5244.cameraScaleFactor = i5245[16]
  i5244.showAnim = request.d('ShowAnimSettings', i5245[17], i5244.showAnim)
  i5244.hideAnim = request.d('HideAnimSettings', i5245[18], i5244.hideAnim)
  i5244.loopAnim = request.d('LoopAnimSettings', i5245[19], i5244.loopAnim)
  return i5244
}

Deserializers["ShowAnimSettings"] = function (request, data, root) {
  var i5246 = root || request.c( 'ShowAnimSettings' )
  var i5247 = data
  i5246.animMode = i5247[0]
  i5246.scaleStart = i5247[1]
  i5246.scaleBounce = i5247[2]
  i5246.duration = i5247[3]
  i5246.fadeDuration = i5247[4]
  i5246.floatHeight = i5247[5]
  i5246.floatDuration = i5247[6]
  return i5246
}

Deserializers["HideAnimSettings"] = function (request, data, root) {
  var i5248 = root || request.c( 'HideAnimSettings' )
  var i5249 = data
  i5248.animMode = i5249[0]
  i5248.duration = i5249[1]
  return i5248
}

Deserializers["LoopAnimSettings"] = function (request, data, root) {
  var i5250 = root || request.c( 'LoopAnimSettings' )
  var i5251 = data
  i5250.animMode = i5251[0]
  i5250.scaleAmount = i5251[1]
  i5250.scaleDuration = i5251[2]
  i5250.floatHeight = i5251[3]
  i5250.floatDuration = i5251[4]
  return i5250
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5252 = root || request.c( 'UnityEngine.UI.Image' )
  var i5253 = data
  request.r(i5253[0], i5253[1], 0, i5252, 'm_Sprite')
  i5252.m_Type = i5253[2]
  i5252.m_PreserveAspect = !!i5253[3]
  i5252.m_FillCenter = !!i5253[4]
  i5252.m_FillMethod = i5253[5]
  i5252.m_FillAmount = i5253[6]
  i5252.m_FillClockwise = !!i5253[7]
  i5252.m_FillOrigin = i5253[8]
  i5252.m_UseSpriteMesh = !!i5253[9]
  i5252.m_PixelsPerUnitMultiplier = i5253[10]
  request.r(i5253[11], i5253[12], 0, i5252, 'm_Material')
  i5252.m_Maskable = !!i5253[13]
  i5252.m_Color = new pc.Color(i5253[14], i5253[15], i5253[16], i5253[17])
  i5252.m_RaycastTarget = !!i5253[18]
  i5252.m_RaycastPadding = new pc.Vec4( i5253[19], i5253[20], i5253[21], i5253[22] )
  return i5252
}

Deserializers["PurchaseZone_Clerk"] = function (request, data, root) {
  var i5254 = root || request.c( 'PurchaseZone_Clerk' )
  var i5255 = data
  i5254.completeAction = request.d('UnityEngine.Events.UnityEvent', i5255[0], i5254.completeAction)
  i5254.id = i5255[1]
  i5254.price = i5255[2]
  i5254.requiredItemType = i5255[3]
  i5254.iscomplete = !!i5255[4]
  i5254.mPurchase = request.d('UnityEngine.Events.UnityEvent', i5255[5], i5254.mPurchase)
  i5254.isCanBreath = !!i5255[6]
  request.r(i5255[7], i5255[8], 0, i5254, 'fillImage')
  request.r(i5255[9], i5255[10], 0, i5254, 'remainTxt')
  request.r(i5255[11], i5255[12], 0, i5254, 'borderNomal')
  request.r(i5255[13], i5255[14], 0, i5254, 'contentHeighLight')
  request.r(i5255[15], i5255[16], 0, i5254, 'borderNomoney')
  return i5254
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5257 = data
  i5256.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5257[0], i5256.m_PersistentCalls)
  return i5256
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5258 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5259 = data
  var i5261 = i5259[0]
  var i5260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.add(request.d('UnityEngine.Events.PersistentCall', i5261[i + 0]));
  }
  i5258.m_Calls = i5260
  return i5258
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5265 = data
  request.r(i5265[0], i5265[1], 0, i5264, 'm_Target')
  i5264.m_TargetAssemblyTypeName = i5265[2]
  i5264.m_MethodName = i5265[3]
  i5264.m_Mode = i5265[4]
  i5264.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5265[5], i5264.m_Arguments)
  i5264.m_CallState = i5265[6]
  return i5264
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5266 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5267 = data
  request.r(i5267[0], i5267[1], 0, i5266, 'm_ObjectArgument')
  i5266.m_ObjectArgumentAssemblyTypeName = i5267[2]
  i5266.m_IntArgument = i5267[3]
  i5266.m_FloatArgument = i5267[4]
  i5266.m_StringArgument = i5267[5]
  i5266.m_BoolArgument = !!i5267[6]
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5269 = data
  i5268.planeDistance = i5269[0]
  i5268.referencePixelsPerUnit = i5269[1]
  i5268.isFallbackOverlay = !!i5269[2]
  i5268.renderMode = i5269[3]
  i5268.renderOrder = i5269[4]
  i5268.sortingLayerName = i5269[5]
  i5268.sortingOrder = i5269[6]
  i5268.scaleFactor = i5269[7]
  request.r(i5269[8], i5269[9], 0, i5268, 'worldCamera')
  i5268.overrideSorting = !!i5269[10]
  i5268.pixelPerfect = !!i5269[11]
  i5268.targetDisplay = i5269[12]
  i5268.overridePixelPerfect = !!i5269[13]
  i5268.enabled = !!i5269[14]
  return i5268
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5270 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5271 = data
  i5270.m_UiScaleMode = i5271[0]
  i5270.m_ReferencePixelsPerUnit = i5271[1]
  i5270.m_ScaleFactor = i5271[2]
  i5270.m_ReferenceResolution = new pc.Vec2( i5271[3], i5271[4] )
  i5270.m_ScreenMatchMode = i5271[5]
  i5270.m_MatchWidthOrHeight = i5271[6]
  i5270.m_PhysicalUnit = i5271[7]
  i5270.m_FallbackScreenDPI = i5271[8]
  i5270.m_DefaultSpriteDPI = i5271[9]
  i5270.m_DynamicPixelsPerUnit = i5271[10]
  i5270.m_PresetInfoIsWorld = !!i5271[11]
  return i5270
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5272 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5273 = data
  i5272.m_IgnoreReversedGraphics = !!i5273[0]
  i5272.m_BlockingObjects = i5273[1]
  i5272.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5273[2] )
  return i5272
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5274 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5275 = data
  i5274.m_hasFontAssetChanged = !!i5275[0]
  request.r(i5275[1], i5275[2], 0, i5274, 'm_baseMaterial')
  i5274.m_maskOffset = new pc.Vec4( i5275[3], i5275[4], i5275[5], i5275[6] )
  i5274.m_text = i5275[7]
  i5274.m_isRightToLeft = !!i5275[8]
  request.r(i5275[9], i5275[10], 0, i5274, 'm_fontAsset')
  request.r(i5275[11], i5275[12], 0, i5274, 'm_sharedMaterial')
  var i5277 = i5275[13]
  var i5276 = []
  for(var i = 0; i < i5277.length; i += 2) {
  request.r(i5277[i + 0], i5277[i + 1], 2, i5276, '')
  }
  i5274.m_fontSharedMaterials = i5276
  request.r(i5275[14], i5275[15], 0, i5274, 'm_fontMaterial')
  var i5279 = i5275[16]
  var i5278 = []
  for(var i = 0; i < i5279.length; i += 2) {
  request.r(i5279[i + 0], i5279[i + 1], 2, i5278, '')
  }
  i5274.m_fontMaterials = i5278
  i5274.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5275[17], i5275[18], i5275[19], i5275[20])
  i5274.m_fontColor = new pc.Color(i5275[21], i5275[22], i5275[23], i5275[24])
  i5274.m_enableVertexGradient = !!i5275[25]
  i5274.m_colorMode = i5275[26]
  i5274.m_fontColorGradient = request.d('TMPro.VertexGradient', i5275[27], i5274.m_fontColorGradient)
  request.r(i5275[28], i5275[29], 0, i5274, 'm_fontColorGradientPreset')
  request.r(i5275[30], i5275[31], 0, i5274, 'm_spriteAsset')
  i5274.m_tintAllSprites = !!i5275[32]
  request.r(i5275[33], i5275[34], 0, i5274, 'm_StyleSheet')
  i5274.m_TextStyleHashCode = i5275[35]
  i5274.m_overrideHtmlColors = !!i5275[36]
  i5274.m_faceColor = UnityEngine.Color32.ConstructColor(i5275[37], i5275[38], i5275[39], i5275[40])
  i5274.m_fontSize = i5275[41]
  i5274.m_fontSizeBase = i5275[42]
  i5274.m_fontWeight = i5275[43]
  i5274.m_enableAutoSizing = !!i5275[44]
  i5274.m_fontSizeMin = i5275[45]
  i5274.m_fontSizeMax = i5275[46]
  i5274.m_fontStyle = i5275[47]
  i5274.m_HorizontalAlignment = i5275[48]
  i5274.m_VerticalAlignment = i5275[49]
  i5274.m_textAlignment = i5275[50]
  i5274.m_characterSpacing = i5275[51]
  i5274.m_wordSpacing = i5275[52]
  i5274.m_lineSpacing = i5275[53]
  i5274.m_lineSpacingMax = i5275[54]
  i5274.m_paragraphSpacing = i5275[55]
  i5274.m_charWidthMaxAdj = i5275[56]
  i5274.m_enableWordWrapping = !!i5275[57]
  i5274.m_wordWrappingRatios = i5275[58]
  i5274.m_overflowMode = i5275[59]
  request.r(i5275[60], i5275[61], 0, i5274, 'm_linkedTextComponent')
  request.r(i5275[62], i5275[63], 0, i5274, 'parentLinkedComponent')
  i5274.m_enableKerning = !!i5275[64]
  i5274.m_enableExtraPadding = !!i5275[65]
  i5274.checkPaddingRequired = !!i5275[66]
  i5274.m_isRichText = !!i5275[67]
  i5274.m_parseCtrlCharacters = !!i5275[68]
  i5274.m_isOrthographic = !!i5275[69]
  i5274.m_isCullingEnabled = !!i5275[70]
  i5274.m_horizontalMapping = i5275[71]
  i5274.m_verticalMapping = i5275[72]
  i5274.m_uvLineOffset = i5275[73]
  i5274.m_geometrySortingOrder = i5275[74]
  i5274.m_IsTextObjectScaleStatic = !!i5275[75]
  i5274.m_VertexBufferAutoSizeReduction = !!i5275[76]
  i5274.m_useMaxVisibleDescender = !!i5275[77]
  i5274.m_pageToDisplay = i5275[78]
  i5274.m_margin = new pc.Vec4( i5275[79], i5275[80], i5275[81], i5275[82] )
  i5274.m_isUsingLegacyAnimationComponent = !!i5275[83]
  i5274.m_isVolumetricText = !!i5275[84]
  request.r(i5275[85], i5275[86], 0, i5274, 'm_Material')
  i5274.m_Maskable = !!i5275[87]
  i5274.m_Color = new pc.Color(i5275[88], i5275[89], i5275[90], i5275[91])
  i5274.m_RaycastTarget = !!i5275[92]
  i5274.m_RaycastPadding = new pc.Vec4( i5275[93], i5275[94], i5275[95], i5275[96] )
  return i5274
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5280 = root || request.c( 'TMPro.VertexGradient' )
  var i5281 = data
  i5280.topLeft = new pc.Color(i5281[0], i5281[1], i5281[2], i5281[3])
  i5280.topRight = new pc.Color(i5281[4], i5281[5], i5281[6], i5281[7])
  i5280.bottomLeft = new pc.Color(i5281[8], i5281[9], i5281[10], i5281[11])
  i5280.bottomRight = new pc.Color(i5281[12], i5281[13], i5281[14], i5281[15])
  return i5280
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5282 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5283 = data
  i5282.m_Spacing = i5283[0]
  i5282.m_ChildForceExpandWidth = !!i5283[1]
  i5282.m_ChildForceExpandHeight = !!i5283[2]
  i5282.m_ChildControlWidth = !!i5283[3]
  i5282.m_ChildControlHeight = !!i5283[4]
  i5282.m_ChildScaleWidth = !!i5283[5]
  i5282.m_ChildScaleHeight = !!i5283[6]
  i5282.m_ReverseArrangement = !!i5283[7]
  i5282.m_Padding = UnityEngine.RectOffset.FromPaddings(i5283[8], i5283[9], i5283[10], i5283[11])
  i5282.m_ChildAlignment = i5283[12]
  return i5282
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i5284 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i5285 = data
  i5284.m_HorizontalFit = i5285[0]
  i5284.m_VerticalFit = i5285[1]
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5287 = data
  i5286.name = i5287[0]
  i5286.index = i5287[1]
  i5286.startup = !!i5287[2]
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5289 = data
  i5288.aspect = i5289[0]
  i5288.orthographic = !!i5289[1]
  i5288.orthographicSize = i5289[2]
  i5288.backgroundColor = new pc.Color(i5289[3], i5289[4], i5289[5], i5289[6])
  i5288.nearClipPlane = i5289[7]
  i5288.farClipPlane = i5289[8]
  i5288.fieldOfView = i5289[9]
  i5288.depth = i5289[10]
  i5288.clearFlags = i5289[11]
  i5288.cullingMask = i5289[12]
  i5288.rect = i5289[13]
  request.r(i5289[14], i5289[15], 0, i5288, 'targetTexture')
  i5288.usePhysicalProperties = !!i5289[16]
  i5288.focalLength = i5289[17]
  i5288.sensorSize = new pc.Vec2( i5289[18], i5289[19] )
  i5288.lensShift = new pc.Vec2( i5289[20], i5289[21] )
  i5288.gateFit = i5289[22]
  i5288.commandBufferCount = i5289[23]
  i5288.cameraType = i5289[24]
  i5288.enabled = !!i5289[25]
  return i5288
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i5290 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i5291 = data
  i5290.m_RenderShadows = !!i5291[0]
  i5290.m_RequiresDepthTextureOption = i5291[1]
  i5290.m_RequiresOpaqueTextureOption = i5291[2]
  i5290.m_CameraType = i5291[3]
  var i5293 = i5291[4]
  var i5292 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i5293.length; i += 2) {
  request.r(i5293[i + 0], i5293[i + 1], 1, i5292, '')
  }
  i5290.m_Cameras = i5292
  i5290.m_RendererIndex = i5291[5]
  i5290.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5291[6] )
  request.r(i5291[7], i5291[8], 0, i5290, 'm_VolumeTrigger')
  i5290.m_VolumeFrameworkUpdateModeOption = i5291[9]
  i5290.m_RenderPostProcessing = !!i5291[10]
  i5290.m_Antialiasing = i5291[11]
  i5290.m_AntialiasingQuality = i5291[12]
  i5290.m_StopNaN = !!i5291[13]
  i5290.m_Dithering = !!i5291[14]
  i5290.m_ClearDepth = !!i5291[15]
  i5290.m_AllowXRRendering = !!i5291[16]
  i5290.m_AllowHDROutput = !!i5291[17]
  i5290.m_UseScreenCoordOverride = !!i5291[18]
  i5290.m_ScreenSizeOverride = new pc.Vec4( i5291[19], i5291[20], i5291[21], i5291[22] )
  i5290.m_ScreenCoordScaleBias = new pc.Vec4( i5291[23], i5291[24], i5291[25], i5291[26] )
  i5290.m_RequiresDepthTexture = !!i5291[27]
  i5290.m_RequiresColorTexture = !!i5291[28]
  i5290.m_Version = i5291[29]
  i5290.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i5291[30], i5290.m_TaaSettings)
  return i5290
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i5296 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i5297 = data
  i5296.m_Quality = i5297[0]
  i5296.m_FrameInfluence = i5297[1]
  i5296.m_JitterScale = i5297[2]
  i5296.m_MipBias = i5297[3]
  i5296.m_VarianceClampScale = i5297[4]
  i5296.m_ContrastAdaptiveSharpening = i5297[5]
  return i5296
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i5298 = root || request.c( 'CameraManager' )
  var i5299 = data
  request.r(i5299[0], i5299[1], 0, i5298, 'mCamera')
  i5298.isCress = !!i5299[2]
  i5298.mCameraCressNum = i5299[3]
  i5298.mCameraVerNum = i5299[4]
  i5298.mCameraCressNumFar = i5299[5]
  i5298.mCameraVerNumFar = i5299[6]
  i5298.switchTimer = i5299[7]
  i5298.stayTimer = i5299[8]
  var i5301 = i5299[9]
  var i5300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5301.length; i += 2) {
  request.r(i5301[i + 0], i5301[i + 1], 1, i5300, '')
  }
  i5298.forceCameras = i5300
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5303 = data
  i5302.type = i5303[0]
  i5302.color = new pc.Color(i5303[1], i5303[2], i5303[3], i5303[4])
  i5302.cullingMask = i5303[5]
  i5302.intensity = i5303[6]
  i5302.range = i5303[7]
  i5302.spotAngle = i5303[8]
  i5302.shadows = i5303[9]
  i5302.shadowNormalBias = i5303[10]
  i5302.shadowBias = i5303[11]
  i5302.shadowStrength = i5303[12]
  i5302.shadowResolution = i5303[13]
  i5302.lightmapBakeType = i5303[14]
  i5302.renderMode = i5303[15]
  request.r(i5303[16], i5303[17], 0, i5302, 'cookie')
  i5302.cookieSize = i5303[18]
  i5302.shadowNearPlane = i5303[19]
  i5302.occlusionMaskChannel = i5303[20]
  i5302.enabled = !!i5303[21]
  return i5302
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i5304 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i5305 = data
  i5304.m_Version = i5305[0]
  i5304.m_UsePipelineSettings = !!i5305[1]
  i5304.m_AdditionalLightsShadowResolutionTier = i5305[2]
  i5304.m_LightLayerMask = i5305[3]
  i5304.m_RenderingLayers = i5305[4]
  i5304.m_CustomShadowLayers = !!i5305[5]
  i5304.m_ShadowLayerMask = i5305[6]
  i5304.m_ShadowRenderingLayers = i5305[7]
  i5304.m_LightCookieSize = new pc.Vec2( i5305[8], i5305[9] )
  i5304.m_LightCookieOffset = new pc.Vec2( i5305[10], i5305[11] )
  i5304.m_SoftShadowQuality = i5305[12]
  return i5304
}

Deserializers["ClerkManager"] = function (request, data, root) {
  var i5306 = root || request.c( 'ClerkManager' )
  var i5307 = data
  var i5309 = i5307[0]
  var i5308 = new (System.Collections.Generic.List$1(Bridge.ns('PurchaseZone_Clerk')))
  for(var i = 0; i < i5309.length; i += 2) {
  request.r(i5309[i + 0], i5309[i + 1], 1, i5308, '')
  }
  i5306.clerks = i5308
  var i5311 = i5307[1]
  var i5310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5311.length; i += 2) {
  request.r(i5311[i + 0], i5311[i + 1], 1, i5310, '')
  }
  i5306.hideObjs = i5310
  return i5306
}

Deserializers["GuildManager"] = function (request, data, root) {
  var i5316 = root || request.c( 'GuildManager' )
  var i5317 = data
  return i5316
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i5318 = root || request.c( 'LunaManager' )
  var i5319 = data
  i5318.isGameStart = !!i5319[0]
  i5318.isGameOver = !!i5319[1]
  return i5318
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i5320 = root || request.c( 'AudioManager' )
  var i5321 = data
  request.r(i5321[0], i5321[1], 0, i5320, 'mBgm')
  request.r(i5321[2], i5321[3], 0, i5320, 'mGoin')
  return i5320
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i5322 = root || request.c( 'PoolManager' )
  var i5323 = data
  var i5325 = i5323[0]
  var i5324 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5325.length; i += 2) {
  request.r(i5325[i + 0], i5325[i + 1], 1, i5324, '')
  }
  i5322.itemPrefabs = i5324
  var i5327 = i5323[1]
  var i5326 = new (System.Collections.Generic.List$1(Bridge.ns('Npc')))
  for(var i = 0; i < i5327.length; i += 2) {
  request.r(i5327[i + 0], i5327[i + 1], 1, i5326, '')
  }
  i5322.npcPrefabs = i5326
  request.r(i5323[2], i5323[3], 0, i5322, 'mEnemyHpPrefab')
  request.r(i5323[4], i5323[5], 0, i5322, 'mFighterHpPrefab')
  return i5322
}

Deserializers["NpcManagerOv"] = function (request, data, root) {
  var i5330 = root || request.c( 'NpcManagerOv' )
  var i5331 = data
  i5330.maxPatienNum = i5331[0]
  i5330.maxFarmerPatienNum = i5331[1]
  var i5333 = i5331[2]
  var i5332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5333.length; i += 2) {
  request.r(i5333[i + 0], i5333[i + 1], 1, i5332, '')
  }
  i5330.areaLst = i5332
  request.r(i5331[3], i5331[4], 0, i5330, 'fighterCoinStack')
  request.r(i5331[5], i5331[6], 0, i5330, 'fighterStationRoot')
  request.r(i5331[7], i5331[8], 0, i5330, 'enemyPathRoot')
  var i5335 = i5331[9]
  var i5334 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i5335.length; i += 2) {
  request.r(i5335[i + 0], i5335[i + 1], 1, i5334, '')
  }
  i5330.mEnemies = i5334
  var i5337 = i5331[10]
  var i5336 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5337.length; i += 2) {
  request.r(i5337[i + 0], i5337[i + 1], 1, i5336, '')
  }
  i5330.mCustomerPath = i5336
  var i5339 = i5331[11]
  var i5338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5339.length; i += 2) {
  request.r(i5339[i + 0], i5339[i + 1], 1, i5338, '')
  }
  i5330.mCustomerExitPath = i5338
  i5330.isUnlockFarmer = !!i5331[12]
  return i5330
}

Deserializers["Customer"] = function (request, data, root) {
  var i5342 = root || request.c( 'Customer' )
  var i5343 = data
  request.r(i5343[0], i5343[1], 0, i5342, 'mAnimator')
  i5342.npcType = i5343[2]
  request.r(i5343[3], i5343[4], 0, i5342, 'mCollider')
  request.r(i5343[5], i5343[6], 0, i5342, 'mRigidbody')
  i5342.mMoveSpeed = i5343[7]
  i5342.mTurnSmoothTime = i5343[8]
  return i5342
}

Deserializers["ObjectFX"] = function (request, data, root) {
  var i5344 = root || request.c( 'ObjectFX' )
  var i5345 = data
  i5344.showEffectType = i5345[0]
  i5344.hideEffectType = i5345[1]
  i5344.duration = i5345[2]
  i5344.easeType = i5345[3]
  i5344.moveDistance = i5345[4]
  i5344.autoPlayOnEnable = !!i5345[5]
  i5344.onShowComplete = request.d('UnityEngine.Events.UnityEvent', i5345[6], i5344.onShowComplete)
  i5344.onHideComplete = request.d('UnityEngine.Events.UnityEvent', i5345[7], i5344.onHideComplete)
  return i5344
}

Deserializers["PorterNpc"] = function (request, data, root) {
  var i5346 = root || request.c( 'PorterNpc' )
  var i5347 = data
  request.r(i5347[0], i5347[1], 0, i5346, 'loaderNpcPath')
  var i5349 = i5347[2]
  var i5348 = new (System.Collections.Generic.List$1(Bridge.ns('BedProcess')))
  for(var i = 0; i < i5349.length; i += 2) {
  request.r(i5349[i + 0], i5349[i + 1], 1, i5348, '')
  }
  i5346.bedProcessList = i5348
  request.r(i5347[3], i5347[4], 0, i5346, 'itemStackManager')
  i5346.loadUnloadDelay = i5347[5]
  i5346.itemDropOffTimer = i5347[6]
  i5346.itemDropOffCooldown = i5347[7]
  request.r(i5347[8], i5347[9], 0, i5346, 'mAnimator')
  i5346.npcType = i5347[10]
  request.r(i5347[11], i5347[12], 0, i5346, 'mCollider')
  request.r(i5347[13], i5347[14], 0, i5346, 'mRigidbody')
  i5346.mMoveSpeed = i5347[15]
  i5346.mTurnSmoothTime = i5347[16]
  return i5346
}

Deserializers["ArrowsManager"] = function (request, data, root) {
  var i5352 = root || request.c( 'ArrowsManager' )
  var i5353 = data
  request.r(i5353[0], i5353[1], 0, i5352, 'lineMaterial')
  i5352.lineWidth = i5353[2]
  request.r(i5353[3], i5353[4], 0, i5352, 'mArrowsParent')
  var i5355 = i5353[5]
  var i5354 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5355.length; i += 2) {
  request.r(i5355[i + 0], i5355[i + 1], 1, i5354, '')
  }
  i5352.targets = i5354
  i5352.closeDistanceThreshold = i5353[6]
  i5352.yOffset = i5353[7]
  request.r(i5353[8], i5353[9], 0, i5352, 'playerTransform')
  i5352.isCan = !!i5353[10]
  return i5352
}

Deserializers["UIManager"] = function (request, data, root) {
  var i5356 = root || request.c( 'UIManager' )
  var i5357 = data
  var i5359 = i5357[0]
  var i5358 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5359.length; i += 2) {
  request.r(i5359[i + 0], i5359[i + 1], 1, i5358, '')
  }
  i5356.mCress = i5358
  var i5361 = i5357[1]
  var i5360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5361.length; i += 2) {
  request.r(i5361[i + 0], i5361[i + 1], 1, i5360, '')
  }
  i5356.mVer = i5360
  var i5363 = i5357[2]
  var i5362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5363.length; i += 2) {
  request.r(i5363[i + 0], i5363[i + 1], 1, i5362, '')
  }
  i5356.mNumSprites = i5362
  var i5365 = i5357[3]
  var i5364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i5365.length; i += 2) {
  request.r(i5365[i + 0], i5365[i + 1], 1, i5364, '')
  }
  i5356.gold = i5364
  request.r(i5357[4], i5357[5], 0, i5356, 'mGoinUI')
  request.r(i5357[6], i5357[7], 0, i5356, 'mCanvas')
  request.r(i5357[8], i5357[9], 0, i5356, 'mDangerImage')
  i5356.mIsDanger = !!i5357[10]
  request.r(i5357[11], i5357[12], 0, i5356, 'mEnemyHps')
  request.r(i5357[13], i5357[14], 0, i5356, 'mCoinUI')
  return i5356
}

Deserializers["MainPanel"] = function (request, data, root) {
  var i5370 = root || request.c( 'MainPanel' )
  var i5371 = data
  i5370.mTime = i5371[0]
  request.r(i5371[1], i5371[2], 0, i5370, 'Tip')
  request.r(i5371[3], i5371[4], 0, i5370, 'player')
  request.r(i5371[5], i5371[6], 0, i5370, 'joystickTip')
  return i5370
}

Deserializers["TouchArea"] = function (request, data, root) {
  var i5372 = root || request.c( 'TouchArea' )
  var i5373 = data
  i5372.mOutPos = new pc.Vec2( i5373[0], i5373[1] )
  request.r(i5373[2], i5373[3], 0, i5372, 'mJoystickBG')
  request.r(i5373[4], i5373[5], 0, i5372, 'mJoystickHandle')
  request.r(i5373[6], i5373[7], 0, i5372, 'mCanvasGp')
  i5372.IsTouching = !!i5373[8]
  i5372.mTime = i5373[9]
  return i5372
}

Deserializers["YangJoystick"] = function (request, data, root) {
  var i5374 = root || request.c( 'YangJoystick' )
  var i5375 = data
  request.r(i5375[0], i5375[1], 0, i5374, 'BG')
  return i5374
}

Deserializers["UIBubbleExpression"] = function (request, data, root) {
  var i5376 = root || request.c( 'UIBubbleExpression' )
  var i5377 = data
  request.r(i5377[0], i5377[1], 0, i5376, 'expressionImage')
  request.r(i5377[2], i5377[3], 0, i5376, 'defaultExpression')
  request.r(i5377[4], i5377[5], 0, i5376, 'happyExpression')
  request.r(i5377[6], i5377[7], 0, i5376, 'angryExpression')
  i5376.isAutoHide = !!i5377[8]
  i5376.autoHideDelay = i5377[9]
  request.r(i5377[10], i5377[11], 0, i5376, 'targetObject')
  request.r(i5377[12], i5377[13], 0, i5376, 'canvasGroup')
  request.r(i5377[14], i5377[15], 0, i5376, 'animationRoot')
  i5376.worldOffset = new pc.Vec3( i5377[16], i5377[17], i5377[18] )
  i5376.cameraScaleFactor = i5377[19]
  i5376.showAnim = request.d('ShowAnimSettings', i5377[20], i5376.showAnim)
  i5376.hideAnim = request.d('HideAnimSettings', i5377[21], i5376.hideAnim)
  i5376.loopAnim = request.d('LoopAnimSettings', i5377[22], i5376.loopAnim)
  return i5376
}

Deserializers["UIProgress"] = function (request, data, root) {
  var i5378 = root || request.c( 'UIProgress' )
  var i5379 = data
  request.r(i5379[0], i5379[1], 0, i5378, 'progressFillImage')
  var i5381 = i5379[2]
  var i5380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i5381.length; i += 2) {
  request.r(i5381[i + 0], i5381[i + 1], 1, i5380, '')
  }
  i5378.numberImages = i5380
  i5378.progressAnimDuration = i5379[3]
  request.r(i5379[4], i5379[5], 0, i5378, 'targetObject')
  request.r(i5379[6], i5379[7], 0, i5378, 'canvasGroup')
  request.r(i5379[8], i5379[9], 0, i5378, 'animationRoot')
  i5378.worldOffset = new pc.Vec3( i5379[10], i5379[11], i5379[12] )
  i5378.cameraScaleFactor = i5379[13]
  i5378.showAnim = request.d('ShowAnimSettings', i5379[14], i5378.showAnim)
  i5378.hideAnim = request.d('HideAnimSettings', i5379[15], i5378.hideAnim)
  i5378.loopAnim = request.d('LoopAnimSettings', i5379[16], i5378.loopAnim)
  return i5378
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5382 = root || request.c( 'UnityEngine.UI.Button' )
  var i5383 = data
  i5382.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5383[0], i5382.m_OnClick)
  i5382.m_Navigation = request.d('UnityEngine.UI.Navigation', i5383[1], i5382.m_Navigation)
  i5382.m_Transition = i5383[2]
  i5382.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5383[3], i5382.m_Colors)
  i5382.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5383[4], i5382.m_SpriteState)
  i5382.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5383[5], i5382.m_AnimationTriggers)
  i5382.m_Interactable = !!i5383[6]
  request.r(i5383[7], i5383[8], 0, i5382, 'm_TargetGraphic')
  return i5382
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5384 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5385 = data
  i5384.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5385[0], i5384.m_PersistentCalls)
  return i5384
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5386 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5387 = data
  i5386.m_Mode = i5387[0]
  i5386.m_WrapAround = !!i5387[1]
  request.r(i5387[2], i5387[3], 0, i5386, 'm_SelectOnUp')
  request.r(i5387[4], i5387[5], 0, i5386, 'm_SelectOnDown')
  request.r(i5387[6], i5387[7], 0, i5386, 'm_SelectOnLeft')
  request.r(i5387[8], i5387[9], 0, i5386, 'm_SelectOnRight')
  return i5386
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5388 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5389 = data
  i5388.m_NormalColor = new pc.Color(i5389[0], i5389[1], i5389[2], i5389[3])
  i5388.m_HighlightedColor = new pc.Color(i5389[4], i5389[5], i5389[6], i5389[7])
  i5388.m_PressedColor = new pc.Color(i5389[8], i5389[9], i5389[10], i5389[11])
  i5388.m_SelectedColor = new pc.Color(i5389[12], i5389[13], i5389[14], i5389[15])
  i5388.m_DisabledColor = new pc.Color(i5389[16], i5389[17], i5389[18], i5389[19])
  i5388.m_ColorMultiplier = i5389[20]
  i5388.m_FadeDuration = i5389[21]
  return i5388
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5390 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5391 = data
  request.r(i5391[0], i5391[1], 0, i5390, 'm_HighlightedSprite')
  request.r(i5391[2], i5391[3], 0, i5390, 'm_PressedSprite')
  request.r(i5391[4], i5391[5], 0, i5390, 'm_SelectedSprite')
  request.r(i5391[6], i5391[7], 0, i5390, 'm_DisabledSprite')
  return i5390
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5392 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5393 = data
  i5392.m_NormalTrigger = i5393[0]
  i5392.m_HighlightedTrigger = i5393[1]
  i5392.m_PressedTrigger = i5393[2]
  i5392.m_SelectedTrigger = i5393[3]
  i5392.m_DisabledTrigger = i5393[4]
  return i5392
}

Deserializers["Player"] = function (request, data, root) {
  var i5394 = root || request.c( 'Player' )
  var i5395 = data
  i5394.isStop = !!i5395[0]
  request.r(i5395[1], i5395[2], 0, i5394, 'mJoystick')
  request.r(i5395[3], i5395[4], 0, i5394, 'mRigidbody')
  i5394.mAngleDis = i5395[5]
  request.r(i5395[6], i5395[7], 0, i5394, 'mAnimator')
  request.r(i5395[8], i5395[9], 0, i5394, 'mCollider')
  i5394.mHp = i5395[10]
  i5394.mHpMax = i5395[11]
  request.r(i5395[12], i5395[13], 0, i5394, 'mHpUi')
  request.r(i5395[14], i5395[15], 0, i5394, 'itemStackManager')
  request.r(i5395[16], i5395[17], 0, i5394, 'targetGroundStackManager')
  i5394.itemDropOffTimer = i5395[18]
  i5394.itemDropOffCooldown = i5395[19]
  i5394.isDroppingOffItem = !!i5395[20]
  i5394.isCollectingItem = !!i5395[21]
  request.r(i5395[22], i5395[23], 0, i5394, 'maxImg')
  request.r(i5395[24], i5395[25], 0, i5394, 'mAttackCollider')
  request.r(i5395[26], i5395[27], 0, i5394, 'attackRangeIndicator')
  i5394.IsAtHome = !!i5395[28]
  return i5394
}

Deserializers["GameDataEditor"] = function (request, data, root) {
  var i5396 = root || request.c( 'GameDataEditor' )
  var i5397 = data
  request.r(i5397[0], i5397[1], 0, i5396, 'gameConfig')
  i5396.playerSpeed = i5397[2]
  i5396.playerTurnSmoothTime = i5397[3]
  i5396.playerMaxHp = i5397[4]
  i5396.playerAamage = i5397[5]
  i5396.playerAttackInterval = i5397[6]
  i5396.playerAttackRadius = i5397[7]
  i5396.startAngle = i5397[8]
  i5396.endAngle = i5397[9]
  i5396.itemHeightY = i5397[10]
  i5396.enemyCount = i5397[11]
  i5396.enemySpeed = i5397[12]
  i5396.enemyKnockbackForc = i5397[13]
  i5396.enemyMaxHp = i5397[14]
  i5396.enemyAlertRadius = i5397[15]
  i5396.enemyAttackRadius = i5397[16]
  i5396.enemyAttackInterval = i5397[17]
  request.r(i5397[18], i5397[19], 0, i5396, 'patrolAreaMin')
  request.r(i5397[20], i5397[21], 0, i5396, 'patrolAreaMax')
  request.r(i5397[22], i5397[23], 0, i5396, 'enemyHurtMat')
  i5396.customerNeedCount = i5397[24]
  i5396.customerGiveGoin = i5397[25]
  i5396.itemSpawnInterval = i5397[26]
  i5396.enemyDropNum = i5397[27]
  i5396.enemyInitNum = i5397[28]
  return i5396
}

Deserializers["BedProcess"] = function (request, data, root) {
  var i5398 = root || request.c( 'BedProcess' )
  var i5399 = data
  request.r(i5399[0], i5399[1], 0, i5398, 'moneyPos')
  request.r(i5399[2], i5399[3], 0, i5398, 'path')
  request.r(i5399[4], i5399[5], 0, i5398, 'doorPos')
  request.r(i5399[6], i5399[7], 0, i5398, 'groundItemStack')
  return i5398
}

Deserializers["GroundItemStackManager"] = function (request, data, root) {
  var i5400 = root || request.c( 'GroundItemStackManager' )
  var i5401 = data
  i5400.stackedItemType = i5401[0]
  var i5403 = i5401[1]
  var i5402 = new (System.Collections.Generic.List$1(Bridge.ns('GroundItemStack')))
  for(var i = 0; i < i5403.length; i += 2) {
  request.r(i5403[i + 0], i5403[i + 1], 1, i5402, '')
  }
  i5400.stackList = i5402
  i5400.totalStackedItemsAmount = i5401[2]
  i5400.totalMaxAmount = i5401[3]
  i5400.stackItemAcion = request.d('UnityEngine.Events.UnityEvent', i5401[4], i5400.stackItemAcion)
  i5400.Test = !!i5401[5]
  request.r(i5401[6], i5401[7], 0, i5400, 'nomalSR')
  request.r(i5401[8], i5401[9], 0, i5400, 'heighLightSR')
  return i5400
}

Deserializers["GroundItemStack"] = function (request, data, root) {
  var i5406 = root || request.c( 'GroundItemStack' )
  var i5407 = data
  i5406.maxStackAmount = i5407[0]
  i5406.maxHeight = i5407[1]
  i5406.offsetRotation = new pc.Vec3( i5407[2], i5407[3], i5407[4] )
  var i5409 = i5407[5]
  var i5408 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i5409.length; i += 2) {
  request.r(i5409[i + 0], i5409[i + 1], 1, i5408, '')
  }
  i5406.stackedItemList = i5408
  i5406.iscomplet_bend = !!i5407[6]
  i5406.iscomplet_origina = !!i5407[7]
  i5406.stackedItemType = i5407[8]
  i5406.bendDistance = i5407[9]
  i5406.bendDuration = i5407[10]
  i5406.isOpenBend = !!i5407[11]
  return i5406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5411 = data
  i5410.color = new pc.Color(i5411[0], i5411[1], i5411[2], i5411[3])
  request.r(i5411[4], i5411[5], 0, i5410, 'sprite')
  i5410.flipX = !!i5411[6]
  i5410.flipY = !!i5411[7]
  i5410.drawMode = i5411[8]
  i5410.size = new pc.Vec2( i5411[9], i5411[10] )
  i5410.tileMode = i5411[11]
  i5410.adaptiveModeThreshold = i5411[12]
  i5410.maskInteraction = i5411[13]
  i5410.spriteSortPoint = i5411[14]
  i5410.enabled = !!i5411[15]
  request.r(i5411[16], i5411[17], 0, i5410, 'sharedMaterial')
  var i5413 = i5411[18]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 2) {
  request.r(i5413[i + 0], i5413[i + 1], 2, i5412, '')
  }
  i5410.sharedMaterials = i5412
  i5410.receiveShadows = !!i5411[19]
  i5410.shadowCastingMode = i5411[20]
  i5410.sortingLayerID = i5411[21]
  i5410.sortingOrder = i5411[22]
  i5410.lightmapIndex = i5411[23]
  i5410.lightmapSceneIndex = i5411[24]
  i5410.lightmapScaleOffset = new pc.Vec4( i5411[25], i5411[26], i5411[27], i5411[28] )
  i5410.lightProbeUsage = i5411[29]
  i5410.reflectionProbeUsage = i5411[30]
  return i5410
}

Deserializers["PatientInjection"] = function (request, data, root) {
  var i5414 = root || request.c( 'PatientInjection' )
  var i5415 = data
  request.r(i5415[0], i5415[1], 0, i5414, 'itemGround')
  request.r(i5415[2], i5415[3], 0, i5414, 'nomalSR')
  request.r(i5415[4], i5415[5], 0, i5414, 'heighLightSR')
  request.r(i5415[6], i5415[7], 0, i5414, 'nurseNpc')
  return i5414
}

Deserializers["NurseNpc"] = function (request, data, root) {
  var i5416 = root || request.c( 'NurseNpc' )
  var i5417 = data
  request.r(i5417[0], i5417[1], 0, i5416, 'mAnimator')
  i5416.npcType = i5417[2]
  request.r(i5417[3], i5417[4], 0, i5416, 'mCollider')
  request.r(i5417[5], i5417[6], 0, i5416, 'mRigidbody')
  i5416.mMoveSpeed = i5417[7]
  i5416.mTurnSmoothTime = i5417[8]
  return i5416
}

Deserializers["WheatManager"] = function (request, data, root) {
  var i5418 = root || request.c( 'WheatManager' )
  var i5419 = data
  request.r(i5419[0], i5419[1], 0, i5418, 'topLeftPoint')
  request.r(i5419[2], i5419[3], 0, i5418, 'bottomRightPoint')
  i5418.xSpacing = i5419[4]
  i5418.zSpacing = i5419[5]
  return i5418
}

Deserializers["SoakManager"] = function (request, data, root) {
  var i5420 = root || request.c( 'SoakManager' )
  var i5421 = data
  request.r(i5421[0], i5421[1], 0, i5420, 'poolStack')
  request.r(i5421[2], i5421[3], 0, i5420, 'wheatDeliveryStack')
  i5420.wheatPerPatient = i5421[4]
  i5420.wheatFlyDelay = i5421[5]
  request.r(i5421[6], i5421[7], 0, i5420, 'moneyDropPoint')
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5423 = data
  i5422.ambientIntensity = i5423[0]
  i5422.reflectionIntensity = i5423[1]
  i5422.ambientMode = i5423[2]
  i5422.ambientLight = new pc.Color(i5423[3], i5423[4], i5423[5], i5423[6])
  i5422.ambientSkyColor = new pc.Color(i5423[7], i5423[8], i5423[9], i5423[10])
  i5422.ambientGroundColor = new pc.Color(i5423[11], i5423[12], i5423[13], i5423[14])
  i5422.ambientEquatorColor = new pc.Color(i5423[15], i5423[16], i5423[17], i5423[18])
  i5422.fogColor = new pc.Color(i5423[19], i5423[20], i5423[21], i5423[22])
  i5422.fogEndDistance = i5423[23]
  i5422.fogStartDistance = i5423[24]
  i5422.fogDensity = i5423[25]
  i5422.fog = !!i5423[26]
  request.r(i5423[27], i5423[28], 0, i5422, 'skybox')
  i5422.fogMode = i5423[29]
  var i5425 = i5423[30]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 1) {
    i5424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5425[i + 0]) );
  }
  i5422.lightmaps = i5424
  i5422.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5423[31], i5422.lightProbes)
  i5422.lightmapsMode = i5423[32]
  i5422.mixedBakeMode = i5423[33]
  i5422.environmentLightingMode = i5423[34]
  i5422.ambientProbe = new pc.SphericalHarmonicsL2(i5423[35])
  i5422.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5423[36])
  i5422.useReferenceAmbientProbe = !!i5423[37]
  request.r(i5423[38], i5423[39], 0, i5422, 'customReflection')
  request.r(i5423[40], i5423[41], 0, i5422, 'defaultReflection')
  i5422.defaultReflectionMode = i5423[42]
  i5422.defaultReflectionResolution = i5423[43]
  i5422.sunLightObjectId = i5423[44]
  i5422.pixelLightCount = i5423[45]
  i5422.defaultReflectionHDR = !!i5423[46]
  i5422.hasLightDataAsset = !!i5423[47]
  i5422.hasManualGenerate = !!i5423[48]
  return i5422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5429 = data
  request.r(i5429[0], i5429[1], 0, i5428, 'lightmapColor')
  request.r(i5429[2], i5429[3], 0, i5428, 'lightmapDirection')
  request.r(i5429[4], i5429[5], 0, i5428, 'shadowMask')
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5430 = root || new UnityEngine.LightProbes()
  var i5431 = data
  return i5430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i5439 = data
  i5438.AdditionalLightsRenderingMode = i5439[0]
  i5438.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i5439[1], i5438.LightRenderingMode)
  i5438.MainLightRenderingModeValue = i5439[2]
  i5438.SupportsMainLightShadows = !!i5439[3]
  i5438.MainLightShadowmapResolutionValue = i5439[4]
  i5438.SupportsSoftShadows = !!i5439[5]
  i5438.SoftShadowQualityValue = i5439[6]
  i5438.ShadowDistance = i5439[7]
  i5438.ShadowCascadeCount = i5439[8]
  i5438.Cascade2Split = i5439[9]
  i5438.Cascade3Split = new pc.Vec2( i5439[10], i5439[11] )
  i5438.Cascade4Split = new pc.Vec3( i5439[12], i5439[13], i5439[14] )
  i5438.CascadeBorder = i5439[15]
  i5438.ShadowDepthBias = i5439[16]
  i5438.ShadowNormalBias = i5439[17]
  i5438.RequireDepthTexture = !!i5439[18]
  i5438.RequireOpaqueTexture = !!i5439[19]
  i5438.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i5439[20], i5438.scriptableRendererData)
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i5441 = data
  i5440.Disabled = i5441[0]
  i5440.PerVertex = i5441[1]
  i5440.PerPixel = i5441[2]
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i5442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i5443 = data
  i5442.opaqueLayerMask = i5443[0]
  i5442.transparentLayerMask = i5443[1]
  var i5445 = i5443[2]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 1) {
    i5444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i5445[i + 0]) );
  }
  i5442.RenderObjectsFeatures = i5444
  i5442.name = i5443[3]
  return i5442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i5448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i5449 = data
  i5448.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i5449[0], i5448.settings)
  i5448.name = i5449[1]
  i5448.typeName = i5449[2]
  return i5448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5451 = data
  var i5453 = i5451[0]
  var i5452 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5453[i + 0]));
  }
  i5450.ShaderCompilationErrors = i5452
  i5450.name = i5451[1]
  i5450.guid = i5451[2]
  var i5455 = i5451[3]
  var i5454 = []
  for(var i = 0; i < i5455.length; i += 1) {
    i5454.push( i5455[i + 0] );
  }
  i5450.shaderDefinedKeywords = i5454
  var i5457 = i5451[4]
  var i5456 = []
  for(var i = 0; i < i5457.length; i += 1) {
    i5456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5457[i + 0]) );
  }
  i5450.passes = i5456
  var i5459 = i5451[5]
  var i5458 = []
  for(var i = 0; i < i5459.length; i += 1) {
    i5458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5459[i + 0]) );
  }
  i5450.usePasses = i5458
  var i5461 = i5451[6]
  var i5460 = []
  for(var i = 0; i < i5461.length; i += 1) {
    i5460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5461[i + 0]) );
  }
  i5450.defaultParameterValues = i5460
  request.r(i5451[7], i5451[8], 0, i5450, 'unityFallbackShader')
  i5450.readDepth = !!i5451[9]
  i5450.hasDepthOnlyPass = !!i5451[10]
  i5450.isCreatedByShaderGraph = !!i5451[11]
  i5450.disableBatching = !!i5451[12]
  i5450.compiled = !!i5451[13]
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5465 = data
  i5464.shaderName = i5465[0]
  i5464.errorMessage = i5465[1]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5470 = root || new pc.UnityShaderPass()
  var i5471 = data
  i5470.id = i5471[0]
  i5470.subShaderIndex = i5471[1]
  i5470.name = i5471[2]
  i5470.passType = i5471[3]
  i5470.grabPassTextureName = i5471[4]
  i5470.usePass = !!i5471[5]
  i5470.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[6], i5470.zTest)
  i5470.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[7], i5470.zWrite)
  i5470.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[8], i5470.culling)
  i5470.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5471[9], i5470.blending)
  i5470.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5471[10], i5470.alphaBlending)
  i5470.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[11], i5470.colorWriteMask)
  i5470.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[12], i5470.offsetUnits)
  i5470.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[13], i5470.offsetFactor)
  i5470.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[14], i5470.stencilRef)
  i5470.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[15], i5470.stencilReadMask)
  i5470.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5471[16], i5470.stencilWriteMask)
  i5470.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5471[17], i5470.stencilOp)
  i5470.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5471[18], i5470.stencilOpFront)
  i5470.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5471[19], i5470.stencilOpBack)
  var i5473 = i5471[20]
  var i5472 = []
  for(var i = 0; i < i5473.length; i += 1) {
    i5472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5473[i + 0]) );
  }
  i5470.tags = i5472
  var i5475 = i5471[21]
  var i5474 = []
  for(var i = 0; i < i5475.length; i += 1) {
    i5474.push( i5475[i + 0] );
  }
  i5470.passDefinedKeywords = i5474
  var i5477 = i5471[22]
  var i5476 = []
  for(var i = 0; i < i5477.length; i += 1) {
    i5476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5477[i + 0]) );
  }
  i5470.passDefinedKeywordGroups = i5476
  var i5479 = i5471[23]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5479[i + 0]) );
  }
  i5470.variants = i5478
  var i5481 = i5471[24]
  var i5480 = []
  for(var i = 0; i < i5481.length; i += 1) {
    i5480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5481[i + 0]) );
  }
  i5470.excludedVariants = i5480
  i5470.hasDepthReader = !!i5471[25]
  return i5470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5483 = data
  i5482.val = i5483[0]
  i5482.name = i5483[1]
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5485 = data
  i5484.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5485[0], i5484.src)
  i5484.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5485[1], i5484.dst)
  i5484.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5485[2], i5484.op)
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5487 = data
  i5486.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5487[0], i5486.pass)
  i5486.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5487[1], i5486.fail)
  i5486.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5487[2], i5486.zFail)
  i5486.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5487[3], i5486.comp)
  return i5486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5491 = data
  i5490.name = i5491[0]
  i5490.value = i5491[1]
  return i5490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5495 = data
  var i5497 = i5495[0]
  var i5496 = []
  for(var i = 0; i < i5497.length; i += 1) {
    i5496.push( i5497[i + 0] );
  }
  i5494.keywords = i5496
  i5494.hasDiscard = !!i5495[1]
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5501 = data
  i5500.passId = i5501[0]
  i5500.subShaderIndex = i5501[1]
  var i5503 = i5501[2]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 1) {
    i5502.push( i5503[i + 0] );
  }
  i5500.keywords = i5502
  i5500.vertexProgram = i5501[3]
  i5500.fragmentProgram = i5501[4]
  i5500.exportedForWebGl2 = !!i5501[5]
  i5500.readDepth = !!i5501[6]
  return i5500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5507 = data
  request.r(i5507[0], i5507[1], 0, i5506, 'shader')
  i5506.pass = i5507[2]
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5511 = data
  i5510.name = i5511[0]
  i5510.type = i5511[1]
  i5510.value = new pc.Vec4( i5511[2], i5511[3], i5511[4], i5511[5] )
  i5510.textureValue = i5511[6]
  i5510.shaderPropertyFlag = i5511[7]
  return i5510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5513 = data
  i5512.name = i5513[0]
  request.r(i5513[1], i5513[2], 0, i5512, 'texture')
  i5512.aabb = i5513[3]
  i5512.vertices = i5513[4]
  i5512.triangles = i5513[5]
  i5512.textureRect = UnityEngine.Rect.MinMaxRect(i5513[6], i5513[7], i5513[8], i5513[9])
  i5512.packedRect = UnityEngine.Rect.MinMaxRect(i5513[10], i5513[11], i5513[12], i5513[13])
  i5512.border = new pc.Vec4( i5513[14], i5513[15], i5513[16], i5513[17] )
  i5512.transparency = i5513[18]
  i5512.bounds = i5513[19]
  i5512.pixelsPerUnit = i5513[20]
  i5512.textureWidth = i5513[21]
  i5512.textureHeight = i5513[22]
  i5512.nativeSize = new pc.Vec2( i5513[23], i5513[24] )
  i5512.pivot = new pc.Vec2( i5513[25], i5513[26] )
  i5512.textureRectOffset = new pc.Vec2( i5513[27], i5513[28] )
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5515 = data
  i5514.name = i5515[0]
  i5514.wrapMode = i5515[1]
  i5514.isLooping = !!i5515[2]
  i5514.length = i5515[3]
  var i5517 = i5515[4]
  var i5516 = []
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5517[i + 0]) );
  }
  i5514.curves = i5516
  var i5519 = i5515[5]
  var i5518 = []
  for(var i = 0; i < i5519.length; i += 1) {
    i5518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5519[i + 0]) );
  }
  i5514.events = i5518
  i5514.halfPrecision = !!i5515[6]
  i5514._frameRate = i5515[7]
  i5514.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5515[8], i5514.localBounds)
  i5514.hasMuscleCurves = !!i5515[9]
  var i5521 = i5515[10]
  var i5520 = []
  for(var i = 0; i < i5521.length; i += 1) {
    i5520.push( i5521[i + 0] );
  }
  i5514.clipMuscleConstant = i5520
  i5514.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5515[11], i5514.clipBindingConstant)
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5525 = data
  i5524.path = i5525[0]
  i5524.hash = i5525[1]
  i5524.componentType = i5525[2]
  i5524.property = i5525[3]
  i5524.keys = i5525[4]
  var i5527 = i5525[5]
  var i5526 = []
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5527[i + 0]) );
  }
  i5524.objectReferenceKeys = i5526
  return i5524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5531 = data
  i5530.functionName = i5531[0]
  i5530.floatParameter = i5531[1]
  i5530.intParameter = i5531[2]
  i5530.stringParameter = i5531[3]
  request.r(i5531[4], i5531[5], 0, i5530, 'objectReferenceParameter')
  i5530.time = i5531[6]
  return i5530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5533 = data
  i5532.center = new pc.Vec3( i5533[0], i5533[1], i5533[2] )
  i5532.extends = new pc.Vec3( i5533[3], i5533[4], i5533[5] )
  return i5532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5537 = data
  var i5539 = i5537[0]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 1) {
    i5538.push( i5539[i + 0] );
  }
  i5536.genericBindings = i5538
  var i5541 = i5537[1]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 1) {
    i5540.push( i5541[i + 0] );
  }
  i5536.pptrCurveMapping = i5540
  return i5536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5545 = data
  i5544.time = i5545[0]
  request.r(i5545[1], i5545[2], 0, i5544, 'value')
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5547 = data
  i5546.name = i5547[0]
  i5546.ascent = i5547[1]
  i5546.originalLineHeight = i5547[2]
  i5546.fontSize = i5547[3]
  var i5549 = i5547[4]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 1) {
    i5548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5549[i + 0]) );
  }
  i5546.characterInfo = i5548
  request.r(i5547[5], i5547[6], 0, i5546, 'texture')
  i5546.originalFontSize = i5547[7]
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5553 = data
  i5552.index = i5553[0]
  i5552.advance = i5553[1]
  i5552.bearing = i5553[2]
  i5552.glyphWidth = i5553[3]
  i5552.glyphHeight = i5553[4]
  i5552.minX = i5553[5]
  i5552.maxX = i5553[6]
  i5552.minY = i5553[7]
  i5552.maxY = i5553[8]
  i5552.uvBottomLeftX = i5553[9]
  i5552.uvBottomLeftY = i5553[10]
  i5552.uvBottomRightX = i5553[11]
  i5552.uvBottomRightY = i5553[12]
  i5552.uvTopLeftX = i5553[13]
  i5552.uvTopLeftY = i5553[14]
  i5552.uvTopRightX = i5553[15]
  i5552.uvTopRightY = i5553[16]
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5555 = data
  i5554.name = i5555[0]
  var i5557 = i5555[1]
  var i5556 = []
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5557[i + 0]) );
  }
  i5554.layers = i5556
  var i5559 = i5555[2]
  var i5558 = []
  for(var i = 0; i < i5559.length; i += 1) {
    i5558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5559[i + 0]) );
  }
  i5554.parameters = i5558
  i5554.animationClips = i5555[3]
  i5554.avatarUnsupported = i5555[4]
  return i5554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5563 = data
  i5562.name = i5563[0]
  i5562.defaultWeight = i5563[1]
  i5562.blendingMode = i5563[2]
  i5562.avatarMask = i5563[3]
  i5562.syncedLayerIndex = i5563[4]
  i5562.syncedLayerAffectsTiming = !!i5563[5]
  i5562.syncedLayers = i5563[6]
  i5562.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5563[7], i5562.stateMachine)
  return i5562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5565 = data
  i5564.id = i5565[0]
  i5564.name = i5565[1]
  i5564.path = i5565[2]
  var i5567 = i5565[3]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5567[i + 0]) );
  }
  i5564.states = i5566
  var i5569 = i5565[4]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5569[i + 0]) );
  }
  i5564.machines = i5568
  var i5571 = i5565[5]
  var i5570 = []
  for(var i = 0; i < i5571.length; i += 1) {
    i5570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5571[i + 0]) );
  }
  i5564.entryStateTransitions = i5570
  var i5573 = i5565[6]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 1) {
    i5572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5573[i + 0]) );
  }
  i5564.exitStateTransitions = i5572
  var i5575 = i5565[7]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 1) {
    i5574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5575[i + 0]) );
  }
  i5564.anyStateTransitions = i5574
  i5564.defaultStateId = i5565[8]
  return i5564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5579 = data
  i5578.id = i5579[0]
  i5578.name = i5579[1]
  i5578.cycleOffset = i5579[2]
  i5578.cycleOffsetParameter = i5579[3]
  i5578.cycleOffsetParameterActive = !!i5579[4]
  i5578.mirror = !!i5579[5]
  i5578.mirrorParameter = i5579[6]
  i5578.mirrorParameterActive = !!i5579[7]
  i5578.motionId = i5579[8]
  i5578.nameHash = i5579[9]
  i5578.fullPathHash = i5579[10]
  i5578.speed = i5579[11]
  i5578.speedParameter = i5579[12]
  i5578.speedParameterActive = !!i5579[13]
  i5578.tag = i5579[14]
  i5578.tagHash = i5579[15]
  i5578.writeDefaultValues = !!i5579[16]
  var i5581 = i5579[17]
  var i5580 = []
  for(var i = 0; i < i5581.length; i += 2) {
  request.r(i5581[i + 0], i5581[i + 1], 2, i5580, '')
  }
  i5578.behaviours = i5580
  var i5583 = i5579[18]
  var i5582 = []
  for(var i = 0; i < i5583.length; i += 1) {
    i5582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5583[i + 0]) );
  }
  i5578.transitions = i5582
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5589 = data
  i5588.fullPath = i5589[0]
  i5588.canTransitionToSelf = !!i5589[1]
  i5588.duration = i5589[2]
  i5588.exitTime = i5589[3]
  i5588.hasExitTime = !!i5589[4]
  i5588.hasFixedDuration = !!i5589[5]
  i5588.interruptionSource = i5589[6]
  i5588.offset = i5589[7]
  i5588.orderedInterruption = !!i5589[8]
  i5588.destinationStateId = i5589[9]
  i5588.isExit = !!i5589[10]
  i5588.mute = !!i5589[11]
  i5588.solo = !!i5589[12]
  var i5591 = i5589[13]
  var i5590 = []
  for(var i = 0; i < i5591.length; i += 1) {
    i5590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5591[i + 0]) );
  }
  i5588.conditions = i5590
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5595 = data
  i5594.mode = i5595[0]
  i5594.parameter = i5595[1]
  i5594.threshold = i5595[2]
  return i5594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5601 = data
  i5600.destinationStateId = i5601[0]
  i5600.isExit = !!i5601[1]
  i5600.mute = !!i5601[2]
  i5600.solo = !!i5601[3]
  var i5603 = i5601[4]
  var i5602 = []
  for(var i = 0; i < i5603.length; i += 1) {
    i5602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5603[i + 0]) );
  }
  i5600.conditions = i5602
  return i5600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5607 = data
  i5606.defaultBool = !!i5607[0]
  i5606.defaultFloat = i5607[1]
  i5606.defaultInt = i5607[2]
  i5606.name = i5607[3]
  i5606.nameHash = i5607[4]
  i5606.type = i5607[5]
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5609 = data
  i5608.name = i5609[0]
  i5608.bytes64 = i5609[1]
  i5608.data = i5609[2]
  return i5608
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5610 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5611 = data
  request.r(i5611[0], i5611[1], 0, i5610, 'atlas')
  i5610.normalStyle = i5611[2]
  i5610.normalSpacingOffset = i5611[3]
  i5610.boldStyle = i5611[4]
  i5610.boldSpacing = i5611[5]
  i5610.italicStyle = i5611[6]
  i5610.tabSize = i5611[7]
  i5610.hashCode = i5611[8]
  request.r(i5611[9], i5611[10], 0, i5610, 'material')
  i5610.materialHashCode = i5611[11]
  i5610.m_Version = i5611[12]
  i5610.m_SourceFontFileGUID = i5611[13]
  request.r(i5611[14], i5611[15], 0, i5610, 'm_SourceFontFile_EditorRef')
  request.r(i5611[16], i5611[17], 0, i5610, 'm_SourceFontFile')
  i5610.m_AtlasPopulationMode = i5611[18]
  i5610.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5611[19], i5610.m_FaceInfo)
  var i5613 = i5611[20]
  var i5612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5613.length; i += 1) {
    i5612.add(request.d('UnityEngine.TextCore.Glyph', i5613[i + 0]));
  }
  i5610.m_GlyphTable = i5612
  var i5615 = i5611[21]
  var i5614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5615.length; i += 1) {
    i5614.add(request.d('TMPro.TMP_Character', i5615[i + 0]));
  }
  i5610.m_CharacterTable = i5614
  var i5617 = i5611[22]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 2) {
  request.r(i5617[i + 0], i5617[i + 1], 2, i5616, '')
  }
  i5610.m_AtlasTextures = i5616
  i5610.m_AtlasTextureIndex = i5611[23]
  i5610.m_IsMultiAtlasTexturesEnabled = !!i5611[24]
  i5610.m_ClearDynamicDataOnBuild = !!i5611[25]
  var i5619 = i5611[26]
  var i5618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.add(request.d('UnityEngine.TextCore.GlyphRect', i5619[i + 0]));
  }
  i5610.m_UsedGlyphRects = i5618
  var i5621 = i5611[27]
  var i5620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5621.length; i += 1) {
    i5620.add(request.d('UnityEngine.TextCore.GlyphRect', i5621[i + 0]));
  }
  i5610.m_FreeGlyphRects = i5620
  i5610.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5611[28], i5610.m_fontInfo)
  i5610.m_AtlasWidth = i5611[29]
  i5610.m_AtlasHeight = i5611[30]
  i5610.m_AtlasPadding = i5611[31]
  i5610.m_AtlasRenderMode = i5611[32]
  var i5623 = i5611[33]
  var i5622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5623.length; i += 1) {
    i5622.add(request.d('TMPro.TMP_Glyph', i5623[i + 0]));
  }
  i5610.m_glyphInfoList = i5622
  i5610.m_KerningTable = request.d('TMPro.KerningTable', i5611[34], i5610.m_KerningTable)
  i5610.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5611[35], i5610.m_FontFeatureTable)
  var i5625 = i5611[36]
  var i5624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5625.length; i += 2) {
  request.r(i5625[i + 0], i5625[i + 1], 1, i5624, '')
  }
  i5610.fallbackFontAssets = i5624
  var i5627 = i5611[37]
  var i5626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5627.length; i += 2) {
  request.r(i5627[i + 0], i5627[i + 1], 1, i5626, '')
  }
  i5610.m_FallbackFontAssetTable = i5626
  i5610.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5611[38], i5610.m_CreationSettings)
  var i5629 = i5611[39]
  var i5628 = []
  for(var i = 0; i < i5629.length; i += 1) {
    i5628.push( request.d('TMPro.TMP_FontWeightPair', i5629[i + 0]) );
  }
  i5610.m_FontWeightTable = i5628
  var i5631 = i5611[40]
  var i5630 = []
  for(var i = 0; i < i5631.length; i += 1) {
    i5630.push( request.d('TMPro.TMP_FontWeightPair', i5631[i + 0]) );
  }
  i5610.fontWeights = i5630
  return i5610
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5632 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5633 = data
  i5632.m_FaceIndex = i5633[0]
  i5632.m_FamilyName = i5633[1]
  i5632.m_StyleName = i5633[2]
  i5632.m_PointSize = i5633[3]
  i5632.m_Scale = i5633[4]
  i5632.m_UnitsPerEM = i5633[5]
  i5632.m_LineHeight = i5633[6]
  i5632.m_AscentLine = i5633[7]
  i5632.m_CapLine = i5633[8]
  i5632.m_MeanLine = i5633[9]
  i5632.m_Baseline = i5633[10]
  i5632.m_DescentLine = i5633[11]
  i5632.m_SuperscriptOffset = i5633[12]
  i5632.m_SuperscriptSize = i5633[13]
  i5632.m_SubscriptOffset = i5633[14]
  i5632.m_SubscriptSize = i5633[15]
  i5632.m_UnderlineOffset = i5633[16]
  i5632.m_UnderlineThickness = i5633[17]
  i5632.m_StrikethroughOffset = i5633[18]
  i5632.m_StrikethroughThickness = i5633[19]
  i5632.m_TabWidth = i5633[20]
  return i5632
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5636 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5637 = data
  i5636.m_Index = i5637[0]
  i5636.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5637[1], i5636.m_Metrics)
  i5636.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5637[2], i5636.m_GlyphRect)
  i5636.m_Scale = i5637[3]
  i5636.m_AtlasIndex = i5637[4]
  i5636.m_ClassDefinitionType = i5637[5]
  return i5636
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5638 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5639 = data
  i5638.m_Width = i5639[0]
  i5638.m_Height = i5639[1]
  i5638.m_HorizontalBearingX = i5639[2]
  i5638.m_HorizontalBearingY = i5639[3]
  i5638.m_HorizontalAdvance = i5639[4]
  return i5638
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5640 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5641 = data
  i5640.m_X = i5641[0]
  i5640.m_Y = i5641[1]
  i5640.m_Width = i5641[2]
  i5640.m_Height = i5641[3]
  return i5640
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5644 = root || request.c( 'TMPro.TMP_Character' )
  var i5645 = data
  i5644.m_ElementType = i5645[0]
  i5644.m_Unicode = i5645[1]
  i5644.m_GlyphIndex = i5645[2]
  i5644.m_Scale = i5645[3]
  return i5644
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5650 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5651 = data
  i5650.Name = i5651[0]
  i5650.PointSize = i5651[1]
  i5650.Scale = i5651[2]
  i5650.CharacterCount = i5651[3]
  i5650.LineHeight = i5651[4]
  i5650.Baseline = i5651[5]
  i5650.Ascender = i5651[6]
  i5650.CapHeight = i5651[7]
  i5650.Descender = i5651[8]
  i5650.CenterLine = i5651[9]
  i5650.SuperscriptOffset = i5651[10]
  i5650.SubscriptOffset = i5651[11]
  i5650.SubSize = i5651[12]
  i5650.Underline = i5651[13]
  i5650.UnderlineThickness = i5651[14]
  i5650.strikethrough = i5651[15]
  i5650.strikethroughThickness = i5651[16]
  i5650.TabWidth = i5651[17]
  i5650.Padding = i5651[18]
  i5650.AtlasWidth = i5651[19]
  i5650.AtlasHeight = i5651[20]
  return i5650
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5654 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5655 = data
  i5654.id = i5655[0]
  i5654.x = i5655[1]
  i5654.y = i5655[2]
  i5654.width = i5655[3]
  i5654.height = i5655[4]
  i5654.xOffset = i5655[5]
  i5654.yOffset = i5655[6]
  i5654.xAdvance = i5655[7]
  i5654.scale = i5655[8]
  return i5654
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5656 = root || request.c( 'TMPro.KerningTable' )
  var i5657 = data
  var i5659 = i5657[0]
  var i5658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5659.length; i += 1) {
    i5658.add(request.d('TMPro.KerningPair', i5659[i + 0]));
  }
  i5656.kerningPairs = i5658
  return i5656
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5662 = root || request.c( 'TMPro.KerningPair' )
  var i5663 = data
  i5662.xOffset = i5663[0]
  i5662.m_FirstGlyph = i5663[1]
  i5662.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5663[2], i5662.m_FirstGlyphAdjustments)
  i5662.m_SecondGlyph = i5663[3]
  i5662.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5663[4], i5662.m_SecondGlyphAdjustments)
  i5662.m_IgnoreSpacingAdjustments = !!i5663[5]
  return i5662
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5664 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5665 = data
  var i5667 = i5665[0]
  var i5666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5667[i + 0]));
  }
  i5664.m_GlyphPairAdjustmentRecords = i5666
  return i5664
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5670 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5671 = data
  i5670.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5671[0], i5670.m_FirstAdjustmentRecord)
  i5670.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5671[1], i5670.m_SecondAdjustmentRecord)
  i5670.m_FeatureLookupFlags = i5671[2]
  return i5670
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5672 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5673 = data
  i5672.m_GlyphIndex = i5673[0]
  i5672.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5673[1], i5672.m_GlyphValueRecord)
  return i5672
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5674 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5675 = data
  i5674.m_XPlacement = i5675[0]
  i5674.m_YPlacement = i5675[1]
  i5674.m_XAdvance = i5675[2]
  i5674.m_YAdvance = i5675[3]
  return i5674
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5678 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5679 = data
  i5678.sourceFontFileName = i5679[0]
  i5678.sourceFontFileGUID = i5679[1]
  i5678.pointSizeSamplingMode = i5679[2]
  i5678.pointSize = i5679[3]
  i5678.padding = i5679[4]
  i5678.packingMode = i5679[5]
  i5678.atlasWidth = i5679[6]
  i5678.atlasHeight = i5679[7]
  i5678.characterSetSelectionMode = i5679[8]
  i5678.characterSequence = i5679[9]
  i5678.referencedFontAssetGUID = i5679[10]
  i5678.referencedTextAssetGUID = i5679[11]
  i5678.fontStyle = i5679[12]
  i5678.fontStyleModifier = i5679[13]
  i5678.renderMode = i5679[14]
  i5678.includeFontFeatures = !!i5679[15]
  return i5678
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5682 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5683 = data
  request.r(i5683[0], i5683[1], 0, i5682, 'regularTypeface')
  request.r(i5683[2], i5683[3], 0, i5682, 'italicTypeface')
  return i5682
}

Deserializers["ExcelTool.GameConfig"] = function (request, data, root) {
  var i5684 = root || request.c( 'ExcelTool.GameConfig' )
  var i5685 = data
  i5684._excelFilePath = i5685[0]
  i5684._sheetIndices = i5685[1]
  i5684.玩家数据 = request.d('ExcelTool.GameConfig+玩家数据Data', i5685[2], i5684.玩家数据)
  i5684.老鼠数据 = request.d('ExcelTool.GameConfig+老鼠数据Data', i5685[3], i5684.老鼠数据)
  i5684.其他配置 = request.d('ExcelTool.GameConfig+其他配置Data', i5685[4], i5684.其他配置)
  var i5687 = i5685[5]
  var i5686 = new (System.Collections.Generic.List$1(Bridge.ns('ExcelTool.GameConfig+ClerkInfoItem')))
  for(var i = 0; i < i5687.length; i += 1) {
    i5686.add(request.d('ExcelTool.GameConfig+ClerkInfoItem', i5687[i + 0]));
  }
  i5684.clerkInfo = i5686
  var i5689 = i5685[6]
  var i5688 = new (System.Collections.Generic.List$1(Bridge.ns('ExcelTool.GameConfig+GuildInfoItem')))
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.add(request.d('ExcelTool.GameConfig+GuildInfoItem', i5689[i + 0]));
  }
  i5684.guildInfo = i5688
  return i5684
}

Deserializers["ExcelTool.GameConfig+玩家数据Data"] = function (request, data, root) {
  var i5690 = root || request.c( 'ExcelTool.GameConfig+玩家数据Data' )
  var i5691 = data
  i5690.playerSpeed = i5691[0]
  i5690.playerTurnSmoothTime = i5691[1]
  i5690.playerMaxHp = i5691[2]
  return i5690
}

Deserializers["ExcelTool.GameConfig+老鼠数据Data"] = function (request, data, root) {
  var i5692 = root || request.c( 'ExcelTool.GameConfig+老鼠数据Data' )
  var i5693 = data
  i5692.enemyCount = i5693[0]
  i5692.enemySpeed = i5693[1]
  i5692.enemyKnockbackForc = i5693[2]
  i5692.enemyDropMoney = i5693[3]
  i5692.enemyInitNum = i5693[4]
  return i5692
}

Deserializers["ExcelTool.GameConfig+其他配置Data"] = function (request, data, root) {
  var i5694 = root || request.c( 'ExcelTool.GameConfig+其他配置Data' )
  var i5695 = data
  i5694.wheatTime = i5695[0]
  i5694.patientNum = i5695[1]
  i5694.farmerPatientNum = i5695[2]
  i5694.elevatorTime = i5695[3]
  i5694.patienMoney = i5695[4]
  i5694.farmerPatienMoney = i5695[5]
  i5694.wheatPerPatient = i5695[6]
  i5694.maxPatient1 = i5695[7]
  i5694.maxPatient2 = i5695[8]
  i5694.maxPatient3 = i5695[9]
  i5694.moneyValue = i5695[10]
  i5694.collectTime = i5695[11]
  i5694.collectNum = i5695[12]
  i5694.HpTime = i5695[13]
  i5694.HpPecent = i5695[14]
  i5694.maxPatienNum = i5695[15]
  i5694.maxfarmerPatienNum = i5695[16]
  i5694.maxSoakNum = i5695[17]
  i5694.maxElevatorNum = i5695[18]
  return i5694
}

Deserializers["ExcelTool.GameConfig+ClerkInfoItem"] = function (request, data, root) {
  var i5698 = root || request.c( 'ExcelTool.GameConfig+ClerkInfoItem' )
  var i5699 = data
  i5698.id = i5699[0]
  i5698.getTotalCoin = i5699[1]
  var i5701 = i5699[2]
  var i5700 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i5701.length; i += 1) {
    i5700.add(i5701[i + 0]);
  }
  i5698.unlockIds = i5700
  i5698.price = i5699[3]
  i5698.eventStr = i5699[4]
  return i5698
}

Deserializers["ExcelTool.GameConfig+GuildInfoItem"] = function (request, data, root) {
  var i5706 = root || request.c( 'ExcelTool.GameConfig+GuildInfoItem' )
  var i5707 = data
  i5706.id = i5707[0]
  i5706.priority = i5707[1]
  i5706.triggerType = i5707[2]
  i5706.triggerNum = i5707[3]
  i5706.triggerName = i5707[4]
  i5706.hideType = i5707[5]
  i5706.hideNum = i5707[6]
  i5706.hideName = i5707[7]
  return i5706
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5708 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5709 = data
  i5708.useSafeMode = !!i5709[0]
  i5708.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5709[1], i5708.safeModeOptions)
  i5708.timeScale = i5709[2]
  i5708.unscaledTimeScale = i5709[3]
  i5708.useSmoothDeltaTime = !!i5709[4]
  i5708.maxSmoothUnscaledTime = i5709[5]
  i5708.rewindCallbackMode = i5709[6]
  i5708.showUnityEditorReport = !!i5709[7]
  i5708.logBehaviour = i5709[8]
  i5708.drawGizmos = !!i5709[9]
  i5708.defaultRecyclable = !!i5709[10]
  i5708.defaultAutoPlay = i5709[11]
  i5708.defaultUpdateType = i5709[12]
  i5708.defaultTimeScaleIndependent = !!i5709[13]
  i5708.defaultEaseType = i5709[14]
  i5708.defaultEaseOvershootOrAmplitude = i5709[15]
  i5708.defaultEasePeriod = i5709[16]
  i5708.defaultAutoKill = !!i5709[17]
  i5708.defaultLoopType = i5709[18]
  i5708.debugMode = !!i5709[19]
  i5708.debugStoreTargetId = !!i5709[20]
  i5708.showPreviewPanel = !!i5709[21]
  i5708.storeSettingsLocation = i5709[22]
  i5708.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5709[23], i5708.modules)
  i5708.createASMDEF = !!i5709[24]
  i5708.showPlayingTweens = !!i5709[25]
  i5708.showPausedTweens = !!i5709[26]
  return i5708
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5711 = data
  i5710.logBehaviour = i5711[0]
  i5710.nestedTweenFailureBehaviour = i5711[1]
  return i5710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5713 = data
  i5712.showPanel = !!i5713[0]
  i5712.audioEnabled = !!i5713[1]
  i5712.physicsEnabled = !!i5713[2]
  i5712.physics2DEnabled = !!i5713[3]
  i5712.spriteEnabled = !!i5713[4]
  i5712.uiEnabled = !!i5713[5]
  i5712.textMeshProEnabled = !!i5713[6]
  i5712.tk2DEnabled = !!i5713[7]
  i5712.deAudioEnabled = !!i5713[8]
  i5712.deUnityExtendedEnabled = !!i5713[9]
  i5712.epoOutlineEnabled = !!i5713[10]
  return i5712
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5714 = root || request.c( 'TMPro.TMP_Settings' )
  var i5715 = data
  i5714.m_enableWordWrapping = !!i5715[0]
  i5714.m_enableKerning = !!i5715[1]
  i5714.m_enableExtraPadding = !!i5715[2]
  i5714.m_enableTintAllSprites = !!i5715[3]
  i5714.m_enableParseEscapeCharacters = !!i5715[4]
  i5714.m_EnableRaycastTarget = !!i5715[5]
  i5714.m_GetFontFeaturesAtRuntime = !!i5715[6]
  i5714.m_missingGlyphCharacter = i5715[7]
  i5714.m_warningsDisabled = !!i5715[8]
  request.r(i5715[9], i5715[10], 0, i5714, 'm_defaultFontAsset')
  i5714.m_defaultFontAssetPath = i5715[11]
  i5714.m_defaultFontSize = i5715[12]
  i5714.m_defaultAutoSizeMinRatio = i5715[13]
  i5714.m_defaultAutoSizeMaxRatio = i5715[14]
  i5714.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5715[15], i5715[16] )
  i5714.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5715[17], i5715[18] )
  i5714.m_autoSizeTextContainer = !!i5715[19]
  i5714.m_IsTextObjectScaleStatic = !!i5715[20]
  var i5717 = i5715[21]
  var i5716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5717.length; i += 2) {
  request.r(i5717[i + 0], i5717[i + 1], 1, i5716, '')
  }
  i5714.m_fallbackFontAssets = i5716
  i5714.m_matchMaterialPreset = !!i5715[22]
  request.r(i5715[23], i5715[24], 0, i5714, 'm_defaultSpriteAsset')
  i5714.m_defaultSpriteAssetPath = i5715[25]
  i5714.m_enableEmojiSupport = !!i5715[26]
  i5714.m_MissingCharacterSpriteUnicode = i5715[27]
  i5714.m_defaultColorGradientPresetsPath = i5715[28]
  request.r(i5715[29], i5715[30], 0, i5714, 'm_defaultStyleSheet')
  i5714.m_StyleSheetsResourcePath = i5715[31]
  request.r(i5715[32], i5715[33], 0, i5714, 'm_leadingCharacters')
  request.r(i5715[34], i5715[35], 0, i5714, 'm_followingCharacters')
  i5714.m_UseModernHangulLineBreakingRules = !!i5715[36]
  return i5714
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5718 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5719 = data
  request.r(i5719[0], i5719[1], 0, i5718, 'spriteSheet')
  var i5721 = i5719[2]
  var i5720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5721.length; i += 1) {
    i5720.add(request.d('TMPro.TMP_Sprite', i5721[i + 0]));
  }
  i5718.spriteInfoList = i5720
  var i5723 = i5719[3]
  var i5722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5723.length; i += 2) {
  request.r(i5723[i + 0], i5723[i + 1], 1, i5722, '')
  }
  i5718.fallbackSpriteAssets = i5722
  i5718.hashCode = i5719[4]
  request.r(i5719[5], i5719[6], 0, i5718, 'material')
  i5718.materialHashCode = i5719[7]
  i5718.m_Version = i5719[8]
  i5718.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5719[9], i5718.m_FaceInfo)
  var i5725 = i5719[10]
  var i5724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5725.length; i += 1) {
    i5724.add(request.d('TMPro.TMP_SpriteCharacter', i5725[i + 0]));
  }
  i5718.m_SpriteCharacterTable = i5724
  var i5727 = i5719[11]
  var i5726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5727.length; i += 1) {
    i5726.add(request.d('TMPro.TMP_SpriteGlyph', i5727[i + 0]));
  }
  i5718.m_SpriteGlyphTable = i5726
  return i5718
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5730 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5731 = data
  i5730.name = i5731[0]
  i5730.hashCode = i5731[1]
  i5730.unicode = i5731[2]
  i5730.pivot = new pc.Vec2( i5731[3], i5731[4] )
  request.r(i5731[5], i5731[6], 0, i5730, 'sprite')
  i5730.id = i5731[7]
  i5730.x = i5731[8]
  i5730.y = i5731[9]
  i5730.width = i5731[10]
  i5730.height = i5731[11]
  i5730.xOffset = i5731[12]
  i5730.yOffset = i5731[13]
  i5730.xAdvance = i5731[14]
  i5730.scale = i5731[15]
  return i5730
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5736 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5737 = data
  i5736.m_Name = i5737[0]
  i5736.m_HashCode = i5737[1]
  i5736.m_ElementType = i5737[2]
  i5736.m_Unicode = i5737[3]
  i5736.m_GlyphIndex = i5737[4]
  i5736.m_Scale = i5737[5]
  return i5736
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5740 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5741 = data
  request.r(i5741[0], i5741[1], 0, i5740, 'sprite')
  i5740.m_Index = i5741[2]
  i5740.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5741[3], i5740.m_Metrics)
  i5740.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5741[4], i5740.m_GlyphRect)
  i5740.m_Scale = i5741[5]
  i5740.m_AtlasIndex = i5741[6]
  i5740.m_ClassDefinitionType = i5741[7]
  return i5740
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5742 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5743 = data
  var i5745 = i5743[0]
  var i5744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.add(request.d('TMPro.TMP_Style', i5745[i + 0]));
  }
  i5742.m_StyleList = i5744
  return i5742
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5748 = root || request.c( 'TMPro.TMP_Style' )
  var i5749 = data
  i5748.m_Name = i5749[0]
  i5748.m_HashCode = i5749[1]
  i5748.m_OpeningDefinition = i5749[2]
  i5748.m_ClosingDefinition = i5749[3]
  i5748.m_OpeningTagArray = i5749[4]
  i5748.m_ClosingTagArray = i5749[5]
  i5748.m_OpeningTagUnicodeArray = i5749[6]
  i5748.m_ClosingTagUnicodeArray = i5749[7]
  return i5748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5751 = data
  var i5753 = i5751[0]
  var i5752 = []
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5753[i + 0]) );
  }
  i5750.files = i5752
  i5750.componentToPrefabIds = i5751[1]
  return i5750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5757 = data
  i5756.path = i5757[0]
  request.r(i5757[1], i5757[2], 0, i5756, 'unityObject')
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5759 = data
  var i5761 = i5759[0]
  var i5760 = []
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5761[i + 0]) );
  }
  i5758.scriptsExecutionOrder = i5760
  var i5763 = i5759[1]
  var i5762 = []
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5763[i + 0]) );
  }
  i5758.sortingLayers = i5762
  var i5765 = i5759[2]
  var i5764 = []
  for(var i = 0; i < i5765.length; i += 1) {
    i5764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5765[i + 0]) );
  }
  i5758.cullingLayers = i5764
  i5758.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5759[3], i5758.timeSettings)
  i5758.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5759[4], i5758.physicsSettings)
  i5758.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5759[5], i5758.physics2DSettings)
  i5758.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5759[6], i5758.qualitySettings)
  i5758.enableRealtimeShadows = !!i5759[7]
  i5758.enableAutoInstancing = !!i5759[8]
  i5758.enableStaticBatching = !!i5759[9]
  i5758.enableDynamicBatching = !!i5759[10]
  i5758.lightmapEncodingQuality = i5759[11]
  i5758.desiredColorSpace = i5759[12]
  var i5767 = i5759[13]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( i5767[i + 0] );
  }
  i5758.allTags = i5766
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5771 = data
  i5770.name = i5771[0]
  i5770.value = i5771[1]
  return i5770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5775 = data
  i5774.id = i5775[0]
  i5774.name = i5775[1]
  i5774.value = i5775[2]
  return i5774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5779 = data
  i5778.id = i5779[0]
  i5778.name = i5779[1]
  return i5778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5781 = data
  i5780.fixedDeltaTime = i5781[0]
  i5780.maximumDeltaTime = i5781[1]
  i5780.timeScale = i5781[2]
  i5780.maximumParticleTimestep = i5781[3]
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5783 = data
  i5782.gravity = new pc.Vec3( i5783[0], i5783[1], i5783[2] )
  i5782.defaultSolverIterations = i5783[3]
  i5782.bounceThreshold = i5783[4]
  i5782.autoSyncTransforms = !!i5783[5]
  i5782.autoSimulation = !!i5783[6]
  var i5785 = i5783[7]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5785[i + 0]) );
  }
  i5782.collisionMatrix = i5784
  return i5782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5789 = data
  i5788.enabled = !!i5789[0]
  i5788.layerId = i5789[1]
  i5788.otherLayerId = i5789[2]
  return i5788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5791 = data
  request.r(i5791[0], i5791[1], 0, i5790, 'material')
  i5790.gravity = new pc.Vec2( i5791[2], i5791[3] )
  i5790.positionIterations = i5791[4]
  i5790.velocityIterations = i5791[5]
  i5790.velocityThreshold = i5791[6]
  i5790.maxLinearCorrection = i5791[7]
  i5790.maxAngularCorrection = i5791[8]
  i5790.maxTranslationSpeed = i5791[9]
  i5790.maxRotationSpeed = i5791[10]
  i5790.baumgarteScale = i5791[11]
  i5790.baumgarteTOIScale = i5791[12]
  i5790.timeToSleep = i5791[13]
  i5790.linearSleepTolerance = i5791[14]
  i5790.angularSleepTolerance = i5791[15]
  i5790.defaultContactOffset = i5791[16]
  i5790.autoSimulation = !!i5791[17]
  i5790.queriesHitTriggers = !!i5791[18]
  i5790.queriesStartInColliders = !!i5791[19]
  i5790.callbacksOnDisable = !!i5791[20]
  i5790.reuseCollisionCallbacks = !!i5791[21]
  i5790.autoSyncTransforms = !!i5791[22]
  var i5793 = i5791[23]
  var i5792 = []
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5793[i + 0]) );
  }
  i5790.collisionMatrix = i5792
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5797 = data
  i5796.enabled = !!i5797[0]
  i5796.layerId = i5797[1]
  i5796.otherLayerId = i5797[2]
  return i5796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5799 = data
  var i5801 = i5799[0]
  var i5800 = []
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5801[i + 0]) );
  }
  i5798.qualityLevels = i5800
  var i5803 = i5799[1]
  var i5802 = []
  for(var i = 0; i < i5803.length; i += 1) {
    i5802.push( i5803[i + 0] );
  }
  i5798.names = i5802
  i5798.shadows = i5799[2]
  i5798.anisotropicFiltering = i5799[3]
  i5798.antiAliasing = i5799[4]
  i5798.lodBias = i5799[5]
  i5798.shadowCascades = i5799[6]
  i5798.shadowDistance = i5799[7]
  i5798.shadowmaskMode = i5799[8]
  i5798.shadowProjection = i5799[9]
  i5798.shadowResolution = i5799[10]
  i5798.softParticles = !!i5799[11]
  i5798.softVegetation = !!i5799[12]
  i5798.activeColorSpace = i5799[13]
  i5798.desiredColorSpace = i5799[14]
  i5798.masterTextureLimit = i5799[15]
  i5798.maxQueuedFrames = i5799[16]
  i5798.particleRaycastBudget = i5799[17]
  i5798.pixelLightCount = i5799[18]
  i5798.realtimeReflectionProbes = !!i5799[19]
  i5798.shadowCascade2Split = i5799[20]
  i5798.shadowCascade4Split = new pc.Vec3( i5799[21], i5799[22], i5799[23] )
  i5798.streamingMipmapsActive = !!i5799[24]
  i5798.vSyncCount = i5799[25]
  i5798.asyncUploadBufferSize = i5799[26]
  i5798.asyncUploadTimeSlice = i5799[27]
  i5798.billboardsFaceCameraPosition = !!i5799[28]
  i5798.shadowNearPlaneOffset = i5799[29]
  i5798.streamingMipmapsMemoryBudget = i5799[30]
  i5798.maximumLODLevel = i5799[31]
  i5798.streamingMipmapsAddAllCameras = !!i5799[32]
  i5798.streamingMipmapsMaxLevelReduction = i5799[33]
  i5798.streamingMipmapsRenderersPerFrame = i5799[34]
  i5798.resolutionScalingFixedDPIFactor = i5799[35]
  i5798.streamingMipmapsMaxFileIORequests = i5799[36]
  i5798.currentQualityLevel = i5799[37]
  return i5798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5809 = data
  i5808.weight = i5809[0]
  i5808.vertices = i5809[1]
  i5808.normals = i5809[2]
  i5808.tangents = i5809[3]
  return i5808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i5810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i5811 = data
  i5810.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5811[0], i5810.Event)
  i5810.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i5811[1], i5810.filterSettings)
  i5810.overrideMaterialId = i5811[2]
  i5810.overrideMaterialPassIndex = i5811[3]
  i5810.overrideShaderId = i5811[4]
  i5810.overrideShaderPassIndex = i5811[5]
  i5810.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5811[6], i5810.overrideMode)
  i5810.overrideDepthState = !!i5811[7]
  i5810.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5811[8], i5810.depthCompareFunction)
  i5810.enableWrite = !!i5811[9]
  i5810.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i5811[10], i5810.stencilSettings)
  i5810.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i5811[11], i5810.cameraSettings)
  return i5810
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5812 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5813 = data
  i5812.xPlacement = i5813[0]
  i5812.yPlacement = i5813[1]
  i5812.xAdvance = i5813[2]
  i5812.yAdvance = i5813[3]
  return i5812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i5814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i5815 = data
  i5814.Value = i5815[0]
  return i5814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i5817 = data
  i5816.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5817[0], i5816.RenderQueueType)
  i5816.LayerMask = i5817[1]
  var i5819 = i5817[2]
  var i5818 = []
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.push( i5819[i + 0] );
  }
  i5816.PassNames = i5818
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i5820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i5821 = data
  i5820.overrideStencilState = !!i5821[0]
  i5820.stencilReference = i5821[1]
  i5820.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5821[2], i5820.stencilCompareFunctionValue)
  i5820.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5821[3], i5820.passOperationValue)
  i5820.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5821[4], i5820.failOperationValue)
  i5820.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i5821[5], i5820.zFailOperationValue)
  return i5820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i5823 = data
  i5822.overrideCamera = !!i5823[0]
  i5822.restoreCamera = !!i5823[1]
  i5822.offset = new pc.Vec4( i5823[2], i5823[3], i5823[4], i5823[5] )
  i5822.cameraFieldOfView = i5823[6]
  return i5822
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[41],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[98],"106":[98],"107":[98],"108":[98],"109":[98],"110":[98],"111":[41],"112":[5],"113":[114],"115":[114],"34":[25],"15":[3,5],"116":[45],"117":[3,5],"118":[25],"119":[41],"43":[41],"46":[45],"120":[121],"122":[25],"123":[25],"36":[34],"29":[26,25],"124":[25],"35":[34],"39":[25],"125":[25],"38":[25],"126":[25],"127":[25],"128":[25],"129":[25],"130":[25],"131":[25],"132":[26,25],"133":[25],"134":[25],"135":[25],"136":[25],"137":[26,25],"138":[25],"139":[140],"141":[140],"142":[140],"143":[140],"144":[41],"145":[41],"146":[121],"147":[25],"148":[5,25],"33":[25,26],"149":[25],"150":[26,25],"151":[5],"152":[26,25],"153":[25],"154":[121]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Elevator","UnityEngine.BoxCollider","Item","Wheat","UnityEngine.GameObject","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","AttackRangeIndicator","FarmerPatientItem","ItemStackManager","UnityEngine.Animator","AnimationInvoke","UnityEditor.Animations.AnimatorController","ItemStack","UnityEngine.SphereCollider","FighterPatientItem","Enemy","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UIHealthBar","UnityEngine.UI.Image","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","PurchaseZone_Clerk","TMPro.TextMeshProUGUI","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TMPro.TMP_FontAsset","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","NpcManagerOv","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","CameraManager","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","ClerkManager","GuildManager","LunaManager","AudioManager","PoolManager","GroundItemStackManager","Customer","ObjectFX","PorterNpc","BedProcess","ArrowsManager","UIManager","MainPanel","TouchArea","YangJoystick","UIBubbleExpression","UIProgress","UnityEngine.UI.Button","Player","GameDataEditor","ExcelTool.GameConfig","GroundItemStack","UnityEngine.SpriteRenderer","PatientInjection","NurseNpc","WheatManager","SoakManager","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","FakeLightSetup","HighResPlaneGenerator","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3c1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/05/2026 09:50:41";

Deserializers.lunaDaysRunning = "11.1";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1719";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4801";

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

Deserializers.buildID = "49242ede-dffc-4632-809c-7ceb1c8f7590";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","MemoryProfiler","Editor","MemoryProfilerSettings","RuntimeInitialize"],["Unity","MemoryProfiler","Editor","EditorGUICompatibilityHelper","RuntimeInitialize"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"],["Unity","MemoryProfiler","MetadataInjector","PlayerInitMetadata"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

