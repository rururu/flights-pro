// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_31266 = cljs.core.deref.call(null,vmp);
var mrk_31267 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_31266);
var vec__31263_31268 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_31266);
var lat_31269 = cljs.core.nth.call(null,vec__31263_31268,(0),null);
var lon_31270 = cljs.core.nth.call(null,vec__31263_31268,(1),null);
var pos_31271 = (new L.LatLng(lat_31269,lon_31270));
mrk_31267.setLatLng(pos_31271);

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
var seq__31276_31280 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__31277_31281 = null;
var count__31278_31282 = (0);
var i__31279_31283 = (0);
while(true){
if((i__31279_31283 < count__31278_31282)){
var veh_31284 = cljs.core._nth.call(null,chunk__31277_31281,i__31279_31283);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31284)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31284)));

var G__31285 = seq__31276_31280;
var G__31286 = chunk__31277_31281;
var G__31287 = count__31278_31282;
var G__31288 = (i__31279_31283 + (1));
seq__31276_31280 = G__31285;
chunk__31277_31281 = G__31286;
count__31278_31282 = G__31287;
i__31279_31283 = G__31288;
continue;
} else {
var temp__4657__auto___31289 = cljs.core.seq.call(null,seq__31276_31280);
if(temp__4657__auto___31289){
var seq__31276_31290__$1 = temp__4657__auto___31289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31276_31290__$1)){
var c__20451__auto___31291 = cljs.core.chunk_first.call(null,seq__31276_31290__$1);
var G__31292 = cljs.core.chunk_rest.call(null,seq__31276_31290__$1);
var G__31293 = c__20451__auto___31291;
var G__31294 = cljs.core.count.call(null,c__20451__auto___31291);
var G__31295 = (0);
seq__31276_31280 = G__31292;
chunk__31277_31281 = G__31293;
count__31278_31282 = G__31294;
i__31279_31283 = G__31295;
continue;
} else {
var veh_31296 = cljs.core.first.call(null,seq__31276_31290__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31296)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31296)));

var G__31297 = cljs.core.next.call(null,seq__31276_31290__$1);
var G__31298 = null;
var G__31299 = (0);
var G__31300 = (0);
seq__31276_31280 = G__31297;
chunk__31277_31281 = G__31298;
count__31278_31282 = G__31299;
i__31279_31283 = G__31300;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__31303 = response;
var map__31303__$1 = ((((!((map__31303 == null)))?((((map__31303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31303):map__31303);
var status = cljs.core.get.call(null,map__31303__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31303__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
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

var vec__31309 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__31309,(0),null);
var lon = cljs.core.nth.call(null,vec__31309,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__31309,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__31309,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__31305_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__31305_SHARP_))),e.target);
});})(vec__31309,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__31309,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.popup = (function chart$client$popup(var_args){
var args31312 = [];
var len__20745__auto___31318 = arguments.length;
var i__20746__auto___31319 = (0);
while(true){
if((i__20746__auto___31319 < len__20745__auto___31318)){
args31312.push((arguments[i__20746__auto___31319]));

var G__31320 = (i__20746__auto___31319 + (1));
i__20746__auto___31319 = G__31320;
continue;
} else {
}
break;
}

var G__31314 = args31312.length;
switch (G__31314) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31312.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__31315 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__31315,(0),null);
var lon = cljs.core.nth.call(null,vec__31315,(1),null);
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

chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__31348 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__31349 = null;
var count__31350 = (0);
var i__31351 = (0);
while(true){
if((i__31351 < count__31350)){
var map__31352 = cljs.core._nth.call(null,chunk__31349,i__31351);
var map__31352__$1 = ((((!((map__31352 == null)))?((((map__31352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31352):map__31352);
var ins = map__31352__$1;
var instruct = cljs.core.get.call(null,map__31352__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31354_31374 = cljs.core._EQ_;
var expr__31355_31375 = instruct;
if(cljs.core.truth_(pred__31354_31374.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31355_31375))){
var map__31357_31376 = ins;
var map__31357_31377__$1 = ((((!((map__31357_31376 == null)))?((((map__31357_31376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31357_31376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31357_31376):map__31357_31376);
var id_31378 = cljs.core.get.call(null,map__31357_31377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31379 = cljs.core.get.call(null,map__31357_31377__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31378,vehicle_31379);
} else {
if(cljs.core.truth_(pred__31354_31374.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31355_31375))){
var map__31359_31380 = ins;
var map__31359_31381__$1 = ((((!((map__31359_31380 == null)))?((((map__31359_31380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31359_31380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31359_31380):map__31359_31380);
var id_31382 = cljs.core.get.call(null,map__31359_31381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31382);
} else {
if(cljs.core.truth_(pred__31354_31374.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31355_31375))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31354_31374.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31355_31375))){
var map__31361_31383 = ins;
var map__31361_31384__$1 = ((((!((map__31361_31383 == null)))?((((map__31361_31383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31361_31383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31361_31383):map__31361_31383);
var id_31385 = cljs.core.get.call(null,map__31361_31384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31386 = cljs.core.get.call(null,map__31361_31384__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31387 = cljs.core.get.call(null,map__31361_31384__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31388 = cljs.core.get.call(null,map__31361_31384__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31389 = cljs.core.get.call(null,map__31361_31384__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31385)){
chart.client.popup.call(null,id_31385,html_31388,time_31389);
} else {
if(cljs.core.truth_((function (){var and__19625__auto__ = lat_31386;
if(cljs.core.truth_(and__19625__auto__)){
return lon_31387;
} else {
return and__19625__auto__;
}
})())){
chart.client.popup.call(null,lat_31386,lon_31387,html_31388,time_31389);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__31390 = seq__31348;
var G__31391 = chunk__31349;
var G__31392 = count__31350;
var G__31393 = (i__31351 + (1));
seq__31348 = G__31390;
chunk__31349 = G__31391;
count__31350 = G__31392;
i__31351 = G__31393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31348);
if(temp__4657__auto__){
var seq__31348__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31348__$1)){
var c__20451__auto__ = cljs.core.chunk_first.call(null,seq__31348__$1);
var G__31394 = cljs.core.chunk_rest.call(null,seq__31348__$1);
var G__31395 = c__20451__auto__;
var G__31396 = cljs.core.count.call(null,c__20451__auto__);
var G__31397 = (0);
seq__31348 = G__31394;
chunk__31349 = G__31395;
count__31350 = G__31396;
i__31351 = G__31397;
continue;
} else {
var map__31363 = cljs.core.first.call(null,seq__31348__$1);
var map__31363__$1 = ((((!((map__31363 == null)))?((((map__31363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31363):map__31363);
var ins = map__31363__$1;
var instruct = cljs.core.get.call(null,map__31363__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31365_31398 = cljs.core._EQ_;
var expr__31366_31399 = instruct;
if(cljs.core.truth_(pred__31365_31398.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31366_31399))){
var map__31368_31400 = ins;
var map__31368_31401__$1 = ((((!((map__31368_31400 == null)))?((((map__31368_31400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31368_31400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368_31400):map__31368_31400);
var id_31402 = cljs.core.get.call(null,map__31368_31401__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31403 = cljs.core.get.call(null,map__31368_31401__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31402,vehicle_31403);
} else {
if(cljs.core.truth_(pred__31365_31398.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31366_31399))){
var map__31370_31404 = ins;
var map__31370_31405__$1 = ((((!((map__31370_31404 == null)))?((((map__31370_31404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31370_31404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31370_31404):map__31370_31404);
var id_31406 = cljs.core.get.call(null,map__31370_31405__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31406);
} else {
if(cljs.core.truth_(pred__31365_31398.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31366_31399))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31365_31398.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31366_31399))){
var map__31372_31407 = ins;
var map__31372_31408__$1 = ((((!((map__31372_31407 == null)))?((((map__31372_31407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31372_31407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31372_31407):map__31372_31407);
var id_31409 = cljs.core.get.call(null,map__31372_31408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31410 = cljs.core.get.call(null,map__31372_31408__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31411 = cljs.core.get.call(null,map__31372_31408__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31412 = cljs.core.get.call(null,map__31372_31408__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31413 = cljs.core.get.call(null,map__31372_31408__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_31409)){
chart.client.popup.call(null,id_31409,html_31412,time_31413);
} else {
if(cljs.core.truth_((function (){var and__19625__auto__ = lat_31410;
if(cljs.core.truth_(and__19625__auto__)){
return lon_31411;
} else {
return and__19625__auto__;
}
})())){
chart.client.popup.call(null,lat_31410,lon_31411,html_31412,time_31413);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__31414 = cljs.core.next.call(null,seq__31348__$1);
var G__31415 = null;
var G__31416 = (0);
var G__31417 = (0);
seq__31348 = G__31414;
chunk__31349 = G__31415;
count__31350 = G__31416;
i__31351 = G__31417;
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
chart.client.watch_visible = (function chart$client$watch_visible(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__31421 = cljs.core._EQ_;
var expr__31422 = cmd;
if(cljs.core.truth_(pred__31421.call(null,"watch-visible",expr__31422))){
return chart.client.watch_visible.call(null);
} else {
return cmd;
}
})())].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([50.04,8.55],(10));
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
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map