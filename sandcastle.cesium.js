const viewer = new Cesium.Viewer("cesiumContainer", {
  mapProjection : new Cesium.WebMercatorProjection(),
  sceneModePicker: false,
  geocoder: false,
  baseLayerPicker : false,
  animation: false,
  
  
  skyBox: false,
  requestRenderMode : false,
  terrainShadows: Cesium.ShadowMode.DISABLED,
  contextOptions: { 
    webgl : {
        preserveDrawingBuffer : true,
        stencil: true
  }},
  orderIndependentTranslucency: true,
});

viewer.scene.screenSpaceCameraController.inertiaSpin = 0;
viewer.scene.screenSpaceCameraController.inertiaTranslate = 0;
viewer.scene.screenSpaceCameraController.inertiaZoom = 0;
viewer.scene.globe.tileCacheSize = 1000;
viewer.scene.highDynamicRange = false;
viewer.scene.shadows = false;
viewer.scene.light.intensity = 1.0;
viewer.scene.mode = 2;


let position = Cesium.Cartesian3.fromDegrees(
    42.430420,
    19.259364,
    17.11111112777144
);

let orientation = new Cesium.HeadingPitchRoll.fromDegrees(
        0,
        0,
        0
      );

viewer.scene.camera.flyTo({
    destination: position,
    orientation: orientation,
    endTransform: Cesium.Matrix4.IDENTITY
})

let entity = viewer.entities.add({
        position : position,
       
        model : {
            uri: 'https://raw.githubusercontent.com/shrewmus/gltf-test/master/4da5bb4c4713e60e3a36184e231713f9-v4.gltf',
            minimumPixelSize : 50,
            scale: 1,
            maximumScale: 101,
            
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
        }
});


