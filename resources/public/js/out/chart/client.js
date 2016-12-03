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

var mp_29484 = cljs.core.deref.call(null,vmp);
var mrk_29485 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_29484);
var vec__29481_29486 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_29484);
var lat_29487 = cljs.core.nth.call(null,vec__29481_29486,(0),null);
var lon_29488 = cljs.core.nth.call(null,vec__29481_29486,(1),null);
var pos_29489 = (new L.LatLng(lat_29487,lon_29488));
mrk_29485.setLatLng(pos_29489);

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
var seq__29494_29498 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__29495_29499 = null;
var count__29496_29500 = (0);
var i__29497_29501 = (0);
while(true){
if((i__29497_29501 < count__29496_29500)){
var veh_29502 = cljs.core._nth.call(null,chunk__29495_29499,i__29497_29501);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29502)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29502)));

var G__29503 = seq__29494_29498;
var G__29504 = chunk__29495_29499;
var G__29505 = count__29496_29500;
var G__29506 = (i__29497_29501 + (1));
seq__29494_29498 = G__29503;
chunk__29495_29499 = G__29504;
count__29496_29500 = G__29505;
i__29497_29501 = G__29506;
continue;
} else {
var temp__4657__auto___29507 = cljs.core.seq.call(null,seq__29494_29498);
if(temp__4657__auto___29507){
var seq__29494_29508__$1 = temp__4657__auto___29507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29494_29508__$1)){
var c__9319__auto___29509 = cljs.core.chunk_first.call(null,seq__29494_29508__$1);
var G__29510 = cljs.core.chunk_rest.call(null,seq__29494_29508__$1);
var G__29511 = c__9319__auto___29509;
var G__29512 = cljs.core.count.call(null,c__9319__auto___29509);
var G__29513 = (0);
seq__29494_29498 = G__29510;
chunk__29495_29499 = G__29511;
count__29496_29500 = G__29512;
i__29497_29501 = G__29513;
continue;
} else {
var veh_29514 = cljs.core.first.call(null,seq__29494_29508__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29514)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_29514)));

var G__29515 = cljs.core.next.call(null,seq__29494_29508__$1);
var G__29516 = null;
var G__29517 = (0);
var G__29518 = (0);
seq__29494_29498 = G__29515;
chunk__29495_29499 = G__29516;
count__29496_29500 = G__29517;
i__29497_29501 = G__29518;
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
var map__29521 = response;
var map__29521__$1 = ((((!((map__29521 == null)))?((((map__29521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);
var status = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__29527 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__29527,(0),null);
var lon = cljs.core.nth.call(null,vec__29527,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__29527,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__29527,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__29523_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__29523_SHARP_))),e.target);
});})(vec__29527,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__29527,lat,lon,pos,ico,opt,mrk__$1))
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
var args29530 = [];
var len__9613__auto___29536 = arguments.length;
var i__9614__auto___29537 = (0);
while(true){
if((i__9614__auto___29537 < len__9613__auto___29536)){
args29530.push((arguments[i__9614__auto___29537]));

var G__29538 = (i__9614__auto___29537 + (1));
i__9614__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var G__29532 = args29530.length;
switch (G__29532) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29530.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__29533 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__29533,(0),null);
var lon = cljs.core.nth.call(null,vec__29533,(1),null);
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
var seq__29566 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__29567 = null;
var count__29568 = (0);
var i__29569 = (0);
while(true){
if((i__29569 < count__29568)){
var map__29570 = cljs.core._nth.call(null,chunk__29567,i__29569);
var map__29570__$1 = ((((!((map__29570 == null)))?((((map__29570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29570):map__29570);
var ins = map__29570__$1;
var instruct = cljs.core.get.call(null,map__29570__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29572_29592 = cljs.core._EQ_;
var expr__29573_29593 = instruct;
if(cljs.core.truth_(pred__29572_29592.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29573_29593))){
var map__29575_29594 = ins;
var map__29575_29595__$1 = ((((!((map__29575_29594 == null)))?((((map__29575_29594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29575_29594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29575_29594):map__29575_29594);
var id_29596 = cljs.core.get.call(null,map__29575_29595__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29597 = cljs.core.get.call(null,map__29575_29595__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29596,vehicle_29597);
} else {
if(cljs.core.truth_(pred__29572_29592.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29573_29593))){
var map__29577_29598 = ins;
var map__29577_29599__$1 = ((((!((map__29577_29598 == null)))?((((map__29577_29598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29577_29598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577_29598):map__29577_29598);
var id_29600 = cljs.core.get.call(null,map__29577_29599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29600);
} else {
if(cljs.core.truth_(pred__29572_29592.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29573_29593))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29572_29592.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29573_29593))){
var map__29579_29601 = ins;
var map__29579_29602__$1 = ((((!((map__29579_29601 == null)))?((((map__29579_29601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29579_29601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29579_29601):map__29579_29601);
var id_29603 = cljs.core.get.call(null,map__29579_29602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29604 = cljs.core.get.call(null,map__29579_29602__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29605 = cljs.core.get.call(null,map__29579_29602__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29606 = cljs.core.get.call(null,map__29579_29602__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29607 = cljs.core.get.call(null,map__29579_29602__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_29603)){
chart.client.popup.call(null,id_29603,html_29606,time_29607);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_29604;
if(cljs.core.truth_(and__8493__auto__)){
return lon_29605;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_29604,lon_29605,html_29606,time_29607);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__29608 = seq__29566;
var G__29609 = chunk__29567;
var G__29610 = count__29568;
var G__29611 = (i__29569 + (1));
seq__29566 = G__29608;
chunk__29567 = G__29609;
count__29568 = G__29610;
i__29569 = G__29611;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29566);
if(temp__4657__auto__){
var seq__29566__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29566__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__29566__$1);
var G__29612 = cljs.core.chunk_rest.call(null,seq__29566__$1);
var G__29613 = c__9319__auto__;
var G__29614 = cljs.core.count.call(null,c__9319__auto__);
var G__29615 = (0);
seq__29566 = G__29612;
chunk__29567 = G__29613;
count__29568 = G__29614;
i__29569 = G__29615;
continue;
} else {
var map__29581 = cljs.core.first.call(null,seq__29566__$1);
var map__29581__$1 = ((((!((map__29581 == null)))?((((map__29581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var ins = map__29581__$1;
var instruct = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__29583_29616 = cljs.core._EQ_;
var expr__29584_29617 = instruct;
if(cljs.core.truth_(pred__29583_29616.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__29584_29617))){
var map__29586_29618 = ins;
var map__29586_29619__$1 = ((((!((map__29586_29618 == null)))?((((map__29586_29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586_29618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29586_29618):map__29586_29618);
var id_29620 = cljs.core.get.call(null,map__29586_29619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_29621 = cljs.core.get.call(null,map__29586_29619__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_29620,vehicle_29621);
} else {
if(cljs.core.truth_(pred__29583_29616.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__29584_29617))){
var map__29588_29622 = ins;
var map__29588_29623__$1 = ((((!((map__29588_29622 == null)))?((((map__29588_29622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29588_29622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29588_29622):map__29588_29622);
var id_29624 = cljs.core.get.call(null,map__29588_29623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_29624);
} else {
if(cljs.core.truth_(pred__29583_29616.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__29584_29617))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__29583_29616.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__29584_29617))){
var map__29590_29625 = ins;
var map__29590_29626__$1 = ((((!((map__29590_29625 == null)))?((((map__29590_29625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29590_29625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29590_29625):map__29590_29625);
var id_29627 = cljs.core.get.call(null,map__29590_29626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_29628 = cljs.core.get.call(null,map__29590_29626__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_29629 = cljs.core.get.call(null,map__29590_29626__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_29630 = cljs.core.get.call(null,map__29590_29626__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_29631 = cljs.core.get.call(null,map__29590_29626__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_29627)){
chart.client.popup.call(null,id_29627,html_29630,time_29631);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_29628;
if(cljs.core.truth_(and__8493__auto__)){
return lon_29629;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_29628,lon_29629,html_29630,time_29631);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__29632 = cljs.core.next.call(null,seq__29566__$1);
var G__29633 = null;
var G__29634 = (0);
var G__29635 = (0);
seq__29566 = G__29632;
chunk__29567 = G__29633;
count__29568 = G__29634;
i__29569 = G__29635;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__29639 = cljs.core._EQ_;
var expr__29640 = cmd;
if(cljs.core.truth_(pred__29639.call(null,"watch-visible",expr__29640))){
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map