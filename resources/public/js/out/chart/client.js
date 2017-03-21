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
var map__33940 = response;
var map__33940__$1 = ((((!((map__33940 == null)))?((((map__33940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33940):map__33940);
var status = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_33948 = cljs.core.deref.call(null,vmp);
var mrk_33949 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_33948);
var vec__33945_33950 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_33948);
var lat_33951 = cljs.core.nth.call(null,vec__33945_33950,(0),null);
var lon_33952 = cljs.core.nth.call(null,vec__33945_33950,(1),null);
var pos_33953 = (new L.LatLng(lat_33951,lon_33952));
mrk_33949.setLatLng(pos_33953);

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
var seq__33958_33962 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__33959_33963 = null;
var count__33960_33964 = (0);
var i__33961_33965 = (0);
while(true){
if((i__33961_33965 < count__33960_33964)){
var veh_33966 = cljs.core._nth.call(null,chunk__33959_33963,i__33961_33965);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33966)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33966)));

var G__33967 = seq__33958_33962;
var G__33968 = chunk__33959_33963;
var G__33969 = count__33960_33964;
var G__33970 = (i__33961_33965 + (1));
seq__33958_33962 = G__33967;
chunk__33959_33963 = G__33968;
count__33960_33964 = G__33969;
i__33961_33965 = G__33970;
continue;
} else {
var temp__4657__auto___33971 = cljs.core.seq.call(null,seq__33958_33962);
if(temp__4657__auto___33971){
var seq__33958_33972__$1 = temp__4657__auto___33971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33958_33972__$1)){
var c__9371__auto___33973 = cljs.core.chunk_first.call(null,seq__33958_33972__$1);
var G__33974 = cljs.core.chunk_rest.call(null,seq__33958_33972__$1);
var G__33975 = c__9371__auto___33973;
var G__33976 = cljs.core.count.call(null,c__9371__auto___33973);
var G__33977 = (0);
seq__33958_33962 = G__33974;
chunk__33959_33963 = G__33975;
count__33960_33964 = G__33976;
i__33961_33965 = G__33977;
continue;
} else {
var veh_33978 = cljs.core.first.call(null,seq__33958_33972__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33978)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_33978)));

var G__33979 = cljs.core.next.call(null,seq__33958_33972__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33958_33962 = G__33979;
chunk__33959_33963 = G__33980;
count__33960_33964 = G__33981;
i__33961_33965 = G__33982;
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

var vec__33987 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__33987,(0),null);
var lon = cljs.core.nth.call(null,vec__33987,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__33987,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__33987,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__33983_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__33983_SHARP_))),e.target);
});})(vec__33987,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__33987,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__8557__auto__ = url_ico;
if(cljs.core.truth_(or__8557__auto__)){
return or__8557__auto__;
} else {
var or__8557__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__8557__auto____$1)){
return or__8557__auto____$1;
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
var seq__33994_33998 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__33995_33999 = null;
var count__33996_34000 = (0);
var i__33997_34001 = (0);
while(true){
if((i__33997_34001 < count__33996_34000)){
var mrk_34002 = cljs.core._nth.call(null,chunk__33995_33999,i__33997_34001);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34002);

var G__34003 = seq__33994_33998;
var G__34004 = chunk__33995_33999;
var G__34005 = count__33996_34000;
var G__34006 = (i__33997_34001 + (1));
seq__33994_33998 = G__34003;
chunk__33995_33999 = G__34004;
count__33996_34000 = G__34005;
i__33997_34001 = G__34006;
continue;
} else {
var temp__4657__auto___34007 = cljs.core.seq.call(null,seq__33994_33998);
if(temp__4657__auto___34007){
var seq__33994_34008__$1 = temp__4657__auto___34007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33994_34008__$1)){
var c__9371__auto___34009 = cljs.core.chunk_first.call(null,seq__33994_34008__$1);
var G__34010 = cljs.core.chunk_rest.call(null,seq__33994_34008__$1);
var G__34011 = c__9371__auto___34009;
var G__34012 = cljs.core.count.call(null,c__9371__auto___34009);
var G__34013 = (0);
seq__33994_33998 = G__34010;
chunk__33995_33999 = G__34011;
count__33996_34000 = G__34012;
i__33997_34001 = G__34013;
continue;
} else {
var mrk_34014 = cljs.core.first.call(null,seq__33994_34008__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_34014);

var G__34015 = cljs.core.next.call(null,seq__33994_34008__$1);
var G__34016 = null;
var G__34017 = (0);
var G__34018 = (0);
seq__33994_33998 = G__34015;
chunk__33995_33999 = G__34016;
count__33996_34000 = G__34017;
i__33997_34001 = G__34018;
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
var args34019 = [];
var len__9665__auto___34025 = arguments.length;
var i__9666__auto___34026 = (0);
while(true){
if((i__9666__auto___34026 < len__9665__auto___34025)){
args34019.push((arguments[i__9666__auto___34026]));

var G__34027 = (i__9666__auto___34026 + (1));
i__9666__auto___34026 = G__34027;
continue;
} else {
}
break;
}

var G__34021 = args34019.length;
switch (G__34021) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34019.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__34022 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__34022,(0),null);
var lon = cljs.core.nth.call(null,vec__34022,(1),null);
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
return (function (p1__34029_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__34029_SHARP_),cljs.core.second.call(null,p1__34029_SHARP_)));
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
var vec__34033 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__34033,(0),null);
var s = cljs.core.nth.call(null,vec__34033,(1),null);
var w = cljs.core.nth.call(null,vec__34033,(2),null);
var e = cljs.core.nth.call(null,vec__34033,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__34033,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__34033,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__34036,zoom,lock){
var vec__34040 = p__34036;
var lat = cljs.core.nth.call(null,vec__34040,(0),null);
var lon = cljs.core.nth.call(null,vec__34040,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__8557__auto__ = zoom;
if(cljs.core.truth_(or__8557__auto__)){
return or__8557__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__34043_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__34043_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__34044_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__34044_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__34045_SHARP_){
return p1__34045_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__34046,ops){
var vec__34050 = p__34046;
var id1 = cljs.core.nth.call(null,vec__34050,(0),null);
var id2 = cljs.core.nth.call(null,vec__34050,(1),null);
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
var seq__34099 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__34100 = null;
var count__34101 = (0);
var i__34102 = (0);
while(true){
if((i__34102 < count__34101)){
var map__34103 = cljs.core._nth.call(null,chunk__34100,i__34102);
var map__34103__$1 = ((((!((map__34103 == null)))?((((map__34103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34103):map__34103);
var ins = map__34103__$1;
var instruct = cljs.core.get.call(null,map__34103__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__34105_34145 = cljs.core._EQ_;
var expr__34106_34146 = instruct;
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__34106_34146))){
var map__34108_34147 = ins;
var map__34108_34148__$1 = ((((!((map__34108_34147 == null)))?((((map__34108_34147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34108_34147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34108_34147):map__34108_34147);
var id_34149 = cljs.core.get.call(null,map__34108_34148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_34150 = cljs.core.get.call(null,map__34108_34148__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_34149,vehicle_34150);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__34106_34146))){
var map__34110_34151 = ins;
var map__34110_34152__$1 = ((((!((map__34110_34151 == null)))?((((map__34110_34151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34110_34151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34110_34151):map__34110_34151);
var id_34153 = cljs.core.get.call(null,map__34110_34152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_34153);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__34106_34146))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__34106_34146))){
var map__34112_34154 = ins;
var map__34112_34155__$1 = ((((!((map__34112_34154 == null)))?((((map__34112_34154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34112_34154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34112_34154):map__34112_34154);
var id_34156 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_34157 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34158 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_34159 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_34160 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_34161 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_34162 = cljs.core.get.call(null,map__34112_34155__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_34156)){
chart.client.popup.call(null,id_34156,html_34159,time_34160);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = width_34161;
if(cljs.core.truth_(and__8545__auto__)){
var and__8545__auto____$1 = height_34162;
if(cljs.core.truth_(and__8545__auto____$1)){
var and__8545__auto____$2 = lat_34157;
if(cljs.core.truth_(and__8545__auto____$2)){
return lon_34158;
} else {
return and__8545__auto____$2;
}
} else {
return and__8545__auto____$1;
}
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_34157,lon_34158,html_34159,time_34160,width_34161,height_34162);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = lat_34157;
if(cljs.core.truth_(and__8545__auto__)){
return lon_34158;
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_34157,lon_34158,html_34159,time_34160);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__34106_34146))){
var map__34114_34163 = ins;
var map__34114_34164__$1 = ((((!((map__34114_34163 == null)))?((((map__34114_34163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34114_34163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34114_34163):map__34114_34163);
var id_34165 = cljs.core.get.call(null,map__34114_34164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_34166 = cljs.core.get.call(null,map__34114_34164__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_34167 = cljs.core.get.call(null,map__34114_34164__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_34168 = cljs.core.get.call(null,map__34114_34164__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_34165,points_34166,options_34167,time_34168);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__34106_34146))){
var map__34116_34169 = ins;
var map__34116_34170__$1 = ((((!((map__34116_34169 == null)))?((((map__34116_34169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34116_34169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34116_34169):map__34116_34169);
var coord_34171 = cljs.core.get.call(null,map__34116_34170__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_34172 = cljs.core.get.call(null,map__34116_34170__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_34173 = cljs.core.get.call(null,map__34116_34170__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_34171,zoom_34172,lock_34173);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__34106_34146))){
var map__34118_34174 = ins;
var map__34118_34175__$1 = ((((!((map__34118_34174 == null)))?((((map__34118_34174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34118_34174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34118_34174):map__34118_34174);
var iname_34176 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_34177 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_34178 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34179 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_34180 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_34181 = cljs.core.get.call(null,map__34118_34175__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_34176,tip_34177,lat_34178,lon_34179,feature_34180,url_ico_34181);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__34106_34146))){
var map__34120_34182 = ins;
var map__34120_34183__$1 = ((((!((map__34120_34182 == null)))?((((map__34120_34182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34120_34182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34120_34182):map__34120_34182);
var iname_34184 = cljs.core.get.call(null,map__34120_34183__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_34184);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__34106_34146))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__34105_34145.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__34106_34146))){
var map__34122_34185 = ins;
var map__34122_34186__$1 = ((((!((map__34122_34185 == null)))?((((map__34122_34185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34122_34185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34122_34185):map__34122_34185);
var ids_34187 = cljs.core.get.call(null,map__34122_34186__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_34188 = cljs.core.get.call(null,map__34122_34186__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_34187,options_34188);
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

var G__34189 = seq__34099;
var G__34190 = chunk__34100;
var G__34191 = count__34101;
var G__34192 = (i__34102 + (1));
seq__34099 = G__34189;
chunk__34100 = G__34190;
count__34101 = G__34191;
i__34102 = G__34192;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34099);
if(temp__4657__auto__){
var seq__34099__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34099__$1)){
var c__9371__auto__ = cljs.core.chunk_first.call(null,seq__34099__$1);
var G__34193 = cljs.core.chunk_rest.call(null,seq__34099__$1);
var G__34194 = c__9371__auto__;
var G__34195 = cljs.core.count.call(null,c__9371__auto__);
var G__34196 = (0);
seq__34099 = G__34193;
chunk__34100 = G__34194;
count__34101 = G__34195;
i__34102 = G__34196;
continue;
} else {
var map__34124 = cljs.core.first.call(null,seq__34099__$1);
var map__34124__$1 = ((((!((map__34124 == null)))?((((map__34124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34124):map__34124);
var ins = map__34124__$1;
var instruct = cljs.core.get.call(null,map__34124__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__34126_34197 = cljs.core._EQ_;
var expr__34127_34198 = instruct;
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__34127_34198))){
var map__34129_34199 = ins;
var map__34129_34200__$1 = ((((!((map__34129_34199 == null)))?((((map__34129_34199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34129_34199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34129_34199):map__34129_34199);
var id_34201 = cljs.core.get.call(null,map__34129_34200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_34202 = cljs.core.get.call(null,map__34129_34200__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_34201,vehicle_34202);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__34127_34198))){
var map__34131_34203 = ins;
var map__34131_34204__$1 = ((((!((map__34131_34203 == null)))?((((map__34131_34203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34131_34203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34131_34203):map__34131_34203);
var id_34205 = cljs.core.get.call(null,map__34131_34204__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_34205);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__34127_34198))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__34127_34198))){
var map__34133_34206 = ins;
var map__34133_34207__$1 = ((((!((map__34133_34206 == null)))?((((map__34133_34206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34133_34206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34133_34206):map__34133_34206);
var id_34208 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_34209 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34210 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_34211 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_34212 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_34213 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_34214 = cljs.core.get.call(null,map__34133_34207__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_34208)){
chart.client.popup.call(null,id_34208,html_34211,time_34212);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = width_34213;
if(cljs.core.truth_(and__8545__auto__)){
var and__8545__auto____$1 = height_34214;
if(cljs.core.truth_(and__8545__auto____$1)){
var and__8545__auto____$2 = lat_34209;
if(cljs.core.truth_(and__8545__auto____$2)){
return lon_34210;
} else {
return and__8545__auto____$2;
}
} else {
return and__8545__auto____$1;
}
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_34209,lon_34210,html_34211,time_34212,width_34213,height_34214);
} else {
if(cljs.core.truth_((function (){var and__8545__auto__ = lat_34209;
if(cljs.core.truth_(and__8545__auto__)){
return lon_34210;
} else {
return and__8545__auto__;
}
})())){
chart.client.popup.call(null,lat_34209,lon_34210,html_34211,time_34212);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__34127_34198))){
var map__34135_34215 = ins;
var map__34135_34216__$1 = ((((!((map__34135_34215 == null)))?((((map__34135_34215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34135_34215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34135_34215):map__34135_34215);
var id_34217 = cljs.core.get.call(null,map__34135_34216__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_34218 = cljs.core.get.call(null,map__34135_34216__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_34219 = cljs.core.get.call(null,map__34135_34216__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_34220 = cljs.core.get.call(null,map__34135_34216__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_34217,points_34218,options_34219,time_34220);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__34127_34198))){
var map__34137_34221 = ins;
var map__34137_34222__$1 = ((((!((map__34137_34221 == null)))?((((map__34137_34221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34137_34221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34137_34221):map__34137_34221);
var coord_34223 = cljs.core.get.call(null,map__34137_34222__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_34224 = cljs.core.get.call(null,map__34137_34222__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_34225 = cljs.core.get.call(null,map__34137_34222__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_34223,zoom_34224,lock_34225);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__34127_34198))){
var map__34139_34226 = ins;
var map__34139_34227__$1 = ((((!((map__34139_34226 == null)))?((((map__34139_34226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34139_34226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139_34226):map__34139_34226);
var iname_34228 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_34229 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_34230 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_34231 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_34232 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_34233 = cljs.core.get.call(null,map__34139_34227__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_34228,tip_34229,lat_34230,lon_34231,feature_34232,url_ico_34233);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__34127_34198))){
var map__34141_34234 = ins;
var map__34141_34235__$1 = ((((!((map__34141_34234 == null)))?((((map__34141_34234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34141_34234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34141_34234):map__34141_34234);
var iname_34236 = cljs.core.get.call(null,map__34141_34235__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_34236);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__34127_34198))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__34126_34197.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__34127_34198))){
var map__34143_34237 = ins;
var map__34143_34238__$1 = ((((!((map__34143_34237 == null)))?((((map__34143_34237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34143_34237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34143_34237):map__34143_34237);
var ids_34239 = cljs.core.get.call(null,map__34143_34238__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_34240 = cljs.core.get.call(null,map__34143_34238__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_34239,options_34240);
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

var G__34241 = cljs.core.next.call(null,seq__34099__$1);
var G__34242 = null;
var G__34243 = (0);
var G__34244 = (0);
seq__34099 = G__34241;
chunk__34100 = G__34242;
count__34101 = G__34243;
i__34102 = G__34244;
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
var args34246 = [];
var len__9665__auto___34249 = arguments.length;
var i__9666__auto___34250 = (0);
while(true){
if((i__9666__auto___34250 < len__9665__auto___34249)){
args34246.push((arguments[i__9666__auto___34250]));

var G__34251 = (i__9666__auto___34250 + (1));
i__9666__auto___34250 = G__34251;
continue;
} else {
}
break;
}

var G__34248 = args34246.length;
switch (G__34248) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34246.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__34245_SHARP_){
return chart.client.move_to.call(null,sel,p1__34245_SHARP_);
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
var args34257 = [];
var len__9665__auto___34260 = arguments.length;
var i__9666__auto___34261 = (0);
while(true){
if((i__9666__auto___34261 < len__9665__auto___34260)){
args34257.push((arguments[i__9666__auto___34261]));

var G__34262 = (i__9666__auto___34261 + (1));
i__9666__auto___34261 = G__34262;
continue;
} else {
}
break;
}

var G__34259 = args34257.length;
switch (G__34259) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34257.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__34253_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__34253_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__34254_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__34254_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__34255_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__34255_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__34256_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__34256_SHARP_);
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
var args34267 = [];
var len__9665__auto___34270 = arguments.length;
var i__9666__auto___34271 = (0);
while(true){
if((i__9666__auto___34271 < len__9665__auto___34270)){
args34267.push((arguments[i__9666__auto___34271]));

var G__34272 = (i__9666__auto___34271 + (1));
i__9666__auto___34271 = G__34272;
continue;
} else {
}
break;
}

var G__34269 = args34267.length;
switch (G__34269) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34267.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__34264_SHARP_){
return chart.client.question.call(null,sel,p1__34264_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__34265_SHARP_){
return chart.client.question.call(null,pred,sel,p1__34265_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__34266_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__34266_SHARP_);
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
var pred__34277_34280 = cljs.core._EQ_;
var expr__34278_34281 = cmd;
if(cljs.core.truth_(pred__34277_34280.call(null,"commands",expr__34278_34281))){
} else {
if(cljs.core.truth_(pred__34277_34280.call(null,"watch-visible",expr__34278_34281))){
var bnd_34282 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_34283 = [cljs.core.str("?n="),cljs.core.str(bnd_34282.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_34282.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_34282.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_34282.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_34283)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__34277_34280.call(null,"move-to",expr__34278_34281))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__34277_34280.call(null,"schedule",expr__34278_34281))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__34277_34280.call(null,"question",expr__34278_34281))){
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
}catch (e34285){if((e34285 instanceof Error)){
var e_34286 = e34285;
cljs.core.println.call(null,e_34286);
} else {
throw e34285;

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