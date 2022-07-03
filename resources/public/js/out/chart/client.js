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
var map__16916 = response;
var map__16916__$1 = ((((!((map__16916 == null)))?((((map__16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16916):map__16916);
var status = cljs.core.get.call(null,map__16916__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16916__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_16924 = cljs.core.deref.call(null,vmp);
var mrk_16925 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_16924);
var vec__16921_16926 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_16924);
var lat_16927 = cljs.core.nth.call(null,vec__16921_16926,(0),null);
var lon_16928 = cljs.core.nth.call(null,vec__16921_16926,(1),null);
var pos_16929 = (new L.LatLng(lat_16927,lon_16928));
mrk_16925.setLatLng(pos_16929);

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
var seq__16934_16938 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__16935_16939 = null;
var count__16936_16940 = (0);
var i__16937_16941 = (0);
while(true){
if((i__16937_16941 < count__16936_16940)){
var veh_16942 = cljs.core._nth.call(null,chunk__16935_16939,i__16937_16941);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_16942)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_16942)));

var G__16943 = seq__16934_16938;
var G__16944 = chunk__16935_16939;
var G__16945 = count__16936_16940;
var G__16946 = (i__16937_16941 + (1));
seq__16934_16938 = G__16943;
chunk__16935_16939 = G__16944;
count__16936_16940 = G__16945;
i__16937_16941 = G__16946;
continue;
} else {
var temp__4657__auto___16947 = cljs.core.seq.call(null,seq__16934_16938);
if(temp__4657__auto___16947){
var seq__16934_16948__$1 = temp__4657__auto___16947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16934_16948__$1)){
var c__10811__auto___16949 = cljs.core.chunk_first.call(null,seq__16934_16948__$1);
var G__16950 = cljs.core.chunk_rest.call(null,seq__16934_16948__$1);
var G__16951 = c__10811__auto___16949;
var G__16952 = cljs.core.count.call(null,c__10811__auto___16949);
var G__16953 = (0);
seq__16934_16938 = G__16950;
chunk__16935_16939 = G__16951;
count__16936_16940 = G__16952;
i__16937_16941 = G__16953;
continue;
} else {
var veh_16954 = cljs.core.first.call(null,seq__16934_16948__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_16954)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_16954)));

var G__16955 = cljs.core.next.call(null,seq__16934_16948__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16934_16938 = G__16955;
chunk__16935_16939 = G__16956;
count__16936_16940 = G__16957;
i__16937_16941 = G__16958;
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

var vec__16963 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__16963,(0),null);
var lon = cljs.core.nth.call(null,vec__16963,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__16963,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__16963,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__16959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__16959_SHARP_))),e.target);
});})(vec__16963,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__16963,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9992__auto__ = url_ico;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
var or__9992__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9992__auto____$1)){
return or__9992__auto____$1;
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
var seq__16970_16974 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__16971_16975 = null;
var count__16972_16976 = (0);
var i__16973_16977 = (0);
while(true){
if((i__16973_16977 < count__16972_16976)){
var mrk_16978 = cljs.core._nth.call(null,chunk__16971_16975,i__16973_16977);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_16978);

var G__16979 = seq__16970_16974;
var G__16980 = chunk__16971_16975;
var G__16981 = count__16972_16976;
var G__16982 = (i__16973_16977 + (1));
seq__16970_16974 = G__16979;
chunk__16971_16975 = G__16980;
count__16972_16976 = G__16981;
i__16973_16977 = G__16982;
continue;
} else {
var temp__4657__auto___16983 = cljs.core.seq.call(null,seq__16970_16974);
if(temp__4657__auto___16983){
var seq__16970_16984__$1 = temp__4657__auto___16983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16970_16984__$1)){
var c__10811__auto___16985 = cljs.core.chunk_first.call(null,seq__16970_16984__$1);
var G__16986 = cljs.core.chunk_rest.call(null,seq__16970_16984__$1);
var G__16987 = c__10811__auto___16985;
var G__16988 = cljs.core.count.call(null,c__10811__auto___16985);
var G__16989 = (0);
seq__16970_16974 = G__16986;
chunk__16971_16975 = G__16987;
count__16972_16976 = G__16988;
i__16973_16977 = G__16989;
continue;
} else {
var mrk_16990 = cljs.core.first.call(null,seq__16970_16984__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_16990);

var G__16991 = cljs.core.next.call(null,seq__16970_16984__$1);
var G__16992 = null;
var G__16993 = (0);
var G__16994 = (0);
seq__16970_16974 = G__16991;
chunk__16971_16975 = G__16992;
count__16972_16976 = G__16993;
i__16973_16977 = G__16994;
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
var args16995 = [];
var len__11105__auto___17001 = arguments.length;
var i__11106__auto___17002 = (0);
while(true){
if((i__11106__auto___17002 < len__11105__auto___17001)){
args16995.push((arguments[i__11106__auto___17002]));

var G__17003 = (i__11106__auto___17002 + (1));
i__11106__auto___17002 = G__17003;
continue;
} else {
}
break;
}

var G__16997 = args16995.length;
switch (G__16997) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16995.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__16998 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__16998,(0),null);
var lon = cljs.core.nth.call(null,vec__16998,(1),null);
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
return (function (p1__17005_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__17005_SHARP_),cljs.core.second.call(null,p1__17005_SHARP_)));
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
var vec__17009 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__17009,(0),null);
var s = cljs.core.nth.call(null,vec__17009,(1),null);
var w = cljs.core.nth.call(null,vec__17009,(2),null);
var e = cljs.core.nth.call(null,vec__17009,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("visible?z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__17009,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__17009,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__17012,zoom,lock){
var vec__17016 = p__17012;
var lat = cljs.core.nth.call(null,vec__17016,(0),null);
var lon = cljs.core.nth.call(null,vec__17016,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9992__auto__ = zoom;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__17019_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__17019_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__17020_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__17020_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__17021_SHARP_){
return p1__17021_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__17022,ops){
var vec__17026 = p__17022;
var id1 = cljs.core.nth.call(null,vec__17026,(0),null);
var id2 = cljs.core.nth.call(null,vec__17026,(1),null);
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
var args17030 = [];
var len__11105__auto___17033 = arguments.length;
var i__11106__auto___17034 = (0);
while(true){
if((i__11106__auto___17034 < len__11105__auto___17033)){
args17030.push((arguments[i__11106__auto___17034]));

var G__17035 = (i__11106__auto___17034 + (1));
i__11106__auto___17034 = G__17035;
continue;
} else {
}
break;
}

var G__17032 = args17030.length;
switch (G__17032) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17030.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__17029_SHARP_){
return chart.client.select_airport.call(null,sel,p1__17029_SHARP_);
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
var seq__17097 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__17098 = null;
var count__17099 = (0);
var i__17100 = (0);
while(true){
if((i__17100 < count__17099)){
var map__17101 = cljs.core._nth.call(null,chunk__17098,i__17100);
var map__17101__$1 = ((((!((map__17101 == null)))?((((map__17101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17101):map__17101);
var ins = map__17101__$1;
var instruct = cljs.core.get.call(null,map__17101__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__17103_17157 = cljs.core._EQ_;
var expr__17104_17158 = instruct;
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__17104_17158))){
var map__17106_17159 = ins;
var map__17106_17160__$1 = ((((!((map__17106_17159 == null)))?((((map__17106_17159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17106_17159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17106_17159):map__17106_17159);
var id_17161 = cljs.core.get.call(null,map__17106_17160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_17162 = cljs.core.get.call(null,map__17106_17160__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_17161,vehicle_17162);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__17104_17158))){
var map__17108_17163 = ins;
var map__17108_17164__$1 = ((((!((map__17108_17163 == null)))?((((map__17108_17163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17108_17163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17108_17163):map__17108_17163);
var id_17165 = cljs.core.get.call(null,map__17108_17164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_17165);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__17104_17158))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__17104_17158))){
var map__17110_17166 = ins;
var map__17110_17167__$1 = ((((!((map__17110_17166 == null)))?((((map__17110_17166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17110_17166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17110_17166):map__17110_17166);
var id_17168 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_17169 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17170 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_17171 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_17172 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_17173 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_17174 = cljs.core.get.call(null,map__17110_17167__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_17168)){
chart.client.popup.call(null,id_17168,html_17171,time_17172);
} else {
if(cljs.core.truth_((function (){var and__9980__auto__ = width_17173;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = height_17174;
if(cljs.core.truth_(and__9980__auto____$1)){
var and__9980__auto____$2 = lat_17169;
if(cljs.core.truth_(and__9980__auto____$2)){
return lon_17170;
} else {
return and__9980__auto____$2;
}
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
chart.client.popup.call(null,lat_17169,lon_17170,html_17171,time_17172,width_17173,height_17174);
} else {
if(cljs.core.truth_((function (){var and__9980__auto__ = lat_17169;
if(cljs.core.truth_(and__9980__auto__)){
return lon_17170;
} else {
return and__9980__auto__;
}
})())){
chart.client.popup.call(null,lat_17169,lon_17170,html_17171,time_17172);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__17104_17158))){
var map__17112_17175 = ins;
var map__17112_17176__$1 = ((((!((map__17112_17175 == null)))?((((map__17112_17175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17112_17175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17112_17175):map__17112_17175);
var id_17177 = cljs.core.get.call(null,map__17112_17176__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_17178 = cljs.core.get.call(null,map__17112_17176__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_17179 = cljs.core.get.call(null,map__17112_17176__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_17180 = cljs.core.get.call(null,map__17112_17176__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_17177,points_17178,options_17179,time_17180);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__17104_17158))){
var map__17114_17181 = ins;
var map__17114_17182__$1 = ((((!((map__17114_17181 == null)))?((((map__17114_17181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17114_17181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17114_17181):map__17114_17181);
var coord_17183 = cljs.core.get.call(null,map__17114_17182__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_17184 = cljs.core.get.call(null,map__17114_17182__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_17185 = cljs.core.get.call(null,map__17114_17182__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_17183,zoom_17184,lock_17185);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__17104_17158))){
var map__17116_17186 = ins;
var map__17116_17187__$1 = ((((!((map__17116_17186 == null)))?((((map__17116_17186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17116_17186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17116_17186):map__17116_17186);
var iname_17188 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_17189 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_17190 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17191 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_17192 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_17193 = cljs.core.get.call(null,map__17116_17187__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_17188,tip_17189,lat_17190,lon_17191,feature_17192,url_ico_17193);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__17104_17158))){
var map__17118_17194 = ins;
var map__17118_17195__$1 = ((((!((map__17118_17194 == null)))?((((map__17118_17194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17118_17194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17118_17194):map__17118_17194);
var iname_17196 = cljs.core.get.call(null,map__17118_17195__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_17196);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__17104_17158))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__17104_17158))){
var map__17120_17197 = ins;
var map__17120_17198__$1 = ((((!((map__17120_17197 == null)))?((((map__17120_17197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17120_17197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17120_17197):map__17120_17197);
var ids_17199 = cljs.core.get.call(null,map__17120_17198__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_17200 = cljs.core.get.call(null,map__17120_17198__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_17199,options_17200);
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__17104_17158))){
var map__17122_17201 = ins;
var map__17122_17202__$1 = ((((!((map__17122_17201 == null)))?((((map__17122_17201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17122_17201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17122_17201):map__17122_17201);
var question_17203 = cljs.core.get.call(null,map__17122_17202__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_17204 = cljs.core.get.call(null,map__17122_17202__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__17124_17205 = cljs.core._EQ_;
var expr__17125_17206 = question_17203;
if(cljs.core.truth_(pred__17124_17205.call(null,"city",expr__17125_17206))){
chart.client.select_city.call(null,param_17204);
} else {
if(cljs.core.truth_(pred__17124_17205.call(null,"airport",expr__17125_17206))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17125_17206)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__17103_17157.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__17104_17158))){
var map__17127_17207 = ins;
var map__17127_17208__$1 = ((((!((map__17127_17207 == null)))?((((map__17127_17207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17127_17207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17127_17207):map__17127_17207);
var callsign_17209 = cljs.core.get.call(null,map__17127_17208__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_17209;
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

var G__17210 = seq__17097;
var G__17211 = chunk__17098;
var G__17212 = count__17099;
var G__17213 = (i__17100 + (1));
seq__17097 = G__17210;
chunk__17098 = G__17211;
count__17099 = G__17212;
i__17100 = G__17213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17097);
if(temp__4657__auto__){
var seq__17097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17097__$1)){
var c__10811__auto__ = cljs.core.chunk_first.call(null,seq__17097__$1);
var G__17214 = cljs.core.chunk_rest.call(null,seq__17097__$1);
var G__17215 = c__10811__auto__;
var G__17216 = cljs.core.count.call(null,c__10811__auto__);
var G__17217 = (0);
seq__17097 = G__17214;
chunk__17098 = G__17215;
count__17099 = G__17216;
i__17100 = G__17217;
continue;
} else {
var map__17129 = cljs.core.first.call(null,seq__17097__$1);
var map__17129__$1 = ((((!((map__17129 == null)))?((((map__17129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17129):map__17129);
var ins = map__17129__$1;
var instruct = cljs.core.get.call(null,map__17129__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__17131_17218 = cljs.core._EQ_;
var expr__17132_17219 = instruct;
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__17132_17219))){
var map__17134_17220 = ins;
var map__17134_17221__$1 = ((((!((map__17134_17220 == null)))?((((map__17134_17220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17134_17220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17134_17220):map__17134_17220);
var id_17222 = cljs.core.get.call(null,map__17134_17221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_17223 = cljs.core.get.call(null,map__17134_17221__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_17222,vehicle_17223);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__17132_17219))){
var map__17136_17224 = ins;
var map__17136_17225__$1 = ((((!((map__17136_17224 == null)))?((((map__17136_17224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17136_17224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17136_17224):map__17136_17224);
var id_17226 = cljs.core.get.call(null,map__17136_17225__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_17226);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__17132_17219))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__17132_17219))){
var map__17138_17227 = ins;
var map__17138_17228__$1 = ((((!((map__17138_17227 == null)))?((((map__17138_17227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17138_17227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17138_17227):map__17138_17227);
var id_17229 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_17230 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17231 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_17232 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_17233 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_17234 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_17235 = cljs.core.get.call(null,map__17138_17228__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_17229)){
chart.client.popup.call(null,id_17229,html_17232,time_17233);
} else {
if(cljs.core.truth_((function (){var and__9980__auto__ = width_17234;
if(cljs.core.truth_(and__9980__auto__)){
var and__9980__auto____$1 = height_17235;
if(cljs.core.truth_(and__9980__auto____$1)){
var and__9980__auto____$2 = lat_17230;
if(cljs.core.truth_(and__9980__auto____$2)){
return lon_17231;
} else {
return and__9980__auto____$2;
}
} else {
return and__9980__auto____$1;
}
} else {
return and__9980__auto__;
}
})())){
chart.client.popup.call(null,lat_17230,lon_17231,html_17232,time_17233,width_17234,height_17235);
} else {
if(cljs.core.truth_((function (){var and__9980__auto__ = lat_17230;
if(cljs.core.truth_(and__9980__auto__)){
return lon_17231;
} else {
return and__9980__auto__;
}
})())){
chart.client.popup.call(null,lat_17230,lon_17231,html_17232,time_17233);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__17132_17219))){
var map__17140_17236 = ins;
var map__17140_17237__$1 = ((((!((map__17140_17236 == null)))?((((map__17140_17236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17140_17236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17140_17236):map__17140_17236);
var id_17238 = cljs.core.get.call(null,map__17140_17237__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_17239 = cljs.core.get.call(null,map__17140_17237__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_17240 = cljs.core.get.call(null,map__17140_17237__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_17241 = cljs.core.get.call(null,map__17140_17237__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_17238,points_17239,options_17240,time_17241);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__17132_17219))){
var map__17142_17242 = ins;
var map__17142_17243__$1 = ((((!((map__17142_17242 == null)))?((((map__17142_17242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17142_17242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17142_17242):map__17142_17242);
var coord_17244 = cljs.core.get.call(null,map__17142_17243__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_17245 = cljs.core.get.call(null,map__17142_17243__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_17246 = cljs.core.get.call(null,map__17142_17243__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_17244,zoom_17245,lock_17246);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__17132_17219))){
var map__17144_17247 = ins;
var map__17144_17248__$1 = ((((!((map__17144_17247 == null)))?((((map__17144_17247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17144_17247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17144_17247):map__17144_17247);
var iname_17249 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_17250 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_17251 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_17252 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_17253 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_17254 = cljs.core.get.call(null,map__17144_17248__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_17249,tip_17250,lat_17251,lon_17252,feature_17253,url_ico_17254);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__17132_17219))){
var map__17146_17255 = ins;
var map__17146_17256__$1 = ((((!((map__17146_17255 == null)))?((((map__17146_17255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17146_17255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17146_17255):map__17146_17255);
var iname_17257 = cljs.core.get.call(null,map__17146_17256__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_17257);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__17132_17219))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__17132_17219))){
var map__17148_17258 = ins;
var map__17148_17259__$1 = ((((!((map__17148_17258 == null)))?((((map__17148_17258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17148_17258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17148_17258):map__17148_17258);
var ids_17260 = cljs.core.get.call(null,map__17148_17259__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_17261 = cljs.core.get.call(null,map__17148_17259__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_17260,options_17261);
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__17132_17219))){
var map__17150_17262 = ins;
var map__17150_17263__$1 = ((((!((map__17150_17262 == null)))?((((map__17150_17262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17150_17262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17150_17262):map__17150_17262);
var question_17264 = cljs.core.get.call(null,map__17150_17263__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_17265 = cljs.core.get.call(null,map__17150_17263__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__17152_17266 = cljs.core._EQ_;
var expr__17153_17267 = question_17264;
if(cljs.core.truth_(pred__17152_17266.call(null,"city",expr__17153_17267))){
chart.client.select_city.call(null,param_17265);
} else {
if(cljs.core.truth_(pred__17152_17266.call(null,"airport",expr__17153_17267))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17153_17267)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__17131_17218.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__17132_17219))){
var map__17155_17268 = ins;
var map__17155_17269__$1 = ((((!((map__17155_17268 == null)))?((((map__17155_17268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17155_17268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17155_17268):map__17155_17268);
var callsign_17270 = cljs.core.get.call(null,map__17155_17269__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_17270;
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

var G__17271 = cljs.core.next.call(null,seq__17097__$1);
var G__17272 = null;
var G__17273 = (0);
var G__17274 = (0);
seq__17097 = G__17271;
chunk__17098 = G__17272;
count__17099 = G__17273;
i__17100 = G__17274;
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
var args17276 = [];
var len__11105__auto___17279 = arguments.length;
var i__11106__auto___17280 = (0);
while(true){
if((i__11106__auto___17280 < len__11105__auto___17279)){
args17276.push((arguments[i__11106__auto___17280]));

var G__17281 = (i__11106__auto___17280 + (1));
i__11106__auto___17280 = G__17281;
continue;
} else {
}
break;
}

var G__17278 = args17276.length;
switch (G__17278) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17276.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__17275_SHARP_){
return chart.client.move_to.call(null,sel,p1__17275_SHARP_);
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
var args17287 = [];
var len__11105__auto___17290 = arguments.length;
var i__11106__auto___17291 = (0);
while(true){
if((i__11106__auto___17291 < len__11105__auto___17290)){
args17287.push((arguments[i__11106__auto___17291]));

var G__17292 = (i__11106__auto___17291 + (1));
i__11106__auto___17291 = G__17292;
continue;
} else {
}
break;
}

var G__17289 = args17287.length;
switch (G__17289) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17287.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__17283_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__17283_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__17284_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__17284_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__17285_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__17285_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__17286_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__17286_SHARP_);
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
var args17297 = [];
var len__11105__auto___17300 = arguments.length;
var i__11106__auto___17301 = (0);
while(true){
if((i__11106__auto___17301 < len__11105__auto___17300)){
args17297.push((arguments[i__11106__auto___17301]));

var G__17302 = (i__11106__auto___17301 + (1));
i__11106__auto___17301 = G__17302;
continue;
} else {
}
break;
}

var G__17299 = args17297.length;
switch (G__17299) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17297.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__17294_SHARP_){
return chart.client.question.call(null,sel,p1__17294_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__17295_SHARP_){
return chart.client.question.call(null,pred,sel,p1__17295_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__17296_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__17296_SHARP_);
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
var pred__17307_17310 = cljs.core._EQ_;
var expr__17308_17311 = cmd;
if(cljs.core.truth_(pred__17307_17310.call(null,"commands",expr__17308_17311))){
} else {
if(cljs.core.truth_(pred__17307_17310.call(null,"watch-visible",expr__17308_17311))){
var bnd_17312 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_17313 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?n="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_17312.getNorth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&s="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_17312.getSouth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&w="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_17312.getWest()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&e="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_17312.getEast()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&z="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_17313)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__17307_17310.call(null,"move-to",expr__17308_17311))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__17307_17310.call(null,"schedule",expr__17308_17311))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__17307_17310.call(null,"question",expr__17308_17311))){
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
}catch (e17315){if((e17315 instanceof Error)){
var e_17316 = e17315;
cljs.core.println.call(null,e_17316);
} else {
throw e17315;

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