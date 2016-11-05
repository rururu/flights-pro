// Compiled by ClojureScript 1.9.293 {}
goog.provide('carr.move');
goog.require('cljs.core');
goog.require('calc.dynamic');
carr.move.PID180 = (Math.PI / (180));
carr.move.spherical_between = (function carr$move$spherical_between(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
carr.move.future_pos = (function carr$move$future_pos(p__22058,crs,spd,tim){
var vec__22065 = p__22058;
var lat = cljs.core.nth.call(null,vec__22065,(0),null);
var lon = cljs.core.nth.call(null,vec__22065,(1),null);
var phi = (carr.move.PID180 * lat);
var lam = (carr.move.PID180 * lon);
var dir = (carr.move.PID180 * crs);
var way = (spd * tim);
var way__$1 = (carr.move.PID180 * (way / (60)));
var vec__22068 = carr.move.spherical_between.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__22068,(0),null);
var lam2 = cljs.core.nth.call(null,vec__22068,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi2 / carr.move.PID180),(lam2 / carr.move.PID180)], null);
});
carr.move.move = (function carr$move$move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"coord","coord",-1453656639),carr.move.future_pos.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(car))));
});
carr.move.turn = (function carr$move$turn(carr__$1,course,temp){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),course));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),calc.dynamic.course_closer,temp);
});
carr.move.accel = (function carr$move$accel(carr__$1,speed,temp){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"target","target",253001721)], null),speed));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"engine","engine",1459054265),new cljs.core.Keyword(null,"speed","speed",1257663751),calc.dynamic.step_closer,temp);
});
carr.move.elevate = (function carr$move$elevate(carr__$1,altitude,temp){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"target","target",253001721)], null),altitude));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"altitude","altitude",463588637),calc.dynamic.step_closer,temp);
});

//# sourceMappingURL=move.js.map