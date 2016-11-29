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

var mp_21000 = cljs.core.deref.call(null,vmp);
var mrk_21001 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_21000);
var vec__20997_21002 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_21000);
var lat_21003 = cljs.core.nth.call(null,vec__20997_21002,(0),null);
var lon_21004 = cljs.core.nth.call(null,vec__20997_21002,(1),null);
var pos_21005 = (new L.LatLng(lat_21003,lon_21004));
mrk_21001.setLatLng(pos_21005);

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
var seq__21010_21014 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__21011_21015 = null;
var count__21012_21016 = (0);
var i__21013_21017 = (0);
while(true){
if((i__21013_21017 < count__21012_21016)){
var veh_21018 = cljs.core._nth.call(null,chunk__21011_21015,i__21013_21017);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21018)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21018)));

var G__21019 = seq__21010_21014;
var G__21020 = chunk__21011_21015;
var G__21021 = count__21012_21016;
var G__21022 = (i__21013_21017 + (1));
seq__21010_21014 = G__21019;
chunk__21011_21015 = G__21020;
count__21012_21016 = G__21021;
i__21013_21017 = G__21022;
continue;
} else {
var temp__4657__auto___21023 = cljs.core.seq.call(null,seq__21010_21014);
if(temp__4657__auto___21023){
var seq__21010_21024__$1 = temp__4657__auto___21023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21010_21024__$1)){
var c__9319__auto___21025 = cljs.core.chunk_first.call(null,seq__21010_21024__$1);
var G__21026 = cljs.core.chunk_rest.call(null,seq__21010_21024__$1);
var G__21027 = c__9319__auto___21025;
var G__21028 = cljs.core.count.call(null,c__9319__auto___21025);
var G__21029 = (0);
seq__21010_21014 = G__21026;
chunk__21011_21015 = G__21027;
count__21012_21016 = G__21028;
i__21013_21017 = G__21029;
continue;
} else {
var veh_21030 = cljs.core.first.call(null,seq__21010_21024__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21030)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21030)));

var G__21031 = cljs.core.next.call(null,seq__21010_21024__$1);
var G__21032 = null;
var G__21033 = (0);
var G__21034 = (0);
seq__21010_21014 = G__21031;
chunk__21011_21015 = G__21032;
count__21012_21016 = G__21033;
i__21013_21017 = G__21034;
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
var map__21037 = response;
var map__21037__$1 = ((((!((map__21037 == null)))?((((map__21037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21037):map__21037);
var status = cljs.core.get.call(null,map__21037__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21037__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__21043 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__21043,(0),null);
var lon = cljs.core.nth.call(null,vec__21043,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__21043,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__21043,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__21039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__21039_SHARP_))),e.target);
});})(vec__21043,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__21043,lat,lon,pos,ico,opt,mrk__$1))
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
var args21046 = [];
var len__9613__auto___21052 = arguments.length;
var i__9614__auto___21053 = (0);
while(true){
if((i__9614__auto___21053 < len__9613__auto___21052)){
args21046.push((arguments[i__9614__auto___21053]));

var G__21054 = (i__9614__auto___21053 + (1));
i__9614__auto___21053 = G__21054;
continue;
} else {
}
break;
}

var G__21048 = args21046.length;
switch (G__21048) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21046.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__21049 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__21049,(0),null);
var lon = cljs.core.nth.call(null,vec__21049,(1),null);
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
var seq__21082 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__21083 = null;
var count__21084 = (0);
var i__21085 = (0);
while(true){
if((i__21085 < count__21084)){
var map__21086 = cljs.core._nth.call(null,chunk__21083,i__21085);
var map__21086__$1 = ((((!((map__21086 == null)))?((((map__21086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21086):map__21086);
var ins = map__21086__$1;
var instruct = cljs.core.get.call(null,map__21086__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21088_21108 = cljs.core._EQ_;
var expr__21089_21109 = instruct;
if(cljs.core.truth_(pred__21088_21108.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21089_21109))){
var map__21091_21110 = ins;
var map__21091_21111__$1 = ((((!((map__21091_21110 == null)))?((((map__21091_21110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21091_21110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21091_21110):map__21091_21110);
var id_21112 = cljs.core.get.call(null,map__21091_21111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21113 = cljs.core.get.call(null,map__21091_21111__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_21112,vehicle_21113);
} else {
if(cljs.core.truth_(pred__21088_21108.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21089_21109))){
var map__21093_21114 = ins;
var map__21093_21115__$1 = ((((!((map__21093_21114 == null)))?((((map__21093_21114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21093_21114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21093_21114):map__21093_21114);
var id_21116 = cljs.core.get.call(null,map__21093_21115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_21116);
} else {
if(cljs.core.truth_(pred__21088_21108.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21089_21109))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21088_21108.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21089_21109))){
var map__21095_21117 = ins;
var map__21095_21118__$1 = ((((!((map__21095_21117 == null)))?((((map__21095_21117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21095_21117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21095_21117):map__21095_21117);
var id_21119 = cljs.core.get.call(null,map__21095_21118__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_21120 = cljs.core.get.call(null,map__21095_21118__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21121 = cljs.core.get.call(null,map__21095_21118__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_21122 = cljs.core.get.call(null,map__21095_21118__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_21123 = cljs.core.get.call(null,map__21095_21118__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_21119)){
chart.client.popup.call(null,id_21119,html_21122,time_21123);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_21120;
if(cljs.core.truth_(and__8493__auto__)){
return lon_21121;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_21120,lon_21121,html_21122,time_21123);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__21124 = seq__21082;
var G__21125 = chunk__21083;
var G__21126 = count__21084;
var G__21127 = (i__21085 + (1));
seq__21082 = G__21124;
chunk__21083 = G__21125;
count__21084 = G__21126;
i__21085 = G__21127;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21082);
if(temp__4657__auto__){
var seq__21082__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21082__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__21082__$1);
var G__21128 = cljs.core.chunk_rest.call(null,seq__21082__$1);
var G__21129 = c__9319__auto__;
var G__21130 = cljs.core.count.call(null,c__9319__auto__);
var G__21131 = (0);
seq__21082 = G__21128;
chunk__21083 = G__21129;
count__21084 = G__21130;
i__21085 = G__21131;
continue;
} else {
var map__21097 = cljs.core.first.call(null,seq__21082__$1);
var map__21097__$1 = ((((!((map__21097 == null)))?((((map__21097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21097):map__21097);
var ins = map__21097__$1;
var instruct = cljs.core.get.call(null,map__21097__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21099_21132 = cljs.core._EQ_;
var expr__21100_21133 = instruct;
if(cljs.core.truth_(pred__21099_21132.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__21100_21133))){
var map__21102_21134 = ins;
var map__21102_21135__$1 = ((((!((map__21102_21134 == null)))?((((map__21102_21134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21102_21134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21102_21134):map__21102_21134);
var id_21136 = cljs.core.get.call(null,map__21102_21135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21137 = cljs.core.get.call(null,map__21102_21135__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_21136,vehicle_21137);
} else {
if(cljs.core.truth_(pred__21099_21132.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21100_21133))){
var map__21104_21138 = ins;
var map__21104_21139__$1 = ((((!((map__21104_21138 == null)))?((((map__21104_21138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21104_21138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21104_21138):map__21104_21138);
var id_21140 = cljs.core.get.call(null,map__21104_21139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_21140);
} else {
if(cljs.core.truth_(pred__21099_21132.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__21100_21133))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__21099_21132.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__21100_21133))){
var map__21106_21141 = ins;
var map__21106_21142__$1 = ((((!((map__21106_21141 == null)))?((((map__21106_21141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21106_21141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21106_21141):map__21106_21141);
var id_21143 = cljs.core.get.call(null,map__21106_21142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_21144 = cljs.core.get.call(null,map__21106_21142__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21145 = cljs.core.get.call(null,map__21106_21142__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_21146 = cljs.core.get.call(null,map__21106_21142__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_21147 = cljs.core.get.call(null,map__21106_21142__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_21143)){
chart.client.popup.call(null,id_21143,html_21146,time_21147);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_21144;
if(cljs.core.truth_(and__8493__auto__)){
return lon_21145;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_21144,lon_21145,html_21146,time_21147);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__21148 = cljs.core.next.call(null,seq__21082__$1);
var G__21149 = null;
var G__21150 = (0);
var G__21151 = (0);
seq__21082 = G__21148;
chunk__21083 = G__21149;
count__21084 = G__21150;
i__21085 = G__21151;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__21155 = cljs.core._EQ_;
var expr__21156 = cmd;
if(cljs.core.truth_(pred__21155.call(null,"watch-visible",expr__21156))){
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