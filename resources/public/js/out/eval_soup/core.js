// Compiled by ClojureScript 1.9.293 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var args56398 = [];
var len__48239__auto___56402 = arguments.length;
var i__48240__auto___56403 = (0);
while(true){
if((i__48240__auto___56403 < len__48239__auto___56402)){
args56398.push((arguments[i__48240__auto___56403]));

var G__56404 = (i__48240__auto___56403 + (1));
i__48240__auto___56403 = G__56404;
continue;
} else {
}
break;
}

var G__56400 = args56398.length;
switch (G__56400) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56398.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__4655__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__4655__auto__)){
var extension = temp__4655__auto__;
try{return goog.net.XhrIo.send([cljs.core.str(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(extension)].join(''),((function (extension,temp__4655__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__4655__auto__))
);
}catch (e56401){if((e56401 instanceof Error)){
var _ = e56401;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e56401;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,state,current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var forms__$1 = cljs.core.atom.call(null,forms);
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__53568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__53568__auto__,opts,channel,forms__$1,results){
return (function (){
var f__53569__auto__ = (function (){var switch__53456__auto__ = ((function (c__53568__auto__,opts,channel,forms__$1,results){
return (function (state_56559){
var state_val_56560 = (state_56559[(1)]);
if((state_val_56560 === (7))){
var inst_56543 = (state_56559[(2)]);
var inst_56544 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_56559__$1 = (function (){var statearr_56561 = state_56559;
(statearr_56561[(7)] = inst_56543);

(statearr_56561[(8)] = inst_56544);

return statearr_56561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56559__$1,(19),channel);
} else {
if((state_val_56560 === (1))){
var state_56559__$1 = state_56559;
var statearr_56562_56594 = state_56559__$1;
(statearr_56562_56594[(2)] = null);

(statearr_56562_56594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (4))){
var state_56559__$1 = state_56559;
var statearr_56563_56595 = state_56559__$1;
(statearr_56563_56595[(2)] = null);

(statearr_56563_56595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (15))){
var inst_56527 = (state_56559[(2)]);
var state_56559__$1 = state_56559;
var statearr_56564_56596 = state_56559__$1;
(statearr_56564_56596[(2)] = inst_56527);

(statearr_56564_56596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (13))){
var inst_56514 = (state_56559[(9)]);
var inst_56523 = cljs.core.second.call(null,inst_56514);
var inst_56524 = cljs.core.reset_BANG_.call(null,current_ns,inst_56523);
var state_56559__$1 = state_56559;
var statearr_56565_56597 = state_56559__$1;
(statearr_56565_56597[(2)] = inst_56524);

(statearr_56565_56597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (6))){
var inst_56551 = (state_56559[(2)]);
var state_56559__$1 = state_56559;
var statearr_56566_56598 = state_56559__$1;
(statearr_56566_56598[(2)] = inst_56551);

(statearr_56566_56598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (17))){
var inst_56516 = (state_56559[(10)]);
var inst_56514 = (state_56559[(9)]);
var inst_56538 = (function (){var form = inst_56514;
var opts__$1 = inst_56516;
return ((function (form,opts__$1,inst_56516,inst_56514,state_val_56560,c__53568__auto__,opts,channel,forms__$1,results){
return (function (p1__56406_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__56406_SHARP_);
});
;})(form,opts__$1,inst_56516,inst_56514,state_val_56560,c__53568__auto__,opts,channel,forms__$1,results))
})();
var inst_56539 = cljs.js.eval.call(null,state,inst_56514,inst_56516,inst_56538);
var state_56559__$1 = state_56559;
var statearr_56567_56599 = state_56559__$1;
(statearr_56567_56599[(2)] = inst_56539);

(statearr_56567_56599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (3))){
var inst_56553 = (state_56559[(2)]);
var inst_56554 = (function (){return ((function (inst_56553,state_val_56560,c__53568__auto__,opts,channel,forms__$1,results){
return (function (p1__56407_SHARP_){
var or__47131__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__56407_SHARP_);
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56407_SHARP_);
}
});
;})(inst_56553,state_val_56560,c__53568__auto__,opts,channel,forms__$1,results))
})();
var inst_56555 = cljs.core.deref.call(null,results);
var inst_56556 = cljs.core.mapv.call(null,inst_56554,inst_56555);
var inst_56557 = cb.call(null,inst_56556);
var state_56559__$1 = (function (){var statearr_56568 = state_56559;
(statearr_56568[(11)] = inst_56553);

return statearr_56568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56559__$1,inst_56557);
} else {
if((state_val_56560 === (12))){
var inst_56514 = (state_56559[(9)]);
var inst_56530 = (state_56559[(2)]);
var inst_56531 = (inst_56514 instanceof Error);
var state_56559__$1 = (function (){var statearr_56569 = state_56559;
(statearr_56569[(12)] = inst_56530);

return statearr_56569;
})();
if(cljs.core.truth_(inst_56531)){
var statearr_56570_56600 = state_56559__$1;
(statearr_56570_56600[(1)] = (16));

} else {
var statearr_56571_56601 = state_56559__$1;
(statearr_56571_56601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (2))){
var inst_56502 = cljs.core.deref.call(null,forms__$1);
var inst_56503 = cljs.core.seq.call(null,inst_56502);
var state_56559__$1 = state_56559;
if(inst_56503){
var statearr_56572_56602 = state_56559__$1;
(statearr_56572_56602[(1)] = (4));

} else {
var statearr_56573_56603 = state_56559__$1;
(statearr_56573_56603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (19))){
var inst_56546 = (state_56559[(2)]);
var inst_56547 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_56546);
var state_56559__$1 = (function (){var statearr_56574 = state_56559;
(statearr_56574[(13)] = inst_56547);

return statearr_56574;
})();
var statearr_56575_56604 = state_56559__$1;
(statearr_56575_56604[(2)] = null);

(statearr_56575_56604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (11))){
var state_56559__$1 = state_56559;
var statearr_56576_56605 = state_56559__$1;
(statearr_56576_56605[(2)] = null);

(statearr_56576_56605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (9))){
var inst_56514 = (state_56559[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_56559,(8),Error,null,(7));
var inst_56513 = cljs.core.deref.call(null,forms__$1);
var inst_56514__$1 = cljs.core.first.call(null,inst_56513);
var inst_56515 = cljs.core.deref.call(null,current_ns);
var inst_56516 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_56515);
var inst_56517 = cljs.core.list_QMARK_.call(null,inst_56514__$1);
var state_56559__$1 = (function (){var statearr_56577 = state_56559;
(statearr_56577[(10)] = inst_56516);

(statearr_56577[(9)] = inst_56514__$1);

return statearr_56577;
})();
if(inst_56517){
var statearr_56578_56606 = state_56559__$1;
(statearr_56578_56606[(1)] = (10));

} else {
var statearr_56579_56607 = state_56559__$1;
(statearr_56579_56607[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (5))){
var state_56559__$1 = state_56559;
var statearr_56580_56608 = state_56559__$1;
(statearr_56580_56608[(2)] = null);

(statearr_56580_56608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (14))){
var state_56559__$1 = state_56559;
var statearr_56581_56609 = state_56559__$1;
(statearr_56581_56609[(2)] = null);

(statearr_56581_56609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (16))){
var inst_56514 = (state_56559[(9)]);
var inst_56533 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_56534 = [inst_56514];
var inst_56535 = cljs.core.PersistentHashMap.fromArrays(inst_56533,inst_56534);
var inst_56536 = cljs.core.async.put_BANG_.call(null,channel,inst_56535);
var state_56559__$1 = state_56559;
var statearr_56582_56610 = state_56559__$1;
(statearr_56582_56610[(2)] = inst_56536);

(statearr_56582_56610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (10))){
var inst_56514 = (state_56559[(9)]);
var inst_56519 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_56520 = cljs.core.first.call(null,inst_56514);
var inst_56521 = cljs.core._EQ_.call(null,inst_56519,inst_56520);
var state_56559__$1 = state_56559;
if(inst_56521){
var statearr_56583_56611 = state_56559__$1;
(statearr_56583_56611[(1)] = (13));

} else {
var statearr_56584_56612 = state_56559__$1;
(statearr_56584_56612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (18))){
var inst_56541 = (state_56559[(2)]);
var state_56559__$1 = state_56559;
var statearr_56585_56613 = state_56559__$1;
(statearr_56585_56613[(2)] = inst_56541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56560 === (8))){
var inst_56505 = (state_56559[(2)]);
var inst_56506 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_56507 = [inst_56505];
var inst_56508 = cljs.core.PersistentHashMap.fromArrays(inst_56506,inst_56507);
var inst_56509 = cljs.core.async.put_BANG_.call(null,channel,inst_56508);
var state_56559__$1 = state_56559;
var statearr_56586_56614 = state_56559__$1;
(statearr_56586_56614[(2)] = inst_56509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__53568__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__53456__auto__,c__53568__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__53457__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__53457__auto____0 = (function (){
var statearr_56590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56590[(0)] = eval_soup$core$eval_forms_$_state_machine__53457__auto__);

(statearr_56590[(1)] = (1));

return statearr_56590;
});
var eval_soup$core$eval_forms_$_state_machine__53457__auto____1 = (function (state_56559){
while(true){
var ret_value__53458__auto__ = (function (){try{while(true){
var result__53459__auto__ = switch__53456__auto__.call(null,state_56559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__53459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53459__auto__;
}
break;
}
}catch (e56591){if((e56591 instanceof Object)){
var ex__53460__auto__ = e56591;
var statearr_56592_56615 = state_56559;
(statearr_56592_56615[(5)] = ex__53460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__53458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56616 = state_56559;
state_56559 = G__56616;
continue;
} else {
return ret_value__53458__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__53457__auto__ = function(state_56559){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__53457__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__53457__auto____1.call(this,state_56559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__53457__auto____0;
eval_soup$core$eval_forms_$_state_machine__53457__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__53457__auto____1;
return eval_soup$core$eval_forms_$_state_machine__53457__auto__;
})()
;})(switch__53456__auto__,c__53568__auto__,opts,channel,forms__$1,results))
})();
var state__53570__auto__ = (function (){var statearr_56593 = f__53569__auto__.call(null);
(statearr_56593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__53568__auto__);

return statearr_56593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__53570__auto__);
});})(c__53568__auto__,opts,channel,forms__$1,results))
);

return c__53568__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e56618){if((e56618 instanceof Error)){
var _ = e56618;
return null;
} else {
throw e56618;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core._conj.call(null,(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__47914__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__56623(s__56624){
return (new cljs.core.LazySeq(null,(function (){
var s__56624__$1 = s__56624;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__56624__$1);
if(temp__4657__auto__){
var s__56624__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56624__$2)){
var c__47912__auto__ = cljs.core.chunk_first.call(null,s__56624__$2);
var size__47913__auto__ = cljs.core.count.call(null,c__47912__auto__);
var b__56626 = cljs.core.chunk_buffer.call(null,size__47913__auto__);
if((function (){var i__56625 = (0);
while(true){
if((i__56625 < size__47913__auto__)){
var i = cljs.core._nth.call(null,c__47912__auto__,i__56625);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__56626,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__56627 = (i__56625 + (1));
i__56625 = G__56627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56626),eval_soup$core$add_timeouts_if_necessary_$_iter__56623.call(null,cljs.core.chunk_rest.call(null,s__56624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56626),null);
}
} else {
var i = cljs.core.first.call(null,s__56624__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__56623.call(null,cljs.core.rest.call(null,s__56624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47914__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args56628 = [];
var len__48239__auto___56634 = arguments.length;
var i__48240__auto___56635 = (0);
while(true){
if((i__48240__auto___56635 < len__48239__auto___56634)){
args56628.push((arguments[i__48240__auto___56635]));

var G__56636 = (i__48240__auto___56635 + (1));
i__48240__auto___56635 = G__56636;
continue;
} else {
}
break;
}

var G__56630 = args56628.length;
switch (G__56630) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56628.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__56631){
var map__56632 = p__56631;
var map__56632__$1 = ((((!((map__56632 == null)))?((((map__56632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56632):map__56632);
var custom_load = cljs.core.get.call(null,map__56632__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__56632__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__56632,map__56632__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__56632,map__56632__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__56632,map__56632__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__56632,map__56632__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__56632,map__56632__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__56632,map__56632__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map