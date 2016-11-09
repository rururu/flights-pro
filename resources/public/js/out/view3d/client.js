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
var vec__21801 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__21801,(0),null);
var temp = cljs.core.nth.call(null,vec__21801,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__21801,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__21801,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__21806 = response;
var map__21806__$1 = ((((!((map__21806 == null)))?((((map__21806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21806):map__21806);
var status = cljs.core.get.call(null,map__21806__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21806__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__21834 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__21835 = null;
var count__21836 = (0);
var i__21837 = (0);
while(true){
if((i__21837 < count__21836)){
var map__21838 = cljs.core._nth.call(null,chunk__21835,i__21837);
var map__21838__$1 = ((((!((map__21838 == null)))?((((map__21838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21838):map__21838);
var dir = map__21838__$1;
var directive = cljs.core.get.call(null,map__21838__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21840_21860 = cljs.core._EQ_;
var expr__21841_21861 = directive;
if(cljs.core.truth_(pred__21840_21860.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__21841_21861))){
var map__21843_21862 = dir;
var map__21843_21863__$1 = ((((!((map__21843_21862 == null)))?((((map__21843_21862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21843_21862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21843_21862):map__21843_21862);
var lat_21864 = cljs.core.get.call(null,map__21843_21863__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21865 = cljs.core.get.call(null,map__21843_21863__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_21866 = cljs.core.get.call(null,map__21843_21863__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_21867 = cljs.core.get.call(null,map__21843_21863__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_21868 = cljs.core.get.call(null,map__21843_21863__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_21864,lon_21865,alt_21867,crs_21866,period_21868);
} else {
if(cljs.core.truth_(pred__21840_21860.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21841_21861))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__21840_21860.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21841_21861))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21840_21860.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21841_21861))){
var map__21845_21869 = dir;
var map__21845_21870__$1 = ((((!((map__21845_21869 == null)))?((((map__21845_21869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21845_21869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21845_21869):map__21845_21869);
var course_21871 = cljs.core.get.call(null,map__21845_21870__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21871);
} else {
if(cljs.core.truth_(pred__21840_21860.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21841_21861))){
var map__21847_21872 = dir;
var map__21847_21873__$1 = ((((!((map__21847_21872 == null)))?((((map__21847_21872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21847_21872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21847_21872):map__21847_21872);
var speed_21874 = cljs.core.get.call(null,map__21847_21873__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21875 = cljs.core.get.call(null,map__21847_21873__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21874,temp_21875);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__21876 = seq__21834;
var G__21877 = chunk__21835;
var G__21878 = count__21836;
var G__21879 = (i__21837 + (1));
seq__21834 = G__21876;
chunk__21835 = G__21877;
count__21836 = G__21878;
i__21837 = G__21879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21834);
if(temp__4657__auto__){
var seq__21834__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21834__$1)){
var c__19498__auto__ = cljs.core.chunk_first.call(null,seq__21834__$1);
var G__21880 = cljs.core.chunk_rest.call(null,seq__21834__$1);
var G__21881 = c__19498__auto__;
var G__21882 = cljs.core.count.call(null,c__19498__auto__);
var G__21883 = (0);
seq__21834 = G__21880;
chunk__21835 = G__21881;
count__21836 = G__21882;
i__21837 = G__21883;
continue;
} else {
var map__21849 = cljs.core.first.call(null,seq__21834__$1);
var map__21849__$1 = ((((!((map__21849 == null)))?((((map__21849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21849):map__21849);
var dir = map__21849__$1;
var directive = cljs.core.get.call(null,map__21849__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__21851_21884 = cljs.core._EQ_;
var expr__21852_21885 = directive;
if(cljs.core.truth_(pred__21851_21884.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__21852_21885))){
var map__21854_21886 = dir;
var map__21854_21887__$1 = ((((!((map__21854_21886 == null)))?((((map__21854_21886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21854_21886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21854_21886):map__21854_21886);
var lat_21888 = cljs.core.get.call(null,map__21854_21887__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_21889 = cljs.core.get.call(null,map__21854_21887__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_21890 = cljs.core.get.call(null,map__21854_21887__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var alt_21891 = cljs.core.get.call(null,map__21854_21887__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var period_21892 = cljs.core.get.call(null,map__21854_21887__$1,new cljs.core.Keyword(null,"period","period",-352129191));
czm.core.fly_to.call(null,lat_21888,lon_21889,alt_21891,crs_21890,period_21892);
} else {
if(cljs.core.truth_(pred__21851_21884.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__21852_21885))){
cljs.core.vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core.deref.call(null,view3d.client.CARRIER),dir));
} else {
if(cljs.core.truth_(pred__21851_21884.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__21852_21885))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__21851_21884.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__21852_21885))){
var map__21856_21893 = dir;
var map__21856_21894__$1 = ((((!((map__21856_21893 == null)))?((((map__21856_21893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21856_21893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21856_21893):map__21856_21893);
var course_21895 = cljs.core.get.call(null,map__21856_21894__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_21895);
} else {
if(cljs.core.truth_(pred__21851_21884.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__21852_21885))){
var map__21858_21896 = dir;
var map__21858_21897__$1 = ((((!((map__21858_21896 == null)))?((((map__21858_21896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21858_21896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21858_21896):map__21858_21896);
var speed_21898 = cljs.core.get.call(null,map__21858_21897__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_21899 = cljs.core.get.call(null,map__21858_21897__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_21898,temp_21899);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}

var G__21900 = cljs.core.next.call(null,seq__21834__$1);
var G__21901 = null;
var G__21902 = (0);
var G__21903 = (0);
seq__21834 = G__21900;
chunk__21835 = G__21901;
count__21836 = G__21902;
i__21837 = G__21903;
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
var vec__21907 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__21907,(0),null);
var lon = cljs.core.nth.call(null,vec__21907,(1),null);
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