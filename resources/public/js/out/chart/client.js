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
chart.client.PORT = (4444);
chart.client.CHR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join('');
chart.client.INS_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join('');
chart.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('');
chart.client.INS_TIO = (1000);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.MOV_TIO = (200);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_30254 = cljs.core.deref.call(null,vmp);
var mrk_30255 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_30254);
var vec__30251_30256 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_30254);
var lat_30257 = cljs.core.nth.call(null,vec__30251_30256,(0),null);
var lon_30258 = cljs.core.nth.call(null,vec__30251_30256,(1),null);
var pos_30259 = (new L.LatLng(lat_30257,lon_30258));
mrk_30255.setLatLng(pos_30259);

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
var seq__30264_30268 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__30265_30269 = null;
var count__30266_30270 = (0);
var i__30267_30271 = (0);
while(true){
if((i__30267_30271 < count__30266_30270)){
var veh_30272 = cljs.core._nth.call(null,chunk__30265_30269,i__30267_30271);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30272)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30272)));

var G__30273 = seq__30264_30268;
var G__30274 = chunk__30265_30269;
var G__30275 = count__30266_30270;
var G__30276 = (i__30267_30271 + (1));
seq__30264_30268 = G__30273;
chunk__30265_30269 = G__30274;
count__30266_30270 = G__30275;
i__30267_30271 = G__30276;
continue;
} else {
var temp__4657__auto___30277 = cljs.core.seq.call(null,seq__30264_30268);
if(temp__4657__auto___30277){
var seq__30264_30278__$1 = temp__4657__auto___30277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30264_30278__$1)){
var c__27343__auto___30279 = cljs.core.chunk_first.call(null,seq__30264_30278__$1);
var G__30280 = cljs.core.chunk_rest.call(null,seq__30264_30278__$1);
var G__30281 = c__27343__auto___30279;
var G__30282 = cljs.core.count.call(null,c__27343__auto___30279);
var G__30283 = (0);
seq__30264_30268 = G__30280;
chunk__30265_30269 = G__30281;
count__30266_30270 = G__30282;
i__30267_30271 = G__30283;
continue;
} else {
var veh_30284 = cljs.core.first.call(null,seq__30264_30278__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30284)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30284)));

var G__30285 = cljs.core.next.call(null,seq__30264_30278__$1);
var G__30286 = null;
var G__30287 = (0);
var G__30288 = (0);
seq__30264_30268 = G__30285;
chunk__30265_30269 = G__30286;
count__30266_30270 = G__30287;
i__30267_30271 = G__30288;
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
var map__30291 = response;
var map__30291__$1 = ((((!((map__30291 == null)))?((((map__30291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30291):map__30291);
var status = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.info = (function chart$client$info(id){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str("info?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__30297 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__30297,(0),null);
var lon = cljs.core.nth.call(null,vec__30297,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__30297,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__30297,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__30293_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__30293_SHARP_))),e.target);
});})(vec__30297,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__30297,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
chart.client.delete_vehicle.call(null,id);

var ms = cljs.core.volatile_BANG_.call(null,"START");
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"movst","movst",1585301628),ms,new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.start_process.call(null,ms,((function (ms){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(ms))
,chart.client.MOV_TIO));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.popup = (function chart$client$popup(var_args){
var args30300 = [];
var len__27637__auto___30306 = arguments.length;
var i__27638__auto___30307 = (0);
while(true){
if((i__27638__auto___30307 < len__27637__auto___30306)){
args30300.push((arguments[i__27638__auto___30307]));

var G__30308 = (i__27638__auto___30307 + (1));
i__27638__auto___30307 = G__30308;
continue;
} else {
}
break;
}

var G__30302 = args30300.length;
switch (G__30302) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30300.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__30303 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__30303,(0),null);
var lon = cljs.core.nth.call(null,vec__30303,(1),null);
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
var seq__30336 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__30337 = null;
var count__30338 = (0);
var i__30339 = (0);
while(true){
if((i__30339 < count__30338)){
var map__30340 = cljs.core._nth.call(null,chunk__30337,i__30339);
var map__30340__$1 = ((((!((map__30340 == null)))?((((map__30340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30340):map__30340);
var ins = map__30340__$1;
var instruct = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30342_30362 = cljs.core._EQ_;
var expr__30343_30363 = instruct;
if(cljs.core.truth_(pred__30342_30362.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30343_30363))){
var map__30345_30364 = ins;
var map__30345_30365__$1 = ((((!((map__30345_30364 == null)))?((((map__30345_30364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30345_30364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345_30364):map__30345_30364);
var id_30366 = cljs.core.get.call(null,map__30345_30365__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30367 = cljs.core.get.call(null,map__30345_30365__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30366,vehicle_30367);
} else {
if(cljs.core.truth_(pred__30342_30362.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30343_30363))){
var map__30347_30368 = ins;
var map__30347_30369__$1 = ((((!((map__30347_30368 == null)))?((((map__30347_30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30347_30368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30347_30368):map__30347_30368);
var id_30370 = cljs.core.get.call(null,map__30347_30369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30370);
} else {
if(cljs.core.truth_(pred__30342_30362.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30343_30363))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30342_30362.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30343_30363))){
var map__30349_30371 = ins;
var map__30349_30372__$1 = ((((!((map__30349_30371 == null)))?((((map__30349_30371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30349_30371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349_30371):map__30349_30371);
var id_30373 = cljs.core.get.call(null,map__30349_30372__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30374 = cljs.core.get.call(null,map__30349_30372__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30375 = cljs.core.get.call(null,map__30349_30372__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30376 = cljs.core.get.call(null,map__30349_30372__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30377 = cljs.core.get.call(null,map__30349_30372__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_30373)){
chart.client.popup.call(null,id_30373,html_30376,time_30377);
} else {
if(cljs.core.truth_((function (){var and__26517__auto__ = lat_30374;
if(cljs.core.truth_(and__26517__auto__)){
return lon_30375;
} else {
return and__26517__auto__;
}
})())){
chart.client.popup.call(null,lat_30374,lon_30375,html_30376,time_30377);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__30378 = seq__30336;
var G__30379 = chunk__30337;
var G__30380 = count__30338;
var G__30381 = (i__30339 + (1));
seq__30336 = G__30378;
chunk__30337 = G__30379;
count__30338 = G__30380;
i__30339 = G__30381;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30336);
if(temp__4657__auto__){
var seq__30336__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30336__$1)){
var c__27343__auto__ = cljs.core.chunk_first.call(null,seq__30336__$1);
var G__30382 = cljs.core.chunk_rest.call(null,seq__30336__$1);
var G__30383 = c__27343__auto__;
var G__30384 = cljs.core.count.call(null,c__27343__auto__);
var G__30385 = (0);
seq__30336 = G__30382;
chunk__30337 = G__30383;
count__30338 = G__30384;
i__30339 = G__30385;
continue;
} else {
var map__30351 = cljs.core.first.call(null,seq__30336__$1);
var map__30351__$1 = ((((!((map__30351 == null)))?((((map__30351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var ins = map__30351__$1;
var instruct = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30353_30386 = cljs.core._EQ_;
var expr__30354_30387 = instruct;
if(cljs.core.truth_(pred__30353_30386.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30354_30387))){
var map__30356_30388 = ins;
var map__30356_30389__$1 = ((((!((map__30356_30388 == null)))?((((map__30356_30388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30356_30388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356_30388):map__30356_30388);
var id_30390 = cljs.core.get.call(null,map__30356_30389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30391 = cljs.core.get.call(null,map__30356_30389__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30390,vehicle_30391);
} else {
if(cljs.core.truth_(pred__30353_30386.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30354_30387))){
var map__30358_30392 = ins;
var map__30358_30393__$1 = ((((!((map__30358_30392 == null)))?((((map__30358_30392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30358_30392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30358_30392):map__30358_30392);
var id_30394 = cljs.core.get.call(null,map__30358_30393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30394);
} else {
if(cljs.core.truth_(pred__30353_30386.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30354_30387))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30353_30386.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30354_30387))){
var map__30360_30395 = ins;
var map__30360_30396__$1 = ((((!((map__30360_30395 == null)))?((((map__30360_30395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30360_30395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30360_30395):map__30360_30395);
var id_30397 = cljs.core.get.call(null,map__30360_30396__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30398 = cljs.core.get.call(null,map__30360_30396__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30399 = cljs.core.get.call(null,map__30360_30396__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30400 = cljs.core.get.call(null,map__30360_30396__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30401 = cljs.core.get.call(null,map__30360_30396__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_30397)){
chart.client.popup.call(null,id_30397,html_30400,time_30401);
} else {
if(cljs.core.truth_((function (){var and__26517__auto__ = lat_30398;
if(cljs.core.truth_(and__26517__auto__)){
return lon_30399;
} else {
return and__26517__auto__;
}
})())){
chart.client.popup.call(null,lat_30398,lon_30399,html_30400,time_30401);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__30402 = cljs.core.next.call(null,seq__30336__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__30336 = G__30402;
chunk__30337 = G__30403;
count__30338 = G__30404;
i__30339 = G__30405;
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
return ajax.core.GET.call(null,chart.client.INS_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.watch_visible = (function chart$client$watch_visible(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__30409 = cljs.core._EQ_;
var expr__30410 = cmd;
if(cljs.core.truth_(pred__30409.call(null,"watch-visible",expr__30410))){
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map