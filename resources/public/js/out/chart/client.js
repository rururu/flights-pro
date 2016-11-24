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

var mp_33617 = cljs.core.deref.call(null,vmp);
var mrk_33618 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_33617);
var vec__33614_33619 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_33617);
var lat_33620 = cljs.core.nth.call(null,vec__33614_33619,(0),null);
var lon_33621 = cljs.core.nth.call(null,vec__33614_33619,(1),null);
var pos_33622 = (new L.LatLng(lat_33620,lon_33621));
mrk_33618.setLatLng(pos_33622);

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
var seq__33627_33631 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__33628_33632 = null;
var count__33629_33633 = (0);
var i__33630_33634 = (0);
while(true){
if((i__33630_33634 < count__33629_33633)){
var veh_33635 = cljs.core._nth.call(null,chunk__33628_33632,i__33630_33634);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33635)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33635)));

var G__33636 = seq__33627_33631;
var G__33637 = chunk__33628_33632;
var G__33638 = count__33629_33633;
var G__33639 = (i__33630_33634 + (1));
seq__33627_33631 = G__33636;
chunk__33628_33632 = G__33637;
count__33629_33633 = G__33638;
i__33630_33634 = G__33639;
continue;
} else {
var temp__4657__auto___33640 = cljs.core.seq.call(null,seq__33627_33631);
if(temp__4657__auto___33640){
var seq__33627_33641__$1 = temp__4657__auto___33640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33627_33641__$1)){
var c__24297__auto___33642 = cljs.core.chunk_first.call(null,seq__33627_33641__$1);
var G__33643 = cljs.core.chunk_rest.call(null,seq__33627_33641__$1);
var G__33644 = c__24297__auto___33642;
var G__33645 = cljs.core.count.call(null,c__24297__auto___33642);
var G__33646 = (0);
seq__33627_33631 = G__33643;
chunk__33628_33632 = G__33644;
count__33629_33633 = G__33645;
i__33630_33634 = G__33646;
continue;
} else {
var veh_33647 = cljs.core.first.call(null,seq__33627_33641__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33647)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33647)));

var G__33648 = cljs.core.next.call(null,seq__33627_33641__$1);
var G__33649 = null;
var G__33650 = (0);
var G__33651 = (0);
seq__33627_33631 = G__33648;
chunk__33628_33632 = G__33649;
count__33629_33633 = G__33650;
i__33630_33634 = G__33651;
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
var map__33654 = response;
var map__33654__$1 = ((((!((map__33654 == null)))?((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33654):map__33654);
var status = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33654__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__33660 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__33660,(0),null);
var lon = cljs.core.nth.call(null,vec__33660,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__33660,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__33660,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__33656_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__33656_SHARP_))),e.target);
});})(vec__33660,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__33660,lat,lon,pos,ico,opt,mrk__$1))
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
var args33663 = [];
var len__24591__auto___33669 = arguments.length;
var i__24592__auto___33670 = (0);
while(true){
if((i__24592__auto___33670 < len__24591__auto___33669)){
args33663.push((arguments[i__24592__auto___33670]));

var G__33671 = (i__24592__auto___33670 + (1));
i__24592__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var G__33665 = args33663.length;
switch (G__33665) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33663.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__33666 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__33666,(0),null);
var lon = cljs.core.nth.call(null,vec__33666,(1),null);
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
var seq__33699 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__33700 = null;
var count__33701 = (0);
var i__33702 = (0);
while(true){
if((i__33702 < count__33701)){
var map__33703 = cljs.core._nth.call(null,chunk__33700,i__33702);
var map__33703__$1 = ((((!((map__33703 == null)))?((((map__33703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33703):map__33703);
var ins = map__33703__$1;
var instruct = cljs.core.get.call(null,map__33703__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33705_33725 = cljs.core._EQ_;
var expr__33706_33726 = instruct;
if(cljs.core.truth_(pred__33705_33725.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33706_33726))){
var map__33708_33727 = ins;
var map__33708_33728__$1 = ((((!((map__33708_33727 == null)))?((((map__33708_33727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33708_33727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33708_33727):map__33708_33727);
var id_33729 = cljs.core.get.call(null,map__33708_33728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33730 = cljs.core.get.call(null,map__33708_33728__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33729,vehicle_33730);
} else {
if(cljs.core.truth_(pred__33705_33725.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33706_33726))){
var map__33710_33731 = ins;
var map__33710_33732__$1 = ((((!((map__33710_33731 == null)))?((((map__33710_33731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33710_33731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33710_33731):map__33710_33731);
var id_33733 = cljs.core.get.call(null,map__33710_33732__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33733);
} else {
if(cljs.core.truth_(pred__33705_33725.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33706_33726))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33705_33725.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33706_33726))){
var map__33712_33734 = ins;
var map__33712_33735__$1 = ((((!((map__33712_33734 == null)))?((((map__33712_33734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33712_33734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33712_33734):map__33712_33734);
var id_33736 = cljs.core.get.call(null,map__33712_33735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33737 = cljs.core.get.call(null,map__33712_33735__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33738 = cljs.core.get.call(null,map__33712_33735__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33739 = cljs.core.get.call(null,map__33712_33735__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33740 = cljs.core.get.call(null,map__33712_33735__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_33736)){
chart.client.popup.call(null,id_33736,html_33739,time_33740);
} else {
if(cljs.core.truth_((function (){var and__23471__auto__ = lat_33737;
if(cljs.core.truth_(and__23471__auto__)){
return lon_33738;
} else {
return and__23471__auto__;
}
})())){
chart.client.popup.call(null,lat_33737,lon_33738,html_33739,time_33740);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__33741 = seq__33699;
var G__33742 = chunk__33700;
var G__33743 = count__33701;
var G__33744 = (i__33702 + (1));
seq__33699 = G__33741;
chunk__33700 = G__33742;
count__33701 = G__33743;
i__33702 = G__33744;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33699);
if(temp__4657__auto__){
var seq__33699__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33699__$1)){
var c__24297__auto__ = cljs.core.chunk_first.call(null,seq__33699__$1);
var G__33745 = cljs.core.chunk_rest.call(null,seq__33699__$1);
var G__33746 = c__24297__auto__;
var G__33747 = cljs.core.count.call(null,c__24297__auto__);
var G__33748 = (0);
seq__33699 = G__33745;
chunk__33700 = G__33746;
count__33701 = G__33747;
i__33702 = G__33748;
continue;
} else {
var map__33714 = cljs.core.first.call(null,seq__33699__$1);
var map__33714__$1 = ((((!((map__33714 == null)))?((((map__33714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33714):map__33714);
var ins = map__33714__$1;
var instruct = cljs.core.get.call(null,map__33714__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33716_33749 = cljs.core._EQ_;
var expr__33717_33750 = instruct;
if(cljs.core.truth_(pred__33716_33749.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33717_33750))){
var map__33719_33751 = ins;
var map__33719_33752__$1 = ((((!((map__33719_33751 == null)))?((((map__33719_33751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33719_33751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33719_33751):map__33719_33751);
var id_33753 = cljs.core.get.call(null,map__33719_33752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33754 = cljs.core.get.call(null,map__33719_33752__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33753,vehicle_33754);
} else {
if(cljs.core.truth_(pred__33716_33749.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33717_33750))){
var map__33721_33755 = ins;
var map__33721_33756__$1 = ((((!((map__33721_33755 == null)))?((((map__33721_33755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33721_33755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33721_33755):map__33721_33755);
var id_33757 = cljs.core.get.call(null,map__33721_33756__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33757);
} else {
if(cljs.core.truth_(pred__33716_33749.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33717_33750))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33716_33749.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33717_33750))){
var map__33723_33758 = ins;
var map__33723_33759__$1 = ((((!((map__33723_33758 == null)))?((((map__33723_33758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33723_33758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33723_33758):map__33723_33758);
var id_33760 = cljs.core.get.call(null,map__33723_33759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33761 = cljs.core.get.call(null,map__33723_33759__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33762 = cljs.core.get.call(null,map__33723_33759__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33763 = cljs.core.get.call(null,map__33723_33759__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33764 = cljs.core.get.call(null,map__33723_33759__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_33760)){
chart.client.popup.call(null,id_33760,html_33763,time_33764);
} else {
if(cljs.core.truth_((function (){var and__23471__auto__ = lat_33761;
if(cljs.core.truth_(and__23471__auto__)){
return lon_33762;
} else {
return and__23471__auto__;
}
})())){
chart.client.popup.call(null,lat_33761,lon_33762,html_33763,time_33764);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__33765 = cljs.core.next.call(null,seq__33699__$1);
var G__33766 = null;
var G__33767 = (0);
var G__33768 = (0);
seq__33699 = G__33765;
chunk__33700 = G__33766;
count__33701 = G__33767;
i__33702 = G__33768;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__33772 = cljs.core._EQ_;
var expr__33773 = cmd;
if(cljs.core.truth_(pred__33772.call(null,"watch-visible",expr__33773))){
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