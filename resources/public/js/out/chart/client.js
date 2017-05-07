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
var map__36806 = response;
var map__36806__$1 = ((((!((map__36806 == null)))?((((map__36806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36806):map__36806);
var status = cljs.core.get.call(null,map__36806__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__36806__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_36814 = cljs.core.deref.call(null,vmp);
var mrk_36815 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_36814);
var vec__36811_36816 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_36814);
var lat_36817 = cljs.core.nth.call(null,vec__36811_36816,(0),null);
var lon_36818 = cljs.core.nth.call(null,vec__36811_36816,(1),null);
var pos_36819 = (new L.LatLng(lat_36817,lon_36818));
mrk_36815.setLatLng(pos_36819);

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
var seq__36824_36828 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__36825_36829 = null;
var count__36826_36830 = (0);
var i__36827_36831 = (0);
while(true){
if((i__36827_36831 < count__36826_36830)){
var veh_36832 = cljs.core._nth.call(null,chunk__36825_36829,i__36827_36831);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_36832)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_36832)));

var G__36833 = seq__36824_36828;
var G__36834 = chunk__36825_36829;
var G__36835 = count__36826_36830;
var G__36836 = (i__36827_36831 + (1));
seq__36824_36828 = G__36833;
chunk__36825_36829 = G__36834;
count__36826_36830 = G__36835;
i__36827_36831 = G__36836;
continue;
} else {
var temp__4657__auto___36837 = cljs.core.seq.call(null,seq__36824_36828);
if(temp__4657__auto___36837){
var seq__36824_36838__$1 = temp__4657__auto___36837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36824_36838__$1)){
var c__9736__auto___36839 = cljs.core.chunk_first.call(null,seq__36824_36838__$1);
var G__36840 = cljs.core.chunk_rest.call(null,seq__36824_36838__$1);
var G__36841 = c__9736__auto___36839;
var G__36842 = cljs.core.count.call(null,c__9736__auto___36839);
var G__36843 = (0);
seq__36824_36828 = G__36840;
chunk__36825_36829 = G__36841;
count__36826_36830 = G__36842;
i__36827_36831 = G__36843;
continue;
} else {
var veh_36844 = cljs.core.first.call(null,seq__36824_36838__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_36844)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_36844)));

var G__36845 = cljs.core.next.call(null,seq__36824_36838__$1);
var G__36846 = null;
var G__36847 = (0);
var G__36848 = (0);
seq__36824_36828 = G__36845;
chunk__36825_36829 = G__36846;
count__36826_36830 = G__36847;
i__36827_36831 = G__36848;
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

var vec__36853 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__36853,(0),null);
var lon = cljs.core.nth.call(null,vec__36853,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__36853,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__36853,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__36849_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__36849_SHARP_))),e.target);
});})(vec__36853,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__36853,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__8917__auto__ = url_ico;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
var or__8917__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8917__auto____$1)){
return or__8917__auto____$1;
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
var seq__36860_36864 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__36861_36865 = null;
var count__36862_36866 = (0);
var i__36863_36867 = (0);
while(true){
if((i__36863_36867 < count__36862_36866)){
var mrk_36868 = cljs.core._nth.call(null,chunk__36861_36865,i__36863_36867);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_36868);

var G__36869 = seq__36860_36864;
var G__36870 = chunk__36861_36865;
var G__36871 = count__36862_36866;
var G__36872 = (i__36863_36867 + (1));
seq__36860_36864 = G__36869;
chunk__36861_36865 = G__36870;
count__36862_36866 = G__36871;
i__36863_36867 = G__36872;
continue;
} else {
var temp__4657__auto___36873 = cljs.core.seq.call(null,seq__36860_36864);
if(temp__4657__auto___36873){
var seq__36860_36874__$1 = temp__4657__auto___36873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36860_36874__$1)){
var c__9736__auto___36875 = cljs.core.chunk_first.call(null,seq__36860_36874__$1);
var G__36876 = cljs.core.chunk_rest.call(null,seq__36860_36874__$1);
var G__36877 = c__9736__auto___36875;
var G__36878 = cljs.core.count.call(null,c__9736__auto___36875);
var G__36879 = (0);
seq__36860_36864 = G__36876;
chunk__36861_36865 = G__36877;
count__36862_36866 = G__36878;
i__36863_36867 = G__36879;
continue;
} else {
var mrk_36880 = cljs.core.first.call(null,seq__36860_36874__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_36880);

var G__36881 = cljs.core.next.call(null,seq__36860_36874__$1);
var G__36882 = null;
var G__36883 = (0);
var G__36884 = (0);
seq__36860_36864 = G__36881;
chunk__36861_36865 = G__36882;
count__36862_36866 = G__36883;
i__36863_36867 = G__36884;
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
var args36885 = [];
var len__10030__auto___36891 = arguments.length;
var i__10031__auto___36892 = (0);
while(true){
if((i__10031__auto___36892 < len__10030__auto___36891)){
args36885.push((arguments[i__10031__auto___36892]));

var G__36893 = (i__10031__auto___36892 + (1));
i__10031__auto___36892 = G__36893;
continue;
} else {
}
break;
}

var G__36887 = args36885.length;
switch (G__36887) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36885.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__36888 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__36888,(0),null);
var lon = cljs.core.nth.call(null,vec__36888,(1),null);
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
return (function (p1__36895_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__36895_SHARP_),cljs.core.second.call(null,p1__36895_SHARP_)));
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
var vec__36899 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__36899,(0),null);
var s = cljs.core.nth.call(null,vec__36899,(1),null);
var w = cljs.core.nth.call(null,vec__36899,(2),null);
var e = cljs.core.nth.call(null,vec__36899,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__36899,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__36899,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__36902,zoom,lock){
var vec__36906 = p__36902;
var lat = cljs.core.nth.call(null,vec__36906,(0),null);
var lon = cljs.core.nth.call(null,vec__36906,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__8917__auto__ = zoom;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__36909_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__36909_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__36910_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__36910_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__36911_SHARP_){
return p1__36911_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__36912,ops){
var vec__36916 = p__36912;
var id1 = cljs.core.nth.call(null,vec__36916,(0),null);
var id2 = cljs.core.nth.call(null,vec__36916,(1),null);
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
var args36920 = [];
var len__10030__auto___36923 = arguments.length;
var i__10031__auto___36924 = (0);
while(true){
if((i__10031__auto___36924 < len__10030__auto___36923)){
args36920.push((arguments[i__10031__auto___36924]));

var G__36925 = (i__10031__auto___36924 + (1));
i__10031__auto___36924 = G__36925;
continue;
} else {
}
break;
}

var G__36922 = args36920.length;
switch (G__36922) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36920.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__36919_SHARP_){
return chart.client.select_airport.call(null,sel,p1__36919_SHARP_);
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
var seq__36983 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__36984 = null;
var count__36985 = (0);
var i__36986 = (0);
while(true){
if((i__36986 < count__36985)){
var map__36987 = cljs.core._nth.call(null,chunk__36984,i__36986);
var map__36987__$1 = ((((!((map__36987 == null)))?((((map__36987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36987):map__36987);
var ins = map__36987__$1;
var instruct = cljs.core.get.call(null,map__36987__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__36989_37039 = cljs.core._EQ_;
var expr__36990_37040 = instruct;
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__36990_37040))){
var map__36992_37041 = ins;
var map__36992_37042__$1 = ((((!((map__36992_37041 == null)))?((((map__36992_37041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36992_37041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36992_37041):map__36992_37041);
var id_37043 = cljs.core.get.call(null,map__36992_37042__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_37044 = cljs.core.get.call(null,map__36992_37042__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_37043,vehicle_37044);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__36990_37040))){
var map__36994_37045 = ins;
var map__36994_37046__$1 = ((((!((map__36994_37045 == null)))?((((map__36994_37045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36994_37045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36994_37045):map__36994_37045);
var id_37047 = cljs.core.get.call(null,map__36994_37046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_37047);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__36990_37040))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__36990_37040))){
var map__36996_37048 = ins;
var map__36996_37049__$1 = ((((!((map__36996_37048 == null)))?((((map__36996_37048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36996_37048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36996_37048):map__36996_37048);
var id_37050 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_37051 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_37052 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_37053 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_37054 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_37055 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_37056 = cljs.core.get.call(null,map__36996_37049__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_37050)){
chart.client.popup.call(null,id_37050,html_37053,time_37054);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = width_37055;
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = height_37056;
if(cljs.core.truth_(and__8905__auto____$1)){
var and__8905__auto____$2 = lat_37051;
if(cljs.core.truth_(and__8905__auto____$2)){
return lon_37052;
} else {
return and__8905__auto____$2;
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_37051,lon_37052,html_37053,time_37054,width_37055,height_37056);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = lat_37051;
if(cljs.core.truth_(and__8905__auto__)){
return lon_37052;
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_37051,lon_37052,html_37053,time_37054);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__36990_37040))){
var map__36998_37057 = ins;
var map__36998_37058__$1 = ((((!((map__36998_37057 == null)))?((((map__36998_37057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36998_37057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36998_37057):map__36998_37057);
var id_37059 = cljs.core.get.call(null,map__36998_37058__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_37060 = cljs.core.get.call(null,map__36998_37058__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_37061 = cljs.core.get.call(null,map__36998_37058__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_37062 = cljs.core.get.call(null,map__36998_37058__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_37059,points_37060,options_37061,time_37062);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__36990_37040))){
var map__37000_37063 = ins;
var map__37000_37064__$1 = ((((!((map__37000_37063 == null)))?((((map__37000_37063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37000_37063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37000_37063):map__37000_37063);
var coord_37065 = cljs.core.get.call(null,map__37000_37064__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_37066 = cljs.core.get.call(null,map__37000_37064__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_37067 = cljs.core.get.call(null,map__37000_37064__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_37065,zoom_37066,lock_37067);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__36990_37040))){
var map__37002_37068 = ins;
var map__37002_37069__$1 = ((((!((map__37002_37068 == null)))?((((map__37002_37068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37002_37068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37002_37068):map__37002_37068);
var iname_37070 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_37071 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_37072 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_37073 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_37074 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_37075 = cljs.core.get.call(null,map__37002_37069__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_37070,tip_37071,lat_37072,lon_37073,feature_37074,url_ico_37075);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__36990_37040))){
var map__37004_37076 = ins;
var map__37004_37077__$1 = ((((!((map__37004_37076 == null)))?((((map__37004_37076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37004_37076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37004_37076):map__37004_37076);
var iname_37078 = cljs.core.get.call(null,map__37004_37077__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_37078);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__36990_37040))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__36990_37040))){
var map__37006_37079 = ins;
var map__37006_37080__$1 = ((((!((map__37006_37079 == null)))?((((map__37006_37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37006_37079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37006_37079):map__37006_37079);
var ids_37081 = cljs.core.get.call(null,map__37006_37080__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_37082 = cljs.core.get.call(null,map__37006_37080__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_37081,options_37082);
} else {
if(cljs.core.truth_(pred__36989_37039.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__36990_37040))){
var map__37008_37083 = ins;
var map__37008_37084__$1 = ((((!((map__37008_37083 == null)))?((((map__37008_37083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37008_37083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37008_37083):map__37008_37083);
var question_37085 = cljs.core.get.call(null,map__37008_37084__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_37086 = cljs.core.get.call(null,map__37008_37084__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__37010_37087 = cljs.core._EQ_;
var expr__37011_37088 = question_37085;
if(cljs.core.truth_(pred__37010_37087.call(null,"city",expr__37011_37088))){
chart.client.select_city.call(null,param_37086);
} else {
if(cljs.core.truth_(pred__37010_37087.call(null,"airport",expr__37011_37088))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37011_37088)].join('')));
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

var G__37089 = seq__36983;
var G__37090 = chunk__36984;
var G__37091 = count__36985;
var G__37092 = (i__36986 + (1));
seq__36983 = G__37089;
chunk__36984 = G__37090;
count__36985 = G__37091;
i__36986 = G__37092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36983);
if(temp__4657__auto__){
var seq__36983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36983__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__36983__$1);
var G__37093 = cljs.core.chunk_rest.call(null,seq__36983__$1);
var G__37094 = c__9736__auto__;
var G__37095 = cljs.core.count.call(null,c__9736__auto__);
var G__37096 = (0);
seq__36983 = G__37093;
chunk__36984 = G__37094;
count__36985 = G__37095;
i__36986 = G__37096;
continue;
} else {
var map__37013 = cljs.core.first.call(null,seq__36983__$1);
var map__37013__$1 = ((((!((map__37013 == null)))?((((map__37013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37013):map__37013);
var ins = map__37013__$1;
var instruct = cljs.core.get.call(null,map__37013__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__37015_37097 = cljs.core._EQ_;
var expr__37016_37098 = instruct;
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__37016_37098))){
var map__37018_37099 = ins;
var map__37018_37100__$1 = ((((!((map__37018_37099 == null)))?((((map__37018_37099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37018_37099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37018_37099):map__37018_37099);
var id_37101 = cljs.core.get.call(null,map__37018_37100__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_37102 = cljs.core.get.call(null,map__37018_37100__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_37101,vehicle_37102);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__37016_37098))){
var map__37020_37103 = ins;
var map__37020_37104__$1 = ((((!((map__37020_37103 == null)))?((((map__37020_37103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37020_37103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37020_37103):map__37020_37103);
var id_37105 = cljs.core.get.call(null,map__37020_37104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_37105);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__37016_37098))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__37016_37098))){
var map__37022_37106 = ins;
var map__37022_37107__$1 = ((((!((map__37022_37106 == null)))?((((map__37022_37106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37022_37106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37022_37106):map__37022_37106);
var id_37108 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_37109 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_37110 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_37111 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_37112 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_37113 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_37114 = cljs.core.get.call(null,map__37022_37107__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_37108)){
chart.client.popup.call(null,id_37108,html_37111,time_37112);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = width_37113;
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = height_37114;
if(cljs.core.truth_(and__8905__auto____$1)){
var and__8905__auto____$2 = lat_37109;
if(cljs.core.truth_(and__8905__auto____$2)){
return lon_37110;
} else {
return and__8905__auto____$2;
}
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_37109,lon_37110,html_37111,time_37112,width_37113,height_37114);
} else {
if(cljs.core.truth_((function (){var and__8905__auto__ = lat_37109;
if(cljs.core.truth_(and__8905__auto__)){
return lon_37110;
} else {
return and__8905__auto__;
}
})())){
chart.client.popup.call(null,lat_37109,lon_37110,html_37111,time_37112);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__37016_37098))){
var map__37024_37115 = ins;
var map__37024_37116__$1 = ((((!((map__37024_37115 == null)))?((((map__37024_37115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37024_37115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024_37115):map__37024_37115);
var id_37117 = cljs.core.get.call(null,map__37024_37116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_37118 = cljs.core.get.call(null,map__37024_37116__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_37119 = cljs.core.get.call(null,map__37024_37116__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_37120 = cljs.core.get.call(null,map__37024_37116__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_37117,points_37118,options_37119,time_37120);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__37016_37098))){
var map__37026_37121 = ins;
var map__37026_37122__$1 = ((((!((map__37026_37121 == null)))?((((map__37026_37121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37026_37121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37026_37121):map__37026_37121);
var coord_37123 = cljs.core.get.call(null,map__37026_37122__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_37124 = cljs.core.get.call(null,map__37026_37122__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_37125 = cljs.core.get.call(null,map__37026_37122__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_37123,zoom_37124,lock_37125);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__37016_37098))){
var map__37028_37126 = ins;
var map__37028_37127__$1 = ((((!((map__37028_37126 == null)))?((((map__37028_37126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37028_37126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37028_37126):map__37028_37126);
var iname_37128 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_37129 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_37130 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_37131 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_37132 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_37133 = cljs.core.get.call(null,map__37028_37127__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_37128,tip_37129,lat_37130,lon_37131,feature_37132,url_ico_37133);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__37016_37098))){
var map__37030_37134 = ins;
var map__37030_37135__$1 = ((((!((map__37030_37134 == null)))?((((map__37030_37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030_37134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37030_37134):map__37030_37134);
var iname_37136 = cljs.core.get.call(null,map__37030_37135__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_37136);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__37016_37098))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__37016_37098))){
var map__37032_37137 = ins;
var map__37032_37138__$1 = ((((!((map__37032_37137 == null)))?((((map__37032_37137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37032_37137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37032_37137):map__37032_37137);
var ids_37139 = cljs.core.get.call(null,map__37032_37138__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_37140 = cljs.core.get.call(null,map__37032_37138__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_37139,options_37140);
} else {
if(cljs.core.truth_(pred__37015_37097.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__37016_37098))){
var map__37034_37141 = ins;
var map__37034_37142__$1 = ((((!((map__37034_37141 == null)))?((((map__37034_37141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37034_37141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37034_37141):map__37034_37141);
var question_37143 = cljs.core.get.call(null,map__37034_37142__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_37144 = cljs.core.get.call(null,map__37034_37142__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__37036_37145 = cljs.core._EQ_;
var expr__37037_37146 = question_37143;
if(cljs.core.truth_(pred__37036_37145.call(null,"city",expr__37037_37146))){
chart.client.select_city.call(null,param_37144);
} else {
if(cljs.core.truth_(pred__37036_37145.call(null,"airport",expr__37037_37146))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37037_37146)].join('')));
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

var G__37147 = cljs.core.next.call(null,seq__36983__$1);
var G__37148 = null;
var G__37149 = (0);
var G__37150 = (0);
seq__36983 = G__37147;
chunk__36984 = G__37148;
count__36985 = G__37149;
i__36986 = G__37150;
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
var args37152 = [];
var len__10030__auto___37155 = arguments.length;
var i__10031__auto___37156 = (0);
while(true){
if((i__10031__auto___37156 < len__10030__auto___37155)){
args37152.push((arguments[i__10031__auto___37156]));

var G__37157 = (i__10031__auto___37156 + (1));
i__10031__auto___37156 = G__37157;
continue;
} else {
}
break;
}

var G__37154 = args37152.length;
switch (G__37154) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37152.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__37151_SHARP_){
return chart.client.move_to.call(null,sel,p1__37151_SHARP_);
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
var args37163 = [];
var len__10030__auto___37166 = arguments.length;
var i__10031__auto___37167 = (0);
while(true){
if((i__10031__auto___37167 < len__10030__auto___37166)){
args37163.push((arguments[i__10031__auto___37167]));

var G__37168 = (i__10031__auto___37167 + (1));
i__10031__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var G__37165 = args37163.length;
switch (G__37165) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37163.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__37159_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__37159_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__37160_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__37160_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__37161_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__37161_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__37162_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__37162_SHARP_);
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
var args37173 = [];
var len__10030__auto___37176 = arguments.length;
var i__10031__auto___37177 = (0);
while(true){
if((i__10031__auto___37177 < len__10030__auto___37176)){
args37173.push((arguments[i__10031__auto___37177]));

var G__37178 = (i__10031__auto___37177 + (1));
i__10031__auto___37177 = G__37178;
continue;
} else {
}
break;
}

var G__37175 = args37173.length;
switch (G__37175) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37173.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__37170_SHARP_){
return chart.client.question.call(null,sel,p1__37170_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__37171_SHARP_){
return chart.client.question.call(null,pred,sel,p1__37171_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__37172_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__37172_SHARP_);
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
var pred__37183_37186 = cljs.core._EQ_;
var expr__37184_37187 = cmd;
if(cljs.core.truth_(pred__37183_37186.call(null,"commands",expr__37184_37187))){
} else {
if(cljs.core.truth_(pred__37183_37186.call(null,"watch-visible",expr__37184_37187))){
var bnd_37188 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_37189 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_37188.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_37188.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_37188.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_37188.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_37189)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__37183_37186.call(null,"move-to",expr__37184_37187))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__37183_37186.call(null,"schedule",expr__37184_37187))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__37183_37186.call(null,"question",expr__37184_37187))){
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
}catch (e37191){if((e37191 instanceof Error)){
var e_37192 = e37191;
cljs.core.println.call(null,e_37192);
} else {
throw e37191;

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