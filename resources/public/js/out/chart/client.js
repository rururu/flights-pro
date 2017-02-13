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
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000)], null);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),"COUNTER",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),"FOLLOWING",[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join('')], null);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__22602 = response;
var map__22602__$1 = ((((!((map__22602 == null)))?((((map__22602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22602):map__22602);
var status = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_22610 = cljs.core.deref.call(null,vmp);
var mrk_22611 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22610);
var vec__22607_22612 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22610);
var lat_22613 = cljs.core.nth.call(null,vec__22607_22612,(0),null);
var lon_22614 = cljs.core.nth.call(null,vec__22607_22612,(1),null);
var pos_22615 = (new L.LatLng(lat_22613,lon_22614));
mrk_22611.setLatLng(pos_22615);

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
var seq__22620_22624 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__22621_22625 = null;
var count__22622_22626 = (0);
var i__22623_22627 = (0);
while(true){
if((i__22623_22627 < count__22622_22626)){
var veh_22628 = cljs.core._nth.call(null,chunk__22621_22625,i__22623_22627);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22628)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22628)));

var G__22629 = seq__22620_22624;
var G__22630 = chunk__22621_22625;
var G__22631 = count__22622_22626;
var G__22632 = (i__22623_22627 + (1));
seq__22620_22624 = G__22629;
chunk__22621_22625 = G__22630;
count__22622_22626 = G__22631;
i__22623_22627 = G__22632;
continue;
} else {
var temp__4657__auto___22633 = cljs.core.seq.call(null,seq__22620_22624);
if(temp__4657__auto___22633){
var seq__22620_22634__$1 = temp__4657__auto___22633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22620_22634__$1)){
var c__20484__auto___22635 = cljs.core.chunk_first.call(null,seq__22620_22634__$1);
var G__22636 = cljs.core.chunk_rest.call(null,seq__22620_22634__$1);
var G__22637 = c__20484__auto___22635;
var G__22638 = cljs.core.count.call(null,c__20484__auto___22635);
var G__22639 = (0);
seq__22620_22624 = G__22636;
chunk__22621_22625 = G__22637;
count__22622_22626 = G__22638;
i__22623_22627 = G__22639;
continue;
} else {
var veh_22640 = cljs.core.first.call(null,seq__22620_22634__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22640)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_22640)));

var G__22641 = cljs.core.next.call(null,seq__22620_22634__$1);
var G__22642 = null;
var G__22643 = (0);
var G__22644 = (0);
seq__22620_22624 = G__22641;
chunk__22621_22625 = G__22642;
count__22622_22626 = G__22643;
i__22623_22627 = G__22644;
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

var vec__22649 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22649,(0),null);
var lon = cljs.core.nth.call(null,vec__22649,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__22649,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22649,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__22645_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__22645_SHARP_))),e.target);
});})(vec__22649,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22649,lat,lon,pos,ico,opt,mrk__$1))
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
var args22652 = [];
var len__20778__auto___22658 = arguments.length;
var i__20779__auto___22659 = (0);
while(true){
if((i__20779__auto___22659 < len__20778__auto___22658)){
args22652.push((arguments[i__20779__auto___22659]));

var G__22660 = (i__20779__auto___22659 + (1));
i__20779__auto___22659 = G__22660;
continue;
} else {
}
break;
}

var G__22654 = args22652.length;
switch (G__22654) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22652.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__22655 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__22655,(0),null);
var lon = cljs.core.nth.call(null,vec__22655,(1),null);
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
return (function (p1__22662_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__22662_SHARP_),cljs.core.second.call(null,p1__22662_SHARP_)));
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
var vec__22666 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__22666,(0),null);
var s = cljs.core.nth.call(null,vec__22666,(1),null);
var w = cljs.core.nth.call(null,vec__22666,(2),null);
var e = cljs.core.nth.call(null,vec__22666,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__22666,n,s,w,e,url){
return (function (response){
return null;
});})(vec__22666,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__22669){
var vec__22673 = p__22669;
var lat = cljs.core.nth.call(null,vec__22673,(0),null);
var lon = cljs.core.nth.call(null,vec__22673,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__22710 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22711 = null;
var count__22712 = (0);
var i__22713 = (0);
while(true){
if((i__22713 < count__22712)){
var map__22714 = cljs.core._nth.call(null,chunk__22711,i__22713);
var map__22714__$1 = ((((!((map__22714 == null)))?((((map__22714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22714):map__22714);
var ins = map__22714__$1;
var instruct = cljs.core.get.call(null,map__22714__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22716_22744 = cljs.core._EQ_;
var expr__22717_22745 = instruct;
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22717_22745))){
var map__22719_22746 = ins;
var map__22719_22747__$1 = ((((!((map__22719_22746 == null)))?((((map__22719_22746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22719_22746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22719_22746):map__22719_22746);
var id_22748 = cljs.core.get.call(null,map__22719_22747__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22749 = cljs.core.get.call(null,map__22719_22747__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22748,vehicle_22749);
} else {
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22717_22745))){
var map__22721_22750 = ins;
var map__22721_22751__$1 = ((((!((map__22721_22750 == null)))?((((map__22721_22750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22721_22750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22721_22750):map__22721_22750);
var id_22752 = cljs.core.get.call(null,map__22721_22751__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22752);
} else {
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22717_22745))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22717_22745))){
var map__22723_22753 = ins;
var map__22723_22754__$1 = ((((!((map__22723_22753 == null)))?((((map__22723_22753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22723_22753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22723_22753):map__22723_22753);
var id_22755 = cljs.core.get.call(null,map__22723_22754__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22756 = cljs.core.get.call(null,map__22723_22754__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22757 = cljs.core.get.call(null,map__22723_22754__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22758 = cljs.core.get.call(null,map__22723_22754__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22759 = cljs.core.get.call(null,map__22723_22754__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22755)){
chart.client.popup.call(null,id_22755,html_22758,time_22759);
} else {
if(cljs.core.truth_((function (){var and__19658__auto__ = lat_22756;
if(cljs.core.truth_(and__19658__auto__)){
return lon_22757;
} else {
return and__19658__auto__;
}
})())){
chart.client.popup.call(null,lat_22756,lon_22757,html_22758,time_22759);
} else {
}
}
} else {
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__22717_22745))){
var map__22725_22760 = ins;
var map__22725_22761__$1 = ((((!((map__22725_22760 == null)))?((((map__22725_22760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22725_22760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22725_22760):map__22725_22760);
var id_22762 = cljs.core.get.call(null,map__22725_22761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_22763 = cljs.core.get.call(null,map__22725_22761__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_22764 = cljs.core.get.call(null,map__22725_22761__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_22765 = cljs.core.get.call(null,map__22725_22761__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_22762,points_22763,options_22764,time_22765);
} else {
if(cljs.core.truth_(pred__22716_22744.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__22717_22745))){
var map__22727_22766 = ins;
var map__22727_22767__$1 = ((((!((map__22727_22766 == null)))?((((map__22727_22766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22727_22766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22727_22766):map__22727_22766);
var coord_22768 = cljs.core.get.call(null,map__22727_22767__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_22768);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__22769 = seq__22710;
var G__22770 = chunk__22711;
var G__22771 = count__22712;
var G__22772 = (i__22713 + (1));
seq__22710 = G__22769;
chunk__22711 = G__22770;
count__22712 = G__22771;
i__22713 = G__22772;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22710);
if(temp__4657__auto__){
var seq__22710__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22710__$1)){
var c__20484__auto__ = cljs.core.chunk_first.call(null,seq__22710__$1);
var G__22773 = cljs.core.chunk_rest.call(null,seq__22710__$1);
var G__22774 = c__20484__auto__;
var G__22775 = cljs.core.count.call(null,c__20484__auto__);
var G__22776 = (0);
seq__22710 = G__22773;
chunk__22711 = G__22774;
count__22712 = G__22775;
i__22713 = G__22776;
continue;
} else {
var map__22729 = cljs.core.first.call(null,seq__22710__$1);
var map__22729__$1 = ((((!((map__22729 == null)))?((((map__22729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22729):map__22729);
var ins = map__22729__$1;
var instruct = cljs.core.get.call(null,map__22729__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22731_22777 = cljs.core._EQ_;
var expr__22732_22778 = instruct;
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__22732_22778))){
var map__22734_22779 = ins;
var map__22734_22780__$1 = ((((!((map__22734_22779 == null)))?((((map__22734_22779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22734_22779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22734_22779):map__22734_22779);
var id_22781 = cljs.core.get.call(null,map__22734_22780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22782 = cljs.core.get.call(null,map__22734_22780__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_22781,vehicle_22782);
} else {
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22732_22778))){
var map__22736_22783 = ins;
var map__22736_22784__$1 = ((((!((map__22736_22783 == null)))?((((map__22736_22783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22736_22783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22736_22783):map__22736_22783);
var id_22785 = cljs.core.get.call(null,map__22736_22784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22785);
} else {
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22732_22778))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__22732_22778))){
var map__22738_22786 = ins;
var map__22738_22787__$1 = ((((!((map__22738_22786 == null)))?((((map__22738_22786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22738_22786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22738_22786):map__22738_22786);
var id_22788 = cljs.core.get.call(null,map__22738_22787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_22789 = cljs.core.get.call(null,map__22738_22787__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22790 = cljs.core.get.call(null,map__22738_22787__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_22791 = cljs.core.get.call(null,map__22738_22787__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_22792 = cljs.core.get.call(null,map__22738_22787__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_22788)){
chart.client.popup.call(null,id_22788,html_22791,time_22792);
} else {
if(cljs.core.truth_((function (){var and__19658__auto__ = lat_22789;
if(cljs.core.truth_(and__19658__auto__)){
return lon_22790;
} else {
return and__19658__auto__;
}
})())){
chart.client.popup.call(null,lat_22789,lon_22790,html_22791,time_22792);
} else {
}
}
} else {
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__22732_22778))){
var map__22740_22793 = ins;
var map__22740_22794__$1 = ((((!((map__22740_22793 == null)))?((((map__22740_22793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22740_22793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22740_22793):map__22740_22793);
var id_22795 = cljs.core.get.call(null,map__22740_22794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_22796 = cljs.core.get.call(null,map__22740_22794__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_22797 = cljs.core.get.call(null,map__22740_22794__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_22798 = cljs.core.get.call(null,map__22740_22794__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_22795,points_22796,options_22797,time_22798);
} else {
if(cljs.core.truth_(pred__22731_22777.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__22732_22778))){
var map__22742_22799 = ins;
var map__22742_22800__$1 = ((((!((map__22742_22799 == null)))?((((map__22742_22799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22742_22799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22742_22799):map__22742_22799);
var coord_22801 = cljs.core.get.call(null,map__22742_22800__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_22801);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__22802 = cljs.core.next.call(null,seq__22710__$1);
var G__22803 = null;
var G__22804 = (0);
var G__22805 = (0);
seq__22710 = G__22802;
chunk__22711 = G__22803;
count__22712 = G__22804;
i__22713 = G__22805;
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
var args22807 = [];
var len__20778__auto___22810 = arguments.length;
var i__20779__auto___22811 = (0);
while(true){
if((i__20779__auto___22811 < len__20778__auto___22810)){
args22807.push((arguments[i__20779__auto___22811]));

var G__22812 = (i__20779__auto___22811 + (1));
i__20779__auto___22811 = G__22812;
continue;
} else {
}
break;
}

var G__22809 = args22807.length;
switch (G__22809) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22807.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__22806_SHARP_){
return chart.client.move_to.call(null,sel,p1__22806_SHARP_);
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
var args22818 = [];
var len__20778__auto___22821 = arguments.length;
var i__20779__auto___22822 = (0);
while(true){
if((i__20779__auto___22822 < len__20778__auto___22821)){
args22818.push((arguments[i__20779__auto___22822]));

var G__22823 = (i__20779__auto___22822 + (1));
i__20779__auto___22822 = G__22823;
continue;
} else {
}
break;
}

var G__22820 = args22818.length;
switch (G__22820) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22818.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__22814_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__22814_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__22815_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__22815_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__22816_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__22816_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__22817_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__22817_SHARP_);
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
var pred__22828 = cljs.core._EQ_;
var expr__22829 = cmd;
if(cljs.core.truth_(pred__22828.call(null,"watch-visible",expr__22829))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__22828.call(null,"move-to",expr__22829))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__22828.call(null,"schedule",expr__22829))){
return chart.client.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22829)].join('')));
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