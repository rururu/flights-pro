// Compiled by ClojureScript 1.9.521 {}
goog.provide('czm.core');
goog.require('cljs.core');
goog.require('calc.dynamic');
goog.require('calc.geo');
czm.core.TERR_PROV = Cesium.createWorldTerrain();
czm.core.VIEWER = (new Cesium.Viewer("cesiumContainer",({"imageryProvider": Cesium.createWorldImagery(), "terrainProvider": Cesium.createWorldTerrain(), "animation": false})));
czm.core.CZM_SRC = (new Cesium.CzmlDataSource());
czm.core.CAMERA = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"roll","roll",11266999),(0)], null));
czm.core.FLY_CTL = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0)], null);
czm.core.COCKPIT_HEIGHT = (2);
czm.core.norm_crs = (function czm$core$norm_crs(x){
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
czm.core.cz_processor = (function czm$core$cz_processor(e){
var data = e.data;
var data__$1 = JSON.parse(data);
return czm.core.CZM_SRC.process(data__$1);
});
czm.core.fly_control = (function czm$core$fly_control(lat,lon,alt,hea,pit,rol,per){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.flyTo(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)}), "maximumHeight": alt, "duration": per, "easingFunction": ((function (dest){
return (function (time){
return time;
});})(dest))
}));
});
czm.core.move_control = (function czm$core$move_control(lat,lon,alt,hea,pit,rol){
var dest = Cesium.Cartesian3.fromDegrees(lon,lat,alt);
return czm.core.VIEWER.camera.setView(({"destination": dest, "orientation": ({"heading": Cesium.Math.toRadians(hea), "pitch": Cesium.Math.toRadians(pit), "roll": Cesium.Math.toRadians(rol)})}));
});
czm.core.terraHeightResponse = (function czm$core$terraHeightResponse(pos){
var vec__16531 = czm.core.FLY_CTL;
var lat = cljs.core.nth.call(null,vec__16531,(0),null);
var lon = cljs.core.nth.call(null,vec__16531,(1),null);
var alt = cljs.core.nth.call(null,vec__16531,(2),null);
var head = cljs.core.nth.call(null,vec__16531,(3),null);
var pitch = cljs.core.nth.call(null,vec__16531,(4),null);
var roll = cljs.core.nth.call(null,vec__16531,(5),null);
var per = cljs.core.nth.call(null,vec__16531,(6),null);
var th = cljs.core.first.call(null,pos).height;
var aat = ((czm.core.COCKPIT_HEIGHT + alt) + th);
cljs.core.println.call(null,new cljs.core.Keyword(null,"TERRAIN-HEIGHT","TERRAIN-HEIGHT",1723065601),th,new cljs.core.Keyword(null,"COCKPIT-HEIGHT","COCKPIT-HEIGHT",-736737763),czm.core.COCKPIT_HEIGHT);

return czm.core.fly_control.call(null,lat,lon,aat,head,pitch,roll,per);
});
czm.core.fly_to = (function czm$core$fly_to(lat,lon,alt,crs,per){
var pitch = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = czm.core.norm_crs.call(null,(crs + new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA))));
if((alt > (0))){
return czm.core.fly_control.call(null,lat,lon,alt,head,pitch,roll,per);
} else {
czm.core.FLY_CTL = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon,alt,head,pitch,roll,per], null);

return terraHeightRequest(czm.core.TERR_PROV,lat,lon,czm.core.terraHeightResponse);
}
});
czm.core.move_to = (function czm$core$move_to(lat,lon,alt,crs){
var pitch = (function (){var pred__16540 = cljs.core._EQ_;
var expr__16541 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16540.call(null,"UP",expr__16541))){
return (90);
} else {
if(cljs.core.truth_(pred__16540.call(null,"DOWN",expr__16541))){
return (-90);
} else {
return new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
}
}
})();
var roll = new cljs.core.Keyword(null,"roll","roll",11266999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
var head = calc.geo.norm_crs.call(null,(function (){var pred__16543 = cljs.core._EQ_;
var expr__16544 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA));
if(cljs.core.truth_(pred__16543.call(null,"BACKWARD",expr__16544))){
return (crs + (180));
} else {
if(cljs.core.truth_(pred__16543.call(null,"RIGHT",expr__16544))){
return (crs + (90));
} else {
if(cljs.core.truth_(pred__16543.call(null,"LEFT",expr__16544))){
return (crs - (90));
} else {
if(cljs.core.truth_(pred__16543.call(null,"FORWARD-RIGHT",expr__16544))){
return (crs + (45));
} else {
if(cljs.core.truth_(pred__16543.call(null,"FORWARD-LEFT",expr__16544))){
return (crs - (45));
} else {
if(cljs.core.truth_(pred__16543.call(null,"BACKWARD-RIGHT",expr__16544))){
return (crs + (135));
} else {
if(cljs.core.truth_(pred__16543.call(null,"BACKWARD-LEFT",expr__16544))){
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
return czm.core.move_control.call(null,lat,lon,alt,head,pitch,roll);
});
czm.core.camera = (function czm$core$camera(key,val){
return cljs.core._vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.assoc.call(null,cljs.core._deref.call(null,czm.core.CAMERA),key,val));
});
czm.core.init_3D_view = (function czm$core$init_3D_view(base_url,terresp){
czm.core.COCKPIT_HEIGHT = new cljs.core.Keyword(null,"cockpit-height","cockpit-height",-1168854522).cljs$core$IFn$_invoke$arity$1(terresp);

czm.core.VIEWER.dataSources.add(czm.core.CZM_SRC);

(new EventSource([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("czml/")].join(''))).addEventListener("czml",czm.core.cz_processor,false);

return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INIT-3D-VIEW","INIT-3D-VIEW",-1398074686),new cljs.core.Keyword(null,"BASE","BASE",146158779),base_url,new cljs.core.Keyword(null,"TERRAIN","TERRAIN",-36132566),terresp], null));
});

//# sourceMappingURL=core.js.map