// Compiled by ClojureScript 1.9.521 {}
goog.provide('ask.master');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('chart.controls');
ask.master.HOST = "http://localhost:";
ask.master.PORT = (4444);
ask.master.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.HOST),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.PORT),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/manual-data/")].join('')], null);
ask.master.error_handler = (function ask$master$error_handler(response){
var map__16595 = response;
var map__16595__$1 = ((((!((map__16595 == null)))?((((map__16595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16595):map__16595);
var status = cljs.core.get.call(null,map__16595__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16595__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("AJAX ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
ask.master.by_id = (function ask$master$by_id(id){
return document.getElementById(id);
});
ask.master.set_html_BANG_ = (function ask$master$set_html_BANG_(id,msg){
return ask.master.by_id.call(null,id).innerHTML = msg;
});
ask.master.options = (function ask$master$options(lst,typ){
var pred__16608 = cljs.core._EQ_;
var expr__16609 = typ;
if(cljs.core.truth_(pred__16608.call(null,new cljs.core.Keyword(null,"itself","itself",1264932322),expr__16609))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__10780__auto__ = ((function (pred__16608,expr__16609){
return (function ask$master$options_$_iter__16611(s__16612){
return (new cljs.core.LazySeq(null,((function (pred__16608,expr__16609){
return (function (){
var s__16612__$1 = s__16612;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16612__$1);
if(temp__4657__auto__){
var s__16612__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16612__$2)){
var c__10778__auto__ = cljs.core.chunk_first.call(null,s__16612__$2);
var size__10779__auto__ = cljs.core.count.call(null,c__10778__auto__);
var b__16614 = cljs.core.chunk_buffer.call(null,size__10779__auto__);
if((function (){var i__16613 = (0);
while(true){
if((i__16613 < size__10779__auto__)){
var e = cljs.core._nth.call(null,c__10778__auto__,i__16613);
cljs.core.chunk_append.call(null,b__16614,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__16619 = (i__16613 + (1));
i__16613 = G__16619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16614),ask$master$options_$_iter__16611.call(null,cljs.core.chunk_rest.call(null,s__16612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16614),null);
}
} else {
var e = cljs.core.first.call(null,s__16612__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),ask$master$options_$_iter__16611.call(null,cljs.core.rest.call(null,s__16612__$2)));
}
} else {
return null;
}
break;
}
});})(pred__16608,expr__16609))
,null,null));
});})(pred__16608,expr__16609))
;
return iter__10780__auto__.call(null,lst);
})());
} else {
if(cljs.core.truth_(pred__16608.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__16609))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__10780__auto__ = ((function (pred__16608,expr__16609){
return (function ask$master$options_$_iter__16615(s__16616){
return (new cljs.core.LazySeq(null,((function (pred__16608,expr__16609){
return (function (){
var s__16616__$1 = s__16616;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16616__$1);
if(temp__4657__auto__){
var s__16616__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16616__$2)){
var c__10778__auto__ = cljs.core.chunk_first.call(null,s__16616__$2);
var size__10779__auto__ = cljs.core.count.call(null,c__10778__auto__);
var b__16618 = cljs.core.chunk_buffer.call(null,size__10779__auto__);
if((function (){var i__16617 = (0);
while(true){
if((i__16617 < size__10779__auto__)){
var i = cljs.core._nth.call(null,c__10778__auto__,i__16617);
cljs.core.chunk_append.call(null,b__16618,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,lst,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''));

var G__16620 = (i__16617 + (1));
i__16617 = G__16620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),ask$master$options_$_iter__16615.call(null,cljs.core.chunk_rest.call(null,s__16616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),null);
}
} else {
var i = cljs.core.first.call(null,s__16616__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,lst,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>")].join(''),ask$master$options_$_iter__16615.call(null,cljs.core.rest.call(null,s__16616__$2)));
}
} else {
return null;
}
break;
}
});})(pred__16608,expr__16609))
,null,null));
});})(pred__16608,expr__16609))
;
return iter__10780__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lst)));
})());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16609)].join('')));
}
}
});
ask.master.input = (function ask$master$input(element,k,ns,header,wid){
var inp = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<input type='text' onchange='javascript:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".handler"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(this.value)'\n\tstyle='width:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px' \n\tvalue='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>")].join('');
return ask.master.set_html_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(element),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),inp);
});
ask.master.selector = (function ask$master$selector(element,k,ns,header,lst,typ,wid){
var sel = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<select onchange='javascript:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".handler"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(this.value)' style='width:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wid),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<option value='-1'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</option>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ask.master.options.call(null,lst,typ)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</select>")].join('');
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