// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__56651,handler){
var map__56652 = p__56651;
var map__56652__$1 = ((((!((map__56652 == null)))?((((map__56652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56652):map__56652);
var uri = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__56652__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__56652,map__56652__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__56650_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__56650_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__56652,map__56652__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___56664 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___56664)){
var response_type_56665 = temp__4657__auto___56664;
this$__$1.responseType = cljs.core.name.call(null,response_type_56665);
} else {
}

var seq__56654_56666 = cljs.core.seq.call(null,headers);
var chunk__56655_56667 = null;
var count__56656_56668 = (0);
var i__56657_56669 = (0);
while(true){
if((i__56657_56669 < count__56656_56668)){
var vec__56658_56670 = cljs.core._nth.call(null,chunk__56655_56667,i__56657_56669);
var k_56671 = cljs.core.nth.call(null,vec__56658_56670,(0),null);
var v_56672 = cljs.core.nth.call(null,vec__56658_56670,(1),null);
this$__$1.setRequestHeader(k_56671,v_56672);

var G__56673 = seq__56654_56666;
var G__56674 = chunk__56655_56667;
var G__56675 = count__56656_56668;
var G__56676 = (i__56657_56669 + (1));
seq__56654_56666 = G__56673;
chunk__56655_56667 = G__56674;
count__56656_56668 = G__56675;
i__56657_56669 = G__56676;
continue;
} else {
var temp__4657__auto___56677 = cljs.core.seq.call(null,seq__56654_56666);
if(temp__4657__auto___56677){
var seq__56654_56678__$1 = temp__4657__auto___56677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56654_56678__$1)){
var c__47945__auto___56679 = cljs.core.chunk_first.call(null,seq__56654_56678__$1);
var G__56680 = cljs.core.chunk_rest.call(null,seq__56654_56678__$1);
var G__56681 = c__47945__auto___56679;
var G__56682 = cljs.core.count.call(null,c__47945__auto___56679);
var G__56683 = (0);
seq__56654_56666 = G__56680;
chunk__56655_56667 = G__56681;
count__56656_56668 = G__56682;
i__56657_56669 = G__56683;
continue;
} else {
var vec__56661_56684 = cljs.core.first.call(null,seq__56654_56678__$1);
var k_56685 = cljs.core.nth.call(null,vec__56661_56684,(0),null);
var v_56686 = cljs.core.nth.call(null,vec__56661_56684,(1),null);
this$__$1.setRequestHeader(k_56685,v_56686);

var G__56687 = cljs.core.next.call(null,seq__56654_56678__$1);
var G__56688 = null;
var G__56689 = (0);
var G__56690 = (0);
seq__56654_56666 = G__56687;
chunk__56655_56667 = G__56688;
count__56656_56668 = G__56689;
i__56657_56669 = G__56690;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__47131__auto__ = body;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map