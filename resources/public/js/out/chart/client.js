// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('ask.master');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),"COUNTER",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),"FOLLOWING",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__22776 = response;
var map__22776__$1 = ((((!((map__22776 == null)))?((((map__22776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22776):map__22776);
var status = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_22784 = cljs.core.deref.call(null,vmp);
var mrk_22785 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22784);
var vec__22781_22786 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22784);
var lat_22787 = cljs.core.nth.call(null,vec__22781_22786,(0),null);
var lon_22788 = cljs.core.nth.call(null,vec__22781_22786,(1),null);
var pos_22789 = (new L.LatLng(lat_22787,lon_22788));
mrk_22785.setLatLng(pos_22789);

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
var seq__22794_22798 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22795_22799 = null;
var count__22796_22800 = (0);
var i__22797_22801 = (0);
while(true){
if((i__22797_22801 < count__22796_22800)){
var veh_22802 = cljs.core._nth.call(null,chunk__22795_22799,i__22797_22801);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22802)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22802)));

var G__22803 = seq__22794_22798;
var G__22804 = chunk__22795_22799;
var G__22805 = count__22796_22800;
var G__22806 = (i__22797_22801 + (1));
seq__22794_22798 = G__22803;
chunk__22795_22799 = G__22804;
count__22796_22800 = G__22805;
i__22797_22801 = G__22806;
continue;
} else {
var temp__4657__auto___22807 = cljs.core.seq.call(null,seq__22794_22798);
if(temp__4657__auto___22807){
var seq__22794_22808__$1 = temp__4657__auto___22807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22794_22808__$1)){
var c__20658__auto___22809 = cljs.core.chunk_first.call(null,seq__22794_22808__$1);
var G__22810 = cljs.core.chunk_rest.call(null,seq__22794_22808__$1);
var G__22811 = c__20658__auto___22809;
var G__22812 = cljs.core.count.call(null,c__20658__auto___22809);
var G__22813 = (0);
seq__22794_22798 = G__22810;
chunk__22795_22799 = G__22811;
count__22796_22800 = G__22812;
i__22797_22801 = G__22813;
continue;
} else {
var veh_22814 = cljs.core.first.call(null,seq__22794_22808__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22814)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22814)));

var G__22815 = cljs.core.next.call(null,seq__22794_22808__$1);
var G__22816 = null;
var G__22817 = (0);
var G__22818 = (0);
seq__22794_22798 = G__22815;
chunk__22795_22799 = G__22816;
count__22796_22800 = G__22817;
i__22797_22801 = G__22818;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.PersistentArrayMap.EMPTY);
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

var vec__22823 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22823,(0),null);
var lon = cljs.core.nth.call(null,vec__22823,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22823,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22823,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22819_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22819_SHARP_))),e.target);
});})(vec__22823,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22823,lat,lon,pos,ico,opt,mrk__$1))
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
var args22826 = [];
var len__20952__auto___22832 = arguments.length;
var i__20953__auto___22833 = (0);
while(true){
if((i__20953__auto___22833 < len__20952__auto___22832)){
args22826.push((arguments[i__20953__auto___22833]));

var G__22834 = (i__20953__auto___22833 + (1));
i__20953__auto___22833 = G__22834;
continue;
} else {
}
break;
}

var G__22828 = args22826.length;
switch (G__22828) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22826.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22829 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22829,(0),null);
var lon = cljs.core.nth.call(null,vec__22829,(1),null);
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

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__22836_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__22836_SHARP_),cljs.core.second.call(null,p1__22836_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),points));
var pts__$1 = cljs.core.clj__GT_js.call(null,pts);
var trl = L.polyline(pts__$1,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(trl);

if((time > (0))){
return csasync.proc.delayer.call(null,((function (ops,pts,pts__$1,trl){
return (function (){
return cljs.core.deref.call(null,chart.client.CHART).removeLayer(trl);
});})(ops,pts,pts__$1,trl))
,time);
} else {
return null;
}
});
chart.client.visible_map = (function chart$client$visible_map(){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
chart.client.new_visible = (function chart$client$new_visible(){
var vec__22840 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__22840,(0),null);
var s = cljs.core.nth.call(null,vec__22840,(1),null);
var w = cljs.core.nth.call(null,vec__22840,(2),null);
var e = cljs.core.nth.call(null,vec__22840,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__22840,n,s,w,e,url){
return (function (response){
return null;
});})(vec__22840,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__22843){
var vec__22847 = p__22843;
var lat = cljs.core.nth.call(null,vec__22847,(0),null);
var lon = cljs.core.nth.call(null,vec__22847,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__22884 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22885 = null;
var count__22886 = (0);
var i__22887 = (0);
while(true){
if((i__22887 < count__22886)){
var map__22888 = cljs.core._nth.call(null,chunk__22885,i__22887);
var map__22888__$1 = ((((!((map__22888 == null)))?((((map__22888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22888):map__22888);
var ins = map__22888__$1;
var instruct = cljs.core.get.call(null,map__22888__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22890_22918 = cljs.core._EQ_;
var expr__22891_22919 = instruct;
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22891_22919))){
var map__22893_22920 = ins;
var map__22893_22921__$1 = ((((!((map__22893_22920 == null)))?((((map__22893_22920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22893_22920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22893_22920):map__22893_22920);
var id_22922 = cljs.core.get.call(null,map__22893_22921__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22923 = cljs.core.get.call(null,map__22893_22921__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22922,vehicle_22923);
} else {
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22891_22919))){
var map__22895_22924 = ins;
var map__22895_22925__$1 = ((((!((map__22895_22924 == null)))?((((map__22895_22924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22895_22924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22895_22924):map__22895_22924);
var id_22926 = cljs.core.get.call(null,map__22895_22925__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22926);
} else {
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22891_22919))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22891_22919))){
var map__22897_22927 = ins;
var map__22897_22928__$1 = ((((!((map__22897_22927 == null)))?((((map__22897_22927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22897_22927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22897_22927):map__22897_22927);
var id_22929 = cljs.core.get.call(null,map__22897_22928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22930 = cljs.core.get.call(null,map__22897_22928__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22931 = cljs.core.get.call(null,map__22897_22928__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22932 = cljs.core.get.call(null,map__22897_22928__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22933 = cljs.core.get.call(null,map__22897_22928__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22929)){
chart.client.popup.call(null,id_22929,html_22932,time_22933);
} else {
if(cljs.core.truth_((function (){var and__19832__auto__ = lat_22930;
if(cljs.core.truth_(and__19832__auto__)){
return lon_22931;
} else {
return and__19832__auto__;
}
})())){
chart.client.popup.call(null,lat_22930,lon_22931,html_22932,time_22933);
} else {
}
}
} else {
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__22891_22919))){
var map__22899_22934 = ins;
var map__22899_22935__$1 = ((((!((map__22899_22934 == null)))?((((map__22899_22934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22899_22934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22899_22934):map__22899_22934);
var id_22936 = cljs.core.get.call(null,map__22899_22935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_22937 = cljs.core.get.call(null,map__22899_22935__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_22938 = cljs.core.get.call(null,map__22899_22935__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_22939 = cljs.core.get.call(null,map__22899_22935__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_22936,points_22937,options_22938,time_22939);
} else {
if(cljs.core.truth_(pred__22890_22918.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__22891_22919))){
var map__22901_22940 = ins;
var map__22901_22941__$1 = ((((!((map__22901_22940 == null)))?((((map__22901_22940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22901_22940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22901_22940):map__22901_22940);
var coord_22942 = cljs.core.get.call(null,map__22901_22941__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_22942);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__22943 = seq__22884;
var G__22944 = chunk__22885;
var G__22945 = count__22886;
var G__22946 = (i__22887 + (1));
seq__22884 = G__22943;
chunk__22885 = G__22944;
count__22886 = G__22945;
i__22887 = G__22946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22884);
if(temp__4657__auto__){
var seq__22884__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22884__$1)){
var c__20658__auto__ = cljs.core.chunk_first.call(null,seq__22884__$1);
var G__22947 = cljs.core.chunk_rest.call(null,seq__22884__$1);
var G__22948 = c__20658__auto__;
var G__22949 = cljs.core.count.call(null,c__20658__auto__);
var G__22950 = (0);
seq__22884 = G__22947;
chunk__22885 = G__22948;
count__22886 = G__22949;
i__22887 = G__22950;
continue;
} else {
var map__22903 = cljs.core.first.call(null,seq__22884__$1);
var map__22903__$1 = ((((!((map__22903 == null)))?((((map__22903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22903):map__22903);
var ins = map__22903__$1;
var instruct = cljs.core.get.call(null,map__22903__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22905_22951 = cljs.core._EQ_;
var expr__22906_22952 = instruct;
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22906_22952))){
var map__22908_22953 = ins;
var map__22908_22954__$1 = ((((!((map__22908_22953 == null)))?((((map__22908_22953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22908_22953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22908_22953):map__22908_22953);
var id_22955 = cljs.core.get.call(null,map__22908_22954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22956 = cljs.core.get.call(null,map__22908_22954__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22955,vehicle_22956);
} else {
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22906_22952))){
var map__22910_22957 = ins;
var map__22910_22958__$1 = ((((!((map__22910_22957 == null)))?((((map__22910_22957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22910_22957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22910_22957):map__22910_22957);
var id_22959 = cljs.core.get.call(null,map__22910_22958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22959);
} else {
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22906_22952))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22906_22952))){
var map__22912_22960 = ins;
var map__22912_22961__$1 = ((((!((map__22912_22960 == null)))?((((map__22912_22960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22912_22960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22912_22960):map__22912_22960);
var id_22962 = cljs.core.get.call(null,map__22912_22961__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22963 = cljs.core.get.call(null,map__22912_22961__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22964 = cljs.core.get.call(null,map__22912_22961__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22965 = cljs.core.get.call(null,map__22912_22961__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22966 = cljs.core.get.call(null,map__22912_22961__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22962)){
chart.client.popup.call(null,id_22962,html_22965,time_22966);
} else {
if(cljs.core.truth_((function (){var and__19832__auto__ = lat_22963;
if(cljs.core.truth_(and__19832__auto__)){
return lon_22964;
} else {
return and__19832__auto__;
}
})())){
chart.client.popup.call(null,lat_22963,lon_22964,html_22965,time_22966);
} else {
}
}
} else {
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__22906_22952))){
var map__22914_22967 = ins;
var map__22914_22968__$1 = ((((!((map__22914_22967 == null)))?((((map__22914_22967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22914_22967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22914_22967):map__22914_22967);
var id_22969 = cljs.core.get.call(null,map__22914_22968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_22970 = cljs.core.get.call(null,map__22914_22968__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_22971 = cljs.core.get.call(null,map__22914_22968__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_22972 = cljs.core.get.call(null,map__22914_22968__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_22969,points_22970,options_22971,time_22972);
} else {
if(cljs.core.truth_(pred__22905_22951.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__22906_22952))){
var map__22916_22973 = ins;
var map__22916_22974__$1 = ((((!((map__22916_22973 == null)))?((((map__22916_22973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22916_22973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22916_22973):map__22916_22973);
var coord_22975 = cljs.core.get.call(null,map__22916_22974__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_22975);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__22976 = cljs.core.next.call(null,seq__22884__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22884 = G__22976;
chunk__22885 = G__22977;
count__22886 = G__22978;
i__22887 = G__22979;
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
chart.client.move_to = (function chart$client$move_to(var_args){
var args22981 = [];
var len__20952__auto___22984 = arguments.length;
var i__20953__auto___22985 = (0);
while(true){
if((i__20953__auto___22985 < len__20952__auto___22984)){
args22981.push((arguments[i__20953__auto___22985]));

var G__22986 = (i__20953__auto___22985 + (1));
i__20953__auto___22985 = G__22986;
continue;
} else {
}
break;
}

var G__22983 = args22981.length;
switch (G__22983) {
case 0:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.move_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22981.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__22980_SHARP_){
return chart.client.move_to.call(null,sel,p1__22980_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str("?country="),cljs.core.str(cnt),cljs.core.str("&airport="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("move-to"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args22992 = [];
var len__20952__auto___22995 = arguments.length;
var i__20953__auto___22996 = (0);
while(true){
if((i__20953__auto___22996 < len__20952__auto___22995)){
args22992.push((arguments[i__20953__auto___22996]));

var G__22997 = (i__20953__auto___22996 + (1));
i__20953__auto___22996 = G__22997;
continue;
} else {
}
break;
}

var G__22994 = args22992.length;
switch (G__22994) {
case 0:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return chart.client.schedule.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22992.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__22988_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__22988_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__22989_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__22989_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__22990_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__22990_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__22991_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__22991_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.command = (function chart$client$command(cmd){
var pred__23002 = cljs.core._EQ_;
var expr__23003 = cmd;
if(cljs.core.truth_(pred__23002.call(null,"watch-visible",expr__23003))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__23002.call(null,"move-to",expr__23003))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__23002.call(null,"schedule",expr__23003))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23003)].join('')));
}
}
}
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(chart.client.TIO));

return chart.controls.show_chart_controls.call(null);
});
chart.client.follow = (function chart$client$follow(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("follow?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("trail?id="),cljs.core.str(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map