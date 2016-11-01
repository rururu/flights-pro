// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19584,handler){
var map__19585 = p__19584;
var map__19585__$1 = ((((!((map__19585 == null)))?((((map__19585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19585):map__19585);
var uri = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19585,map__19585__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19583_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__19583_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__19585,map__19585__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___19597 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___19597)){
var response_type_19598 = temp__4657__auto___19597;
this$__$1.responseType = cljs.core.name.call(null,response_type_19598);
} else {
}

var seq__19587_19599 = cljs.core.seq.call(null,headers);
var chunk__19588_19600 = null;
var count__19589_19601 = (0);
var i__19590_19602 = (0);
while(true){
if((i__19590_19602 < count__19589_19601)){
var vec__19591_19603 = cljs.core._nth.call(null,chunk__19588_19600,i__19590_19602);
var k_19604 = cljs.core.nth.call(null,vec__19591_19603,(0),null);
var v_19605 = cljs.core.nth.call(null,vec__19591_19603,(1),null);
this$__$1.setRequestHeader(k_19604,v_19605);

var G__19606 = seq__19587_19599;
var G__19607 = chunk__19588_19600;
var G__19608 = count__19589_19601;
var G__19609 = (i__19590_19602 + (1));
seq__19587_19599 = G__19606;
chunk__19588_19600 = G__19607;
count__19589_19601 = G__19608;
i__19590_19602 = G__19609;
continue;
} else {
var temp__4657__auto___19610 = cljs.core.seq.call(null,seq__19587_19599);
if(temp__4657__auto___19610){
var seq__19587_19611__$1 = temp__4657__auto___19610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19587_19611__$1)){
var c__19213__auto___19612 = cljs.core.chunk_first.call(null,seq__19587_19611__$1);
var G__19613 = cljs.core.chunk_rest.call(null,seq__19587_19611__$1);
var G__19614 = c__19213__auto___19612;
var G__19615 = cljs.core.count.call(null,c__19213__auto___19612);
var G__19616 = (0);
seq__19587_19599 = G__19613;
chunk__19588_19600 = G__19614;
count__19589_19601 = G__19615;
i__19590_19602 = G__19616;
continue;
} else {
var vec__19594_19617 = cljs.core.first.call(null,seq__19587_19611__$1);
var k_19618 = cljs.core.nth.call(null,vec__19594_19617,(0),null);
var v_19619 = cljs.core.nth.call(null,vec__19594_19617,(1),null);
this$__$1.setRequestHeader(k_19618,v_19619);

var G__19620 = cljs.core.next.call(null,seq__19587_19611__$1);
var G__19621 = null;
var G__19622 = (0);
var G__19623 = (0);
seq__19587_19599 = G__19620;
chunk__19588_19600 = G__19621;
count__19589_19601 = G__19622;
i__19590_19602 = G__19623;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18399__auto__ = body;
if(cljs.core.truth_(or__18399__auto__)){
return or__18399__auto__;
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