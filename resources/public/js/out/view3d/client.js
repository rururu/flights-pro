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
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),"-",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(8),(64),(2)], null),(0),(0)]));
view3d.client.DIR_TIO = (1000);
view3d.client.CAR_TIO = (1000);
view3d.client.HUD_TIO = (831);
view3d.client.CAM_TIO = (4000);
view3d.client.num_val = (function view3d$client$num_val(x){
if(typeof x === 'number'){
return x;
} else {
return cljs.reader.read_string.call(null,x);
}
});
view3d.client.read_transit = (function view3d$client$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
view3d.client.turn_and_bank = (function view3d$client$turn_and_bank(carr__$1,course){
var vec__21991 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__21991,(0),null);
var sa = cljs.core.nth.call(null,vec__21991,(1),null);
var ba = cljs.core.nth.call(null,vec__21991,(2),null);
var fa = cljs.core.nth.call(null,vec__21991,(3),null);
var bps = vec__21991;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((alt < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var temp = (((calc.dynamic.abs.call(null,bnk) > rb))?(2):(1));
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (temp,vec__21991,rb,sa,ba,fa,bps,bnk,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(temp,vec__21991,rb,sa,ba,fa,bps,bnk,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__21996 = response;
var map__21996__$1 = ((((!((map__21996 == null)))?((((map__21996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21996):map__21996);
var status = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__21996__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),vehicle));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if((calc.dynamic.abs.call(null,(old_crs - new_crs)) > (10))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,new_crs);
} else {
return null;
}
});
view3d.client.view = (function view3d$client$view(dir){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),dir);
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if((((-180) <= deg__$1)) && ((deg__$1 <= (180)))){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
var crs__$1 = view3d.client.num_val.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
var spd__$1 = view3d.client.num_val.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
});
view3d.client.altitude = (function view3d$client$altitude(alt){
var alt__$1 = view3d.client.num_val.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1500)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
});
view3d.client.latitude = (function view3d$client$latitude(lat){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__22001 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__22001,(0),null);
var lon = cljs.core.nth.call(null,vec__22001,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
});
view3d.client.longitude = (function view3d$client$longitude(lon){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__22007 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__22007,(0),null);
var _ = cljs.core.nth.call(null,vec__22007,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args22010 = [];
var len__20425__auto___22016 = arguments.length;
var i__20426__auto___22017 = (0);
while(true){
if((i__20426__auto___22017 < len__20425__auto___22016)){
args22010.push((arguments[i__20426__auto___22017]));

var G__22018 = (i__20426__auto___22017 + (1));
i__20426__auto___22017 = G__22018;
continue;
} else {
}
break;
}

var G__22012 = args22010.length;
switch (G__22012) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22010.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(view3d.client.CAM_TIO / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car = cljs.core.deref.call(null,carr__$1);
var vec__22013 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__22013,(0),null);
var lon = cljs.core.nth.call(null,vec__22013,(1),null);
var crs = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car);
var alt = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car) / 3.28084) | (0));
var alt__$1 = (((alt < (20)))?(20):alt);
return czm.core.fly_to.call(null,lat,lon,alt__$1,crs,period);
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__22054 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__22055 = null;
var count__22056 = (0);
var i__22057 = (0);
while(true){
if((i__22057 < count__22056)){
var map__22058 = cljs.core._nth.call(null,chunk__22055,i__22057);
var map__22058__$1 = ((((!((map__22058 == null)))?((((map__22058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22058):map__22058);
var dir = map__22058__$1;
var directive = cljs.core.get.call(null,map__22058__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__22060_22088 = cljs.core._EQ_;
var expr__22061_22089 = directive;
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__22061_22089))){
var map__22063_22090 = dir;
var map__22063_22091__$1 = ((((!((map__22063_22090 == null)))?((((map__22063_22090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22063_22090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22063_22090):map__22063_22090);
var list_22092 = cljs.core.get.call(null,map__22063_22091__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_22092);
} else {
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__22061_22089))){
var map__22065_22093 = dir;
var map__22065_22094__$1 = ((((!((map__22065_22093 == null)))?((((map__22065_22093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22065_22093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22065_22093):map__22065_22093);
var callsign_22095 = cljs.core.get.call(null,map__22065_22094__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_22096 = cljs.core.get.call(null,map__22065_22094__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_22095,vehicle_22096);
} else {
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__22061_22089))){
var map__22067_22097 = dir;
var map__22067_22098__$1 = ((((!((map__22067_22097 == null)))?((((map__22067_22097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22067_22097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22067_22097):map__22067_22097);
var callsign_22099 = cljs.core.get.call(null,map__22067_22098__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_22100 = cljs.core.get.call(null,map__22067_22098__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_22101 = cljs.core.get.call(null,map__22067_22098__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_22102 = cljs.core.get.call(null,map__22067_22098__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_22099,vehicle_22100);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_22102);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_22100) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_22101,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_22100),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__22061_22089))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__22061_22089))){
var map__22069_22103 = dir;
var map__22069_22104__$1 = ((((!((map__22069_22103 == null)))?((((map__22069_22103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22069_22103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22069_22103):map__22069_22103);
var course_22105 = cljs.core.get.call(null,map__22069_22104__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_22105);
} else {
if(cljs.core.truth_(pred__22060_22088.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__22061_22089))){
var map__22071_22106 = dir;
var map__22071_22107__$1 = ((((!((map__22071_22106 == null)))?((((map__22071_22106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22071_22106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22071_22106):map__22071_22106);
var speed_22108 = cljs.core.get.call(null,map__22071_22107__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_22109 = cljs.core.get.call(null,map__22071_22107__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_22108,temp_22109);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__22110 = seq__22054;
var G__22111 = chunk__22055;
var G__22112 = count__22056;
var G__22113 = (i__22057 + (1));
seq__22054 = G__22110;
chunk__22055 = G__22111;
count__22056 = G__22112;
i__22057 = G__22113;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22054);
if(temp__4657__auto__){
var seq__22054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22054__$1)){
var c__20131__auto__ = cljs.core.chunk_first.call(null,seq__22054__$1);
var G__22114 = cljs.core.chunk_rest.call(null,seq__22054__$1);
var G__22115 = c__20131__auto__;
var G__22116 = cljs.core.count.call(null,c__20131__auto__);
var G__22117 = (0);
seq__22054 = G__22114;
chunk__22055 = G__22115;
count__22056 = G__22116;
i__22057 = G__22117;
continue;
} else {
var map__22073 = cljs.core.first.call(null,seq__22054__$1);
var map__22073__$1 = ((((!((map__22073 == null)))?((((map__22073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22073):map__22073);
var dir = map__22073__$1;
var directive = cljs.core.get.call(null,map__22073__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__22075_22118 = cljs.core._EQ_;
var expr__22076_22119 = directive;
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__22076_22119))){
var map__22078_22120 = dir;
var map__22078_22121__$1 = ((((!((map__22078_22120 == null)))?((((map__22078_22120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22078_22120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22078_22120):map__22078_22120);
var list_22122 = cljs.core.get.call(null,map__22078_22121__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_22122);
} else {
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__22076_22119))){
var map__22080_22123 = dir;
var map__22080_22124__$1 = ((((!((map__22080_22123 == null)))?((((map__22080_22123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22080_22123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22080_22123):map__22080_22123);
var callsign_22125 = cljs.core.get.call(null,map__22080_22124__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_22126 = cljs.core.get.call(null,map__22080_22124__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
view3d.client.carrier.call(null,callsign_22125,vehicle_22126);
} else {
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__22076_22119))){
var map__22082_22127 = dir;
var map__22082_22128__$1 = ((((!((map__22082_22127 == null)))?((((map__22082_22127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22082_22127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22082_22127):map__22082_22127);
var callsign_22129 = cljs.core.get.call(null,map__22082_22128__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_22130 = cljs.core.get.call(null,map__22082_22128__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_22131 = cljs.core.get.call(null,map__22082_22128__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_22132 = cljs.core.get.call(null,map__22082_22128__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_22129,vehicle_22130);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_22132);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_22130) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_22131,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_22130),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__22076_22119))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__22076_22119))){
var map__22084_22133 = dir;
var map__22084_22134__$1 = ((((!((map__22084_22133 == null)))?((((map__22084_22133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22084_22133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22084_22133):map__22084_22133);
var course_22135 = cljs.core.get.call(null,map__22084_22134__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_22135);
} else {
if(cljs.core.truth_(pred__22075_22118.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__22076_22119))){
var map__22086_22136 = dir;
var map__22086_22137__$1 = ((((!((map__22086_22136 == null)))?((((map__22086_22136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22086_22136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22086_22136):map__22086_22136);
var speed_22138 = cljs.core.get.call(null,map__22086_22137__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_22139 = cljs.core.get.call(null,map__22086_22137__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_22138,temp_22139);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}

var G__22140 = cljs.core.next.call(null,seq__22054__$1);
var G__22141 = null;
var G__22142 = (0);
var G__22143 = (0);
seq__22054 = G__22140;
chunk__22055 = G__22141;
count__22056 = G__22142;
i__22057 = G__22143;
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
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,view3d.client.BSE_URL,new cljs.core.Keyword(null,"no-terrain","no-terrain",-2110718690));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),(view3d.client.CAR_TIO / (3600000))));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,view3d.client.CAR_TIO);

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,view3d.client.HUD_TIO);

csasync.proc.repeater.call(null,view3d.client.camera_move,view3d.client.CARRIER,view3d.client.CAM_TIO);

csasync.proc.repeater.call(null,view3d.client.receive_directives,view3d.client.DIR_TIO);

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);
view3d.client.carrier.call(null,"R1",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"course","course",1455432948),(270),new cljs.core.Keyword(null,"speed","speed",1257663751),(315),new cljs.core.Keyword(null,"altitude","altitude",463588637),(3000)], null));

//# sourceMappingURL=client.js.map