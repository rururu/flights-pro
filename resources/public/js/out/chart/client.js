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
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__35708 = response;
var map__35708__$1 = ((((!((map__35708 == null)))?((((map__35708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35708):map__35708);
var status = cljs.core.get.call(null,map__35708__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__35708__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_35716 = cljs.core.deref.call(null,vmp);
var mrk_35717 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_35716);
var vec__35713_35718 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_35716);
var lat_35719 = cljs.core.nth.call(null,vec__35713_35718,(0),null);
var lon_35720 = cljs.core.nth.call(null,vec__35713_35718,(1),null);
var pos_35721 = (new L.LatLng(lat_35719,lon_35720));
mrk_35717.setLatLng(pos_35721);

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
var seq__35726_35730 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__35727_35731 = null;
var count__35728_35732 = (0);
var i__35729_35733 = (0);
while(true){
if((i__35729_35733 < count__35728_35732)){
var veh_35734 = cljs.core._nth.call(null,chunk__35727_35731,i__35729_35733);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_35734)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_35734)));

var G__35735 = seq__35726_35730;
var G__35736 = chunk__35727_35731;
var G__35737 = count__35728_35732;
var G__35738 = (i__35729_35733 + (1));
seq__35726_35730 = G__35735;
chunk__35727_35731 = G__35736;
count__35728_35732 = G__35737;
i__35729_35733 = G__35738;
continue;
} else {
var temp__4657__auto___35739 = cljs.core.seq.call(null,seq__35726_35730);
if(temp__4657__auto___35739){
var seq__35726_35740__$1 = temp__4657__auto___35739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35726_35740__$1)){
var c__21696__auto___35741 = cljs.core.chunk_first.call(null,seq__35726_35740__$1);
var G__35742 = cljs.core.chunk_rest.call(null,seq__35726_35740__$1);
var G__35743 = c__21696__auto___35741;
var G__35744 = cljs.core.count.call(null,c__21696__auto___35741);
var G__35745 = (0);
seq__35726_35730 = G__35742;
chunk__35727_35731 = G__35743;
count__35728_35732 = G__35744;
i__35729_35733 = G__35745;
continue;
} else {
var veh_35746 = cljs.core.first.call(null,seq__35726_35740__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_35746)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_35746)));

var G__35747 = cljs.core.next.call(null,seq__35726_35740__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35726_35730 = G__35747;
chunk__35727_35731 = G__35748;
count__35728_35732 = G__35749;
i__35729_35733 = G__35750;
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

var vec__35755 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__35755,(0),null);
var lon = cljs.core.nth.call(null,vec__35755,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__35755,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__35755,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__35751_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__35751_SHARP_))),e.target);
});})(vec__35755,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__35755,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20882__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20882__auto__)){
return or__20882__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__35762_35766 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__35763_35767 = null;
var count__35764_35768 = (0);
var i__35765_35769 = (0);
while(true){
if((i__35765_35769 < count__35764_35768)){
var mrk_35770 = cljs.core._nth.call(null,chunk__35763_35767,i__35765_35769);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_35770);

var G__35771 = seq__35762_35766;
var G__35772 = chunk__35763_35767;
var G__35773 = count__35764_35768;
var G__35774 = (i__35765_35769 + (1));
seq__35762_35766 = G__35771;
chunk__35763_35767 = G__35772;
count__35764_35768 = G__35773;
i__35765_35769 = G__35774;
continue;
} else {
var temp__4657__auto___35775 = cljs.core.seq.call(null,seq__35762_35766);
if(temp__4657__auto___35775){
var seq__35762_35776__$1 = temp__4657__auto___35775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35762_35776__$1)){
var c__21696__auto___35777 = cljs.core.chunk_first.call(null,seq__35762_35776__$1);
var G__35778 = cljs.core.chunk_rest.call(null,seq__35762_35776__$1);
var G__35779 = c__21696__auto___35777;
var G__35780 = cljs.core.count.call(null,c__21696__auto___35777);
var G__35781 = (0);
seq__35762_35766 = G__35778;
chunk__35763_35767 = G__35779;
count__35764_35768 = G__35780;
i__35765_35769 = G__35781;
continue;
} else {
var mrk_35782 = cljs.core.first.call(null,seq__35762_35776__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_35782);

var G__35783 = cljs.core.next.call(null,seq__35762_35776__$1);
var G__35784 = null;
var G__35785 = (0);
var G__35786 = (0);
seq__35762_35766 = G__35783;
chunk__35763_35767 = G__35784;
count__35764_35768 = G__35785;
i__35765_35769 = G__35786;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.PersistentArrayMap.EMPTY);
});
chart.client.popup = (function chart$client$popup(var_args){
var args35787 = [];
var len__21990__auto___35793 = arguments.length;
var i__21991__auto___35794 = (0);
while(true){
if((i__21991__auto___35794 < len__21990__auto___35793)){
args35787.push((arguments[i__21991__auto___35794]));

var G__35795 = (i__21991__auto___35794 + (1));
i__21991__auto___35794 = G__35795;
continue;
} else {
}
break;
}

var G__35789 = args35787.length;
switch (G__35789) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35787.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__35790 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__35790,(0),null);
var lon = cljs.core.nth.call(null,vec__35790,(1),null);
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
return (function (p1__35797_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__35797_SHARP_),cljs.core.second.call(null,p1__35797_SHARP_)));
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
var vec__35801 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__35801,(0),null);
var s = cljs.core.nth.call(null,vec__35801,(1),null);
var w = cljs.core.nth.call(null,vec__35801,(2),null);
var e = cljs.core.nth.call(null,vec__35801,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__35801,n,s,w,e,url){
return (function (response){
return null;
});})(vec__35801,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__35804){
var vec__35808 = p__35804;
var lat = cljs.core.nth.call(null,vec__35808,(0),null);
var lon = cljs.core.nth.call(null,vec__35808,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__35811_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__35811_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__35812_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__35812_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__35813_SHARP_){
return p1__35813_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__35814,ops){
var vec__35818 = p__35814;
var id1 = cljs.core.nth.call(null,vec__35818,(0),null);
var id2 = cljs.core.nth.call(null,vec__35818,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
});
chart.client.add_link = (function chart$client$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(options);
var del = ((typeof tmin === 'number')?(((60000) * tmin) | (0)):(30000));
var llg = chart.client.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,chart.client.CHART).addLayer(lnk);

lnk.bindPopup(chart.client.linkPopup.call(null,ids,options));

cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids,lnk));

if((del > (0))){
return csasync.proc.delayer.call(null,((function (ops,tmin,del,llg,lnk){
return (function (){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(lnk);

return cljs.core._vreset_BANG_.call(null,chart.client.LINKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.LINKS),ids));
});})(ops,tmin,del,llg,lnk))
,del);
} else {
return null;
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__35863 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__35864 = null;
var count__35865 = (0);
var i__35866 = (0);
while(true){
if((i__35866 < count__35865)){
var map__35867 = cljs.core._nth.call(null,chunk__35864,i__35866);
var map__35867__$1 = ((((!((map__35867 == null)))?((((map__35867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35867):map__35867);
var ins = map__35867__$1;
var instruct = cljs.core.get.call(null,map__35867__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__35869_35905 = cljs.core._EQ_;
var expr__35870_35906 = instruct;
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__35870_35906))){
var map__35872_35907 = ins;
var map__35872_35908__$1 = ((((!((map__35872_35907 == null)))?((((map__35872_35907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35872_35907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35872_35907):map__35872_35907);
var id_35909 = cljs.core.get.call(null,map__35872_35908__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_35910 = cljs.core.get.call(null,map__35872_35908__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_35909,vehicle_35910);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__35870_35906))){
var map__35874_35911 = ins;
var map__35874_35912__$1 = ((((!((map__35874_35911 == null)))?((((map__35874_35911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35874_35911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35874_35911):map__35874_35911);
var id_35913 = cljs.core.get.call(null,map__35874_35912__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_35913);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__35870_35906))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__35870_35906))){
var map__35876_35914 = ins;
var map__35876_35915__$1 = ((((!((map__35876_35914 == null)))?((((map__35876_35914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35876_35914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35876_35914):map__35876_35914);
var id_35916 = cljs.core.get.call(null,map__35876_35915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_35917 = cljs.core.get.call(null,map__35876_35915__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35918 = cljs.core.get.call(null,map__35876_35915__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_35919 = cljs.core.get.call(null,map__35876_35915__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_35920 = cljs.core.get.call(null,map__35876_35915__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_35916)){
chart.client.popup.call(null,id_35916,html_35919,time_35920);
} else {
if(cljs.core.truth_((function (){var and__20870__auto__ = lat_35917;
if(cljs.core.truth_(and__20870__auto__)){
return lon_35918;
} else {
return and__20870__auto__;
}
})())){
chart.client.popup.call(null,lat_35917,lon_35918,html_35919,time_35920);
} else {
}
}
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__35870_35906))){
var map__35878_35921 = ins;
var map__35878_35922__$1 = ((((!((map__35878_35921 == null)))?((((map__35878_35921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35878_35921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35878_35921):map__35878_35921);
var id_35923 = cljs.core.get.call(null,map__35878_35922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_35924 = cljs.core.get.call(null,map__35878_35922__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_35925 = cljs.core.get.call(null,map__35878_35922__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_35926 = cljs.core.get.call(null,map__35878_35922__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_35923,points_35924,options_35925,time_35926);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__35870_35906))){
var map__35880_35927 = ins;
var map__35880_35928__$1 = ((((!((map__35880_35927 == null)))?((((map__35880_35927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880_35927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35880_35927):map__35880_35927);
var coord_35929 = cljs.core.get.call(null,map__35880_35928__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_35929);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__35870_35906))){
var map__35882_35930 = ins;
var map__35882_35931__$1 = ((((!((map__35882_35930 == null)))?((((map__35882_35930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35882_35930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35882_35930):map__35882_35930);
var iname_35932 = cljs.core.get.call(null,map__35882_35931__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_35933 = cljs.core.get.call(null,map__35882_35931__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35934 = cljs.core.get.call(null,map__35882_35931__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_35935 = cljs.core.get.call(null,map__35882_35931__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_35932,lat_35933,lon_35934,feature_35935);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__35870_35906))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__35869_35905.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__35870_35906))){
var map__35884_35936 = ins;
var map__35884_35937__$1 = ((((!((map__35884_35936 == null)))?((((map__35884_35936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35884_35936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35884_35936):map__35884_35936);
var ids_35938 = cljs.core.get.call(null,map__35884_35937__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_35939 = cljs.core.get.call(null,map__35884_35937__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_35938,options_35939);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__35940 = seq__35863;
var G__35941 = chunk__35864;
var G__35942 = count__35865;
var G__35943 = (i__35866 + (1));
seq__35863 = G__35940;
chunk__35864 = G__35941;
count__35865 = G__35942;
i__35866 = G__35943;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35863);
if(temp__4657__auto__){
var seq__35863__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35863__$1)){
var c__21696__auto__ = cljs.core.chunk_first.call(null,seq__35863__$1);
var G__35944 = cljs.core.chunk_rest.call(null,seq__35863__$1);
var G__35945 = c__21696__auto__;
var G__35946 = cljs.core.count.call(null,c__21696__auto__);
var G__35947 = (0);
seq__35863 = G__35944;
chunk__35864 = G__35945;
count__35865 = G__35946;
i__35866 = G__35947;
continue;
} else {
var map__35886 = cljs.core.first.call(null,seq__35863__$1);
var map__35886__$1 = ((((!((map__35886 == null)))?((((map__35886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35886):map__35886);
var ins = map__35886__$1;
var instruct = cljs.core.get.call(null,map__35886__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__35888_35948 = cljs.core._EQ_;
var expr__35889_35949 = instruct;
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__35889_35949))){
var map__35891_35950 = ins;
var map__35891_35951__$1 = ((((!((map__35891_35950 == null)))?((((map__35891_35950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35891_35950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35891_35950):map__35891_35950);
var id_35952 = cljs.core.get.call(null,map__35891_35951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_35953 = cljs.core.get.call(null,map__35891_35951__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_35952,vehicle_35953);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__35889_35949))){
var map__35893_35954 = ins;
var map__35893_35955__$1 = ((((!((map__35893_35954 == null)))?((((map__35893_35954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35893_35954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35893_35954):map__35893_35954);
var id_35956 = cljs.core.get.call(null,map__35893_35955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_35956);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__35889_35949))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__35889_35949))){
var map__35895_35957 = ins;
var map__35895_35958__$1 = ((((!((map__35895_35957 == null)))?((((map__35895_35957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35895_35957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35895_35957):map__35895_35957);
var id_35959 = cljs.core.get.call(null,map__35895_35958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_35960 = cljs.core.get.call(null,map__35895_35958__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35961 = cljs.core.get.call(null,map__35895_35958__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_35962 = cljs.core.get.call(null,map__35895_35958__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_35963 = cljs.core.get.call(null,map__35895_35958__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_35959)){
chart.client.popup.call(null,id_35959,html_35962,time_35963);
} else {
if(cljs.core.truth_((function (){var and__20870__auto__ = lat_35960;
if(cljs.core.truth_(and__20870__auto__)){
return lon_35961;
} else {
return and__20870__auto__;
}
})())){
chart.client.popup.call(null,lat_35960,lon_35961,html_35962,time_35963);
} else {
}
}
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__35889_35949))){
var map__35897_35964 = ins;
var map__35897_35965__$1 = ((((!((map__35897_35964 == null)))?((((map__35897_35964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897_35964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897_35964):map__35897_35964);
var id_35966 = cljs.core.get.call(null,map__35897_35965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_35967 = cljs.core.get.call(null,map__35897_35965__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_35968 = cljs.core.get.call(null,map__35897_35965__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_35969 = cljs.core.get.call(null,map__35897_35965__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_35966,points_35967,options_35968,time_35969);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__35889_35949))){
var map__35899_35970 = ins;
var map__35899_35971__$1 = ((((!((map__35899_35970 == null)))?((((map__35899_35970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35899_35970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35899_35970):map__35899_35970);
var coord_35972 = cljs.core.get.call(null,map__35899_35971__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_35972);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__35889_35949))){
var map__35901_35973 = ins;
var map__35901_35974__$1 = ((((!((map__35901_35973 == null)))?((((map__35901_35973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901_35973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35901_35973):map__35901_35973);
var iname_35975 = cljs.core.get.call(null,map__35901_35974__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_35976 = cljs.core.get.call(null,map__35901_35974__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_35977 = cljs.core.get.call(null,map__35901_35974__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_35978 = cljs.core.get.call(null,map__35901_35974__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_35975,lat_35976,lon_35977,feature_35978);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__35889_35949))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__35888_35948.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__35889_35949))){
var map__35903_35979 = ins;
var map__35903_35980__$1 = ((((!((map__35903_35979 == null)))?((((map__35903_35979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35903_35979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35903_35979):map__35903_35979);
var ids_35981 = cljs.core.get.call(null,map__35903_35980__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_35982 = cljs.core.get.call(null,map__35903_35980__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_35981,options_35982);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__35983 = cljs.core.next.call(null,seq__35863__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35863 = G__35983;
chunk__35864 = G__35984;
count__35865 = G__35985;
i__35866 = G__35986;
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
var args35988 = [];
var len__21990__auto___35991 = arguments.length;
var i__21991__auto___35992 = (0);
while(true){
if((i__21991__auto___35992 < len__21990__auto___35991)){
args35988.push((arguments[i__21991__auto___35992]));

var G__35993 = (i__21991__auto___35992 + (1));
i__21991__auto___35992 = G__35993;
continue;
} else {
}
break;
}

var G__35990 = args35988.length;
switch (G__35990) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35988.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__35987_SHARP_){
return chart.client.move_to.call(null,sel,p1__35987_SHARP_);
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
var args35999 = [];
var len__21990__auto___36002 = arguments.length;
var i__21991__auto___36003 = (0);
while(true){
if((i__21991__auto___36003 < len__21990__auto___36002)){
args35999.push((arguments[i__21991__auto___36003]));

var G__36004 = (i__21991__auto___36003 + (1));
i__21991__auto___36003 = G__36004;
continue;
} else {
}
break;
}

var G__36001 = args35999.length;
switch (G__36001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35999.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__35995_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__35995_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__35996_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__35996_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__35997_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__35997_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__35998_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__35998_SHARP_);
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
var pred__36009 = cljs.core._EQ_;
var expr__36010 = cmd;
if(cljs.core.truth_(pred__36009.call(null,"commands",expr__36010))){
return null;
} else {
if(cljs.core.truth_(pred__36009.call(null,"watch-visible",expr__36010))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__36009.call(null,"move-to",expr__36010))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__36009.call(null,"schedule",expr__36010))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
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
chart.client.question = (function chart$client$question(q){
var pred__36015 = cljs.core._EQ_;
var expr__36016 = q;
if(cljs.core.truth_(pred__36015.call(null,"questions",expr__36016))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map