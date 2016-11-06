// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('czm.core');
goog.require('ajax.core');
goog.require('carr.move');
goog.require('view3d.controls');
goog.require('cljs.reader');
goog.require('calc.dynamic');
goog.require('csasync.proc');
goog.require('nightlight.repl_server');
view3d.client.PORT = (4444);
view3d.client.BSE_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join('');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.DIR_URL = "http://localhost:4444/directives/";
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.CAM_TIO = (4000);
view3d.client.HUD_TIO = (831);
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var arc = calc.dynamic.abs.call(null,(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)) - course));
if((arc < (10))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var bank = (cljs.core.truth_(calc.dynamic.turn_right_QMARK_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course))?new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)):(- new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1))));
var vec__22014 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__22014,(0),null);
var temp = cljs.core.nth.call(null,vec__22014,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__22014,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__22014,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__22019 = response;
var map__22019__$1 = ((((!((map__22019 == null)))?((((map__22019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22019):map__22019);
var status = cljs.core.get.call(null,map__22019__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22019__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__22047 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__22048 = null;
var count__22049 = (0);
var i__22050 = (0);
while(true){
if((i__22050 < count__22049)){
var map__22051 = cljs.core._nth.call(null,chunk__22048,i__22050);
var map__22051__$1 = ((((!((map__22051 == null)))?((((map__22051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22051):map__22051);
var dir = map__22051__$1;
var directive = cljs.core.get.call(null,map__22051__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__22053_22073 = cljs.core._EQ_;
var expr__22054_22074 = directive;
if(cljs.core.truth_(pred__22053_22073.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__22054_22074))){
var map__22056_22075 = dir;
var map__22056_22076__$1 = ((((!((map__22056_22075 == null)))?((((map__22056_22075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22056_22075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22056_22075):map__22056_22075);
var lat_22077 = cljs.core.get.call(null,map__22056_22076__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22078 = cljs.core.get.call(null,map__22056_22076__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_22079 = cljs.core.get.call(null,map__22056_22076__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_22080 = cljs.core.get.call(null,map__22056_22076__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_22081 = cljs.core.get.call(null,map__22056_22076__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_22077,lon_22078,alt_22080,crs_22079,period_22081);
} else {
if(cljs.core.truth_(pred__22053_22073.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__22054_22074))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__22053_22073.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__22054_22074))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__22053_22073.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__22054_22074))){
var map__22058_22082 = dir;
var map__22058_22083__$1 = ((((!((map__22058_22082 == null)))?((((map__22058_22082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22058_22082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22058_22082):map__22058_22082);
var course_22084 = cljs.core.get.call(null,map__22058_22083__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_22084);
} else {
if(cljs.core.truth_(pred__22053_22073.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__22054_22074))){
var map__22060_22085 = dir;
var map__22060_22086__$1 = ((((!((map__22060_22085 == null)))?((((map__22060_22085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22060_22085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22060_22085):map__22060_22085);
var speed_22087 = cljs.core.get.call(null,map__22060_22086__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_22088 = cljs.core.get.call(null,map__22060_22086__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_22087,temp_22088);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__22089 = seq__22047;
var G__22090 = chunk__22048;
var G__22091 = count__22049;
var G__22092 = (i__22050 + (1));
seq__22047 = G__22089;
chunk__22048 = G__22090;
count__22049 = G__22091;
i__22050 = G__22092;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22047);
if(temp__4657__auto__){
var seq__22047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22047__$1)){
var c__19248__auto__ = cljs.core.chunk_first.call(null,seq__22047__$1);
var G__22093 = cljs.core.chunk_rest.call(null,seq__22047__$1);
var G__22094 = c__19248__auto__;
var G__22095 = cljs.core.count.call(null,c__19248__auto__);
var G__22096 = (0);
seq__22047 = G__22093;
chunk__22048 = G__22094;
count__22049 = G__22095;
i__22050 = G__22096;
continue;
} else {
var map__22062 = cljs.core.first.call(null,seq__22047__$1);
var map__22062__$1 = ((((!((map__22062 == null)))?((((map__22062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22062):map__22062);
var dir = map__22062__$1;
var directive = cljs.core.get.call(null,map__22062__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__22064_22097 = cljs.core._EQ_;
var expr__22065_22098 = directive;
if(cljs.core.truth_(pred__22064_22097.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__22065_22098))){
var map__22067_22099 = dir;
var map__22067_22100__$1 = ((((!((map__22067_22099 == null)))?((((map__22067_22099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22067_22099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22067_22099):map__22067_22099);
var lat_22101 = cljs.core.get.call(null,map__22067_22100__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_22102 = cljs.core.get.call(null,map__22067_22100__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_22103 = cljs.core.get.call(null,map__22067_22100__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_22104 = cljs.core.get.call(null,map__22067_22100__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_22105 = cljs.core.get.call(null,map__22067_22100__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_22101,lon_22102,alt_22104,crs_22103,period_22105);
} else {
if(cljs.core.truth_(pred__22064_22097.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__22065_22098))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__22064_22097.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__22065_22098))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__22064_22097.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__22065_22098))){
var map__22069_22106 = dir;
var map__22069_22107__$1 = ((((!((map__22069_22106 == null)))?((((map__22069_22106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22069_22106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22069_22106):map__22069_22106);
var course_22108 = cljs.core.get.call(null,map__22069_22107__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_22108);
} else {
if(cljs.core.truth_(pred__22064_22097.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__22065_22098))){
var map__22071_22109 = dir;
var map__22071_22110__$1 = ((((!((map__22071_22109 == null)))?((((map__22071_22109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22071_22109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22071_22109):map__22071_22109);
var speed_22111 = cljs.core.get.call(null,map__22071_22110__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_22112 = cljs.core.get.call(null,map__22071_22110__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_22111,temp_22112);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__22113 = cljs.core.next.call(null,seq__22047__$1);
var G__22114 = null;
var G__22115 = (0);
var G__22116 = (0);
seq__22047 = G__22113;
chunk__22048 = G__22114;
count__22049 = G__22115;
i__22050 = G__22116;
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
var vec__22120 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__22120,(0),null);
var lon = cljs.core.nth.call(null,vec__22120,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car);
return czm.core.fly_to.call(null,lat,lon,alt,crs,(view3d.client.CAM_TIO / (1000)));
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
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
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
window.onload = view3d.client.on_load.call(null);
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(10000),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null)));

//# sourceMappingURL=client.js.map