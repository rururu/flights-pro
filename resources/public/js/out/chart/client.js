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
var map__26301 = response;
var map__26301__$1 = ((((!((map__26301 == null)))?((((map__26301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26301):map__26301);
var status = cljs.core.get.call(null,map__26301__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26301__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_26309 = cljs.core.deref.call(null,vmp);
var mrk_26310 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26309);
var vec__26306_26311 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26309);
var lat_26312 = cljs.core.nth.call(null,vec__26306_26311,(0),null);
var lon_26313 = cljs.core.nth.call(null,vec__26306_26311,(1),null);
var pos_26314 = (new L.LatLng(lat_26312,lon_26313));
mrk_26310.setLatLng(pos_26314);

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
var seq__26319_26323 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__26320_26324 = null;
var count__26321_26325 = (0);
var i__26322_26326 = (0);
while(true){
if((i__26322_26326 < count__26321_26325)){
var veh_26327 = cljs.core._nth.call(null,chunk__26320_26324,i__26322_26326);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26327)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26327)));

var G__26328 = seq__26319_26323;
var G__26329 = chunk__26320_26324;
var G__26330 = count__26321_26325;
var G__26331 = (i__26322_26326 + (1));
seq__26319_26323 = G__26328;
chunk__26320_26324 = G__26329;
count__26321_26325 = G__26330;
i__26322_26326 = G__26331;
continue;
} else {
var temp__4657__auto___26332 = cljs.core.seq.call(null,seq__26319_26323);
if(temp__4657__auto___26332){
var seq__26319_26333__$1 = temp__4657__auto___26332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26319_26333__$1)){
var c__22750__auto___26334 = cljs.core.chunk_first.call(null,seq__26319_26333__$1);
var G__26335 = cljs.core.chunk_rest.call(null,seq__26319_26333__$1);
var G__26336 = c__22750__auto___26334;
var G__26337 = cljs.core.count.call(null,c__22750__auto___26334);
var G__26338 = (0);
seq__26319_26323 = G__26335;
chunk__26320_26324 = G__26336;
count__26321_26325 = G__26337;
i__26322_26326 = G__26338;
continue;
} else {
var veh_26339 = cljs.core.first.call(null,seq__26319_26333__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26339)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26339)));

var G__26340 = cljs.core.next.call(null,seq__26319_26333__$1);
var G__26341 = null;
var G__26342 = (0);
var G__26343 = (0);
seq__26319_26323 = G__26340;
chunk__26320_26324 = G__26341;
count__26321_26325 = G__26342;
i__26322_26326 = G__26343;
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

var vec__26348 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__26348,(0),null);
var lon = cljs.core.nth.call(null,vec__26348,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__26348,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__26348,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__26344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__26344_SHARP_))),e.target);
});})(vec__26348,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__26348,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__21931__auto__ = url_ico;
if(cljs.core.truth_(or__21931__auto__)){
return or__21931__auto__;
} else {
var or__21931__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__21931__auto____$1)){
return or__21931__auto____$1;
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
var seq__26355_26359 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__26356_26360 = null;
var count__26357_26361 = (0);
var i__26358_26362 = (0);
while(true){
if((i__26358_26362 < count__26357_26361)){
var mrk_26363 = cljs.core._nth.call(null,chunk__26356_26360,i__26358_26362);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26363);

var G__26364 = seq__26355_26359;
var G__26365 = chunk__26356_26360;
var G__26366 = count__26357_26361;
var G__26367 = (i__26358_26362 + (1));
seq__26355_26359 = G__26364;
chunk__26356_26360 = G__26365;
count__26357_26361 = G__26366;
i__26358_26362 = G__26367;
continue;
} else {
var temp__4657__auto___26368 = cljs.core.seq.call(null,seq__26355_26359);
if(temp__4657__auto___26368){
var seq__26355_26369__$1 = temp__4657__auto___26368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26355_26369__$1)){
var c__22750__auto___26370 = cljs.core.chunk_first.call(null,seq__26355_26369__$1);
var G__26371 = cljs.core.chunk_rest.call(null,seq__26355_26369__$1);
var G__26372 = c__22750__auto___26370;
var G__26373 = cljs.core.count.call(null,c__22750__auto___26370);
var G__26374 = (0);
seq__26355_26359 = G__26371;
chunk__26356_26360 = G__26372;
count__26357_26361 = G__26373;
i__26358_26362 = G__26374;
continue;
} else {
var mrk_26375 = cljs.core.first.call(null,seq__26355_26369__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26375);

var G__26376 = cljs.core.next.call(null,seq__26355_26369__$1);
var G__26377 = null;
var G__26378 = (0);
var G__26379 = (0);
seq__26355_26359 = G__26376;
chunk__26356_26360 = G__26377;
count__26357_26361 = G__26378;
i__26358_26362 = G__26379;
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
var args26380 = [];
var len__23044__auto___26386 = arguments.length;
var i__23045__auto___26387 = (0);
while(true){
if((i__23045__auto___26387 < len__23044__auto___26386)){
args26380.push((arguments[i__23045__auto___26387]));

var G__26388 = (i__23045__auto___26387 + (1));
i__23045__auto___26387 = G__26388;
continue;
} else {
}
break;
}

var G__26382 = args26380.length;
switch (G__26382) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26380.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__26383 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__26383,(0),null);
var lon = cljs.core.nth.call(null,vec__26383,(1),null);
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
return (function (p1__26390_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__26390_SHARP_),cljs.core.second.call(null,p1__26390_SHARP_)));
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
var vec__26394 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__26394,(0),null);
var s = cljs.core.nth.call(null,vec__26394,(1),null);
var w = cljs.core.nth.call(null,vec__26394,(2),null);
var e = cljs.core.nth.call(null,vec__26394,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__26394,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__26394,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__26397,zoom,lock){
var vec__26401 = p__26397;
var lat = cljs.core.nth.call(null,vec__26401,(0),null);
var lon = cljs.core.nth.call(null,vec__26401,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__21931__auto__ = zoom;
if(cljs.core.truth_(or__21931__auto__)){
return or__21931__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__26404_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__26404_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__26405_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26405_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__26406_SHARP_){
return p1__26406_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__26407,ops){
var vec__26411 = p__26407;
var id1 = cljs.core.nth.call(null,vec__26411,(0),null);
var id2 = cljs.core.nth.call(null,vec__26411,(1),null);
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
var args26415 = [];
var len__23044__auto___26418 = arguments.length;
var i__23045__auto___26419 = (0);
while(true){
if((i__23045__auto___26419 < len__23044__auto___26418)){
args26415.push((arguments[i__23045__auto___26419]));

var G__26420 = (i__23045__auto___26419 + (1));
i__23045__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var G__26417 = args26415.length;
switch (G__26417) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26415.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26414_SHARP_){
return chart.client.select_airport.call(null,sel,p1__26414_SHARP_);
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
var seq__26482 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__26483 = null;
var count__26484 = (0);
var i__26485 = (0);
while(true){
if((i__26485 < count__26484)){
var map__26486 = cljs.core._nth.call(null,chunk__26483,i__26485);
var map__26486__$1 = ((((!((map__26486 == null)))?((((map__26486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26486):map__26486);
var ins = map__26486__$1;
var instruct = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26488_26542 = cljs.core._EQ_;
var expr__26489_26543 = instruct;
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26489_26543))){
var map__26491_26544 = ins;
var map__26491_26545__$1 = ((((!((map__26491_26544 == null)))?((((map__26491_26544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26491_26544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26491_26544):map__26491_26544);
var id_26546 = cljs.core.get.call(null,map__26491_26545__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26547 = cljs.core.get.call(null,map__26491_26545__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26546,vehicle_26547);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26489_26543))){
var map__26493_26548 = ins;
var map__26493_26549__$1 = ((((!((map__26493_26548 == null)))?((((map__26493_26548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26493_26548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493_26548):map__26493_26548);
var id_26550 = cljs.core.get.call(null,map__26493_26549__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26550);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26489_26543))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26489_26543))){
var map__26495_26551 = ins;
var map__26495_26552__$1 = ((((!((map__26495_26551 == null)))?((((map__26495_26551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26495_26551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26495_26551):map__26495_26551);
var id_26553 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26554 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26555 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26556 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26557 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26558 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26559 = cljs.core.get.call(null,map__26495_26552__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26553)){
chart.client.popup.call(null,id_26553,html_26556,time_26557);
} else {
if(cljs.core.truth_((function (){var and__21919__auto__ = width_26558;
if(cljs.core.truth_(and__21919__auto__)){
var and__21919__auto____$1 = height_26559;
if(cljs.core.truth_(and__21919__auto____$1)){
var and__21919__auto____$2 = lat_26554;
if(cljs.core.truth_(and__21919__auto____$2)){
return lon_26555;
} else {
return and__21919__auto____$2;
}
} else {
return and__21919__auto____$1;
}
} else {
return and__21919__auto__;
}
})())){
chart.client.popup.call(null,lat_26554,lon_26555,html_26556,time_26557,width_26558,height_26559);
} else {
if(cljs.core.truth_((function (){var and__21919__auto__ = lat_26554;
if(cljs.core.truth_(and__21919__auto__)){
return lon_26555;
} else {
return and__21919__auto__;
}
})())){
chart.client.popup.call(null,lat_26554,lon_26555,html_26556,time_26557);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26489_26543))){
var map__26497_26560 = ins;
var map__26497_26561__$1 = ((((!((map__26497_26560 == null)))?((((map__26497_26560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26497_26560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26497_26560):map__26497_26560);
var id_26562 = cljs.core.get.call(null,map__26497_26561__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26563 = cljs.core.get.call(null,map__26497_26561__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26564 = cljs.core.get.call(null,map__26497_26561__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26565 = cljs.core.get.call(null,map__26497_26561__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26562,points_26563,options_26564,time_26565);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26489_26543))){
var map__26499_26566 = ins;
var map__26499_26567__$1 = ((((!((map__26499_26566 == null)))?((((map__26499_26566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26499_26566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499_26566):map__26499_26566);
var coord_26568 = cljs.core.get.call(null,map__26499_26567__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26569 = cljs.core.get.call(null,map__26499_26567__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26570 = cljs.core.get.call(null,map__26499_26567__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26568,zoom_26569,lock_26570);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26489_26543))){
var map__26501_26571 = ins;
var map__26501_26572__$1 = ((((!((map__26501_26571 == null)))?((((map__26501_26571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26501_26571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26501_26571):map__26501_26571);
var iname_26573 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26574 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26575 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26576 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26577 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26578 = cljs.core.get.call(null,map__26501_26572__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26573,tip_26574,lat_26575,lon_26576,feature_26577,url_ico_26578);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26489_26543))){
var map__26503_26579 = ins;
var map__26503_26580__$1 = ((((!((map__26503_26579 == null)))?((((map__26503_26579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26503_26579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26503_26579):map__26503_26579);
var iname_26581 = cljs.core.get.call(null,map__26503_26580__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26581);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26489_26543))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26489_26543))){
var map__26505_26582 = ins;
var map__26505_26583__$1 = ((((!((map__26505_26582 == null)))?((((map__26505_26582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26505_26582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505_26582):map__26505_26582);
var ids_26584 = cljs.core.get.call(null,map__26505_26583__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26585 = cljs.core.get.call(null,map__26505_26583__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26584,options_26585);
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26489_26543))){
var map__26507_26586 = ins;
var map__26507_26587__$1 = ((((!((map__26507_26586 == null)))?((((map__26507_26586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26507_26586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507_26586):map__26507_26586);
var question_26588 = cljs.core.get.call(null,map__26507_26587__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26589 = cljs.core.get.call(null,map__26507_26587__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26509_26590 = cljs.core._EQ_;
var expr__26510_26591 = question_26588;
if(cljs.core.truth_(pred__26509_26590.call(null,"city",expr__26510_26591))){
chart.client.select_city.call(null,param_26589);
} else {
if(cljs.core.truth_(pred__26509_26590.call(null,"airport",expr__26510_26591))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26510_26591)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__26488_26542.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__26489_26543))){
var map__26512_26592 = ins;
var map__26512_26593__$1 = ((((!((map__26512_26592 == null)))?((((map__26512_26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26512_26592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26512_26592):map__26512_26592);
var callsign_26594 = cljs.core.get.call(null,map__26512_26593__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_26594;
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

var G__26595 = seq__26482;
var G__26596 = chunk__26483;
var G__26597 = count__26484;
var G__26598 = (i__26485 + (1));
seq__26482 = G__26595;
chunk__26483 = G__26596;
count__26484 = G__26597;
i__26485 = G__26598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26482);
if(temp__4657__auto__){
var seq__26482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26482__$1)){
var c__22750__auto__ = cljs.core.chunk_first.call(null,seq__26482__$1);
var G__26599 = cljs.core.chunk_rest.call(null,seq__26482__$1);
var G__26600 = c__22750__auto__;
var G__26601 = cljs.core.count.call(null,c__22750__auto__);
var G__26602 = (0);
seq__26482 = G__26599;
chunk__26483 = G__26600;
count__26484 = G__26601;
i__26485 = G__26602;
continue;
} else {
var map__26514 = cljs.core.first.call(null,seq__26482__$1);
var map__26514__$1 = ((((!((map__26514 == null)))?((((map__26514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26514):map__26514);
var ins = map__26514__$1;
var instruct = cljs.core.get.call(null,map__26514__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26516_26603 = cljs.core._EQ_;
var expr__26517_26604 = instruct;
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26517_26604))){
var map__26519_26605 = ins;
var map__26519_26606__$1 = ((((!((map__26519_26605 == null)))?((((map__26519_26605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26519_26605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26519_26605):map__26519_26605);
var id_26607 = cljs.core.get.call(null,map__26519_26606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26608 = cljs.core.get.call(null,map__26519_26606__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26607,vehicle_26608);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26517_26604))){
var map__26521_26609 = ins;
var map__26521_26610__$1 = ((((!((map__26521_26609 == null)))?((((map__26521_26609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26521_26609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521_26609):map__26521_26609);
var id_26611 = cljs.core.get.call(null,map__26521_26610__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26611);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26517_26604))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26517_26604))){
var map__26523_26612 = ins;
var map__26523_26613__$1 = ((((!((map__26523_26612 == null)))?((((map__26523_26612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26523_26612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26523_26612):map__26523_26612);
var id_26614 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26615 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26616 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26617 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26618 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26619 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26620 = cljs.core.get.call(null,map__26523_26613__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26614)){
chart.client.popup.call(null,id_26614,html_26617,time_26618);
} else {
if(cljs.core.truth_((function (){var and__21919__auto__ = width_26619;
if(cljs.core.truth_(and__21919__auto__)){
var and__21919__auto____$1 = height_26620;
if(cljs.core.truth_(and__21919__auto____$1)){
var and__21919__auto____$2 = lat_26615;
if(cljs.core.truth_(and__21919__auto____$2)){
return lon_26616;
} else {
return and__21919__auto____$2;
}
} else {
return and__21919__auto____$1;
}
} else {
return and__21919__auto__;
}
})())){
chart.client.popup.call(null,lat_26615,lon_26616,html_26617,time_26618,width_26619,height_26620);
} else {
if(cljs.core.truth_((function (){var and__21919__auto__ = lat_26615;
if(cljs.core.truth_(and__21919__auto__)){
return lon_26616;
} else {
return and__21919__auto__;
}
})())){
chart.client.popup.call(null,lat_26615,lon_26616,html_26617,time_26618);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26517_26604))){
var map__26525_26621 = ins;
var map__26525_26622__$1 = ((((!((map__26525_26621 == null)))?((((map__26525_26621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26525_26621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26525_26621):map__26525_26621);
var id_26623 = cljs.core.get.call(null,map__26525_26622__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26624 = cljs.core.get.call(null,map__26525_26622__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26625 = cljs.core.get.call(null,map__26525_26622__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26626 = cljs.core.get.call(null,map__26525_26622__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26623,points_26624,options_26625,time_26626);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26517_26604))){
var map__26527_26627 = ins;
var map__26527_26628__$1 = ((((!((map__26527_26627 == null)))?((((map__26527_26627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26527_26627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527_26627):map__26527_26627);
var coord_26629 = cljs.core.get.call(null,map__26527_26628__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26630 = cljs.core.get.call(null,map__26527_26628__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26631 = cljs.core.get.call(null,map__26527_26628__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26629,zoom_26630,lock_26631);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26517_26604))){
var map__26529_26632 = ins;
var map__26529_26633__$1 = ((((!((map__26529_26632 == null)))?((((map__26529_26632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26529_26632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529_26632):map__26529_26632);
var iname_26634 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26635 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26636 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26637 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26638 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26639 = cljs.core.get.call(null,map__26529_26633__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26634,tip_26635,lat_26636,lon_26637,feature_26638,url_ico_26639);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26517_26604))){
var map__26531_26640 = ins;
var map__26531_26641__$1 = ((((!((map__26531_26640 == null)))?((((map__26531_26640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26531_26640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531_26640):map__26531_26640);
var iname_26642 = cljs.core.get.call(null,map__26531_26641__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26642);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26517_26604))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26517_26604))){
var map__26533_26643 = ins;
var map__26533_26644__$1 = ((((!((map__26533_26643 == null)))?((((map__26533_26643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26533_26643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26533_26643):map__26533_26643);
var ids_26645 = cljs.core.get.call(null,map__26533_26644__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26646 = cljs.core.get.call(null,map__26533_26644__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26645,options_26646);
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26517_26604))){
var map__26535_26647 = ins;
var map__26535_26648__$1 = ((((!((map__26535_26647 == null)))?((((map__26535_26647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26535_26647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26535_26647):map__26535_26647);
var question_26649 = cljs.core.get.call(null,map__26535_26648__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26650 = cljs.core.get.call(null,map__26535_26648__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26537_26651 = cljs.core._EQ_;
var expr__26538_26652 = question_26649;
if(cljs.core.truth_(pred__26537_26651.call(null,"city",expr__26538_26652))){
chart.client.select_city.call(null,param_26650);
} else {
if(cljs.core.truth_(pred__26537_26651.call(null,"airport",expr__26538_26652))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26538_26652)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__26516_26603.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__26517_26604))){
var map__26540_26653 = ins;
var map__26540_26654__$1 = ((((!((map__26540_26653 == null)))?((((map__26540_26653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26540_26653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26540_26653):map__26540_26653);
var callsign_26655 = cljs.core.get.call(null,map__26540_26654__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_26655;
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

var G__26656 = cljs.core.next.call(null,seq__26482__$1);
var G__26657 = null;
var G__26658 = (0);
var G__26659 = (0);
seq__26482 = G__26656;
chunk__26483 = G__26657;
count__26484 = G__26658;
i__26485 = G__26659;
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
var args26661 = [];
var len__23044__auto___26664 = arguments.length;
var i__23045__auto___26665 = (0);
while(true){
if((i__23045__auto___26665 < len__23044__auto___26664)){
args26661.push((arguments[i__23045__auto___26665]));

var G__26666 = (i__23045__auto___26665 + (1));
i__23045__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var G__26663 = args26661.length;
switch (G__26663) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26661.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26660_SHARP_){
return chart.client.move_to.call(null,sel,p1__26660_SHARP_);
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
var args26672 = [];
var len__23044__auto___26675 = arguments.length;
var i__23045__auto___26676 = (0);
while(true){
if((i__23045__auto___26676 < len__23044__auto___26675)){
args26672.push((arguments[i__23045__auto___26676]));

var G__26677 = (i__23045__auto___26676 + (1));
i__23045__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var G__26674 = args26672.length;
switch (G__26674) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26672.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26668_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__26668_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26669_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__26669_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__26670_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__26670_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26671_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__26671_SHARP_);
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
var args26682 = [];
var len__23044__auto___26685 = arguments.length;
var i__23045__auto___26686 = (0);
while(true){
if((i__23045__auto___26686 < len__23044__auto___26685)){
args26682.push((arguments[i__23045__auto___26686]));

var G__26687 = (i__23045__auto___26686 + (1));
i__23045__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var G__26684 = args26682.length;
switch (G__26684) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26682.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__26679_SHARP_){
return chart.client.question.call(null,sel,p1__26679_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__26680_SHARP_){
return chart.client.question.call(null,pred,sel,p1__26680_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__26681_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__26681_SHARP_);
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
var pred__26692_26695 = cljs.core._EQ_;
var expr__26693_26696 = cmd;
if(cljs.core.truth_(pred__26692_26695.call(null,"commands",expr__26693_26696))){
} else {
if(cljs.core.truth_(pred__26692_26695.call(null,"watch-visible",expr__26693_26696))){
var bnd_26697 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_26698 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26697.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26697.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26697.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_26697.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_26698)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__26692_26695.call(null,"move-to",expr__26693_26696))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__26692_26695.call(null,"schedule",expr__26693_26696))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__26692_26695.call(null,"question",expr__26693_26696))){
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
}catch (e26700){if((e26700 instanceof Error)){
var e_26701 = e26700;
cljs.core.println.call(null,e_26701);
} else {
throw e26700;

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