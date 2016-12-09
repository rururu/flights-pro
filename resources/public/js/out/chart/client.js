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

var mp_25688 = cljs.core.deref.call(null,vmp);
var mrk_25689 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25688);
var vec__25685_25690 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25688);
var lat_25691 = cljs.core.nth.call(null,vec__25685_25690,(0),null);
var lon_25692 = cljs.core.nth.call(null,vec__25685_25690,(1),null);
var pos_25693 = (new L.LatLng(lat_25691,lon_25692));
mrk_25689.setLatLng(pos_25693);

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
var seq__25698_25702 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25699_25703 = null;
var count__25700_25704 = (0);
var i__25701_25705 = (0);
while(true){
if((i__25701_25705 < count__25700_25704)){
var veh_25706 = cljs.core._nth.call(null,chunk__25699_25703,i__25701_25705);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25706)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25706)));

var G__25707 = seq__25698_25702;
var G__25708 = chunk__25699_25703;
var G__25709 = count__25700_25704;
var G__25710 = (i__25701_25705 + (1));
seq__25698_25702 = G__25707;
chunk__25699_25703 = G__25708;
count__25700_25704 = G__25709;
i__25701_25705 = G__25710;
continue;
} else {
var temp__4657__auto___25711 = cljs.core.seq.call(null,seq__25698_25702);
if(temp__4657__auto___25711){
var seq__25698_25712__$1 = temp__4657__auto___25711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25698_25712__$1)){
var c__20807__auto___25713 = cljs.core.chunk_first.call(null,seq__25698_25712__$1);
var G__25714 = cljs.core.chunk_rest.call(null,seq__25698_25712__$1);
var G__25715 = c__20807__auto___25713;
var G__25716 = cljs.core.count.call(null,c__20807__auto___25713);
var G__25717 = (0);
seq__25698_25702 = G__25714;
chunk__25699_25703 = G__25715;
count__25700_25704 = G__25716;
i__25701_25705 = G__25717;
continue;
} else {
var veh_25718 = cljs.core.first.call(null,seq__25698_25712__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25718)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25718)));

var G__25719 = cljs.core.next.call(null,seq__25698_25712__$1);
var G__25720 = null;
var G__25721 = (0);
var G__25722 = (0);
seq__25698_25702 = G__25719;
chunk__25699_25703 = G__25720;
count__25700_25704 = G__25721;
i__25701_25705 = G__25722;
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
var map__25725 = response;
var map__25725__$1 = ((((!((map__25725 == null)))?((((map__25725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25725):map__25725);
var status = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__25731 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25731,(0),null);
var lon = cljs.core.nth.call(null,vec__25731,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__25731,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25731,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25727_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25727_SHARP_))),e.target);
});})(vec__25731,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25731,lat,lon,pos,ico,opt,mrk__$1))
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
var args25734 = [];
var len__21101__auto___25740 = arguments.length;
var i__21102__auto___25741 = (0);
while(true){
if((i__21102__auto___25741 < len__21101__auto___25740)){
args25734.push((arguments[i__21102__auto___25741]));

var G__25742 = (i__21102__auto___25741 + (1));
i__21102__auto___25741 = G__25742;
continue;
} else {
}
break;
}

var G__25736 = args25734.length;
switch (G__25736) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25734.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25737 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25737,(0),null);
var lon = cljs.core.nth.call(null,vec__25737,(1),null);
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
var seq__25770 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25771 = null;
var count__25772 = (0);
var i__25773 = (0);
while(true){
if((i__25773 < count__25772)){
var map__25774 = cljs.core._nth.call(null,chunk__25771,i__25773);
var map__25774__$1 = ((((!((map__25774 == null)))?((((map__25774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25774):map__25774);
var ins = map__25774__$1;
var instruct = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25776_25796 = cljs.core._EQ_;
var expr__25777_25797 = instruct;
if(cljs.core.truth_(pred__25776_25796.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25777_25797))){
var map__25779_25798 = ins;
var map__25779_25799__$1 = ((((!((map__25779_25798 == null)))?((((map__25779_25798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25779_25798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25779_25798):map__25779_25798);
var id_25800 = cljs.core.get.call(null,map__25779_25799__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25801 = cljs.core.get.call(null,map__25779_25799__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25800,vehicle_25801);
} else {
if(cljs.core.truth_(pred__25776_25796.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25777_25797))){
var map__25781_25802 = ins;
var map__25781_25803__$1 = ((((!((map__25781_25802 == null)))?((((map__25781_25802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25781_25802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25781_25802):map__25781_25802);
var id_25804 = cljs.core.get.call(null,map__25781_25803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25804);
} else {
if(cljs.core.truth_(pred__25776_25796.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25777_25797))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25776_25796.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25777_25797))){
var map__25783_25805 = ins;
var map__25783_25806__$1 = ((((!((map__25783_25805 == null)))?((((map__25783_25805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25783_25805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25783_25805):map__25783_25805);
var id_25807 = cljs.core.get.call(null,map__25783_25806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25808 = cljs.core.get.call(null,map__25783_25806__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25809 = cljs.core.get.call(null,map__25783_25806__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25810 = cljs.core.get.call(null,map__25783_25806__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25811 = cljs.core.get.call(null,map__25783_25806__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25807)){
chart.client.popup.call(null,id_25807,html_25810,time_25811);
} else {
if(cljs.core.truth_((function (){var and__19981__auto__ = lat_25808;
if(cljs.core.truth_(and__19981__auto__)){
return lon_25809;
} else {
return and__19981__auto__;
}
})())){
chart.client.popup.call(null,lat_25808,lon_25809,html_25810,time_25811);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__25812 = seq__25770;
var G__25813 = chunk__25771;
var G__25814 = count__25772;
var G__25815 = (i__25773 + (1));
seq__25770 = G__25812;
chunk__25771 = G__25813;
count__25772 = G__25814;
i__25773 = G__25815;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25770);
if(temp__4657__auto__){
var seq__25770__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25770__$1)){
var c__20807__auto__ = cljs.core.chunk_first.call(null,seq__25770__$1);
var G__25816 = cljs.core.chunk_rest.call(null,seq__25770__$1);
var G__25817 = c__20807__auto__;
var G__25818 = cljs.core.count.call(null,c__20807__auto__);
var G__25819 = (0);
seq__25770 = G__25816;
chunk__25771 = G__25817;
count__25772 = G__25818;
i__25773 = G__25819;
continue;
} else {
var map__25785 = cljs.core.first.call(null,seq__25770__$1);
var map__25785__$1 = ((((!((map__25785 == null)))?((((map__25785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25785):map__25785);
var ins = map__25785__$1;
var instruct = cljs.core.get.call(null,map__25785__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25787_25820 = cljs.core._EQ_;
var expr__25788_25821 = instruct;
if(cljs.core.truth_(pred__25787_25820.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25788_25821))){
var map__25790_25822 = ins;
var map__25790_25823__$1 = ((((!((map__25790_25822 == null)))?((((map__25790_25822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25790_25822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25790_25822):map__25790_25822);
var id_25824 = cljs.core.get.call(null,map__25790_25823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25825 = cljs.core.get.call(null,map__25790_25823__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25824,vehicle_25825);
} else {
if(cljs.core.truth_(pred__25787_25820.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25788_25821))){
var map__25792_25826 = ins;
var map__25792_25827__$1 = ((((!((map__25792_25826 == null)))?((((map__25792_25826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25792_25826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25792_25826):map__25792_25826);
var id_25828 = cljs.core.get.call(null,map__25792_25827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25828);
} else {
if(cljs.core.truth_(pred__25787_25820.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25788_25821))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25787_25820.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25788_25821))){
var map__25794_25829 = ins;
var map__25794_25830__$1 = ((((!((map__25794_25829 == null)))?((((map__25794_25829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25794_25829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25794_25829):map__25794_25829);
var id_25831 = cljs.core.get.call(null,map__25794_25830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25832 = cljs.core.get.call(null,map__25794_25830__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25833 = cljs.core.get.call(null,map__25794_25830__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25834 = cljs.core.get.call(null,map__25794_25830__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25835 = cljs.core.get.call(null,map__25794_25830__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_25831)){
chart.client.popup.call(null,id_25831,html_25834,time_25835);
} else {
if(cljs.core.truth_((function (){var and__19981__auto__ = lat_25832;
if(cljs.core.truth_(and__19981__auto__)){
return lon_25833;
} else {
return and__19981__auto__;
}
})())){
chart.client.popup.call(null,lat_25832,lon_25833,html_25834,time_25835);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__25836 = cljs.core.next.call(null,seq__25770__$1);
var G__25837 = null;
var G__25838 = (0);
var G__25839 = (0);
seq__25770 = G__25836;
chunk__25771 = G__25837;
count__25772 = G__25838;
i__25773 = G__25839;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__25843 = cljs.core._EQ_;
var expr__25844 = cmd;
if(cljs.core.truth_(pred__25843.call(null,"watch-visible",expr__25844))){
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