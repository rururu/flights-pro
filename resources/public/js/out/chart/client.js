// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('carr.move');
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
chart.client.by_id = (function chart$client$by_id(id){
return document.getElementById(id);
});
chart.client.set_html_BANG_ = (function chart$client$set_html_BANG_(id,msg){
return chart.client.by_id.call(null,id).innerHTML = msg;
});
chart.client.format = (function chart$client$format(var_args){
var args__19549__auto__ = [];
var len__19542__auto___22127 = arguments.length;
var i__19543__auto___22128 = (0);
while(true){
if((i__19543__auto___22128 < len__19542__auto___22127)){
args__19549__auto__.push((arguments[i__19543__auto___22128]));

var G__22129 = (i__19543__auto___22128 + (1));
i__19543__auto___22128 = G__22129;
continue;
} else {
}
break;
}

var argseq__19550__auto__ = ((((1) < args__19549__auto__.length))?(new cljs.core.IndexedSeq(args__19549__auto__.slice((1)),(0),null)):null);
return chart.client.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19550__auto__);
});

chart.client.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.client.format.cljs$lang$maxFixedArity = (1);

chart.client.format.cljs$lang$applyTo = (function (seq22125){
var G__22126 = cljs.core.first.call(null,seq22125);
var seq22125__$1 = cljs.core.next.call(null,seq22125);
return chart.client.format.cljs$core$IFn$_invoke$arity$variadic(G__22126,seq22125__$1);
});

chart.client.mouse_move = (function chart$client$mouse_move(lat,lng){
return chart.client.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(chart.client.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(chart.client.format.call(null,"%.4f",lng))].join(''));
});
chart.client.read_transit = (function chart$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
chart.client.move_vehicle = (function chart$client$move_vehicle(id){
var vmp = cljs.core.deref.call(null,chart.client.VEHICLES).call(null,id);
carr.move.move.call(null,vmp);

var mp_22136 = cljs.core.deref.call(null,vmp);
var mrk_22137 = new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(mp_22136);
var vec__22133_22138 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp_22136);
var lat_22139 = cljs.core.nth.call(null,vec__22133_22138,(0),null);
var lon_22140 = cljs.core.nth.call(null,vec__22133_22138,(1),null);
var pos_22141 = (new L.LatLng(lat_22139,lon_22140));
mrk_22137.setLatLng(pos_22141);

return cljs.core._vreset_BANG_.call(null,chart.client.VEHICLES,cljs.core.assoc.call(null,cljs.core._deref.call(null,chart.client.VEHICLES),id,vmp));
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
return id;
});
chart.client.create_marker = (function chart$client$create_marker(mp){
var vec__22146 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(mp);
var lat = cljs.core.nth.call(null,vec__22146,(0),null);
var lon = cljs.core.nth.call(null,vec__22146,(1),null);
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": chart.client.URL_ICO.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(mp)), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (vec__22146,lat,lon,pos,ico,opt,mk){
return (function (e){
return chart.client.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (vec__22146,lat,lon,pos,ico,opt,mk){
return (function (p1__22142_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22142_SHARP_)),e.target);
});})(vec__22146,lat,lon,pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,chart.client.VEHICLES)))));
});})(vec__22146,lat,lon,pos,ico,opt,mk))
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
var map__22151 = response;
var map__22151__$1 = ((((!((map__22151 == null)))?((((map__22151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22151):map__22151);
var status = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22151__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
chart.client.instructions_handler = (function chart$client$instructions_handler(response){
var seq__22175 = cljs.core.seq.call(null,chart.client.read_transit.call(null,response));
var chunk__22176 = null;
var count__22177 = (0);
var i__22178 = (0);
while(true){
if((i__22178 < count__22177)){
var map__22179 = cljs.core._nth.call(null,chunk__22176,i__22178);
var map__22179__$1 = ((((!((map__22179 == null)))?((((map__22179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22179):map__22179);
var ins = map__22179__$1;
var instruct = cljs.core.get.call(null,map__22179__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INSTRUCT","INSTRUCT",1681061282),ins], null));

var pred__22181_22197 = cljs.core._EQ_;
var expr__22182_22198 = instruct;
if(cljs.core.truth_(pred__22181_22197.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__22182_22198))){
var map__22184_22199 = ins;
var map__22184_22200__$1 = ((((!((map__22184_22199 == null)))?((((map__22184_22199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22184_22199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22184_22199):map__22184_22199);
var id_22201 = cljs.core.get.call(null,map__22184_22200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22202 = cljs.core.get.call(null,map__22184_22200__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_22201,vehicle_22202);
} else {
if(cljs.core.truth_(pred__22181_22197.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22182_22198))){
var map__22186_22203 = ins;
var map__22186_22204__$1 = ((((!((map__22186_22203 == null)))?((((map__22186_22203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22186_22203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22186_22203):map__22186_22203);
var id_22205 = cljs.core.get.call(null,map__22186_22204__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22205);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__22206 = seq__22175;
var G__22207 = chunk__22176;
var G__22208 = count__22177;
var G__22209 = (i__22178 + (1));
seq__22175 = G__22206;
chunk__22176 = G__22207;
count__22177 = G__22208;
i__22178 = G__22209;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22175);
if(temp__4657__auto__){
var seq__22175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22175__$1)){
var c__19248__auto__ = cljs.core.chunk_first.call(null,seq__22175__$1);
var G__22210 = cljs.core.chunk_rest.call(null,seq__22175__$1);
var G__22211 = c__19248__auto__;
var G__22212 = cljs.core.count.call(null,c__19248__auto__);
var G__22213 = (0);
seq__22175 = G__22210;
chunk__22176 = G__22211;
count__22177 = G__22212;
i__22178 = G__22213;
continue;
} else {
var map__22188 = cljs.core.first.call(null,seq__22175__$1);
var map__22188__$1 = ((((!((map__22188 == null)))?((((map__22188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22188):map__22188);
var ins = map__22188__$1;
var instruct = cljs.core.get.call(null,map__22188__$1,new cljs.core.Keyword(null,"instruct","instruct",-1491431711));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"INSTRUCT","INSTRUCT",1681061282),ins], null));

var pred__22190_22214 = cljs.core._EQ_;
var expr__22191_22215 = instruct;
if(cljs.core.truth_(pred__22190_22214.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),expr__22191_22215))){
var map__22193_22216 = ins;
var map__22193_22217__$1 = ((((!((map__22193_22216 == null)))?((((map__22193_22216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22193_22216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22193_22216):map__22193_22216);
var id_22218 = cljs.core.get.call(null,map__22193_22217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var vehicle_22219 = cljs.core.get.call(null,map__22193_22217__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
chart.client.create_vehicle.call(null,id_22218,vehicle_22219);
} else {
if(cljs.core.truth_(pred__22190_22214.call(null,new cljs.core.Keyword(null,"delete","delete",-1768633620),expr__22191_22215))){
var map__22195_22220 = ins;
var map__22195_22221__$1 = ((((!((map__22195_22220 == null)))?((((map__22195_22220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22195_22220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22195_22220):map__22195_22220);
var id_22222 = cljs.core.get.call(null,map__22195_22221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
chart.client.delete_vehicle.call(null,id_22222);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown instruction: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruct,ins], null))].join(''));
}
}

var G__22223 = cljs.core.next.call(null,seq__22175__$1);
var G__22224 = null;
var G__22225 = (0);
var G__22226 = (0);
seq__22175 = G__22223;
chunk__22176 = G__22224;
count__22177 = G__22225;
i__22178 = G__22226;
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
return chart.client.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
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