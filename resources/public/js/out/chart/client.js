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
chart.client.MOV_TIO = (200);
chart.client.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/redpln32.png")].join(''),"DESCEND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greenpln32.png")].join(''),"CLIMB",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/bluepln32.png")].join(''),"LEVEL",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/purplepln32.png")].join(''),"GROUND",[cljs.core.str("http://localhost:"),cljs.core.str(chart.client.PORT),cljs.core.str("/img/greypln32.png")].join('')], null);
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var temp__4657__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var vmp = temp__4657__auto__;
carr.move.move.call(null,vmp);

var mp_25879 = cljs.core.deref.call(null,vmp);
var mrk_25880 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_25879);
var vec__25876_25881 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_25879);
var lat_25882 = cljs.core.nth.call(null,vec__25876_25881,(0),null);
var lon_25883 = cljs.core.nth.call(null,vec__25876_25881,(1),null);
var pos_25884 = (new L.LatLng(lat_25882,lon_25883));
mrk_25880.setLatLng(pos_25884);

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
var seq__25889_25893 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)));
var chunk__25890_25894 = null;
var count__25891_25895 = (0);
var i__25892_25896 = (0);
while(true){
if((i__25892_25896 < count__25891_25895)){
var veh_25897 = cljs.core._nth.call(null,chunk__25890_25894,i__25892_25896);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25897)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25897)));

var G__25898 = seq__25889_25893;
var G__25899 = chunk__25890_25894;
var G__25900 = count__25891_25895;
var G__25901 = (i__25892_25896 + (1));
seq__25889_25893 = G__25898;
chunk__25890_25894 = G__25899;
count__25891_25895 = G__25900;
i__25892_25896 = G__25901;
continue;
} else {
var temp__4657__auto___25902 = cljs.core.seq.call(null,seq__25889_25893);
if(temp__4657__auto___25902){
var seq__25889_25903__$1 = temp__4657__auto___25902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25889_25903__$1)){
var c__20414__auto___25904 = cljs.core.chunk_first.call(null,seq__25889_25903__$1);
var G__25905 = cljs.core.chunk_rest.call(null,seq__25889_25903__$1);
var G__25906 = c__20414__auto___25904;
var G__25907 = cljs.core.count.call(null,c__20414__auto___25904);
var G__25908 = (0);
seq__25889_25893 = G__25905;
chunk__25890_25894 = G__25906;
count__25891_25895 = G__25907;
i__25892_25896 = G__25908;
continue;
} else {
var veh_25909 = cljs.core.first.call(null,seq__25889_25903__$1);
csasync.proc.close_chan.call(null,new cljs.core.Keyword(null,"mover","mover",935114769).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25909)));

cljs.core.deref.call(null,chart.client.CHART).removeLayer(new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,veh_25909)));

var G__25910 = cljs.core.next.call(null,seq__25889_25903__$1);
var G__25911 = null;
var G__25912 = (0);
var G__25913 = (0);
seq__25889_25893 = G__25910;
chunk__25890_25894 = G__25911;
count__25891_25895 = G__25912;
i__25892_25896 = G__25913;
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
chart.client.create_update_marker = (function chart$client$create_update_marker(mrk,mp){
if(cljs.core.truth_(mrk)){
cljs.core.deref.call(null,chart.client.CHART).removeLayer(mrk);
} else {
}

var vec__25918 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__25918,(0),null);
var lon = cljs.core.nth.call(null,vec__25918,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mrk__$1 = L.rotatedMarker(pos,opt);
mrk__$1.on("click",((function (vec__25918,lat,lon,pos,ico,opt,mrk__$1){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__25918,lat,lon,pos,ico,opt,mrk__$1){
return (function (p1__25914_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.second.call(null,p1__25914_SHARP_))),e.target);
});})(vec__25918,lat,lon,pos,ico,opt,mrk__$1))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__25918,lat,lon,pos,ico,opt,mrk__$1))
);

mrk__$1.addTo(cljs.core.deref.call(null,chart.client.CHART));

mrk__$1.options.angle = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp);

return mrk__$1;
});
chart.client.create_update_vehicle = (function chart$client$create_update_vehicle(id,mp){
var temp__4655__auto__ = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var veh = temp__4655__auto__;
var old = cljs.core.deref.call(null,veh);
var mp__$1 = cljs.core.merge.call(null,old,mp);
var mp__$2 = (((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(mp__$1))) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(mp__$1))))?cljs.core.assoc.call(null,mp__$1,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(old),mp__$1)):mp__$1);
return cljs.core.vreset_BANG_.call(null,veh,mp__$2);
} else {
var mp__$1 = cljs.core.assoc.call(null,mp,new cljs.core.Keyword(null,"marker","marker",865118313),chart.client.create_update_marker.call(null,null,mp),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(chart.client.MOV_TIO / (3600000)),new cljs.core.Keyword(null,"mover","mover",935114769),csasync.proc.repeater.call(null,((function (temp__4655__auto__){
return (function (){
return chart.client.move_vehicle.call(null,id);
});})(temp__4655__auto__))
,chart.client.MOV_TIO));
var carr__$1 = cljs.core.volatile_BANG_.call(null,mp__$1);
carr.move.set_turn_point.call(null,carr__$1);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,carr__$1));
}
});
chart.client.error_handler = (function chart$client$error_handler(response){
var map__25923 = response;
var map__25923__$1 = ((((!((map__25923 == null)))?((((map__25923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25923):map__25923);
var status = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25923__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__25947 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__25948 = null;
var count__25949 = (0);
var i__25950 = (0);
while(true){
if((i__25950 < count__25949)){
var map__25951 = cljs.core._nth.call(null,chunk__25948,i__25950);
var map__25951__$1 = ((((!((map__25951 == null)))?((((map__25951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25951):map__25951);
var ins = map__25951__$1;
var instruct = cljs.core.get.call(null,map__25951__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25953_25969 = cljs.core._EQ_;
var expr__25954_25970 = instruct;
if(cljs.core.truth_(pred__25953_25969.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25954_25970))){
var map__25956_25971 = ins;
var map__25956_25972__$1 = ((((!((map__25956_25971 == null)))?((((map__25956_25971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25956_25971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25956_25971):map__25956_25971);
var id_25973 = cljs.core.get.call(null,map__25956_25972__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25974 = cljs.core.get.call(null,map__25956_25972__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25973,vehicle_25974);
} else {
if(cljs.core.truth_(pred__25953_25969.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25954_25970))){
var map__25958_25975 = ins;
var map__25958_25976__$1 = ((((!((map__25958_25975 == null)))?((((map__25958_25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25958_25975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25958_25975):map__25958_25975);
var id_25977 = cljs.core.get.call(null,map__25958_25976__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25977);
} else {
if(cljs.core.truth_(pred__25953_25969.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25954_25970))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__25978 = seq__25947;
var G__25979 = chunk__25948;
var G__25980 = count__25949;
var G__25981 = (i__25950 + (1));
seq__25947 = G__25978;
chunk__25948 = G__25979;
count__25949 = G__25980;
i__25950 = G__25981;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25947);
if(temp__4657__auto__){
var seq__25947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25947__$1)){
var c__20414__auto__ = cljs.core.chunk_first.call(null,seq__25947__$1);
var G__25982 = cljs.core.chunk_rest.call(null,seq__25947__$1);
var G__25983 = c__20414__auto__;
var G__25984 = cljs.core.count.call(null,c__20414__auto__);
var G__25985 = (0);
seq__25947 = G__25982;
chunk__25948 = G__25983;
count__25949 = G__25984;
i__25950 = G__25985;
continue;
} else {
var map__25960 = cljs.core.first.call(null,seq__25947__$1);
var map__25960__$1 = ((((!((map__25960 == null)))?((((map__25960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25960):map__25960);
var ins = map__25960__$1;
var instruct = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
var pred__25962_25986 = cljs.core._EQ_;
var expr__25963_25987 = instruct;
if(cljs.core.truth_(pred__25962_25986.call(null,new cljs.core.Keyword(null,"create-update","create-update",1670324321),expr__25963_25987))){
var map__25965_25988 = ins;
var map__25965_25989__$1 = ((((!((map__25965_25988 == null)))?((((map__25965_25988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25965_25988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965_25988):map__25965_25988);
var id_25990 = cljs.core.get.call(null,map__25965_25989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_25991 = cljs.core.get.call(null,map__25965_25989__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_update_vehicle.call(null,id_25990,vehicle_25991);
} else {
if(cljs.core.truth_(pred__25962_25986.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__25963_25987))){
var map__25967_25992 = ins;
var map__25967_25993__$1 = ((((!((map__25967_25992 == null)))?((((map__25967_25992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25967_25992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25967_25992):map__25967_25992);
var id_25994 = cljs.core.get.call(null,map__25967_25993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_25994);
} else {
if(cljs.core.truth_(pred__25962_25986.call(null,new cljs.core.Keyword(null,"clear","clear",1877104959),expr__25963_25987))){
chart.client.clear_vehicles.call(null);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}
}

var G__25995 = cljs.core.next.call(null,seq__25947__$1);
var G__25996 = null;
var G__25997 = (0);
var G__25998 = (0);
seq__25947 = G__25995;
chunk__25948 = G__25996;
count__25949 = G__25997;
i__25950 = G__25998;
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
var bnd = cljs.core.deref.call(null,chart.client.CHART).getBounds();
return [cljs.core.str("watch-visible?n="),cljs.core.str(bnd.getNorth()),cljs.core.str("&s="),cljs.core.str(bnd.getSouth()),cljs.core.str("&w="),cljs.core.str(bnd.getWest()),cljs.core.str("&e="),cljs.core.str(bnd.getEast())].join('');
});
chart.client.command = (function chart$client$command(cmd){
return ajax.core.GET.call(null,[cljs.core.str(chart.client.CMD_URL),cljs.core.str((function (){var pred__26002 = cljs.core._EQ_;
var expr__26003 = cmd;
if(cljs.core.truth_(pred__26002.call(null,"watch-visible",expr__26003))){
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