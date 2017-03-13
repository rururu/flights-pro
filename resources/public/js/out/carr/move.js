// Compiled by ClojureScript 1.9.293 {}
goog.provide('carr.move');
goog.require('cljs.core');
goog.require('calc.dynamic');
carr.move.PID180 = (Math.PI / (180));
carr.move.NMRAD = (Math.PI / (10800));
carr.move.spherical_between_js = (function carr$move$spherical_between_js(phi1,lambda0,c,az){
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
carr.move.set_turn_point = (function carr$move$set_turn_point(var_args){
var args42248 = [];
var len__24338__auto___42255 = arguments.length;
var i__24339__auto___42256 = (0);
while(true){
if((i__24339__auto___42256 < len__24338__auto___42255)){
args42248.push((arguments[i__24339__auto___42256]));

var G__42257 = (i__24339__auto___42256 + (1));
i__24339__auto___42256 = G__42257;
continue;
} else {
}
break;
}

var G__42250 = args42248.length;
switch (G__42250) {
case 1:
return carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42248.length)].join('')));

}
});

carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
return carr.move.set_turn_point.call(null,carr__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
});

carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$4 = (function (carr__$1,p__42251,crs,spd){
var vec__42252 = p__42251;
var lat = cljs.core.nth.call(null,vec__42252,(0),null);
var lon = cljs.core.nth.call(null,vec__42252,(1),null);
return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"turn-point","turn-point",1337942146),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"phi","phi",-1526798304),(lat * carr.move.PID180),new cljs.core.Keyword(null,"lam","lam",1907357070),(lon * carr.move.PID180),new cljs.core.Keyword(null,"dir","dir",1734754661),(crs * carr.move.PID180),new cljs.core.Keyword(null,"rdh","rdh",1247569967),(spd * carr.move.NMRAD),new cljs.core.Keyword(null,"clk","clk",564834871),(0)], null)));
});

carr.move.set_turn_point.cljs$lang$maxFixedArity = 4;

carr.move.set_course = (function carr$move$set_course(carr__$1,crs){
var car = cljs.core.deref.call(null,carr__$1);
carr.move.set_turn_point.call(null,carr__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car),crs,new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));

return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"course","course",1455432948),crs));
});
carr.move.set_speed = (function carr$move$set_speed(carr__$1,spd){
var car = cljs.core.deref.call(null,carr__$1);
carr.move.set_turn_point.call(null,carr__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),spd);

return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"speed","speed",1257663751),spd));
});
carr.move.set_altitude = (function carr$move$set_altitude(carr__$1,alt){
return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"altitude","altitude",463588637),alt));
});
carr.move.move = (function carr$move$move(carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
var tur = new cljs.core.Keyword(null,"turn-point","turn-point",1337942146).cljs$core$IFn$_invoke$arity$1(car);
var hrs = new cljs.core.Keyword(null,"step-hrs","step-hrs",-504384679).cljs$core$IFn$_invoke$arity$1(car);
var elt = (new cljs.core.Keyword(null,"clk","clk",564834871).cljs$core$IFn$_invoke$arity$1(tur) + hrs);
var way = (new cljs.core.Keyword(null,"rdh","rdh",1247569967).cljs$core$IFn$_invoke$arity$1(tur) * elt);
var vec__42262 = carr.move.spherical_between_js.call(null,new cljs.core.Keyword(null,"phi","phi",-1526798304).cljs$core$IFn$_invoke$arity$1(tur),new cljs.core.Keyword(null,"lam","lam",1907357070).cljs$core$IFn$_invoke$arity$1(tur),way,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(tur));
var phi = cljs.core.nth.call(null,vec__42262,(0),null);
var lam = cljs.core.nth.call(null,vec__42262,(1),null);
return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi / carr.move.PID180),(lam / carr.move.PID180)], null),new cljs.core.Keyword(null,"turn-point","turn-point",1337942146),cljs.core.assoc.call(null,tur,new cljs.core.Keyword(null,"clk","clk",564834871),elt)));
});
carr.move.turn = (function carr$move$turn(var_args){
var args42265 = [];
var len__24338__auto___42268 = arguments.length;
var i__24339__auto___42269 = (0);
while(true){
if((i__24339__auto___42269 < len__24338__auto___42268)){
args42265.push((arguments[i__24339__auto___42269]));

var G__42270 = (i__24339__auto___42269 + (1));
i__24339__auto___42269 = G__42270;
continue;
} else {
}
break;
}

var G__42267 = args42265.length;
switch (G__42267) {
case 2:
return carr.move.turn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.turn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42265.length)].join('')));

}
});

carr.move.turn.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,course){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),course));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"rudder","rudder",1071257290),carr.move.set_course,new cljs.core.Keyword(null,"course","course",1455432948),calc.dynamic.course_closer);
});

carr.move.turn.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,course,accel){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));

return carr.move.turn.call(null,carr__$1,course);
});

carr.move.turn.cljs$lang$maxFixedArity = 3;

carr.move.accel = (function carr$move$accel(var_args){
var args42272 = [];
var len__24338__auto___42275 = arguments.length;
var i__24339__auto___42276 = (0);
while(true){
if((i__24339__auto___42276 < len__24338__auto___42275)){
args42272.push((arguments[i__24339__auto___42276]));

var G__42277 = (i__24339__auto___42276 + (1));
i__24339__auto___42276 = G__42277;
continue;
} else {
}
break;
}

var G__42274 = args42272.length;
switch (G__42274) {
case 2:
return carr.move.accel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.accel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42272.length)].join('')));

}
});

carr.move.accel.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,speed){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"target","target",253001721)], null),speed));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"propeller","propeller",-1462065491),carr.move.set_speed,new cljs.core.Keyword(null,"speed","speed",1257663751),calc.dynamic.step_closer);
});

carr.move.accel.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,speed,acl){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),acl));

return carr.move.accel.call(null,carr__$1,speed);
});

carr.move.accel.cljs$lang$maxFixedArity = 3;

carr.move.elevate = (function carr$move$elevate(var_args){
var args42279 = [];
var len__24338__auto___42282 = arguments.length;
var i__24339__auto___42283 = (0);
while(true){
if((i__24339__auto___42283 < len__24338__auto___42282)){
args42279.push((arguments[i__24339__auto___42283]));

var G__42284 = (i__24339__auto___42283 + (1));
i__24339__auto___42283 = G__42284;
continue;
} else {
}
break;
}

var G__42281 = args42279.length;
switch (G__42281) {
case 2:
return carr.move.elevate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.elevate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42279.length)].join('')));

}
});

carr.move.elevate.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,altitude){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"target","target",253001721)], null),altitude));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"elevator","elevator",-1729324395),carr.move.set_altitude,new cljs.core.Keyword(null,"altitude","altitude",463588637),calc.dynamic.step_closer);
});

carr.move.elevate.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,altitude,accel){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));

return carr.move.elevate.call(null,carr__$1,altitude);
});

carr.move.elevate.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=move.js.map