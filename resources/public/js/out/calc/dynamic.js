// Compiled by ClojureScript 1.9.293 {}
goog.provide('calc.dynamic');
goog.require('cljs.core');
goog.require('csasync.proc');
goog.require('calc.core');
goog.require('calc.geo');
calc.dynamic.step_closer = (function calc$dynamic$step_closer(from,to,step){
if((from < to)){
return (from + step);
} else {
if((from > to)){
return (from - step);
} else {
return to;

}
}
});
calc.dynamic.course_closer = (function calc$dynamic$course_closer(from,to,step){
var dif = (to - from);
if((dif > (0))){
if((dif <= (180))){
return (from + step);
} else {
return calc.geo.norm_crs.call(null,(from - step));
}
} else {
if((dif < (0))){
if((dif >= (-180))){
return (from - step);
} else {
return calc.geo.norm_crs.call(null,(from + step));
}
} else {
return to;

}
}
});
calc.dynamic.equalize = (function calc$dynamic$equalize(carr,gear,param_fn,param,closer){
var proc_fn = (function calc$dynamic$equalize_$_proc_fn(cr){
var c = cljs.core.deref.call(null,cr);
var g = cljs.core.get.call(null,c,gear);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(g);
var step = (new cljs.core.Keyword(null,"accel","accel",-2118422974).cljs$core$IFn$_invoke$arity$1(g) * new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(g));
if(cljs.core.truth_(calc.core.approx_EQ_.call(null,param.call(null,c),target,step))){
param_fn.call(null,cr,target);

return false;
} else {
param_fn.call(null,cr,closer.call(null,param.call(null,c),target,step));

return true;
}
});
cljs.core._vreset_BANG_.call(null,carr,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear,new cljs.core.Keyword(null,"eqz-status","eqz-status",-1614399120)], null),cljs.core.volatile_BANG_.call(null,"STOP")));

var g = cljs.core.get.call(null,cljs.core.deref.call(null,carr),gear);
return csasync.proc.start_process.call(null,new cljs.core.Keyword(null,"eqz-status","eqz-status",-1614399120).cljs$core$IFn$_invoke$arity$1(g),((function (g){
return (function (){
return proc_fn.call(null,carr);
});})(g))
,new cljs.core.Keyword(null,"time-out","time-out",-125288146).cljs$core$IFn$_invoke$arity$1(g));
});
calc.dynamic.check_diff_and_do = (function calc$dynamic$check_diff_and_do(carr,path1,path2,limit,tio_pth,final_fn){
var proc_fn = (function calc$dynamic$check_diff_and_do_$_proc_fn(cr){
var c = cljs.core.deref.call(null,cr);
if((calc.core.abs.call(null,(cljs.core.get_in.call(null,c,path1) - cljs.core.get_in.call(null,c,path2))) <= limit)){
final_fn.call(null);

return false;
} else {
return true;
}
});
cljs.core._vreset_BANG_.call(null,carr,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr),new cljs.core.Keyword(null,"cdad-status","cdad-status",964701852),cljs.core.volatile_BANG_.call(null,"STOP")));

return csasync.proc.start_process.call(null,new cljs.core.Keyword(null,"cdad-status","cdad-status",964701852).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr)),(function (){
return proc_fn.call(null,carr);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,carr),tio_pth));
});
calc.dynamic.bank = (function calc$dynamic$bank(old_crs,new_crs,p__23678){
var vec__23682 = p__23678;
var right_bank = cljs.core.nth.call(null,vec__23682,(0),null);
var small_arc = cljs.core.nth.call(null,vec__23682,(1),null);
var big_arc = cljs.core.nth.call(null,vec__23682,(2),null);
var factor = cljs.core.nth.call(null,vec__23682,(3),null);
var turn_right_QMARK_ = ((function (vec__23682,right_bank,small_arc,big_arc,factor){
return (function calc$dynamic$bank_$_turn_right_QMARK_(from,to){
var dif = (to - from);
if((dif > (0))){
return (dif <= (180));
} else {
if((dif < (0))){
return (dif < (-180));
} else {
return null;
}
}
});})(vec__23682,right_bank,small_arc,big_arc,factor))
;
var arc = calc.core.abs.call(null,(old_crs - new_crs));
var arc__$1 = (((arc > (180)))?((360) - arc):arc);
var bnk = (((arc__$1 < small_arc))?((right_bank / factor) | (0)):(((arc__$1 > big_arc))?(right_bank * factor):right_bank
));
if(cljs.core.truth_(turn_right_QMARK_.call(null,old_crs,new_crs))){
return bnk;
} else {
return (- bnk);
}
});

//# sourceMappingURL=dynamic.js.map