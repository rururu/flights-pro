// Compiled by ClojureScript 1.9.293 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('calc.core');
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
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(view3d.client.HOST),cljs.core.str(view3d.client.PORT),cljs.core.str("/manual-data/")].join('')], null);
view3d.client.TIO = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"carrier","carrier",1085800622),(1000),new cljs.core.Keyword(null,"camera","camera",-1190348585),(2222),new cljs.core.Keyword(null,"directives","directives",-2003276356),(911),new cljs.core.Keyword(null,"instructions","instructions",1724333802),(979),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),(200),new cljs.core.Keyword(null,"display","display",242065432),(831),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),(6000),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),(60000)], null);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"?",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(16),(64),(2)], null),(0)]));
view3d.client.CAM_PROC = cljs.core.volatile_BANG_.call(null,"STOP");
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__13315 = response;
var map__13315__$1 = ((((!((map__13315 == null)))?((((map__13315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13315):map__13315);
var status = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
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
var vec__13320 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var rb = cljs.core.nth.call(null,vec__13320,(0),null);
var sa = cljs.core.nth.call(null,vec__13320,(1),null);
var ba = cljs.core.nth.call(null,vec__13320,(2),null);
var fa = cljs.core.nth.call(null,vec__13320,(3),null);
var bps = vec__13320;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if(((spd < (90))) || (cljs.core._EQ_.call(null,bnk,(0)))){
return carr.move.turn.call(null,carr__$1,course,(1));
} else {
var accel = (((calc.core.abs.call(null,bnk) > rb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

carr.move.turn.call(null,carr__$1,course,accel);

return calc.dynamic.check_diff_and_do.call(null,carr__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),((function (accel,vec__13320,rb,sa,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__13320,rb,sa,ba,fa,bps,bnk,spd))
);
}
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
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),cljs.core.dissoc.call(null,vehicle,new cljs.core.Keyword(null,"course","course",1455432948))));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

if(cljs.core.not_EQ_.call(null,new_crs,old_crs)){
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
return carr.move.accel.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,spd));
} else {
return null;
}
});
view3d.client.altitude = (function view3d$client$altitude(alt){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return carr.move.elevate.call(null,view3d.client.CARRIER,view3d.client.num_val.call(null,alt));
} else {
return null;
}
});
view3d.client.accel_speed = (function view3d$client$accel_speed(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.accel_altitude = (function view3d$client$accel_altitude(accel){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));
} else {
return null;
}
});
view3d.client.latitude = (function view3d$client$latitude(lat){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lat__$1 = view3d.client.num_val.call(null,lat);
var vec__13326 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var _ = cljs.core.nth.call(null,vec__13326,(0),null);
var lon = cljs.core.nth.call(null,vec__13326,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat__$1,lon], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
var lon__$1 = view3d.client.num_val.call(null,lon);
var vec__13332 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car);
var lat = cljs.core.nth.call(null,vec__13332,(0),null);
var _ = cljs.core.nth.call(null,vec__13332,(1),null);
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
} else {
return null;
}
});
view3d.client.camera_move = (function view3d$client$camera_move(var_args){
var args13335 = [];
var len__10353__auto___13341 = arguments.length;
var i__10354__auto___13342 = (0);
while(true){
if((i__10354__auto___13342 < len__10353__auto___13341)){
args13335.push((arguments[i__10354__auto___13342]));

var G__13343 = (i__10354__auto___13342 + (1));
i__10354__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var G__13337 = args13335.length;
switch (G__13337) {
case 1:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13335.length)].join('')));

}
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
return view3d.client.camera_move.call(null,carr__$1,(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)));
});

view3d.client.camera_move.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,period){
var car_13345 = cljs.core.deref.call(null,carr__$1);
var vec__13338_13346 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car_13345);
var lat_13347 = cljs.core.nth.call(null,vec__13338_13346,(0),null);
var lon_13348 = cljs.core.nth.call(null,vec__13338_13346,(1),null);
var crs_13349 = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car_13345);
var alt_13350 = ((new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car_13345) / 3.28084) | (0));
var alt_13351__$1 = (((alt_13350 < (20)))?(20):alt_13350);
czm.core.fly_to.call(null,lat_13347,lon_13348,alt_13351__$1,crs_13349,period);

return true;
});

view3d.client.camera_move.cljs$lang$maxFixedArity = 2;

view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__13378 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__13379 = null;
var count__13380 = (0);
var i__13381 = (0);
while(true){
if((i__13381 < count__13380)){
var map__13382 = cljs.core._nth.call(null,chunk__13379,i__13381);
var map__13382__$1 = ((((!((map__13382 == null)))?((((map__13382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13382):map__13382);
var dir = map__13382__$1;
var directive = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__13384_13404 = cljs.core._EQ_;
var expr__13385_13405 = directive;
if(cljs.core.truth_(pred__13384_13404.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__13385_13405))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__13378,chunk__13379,count__13380,i__13381,pred__13384_13404,expr__13385_13405,map__13382,map__13382__$1,dir,directive){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__13378,chunk__13379,count__13380,i__13381,pred__13384_13404,expr__13385_13405,map__13382,map__13382__$1,dir,directive))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__13384_13404.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__13385_13405))){
var map__13387_13406 = dir;
var map__13387_13407__$1 = ((((!((map__13387_13406 == null)))?((((map__13387_13406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13387_13406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387_13406):map__13387_13406);
var list_13408 = cljs.core.get.call(null,map__13387_13407__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_13408,"manual"));
} else {
if(cljs.core.truth_(pred__13384_13404.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__13385_13405))){
var map__13389_13409 = dir;
var map__13389_13410__$1 = ((((!((map__13389_13409 == null)))?((((map__13389_13409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13389_13409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13389_13409):map__13389_13409);
var callsign_13411 = cljs.core.get.call(null,map__13389_13410__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_13412 = cljs.core.get.call(null,map__13389_13410__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_13411,vehicle_13412);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__13384_13404.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__13385_13405))){
var map__13391_13413 = dir;
var map__13391_13414__$1 = ((((!((map__13391_13413 == null)))?((((map__13391_13413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13391_13413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13391_13413):map__13391_13413);
var callsign_13415 = cljs.core.get.call(null,map__13391_13414__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_13416 = cljs.core.get.call(null,map__13391_13414__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_13417 = cljs.core.get.call(null,map__13391_13414__$1,new cljs.core.Keyword(null,"period","period",-352129191));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
view3d.client.carrier.call(null,callsign_13415,vehicle_13416);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_13417);
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__13418 = seq__13378;
var G__13419 = chunk__13379;
var G__13420 = count__13380;
var G__13421 = (i__13381 + (1));
seq__13378 = G__13418;
chunk__13379 = G__13419;
count__13380 = G__13420;
i__13381 = G__13421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13378);
if(temp__4657__auto__){
var seq__13378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13378__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__13378__$1);
var G__13422 = cljs.core.chunk_rest.call(null,seq__13378__$1);
var G__13423 = c__10059__auto__;
var G__13424 = cljs.core.count.call(null,c__10059__auto__);
var G__13425 = (0);
seq__13378 = G__13422;
chunk__13379 = G__13423;
count__13380 = G__13424;
i__13381 = G__13425;
continue;
} else {
var map__13393 = cljs.core.first.call(null,seq__13378__$1);
var map__13393__$1 = ((((!((map__13393 == null)))?((((map__13393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13393):map__13393);
var dir = map__13393__$1;
var directive = cljs.core.get.call(null,map__13393__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__13395_13426 = cljs.core._EQ_;
var expr__13396_13427 = directive;
if(cljs.core.truth_(pred__13395_13426.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),expr__13396_13427))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"?")){
view3d.client.carrier.call(null,"MANUAL",view3d.client.manual_vehicle.call(null));
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL"));
}

csasync.proc.start_process.call(null,view3d.client.CAM_PROC,((function (seq__13378,chunk__13379,count__13380,i__13381,pred__13395_13426,expr__13396_13427,map__13393,map__13393__$1,dir,directive,seq__13378__$1,temp__4657__auto__){
return (function (){
return view3d.client.camera_move.call(null,view3d.client.CARRIER);
});})(seq__13378,chunk__13379,count__13380,i__13381,pred__13395_13426,expr__13396_13427,map__13393,map__13393__$1,dir,directive,seq__13378__$1,temp__4657__auto__))
,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));
} else {
if(cljs.core.truth_(pred__13395_13426.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__13396_13427))){
var map__13398_13428 = dir;
var map__13398_13429__$1 = ((((!((map__13398_13428 == null)))?((((map__13398_13428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13398_13428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13398_13428):map__13398_13428);
var list_13430 = cljs.core.get.call(null,map__13398_13429__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,cljs.core.conj.call(null,list_13430,"manual"));
} else {
if(cljs.core.truth_(pred__13395_13426.call(null,new cljs.core.Keyword(null,"carrier","carrier",1085800622),expr__13396_13427))){
var map__13400_13431 = dir;
var map__13400_13432__$1 = ((((!((map__13400_13431 == null)))?((((map__13400_13431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13400_13431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13400_13431):map__13400_13431);
var callsign_13433 = cljs.core.get.call(null,map__13400_13432__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_13434 = cljs.core.get.call(null,map__13400_13432__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
csasync.proc.stop_process.call(null,view3d.client.CAM_PROC);

view3d.client.carrier.call(null,callsign_13433,vehicle_13434);

view3d.client.camera_move.call(null,view3d.client.CARRIER);
} else {
if(cljs.core.truth_(pred__13395_13426.call(null,new cljs.core.Keyword(null,"fly-onboard","fly-onboard",69825475),expr__13396_13427))){
var map__13402_13435 = dir;
var map__13402_13436__$1 = ((((!((map__13402_13435 == null)))?((((map__13402_13435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13402_13435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13402_13435):map__13402_13435);
var callsign_13437 = cljs.core.get.call(null,map__13402_13436__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var vehicle_13438 = cljs.core.get.call(null,map__13402_13436__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_13439 = cljs.core.get.call(null,map__13402_13436__$1,new cljs.core.Keyword(null,"period","period",-352129191));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL"))){
view3d.client.carrier.call(null,callsign_13437,vehicle_13438);

view3d.client.camera_move.call(null,view3d.client.CARRIER,period_13439);
} else {
}
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown directive: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}

var G__13440 = cljs.core.next.call(null,seq__13378__$1);
var G__13441 = null;
var G__13442 = (0);
var G__13443 = (0);
seq__13378 = G__13440;
chunk__13379 = G__13441;
count__13380 = G__13442;
i__13381 = G__13443;
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
view3d.client.send_manual_data = (function view3d$client$send_manual_data(){
var carr__$1 = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(carr__$1),"MANUAL")){
return ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("?coord="),cljs.core.str(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&course="),cljs.core.str(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&speed= "),cljs.core.str(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(carr__$1)),cljs.core.str("&altitude="),cljs.core.str(new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(carr__$1))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (carr__$1){
return (function (response){
return null;
});})(carr__$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
} else {
return null;
}
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("terrain")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),response);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

ajax.core.GET.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),cljs.core.str("new-czml-doc")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.controls.show_flight_data,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map