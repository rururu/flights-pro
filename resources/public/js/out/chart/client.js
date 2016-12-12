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

var mp_22564 = cljs.core.deref.call(null,vmp);
var mrk_22565 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22564);
var vec__22561_22566 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22564);
var lat_22567 = cljs.core.nth.call(null,vec__22561_22566,(0),null);
var lon_22568 = cljs.core.nth.call(null,vec__22561_22566,(1),null);
var pos_22569 = (new L.LatLng(lat_22567,lon_22568));
mrk_22565.setLatLng(pos_22569);

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
var seq__22574_22578 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22575_22579 = null;
var count__22576_22580 = (0);
var i__22577_22581 = (0);
while(true){
if((i__22577_22581 < count__22576_22580)){
var veh_22582 = cljs.core._nth.call(null,chunk__22575_22579,i__22577_22581);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22582)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22582)));

var G__22583 = seq__22574_22578;
var G__22584 = chunk__22575_22579;
var G__22585 = count__22576_22580;
var G__22586 = (i__22577_22581 + (1));
seq__22574_22578 = G__22583;
chunk__22575_22579 = G__22584;
count__22576_22580 = G__22585;
i__22577_22581 = G__22586;
continue;
} else {
var temp__4657__auto___22587 = cljs.core.seq.call(null,seq__22574_22578);
if(temp__4657__auto___22587){
var seq__22574_22588__$1 = temp__4657__auto___22587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22574_22588__$1)){
var c__20548__auto___22589 = cljs.core.chunk_first.call(null,seq__22574_22588__$1);
var G__22590 = cljs.core.chunk_rest.call(null,seq__22574_22588__$1);
var G__22591 = c__20548__auto___22589;
var G__22592 = cljs.core.count.call(null,c__20548__auto___22589);
var G__22593 = (0);
seq__22574_22578 = G__22590;
chunk__22575_22579 = G__22591;
count__22576_22580 = G__22592;
i__22577_22581 = G__22593;
continue;
} else {
var veh_22594 = cljs.core.first.call(null,seq__22574_22588__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22594)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22594)));

var G__22595 = cljs.core.next.call(null,seq__22574_22588__$1);
var G__22596 = null;
var G__22597 = (0);
var G__22598 = (0);
seq__22574_22578 = G__22595;
chunk__22575_22579 = G__22596;
count__22576_22580 = G__22597;
i__22577_22581 = G__22598;
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
var map__22601 = response;
var map__22601__$1 = ((((!((map__22601 == null)))?((((map__22601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22601):map__22601);
var status = cljs.core.get.call(null,map__22601__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22601__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__22607 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22607,(0),null);
var lon = cljs.core.nth.call(null,vec__22607,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22607,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22607,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22603_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22603_SHARP_))),e.target);
});})(vec__22607,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22607,lat,lon,pos,ico,opt,mrk__$1))
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
var args22610 = [];
var len__20842__auto___22616 = arguments.length;
var i__20843__auto___22617 = (0);
while(true){
if((i__20843__auto___22617 < len__20842__auto___22616)){
args22610.push((arguments[i__20843__auto___22617]));

var G__22618 = (i__20843__auto___22617 + (1));
i__20843__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var G__22612 = args22610.length;
switch (G__22612) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22610.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22613 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22613,(0),null);
var lon = cljs.core.nth.call(null,vec__22613,(1),null);
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
var seq__22646 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22647 = null;
var count__22648 = (0);
var i__22649 = (0);
while(true){
if((i__22649 < count__22648)){
var map__22650 = cljs.core._nth.call(null,chunk__22647,i__22649);
var map__22650__$1 = ((((!((map__22650 == null)))?((((map__22650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22650):map__22650);
var ins = map__22650__$1;
var instruct = cljs.core.get.call(null,map__22650__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22652_22672 = cljs.core._EQ_;
var expr__22653_22673 = instruct;
if(cljs.core.truth_(pred__22652_22672.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22653_22673))){
var map__22655_22674 = ins;
var map__22655_22675__$1 = ((((!((map__22655_22674 == null)))?((((map__22655_22674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22655_22674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22655_22674):map__22655_22674);
var id_22676 = cljs.core.get.call(null,map__22655_22675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22677 = cljs.core.get.call(null,map__22655_22675__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22676,vehicle_22677);
} else {
if(cljs.core.truth_(pred__22652_22672.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22653_22673))){
var map__22657_22678 = ins;
var map__22657_22679__$1 = ((((!((map__22657_22678 == null)))?((((map__22657_22678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22657_22678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22657_22678):map__22657_22678);
var id_22680 = cljs.core.get.call(null,map__22657_22679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22680);
} else {
if(cljs.core.truth_(pred__22652_22672.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22653_22673))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22652_22672.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22653_22673))){
var map__22659_22681 = ins;
var map__22659_22682__$1 = ((((!((map__22659_22681 == null)))?((((map__22659_22681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22659_22681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22659_22681):map__22659_22681);
var id_22683 = cljs.core.get.call(null,map__22659_22682__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22684 = cljs.core.get.call(null,map__22659_22682__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22685 = cljs.core.get.call(null,map__22659_22682__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22686 = cljs.core.get.call(null,map__22659_22682__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22687 = cljs.core.get.call(null,map__22659_22682__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22683)){
chart.client.popup.call(null,id_22683,html_22686,time_22687);
} else {
if(cljs.core.truth_((function (){var and__19722__auto__ = lat_22684;
if(cljs.core.truth_(and__19722__auto__)){
return lon_22685;
} else {
return and__19722__auto__;
}
})())){
chart.client.popup.call(null,lat_22684,lon_22685,html_22686,time_22687);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22688 = seq__22646;
var G__22689 = chunk__22647;
var G__22690 = count__22648;
var G__22691 = (i__22649 + (1));
seq__22646 = G__22688;
chunk__22647 = G__22689;
count__22648 = G__22690;
i__22649 = G__22691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22646);
if(temp__4657__auto__){
var seq__22646__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22646__$1)){
var c__20548__auto__ = cljs.core.chunk_first.call(null,seq__22646__$1);
var G__22692 = cljs.core.chunk_rest.call(null,seq__22646__$1);
var G__22693 = c__20548__auto__;
var G__22694 = cljs.core.count.call(null,c__20548__auto__);
var G__22695 = (0);
seq__22646 = G__22692;
chunk__22647 = G__22693;
count__22648 = G__22694;
i__22649 = G__22695;
continue;
} else {
var map__22661 = cljs.core.first.call(null,seq__22646__$1);
var map__22661__$1 = ((((!((map__22661 == null)))?((((map__22661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22661):map__22661);
var ins = map__22661__$1;
var instruct = cljs.core.get.call(null,map__22661__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22663_22696 = cljs.core._EQ_;
var expr__22664_22697 = instruct;
if(cljs.core.truth_(pred__22663_22696.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22664_22697))){
var map__22666_22698 = ins;
var map__22666_22699__$1 = ((((!((map__22666_22698 == null)))?((((map__22666_22698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22666_22698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22666_22698):map__22666_22698);
var id_22700 = cljs.core.get.call(null,map__22666_22699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22701 = cljs.core.get.call(null,map__22666_22699__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22700,vehicle_22701);
} else {
if(cljs.core.truth_(pred__22663_22696.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22664_22697))){
var map__22668_22702 = ins;
var map__22668_22703__$1 = ((((!((map__22668_22702 == null)))?((((map__22668_22702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22668_22702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22668_22702):map__22668_22702);
var id_22704 = cljs.core.get.call(null,map__22668_22703__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22704);
} else {
if(cljs.core.truth_(pred__22663_22696.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22664_22697))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22663_22696.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22664_22697))){
var map__22670_22705 = ins;
var map__22670_22706__$1 = ((((!((map__22670_22705 == null)))?((((map__22670_22705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22670_22705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22670_22705):map__22670_22705);
var id_22707 = cljs.core.get.call(null,map__22670_22706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22708 = cljs.core.get.call(null,map__22670_22706__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22709 = cljs.core.get.call(null,map__22670_22706__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22710 = cljs.core.get.call(null,map__22670_22706__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22711 = cljs.core.get.call(null,map__22670_22706__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22707)){
chart.client.popup.call(null,id_22707,html_22710,time_22711);
} else {
if(cljs.core.truth_((function (){var and__19722__auto__ = lat_22708;
if(cljs.core.truth_(and__19722__auto__)){
return lon_22709;
} else {
return and__19722__auto__;
}
})())){
chart.client.popup.call(null,lat_22708,lon_22709,html_22710,time_22711);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__22712 = cljs.core.next.call(null,seq__22646__$1);
var G__22713 = null;
var G__22714 = (0);
var G__22715 = (0);
seq__22646 = G__22712;
chunk__22647 = G__22713;
count__22648 = G__22714;
i__22649 = G__22715;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__22719 = cljs.core._EQ_;
var expr__22720 = cmd;
if(cljs.core.truth_(pred__22719.call(null,"watch-visible",expr__22720))){
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

var m = L.map("map").setView([40.8,-74.0],(10));
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