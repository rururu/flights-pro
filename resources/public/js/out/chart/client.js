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

var mp_27620 = cljs.core.deref.call(null,vmp);
var mrk_27621 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_27620);
var vec__27617_27622 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_27620);
var lat_27623 = cljs.core.nth.call(null,vec__27617_27622,(0),null);
var lon_27624 = cljs.core.nth.call(null,vec__27617_27622,(1),null);
var pos_27625 = (new L.LatLng(lat_27623,lon_27624));
mrk_27621.setLatLng(pos_27625);

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
var seq__27630_27634 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__27631_27635 = null;
var count__27632_27636 = (0);
var i__27633_27637 = (0);
while(true){
if((i__27633_27637 < count__27632_27636)){
var veh_27638 = cljs.core._nth.call(null,chunk__27631_27635,i__27633_27637);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27638)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27638)));

var G__27639 = seq__27630_27634;
var G__27640 = chunk__27631_27635;
var G__27641 = count__27632_27636;
var G__27642 = (i__27633_27637 + (1));
seq__27630_27634 = G__27639;
chunk__27631_27635 = G__27640;
count__27632_27636 = G__27641;
i__27633_27637 = G__27642;
continue;
} else {
var temp__4657__auto___27643 = cljs.core.seq.call(null,seq__27630_27634);
if(temp__4657__auto___27643){
var seq__27630_27644__$1 = temp__4657__auto___27643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27630_27644__$1)){
var c__20120__auto___27645 = cljs.core.chunk_first.call(null,seq__27630_27644__$1);
var G__27646 = cljs.core.chunk_rest.call(null,seq__27630_27644__$1);
var G__27647 = c__20120__auto___27645;
var G__27648 = cljs.core.count.call(null,c__20120__auto___27645);
var G__27649 = (0);
seq__27630_27634 = G__27646;
chunk__27631_27635 = G__27647;
count__27632_27636 = G__27648;
i__27633_27637 = G__27649;
continue;
} else {
var veh_27650 = cljs.core.first.call(null,seq__27630_27644__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27650)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_27650)));

var G__27651 = cljs.core.next.call(null,seq__27630_27644__$1);
var G__27652 = null;
var G__27653 = (0);
var G__27654 = (0);
seq__27630_27634 = G__27651;
chunk__27631_27635 = G__27652;
count__27632_27636 = G__27653;
i__27633_27637 = G__27654;
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
var map__27657 = response;
var map__27657__$1 = ((((!((map__27657 == null)))?((((map__27657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27657):map__27657);
var status = cljs.core.get.call(null,map__27657__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__27657__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__27663 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__27663,(0),null);
var lon = cljs.core.nth.call(null,vec__27663,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__27663,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__27663,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__27659_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__27659_SHARP_))),e.target);
});})(vec__27663,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__27663,lat,lon,pos,ico,opt,mrk__$1))
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
var args27666 = [];
var len__20414__auto___27672 = arguments.length;
var i__20415__auto___27673 = (0);
while(true){
if((i__20415__auto___27673 < len__20414__auto___27672)){
args27666.push((arguments[i__20415__auto___27673]));

var G__27674 = (i__20415__auto___27673 + (1));
i__20415__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var G__27668 = args27666.length;
switch (G__27668) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27666.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__27669 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__27669,(0),null);
var lon = cljs.core.nth.call(null,vec__27669,(1),null);
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
var seq__27702 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__27703 = null;
var count__27704 = (0);
var i__27705 = (0);
while(true){
if((i__27705 < count__27704)){
var map__27706 = cljs.core._nth.call(null,chunk__27703,i__27705);
var map__27706__$1 = ((((!((map__27706 == null)))?((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var ins = map__27706__$1;
var instruct = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27708_27728 = cljs.core._EQ_;
var expr__27709_27729 = instruct;
if(cljs.core.truth_(pred__27708_27728.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27709_27729))){
var map__27711_27730 = ins;
var map__27711_27731__$1 = ((((!((map__27711_27730 == null)))?((((map__27711_27730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27711_27730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27711_27730):map__27711_27730);
var id_27732 = cljs.core.get.call(null,map__27711_27731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27733 = cljs.core.get.call(null,map__27711_27731__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27732,vehicle_27733);
} else {
if(cljs.core.truth_(pred__27708_27728.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27709_27729))){
var map__27713_27734 = ins;
var map__27713_27735__$1 = ((((!((map__27713_27734 == null)))?((((map__27713_27734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27713_27734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27713_27734):map__27713_27734);
var id_27736 = cljs.core.get.call(null,map__27713_27735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27736);
} else {
if(cljs.core.truth_(pred__27708_27728.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27709_27729))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27708_27728.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27709_27729))){
var map__27715_27737 = ins;
var map__27715_27738__$1 = ((((!((map__27715_27737 == null)))?((((map__27715_27737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27715_27737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27715_27737):map__27715_27737);
var id_27739 = cljs.core.get.call(null,map__27715_27738__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27740 = cljs.core.get.call(null,map__27715_27738__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27741 = cljs.core.get.call(null,map__27715_27738__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27742 = cljs.core.get.call(null,map__27715_27738__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27743 = cljs.core.get.call(null,map__27715_27738__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_27739)){
chart.client.popup.call(null,id_27739,html_27742,time_27743);
} else {
if(cljs.core.truth_((function (){var and__19294__auto__ = lat_27740;
if(cljs.core.truth_(and__19294__auto__)){
return lon_27741;
} else {
return and__19294__auto__;
}
})())){
chart.client.popup.call(null,lat_27740,lon_27741,html_27742,time_27743);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__27744 = seq__27702;
var G__27745 = chunk__27703;
var G__27746 = count__27704;
var G__27747 = (i__27705 + (1));
seq__27702 = G__27744;
chunk__27703 = G__27745;
count__27704 = G__27746;
i__27705 = G__27747;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27702);
if(temp__4657__auto__){
var seq__27702__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27702__$1)){
var c__20120__auto__ = cljs.core.chunk_first.call(null,seq__27702__$1);
var G__27748 = cljs.core.chunk_rest.call(null,seq__27702__$1);
var G__27749 = c__20120__auto__;
var G__27750 = cljs.core.count.call(null,c__20120__auto__);
var G__27751 = (0);
seq__27702 = G__27748;
chunk__27703 = G__27749;
count__27704 = G__27750;
i__27705 = G__27751;
continue;
} else {
var map__27717 = cljs.core.first.call(null,seq__27702__$1);
var map__27717__$1 = ((((!((map__27717 == null)))?((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);
var ins = map__27717__$1;
var instruct = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__27719_27752 = cljs.core._EQ_;
var expr__27720_27753 = instruct;
if(cljs.core.truth_(pred__27719_27752.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__27720_27753))){
var map__27722_27754 = ins;
var map__27722_27755__$1 = ((((!((map__27722_27754 == null)))?((((map__27722_27754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27722_27754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27722_27754):map__27722_27754);
var id_27756 = cljs.core.get.call(null,map__27722_27755__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_27757 = cljs.core.get.call(null,map__27722_27755__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_27756,vehicle_27757);
} else {
if(cljs.core.truth_(pred__27719_27752.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__27720_27753))){
var map__27724_27758 = ins;
var map__27724_27759__$1 = ((((!((map__27724_27758 == null)))?((((map__27724_27758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27724_27758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27724_27758):map__27724_27758);
var id_27760 = cljs.core.get.call(null,map__27724_27759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_27760);
} else {
if(cljs.core.truth_(pred__27719_27752.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__27720_27753))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__27719_27752.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__27720_27753))){
var map__27726_27761 = ins;
var map__27726_27762__$1 = ((((!((map__27726_27761 == null)))?((((map__27726_27761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27726_27761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27726_27761):map__27726_27761);
var id_27763 = cljs.core.get.call(null,map__27726_27762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_27764 = cljs.core.get.call(null,map__27726_27762__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_27765 = cljs.core.get.call(null,map__27726_27762__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_27766 = cljs.core.get.call(null,map__27726_27762__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_27767 = cljs.core.get.call(null,map__27726_27762__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_27763)){
chart.client.popup.call(null,id_27763,html_27766,time_27767);
} else {
if(cljs.core.truth_((function (){var and__19294__auto__ = lat_27764;
if(cljs.core.truth_(and__19294__auto__)){
return lon_27765;
} else {
return and__19294__auto__;
}
})())){
chart.client.popup.call(null,lat_27764,lon_27765,html_27766,time_27767);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__27768 = cljs.core.next.call(null,seq__27702__$1);
var G__27769 = null;
var G__27770 = (0);
var G__27771 = (0);
seq__27702 = G__27768;
chunk__27703 = G__27769;
count__27704 = G__27770;
i__27705 = G__27771;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__27775 = cljs.core._EQ_;
var expr__27776 = cmd;
if(cljs.core.truth_(pred__27775.call(null,"watch-visible",expr__27776))){
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