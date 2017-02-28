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
chart.client.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","COUNTER","isle","railwaystation","mountain","CLIMB","airport","LEVEL","FOLLOWING","default","INTERSECT"],[[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/river.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/edu.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/landmark.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/city.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/event.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/waterbody.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/b.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/isle.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/railwaystation.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/mountain.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/airport.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/r.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/info.png")].join(''),[cljs.core.str(chart.client.HOST),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join('')]);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.PLACEMARKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.LINKS = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.error_handler = (function chart$client$error_handler(response){
var map__49770 = response;
var map__49770__$1 = ((((!((map__49770 == null)))?((((map__49770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49770):map__49770);
var status = cljs.core.get.call(null,map__49770__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__49770__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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

var mp_49778 = cljs.core.deref.call(null,vmp);
var mrk_49779 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_49778);
var vec__49775_49780 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_49778);
var lat_49781 = cljs.core.nth.call(null,vec__49775_49780,(0),null);
var lon_49782 = cljs.core.nth.call(null,vec__49775_49780,(1),null);
var pos_49783 = (new L.LatLng(lat_49781,lon_49782));
mrk_49779.setLatLng(pos_49783);

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
var seq__49788_49792 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__49789_49793 = null;
var count__49790_49794 = (0);
var i__49791_49795 = (0);
while(true){
if((i__49791_49795 < count__49790_49794)){
var veh_49796 = cljs.core._nth.call(null,chunk__49789_49793,i__49791_49795);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_49796)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_49796)));

var G__49797 = seq__49788_49792;
var G__49798 = chunk__49789_49793;
var G__49799 = count__49790_49794;
var G__49800 = (i__49791_49795 + (1));
seq__49788_49792 = G__49797;
chunk__49789_49793 = G__49798;
count__49790_49794 = G__49799;
i__49791_49795 = G__49800;
continue;
} else {
var temp__4657__auto___49801 = cljs.core.seq.call(null,seq__49788_49792);
if(temp__4657__auto___49801){
var seq__49788_49802__$1 = temp__4657__auto___49801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49788_49802__$1)){
var c__20894__auto___49803 = cljs.core.chunk_first.call(null,seq__49788_49802__$1);
var G__49804 = cljs.core.chunk_rest.call(null,seq__49788_49802__$1);
var G__49805 = c__20894__auto___49803;
var G__49806 = cljs.core.count.call(null,c__20894__auto___49803);
var G__49807 = (0);
seq__49788_49792 = G__49804;
chunk__49789_49793 = G__49805;
count__49790_49794 = G__49806;
i__49791_49795 = G__49807;
continue;
} else {
var veh_49808 = cljs.core.first.call(null,seq__49788_49802__$1);
csasync.proc.stop_process.call(null,new cljs.core.Keyword(null,"movst","movst",1585301628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_49808)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_49808)));

var G__49809 = cljs.core.next.call(null,seq__49788_49802__$1);
var G__49810 = null;
var G__49811 = (0);
var G__49812 = (0);
seq__49788_49792 = G__49809;
chunk__49789_49793 = G__49810;
count__49790_49794 = G__49811;
i__49791_49795 = G__49812;
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

var vec__49817 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__49817,(0),null);
var lon = cljs.core.nth.call(null,vec__49817,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__49817,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__49817,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__49813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__49813_SHARP_))),e.target);
});})(vec__49817,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__49817,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.bindTooltip(new cljs.core.Keyword(null,"callsign","callsign",1222385874).cljs$core$IFn$_invoke$arity$1(mp),({"opacity": 1.0}));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

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
chart.client.create_placemark = (function chart$client$create_placemark(iname,lat,lon,feature){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": (function (){var or__20080__auto__ = chart.client.URL_ICO.call(null,feature);
if(cljs.core.truth_(or__20080__auto__)){
return or__20080__auto__;
} else {
return chart.client.URL_ICO.call(null,"default");
}
})(), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk = L.rotatedMarker(pos,opt);
mrk.on("click",((function (pos,ico,opt,mrk){
return (function (e){
return chart.client.info.call(null,[cljs.core.str("pm"),cljs.core.str(iname)].join(''));
});})(pos,ico,opt,mrk))
);

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk.bindTooltip(iname,({"opacity": 1.0}));

return cljs.core._vreset_BANG_.call(null,chart.client.PLACEMARKS,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.PLACEMARKS),iname,mrk));
});
chart.client.clear_placemarks = (function chart$client$clear_placemarks(){
var seq__49824_49828 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.PLACEMARKS)));
var chunk__49825_49829 = null;
var count__49826_49830 = (0);
var i__49827_49831 = (0);
while(true){
if((i__49827_49831 < count__49826_49830)){
var mrk_49832 = cljs.core._nth.call(null,chunk__49825_49829,i__49827_49831);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_49832);

var G__49833 = seq__49824_49828;
var G__49834 = chunk__49825_49829;
var G__49835 = count__49826_49830;
var G__49836 = (i__49827_49831 + (1));
seq__49824_49828 = G__49833;
chunk__49825_49829 = G__49834;
count__49826_49830 = G__49835;
i__49827_49831 = G__49836;
continue;
} else {
var temp__4657__auto___49837 = cljs.core.seq.call(null,seq__49824_49828);
if(temp__4657__auto___49837){
var seq__49824_49838__$1 = temp__4657__auto___49837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49824_49838__$1)){
var c__20894__auto___49839 = cljs.core.chunk_first.call(null,seq__49824_49838__$1);
var G__49840 = cljs.core.chunk_rest.call(null,seq__49824_49838__$1);
var G__49841 = c__20894__auto___49839;
var G__49842 = cljs.core.count.call(null,c__20894__auto___49839);
var G__49843 = (0);
seq__49824_49828 = G__49840;
chunk__49825_49829 = G__49841;
count__49826_49830 = G__49842;
i__49827_49831 = G__49843;
continue;
} else {
var mrk_49844 = cljs.core.first.call(null,seq__49824_49838__$1);
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk_49844);

var G__49845 = cljs.core.next.call(null,seq__49824_49838__$1);
var G__49846 = null;
var G__49847 = (0);
var G__49848 = (0);
seq__49824_49828 = G__49845;
chunk__49825_49829 = G__49846;
count__49826_49830 = G__49847;
i__49827_49831 = G__49848;
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
var args49849 = [];
var len__21188__auto___49855 = arguments.length;
var i__21189__auto___49856 = (0);
while(true){
if((i__21189__auto___49856 < len__21188__auto___49855)){
args49849.push((arguments[i__21189__auto___49856]));

var G__49857 = (i__21189__auto___49856 + (1));
i__21189__auto___49856 = G__49857;
continue;
} else {
}
break;
}

var G__49851 = args49849.length;
switch (G__49851) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49849.length)].join('')));

}
});

chart.client.popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
var vec__49852 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vmp));
var lat = cljs.core.nth.call(null,vec__49852,(0),null);
var lon = cljs.core.nth.call(null,vec__49852,(1),null);
return chart.client.popup.call(null,lat,lon,html,time);
});

chart.client.popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
return chart.client.popup.call(null,lat,lon,html,time,(600),(800));
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
return (function (p1__49859_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__49859_SHARP_),cljs.core.second.call(null,p1__49859_SHARP_)));
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
var vec__49863 = chart.client.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__49863,(0),null);
var s = cljs.core.nth.call(null,vec__49863,(1),null);
var w = cljs.core.nth.call(null,vec__49863,(2),null);
var e = cljs.core.nth.call(null,vec__49863,(3),null);
var url = [cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str("visible?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__49863,n,s,w,e,url){
return (function (response){
return null;
});})(vec__49863,n,s,w,e,url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.map_center = (function chart$client$map_center(p__49866){
var vec__49870 = p__49866;
var lat = cljs.core.nth.call(null,vec__49870,(0),null);
var lon = cljs.core.nth.call(null,vec__49870,(1),null);
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,chart.client.CHART).getZoom();
cljs.core.deref.call(null,chart.client.CHART).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return chart.client.new_visible.call(null);
});
chart.client.collect_llga = (function chart$client$collect_llga(ids){
var vhs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__49873_SHARP_){
return cljs.core.deref.call(null,chart.client.VEHICLES).call(null,p1__49873_SHARP_);
}),ids));
var mks = cljs.core.map.call(null,((function (vhs){
return (function (p1__49874_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__49874_SHARP_));
});})(vhs))
,vhs);
var llgs = cljs.core.map.call(null,((function (vhs,mks){
return (function (p1__49875_SHARP_){
return p1__49875_SHARP_.getLatLng();
});})(vhs,mks))
,mks);
return cljs.core.clj__GT_js.call(null,llgs);
});
chart.client.linkPopup = (function chart$client$linkPopup(p__49876,ops){
var vec__49880 = p__49876;
var id1 = cljs.core.nth.call(null,vec__49880,(0),null);
var id2 = cljs.core.nth.call(null,vec__49880,(1),null);
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
var seq__49925 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__49926 = null;
var count__49927 = (0);
var i__49928 = (0);
while(true){
if((i__49928 < count__49927)){
var map__49929 = cljs.core._nth.call(null,chunk__49926,i__49928);
var map__49929__$1 = ((((!((map__49929 == null)))?((((map__49929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49929):map__49929);
var ins = map__49929__$1;
var instruct = cljs.core.get.call(null,map__49929__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__49931_49967 = cljs.core._EQ_;
var expr__49932_49968 = instruct;
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__49932_49968))){
var map__49934_49969 = ins;
var map__49934_49970__$1 = ((((!((map__49934_49969 == null)))?((((map__49934_49969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49934_49969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49934_49969):map__49934_49969);
var id_49971 = cljs.core.get.call(null,map__49934_49970__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_49972 = cljs.core.get.call(null,map__49934_49970__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_49971,vehicle_49972);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__49932_49968))){
var map__49936_49973 = ins;
var map__49936_49974__$1 = ((((!((map__49936_49973 == null)))?((((map__49936_49973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49936_49973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49936_49973):map__49936_49973);
var id_49975 = cljs.core.get.call(null,map__49936_49974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_49975);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__49932_49968))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__49932_49968))){
var map__49938_49976 = ins;
var map__49938_49977__$1 = ((((!((map__49938_49976 == null)))?((((map__49938_49976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49938_49976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49938_49976):map__49938_49976);
var id_49978 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_49979 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_49980 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_49981 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_49982 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_49983 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_49984 = cljs.core.get.call(null,map__49938_49977__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_49978)){
chart.client.popup.call(null,id_49978,html_49981,time_49982);
} else {
if(cljs.core.truth_((function (){var and__20068__auto__ = width_49983;
if(cljs.core.truth_(and__20068__auto__)){
var and__20068__auto____$1 = height_49984;
if(cljs.core.truth_(and__20068__auto____$1)){
var and__20068__auto____$2 = lat_49979;
if(cljs.core.truth_(and__20068__auto____$2)){
return lon_49980;
} else {
return and__20068__auto____$2;
}
} else {
return and__20068__auto____$1;
}
} else {
return and__20068__auto__;
}
})())){
chart.client.popup.call(null,lat_49979,lon_49980,html_49981,time_49982,width_49983,height_49984);
} else {
if(cljs.core.truth_((function (){var and__20068__auto__ = lat_49979;
if(cljs.core.truth_(and__20068__auto__)){
return lon_49980;
} else {
return and__20068__auto__;
}
})())){
chart.client.popup.call(null,lat_49979,lon_49980,html_49981,time_49982);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__49932_49968))){
var map__49940_49985 = ins;
var map__49940_49986__$1 = ((((!((map__49940_49985 == null)))?((((map__49940_49985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49940_49985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49940_49985):map__49940_49985);
var id_49987 = cljs.core.get.call(null,map__49940_49986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_49988 = cljs.core.get.call(null,map__49940_49986__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_49989 = cljs.core.get.call(null,map__49940_49986__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_49990 = cljs.core.get.call(null,map__49940_49986__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_49987,points_49988,options_49989,time_49990);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__49932_49968))){
var map__49942_49991 = ins;
var map__49942_49992__$1 = ((((!((map__49942_49991 == null)))?((((map__49942_49991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49942_49991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49942_49991):map__49942_49991);
var coord_49993 = cljs.core.get.call(null,map__49942_49992__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_49993);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__49932_49968))){
var map__49944_49994 = ins;
var map__49944_49995__$1 = ((((!((map__49944_49994 == null)))?((((map__49944_49994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49944_49994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49944_49994):map__49944_49994);
var iname_49996 = cljs.core.get.call(null,map__49944_49995__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_49997 = cljs.core.get.call(null,map__49944_49995__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_49998 = cljs.core.get.call(null,map__49944_49995__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_49999 = cljs.core.get.call(null,map__49944_49995__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_49996,lat_49997,lon_49998,feature_49999);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__49932_49968))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__49931_49967.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__49932_49968))){
var map__49946_50000 = ins;
var map__49946_50001__$1 = ((((!((map__49946_50000 == null)))?((((map__49946_50000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49946_50000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49946_50000):map__49946_50000);
var ids_50002 = cljs.core.get.call(null,map__49946_50001__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_50003 = cljs.core.get.call(null,map__49946_50001__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_50002,options_50003);
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

var G__50004 = seq__49925;
var G__50005 = chunk__49926;
var G__50006 = count__49927;
var G__50007 = (i__49928 + (1));
seq__49925 = G__50004;
chunk__49926 = G__50005;
count__49927 = G__50006;
i__49928 = G__50007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49925);
if(temp__4657__auto__){
var seq__49925__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49925__$1)){
var c__20894__auto__ = cljs.core.chunk_first.call(null,seq__49925__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__49925__$1);
var G__50009 = c__20894__auto__;
var G__50010 = cljs.core.count.call(null,c__20894__auto__);
var G__50011 = (0);
seq__49925 = G__50008;
chunk__49926 = G__50009;
count__49927 = G__50010;
i__49928 = G__50011;
continue;
} else {
var map__49948 = cljs.core.first.call(null,seq__49925__$1);
var map__49948__$1 = ((((!((map__49948 == null)))?((((map__49948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49948):map__49948);
var ins = map__49948__$1;
var instruct = cljs.core.get.call(null,map__49948__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__49950_50012 = cljs.core._EQ_;
var expr__49951_50013 = instruct;
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__49951_50013))){
var map__49953_50014 = ins;
var map__49953_50015__$1 = ((((!((map__49953_50014 == null)))?((((map__49953_50014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49953_50014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49953_50014):map__49953_50014);
var id_50016 = cljs.core.get.call(null,map__49953_50015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_50017 = cljs.core.get.call(null,map__49953_50015__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_50016,vehicle_50017);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__49951_50013))){
var map__49955_50018 = ins;
var map__49955_50019__$1 = ((((!((map__49955_50018 == null)))?((((map__49955_50018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49955_50018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49955_50018):map__49955_50018);
var id_50020 = cljs.core.get.call(null,map__49955_50019__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_50020);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__49951_50013))){
chart.client.clear_vehicles.call(null);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"popup","popup",635890211),expr__49951_50013))){
var map__49957_50021 = ins;
var map__49957_50022__$1 = ((((!((map__49957_50021 == null)))?((((map__49957_50021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49957_50021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49957_50021):map__49957_50021);
var id_50023 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_50024 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_50025 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_50026 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_50027 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var width_50028 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_50029 = cljs.core.get.call(null,map__49957_50022__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(id_50023)){
chart.client.popup.call(null,id_50023,html_50026,time_50027);
} else {
if(cljs.core.truth_((function (){var and__20068__auto__ = width_50028;
if(cljs.core.truth_(and__20068__auto__)){
var and__20068__auto____$1 = height_50029;
if(cljs.core.truth_(and__20068__auto____$1)){
var and__20068__auto____$2 = lat_50024;
if(cljs.core.truth_(and__20068__auto____$2)){
return lon_50025;
} else {
return and__20068__auto____$2;
}
} else {
return and__20068__auto____$1;
}
} else {
return and__20068__auto__;
}
})())){
chart.client.popup.call(null,lat_50024,lon_50025,html_50026,time_50027,width_50028,height_50029);
} else {
if(cljs.core.truth_((function (){var and__20068__auto__ = lat_50024;
if(cljs.core.truth_(and__20068__auto__)){
return lon_50025;
} else {
return and__20068__auto__;
}
})())){
chart.client.popup.call(null,lat_50024,lon_50025,html_50026,time_50027);
} else {
}
}
}
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"trail","trail",-272340561),expr__49951_50013))){
var map__49959_50030 = ins;
var map__49959_50031__$1 = ((((!((map__49959_50030 == null)))?((((map__49959_50030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49959_50030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49959_50030):map__49959_50030);
var id_50032 = cljs.core.get.call(null,map__49959_50031__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points_50033 = cljs.core.get.call(null,map__49959_50031__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var options_50034 = cljs.core.get.call(null,map__49959_50031__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_50035 = cljs.core.get.call(null,map__49959_50031__$1,new cljs.core.Keyword(null,"time","time",1385887882));
chart.client.add_trail.call(null,id_50032,points_50033,options_50034,time_50035);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"map-center","map-center",770153511),expr__49951_50013))){
var map__49961_50036 = ins;
var map__49961_50037__$1 = ((((!((map__49961_50036 == null)))?((((map__49961_50036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49961_50036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49961_50036):map__49961_50036);
var coord_50038 = cljs.core.get.call(null,map__49961_50037__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
chart.client.map_center.call(null,coord_50038);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__49951_50013))){
var map__49963_50039 = ins;
var map__49963_50040__$1 = ((((!((map__49963_50039 == null)))?((((map__49963_50039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49963_50039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49963_50039):map__49963_50039);
var iname_50041 = cljs.core.get.call(null,map__49963_50040__$1,new cljs.core.Keyword(null,"iname","iname",672588984));
var lat_50042 = cljs.core.get.call(null,map__49963_50040__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_50043 = cljs.core.get.call(null,map__49963_50040__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var feature_50044 = cljs.core.get.call(null,map__49963_50040__$1,new cljs.core.Keyword(null,"feature","feature",27242652));
chart.client.create_placemark.call(null,iname_50041,lat_50042,lon_50043,feature_50044);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__49951_50013))){
chart.client.clear_placemarks.call(null);
} else {
if(cljs.core.truth_(pred__49950_50012.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__49951_50013))){
var map__49965_50045 = ins;
var map__49965_50046__$1 = ((((!((map__49965_50045 == null)))?((((map__49965_50045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49965_50045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49965_50045):map__49965_50045);
var ids_50047 = cljs.core.get.call(null,map__49965_50046__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_50048 = cljs.core.get.call(null,map__49965_50046__$1,new cljs.core.Keyword(null,"options","options",99638489));
chart.client.add_link.call(null,ids_50047,options_50048);
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

var G__50049 = cljs.core.next.call(null,seq__49925__$1);
var G__50050 = null;
var G__50051 = (0);
var G__50052 = (0);
seq__49925 = G__50049;
chunk__49926 = G__50050;
count__49927 = G__50051;
i__49928 = G__50052;
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
var args50054 = [];
var len__21188__auto___50057 = arguments.length;
var i__21189__auto___50058 = (0);
while(true){
if((i__21189__auto___50058 < len__21188__auto___50057)){
args50054.push((arguments[i__21189__auto___50058]));

var G__50059 = (i__21189__auto___50058 + (1));
i__21189__auto___50058 = G__50059;
continue;
} else {
}
break;
}

var G__50056 = args50054.length;
switch (G__50056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50054.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__50053_SHARP_){
return chart.client.move_to.call(null,sel,p1__50053_SHARP_);
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
var args50065 = [];
var len__21188__auto___50068 = arguments.length;
var i__21189__auto___50069 = (0);
while(true){
if((i__21189__auto___50069 < len__21188__auto___50068)){
args50065.push((arguments[i__21189__auto___50069]));

var G__50070 = (i__21189__auto___50069 + (1));
i__21189__auto___50069 = G__50070;
continue;
} else {
}
break;
}

var G__50067 = args50065.length;
switch (G__50067) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50065.length)].join('')));

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

return ask.master.get_answer.call(null,(function (p1__50061_SHARP_){
return chart.client.schedule.call(null,call,tim,p1__50061_SHARP_);
}));
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$3 = (function (call,tim,cns1){
ask.master.selector3.call(null,"chart.client","from country",cns1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler3 = (function chart$client$handler3(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__50062_SHARP_){
return chart.client.schedule.call(null,call,tim,sel,p1__50062_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$4 = (function (call,tim,cnt1,aps1){
ask.master.selector4.call(null,"chart.client","from airport",aps1,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler4 = (function chart$client$handler4(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"countries"], null));

return ask.master.get_answer.call(null,(function (p1__50063_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,sel,p1__50063_SHARP_);
}));
}))
;
});

chart.client.schedule.cljs$core$IFn$_invoke$arity$5 = (function (call,tim,cnt1,apt1,cns2){
ask.master.selector5.call(null,"chart.client","to county",cns2,new cljs.core.Keyword(null,"itself","itself",1264932322),(130));

return (
chart.client.handler5 = (function chart$client$handler5(sel){
ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"whom","whom",1092673542),"direct",new cljs.core.Keyword(null,"question","question",-1411720117),"airports",new cljs.core.Keyword(null,"country","country",312965309),sel], null));

return ask.master.get_answer.call(null,(function (p1__50064_SHARP_){
return chart.client.schedule.call(null,call,tim,cnt1,apt1,sel,p1__50064_SHARP_);
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
var pred__50075 = cljs.core._EQ_;
var expr__50076 = cmd;
if(cljs.core.truth_(pred__50075.call(null,"commands",expr__50076))){
return null;
} else {
if(cljs.core.truth_(pred__50075.call(null,"watch-visible",expr__50076))){
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
var prm = [cljs.core.str("?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(chart.client.URL)),cljs.core.str(cmd),cljs.core.str(prm)].join(''),chart.client.no_handler);
} else {
if(cljs.core.truth_(pred__50075.call(null,"move-to",expr__50076))){
return chart.client.move_to.call(null);
} else {
if(cljs.core.truth_(pred__50075.call(null,"schedule",expr__50076))){
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
}catch (e50079){if((e50079 instanceof Error)){
var e_50080 = e50079;
cljs.core.println.call(null,e_50080);
} else {
throw e50079;

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
var pred__50084 = cljs.core._EQ_;
var expr__50085 = q;
if(cljs.core.truth_(pred__50084.call(null,"questions",expr__50085))){
return null;
} else {
return ask.master.ask_server.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whom","whom",1092673542),"es",new cljs.core.Keyword(null,"predicate","predicate",-1742501860),q], null));
}
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map