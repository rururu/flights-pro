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
var map__31081 = response;
var map__31081__$1 = ((((!((map__31081 == null)))?((((map__31081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31081):map__31081);
var status = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31081__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_31089 = cljs.core.deref.call(null,vmp);
var mrk_31090 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_31089);
var vec__31086_31091 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_31089);
var lat_31092 = cljs.core.nth.call(null,vec__31086_31091,(0),null);
var lon_31093 = cljs.core.nth.call(null,vec__31086_31091,(1),null);
var pos_31094 = (new L.LatLng(lat_31092,lon_31093));
mrk_31090.setLatLng(pos_31094);

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
var seq__31099_31103 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__31100_31104 = null;
var count__31101_31105 = (0);
var i__31102_31106 = (0);
while(true){
if((i__31102_31106 < count__31101_31105)){
var veh_31107 = cljs.core._nth.call(null,chunk__31100_31104,i__31102_31106);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31107)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31107)));

var G__31108 = seq__31099_31103;
var G__31109 = chunk__31100_31104;
var G__31110 = count__31101_31105;
var G__31111 = (i__31102_31106 + (1));
seq__31099_31103 = G__31108;
chunk__31100_31104 = G__31109;
count__31101_31105 = G__31110;
i__31102_31106 = G__31111;
continue;
} else {
var temp__4657__auto___31112 = cljs.core.seq.call(null,seq__31099_31103);
if(temp__4657__auto___31112){
var seq__31099_31113__$1 = temp__4657__auto___31112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31099_31113__$1)){
var c__21383__auto___31114 = cljs.core.chunk_first.call(null,seq__31099_31113__$1);
var G__31115 = cljs.core.chunk_rest.call(null,seq__31099_31113__$1);
var G__31116 = c__21383__auto___31114;
var G__31117 = cljs.core.count.call(null,c__21383__auto___31114);
var G__31118 = (0);
seq__31099_31103 = G__31115;
chunk__31100_31104 = G__31116;
count__31101_31105 = G__31117;
i__31102_31106 = G__31118;
continue;
} else {
var veh_31119 = cljs.core.first.call(null,seq__31099_31113__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31119)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_31119)));

var G__31120 = cljs.core.next.call(null,seq__31099_31113__$1);
var G__31121 = null;
var G__31122 = (0);
var G__31123 = (0);
seq__31099_31103 = G__31120;
chunk__31100_31104 = G__31121;
count__31101_31105 = G__31122;
i__31102_31106 = G__31123;
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

var vec__31128 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__31128,(0),null);
var lon = cljs.core.nth.call(null,vec__31128,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__31128,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__31128,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__31124_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__31124_SHARP_))),e.target);
});})(vec__31128,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__31128,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20569__auto__ = url_ico;
if(cljs.core.truth_(or__20569__auto__)){
return or__20569__auto__;
} else {
var or__20569__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20569__auto____$1)){
return or__20569__auto____$1;
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
var seq__31135_31139 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__31136_31140 = null;
var count__31137_31141 = (0);
var i__31138_31142 = (0);
while(true){
if((i__31138_31142 < count__31137_31141)){
var mrk_31143 = cljs.core._nth.call(null,chunk__31136_31140,i__31138_31142);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_31143);

var G__31144 = seq__31135_31139;
var G__31145 = chunk__31136_31140;
var G__31146 = count__31137_31141;
var G__31147 = (i__31138_31142 + (1));
seq__31135_31139 = G__31144;
chunk__31136_31140 = G__31145;
count__31137_31141 = G__31146;
i__31138_31142 = G__31147;
continue;
} else {
var temp__4657__auto___31148 = cljs.core.seq.call(null,seq__31135_31139);
if(temp__4657__auto___31148){
var seq__31135_31149__$1 = temp__4657__auto___31148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31135_31149__$1)){
var c__21383__auto___31150 = cljs.core.chunk_first.call(null,seq__31135_31149__$1);
var G__31151 = cljs.core.chunk_rest.call(null,seq__31135_31149__$1);
var G__31152 = c__21383__auto___31150;
var G__31153 = cljs.core.count.call(null,c__21383__auto___31150);
var G__31154 = (0);
seq__31135_31139 = G__31151;
chunk__31136_31140 = G__31152;
count__31137_31141 = G__31153;
i__31138_31142 = G__31154;
continue;
} else {
var mrk_31155 = cljs.core.first.call(null,seq__31135_31149__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_31155);

var G__31156 = cljs.core.next.call(null,seq__31135_31149__$1);
var G__31157 = null;
var G__31158 = (0);
var G__31159 = (0);
seq__31135_31139 = G__31156;
chunk__31136_31140 = G__31157;
count__31137_31141 = G__31158;
i__31138_31142 = G__31159;
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
var args31160 = [];
var len__21677__auto___31166 = arguments.length;
var i__21678__auto___31167 = (0);
while(true){
if((i__21678__auto___31167 < len__21677__auto___31166)){
args31160.push((arguments[i__21678__auto___31167]));

var G__31168 = (i__21678__auto___31167 + (1));
i__21678__auto___31167 = G__31168;
continue;
} else {
}
break;
}

var G__31162 = args31160.length;
switch (G__31162) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31160.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__31163 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__31163,(0),null);
var lon = cljs.core.nth.call(null,vec__31163,(1),null);
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
return (function (p1__31170_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__31170_SHARP_),cljs.core.second.call(null,p1__31170_SHARP_)));
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
var vec__31174 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__31174,(0),null);
var s = cljs.core.nth.call(null,vec__31174,(1),null);
var w = cljs.core.nth.call(null,vec__31174,(2),null);
var e = cljs.core.nth.call(null,vec__31174,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__31174,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__31174,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__31177,zoom,lock){
var vec__31181 = p__31177;
var lat = cljs.core.nth.call(null,vec__31181,(0),null);
var lon = cljs.core.nth.call(null,vec__31181,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20569__auto__ = zoom;
if(cljs.core.truth_(or__20569__auto__)){
return or__20569__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__31184_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__31184_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__31185_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__31185_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__31186_SHARP_){
return p1__31186_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__31187,ops){
var vec__31191 = p__31187;
var id1 = cljs.core.nth.call(null,vec__31191,(0),null);
var id2 = cljs.core.nth.call(null,vec__31191,(1),null);
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
var seq__31240 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__31241 = null;
var count__31242 = (0);
var i__31243 = (0);
while(true){
if((i__31243 < count__31242)){
var map__31244 = cljs.core._nth.call(null,chunk__31241,i__31243);
var map__31244__$1 = ((((!((map__31244 == null)))?((((map__31244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);
var ins = map__31244__$1;
var instruct = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31246_31286 = cljs.core._EQ_;
var expr__31247_31287 = instruct;
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31247_31287))){
var map__31249_31288 = ins;
var map__31249_31289__$1 = ((((!((map__31249_31288 == null)))?((((map__31249_31288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31249_31288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249_31288):map__31249_31288);
var id_31290 = cljs.core.get.call(null,map__31249_31289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31291 = cljs.core.get.call(null,map__31249_31289__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31290,vehicle_31291);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31247_31287))){
var map__31251_31292 = ins;
var map__31251_31293__$1 = ((((!((map__31251_31292 == null)))?((((map__31251_31292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31251_31292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31251_31292):map__31251_31292);
var id_31294 = cljs.core.get.call(null,map__31251_31293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31294);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31247_31287))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31247_31287))){
var map__31253_31295 = ins;
var map__31253_31296__$1 = ((((!((map__31253_31295 == null)))?((((map__31253_31295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253_31295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253_31295):map__31253_31295);
var id_31297 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31298 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31299 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31300 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31301 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_31302 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_31303 = cljs.core.get.call(null,map__31253_31296__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_31297)){
chart.client.popup.call(null,id_31297,html_31300,time_31301);
} else {
if(cljs.core.truth_((function (){var and__20557__auto__ = width_31302;
if(cljs.core.truth_(and__20557__auto__)){
var and__20557__auto____$1 = height_31303;
if(cljs.core.truth_(and__20557__auto____$1)){
var and__20557__auto____$2 = lat_31298;
if(cljs.core.truth_(and__20557__auto____$2)){
return lon_31299;
} else {
return and__20557__auto____$2;
}
} else {
return and__20557__auto____$1;
}
} else {
return and__20557__auto__;
}
})())){
chart.client.popup.call(null,lat_31298,lon_31299,html_31300,time_31301,width_31302,height_31303);
} else {
if(cljs.core.truth_((function (){var and__20557__auto__ = lat_31298;
if(cljs.core.truth_(and__20557__auto__)){
return lon_31299;
} else {
return and__20557__auto__;
}
})())){
chart.client.popup.call(null,lat_31298,lon_31299,html_31300,time_31301);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__31247_31287))){
var map__31255_31304 = ins;
var map__31255_31305__$1 = ((((!((map__31255_31304 == null)))?((((map__31255_31304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31255_31304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31255_31304):map__31255_31304);
var id_31306 = cljs.core.get.call(null,map__31255_31305__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_31307 = cljs.core.get.call(null,map__31255_31305__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_31308 = cljs.core.get.call(null,map__31255_31305__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_31309 = cljs.core.get.call(null,map__31255_31305__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_31306,points_31307,options_31308,time_31309);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__31247_31287))){
var map__31257_31310 = ins;
var map__31257_31311__$1 = ((((!((map__31257_31310 == null)))?((((map__31257_31310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31257_31310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257_31310):map__31257_31310);
var coord_31312 = cljs.core.get.call(null,map__31257_31311__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_31313 = cljs.core.get.call(null,map__31257_31311__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_31314 = cljs.core.get.call(null,map__31257_31311__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_31312,zoom_31313,lock_31314);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__31247_31287))){
var map__31259_31315 = ins;
var map__31259_31316__$1 = ((((!((map__31259_31315 == null)))?((((map__31259_31315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31259_31315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31259_31315):map__31259_31315);
var iname_31317 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_31318 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_31319 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31320 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_31321 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_31322 = cljs.core.get.call(null,map__31259_31316__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_31317,tip_31318,lat_31319,lon_31320,feature_31321,url_ico_31322);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__31247_31287))){
var map__31261_31323 = ins;
var map__31261_31324__$1 = ((((!((map__31261_31323 == null)))?((((map__31261_31323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31261_31323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31261_31323):map__31261_31323);
var iname_31325 = cljs.core.get.call(null,map__31261_31324__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_31325);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__31247_31287))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__31246_31286.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__31247_31287))){
var map__31263_31326 = ins;
var map__31263_31327__$1 = ((((!((map__31263_31326 == null)))?((((map__31263_31326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31263_31326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31263_31326):map__31263_31326);
var ids_31328 = cljs.core.get.call(null,map__31263_31327__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_31329 = cljs.core.get.call(null,map__31263_31327__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_31328,options_31329);
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

var G__31330 = seq__31240;
var G__31331 = chunk__31241;
var G__31332 = count__31242;
var G__31333 = (i__31243 + (1));
seq__31240 = G__31330;
chunk__31241 = G__31331;
count__31242 = G__31332;
i__31243 = G__31333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31240);
if(temp__4657__auto__){
var seq__31240__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31240__$1)){
var c__21383__auto__ = cljs.core.chunk_first.call(null,seq__31240__$1);
var G__31334 = cljs.core.chunk_rest.call(null,seq__31240__$1);
var G__31335 = c__21383__auto__;
var G__31336 = cljs.core.count.call(null,c__21383__auto__);
var G__31337 = (0);
seq__31240 = G__31334;
chunk__31241 = G__31335;
count__31242 = G__31336;
i__31243 = G__31337;
continue;
} else {
var map__31265 = cljs.core.first.call(null,seq__31240__$1);
var map__31265__$1 = ((((!((map__31265 == null)))?((((map__31265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31265):map__31265);
var ins = map__31265__$1;
var instruct = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__31267_31338 = cljs.core._EQ_;
var expr__31268_31339 = instruct;
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__31268_31339))){
var map__31270_31340 = ins;
var map__31270_31341__$1 = ((((!((map__31270_31340 == null)))?((((map__31270_31340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31270_31340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270_31340):map__31270_31340);
var id_31342 = cljs.core.get.call(null,map__31270_31341__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_31343 = cljs.core.get.call(null,map__31270_31341__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_31342,vehicle_31343);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__31268_31339))){
var map__31272_31344 = ins;
var map__31272_31345__$1 = ((((!((map__31272_31344 == null)))?((((map__31272_31344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31272_31344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31272_31344):map__31272_31344);
var id_31346 = cljs.core.get.call(null,map__31272_31345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_31346);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__31268_31339))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__31268_31339))){
var map__31274_31347 = ins;
var map__31274_31348__$1 = ((((!((map__31274_31347 == null)))?((((map__31274_31347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31274_31347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274_31347):map__31274_31347);
var id_31349 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_31350 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31351 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_31352 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_31353 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_31354 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_31355 = cljs.core.get.call(null,map__31274_31348__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_31349)){
chart.client.popup.call(null,id_31349,html_31352,time_31353);
} else {
if(cljs.core.truth_((function (){var and__20557__auto__ = width_31354;
if(cljs.core.truth_(and__20557__auto__)){
var and__20557__auto____$1 = height_31355;
if(cljs.core.truth_(and__20557__auto____$1)){
var and__20557__auto____$2 = lat_31350;
if(cljs.core.truth_(and__20557__auto____$2)){
return lon_31351;
} else {
return and__20557__auto____$2;
}
} else {
return and__20557__auto____$1;
}
} else {
return and__20557__auto__;
}
})())){
chart.client.popup.call(null,lat_31350,lon_31351,html_31352,time_31353,width_31354,height_31355);
} else {
if(cljs.core.truth_((function (){var and__20557__auto__ = lat_31350;
if(cljs.core.truth_(and__20557__auto__)){
return lon_31351;
} else {
return and__20557__auto__;
}
})())){
chart.client.popup.call(null,lat_31350,lon_31351,html_31352,time_31353);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__31268_31339))){
var map__31276_31356 = ins;
var map__31276_31357__$1 = ((((!((map__31276_31356 == null)))?((((map__31276_31356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276_31356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276_31356):map__31276_31356);
var id_31358 = cljs.core.get.call(null,map__31276_31357__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_31359 = cljs.core.get.call(null,map__31276_31357__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_31360 = cljs.core.get.call(null,map__31276_31357__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_31361 = cljs.core.get.call(null,map__31276_31357__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_31358,points_31359,options_31360,time_31361);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__31268_31339))){
var map__31278_31362 = ins;
var map__31278_31363__$1 = ((((!((map__31278_31362 == null)))?((((map__31278_31362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31278_31362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31278_31362):map__31278_31362);
var coord_31364 = cljs.core.get.call(null,map__31278_31363__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_31365 = cljs.core.get.call(null,map__31278_31363__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_31366 = cljs.core.get.call(null,map__31278_31363__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_31364,zoom_31365,lock_31366);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__31268_31339))){
var map__31280_31367 = ins;
var map__31280_31368__$1 = ((((!((map__31280_31367 == null)))?((((map__31280_31367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31280_31367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31280_31367):map__31280_31367);
var iname_31369 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_31370 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_31371 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_31372 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_31373 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_31374 = cljs.core.get.call(null,map__31280_31368__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_31369,tip_31370,lat_31371,lon_31372,feature_31373,url_ico_31374);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__31268_31339))){
var map__31282_31375 = ins;
var map__31282_31376__$1 = ((((!((map__31282_31375 == null)))?((((map__31282_31375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31282_31375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31282_31375):map__31282_31375);
var iname_31377 = cljs.core.get.call(null,map__31282_31376__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_31377);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__31268_31339))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__31267_31338.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__31268_31339))){
var map__31284_31378 = ins;
var map__31284_31379__$1 = ((((!((map__31284_31378 == null)))?((((map__31284_31378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31284_31378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31284_31378):map__31284_31378);
var ids_31380 = cljs.core.get.call(null,map__31284_31379__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_31381 = cljs.core.get.call(null,map__31284_31379__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_31380,options_31381);
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

var G__31382 = cljs.core.next.call(null,seq__31240__$1);
var G__31383 = null;
var G__31384 = (0);
var G__31385 = (0);
seq__31240 = G__31382;
chunk__31241 = G__31383;
count__31242 = G__31384;
i__31243 = G__31385;
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
var args31387 = [];
var len__21677__auto___31390 = arguments.length;
var i__21678__auto___31391 = (0);
while(true){
if((i__21678__auto___31391 < len__21677__auto___31390)){
args31387.push((arguments[i__21678__auto___31391]));

var G__31392 = (i__21678__auto___31391 + (1));
i__21678__auto___31391 = G__31392;
continue;
} else {
}
break;
}

var G__31389 = args31387.length;
switch (G__31389) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31387.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__31386_SHARP_){
return chart.client.move_to.call(null,sel,p1__31386_SHARP_);
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
var args31398 = [];
var len__21677__auto___31401 = arguments.length;
var i__21678__auto___31402 = (0);
while(true){
if((i__21678__auto___31402 < len__21677__auto___31401)){
args31398.push((arguments[i__21678__auto___31402]));

var G__31403 = (i__21678__auto___31402 + (1));
i__21678__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var G__31400 = args31398.length;
switch (G__31400) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31398.length)].join('')));

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
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__31394_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__31394_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__31395_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__31395_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__31396_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__31396_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__31397_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__31397_SHARP_);
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
var args31407 = [];
var len__21677__auto___31410 = arguments.length;
var i__21678__auto___31411 = (0);
while(true){
if((i__21678__auto___31411 < len__21677__auto___31410)){
args31407.push((arguments[i__21678__auto___31411]));

var G__31412 = (i__21678__auto___31411 + (1));
i__21678__auto___31411 = G__31412;
continue;
} else {
}
break;
}

var G__31409 = args31407.length;
switch (G__31409) {
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
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31407.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null));

return ask.master.get_answer.call(null,chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
cljs.core.println.call(null,(1),sel);

ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null));

return ask.master.get_answer.call(null,(function (p1__31405_SHARP_){
return chart.client.question.call(null,sel,p1__31405_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
cljs.core.println.call(null,(20),sel);

ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null));

return ask.master.get_answer.call(null,(function (p1__31406_SHARP_){
return chart.client.question.call(null,pred,sel,p1__31406_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
cljs.core.println.call(null,(30),sel);

return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null));
}))
;
});

chart.client.question.cljs$lang$maxFixedArity = 3;

chart.client.command = (function chart$client$command(cmd){
var pred__31417_31420 = cljs.core._EQ_;
var expr__31418_31421 = cmd;
if(cljs.core.truth_(pred__31417_31420.call(null,"commands",expr__31418_31421))){
} else {
if(cljs.core.truth_(pred__31417_31420.call(null,"watch-visible",expr__31418_31421))){
var bnd_31422 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_31423 = [cljs.core.str("?n="),cljs.core.str(bnd_31422.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_31422.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_31422.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_31422.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_31423)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__31417_31420.call(null,"move-to",expr__31418_31421))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__31417_31420.call(null,"schedule",expr__31418_31421))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__31417_31420.call(null,"question",expr__31418_31421))){
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
}catch (e31425){if((e31425 instanceof Error)){
var e_31426 = e31425;
cljs.core.println.call(null,e_31426);
} else {
throw e31425;

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