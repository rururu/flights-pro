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
view3d.client.HOST = "http://localhost:";
view3d.client.PORT = (4444);
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(4200),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1011)], null),"?",(0),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(5),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1003)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(8),(64),(2)], null),(0)]));
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
var vec__23264 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__23264,(0),null);
var sa = cljs.core.nth.call(null,vec__23264,(1),null);
var ba = cljs.core.nth.call(null,vec__23264,(2),null);
var fa = cljs.core.nth.call(null,vec__23264,(3),null);
var bps = vec__23264;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((alt < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var temp = (((calc.dynamic.abs.call(null,bnk) > rb))?(2):(1));
carr.move.turn.call(null,carr__$1,course,temp);

calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),((2) * cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (temp,vec__23264,rb,sa,ba,fa,bps,bnk,alt){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(temp,vec__23264,rb,sa,ba,fa,bps,bnk,alt))
);

return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);
}
});
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__23269 = response;
var map__23269__$1 = ((((!((map__23269 == null)))?((((map__23269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23269):map__23269);
var status = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__23269__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
var spd__$1 = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd"));
var acl = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spdacl"));
return carr.move.accel.call(null,view3d.client.CARRIER,spd__$1,acl);
} else {
return null;
}
});
view3d.client.altitude = (function view3d$client$altitude(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var alt = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"));
var acl = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-altacl"));
return carr.move.elevate.call(null,view3d.client.CARRIER,alt,acl);
} else {
return null;
}
});
view3d.client.latitude = (function view3d$client$latitude(lat){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__23274 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__23274,(0),null);
var lon = cljs.core.nth.call(null,vec__23274,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__23280 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__23280,(0),null);
var _ = cljs.core.nth.call(null,vec__23280,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args23283 = [];
var len__9931__auto___23289 = arguments.length;
var i__9932__auto___23290 = (0);
while(true){
if((i__9932__auto___23290 < len__9931__auto___23289)){
args23283.push((arguments[i__9932__auto___23290]));

var G__23291 = (i__9932__auto___23290 + (1));
i__9932__auto___23290 = G__23291;
continue;
} else {
}
break;
}

var G__23285 = args23283.length;
switch (G__23285) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23283.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car_23293 = cljs.core.deref.call(null,carr__$1);
var vec__23286_23294 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car_23293);
var lat_23295 = cljs.core.nth.call(null,vec__23286_23294,(0),null);
var lon_23296 = cljs.core.nth.call(null,vec__23286_23294,(1),null);
var crs_23297 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car_23293);
var alt_23298 = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car_23293) / 3.28084) | (0));
var alt_23299__$1 = (((alt_23298 < (12)))?(12):alt_23298);
czm.core.fly_to.call(null,lat_23295,lon_23296,alt_23299__$1,crs_23297,period);

return true;
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__23334 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__23335 = null;
var count__23336 = (0);
var i__23337 = (0);
while(true){
if((i__23337 < count__23336)){
var map__23338 = cljs.core._nth.call(null,chunk__23335,i__23337);
var map__23338__$1 = ((((!((map__23338 == null)))?((((map__23338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23338):map__23338);
var dir = map__23338__$1;
var directive = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__23340_23368 = cljs.core._EQ_;
var expr__23341_23369 = directive;
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__23341_23369))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__23334,chunk__23335,count__23336,i__23337,pred__23340_23368,expr__23341_23369,map__23338,map__23338__$1,dir,directive){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__23334,chunk__23335,count__23336,i__23337,pred__23340_23368,expr__23341_23369,map__23338,map__23338__$1,dir,directive))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__23341_23369))){
var map__23343_23370 = dir;
var map__23343_23371__$1 = ((((!((map__23343_23370 == null)))?((((map__23343_23370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23343_23370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23343_23370):map__23343_23370);
var list_23372 = cljs.core.get.call(null,map__23343_23371__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_23372,"manual"));
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23341_23369))){
var map__23345_23373 = dir;
var map__23345_23374__$1 = ((((!((map__23345_23373 == null)))?((((map__23345_23373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23345_23373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23345_23373):map__23345_23373);
var callsign_23375 = cljs.core.get.call(null,map__23345_23374__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23376 = cljs.core.get.call(null,map__23345_23374__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_23375,vehicle_23376);
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__23341_23369))){
var map__23347_23377 = dir;
var map__23347_23378__$1 = ((((!((map__23347_23377 == null)))?((((map__23347_23377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23347_23377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347_23377):map__23347_23377);
var callsign_23379 = cljs.core.get.call(null,map__23347_23378__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23380 = cljs.core.get.call(null,map__23347_23378__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_23381 = cljs.core.get.call(null,map__23347_23378__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_23382 = cljs.core.get.call(null,map__23347_23378__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_23379,vehicle_23380);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_23382);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_23380) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_23381,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_23380),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__23341_23369))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__23341_23369))){
var map__23349_23383 = dir;
var map__23349_23384__$1 = ((((!((map__23349_23383 == null)))?((((map__23349_23383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23349_23383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23349_23383):map__23349_23383);
var course_23385 = cljs.core.get.call(null,map__23349_23384__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_23385);
} else {
if(cljs.core.truth_(pred__23340_23368.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__23341_23369))){
var map__23351_23386 = dir;
var map__23351_23387__$1 = ((((!((map__23351_23386 == null)))?((((map__23351_23386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23351_23386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23351_23386):map__23351_23386);
var speed_23388 = cljs.core.get.call(null,map__23351_23387__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_23389 = cljs.core.get.call(null,map__23351_23387__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_23388,temp_23389);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__23390 = seq__23334;
var G__23391 = chunk__23335;
var G__23392 = count__23336;
var G__23393 = (i__23337 + (1));
seq__23334 = G__23390;
chunk__23335 = G__23391;
count__23336 = G__23392;
i__23337 = G__23393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23334);
if(temp__4657__auto__){
var seq__23334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23334__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__23334__$1);
var G__23394 = cljs.core.chunk_rest.call(null,seq__23334__$1);
var G__23395 = c__9637__auto__;
var G__23396 = cljs.core.count.call(null,c__9637__auto__);
var G__23397 = (0);
seq__23334 = G__23394;
chunk__23335 = G__23395;
count__23336 = G__23396;
i__23337 = G__23397;
continue;
} else {
var map__23353 = cljs.core.first.call(null,seq__23334__$1);
var map__23353__$1 = ((((!((map__23353 == null)))?((((map__23353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23353):map__23353);
var dir = map__23353__$1;
var directive = cljs.core.get.call(null,map__23353__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__23355_23398 = cljs.core._EQ_;
var expr__23356_23399 = directive;
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__23356_23399))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__23334,chunk__23335,count__23336,i__23337,pred__23355_23398,expr__23356_23399,map__23353,map__23353__$1,dir,directive,seq__23334__$1,temp__4657__auto__){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__23334,chunk__23335,count__23336,i__23337,pred__23355_23398,expr__23356_23399,map__23353,map__23353__$1,dir,directive,seq__23334__$1,temp__4657__auto__))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__23356_23399))){
var map__23358_23400 = dir;
var map__23358_23401__$1 = ((((!((map__23358_23400 == null)))?((((map__23358_23400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23358_23400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23358_23400):map__23358_23400);
var list_23402 = cljs.core.get.call(null,map__23358_23401__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_23402,"manual"));
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__23356_23399))){
var map__23360_23403 = dir;
var map__23360_23404__$1 = ((((!((map__23360_23403 == null)))?((((map__23360_23403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23360_23403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23360_23403):map__23360_23403);
var callsign_23405 = cljs.core.get.call(null,map__23360_23404__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23406 = cljs.core.get.call(null,map__23360_23404__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_23405,vehicle_23406);
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__23356_23399))){
var map__23362_23407 = dir;
var map__23362_23408__$1 = ((((!((map__23362_23407 == null)))?((((map__23362_23407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23362_23407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23362_23407):map__23362_23407);
var callsign_23409 = cljs.core.get.call(null,map__23362_23408__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_23410 = cljs.core.get.call(null,map__23362_23408__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var old_course_23411 = cljs.core.get.call(null,map__23362_23408__$1,new cljs.core.Keyword(null,"old-course","old-course",1700271327));
var period_23412 = cljs.core.get.call(null,map__23362_23408__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.carrier.call(null,callsign_23409,vehicle_23410);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_23412);

if((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle_23410) > (60))){
view3d.client.roll.call(null,calc.dynamic.bank.call(null,old_course_23411,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle_23410),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))));
} else {
}
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__23356_23399))){
cljs.core.vreset_BANG_.call(null,czm.core.CAMERA,cljs.core.merge.call(null,cljs.core.deref.call(null,czm.core.CAMERA),dir));
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__23356_23399))){
var map__23364_23413 = dir;
var map__23364_23414__$1 = ((((!((map__23364_23413 == null)))?((((map__23364_23413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23364_23413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23364_23413):map__23364_23413);
var course_23415 = cljs.core.get.call(null,map__23364_23414__$1,new cljs.core.Keyword(null,"course","course",1455432948));
view3d.client.turn_and_bank.call(null,view3d.client.CARRIER,course_23415);
} else {
if(cljs.core.truth_(pred__23355_23398.call(null,new cljs.core.Keyword(null,"accel","accel",-2118422974),expr__23356_23399))){
var map__23366_23416 = dir;
var map__23366_23417__$1 = ((((!((map__23366_23416 == null)))?((((map__23366_23416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23366_23416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23366_23416):map__23366_23416);
var speed_23418 = cljs.core.get.call(null,map__23366_23417__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var temp_23419 = cljs.core.get.call(null,map__23366_23417__$1,new cljs.core.Keyword(null,"temp","temp",1791541284));
carr.move.accel.call(null,view3d.client.CARRIER,speed_23418,temp_23419);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}
}
}

var G__23420 = cljs.core.next.call(null,seq__23334__$1);
var G__23421 = null;
var G__23422 = (0);
var G__23423 = (0);
seq__23334 = G__23420;
chunk__23335 = G__23421;
count__23336 = G__23422;
i__23337 = G__23423;
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
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map