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
view3d.client.DIR_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join('');
view3d.client.CMD_URL = [cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join('');
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"bank-right","bank-right",-1820955485),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(20),(0),"-",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(0),(0)]));
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
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
var vec__30117 = (((arc > (70)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * bank),(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bank,(1)], null));
var bank__$1 = cljs.core.nth.call(null,vec__30117,(0),null);
var temp = cljs.core.nth.call(null,vec__30117,(1),null);
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (bank,vec__30117,bank__$1,temp,arc){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(bank,vec__30117,bank__$1,temp,arc))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bank__$1);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__30122 = response;
var map__30122__$1 = ((((!((map__30122 == null)))?((((map__30122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30122):map__30122);
var status = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30122__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.onboard = (function view3d$client$onboard(call){
return ajax.core.GET.call(null,[cljs.core.str(view3d.client.CMD_URL),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"name","name",1843675177),callsign));
} else {
}

var old_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var new_crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle);
var veh = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle) < (20)))?cljs.core.assoc.call(null,vehicle,new cljs.core.Keyword(null,"altitude","altitude",463588637),(20)):vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),veh));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if((calc.dynamic.abs.call(null,(old_crs - new_crs)) > (10))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__30158 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__30159 = null;
var count__30160 = (0);
var i__30161 = (0);
while(true){
if((i__30161 < count__30160)){
var map__30162 = cljs.core._nth.call(null,chunk__30159,i__30161);
var map__30162__$1 = ((((!((map__30162 == null)))?((((map__30162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);
var dir = map__30162__$1;
var directive = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__30164_30192 = cljs.core._EQ_;
var expr__30165_30193 = directive;
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__30165_30193))){
var map__30167_30194 = dir;
var map__30167_30195__$1 = ((((!((map__30167_30194 == null)))?((((map__30167_30194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30167_30194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30167_30194):map__30167_30194);
var list_30196 = cljs.core.get.call(null,map__30167_30195__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_30196);
} else {
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__30165_30193))){
var map__30169_30197 = dir;
var map__30169_30198__$1 = ((((!((map__30169_30197 == null)))?((((map__30169_30197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30169_30197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30169_30197):map__30169_30197);
var callsign_30199 = cljs.core.get.call(null,map__30169_30198__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_30200 = cljs.core.get.call(null,map__30169_30198__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_30199,vehicle_30200);
} else {
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__30165_30193))){
var map__30171_30201 = dir;
var map__30171_30202__$1 = ((((!((map__30171_30201 == null)))?((((map__30171_30201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30171_30201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30171_30201):map__30171_30201);
var course_30203 = cljs.core.get.call(null,map__30171_30202__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed_30204 = cljs.core.get.call(null,map__30171_30202__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude_30205 = cljs.core.get.call(null,map__30171_30202__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
course_30203.call(null,course_30203);

speed_30204.call(null,speed_30204);

altitude_30205.call(null,altitude_30205);
} else {
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__30165_30193))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__30165_30193))){
var map__30173_30206 = dir;
var map__30173_30207__$1 = ((((!((map__30173_30206 == null)))?((((map__30173_30206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30173_30206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30173_30206):map__30173_30206);
var course_30208 = cljs.core.get.call(null,map__30173_30207__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_30208);
} else {
if(cljs.core.truth_(pred__30164_30192.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__30165_30193))){
var map__30175_30209 = dir;
var map__30175_30210__$1 = ((((!((map__30175_30209 == null)))?((((map__30175_30209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30175_30209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30175_30209):map__30175_30209);
var speed_30211 = cljs.core.get.call(null,map__30175_30210__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_30212 = cljs.core.get.call(null,map__30175_30210__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_30211,temp_30212);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__30213 = seq__30158;
var G__30214 = chunk__30159;
var G__30215 = count__30160;
var G__30216 = (i__30161 + (1));
seq__30158 = G__30213;
chunk__30159 = G__30214;
count__30160 = G__30215;
i__30161 = G__30216;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30158);
if(temp__4657__auto__){
var seq__30158__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30158__$1)){
var c__27343__auto__ = cljs.core.chunk_first.call(null,seq__30158__$1);
var G__30217 = cljs.core.chunk_rest.call(null,seq__30158__$1);
var G__30218 = c__27343__auto__;
var G__30219 = cljs.core.count.call(null,c__27343__auto__);
var G__30220 = (0);
seq__30158 = G__30217;
chunk__30159 = G__30218;
count__30160 = G__30219;
i__30161 = G__30220;
continue;
} else {
var map__30177 = cljs.core.first.call(null,seq__30158__$1);
var map__30177__$1 = ((((!((map__30177 == null)))?((((map__30177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30177):map__30177);
var dir = map__30177__$1;
var directive = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__30179_30221 = cljs.core._EQ_;
var expr__30180_30222 = directive;
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__30180_30222))){
var map__30182_30223 = dir;
var map__30182_30224__$1 = ((((!((map__30182_30223 == null)))?((((map__30182_30223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30182_30223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182_30223):map__30182_30223);
var list_30225 = cljs.core.get.call(null,map__30182_30224__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_30225);
} else {
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__30180_30222))){
var map__30184_30226 = dir;
var map__30184_30227__$1 = ((((!((map__30184_30226 == null)))?((((map__30184_30226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30184_30226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30184_30226):map__30184_30226);
var callsign_30228 = cljs.core.get.call(null,map__30184_30227__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_30229 = cljs.core.get.call(null,map__30184_30227__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_30228,vehicle_30229);
} else {
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"fly","fly",-1804296463),expr__30180_30222))){
var map__30186_30230 = dir;
var map__30186_30231__$1 = ((((!((map__30186_30230 == null)))?((((map__30186_30230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30186_30230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30186_30230):map__30186_30230);
var course_30232 = cljs.core.get.call(null,map__30186_30231__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var speed_30233 = cljs.core.get.call(null,map__30186_30231__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var altitude_30234 = cljs.core.get.call(null,map__30186_30231__$1,new cljs.core.Keyword(null,"altitude","altitude",463588637));
course_30232.call(null,course_30232);

speed_30233.call(null,speed_30233);

altitude_30234.call(null,altitude_30234);
} else {
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__30180_30222))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__30180_30222))){
var map__30188_30235 = dir;
var map__30188_30236__$1 = ((((!((map__30188_30235 == null)))?((((map__30188_30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30188_30235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188_30235):map__30188_30235);
var course_30237 = cljs.core.get.call(null,map__30188_30236__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_30237);
} else {
if(cljs.core.truth_(pred__30179_30221.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__30180_30222))){
var map__30190_30238 = dir;
var map__30190_30239__$1 = ((((!((map__30190_30238 == null)))?((((map__30190_30238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30190_30238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30190_30238):map__30190_30238);
var speed_30240 = cljs.core.get.call(null,map__30190_30239__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_30241 = cljs.core.get.call(null,map__30190_30239__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_30240,temp_30241);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__30242 = cljs.core.next.call(null,seq__30158__$1);
var G__30243 = null;
var G__30244 = (0);
var G__30245 = (0);
seq__30158 = G__30242;
chunk__30159 = G__30243;
count__30160 = G__30244;
i__30161 = G__30245;
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

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map