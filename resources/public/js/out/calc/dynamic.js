// Compiled by ClojureScript 1.9.293 {}
goog.provide('calc.dynamic');
goog.require('cljs.core');
goog.require('csasync.proc');
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
calc.dynamic.linint = (function calc$dynamic$linint(x,p__24011,p__24012){
var vec__24019 = p__24011;
var x1 = cljs.core.nth.call(null,vec__24019,(0),null);
var y1 = cljs.core.nth.call(null,vec__24019,(1),null);
var vec__24022 = p__24012;
var x2 = cljs.core.nth.call(null,vec__24022,(0),null);
var y2 = cljs.core.nth.call(null,vec__24022,(1),null);
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
calc.dynamic.tabfun = (function calc$dynamic$tabfun(x,table){
var vec__24029 = cljs.core.split_with.call(null,(function (p1__24025_SHARP_){
return (cljs.core.first.call(null,p1__24025_SHARP_) < x);
}),table);
var lo = cljs.core.nth.call(null,vec__24029,(0),null);
var hi = cljs.core.nth.call(null,vec__24029,(1),null);
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
return calc.dynamic.tabfun.call(null,y,cljs.core.map.call(null,(function (p1__24032_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.second.call(null,p1__24032_SHARP_),cljs.core.first.call(null,p1__24032_SHARP_)],null));
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
var dif = (to - from);
if((dif > (0))){
return (from + step);
} else {
if((dif < (0))){
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
calc.dynamic.equalize = (function calc$dynamic$equalize(carr,gear,param,closer){
var proc_fn = (function (cr){
var c = cljs.core.deref.call(null,cr);
var g = cljs.core.get.call(null,c,gear);
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(g);
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(g);
var step = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(g);
if(cljs.core.truth_(calc.dynamic.approx_EQ_.call(null,param.call(null,c),target,step))){
cljs.core._vreset_BANG_.call(null,cr,cljs.core.assoc.call(null,cljs.core._deref.call(null,cr),param,target));

return false;
} else {
cljs.core._vreset_BANG_.call(null,cr,cljs.core.assoc.call(null,cljs.core._deref.call(null,cr),param,closer.call(null,param.call(null,c),target,step)));

return true;
}
});
var g = cljs.core.get.call(null,cljs.core.deref.call(null,carr),gear);
return csasync.proc.start_process.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(g),proc_fn,carr,new cljs.core.Keyword(null,"time-out","time-out",-125288146).cljs$core$IFn$_invoke$arity$1(g));
});

//# sourceMappingURL=dynamic.js.map