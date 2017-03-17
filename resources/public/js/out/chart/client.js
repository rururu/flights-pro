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
var map__40925 = response;
var map__40925__$1 = ((((!((map__40925 == null)))?((((map__40925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40925):map__40925);
var status = cljs.core.get.call(null,map__40925__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__40925__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_40933 = cljs.core.deref.call(null,vmp);
var mrk_40934 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_40933);
var vec__40930_40935 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_40933);
var lat_40936 = cljs.core.nth.call(null,vec__40930_40935,(0),null);
var lon_40937 = cljs.core.nth.call(null,vec__40930_40935,(1),null);
var pos_40938 = (new L.LatLng(lat_40936,lon_40937));
mrk_40934.setLatLng(pos_40938);

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
var seq__40943_40947 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__40944_40948 = null;
var count__40945_40949 = (0);
var i__40946_40950 = (0);
while(true){
if((i__40946_40950 < count__40945_40949)){
var veh_40951 = cljs.core._nth.call(null,chunk__40944_40948,i__40946_40950);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40951)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40951)));

var G__40952 = seq__40943_40947;
var G__40953 = chunk__40944_40948;
var G__40954 = count__40945_40949;
var G__40955 = (i__40946_40950 + (1));
seq__40943_40947 = G__40952;
chunk__40944_40948 = G__40953;
count__40945_40949 = G__40954;
i__40946_40950 = G__40955;
continue;
} else {
var temp__4657__auto___40956 = cljs.core.seq.call(null,seq__40943_40947);
if(temp__4657__auto___40956){
var seq__40943_40957__$1 = temp__4657__auto___40956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40943_40957__$1)){
var c__24302__auto___40958 = cljs.core.chunk_first.call(null,seq__40943_40957__$1);
var G__40959 = cljs.core.chunk_rest.call(null,seq__40943_40957__$1);
var G__40960 = c__24302__auto___40958;
var G__40961 = cljs.core.count.call(null,c__24302__auto___40958);
var G__40962 = (0);
seq__40943_40947 = G__40959;
chunk__40944_40948 = G__40960;
count__40945_40949 = G__40961;
i__40946_40950 = G__40962;
continue;
} else {
var veh_40963 = cljs.core.first.call(null,seq__40943_40957__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40963)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_40963)));

var G__40964 = cljs.core.next.call(null,seq__40943_40957__$1);
var G__40965 = null;
var G__40966 = (0);
var G__40967 = (0);
seq__40943_40947 = G__40964;
chunk__40944_40948 = G__40965;
count__40945_40949 = G__40966;
i__40946_40950 = G__40967;
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

var vec__40972 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__40972,(0),null);
var lon = cljs.core.nth.call(null,vec__40972,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__40972,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__40972,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__40968_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__40968_SHARP_))),e.target);
});})(vec__40972,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__40972,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__23488__auto__ = url_ico;
if(cljs.core.truth_(or__23488__auto__)){
return or__23488__auto__;
} else {
var or__23488__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__23488__auto____$1)){
return or__23488__auto____$1;
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
var seq__40979_40983 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__40980_40984 = null;
var count__40981_40985 = (0);
var i__40982_40986 = (0);
while(true){
if((i__40982_40986 < count__40981_40985)){
var mrk_40987 = cljs.core._nth.call(null,chunk__40980_40984,i__40982_40986);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_40987);

var G__40988 = seq__40979_40983;
var G__40989 = chunk__40980_40984;
var G__40990 = count__40981_40985;
var G__40991 = (i__40982_40986 + (1));
seq__40979_40983 = G__40988;
chunk__40980_40984 = G__40989;
count__40981_40985 = G__40990;
i__40982_40986 = G__40991;
continue;
} else {
var temp__4657__auto___40992 = cljs.core.seq.call(null,seq__40979_40983);
if(temp__4657__auto___40992){
var seq__40979_40993__$1 = temp__4657__auto___40992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40979_40993__$1)){
var c__24302__auto___40994 = cljs.core.chunk_first.call(null,seq__40979_40993__$1);
var G__40995 = cljs.core.chunk_rest.call(null,seq__40979_40993__$1);
var G__40996 = c__24302__auto___40994;
var G__40997 = cljs.core.count.call(null,c__24302__auto___40994);
var G__40998 = (0);
seq__40979_40983 = G__40995;
chunk__40980_40984 = G__40996;
count__40981_40985 = G__40997;
i__40982_40986 = G__40998;
continue;
} else {
var mrk_40999 = cljs.core.first.call(null,seq__40979_40993__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_40999);

var G__41000 = cljs.core.next.call(null,seq__40979_40993__$1);
var G__41001 = null;
var G__41002 = (0);
var G__41003 = (0);
seq__40979_40983 = G__41000;
chunk__40980_40984 = G__41001;
count__40981_40985 = G__41002;
i__40982_40986 = G__41003;
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
var args41004 = [];
var len__24596__auto___41010 = arguments.length;
var i__24597__auto___41011 = (0);
while(true){
if((i__24597__auto___41011 < len__24596__auto___41010)){
args41004.push((arguments[i__24597__auto___41011]));

var G__41012 = (i__24597__auto___41011 + (1));
i__24597__auto___41011 = G__41012;
continue;
} else {
}
break;
}

var G__41006 = args41004.length;
switch (G__41006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41004.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__41007 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__41007,(0),null);
var lon = cljs.core.nth.call(null,vec__41007,(1),null);
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
return (function (p1__41014_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__41014_SHARP_),cljs.core.second.call(null,p1__41014_SHARP_)));
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
var vec__41018 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__41018,(0),null);
var s = cljs.core.nth.call(null,vec__41018,(1),null);
var w = cljs.core.nth.call(null,vec__41018,(2),null);
var e = cljs.core.nth.call(null,vec__41018,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__41018,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__41018,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__41021,zoom,lock){
var vec__41025 = p__41021;
var lat = cljs.core.nth.call(null,vec__41025,(0),null);
var lon = cljs.core.nth.call(null,vec__41025,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__23488__auto__ = zoom;
if(cljs.core.truth_(or__23488__auto__)){
return or__23488__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__41028_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__41028_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__41029_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__41029_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__41030_SHARP_){
return p1__41030_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__41031,ops){
var vec__41035 = p__41031;
var id1 = cljs.core.nth.call(null,vec__41035,(0),null);
var id2 = cljs.core.nth.call(null,vec__41035,(1),null);
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
var seq__41084 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__41085 = null;
var count__41086 = (0);
var i__41087 = (0);
while(true){
if((i__41087 < count__41086)){
var map__41088 = cljs.core._nth.call(null,chunk__41085,i__41087);
var map__41088__$1 = ((((!((map__41088 == null)))?((((map__41088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41088):map__41088);
var ins = map__41088__$1;
var instruct = cljs.core.get.call(null,map__41088__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__41090_41130 = cljs.core._EQ_;
var expr__41091_41131 = instruct;
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__41091_41131))){
var map__41093_41132 = ins;
var map__41093_41133__$1 = ((((!((map__41093_41132 == null)))?((((map__41093_41132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41093_41132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41093_41132):map__41093_41132);
var id_41134 = cljs.core.get.call(null,map__41093_41133__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_41135 = cljs.core.get.call(null,map__41093_41133__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_41134,vehicle_41135);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__41091_41131))){
var map__41095_41136 = ins;
var map__41095_41137__$1 = ((((!((map__41095_41136 == null)))?((((map__41095_41136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41095_41136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41095_41136):map__41095_41136);
var id_41138 = cljs.core.get.call(null,map__41095_41137__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_41138);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__41091_41131))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__41091_41131))){
var map__41097_41139 = ins;
var map__41097_41140__$1 = ((((!((map__41097_41139 == null)))?((((map__41097_41139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41097_41139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41097_41139):map__41097_41139);
var id_41141 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_41142 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41143 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_41144 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_41145 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_41146 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_41147 = cljs.core.get.call(null,map__41097_41140__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_41141)){
chart.client.popup.call(null,id_41141,html_41144,time_41145);
} else {
if(cljs.core.truth_((function (){var and__23476__auto__ = width_41146;
if(cljs.core.truth_(and__23476__auto__)){
var and__23476__auto____$1 = height_41147;
if(cljs.core.truth_(and__23476__auto____$1)){
var and__23476__auto____$2 = lat_41142;
if(cljs.core.truth_(and__23476__auto____$2)){
return lon_41143;
} else {
return and__23476__auto____$2;
}
} else {
return and__23476__auto____$1;
}
} else {
return and__23476__auto__;
}
})())){
chart.client.popup.call(null,lat_41142,lon_41143,html_41144,time_41145,width_41146,height_41147);
} else {
if(cljs.core.truth_((function (){var and__23476__auto__ = lat_41142;
if(cljs.core.truth_(and__23476__auto__)){
return lon_41143;
} else {
return and__23476__auto__;
}
})())){
chart.client.popup.call(null,lat_41142,lon_41143,html_41144,time_41145);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__41091_41131))){
var map__41099_41148 = ins;
var map__41099_41149__$1 = ((((!((map__41099_41148 == null)))?((((map__41099_41148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41099_41148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099_41148):map__41099_41148);
var id_41150 = cljs.core.get.call(null,map__41099_41149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_41151 = cljs.core.get.call(null,map__41099_41149__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_41152 = cljs.core.get.call(null,map__41099_41149__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_41153 = cljs.core.get.call(null,map__41099_41149__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_41150,points_41151,options_41152,time_41153);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__41091_41131))){
var map__41101_41154 = ins;
var map__41101_41155__$1 = ((((!((map__41101_41154 == null)))?((((map__41101_41154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41101_41154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41101_41154):map__41101_41154);
var coord_41156 = cljs.core.get.call(null,map__41101_41155__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_41157 = cljs.core.get.call(null,map__41101_41155__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_41158 = cljs.core.get.call(null,map__41101_41155__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_41156,zoom_41157,lock_41158);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__41091_41131))){
var map__41103_41159 = ins;
var map__41103_41160__$1 = ((((!((map__41103_41159 == null)))?((((map__41103_41159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41103_41159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41103_41159):map__41103_41159);
var iname_41161 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_41162 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_41163 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41164 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_41165 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_41166 = cljs.core.get.call(null,map__41103_41160__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_41161,tip_41162,lat_41163,lon_41164,feature_41165,url_ico_41166);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__41091_41131))){
var map__41105_41167 = ins;
var map__41105_41168__$1 = ((((!((map__41105_41167 == null)))?((((map__41105_41167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41105_41167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41105_41167):map__41105_41167);
var iname_41169 = cljs.core.get.call(null,map__41105_41168__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_41169);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__41091_41131))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__41090_41130.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__41091_41131))){
var map__41107_41170 = ins;
var map__41107_41171__$1 = ((((!((map__41107_41170 == null)))?((((map__41107_41170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41107_41170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41107_41170):map__41107_41170);
var ids_41172 = cljs.core.get.call(null,map__41107_41171__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_41173 = cljs.core.get.call(null,map__41107_41171__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_41172,options_41173);
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

var G__41174 = seq__41084;
var G__41175 = chunk__41085;
var G__41176 = count__41086;
var G__41177 = (i__41087 + (1));
seq__41084 = G__41174;
chunk__41085 = G__41175;
count__41086 = G__41176;
i__41087 = G__41177;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41084);
if(temp__4657__auto__){
var seq__41084__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41084__$1)){
var c__24302__auto__ = cljs.core.chunk_first.call(null,seq__41084__$1);
var G__41178 = cljs.core.chunk_rest.call(null,seq__41084__$1);
var G__41179 = c__24302__auto__;
var G__41180 = cljs.core.count.call(null,c__24302__auto__);
var G__41181 = (0);
seq__41084 = G__41178;
chunk__41085 = G__41179;
count__41086 = G__41180;
i__41087 = G__41181;
continue;
} else {
var map__41109 = cljs.core.first.call(null,seq__41084__$1);
var map__41109__$1 = ((((!((map__41109 == null)))?((((map__41109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41109):map__41109);
var ins = map__41109__$1;
var instruct = cljs.core.get.call(null,map__41109__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__41111_41182 = cljs.core._EQ_;
var expr__41112_41183 = instruct;
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__41112_41183))){
var map__41114_41184 = ins;
var map__41114_41185__$1 = ((((!((map__41114_41184 == null)))?((((map__41114_41184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41114_41184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41114_41184):map__41114_41184);
var id_41186 = cljs.core.get.call(null,map__41114_41185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_41187 = cljs.core.get.call(null,map__41114_41185__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_41186,vehicle_41187);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__41112_41183))){
var map__41116_41188 = ins;
var map__41116_41189__$1 = ((((!((map__41116_41188 == null)))?((((map__41116_41188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41116_41188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41116_41188):map__41116_41188);
var id_41190 = cljs.core.get.call(null,map__41116_41189__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_41190);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__41112_41183))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__41112_41183))){
var map__41118_41191 = ins;
var map__41118_41192__$1 = ((((!((map__41118_41191 == null)))?((((map__41118_41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41118_41191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41118_41191):map__41118_41191);
var id_41193 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_41194 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41195 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_41196 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_41197 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_41198 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_41199 = cljs.core.get.call(null,map__41118_41192__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_41193)){
chart.client.popup.call(null,id_41193,html_41196,time_41197);
} else {
if(cljs.core.truth_((function (){var and__23476__auto__ = width_41198;
if(cljs.core.truth_(and__23476__auto__)){
var and__23476__auto____$1 = height_41199;
if(cljs.core.truth_(and__23476__auto____$1)){
var and__23476__auto____$2 = lat_41194;
if(cljs.core.truth_(and__23476__auto____$2)){
return lon_41195;
} else {
return and__23476__auto____$2;
}
} else {
return and__23476__auto____$1;
}
} else {
return and__23476__auto__;
}
})())){
chart.client.popup.call(null,lat_41194,lon_41195,html_41196,time_41197,width_41198,height_41199);
} else {
if(cljs.core.truth_((function (){var and__23476__auto__ = lat_41194;
if(cljs.core.truth_(and__23476__auto__)){
return lon_41195;
} else {
return and__23476__auto__;
}
})())){
chart.client.popup.call(null,lat_41194,lon_41195,html_41196,time_41197);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__41112_41183))){
var map__41120_41200 = ins;
var map__41120_41201__$1 = ((((!((map__41120_41200 == null)))?((((map__41120_41200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41120_41200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41120_41200):map__41120_41200);
var id_41202 = cljs.core.get.call(null,map__41120_41201__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_41203 = cljs.core.get.call(null,map__41120_41201__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_41204 = cljs.core.get.call(null,map__41120_41201__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_41205 = cljs.core.get.call(null,map__41120_41201__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_41202,points_41203,options_41204,time_41205);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__41112_41183))){
var map__41122_41206 = ins;
var map__41122_41207__$1 = ((((!((map__41122_41206 == null)))?((((map__41122_41206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41122_41206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41122_41206):map__41122_41206);
var coord_41208 = cljs.core.get.call(null,map__41122_41207__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_41209 = cljs.core.get.call(null,map__41122_41207__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_41210 = cljs.core.get.call(null,map__41122_41207__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_41208,zoom_41209,lock_41210);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__41112_41183))){
var map__41124_41211 = ins;
var map__41124_41212__$1 = ((((!((map__41124_41211 == null)))?((((map__41124_41211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41124_41211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41124_41211):map__41124_41211);
var iname_41213 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_41214 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_41215 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_41216 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_41217 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_41218 = cljs.core.get.call(null,map__41124_41212__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_41213,tip_41214,lat_41215,lon_41216,feature_41217,url_ico_41218);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__41112_41183))){
var map__41126_41219 = ins;
var map__41126_41220__$1 = ((((!((map__41126_41219 == null)))?((((map__41126_41219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41126_41219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41126_41219):map__41126_41219);
var iname_41221 = cljs.core.get.call(null,map__41126_41220__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_41221);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__41112_41183))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__41111_41182.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__41112_41183))){
var map__41128_41222 = ins;
var map__41128_41223__$1 = ((((!((map__41128_41222 == null)))?((((map__41128_41222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41128_41222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41128_41222):map__41128_41222);
var ids_41224 = cljs.core.get.call(null,map__41128_41223__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_41225 = cljs.core.get.call(null,map__41128_41223__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_41224,options_41225);
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

var G__41226 = cljs.core.next.call(null,seq__41084__$1);
var G__41227 = null;
var G__41228 = (0);
var G__41229 = (0);
seq__41084 = G__41226;
chunk__41085 = G__41227;
count__41086 = G__41228;
i__41087 = G__41229;
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
var args41231 = [];
var len__24596__auto___41234 = arguments.length;
var i__24597__auto___41235 = (0);
while(true){
if((i__24597__auto___41235 < len__24596__auto___41234)){
args41231.push((arguments[i__24597__auto___41235]));

var G__41236 = (i__24597__auto___41235 + (1));
i__24597__auto___41235 = G__41236;
continue;
} else {
}
break;
}

var G__41233 = args41231.length;
switch (G__41233) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41231.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__41230_SHARP_){
return chart.client.move_to.call(null,sel,p1__41230_SHARP_);
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
var args41242 = [];
var len__24596__auto___41245 = arguments.length;
var i__24597__auto___41246 = (0);
while(true){
if((i__24597__auto___41246 < len__24596__auto___41245)){
args41242.push((arguments[i__24597__auto___41246]));

var G__41247 = (i__24597__auto___41246 + (1));
i__24597__auto___41246 = G__41247;
continue;
} else {
}
break;
}

var G__41244 = args41242.length;
switch (G__41244) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41242.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__41238_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__41238_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__41239_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__41239_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__41240_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__41240_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__41241_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__41241_SHARP_);
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

chart.client.command = (function chart$client$command(cmd){
var pred__41252_41255 = cljs.core._EQ_;
var expr__41253_41256 = cmd;
if(cljs.core.truth_(pred__41252_41255.call(null,"commands",expr__41253_41256))){
} else {
if(cljs.core.truth_(pred__41252_41255.call(null,"watch-visible",expr__41253_41256))){
var bnd_41257 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_41258 = [cljs.core.str("?n="),cljs.core.str(bnd_41257.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_41257.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_41257.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_41257.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_41258)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__41252_41255.call(null,"move-to",expr__41253_41256))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__41252_41255.call(null,"schedule",expr__41253_41256))){
chart.client.schedule.call(null);
} else {
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
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
}catch (e41260){if((e41260 instanceof Error)){
var e_41261 = e41260;
cljs.core.println.call(null,e_41261);
} else {
throw e41260;

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
chart.client.question = (function chart$client$question(q){
var pred__41265_41268 = cljs.core._EQ_;
var expr__41266_41269 = q;
if(cljs.core.truth_(pred__41265_41268.call(null,"questions",expr__41266_41269))){
} else {
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map