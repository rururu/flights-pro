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
chart.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"ext-data","ext-data",-1961942246),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(979),(1000),(60000),(2222),(831),(200),(15000),(911)]);
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__23707 = response;
var map__23707__$1 = ((((!((map__23707 == null)))?((((map__23707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var status = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_23715 = cljs.core.deref.call(null,vmp);
var mrk_23716 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_23715);
var vec__23712_23717 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_23715);
var lat_23718 = cljs.core.nth.call(null,vec__23712_23717,(0),null);
var lon_23719 = cljs.core.nth.call(null,vec__23712_23717,(1),null);
var pos_23720 = (new L.LatLng(lat_23718,lon_23719));
mrk_23716.setLatLng(pos_23720);

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
var seq__23725_23729 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__23726_23730 = null;
var count__23727_23731 = (0);
var i__23728_23732 = (0);
while(true){
if((i__23728_23732 < count__23727_23731)){
var veh_23733 = cljs.core._nth.call(null,chunk__23726_23730,i__23728_23732);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23733)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23733)));

var G__23734 = seq__23725_23729;
var G__23735 = chunk__23726_23730;
var G__23736 = count__23727_23731;
var G__23737 = (i__23728_23732 + (1));
seq__23725_23729 = G__23734;
chunk__23726_23730 = G__23735;
count__23727_23731 = G__23736;
i__23728_23732 = G__23737;
continue;
} else {
var temp__4657__auto___23738 = cljs.core.seq.call(null,seq__23725_23729);
if(temp__4657__auto___23738){
var seq__23725_23739__$1 = temp__4657__auto___23738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23725_23739__$1)){
var c__21578__auto___23740 = cljs.core.chunk_first.call(null,seq__23725_23739__$1);
var G__23741 = cljs.core.chunk_rest.call(null,seq__23725_23739__$1);
var G__23742 = c__21578__auto___23740;
var G__23743 = cljs.core.count.call(null,c__21578__auto___23740);
var G__23744 = (0);
seq__23725_23729 = G__23741;
chunk__23726_23730 = G__23742;
count__23727_23731 = G__23743;
i__23728_23732 = G__23744;
continue;
} else {
var veh_23745 = cljs.core.first.call(null,seq__23725_23739__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23745)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_23745)));

var G__23746 = cljs.core.next.call(null,seq__23725_23739__$1);
var G__23747 = null;
var G__23748 = (0);
var G__23749 = (0);
seq__23725_23729 = G__23746;
chunk__23726_23730 = G__23747;
count__23727_23731 = G__23748;
i__23728_23732 = G__23749;
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

var vec__23754 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__23754,(0),null);
var lon = cljs.core.nth.call(null,vec__23754,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "rotationAngle": new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp), "rotationOrigin": "center center", "title": new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp), "draggable": false});
var mrk__$1 = L.marker(pos,opt);
mrk__$1.on("click",((function (vec__23754,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__23754,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__23750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__23750_SHARP_))),e.target);
});})(vec__23754,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__23754,lat,lon,pos,ico,opt,mrk__$1))
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
chart.client.create_placemark = (function chart$client$create_placemark(iname,tip,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20764__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20764__auto__)){
return or__20764__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": false, "title": tip});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__23761_23765 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__23762_23766 = null;
var count__23763_23767 = (0);
var i__23764_23768 = (0);
while(true){
if((i__23764_23768 < count__23763_23767)){
var mrk_23769 = cljs.core._nth.call(null,chunk__23762_23766,i__23764_23768);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23769);

var G__23770 = seq__23761_23765;
var G__23771 = chunk__23762_23766;
var G__23772 = count__23763_23767;
var G__23773 = (i__23764_23768 + (1));
seq__23761_23765 = G__23770;
chunk__23762_23766 = G__23771;
count__23763_23767 = G__23772;
i__23764_23768 = G__23773;
continue;
} else {
var temp__4657__auto___23774 = cljs.core.seq.call(null,seq__23761_23765);
if(temp__4657__auto___23774){
var seq__23761_23775__$1 = temp__4657__auto___23774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23761_23775__$1)){
var c__21578__auto___23776 = cljs.core.chunk_first.call(null,seq__23761_23775__$1);
var G__23777 = cljs.core.chunk_rest.call(null,seq__23761_23775__$1);
var G__23778 = c__21578__auto___23776;
var G__23779 = cljs.core.count.call(null,c__21578__auto___23776);
var G__23780 = (0);
seq__23761_23765 = G__23777;
chunk__23762_23766 = G__23778;
count__23763_23767 = G__23779;
i__23764_23768 = G__23780;
continue;
} else {
var mrk_23781 = cljs.core.first.call(null,seq__23761_23775__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_23781);

var G__23782 = cljs.core.next.call(null,seq__23761_23775__$1);
var G__23783 = null;
var G__23784 = (0);
var G__23785 = (0);
seq__23761_23765 = G__23782;
chunk__23762_23766 = G__23783;
count__23763_23767 = G__23784;
i__23764_23768 = G__23785;
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
var args23786 = [];
var len__21872__auto___23792 = arguments.length;
var i__21873__auto___23793 = (0);
while(true){
if((i__21873__auto___23793 < len__21872__auto___23792)){
args23786.push((arguments[i__21873__auto___23793]));

var G__23794 = (i__21873__auto___23793 + (1));
i__21873__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var G__23788 = args23786.length;
switch (G__23788) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23786.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__23789 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__23789,(0),null);
var lon = cljs.core.nth.call(null,vec__23789,(1),null);
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
return (function (p1__23796_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__23796_SHARP_),cljs.core.second.call(null,p1__23796_SHARP_)));
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
var vec__23800 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__23800,(0),null);
var s = cljs.core.nth.call(null,vec__23800,(1),null);
var w = cljs.core.nth.call(null,vec__23800,(2),null);
var e = cljs.core.nth.call(null,vec__23800,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__23800,n,s,w,e,url){
return (function (response){
return null;
});})(vec__23800,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__23803){
var vec__23807 = p__23803;
var lat = cljs.core.nth.call(null,vec__23807,(0),null);
var lon = cljs.core.nth.call(null,vec__23807,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__23810_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__23810_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__23811_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__23811_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__23812_SHARP_){
return p1__23812_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__23813,ops){
var vec__23817 = p__23813;
var id1 = cljs.core.nth.call(null,vec__23817,(0),null);
var id2 = cljs.core.nth.call(null,vec__23817,(1),null);
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
var seq__23862 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__23863 = null;
var count__23864 = (0);
var i__23865 = (0);
while(true){
if((i__23865 < count__23864)){
var map__23866 = cljs.core._nth.call(null,chunk__23863,i__23865);
var map__23866__$1 = ((((!((map__23866 == null)))?((((map__23866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23866):map__23866);
var ins = map__23866__$1;
var instruct = cljs.core.get.call(null,map__23866__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23868_23904 = cljs.core._EQ_;
var expr__23869_23905 = instruct;
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23869_23905))){
var map__23871_23906 = ins;
var map__23871_23907__$1 = ((((!((map__23871_23906 == null)))?((((map__23871_23906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23871_23906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23871_23906):map__23871_23906);
var id_23908 = cljs.core.get.call(null,map__23871_23907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23909 = cljs.core.get.call(null,map__23871_23907__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23908,vehicle_23909);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23869_23905))){
var map__23873_23910 = ins;
var map__23873_23911__$1 = ((((!((map__23873_23910 == null)))?((((map__23873_23910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23873_23910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23873_23910):map__23873_23910);
var id_23912 = cljs.core.get.call(null,map__23873_23911__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23912);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23869_23905))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23869_23905))){
var map__23875_23913 = ins;
var map__23875_23914__$1 = ((((!((map__23875_23913 == null)))?((((map__23875_23913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23875_23913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23875_23913):map__23875_23913);
var id_23915 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23916 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23917 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23918 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23919 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23920 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23921 = cljs.core.get.call(null,map__23875_23914__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23915)){
chart.client.popup.call(null,id_23915,html_23918,time_23919);
} else {
if(cljs.core.truth_((function (){var and__20752__auto__ = width_23920;
if(cljs.core.truth_(and__20752__auto__)){
var and__20752__auto____$1 = height_23921;
if(cljs.core.truth_(and__20752__auto____$1)){
var and__20752__auto____$2 = lat_23916;
if(cljs.core.truth_(and__20752__auto____$2)){
return lon_23917;
} else {
return and__20752__auto____$2;
}
} else {
return and__20752__auto____$1;
}
} else {
return and__20752__auto__;
}
})())){
chart.client.popup.call(null,lat_23916,lon_23917,html_23918,time_23919,width_23920,height_23921);
} else {
if(cljs.core.truth_((function (){var and__20752__auto__ = lat_23916;
if(cljs.core.truth_(and__20752__auto__)){
return lon_23917;
} else {
return and__20752__auto__;
}
})())){
chart.client.popup.call(null,lat_23916,lon_23917,html_23918,time_23919);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23869_23905))){
var map__23877_23922 = ins;
var map__23877_23923__$1 = ((((!((map__23877_23922 == null)))?((((map__23877_23922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23877_23922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877_23922):map__23877_23922);
var id_23924 = cljs.core.get.call(null,map__23877_23923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23925 = cljs.core.get.call(null,map__23877_23923__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23926 = cljs.core.get.call(null,map__23877_23923__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23927 = cljs.core.get.call(null,map__23877_23923__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23924,points_23925,options_23926,time_23927);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23869_23905))){
var map__23879_23928 = ins;
var map__23879_23929__$1 = ((((!((map__23879_23928 == null)))?((((map__23879_23928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23879_23928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23879_23928):map__23879_23928);
var coord_23930 = cljs.core.get.call(null,map__23879_23929__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23930);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23869_23905))){
var map__23881_23931 = ins;
var map__23881_23932__$1 = ((((!((map__23881_23931 == null)))?((((map__23881_23931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23881_23931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23881_23931):map__23881_23931);
var iname_23933 = cljs.core.get.call(null,map__23881_23932__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23934 = cljs.core.get.call(null,map__23881_23932__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23935 = cljs.core.get.call(null,map__23881_23932__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23936 = cljs.core.get.call(null,map__23881_23932__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23937 = cljs.core.get.call(null,map__23881_23932__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_23933,tip_23934,lat_23935,lon_23936,feature_23937);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23869_23905))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23868_23904.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23869_23905))){
var map__23883_23938 = ins;
var map__23883_23939__$1 = ((((!((map__23883_23938 == null)))?((((map__23883_23938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23883_23938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23883_23938):map__23883_23938);
var ids_23940 = cljs.core.get.call(null,map__23883_23939__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23941 = cljs.core.get.call(null,map__23883_23939__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23940,options_23941);
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

var G__23942 = seq__23862;
var G__23943 = chunk__23863;
var G__23944 = count__23864;
var G__23945 = (i__23865 + (1));
seq__23862 = G__23942;
chunk__23863 = G__23943;
count__23864 = G__23944;
i__23865 = G__23945;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23862);
if(temp__4657__auto__){
var seq__23862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23862__$1)){
var c__21578__auto__ = cljs.core.chunk_first.call(null,seq__23862__$1);
var G__23946 = cljs.core.chunk_rest.call(null,seq__23862__$1);
var G__23947 = c__21578__auto__;
var G__23948 = cljs.core.count.call(null,c__21578__auto__);
var G__23949 = (0);
seq__23862 = G__23946;
chunk__23863 = G__23947;
count__23864 = G__23948;
i__23865 = G__23949;
continue;
} else {
var map__23885 = cljs.core.first.call(null,seq__23862__$1);
var map__23885__$1 = ((((!((map__23885 == null)))?((((map__23885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23885):map__23885);
var ins = map__23885__$1;
var instruct = cljs.core.get.call(null,map__23885__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__23887_23950 = cljs.core._EQ_;
var expr__23888_23951 = instruct;
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__23888_23951))){
var map__23890_23952 = ins;
var map__23890_23953__$1 = ((((!((map__23890_23952 == null)))?((((map__23890_23952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23890_23952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890_23952):map__23890_23952);
var id_23954 = cljs.core.get.call(null,map__23890_23953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_23955 = cljs.core.get.call(null,map__23890_23953__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_23954,vehicle_23955);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__23888_23951))){
var map__23892_23956 = ins;
var map__23892_23957__$1 = ((((!((map__23892_23956 == null)))?((((map__23892_23956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23892_23956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23892_23956):map__23892_23956);
var id_23958 = cljs.core.get.call(null,map__23892_23957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_23958);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__23888_23951))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__23888_23951))){
var map__23894_23959 = ins;
var map__23894_23960__$1 = ((((!((map__23894_23959 == null)))?((((map__23894_23959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23894_23959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23894_23959):map__23894_23959);
var id_23961 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_23962 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23963 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_23964 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_23965 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_23966 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_23967 = cljs.core.get.call(null,map__23894_23960__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_23961)){
chart.client.popup.call(null,id_23961,html_23964,time_23965);
} else {
if(cljs.core.truth_((function (){var and__20752__auto__ = width_23966;
if(cljs.core.truth_(and__20752__auto__)){
var and__20752__auto____$1 = height_23967;
if(cljs.core.truth_(and__20752__auto____$1)){
var and__20752__auto____$2 = lat_23962;
if(cljs.core.truth_(and__20752__auto____$2)){
return lon_23963;
} else {
return and__20752__auto____$2;
}
} else {
return and__20752__auto____$1;
}
} else {
return and__20752__auto__;
}
})())){
chart.client.popup.call(null,lat_23962,lon_23963,html_23964,time_23965,width_23966,height_23967);
} else {
if(cljs.core.truth_((function (){var and__20752__auto__ = lat_23962;
if(cljs.core.truth_(and__20752__auto__)){
return lon_23963;
} else {
return and__20752__auto__;
}
})())){
chart.client.popup.call(null,lat_23962,lon_23963,html_23964,time_23965);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__23888_23951))){
var map__23896_23968 = ins;
var map__23896_23969__$1 = ((((!((map__23896_23968 == null)))?((((map__23896_23968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23896_23968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23896_23968):map__23896_23968);
var id_23970 = cljs.core.get.call(null,map__23896_23969__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_23971 = cljs.core.get.call(null,map__23896_23969__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_23972 = cljs.core.get.call(null,map__23896_23969__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_23973 = cljs.core.get.call(null,map__23896_23969__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_23970,points_23971,options_23972,time_23973);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__23888_23951))){
var map__23898_23974 = ins;
var map__23898_23975__$1 = ((((!((map__23898_23974 == null)))?((((map__23898_23974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23898_23974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23898_23974):map__23898_23974);
var coord_23976 = cljs.core.get.call(null,map__23898_23975__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_23976);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__23888_23951))){
var map__23900_23977 = ins;
var map__23900_23978__$1 = ((((!((map__23900_23977 == null)))?((((map__23900_23977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23900_23977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23900_23977):map__23900_23977);
var iname_23979 = cljs.core.get.call(null,map__23900_23978__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var tip_23980 = cljs.core.get.call(null,map__23900_23978__$1,new cljs.core.Keyword(null,"tip","tip",1221810860));
var lat_23981 = cljs.core.get.call(null,map__23900_23978__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_23982 = cljs.core.get.call(null,map__23900_23978__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_23983 = cljs.core.get.call(null,map__23900_23978__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_23979,tip_23980,lat_23981,lon_23982,feature_23983);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__23888_23951))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__23887_23950.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__23888_23951))){
var map__23902_23984 = ins;
var map__23902_23985__$1 = ((((!((map__23902_23984 == null)))?((((map__23902_23984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23902_23984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902_23984):map__23902_23984);
var ids_23986 = cljs.core.get.call(null,map__23902_23985__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_23987 = cljs.core.get.call(null,map__23902_23985__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_23986,options_23987);
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

var G__23988 = cljs.core.next.call(null,seq__23862__$1);
var G__23989 = null;
var G__23990 = (0);
var G__23991 = (0);
seq__23862 = G__23988;
chunk__23863 = G__23989;
count__23864 = G__23990;
i__23865 = G__23991;
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
var args23993 = [];
var len__21872__auto___23996 = arguments.length;
var i__21873__auto___23997 = (0);
while(true){
if((i__21873__auto___23997 < len__21872__auto___23996)){
args23993.push((arguments[i__21873__auto___23997]));

var G__23998 = (i__21873__auto___23997 + (1));
i__21873__auto___23997 = G__23998;
continue;
} else {
}
break;
}

var G__23995 = args23993.length;
switch (G__23995) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23993.length)].join('')));

}
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,chart.client.move_to);
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$1 = (function (cns){
ask.master.selector1.call(null,"chart.client","countries",cns,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler1 = (function chart$client$handler1(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__23992_SHARP_){
return chart.client.move_to.call(null,sel,p1__23992_SHARP_);
}));
}))
;
});

chart.client.move_to.cljs$core$IFn$_invoke$arity$2 = (function (cnt,aps){
ask.master.selector2.call(null,"chart.client","airports",aps,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

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
var args24004 = [];
var len__21872__auto___24007 = arguments.length;
var i__21873__auto___24008 = (0);
while(true){
if((i__21873__auto___24008 < len__21872__auto___24007)){
args24004.push((arguments[i__21873__auto___24008]));

var G__24009 = (i__21873__auto___24008 + (1));
i__21873__auto___24008 = G__24009;
continue;
} else {
}
break;
}

var G__24006 = args24004.length;
switch (G__24006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24004.length)].join('')));

}
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$0 = (function (){
ask.master.input1.call(null,"chart.client","new callsign",(80));

return (
chart.client.handler1 = (function chart$client$handler1(call){
ask.master.input2.call(null,"chart.client","hh:mm",(80));

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

return ask.master.get_answer.call(null,(function (p1__24000_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__24000_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24001_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__24001_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__24002_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__24002_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__24003_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__24003_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$6 = (function (call,tim,cnt1,apt1,cnt2,aps2){
ask.master.selector6.call(null,"chart.client","to airport",aps2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

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
var pred__24014 = cljs.core._EQ_;
var expr__24015 = cmd;
if(cljs.core.truth_(pred__24014.call(null,"commands",expr__24015))){
return null;
} else {
if(cljs.core.truth_(pred__24014.call(null,"watch-visible",expr__24015))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__24014.call(null,"move-to",expr__24015))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__24014.call(null,"schedule",expr__24015))){
return chart.client.schedule.call(null);
} else {
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd)].join(''),chart.client.no_handler);
}
}
}
}
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.3,25.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
try{tile1.addTo(m);
}catch (e24018){if((e24018 instanceof Error)){
var e_24019 = e24018;
cljs.core.println.call(null,e_24019);
} else {
throw e24018;

}
}
ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return chart.controls.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

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
var pred__24023 = cljs.core._EQ_;
var expr__24024 = q;
if(cljs.core.truth_(pred__24023.call(null,"questions",expr__24024))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map