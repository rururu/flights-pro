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

var mp_11676 = cljs.core.deref.call(null,vmp);
var mrk_11677 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_11676);
var vec__11673_11678 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_11676);
var lat_11679 = cljs.core.nth.call(null,vec__11673_11678,(0),null);
var lon_11680 = cljs.core.nth.call(null,vec__11673_11678,(1),null);
var pos_11681 = (new L.LatLng(lat_11679,lon_11680));
mrk_11677.setLatLng(pos_11681);

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
var seq__11686_11690 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__11687_11691 = null;
var count__11688_11692 = (0);
var i__11689_11693 = (0);
while(true){
if((i__11689_11693 < count__11688_11692)){
var veh_11694 = cljs.core._nth.call(null,chunk__11687_11691,i__11689_11693);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11694)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11694)));

var G__11695 = seq__11686_11690;
var G__11696 = chunk__11687_11691;
var G__11697 = count__11688_11692;
var G__11698 = (i__11689_11693 + (1));
seq__11686_11690 = G__11695;
chunk__11687_11691 = G__11696;
count__11688_11692 = G__11697;
i__11689_11693 = G__11698;
continue;
} else {
var temp__4657__auto___11699 = cljs.core.seq.call(null,seq__11686_11690);
if(temp__4657__auto___11699){
var seq__11686_11700__$1 = temp__4657__auto___11699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11686_11700__$1)){
var c__9319__auto___11701 = cljs.core.chunk_first.call(null,seq__11686_11700__$1);
var G__11702 = cljs.core.chunk_rest.call(null,seq__11686_11700__$1);
var G__11703 = c__9319__auto___11701;
var G__11704 = cljs.core.count.call(null,c__9319__auto___11701);
var G__11705 = (0);
seq__11686_11690 = G__11702;
chunk__11687_11691 = G__11703;
count__11688_11692 = G__11704;
i__11689_11693 = G__11705;
continue;
} else {
var veh_11706 = cljs.core.first.call(null,seq__11686_11700__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11706)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_11706)));

var G__11707 = cljs.core.next.call(null,seq__11686_11700__$1);
var G__11708 = null;
var G__11709 = (0);
var G__11710 = (0);
seq__11686_11690 = G__11707;
chunk__11687_11691 = G__11708;
count__11688_11692 = G__11709;
i__11689_11693 = G__11710;
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
var map__11713 = response;
var map__11713__$1 = ((((!((map__11713 == null)))?((((map__11713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11713):map__11713);
var status = cljs.core.get.call(null,map__11713__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__11713__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__11719 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__11719,(0),null);
var lon = cljs.core.nth.call(null,vec__11719,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__11719,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__11719,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__11715_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__11715_SHARP_))),e.target);
});})(vec__11719,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__11719,lat,lon,pos,ico,opt,mrk__$1))
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
var args11722 = [];
var len__9613__auto___11728 = arguments.length;
var i__9614__auto___11729 = (0);
while(true){
if((i__9614__auto___11729 < len__9613__auto___11728)){
args11722.push((arguments[i__9614__auto___11729]));

var G__11730 = (i__9614__auto___11729 + (1));
i__9614__auto___11729 = G__11730;
continue;
} else {
}
break;
}

var G__11724 = args11722.length;
switch (G__11724) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11722.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__11725 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__11725,(0),null);
var lon = cljs.core.nth.call(null,vec__11725,(1),null);
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
var seq__11758 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__11759 = null;
var count__11760 = (0);
var i__11761 = (0);
while(true){
if((i__11761 < count__11760)){
var map__11762 = cljs.core._nth.call(null,chunk__11759,i__11761);
var map__11762__$1 = ((((!((map__11762 == null)))?((((map__11762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11762):map__11762);
var ins = map__11762__$1;
var instruct = cljs.core.get.call(null,map__11762__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__11764_11784 = cljs.core._EQ_;
var expr__11765_11785 = instruct;
if(cljs.core.truth_(pred__11764_11784.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__11765_11785))){
var map__11767_11786 = ins;
var map__11767_11787__$1 = ((((!((map__11767_11786 == null)))?((((map__11767_11786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767_11786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11767_11786):map__11767_11786);
var id_11788 = cljs.core.get.call(null,map__11767_11787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_11789 = cljs.core.get.call(null,map__11767_11787__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_11788,vehicle_11789);
} else {
if(cljs.core.truth_(pred__11764_11784.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__11765_11785))){
var map__11769_11790 = ins;
var map__11769_11791__$1 = ((((!((map__11769_11790 == null)))?((((map__11769_11790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11769_11790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11769_11790):map__11769_11790);
var id_11792 = cljs.core.get.call(null,map__11769_11791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_11792);
} else {
if(cljs.core.truth_(pred__11764_11784.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__11765_11785))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__11764_11784.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__11765_11785))){
var map__11771_11793 = ins;
var map__11771_11794__$1 = ((((!((map__11771_11793 == null)))?((((map__11771_11793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11771_11793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771_11793):map__11771_11793);
var id_11795 = cljs.core.get.call(null,map__11771_11794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_11796 = cljs.core.get.call(null,map__11771_11794__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_11797 = cljs.core.get.call(null,map__11771_11794__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_11798 = cljs.core.get.call(null,map__11771_11794__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_11799 = cljs.core.get.call(null,map__11771_11794__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_11795)){
chart.client.popup.call(null,id_11795,html_11798,time_11799);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_11796;
if(cljs.core.truth_(and__8493__auto__)){
return lon_11797;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_11796,lon_11797,html_11798,time_11799);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__11800 = seq__11758;
var G__11801 = chunk__11759;
var G__11802 = count__11760;
var G__11803 = (i__11761 + (1));
seq__11758 = G__11800;
chunk__11759 = G__11801;
count__11760 = G__11802;
i__11761 = G__11803;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11758);
if(temp__4657__auto__){
var seq__11758__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11758__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__11758__$1);
var G__11804 = cljs.core.chunk_rest.call(null,seq__11758__$1);
var G__11805 = c__9319__auto__;
var G__11806 = cljs.core.count.call(null,c__9319__auto__);
var G__11807 = (0);
seq__11758 = G__11804;
chunk__11759 = G__11805;
count__11760 = G__11806;
i__11761 = G__11807;
continue;
} else {
var map__11773 = cljs.core.first.call(null,seq__11758__$1);
var map__11773__$1 = ((((!((map__11773 == null)))?((((map__11773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11773):map__11773);
var ins = map__11773__$1;
var instruct = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__11775_11808 = cljs.core._EQ_;
var expr__11776_11809 = instruct;
if(cljs.core.truth_(pred__11775_11808.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__11776_11809))){
var map__11778_11810 = ins;
var map__11778_11811__$1 = ((((!((map__11778_11810 == null)))?((((map__11778_11810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11778_11810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11778_11810):map__11778_11810);
var id_11812 = cljs.core.get.call(null,map__11778_11811__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_11813 = cljs.core.get.call(null,map__11778_11811__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_11812,vehicle_11813);
} else {
if(cljs.core.truth_(pred__11775_11808.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__11776_11809))){
var map__11780_11814 = ins;
var map__11780_11815__$1 = ((((!((map__11780_11814 == null)))?((((map__11780_11814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11780_11814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11780_11814):map__11780_11814);
var id_11816 = cljs.core.get.call(null,map__11780_11815__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_11816);
} else {
if(cljs.core.truth_(pred__11775_11808.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__11776_11809))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__11775_11808.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__11776_11809))){
var map__11782_11817 = ins;
var map__11782_11818__$1 = ((((!((map__11782_11817 == null)))?((((map__11782_11817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11782_11817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11782_11817):map__11782_11817);
var id_11819 = cljs.core.get.call(null,map__11782_11818__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_11820 = cljs.core.get.call(null,map__11782_11818__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_11821 = cljs.core.get.call(null,map__11782_11818__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_11822 = cljs.core.get.call(null,map__11782_11818__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_11823 = cljs.core.get.call(null,map__11782_11818__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_11819)){
chart.client.popup.call(null,id_11819,html_11822,time_11823);
} else {
if(cljs.core.truth_((function (){var and__8493__auto__ = lat_11820;
if(cljs.core.truth_(and__8493__auto__)){
return lon_11821;
} else {
return and__8493__auto__;
}
})())){
chart.client.popup.call(null,lat_11820,lon_11821,html_11822,time_11823);
} else {
}
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}

var G__11824 = cljs.core.next.call(null,seq__11758__$1);
var G__11825 = null;
var G__11826 = (0);
var G__11827 = (0);
seq__11758 = G__11824;
chunk__11759 = G__11825;
count__11760 = G__11826;
i__11761 = G__11827;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__11831 = cljs.core._EQ_;
var expr__11832 = cmd;
if(cljs.core.truth_(pred__11831.call(null,"watch-visible",expr__11832))){
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