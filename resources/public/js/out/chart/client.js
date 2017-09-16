// Compiled by ClojureScript 1.9.521 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('csasync.proc');
goog.require('chart.controls');
goog.require('carr.move');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('ask.master');
chart.client.HOST = "http://localhost:";
chart.client.PORT = (4444);
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greenpln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/river.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/edu.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/landmark.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/city.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/greypln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/event.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/waterbody.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/r.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/isle.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/place3.jpeg")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/railwaystation.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/mountain.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/bluepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/airport.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/purplepln32.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/b.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/info.png")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__43716 = response;
var map__43716__$1 = ((((!((map__43716 == null)))?((((map__43716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43716):map__43716);
var status = cljs.core.get.call(null,map__43716__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__43716__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
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

var mp_43724 = cljs.core.deref.call(null,vmp);
var mrk_43725 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_43724);
var vec__43721_43726 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_43724);
var lat_43727 = cljs.core.nth.call(null,vec__43721_43726,(0),null);
var lon_43728 = cljs.core.nth.call(null,vec__43721_43726,(1),null);
var pos_43729 = (new L.LatLng(lat_43727,lon_43728));
mrk_43725.setLatLng(pos_43729);

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
var seq__43734_43738 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__43735_43739 = null;
var count__43736_43740 = (0);
var i__43737_43741 = (0);
while(true){
if((i__43737_43741 < count__43736_43740)){
var veh_43742 = cljs.core._nth.call(null,chunk__43735_43739,i__43737_43741);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_43742)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_43742)));

var G__43743 = seq__43734_43738;
var G__43744 = chunk__43735_43739;
var G__43745 = count__43736_43740;
var G__43746 = (i__43737_43741 + (1));
seq__43734_43738 = G__43743;
chunk__43735_43739 = G__43744;
count__43736_43740 = G__43745;
i__43737_43741 = G__43746;
continue;
} else {
var temp__4657__auto___43747 = cljs.core.seq.call(null,seq__43734_43738);
if(temp__4657__auto___43747){
var seq__43734_43748__$1 = temp__4657__auto___43747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43734_43748__$1)){
var c__23106__auto___43749 = cljs.core.chunk_first.call(null,seq__43734_43748__$1);
var G__43750 = cljs.core.chunk_rest.call(null,seq__43734_43748__$1);
var G__43751 = c__23106__auto___43749;
var G__43752 = cljs.core.count.call(null,c__23106__auto___43749);
var G__43753 = (0);
seq__43734_43738 = G__43750;
chunk__43735_43739 = G__43751;
count__43736_43740 = G__43752;
i__43737_43741 = G__43753;
continue;
} else {
var veh_43754 = cljs.core.first.call(null,seq__43734_43748__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_43754)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_43754)));

var G__43755 = cljs.core.next.call(null,seq__43734_43748__$1);
var G__43756 = null;
var G__43757 = (0);
var G__43758 = (0);
seq__43734_43738 = G__43755;
chunk__43735_43739 = G__43756;
count__43736_43740 = G__43757;
i__43737_43741 = G__43758;
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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("info?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__43763 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__43763,(0),null);
var lon = cljs.core.nth.call(null,vec__43763,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__43763,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__43763,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__43759_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__43759_SHARP_))),e.target);
});})(vec__43763,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__43763,lat,lon,pos,ico,opt,mrk__$1))
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
,new cljs.core.Keyword(null,"vehicles","vehicles",-161247303).cljs$core$IFn$_invoke$arity$1(chart.client.TIO),null));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
});
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature,url_ico){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__22287__auto__ = url_ico;
if(cljs.core.truth_(or__22287__auto__)){
return or__22287__auto__;
} else {
var or__22287__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__22287__auto____$1)){
return or__22287__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pm"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(iname)].join(''));
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
var seq__43770_43774 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__43771_43775 = null;
var count__43772_43776 = (0);
var i__43773_43777 = (0);
while(true){
if((i__43773_43777 < count__43772_43776)){
var mrk_43778 = cljs.core._nth.call(null,chunk__43771_43775,i__43773_43777);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_43778);

var G__43779 = seq__43770_43774;
var G__43780 = chunk__43771_43775;
var G__43781 = count__43772_43776;
var G__43782 = (i__43773_43777 + (1));
seq__43770_43774 = G__43779;
chunk__43771_43775 = G__43780;
count__43772_43776 = G__43781;
i__43773_43777 = G__43782;
continue;
} else {
var temp__4657__auto___43783 = cljs.core.seq.call(null,seq__43770_43774);
if(temp__4657__auto___43783){
var seq__43770_43784__$1 = temp__4657__auto___43783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43770_43784__$1)){
var c__23106__auto___43785 = cljs.core.chunk_first.call(null,seq__43770_43784__$1);
var G__43786 = cljs.core.chunk_rest.call(null,seq__43770_43784__$1);
var G__43787 = c__23106__auto___43785;
var G__43788 = cljs.core.count.call(null,c__23106__auto___43785);
var G__43789 = (0);
seq__43770_43774 = G__43786;
chunk__43771_43775 = G__43787;
count__43772_43776 = G__43788;
i__43773_43777 = G__43789;
continue;
} else {
var mrk_43790 = cljs.core.first.call(null,seq__43770_43784__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_43790);

var G__43791 = cljs.core.next.call(null,seq__43770_43784__$1);
var G__43792 = null;
var G__43793 = (0);
var G__43794 = (0);
seq__43770_43774 = G__43791;
chunk__43771_43775 = G__43792;
count__43772_43776 = G__43793;
i__43773_43777 = G__43794;
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
var args43795 = [];
var len__23400__auto___43801 = arguments.length;
var i__23401__auto___43802 = (0);
while(true){
if((i__23401__auto___43802 < len__23400__auto___43801)){
args43795.push((arguments[i__23401__auto___43802]));

var G__43803 = (i__23401__auto___43802 + (1));
i__23401__auto___43802 = G__43803;
continue;
} else {
}
break;
}

var G__43797 = args43795.length;
switch (G__43797) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43795.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__43798 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__43798,(0),null);
var lon = cljs.core.nth.call(null,vec__43798,(1),null);
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
return (function (p1__43805_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__43805_SHARP_),cljs.core.second.call(null,p1__43805_SHARP_)));
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
var vec__43809 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__43809,(0),null);
var s = cljs.core.nth.call(null,vec__43809,(1),null);
var w = cljs.core.nth.call(null,vec__43809,(2),null);
var e = cljs.core.nth.call(null,vec__43809,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__43809,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__43809,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__43812,zoom,lock){
var vec__43816 = p__43812;
var lat = cljs.core.nth.call(null,vec__43816,(0),null);
var lon = cljs.core.nth.call(null,vec__43816,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__22287__auto__ = zoom;
if(cljs.core.truth_(or__22287__auto__)){
return or__22287__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__43819_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__43819_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__43820_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__43820_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__43821_SHARP_){
return p1__43821_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__43822,ops){
var vec__43826 = p__43822;
var id1 = cljs.core.nth.call(null,vec__43826,(0),null);
var id2 = cljs.core.nth.call(null,vec__43826,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(titl),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h3>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<table>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Dmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" m</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Tmin</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" min</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<tr><td>Alt-diff</td><td>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(adif),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ft</td></tr>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</table>")].join('');
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
var args43830 = [];
var len__23400__auto___43833 = arguments.length;
var i__23401__auto___43834 = (0);
while(true){
if((i__23401__auto___43834 < len__23400__auto___43833)){
args43830.push((arguments[i__23401__auto___43834]));

var G__43835 = (i__23401__auto___43834 + (1));
i__23401__auto___43834 = G__43835;
continue;
} else {
}
break;
}

var G__43832 = args43830.length;
switch (G__43832) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43830.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__43829_SHARP_){
return chart.client.select_airport.call(null,sel,p1__43829_SHARP_);
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
var seq__43893 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__43894 = null;
var count__43895 = (0);
var i__43896 = (0);
while(true){
if((i__43896 < count__43895)){
var map__43897 = cljs.core._nth.call(null,chunk__43894,i__43896);
var map__43897__$1 = ((((!((map__43897 == null)))?((((map__43897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43897):map__43897);
var ins = map__43897__$1;
var instruct = cljs.core.get.call(null,map__43897__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__43899_43949 = cljs.core._EQ_;
var expr__43900_43950 = instruct;
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__43900_43950))){
var map__43902_43951 = ins;
var map__43902_43952__$1 = ((((!((map__43902_43951 == null)))?((((map__43902_43951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43902_43951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43902_43951):map__43902_43951);
var id_43953 = cljs.core.get.call(null,map__43902_43952__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_43954 = cljs.core.get.call(null,map__43902_43952__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_43953,vehicle_43954);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__43900_43950))){
var map__43904_43955 = ins;
var map__43904_43956__$1 = ((((!((map__43904_43955 == null)))?((((map__43904_43955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43904_43955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43904_43955):map__43904_43955);
var id_43957 = cljs.core.get.call(null,map__43904_43956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_43957);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__43900_43950))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__43900_43950))){
var map__43906_43958 = ins;
var map__43906_43959__$1 = ((((!((map__43906_43958 == null)))?((((map__43906_43958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43906_43958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43906_43958):map__43906_43958);
var id_43960 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_43961 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_43962 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_43963 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_43964 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_43965 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_43966 = cljs.core.get.call(null,map__43906_43959__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_43960)){
chart.client.popup.call(null,id_43960,html_43963,time_43964);
} else {
if(cljs.core.truth_((function (){var and__22275__auto__ = width_43965;
if(cljs.core.truth_(and__22275__auto__)){
var and__22275__auto____$1 = height_43966;
if(cljs.core.truth_(and__22275__auto____$1)){
var and__22275__auto____$2 = lat_43961;
if(cljs.core.truth_(and__22275__auto____$2)){
return lon_43962;
} else {
return and__22275__auto____$2;
}
} else {
return and__22275__auto____$1;
}
} else {
return and__22275__auto__;
}
})())){
chart.client.popup.call(null,lat_43961,lon_43962,html_43963,time_43964,width_43965,height_43966);
} else {
if(cljs.core.truth_((function (){var and__22275__auto__ = lat_43961;
if(cljs.core.truth_(and__22275__auto__)){
return lon_43962;
} else {
return and__22275__auto__;
}
})())){
chart.client.popup.call(null,lat_43961,lon_43962,html_43963,time_43964);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__43900_43950))){
var map__43908_43967 = ins;
var map__43908_43968__$1 = ((((!((map__43908_43967 == null)))?((((map__43908_43967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43908_43967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43908_43967):map__43908_43967);
var id_43969 = cljs.core.get.call(null,map__43908_43968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_43970 = cljs.core.get.call(null,map__43908_43968__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_43971 = cljs.core.get.call(null,map__43908_43968__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_43972 = cljs.core.get.call(null,map__43908_43968__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_43969,points_43970,options_43971,time_43972);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__43900_43950))){
var map__43910_43973 = ins;
var map__43910_43974__$1 = ((((!((map__43910_43973 == null)))?((((map__43910_43973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43910_43973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43910_43973):map__43910_43973);
var coord_43975 = cljs.core.get.call(null,map__43910_43974__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_43976 = cljs.core.get.call(null,map__43910_43974__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_43977 = cljs.core.get.call(null,map__43910_43974__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_43975,zoom_43976,lock_43977);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__43900_43950))){
var map__43912_43978 = ins;
var map__43912_43979__$1 = ((((!((map__43912_43978 == null)))?((((map__43912_43978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43912_43978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43912_43978):map__43912_43978);
var iname_43980 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_43981 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_43982 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_43983 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_43984 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_43985 = cljs.core.get.call(null,map__43912_43979__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_43980,tip_43981,lat_43982,lon_43983,feature_43984,url_ico_43985);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__43900_43950))){
var map__43914_43986 = ins;
var map__43914_43987__$1 = ((((!((map__43914_43986 == null)))?((((map__43914_43986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43914_43986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43914_43986):map__43914_43986);
var iname_43988 = cljs.core.get.call(null,map__43914_43987__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_43988);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__43900_43950))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__43900_43950))){
var map__43916_43989 = ins;
var map__43916_43990__$1 = ((((!((map__43916_43989 == null)))?((((map__43916_43989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43916_43989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43916_43989):map__43916_43989);
var ids_43991 = cljs.core.get.call(null,map__43916_43990__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_43992 = cljs.core.get.call(null,map__43916_43990__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_43991,options_43992);
} else {
if(cljs.core.truth_(pred__43899_43949.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__43900_43950))){
var map__43918_43993 = ins;
var map__43918_43994__$1 = ((((!((map__43918_43993 == null)))?((((map__43918_43993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43918_43993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43918_43993):map__43918_43993);
var question_43995 = cljs.core.get.call(null,map__43918_43994__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_43996 = cljs.core.get.call(null,map__43918_43994__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__43920_43997 = cljs.core._EQ_;
var expr__43921_43998 = question_43995;
if(cljs.core.truth_(pred__43920_43997.call(null,"city",expr__43921_43998))){
chart.client.select_city.call(null,param_43996);
} else {
if(cljs.core.truth_(pred__43920_43997.call(null,"airport",expr__43921_43998))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43921_43998)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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

var G__43999 = seq__43893;
var G__44000 = chunk__43894;
var G__44001 = count__43895;
var G__44002 = (i__43896 + (1));
seq__43893 = G__43999;
chunk__43894 = G__44000;
count__43895 = G__44001;
i__43896 = G__44002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43893);
if(temp__4657__auto__){
var seq__43893__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43893__$1)){
var c__23106__auto__ = cljs.core.chunk_first.call(null,seq__43893__$1);
var G__44003 = cljs.core.chunk_rest.call(null,seq__43893__$1);
var G__44004 = c__23106__auto__;
var G__44005 = cljs.core.count.call(null,c__23106__auto__);
var G__44006 = (0);
seq__43893 = G__44003;
chunk__43894 = G__44004;
count__43895 = G__44005;
i__43896 = G__44006;
continue;
} else {
var map__43923 = cljs.core.first.call(null,seq__43893__$1);
var map__43923__$1 = ((((!((map__43923 == null)))?((((map__43923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43923):map__43923);
var ins = map__43923__$1;
var instruct = cljs.core.get.call(null,map__43923__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__43925_44007 = cljs.core._EQ_;
var expr__43926_44008 = instruct;
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__43926_44008))){
var map__43928_44009 = ins;
var map__43928_44010__$1 = ((((!((map__43928_44009 == null)))?((((map__43928_44009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43928_44009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43928_44009):map__43928_44009);
var id_44011 = cljs.core.get.call(null,map__43928_44010__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_44012 = cljs.core.get.call(null,map__43928_44010__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_44011,vehicle_44012);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__43926_44008))){
var map__43930_44013 = ins;
var map__43930_44014__$1 = ((((!((map__43930_44013 == null)))?((((map__43930_44013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43930_44013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930_44013):map__43930_44013);
var id_44015 = cljs.core.get.call(null,map__43930_44014__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_44015);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__43926_44008))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__43926_44008))){
var map__43932_44016 = ins;
var map__43932_44017__$1 = ((((!((map__43932_44016 == null)))?((((map__43932_44016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43932_44016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43932_44016):map__43932_44016);
var id_44018 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_44019 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_44020 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_44021 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_44022 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_44023 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_44024 = cljs.core.get.call(null,map__43932_44017__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_44018)){
chart.client.popup.call(null,id_44018,html_44021,time_44022);
} else {
if(cljs.core.truth_((function (){var and__22275__auto__ = width_44023;
if(cljs.core.truth_(and__22275__auto__)){
var and__22275__auto____$1 = height_44024;
if(cljs.core.truth_(and__22275__auto____$1)){
var and__22275__auto____$2 = lat_44019;
if(cljs.core.truth_(and__22275__auto____$2)){
return lon_44020;
} else {
return and__22275__auto____$2;
}
} else {
return and__22275__auto____$1;
}
} else {
return and__22275__auto__;
}
})())){
chart.client.popup.call(null,lat_44019,lon_44020,html_44021,time_44022,width_44023,height_44024);
} else {
if(cljs.core.truth_((function (){var and__22275__auto__ = lat_44019;
if(cljs.core.truth_(and__22275__auto__)){
return lon_44020;
} else {
return and__22275__auto__;
}
})())){
chart.client.popup.call(null,lat_44019,lon_44020,html_44021,time_44022);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__43926_44008))){
var map__43934_44025 = ins;
var map__43934_44026__$1 = ((((!((map__43934_44025 == null)))?((((map__43934_44025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43934_44025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43934_44025):map__43934_44025);
var id_44027 = cljs.core.get.call(null,map__43934_44026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_44028 = cljs.core.get.call(null,map__43934_44026__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_44029 = cljs.core.get.call(null,map__43934_44026__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_44030 = cljs.core.get.call(null,map__43934_44026__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_44027,points_44028,options_44029,time_44030);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__43926_44008))){
var map__43936_44031 = ins;
var map__43936_44032__$1 = ((((!((map__43936_44031 == null)))?((((map__43936_44031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43936_44031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43936_44031):map__43936_44031);
var coord_44033 = cljs.core.get.call(null,map__43936_44032__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_44034 = cljs.core.get.call(null,map__43936_44032__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_44035 = cljs.core.get.call(null,map__43936_44032__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_44033,zoom_44034,lock_44035);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__43926_44008))){
var map__43938_44036 = ins;
var map__43938_44037__$1 = ((((!((map__43938_44036 == null)))?((((map__43938_44036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43938_44036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43938_44036):map__43938_44036);
var iname_44038 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_44039 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_44040 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_44041 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_44042 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_44043 = cljs.core.get.call(null,map__43938_44037__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_44038,tip_44039,lat_44040,lon_44041,feature_44042,url_ico_44043);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__43926_44008))){
var map__43940_44044 = ins;
var map__43940_44045__$1 = ((((!((map__43940_44044 == null)))?((((map__43940_44044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43940_44044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43940_44044):map__43940_44044);
var iname_44046 = cljs.core.get.call(null,map__43940_44045__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_44046);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__43926_44008))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__43926_44008))){
var map__43942_44047 = ins;
var map__43942_44048__$1 = ((((!((map__43942_44047 == null)))?((((map__43942_44047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43942_44047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43942_44047):map__43942_44047);
var ids_44049 = cljs.core.get.call(null,map__43942_44048__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_44050 = cljs.core.get.call(null,map__43942_44048__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_44049,options_44050);
} else {
if(cljs.core.truth_(pred__43925_44007.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__43926_44008))){
var map__43944_44051 = ins;
var map__43944_44052__$1 = ((((!((map__43944_44051 == null)))?((((map__43944_44051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43944_44051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43944_44051):map__43944_44051);
var question_44053 = cljs.core.get.call(null,map__43944_44052__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_44054 = cljs.core.get.call(null,map__43944_44052__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__43946_44055 = cljs.core._EQ_;
var expr__43947_44056 = question_44053;
if(cljs.core.truth_(pred__43946_44055.call(null,"city",expr__43947_44056))){
chart.client.select_city.call(null,param_44054);
} else {
if(cljs.core.truth_(pred__43946_44055.call(null,"airport",expr__43947_44056))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43947_44056)].join('')));
}
}
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown instruction: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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

var G__44057 = cljs.core.next.call(null,seq__43893__$1);
var G__44058 = null;
var G__44059 = (0);
var G__44060 = (0);
seq__43893 = G__44057;
chunk__43894 = G__44058;
count__43895 = G__44059;
i__43896 = G__44060;
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
var args44062 = [];
var len__23400__auto___44065 = arguments.length;
var i__23401__auto___44066 = (0);
while(true){
if((i__23401__auto___44066 < len__23400__auto___44065)){
args44062.push((arguments[i__23401__auto___44066]));

var G__44067 = (i__23401__auto___44066 + (1));
i__23401__auto___44066 = G__44067;
continue;
} else {
}
break;
}

var G__44064 = args44062.length;
switch (G__44064) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44062.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__44061_SHARP_){
return chart.client.move_to.call(null,sel,p1__44061_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?country="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("move-to"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var args44073 = [];
var len__23400__auto___44076 = arguments.length;
var i__23401__auto___44077 = (0);
while(true){
if((i__23401__auto___44077 < len__23400__auto___44076)){
args44073.push((arguments[i__23401__auto___44077]));

var G__44078 = (i__23401__auto___44077 + (1));
i__23401__auto___44077 = G__44078;
continue;
} else {
}
break;
}

var G__44075 = args44073.length;
switch (G__44075) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44073.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__44069_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__44069_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__44070_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__44070_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__44071_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__44071_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__44072_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__44072_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?callsign="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(call),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&time="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tim),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(apt1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&country2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&airport2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("schedule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var args44083 = [];
var len__23400__auto___44086 = arguments.length;
var i__23401__auto___44087 = (0);
while(true){
if((i__23401__auto___44087 < len__23400__auto___44086)){
args44083.push((arguments[i__23401__auto___44087]));

var G__44088 = (i__23401__auto___44087 + (1));
i__23401__auto___44087 = G__44088;
continue;
} else {
}
break;
}

var G__44085 = args44083.length;
switch (G__44085) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44083.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__44080_SHARP_){
return chart.client.question.call(null,sel,p1__44080_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__44081_SHARP_){
return chart.client.question.call(null,pred,sel,p1__44081_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__44082_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__44082_SHARP_);
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
var pred__44093_44096 = cljs.core._EQ_;
var expr__44094_44097 = cmd;
if(cljs.core.truth_(pred__44093_44096.call(null,"commands",expr__44094_44097))){
} else {
if(cljs.core.truth_(pred__44093_44096.call(null,"watch-visible",expr__44094_44097))){
var bnd_44098 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_44099 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_44098.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_44098.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_44098.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_44098.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_44099)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__44093_44096.call(null,"move-to",expr__44094_44097))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__44093_44096.call(null,"schedule",expr__44094_44097))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__44093_44096.call(null,"question",expr__44094_44097))){
chart.client.question.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)].join(''),chart.client.no_handler);
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
}catch (e44101){if((e44101 instanceof Error)){
var e_44102 = e44101;
cljs.core.println.call(null,e_44102);
} else {
throw e44101;

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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("follow?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("stopfollow")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("trail?id="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map