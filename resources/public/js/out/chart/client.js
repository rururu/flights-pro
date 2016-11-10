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

var mp_21963 = cljs.core.deref.call(null,vmp);
var mrk_21964 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_21963);
var vec__21960_21965 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_21963);
var lat_21966 = cljs.core.nth.call(null,vec__21960_21965,(0),null);
var lon_21967 = cljs.core.nth.call(null,vec__21960_21965,(1),null);
var pos_21968 = (new L.LatLng(lat_21966,lon_21967));
mrk_21964.setLatLng(pos_21968);

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
chart.client.clear_vehicles = (function chart$client$clear_vehicles(){
var seq__21973_21977 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__21974_21978 = null;
var count__21975_21979 = (0);
var i__21976_21980 = (0);
while(true){
if((i__21976_21980 < count__21975_21979)){
var veh_21981 = cljs.core._nth.call(null,chunk__21974_21978,i__21976_21980);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21981)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21981)));

var G__21982 = seq__21973_21977;
var G__21983 = chunk__21974_21978;
var G__21984 = count__21975_21979;
var G__21985 = (i__21976_21980 + (1));
seq__21973_21977 = G__21982;
chunk__21974_21978 = G__21983;
count__21975_21979 = G__21984;
i__21976_21980 = G__21985;
continue;
} else {
var temp__4657__auto___21986 = cljs.core.seq.call(null,seq__21973_21977);
if(temp__4657__auto___21986){
var seq__21973_21987__$1 = temp__4657__auto___21986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21973_21987__$1)){
var c__19514__auto___21988 = cljs.core.chunk_first.call(null,seq__21973_21987__$1);
var G__21989 = cljs.core.chunk_rest.call(null,seq__21973_21987__$1);
var G__21990 = c__19514__auto___21988;
var G__21991 = cljs.core.count.call(null,c__19514__auto___21988);
var G__21992 = (0);
seq__21973_21977 = G__21989;
chunk__21974_21978 = G__21990;
count__21975_21979 = G__21991;
i__21976_21980 = G__21992;
continue;
} else {
var veh_21993 = cljs.core.first.call(null,seq__21973_21987__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21993)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_21993)));

var G__21994 = cljs.core.next.call(null,seq__21973_21987__$1);
var G__21995 = null;
var G__21996 = (0);
var G__21997 = (0);
seq__21973_21977 = G__21994;
chunk__21974_21978 = G__21995;
count__21975_21979 = G__21996;
i__21976_21980 = G__21997;
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
return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INFO","INFO",-1061657090),id], null));
});
chart.client.create_marker = (function chart$client$create_marker(mp){
var vec__22002 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22002,(0),null);
var lon = cljs.core.nth.call(null,vec__22002,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (vec__22002,lat,lon,pos,ico,opt,mk){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22002,lat,lon,pos,ico,opt,mk){
return (function (p1__21998_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__21998_SHARP_))),e.target);
});})(vec__22002,lat,lon,pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22002,lat,lon,pos,ico,opt,mk))
);

return mk;
});
chart.client.create_vehicle = (function chart$client$create_vehicle(id,mp){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"CV","CV",-311705046),id,mp], null));

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
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),chart.client.MOV_TIO,new cljs.core.Keyword(null,"ST","ST",-868130234),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(mp__$1)], null));

mrk.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,cljs.core.volatile_BANG_.call(null,mp__$1)));
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__22007 = response;
var map__22007__$1 = ((((!((map__22007 == null)))?((((map__22007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22007):map__22007);
var status = cljs.core.get.call(null,map__22007__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22007__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__22031 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22032 = null;
var count__22033 = (0);
var i__22034 = (0);
while(true){
if((i__22034 < count__22033)){
var map__22035 = cljs.core._nth.call(null,chunk__22032,i__22034);
var map__22035__$1 = ((((!((map__22035 == null)))?((((map__22035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22035):map__22035);
var ins = map__22035__$1;
var instruct = cljs.core.get.call(null,map__22035__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22037_22053 = cljs.core._EQ_;
var expr__22038_22054 = instruct;
if(cljs.core.truth_(pred__22037_22053.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__22038_22054))){
var map__22040_22055 = ins;
var map__22040_22056__$1 = ((((!((map__22040_22055 == null)))?((((map__22040_22055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22040_22055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22040_22055):map__22040_22055);
var id_22057 = cljs.core.get.call(null,map__22040_22056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22058 = cljs.core.get.call(null,map__22040_22056__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_22057,vehicle_22058);
} else {
if(cljs.core.truth_(pred__22037_22053.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22038_22054))){
var map__22042_22059 = ins;
var map__22042_22060__$1 = ((((!((map__22042_22059 == null)))?((((map__22042_22059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22042_22059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22042_22059):map__22042_22059);
var id_22061 = cljs.core.get.call(null,map__22042_22060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22061);
} else {
if(cljs.core.truth_(pred__22037_22053.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22038_22054))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__22062 = seq__22031;
var G__22063 = chunk__22032;
var G__22064 = count__22033;
var G__22065 = (i__22034 + (1));
seq__22031 = G__22062;
chunk__22032 = G__22063;
count__22033 = G__22064;
i__22034 = G__22065;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22031);
if(temp__4657__auto__){
var seq__22031__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22031__$1)){
var c__19514__auto__ = cljs.core.chunk_first.call(null,seq__22031__$1);
var G__22066 = cljs.core.chunk_rest.call(null,seq__22031__$1);
var G__22067 = c__19514__auto__;
var G__22068 = cljs.core.count.call(null,c__19514__auto__);
var G__22069 = (0);
seq__22031 = G__22066;
chunk__22032 = G__22067;
count__22033 = G__22068;
i__22034 = G__22069;
continue;
} else {
var map__22044 = cljs.core.first.call(null,seq__22031__$1);
var map__22044__$1 = ((((!((map__22044 == null)))?((((map__22044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22044):map__22044);
var ins = map__22044__$1;
var instruct = cljs.core.get.call(null,map__22044__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__22046_22070 = cljs.core._EQ_;
var expr__22047_22071 = instruct;
if(cljs.core.truth_(pred__22046_22070.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__22047_22071))){
var map__22049_22072 = ins;
var map__22049_22073__$1 = ((((!((map__22049_22072 == null)))?((((map__22049_22072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22049_22072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22049_22072):map__22049_22072);
var id_22074 = cljs.core.get.call(null,map__22049_22073__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22075 = cljs.core.get.call(null,map__22049_22073__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_22074,vehicle_22075);
} else {
if(cljs.core.truth_(pred__22046_22070.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22047_22071))){
var map__22051_22076 = ins;
var map__22051_22077__$1 = ((((!((map__22051_22076 == null)))?((((map__22051_22076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22051_22076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22051_22076):map__22051_22076);
var id_22078 = cljs.core.get.call(null,map__22051_22077__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22078);
} else {
if(cljs.core.truth_(pred__22046_22070.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__22047_22071))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__22079 = cljs.core.next.call(null,seq__22031__$1);
var G__22080 = null;
var G__22081 = (0);
var G__22082 = (0);
seq__22031 = G__22079;
chunk__22032 = G__22080;
count__22033 = G__22081;
i__22034 = G__22082;
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
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__22086 = cljs.core._EQ_;
var expr__22087 = cmd;
if(cljs.core.truth_(pred__22086.call(null,"watch-visible",expr__22087))){
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