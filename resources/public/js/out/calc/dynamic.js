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
calc.dynamic.abs = (function calc$dynamic$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
calc.dynamic.linint = (function calc$dynamic$linint(x,p__38814,p__38815){
var vec__38822 = p__38814;
var x1 = cljs.core.nth.call(null,vec__38822,(0),null);
var y1 = cljs.core.nth.call(null,vec__38822,(1),null);
var vec__38825 = p__38815;
var x2 = cljs.core.nth.call(null,vec__38825,(0),null);
var y2 = cljs.core.nth.call(null,vec__38825,(1),null);
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
calc.dynamic.tabfun = (function calc$dynamic$tabfun(x,table){
var vec__38832 = cljs.core.split_with.call(null,(function (p1__38828_SHARP_){
return (cljs.core.first.call(null,p1__38828_SHARP_) < x);
}),table);
var lo = cljs.core.nth.call(null,vec__38832,(0),null);
var hi = cljs.core.nth.call(null,vec__38832,(1),null);
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
return calc.dynamic.tabfun.call(null,y,cljs.core.map.call(null,(function (p1__38835_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.second.call(null,p1__38835_SHARP_),cljs.core.first.call(null,p1__38835_SHARP_)],null));
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
