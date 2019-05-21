// Compiled by ClojureScript 1.10.439 {}
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
chart.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/"].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/chart/"].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/directives/"].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/instructions/"].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/command/"].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/question/"].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/answer/"].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/manual-data/"].join('')], null);
chart.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(3030),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","default-pois","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/greenpln32.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/river.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/edu.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/landmark.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/city.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/greypln32.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/event.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/waterbody.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/r.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/isle.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/place3.jpeg"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/railwaystation.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/mountain.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/bluepln32.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/airport.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/purplepln32.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/b.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/info.png"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.PORT),"/img/redpln32.png"].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__30117 = response;
var map__30117__$1 = (((((!((map__30117 == null))))?(((((map__30117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);
var status = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
chart.client.no_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null);
chart.client.ONBOARD = "MANUAL";
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__5720__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__5720__auto__)){
var vmp = temp__5720__auto__;
carr.move.move.call(null,vmp);

var mp_30122 = cljs.core.deref.call(null,vmp);
var mrk_30123 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_30122);
var vec__30119_30124 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_30122);
var lat_30125 = cljs.core.nth.call(null,vec__30119_30124,(0),null);
var lon_30126 = cljs.core.nth.call(null,vec__30119_30124,(1),null);
var pos_30127 = (new L.LatLng(lat_30125,lon_30126));
mrk_30123.setLatLng(pos_30127);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__5720__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__5720__auto__)){
var veh = temp__5720__auto__;
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__30128_30132 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__30129_30133 = null;
var count__30130_30134 = (0);
var i__30131_30135 = (0);
while(true){
if((i__30131_30135 < count__30130_30134)){
var veh_30136 = cljs.core._nth.call(null,chunk__30129_30133,i__30131_30135);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30136)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30136)));


var G__30137 = seq__30128_30132;
var G__30138 = chunk__30129_30133;
var G__30139 = count__30130_30134;
var G__30140 = (i__30131_30135 + (1));
seq__30128_30132 = G__30137;
chunk__30129_30133 = G__30138;
count__30130_30134 = G__30139;
i__30131_30135 = G__30140;
continue;
} else {
var temp__5720__auto___30141 = cljs.core.seq.call(null,seq__30128_30132);
if(temp__5720__auto___30141){
var seq__30128_30142__$1 = temp__5720__auto___30141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30128_30142__$1)){
var c__4461__auto___30143 = cljs.core.chunk_first.call(null,seq__30128_30142__$1);
var G__30144 = cljs.core.chunk_rest.call(null,seq__30128_30142__$1);
var G__30145 = c__4461__auto___30143;
var G__30146 = cljs.core.count.call(null,c__4461__auto___30143);
var G__30147 = (0);
seq__30128_30132 = G__30144;
chunk__30129_30133 = G__30145;
count__30130_30134 = G__30146;
i__30131_30135 = G__30147;
continue;
} else {
var veh_30148 = cljs.core.first.call(null,seq__30128_30142__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30148)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_30148)));


var G__30149 = cljs.core.next.call(null,seq__30128_30142__$1);
var G__30150 = null;
var G__30151 = (0);
var G__30152 = (0);
seq__30128_30132 = G__30149;
chunk__30129_30133 = G__30150;
count__30130_30134 = G__30151;
i__30131_30135 = G__30152;
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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"info?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__30154 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__30154,(0),null);
var lon = cljs.core.nth.call(null,vec__30154,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__30154,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__30154,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__30153_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__30153_SHARP_))),e.target);
});})(vec__30154,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__30154,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__4047__auto__ = url_ico;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return chart.client.URL_ICO.call(null,"default");
}
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.marker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,["pm",cljs.core.str.cljs$core$IFn$_invoke$arity$1(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.delete_placemark = (function chart$client$delete_placemark(iname){
var temp__5720__auto__ = cljs.core.deref.call(null,chart.client.PLACEMARKS).call(null,iname);
if(cljs.core.truth_(temp__5720__auto__)){
var mrk = temp__5720__auto__;
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname));
} else {
return null;
}
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__30157_30161 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__30158_30162 = null;
var count__30159_30163 = (0);
var i__30160_30164 = (0);
while(true){
if((i__30160_30164 < count__30159_30163)){
var mrk_30165 = cljs.core._nth.call(null,chunk__30158_30162,i__30160_30164);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_30165);


var G__30166 = seq__30157_30161;
var G__30167 = chunk__30158_30162;
var G__30168 = count__30159_30163;
var G__30169 = (i__30160_30164 + (1));
seq__30157_30161 = G__30166;
chunk__30158_30162 = G__30167;
count__30159_30163 = G__30168;
i__30160_30164 = G__30169;
continue;
} else {
var temp__5720__auto___30170 = cljs.core.seq.call(null,seq__30157_30161);
if(temp__5720__auto___30170){
var seq__30157_30171__$1 = temp__5720__auto___30170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30157_30171__$1)){
var c__4461__auto___30172 = cljs.core.chunk_first.call(null,seq__30157_30171__$1);
var G__30173 = cljs.core.chunk_rest.call(null,seq__30157_30171__$1);
var G__30174 = c__4461__auto___30172;
var G__30175 = cljs.core.count.call(null,c__4461__auto___30172);
var G__30176 = (0);
seq__30157_30161 = G__30173;
chunk__30158_30162 = G__30174;
count__30159_30163 = G__30175;
i__30160_30164 = G__30176;
continue;
} else {
var mrk_30177 = cljs.core.first.call(null,seq__30157_30171__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_30177);


var G__30178 = cljs.core.next.call(null,seq__30157_30171__$1);
var G__30179 = null;
var G__30180 = (0);
var G__30181 = (0);
seq__30157_30161 = G__30178;
chunk__30158_30162 = G__30179;
count__30159_30163 = G__30180;
i__30160_30164 = G__30181;
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
var G__30183 = arguments.length;
switch (G__30183) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__30184 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__30184,(0),null);
var lon = cljs.core.nth.call(null,vec__30184,(1),null);
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
return (function (p1__30188_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__30188_SHARP_),cljs.core.second.call(null,p1__30188_SHARP_)));
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
var vec__30189 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__30189,(0),null);
var s = cljs.core.nth.call(null,vec__30189,(1),null);
var w = cljs.core.nth.call(null,vec__30189,(2),null);
var e = cljs.core.nth.call(null,vec__30189,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"visible?z=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),"&n=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"&s=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"&w=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"&e=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__30189,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__30189,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__30192,zoom,lock){
var vec__30193 = p__30192;
var lat = cljs.core.nth.call(null,vec__30193,(0),null);
var lon = cljs.core.nth.call(null,vec__30193,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__4047__auto__ = zoom;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__30196_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__30196_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__30197_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__30197_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__30198_SHARP_){
return p1__30198_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__30199,ops){
var vec__30200 = p__30199;
var id1 = cljs.core.nth.call(null,vec__30200,(0),null);
var id2 = cljs.core.nth.call(null,vec__30200,(1),null);
var vhs = cljs.core.deref.call(null,chart.client.VEHICLES);
var alt1 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id1)));
var alt2 = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vhs.call(null,id2)));
var adif = (alt1 - alt2);
var titl = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(ops);
var dmin = new cljs.core.Keyword(null,"dmin","dmin",-2049903789).cljs$core$IFn$_invoke$arity$1(ops);
var tmin = new cljs.core.Keyword(null,"tmin","tmin",-39508962).cljs$core$IFn$_invoke$arity$1(ops);
return ["<h3>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(titl),"</h3>","<table>","<tr><td>Dmin</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null))," m</td></tr>","<tr><td>Tmin</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof tmin === 'number')?(((60) * tmin) | (0)):null))," min</td></tr>","<tr><td>Alt-diff</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(adif)," ft</td></tr>","</table>"].join('');
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
var G__30205 = arguments.length;
switch (G__30205) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__30203_SHARP_){
return chart.client.select_airport.call(null,sel,p1__30203_SHARP_);
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
var temp__5718__auto__ = new cljs.core.Keyword(null,"countries","countries",863192750).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5718__auto__)){
var cns = temp__5718__auto__;
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = ((function (cns,temp__5718__auto__){
return (function chart$client$select_city_$_handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected country",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cns,temp__5718__auto__){
return (function (r){
return null;
});})(cns,temp__5718__auto__))
);
});})(cns,temp__5718__auto__))
)
;
} else {
var temp__5718__auto____$1 = new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5718__auto____$1)){
var cts = temp__5718__auto____$1;
ask.master.selector.call(null,"element",(20),"chart.client","cities",cts,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = ((function (cts,temp__5718__auto____$1,temp__5718__auto__){
return (function chart$client$select_city_$_handler20(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),"User Answer",new cljs.core.Keyword(null,"subject","subject",-1411880451),"selected city",new cljs.core.Keyword(null,"object","object",1474613949),sel], null),((function (cts,temp__5718__auto____$1,temp__5718__auto__){
return (function (r){
return null;
});})(cts,temp__5718__auto____$1,temp__5718__auto__))
);

return ask.master.clear_dialog.call(null);
});})(cts,temp__5718__auto____$1,temp__5718__auto__))
)
;
} else {
return null;
}
}
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__30207 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__30208 = null;
var count__30209 = (0);
var i__30210 = (0);
while(true){
if((i__30210 < count__30209)){
var map__30211 = cljs.core._nth.call(null,chunk__30208,i__30210);
var map__30211__$1 = (((((!((map__30211 == null))))?(((((map__30211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30211):map__30211);
var ins = map__30211__$1;
var instruct = cljs.core.get.call(null,map__30211__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30213_30267 = cljs.core._EQ_;
var expr__30214_30268 = instruct;
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30214_30268))){
var map__30216_30269 = ins;
var map__30216_30270__$1 = (((((!((map__30216_30269 == null))))?(((((map__30216_30269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30216_30269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30216_30269):map__30216_30269);
var id_30271 = cljs.core.get.call(null,map__30216_30270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30272 = cljs.core.get.call(null,map__30216_30270__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30271,vehicle_30272);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30214_30268))){
var map__30218_30273 = ins;
var map__30218_30274__$1 = (((((!((map__30218_30273 == null))))?(((((map__30218_30273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30218_30273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218_30273):map__30218_30273);
var id_30275 = cljs.core.get.call(null,map__30218_30274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30275);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30214_30268))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30214_30268))){
var map__30220_30276 = ins;
var map__30220_30277__$1 = (((((!((map__30220_30276 == null))))?(((((map__30220_30276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30220_30276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30220_30276):map__30220_30276);
var id_30278 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30279 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30280 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30281 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30282 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_30283 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_30284 = cljs.core.get.call(null,map__30220_30277__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_30278)){
chart.client.popup.call(null,id_30278,html_30281,time_30282);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = width_30283;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = height_30284;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = lat_30279;
if(cljs.core.truth_(and__4036__auto____$2)){
return lon_30280;
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
chart.client.popup.call(null,lat_30279,lon_30280,html_30281,time_30282,width_30283,height_30284);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = lat_30279;
if(cljs.core.truth_(and__4036__auto__)){
return lon_30280;
} else {
return and__4036__auto__;
}
})())){
chart.client.popup.call(null,lat_30279,lon_30280,html_30281,time_30282);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__30214_30268))){
var map__30222_30285 = ins;
var map__30222_30286__$1 = (((((!((map__30222_30285 == null))))?(((((map__30222_30285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30222_30285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30222_30285):map__30222_30285);
var id_30287 = cljs.core.get.call(null,map__30222_30286__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_30288 = cljs.core.get.call(null,map__30222_30286__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_30289 = cljs.core.get.call(null,map__30222_30286__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_30290 = cljs.core.get.call(null,map__30222_30286__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_30287,points_30288,options_30289,time_30290);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__30214_30268))){
var map__30224_30291 = ins;
var map__30224_30292__$1 = (((((!((map__30224_30291 == null))))?(((((map__30224_30291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30224_30291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30224_30291):map__30224_30291);
var coord_30293 = cljs.core.get.call(null,map__30224_30292__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_30294 = cljs.core.get.call(null,map__30224_30292__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_30295 = cljs.core.get.call(null,map__30224_30292__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_30293,zoom_30294,lock_30295);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__30214_30268))){
var map__30226_30296 = ins;
var map__30226_30297__$1 = (((((!((map__30226_30296 == null))))?(((((map__30226_30296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30226_30296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30226_30296):map__30226_30296);
var iname_30298 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_30299 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_30300 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30301 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_30302 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_30303 = cljs.core.get.call(null,map__30226_30297__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_30298,tip_30299,lat_30300,lon_30301,feature_30302,url_ico_30303);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__30214_30268))){
var map__30228_30304 = ins;
var map__30228_30305__$1 = (((((!((map__30228_30304 == null))))?(((((map__30228_30304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30228_30304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30228_30304):map__30228_30304);
var iname_30306 = cljs.core.get.call(null,map__30228_30305__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_30306);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__30214_30268))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__30214_30268))){
var map__30230_30307 = ins;
var map__30230_30308__$1 = (((((!((map__30230_30307 == null))))?(((((map__30230_30307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30230_30307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30230_30307):map__30230_30307);
var ids_30309 = cljs.core.get.call(null,map__30230_30308__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_30310 = cljs.core.get.call(null,map__30230_30308__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_30309,options_30310);
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__30214_30268))){
var map__30232_30311 = ins;
var map__30232_30312__$1 = (((((!((map__30232_30311 == null))))?(((((map__30232_30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30232_30311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232_30311):map__30232_30311);
var question_30313 = cljs.core.get.call(null,map__30232_30312__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_30314 = cljs.core.get.call(null,map__30232_30312__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__30234_30315 = cljs.core._EQ_;
var expr__30235_30316 = question_30313;
if(cljs.core.truth_(pred__30234_30315.call(null,"city",expr__30235_30316))){
chart.client.select_city.call(null,param_30314);
} else {
if(cljs.core.truth_(pred__30234_30315.call(null,"airport",expr__30235_30316))){
chart.client.select_airport.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30235_30316)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__30213_30267.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__30214_30268))){
var map__30237_30317 = ins;
var map__30237_30318__$1 = (((((!((map__30237_30317 == null))))?(((((map__30237_30317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237_30317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237_30317):map__30237_30317);
var callsign_30319 = cljs.core.get.call(null,map__30237_30318__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_30319;
} else {
cljs.core.println.call(null,["Unknown instruction: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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


var G__30320 = seq__30207;
var G__30321 = chunk__30208;
var G__30322 = count__30209;
var G__30323 = (i__30210 + (1));
seq__30207 = G__30320;
chunk__30208 = G__30321;
count__30209 = G__30322;
i__30210 = G__30323;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30207);
if(temp__5720__auto__){
var seq__30207__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30207__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30207__$1);
var G__30324 = cljs.core.chunk_rest.call(null,seq__30207__$1);
var G__30325 = c__4461__auto__;
var G__30326 = cljs.core.count.call(null,c__4461__auto__);
var G__30327 = (0);
seq__30207 = G__30324;
chunk__30208 = G__30325;
count__30209 = G__30326;
i__30210 = G__30327;
continue;
} else {
var map__30239 = cljs.core.first.call(null,seq__30207__$1);
var map__30239__$1 = (((((!((map__30239 == null))))?(((((map__30239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var ins = map__30239__$1;
var instruct = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__30241_30328 = cljs.core._EQ_;
var expr__30242_30329 = instruct;
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__30242_30329))){
var map__30244_30330 = ins;
var map__30244_30331__$1 = (((((!((map__30244_30330 == null))))?(((((map__30244_30330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30244_30330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30244_30330):map__30244_30330);
var id_30332 = cljs.core.get.call(null,map__30244_30331__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_30333 = cljs.core.get.call(null,map__30244_30331__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_30332,vehicle_30333);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__30242_30329))){
var map__30246_30334 = ins;
var map__30246_30335__$1 = (((((!((map__30246_30334 == null))))?(((((map__30246_30334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30246_30334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30246_30334):map__30246_30334);
var id_30336 = cljs.core.get.call(null,map__30246_30335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_30336);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__30242_30329))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__30242_30329))){
var map__30248_30337 = ins;
var map__30248_30338__$1 = (((((!((map__30248_30337 == null))))?(((((map__30248_30337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30248_30337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248_30337):map__30248_30337);
var id_30339 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_30340 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30341 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_30342 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_30343 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_30344 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_30345 = cljs.core.get.call(null,map__30248_30338__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_30339)){
chart.client.popup.call(null,id_30339,html_30342,time_30343);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = width_30344;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = height_30345;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = lat_30340;
if(cljs.core.truth_(and__4036__auto____$2)){
return lon_30341;
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
chart.client.popup.call(null,lat_30340,lon_30341,html_30342,time_30343,width_30344,height_30345);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = lat_30340;
if(cljs.core.truth_(and__4036__auto__)){
return lon_30341;
} else {
return and__4036__auto__;
}
})())){
chart.client.popup.call(null,lat_30340,lon_30341,html_30342,time_30343);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__30242_30329))){
var map__30250_30346 = ins;
var map__30250_30347__$1 = (((((!((map__30250_30346 == null))))?(((((map__30250_30346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30250_30346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30250_30346):map__30250_30346);
var id_30348 = cljs.core.get.call(null,map__30250_30347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_30349 = cljs.core.get.call(null,map__30250_30347__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_30350 = cljs.core.get.call(null,map__30250_30347__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_30351 = cljs.core.get.call(null,map__30250_30347__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_30348,points_30349,options_30350,time_30351);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__30242_30329))){
var map__30252_30352 = ins;
var map__30252_30353__$1 = (((((!((map__30252_30352 == null))))?(((((map__30252_30352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30252_30352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30252_30352):map__30252_30352);
var coord_30354 = cljs.core.get.call(null,map__30252_30353__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_30355 = cljs.core.get.call(null,map__30252_30353__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_30356 = cljs.core.get.call(null,map__30252_30353__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_30354,zoom_30355,lock_30356);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__30242_30329))){
var map__30254_30357 = ins;
var map__30254_30358__$1 = (((((!((map__30254_30357 == null))))?(((((map__30254_30357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30254_30357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254_30357):map__30254_30357);
var iname_30359 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_30360 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_30361 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30362 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_30363 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_30364 = cljs.core.get.call(null,map__30254_30358__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_30359,tip_30360,lat_30361,lon_30362,feature_30363,url_ico_30364);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__30242_30329))){
var map__30256_30365 = ins;
var map__30256_30366__$1 = (((((!((map__30256_30365 == null))))?(((((map__30256_30365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30256_30365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30256_30365):map__30256_30365);
var iname_30367 = cljs.core.get.call(null,map__30256_30366__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_30367);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__30242_30329))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__30242_30329))){
var map__30258_30368 = ins;
var map__30258_30369__$1 = (((((!((map__30258_30368 == null))))?(((((map__30258_30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30258_30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30258_30368):map__30258_30368);
var ids_30370 = cljs.core.get.call(null,map__30258_30369__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_30371 = cljs.core.get.call(null,map__30258_30369__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_30370,options_30371);
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__30242_30329))){
var map__30260_30372 = ins;
var map__30260_30373__$1 = (((((!((map__30260_30372 == null))))?(((((map__30260_30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30260_30372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260_30372):map__30260_30372);
var question_30374 = cljs.core.get.call(null,map__30260_30373__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_30375 = cljs.core.get.call(null,map__30260_30373__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__30262_30376 = cljs.core._EQ_;
var expr__30263_30377 = question_30374;
if(cljs.core.truth_(pred__30262_30376.call(null,"city",expr__30263_30377))){
chart.client.select_city.call(null,param_30375);
} else {
if(cljs.core.truth_(pred__30262_30376.call(null,"airport",expr__30263_30377))){
chart.client.select_airport.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30263_30377)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__30241_30328.call(null,new cljs.core.Keyword(null,"onboard","onboard",858859890),expr__30242_30329))){
var map__30265_30378 = ins;
var map__30265_30379__$1 = (((((!((map__30265_30378 == null))))?(((((map__30265_30378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30265_30378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30265_30378):map__30265_30378);
var callsign_30380 = cljs.core.get.call(null,map__30265_30379__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
chart.client.ONBOARD = callsign_30380;
} else {
cljs.core.println.call(null,["Unknown instruction: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
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


var G__30381 = cljs.core.next.call(null,seq__30207__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__30207 = G__30381;
chunk__30208 = G__30382;
count__30209 = G__30383;
i__30210 = G__30384;
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
var G__30387 = arguments.length;
switch (G__30387) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__30385_SHARP_){
return chart.client.move_to.call(null,sel,p1__30385_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector.call(null,"element",(2),"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler2 = (function chart$client$handler2(sel){
var prm = ["?country=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt),"&airport=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"move-to",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.move_to.cljs$lang$maxFixedArity = 2;

chart.client.schedule = (function chart$client$schedule(var_args){
var G__30394 = arguments.length;
switch (G__30394) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__30389_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__30389_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__30390_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__30390_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__30391_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__30391_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__30392_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__30392_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector.call(null,"element",(6),"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler6 = (function chart$client$handler6(sel){
var prm = ["?callsign=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(call),"&time=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tim),"&country1=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt1),"&airport1=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(apt1),"&country2=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt2),"&airport2=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel)].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"schedule",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm)].join(''),chart.client.no_handler);

return ask.master.clear_dialog.call(null);
}))
;
});

chart.client.schedule.cljs$lang$maxFixedArity = 6;

chart.client.question = (function chart$client$question(var_args){
var G__30400 = arguments.length;
switch (G__30400) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__30396_SHARP_){
return chart.client.question.call(null,sel,p1__30396_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__30397_SHARP_){
return chart.client.question.call(null,pred,sel,p1__30397_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__30398_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__30398_SHARP_);
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
var pred__30402_30405 = cljs.core._EQ_;
var expr__30403_30406 = cmd;
if(cljs.core.truth_(pred__30402_30405.call(null,"commands",expr__30403_30406))){
} else {
if(cljs.core.truth_(pred__30402_30405.call(null,"watch-visible",expr__30403_30406))){
var bnd_30407 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_30408 = ["?n=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_30407.getNorth()),"&s=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_30407.getSouth()),"&w=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_30407.getWest()),"&e=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bnd_30407.getEast()),"&z=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prm_30408)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__30402_30405.call(null,"move-to",expr__30403_30406))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__30402_30405.call(null,"schedule",expr__30403_30406))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__30402_30405.call(null,"question",expr__30403_30406))){
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
var htm = ((cljs.core._EQ_.call(null,chart.client.ONBOARD,"MANUAL"))?["MANUAL instantly goes to this location?<br><br>","<input type='button' \n\t value='Go!'\n\t style='color:blue;display:block;margin:auto;'\n\t onclick='chart.client.mangoinst(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng),")' >"].join(''):["Now on board ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart.client.ONBOARD)].join(''));
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
}catch (e30409){if((e30409 instanceof Error)){
var e_30410 = e30409;
cljs.core.println.call(null,e_30410);
} else {
throw e30409;

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
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"follow?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.stopfollow = (function chart$client$stopfollow(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"stopfollow"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.trail = (function chart$client$trail(id){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"trail?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.mangoinst = (function chart$client$mangoinst(lat,lon){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),"goto?lat=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),"&lon=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon),"&from=CHART"].join(''));
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map
