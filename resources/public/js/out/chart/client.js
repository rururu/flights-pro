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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(2222),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__26670 = response;
var map__26670__$1 = ((((!((map__26670 == null)))?((((map__26670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670):map__26670);
var status = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_26678 = cljs.core.deref.call(null,vmp);
var mrk_26679 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_26678);
var vec__26675_26680 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_26678);
var lat_26681 = cljs.core.nth.call(null,vec__26675_26680,(0),null);
var lon_26682 = cljs.core.nth.call(null,vec__26675_26680,(1),null);
var pos_26683 = (new L.LatLng(lat_26681,lon_26682));
mrk_26679.setLatLng(pos_26683);

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
var seq__26688_26692 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__26689_26693 = null;
var count__26690_26694 = (0);
var i__26691_26695 = (0);
while(true){
if((i__26691_26695 < count__26690_26694)){
var veh_26696 = cljs.core._nth.call(null,chunk__26689_26693,i__26691_26695);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26696)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26696)));

var G__26697 = seq__26688_26692;
var G__26698 = chunk__26689_26693;
var G__26699 = count__26690_26694;
var G__26700 = (i__26691_26695 + (1));
seq__26688_26692 = G__26697;
chunk__26689_26693 = G__26698;
count__26690_26694 = G__26699;
i__26691_26695 = G__26700;
continue;
} else {
var temp__4657__auto___26701 = cljs.core.seq.call(null,seq__26688_26692);
if(temp__4657__auto___26701){
var seq__26688_26702__$1 = temp__4657__auto___26701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26688_26702__$1)){
var c__21551__auto___26703 = cljs.core.chunk_first.call(null,seq__26688_26702__$1);
var G__26704 = cljs.core.chunk_rest.call(null,seq__26688_26702__$1);
var G__26705 = c__21551__auto___26703;
var G__26706 = cljs.core.count.call(null,c__21551__auto___26703);
var G__26707 = (0);
seq__26688_26692 = G__26704;
chunk__26689_26693 = G__26705;
count__26690_26694 = G__26706;
i__26691_26695 = G__26707;
continue;
} else {
var veh_26708 = cljs.core.first.call(null,seq__26688_26702__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26708)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_26708)));

var G__26709 = cljs.core.next.call(null,seq__26688_26702__$1);
var G__26710 = null;
var G__26711 = (0);
var G__26712 = (0);
seq__26688_26692 = G__26709;
chunk__26689_26693 = G__26710;
count__26690_26694 = G__26711;
i__26691_26695 = G__26712;
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

var vec__26717 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__26717,(0),null);
var lon = cljs.core.nth.call(null,vec__26717,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__26717,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__26717,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__26713_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__26713_SHARP_))),e.target);
});})(vec__26717,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__26717,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

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
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20737__auto__ = url_ico;
if(cljs.core.truth_(or__20737__auto__)){
return or__20737__auto__;
} else {
var or__20737__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20737__auto____$1)){
return or__20737__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.delete_placemark = (function chart$client$delete_placemark(iname){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.PLACEMARKS).call(null,iname);
if(cljs.core.truth_(temp__4657__auto__)){
var mrk = temp__4657__auto__;
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname));
} else {
return null;
}
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__26724_26728 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__26725_26729 = null;
var count__26726_26730 = (0);
var i__26727_26731 = (0);
while(true){
if((i__26727_26731 < count__26726_26730)){
var mrk_26732 = cljs.core._nth.call(null,chunk__26725_26729,i__26727_26731);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26732);

var G__26733 = seq__26724_26728;
var G__26734 = chunk__26725_26729;
var G__26735 = count__26726_26730;
var G__26736 = (i__26727_26731 + (1));
seq__26724_26728 = G__26733;
chunk__26725_26729 = G__26734;
count__26726_26730 = G__26735;
i__26727_26731 = G__26736;
continue;
} else {
var temp__4657__auto___26737 = cljs.core.seq.call(null,seq__26724_26728);
if(temp__4657__auto___26737){
var seq__26724_26738__$1 = temp__4657__auto___26737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26724_26738__$1)){
var c__21551__auto___26739 = cljs.core.chunk_first.call(null,seq__26724_26738__$1);
var G__26740 = cljs.core.chunk_rest.call(null,seq__26724_26738__$1);
var G__26741 = c__21551__auto___26739;
var G__26742 = cljs.core.count.call(null,c__21551__auto___26739);
var G__26743 = (0);
seq__26724_26728 = G__26740;
chunk__26725_26729 = G__26741;
count__26726_26730 = G__26742;
i__26727_26731 = G__26743;
continue;
} else {
var mrk_26744 = cljs.core.first.call(null,seq__26724_26738__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_26744);

var G__26745 = cljs.core.next.call(null,seq__26724_26738__$1);
var G__26746 = null;
var G__26747 = (0);
var G__26748 = (0);
seq__26724_26728 = G__26745;
chunk__26725_26729 = G__26746;
count__26726_26730 = G__26747;
i__26727_26731 = G__26748;
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
var args26749 = [];
var len__21845__auto___26755 = arguments.length;
var i__21846__auto___26756 = (0);
while(true){
if((i__21846__auto___26756 < len__21845__auto___26755)){
args26749.push((arguments[i__21846__auto___26756]));

var G__26757 = (i__21846__auto___26756 + (1));
i__21846__auto___26756 = G__26757;
continue;
} else {
}
break;
}

var G__26751 = args26749.length;
switch (G__26751) {
case 3:
return chart.client.popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return chart.client.popup.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26749.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__26752 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__26752,(0),null);
var lon = cljs.core.nth.call(null,vec__26752,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(240),(480));
});

chart.client.popup.cljs$core$IFn$_invoke$arity$6 = (function (lat,lon,html,time,w,h){
var pop = L.popup(({"maxWidth": w, "maxHeight": h})).setLatLng([lat,lon]).setContent(html);
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

chart.client.popup.cljs$lang$maxFixedArity = 6;

chart.client.add_trail = (function chart$client$add_trail(id,points,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var pts = cljs.core.map.call(null,((function (ops){
return (function (p1__26759_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__26759_SHARP_),cljs.core.second.call(null,p1__26759_SHARP_)));
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
var vec__26763 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__26763,(0),null);
var s = cljs.core.nth.call(null,vec__26763,(1),null);
var w = cljs.core.nth.call(null,vec__26763,(2),null);
var e = cljs.core.nth.call(null,vec__26763,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__26763,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__26763,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__26766,zoom,lock){
var vec__26770 = p__26766;
var lat = cljs.core.nth.call(null,vec__26770,(0),null);
var lon = cljs.core.nth.call(null,vec__26770,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20737__auto__ = zoom;
if(cljs.core.truth_(or__20737__auto__)){
return or__20737__auto__;
} else {
return cljs.core.deref.call(null,chart.client.CHART).getZoom();
}
})();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.not.call(null,lock)){
return chart.client.new_visible.call(null);
} else {
return null;
}
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__26773_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__26773_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__26774_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__26774_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__26775_SHARP_){
return p1__26775_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__26776,ops){
var vec__26780 = p__26776;
var id1 = cljs.core.nth.call(null,vec__26780,(0),null);
var id2 = cljs.core.nth.call(null,vec__26780,(1),null);
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
chart.client.select_airport = (function chart$client$select_airport(var_args){
var args26784 = [];
var len__21845__auto___26787 = arguments.length;
var i__21846__auto___26788 = (0);
while(true){
if((i__21846__auto___26788 < len__21845__auto___26787)){
args26784.push((arguments[i__21846__auto___26788]));

var G__26789 = (i__21846__auto___26788 + (1));
i__21846__auto___26788 = G__26789;
continue;
} else {
}
break;
}

var G__26786 = args26784.length;
switch (G__26786) {
case 0:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.select_airport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26784.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__26783_SHARP_){
return chart.client.select_airport.call(null,sel,p1__26783_SHARP_);
}));
}))
;
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(20),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected airport",new cljs.core.Keyword(null,"object","object",1474613949),sel,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),cnt], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.select_airport.cljs$lang$maxFixedArity = 2;

chart.client.select_city = (function chart$client$select_city(param){
var temp__4655__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto__)){
var cns = temp__4655__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__4655__auto__){
return (function chart$client$select_city_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected country",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cns,temp__4655__auto__){
return (function (r){
return null;
});})(cns,temp__4655__auto__))
);
});})(cns,temp__4655__auto__))
)
;
} else {
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cts = temp__4655__auto____$1;
ask.master.selector.call(null,"element",(20),"chart.client","cities",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = ((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function chart$client$select_city_$_handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected city",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cts,temp__4655__auto____$1,temp__4655__auto__){
return (function (r){
return null;
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
);

return ask.master.clear_dialog.call(null);
});})(cts,temp__4655__auto____$1,temp__4655__auto__))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__26847 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__26848 = null;
var count__26849 = (0);
var i__26850 = (0);
while(true){
if((i__26850 < count__26849)){
var map__26851 = cljs.core._nth.call(null,chunk__26848,i__26850);
var map__26851__$1 = ((((!((map__26851 == null)))?((((map__26851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26851):map__26851);
var ins = map__26851__$1;
var instruct = cljs.core.get.call(null,map__26851__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26853_26903 = cljs.core._EQ_;
var expr__26854_26904 = instruct;
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26854_26904))){
var map__26856_26905 = ins;
var map__26856_26906__$1 = ((((!((map__26856_26905 == null)))?((((map__26856_26905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26856_26905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26856_26905):map__26856_26905);
var id_26907 = cljs.core.get.call(null,map__26856_26906__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26908 = cljs.core.get.call(null,map__26856_26906__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26907,vehicle_26908);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26854_26904))){
var map__26858_26909 = ins;
var map__26858_26910__$1 = ((((!((map__26858_26909 == null)))?((((map__26858_26909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858_26909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858_26909):map__26858_26909);
var id_26911 = cljs.core.get.call(null,map__26858_26910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26911);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26854_26904))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26854_26904))){
var map__26860_26912 = ins;
var map__26860_26913__$1 = ((((!((map__26860_26912 == null)))?((((map__26860_26912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26860_26912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860_26912):map__26860_26912);
var id_26914 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26915 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26916 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26917 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26918 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26919 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26920 = cljs.core.get.call(null,map__26860_26913__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26914)){
chart.client.popup.call(null,id_26914,html_26917,time_26918);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = width_26919;
if(cljs.core.truth_(and__20725__auto__)){
var and__20725__auto____$1 = height_26920;
if(cljs.core.truth_(and__20725__auto____$1)){
var and__20725__auto____$2 = lat_26915;
if(cljs.core.truth_(and__20725__auto____$2)){
return lon_26916;
} else {
return and__20725__auto____$2;
}
} else {
return and__20725__auto____$1;
}
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_26915,lon_26916,html_26917,time_26918,width_26919,height_26920);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = lat_26915;
if(cljs.core.truth_(and__20725__auto__)){
return lon_26916;
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_26915,lon_26916,html_26917,time_26918);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26854_26904))){
var map__26862_26921 = ins;
var map__26862_26922__$1 = ((((!((map__26862_26921 == null)))?((((map__26862_26921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26862_26921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26862_26921):map__26862_26921);
var id_26923 = cljs.core.get.call(null,map__26862_26922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26924 = cljs.core.get.call(null,map__26862_26922__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26925 = cljs.core.get.call(null,map__26862_26922__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26926 = cljs.core.get.call(null,map__26862_26922__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26923,points_26924,options_26925,time_26926);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26854_26904))){
var map__26864_26927 = ins;
var map__26864_26928__$1 = ((((!((map__26864_26927 == null)))?((((map__26864_26927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26864_26927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26864_26927):map__26864_26927);
var coord_26929 = cljs.core.get.call(null,map__26864_26928__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26930 = cljs.core.get.call(null,map__26864_26928__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26931 = cljs.core.get.call(null,map__26864_26928__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26929,zoom_26930,lock_26931);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26854_26904))){
var map__26866_26932 = ins;
var map__26866_26933__$1 = ((((!((map__26866_26932 == null)))?((((map__26866_26932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26866_26932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866_26932):map__26866_26932);
var iname_26934 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26935 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26936 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26937 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26938 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26939 = cljs.core.get.call(null,map__26866_26933__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26934,tip_26935,lat_26936,lon_26937,feature_26938,url_ico_26939);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26854_26904))){
var map__26868_26940 = ins;
var map__26868_26941__$1 = ((((!((map__26868_26940 == null)))?((((map__26868_26940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26868_26940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868_26940):map__26868_26940);
var iname_26942 = cljs.core.get.call(null,map__26868_26941__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_26942);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26854_26904))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26854_26904))){
var map__26870_26943 = ins;
var map__26870_26944__$1 = ((((!((map__26870_26943 == null)))?((((map__26870_26943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26870_26943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26870_26943):map__26870_26943);
var ids_26945 = cljs.core.get.call(null,map__26870_26944__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_26946 = cljs.core.get.call(null,map__26870_26944__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_26945,options_26946);
} else {
if(cljs.core.truth_(pred__26853_26903.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26854_26904))){
var map__26872_26947 = ins;
var map__26872_26948__$1 = ((((!((map__26872_26947 == null)))?((((map__26872_26947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26872_26947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26872_26947):map__26872_26947);
var question_26949 = cljs.core.get.call(null,map__26872_26948__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_26950 = cljs.core.get.call(null,map__26872_26948__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26874_26951 = cljs.core._EQ_;
var expr__26875_26952 = question_26949;
if(cljs.core.truth_(pred__26874_26951.call(null,"city",expr__26875_26952))){
chart.client.select_city.call(null,param_26950);
} else {
if(cljs.core.truth_(pred__26874_26951.call(null,"airport",expr__26875_26952))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26875_26952)].join('')));
}
}
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
}
}

var G__26953 = seq__26847;
var G__26954 = chunk__26848;
var G__26955 = count__26849;
var G__26956 = (i__26850 + (1));
seq__26847 = G__26953;
chunk__26848 = G__26954;
count__26849 = G__26955;
i__26850 = G__26956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26847);
if(temp__4657__auto__){
var seq__26847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26847__$1)){
var c__21551__auto__ = cljs.core.chunk_first.call(null,seq__26847__$1);
var G__26957 = cljs.core.chunk_rest.call(null,seq__26847__$1);
var G__26958 = c__21551__auto__;
var G__26959 = cljs.core.count.call(null,c__21551__auto__);
var G__26960 = (0);
seq__26847 = G__26957;
chunk__26848 = G__26958;
count__26849 = G__26959;
i__26850 = G__26960;
continue;
} else {
var map__26877 = cljs.core.first.call(null,seq__26847__$1);
var map__26877__$1 = ((((!((map__26877 == null)))?((((map__26877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26877):map__26877);
var ins = map__26877__$1;
var instruct = cljs.core.get.call(null,map__26877__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__26879_26961 = cljs.core._EQ_;
var expr__26880_26962 = instruct;
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__26880_26962))){
var map__26882_26963 = ins;
var map__26882_26964__$1 = ((((!((map__26882_26963 == null)))?((((map__26882_26963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26882_26963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26882_26963):map__26882_26963);
var id_26965 = cljs.core.get.call(null,map__26882_26964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_26966 = cljs.core.get.call(null,map__26882_26964__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_26965,vehicle_26966);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__26880_26962))){
var map__26884_26967 = ins;
var map__26884_26968__$1 = ((((!((map__26884_26967 == null)))?((((map__26884_26967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26884_26967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26884_26967):map__26884_26967);
var id_26969 = cljs.core.get.call(null,map__26884_26968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_26969);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__26880_26962))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__26880_26962))){
var map__26886_26970 = ins;
var map__26886_26971__$1 = ((((!((map__26886_26970 == null)))?((((map__26886_26970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26886_26970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886_26970):map__26886_26970);
var id_26972 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_26973 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26974 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_26975 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_26976 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_26977 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_26978 = cljs.core.get.call(null,map__26886_26971__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_26972)){
chart.client.popup.call(null,id_26972,html_26975,time_26976);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = width_26977;
if(cljs.core.truth_(and__20725__auto__)){
var and__20725__auto____$1 = height_26978;
if(cljs.core.truth_(and__20725__auto____$1)){
var and__20725__auto____$2 = lat_26973;
if(cljs.core.truth_(and__20725__auto____$2)){
return lon_26974;
} else {
return and__20725__auto____$2;
}
} else {
return and__20725__auto____$1;
}
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_26973,lon_26974,html_26975,time_26976,width_26977,height_26978);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = lat_26973;
if(cljs.core.truth_(and__20725__auto__)){
return lon_26974;
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_26973,lon_26974,html_26975,time_26976);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__26880_26962))){
var map__26888_26979 = ins;
var map__26888_26980__$1 = ((((!((map__26888_26979 == null)))?((((map__26888_26979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26888_26979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26888_26979):map__26888_26979);
var id_26981 = cljs.core.get.call(null,map__26888_26980__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_26982 = cljs.core.get.call(null,map__26888_26980__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_26983 = cljs.core.get.call(null,map__26888_26980__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_26984 = cljs.core.get.call(null,map__26888_26980__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_26981,points_26982,options_26983,time_26984);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__26880_26962))){
var map__26890_26985 = ins;
var map__26890_26986__$1 = ((((!((map__26890_26985 == null)))?((((map__26890_26985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26890_26985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26890_26985):map__26890_26985);
var coord_26987 = cljs.core.get.call(null,map__26890_26986__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_26988 = cljs.core.get.call(null,map__26890_26986__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_26989 = cljs.core.get.call(null,map__26890_26986__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_26987,zoom_26988,lock_26989);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__26880_26962))){
var map__26892_26990 = ins;
var map__26892_26991__$1 = ((((!((map__26892_26990 == null)))?((((map__26892_26990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26892_26990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892_26990):map__26892_26990);
var iname_26992 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_26993 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_26994 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_26995 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_26996 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_26997 = cljs.core.get.call(null,map__26892_26991__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_26992,tip_26993,lat_26994,lon_26995,feature_26996,url_ico_26997);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__26880_26962))){
var map__26894_26998 = ins;
var map__26894_26999__$1 = ((((!((map__26894_26998 == null)))?((((map__26894_26998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26894_26998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26894_26998):map__26894_26998);
var iname_27000 = cljs.core.get.call(null,map__26894_26999__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_27000);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__26880_26962))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__26880_26962))){
var map__26896_27001 = ins;
var map__26896_27002__$1 = ((((!((map__26896_27001 == null)))?((((map__26896_27001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26896_27001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26896_27001):map__26896_27001);
var ids_27003 = cljs.core.get.call(null,map__26896_27002__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_27004 = cljs.core.get.call(null,map__26896_27002__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_27003,options_27004);
} else {
if(cljs.core.truth_(pred__26879_26961.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__26880_26962))){
var map__26898_27005 = ins;
var map__26898_27006__$1 = ((((!((map__26898_27005 == null)))?((((map__26898_27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26898_27005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26898_27005):map__26898_27005);
var question_27007 = cljs.core.get.call(null,map__26898_27006__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_27008 = cljs.core.get.call(null,map__26898_27006__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__26900_27009 = cljs.core._EQ_;
var expr__26901_27010 = question_27007;
if(cljs.core.truth_(pred__26900_27009.call(null,"city",expr__26901_27010))){
chart.client.select_city.call(null,param_27008);
} else {
if(cljs.core.truth_(pred__26900_27009.call(null,"airport",expr__26901_27010))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26901_27010)].join('')));
}
}
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
}
}

var G__27011 = cljs.core.next.call(null,seq__26847__$1);
var G__27012 = null;
var G__27013 = (0);
var G__27014 = (0);
seq__26847 = G__27011;
chunk__26848 = G__27012;
count__26849 = G__27013;
i__26850 = G__27014;
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
var args27016 = [];
var len__21845__auto___27019 = arguments.length;
var i__21846__auto___27020 = (0);
while(true){
if((i__21846__auto___27020 < len__21845__auto___27019)){
args27016.push((arguments[i__21846__auto___27020]));

var G__27021 = (i__21846__auto___27020 + (1));
i__21846__auto___27020 = G__27021;
continue;
} else {
}
break;
}

var G__27018 = args27016.length;
switch (G__27018) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27016.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27015_SHARP_){
return chart.client.move_to.call(null,sel,p1__27015_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

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
var args27027 = [];
var len__21845__auto___27030 = arguments.length;
var i__21846__auto___27031 = (0);
while(true){
if((i__21846__auto___27031 < len__21845__auto___27030)){
args27027.push((arguments[i__21846__auto___27031]));

var G__27032 = (i__21846__auto___27031 + (1));
i__21846__auto___27031 = G__27032;
continue;
} else {
}
break;
}

var G__27029 = args27027.length;
switch (G__27029) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27027.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input.call(null,"element",(1),"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input.call(null,"element",(2),"chart.client","hh:mm",(80));

return (
chart.client.handler2 = (function chart$client$handler1_$_handler2(tim){
return chart.client.schedule.call(null,call,tim);
}))
;
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$2 = (function (call,tim){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27023_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__27023_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27024_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__27024_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__27025_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__27025_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__27026_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__27026_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str("?callsign="),cljs.core.str(call),cljs.core.str("&time="),cljs.core.str(tim),cljs.core.str("&country1="),cljs.core.str(cnt1),cljs.core.str("&airport1="),cljs.core.str(apt1),cljs.core.str("&country2="),cljs.core.str(cnt2),cljs.core.str("&airport2="),cljs.core.str(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("schedule"),cljs.core.str(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args27037 = [];
var len__21845__auto___27040 = arguments.length;
var i__21846__auto___27041 = (0);
while(true){
if((i__21846__auto___27041 < len__21845__auto___27040)){
args27037.push((arguments[i__21846__auto___27041]));

var G__27042 = (i__21846__auto___27041 + (1));
i__21846__auto___27041 = G__27042;
continue;
} else {
}
break;
}

var G__27039 = args27037.length;
switch (G__27039) {
case 0:
return chart.client.question.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chart.client.question.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return chart.client.question.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return chart.client.question.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return chart.client.question.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27037.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__27034_SHARP_){
return chart.client.question.call(null,sel,p1__27034_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__27035_SHARP_){
return chart.client.question.call(null,pred,sel,p1__27035_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__27036_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__27036_SHARP_);
}));
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$core$IFn$_invoke$arity$4 = (function (pred,subj,obj,adjuncts){
if(cljs.core.truth_(adjuncts)){
ask.master.selector.call(null,"element",(40),"chart.client","?",adjuncts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler40 = (function chart$client$handler40(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"adjunct","adjunct",1627696494),sel], null),(function (r){
return null;
}));

return ask.master.clear_dialog.call(null);
}))
;
} else {
return ask.master.clear_dialog.call(null);
}
});

chart.client.question.cljs$lang$maxFixedArity = 4;

chart.client.command = (function chart$client$command(cmd){
var pred__27047_27050 = cljs.core._EQ_;
var expr__27048_27051 = cmd;
if(cljs.core.truth_(pred__27047_27050.call(null,"commands",expr__27048_27051))){
} else {
if(cljs.core.truth_(pred__27047_27050.call(null,"watch-visible",expr__27048_27051))){
var bnd_27052 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_27053 = [cljs.core.str("?n="),cljs.core.str(bnd_27052.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_27052.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_27052.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_27052.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_27053)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__27047_27050.call(null,"move-to",expr__27048_27051))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__27047_27050.call(null,"schedule",expr__27048_27051))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__27047_27050.call(null,"question",expr__27048_27051))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
}

return chart.controls.show_chart_controls.call(null);
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (20), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e27055){if((e27055 instanceof Error)){
var e_27056 = e27055;
cljs.core.println.call(null,e_27056);
} else {
throw e27055;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

m.on("zoomend",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.display_zoom.call(null,m.getZoom());
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

chart.controls.display_zoom.call(null,m.getZoom());

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