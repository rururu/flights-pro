// Compiled by ClojureScript 1.9.521 {}
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
carr.move.spherical_azimuth_js = (function carr$move$spherical_azimuth_js(phi1,lambda0,phi,lambda){
var ldiff = (lambda - lambda0);
var cosphi = Math.cos(phi);
return Math.atan2((cosphi * Math.sin(ldiff)),((Math.cos(phi1) * Math.sin(phi)) - ((Math.sin(phi1) * cosphi) * Math.cos(ldiff))));
});
carr.move.bear_deg_js = (function carr$move$bear_deg_js(p__16474,p__16475){
var vec__16482 = p__16474;
var la1 = cljs.core.nth.call(null,vec__16482,(0),null);
var lo1 = cljs.core.nth.call(null,vec__16482,(1),null);
var vec__16485 = p__16475;
var la2 = cljs.core.nth.call(null,vec__16485,(0),null);
var lo2 = cljs.core.nth.call(null,vec__16485,(1),null);
var fi1 = (la1 * carr.move.PID180);
var ld1 = (lo1 * carr.move.PID180);
var fi2 = (la2 * carr.move.PID180);
var ld2 = (lo2 * carr.move.PID180);
var rad = carr.move.spherical_azimuth_js.call(null,fi1,ld1,fi2,ld2);
var deg = (rad / carr.move.PID180);
if((deg < (0))){
return (deg + 360.0);
} else {
if((deg > 360.0)){
return (deg - 360.0);
} else {
return deg;

}
}
});
carr.move.set_turn_point = (function carr$move$set_turn_point(var_args){
var args16488 = [];
var len__11105__auto___16495 = arguments.length;
var i__11106__auto___16496 = (0);
while(true){
if((i__11106__auto___16496 < len__11105__auto___16495)){
args16488.push((arguments[i__11106__auto___16496]));

var G__16497 = (i__11106__auto___16496 + (1));
i__11106__auto___16496 = G__16497;
continue;
} else {
}
break;
}

var G__16490 = args16488.length;
switch (G__16490) {
case 1:
return carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16488.length)].join('')));

}
});

carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$1 = (function (carr__$1){
var car = cljs.core.deref.call(null,carr__$1);
return carr.move.set_turn_point.call(null,carr__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(car),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(car));
});

carr.move.set_turn_point.cljs$core$IFn$_invoke$arity$4 = (function (carr__$1,p__16491,crs,spd){
var vec__16492 = p__16491;
var lat = cljs.core.nth.call(null,vec__16492,(0),null);
var lon = cljs.core.nth.call(null,vec__16492,(1),null);
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
var vec__16502 = carr.move.spherical_between_js.call(null,new cljs.core.Keyword(null,"phi","phi",-1526798304).cljs$core$IFn$_invoke$arity$1(tur),new cljs.core.Keyword(null,"lam","lam",1907357070).cljs$core$IFn$_invoke$arity$1(tur),way,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(tur));
var phi = cljs.core.nth.call(null,vec__16502,(0),null);
var lam = cljs.core.nth.call(null,vec__16502,(1),null);
return cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi / carr.move.PID180),(lam / carr.move.PID180)], null),new cljs.core.Keyword(null,"turn-point","turn-point",1337942146),cljs.core.assoc.call(null,tur,new cljs.core.Keyword(null,"clk","clk",564834871),elt)));
});
carr.move.turn = (function carr$move$turn(var_args){
var args16505 = [];
var len__11105__auto___16508 = arguments.length;
var i__11106__auto___16509 = (0);
while(true){
if((i__11106__auto___16509 < len__11105__auto___16508)){
args16505.push((arguments[i__11106__auto___16509]));

var G__16510 = (i__11106__auto___16509 + (1));
i__11106__auto___16509 = G__16510;
continue;
} else {
}
break;
}

var G__16507 = args16505.length;
switch (G__16507) {
case 2:
return carr.move.turn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.turn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return carr.move.turn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16505.length)].join('')));

}
});

carr.move.turn.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,course){
return carr.move.turn.call(null,carr__$1,course,null);
});

carr.move.turn.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,course,final_fn){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"target","target",253001721)], null),course));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"course","course",1455432948),carr.move.set_course,calc.dynamic.course_closer,final_fn);
});

carr.move.turn.cljs$core$IFn$_invoke$arity$4 = (function (carr__$1,course,accel,final_fn){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rudder","rudder",1071257290),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));

return carr.move.turn.call(null,carr__$1,course,final_fn);
});

carr.move.turn.cljs$lang$maxFixedArity = 4;

carr.move.accel = (function carr$move$accel(var_args){
var args16512 = [];
var len__11105__auto___16515 = arguments.length;
var i__11106__auto___16516 = (0);
while(true){
if((i__11106__auto___16516 < len__11105__auto___16515)){
args16512.push((arguments[i__11106__auto___16516]));

var G__16517 = (i__11106__auto___16516 + (1));
i__11106__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var G__16514 = args16512.length;
switch (G__16514) {
case 2:
return carr.move.accel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.accel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16512.length)].join('')));

}
});

carr.move.accel.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,speed){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"target","target",253001721)], null),speed));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"speed","speed",1257663751),carr.move.set_speed,calc.dynamic.step_closer,null);
});

carr.move.accel.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,speed,acl){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"propeller","propeller",-1462065491),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),acl));

return carr.move.accel.call(null,carr__$1,speed);
});

carr.move.accel.cljs$lang$maxFixedArity = 3;

carr.move.elevate = (function carr$move$elevate(var_args){
var args16519 = [];
var len__11105__auto___16522 = arguments.length;
var i__11106__auto___16523 = (0);
while(true){
if((i__11106__auto___16523 < len__11105__auto___16522)){
args16519.push((arguments[i__11106__auto___16523]));

var G__16524 = (i__11106__auto___16523 + (1));
i__11106__auto___16523 = G__16524;
continue;
} else {
}
break;
}

var G__16521 = args16519.length;
switch (G__16521) {
case 2:
return carr.move.elevate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return carr.move.elevate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16519.length)].join('')));

}
});

carr.move.elevate.cljs$core$IFn$_invoke$arity$2 = (function (carr__$1,altitude){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"target","target",253001721)], null),altitude));

return calc.dynamic.equalize.call(null,carr__$1,new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"altitude","altitude",463588637),carr.move.set_altitude,calc.dynamic.step_closer,null);
});

carr.move.elevate.cljs$core$IFn$_invoke$arity$3 = (function (carr__$1,altitude,accel){
cljs.core._vreset_BANG_.call(null,carr__$1,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elevator","elevator",-1729324395),new cljs.core.Keyword(null,"accel","accel",-2118422974)], null),accel));

return carr.move.elevate.call(null,carr__$1,altitude);
});

carr.move.elevate.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=move.js.map