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
chart.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/command/")].join('');
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

var mp_21918 = cljs.core.deref.call(null,vmp);
var mrk_21919 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_21918);
var vec__21915_21920 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_21918);
var lat_21921 = cljs.core.nth.call(null,vec__21915_21920,(0),null);
var lon_21922 = cljs.core.nth.call(null,vec__21915_21920,(1),null);
var pos_21923 = (new L.LatLng(lat_21921,lon_21922));
mrk_21919.setLatLng(pos_21923);

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
var vec__21928 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__21928,(0),null);
var lon = cljs.core.nth.call(null,vec__21928,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (vec__21928,lat,lon,pos,ico,opt,mk){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__21928,lat,lon,pos,ico,opt,mk){
return (function (p1__21924_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__21924_SHARP_))),e.target);
});})(vec__21928,lat,lon,pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__21928,lat,lon,pos,ico,opt,mk))
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
var map__21933 = response;
var map__21933__$1 = ((((!((map__21933 == null)))?((((map__21933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21933):map__21933);
var status = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21933__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__21957 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__21958 = null;
var count__21959 = (0);
var i__21960 = (0);
while(true){
if((i__21960 < count__21959)){
var map__21961 = cljs.core._nth.call(null,chunk__21958,i__21960);
var map__21961__$1 = ((((!((map__21961 == null)))?((((map__21961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21961):map__21961);
var ins = map__21961__$1;
var instruct = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21963_21979 = cljs.core._EQ_;
var expr__21964_21980 = instruct;
if(cljs.core.truth_(pred__21963_21979.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__21964_21980))){
var map__21966_21981 = ins;
var map__21966_21982__$1 = ((((!((map__21966_21981 == null)))?((((map__21966_21981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21966_21981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21966_21981):map__21966_21981);
var id_21983 = cljs.core.get.call(null,map__21966_21982__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_21984 = cljs.core.get.call(null,map__21966_21982__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_21983,vehicle_21984);
} else {
if(cljs.core.truth_(pred__21963_21979.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21964_21980))){
var map__21968_21985 = ins;
var map__21968_21986__$1 = ((((!((map__21968_21985 == null)))?((((map__21968_21985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21968_21985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21968_21985):map__21968_21985);
var id_21987 = cljs.core.get.call(null,map__21968_21986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_21987);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__21988 = seq__21957;
var G__21989 = chunk__21958;
var G__21990 = count__21959;
var G__21991 = (i__21960 + (1));
seq__21957 = G__21988;
chunk__21958 = G__21989;
count__21959 = G__21990;
i__21960 = G__21991;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21957);
if(temp__4657__auto__){
var seq__21957__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21957__$1)){
var c__19498__auto__ = cljs.core.chunk_first.call(null,seq__21957__$1);
var G__21992 = cljs.core.chunk_rest.call(null,seq__21957__$1);
var G__21993 = c__19498__auto__;
var G__21994 = cljs.core.count.call(null,c__19498__auto__);
var G__21995 = (0);
seq__21957 = G__21992;
chunk__21958 = G__21993;
count__21959 = G__21994;
i__21960 = G__21995;
continue;
} else {
var map__21970 = cljs.core.first.call(null,seq__21957__$1);
var map__21970__$1 = ((((!((map__21970 == null)))?((((map__21970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21970):map__21970);
var ins = map__21970__$1;
var instruct = cljs.core.get.call(null,map__21970__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__21972_21996 = cljs.core._EQ_;
var expr__21973_21997 = instruct;
if(cljs.core.truth_(pred__21972_21996.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__21973_21997))){
var map__21975_21998 = ins;
var map__21975_21999__$1 = ((((!((map__21975_21998 == null)))?((((map__21975_21998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21975_21998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21975_21998):map__21975_21998);
var id_22000 = cljs.core.get.call(null,map__21975_21999__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22001 = cljs.core.get.call(null,map__21975_21999__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_22000,vehicle_22001);
} else {
if(cljs.core.truth_(pred__21972_21996.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__21973_21997))){
var map__21977_22002 = ins;
var map__21977_22003__$1 = ((((!((map__21977_22002 == null)))?((((map__21977_22002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21977_22002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21977_22002):map__21977_22002);
var id_22004 = cljs.core.get.call(null,map__21977_22003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22004);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__22005 = cljs.core.next.call(null,seq__21957__$1);
var G__22006 = null;
var G__22007 = (0);
var G__22008 = (0);
seq__21957 = G__22005;
chunk__21958 = G__22006;
count__21959 = G__22007;
i__21960 = G__22008;
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
chart.client.watch_visible = (function chart$client$watch_visible(){
return "watch-visible?n=60&s=59&w=29&e=31";
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__22012 = cljs.core._EQ_;
var expr__22013 = cmd;
if(cljs.core.truth_(pred__22012.call(null,"watch-visible",expr__22013))){
return chart.client.watch_visible.call(null);
} else {
return cmd;
}
})())].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),chart.client.error_handler], null));
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

csasync.proc.repeater.call(null,chart.client.receive_instructions,chart.client.INS_TIO);

return chart.controls.show_chart_controls.call(null);
});
window.onload = chart.client.on_load_chart.call(null);

//# sourceMappingURL=client.js.map