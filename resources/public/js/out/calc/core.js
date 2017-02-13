// Compiled by ClojureScript 1.9.293 {}
goog.provide('calc.core');
goog.require('cljs.core');
calc.core.abs = (function calc$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
calc.core.approx_EQ_ = (function calc$core$approx_EQ_(x,y,eps){
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
calc.core.linint = (function calc$core$linint(x,p__20832,p__20833){
var vec__20840 = p__20832;
var x1 = cljs.core.nth.call(null,vec__20840,(0),null);
var y1 = cljs.core.nth.call(null,vec__20840,(1),null);
var vec__20843 = p__20833;
var x2 = cljs.core.nth.call(null,vec__20843,(0),null);
var y2 = cljs.core.nth.call(null,vec__20843,(1),null);
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
calc.core.tabfun = (function calc$core$tabfun(x,table){
var vec__20850 = cljs.core.split_with.call(null,(function (p1__20846_SHARP_){
return (cljs.core.first.call(null,p1__20846_SHARP_) < x);
}),table);
var lo = cljs.core.nth.call(null,vec__20850,(0),null);
var hi = cljs.core.nth.call(null,vec__20850,(1),null);
if(cljs.core.seq.call(null,lo)){
if(cljs.core.seq.call(null,hi)){
return calc.core.linint.call(null,x,cljs.core.last.call(null,lo),cljs.core.first.call(null,hi));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"UB","UB",-1996735085),cljs.core.second.call(null,cljs.core.last.call(null,table))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LB","LB",-1870064083),cljs.core.second.call(null,cljs.core.first.call(null,table))], null);
}
});
calc.core.i_mono_tabfun = (function calc$core$i_mono_tabfun(y,table){
return calc.core.tabfun.call(null,y,cljs.core.map.call(null,(function (p1__20853_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.second.call(null,p1__20853_SHARP_),cljs.core.first.call(null,p1__20853_SHARP_)],null));
}),table));
});
calc.core.smooth_tabfun = (function calc$core$smooth_tabfun(x,table){
var res = calc.core.tabfun.call(null,x,table);
if(cljs.core.vector_QMARK_.call(null,res)){
return cljs.core.second.call(null,res);
} else {
return res;
}
});

//# sourceMappingURL=core.js.map