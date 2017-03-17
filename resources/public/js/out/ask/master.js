// Compiled by ClojureScript 1.9.293 {}
goog.provide('ask.master');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('chart.controls');
ask.master.HOST = "http://localhost:";
ask.master.PORT = (4444);
ask.master.URL = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"base","base",185279322),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/")].join(''),new cljs.core.Keyword(null,"chart","chart",1173225425),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/chart/")].join(''),new cljs.core.Keyword(null,"directives","directives",-2003276356),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/directives/")].join(''),new cljs.core.Keyword(null,"instructions","instructions",1724333802),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/instructions/")].join(''),new cljs.core.Keyword(null,"command","command",-894540724),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/command/")].join(''),new cljs.core.Keyword(null,"question","question",-1411720117),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/question/")].join(''),new cljs.core.Keyword(null,"answer","answer",-742633163),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/answer/")].join(''),new cljs.core.Keyword(null,"manual-data","manual-data",1249538213),[cljs.core.str(ask.master.HOST),cljs.core.str(ask.master.PORT),cljs.core.str("/manual-data/")].join('')], null);
ask.master.error_handler = (function ask$master$error_handler(response){
var map__40762 = response;
var map__40762__$1 = ((((!((map__40762 == null)))?((((map__40762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40762):map__40762);
var status = cljs.core.get.call(null,map__40762__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__40762__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ask.master.by_id = (function ask$master$by_id(id){
return document.getElementById(id);
});
ask.master.set_html_BANG_ = (function ask$master$set_html_BANG_(id,msg){
return ask.master.by_id.call(null,id).innerHTML = msg;
});
ask.master.options = (function ask$master$options(lst,typ){
var pred__40775 = cljs.core._EQ_;
var expr__40776 = typ;
if(cljs.core.truth_(pred__40775.call(null,new cljs.core.Keyword(null,"itself","itself",1264932322),expr__40776))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__24271__auto__ = ((function (pred__40775,expr__40776){
return (function ask$master$options_$_iter__40778(s__40779){
return (new cljs.core.LazySeq(null,((function (pred__40775,expr__40776){
return (function (){
var s__40779__$1 = s__40779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40779__$1);
if(temp__4657__auto__){
var s__40779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40779__$2)){
var c__24269__auto__ = cljs.core.chunk_first.call(null,s__40779__$2);
var size__24270__auto__ = cljs.core.count.call(null,c__24269__auto__);
var b__40781 = cljs.core.chunk_buffer.call(null,size__24270__auto__);
if((function (){var i__40780 = (0);
while(true){
if((i__40780 < size__24270__auto__)){
var e = cljs.core._nth.call(null,c__24269__auto__,i__40780);
cljs.core.chunk_append.call(null,b__40781,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__40786 = (i__40780 + (1));
i__40780 = G__40786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40781),ask$master$options_$_iter__40778.call(null,cljs.core.chunk_rest.call(null,s__40779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40781),null);
}
} else {
var e = cljs.core.first.call(null,s__40779__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),ask$master$options_$_iter__40778.call(null,cljs.core.rest.call(null,s__40779__$2)));
}
} else {
return null;
}
break;
}
});})(pred__40775,expr__40776))
,null,null));
});})(pred__40775,expr__40776))
;
return iter__24271__auto__.call(null,lst);
})());
} else {
if(cljs.core.truth_(pred__40775.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__40776))){
return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__24271__auto__ = ((function (pred__40775,expr__40776){
return (function ask$master$options_$_iter__40782(s__40783){
return (new cljs.core.LazySeq(null,((function (pred__40775,expr__40776){
return (function (){
var s__40783__$1 = s__40783;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40783__$1);
if(temp__4657__auto__){
var s__40783__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40783__$2)){
var c__24269__auto__ = cljs.core.chunk_first.call(null,s__40783__$2);
var size__24270__auto__ = cljs.core.count.call(null,c__24269__auto__);
var b__40785 = cljs.core.chunk_buffer.call(null,size__24270__auto__);
if((function (){var i__40784 = (0);
while(true){
if((i__40784 < size__24270__auto__)){
var i = cljs.core._nth.call(null,c__24269__auto__,i__40784);
cljs.core.chunk_append.call(null,b__40785,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''));

var G__40787 = (i__40784 + (1));
i__40784 = G__40787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40785),ask$master$options_$_iter__40782.call(null,cljs.core.chunk_rest.call(null,s__40783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40785),null);
}
} else {
var i = cljs.core.first.call(null,s__40783__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(i),cljs.core.str("'>"),cljs.core.str(cljs.core.nth.call(null,lst,i)),cljs.core.str("</option>")].join(''),ask$master$options_$_iter__40782.call(null,cljs.core.rest.call(null,s__40783__$2)));
}
} else {
return null;
}
break;
}
});})(pred__40775,expr__40776))
,null,null));
});})(pred__40775,expr__40776))
;
return iter__24271__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lst)));
})());
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40776)].join('')));
}
}
});
ask.master.input = (function ask$master$input(element,k,ns,header,wid){
var inp = [cljs.core.str("<input type='text' onchange='javascript:"),cljs.core.str(ns),cljs.core.str(".handler"),cljs.core.str(k),cljs.core.str("(this.value)'\n\tstyle='width:"),cljs.core.str(wid),cljs.core.str("px' \n\tvalue='"),cljs.core.str(header),cljs.core.str("'>")].join('');
return ask.master.set_html_BANG_.call(null,[cljs.core.str(element),cljs.core.str(k)].join(''),inp);
});
ask.master.selector = (function ask$master$selector(element,k,ns,header,lst,typ,wid){
var sel = [cljs.core.str("<select onchange='javascript:"),cljs.core.str(ns),cljs.core.str(".handler"),cljs.core.str(k),cljs.core.str("(this.value)' style='width:"),cljs.core.str(wid),cljs.core.str("px'>"),cljs.core.str("<option value='-1'>"),cljs.core.str(header),cljs.core.str("</option>"),cljs.core.str(ask.master.options.call(null,lst,typ)),cljs.core.str("</select>")].join('');
return ask.master.set_html_BANG_.call(null,[cljs.core.str(element),cljs.core.str(k)].join(''),sel);
});
ask.master.ask_server = (function ask$master$ask_server(params){
return ajax.core.GET.call(null,new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(ask.master.URL),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),ask.master.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387)], null));
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

return chart.controls.show_chart_controls.call(null);
});

//# sourceMappingURL=master.js.map