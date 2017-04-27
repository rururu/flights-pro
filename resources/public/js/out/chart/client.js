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
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/place3.jpeg")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__14142 = response;
var map__14142__$1 = ((((!((map__14142 == null)))?((((map__14142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14142):map__14142);
var status = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_14150 = cljs.core.deref.call(null,vmp);
var mrk_14151 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_14150);
var vec__14147_14152 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_14150);
var lat_14153 = cljs.core.nth.call(null,vec__14147_14152,(0),null);
var lon_14154 = cljs.core.nth.call(null,vec__14147_14152,(1),null);
var pos_14155 = (new L.LatLng(lat_14153,lon_14154));
mrk_14151.setLatLng(pos_14155);

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
var seq__14160_14164 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__14161_14165 = null;
var count__14162_14166 = (0);
var i__14163_14167 = (0);
while(true){
if((i__14163_14167 < count__14162_14166)){
var veh_14168 = cljs.core._nth.call(null,chunk__14161_14165,i__14163_14167);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_14168)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_14168)));

var G__14169 = seq__14160_14164;
var G__14170 = chunk__14161_14165;
var G__14171 = count__14162_14166;
var G__14172 = (i__14163_14167 + (1));
seq__14160_14164 = G__14169;
chunk__14161_14165 = G__14170;
count__14162_14166 = G__14171;
i__14163_14167 = G__14172;
continue;
} else {
var temp__4657__auto___14173 = cljs.core.seq.call(null,seq__14160_14164);
if(temp__4657__auto___14173){
var seq__14160_14174__$1 = temp__4657__auto___14173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14160_14174__$1)){
var c__10403__auto___14175 = cljs.core.chunk_first.call(null,seq__14160_14174__$1);
var G__14176 = cljs.core.chunk_rest.call(null,seq__14160_14174__$1);
var G__14177 = c__10403__auto___14175;
var G__14178 = cljs.core.count.call(null,c__10403__auto___14175);
var G__14179 = (0);
seq__14160_14164 = G__14176;
chunk__14161_14165 = G__14177;
count__14162_14166 = G__14178;
i__14163_14167 = G__14179;
continue;
} else {
var veh_14180 = cljs.core.first.call(null,seq__14160_14174__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_14180)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_14180)));

var G__14181 = cljs.core.next.call(null,seq__14160_14174__$1);
var G__14182 = null;
var G__14183 = (0);
var G__14184 = (0);
seq__14160_14164 = G__14181;
chunk__14161_14165 = G__14182;
count__14162_14166 = G__14183;
i__14163_14167 = G__14184;
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

var vec__14189 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__14189,(0),null);
var lon = cljs.core.nth.call(null,vec__14189,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__14189,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__14189,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__14185_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__14185_SHARP_))),e.target);
});})(vec__14189,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__14189,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__9589__auto__ = url_ico;
if(cljs.core.truth_(or__9589__auto__)){
return or__9589__auto__;
} else {
var or__9589__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__9589__auto____$1)){
return or__9589__auto____$1;
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
var seq__14196_14200 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__14197_14201 = null;
var count__14198_14202 = (0);
var i__14199_14203 = (0);
while(true){
if((i__14199_14203 < count__14198_14202)){
var mrk_14204 = cljs.core._nth.call(null,chunk__14197_14201,i__14199_14203);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_14204);

var G__14205 = seq__14196_14200;
var G__14206 = chunk__14197_14201;
var G__14207 = count__14198_14202;
var G__14208 = (i__14199_14203 + (1));
seq__14196_14200 = G__14205;
chunk__14197_14201 = G__14206;
count__14198_14202 = G__14207;
i__14199_14203 = G__14208;
continue;
} else {
var temp__4657__auto___14209 = cljs.core.seq.call(null,seq__14196_14200);
if(temp__4657__auto___14209){
var seq__14196_14210__$1 = temp__4657__auto___14209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14196_14210__$1)){
var c__10403__auto___14211 = cljs.core.chunk_first.call(null,seq__14196_14210__$1);
var G__14212 = cljs.core.chunk_rest.call(null,seq__14196_14210__$1);
var G__14213 = c__10403__auto___14211;
var G__14214 = cljs.core.count.call(null,c__10403__auto___14211);
var G__14215 = (0);
seq__14196_14200 = G__14212;
chunk__14197_14201 = G__14213;
count__14198_14202 = G__14214;
i__14199_14203 = G__14215;
continue;
} else {
var mrk_14216 = cljs.core.first.call(null,seq__14196_14210__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_14216);

var G__14217 = cljs.core.next.call(null,seq__14196_14210__$1);
var G__14218 = null;
var G__14219 = (0);
var G__14220 = (0);
seq__14196_14200 = G__14217;
chunk__14197_14201 = G__14218;
count__14198_14202 = G__14219;
i__14199_14203 = G__14220;
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
var args14221 = [];
var len__10697__auto___14227 = arguments.length;
var i__10698__auto___14228 = (0);
while(true){
if((i__10698__auto___14228 < len__10697__auto___14227)){
args14221.push((arguments[i__10698__auto___14228]));

var G__14229 = (i__10698__auto___14228 + (1));
i__10698__auto___14228 = G__14229;
continue;
} else {
}
break;
}

var G__14223 = args14221.length;
switch (G__14223) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14221.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__14224 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__14224,(0),null);
var lon = cljs.core.nth.call(null,vec__14224,(1),null);
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
return (function (p1__14231_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__14231_SHARP_),cljs.core.second.call(null,p1__14231_SHARP_)));
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
var vec__14235 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__14235,(0),null);
var s = cljs.core.nth.call(null,vec__14235,(1),null);
var w = cljs.core.nth.call(null,vec__14235,(2),null);
var e = cljs.core.nth.call(null,vec__14235,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__14235,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__14235,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__14238,zoom,lock){
var vec__14242 = p__14238;
var lat = cljs.core.nth.call(null,vec__14242,(0),null);
var lon = cljs.core.nth.call(null,vec__14242,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__9589__auto__ = zoom;
if(cljs.core.truth_(or__9589__auto__)){
return or__9589__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__14245_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__14245_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__14246_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__14246_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__14247_SHARP_){
return p1__14247_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__14248,ops){
var vec__14252 = p__14248;
var id1 = cljs.core.nth.call(null,vec__14252,(0),null);
var id2 = cljs.core.nth.call(null,vec__14252,(1),null);
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
var args14256 = [];
var len__10697__auto___14259 = arguments.length;
var i__10698__auto___14260 = (0);
while(true){
if((i__10698__auto___14260 < len__10697__auto___14259)){
args14256.push((arguments[i__10698__auto___14260]));

var G__14261 = (i__10698__auto___14260 + (1));
i__10698__auto___14260 = G__14261;
continue;
} else {
}
break;
}

var G__14258 = args14256.length;
switch (G__14258) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14256.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14255_SHARP_){
return chart.client.select_airport.call(null,sel,p1__14255_SHARP_);
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
var seq__14319 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__14320 = null;
var count__14321 = (0);
var i__14322 = (0);
while(true){
if((i__14322 < count__14321)){
var map__14323 = cljs.core._nth.call(null,chunk__14320,i__14322);
var map__14323__$1 = ((((!((map__14323 == null)))?((((map__14323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14323):map__14323);
var ins = map__14323__$1;
var instruct = cljs.core.get.call(null,map__14323__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__14325_14375 = cljs.core._EQ_;
var expr__14326_14376 = instruct;
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__14326_14376))){
var map__14328_14377 = ins;
var map__14328_14378__$1 = ((((!((map__14328_14377 == null)))?((((map__14328_14377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14328_14377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14328_14377):map__14328_14377);
var id_14379 = cljs.core.get.call(null,map__14328_14378__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_14380 = cljs.core.get.call(null,map__14328_14378__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_14379,vehicle_14380);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__14326_14376))){
var map__14330_14381 = ins;
var map__14330_14382__$1 = ((((!((map__14330_14381 == null)))?((((map__14330_14381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14330_14381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14330_14381):map__14330_14381);
var id_14383 = cljs.core.get.call(null,map__14330_14382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_14383);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__14326_14376))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__14326_14376))){
var map__14332_14384 = ins;
var map__14332_14385__$1 = ((((!((map__14332_14384 == null)))?((((map__14332_14384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14332_14384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14332_14384):map__14332_14384);
var id_14386 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_14387 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14388 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_14389 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_14390 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_14391 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_14392 = cljs.core.get.call(null,map__14332_14385__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_14386)){
chart.client.popup.call(null,id_14386,html_14389,time_14390);
} else {
if(cljs.core.truth_((function (){var and__9577__auto__ = width_14391;
if(cljs.core.truth_(and__9577__auto__)){
var and__9577__auto____$1 = height_14392;
if(cljs.core.truth_(and__9577__auto____$1)){
var and__9577__auto____$2 = lat_14387;
if(cljs.core.truth_(and__9577__auto____$2)){
return lon_14388;
} else {
return and__9577__auto____$2;
}
} else {
return and__9577__auto____$1;
}
} else {
return and__9577__auto__;
}
})())){
chart.client.popup.call(null,lat_14387,lon_14388,html_14389,time_14390,width_14391,height_14392);
} else {
if(cljs.core.truth_((function (){var and__9577__auto__ = lat_14387;
if(cljs.core.truth_(and__9577__auto__)){
return lon_14388;
} else {
return and__9577__auto__;
}
})())){
chart.client.popup.call(null,lat_14387,lon_14388,html_14389,time_14390);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__14326_14376))){
var map__14334_14393 = ins;
var map__14334_14394__$1 = ((((!((map__14334_14393 == null)))?((((map__14334_14393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14334_14393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14334_14393):map__14334_14393);
var id_14395 = cljs.core.get.call(null,map__14334_14394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_14396 = cljs.core.get.call(null,map__14334_14394__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_14397 = cljs.core.get.call(null,map__14334_14394__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_14398 = cljs.core.get.call(null,map__14334_14394__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_14395,points_14396,options_14397,time_14398);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__14326_14376))){
var map__14336_14399 = ins;
var map__14336_14400__$1 = ((((!((map__14336_14399 == null)))?((((map__14336_14399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14336_14399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14336_14399):map__14336_14399);
var coord_14401 = cljs.core.get.call(null,map__14336_14400__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_14402 = cljs.core.get.call(null,map__14336_14400__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_14403 = cljs.core.get.call(null,map__14336_14400__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_14401,zoom_14402,lock_14403);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__14326_14376))){
var map__14338_14404 = ins;
var map__14338_14405__$1 = ((((!((map__14338_14404 == null)))?((((map__14338_14404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14338_14404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14338_14404):map__14338_14404);
var iname_14406 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_14407 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_14408 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14409 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_14410 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_14411 = cljs.core.get.call(null,map__14338_14405__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_14406,tip_14407,lat_14408,lon_14409,feature_14410,url_ico_14411);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__14326_14376))){
var map__14340_14412 = ins;
var map__14340_14413__$1 = ((((!((map__14340_14412 == null)))?((((map__14340_14412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14340_14412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14340_14412):map__14340_14412);
var iname_14414 = cljs.core.get.call(null,map__14340_14413__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_14414);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__14326_14376))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__14326_14376))){
var map__14342_14415 = ins;
var map__14342_14416__$1 = ((((!((map__14342_14415 == null)))?((((map__14342_14415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14342_14415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14342_14415):map__14342_14415);
var ids_14417 = cljs.core.get.call(null,map__14342_14416__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_14418 = cljs.core.get.call(null,map__14342_14416__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_14417,options_14418);
} else {
if(cljs.core.truth_(pred__14325_14375.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__14326_14376))){
var map__14344_14419 = ins;
var map__14344_14420__$1 = ((((!((map__14344_14419 == null)))?((((map__14344_14419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14344_14419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14344_14419):map__14344_14419);
var question_14421 = cljs.core.get.call(null,map__14344_14420__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_14422 = cljs.core.get.call(null,map__14344_14420__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__14346_14423 = cljs.core._EQ_;
var expr__14347_14424 = question_14421;
if(cljs.core.truth_(pred__14346_14423.call(null,"city",expr__14347_14424))){
chart.client.select_city.call(null,param_14422);
} else {
if(cljs.core.truth_(pred__14346_14423.call(null,"airport",expr__14347_14424))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14347_14424)].join('')));
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

var G__14425 = seq__14319;
var G__14426 = chunk__14320;
var G__14427 = count__14321;
var G__14428 = (i__14322 + (1));
seq__14319 = G__14425;
chunk__14320 = G__14426;
count__14321 = G__14427;
i__14322 = G__14428;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14319);
if(temp__4657__auto__){
var seq__14319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14319__$1)){
var c__10403__auto__ = cljs.core.chunk_first.call(null,seq__14319__$1);
var G__14429 = cljs.core.chunk_rest.call(null,seq__14319__$1);
var G__14430 = c__10403__auto__;
var G__14431 = cljs.core.count.call(null,c__10403__auto__);
var G__14432 = (0);
seq__14319 = G__14429;
chunk__14320 = G__14430;
count__14321 = G__14431;
i__14322 = G__14432;
continue;
} else {
var map__14349 = cljs.core.first.call(null,seq__14319__$1);
var map__14349__$1 = ((((!((map__14349 == null)))?((((map__14349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14349):map__14349);
var ins = map__14349__$1;
var instruct = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__14351_14433 = cljs.core._EQ_;
var expr__14352_14434 = instruct;
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__14352_14434))){
var map__14354_14435 = ins;
var map__14354_14436__$1 = ((((!((map__14354_14435 == null)))?((((map__14354_14435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14354_14435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14354_14435):map__14354_14435);
var id_14437 = cljs.core.get.call(null,map__14354_14436__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_14438 = cljs.core.get.call(null,map__14354_14436__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_14437,vehicle_14438);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__14352_14434))){
var map__14356_14439 = ins;
var map__14356_14440__$1 = ((((!((map__14356_14439 == null)))?((((map__14356_14439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14356_14439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14356_14439):map__14356_14439);
var id_14441 = cljs.core.get.call(null,map__14356_14440__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_14441);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__14352_14434))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__14352_14434))){
var map__14358_14442 = ins;
var map__14358_14443__$1 = ((((!((map__14358_14442 == null)))?((((map__14358_14442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14358_14442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14358_14442):map__14358_14442);
var id_14444 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_14445 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14446 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_14447 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_14448 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_14449 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_14450 = cljs.core.get.call(null,map__14358_14443__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_14444)){
chart.client.popup.call(null,id_14444,html_14447,time_14448);
} else {
if(cljs.core.truth_((function (){var and__9577__auto__ = width_14449;
if(cljs.core.truth_(and__9577__auto__)){
var and__9577__auto____$1 = height_14450;
if(cljs.core.truth_(and__9577__auto____$1)){
var and__9577__auto____$2 = lat_14445;
if(cljs.core.truth_(and__9577__auto____$2)){
return lon_14446;
} else {
return and__9577__auto____$2;
}
} else {
return and__9577__auto____$1;
}
} else {
return and__9577__auto__;
}
})())){
chart.client.popup.call(null,lat_14445,lon_14446,html_14447,time_14448,width_14449,height_14450);
} else {
if(cljs.core.truth_((function (){var and__9577__auto__ = lat_14445;
if(cljs.core.truth_(and__9577__auto__)){
return lon_14446;
} else {
return and__9577__auto__;
}
})())){
chart.client.popup.call(null,lat_14445,lon_14446,html_14447,time_14448);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__14352_14434))){
var map__14360_14451 = ins;
var map__14360_14452__$1 = ((((!((map__14360_14451 == null)))?((((map__14360_14451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14360_14451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14360_14451):map__14360_14451);
var id_14453 = cljs.core.get.call(null,map__14360_14452__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_14454 = cljs.core.get.call(null,map__14360_14452__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_14455 = cljs.core.get.call(null,map__14360_14452__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_14456 = cljs.core.get.call(null,map__14360_14452__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_14453,points_14454,options_14455,time_14456);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__14352_14434))){
var map__14362_14457 = ins;
var map__14362_14458__$1 = ((((!((map__14362_14457 == null)))?((((map__14362_14457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14362_14457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14362_14457):map__14362_14457);
var coord_14459 = cljs.core.get.call(null,map__14362_14458__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_14460 = cljs.core.get.call(null,map__14362_14458__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_14461 = cljs.core.get.call(null,map__14362_14458__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_14459,zoom_14460,lock_14461);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__14352_14434))){
var map__14364_14462 = ins;
var map__14364_14463__$1 = ((((!((map__14364_14462 == null)))?((((map__14364_14462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14364_14462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14364_14462):map__14364_14462);
var iname_14464 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_14465 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_14466 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_14467 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_14468 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_14469 = cljs.core.get.call(null,map__14364_14463__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_14464,tip_14465,lat_14466,lon_14467,feature_14468,url_ico_14469);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__14352_14434))){
var map__14366_14470 = ins;
var map__14366_14471__$1 = ((((!((map__14366_14470 == null)))?((((map__14366_14470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14366_14470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14366_14470):map__14366_14470);
var iname_14472 = cljs.core.get.call(null,map__14366_14471__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_14472);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__14352_14434))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__14352_14434))){
var map__14368_14473 = ins;
var map__14368_14474__$1 = ((((!((map__14368_14473 == null)))?((((map__14368_14473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14368_14473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14368_14473):map__14368_14473);
var ids_14475 = cljs.core.get.call(null,map__14368_14474__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_14476 = cljs.core.get.call(null,map__14368_14474__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_14475,options_14476);
} else {
if(cljs.core.truth_(pred__14351_14433.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__14352_14434))){
var map__14370_14477 = ins;
var map__14370_14478__$1 = ((((!((map__14370_14477 == null)))?((((map__14370_14477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14370_14477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14370_14477):map__14370_14477);
var question_14479 = cljs.core.get.call(null,map__14370_14478__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_14480 = cljs.core.get.call(null,map__14370_14478__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__14372_14481 = cljs.core._EQ_;
var expr__14373_14482 = question_14479;
if(cljs.core.truth_(pred__14372_14481.call(null,"city",expr__14373_14482))){
chart.client.select_city.call(null,param_14480);
} else {
if(cljs.core.truth_(pred__14372_14481.call(null,"airport",expr__14373_14482))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14373_14482)].join('')));
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

var G__14483 = cljs.core.next.call(null,seq__14319__$1);
var G__14484 = null;
var G__14485 = (0);
var G__14486 = (0);
seq__14319 = G__14483;
chunk__14320 = G__14484;
count__14321 = G__14485;
i__14322 = G__14486;
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
var args14488 = [];
var len__10697__auto___14491 = arguments.length;
var i__10698__auto___14492 = (0);
while(true){
if((i__10698__auto___14492 < len__10697__auto___14491)){
args14488.push((arguments[i__10698__auto___14492]));

var G__14493 = (i__10698__auto___14492 + (1));
i__10698__auto___14492 = G__14493;
continue;
} else {
}
break;
}

var G__14490 = args14488.length;
switch (G__14490) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14488.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14487_SHARP_){
return chart.client.move_to.call(null,sel,p1__14487_SHARP_);
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
var args14499 = [];
var len__10697__auto___14502 = arguments.length;
var i__10698__auto___14503 = (0);
while(true){
if((i__10698__auto___14503 < len__10697__auto___14502)){
args14499.push((arguments[i__10698__auto___14503]));

var G__14504 = (i__10698__auto___14503 + (1));
i__10698__auto___14503 = G__14504;
continue;
} else {
}
break;
}

var G__14501 = args14499.length;
switch (G__14501) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14499.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__14495_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__14495_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14496_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__14496_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__14497_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__14497_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__14498_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__14498_SHARP_);
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
var args14509 = [];
var len__10697__auto___14512 = arguments.length;
var i__10698__auto___14513 = (0);
while(true){
if((i__10698__auto___14513 < len__10697__auto___14512)){
args14509.push((arguments[i__10698__auto___14513]));

var G__14514 = (i__10698__auto___14513 + (1));
i__10698__auto___14513 = G__14514;
continue;
} else {
}
break;
}

var G__14511 = args14509.length;
switch (G__14511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14509.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__14506_SHARP_){
return chart.client.question.call(null,sel,p1__14506_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__14507_SHARP_){
return chart.client.question.call(null,pred,sel,p1__14507_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__14508_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__14508_SHARP_);
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
var pred__14519_14522 = cljs.core._EQ_;
var expr__14520_14523 = cmd;
if(cljs.core.truth_(pred__14519_14522.call(null,"commands",expr__14520_14523))){
} else {
if(cljs.core.truth_(pred__14519_14522.call(null,"watch-visible",expr__14520_14523))){
var bnd_14524 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_14525 = [cljs.core.str("?n="),cljs.core.str(bnd_14524.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_14524.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_14524.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_14524.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_14525)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__14519_14522.call(null,"move-to",expr__14520_14523))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__14519_14522.call(null,"schedule",expr__14520_14523))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__14519_14522.call(null,"question",expr__14520_14523))){
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
}catch (e14527){if((e14527 instanceof Error)){
var e_14528 = e14527;
cljs.core.println.call(null,e_14528);
} else {
throw e14527;

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