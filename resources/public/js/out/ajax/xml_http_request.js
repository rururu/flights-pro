// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18686,handler){
var map__18687 = p__18686;
var map__18687__$1 = ((((!((map__18687 == null)))?((((map__18687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18687):map__18687);
var uri = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18687__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18687,map__18687__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18685_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18685_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18687,map__18687__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___18699 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___18699)){
var response_type_18700 = temp__4657__auto___18699;
this$__$1.responseType = cljs.core.name.call(null,response_type_18700);
} else {
}

var seq__18689_18701 = cljs.core.seq.call(null,headers);
var chunk__18690_18702 = null;
var count__18691_18703 = (0);
var i__18692_18704 = (0);
while(true){
if((i__18692_18704 < count__18691_18703)){
var vec__18693_18705 = cljs.core._nth.call(null,chunk__18690_18702,i__18692_18704);
var k_18706 = cljs.core.nth.call(null,vec__18693_18705,(0),null);
var v_18707 = cljs.core.nth.call(null,vec__18693_18705,(1),null);
this$__$1.setRequestHeader(k_18706,v_18707);

var G__18708 = seq__18689_18701;
var G__18709 = chunk__18690_18702;
var G__18710 = count__18691_18703;
var G__18711 = (i__18692_18704 + (1));
seq__18689_18701 = G__18708;
chunk__18690_18702 = G__18709;
count__18691_18703 = G__18710;
i__18692_18704 = G__18711;
continue;
} else {
var temp__4657__auto___18712 = cljs.core.seq.call(null,seq__18689_18701);
if(temp__4657__auto___18712){
var seq__18689_18713__$1 = temp__4657__auto___18712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18689_18713__$1)){
var c__9637__auto___18714 = cljs.core.chunk_first.call(null,seq__18689_18713__$1);
var G__18715 = cljs.core.chunk_rest.call(null,seq__18689_18713__$1);
var G__18716 = c__9637__auto___18714;
var G__18717 = cljs.core.count.call(null,c__9637__auto___18714);
var G__18718 = (0);
seq__18689_18701 = G__18715;
chunk__18690_18702 = G__18716;
count__18691_18703 = G__18717;
i__18692_18704 = G__18718;
continue;
} else {
var vec__18696_18719 = cljs.core.first.call(null,seq__18689_18713__$1);
var k_18720 = cljs.core.nth.call(null,vec__18696_18719,(0),null);
var v_18721 = cljs.core.nth.call(null,vec__18696_18719,(1),null);
this$__$1.setRequestHeader(k_18720,v_18721);

var G__18722 = cljs.core.next.call(null,seq__18689_18713__$1);
var G__18723 = null;
var G__18724 = (0);
var G__18725 = (0);
seq__18689_18701 = G__18722;
chunk__18690_18702 = G__18723;
count__18691_18703 = G__18724;
i__18692_18704 = G__18725;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8823__auto__ = body;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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