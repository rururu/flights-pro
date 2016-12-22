// Compiled by ClojureScript 1.9.293 {}
goog.provide('chart.controls');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
chart.controls.format = (function chart$controls$format(var_args){
var args__10097__auto__ = [];
var len__10090__auto___18714 = arguments.length;
var i__10091__auto___18715 = (0);
while(true){
if((i__10091__auto___18715 < len__10090__auto___18714)){
args__10097__auto__.push((arguments[i__10091__auto___18715]));

var G__18716 = (i__10091__auto___18715 + (1));
i__10091__auto___18715 = G__18716;
continue;
} else {
}
break;
}

var argseq__10098__auto__ = ((((1) < args__10097__auto__.length))?(new cljs.core.IndexedSeq(args__10097__auto__.slice((1)),(0),null)):null);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10098__auto__);
});

chart.controls.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

chart.controls.format.cljs$lang$maxFixedArity = (1);

chart.controls.format.cljs$lang$applyTo = (function (seq18712){
var G__18713 = cljs.core.first.call(null,seq18712);
var seq18712__$1 = cljs.core.next.call(null,seq18712);
return chart.controls.format.cljs$core$IFn$_invoke$arity$variadic(G__18713,seq18712__$1);
});

chart.controls.by_id = (function chart$controls$by_id(id){
return document.getElementById(id);
});
chart.controls.set_html_BANG_ = (function chart$controls$set_html_BANG_(id,msg){
return chart.controls.by_id.call(null,id).innerHTML = msg;
});
chart.controls.mouse_move = (function chart$controls$mouse_move(lat,lng){
return chart.controls.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(chart.controls.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(chart.controls.format.call(null,"%.4f",lng))].join(''));
});
chart.controls.show_chart_controls = (function chart$controls$show_chart_controls(){
chart.controls.set_html_BANG_.call(null,"commands-header","<h4>Commands</h4>");

return chart.controls.set_html_BANG_.call(null,"commands","<select onchange='javascript:chart.client.command(this.value)'>\n   <option value='commands'>Commands</option>\n   <option value='watch-visible'>Watch visible area</option>\n   <option value='intersect'>Intersections</option>\n   <option value='move-to'>Move to Airport</option>\n   <option value='schedule'>Schedule Flight</option>\n   <option value='camera'>Camera</option>\n   <option value='manual'>Manual Control</option>\n   <option value='wikipedia'>Wikipedia</option>\n   <option value='clear'>Clear</option>\n   </select>");
});

//# sourceMappingURL=controls.js.map