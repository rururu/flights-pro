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

var mp_24402 = cljs.core.deref.call(null,vmp);
var mrk_24403 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_24402);
var vec__24399_24404 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_24402);
var lat_24405 = cljs.core.nth.call(null,vec__24399_24404,(0),null);
var lon_24406 = cljs.core.nth.call(null,vec__24399_24404,(1),null);
var pos_24407 = (new L.LatLng(lat_24405,lon_24406));
mrk_24403.setLatLng(pos_24407);

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
var seq__24412_24416 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__24413_24417 = null;
var count__24414_24418 = (0);
var i__24415_24419 = (0);
while(true){
if((i__24415_24419 < count__24414_24418)){
var veh_24420 = cljs.core._nth.call(null,chunk__24413_24417,i__24415_24419);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24420)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24420)));

var G__24421 = seq__24412_24416;
var G__24422 = chunk__24413_24417;
var G__24423 = count__24414_24418;
var G__24424 = (i__24415_24419 + (1));
seq__24412_24416 = G__24421;
chunk__24413_24417 = G__24422;
count__24414_24418 = G__24423;
i__24415_24419 = G__24424;
continue;
} else {
var temp__4657__auto___24425 = cljs.core.seq.call(null,seq__24412_24416);
if(temp__4657__auto___24425){
var seq__24412_24426__$1 = temp__4657__auto___24425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24412_24426__$1)){
var c__9319__auto___24427 = cljs.core.chunk_first.call(null,seq__24412_24426__$1);
var G__24428 = cljs.core.chunk_rest.call(null,seq__24412_24426__$1);
var G__24429 = c__9319__auto___24427;
var G__24430 = cljs.core.count.call(null,c__9319__auto___24427);
var G__24431 = (0);
seq__24412_24416 = G__24428;
chunk__24413_24417 = G__24429;
count__24414_24418 = G__24430;
i__24415_24419 = G__24431;
continue;
} else {
var veh_24432 = cljs.core.first.call(null,seq__24412_24426__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24432)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24432)));

var G__24433 = cljs.core.next.call(null,seq__24412_24426__$1);
var G__24434 = null;
var G__24435 = (0);
var G__24436 = (0);
seq__24412_24416 = G__24433;
chunk__24413_24417 = G__24434;
count__24414_24418 = G__24435;
i__24415_24419 = G__24436;
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
var map__24439 = response;
var map__24439__$1 = ((((!((map__24439 == null)))?((((map__24439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24439):map__24439);
var status = cljs.core.get.call(null,map__24439__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24439__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__24445 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__24445,(0),null);
var lon = cljs.core.nth.call(null,vec__24445,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__24445,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__24445,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__24441_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__24441_SHARP_))),e.target);
});})(vec__24445,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__24445,lat,lon,pos,ico,opt,mrk__$1))
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
var args24448 = [];
var len__9613__auto___24454 = arguments.length;
var i__9614__auto___24455 = (0);
while(true){
if((i__9614__auto___24455 < len__9613__auto___24454)){
args24448.push((arguments[i__9614__auto___24455]));

var G__24456 = (i__9614__auto___24455 + (1));
i__9614__auto___24455 = G__24456;
continue;
} else {
}
break;
}

var G__24450 = args24448.length;
switch (G__24450) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24448.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__24451 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__24451,(0),null);
var lon = cljs.core.nth.call(null,vec__24451,(1),null);
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
var seq__24484 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__24485 = null;
var count__24486 = (0);
var i__24487 = (0);
while(true){
if((i__24487 < count__24486)){
var map__24488 = cljs.core._nth.call(null,chunk__24485,i__24487);
var map__24488__$1 = ((((!((map__24488 == null)))?((((map__24488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24488):map__24488);
var ins = map__24488__$1;
var instruct = cljs.core.get.call(null,map__24488__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24490_24510 = cljs.core._EQ_;
var expr__24491_24511 = instruct;
if(cljs.core.truth_(pred__24490_24510.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24491_24511))){
var map__24493_24512 = ins;
var map__24493_24513__$1 = ((((!((map__24493_24512 == null)))?((((map__24493_24512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24493_24512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24493_24512):map__24493_24512);
var id_24514 = cljs.core.get.call(null,map__24493_24513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24515 = cljs.core.get.call(null,map__24493_24513__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24514,vehicle_24515);
} else {
if(cljs.core.truth_(pred__24490_24510.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24491_24511))){
var map__24495_24516 = ins;
var map__24495_24517__$1 = ((((!((map__24495_24516 == null)))?((((map__24495_24516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24495_24516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24495_24516):map__24495_24516);
var id_24518 = cljs.core.get.call(null,map__24495_24517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24518);
} else {
if(cljs.core.truth_(pred__24490_24510.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24491_24511))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24490_24510.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24491_24511))){
var map__24497_24519 = ins;
var map__24497_24520__$1 = ((((!((map__24497_24519 == null)))?((((map__24497_24519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24497_24519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24497_24519):map__24497_24519);
var id_24521 = cljs.core.get.call(null,map__24497_24520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24522 = cljs.core.get.call(null,map__24497_24520__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24523 = cljs.core.get.call(null,map__24497_24520__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24524 = cljs.core.get.call(null,map__24497_24520__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24525 = cljs.core.get.call(null,map__24497_24520__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24521)){
chart.client.popup.call(null,id_24521,html_24524,time_24525);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_24522;
if(cljs.core.truth_(and__8493__auto__)){
return lon_24523;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_24522,lon_24523,html_24524,time_24525);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__24526 = seq__24484;
var G__24527 = chunk__24485;
var G__24528 = count__24486;
var G__24529 = (i__24487 + (1));
seq__24484 = G__24526;
chunk__24485 = G__24527;
count__24486 = G__24528;
i__24487 = G__24529;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24484);
if(temp__4657__auto__){
var seq__24484__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24484__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__24484__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24484__$1);
var G__24531 = c__9319__auto__;
var G__24532 = cljs.core.count.call(null,c__9319__auto__);
var G__24533 = (0);
seq__24484 = G__24530;
chunk__24485 = G__24531;
count__24486 = G__24532;
i__24487 = G__24533;
continue;
} else {
var map__24499 = cljs.core.first.call(null,seq__24484__$1);
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var ins = map__24499__$1;
var instruct = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24501_24534 = cljs.core._EQ_;
var expr__24502_24535 = instruct;
if(cljs.core.truth_(pred__24501_24534.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24502_24535))){
var map__24504_24536 = ins;
var map__24504_24537__$1 = ((((!((map__24504_24536 == null)))?((((map__24504_24536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24504_24536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24504_24536):map__24504_24536);
var id_24538 = cljs.core.get.call(null,map__24504_24537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24539 = cljs.core.get.call(null,map__24504_24537__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24538,vehicle_24539);
} else {
if(cljs.core.truth_(pred__24501_24534.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24502_24535))){
var map__24506_24540 = ins;
var map__24506_24541__$1 = ((((!((map__24506_24540 == null)))?((((map__24506_24540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24506_24540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24506_24540):map__24506_24540);
var id_24542 = cljs.core.get.call(null,map__24506_24541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24542);
} else {
if(cljs.core.truth_(pred__24501_24534.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24502_24535))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24501_24534.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24502_24535))){
var map__24508_24543 = ins;
var map__24508_24544__$1 = ((((!((map__24508_24543 == null)))?((((map__24508_24543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24508_24543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24508_24543):map__24508_24543);
var id_24545 = cljs.core.get.call(null,map__24508_24544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24546 = cljs.core.get.call(null,map__24508_24544__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24547 = cljs.core.get.call(null,map__24508_24544__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24548 = cljs.core.get.call(null,map__24508_24544__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24549 = cljs.core.get.call(null,map__24508_24544__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24545)){
chart.client.popup.call(null,id_24545,html_24548,time_24549);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_24546;
if(cljs.core.truth_(and__8493__auto__)){
return lon_24547;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_24546,lon_24547,html_24548,time_24549);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__24550 = cljs.core.next.call(null,seq__24484__$1);
var G__24551 = null;
var G__24552 = (0);
var G__24553 = (0);
seq__24484 = G__24550;
chunk__24485 = G__24551;
count__24486 = G__24552;
i__24487 = G__24553;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__24557 = cljs.core._EQ_;
var expr__24558 = cmd;
if(cljs.core.truth_(pred__24557.call(null,"watch-visible",expr__24558))){
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