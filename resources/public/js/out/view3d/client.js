// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.BSE_URL = "http://localhost:4444/";
view3d.client.DIR_URL = "http://localhost:4444/directives/";
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.HUD_TIO = (831);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__25759 = response;
var map__25759__$1 = ((((!((map__25759 == null)))?((((map__25759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25759):map__25759);
var status = cljs.core.get.call(null,map__25759__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__25759__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__25787 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__25788 = null;
var count__25789 = (0);
var i__25790 = (0);
while(true){
if((i__25790 < count__25789)){
var map__25791 = cljs.core._nth.call(null,chunk__25788,i__25790);
var map__25791__$1 = ((((!((map__25791 == null)))?((((map__25791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var dir = map__25791__$1;
var directive = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__25793_25813 = cljs.core._EQ_;
var expr__25794_25814 = directive;
if(cljs.core.truth_(pred__25793_25813.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__25794_25814))){
var map__25796_25815 = dir;
var map__25796_25816__$1 = ((((!((map__25796_25815 == null)))?((((map__25796_25815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25796_25815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25796_25815):map__25796_25815);
var lat_25817 = cljs.core.get.call(null,map__25796_25816__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25818 = cljs.core.get.call(null,map__25796_25816__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_25819 = cljs.core.get.call(null,map__25796_25816__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_25820 = cljs.core.get.call(null,map__25796_25816__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_25821 = cljs.core.get.call(null,map__25796_25816__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_25817,lon_25818,alt_25820,crs_25819,period_25821);
} else {
if(cljs.core.truth_(pred__25793_25813.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__25794_25814))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__25793_25813.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25794_25814))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__25793_25813.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__25794_25814))){
var map__25798_25822 = dir;
var map__25798_25823__$1 = ((((!((map__25798_25822 == null)))?((((map__25798_25822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25798_25822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25798_25822):map__25798_25822);
var course_25824 = cljs.core.get.call(null,map__25798_25823__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_25824);
} else {
if(cljs.core.truth_(pred__25793_25813.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__25794_25814))){
var map__25800_25825 = dir;
var map__25800_25826__$1 = ((((!((map__25800_25825 == null)))?((((map__25800_25825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25800_25825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25800_25825):map__25800_25825);
var speed_25827 = cljs.core.get.call(null,map__25800_25826__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_25828 = cljs.core.get.call(null,map__25800_25826__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_25827,temp_25828);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__25829 = seq__25787;
var G__25830 = chunk__25788;
var G__25831 = count__25789;
var G__25832 = (i__25790 + (1));
seq__25787 = G__25829;
chunk__25788 = G__25830;
count__25789 = G__25831;
i__25790 = G__25832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25787);
if(temp__4657__auto__){
var seq__25787__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25787__$1)){
var c__19560__auto__ = cljs.core.chunk_first.call(null,seq__25787__$1);
var G__25833 = cljs.core.chunk_rest.call(null,seq__25787__$1);
var G__25834 = c__19560__auto__;
var G__25835 = cljs.core.count.call(null,c__19560__auto__);
var G__25836 = (0);
seq__25787 = G__25833;
chunk__25788 = G__25834;
count__25789 = G__25835;
i__25790 = G__25836;
continue;
} else {
var map__25802 = cljs.core.first.call(null,seq__25787__$1);
var map__25802__$1 = ((((!((map__25802 == null)))?((((map__25802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25802):map__25802);
var dir = map__25802__$1;
var directive = cljs.core.get.call(null,map__25802__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__25804_25837 = cljs.core._EQ_;
var expr__25805_25838 = directive;
if(cljs.core.truth_(pred__25804_25837.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__25805_25838))){
var map__25807_25839 = dir;
var map__25807_25840__$1 = ((((!((map__25807_25839 == null)))?((((map__25807_25839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25807_25839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25807_25839):map__25807_25839);
var lat_25841 = cljs.core.get.call(null,map__25807_25840__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_25842 = cljs.core.get.call(null,map__25807_25840__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_25843 = cljs.core.get.call(null,map__25807_25840__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_25844 = cljs.core.get.call(null,map__25807_25840__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_25845 = cljs.core.get.call(null,map__25807_25840__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_25841,lon_25842,alt_25844,crs_25843,period_25845);
} else {
if(cljs.core.truth_(pred__25804_25837.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__25805_25838))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__25804_25837.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__25805_25838))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__25804_25837.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__25805_25838))){
var map__25809_25846 = dir;
var map__25809_25847__$1 = ((((!((map__25809_25846 == null)))?((((map__25809_25846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25809_25846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25809_25846):map__25809_25846);
var course_25848 = cljs.core.get.call(null,map__25809_25847__$1,new cljs.core.Keyword(null,"course","course",1455432948));
carr.move.turn_and_bank.call(null,view3d.client.CARRIER,course_25848);
} else {
if(cljs.core.truth_(pred__25804_25837.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__25805_25838))){
var map__25811_25849 = dir;
var map__25811_25850__$1 = ((((!((map__25811_25849 == null)))?((((map__25811_25849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25811_25849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25811_25849):map__25811_25849);
var speed_25851 = cljs.core.get.call(null,map__25811_25850__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_25852 = cljs.core.get.call(null,map__25811_25850__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_25851,temp_25852);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__25853 = cljs.core.next.call(null,seq__25787__$1);
var G__25854 = null;
var G__25855 = (0);
var G__25856 = (0);
seq__25787 = G__25853;
chunk__25788 = G__25854;
count__25789 = G__25855;
i__25790 = G__25856;
continue;
}
} else {
return null;
}
}
break;
}
});
view3d.client.receive_directives = (function view3d$client$receive_directives(){
return ajax.core.GET.call(null,view3d.client.DIR_URL,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.camera_move = (function view3d$client$camera_move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
var vec__25860 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__25860,(0),null);
var lon = cljs.core.nth.call(null,vec__25860,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"terrain","terrain",704966005));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step","step",1288888124),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
view3d.client.onboard = (function view3d$client$onboard(call){
return null;
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = cljs.reader.read_string.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
var crs__$1 = cljs.reader.read_string.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return carr.move.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var spd__$1 = cljs.reader.read_string.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var alt__$1 = cljs.reader.read_string.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1000)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
});
window.onload = view3d.client.on_load.call(null);
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(10000),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null)));

//# sourceMappingURL=client.js.map