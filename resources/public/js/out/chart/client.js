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

var mp_23432 = cljs.core.deref.call(null,vmp);
var mrk_23433 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23432);
var vec__23429_23434 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23432);
var lat_23435 = cljs.core.nth.call(null,vec__23429_23434,(0),null);
var lon_23436 = cljs.core.nth.call(null,vec__23429_23434,(1),null);
var pos_23437 = (new L.LatLng(lat_23435,lon_23436));
mrk_23433.setLatLng(pos_23437);

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
var seq__23442_23446 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23443_23447 = null;
var count__23444_23448 = (0);
var i__23445_23449 = (0);
while(true){
if((i__23445_23449 < count__23444_23448)){
var veh_23450 = cljs.core._nth.call(null,chunk__23443_23447,i__23445_23449);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23450)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23450)));

var G__23451 = seq__23442_23446;
var G__23452 = chunk__23443_23447;
var G__23453 = count__23444_23448;
var G__23454 = (i__23445_23449 + (1));
seq__23442_23446 = G__23451;
chunk__23443_23447 = G__23452;
count__23444_23448 = G__23453;
i__23445_23449 = G__23454;
continue;
} else {
var temp__4657__auto___23455 = cljs.core.seq.call(null,seq__23442_23446);
if(temp__4657__auto___23455){
var seq__23442_23456__$1 = temp__4657__auto___23455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23442_23456__$1)){
var c__9637__auto___23457 = cljs.core.chunk_first.call(null,seq__23442_23456__$1);
var G__23458 = cljs.core.chunk_rest.call(null,seq__23442_23456__$1);
var G__23459 = c__9637__auto___23457;
var G__23460 = cljs.core.count.call(null,c__9637__auto___23457);
var G__23461 = (0);
seq__23442_23446 = G__23458;
chunk__23443_23447 = G__23459;
count__23444_23448 = G__23460;
i__23445_23449 = G__23461;
continue;
} else {
var veh_23462 = cljs.core.first.call(null,seq__23442_23456__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23462)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23462)));

var G__23463 = cljs.core.next.call(null,seq__23442_23456__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23442_23446 = G__23463;
chunk__23443_23447 = G__23464;
count__23444_23448 = G__23465;
i__23445_23449 = G__23466;
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
var map__23469 = response;
var map__23469__$1 = ((((!((map__23469 == null)))?((((map__23469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23469):map__23469);
var status = cljs.core.get.call(null,map__23469__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23469__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__23475 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23475,(0),null);
var lon = cljs.core.nth.call(null,vec__23475,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__23475,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23475,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23471_SHARP_))),e.target);
});})(vec__23475,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23475,lat,lon,pos,ico,opt,mrk__$1))
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
var args23478 = [];
var len__9931__auto___23484 = arguments.length;
var i__9932__auto___23485 = (0);
while(true){
if((i__9932__auto___23485 < len__9931__auto___23484)){
args23478.push((arguments[i__9932__auto___23485]));

var G__23486 = (i__9932__auto___23485 + (1));
i__9932__auto___23485 = G__23486;
continue;
} else {
}
break;
}

var G__23480 = args23478.length;
switch (G__23480) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23478.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23481 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23481,(0),null);
var lon = cljs.core.nth.call(null,vec__23481,(1),null);
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
var seq__23514 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23515 = null;
var count__23516 = (0);
var i__23517 = (0);
while(true){
if((i__23517 < count__23516)){
var map__23518 = cljs.core._nth.call(null,chunk__23515,i__23517);
var map__23518__$1 = ((((!((map__23518 == null)))?((((map__23518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23518):map__23518);
var ins = map__23518__$1;
var instruct = cljs.core.get.call(null,map__23518__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23520_23540 = cljs.core._EQ_;
var expr__23521_23541 = instruct;
if(cljs.core.truth_(pred__23520_23540.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23521_23541))){
var map__23523_23542 = ins;
var map__23523_23543__$1 = ((((!((map__23523_23542 == null)))?((((map__23523_23542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23523_23542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23523_23542):map__23523_23542);
var id_23544 = cljs.core.get.call(null,map__23523_23543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23545 = cljs.core.get.call(null,map__23523_23543__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23544,vehicle_23545);
} else {
if(cljs.core.truth_(pred__23520_23540.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23521_23541))){
var map__23525_23546 = ins;
var map__23525_23547__$1 = ((((!((map__23525_23546 == null)))?((((map__23525_23546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23525_23546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23525_23546):map__23525_23546);
var id_23548 = cljs.core.get.call(null,map__23525_23547__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23548);
} else {
if(cljs.core.truth_(pred__23520_23540.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23521_23541))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23520_23540.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23521_23541))){
var map__23527_23549 = ins;
var map__23527_23550__$1 = ((((!((map__23527_23549 == null)))?((((map__23527_23549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23527_23549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23527_23549):map__23527_23549);
var id_23551 = cljs.core.get.call(null,map__23527_23550__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23552 = cljs.core.get.call(null,map__23527_23550__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23553 = cljs.core.get.call(null,map__23527_23550__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23554 = cljs.core.get.call(null,map__23527_23550__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23555 = cljs.core.get.call(null,map__23527_23550__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23551)){
chart.client.popup.call(null,id_23551,html_23554,time_23555);
} else {
if(cljs.core.truth_((function (){var and__8811__auto__ = lat_23552;
if(cljs.core.truth_(and__8811__auto__)){
return lon_23553;
} else {
return and__8811__auto__;
}
})())){
chart.client.popup.call(null,lat_23552,lon_23553,html_23554,time_23555);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__23556 = seq__23514;
var G__23557 = chunk__23515;
var G__23558 = count__23516;
var G__23559 = (i__23517 + (1));
seq__23514 = G__23556;
chunk__23515 = G__23557;
count__23516 = G__23558;
i__23517 = G__23559;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23514);
if(temp__4657__auto__){
var seq__23514__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23514__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__23514__$1);
var G__23560 = cljs.core.chunk_rest.call(null,seq__23514__$1);
var G__23561 = c__9637__auto__;
var G__23562 = cljs.core.count.call(null,c__9637__auto__);
var G__23563 = (0);
seq__23514 = G__23560;
chunk__23515 = G__23561;
count__23516 = G__23562;
i__23517 = G__23563;
continue;
} else {
var map__23529 = cljs.core.first.call(null,seq__23514__$1);
var map__23529__$1 = ((((!((map__23529 == null)))?((((map__23529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529):map__23529);
var ins = map__23529__$1;
var instruct = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23531_23564 = cljs.core._EQ_;
var expr__23532_23565 = instruct;
if(cljs.core.truth_(pred__23531_23564.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23532_23565))){
var map__23534_23566 = ins;
var map__23534_23567__$1 = ((((!((map__23534_23566 == null)))?((((map__23534_23566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23534_23566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23534_23566):map__23534_23566);
var id_23568 = cljs.core.get.call(null,map__23534_23567__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23569 = cljs.core.get.call(null,map__23534_23567__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23568,vehicle_23569);
} else {
if(cljs.core.truth_(pred__23531_23564.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23532_23565))){
var map__23536_23570 = ins;
var map__23536_23571__$1 = ((((!((map__23536_23570 == null)))?((((map__23536_23570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23536_23570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23536_23570):map__23536_23570);
var id_23572 = cljs.core.get.call(null,map__23536_23571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23572);
} else {
if(cljs.core.truth_(pred__23531_23564.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23532_23565))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23531_23564.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23532_23565))){
var map__23538_23573 = ins;
var map__23538_23574__$1 = ((((!((map__23538_23573 == null)))?((((map__23538_23573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23538_23573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23538_23573):map__23538_23573);
var id_23575 = cljs.core.get.call(null,map__23538_23574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23576 = cljs.core.get.call(null,map__23538_23574__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23577 = cljs.core.get.call(null,map__23538_23574__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23578 = cljs.core.get.call(null,map__23538_23574__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23579 = cljs.core.get.call(null,map__23538_23574__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_23575)){
chart.client.popup.call(null,id_23575,html_23578,time_23579);
} else {
if(cljs.core.truth_((function (){var and__8811__auto__ = lat_23576;
if(cljs.core.truth_(and__8811__auto__)){
return lon_23577;
} else {
return and__8811__auto__;
}
})())){
chart.client.popup.call(null,lat_23576,lon_23577,html_23578,time_23579);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__23580 = cljs.core.next.call(null,seq__23514__$1);
var G__23581 = null;
var G__23582 = (0);
var G__23583 = (0);
seq__23514 = G__23580;
chunk__23515 = G__23581;
count__23516 = G__23582;
i__23517 = G__23583;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__23587 = cljs.core._EQ_;
var expr__23588 = cmd;
if(cljs.core.truth_(pred__23587.call(null,"watch-visible",expr__23588))){
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