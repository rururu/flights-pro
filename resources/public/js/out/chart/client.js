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
var map__50750 = response;
var map__50750__$1 = ((((!((map__50750 == null)))?((((map__50750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50750):map__50750);
var status = cljs.core.get.call(null,map__50750__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__50750__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.ONBOARD = "MANUAL";
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_50758 = cljs.core.deref.call(null,vmp);
var mrk_50759 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_50758);
var vec__50755_50760 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_50758);
var lat_50761 = cljs.core.nth.call(null,vec__50755_50760,(0),null);
var lon_50762 = cljs.core.nth.call(null,vec__50755_50760,(1),null);
var pos_50763 = (new L.LatLng(lat_50761,lon_50762));
mrk_50759.setLatLng(pos_50763);

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
var seq__50768_50772 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__50769_50773 = null;
var count__50770_50774 = (0);
var i__50771_50775 = (0);
while(true){
if((i__50771_50775 < count__50770_50774)){
var veh_50776 = cljs.core._nth.call(null,chunk__50769_50773,i__50771_50775);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_50776)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_50776)));

var G__50777 = seq__50768_50772;
var G__50778 = chunk__50769_50773;
var G__50779 = count__50770_50774;
var G__50780 = (i__50771_50775 + (1));
seq__50768_50772 = G__50777;
chunk__50769_50773 = G__50778;
count__50770_50774 = G__50779;
i__50771_50775 = G__50780;
continue;
} else {
var temp__4657__auto___50781 = cljs.core.seq.call(null,seq__50768_50772);
if(temp__4657__auto___50781){
var seq__50768_50782__$1 = temp__4657__auto___50781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50768_50782__$1)){
var c__10080__auto___50783 = cljs.core.chunk_first.call(null,seq__50768_50782__$1);
var G__50784 = cljs.core.chunk_rest.call(null,seq__50768_50782__$1);
var G__50785 = c__10080__auto___50783;
var G__50786 = cljs.core.count.call(null,c__10080__auto___50783);
var G__50787 = (0);
seq__50768_50772 = G__50784;
chunk__50769_50773 = G__50785;
count__50770_50774 = G__50786;
i__50771_50775 = G__50787;
continue;
} else {
var veh_50788 = cljs.core.first.call(null,seq__50768_50782__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_50788)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_50788)));

var G__50789 = cljs.core.next.call(null,seq__50768_50782__$1);
var G__50790 = null;
var G__50791 = (0);
var G__50792 = (0);
seq__50768_50772 = G__50789;
chunk__50769_50773 = G__50790;
count__50770_50774 = G__50791;
i__50771_50775 = G__50792;
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

var vec__50797 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__50797,(0),null);
var lon = cljs.core.nth.call(null,vec__50797,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__50797,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__50797,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__50793_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__50793_SHARP_))),e.target);
});})(vec__50797,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__50797,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9261__auto__ = url_ico;
if(cljs.core.truth_(or__9261__auto__)){
return or__9261__auto__;
} else {
var or__9261__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9261__auto____$1)){
return or__9261__auto____$1;
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
var seq__50804_50808 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__50805_50809 = null;
var count__50806_50810 = (0);
var i__50807_50811 = (0);
while(true){
if((i__50807_50811 < count__50806_50810)){
var mrk_50812 = cljs.core._nth.call(null,chunk__50805_50809,i__50807_50811);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_50812);

var G__50813 = seq__50804_50808;
var G__50814 = chunk__50805_50809;
var G__50815 = count__50806_50810;
var G__50816 = (i__50807_50811 + (1));
seq__50804_50808 = G__50813;
chunk__50805_50809 = G__50814;
count__50806_50810 = G__50815;
i__50807_50811 = G__50816;
continue;
} else {
var temp__4657__auto___50817 = cljs.core.seq.call(null,seq__50804_50808);
if(temp__4657__auto___50817){
var seq__50804_50818__$1 = temp__4657__auto___50817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50804_50818__$1)){
var c__10080__auto___50819 = cljs.core.chunk_first.call(null,seq__50804_50818__$1);
var G__50820 = cljs.core.chunk_rest.call(null,seq__50804_50818__$1);
var G__50821 = c__10080__auto___50819;
var G__50822 = cljs.core.count.call(null,c__10080__auto___50819);
var G__50823 = (0);
seq__50804_50808 = G__50820;
chunk__50805_50809 = G__50821;
count__50806_50810 = G__50822;
i__50807_50811 = G__50823;
continue;
} else {
var mrk_50824 = cljs.core.first.call(null,seq__50804_50818__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_50824);

var G__50825 = cljs.core.next.call(null,seq__50804_50818__$1);
var G__50826 = null;
var G__50827 = (0);
var G__50828 = (0);
seq__50804_50808 = G__50825;
chunk__50805_50809 = G__50826;
count__50806_50810 = G__50827;
i__50807_50811 = G__50828;
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
var args50829 = [];
var len__10374__auto___50835 = arguments.length;
var i__10375__auto___50836 = (0);
while(true){
if((i__10375__auto___50836 < len__10374__auto___50835)){
args50829.push((arguments[i__10375__auto___50836]));

var G__50837 = (i__10375__auto___50836 + (1));
i__10375__auto___50836 = G__50837;
continue;
} else {
}
break;
}

var G__50831 = args50829.length;
switch (G__50831) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50829.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__50832 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__50832,(0),null);
var lon = cljs.core.nth.call(null,vec__50832,(1),null);
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
return (function (p1__50839_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__50839_SHARP_),cljs.core.second.call(null,p1__50839_SHARP_)));
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
var vec__50843 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__50843,(0),null);
var s = cljs.core.nth.call(null,vec__50843,(1),null);
var w = cljs.core.nth.call(null,vec__50843,(2),null);
var e = cljs.core.nth.call(null,vec__50843,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__50843,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__50843,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__50846,zoom,lock){
var vec__50850 = p__50846;
var lat = cljs.core.nth.call(null,vec__50850,(0),null);
var lon = cljs.core.nth.call(null,vec__50850,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9261__auto__ = zoom;
if(cljs.core.truth_(or__9261__auto__)){
return or__9261__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__50853_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__50853_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__50854_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__50854_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__50855_SHARP_){
return p1__50855_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__50856,ops){
var vec__50860 = p__50856;
var id1 = cljs.core.nth.call(null,vec__50860,(0),null);
var id2 = cljs.core.nth.call(null,vec__50860,(1),null);
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
var args50864 = [];
var len__10374__auto___50867 = arguments.length;
var i__10375__auto___50868 = (0);
while(true){
if((i__10375__auto___50868 < len__10374__auto___50867)){
args50864.push((arguments[i__10375__auto___50868]));

var G__50869 = (i__10375__auto___50868 + (1));
i__10375__auto___50868 = G__50869;
continue;
} else {
}
break;
}

var G__50866 = args50864.length;
switch (G__50866) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50864.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__50863_SHARP_){
return chart.client.select_airport.call(null,sel,p1__50863_SHARP_);
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
var seq__50931 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__50932 = null;
var count__50933 = (0);
var i__50934 = (0);
while(true){
if((i__50934 < count__50933)){
var map__50935 = cljs.core._nth.call(null,chunk__50932,i__50934);
var map__50935__$1 = ((((!((map__50935 == null)))?((((map__50935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50935):map__50935);
var ins = map__50935__$1;
var instruct = cljs.core.get.call(null,map__50935__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__50937_50991 = cljs.core._EQ_;
var expr__50938_50992 = instruct;
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__50938_50992))){
var map__50940_50993 = ins;
var map__50940_50994__$1 = ((((!((map__50940_50993 == null)))?((((map__50940_50993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50940_50993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50940_50993):map__50940_50993);
var id_50995 = cljs.core.get.call(null,map__50940_50994__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_50996 = cljs.core.get.call(null,map__50940_50994__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_50995,vehicle_50996);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__50938_50992))){
var map__50942_50997 = ins;
var map__50942_50998__$1 = ((((!((map__50942_50997 == null)))?((((map__50942_50997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50942_50997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50942_50997):map__50942_50997);
var id_50999 = cljs.core.get.call(null,map__50942_50998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_50999);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__50938_50992))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__50938_50992))){
var map__50944_51000 = ins;
var map__50944_51001__$1 = ((((!((map__50944_51000 == null)))?((((map__50944_51000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50944_51000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50944_51000):map__50944_51000);
var id_51002 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_51003 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_51004 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_51005 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_51006 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_51007 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_51008 = cljs.core.get.call(null,map__50944_51001__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_51002)){
chart.client.popup.call(null,id_51002,html_51005,time_51006);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = width_51007;
if(cljs.core.truth_(and__9249__auto__)){
var and__9249__auto____$1 = height_51008;
if(cljs.core.truth_(and__9249__auto____$1)){
var and__9249__auto____$2 = lat_51003;
if(cljs.core.truth_(and__9249__auto____$2)){
return lon_51004;
} else {
return and__9249__auto____$2;
}
} else {
return and__9249__auto____$1;
}
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_51003,lon_51004,html_51005,time_51006,width_51007,height_51008);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = lat_51003;
if(cljs.core.truth_(and__9249__auto__)){
return lon_51004;
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_51003,lon_51004,html_51005,time_51006);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__50938_50992))){
var map__50946_51009 = ins;
var map__50946_51010__$1 = ((((!((map__50946_51009 == null)))?((((map__50946_51009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50946_51009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50946_51009):map__50946_51009);
var id_51011 = cljs.core.get.call(null,map__50946_51010__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_51012 = cljs.core.get.call(null,map__50946_51010__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_51013 = cljs.core.get.call(null,map__50946_51010__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_51014 = cljs.core.get.call(null,map__50946_51010__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_51011,points_51012,options_51013,time_51014);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__50938_50992))){
var map__50948_51015 = ins;
var map__50948_51016__$1 = ((((!((map__50948_51015 == null)))?((((map__50948_51015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50948_51015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50948_51015):map__50948_51015);
var coord_51017 = cljs.core.get.call(null,map__50948_51016__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_51018 = cljs.core.get.call(null,map__50948_51016__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_51019 = cljs.core.get.call(null,map__50948_51016__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_51017,zoom_51018,lock_51019);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__50938_50992))){
var map__50950_51020 = ins;
var map__50950_51021__$1 = ((((!((map__50950_51020 == null)))?((((map__50950_51020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50950_51020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50950_51020):map__50950_51020);
var iname_51022 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_51023 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_51024 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_51025 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_51026 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_51027 = cljs.core.get.call(null,map__50950_51021__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_51022,tip_51023,lat_51024,lon_51025,feature_51026,url_ico_51027);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__50938_50992))){
var map__50952_51028 = ins;
var map__50952_51029__$1 = ((((!((map__50952_51028 == null)))?((((map__50952_51028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50952_51028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50952_51028):map__50952_51028);
var iname_51030 = cljs.core.get.call(null,map__50952_51029__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_51030);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__50938_50992))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__50938_50992))){
var map__50954_51031 = ins;
var map__50954_51032__$1 = ((((!((map__50954_51031 == null)))?((((map__50954_51031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50954_51031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50954_51031):map__50954_51031);
var ids_51033 = cljs.core.get.call(null,map__50954_51032__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_51034 = cljs.core.get.call(null,map__50954_51032__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_51033,options_51034);
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__50938_50992))){
var map__50956_51035 = ins;
var map__50956_51036__$1 = ((((!((map__50956_51035 == null)))?((((map__50956_51035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50956_51035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50956_51035):map__50956_51035);
var question_51037 = cljs.core.get.call(null,map__50956_51036__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_51038 = cljs.core.get.call(null,map__50956_51036__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__50958_51039 = cljs.core._EQ_;
var expr__50959_51040 = question_51037;
if(cljs.core.truth_(pred__50958_51039.call(null,"city",expr__50959_51040))){
chart.client.select_city.call(null,param_51038);
} else {
if(cljs.core.truth_(pred__50958_51039.call(null,"airport",expr__50959_51040))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50959_51040)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__50937_50991.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__50938_50992))){
var map__50961_51041 = ins;
var map__50961_51042__$1 = ((((!((map__50961_51041 == null)))?((((map__50961_51041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50961_51041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50961_51041):map__50961_51041);
var callsign_51043 = cljs.core.get.call(null,map__50961_51042__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_51043;
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
}

var G__51044 = seq__50931;
var G__51045 = chunk__50932;
var G__51046 = count__50933;
var G__51047 = (i__50934 + (1));
seq__50931 = G__51044;
chunk__50932 = G__51045;
count__50933 = G__51046;
i__50934 = G__51047;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50931);
if(temp__4657__auto__){
var seq__50931__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50931__$1)){
var c__10080__auto__ = cljs.core.chunk_first.call(null,seq__50931__$1);
var G__51048 = cljs.core.chunk_rest.call(null,seq__50931__$1);
var G__51049 = c__10080__auto__;
var G__51050 = cljs.core.count.call(null,c__10080__auto__);
var G__51051 = (0);
seq__50931 = G__51048;
chunk__50932 = G__51049;
count__50933 = G__51050;
i__50934 = G__51051;
continue;
} else {
var map__50963 = cljs.core.first.call(null,seq__50931__$1);
var map__50963__$1 = ((((!((map__50963 == null)))?((((map__50963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50963):map__50963);
var ins = map__50963__$1;
var instruct = cljs.core.get.call(null,map__50963__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__50965_51052 = cljs.core._EQ_;
var expr__50966_51053 = instruct;
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__50966_51053))){
var map__50968_51054 = ins;
var map__50968_51055__$1 = ((((!((map__50968_51054 == null)))?((((map__50968_51054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50968_51054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50968_51054):map__50968_51054);
var id_51056 = cljs.core.get.call(null,map__50968_51055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_51057 = cljs.core.get.call(null,map__50968_51055__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_51056,vehicle_51057);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__50966_51053))){
var map__50970_51058 = ins;
var map__50970_51059__$1 = ((((!((map__50970_51058 == null)))?((((map__50970_51058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50970_51058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50970_51058):map__50970_51058);
var id_51060 = cljs.core.get.call(null,map__50970_51059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_51060);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__50966_51053))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__50966_51053))){
var map__50972_51061 = ins;
var map__50972_51062__$1 = ((((!((map__50972_51061 == null)))?((((map__50972_51061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50972_51061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50972_51061):map__50972_51061);
var id_51063 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_51064 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_51065 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_51066 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_51067 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_51068 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_51069 = cljs.core.get.call(null,map__50972_51062__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_51063)){
chart.client.popup.call(null,id_51063,html_51066,time_51067);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = width_51068;
if(cljs.core.truth_(and__9249__auto__)){
var and__9249__auto____$1 = height_51069;
if(cljs.core.truth_(and__9249__auto____$1)){
var and__9249__auto____$2 = lat_51064;
if(cljs.core.truth_(and__9249__auto____$2)){
return lon_51065;
} else {
return and__9249__auto____$2;
}
} else {
return and__9249__auto____$1;
}
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_51064,lon_51065,html_51066,time_51067,width_51068,height_51069);
} else {
if(cljs.core.truth_((function (){var and__9249__auto__ = lat_51064;
if(cljs.core.truth_(and__9249__auto__)){
return lon_51065;
} else {
return and__9249__auto__;
}
})())){
chart.client.popup.call(null,lat_51064,lon_51065,html_51066,time_51067);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__50966_51053))){
var map__50974_51070 = ins;
var map__50974_51071__$1 = ((((!((map__50974_51070 == null)))?((((map__50974_51070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50974_51070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50974_51070):map__50974_51070);
var id_51072 = cljs.core.get.call(null,map__50974_51071__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_51073 = cljs.core.get.call(null,map__50974_51071__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_51074 = cljs.core.get.call(null,map__50974_51071__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_51075 = cljs.core.get.call(null,map__50974_51071__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_51072,points_51073,options_51074,time_51075);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__50966_51053))){
var map__50976_51076 = ins;
var map__50976_51077__$1 = ((((!((map__50976_51076 == null)))?((((map__50976_51076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50976_51076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50976_51076):map__50976_51076);
var coord_51078 = cljs.core.get.call(null,map__50976_51077__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_51079 = cljs.core.get.call(null,map__50976_51077__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_51080 = cljs.core.get.call(null,map__50976_51077__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_51078,zoom_51079,lock_51080);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__50966_51053))){
var map__50978_51081 = ins;
var map__50978_51082__$1 = ((((!((map__50978_51081 == null)))?((((map__50978_51081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50978_51081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50978_51081):map__50978_51081);
var iname_51083 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_51084 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_51085 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_51086 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_51087 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_51088 = cljs.core.get.call(null,map__50978_51082__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_51083,tip_51084,lat_51085,lon_51086,feature_51087,url_ico_51088);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__50966_51053))){
var map__50980_51089 = ins;
var map__50980_51090__$1 = ((((!((map__50980_51089 == null)))?((((map__50980_51089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50980_51089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50980_51089):map__50980_51089);
var iname_51091 = cljs.core.get.call(null,map__50980_51090__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_51091);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__50966_51053))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__50966_51053))){
var map__50982_51092 = ins;
var map__50982_51093__$1 = ((((!((map__50982_51092 == null)))?((((map__50982_51092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50982_51092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50982_51092):map__50982_51092);
var ids_51094 = cljs.core.get.call(null,map__50982_51093__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_51095 = cljs.core.get.call(null,map__50982_51093__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_51094,options_51095);
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__50966_51053))){
var map__50984_51096 = ins;
var map__50984_51097__$1 = ((((!((map__50984_51096 == null)))?((((map__50984_51096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50984_51096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50984_51096):map__50984_51096);
var question_51098 = cljs.core.get.call(null,map__50984_51097__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_51099 = cljs.core.get.call(null,map__50984_51097__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__50986_51100 = cljs.core._EQ_;
var expr__50987_51101 = question_51098;
if(cljs.core.truth_(pred__50986_51100.call(null,"city",expr__50987_51101))){
chart.client.select_city.call(null,param_51099);
} else {
if(cljs.core.truth_(pred__50986_51100.call(null,"airport",expr__50987_51101))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50987_51101)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__50965_51052.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__50966_51053))){
var map__50989_51102 = ins;
var map__50989_51103__$1 = ((((!((map__50989_51102 == null)))?((((map__50989_51102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50989_51102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50989_51102):map__50989_51102);
var callsign_51104 = cljs.core.get.call(null,map__50989_51103__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_51104;
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
}

var G__51105 = cljs.core.next.call(null,seq__50931__$1);
var G__51106 = null;
var G__51107 = (0);
var G__51108 = (0);
seq__50931 = G__51105;
chunk__50932 = G__51106;
count__50933 = G__51107;
i__50934 = G__51108;
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
var args51110 = [];
var len__10374__auto___51113 = arguments.length;
var i__10375__auto___51114 = (0);
while(true){
if((i__10375__auto___51114 < len__10374__auto___51113)){
args51110.push((arguments[i__10375__auto___51114]));

var G__51115 = (i__10375__auto___51114 + (1));
i__10375__auto___51114 = G__51115;
continue;
} else {
}
break;
}

var G__51112 = args51110.length;
switch (G__51112) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51110.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__51109_SHARP_){
return chart.client.move_to.call(null,sel,p1__51109_SHARP_);
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
var args51121 = [];
var len__10374__auto___51124 = arguments.length;
var i__10375__auto___51125 = (0);
while(true){
if((i__10375__auto___51125 < len__10374__auto___51124)){
args51121.push((arguments[i__10375__auto___51125]));

var G__51126 = (i__10375__auto___51125 + (1));
i__10375__auto___51125 = G__51126;
continue;
} else {
}
break;
}

var G__51123 = args51121.length;
switch (G__51123) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51121.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__51117_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__51117_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__51118_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__51118_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__51119_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__51119_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__51120_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__51120_SHARP_);
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
var args51131 = [];
var len__10374__auto___51134 = arguments.length;
var i__10375__auto___51135 = (0);
while(true){
if((i__10375__auto___51135 < len__10374__auto___51134)){
args51131.push((arguments[i__10375__auto___51135]));

var G__51136 = (i__10375__auto___51135 + (1));
i__10375__auto___51135 = G__51136;
continue;
} else {
}
break;
}

var G__51133 = args51131.length;
switch (G__51133) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51131.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__51128_SHARP_){
return chart.client.question.call(null,sel,p1__51128_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__51129_SHARP_){
return chart.client.question.call(null,pred,sel,p1__51129_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__51130_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__51130_SHARP_);
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
var pred__51141_51144 = cljs.core._EQ_;
var expr__51142_51145 = cmd;
if(cljs.core.truth_(pred__51141_51144.call(null,"commands",expr__51142_51145))){
} else {
if(cljs.core.truth_(pred__51141_51144.call(null,"watch-visible",expr__51142_51145))){
var bnd_51146 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_51147 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_51146.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_51146.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_51146.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_51146.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_51147)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__51141_51144.call(null,"move-to",expr__51142_51145))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__51141_51144.call(null,"schedule",expr__51142_51145))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__51141_51144.call(null,"question",expr__51142_51145))){
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
chart.client.mouse_click = (function chart$client$mouse_click(lat,lng){
var htm = ((cljs.core._EQ_.call(null,chart.client.ONBOARD,"MANUAL"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("MANUAL instantly goes to this location?<br><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<input type='button' \n\t value='Go!'\n\t style='color:blue;display:block;margin:auto;'\n\t onclick='chart.client.mangoinst("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")' >")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Now on board "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.ONBOARD)].join(''));
return chart.client.popup.call(null,lat,lng,htm,(8000),(240),(100));
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
}catch (e51149){if((e51149 instanceof Error)){
var e_51150 = e51149;
cljs.core.println.call(null,e_51150);
} else {
throw e51149;

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

m.on("click",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.client.mouse_click.call(null,e.latlng.lat,e.latlng.lng);
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
chart.client.mangoinst = (function chart$client$mangoinst(lat,lon){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("goto?lat="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&lon="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&from=CHART")].join(''));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map