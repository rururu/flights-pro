// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('ask.master');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__11838 = response;
var map__11838__$1 = ((((!((map__11838 == null)))?((((map__11838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11838):map__11838);
var status = cljs.core.get.call(null,map__11838__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11838__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_11846 = cljs.core.deref.call(null,vmp);
var mrk_11847 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_11846);
var vec__11843_11848 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_11846);
var lat_11849 = cljs.core.nth.call(null,vec__11843_11848,(0),null);
var lon_11850 = cljs.core.nth.call(null,vec__11843_11848,(1),null);
var pos_11851 = (new L.LatLng(lat_11849,lon_11850));
mrk_11847.setLatLng(pos_11851);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__11856_11860 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__11857_11861 = null;
var count__11858_11862 = (0);
var i__11859_11863 = (0);
while(true){
if((i__11859_11863 < count__11858_11862)){
var veh_11864 = cljs.core._nth.call(null,chunk__11857_11861,i__11859_11863);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11864)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11864)));

var G__11865 = seq__11856_11860;
var G__11866 = chunk__11857_11861;
var G__11867 = count__11858_11862;
var G__11868 = (i__11859_11863 + (1));
seq__11856_11860 = G__11865;
chunk__11857_11861 = G__11866;
count__11858_11862 = G__11867;
i__11859_11863 = G__11868;
continue;
} else {
var temp__4657__auto___11869 = cljs.core.seq.call(null,seq__11856_11860);
if(temp__4657__auto___11869){
var seq__11856_11870__$1 = temp__4657__auto___11869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11856_11870__$1)){
var c__9367__auto___11871 = cljs.core.chunk_first.call(null,seq__11856_11870__$1);
var G__11872 = cljs.core.chunk_rest.call(null,seq__11856_11870__$1);
var G__11873 = c__9367__auto___11871;
var G__11874 = cljs.core.count.call(null,c__9367__auto___11871);
var G__11875 = (0);
seq__11856_11860 = G__11872;
chunk__11857_11861 = G__11873;
count__11858_11862 = G__11874;
i__11859_11863 = G__11875;
continue;
} else {
var veh_11876 = cljs.core.first.call(null,seq__11856_11870__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11876)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11876)));

var G__11877 = cljs.core.next.call(null,seq__11856_11870__$1);
var G__11878 = null;
var G__11879 = (0);
var G__11880 = (0);
seq__11856_11860 = G__11877;
chunk__11857_11861 = G__11878;
count__11858_11862 = G__11879;
i__11859_11863 = G__11880;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__11885 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__11885,(0),null);
var lon = cljs.core.nth.call(null,vec__11885,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__11885,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__11885,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__11881_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__11881_SHARP_))),e.target);
});})(vec__11885,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__11885,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO) / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO)));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__8553__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8553__auto__)){
return or__8553__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__11892_11896 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__11893_11897 = null;
var count__11894_11898 = (0);
var i__11895_11899 = (0);
while(true){
if((i__11895_11899 < count__11894_11898)){
var mrk_11900 = cljs.core._nth.call(null,chunk__11893_11897,i__11895_11899);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_11900);

var G__11901 = seq__11892_11896;
var G__11902 = chunk__11893_11897;
var G__11903 = count__11894_11898;
var G__11904 = (i__11895_11899 + (1));
seq__11892_11896 = G__11901;
chunk__11893_11897 = G__11902;
count__11894_11898 = G__11903;
i__11895_11899 = G__11904;
continue;
} else {
var temp__4657__auto___11905 = cljs.core.seq.call(null,seq__11892_11896);
if(temp__4657__auto___11905){
var seq__11892_11906__$1 = temp__4657__auto___11905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11892_11906__$1)){
var c__9367__auto___11907 = cljs.core.chunk_first.call(null,seq__11892_11906__$1);
var G__11908 = cljs.core.chunk_rest.call(null,seq__11892_11906__$1);
var G__11909 = c__9367__auto___11907;
var G__11910 = cljs.core.count.call(null,c__9367__auto___11907);
var G__11911 = (0);
seq__11892_11896 = G__11908;
chunk__11893_11897 = G__11909;
count__11894_11898 = G__11910;
i__11895_11899 = G__11911;
continue;
} else {
var mrk_11912 = cljs.core.first.call(null,seq__11892_11906__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_11912);

var G__11913 = cljs.core.next.call(null,seq__11892_11906__$1);
var G__11914 = null;
var G__11915 = (0);
var G__11916 = (0);
seq__11892_11896 = G__11913;
chunk__11893_11897 = G__11914;
count__11894_11898 = G__11915;
i__11895_11899 = G__11916;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.popup = (function chart$client$popup(var_args){
var args11917 = [];
var len__9661__auto___11923 = arguments.length;
var i__9662__auto___11924 = (0);
while(true){
if((i__9662__auto___11924 < len__9661__auto___11923)){
args11917.push((arguments[i__9662__auto___11924]));

var G__11925 = (i__9662__auto___11924 + (1));
i__9662__auto___11924 = G__11925;
continue;
} else {
}
break;
}

var G__11919 = args11917.length;
switch (G__11919) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11917.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__11920 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__11920,(0),null);
var lon = cljs.core.nth.call(null,vec__11920,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,chart.client.CHART).addLayer(pop);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (pop){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(pop);
});})(pop))
,time);
} else {
return null;
}
});

chart.client.popup.cljs$lang$maxFixedArity = 4;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__11927_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11927_SHARP_),cljs.core.second.call(null,p1__11927_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),points));
var pts__$1 = cljs.core.clj__GT_js.call(null,pts);
var trl = L.polyline(pts__$1,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(trl);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (ops,pts,pts__$1,trl){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(trl);
});})(ops,pts,pts__$1,trl))
,time);
} else {
return null;
}
});
chart.client.visible_map = (function chart$client$visible_map(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
chart.client.new_visible = (function chart$client$new_visible(){
var vec__11931 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__11931,(0),null);
var s = cljs.core.nth.call(null,vec__11931,(1),null);
var w = cljs.core.nth.call(null,vec__11931,(2),null);
var e = cljs.core.nth.call(null,vec__11931,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__11931,n,s,w,e,url){
return (function (response){
return null;
});})(vec__11931,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__11934){
var vec__11938 = p__11934;
var lat = cljs.core.nth.call(null,vec__11938,(0),null);
var lon = cljs.core.nth.call(null,vec__11938,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11941_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__11941_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__11942_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__11942_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__11943_SHARP_){
return p1__11943_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__11944,ops){
var vec__11948 = p__11944;
var id1 = cljs.core.nth.call(null,vec__11948,(0),null);
var id2 = cljs.core.nth.call(null,vec__11948,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
});
chart.client.add_link = (function chart$client$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(options);
var del = ((typeof tmin === 'number')?(((60000) * tmin) | (0)):(30000));
var llg = chart.client.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(lnk);

lnk.bindPopup(chart.client.linkPopup.call(null,ids,options));

cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids,lnk));

if((del > (0))){
return csasync.proc.delayer.call(null,((function (ops,tmin,del,llg,lnk){
return (function (){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(lnk);

return cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids));
});})(ops,tmin,del,llg,lnk))
,del);
} else {
return null;
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__11993 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__11994 = null;
var count__11995 = (0);
var i__11996 = (0);
while(true){
if((i__11996 < count__11995)){
var map__11997 = cljs.core._nth.call(null,chunk__11994,i__11996);
var map__11997__$1 = ((((!((map__11997 == null)))?((((map__11997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11997):map__11997);
var ins = map__11997__$1;
var instruct = cljs.core.get.call(null,map__11997__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__11999_12035 = cljs.core._EQ_;
var expr__12000_12036 = instruct;
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__12000_12036))){
var map__12002_12037 = ins;
var map__12002_12038__$1 = ((((!((map__12002_12037 == null)))?((((map__12002_12037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12002_12037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12002_12037):map__12002_12037);
var id_12039 = cljs.core.get.call(null,map__12002_12038__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_12040 = cljs.core.get.call(null,map__12002_12038__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_12039,vehicle_12040);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__12000_12036))){
var map__12004_12041 = ins;
var map__12004_12042__$1 = ((((!((map__12004_12041 == null)))?((((map__12004_12041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12004_12041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12004_12041):map__12004_12041);
var id_12043 = cljs.core.get.call(null,map__12004_12042__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_12043);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__12000_12036))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__12000_12036))){
var map__12006_12044 = ins;
var map__12006_12045__$1 = ((((!((map__12006_12044 == null)))?((((map__12006_12044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006_12044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12006_12044):map__12006_12044);
var id_12046 = cljs.core.get.call(null,map__12006_12045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12047 = cljs.core.get.call(null,map__12006_12045__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12048 = cljs.core.get.call(null,map__12006_12045__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12049 = cljs.core.get.call(null,map__12006_12045__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12050 = cljs.core.get.call(null,map__12006_12045__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12046)){
chart.client.popup.call(null,id_12046,html_12049,time_12050);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = lat_12047;
if(cljs.core.truth_(and__8541__auto__)){
return lon_12048;
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_12047,lon_12048,html_12049,time_12050);
} else {
}
}
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__12000_12036))){
var map__12008_12051 = ins;
var map__12008_12052__$1 = ((((!((map__12008_12051 == null)))?((((map__12008_12051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12008_12051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12008_12051):map__12008_12051);
var id_12053 = cljs.core.get.call(null,map__12008_12052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_12054 = cljs.core.get.call(null,map__12008_12052__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_12055 = cljs.core.get.call(null,map__12008_12052__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12056 = cljs.core.get.call(null,map__12008_12052__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_12053,points_12054,options_12055,time_12056);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__12000_12036))){
var map__12010_12057 = ins;
var map__12010_12058__$1 = ((((!((map__12010_12057 == null)))?((((map__12010_12057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12010_12057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12010_12057):map__12010_12057);
var coord_12059 = cljs.core.get.call(null,map__12010_12058__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_12059);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12000_12036))){
var map__12012_12060 = ins;
var map__12012_12061__$1 = ((((!((map__12012_12060 == null)))?((((map__12012_12060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12012_12060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12012_12060):map__12012_12060);
var iname_12062 = cljs.core.get.call(null,map__12012_12061__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_12063 = cljs.core.get.call(null,map__12012_12061__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12064 = cljs.core.get.call(null,map__12012_12061__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_12065 = cljs.core.get.call(null,map__12012_12061__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_12062,lat_12063,lon_12064,feature_12065);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12000_12036))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__11999_12035.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12000_12036))){
var map__12014_12066 = ins;
var map__12014_12067__$1 = ((((!((map__12014_12066 == null)))?((((map__12014_12066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12014_12066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12014_12066):map__12014_12066);
var ids_12068 = cljs.core.get.call(null,map__12014_12067__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12069 = cljs.core.get.call(null,map__12014_12067__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_12068,options_12069);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__12070 = seq__11993;
var G__12071 = chunk__11994;
var G__12072 = count__11995;
var G__12073 = (i__11996 + (1));
seq__11993 = G__12070;
chunk__11994 = G__12071;
count__11995 = G__12072;
i__11996 = G__12073;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11993);
if(temp__4657__auto__){
var seq__11993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11993__$1)){
var c__9367__auto__ = cljs.core.chunk_first.call(null,seq__11993__$1);
var G__12074 = cljs.core.chunk_rest.call(null,seq__11993__$1);
var G__12075 = c__9367__auto__;
var G__12076 = cljs.core.count.call(null,c__9367__auto__);
var G__12077 = (0);
seq__11993 = G__12074;
chunk__11994 = G__12075;
count__11995 = G__12076;
i__11996 = G__12077;
continue;
} else {
var map__12016 = cljs.core.first.call(null,seq__11993__$1);
var map__12016__$1 = ((((!((map__12016 == null)))?((((map__12016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12016):map__12016);
var ins = map__12016__$1;
var instruct = cljs.core.get.call(null,map__12016__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__12018_12078 = cljs.core._EQ_;
var expr__12019_12079 = instruct;
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__12019_12079))){
var map__12021_12080 = ins;
var map__12021_12081__$1 = ((((!((map__12021_12080 == null)))?((((map__12021_12080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12021_12080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12021_12080):map__12021_12080);
var id_12082 = cljs.core.get.call(null,map__12021_12081__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_12083 = cljs.core.get.call(null,map__12021_12081__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_12082,vehicle_12083);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__12019_12079))){
var map__12023_12084 = ins;
var map__12023_12085__$1 = ((((!((map__12023_12084 == null)))?((((map__12023_12084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12023_12084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12023_12084):map__12023_12084);
var id_12086 = cljs.core.get.call(null,map__12023_12085__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_12086);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__12019_12079))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__12019_12079))){
var map__12025_12087 = ins;
var map__12025_12088__$1 = ((((!((map__12025_12087 == null)))?((((map__12025_12087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12025_12087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12025_12087):map__12025_12087);
var id_12089 = cljs.core.get.call(null,map__12025_12088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12090 = cljs.core.get.call(null,map__12025_12088__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12091 = cljs.core.get.call(null,map__12025_12088__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12092 = cljs.core.get.call(null,map__12025_12088__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12093 = cljs.core.get.call(null,map__12025_12088__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12089)){
chart.client.popup.call(null,id_12089,html_12092,time_12093);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = lat_12090;
if(cljs.core.truth_(and__8541__auto__)){
return lon_12091;
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_12090,lon_12091,html_12092,time_12093);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__12019_12079))){
var map__12027_12094 = ins;
var map__12027_12095__$1 = ((((!((map__12027_12094 == null)))?((((map__12027_12094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12027_12094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12027_12094):map__12027_12094);
var id_12096 = cljs.core.get.call(null,map__12027_12095__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_12097 = cljs.core.get.call(null,map__12027_12095__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_12098 = cljs.core.get.call(null,map__12027_12095__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12099 = cljs.core.get.call(null,map__12027_12095__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_12096,points_12097,options_12098,time_12099);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__12019_12079))){
var map__12029_12100 = ins;
var map__12029_12101__$1 = ((((!((map__12029_12100 == null)))?((((map__12029_12100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12029_12100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12029_12100):map__12029_12100);
var coord_12102 = cljs.core.get.call(null,map__12029_12101__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_12102);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12019_12079))){
var map__12031_12103 = ins;
var map__12031_12104__$1 = ((((!((map__12031_12103 == null)))?((((map__12031_12103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12031_12103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12031_12103):map__12031_12103);
var iname_12105 = cljs.core.get.call(null,map__12031_12104__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_12106 = cljs.core.get.call(null,map__12031_12104__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12107 = cljs.core.get.call(null,map__12031_12104__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_12108 = cljs.core.get.call(null,map__12031_12104__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_12105,lat_12106,lon_12107,feature_12108);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12019_12079))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__12018_12078.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12019_12079))){
var map__12033_12109 = ins;
var map__12033_12110__$1 = ((((!((map__12033_12109 == null)))?((((map__12033_12109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12033_12109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12033_12109):map__12033_12109);
var ids_12111 = cljs.core.get.call(null,map__12033_12110__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12112 = cljs.core.get.call(null,map__12033_12110__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_12111,options_12112);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__12113 = cljs.core.next.call(null,seq__11993__$1);
var G__12114 = null;
var G__12115 = (0);
var G__12116 = (0);
seq__11993 = G__12113;
chunk__11994 = G__12114;
count__11995 = G__12115;
i__11996 = G__12116;
continue;
}
} else {
return null;
}
}
break;
}
});
chart.client.receive_instructions = (function chart$client$receive_instructions(){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.move_to = (function chart$client$move_to(var_args){
var args12118 = [];
var len__9661__auto___12121 = arguments.length;
var i__9662__auto___12122 = (0);
while(true){
if((i__9662__auto___12122 < len__9661__auto___12121)){
args12118.push((arguments[i__9662__auto___12122]));

var G__12123 = (i__9662__auto___12122 + (1));
i__9662__auto___12122 = G__12123;
continue;
} else {
}
break;
}

var G__12120 = args12118.length;
switch (G__12120) {
case 0:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12118.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__12117_SHARP_){
return chart.client.move_to.call(null,sel,p1__12117_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str("?country="),cljs.core.str(cnt),cljs.core.str("&airport="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("move-to"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args12129 = [];
var len__9661__auto___12132 = arguments.length;
var i__9662__auto___12133 = (0);
while(true){
if((i__9662__auto___12133 < len__9661__auto___12132)){
args12129.push((arguments[i__9662__auto___12133]));

var G__12134 = (i__9662__auto___12133 + (1));
i__9662__auto___12133 = G__12134;
continue;
} else {
}
break;
}

var G__12131 = args12129.length;
switch (G__12131) {
case 0:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12129.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__12125_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__12125_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__12126_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__12126_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__12127_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__12127_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__12128_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__12128_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.command = (function chart$client$command(cmd){
var pred__12139 = cljs.core._EQ_;
var expr__12140 = cmd;
if(cljs.core.truth_(pred__12139.call(null,"commands",expr__12140))){
return null;
} else {
if(cljs.core.truth_(pred__12139.call(null,"watch-visible",expr__12140))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__12139.call(null,"move-to",expr__12140))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12139.call(null,"schedule",expr__12140))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("follow?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("trail?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.question = (function chart$client$question(q){
var pred__12145 = cljs.core._EQ_;
var expr__12146 = q;
if(cljs.core.truth_(pred__12145.call(null,"questions",expr__12146))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map