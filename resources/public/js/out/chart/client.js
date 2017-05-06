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
var map__25053 = response;
var map__25053__$1 = ((((!((map__25053 == null)))?((((map__25053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25053):map__25053);
var status = cljs.core.get.call(null,map__25053__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25053__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_25061 = cljs.core.deref.call(null,vmp);
var mrk_25062 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25061);
var vec__25058_25063 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25061);
var lat_25064 = cljs.core.nth.call(null,vec__25058_25063,(0),null);
var lon_25065 = cljs.core.nth.call(null,vec__25058_25063,(1),null);
var pos_25066 = (new L.LatLng(lat_25064,lon_25065));
mrk_25062.setLatLng(pos_25066);

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
var seq__25071_25075 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25072_25076 = null;
var count__25073_25077 = (0);
var i__25074_25078 = (0);
while(true){
if((i__25074_25078 < count__25073_25077)){
var veh_25079 = cljs.core._nth.call(null,chunk__25072_25076,i__25074_25078);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25079)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25079)));

var G__25080 = seq__25071_25075;
var G__25081 = chunk__25072_25076;
var G__25082 = count__25073_25077;
var G__25083 = (i__25074_25078 + (1));
seq__25071_25075 = G__25080;
chunk__25072_25076 = G__25081;
count__25073_25077 = G__25082;
i__25074_25078 = G__25083;
continue;
} else {
var temp__4657__auto___25084 = cljs.core.seq.call(null,seq__25071_25075);
if(temp__4657__auto___25084){
var seq__25071_25085__$1 = temp__4657__auto___25084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25071_25085__$1)){
var c__21551__auto___25086 = cljs.core.chunk_first.call(null,seq__25071_25085__$1);
var G__25087 = cljs.core.chunk_rest.call(null,seq__25071_25085__$1);
var G__25088 = c__21551__auto___25086;
var G__25089 = cljs.core.count.call(null,c__21551__auto___25086);
var G__25090 = (0);
seq__25071_25075 = G__25087;
chunk__25072_25076 = G__25088;
count__25073_25077 = G__25089;
i__25074_25078 = G__25090;
continue;
} else {
var veh_25091 = cljs.core.first.call(null,seq__25071_25085__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25091)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25091)));

var G__25092 = cljs.core.next.call(null,seq__25071_25085__$1);
var G__25093 = null;
var G__25094 = (0);
var G__25095 = (0);
seq__25071_25075 = G__25092;
chunk__25072_25076 = G__25093;
count__25073_25077 = G__25094;
i__25074_25078 = G__25095;
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

var vec__25100 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25100,(0),null);
var lon = cljs.core.nth.call(null,vec__25100,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__25100,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25100,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25096_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25096_SHARP_))),e.target);
});})(vec__25100,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25100,lat,lon,pos,ico,opt,mrk__$1))
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
var ico = L.icon(({"iconUrl": (function (){var or__20737__auto__ = url_ico;
if(cljs.core.truth_(or__20737__auto__)){
return or__20737__auto__;
} else {
var or__20737__auto____$1 = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20737__auto____$1)){
return or__20737__auto____$1;
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
var seq__25107_25111 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__25108_25112 = null;
var count__25109_25113 = (0);
var i__25110_25114 = (0);
while(true){
if((i__25110_25114 < count__25109_25113)){
var mrk_25115 = cljs.core._nth.call(null,chunk__25108_25112,i__25110_25114);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25115);

var G__25116 = seq__25107_25111;
var G__25117 = chunk__25108_25112;
var G__25118 = count__25109_25113;
var G__25119 = (i__25110_25114 + (1));
seq__25107_25111 = G__25116;
chunk__25108_25112 = G__25117;
count__25109_25113 = G__25118;
i__25110_25114 = G__25119;
continue;
} else {
var temp__4657__auto___25120 = cljs.core.seq.call(null,seq__25107_25111);
if(temp__4657__auto___25120){
var seq__25107_25121__$1 = temp__4657__auto___25120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25107_25121__$1)){
var c__21551__auto___25122 = cljs.core.chunk_first.call(null,seq__25107_25121__$1);
var G__25123 = cljs.core.chunk_rest.call(null,seq__25107_25121__$1);
var G__25124 = c__21551__auto___25122;
var G__25125 = cljs.core.count.call(null,c__21551__auto___25122);
var G__25126 = (0);
seq__25107_25111 = G__25123;
chunk__25108_25112 = G__25124;
count__25109_25113 = G__25125;
i__25110_25114 = G__25126;
continue;
} else {
var mrk_25127 = cljs.core.first.call(null,seq__25107_25121__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_25127);

var G__25128 = cljs.core.next.call(null,seq__25107_25121__$1);
var G__25129 = null;
var G__25130 = (0);
var G__25131 = (0);
seq__25107_25111 = G__25128;
chunk__25108_25112 = G__25129;
count__25109_25113 = G__25130;
i__25110_25114 = G__25131;
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
var args25132 = [];
var len__21845__auto___25138 = arguments.length;
var i__21846__auto___25139 = (0);
while(true){
if((i__21846__auto___25139 < len__21845__auto___25138)){
args25132.push((arguments[i__21846__auto___25139]));

var G__25140 = (i__21846__auto___25139 + (1));
i__21846__auto___25139 = G__25140;
continue;
} else {
}
break;
}

var G__25134 = args25132.length;
switch (G__25134) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25132.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__25135 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__25135,(0),null);
var lon = cljs.core.nth.call(null,vec__25135,(1),null);
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
return (function (p1__25142_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__25142_SHARP_),cljs.core.second.call(null,p1__25142_SHARP_)));
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
var vec__25146 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__25146,(0),null);
var s = cljs.core.nth.call(null,vec__25146,(1),null);
var w = cljs.core.nth.call(null,vec__25146,(2),null);
var e = cljs.core.nth.call(null,vec__25146,(3),null);
var z = cljs.core.deref.call(null,chart.client.CHART).getZoom();
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?z="),cljs.core.str(z),cljs.core.str("&n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__25146,n,s,w,e,z,url){
return (function (response){
return null;
});})(vec__25146,n,s,w,e,z,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__25149,zoom,lock){
var vec__25153 = p__25149;
var lat = cljs.core.nth.call(null,vec__25153,(0),null);
var lon = cljs.core.nth.call(null,vec__25153,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = (function (){var or__20737__auto__ = zoom;
if(cljs.core.truth_(or__20737__auto__)){
return or__20737__auto__;
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
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__25156_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__25156_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__25157_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__25157_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__25158_SHARP_){
return p1__25158_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__25159,ops){
var vec__25163 = p__25159;
var id1 = cljs.core.nth.call(null,vec__25163,(0),null);
var id2 = cljs.core.nth.call(null,vec__25163,(1),null);
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
var args25167 = [];
var len__21845__auto___25170 = arguments.length;
var i__21846__auto___25171 = (0);
while(true){
if((i__21846__auto___25171 < len__21845__auto___25170)){
args25167.push((arguments[i__21846__auto___25171]));

var G__25172 = (i__21846__auto___25171 + (1));
i__21846__auto___25171 = G__25172;
continue;
} else {
}
break;
}

var G__25169 = args25167.length;
switch (G__25169) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25167.length)].join('')));

}
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.select_airport);
});

chart.client.select_airport.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25166_SHARP_){
return chart.client.select_airport.call(null,sel,p1__25166_SHARP_);
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
var seq__25230 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25231 = null;
var count__25232 = (0);
var i__25233 = (0);
while(true){
if((i__25233 < count__25232)){
var map__25234 = cljs.core._nth.call(null,chunk__25231,i__25233);
var map__25234__$1 = ((((!((map__25234 == null)))?((((map__25234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25234):map__25234);
var ins = map__25234__$1;
var instruct = cljs.core.get.call(null,map__25234__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25236_25286 = cljs.core._EQ_;
var expr__25237_25287 = instruct;
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25237_25287))){
var map__25239_25288 = ins;
var map__25239_25289__$1 = ((((!((map__25239_25288 == null)))?((((map__25239_25288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25239_25288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25239_25288):map__25239_25288);
var id_25290 = cljs.core.get.call(null,map__25239_25289__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25291 = cljs.core.get.call(null,map__25239_25289__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25290,vehicle_25291);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25237_25287))){
var map__25241_25292 = ins;
var map__25241_25293__$1 = ((((!((map__25241_25292 == null)))?((((map__25241_25292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25241_25292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25241_25292):map__25241_25292);
var id_25294 = cljs.core.get.call(null,map__25241_25293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25294);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25237_25287))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25237_25287))){
var map__25243_25295 = ins;
var map__25243_25296__$1 = ((((!((map__25243_25295 == null)))?((((map__25243_25295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25243_25295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25243_25295):map__25243_25295);
var id_25297 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25298 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25299 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25300 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25301 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25302 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25303 = cljs.core.get.call(null,map__25243_25296__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25297)){
chart.client.popup.call(null,id_25297,html_25300,time_25301);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = width_25302;
if(cljs.core.truth_(and__20725__auto__)){
var and__20725__auto____$1 = height_25303;
if(cljs.core.truth_(and__20725__auto____$1)){
var and__20725__auto____$2 = lat_25298;
if(cljs.core.truth_(and__20725__auto____$2)){
return lon_25299;
} else {
return and__20725__auto____$2;
}
} else {
return and__20725__auto____$1;
}
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_25298,lon_25299,html_25300,time_25301,width_25302,height_25303);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = lat_25298;
if(cljs.core.truth_(and__20725__auto__)){
return lon_25299;
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_25298,lon_25299,html_25300,time_25301);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25237_25287))){
var map__25245_25304 = ins;
var map__25245_25305__$1 = ((((!((map__25245_25304 == null)))?((((map__25245_25304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25245_25304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25245_25304):map__25245_25304);
var id_25306 = cljs.core.get.call(null,map__25245_25305__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25307 = cljs.core.get.call(null,map__25245_25305__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25308 = cljs.core.get.call(null,map__25245_25305__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25309 = cljs.core.get.call(null,map__25245_25305__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25306,points_25307,options_25308,time_25309);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25237_25287))){
var map__25247_25310 = ins;
var map__25247_25311__$1 = ((((!((map__25247_25310 == null)))?((((map__25247_25310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25247_25310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25247_25310):map__25247_25310);
var coord_25312 = cljs.core.get.call(null,map__25247_25311__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25313 = cljs.core.get.call(null,map__25247_25311__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25314 = cljs.core.get.call(null,map__25247_25311__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25312,zoom_25313,lock_25314);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25237_25287))){
var map__25249_25315 = ins;
var map__25249_25316__$1 = ((((!((map__25249_25315 == null)))?((((map__25249_25315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25249_25315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25249_25315):map__25249_25315);
var iname_25317 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25318 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25319 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25320 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25321 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25322 = cljs.core.get.call(null,map__25249_25316__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25317,tip_25318,lat_25319,lon_25320,feature_25321,url_ico_25322);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25237_25287))){
var map__25251_25323 = ins;
var map__25251_25324__$1 = ((((!((map__25251_25323 == null)))?((((map__25251_25323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25251_25323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25251_25323):map__25251_25323);
var iname_25325 = cljs.core.get.call(null,map__25251_25324__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25325);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25237_25287))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25237_25287))){
var map__25253_25326 = ins;
var map__25253_25327__$1 = ((((!((map__25253_25326 == null)))?((((map__25253_25326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25253_25326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25253_25326):map__25253_25326);
var ids_25328 = cljs.core.get.call(null,map__25253_25327__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25329 = cljs.core.get.call(null,map__25253_25327__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25328,options_25329);
} else {
if(cljs.core.truth_(pred__25236_25286.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25237_25287))){
var map__25255_25330 = ins;
var map__25255_25331__$1 = ((((!((map__25255_25330 == null)))?((((map__25255_25330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25255_25330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25255_25330):map__25255_25330);
var question_25332 = cljs.core.get.call(null,map__25255_25331__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25333 = cljs.core.get.call(null,map__25255_25331__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25257_25334 = cljs.core._EQ_;
var expr__25258_25335 = question_25332;
if(cljs.core.truth_(pred__25257_25334.call(null,"city",expr__25258_25335))){
chart.client.select_city.call(null,param_25333);
} else {
if(cljs.core.truth_(pred__25257_25334.call(null,"airport",expr__25258_25335))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25258_25335)].join('')));
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

var G__25336 = seq__25230;
var G__25337 = chunk__25231;
var G__25338 = count__25232;
var G__25339 = (i__25233 + (1));
seq__25230 = G__25336;
chunk__25231 = G__25337;
count__25232 = G__25338;
i__25233 = G__25339;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25230);
if(temp__4657__auto__){
var seq__25230__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25230__$1)){
var c__21551__auto__ = cljs.core.chunk_first.call(null,seq__25230__$1);
var G__25340 = cljs.core.chunk_rest.call(null,seq__25230__$1);
var G__25341 = c__21551__auto__;
var G__25342 = cljs.core.count.call(null,c__21551__auto__);
var G__25343 = (0);
seq__25230 = G__25340;
chunk__25231 = G__25341;
count__25232 = G__25342;
i__25233 = G__25343;
continue;
} else {
var map__25260 = cljs.core.first.call(null,seq__25230__$1);
var map__25260__$1 = ((((!((map__25260 == null)))?((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var ins = map__25260__$1;
var instruct = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25262_25344 = cljs.core._EQ_;
var expr__25263_25345 = instruct;
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25263_25345))){
var map__25265_25346 = ins;
var map__25265_25347__$1 = ((((!((map__25265_25346 == null)))?((((map__25265_25346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25265_25346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265_25346):map__25265_25346);
var id_25348 = cljs.core.get.call(null,map__25265_25347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25349 = cljs.core.get.call(null,map__25265_25347__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25348,vehicle_25349);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25263_25345))){
var map__25267_25350 = ins;
var map__25267_25351__$1 = ((((!((map__25267_25350 == null)))?((((map__25267_25350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25267_25350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267_25350):map__25267_25350);
var id_25352 = cljs.core.get.call(null,map__25267_25351__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25352);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25263_25345))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__25263_25345))){
var map__25269_25353 = ins;
var map__25269_25354__$1 = ((((!((map__25269_25353 == null)))?((((map__25269_25353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25269_25353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25269_25353):map__25269_25353);
var id_25355 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_25356 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25357 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_25358 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_25359 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_25360 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_25361 = cljs.core.get.call(null,map__25269_25354__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_25355)){
chart.client.popup.call(null,id_25355,html_25358,time_25359);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = width_25360;
if(cljs.core.truth_(and__20725__auto__)){
var and__20725__auto____$1 = height_25361;
if(cljs.core.truth_(and__20725__auto____$1)){
var and__20725__auto____$2 = lat_25356;
if(cljs.core.truth_(and__20725__auto____$2)){
return lon_25357;
} else {
return and__20725__auto____$2;
}
} else {
return and__20725__auto____$1;
}
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_25356,lon_25357,html_25358,time_25359,width_25360,height_25361);
} else {
if(cljs.core.truth_((function (){var and__20725__auto__ = lat_25356;
if(cljs.core.truth_(and__20725__auto__)){
return lon_25357;
} else {
return and__20725__auto__;
}
})())){
chart.client.popup.call(null,lat_25356,lon_25357,html_25358,time_25359);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__25263_25345))){
var map__25271_25362 = ins;
var map__25271_25363__$1 = ((((!((map__25271_25362 == null)))?((((map__25271_25362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25271_25362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271_25362):map__25271_25362);
var id_25364 = cljs.core.get.call(null,map__25271_25363__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_25365 = cljs.core.get.call(null,map__25271_25363__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_25366 = cljs.core.get.call(null,map__25271_25363__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_25367 = cljs.core.get.call(null,map__25271_25363__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_25364,points_25365,options_25366,time_25367);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__25263_25345))){
var map__25273_25368 = ins;
var map__25273_25369__$1 = ((((!((map__25273_25368 == null)))?((((map__25273_25368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25273_25368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25273_25368):map__25273_25368);
var coord_25370 = cljs.core.get.call(null,map__25273_25369__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var zoom_25371 = cljs.core.get.call(null,map__25273_25369__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var lock_25372 = cljs.core.get.call(null,map__25273_25369__$1,new cljs.core.Keyword(null,"lock","lock",-488188066));
chart.client.map_center.call(null,coord_25370,zoom_25371,lock_25372);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__25263_25345))){
var map__25275_25373 = ins;
var map__25275_25374__$1 = ((((!((map__25275_25373 == null)))?((((map__25275_25373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25275_25373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25275_25373):map__25275_25373);
var iname_25375 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_25376 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_25377 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25378 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_25379 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
var url_ico_25380 = cljs.core.get.call(null,map__25275_25374__$1,new cljs.core.Keyword(null,"url-ico","url-ico",1042909732));
chart.client.create_placemark.call(null,iname_25375,tip_25376,lat_25377,lon_25378,feature_25379,url_ico_25380);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"delete-placemark","delete-placemark",1209837453),expr__25263_25345))){
var map__25277_25381 = ins;
var map__25277_25382__$1 = ((((!((map__25277_25381 == null)))?((((map__25277_25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25277_25381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25277_25381):map__25277_25381);
var iname_25383 = cljs.core.get.call(null,map__25277_25382__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
chart.client.delete_placemark.call(null,iname_25383);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__25263_25345))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__25263_25345))){
var map__25279_25384 = ins;
var map__25279_25385__$1 = ((((!((map__25279_25384 == null)))?((((map__25279_25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25279_25384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25279_25384):map__25279_25384);
var ids_25386 = cljs.core.get.call(null,map__25279_25385__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_25387 = cljs.core.get.call(null,map__25279_25385__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_25386,options_25387);
} else {
if(cljs.core.truth_(pred__25262_25344.call(null,new cljs.core.Keyword(null,"ask-user","ask-user",-354743266),expr__25263_25345))){
var map__25281_25388 = ins;
var map__25281_25389__$1 = ((((!((map__25281_25388 == null)))?((((map__25281_25388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25281_25388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281_25388):map__25281_25388);
var question_25390 = cljs.core.get.call(null,map__25281_25389__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var param_25391 = cljs.core.get.call(null,map__25281_25389__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var pred__25283_25392 = cljs.core._EQ_;
var expr__25284_25393 = question_25390;
if(cljs.core.truth_(pred__25283_25392.call(null,"city",expr__25284_25393))){
chart.client.select_city.call(null,param_25391);
} else {
if(cljs.core.truth_(pred__25283_25392.call(null,"airport",expr__25284_25393))){
chart.client.select_airport.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25284_25393)].join('')));
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

var G__25394 = cljs.core.next.call(null,seq__25230__$1);
var G__25395 = null;
var G__25396 = (0);
var G__25397 = (0);
seq__25230 = G__25394;
chunk__25231 = G__25395;
count__25232 = G__25396;
i__25233 = G__25397;
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
var args25399 = [];
var len__21845__auto___25402 = arguments.length;
var i__21846__auto___25403 = (0);
while(true){
if((i__21846__auto___25403 < len__21845__auto___25402)){
args25399.push((arguments[i__21846__auto___25403]));

var G__25404 = (i__21846__auto___25403 + (1));
i__21846__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var G__25401 = args25399.length;
switch (G__25401) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25399.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector.call(null,"element",(1),"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25398_SHARP_){
return chart.client.move_to.call(null,sel,p1__25398_SHARP_);
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
var args25410 = [];
var len__21845__auto___25413 = arguments.length;
var i__21846__auto___25414 = (0);
while(true){
if((i__21846__auto___25414 < len__21845__auto___25413)){
args25410.push((arguments[i__21846__auto___25414]));

var G__25415 = (i__21846__auto___25414 + (1));
i__21846__auto___25414 = G__25415;
continue;
} else {
}
break;
}

var G__25412 = args25410.length;
switch (G__25412) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25410.length)].join('')));

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
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25406_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__25406_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector.call(null,"element",(3),"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25407_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__25407_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector.call(null,"element",(4),"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null),(function (p1__25408_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__25408_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector.call(null,"element",(5),"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null),(function (p1__25409_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__25409_SHARP_);
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
var args25420 = [];
var len__21845__auto___25423 = arguments.length;
var i__21846__auto___25424 = (0);
while(true){
if((i__21846__auto___25424 < len__21845__auto___25423)){
args25420.push((arguments[i__21846__auto___25424]));

var G__25425 = (i__21846__auto___25424 + (1));
i__21846__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var G__25422 = args25420.length;
switch (G__25422) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25420.length)].join('')));

}
});

chart.client.question.cljs$core$IFn$_invoke$arity$0 = (function (){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),"predicates"], null),chart.client.question);
});

chart.client.question.cljs$core$IFn$_invoke$arity$1 = (function (predicates){
ask.master.selector.call(null,"element",(1),"chart.client","?",predicates,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question","question",-1411720117),"subjects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),sel], null),(function (p1__25417_SHARP_){
return chart.client.question.call(null,sel,p1__25417_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$2 = (function (pred,subjects){
ask.master.selector.call(null,"element",(20),"chart.client","?",subjects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler20 = (function chart$client$handler20(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),"objects",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),sel], null),(function (p1__25418_SHARP_){
return chart.client.question.call(null,pred,sel,p1__25418_SHARP_);
}));
}))
;
});

chart.client.question.cljs$core$IFn$_invoke$arity$3 = (function (pred,subj,objects){
if(cljs.core.truth_(objects)){
ask.master.selector.call(null,"element",(30),"chart.client","?",objects,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler30 = (function chart$client$handler30(sel){
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"question","question",-1411720117),"adjuncts",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),pred,new cljs.core.Keyword(null,"subject","subject",-1411880451),subj,new cljs.core.Keyword(null,"object","object",1474613949),sel], null),(function (p1__25419_SHARP_){
return chart.client.question.call(null,pred,subj,sel,p1__25419_SHARP_);
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
var pred__25430_25433 = cljs.core._EQ_;
var expr__25431_25434 = cmd;
if(cljs.core.truth_(pred__25430_25433.call(null,"commands",expr__25431_25434))){
} else {
if(cljs.core.truth_(pred__25430_25433.call(null,"watch-visible",expr__25431_25434))){
var bnd_25435 = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm_25436 = [cljs.core.str("?n="),cljs.core.str(bnd_25435.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd_25435.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd_25435.getWest()),cljs.core.str("&e="),cljs.core.str(bnd_25435.getEast()),cljs.core.str("&z="),cljs.core.str(cljs.core.deref.call(null,chart.client.CHART).getZoom())].join('');
ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm_25436)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__25430_25433.call(null,"move-to",expr__25431_25434))){
chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__25430_25433.call(null,"schedule",expr__25431_25434))){
chart.client.schedule.call(null);
} else {
if(cljs.core.truth_(pred__25430_25433.call(null,"question",expr__25431_25434))){
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
}catch (e25438){if((e25438 instanceof Error)){
var e_25439 = e25438;
cljs.core.println.call(null,e_25439);
} else {
throw e25438;

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