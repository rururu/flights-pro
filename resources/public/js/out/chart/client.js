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
var map__13227 = response;
var map__13227__$1 = ((((!((map__13227 == null)))?((((map__13227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13227):map__13227);
var status = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.ONBOARD = "MANUAL";
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_13235 = cljs.core.deref.call(null,vmp);
var mrk_13236 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_13235);
var vec__13232_13237 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_13235);
var lat_13238 = cljs.core.nth.call(null,vec__13232_13237,(0),null);
var lon_13239 = cljs.core.nth.call(null,vec__13232_13237,(1),null);
var pos_13240 = (new L.LatLng(lat_13238,lon_13239));
mrk_13236.setLatLng(pos_13240);

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
var seq__13245_13249 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__13246_13250 = null;
var count__13247_13251 = (0);
var i__13248_13252 = (0);
while(true){
if((i__13248_13252 < count__13247_13251)){
var veh_13253 = cljs.core._nth.call(null,chunk__13246_13250,i__13248_13252);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13253)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13253)));

var G__13254 = seq__13245_13249;
var G__13255 = chunk__13246_13250;
var G__13256 = count__13247_13251;
var G__13257 = (i__13248_13252 + (1));
seq__13245_13249 = G__13254;
chunk__13246_13250 = G__13255;
count__13247_13251 = G__13256;
i__13248_13252 = G__13257;
continue;
} else {
var temp__4657__auto___13258 = cljs.core.seq.call(null,seq__13245_13249);
if(temp__4657__auto___13258){
var seq__13245_13259__$1 = temp__4657__auto___13258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13245_13259__$1)){
var c__10768__auto___13260 = cljs.core.chunk_first.call(null,seq__13245_13259__$1);
var G__13261 = cljs.core.chunk_rest.call(null,seq__13245_13259__$1);
var G__13262 = c__10768__auto___13260;
var G__13263 = cljs.core.count.call(null,c__10768__auto___13260);
var G__13264 = (0);
seq__13245_13249 = G__13261;
chunk__13246_13250 = G__13262;
count__13247_13251 = G__13263;
i__13248_13252 = G__13264;
continue;
} else {
var veh_13265 = cljs.core.first.call(null,seq__13245_13259__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13265)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_13265)));

var G__13266 = cljs.core.next.call(null,seq__13245_13259__$1);
var G__13267 = null;
var G__13268 = (0);
var G__13269 = (0);
seq__13245_13249 = G__13266;
chunk__13246_13250 = G__13267;
count__13247_13251 = G__13268;
i__13248_13252 = G__13269;
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

var vec__13274 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__13274,(0),null);
var lon = cljs.core.nth.call(null,vec__13274,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__13274,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__13274,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__13270_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__13270_SHARP_))),e.target);
});})(vec__13274,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__13274,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9949__auto__ = url_ico;
if(cljs.core.truth_(or__9949__auto__)){
return or__9949__auto__;
} else {
var or__9949__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9949__auto____$1)){
return or__9949__auto____$1;
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
var seq__13281_13285 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__13282_13286 = null;
var count__13283_13287 = (0);
var i__13284_13288 = (0);
while(true){
if((i__13284_13288 < count__13283_13287)){
var mrk_13289 = cljs.core._nth.call(null,chunk__13282_13286,i__13284_13288);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13289);

var G__13290 = seq__13281_13285;
var G__13291 = chunk__13282_13286;
var G__13292 = count__13283_13287;
var G__13293 = (i__13284_13288 + (1));
seq__13281_13285 = G__13290;
chunk__13282_13286 = G__13291;
count__13283_13287 = G__13292;
i__13284_13288 = G__13293;
continue;
} else {
var temp__4657__auto___13294 = cljs.core.seq.call(null,seq__13281_13285);
if(temp__4657__auto___13294){
var seq__13281_13295__$1 = temp__4657__auto___13294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13281_13295__$1)){
var c__10768__auto___13296 = cljs.core.chunk_first.call(null,seq__13281_13295__$1);
var G__13297 = cljs.core.chunk_rest.call(null,seq__13281_13295__$1);
var G__13298 = c__10768__auto___13296;
var G__13299 = cljs.core.count.call(null,c__10768__auto___13296);
var G__13300 = (0);
seq__13281_13285 = G__13297;
chunk__13282_13286 = G__13298;
count__13283_13287 = G__13299;
i__13284_13288 = G__13300;
continue;
} else {
var mrk_13301 = cljs.core.first.call(null,seq__13281_13295__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_13301);

var G__13302 = cljs.core.next.call(null,seq__13281_13295__$1);
var G__13303 = null;
var G__13304 = (0);
var G__13305 = (0);
seq__13281_13285 = G__13302;
chunk__13282_13286 = G__13303;
count__13283_13287 = G__13304;
i__13284_13288 = G__13305;
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
var args13306 = [];
var len__11062__auto___13312 = arguments.length;
var i__11063__auto___13313 = (0);
while(true){
if((i__11063__auto___13313 < len__11062__auto___13312)){
args13306.push((arguments[i__11063__auto___13313]));

var G__13314 = (i__11063__auto___13313 + (1));
i__11063__auto___13313 = G__13314;
continue;
} else {
}
break;
}

var G__13308 = args13306.length;
switch (G__13308) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13306.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__13309 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__13309,(0),null);
var lon = cljs.core.nth.call(null,vec__13309,(1),null);
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
return (function (p1__13316_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__13316_SHARP_),cljs.core.second.call(null,p1__13316_SHARP_)));
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
var vec__13320 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__13320,(0),null);
var s = cljs.core.nth.call(null,vec__13320,(1),null);
var w = cljs.core.nth.call(null,vec__13320,(2),null);
var e = cljs.core.nth.call(null,vec__13320,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__13320,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__13320,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__13323,zoom,lock){
var vec__13327 = p__13323;
var lat = cljs.core.nth.call(null,vec__13327,(0),null);
var lon = cljs.core.nth.call(null,vec__13327,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9949__auto__ = zoom;
if(cljs.core.truth_(or__9949__auto__)){
return or__9949__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__13330_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__13330_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__13331_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__13331_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__13332_SHARP_){
return p1__13332_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__13333,ops){
var vec__13337 = p__13333;
var id1 = cljs.core.nth.call(null,vec__13337,(0),null);
var id2 = cljs.core.nth.call(null,vec__13337,(1),null);
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
var args13341 = [];
var len__11062__auto___13344 = arguments.length;
var i__11063__auto___13345 = (0);
while(true){
if((i__11063__auto___13345 < len__11062__auto___13344)){
args13341.push((arguments[i__11063__auto___13345]));

var G__13346 = (i__11063__auto___13345 + (1));
i__11063__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var G__13343 = args13341.length;
switch (G__13343) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13341.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13340_SHARP_){
return chart.client.select_airport.call(null,sel,p1__13340_SHARP_);
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
var seq__13408 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__13409 = null;
var count__13410 = (0);
var i__13411 = (0);
while(true){
if((i__13411 < count__13410)){
var map__13412 = cljs.core._nth.call(null,chunk__13409,i__13411);
var map__13412__$1 = ((((!((map__13412 == null)))?((((map__13412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13412):map__13412);
var ins = map__13412__$1;
var instruct = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13414_13468 = cljs.core._EQ_;
var expr__13415_13469 = instruct;
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13415_13469))){
var map__13417_13470 = ins;
var map__13417_13471__$1 = ((((!((map__13417_13470 == null)))?((((map__13417_13470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13417_13470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13417_13470):map__13417_13470);
var id_13472 = cljs.core.get.call(null,map__13417_13471__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13473 = cljs.core.get.call(null,map__13417_13471__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13472,vehicle_13473);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13415_13469))){
var map__13419_13474 = ins;
var map__13419_13475__$1 = ((((!((map__13419_13474 == null)))?((((map__13419_13474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13419_13474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13419_13474):map__13419_13474);
var id_13476 = cljs.core.get.call(null,map__13419_13475__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13476);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13415_13469))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13415_13469))){
var map__13421_13477 = ins;
var map__13421_13478__$1 = ((((!((map__13421_13477 == null)))?((((map__13421_13477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13421_13477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13421_13477):map__13421_13477);
var id_13479 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13480 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13481 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13482 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13483 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13484 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13485 = cljs.core.get.call(null,map__13421_13478__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13479)){
chart.client.popup.call(null,id_13479,html_13482,time_13483);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = width_13484;
if(cljs.core.truth_(and__9937__auto__)){
var and__9937__auto____$1 = height_13485;
if(cljs.core.truth_(and__9937__auto____$1)){
var and__9937__auto____$2 = lat_13480;
if(cljs.core.truth_(and__9937__auto____$2)){
return lon_13481;
} else {
return and__9937__auto____$2;
}
} else {
return and__9937__auto____$1;
}
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13480,lon_13481,html_13482,time_13483,width_13484,height_13485);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = lat_13480;
if(cljs.core.truth_(and__9937__auto__)){
return lon_13481;
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13480,lon_13481,html_13482,time_13483);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13415_13469))){
var map__13423_13486 = ins;
var map__13423_13487__$1 = ((((!((map__13423_13486 == null)))?((((map__13423_13486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13423_13486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13423_13486):map__13423_13486);
var id_13488 = cljs.core.get.call(null,map__13423_13487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13489 = cljs.core.get.call(null,map__13423_13487__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13490 = cljs.core.get.call(null,map__13423_13487__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13491 = cljs.core.get.call(null,map__13423_13487__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13488,points_13489,options_13490,time_13491);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13415_13469))){
var map__13425_13492 = ins;
var map__13425_13493__$1 = ((((!((map__13425_13492 == null)))?((((map__13425_13492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13425_13492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13425_13492):map__13425_13492);
var coord_13494 = cljs.core.get.call(null,map__13425_13493__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13495 = cljs.core.get.call(null,map__13425_13493__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13496 = cljs.core.get.call(null,map__13425_13493__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13494,zoom_13495,lock_13496);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13415_13469))){
var map__13427_13497 = ins;
var map__13427_13498__$1 = ((((!((map__13427_13497 == null)))?((((map__13427_13497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13427_13497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13427_13497):map__13427_13497);
var iname_13499 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13500 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13501 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13502 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13503 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13504 = cljs.core.get.call(null,map__13427_13498__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13499,tip_13500,lat_13501,lon_13502,feature_13503,url_ico_13504);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13415_13469))){
var map__13429_13505 = ins;
var map__13429_13506__$1 = ((((!((map__13429_13505 == null)))?((((map__13429_13505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13429_13505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13429_13505):map__13429_13505);
var iname_13507 = cljs.core.get.call(null,map__13429_13506__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13507);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13415_13469))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13415_13469))){
var map__13431_13508 = ins;
var map__13431_13509__$1 = ((((!((map__13431_13508 == null)))?((((map__13431_13508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13431_13508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431_13508):map__13431_13508);
var ids_13510 = cljs.core.get.call(null,map__13431_13509__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13511 = cljs.core.get.call(null,map__13431_13509__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13510,options_13511);
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__13415_13469))){
var map__13433_13512 = ins;
var map__13433_13513__$1 = ((((!((map__13433_13512 == null)))?((((map__13433_13512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13433_13512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13433_13512):map__13433_13512);
var question_13514 = cljs.core.get.call(null,map__13433_13513__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_13515 = cljs.core.get.call(null,map__13433_13513__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__13435_13516 = cljs.core._EQ_;
var expr__13436_13517 = question_13514;
if(cljs.core.truth_(pred__13435_13516.call(null,"city",expr__13436_13517))){
chart.client.select_city.call(null,param_13515);
} else {
if(cljs.core.truth_(pred__13435_13516.call(null,"airport",expr__13436_13517))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13436_13517)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__13414_13468.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__13415_13469))){
var map__13438_13518 = ins;
var map__13438_13519__$1 = ((((!((map__13438_13518 == null)))?((((map__13438_13518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13438_13518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13438_13518):map__13438_13518);
var callsign_13520 = cljs.core.get.call(null,map__13438_13519__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_13520;
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
}

var G__13521 = seq__13408;
var G__13522 = chunk__13409;
var G__13523 = count__13410;
var G__13524 = (i__13411 + (1));
seq__13408 = G__13521;
chunk__13409 = G__13522;
count__13410 = G__13523;
i__13411 = G__13524;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13408);
if(temp__4657__auto__){
var seq__13408__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13408__$1)){
var c__10768__auto__ = cljs.core.chunk_first.call(null,seq__13408__$1);
var G__13525 = cljs.core.chunk_rest.call(null,seq__13408__$1);
var G__13526 = c__10768__auto__;
var G__13527 = cljs.core.count.call(null,c__10768__auto__);
var G__13528 = (0);
seq__13408 = G__13525;
chunk__13409 = G__13526;
count__13410 = G__13527;
i__13411 = G__13528;
continue;
} else {
var map__13440 = cljs.core.first.call(null,seq__13408__$1);
var map__13440__$1 = ((((!((map__13440 == null)))?((((map__13440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13440):map__13440);
var ins = map__13440__$1;
var instruct = cljs.core.get.call(null,map__13440__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__13442_13529 = cljs.core._EQ_;
var expr__13443_13530 = instruct;
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__13443_13530))){
var map__13445_13531 = ins;
var map__13445_13532__$1 = ((((!((map__13445_13531 == null)))?((((map__13445_13531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13445_13531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13445_13531):map__13445_13531);
var id_13533 = cljs.core.get.call(null,map__13445_13532__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_13534 = cljs.core.get.call(null,map__13445_13532__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_13533,vehicle_13534);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__13443_13530))){
var map__13447_13535 = ins;
var map__13447_13536__$1 = ((((!((map__13447_13535 == null)))?((((map__13447_13535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13447_13535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13447_13535):map__13447_13535);
var id_13537 = cljs.core.get.call(null,map__13447_13536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_13537);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__13443_13530))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__13443_13530))){
var map__13449_13538 = ins;
var map__13449_13539__$1 = ((((!((map__13449_13538 == null)))?((((map__13449_13538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13449_13538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13449_13538):map__13449_13538);
var id_13540 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_13541 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13542 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_13543 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_13544 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_13545 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_13546 = cljs.core.get.call(null,map__13449_13539__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_13540)){
chart.client.popup.call(null,id_13540,html_13543,time_13544);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = width_13545;
if(cljs.core.truth_(and__9937__auto__)){
var and__9937__auto____$1 = height_13546;
if(cljs.core.truth_(and__9937__auto____$1)){
var and__9937__auto____$2 = lat_13541;
if(cljs.core.truth_(and__9937__auto____$2)){
return lon_13542;
} else {
return and__9937__auto____$2;
}
} else {
return and__9937__auto____$1;
}
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13541,lon_13542,html_13543,time_13544,width_13545,height_13546);
} else {
if(cljs.core.truth_((function (){var and__9937__auto__ = lat_13541;
if(cljs.core.truth_(and__9937__auto__)){
return lon_13542;
} else {
return and__9937__auto__;
}
})())){
chart.client.popup.call(null,lat_13541,lon_13542,html_13543,time_13544);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__13443_13530))){
var map__13451_13547 = ins;
var map__13451_13548__$1 = ((((!((map__13451_13547 == null)))?((((map__13451_13547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13451_13547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13451_13547):map__13451_13547);
var id_13549 = cljs.core.get.call(null,map__13451_13548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_13550 = cljs.core.get.call(null,map__13451_13548__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_13551 = cljs.core.get.call(null,map__13451_13548__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_13552 = cljs.core.get.call(null,map__13451_13548__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_13549,points_13550,options_13551,time_13552);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__13443_13530))){
var map__13453_13553 = ins;
var map__13453_13554__$1 = ((((!((map__13453_13553 == null)))?((((map__13453_13553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13453_13553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13453_13553):map__13453_13553);
var coord_13555 = cljs.core.get.call(null,map__13453_13554__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_13556 = cljs.core.get.call(null,map__13453_13554__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_13557 = cljs.core.get.call(null,map__13453_13554__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_13555,zoom_13556,lock_13557);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__13443_13530))){
var map__13455_13558 = ins;
var map__13455_13559__$1 = ((((!((map__13455_13558 == null)))?((((map__13455_13558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13455_13558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13455_13558):map__13455_13558);
var iname_13560 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_13561 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_13562 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_13563 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_13564 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_13565 = cljs.core.get.call(null,map__13455_13559__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_13560,tip_13561,lat_13562,lon_13563,feature_13564,url_ico_13565);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__13443_13530))){
var map__13457_13566 = ins;
var map__13457_13567__$1 = ((((!((map__13457_13566 == null)))?((((map__13457_13566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13457_13566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13457_13566):map__13457_13566);
var iname_13568 = cljs.core.get.call(null,map__13457_13567__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_13568);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__13443_13530))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__13443_13530))){
var map__13459_13569 = ins;
var map__13459_13570__$1 = ((((!((map__13459_13569 == null)))?((((map__13459_13569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13459_13569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13459_13569):map__13459_13569);
var ids_13571 = cljs.core.get.call(null,map__13459_13570__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_13572 = cljs.core.get.call(null,map__13459_13570__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_13571,options_13572);
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__13443_13530))){
var map__13461_13573 = ins;
var map__13461_13574__$1 = ((((!((map__13461_13573 == null)))?((((map__13461_13573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13461_13573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13461_13573):map__13461_13573);
var question_13575 = cljs.core.get.call(null,map__13461_13574__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_13576 = cljs.core.get.call(null,map__13461_13574__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__13463_13577 = cljs.core._EQ_;
var expr__13464_13578 = question_13575;
if(cljs.core.truth_(pred__13463_13577.call(null,"city",expr__13464_13578))){
chart.client.select_city.call(null,param_13576);
} else {
if(cljs.core.truth_(pred__13463_13577.call(null,"airport",expr__13464_13578))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13464_13578)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__13442_13529.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__13443_13530))){
var map__13466_13579 = ins;
var map__13466_13580__$1 = ((((!((map__13466_13579 == null)))?((((map__13466_13579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13466_13579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13466_13579):map__13466_13579);
var callsign_13581 = cljs.core.get.call(null,map__13466_13580__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_13581;
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
}

var G__13582 = cljs.core.next.call(null,seq__13408__$1);
var G__13583 = null;
var G__13584 = (0);
var G__13585 = (0);
seq__13408 = G__13582;
chunk__13409 = G__13583;
count__13410 = G__13584;
i__13411 = G__13585;
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
var args13587 = [];
var len__11062__auto___13590 = arguments.length;
var i__11063__auto___13591 = (0);
while(true){
if((i__11063__auto___13591 < len__11062__auto___13590)){
args13587.push((arguments[i__11063__auto___13591]));

var G__13592 = (i__11063__auto___13591 + (1));
i__11063__auto___13591 = G__13592;
continue;
} else {
}
break;
}

var G__13589 = args13587.length;
switch (G__13589) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13587.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13586_SHARP_){
return chart.client.move_to.call(null,sel,p1__13586_SHARP_);
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
var args13598 = [];
var len__11062__auto___13601 = arguments.length;
var i__11063__auto___13602 = (0);
while(true){
if((i__11063__auto___13602 < len__11062__auto___13601)){
args13598.push((arguments[i__11063__auto___13602]));

var G__13603 = (i__11063__auto___13602 + (1));
i__11063__auto___13602 = G__13603;
continue;
} else {
}
break;
}

var G__13600 = args13598.length;
switch (G__13600) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13598.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13594_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__13594_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13595_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__13595_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__13596_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__13596_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__13597_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__13597_SHARP_);
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
var args13608 = [];
var len__11062__auto___13611 = arguments.length;
var i__11063__auto___13612 = (0);
while(true){
if((i__11063__auto___13612 < len__11062__auto___13611)){
args13608.push((arguments[i__11063__auto___13612]));

var G__13613 = (i__11063__auto___13612 + (1));
i__11063__auto___13612 = G__13613;
continue;
} else {
}
break;
}

var G__13610 = args13608.length;
switch (G__13610) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13608.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__13605_SHARP_){
return chart.client.question.call(null,sel,p1__13605_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__13606_SHARP_){
return chart.client.question.call(null,pred,sel,p1__13606_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__13607_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__13607_SHARP_);
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
var pred__13618_13621 = cljs.core._EQ_;
var expr__13619_13622 = cmd;
if(cljs.core.truth_(pred__13618_13621.call(null,"commands",expr__13619_13622))){
} else {
if(cljs.core.truth_(pred__13618_13621.call(null,"watch-visible",expr__13619_13622))){
var bnd_13623 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_13624 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13623.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13623.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13623.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_13623.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_13624)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__13618_13621.call(null,"move-to",expr__13619_13622))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__13618_13621.call(null,"schedule",expr__13619_13622))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__13618_13621.call(null,"question",expr__13619_13622))){
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
chart.client.mouse_click = (function chart$client$mouse_click(lat,lng){
var htm = ((cljs.core._EQ_.call(null,chart.client.ONBOARD,"MANUAL"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("MANUAL instantly goes to this location?<br><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<input type='button' \n\t value='Go!'\n\t style='color:blue;display:block;margin:auto;'\n\t onclick='chart.client.mangoinst("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")' >")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Now on board "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.ONBOARD)].join(''));
return chart.client.popup.call(null,lat,lng,htm,(8000),(240),(100));
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
}catch (e13626){if((e13626 instanceof Error)){
var e_13627 = e13626;
cljs.core.println.call(null,e_13627);
} else {
throw e13626;

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

m.on("click",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.client.mouse_click.call(null,e.latlng.lat,e.latlng.lng);
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
chart.client.mangoinst = (function chart$client$mangoinst(lat,lon){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("goto?lat="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&lon="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&from=CHART")].join(''));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map