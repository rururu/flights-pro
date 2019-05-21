// Compiled by ClojureScript 1.10.439 {}
goog.provide('ask.master');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('chart.controls');
ask.master.HOST = "http://localhost:";
ask.master.PORT = (4444);
ask.master.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/"].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/chart/"].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/directives/"].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/instructions/"].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/command/"].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/question/"].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/answer/"].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),"/manual-data/"].join('')], null);
ask.master.error_handler = (function ask$master$error_handler(response){
var map__2195 = response;
var map__2195__$1 = (((((!((map__2195 == null))))?(((((map__2195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2195):map__2195);
var status = cljs.core.get.call(null,map__2195__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__2195__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,["AJAX ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
ask.master.by_id = (function ask$master$by_id(id){
return document.getElementById(id);
});
ask.master.set_html_BANG_ = (function ask$master$set_html_BANG_(id,msg){
return ask.master.by_id.call(null,id).innerHTML = msg;
});
ask.master.options = (function ask$master$options(lst,typ){
var pred__2197 = cljs.core._EQ_;
var expr__2198 = typ;
if(cljs.core.truth_(pred__2197.call(null,new cljs.core.Keyword(null,"itself","itself",1264932322),expr__2198))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4434__auto__ = ((function (pred__2197,expr__2198){
return (function ask$master$options_$_iter__2200(s__2201){
return (new cljs.core.LazySeq(null,((function (pred__2197,expr__2198){
return (function (){
var s__2201__$1 = s__2201;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2201__$1);
if(temp__5720__auto__){
var s__2201__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2201__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__2201__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__2203 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__2202 = (0);
while(true){
if((i__2202 < size__4433__auto__)){
var e = cljs.core._nth.call(null,c__4432__auto__,i__2202);
cljs.core.chunk_append.call(null,b__2203,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"</option>"].join(''));

var G__2208 = (i__2202 + (1));
i__2202 = G__2208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2203),ask$master$options_$_iter__2200.call(null,cljs.core.chunk_rest.call(null,s__2201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2203),null);
}
} else {
var e = cljs.core.first.call(null,s__2201__$2);
return cljs.core.cons.call(null,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),"</option>"].join(''),ask$master$options_$_iter__2200.call(null,cljs.core.rest.call(null,s__2201__$2)));
}
} else {
return null;
}
break;
}
});})(pred__2197,expr__2198))
,null,null));
});})(pred__2197,expr__2198))
;
return iter__4434__auto__.call(null,lst);
})());
} else {
if(cljs.core.truth_(pred__2197.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__2198))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4434__auto__ = ((function (pred__2197,expr__2198){
return (function ask$master$options_$_iter__2204(s__2205){
return (new cljs.core.LazySeq(null,((function (pred__2197,expr__2198){
return (function (){
var s__2205__$1 = s__2205;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2205__$1);
if(temp__5720__auto__){
var s__2205__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2205__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__2205__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__2207 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__2206 = (0);
while(true){
if((i__2206 < size__4433__auto__)){
var i = cljs.core._nth.call(null,c__4432__auto__,i__2206);
cljs.core.chunk_append.call(null,b__2207,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,lst,i)),"</option>"].join(''));

var G__2209 = (i__2206 + (1));
i__2206 = G__2209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2207),ask$master$options_$_iter__2204.call(null,cljs.core.chunk_rest.call(null,s__2205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2207),null);
}
} else {
var i = cljs.core.first.call(null,s__2205__$2);
return cljs.core.cons.call(null,["<option value='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,lst,i)),"</option>"].join(''),ask$master$options_$_iter__2204.call(null,cljs.core.rest.call(null,s__2205__$2)));
}
} else {
return null;
}
break;
}
});})(pred__2197,expr__2198))
,null,null));
});})(pred__2197,expr__2198))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lst)));
})());
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__2198)].join('')));
}
}
});
ask.master.input = (function ask$master$input(element,k,ns,header,wid){
var inp = ["<input type='text' onchange='javascript:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".handler",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"(this.value)'\n\tstyle='width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid),"px' \n\tvalue='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(header),"'>"].join('');
return ask.master.set_html_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(element),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),inp);
});
ask.master.selector = (function ask$master$selector(element,k,ns,header,lst,typ,wid){
var sel = ["<select onchange='javascript:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".handler",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"(this.value)' style='width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid),"px'>","<option value='-1'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(header),"</option>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.options.call(null,lst,typ)),"</select>"].join('');
return ask.master.set_html_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(element),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),sel);
});
ask.master.ask_server = (function ask$master$ask_server(params,handler){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(ask.master.URL),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),ask.master.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387)], null));
});
ask.master.get_answer = (function ask$master$get_answer(handler){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(ask.master.URL),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),ask.master.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387)], null));
});
ask.master.clear_dialog = (function ask$master$clear_dialog(){
ask.master.set_html_BANG_.call(null,"element1","");

ask.master.set_html_BANG_.call(null,"element2","");

ask.master.set_html_BANG_.call(null,"element3","");

ask.master.set_html_BANG_.call(null,"element4","");

ask.master.set_html_BANG_.call(null,"element5","");

ask.master.set_html_BANG_.call(null,"element6","");

ask.master.set_html_BANG_.call(null,"element20","");

ask.master.set_html_BANG_.call(null,"element30","");

ask.master.set_html_BANG_.call(null,"element40","");

return chart.controls.show_chart_controls.call(null);
});

//# sourceMappingURL=master.js.map
