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
var args18433 = [];
var len__9931__auto___18437 = arguments.length;
var i__9932__auto___18438 = (0);
while(true){
if((i__9932__auto___18438 < len__9931__auto___18437)){
args18433.push((arguments[i__9932__auto___18438]));

var G__18439 = (i__9932__auto___18438 + (1));
i__9932__auto___18438 = G__18439;
continue;
} else {
}
break;
}

var G__18435 = args18433.length;
switch (G__18435) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18433.length)].join('')));

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
}catch (e18436){if((e18436 instanceof Error)){
var _ = e18436;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e18436;

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
var c__15603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15603__auto__,opts,channel,forms__$1,results){
return (function (){
var f__15604__auto__ = (function (){var switch__15491__auto__ = ((function (c__15603__auto__,opts,channel,forms__$1,results){
return (function (state_18594){
var state_val_18595 = (state_18594[(1)]);
if((state_val_18595 === (7))){
var inst_18578 = (state_18594[(2)]);
var inst_18579 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_18594__$1 = (function (){var statearr_18596 = state_18594;
(statearr_18596[(7)] = inst_18579);

(statearr_18596[(8)] = inst_18578);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18594__$1,(19),channel);
} else {
if((state_val_18595 === (1))){
var state_18594__$1 = state_18594;
var statearr_18597_18629 = state_18594__$1;
(statearr_18597_18629[(2)] = null);

(statearr_18597_18629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (4))){
var state_18594__$1 = state_18594;
var statearr_18598_18630 = state_18594__$1;
(statearr_18598_18630[(2)] = null);

(statearr_18598_18630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (15))){
var inst_18562 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18599_18631 = state_18594__$1;
(statearr_18599_18631[(2)] = inst_18562);

(statearr_18599_18631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (13))){
var inst_18549 = (state_18594[(9)]);
var inst_18558 = cljs.core.second.call(null,inst_18549);
var inst_18559 = cljs.core.reset_BANG_.call(null,current_ns,inst_18558);
var state_18594__$1 = state_18594;
var statearr_18600_18632 = state_18594__$1;
(statearr_18600_18632[(2)] = inst_18559);

(statearr_18600_18632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (6))){
var inst_18586 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18601_18633 = state_18594__$1;
(statearr_18601_18633[(2)] = inst_18586);

(statearr_18601_18633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (17))){
var inst_18549 = (state_18594[(9)]);
var inst_18551 = (state_18594[(10)]);
var inst_18573 = (function (){var form = inst_18549;
var opts__$1 = inst_18551;
return ((function (form,opts__$1,inst_18549,inst_18551,state_val_18595,c__15603__auto__,opts,channel,forms__$1,results){
return (function (p1__18441_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__18441_SHARP_);
});
;})(form,opts__$1,inst_18549,inst_18551,state_val_18595,c__15603__auto__,opts,channel,forms__$1,results))
})();
var inst_18574 = cljs.js.eval.call(null,state,inst_18549,inst_18551,inst_18573);
var state_18594__$1 = state_18594;
var statearr_18602_18634 = state_18594__$1;
(statearr_18602_18634[(2)] = inst_18574);

(statearr_18602_18634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (3))){
var inst_18588 = (state_18594[(2)]);
var inst_18589 = (function (){return ((function (inst_18588,state_val_18595,c__15603__auto__,opts,channel,forms__$1,results){
return (function (p1__18442_SHARP_){
var or__8823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18442_SHARP_);
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18442_SHARP_);
}
});
;})(inst_18588,state_val_18595,c__15603__auto__,opts,channel,forms__$1,results))
})();
var inst_18590 = cljs.core.deref.call(null,results);
var inst_18591 = cljs.core.mapv.call(null,inst_18589,inst_18590);
var inst_18592 = cb.call(null,inst_18591);
var state_18594__$1 = (function (){var statearr_18603 = state_18594;
(statearr_18603[(11)] = inst_18588);

return statearr_18603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18594__$1,inst_18592);
} else {
if((state_val_18595 === (12))){
var inst_18549 = (state_18594[(9)]);
var inst_18565 = (state_18594[(2)]);
var inst_18566 = (inst_18549 instanceof Error);
var state_18594__$1 = (function (){var statearr_18604 = state_18594;
(statearr_18604[(12)] = inst_18565);

return statearr_18604;
})();
if(cljs.core.truth_(inst_18566)){
var statearr_18605_18635 = state_18594__$1;
(statearr_18605_18635[(1)] = (16));

} else {
var statearr_18606_18636 = state_18594__$1;
(statearr_18606_18636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (2))){
var inst_18537 = cljs.core.deref.call(null,forms__$1);
var inst_18538 = cljs.core.seq.call(null,inst_18537);
var state_18594__$1 = state_18594;
if(inst_18538){
var statearr_18607_18637 = state_18594__$1;
(statearr_18607_18637[(1)] = (4));

} else {
var statearr_18608_18638 = state_18594__$1;
(statearr_18608_18638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (19))){
var inst_18581 = (state_18594[(2)]);
var inst_18582 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_18581);
var state_18594__$1 = (function (){var statearr_18609 = state_18594;
(statearr_18609[(13)] = inst_18582);

return statearr_18609;
})();
var statearr_18610_18639 = state_18594__$1;
(statearr_18610_18639[(2)] = null);

(statearr_18610_18639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (11))){
var state_18594__$1 = state_18594;
var statearr_18611_18640 = state_18594__$1;
(statearr_18611_18640[(2)] = null);

(statearr_18611_18640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (9))){
var inst_18549 = (state_18594[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18594,(8),Error,null,(7));
var inst_18548 = cljs.core.deref.call(null,forms__$1);
var inst_18549__$1 = cljs.core.first.call(null,inst_18548);
var inst_18550 = cljs.core.deref.call(null,current_ns);
var inst_18551 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_18550);
var inst_18552 = cljs.core.list_QMARK_.call(null,inst_18549__$1);
var state_18594__$1 = (function (){var statearr_18612 = state_18594;
(statearr_18612[(9)] = inst_18549__$1);

(statearr_18612[(10)] = inst_18551);

return statearr_18612;
})();
if(inst_18552){
var statearr_18613_18641 = state_18594__$1;
(statearr_18613_18641[(1)] = (10));

} else {
var statearr_18614_18642 = state_18594__$1;
(statearr_18614_18642[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (5))){
var state_18594__$1 = state_18594;
var statearr_18615_18643 = state_18594__$1;
(statearr_18615_18643[(2)] = null);

(statearr_18615_18643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (14))){
var state_18594__$1 = state_18594;
var statearr_18616_18644 = state_18594__$1;
(statearr_18616_18644[(2)] = null);

(statearr_18616_18644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (16))){
var inst_18549 = (state_18594[(9)]);
var inst_18568 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18569 = [inst_18549];
var inst_18570 = cljs.core.PersistentHashMap.fromArrays(inst_18568,inst_18569);
var inst_18571 = cljs.core.async.put_BANG_.call(null,channel,inst_18570);
var state_18594__$1 = state_18594;
var statearr_18617_18645 = state_18594__$1;
(statearr_18617_18645[(2)] = inst_18571);

(statearr_18617_18645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (10))){
var inst_18549 = (state_18594[(9)]);
var inst_18554 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_18555 = cljs.core.first.call(null,inst_18549);
var inst_18556 = cljs.core._EQ_.call(null,inst_18554,inst_18555);
var state_18594__$1 = state_18594;
if(inst_18556){
var statearr_18618_18646 = state_18594__$1;
(statearr_18618_18646[(1)] = (13));

} else {
var statearr_18619_18647 = state_18594__$1;
(statearr_18619_18647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (18))){
var inst_18576 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18620_18648 = state_18594__$1;
(statearr_18620_18648[(2)] = inst_18576);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (8))){
var inst_18540 = (state_18594[(2)]);
var inst_18541 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18542 = [inst_18540];
var inst_18543 = cljs.core.PersistentHashMap.fromArrays(inst_18541,inst_18542);
var inst_18544 = cljs.core.async.put_BANG_.call(null,channel,inst_18543);
var state_18594__$1 = state_18594;
var statearr_18621_18649 = state_18594__$1;
(statearr_18621_18649[(2)] = inst_18544);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18594__$1);

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
});})(c__15603__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__15491__auto__,c__15603__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__15492__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__15492__auto____0 = (function (){
var statearr_18625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18625[(0)] = eval_soup$core$eval_forms_$_state_machine__15492__auto__);

(statearr_18625[(1)] = (1));

return statearr_18625;
});
var eval_soup$core$eval_forms_$_state_machine__15492__auto____1 = (function (state_18594){
while(true){
var ret_value__15493__auto__ = (function (){try{while(true){
var result__15494__auto__ = switch__15491__auto__.call(null,state_18594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15494__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15494__auto__;
}
break;
}
}catch (e18626){if((e18626 instanceof Object)){
var ex__15495__auto__ = e18626;
var statearr_18627_18650 = state_18594;
(statearr_18627_18650[(5)] = ex__15495__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18651 = state_18594;
state_18594 = G__18651;
continue;
} else {
return ret_value__15493__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__15492__auto__ = function(state_18594){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__15492__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__15492__auto____1.call(this,state_18594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__15492__auto____0;
eval_soup$core$eval_forms_$_state_machine__15492__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__15492__auto____1;
return eval_soup$core$eval_forms_$_state_machine__15492__auto__;
})()
;})(switch__15491__auto__,c__15603__auto__,opts,channel,forms__$1,results))
})();
var state__15605__auto__ = (function (){var statearr_18628 = f__15604__auto__.call(null);
(statearr_18628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15603__auto__);

return statearr_18628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15605__auto__);
});})(c__15603__auto__,opts,channel,forms__$1,results))
);

return c__15603__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e18653){if((e18653 instanceof Error)){
var _ = e18653;
return null;
} else {
throw e18653;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core._conj.call(null,(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__9606__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__18658(s__18659){
return (new cljs.core.LazySeq(null,(function (){
var s__18659__$1 = s__18659;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__18659__$1);
if(temp__4657__auto__){
var s__18659__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18659__$2)){
var c__9604__auto__ = cljs.core.chunk_first.call(null,s__18659__$2);
var size__9605__auto__ = cljs.core.count.call(null,c__9604__auto__);
var b__18661 = cljs.core.chunk_buffer.call(null,size__9605__auto__);
if((function (){var i__18660 = (0);
while(true){
if((i__18660 < size__9605__auto__)){
var i = cljs.core._nth.call(null,c__9604__auto__,i__18660);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__18661,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__18662 = (i__18660 + (1));
i__18660 = G__18662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18661),eval_soup$core$add_timeouts_if_necessary_$_iter__18658.call(null,cljs.core.chunk_rest.call(null,s__18659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18661),null);
}
} else {
var i = cljs.core.first.call(null,s__18659__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__18658.call(null,cljs.core.rest.call(null,s__18659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9606__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args18663 = [];
var len__9931__auto___18669 = arguments.length;
var i__9932__auto___18670 = (0);
while(true){
if((i__9932__auto___18670 < len__9931__auto___18669)){
args18663.push((arguments[i__9932__auto___18670]));

var G__18671 = (i__9932__auto___18670 + (1));
i__9932__auto___18670 = G__18671;
continue;
} else {
}
break;
}

var G__18665 = args18663.length;
switch (G__18665) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18663.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__18666){
var map__18667 = p__18666;
var map__18667__$1 = ((((!((map__18667 == null)))?((((map__18667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18667):map__18667);
var custom_load = cljs.core.get.call(null,map__18667__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__18667__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__18667,map__18667__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__18667,map__18667__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__18667,map__18667__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__18667,map__18667__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__18667,map__18667__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__18667,map__18667__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map