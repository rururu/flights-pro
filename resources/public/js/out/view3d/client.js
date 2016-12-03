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
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str("http://localhost:"),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),"?",(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(7),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(6),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(8),(64),(2)], null),(0)]));
view3d.client.CAM_PROC = cljs.core.volatile_BANG_.call(null,"STOP");
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
var vec__29316 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__29316,(0),null);
var sa = cljs.core.nth.call(null,vec__29316,(1),null);
var ba = cljs.core.nth.call(null,vec__29316,(2),null);
var fa = cljs.core.nth.call(null,vec__29316,(3),null);
var bps = vec__29316;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((alt < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var temp = (((calc.dynamic.abs.call(null,bnk) > rb))?(2):(1));
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (temp,vec__29316,rb,sa,ba,fa,bps,bnk,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(temp,vec__29316,rb,sa,ba,fa,bps,bnk,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__29321 = response;
var map__29321__$1 = ((((!((map__29321 == null)))?((((map__29321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29321):map__29321);
var status = cljs.core.get.call(null,map__29321__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__29321__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
view3d.client.onboard = (function view3d$client$onboard(call){
if(cljs.core._EQ_.call(null,call,"manual")){
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);
} else {
}

return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("onboard?callsign="),cljs.core.str(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.carrier = (function view3d$client$carrier(callsign,vehicle){
if(cljs.core.not_EQ_.call(null,callsign,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)))){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),callsign));
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var crs__$1 = view3d.client.num_val.call(null,crs);
if((((0) <= crs__$1)) && ((crs__$1 <= (360)))){
return view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,crs__$1);
} else {
return null;
}
} else {
return null;
}
});
view3d.client.speed = (function view3d$client$speed(spd){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var spd__$1 = view3d.client.num_val.call(null,spd);
var tmp = (((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (150)))?(2):(1));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,tmp);
} else {
return null;
}
});
view3d.client.altitude = (function view3d$client$altitude(alt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var alt__$1 = view3d.client.num_val.call(null,alt);
var tmp = (((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)) < (1500)))?(1):(3));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt__$1,tmp);
} else {
return null;
}
});
view3d.client.latitude = (function view3d$client$latitude(lat){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__29326 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__29326,(0),null);
var lon = cljs.core.nth.call(null,vec__29326,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__29332 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__29332,(0),null);
var _ = cljs.core.nth.call(null,vec__29332,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args29335 = [];
var len__9613__auto___29341 = arguments.length;
var i__9614__auto___29342 = (0);
while(true){
if((i__9614__auto___29342 < len__9613__auto___29341)){
args29335.push((arguments[i__9614__auto___29342]));

var G__29343 = (i__9614__auto___29342 + (1));
i__9614__auto___29342 = G__29343;
continue;
} else {
}
break;
}

var G__29337 = args29335.length;
switch (G__29337) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29335.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car_29345 = cljs.core.deref.call(null,carr__$1);
var vec__29338_29346 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car_29345);
var lat_29347 = cljs.core.nth.call(null,vec__29338_29346,(0),null);
var lon_29348 = cljs.core.nth.call(null,vec__29338_29346,(1),null);
var crs_29349 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car_29345);
var alt_29350 = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car_29345) / 3.28084) | (0));
var alt_29351__$1 = (((alt_29350 < (20)))?(20):alt_29350);
czm.core.fly_to.call(null,lat_29347,lon_29348,alt_29351__$1,crs_29349,period);

return true;
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__29386 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__29387 = null;
var count__29388 = (0);
var i__29389 = (0);
while(true){
if((i__29389 < count__29388)){
var map__29390 = cljs.core._nth.call(null,chunk__29387,i__29389);
var map__29390__$1 = ((((!((map__29390 == null)))?((((map__29390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);
var dir = map__29390__$1;
var directive = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__29392_29420 = cljs.core._EQ_;
var expr__29393_29421 = directive;
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__29393_29421))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__29386,chunk__29387,count__29388,i__29389,pred__29392_29420,expr__29393_29421,map__29390,map__29390__$1,dir,directive){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__29386,chunk__29387,count__29388,i__29389,pred__29392_29420,expr__29393_29421,map__29390,map__29390__$1,dir,directive))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__29393_29421))){
var map__29395_29422 = dir;
var map__29395_29423__$1 = ((((!((map__29395_29422 == null)))?((((map__29395_29422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29395_29422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395_29422):map__29395_29422);
var list_29424 = cljs.core.get.call(null,map__29395_29423__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_29424);
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__29393_29421))){
var map__29397_29425 = dir;
var map__29397_29426__$1 = ((((!((map__29397_29425 == null)))?((((map__29397_29425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29397_29425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29397_29425):map__29397_29425);
var callsign_29427 = cljs.core.get.call(null,map__29397_29426__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_29428 = cljs.core.get.call(null,map__29397_29426__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_29427,vehicle_29428);
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__29393_29421))){
var map__29399_29429 = dir;
var map__29399_29430__$1 = ((((!((map__29399_29429 == null)))?((((map__29399_29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29399_29429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29399_29429):map__29399_29429);
var callsign_29431 = cljs.core.get.call(null,map__29399_29430__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_29432 = cljs.core.get.call(null,map__29399_29430__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_29433 = cljs.core.get.call(null,map__29399_29430__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_29434 = cljs.core.get.call(null,map__29399_29430__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_29431,vehicle_29432);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_29434);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_29432) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_29433,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_29432),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__29393_29421))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__29393_29421))){
var map__29401_29435 = dir;
var map__29401_29436__$1 = ((((!((map__29401_29435 == null)))?((((map__29401_29435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29401_29435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29401_29435):map__29401_29435);
var course_29437 = cljs.core.get.call(null,map__29401_29436__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_29437);
} else {
if(cljs.core.truth_(pred__29392_29420.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__29393_29421))){
var map__29403_29438 = dir;
var map__29403_29439__$1 = ((((!((map__29403_29438 == null)))?((((map__29403_29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29403_29438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29403_29438):map__29403_29438);
var speed_29440 = cljs.core.get.call(null,map__29403_29439__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_29441 = cljs.core.get.call(null,map__29403_29439__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_29440,temp_29441);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__29442 = seq__29386;
var G__29443 = chunk__29387;
var G__29444 = count__29388;
var G__29445 = (i__29389 + (1));
seq__29386 = G__29442;
chunk__29387 = G__29443;
count__29388 = G__29444;
i__29389 = G__29445;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29386);
if(temp__4657__auto__){
var seq__29386__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29386__$1)){
var c__9319__auto__ = cljs.core.chunk_first.call(null,seq__29386__$1);
var G__29446 = cljs.core.chunk_rest.call(null,seq__29386__$1);
var G__29447 = c__9319__auto__;
var G__29448 = cljs.core.count.call(null,c__9319__auto__);
var G__29449 = (0);
seq__29386 = G__29446;
chunk__29387 = G__29447;
count__29388 = G__29448;
i__29389 = G__29449;
continue;
} else {
var map__29405 = cljs.core.first.call(null,seq__29386__$1);
var map__29405__$1 = ((((!((map__29405 == null)))?((((map__29405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29405):map__29405);
var dir = map__29405__$1;
var directive = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__29407_29450 = cljs.core._EQ_;
var expr__29408_29451 = directive;
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__29408_29451))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__29386,chunk__29387,count__29388,i__29389,pred__29407_29450,expr__29408_29451,map__29405,map__29405__$1,dir,directive,seq__29386__$1,temp__4657__auto__){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__29386,chunk__29387,count__29388,i__29389,pred__29407_29450,expr__29408_29451,map__29405,map__29405__$1,dir,directive,seq__29386__$1,temp__4657__auto__))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__29408_29451))){
var map__29410_29452 = dir;
var map__29410_29453__$1 = ((((!((map__29410_29452 == null)))?((((map__29410_29452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29410_29452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410_29452):map__29410_29452);
var list_29454 = cljs.core.get.call(null,map__29410_29453__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_29454);
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__29408_29451))){
var map__29412_29455 = dir;
var map__29412_29456__$1 = ((((!((map__29412_29455 == null)))?((((map__29412_29455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29412_29455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412_29455):map__29412_29455);
var callsign_29457 = cljs.core.get.call(null,map__29412_29456__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_29458 = cljs.core.get.call(null,map__29412_29456__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_29457,vehicle_29458);
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__29408_29451))){
var map__29414_29459 = dir;
var map__29414_29460__$1 = ((((!((map__29414_29459 == null)))?((((map__29414_29459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29414_29459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414_29459):map__29414_29459);
var callsign_29461 = cljs.core.get.call(null,map__29414_29460__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_29462 = cljs.core.get.call(null,map__29414_29460__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_29463 = cljs.core.get.call(null,map__29414_29460__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_29464 = cljs.core.get.call(null,map__29414_29460__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_29461,vehicle_29462);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_29464);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_29462) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_29463,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_29462),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__29408_29451))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__29408_29451))){
var map__29416_29465 = dir;
var map__29416_29466__$1 = ((((!((map__29416_29465 == null)))?((((map__29416_29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29416_29465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29416_29465):map__29416_29465);
var course_29467 = cljs.core.get.call(null,map__29416_29466__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_29467);
} else {
if(cljs.core.truth_(pred__29407_29450.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__29408_29451))){
var map__29418_29468 = dir;
var map__29418_29469__$1 = ((((!((map__29418_29468 == null)))?((((map__29418_29468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29418_29468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418_29468):map__29418_29468);
var speed_29470 = cljs.core.get.call(null,map__29418_29469__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_29471 = cljs.core.get.call(null,map__29418_29469__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_29470,temp_29471);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__29472 = cljs.core.next.call(null,seq__29386__$1);
var G__29473 = null;
var G__29474 = (0);
var G__29475 = (0);
seq__29386 = G__29472;
chunk__29387 = G__29473;
count__29388 = G__29474;
i__29389 = G__29475;
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
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),view3d.client.directives_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),new cljs.core.Keyword(null,"no-terrain","no-terrain",-2110718690));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
view3d.client.to_manual = (function view3d$client$to_manual(){
return null;
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map