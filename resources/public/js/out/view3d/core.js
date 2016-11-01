// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
view3d.core.BSE_URL = "http://localhost:4444/";
view3d.core.TERR_PROV = (new Cesium.CesiumTerrainProvider(({"url": "//assets.agi.com/stk-terrain/world", "requestWaterMask": false, "requestVertexNormals": false})));
view3d.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"animation": false})));
view3d.core.CZM_SRC = (new Cesium.CzmlDataSource());
view3d.core.EVT_SRC = (new EventSource([cljs.core.str(view3d.core.BSE_URL),cljs.core.str("czml/")].join('')));
view3d.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),"FORWARD",new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0),new cljs.core.Keyword(null,"altitude","altitude",463588637),(2)], null));
view3d.core.norm_crs = (function view3d$core$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
view3d.core.cz_processor = (function view3d$core$cz_processor(e){
var data = e.data;
var data__$1 = JSON.parse(data);
return view3d.core.CZM_SRC.process(data__$1);
});
view3d.core.fly_control = (function view3d$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return view3d.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
}));
});
view3d.core.fly_to = (function view3d$core$fly_to(lat,lon,alt,crs,per){
var pitch = (function (){var pred__20642 = cljs.core._EQ_;
var expr__20643 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.CAMERA));
if(cljs.core.truth_(pred__20642.call(null,"UP",expr__20643))){
return (90);
} else {
if(cljs.core.truth_(pred__20642.call(null,"DOWN",expr__20643))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.CAMERA));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.CAMERA));
var head = view3d.core.norm_crs.call(null,(function (){var pred__20645 = cljs.core._EQ_;
var expr__20646 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.core.CAMERA));
if(cljs.core.truth_(pred__20645.call(null,"ASTERN",expr__20646))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__20645.call(null,"STARBOARD",expr__20646))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__20645.call(null,"PORT",expr__20646))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__20645.call(null,"STAR-BOW",expr__20646))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__20645.call(null,"PORT-BOW",expr__20646))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__20645.call(null,"STAR-ABAFT",expr__20646))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__20645.call(null,"PORT-ABAFT",expr__20646))){
return (crs - (135));
} else {
return crs;
}
}
}
}
}
}
}
})());
return view3d.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
});
view3d.core.camera = (function view3d$core$camera(key,val){
return cljs.core._vreset_BANG_.call(null,view3d.core.CAMERA,key.call(null,cljs.core._deref.call(null,view3d.core.CAMERA),val));
});
view3d.core.init_3D_view = (function view3d$core$init_3D_view(){
cljs.core.enable_console_print_BANG_.call(null);

view3d.core.VIEWER.terrainProvider = view3d.core.TERR_PROV;

view3d.core.VIEWER.dataSources.add(view3d.core.CZM_SRC);

view3d.core.EVT_SRC.addEventListener("czml",view3d.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),new cljs.core.Keyword(null,"DONE","DONE",1318490382)], null));
});
window.onload = view3d.core.init_3D_view.call(null);

//# sourceMappingURL=core.js.map