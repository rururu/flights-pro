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

var mp_24662 = cljs.core.deref.call(null,vmp);
var mrk_24663 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_24662);
var vec__24659_24664 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_24662);
var lat_24665 = cljs.core.nth.call(null,vec__24659_24664,(0),null);
var lon_24666 = cljs.core.nth.call(null,vec__24659_24664,(1),null);
var pos_24667 = (new L.LatLng(lat_24665,lon_24666));
mrk_24663.setLatLng(pos_24667);

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
var seq__24672_24676 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__24673_24677 = null;
var count__24674_24678 = (0);
var i__24675_24679 = (0);
while(true){
if((i__24675_24679 < count__24674_24678)){
var veh_24680 = cljs.core._nth.call(null,chunk__24673_24677,i__24675_24679);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24680)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24680)));

var G__24681 = seq__24672_24676;
var G__24682 = chunk__24673_24677;
var G__24683 = count__24674_24678;
var G__24684 = (i__24675_24679 + (1));
seq__24672_24676 = G__24681;
chunk__24673_24677 = G__24682;
count__24674_24678 = G__24683;
i__24675_24679 = G__24684;
continue;
} else {
var temp__4657__auto___24685 = cljs.core.seq.call(null,seq__24672_24676);
if(temp__4657__auto___24685){
var seq__24672_24686__$1 = temp__4657__auto___24685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24672_24686__$1)){
var c__21095__auto___24687 = cljs.core.chunk_first.call(null,seq__24672_24686__$1);
var G__24688 = cljs.core.chunk_rest.call(null,seq__24672_24686__$1);
var G__24689 = c__21095__auto___24687;
var G__24690 = cljs.core.count.call(null,c__21095__auto___24687);
var G__24691 = (0);
seq__24672_24676 = G__24688;
chunk__24673_24677 = G__24689;
count__24674_24678 = G__24690;
i__24675_24679 = G__24691;
continue;
} else {
var veh_24692 = cljs.core.first.call(null,seq__24672_24686__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24692)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_24692)));

var G__24693 = cljs.core.next.call(null,seq__24672_24686__$1);
var G__24694 = null;
var G__24695 = (0);
var G__24696 = (0);
seq__24672_24676 = G__24693;
chunk__24673_24677 = G__24694;
count__24674_24678 = G__24695;
i__24675_24679 = G__24696;
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
var map__24699 = response;
var map__24699__$1 = ((((!((map__24699 == null)))?((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24699):map__24699);
var status = cljs.core.get.call(null,map__24699__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24699__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var vec__24705 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__24705,(0),null);
var lon = cljs.core.nth.call(null,vec__24705,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__24705,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__24705,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__24701_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__24701_SHARP_))),e.target);
});})(vec__24705,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__24705,lat,lon,pos,ico,opt,mrk__$1))
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
var args24708 = [];
var len__21389__auto___24714 = arguments.length;
var i__21390__auto___24715 = (0);
while(true){
if((i__21390__auto___24715 < len__21389__auto___24714)){
args24708.push((arguments[i__21390__auto___24715]));

var G__24716 = (i__21390__auto___24715 + (1));
i__21390__auto___24715 = G__24716;
continue;
} else {
}
break;
}

var G__24710 = args24708.length;
switch (G__24710) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24708.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__24711 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__24711,(0),null);
var lon = cljs.core.nth.call(null,vec__24711,(1),null);
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
return (function (p1__24718_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__24718_SHARP_),cljs.core.second.call(null,p1__24718_SHARP_)));
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
var vec__24722 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__24722,(0),null);
var s = cljs.core.nth.call(null,vec__24722,(1),null);
var w = cljs.core.nth.call(null,vec__24722,(2),null);
var e = cljs.core.nth.call(null,vec__24722,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__24722,n,s,w,e,url){
return (function (response){
return null;
});})(vec__24722,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__24725){
var vec__24729 = p__24725;
var lat = cljs.core.nth.call(null,vec__24729,(0),null);
var lon = cljs.core.nth.call(null,vec__24729,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__24766 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__24767 = null;
var count__24768 = (0);
var i__24769 = (0);
while(true){
if((i__24769 < count__24768)){
var map__24770 = cljs.core._nth.call(null,chunk__24767,i__24769);
var map__24770__$1 = ((((!((map__24770 == null)))?((((map__24770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24770):map__24770);
var ins = map__24770__$1;
var instruct = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24772_24800 = cljs.core._EQ_;
var expr__24773_24801 = instruct;
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24773_24801))){
var map__24775_24802 = ins;
var map__24775_24803__$1 = ((((!((map__24775_24802 == null)))?((((map__24775_24802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24775_24802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24775_24802):map__24775_24802);
var id_24804 = cljs.core.get.call(null,map__24775_24803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24805 = cljs.core.get.call(null,map__24775_24803__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24804,vehicle_24805);
} else {
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24773_24801))){
var map__24777_24806 = ins;
var map__24777_24807__$1 = ((((!((map__24777_24806 == null)))?((((map__24777_24806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24777_24806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24777_24806):map__24777_24806);
var id_24808 = cljs.core.get.call(null,map__24777_24807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24808);
} else {
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24773_24801))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24773_24801))){
var map__24779_24809 = ins;
var map__24779_24810__$1 = ((((!((map__24779_24809 == null)))?((((map__24779_24809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24779_24809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24779_24809):map__24779_24809);
var id_24811 = cljs.core.get.call(null,map__24779_24810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24812 = cljs.core.get.call(null,map__24779_24810__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24813 = cljs.core.get.call(null,map__24779_24810__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24814 = cljs.core.get.call(null,map__24779_24810__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24815 = cljs.core.get.call(null,map__24779_24810__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24811)){
chart.client.popup.call(null,id_24811,html_24814,time_24815);
} else {
if(cljs.core.truth_((function (){var and__20269__auto__ = lat_24812;
if(cljs.core.truth_(and__20269__auto__)){
return lon_24813;
} else {
return and__20269__auto__;
}
})())){
chart.client.popup.call(null,lat_24812,lon_24813,html_24814,time_24815);
} else {
}
}
} else {
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24773_24801))){
var map__24781_24816 = ins;
var map__24781_24817__$1 = ((((!((map__24781_24816 == null)))?((((map__24781_24816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24781_24816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24781_24816):map__24781_24816);
var id_24818 = cljs.core.get.call(null,map__24781_24817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24819 = cljs.core.get.call(null,map__24781_24817__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24820 = cljs.core.get.call(null,map__24781_24817__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24821 = cljs.core.get.call(null,map__24781_24817__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24818,points_24819,options_24820,time_24821);
} else {
if(cljs.core.truth_(pred__24772_24800.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24773_24801))){
var map__24783_24822 = ins;
var map__24783_24823__$1 = ((((!((map__24783_24822 == null)))?((((map__24783_24822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24783_24822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24783_24822):map__24783_24822);
var coord_24824 = cljs.core.get.call(null,map__24783_24823__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24824);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__24825 = seq__24766;
var G__24826 = chunk__24767;
var G__24827 = count__24768;
var G__24828 = (i__24769 + (1));
seq__24766 = G__24825;
chunk__24767 = G__24826;
count__24768 = G__24827;
i__24769 = G__24828;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24766);
if(temp__4657__auto__){
var seq__24766__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24766__$1)){
var c__21095__auto__ = cljs.core.chunk_first.call(null,seq__24766__$1);
var G__24829 = cljs.core.chunk_rest.call(null,seq__24766__$1);
var G__24830 = c__21095__auto__;
var G__24831 = cljs.core.count.call(null,c__21095__auto__);
var G__24832 = (0);
seq__24766 = G__24829;
chunk__24767 = G__24830;
count__24768 = G__24831;
i__24769 = G__24832;
continue;
} else {
var map__24785 = cljs.core.first.call(null,seq__24766__$1);
var map__24785__$1 = ((((!((map__24785 == null)))?((((map__24785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24785):map__24785);
var ins = map__24785__$1;
var instruct = cljs.core.get.call(null,map__24785__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24787_24833 = cljs.core._EQ_;
var expr__24788_24834 = instruct;
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__24788_24834))){
var map__24790_24835 = ins;
var map__24790_24836__$1 = ((((!((map__24790_24835 == null)))?((((map__24790_24835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24790_24835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24790_24835):map__24790_24835);
var id_24837 = cljs.core.get.call(null,map__24790_24836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24838 = cljs.core.get.call(null,map__24790_24836__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_24837,vehicle_24838);
} else {
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24788_24834))){
var map__24792_24839 = ins;
var map__24792_24840__$1 = ((((!((map__24792_24839 == null)))?((((map__24792_24839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24792_24839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24792_24839):map__24792_24839);
var id_24841 = cljs.core.get.call(null,map__24792_24840__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24841);
} else {
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__24788_24834))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__24788_24834))){
var map__24794_24842 = ins;
var map__24794_24843__$1 = ((((!((map__24794_24842 == null)))?((((map__24794_24842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24794_24842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24794_24842):map__24794_24842);
var id_24844 = cljs.core.get.call(null,map__24794_24843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_24845 = cljs.core.get.call(null,map__24794_24843__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_24846 = cljs.core.get.call(null,map__24794_24843__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_24847 = cljs.core.get.call(null,map__24794_24843__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_24848 = cljs.core.get.call(null,map__24794_24843__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_24844)){
chart.client.popup.call(null,id_24844,html_24847,time_24848);
} else {
if(cljs.core.truth_((function (){var and__20269__auto__ = lat_24845;
if(cljs.core.truth_(and__20269__auto__)){
return lon_24846;
} else {
return and__20269__auto__;
}
})())){
chart.client.popup.call(null,lat_24845,lon_24846,html_24847,time_24848);
} else {
}
}
} else {
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__24788_24834))){
var map__24796_24849 = ins;
var map__24796_24850__$1 = ((((!((map__24796_24849 == null)))?((((map__24796_24849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24796_24849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24796_24849):map__24796_24849);
var id_24851 = cljs.core.get.call(null,map__24796_24850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_24852 = cljs.core.get.call(null,map__24796_24850__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_24853 = cljs.core.get.call(null,map__24796_24850__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_24854 = cljs.core.get.call(null,map__24796_24850__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_24851,points_24852,options_24853,time_24854);
} else {
if(cljs.core.truth_(pred__24787_24833.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__24788_24834))){
var map__24798_24855 = ins;
var map__24798_24856__$1 = ((((!((map__24798_24855 == null)))?((((map__24798_24855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24798_24855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24798_24855):map__24798_24855);
var coord_24857 = cljs.core.get.call(null,map__24798_24856__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_24857);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}

var G__24858 = cljs.core.next.call(null,seq__24766__$1);
var G__24859 = null;
var G__24860 = (0);
var G__24861 = (0);
seq__24766 = G__24858;
chunk__24767 = G__24859;
count__24768 = G__24860;
i__24769 = G__24861;
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
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str((function (){var pred__24865 = cljs.core._EQ_;
var expr__24866 = cmd;
if(cljs.core.truth_(pred__24865.call(null,"watch-visible",expr__24866))){
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