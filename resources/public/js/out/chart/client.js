// Compiled by ClojureScript 1.9.521 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('csasync.proc');
goog.require('chart.controls');
goog.require('carr.move');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('ask.master');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greenpln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/river.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/edu.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/landmark.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/city.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greypln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/event.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/waterbody.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/r.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/isle.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/place3.jpeg")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/railwaystation.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/mountain.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/bluepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/airport.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/purplepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/b.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/info.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__27022 = response;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var status = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
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

var mp_27030 = cljs.core.deref.call(null,vmp);
var mrk_27031 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_27030);
var vec__27027_27032 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_27030);
var lat_27033 = cljs.core.nth.call(null,vec__27027_27032,(0),null);
var lon_27034 = cljs.core.nth.call(null,vec__27027_27032,(1),null);
var pos_27035 = (new L.LatLng(lat_27033,lon_27034));
mrk_27031.setLatLng(pos_27035);

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
var seq__27040_27044 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27041_27045 = null;
var count__27042_27046 = (0);
var i__27043_27047 = (0);
while(true){
if((i__27043_27047 < count__27042_27046)){
var veh_27048 = cljs.core._nth.call(null,chunk__27041_27045,i__27043_27047);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27048)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27048)));

var G__27049 = seq__27040_27044;
var G__27050 = chunk__27041_27045;
var G__27051 = count__27042_27046;
var G__27052 = (i__27043_27047 + (1));
seq__27040_27044 = G__27049;
chunk__27041_27045 = G__27050;
count__27042_27046 = G__27051;
i__27043_27047 = G__27052;
continue;
} else {
var temp__4657__auto___27053 = cljs.core.seq.call(null,seq__27040_27044);
if(temp__4657__auto___27053){
var seq__27040_27054__$1 = temp__4657__auto___27053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27040_27054__$1)){
var c__23114__auto___27055 = cljs.core.chunk_first.call(null,seq__27040_27054__$1);
var G__27056 = cljs.core.chunk_rest.call(null,seq__27040_27054__$1);
var G__27057 = c__23114__auto___27055;
var G__27058 = cljs.core.count.call(null,c__23114__auto___27055);
var G__27059 = (0);
seq__27040_27044 = G__27056;
chunk__27041_27045 = G__27057;
count__27042_27046 = G__27058;
i__27043_27047 = G__27059;
continue;
} else {
var veh_27060 = cljs.core.first.call(null,seq__27040_27054__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27060)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27060)));

var G__27061 = cljs.core.next.call(null,seq__27040_27054__$1);
var G__27062 = null;
var G__27063 = (0);
var G__27064 = (0);
seq__27040_27044 = G__27061;
chunk__27041_27045 = G__27062;
count__27042_27046 = G__27063;
i__27043_27047 = G__27064;
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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("info?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__27069 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27069,(0),null);
var lon = cljs.core.nth.call(null,vec__27069,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__27069,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27069,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27065_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27065_SHARP_))),e.target);
});})(vec__27069,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27069,lat,lon,pos,ico,opt,mrk__$1))
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
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO),null));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__22295__auto__ = url_ico;
if(cljs.core.truth_(or__22295__auto__)){
return or__22295__auto__;
} else {
var or__22295__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__22295__auto____$1)){
return or__22295__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pm"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.delete_placemark = (function chart$client$delete_placemark(iname){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.PLACEMARKS).call(null,iname);
if(cljs.core.truth_(temp__4657__auto__)){
var mrk = temp__4657__auto__;
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname));
} else {
return null;
}
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__27076_27080 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__27077_27081 = null;
var count__27078_27082 = (0);
var i__27079_27083 = (0);
while(true){
if((i__27079_27083 < count__27078_27082)){
var mrk_27084 = cljs.core._nth.call(null,chunk__27077_27081,i__27079_27083);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27084);

var G__27085 = seq__27076_27080;
var G__27086 = chunk__27077_27081;
var G__27087 = count__27078_27082;
var G__27088 = (i__27079_27083 + (1));
seq__27076_27080 = G__27085;
chunk__27077_27081 = G__27086;
count__27078_27082 = G__27087;
i__27079_27083 = G__27088;
continue;
} else {
var temp__4657__auto___27089 = cljs.core.seq.call(null,seq__27076_27080);
if(temp__4657__auto___27089){
var seq__27076_27090__$1 = temp__4657__auto___27089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27076_27090__$1)){
var c__23114__auto___27091 = cljs.core.chunk_first.call(null,seq__27076_27090__$1);
var G__27092 = cljs.core.chunk_rest.call(null,seq__27076_27090__$1);
var G__27093 = c__23114__auto___27091;
var G__27094 = cljs.core.count.call(null,c__23114__auto___27091);
var G__27095 = (0);
seq__27076_27080 = G__27092;
chunk__27077_27081 = G__27093;
count__27078_27082 = G__27094;
i__27079_27083 = G__27095;
continue;
} else {
var mrk_27096 = cljs.core.first.call(null,seq__27076_27090__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_27096);

var G__27097 = cljs.core.next.call(null,seq__27076_27090__$1);
var G__27098 = null;
var G__27099 = (0);
var G__27100 = (0);
seq__27076_27080 = G__27097;
chunk__27077_27081 = G__27098;
count__27078_27082 = G__27099;
i__27079_27083 = G__27100;
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
var args27101 = [];
var len__23408__auto___27107 = arguments.length;
var i__23409__auto___27108 = (0);
while(true){
if((i__23409__auto___27108 < len__23408__auto___27107)){
args27101.push((arguments[i__23409__auto___27108]));

var G__27109 = (i__23409__auto___27108 + (1));
i__23409__auto___27108 = G__27109;
continue;
} else {
}
break;
}

var G__27103 = args27101.length;
switch (G__27103) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27101.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27104 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27104,(0),null);
var lon = cljs.core.nth.call(null,vec__27104,(1),null);
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
return (function (p1__27111_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__27111_SHARP_),cljs.core.second.call(null,p1__27111_SHARP_)));
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
var vec__27115 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__27115,(0),null);
var s = cljs.core.nth.call(null,vec__27115,(1),null);
var w = cljs.core.nth.call(null,vec__27115,(2),null);
var e = cljs.core.nth.call(null,vec__27115,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__27115,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__27115,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__27118,zoom,lock){
var vec__27122 = p__27118;
var lat = cljs.core.nth.call(null,vec__27122,(0),null);
var lon = cljs.core.nth.call(null,vec__27122,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__22295__auto__ = zoom;
if(cljs.core.truth_(or__22295__auto__)){
return or__22295__auto__;
} else {
return cljs.core.deref.call(null,chart.client.CHART).getZoom();
}
})();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.not.call(null,lock)){
return chart.client.new_visible.call(null);
} else {
return null;
}
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__27125_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__27125_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__27126_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__27126_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__27127_SHARP_){
return p1__27127_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__27128,ops){
var vec__27132 = p__27128;
var id1 = cljs.core.nth.call(null,vec__27132,(0),null);
var id2 = cljs.core.nth.call(null,vec__27132,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(titl),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<table>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Dmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" m</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Tmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" min</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Alt-diff</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(adif),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ft</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</table>")].join('');
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
chart.client.select_airport = (function chart$client$select_airport(var_args){
var args27136 = [];
var len__23408__auto___27139 = arguments.length;
var i__23409__auto___27140 = (0);
while(true){
if((i__23409__auto___27140 < len__23408__auto___27139)){
args27136.push((arguments[i__23409__auto___27140]));

var G__27141 = (i__23409__auto___27140 + (1));
i__23409__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var G__27138 = args27136.length;
switch (G__27138) {
case 0:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27136.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27135_SHARP_){
return chart.client.select_airport.call(null,sel,p1__27135_SHARP_);
}));
}))
;
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(20),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected airport",new cljs.core.Keyword(null,"object","object",1474613949),sel,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),cnt], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.select_airport.cljs$lang$maxFixedArity = 2;

chart.client.select_city = (function chart$client$select_city(param){
var temp__4655__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto__)){
var cns = temp__4655__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__4655__auto__){
return (function chart$client$select_city_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected country",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cns,temp__4655__auto__){
return (function (r){
return null;
});})(cns,temp__4655__auto__))
);
});})(cns,temp__4655__auto__))
)
;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cts = temp__4655__auto____$1;
ask.master.selector.call(null,"element",(20),"chart.client","cities",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = ((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function chart$client$select_city_$_handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected city",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function (r){
return null;
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
);

return ask.master.clear_dialog.call(null);
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__27199 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__27200 = null;
var count__27201 = (0);
var i__27202 = (0);
while(true){
if((i__27202 < count__27201)){
var map__27203 = cljs.core._nth.call(null,chunk__27200,i__27202);
var map__27203__$1 = ((((!((map__27203 == null)))?((((map__27203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27203):map__27203);
var ins = map__27203__$1;
var instruct = cljs.core.get.call(null,map__27203__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27205_27255 = cljs.core._EQ_;
var expr__27206_27256 = instruct;
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27206_27256))){
var map__27208_27257 = ins;
var map__27208_27258__$1 = ((((!((map__27208_27257 == null)))?((((map__27208_27257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27208_27257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27208_27257):map__27208_27257);
var id_27259 = cljs.core.get.call(null,map__27208_27258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27260 = cljs.core.get.call(null,map__27208_27258__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27259,vehicle_27260);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27206_27256))){
var map__27210_27261 = ins;
var map__27210_27262__$1 = ((((!((map__27210_27261 == null)))?((((map__27210_27261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27210_27261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27210_27261):map__27210_27261);
var id_27263 = cljs.core.get.call(null,map__27210_27262__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27263);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27206_27256))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27206_27256))){
var map__27212_27264 = ins;
var map__27212_27265__$1 = ((((!((map__27212_27264 == null)))?((((map__27212_27264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27212_27264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27212_27264):map__27212_27264);
var id_27266 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27267 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27268 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27269 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27270 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27271 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27272 = cljs.core.get.call(null,map__27212_27265__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27266)){
chart.client.popup.call(null,id_27266,html_27269,time_27270);
} else {
if(cljs.core.truth_((function (){var and__22283__auto__ = width_27271;
if(cljs.core.truth_(and__22283__auto__)){
var and__22283__auto____$1 = height_27272;
if(cljs.core.truth_(and__22283__auto____$1)){
var and__22283__auto____$2 = lat_27267;
if(cljs.core.truth_(and__22283__auto____$2)){
return lon_27268;
} else {
return and__22283__auto____$2;
}
} else {
return and__22283__auto____$1;
}
} else {
return and__22283__auto__;
}
})())){
chart.client.popup.call(null,lat_27267,lon_27268,html_27269,time_27270,width_27271,height_27272);
} else {
if(cljs.core.truth_((function (){var and__22283__auto__ = lat_27267;
if(cljs.core.truth_(and__22283__auto__)){
return lon_27268;
} else {
return and__22283__auto__;
}
})())){
chart.client.popup.call(null,lat_27267,lon_27268,html_27269,time_27270);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27206_27256))){
var map__27214_27273 = ins;
var map__27214_27274__$1 = ((((!((map__27214_27273 == null)))?((((map__27214_27273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27214_27273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27214_27273):map__27214_27273);
var id_27275 = cljs.core.get.call(null,map__27214_27274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27276 = cljs.core.get.call(null,map__27214_27274__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27277 = cljs.core.get.call(null,map__27214_27274__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27278 = cljs.core.get.call(null,map__27214_27274__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27275,points_27276,options_27277,time_27278);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27206_27256))){
var map__27216_27279 = ins;
var map__27216_27280__$1 = ((((!((map__27216_27279 == null)))?((((map__27216_27279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27216_27279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27216_27279):map__27216_27279);
var coord_27281 = cljs.core.get.call(null,map__27216_27280__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27282 = cljs.core.get.call(null,map__27216_27280__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27283 = cljs.core.get.call(null,map__27216_27280__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27281,zoom_27282,lock_27283);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27206_27256))){
var map__27218_27284 = ins;
var map__27218_27285__$1 = ((((!((map__27218_27284 == null)))?((((map__27218_27284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27218_27284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27218_27284):map__27218_27284);
var iname_27286 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27287 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27288 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27289 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27290 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27291 = cljs.core.get.call(null,map__27218_27285__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27286,tip_27287,lat_27288,lon_27289,feature_27290,url_ico_27291);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27206_27256))){
var map__27220_27292 = ins;
var map__27220_27293__$1 = ((((!((map__27220_27292 == null)))?((((map__27220_27292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27220_27292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27220_27292):map__27220_27292);
var iname_27294 = cljs.core.get.call(null,map__27220_27293__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27294);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27206_27256))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27206_27256))){
var map__27222_27295 = ins;
var map__27222_27296__$1 = ((((!((map__27222_27295 == null)))?((((map__27222_27295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27222_27295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222_27295):map__27222_27295);
var ids_27297 = cljs.core.get.call(null,map__27222_27296__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27298 = cljs.core.get.call(null,map__27222_27296__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27297,options_27298);
} else {
if(cljs.core.truth_(pred__27205_27255.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27206_27256))){
var map__27224_27299 = ins;
var map__27224_27300__$1 = ((((!((map__27224_27299 == null)))?((((map__27224_27299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27224_27299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27224_27299):map__27224_27299);
var question_27301 = cljs.core.get.call(null,map__27224_27300__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27302 = cljs.core.get.call(null,map__27224_27300__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27226_27303 = cljs.core._EQ_;
var expr__27227_27304 = question_27301;
if(cljs.core.truth_(pred__27226_27303.call(null,"city",expr__27227_27304))){
chart.client.select_city.call(null,param_27302);
} else {
if(cljs.core.truth_(pred__27226_27303.call(null,"airport",expr__27227_27304))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27227_27304)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}
}
}

var G__27305 = seq__27199;
var G__27306 = chunk__27200;
var G__27307 = count__27201;
var G__27308 = (i__27202 + (1));
seq__27199 = G__27305;
chunk__27200 = G__27306;
count__27201 = G__27307;
i__27202 = G__27308;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27199);
if(temp__4657__auto__){
var seq__27199__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27199__$1)){
var c__23114__auto__ = cljs.core.chunk_first.call(null,seq__27199__$1);
var G__27309 = cljs.core.chunk_rest.call(null,seq__27199__$1);
var G__27310 = c__23114__auto__;
var G__27311 = cljs.core.count.call(null,c__23114__auto__);
var G__27312 = (0);
seq__27199 = G__27309;
chunk__27200 = G__27310;
count__27201 = G__27311;
i__27202 = G__27312;
continue;
} else {
var map__27229 = cljs.core.first.call(null,seq__27199__$1);
var map__27229__$1 = ((((!((map__27229 == null)))?((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var ins = map__27229__$1;
var instruct = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27231_27313 = cljs.core._EQ_;
var expr__27232_27314 = instruct;
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27232_27314))){
var map__27234_27315 = ins;
var map__27234_27316__$1 = ((((!((map__27234_27315 == null)))?((((map__27234_27315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27234_27315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27234_27315):map__27234_27315);
var id_27317 = cljs.core.get.call(null,map__27234_27316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27318 = cljs.core.get.call(null,map__27234_27316__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27317,vehicle_27318);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27232_27314))){
var map__27236_27319 = ins;
var map__27236_27320__$1 = ((((!((map__27236_27319 == null)))?((((map__27236_27319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27236_27319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27236_27319):map__27236_27319);
var id_27321 = cljs.core.get.call(null,map__27236_27320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27321);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27232_27314))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27232_27314))){
var map__27238_27322 = ins;
var map__27238_27323__$1 = ((((!((map__27238_27322 == null)))?((((map__27238_27322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27238_27322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27238_27322):map__27238_27322);
var id_27324 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27325 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27326 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27327 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27328 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_27329 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_27330 = cljs.core.get.call(null,map__27238_27323__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_27324)){
chart.client.popup.call(null,id_27324,html_27327,time_27328);
} else {
if(cljs.core.truth_((function (){var and__22283__auto__ = width_27329;
if(cljs.core.truth_(and__22283__auto__)){
var and__22283__auto____$1 = height_27330;
if(cljs.core.truth_(and__22283__auto____$1)){
var and__22283__auto____$2 = lat_27325;
if(cljs.core.truth_(and__22283__auto____$2)){
return lon_27326;
} else {
return and__22283__auto____$2;
}
} else {
return and__22283__auto____$1;
}
} else {
return and__22283__auto__;
}
})())){
chart.client.popup.call(null,lat_27325,lon_27326,html_27327,time_27328,width_27329,height_27330);
} else {
if(cljs.core.truth_((function (){var and__22283__auto__ = lat_27325;
if(cljs.core.truth_(and__22283__auto__)){
return lon_27326;
} else {
return and__22283__auto__;
}
})())){
chart.client.popup.call(null,lat_27325,lon_27326,html_27327,time_27328);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__27232_27314))){
var map__27240_27331 = ins;
var map__27240_27332__$1 = ((((!((map__27240_27331 == null)))?((((map__27240_27331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27240_27331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27240_27331):map__27240_27331);
var id_27333 = cljs.core.get.call(null,map__27240_27332__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_27334 = cljs.core.get.call(null,map__27240_27332__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_27335 = cljs.core.get.call(null,map__27240_27332__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_27336 = cljs.core.get.call(null,map__27240_27332__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_27333,points_27334,options_27335,time_27336);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__27232_27314))){
var map__27242_27337 = ins;
var map__27242_27338__$1 = ((((!((map__27242_27337 == null)))?((((map__27242_27337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27242_27337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242_27337):map__27242_27337);
var coord_27339 = cljs.core.get.call(null,map__27242_27338__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_27340 = cljs.core.get.call(null,map__27242_27338__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_27341 = cljs.core.get.call(null,map__27242_27338__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_27339,zoom_27340,lock_27341);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__27232_27314))){
var map__27244_27342 = ins;
var map__27244_27343__$1 = ((((!((map__27244_27342 == null)))?((((map__27244_27342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27244_27342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27244_27342):map__27244_27342);
var iname_27344 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_27345 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_27346 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27347 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_27348 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_27349 = cljs.core.get.call(null,map__27244_27343__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_27344,tip_27345,lat_27346,lon_27347,feature_27348,url_ico_27349);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__27232_27314))){
var map__27246_27350 = ins;
var map__27246_27351__$1 = ((((!((map__27246_27350 == null)))?((((map__27246_27350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27246_27350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246_27350):map__27246_27350);
var iname_27352 = cljs.core.get.call(null,map__27246_27351__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27352);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__27232_27314))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__27232_27314))){
var map__27248_27353 = ins;
var map__27248_27354__$1 = ((((!((map__27248_27353 == null)))?((((map__27248_27353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27248_27353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27248_27353):map__27248_27353);
var ids_27355 = cljs.core.get.call(null,map__27248_27354__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27356 = cljs.core.get.call(null,map__27248_27354__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27355,options_27356);
} else {
if(cljs.core.truth_(pred__27231_27313.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__27232_27314))){
var map__27250_27357 = ins;
var map__27250_27358__$1 = ((((!((map__27250_27357 == null)))?((((map__27250_27357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27250_27357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27250_27357):map__27250_27357);
var question_27359 = cljs.core.get.call(null,map__27250_27358__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27360 = cljs.core.get.call(null,map__27250_27358__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__27252_27361 = cljs.core._EQ_;
var expr__27253_27362 = question_27359;
if(cljs.core.truth_(pred__27252_27361.call(null,"city",expr__27253_27362))){
chart.client.select_city.call(null,param_27360);
} else {
if(cljs.core.truth_(pred__27252_27361.call(null,"airport",expr__27253_27362))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27253_27362)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}
}
}

var G__27363 = cljs.core.next.call(null,seq__27199__$1);
var G__27364 = null;
var G__27365 = (0);
var G__27366 = (0);
seq__27199 = G__27363;
chunk__27200 = G__27364;
count__27201 = G__27365;
i__27202 = G__27366;
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
var args27368 = [];
var len__23408__auto___27371 = arguments.length;
var i__23409__auto___27372 = (0);
while(true){
if((i__23409__auto___27372 < len__23408__auto___27371)){
args27368.push((arguments[i__23409__auto___27372]));

var G__27373 = (i__23409__auto___27372 + (1));
i__23409__auto___27372 = G__27373;
continue;
} else {
}
break;
}

var G__27370 = args27368.length;
switch (G__27370) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27368.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27367_SHARP_){
return chart.client.move_to.call(null,sel,p1__27367_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?country="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("move-to"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args27379 = [];
var len__23408__auto___27382 = arguments.length;
var i__23409__auto___27383 = (0);
while(true){
if((i__23409__auto___27383 < len__23408__auto___27382)){
args27379.push((arguments[i__23409__auto___27383]));

var G__27384 = (i__23409__auto___27383 + (1));
i__23409__auto___27383 = G__27384;
continue;
} else {
}
break;
}

var G__27381 = args27379.length;
switch (G__27381) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27379.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input.call(null,"element",(1),"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input.call(null,"element",(2),"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27375_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__27375_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27376_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__27376_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27377_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__27377_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27378_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__27378_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?callsign="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(call),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&time="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tim),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(apt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("schedule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args27389 = [];
var len__23408__auto___27392 = arguments.length;
var i__23409__auto___27393 = (0);
while(true){
if((i__23409__auto___27393 < len__23408__auto___27392)){
args27389.push((arguments[i__23409__auto___27393]));

var G__27394 = (i__23409__auto___27393 + (1));
i__23409__auto___27393 = G__27394;
continue;
} else {
}
break;
}

var G__27391 = args27389.length;
switch (G__27391) {
case 0:
return chart.client.question.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.question.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.question.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.question.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.question.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27389.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__27386_SHARP_){
return chart.client.question.call(null,sel,p1__27386_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__27387_SHARP_){
return chart.client.question.call(null,pred,sel,p1__27387_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__27388_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__27388_SHARP_);
}));
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$core$IFn$_invoke$arity$4 = (function (pred,subj,obj,adjuncts){
if(cljs.core.truth_(adjuncts)){
ask.master.selector.call(null,"element",(40),"chart.client","?",adjuncts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler40 = (function chart$client$handler40(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),sel], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$lang$maxFixedArity = 4;

chart.client.command = (function chart$client$command(cmd){
var pred__27399_27402 = cljs.core._EQ_;
var expr__27400_27403 = cmd;
if(cljs.core.truth_(pred__27399_27402.call(null,"commands",expr__27400_27403))){
} else {
if(cljs.core.truth_(pred__27399_27402.call(null,"watch-visible",expr__27400_27403))){
var bnd_27404 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_27405 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27404.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27404.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27404.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_27404.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_27405)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__27399_27402.call(null,"move-to",expr__27400_27403))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__27399_27402.call(null,"schedule",expr__27400_27403))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__27399_27402.call(null,"question",expr__27400_27403))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)].join(''),chart.client.no_handler);
}
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e27407){if((e27407 instanceof Error)){
var e_27408 = e27407;
cljs.core.println.call(null,e_27408);
} else {
throw e27407;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

m.on("zoomend",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.display_zoom.call(null,m.getZoom());
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

chart.controls.display_zoom.call(null,m.getZoom());

return cljs.core.vreset_BANG_.call(null,chart.client.CHART,m);
});
chart.client.on_load_chart = (function chart$client$on_load_chart(){
cljs.core.enable_console_print_BANG_.call(null);

chart.client.init_chart.call(null);

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("follow?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("trail?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map