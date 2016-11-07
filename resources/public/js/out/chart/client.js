// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
goog.require('chart.controls');
goog.require('goog.string.format');
goog.require('csasync.proc');
chart.client.PORT = (4444);
chart.client.CHR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/chart/")].join('');
chart.client.INS_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/instructions/")].join('');
chart.client.INS_TIO = (1000);
chart.client.CHART = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.VEHICLES = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
chart.client.MOV_TIO = (300);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_24049 = cljs.core.deref.call(null,vmp);
var mrk_24050 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_24049);
var vec__24046_24051 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_24049);
var lat_24052 = cljs.core.nth.call(null,vec__24046_24051,(0),null);
var lon_24053 = cljs.core.nth.call(null,vec__24046_24051,(1),null);
var pos_24054 = (new L.LatLng(lat_24052,lon_24053));
mrk_24050.setLatLng(pos_24054);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
} else {
return null;
}
});
chart.client.delete_vehicle = (function chart$client$delete_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var veh = temp__4657__auto__;
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh)));

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.dissoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id));
} else {
return null;
}
});
chart.client.info = (function chart$client$info(id){
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INFO","INFO",-1061657090),id], null));
});
chart.client.create_marker = (function chart$client$create_marker(mp){
var vec__24059 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__24059,(0),null);
var lon = cljs.core.nth.call(null,vec__24059,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (vec__24059,lat,lon,pos,ico,opt,mk){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__24059,lat,lon,pos,ico,opt,mk){
return (function (p1__24055_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__24055_SHARP_))),e.target);
});})(vec__24059,lat,lon,pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__24059,lat,lon,pos,ico,opt,mk))
);

return mk;
});
chart.client.create_vehicle = (function chart$client$create_vehicle(id,mp){
if(cljs.core.truth_(cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id))){
chart.client.delete_vehicle.call(null,id);
} else {
}

var mrk = chart.client.create_marker.call(null,mp);
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),mrk,new cljs.core.Keyword(null,"step","step",1288888124),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.repeater.call(null,((function (mrk){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(mrk))
,chart.client.MOV_TIO));
mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,cljs.core.volatile_BANG_.call(null,mp__$1)));
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__24064 = response;
var map__24064__$1 = ((((!((map__24064 == null)))?((((map__24064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24064):map__24064);
var status = cljs.core.get.call(null,map__24064__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__24064__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__24088 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__24089 = null;
var count__24090 = (0);
var i__24091 = (0);
while(true){
if((i__24091 < count__24090)){
var map__24092 = cljs.core._nth.call(null,chunk__24089,i__24091);
var map__24092__$1 = ((((!((map__24092 == null)))?((((map__24092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24092):map__24092);
var ins = map__24092__$1;
var instruct = cljs.core.get.call(null,map__24092__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24094_24110 = cljs.core._EQ_;
var expr__24095_24111 = instruct;
if(cljs.core.truth_(pred__24094_24110.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__24095_24111))){
var map__24097_24112 = ins;
var map__24097_24113__$1 = ((((!((map__24097_24112 == null)))?((((map__24097_24112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24097_24112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24097_24112):map__24097_24112);
var id_24114 = cljs.core.get.call(null,map__24097_24113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24115 = cljs.core.get.call(null,map__24097_24113__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_24114,vehicle_24115);
} else {
if(cljs.core.truth_(pred__24094_24110.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24095_24111))){
var map__24099_24116 = ins;
var map__24099_24117__$1 = ((((!((map__24099_24116 == null)))?((((map__24099_24116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24099_24116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24099_24116):map__24099_24116);
var id_24118 = cljs.core.get.call(null,map__24099_24117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24118);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__24119 = seq__24088;
var G__24120 = chunk__24089;
var G__24121 = count__24090;
var G__24122 = (i__24091 + (1));
seq__24088 = G__24119;
chunk__24089 = G__24120;
count__24090 = G__24121;
i__24091 = G__24122;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24088);
if(temp__4657__auto__){
var seq__24088__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24088__$1)){
var c__19252__auto__ = cljs.core.chunk_first.call(null,seq__24088__$1);
var G__24123 = cljs.core.chunk_rest.call(null,seq__24088__$1);
var G__24124 = c__19252__auto__;
var G__24125 = cljs.core.count.call(null,c__19252__auto__);
var G__24126 = (0);
seq__24088 = G__24123;
chunk__24089 = G__24124;
count__24090 = G__24125;
i__24091 = G__24126;
continue;
} else {
var map__24101 = cljs.core.first.call(null,seq__24088__$1);
var map__24101__$1 = ((((!((map__24101 == null)))?((((map__24101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24101):map__24101);
var ins = map__24101__$1;
var instruct = cljs.core.get.call(null,map__24101__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__24103_24127 = cljs.core._EQ_;
var expr__24104_24128 = instruct;
if(cljs.core.truth_(pred__24103_24127.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__24104_24128))){
var map__24106_24129 = ins;
var map__24106_24130__$1 = ((((!((map__24106_24129 == null)))?((((map__24106_24129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24106_24129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106_24129):map__24106_24129);
var id_24131 = cljs.core.get.call(null,map__24106_24130__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_24132 = cljs.core.get.call(null,map__24106_24130__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_24131,vehicle_24132);
} else {
if(cljs.core.truth_(pred__24103_24127.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__24104_24128))){
var map__24108_24133 = ins;
var map__24108_24134__$1 = ((((!((map__24108_24133 == null)))?((((map__24108_24133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24108_24133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24108_24133):map__24108_24133);
var id_24135 = cljs.core.get.call(null,map__24108_24134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_24135);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__24136 = cljs.core.next.call(null,seq__24088__$1);
var G__24137 = null;
var G__24138 = (0);
var G__24139 = (0);
seq__24088 = G__24136;
chunk__24089 = G__24137;
count__24090 = G__24138;
i__24091 = G__24139;
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
return ajax.core.GET.call(null,chart.client.INS_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),chart.client.instructions_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
});
chart.client.init_chart = (function chart$client$init_chart(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT-CHART","INIT-CHART",-256567932));

var m = L.map("map").setView([60.0,30.0],(10));
var tile1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",({"maxZoom": (16), "attribution": "Ru, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile3 = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile4 = L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var tile5 = L.tileLayer("http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "Ru, Google &copy;"}));
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

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

return csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map