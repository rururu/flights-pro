// Compiled by ClojureScript 1.10.439 {}
goog.provide('view3d.client');
goog.require('cljs.core');
goog.require('csasync.proc');
goog.require('czm.core');
goog.require('view3d.controls');
goog.require('carr.move');
goog.require('calc.core');
goog.require('calc.dynamic');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('cljs.reader');
view3d.client.HOST = "http://localhost:";
view3d.client.PORT = (4444);
view3d.client.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/"].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/chart/"].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/directives/"].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/instructions/"].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/command/"].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/question/"].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/answer/"].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view3d.client.PORT),"/manual-data/"].join('')], null);
view3d.client.TIO = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),new cljs.core.Keyword(null,"new-czml-doc","new-czml-doc",175274502),new cljs.core.Keyword(null,"instructions","instructions",1724333802),new cljs.core.Keyword(null,"carrier","carrier",1085800622),new cljs.core.Keyword(null,"ext-data-popup","ext-data-popup",-108746127),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"vehicles","vehicles",-161247303),new cljs.core.Keyword(null,"directives","directives",-2003276356)],[(6000),(4000),(979),(1000),(60000),(3030),(831),(200),(911)]);
view3d.client.CARRIER = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),new cljs.core.Keyword(null,"altitude","altitude",463588637)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),(160),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(1017)], null),"MANUAL",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(2003)], null),"LEVEL",(270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"step","step",1288888124),(4),new cljs.core.Keyword(null,"accel","accel",-2118422974),(1),new cljs.core.Keyword(null,"time-out","time-out",-125288146),(997)], null),(new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (3600000)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(2),(16),(64),(2)], null),(4000)]));
view3d.client.VEHICLE = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(30)], null),new cljs.core.Keyword(null,"altitude","altitude",463588637),(4000),new cljs.core.Keyword(null,"speed","speed",1257663751),(160),new cljs.core.Keyword(null,"course","course",1455432948),(270)], null));
view3d.client.error_handler = (function view3d$client$error_handler(response){
var map__30021 = response;
var map__30021__$1 = (((((!((map__30021 == null))))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var status = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
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
var vec__30023 = new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
var mb = cljs.core.nth.call(null,vec__30023,(0),null);
var sa = cljs.core.nth.call(null,vec__30023,(1),null);
var ma = cljs.core.nth.call(null,vec__30023,(2),null);
var ba = cljs.core.nth.call(null,vec__30023,(3),null);
var fa = cljs.core.nth.call(null,vec__30023,(4),null);
var bps = vec__30023;
var bnk = calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1)),course,bps);
var spd = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr__$1));
if((((spd < (100))) || (cljs.core._EQ_.call(null,bnk,(0))))){
return carr.move.turn.call(null,carr__$1,course,(1),null);
} else {
var accel = (((calc.core.abs.call(null,bnk) > mb))?(2):(1));
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),bnk);

return carr.move.turn.call(null,carr__$1,course,accel,((function (accel,vec__30023,mb,sa,ma,ba,fa,bps,bnk,spd){
return (function (){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(0));
});})(accel,vec__30023,mb,sa,ma,ba,fa,bps,bnk,spd))
);
}
});
view3d.client.onboard = (function view3d$client$onboard(call){
if(cljs.core._EQ_.call(null,call,"MANUAL")){
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),cljs.core.deref.call(null,view3d.client.VEHICLE)));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);
} else {
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"mode","mode",654403691),call));
}

return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),"onboard?callsign=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(call)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.view = (function view3d$client$view(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
czm.core.camera.call(null,new cljs.core.Keyword(null,"view","view",1247994814),deg__$1);

return view3d.controls.set_html_BANG_.call(null,"view-fld",deg__$1);
} else {
return null;
}
});
view3d.client.pitch = (function view3d$client$pitch(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),deg__$1);

return view3d.controls.set_html_BANG_.call(null,"pitch-fld",deg__$1);
} else {
return null;
}
});
view3d.client.roll = (function view3d$client$roll(deg){
var deg__$1 = view3d.client.num_val.call(null,deg);
if(((((-180) <= deg__$1)) && ((deg__$1 <= (180))))){
czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),deg__$1);

return view3d.controls.set_html_BANG_.call(null,"roll-fld",deg__$1);
} else {
return null;
}
});
view3d.client.course = (function view3d$client$course(crs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var crs__$1 = view3d.client.num_val.call(null,crs);
if(((((0) <= crs__$1)) && ((crs__$1 <= (360))))){
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
view3d.client.level_view = (function view3d$client$level_view(){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),view3d.controls.get_value.call(null,"pitch-val"));
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
return null;
});
view3d.client.instantly_to = (function view3d$client$instantly_to(lat,lon){
return carr.move.set_turn_point.call(null,view3d.client.CARRIER,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null),cljs.core.deref.call(null,view3d.client.CARRIER).call(null,new cljs.core.Keyword(null,"course","course",1455432948)),cljs.core.deref.call(null,view3d.client.CARRIER).call(null,new cljs.core.Keyword(null,"speed","speed",1257663751)));
});
view3d.client.longitude = (function view3d$client$longitude(lon){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),"MANUAL")){
var lon__$1 = view3d.client.num_val.call(null,lon);
var lat = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat"));
var bea = carr.move.bear_deg_js.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon__$1], null));
var ins = view3d.controls.by_id.call(null,"input-instant").checked;
if(cljs.core.truth_(ins)){
view3d.client.instantly_to.call(null,lat,lon__$1);

return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),"goto?lat=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat),"&lon=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon__$1),"&from=COCKPIT"].join(''));
} else {
return view3d.client.course.call(null,(bea | (0)));
}
} else {
return null;
}
});
view3d.client.camera_vehicle = (function view3d$client$camera_vehicle(vehicle,per){
var vec__30026 = new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(vehicle);
var lat = cljs.core.nth.call(null,vec__30026,(0),null);
var lon = cljs.core.nth.call(null,vec__30026,(1),null);
var alt = new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(vehicle);
cljs.core._vreset_BANG_.call(null,view3d.client.VEHICLE,cljs.core.merge.call(null,cljs.core._deref.call(null,view3d.client.VEHICLE),vehicle));

if((per <= (0))){
return czm.core.move_to.call(null,lat,lon,((alt / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle));
} else {
return czm.core.fly_to.call(null,lat,lon,((alt / 3.28084) | (0)),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),per);
}
});
view3d.client.camera_manual = (function view3d$client$camera_manual(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return view3d.client.camera_vehicle.call(null,car,((new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO) / (1000)) | (0)));
} else {
return null;
}
});
view3d.client.manual_vehicle = (function view3d$client$manual_vehicle(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),"MANUAL",new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lat")),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-lon"))], null),new cljs.core.Keyword(null,"course","course",1455432948),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-crs")),new cljs.core.Keyword(null,"speed","speed",1257663751),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-spd")),new cljs.core.Keyword(null,"altitude","altitude",463588637),view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"input-alt"))], null);
});
view3d.client.bank_vehicle = (function view3d$client$bank_vehicle(vehicle){
return czm.core.camera.call(null,new cljs.core.Keyword(null,"roll","roll",11266999),(((new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(vehicle) > (120)))?calc.dynamic.bank.call(null,new cljs.core.Keyword(null,"old-course","old-course",1700271327).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(vehicle),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER))):(0)));
});
view3d.client.dynamics = (function view3d$client$dynamics(dm){
var bk_30029 = dm.call(null,"bank");
var bk_30030__$1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bk_30029.call(null,"middle-bank"),bk_30029.call(null,"small-arc"),bk_30029.call(null,"middle-arc"),bk_30029.call(null,"big-arc"),bk_30029.call(null,"factor")], null);
cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"bank-params","bank-params",-1143002692),bk_30030__$1));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"propeller-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"propeller-time-out")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"elevator-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"elevator-time-out")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"step","step",1288888124)], null),dm.call(null,"rudder-step")));

cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"time-out","time-out",-125288146)], null),dm.call(null,"rudder-time-out")));

return cljs.core.println.call(null,new cljs.core.Keyword(null,"new-dynamics","new-dynamics",888099005),cljs.core.deref.call(null,view3d.client.CARRIER));
});
view3d.client.adjust_pitch = (function view3d$client$adjust_pitch(nsts){
var osts = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,view3d.client.CARRIER));
var fptc = view3d.client.num_val.call(null,view3d.controls.get_value.call(null,"pitch-val"));
if(((cljs.core.not_EQ_.call(null,osts,"LEVEL")) && (cljs.core._EQ_.call(null,nsts,"GROUND")))){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),fptc);
} else {
if(((cljs.core.not_EQ_.call(null,osts,"LEVEL")) && (cljs.core._EQ_.call(null,nsts,"LEVEL")))){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),fptc);
} else {
if(((cljs.core.not_EQ_.call(null,osts,"CLIMB")) && (cljs.core._EQ_.call(null,nsts,"CLIMB")))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA)),"FORWARD")){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(fptc + (6)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA)),"BACKWARD")){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(fptc - (6)));
} else {
}
}
} else {
if(((cljs.core.not_EQ_.call(null,osts,"DESCEND")) && (cljs.core._EQ_.call(null,nsts,"DESCEND")))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA)),"FORWARD")){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(fptc - (6)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,czm.core.CAMERA)),"BACKWARD")){
czm.core.camera.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(fptc + (6)));
} else {
}
}
} else {
}
}
}
}

return cljs.core._vreset_BANG_.call(null,view3d.client.CARRIER,cljs.core.assoc.call(null,cljs.core._deref.call(null,view3d.client.CARRIER),new cljs.core.Keyword(null,"status","status",-1997798413),nsts));
});
view3d.client.directives_handler = (function view3d$client$directives_handler(response){
var seq__30031 = cljs.core.seq.call(null,view3d.client.read_transit.call(null,response));
var chunk__30032 = null;
var count__30033 = (0);
var i__30034 = (0);
while(true){
if((i__30034 < count__30033)){
var map__30035 = cljs.core._nth.call(null,chunk__30032,i__30034);
var map__30035__$1 = (((((!((map__30035 == null))))?(((((map__30035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30035):map__30035);
var dir = map__30035__$1;
var directive = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__30037_30065 = cljs.core._EQ_;
var expr__30038_30066 = directive;
if(cljs.core.truth_(pred__30037_30065.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__30038_30066))){
var map__30040_30067 = dir;
var map__30040_30068__$1 = (((((!((map__30040_30067 == null))))?(((((map__30040_30067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30040_30067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30040_30067):map__30040_30067);
var list_30069 = cljs.core.get.call(null,map__30040_30068__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_30069);
} else {
if(cljs.core.truth_(pred__30037_30065.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__30038_30066))){
var map__30042_30070 = dir;
var map__30042_30071__$1 = (((((!((map__30042_30070 == null))))?(((((map__30042_30070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30042_30070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30042_30070):map__30042_30070);
var vehicle_30072 = cljs.core.get.call(null,map__30042_30071__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_30073 = cljs.core.get.call(null,map__30042_30071__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.bank_vehicle.call(null,vehicle_30072);

view3d.client.camera_vehicle.call(null,vehicle_30072,period_30073);

view3d.controls.show_flight_data.call(null,vehicle_30072);
} else {
if(cljs.core.truth_(pred__30037_30065.call(null,new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),expr__30038_30066))){
var map__30044_30074 = dir;
var map__30044_30075__$1 = (((((!((map__30044_30074 == null))))?(((((map__30044_30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30044_30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044_30074):map__30044_30074);
var dynamo_30076 = cljs.core.get.call(null,map__30044_30075__$1,new cljs.core.Keyword(null,"dynamo","dynamo",-1383622723));
view3d.client.dynamics.call(null,dynamo_30076);
} else {
if(cljs.core.truth_(pred__30037_30065.call(null,new cljs.core.Keyword(null,"onboard-status","onboard-status",-1969945896),expr__30038_30066))){
var map__30046_30077 = dir;
var map__30046_30078__$1 = (((((!((map__30046_30077 == null))))?(((((map__30046_30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30046_30077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30046_30077):map__30046_30077);
var status_30079 = cljs.core.get.call(null,map__30046_30078__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
view3d.client.adjust_pitch.call(null,status_30079);
} else {
if(cljs.core.truth_(pred__30037_30065.call(null,new cljs.core.Keyword(null,"instantly-to","instantly-to",1418570275),expr__30038_30066))){
var map__30048_30080 = dir;
var map__30048_30081__$1 = (((((!((map__30048_30080 == null))))?(((((map__30048_30080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30048_30080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048_30080):map__30048_30080);
var lat_30082 = cljs.core.get.call(null,map__30048_30081__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30083 = cljs.core.get.call(null,map__30048_30081__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
view3d.client.instantly_to.call(null,lat_30082,lon_30083);
} else {
cljs.core.println.call(null,["Unknown directive: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}


var G__30084 = seq__30031;
var G__30085 = chunk__30032;
var G__30086 = count__30033;
var G__30087 = (i__30034 + (1));
seq__30031 = G__30084;
chunk__30032 = G__30085;
count__30033 = G__30086;
i__30034 = G__30087;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30031);
if(temp__5720__auto__){
var seq__30031__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30031__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30031__$1);
var G__30088 = cljs.core.chunk_rest.call(null,seq__30031__$1);
var G__30089 = c__4461__auto__;
var G__30090 = cljs.core.count.call(null,c__4461__auto__);
var G__30091 = (0);
seq__30031 = G__30088;
chunk__30032 = G__30089;
count__30033 = G__30090;
i__30034 = G__30091;
continue;
} else {
var map__30050 = cljs.core.first.call(null,seq__30031__$1);
var map__30050__$1 = (((((!((map__30050 == null))))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var dir = map__30050__$1;
var directive = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"directive","directive",793559132));
var pred__30052_30092 = cljs.core._EQ_;
var expr__30053_30093 = directive;
if(cljs.core.truth_(pred__30052_30092.call(null,new cljs.core.Keyword(null,"callsigns","callsigns",-806223730),expr__30053_30093))){
var map__30055_30094 = dir;
var map__30055_30095__$1 = (((((!((map__30055_30094 == null))))?(((((map__30055_30094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30055_30094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30055_30094):map__30055_30094);
var list_30096 = cljs.core.get.call(null,map__30055_30095__$1,new cljs.core.Keyword(null,"list","list",765357683));
view3d.controls.callsigns.call(null,list_30096);
} else {
if(cljs.core.truth_(pred__30052_30092.call(null,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968),expr__30053_30093))){
var map__30057_30097 = dir;
var map__30057_30098__$1 = (((((!((map__30057_30097 == null))))?(((((map__30057_30097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30057_30097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057_30097):map__30057_30097);
var vehicle_30099 = cljs.core.get.call(null,map__30057_30098__$1,new cljs.core.Keyword(null,"vehicle","vehicle",1670166968));
var period_30100 = cljs.core.get.call(null,map__30057_30098__$1,new cljs.core.Keyword(null,"period","period",-352129191));
view3d.client.bank_vehicle.call(null,vehicle_30099);

view3d.client.camera_vehicle.call(null,vehicle_30099,period_30100);

view3d.controls.show_flight_data.call(null,vehicle_30099);
} else {
if(cljs.core.truth_(pred__30052_30092.call(null,new cljs.core.Keyword(null,"dynamics","dynamics",-1480249074),expr__30053_30093))){
var map__30059_30101 = dir;
var map__30059_30102__$1 = (((((!((map__30059_30101 == null))))?(((((map__30059_30101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30059_30101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30059_30101):map__30059_30101);
var dynamo_30103 = cljs.core.get.call(null,map__30059_30102__$1,new cljs.core.Keyword(null,"dynamo","dynamo",-1383622723));
view3d.client.dynamics.call(null,dynamo_30103);
} else {
if(cljs.core.truth_(pred__30052_30092.call(null,new cljs.core.Keyword(null,"onboard-status","onboard-status",-1969945896),expr__30053_30093))){
var map__30061_30104 = dir;
var map__30061_30105__$1 = (((((!((map__30061_30104 == null))))?(((((map__30061_30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30061_30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061_30104):map__30061_30104);
var status_30106 = cljs.core.get.call(null,map__30061_30105__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
view3d.client.adjust_pitch.call(null,status_30106);
} else {
if(cljs.core.truth_(pred__30052_30092.call(null,new cljs.core.Keyword(null,"instantly-to","instantly-to",1418570275),expr__30053_30093))){
var map__30063_30107 = dir;
var map__30063_30108__$1 = (((((!((map__30063_30107 == null))))?(((((map__30063_30107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30063_30107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30063_30107):map__30063_30107);
var lat_30109 = cljs.core.get.call(null,map__30063_30108__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_30110 = cljs.core.get.call(null,map__30063_30108__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
view3d.client.instantly_to.call(null,lat_30109,lon_30110);
} else {
cljs.core.println.call(null,["Unknown directive: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [directive,dir], null))].join(''));
}
}
}
}
}


var G__30111 = cljs.core.next.call(null,seq__30031__$1);
var G__30112 = null;
var G__30113 = (0);
var G__30114 = (0);
seq__30031 = G__30111;
chunk__30032 = G__30112;
count__30033 = G__30113;
i__30034 = G__30114;
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
var car = cljs.core.deref.call(null,view3d.client.CARRIER);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),"?coord=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car)),"&course=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car)),"&speed= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car)),"&altitude=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"altitude","altitude",463588637).cljs$core$IFn$_invoke$arity$1(car))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (car){
return (function (response){
return null;
});})(car))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
} else {
return null;
}
});
view3d.client.flight_data_manual = (function view3d$client$flight_data_manual(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(car),"MANUAL")){
return view3d.controls.show_flight_data.call(null,car);
} else {
return null;
}
});
view3d.client.new_czml_doc = (function view3d$client$new_czml_doc(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),"new-czml-doc"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return null;
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));
});
view3d.client.on_load = (function view3d$client$on_load(){
cljs.core.enable_console_print_BANG_.call(null);

ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(view3d.client.URL)),"terrain"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return czm.core.init_3D_view.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(view3d.client.URL),view3d.client.read_transit.call(null,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),view3d.client.error_handler], null));

carr.move.set_turn_point.call(null,view3d.client.CARRIER);

csasync.proc.repeater.call(null,carr.move.move,view3d.client.CARRIER,new cljs.core.Keyword(null,"carrier","carrier",1085800622).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.flight_data_manual,view3d.client.CARRIER,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.camera_manual,view3d.client.CARRIER,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.receive_directives,new cljs.core.Keyword(null,"directives","directives",-2003276356).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.send_manual_data,new cljs.core.Keyword(null,"manual-data","manual-data",1249538213).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

csasync.proc.repeater.call(null,view3d.client.new_czml_doc,new cljs.core.Keyword(null,"new-czml-doc","new-czml-doc",175274502).cljs$core$IFn$_invoke$arity$1(view3d.client.TIO));

return view3d.controls.show_controls.call(null);
});
window.onload = view3d.client.on_load.call(null);

//# sourceMappingURL=client.js.map
