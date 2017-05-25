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
var map__32983 = response;
var map__32983__$1 = ((((!((map__32983 == null)))?((((map__32983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32983):map__32983);
var status = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_32991 = cljs.core.deref.call(null,vmp);
var mrk_32992 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_32991);
var vec__32988_32993 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_32991);
var lat_32994 = cljs.core.nth.call(null,vec__32988_32993,(0),null);
var lon_32995 = cljs.core.nth.call(null,vec__32988_32993,(1),null);
var pos_32996 = (new L.LatLng(lat_32994,lon_32995));
mrk_32992.setLatLng(pos_32996);

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
var seq__33001_33005 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__33002_33006 = null;
var count__33003_33007 = (0);
var i__33004_33008 = (0);
while(true){
if((i__33004_33008 < count__33003_33007)){
var veh_33009 = cljs.core._nth.call(null,chunk__33002_33006,i__33004_33008);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33009)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33009)));

var G__33010 = seq__33001_33005;
var G__33011 = chunk__33002_33006;
var G__33012 = count__33003_33007;
var G__33013 = (i__33004_33008 + (1));
seq__33001_33005 = G__33010;
chunk__33002_33006 = G__33011;
count__33003_33007 = G__33012;
i__33004_33008 = G__33013;
continue;
} else {
var temp__4657__auto___33014 = cljs.core.seq.call(null,seq__33001_33005);
if(temp__4657__auto___33014){
var seq__33001_33015__$1 = temp__4657__auto___33014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33001_33015__$1)){
var c__22771__auto___33016 = cljs.core.chunk_first.call(null,seq__33001_33015__$1);
var G__33017 = cljs.core.chunk_rest.call(null,seq__33001_33015__$1);
var G__33018 = c__22771__auto___33016;
var G__33019 = cljs.core.count.call(null,c__22771__auto___33016);
var G__33020 = (0);
seq__33001_33005 = G__33017;
chunk__33002_33006 = G__33018;
count__33003_33007 = G__33019;
i__33004_33008 = G__33020;
continue;
} else {
var veh_33021 = cljs.core.first.call(null,seq__33001_33015__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33021)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33021)));

var G__33022 = cljs.core.next.call(null,seq__33001_33015__$1);
var G__33023 = null;
var G__33024 = (0);
var G__33025 = (0);
seq__33001_33005 = G__33022;
chunk__33002_33006 = G__33023;
count__33003_33007 = G__33024;
i__33004_33008 = G__33025;
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

var vec__33030 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__33030,(0),null);
var lon = cljs.core.nth.call(null,vec__33030,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__33030,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__33030,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__33026_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__33026_SHARP_))),e.target);
});})(vec__33030,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__33030,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__21952__auto__ = url_ico;
if(cljs.core.truth_(or__21952__auto__)){
return or__21952__auto__;
} else {
var or__21952__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__21952__auto____$1)){
return or__21952__auto____$1;
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
var seq__33037_33041 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__33038_33042 = null;
var count__33039_33043 = (0);
var i__33040_33044 = (0);
while(true){
if((i__33040_33044 < count__33039_33043)){
var mrk_33045 = cljs.core._nth.call(null,chunk__33038_33042,i__33040_33044);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_33045);

var G__33046 = seq__33037_33041;
var G__33047 = chunk__33038_33042;
var G__33048 = count__33039_33043;
var G__33049 = (i__33040_33044 + (1));
seq__33037_33041 = G__33046;
chunk__33038_33042 = G__33047;
count__33039_33043 = G__33048;
i__33040_33044 = G__33049;
continue;
} else {
var temp__4657__auto___33050 = cljs.core.seq.call(null,seq__33037_33041);
if(temp__4657__auto___33050){
var seq__33037_33051__$1 = temp__4657__auto___33050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33037_33051__$1)){
var c__22771__auto___33052 = cljs.core.chunk_first.call(null,seq__33037_33051__$1);
var G__33053 = cljs.core.chunk_rest.call(null,seq__33037_33051__$1);
var G__33054 = c__22771__auto___33052;
var G__33055 = cljs.core.count.call(null,c__22771__auto___33052);
var G__33056 = (0);
seq__33037_33041 = G__33053;
chunk__33038_33042 = G__33054;
count__33039_33043 = G__33055;
i__33040_33044 = G__33056;
continue;
} else {
var mrk_33057 = cljs.core.first.call(null,seq__33037_33051__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_33057);

var G__33058 = cljs.core.next.call(null,seq__33037_33051__$1);
var G__33059 = null;
var G__33060 = (0);
var G__33061 = (0);
seq__33037_33041 = G__33058;
chunk__33038_33042 = G__33059;
count__33039_33043 = G__33060;
i__33040_33044 = G__33061;
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
var args33062 = [];
var len__23065__auto___33068 = arguments.length;
var i__23066__auto___33069 = (0);
while(true){
if((i__23066__auto___33069 < len__23065__auto___33068)){
args33062.push((arguments[i__23066__auto___33069]));

var G__33070 = (i__23066__auto___33069 + (1));
i__23066__auto___33069 = G__33070;
continue;
} else {
}
break;
}

var G__33064 = args33062.length;
switch (G__33064) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33062.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__33065 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__33065,(0),null);
var lon = cljs.core.nth.call(null,vec__33065,(1),null);
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
return (function (p1__33072_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__33072_SHARP_),cljs.core.second.call(null,p1__33072_SHARP_)));
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
var vec__33076 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__33076,(0),null);
var s = cljs.core.nth.call(null,vec__33076,(1),null);
var w = cljs.core.nth.call(null,vec__33076,(2),null);
var e = cljs.core.nth.call(null,vec__33076,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__33076,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__33076,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__33079,zoom,lock){
var vec__33083 = p__33079;
var lat = cljs.core.nth.call(null,vec__33083,(0),null);
var lon = cljs.core.nth.call(null,vec__33083,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__21952__auto__ = zoom;
if(cljs.core.truth_(or__21952__auto__)){
return or__21952__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__33086_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__33086_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__33087_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__33087_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__33088_SHARP_){
return p1__33088_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__33089,ops){
var vec__33093 = p__33089;
var id1 = cljs.core.nth.call(null,vec__33093,(0),null);
var id2 = cljs.core.nth.call(null,vec__33093,(1),null);
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
var args33097 = [];
var len__23065__auto___33100 = arguments.length;
var i__23066__auto___33101 = (0);
while(true){
if((i__23066__auto___33101 < len__23065__auto___33100)){
args33097.push((arguments[i__23066__auto___33101]));

var G__33102 = (i__23066__auto___33101 + (1));
i__23066__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var G__33099 = args33097.length;
switch (G__33099) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33097.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33096_SHARP_){
return chart.client.select_airport.call(null,sel,p1__33096_SHARP_);
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
var seq__33160 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__33161 = null;
var count__33162 = (0);
var i__33163 = (0);
while(true){
if((i__33163 < count__33162)){
var map__33164 = cljs.core._nth.call(null,chunk__33161,i__33163);
var map__33164__$1 = ((((!((map__33164 == null)))?((((map__33164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33164):map__33164);
var ins = map__33164__$1;
var instruct = cljs.core.get.call(null,map__33164__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33166_33216 = cljs.core._EQ_;
var expr__33167_33217 = instruct;
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33167_33217))){
var map__33169_33218 = ins;
var map__33169_33219__$1 = ((((!((map__33169_33218 == null)))?((((map__33169_33218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33169_33218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169_33218):map__33169_33218);
var id_33220 = cljs.core.get.call(null,map__33169_33219__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33221 = cljs.core.get.call(null,map__33169_33219__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33220,vehicle_33221);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33167_33217))){
var map__33171_33222 = ins;
var map__33171_33223__$1 = ((((!((map__33171_33222 == null)))?((((map__33171_33222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33171_33222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33171_33222):map__33171_33222);
var id_33224 = cljs.core.get.call(null,map__33171_33223__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33224);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33167_33217))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33167_33217))){
var map__33173_33225 = ins;
var map__33173_33226__$1 = ((((!((map__33173_33225 == null)))?((((map__33173_33225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33173_33225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33173_33225):map__33173_33225);
var id_33227 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33228 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33229 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33230 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33231 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_33232 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_33233 = cljs.core.get.call(null,map__33173_33226__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_33227)){
chart.client.popup.call(null,id_33227,html_33230,time_33231);
} else {
if(cljs.core.truth_((function (){var and__21940__auto__ = width_33232;
if(cljs.core.truth_(and__21940__auto__)){
var and__21940__auto____$1 = height_33233;
if(cljs.core.truth_(and__21940__auto____$1)){
var and__21940__auto____$2 = lat_33228;
if(cljs.core.truth_(and__21940__auto____$2)){
return lon_33229;
} else {
return and__21940__auto____$2;
}
} else {
return and__21940__auto____$1;
}
} else {
return and__21940__auto__;
}
})())){
chart.client.popup.call(null,lat_33228,lon_33229,html_33230,time_33231,width_33232,height_33233);
} else {
if(cljs.core.truth_((function (){var and__21940__auto__ = lat_33228;
if(cljs.core.truth_(and__21940__auto__)){
return lon_33229;
} else {
return and__21940__auto__;
}
})())){
chart.client.popup.call(null,lat_33228,lon_33229,html_33230,time_33231);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33167_33217))){
var map__33175_33234 = ins;
var map__33175_33235__$1 = ((((!((map__33175_33234 == null)))?((((map__33175_33234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33175_33234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33175_33234):map__33175_33234);
var id_33236 = cljs.core.get.call(null,map__33175_33235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33237 = cljs.core.get.call(null,map__33175_33235__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33238 = cljs.core.get.call(null,map__33175_33235__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33239 = cljs.core.get.call(null,map__33175_33235__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33236,points_33237,options_33238,time_33239);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33167_33217))){
var map__33177_33240 = ins;
var map__33177_33241__$1 = ((((!((map__33177_33240 == null)))?((((map__33177_33240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33177_33240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33177_33240):map__33177_33240);
var coord_33242 = cljs.core.get.call(null,map__33177_33241__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_33243 = cljs.core.get.call(null,map__33177_33241__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_33244 = cljs.core.get.call(null,map__33177_33241__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_33242,zoom_33243,lock_33244);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__33167_33217))){
var map__33179_33245 = ins;
var map__33179_33246__$1 = ((((!((map__33179_33245 == null)))?((((map__33179_33245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33179_33245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33179_33245):map__33179_33245);
var iname_33247 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_33248 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_33249 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33250 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_33251 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_33252 = cljs.core.get.call(null,map__33179_33246__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_33247,tip_33248,lat_33249,lon_33250,feature_33251,url_ico_33252);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__33167_33217))){
var map__33181_33253 = ins;
var map__33181_33254__$1 = ((((!((map__33181_33253 == null)))?((((map__33181_33253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33181_33253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33181_33253):map__33181_33253);
var iname_33255 = cljs.core.get.call(null,map__33181_33254__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_33255);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__33167_33217))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__33167_33217))){
var map__33183_33256 = ins;
var map__33183_33257__$1 = ((((!((map__33183_33256 == null)))?((((map__33183_33256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33183_33256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33183_33256):map__33183_33256);
var ids_33258 = cljs.core.get.call(null,map__33183_33257__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_33259 = cljs.core.get.call(null,map__33183_33257__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_33258,options_33259);
} else {
if(cljs.core.truth_(pred__33166_33216.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__33167_33217))){
var map__33185_33260 = ins;
var map__33185_33261__$1 = ((((!((map__33185_33260 == null)))?((((map__33185_33260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33185_33260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33185_33260):map__33185_33260);
var question_33262 = cljs.core.get.call(null,map__33185_33261__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_33263 = cljs.core.get.call(null,map__33185_33261__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__33187_33264 = cljs.core._EQ_;
var expr__33188_33265 = question_33262;
if(cljs.core.truth_(pred__33187_33264.call(null,"city",expr__33188_33265))){
chart.client.select_city.call(null,param_33263);
} else {
if(cljs.core.truth_(pred__33187_33264.call(null,"airport",expr__33188_33265))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33188_33265)].join('')));
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

var G__33266 = seq__33160;
var G__33267 = chunk__33161;
var G__33268 = count__33162;
var G__33269 = (i__33163 + (1));
seq__33160 = G__33266;
chunk__33161 = G__33267;
count__33162 = G__33268;
i__33163 = G__33269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33160);
if(temp__4657__auto__){
var seq__33160__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33160__$1)){
var c__22771__auto__ = cljs.core.chunk_first.call(null,seq__33160__$1);
var G__33270 = cljs.core.chunk_rest.call(null,seq__33160__$1);
var G__33271 = c__22771__auto__;
var G__33272 = cljs.core.count.call(null,c__22771__auto__);
var G__33273 = (0);
seq__33160 = G__33270;
chunk__33161 = G__33271;
count__33162 = G__33272;
i__33163 = G__33273;
continue;
} else {
var map__33190 = cljs.core.first.call(null,seq__33160__$1);
var map__33190__$1 = ((((!((map__33190 == null)))?((((map__33190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33190):map__33190);
var ins = map__33190__$1;
var instruct = cljs.core.get.call(null,map__33190__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__33192_33274 = cljs.core._EQ_;
var expr__33193_33275 = instruct;
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__33193_33275))){
var map__33195_33276 = ins;
var map__33195_33277__$1 = ((((!((map__33195_33276 == null)))?((((map__33195_33276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33195_33276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33195_33276):map__33195_33276);
var id_33278 = cljs.core.get.call(null,map__33195_33277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_33279 = cljs.core.get.call(null,map__33195_33277__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_33278,vehicle_33279);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__33193_33275))){
var map__33197_33280 = ins;
var map__33197_33281__$1 = ((((!((map__33197_33280 == null)))?((((map__33197_33280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33197_33280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33197_33280):map__33197_33280);
var id_33282 = cljs.core.get.call(null,map__33197_33281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_33282);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__33193_33275))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__33193_33275))){
var map__33199_33283 = ins;
var map__33199_33284__$1 = ((((!((map__33199_33283 == null)))?((((map__33199_33283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33199_33283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33199_33283):map__33199_33283);
var id_33285 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_33286 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33287 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_33288 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_33289 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_33290 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_33291 = cljs.core.get.call(null,map__33199_33284__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_33285)){
chart.client.popup.call(null,id_33285,html_33288,time_33289);
} else {
if(cljs.core.truth_((function (){var and__21940__auto__ = width_33290;
if(cljs.core.truth_(and__21940__auto__)){
var and__21940__auto____$1 = height_33291;
if(cljs.core.truth_(and__21940__auto____$1)){
var and__21940__auto____$2 = lat_33286;
if(cljs.core.truth_(and__21940__auto____$2)){
return lon_33287;
} else {
return and__21940__auto____$2;
}
} else {
return and__21940__auto____$1;
}
} else {
return and__21940__auto__;
}
})())){
chart.client.popup.call(null,lat_33286,lon_33287,html_33288,time_33289,width_33290,height_33291);
} else {
if(cljs.core.truth_((function (){var and__21940__auto__ = lat_33286;
if(cljs.core.truth_(and__21940__auto__)){
return lon_33287;
} else {
return and__21940__auto__;
}
})())){
chart.client.popup.call(null,lat_33286,lon_33287,html_33288,time_33289);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__33193_33275))){
var map__33201_33292 = ins;
var map__33201_33293__$1 = ((((!((map__33201_33292 == null)))?((((map__33201_33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201_33292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201_33292):map__33201_33292);
var id_33294 = cljs.core.get.call(null,map__33201_33293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_33295 = cljs.core.get.call(null,map__33201_33293__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_33296 = cljs.core.get.call(null,map__33201_33293__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_33297 = cljs.core.get.call(null,map__33201_33293__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_33294,points_33295,options_33296,time_33297);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__33193_33275))){
var map__33203_33298 = ins;
var map__33203_33299__$1 = ((((!((map__33203_33298 == null)))?((((map__33203_33298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33203_33298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33203_33298):map__33203_33298);
var coord_33300 = cljs.core.get.call(null,map__33203_33299__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_33301 = cljs.core.get.call(null,map__33203_33299__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_33302 = cljs.core.get.call(null,map__33203_33299__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_33300,zoom_33301,lock_33302);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__33193_33275))){
var map__33205_33303 = ins;
var map__33205_33304__$1 = ((((!((map__33205_33303 == null)))?((((map__33205_33303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33205_33303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33205_33303):map__33205_33303);
var iname_33305 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_33306 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_33307 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_33308 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_33309 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_33310 = cljs.core.get.call(null,map__33205_33304__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_33305,tip_33306,lat_33307,lon_33308,feature_33309,url_ico_33310);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__33193_33275))){
var map__33207_33311 = ins;
var map__33207_33312__$1 = ((((!((map__33207_33311 == null)))?((((map__33207_33311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33207_33311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33207_33311):map__33207_33311);
var iname_33313 = cljs.core.get.call(null,map__33207_33312__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_33313);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__33193_33275))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__33193_33275))){
var map__33209_33314 = ins;
var map__33209_33315__$1 = ((((!((map__33209_33314 == null)))?((((map__33209_33314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33209_33314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33209_33314):map__33209_33314);
var ids_33316 = cljs.core.get.call(null,map__33209_33315__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_33317 = cljs.core.get.call(null,map__33209_33315__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_33316,options_33317);
} else {
if(cljs.core.truth_(pred__33192_33274.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__33193_33275))){
var map__33211_33318 = ins;
var map__33211_33319__$1 = ((((!((map__33211_33318 == null)))?((((map__33211_33318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33211_33318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33211_33318):map__33211_33318);
var question_33320 = cljs.core.get.call(null,map__33211_33319__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_33321 = cljs.core.get.call(null,map__33211_33319__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__33213_33322 = cljs.core._EQ_;
var expr__33214_33323 = question_33320;
if(cljs.core.truth_(pred__33213_33322.call(null,"city",expr__33214_33323))){
chart.client.select_city.call(null,param_33321);
} else {
if(cljs.core.truth_(pred__33213_33322.call(null,"airport",expr__33214_33323))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33214_33323)].join('')));
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

var G__33324 = cljs.core.next.call(null,seq__33160__$1);
var G__33325 = null;
var G__33326 = (0);
var G__33327 = (0);
seq__33160 = G__33324;
chunk__33161 = G__33325;
count__33162 = G__33326;
i__33163 = G__33327;
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
var args33329 = [];
var len__23065__auto___33332 = arguments.length;
var i__23066__auto___33333 = (0);
while(true){
if((i__23066__auto___33333 < len__23065__auto___33332)){
args33329.push((arguments[i__23066__auto___33333]));

var G__33334 = (i__23066__auto___33333 + (1));
i__23066__auto___33333 = G__33334;
continue;
} else {
}
break;
}

var G__33331 = args33329.length;
switch (G__33331) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33329.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33328_SHARP_){
return chart.client.move_to.call(null,sel,p1__33328_SHARP_);
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
var args33340 = [];
var len__23065__auto___33343 = arguments.length;
var i__23066__auto___33344 = (0);
while(true){
if((i__23066__auto___33344 < len__23065__auto___33343)){
args33340.push((arguments[i__23066__auto___33344]));

var G__33345 = (i__23066__auto___33344 + (1));
i__23066__auto___33344 = G__33345;
continue;
} else {
}
break;
}

var G__33342 = args33340.length;
switch (G__33342) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33340.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__33336_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__33336_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33337_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__33337_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__33338_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__33338_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__33339_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__33339_SHARP_);
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
var args33350 = [];
var len__23065__auto___33353 = arguments.length;
var i__23066__auto___33354 = (0);
while(true){
if((i__23066__auto___33354 < len__23065__auto___33353)){
args33350.push((arguments[i__23066__auto___33354]));

var G__33355 = (i__23066__auto___33354 + (1));
i__23066__auto___33354 = G__33355;
continue;
} else {
}
break;
}

var G__33352 = args33350.length;
switch (G__33352) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33350.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__33347_SHARP_){
return chart.client.question.call(null,sel,p1__33347_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__33348_SHARP_){
return chart.client.question.call(null,pred,sel,p1__33348_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__33349_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__33349_SHARP_);
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
var pred__33360_33363 = cljs.core._EQ_;
var expr__33361_33364 = cmd;
if(cljs.core.truth_(pred__33360_33363.call(null,"commands",expr__33361_33364))){
} else {
if(cljs.core.truth_(pred__33360_33363.call(null,"watch-visible",expr__33361_33364))){
var bnd_33365 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_33366 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_33365.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_33365.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_33365.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_33365.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_33366)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__33360_33363.call(null,"move-to",expr__33361_33364))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__33360_33363.call(null,"schedule",expr__33361_33364))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__33360_33363.call(null,"question",expr__33361_33364))){
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
}catch (e33368){if((e33368 instanceof Error)){
var e_33369 = e33368;
cljs.core.println.call(null,e_33369);
} else {
throw e33368;

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