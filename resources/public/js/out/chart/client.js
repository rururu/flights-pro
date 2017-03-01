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
var map__23913 = response;
var map__23913__$1 = ((((!((map__23913 == null)))?((((map__23913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23913):map__23913);
var status = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_23921 = cljs.core.deref.call(null,vmp);
var mrk_23922 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23921);
var vec__23918_23923 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23921);
var lat_23924 = cljs.core.nth.call(null,vec__23918_23923,(0),null);
var lon_23925 = cljs.core.nth.call(null,vec__23918_23923,(1),null);
var pos_23926 = (new L.LatLng(lat_23924,lon_23925));
mrk_23922.setLatLng(pos_23926);

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
var seq__23931_23935 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23932_23936 = null;
var count__23933_23937 = (0);
var i__23934_23938 = (0);
while(true){
if((i__23934_23938 < count__23933_23937)){
var veh_23939 = cljs.core._nth.call(null,chunk__23932_23936,i__23934_23938);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23939)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23939)));

var G__23940 = seq__23931_23935;
var G__23941 = chunk__23932_23936;
var G__23942 = count__23933_23937;
var G__23943 = (i__23934_23938 + (1));
seq__23931_23935 = G__23940;
chunk__23932_23936 = G__23941;
count__23933_23937 = G__23942;
i__23934_23938 = G__23943;
continue;
} else {
var temp__4657__auto___23944 = cljs.core.seq.call(null,seq__23931_23935);
if(temp__4657__auto___23944){
var seq__23931_23945__$1 = temp__4657__auto___23944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23931_23945__$1)){
var c__9367__auto___23946 = cljs.core.chunk_first.call(null,seq__23931_23945__$1);
var G__23947 = cljs.core.chunk_rest.call(null,seq__23931_23945__$1);
var G__23948 = c__9367__auto___23946;
var G__23949 = cljs.core.count.call(null,c__9367__auto___23946);
var G__23950 = (0);
seq__23931_23935 = G__23947;
chunk__23932_23936 = G__23948;
count__23933_23937 = G__23949;
i__23934_23938 = G__23950;
continue;
} else {
var veh_23951 = cljs.core.first.call(null,seq__23931_23945__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23951)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23951)));

var G__23952 = cljs.core.next.call(null,seq__23931_23945__$1);
var G__23953 = null;
var G__23954 = (0);
var G__23955 = (0);
seq__23931_23935 = G__23952;
chunk__23932_23936 = G__23953;
count__23933_23937 = G__23954;
i__23934_23938 = G__23955;
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

var vec__23960 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23960,(0),null);
var lon = cljs.core.nth.call(null,vec__23960,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__23960,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23960,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23956_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23956_SHARP_))),e.target);
});})(vec__23960,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23960,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

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
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__8553__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8553__auto__)){
return or__8553__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
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
var seq__23967_23971 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__23968_23972 = null;
var count__23969_23973 = (0);
var i__23970_23974 = (0);
while(true){
if((i__23970_23974 < count__23969_23973)){
var mrk_23975 = cljs.core._nth.call(null,chunk__23968_23972,i__23970_23974);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23975);

var G__23976 = seq__23967_23971;
var G__23977 = chunk__23968_23972;
var G__23978 = count__23969_23973;
var G__23979 = (i__23970_23974 + (1));
seq__23967_23971 = G__23976;
chunk__23968_23972 = G__23977;
count__23969_23973 = G__23978;
i__23970_23974 = G__23979;
continue;
} else {
var temp__4657__auto___23980 = cljs.core.seq.call(null,seq__23967_23971);
if(temp__4657__auto___23980){
var seq__23967_23981__$1 = temp__4657__auto___23980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23967_23981__$1)){
var c__9367__auto___23982 = cljs.core.chunk_first.call(null,seq__23967_23981__$1);
var G__23983 = cljs.core.chunk_rest.call(null,seq__23967_23981__$1);
var G__23984 = c__9367__auto___23982;
var G__23985 = cljs.core.count.call(null,c__9367__auto___23982);
var G__23986 = (0);
seq__23967_23971 = G__23983;
chunk__23968_23972 = G__23984;
count__23969_23973 = G__23985;
i__23970_23974 = G__23986;
continue;
} else {
var mrk_23987 = cljs.core.first.call(null,seq__23967_23981__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23987);

var G__23988 = cljs.core.next.call(null,seq__23967_23981__$1);
var G__23989 = null;
var G__23990 = (0);
var G__23991 = (0);
seq__23967_23971 = G__23988;
chunk__23968_23972 = G__23989;
count__23969_23973 = G__23990;
i__23970_23974 = G__23991;
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
var args23992 = [];
var len__9661__auto___23998 = arguments.length;
var i__9662__auto___23999 = (0);
while(true){
if((i__9662__auto___23999 < len__9661__auto___23998)){
args23992.push((arguments[i__9662__auto___23999]));

var G__24000 = (i__9662__auto___23999 + (1));
i__9662__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var G__23994 = args23992.length;
switch (G__23994) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return chart.client.popup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23992.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23995 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23995,(0),null);
var lon = cljs.core.nth.call(null,vec__23995,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(240),(480));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(({"maxWidth": w, "maxHeight": h})).setLatLng([lat,lon]).setContent(html);
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

chart.client.popup.cljs$lang$maxFixedArity = 6;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__24002_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__24002_SHARP_),cljs.core.second.call(null,p1__24002_SHARP_)));
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
var vec__24006 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__24006,(0),null);
var s = cljs.core.nth.call(null,vec__24006,(1),null);
var w = cljs.core.nth.call(null,vec__24006,(2),null);
var e = cljs.core.nth.call(null,vec__24006,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__24006,n,s,w,e,url){
return (function (response){
return null;
});})(vec__24006,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__24009){
var vec__24013 = p__24009;
var lat = cljs.core.nth.call(null,vec__24013,(0),null);
var lon = cljs.core.nth.call(null,vec__24013,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__24016_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__24016_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__24017_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__24017_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__24018_SHARP_){
return p1__24018_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__24019,ops){
var vec__24023 = p__24019;
var id1 = cljs.core.nth.call(null,vec__24023,(0),null);
var id2 = cljs.core.nth.call(null,vec__24023,(1),null);
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
var seq__24068 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__24069 = null;
var count__24070 = (0);
var i__24071 = (0);
while(true){
if((i__24071 < count__24070)){
var map__24072 = cljs.core._nth.call(null,chunk__24069,i__24071);
var map__24072__$1 = ((((!((map__24072 == null)))?((((map__24072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24072):map__24072);
var ins = map__24072__$1;
var instruct = cljs.core.get.call(null,map__24072__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24074_24110 = cljs.core._EQ_;
var expr__24075_24111 = instruct;
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24075_24111))){
var map__24077_24112 = ins;
var map__24077_24113__$1 = ((((!((map__24077_24112 == null)))?((((map__24077_24112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24077_24112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24077_24112):map__24077_24112);
var id_24114 = cljs.core.get.call(null,map__24077_24113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24115 = cljs.core.get.call(null,map__24077_24113__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24114,vehicle_24115);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24075_24111))){
var map__24079_24116 = ins;
var map__24079_24117__$1 = ((((!((map__24079_24116 == null)))?((((map__24079_24116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24079_24116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24079_24116):map__24079_24116);
var id_24118 = cljs.core.get.call(null,map__24079_24117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24118);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24075_24111))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24075_24111))){
var map__24081_24119 = ins;
var map__24081_24120__$1 = ((((!((map__24081_24119 == null)))?((((map__24081_24119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24081_24119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24081_24119):map__24081_24119);
var id_24121 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24122 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24123 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24124 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24125 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_24126 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_24127 = cljs.core.get.call(null,map__24081_24120__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_24121)){
chart.client.popup.call(null,id_24121,html_24124,time_24125);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = width_24126;
if(cljs.core.truth_(and__8541__auto__)){
var and__8541__auto____$1 = height_24127;
if(cljs.core.truth_(and__8541__auto____$1)){
var and__8541__auto____$2 = lat_24122;
if(cljs.core.truth_(and__8541__auto____$2)){
return lon_24123;
} else {
return and__8541__auto____$2;
}
} else {
return and__8541__auto____$1;
}
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_24122,lon_24123,html_24124,time_24125,width_24126,height_24127);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = lat_24122;
if(cljs.core.truth_(and__8541__auto__)){
return lon_24123;
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_24122,lon_24123,html_24124,time_24125);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24075_24111))){
var map__24083_24128 = ins;
var map__24083_24129__$1 = ((((!((map__24083_24128 == null)))?((((map__24083_24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24083_24128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24083_24128):map__24083_24128);
var id_24130 = cljs.core.get.call(null,map__24083_24129__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24131 = cljs.core.get.call(null,map__24083_24129__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24132 = cljs.core.get.call(null,map__24083_24129__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24133 = cljs.core.get.call(null,map__24083_24129__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24130,points_24131,options_24132,time_24133);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24075_24111))){
var map__24085_24134 = ins;
var map__24085_24135__$1 = ((((!((map__24085_24134 == null)))?((((map__24085_24134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24085_24134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24085_24134):map__24085_24134);
var coord_24136 = cljs.core.get.call(null,map__24085_24135__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24136);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__24075_24111))){
var map__24087_24137 = ins;
var map__24087_24138__$1 = ((((!((map__24087_24137 == null)))?((((map__24087_24137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24087_24137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087_24137):map__24087_24137);
var iname_24139 = cljs.core.get.call(null,map__24087_24138__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_24140 = cljs.core.get.call(null,map__24087_24138__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_24141 = cljs.core.get.call(null,map__24087_24138__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24142 = cljs.core.get.call(null,map__24087_24138__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_24143 = cljs.core.get.call(null,map__24087_24138__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_24139,tip_24140,lat_24141,lon_24142,feature_24143);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__24075_24111))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__24074_24110.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__24075_24111))){
var map__24089_24144 = ins;
var map__24089_24145__$1 = ((((!((map__24089_24144 == null)))?((((map__24089_24144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24089_24144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24089_24144):map__24089_24144);
var ids_24146 = cljs.core.get.call(null,map__24089_24145__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_24147 = cljs.core.get.call(null,map__24089_24145__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_24146,options_24147);
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

var G__24148 = seq__24068;
var G__24149 = chunk__24069;
var G__24150 = count__24070;
var G__24151 = (i__24071 + (1));
seq__24068 = G__24148;
chunk__24069 = G__24149;
count__24070 = G__24150;
i__24071 = G__24151;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24068);
if(temp__4657__auto__){
var seq__24068__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24068__$1)){
var c__9367__auto__ = cljs.core.chunk_first.call(null,seq__24068__$1);
var G__24152 = cljs.core.chunk_rest.call(null,seq__24068__$1);
var G__24153 = c__9367__auto__;
var G__24154 = cljs.core.count.call(null,c__9367__auto__);
var G__24155 = (0);
seq__24068 = G__24152;
chunk__24069 = G__24153;
count__24070 = G__24154;
i__24071 = G__24155;
continue;
} else {
var map__24091 = cljs.core.first.call(null,seq__24068__$1);
var map__24091__$1 = ((((!((map__24091 == null)))?((((map__24091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24091):map__24091);
var ins = map__24091__$1;
var instruct = cljs.core.get.call(null,map__24091__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24093_24156 = cljs.core._EQ_;
var expr__24094_24157 = instruct;
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24094_24157))){
var map__24096_24158 = ins;
var map__24096_24159__$1 = ((((!((map__24096_24158 == null)))?((((map__24096_24158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24096_24158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24096_24158):map__24096_24158);
var id_24160 = cljs.core.get.call(null,map__24096_24159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24161 = cljs.core.get.call(null,map__24096_24159__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24160,vehicle_24161);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24094_24157))){
var map__24098_24162 = ins;
var map__24098_24163__$1 = ((((!((map__24098_24162 == null)))?((((map__24098_24162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24098_24162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24098_24162):map__24098_24162);
var id_24164 = cljs.core.get.call(null,map__24098_24163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24164);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24094_24157))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24094_24157))){
var map__24100_24165 = ins;
var map__24100_24166__$1 = ((((!((map__24100_24165 == null)))?((((map__24100_24165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24100_24165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24100_24165):map__24100_24165);
var id_24167 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24168 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24169 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24170 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24171 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_24172 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_24173 = cljs.core.get.call(null,map__24100_24166__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_24167)){
chart.client.popup.call(null,id_24167,html_24170,time_24171);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = width_24172;
if(cljs.core.truth_(and__8541__auto__)){
var and__8541__auto____$1 = height_24173;
if(cljs.core.truth_(and__8541__auto____$1)){
var and__8541__auto____$2 = lat_24168;
if(cljs.core.truth_(and__8541__auto____$2)){
return lon_24169;
} else {
return and__8541__auto____$2;
}
} else {
return and__8541__auto____$1;
}
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_24168,lon_24169,html_24170,time_24171,width_24172,height_24173);
} else {
if(cljs.core.truth_((function (){var and__8541__auto__ = lat_24168;
if(cljs.core.truth_(and__8541__auto__)){
return lon_24169;
} else {
return and__8541__auto__;
}
})())){
chart.client.popup.call(null,lat_24168,lon_24169,html_24170,time_24171);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24094_24157))){
var map__24102_24174 = ins;
var map__24102_24175__$1 = ((((!((map__24102_24174 == null)))?((((map__24102_24174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24102_24174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24102_24174):map__24102_24174);
var id_24176 = cljs.core.get.call(null,map__24102_24175__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24177 = cljs.core.get.call(null,map__24102_24175__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24178 = cljs.core.get.call(null,map__24102_24175__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24179 = cljs.core.get.call(null,map__24102_24175__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24176,points_24177,options_24178,time_24179);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24094_24157))){
var map__24104_24180 = ins;
var map__24104_24181__$1 = ((((!((map__24104_24180 == null)))?((((map__24104_24180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24104_24180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24104_24180):map__24104_24180);
var coord_24182 = cljs.core.get.call(null,map__24104_24181__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24182);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__24094_24157))){
var map__24106_24183 = ins;
var map__24106_24184__$1 = ((((!((map__24106_24183 == null)))?((((map__24106_24183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24106_24183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106_24183):map__24106_24183);
var iname_24185 = cljs.core.get.call(null,map__24106_24184__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_24186 = cljs.core.get.call(null,map__24106_24184__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_24187 = cljs.core.get.call(null,map__24106_24184__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24188 = cljs.core.get.call(null,map__24106_24184__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_24189 = cljs.core.get.call(null,map__24106_24184__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_24185,tip_24186,lat_24187,lon_24188,feature_24189);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__24094_24157))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__24093_24156.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__24094_24157))){
var map__24108_24190 = ins;
var map__24108_24191__$1 = ((((!((map__24108_24190 == null)))?((((map__24108_24190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24108_24190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24108_24190):map__24108_24190);
var ids_24192 = cljs.core.get.call(null,map__24108_24191__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_24193 = cljs.core.get.call(null,map__24108_24191__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_24192,options_24193);
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

var G__24194 = cljs.core.next.call(null,seq__24068__$1);
var G__24195 = null;
var G__24196 = (0);
var G__24197 = (0);
seq__24068 = G__24194;
chunk__24069 = G__24195;
count__24070 = G__24196;
i__24071 = G__24197;
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
var args24199 = [];
var len__9661__auto___24202 = arguments.length;
var i__9662__auto___24203 = (0);
while(true){
if((i__9662__auto___24203 < len__9661__auto___24202)){
args24199.push((arguments[i__9662__auto___24203]));

var G__24204 = (i__9662__auto___24203 + (1));
i__9662__auto___24203 = G__24204;
continue;
} else {
}
break;
}

var G__24201 = args24199.length;
switch (G__24201) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24199.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__24198_SHARP_){
return chart.client.move_to.call(null,sel,p1__24198_SHARP_);
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
var args24210 = [];
var len__9661__auto___24213 = arguments.length;
var i__9662__auto___24214 = (0);
while(true){
if((i__9662__auto___24214 < len__9661__auto___24213)){
args24210.push((arguments[i__9662__auto___24214]));

var G__24215 = (i__9662__auto___24214 + (1));
i__9662__auto___24214 = G__24215;
continue;
} else {
}
break;
}

var G__24212 = args24210.length;
switch (G__24212) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24210.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__24206_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__24206_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24207_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__24207_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__24208_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__24208_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24209_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__24209_SHARP_);
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
var pred__24220 = cljs.core._EQ_;
var expr__24221 = cmd;
if(cljs.core.truth_(pred__24220.call(null,"commands",expr__24221))){
return null;
} else {
if(cljs.core.truth_(pred__24220.call(null,"watch-visible",expr__24221))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__24220.call(null,"move-to",expr__24221))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__24220.call(null,"schedule",expr__24221))){
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
try{tile1.addTo(m);
}catch (e24224){if((e24224 instanceof Error)){
var e_24225 = e24224;
cljs.core.println.call(null,e_24225);
} else {
throw e24224;

}
}
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
var pred__24229 = cljs.core._EQ_;
var expr__24230 = q;
if(cljs.core.truth_(pred__24229.call(null,"questions",expr__24230))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map