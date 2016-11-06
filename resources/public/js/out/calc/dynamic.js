// Compiled by ClojureScript 1.9.293 {}
goog.provide('calc.dynamic');
goog.require('cljs.core');
goog.require('csasync.proc');
calc.dynamic.abs = (function calc$dynamic$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
calc.dynamic.approx_EQ_ = (function calc$dynamic$approx_EQ_(x,y,eps){
if((x > y)){
return ((x - y) < eps);
} else {
if((x < y)){
return ((y - x) < eps);
} else {
return true;

}
}
});
calc.dynamic.linint = (function calc$dynamic$linint(x,p__21958,p__21959){
var vec__21966 = p__21958;
var x1 = cljs.core.nth.call(null,vec__21966,(0),null);
var y1 = cljs.core.nth.call(null,vec__21966,(1),null);
var vec__21969 = p__21959;
var x2 = cljs.core.nth.call(null,vec__21969,(0),null);
var y2 = cljs.core.nth.call(null,vec__21969,(1),null);
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
calc.dynamic.tabfun = (function calc$dynamic$tabfun(x,table){
var vec__21976 = cljs.core.split_with.call(null,(function (p1__21972_SHARP_){
return (cljs.core.first.call(null,p1__21972_SHARP_) < x);
}),table);
var lo = cljs.core.nth.call(null,vec__21976,(0),null);
var hi = cljs.core.nth.call(null,vec__21976,(1),null);
if(cljs.core.seq.call(null,lo)){
if(cljs.core.seq.call(null,hi)){
return calc.dynamic.linint.call(null,x,cljs.core.last.call(null,lo),cljs.core.first.call(null,hi));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"UB","UB",-1996735085),cljs.core.second.call(null,cljs.core.last.call(null,table))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LB","LB",-1870064083),cljs.core.second.call(null,cljs.core.first.call(null,table))], null);
}
});
calc.dynamic.i_mono_tabfun = (function calc$dynamic$i_mono_tabfun(y,table){
return calc.dynamic.tabfun.call(null,y,cljs.core.map.call(null,(function (p1__21979_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.second.call(null,p1__21979_SHARP_),cljs.core.first.call(null,p1__21979_SHARP_)],null));
}),table));
});
calc.dynamic.smooth_tabfun = (function calc$dynamic$smooth_tabfun(x,table){
var res = calc.dynamic.tabfun.call(null,x,table);
if(cljs.core.vector_QMARK_.call(null,res)){
return cljs.core.second.call(null,res);
} else {
return res;
}
});
calc.dynamic.norm_crs = (function calc$dynamic$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
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
return calc.dynamic.norm_crs.call(null,(from - step));
}
} else {
if((dif < (0))){
if((dif >= (-180))){
return (from - step);
} else {
return calc.dynamic.norm_crs.call(null,(from + step));
}
} else {
return to;

}
}
});
calc.dynamic.equalize = (function calc$dynamic$equalize(carr,gear,param,closer,temp){
var proc_fn = (function calc$dynamic$equalize_$_proc_fn(cr){
var c = cljs.core.deref.call(null,cr);
var g = cljs.core.get.call(null,c,gear);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(g);
var step = (temp * new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(g));
if(cljs.core.truth_(calc.dynamic.approx_EQ_.call(null,param.call(null,c),target,step))){
cljs.core._vreset_BANG_.call(null,cr,cljs.core.assoc.call(null,cljs.core._deref.call(null,cr),param,target));

return false;
} else {
cljs.core._vreset_BANG_.call(null,cr,cljs.core.assoc.call(null,cljs.core._deref.call(null,cr),param,closer.call(null,param.call(null,c),target,step)));

return true;
}
});
cljs.core._vreset_BANG_.call(null,carr,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,carr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gear,new cljs.core.Keyword(null,"eqz-status","eqz-status",-1614399120)], null),cljs.core.volatile_BANG_.call(null,"STOP")));

var g = cljs.core.get.call(null,cljs.core.deref.call(null,carr),gear);
return csasync.proc.start_process.call(null,new cljs.core.Keyword(null,"eqz-status","eqz-status",-1614399120).cljs$core$IFn$_invoke$arity$1(g),proc_fn,carr,new cljs.core.Keyword(null,"time-out","time-out",-125288146).cljs$core$IFn$_invoke$arity$1(g));
});
calc.dynamic.check_diff_and_do = (function calc$dynamic$check_diff_and_do(carr,path1,path2,limit,tio_pth,final_fn){
var proc_fn = (function calc$dynamic$check_diff_and_do_$_proc_fn(cr){
var c = cljs.core.deref.call(null,cr);
if((calc.dynamic.abs.call(null,(cljs.core.get_in.call(null,c,path1) - cljs.core.get_in.call(null,c,path2))) < limit)){
final_fn.call(null);

return false;
} else {
return true;
}
});
cljs.core._vreset_BANG_.call(null,carr,cljs.core.assoc.call(null,cljs.core._deref.call(null,carr),new cljs.core.Keyword(null,"cdad-status","cdad-status",964701852),cljs.core.volatile_BANG_.call(null,"STOP")));

return csasync.proc.start_process.call(null,new cljs.core.Keyword(null,"cdad-status","cdad-status",964701852).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,carr)),proc_fn,carr,cljs.core.get_in.call(null,cljs.core.deref.call(null,carr),tio_pth));
});
calc.dynamic.turn_right_QMARK_ = (function calc$dynamic$turn_right_QMARK_(from,to){
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
});

//# sourceMappingURL=dynamic.js.map