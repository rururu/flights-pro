// Compiled by ClojureScript 1.9.521 {}
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
var args19810 = [];
var len__10030__auto___19814 = arguments.length;
var i__10031__auto___19815 = (0);
while(true){
if((i__10031__auto___19815 < len__10030__auto___19814)){
args19810.push((arguments[i__10031__auto___19815]));

var G__19816 = (i__10031__auto___19815 + (1));
i__10031__auto___19815 = G__19816;
continue;
} else {
}
break;
}

var G__19812 = args19810.length;
switch (G__19812) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19810.length)].join('')));

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
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__4655__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__4655__auto__))
);
}catch (e19813){if((e19813 instanceof Error)){
var _ = e19813;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e19813;

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
var c__16980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16980__auto__,opts,channel,forms__$1,results){
return (function (){
var f__16981__auto__ = (function (){var switch__16868__auto__ = ((function (c__16980__auto__,opts,channel,forms__$1,results){
return (function (state_19971){
var state_val_19972 = (state_19971[(1)]);
if((state_val_19972 === (7))){
var inst_19955 = (state_19971[(2)]);
var inst_19956 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_19971__$1 = (function (){var statearr_19973 = state_19971;
(statearr_19973[(7)] = inst_19956);

(statearr_19973[(8)] = inst_19955);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19971__$1,(19),channel);
} else {
if((state_val_19972 === (1))){
var state_19971__$1 = state_19971;
var statearr_19974_20006 = state_19971__$1;
(statearr_19974_20006[(2)] = null);

(statearr_19974_20006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (4))){
var state_19971__$1 = state_19971;
var statearr_19975_20007 = state_19971__$1;
(statearr_19975_20007[(2)] = null);

(statearr_19975_20007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (15))){
var inst_19939 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19976_20008 = state_19971__$1;
(statearr_19976_20008[(2)] = inst_19939);

(statearr_19976_20008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (13))){
var inst_19926 = (state_19971[(9)]);
var inst_19935 = cljs.core.second.call(null,inst_19926);
var inst_19936 = cljs.core.reset_BANG_.call(null,current_ns,inst_19935);
var state_19971__$1 = state_19971;
var statearr_19977_20009 = state_19971__$1;
(statearr_19977_20009[(2)] = inst_19936);

(statearr_19977_20009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (6))){
var inst_19963 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19978_20010 = state_19971__$1;
(statearr_19978_20010[(2)] = inst_19963);

(statearr_19978_20010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (17))){
var inst_19926 = (state_19971[(9)]);
var inst_19928 = (state_19971[(10)]);
var inst_19950 = (function (){var form = inst_19926;
var opts__$1 = inst_19928;
return ((function (form,opts__$1,inst_19926,inst_19928,state_val_19972,c__16980__auto__,opts,channel,forms__$1,results){
return (function (p1__19818_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__19818_SHARP_);
});
;})(form,opts__$1,inst_19926,inst_19928,state_val_19972,c__16980__auto__,opts,channel,forms__$1,results))
})();
var inst_19951 = cljs.js.eval.call(null,state,inst_19926,inst_19928,inst_19950);
var state_19971__$1 = state_19971;
var statearr_19979_20011 = state_19971__$1;
(statearr_19979_20011[(2)] = inst_19951);

(statearr_19979_20011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (3))){
var inst_19965 = (state_19971[(2)]);
var inst_19966 = (function (){return ((function (inst_19965,state_val_19972,c__16980__auto__,opts,channel,forms__$1,results){
return (function (p1__19819_SHARP_){
var or__8917__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__19819_SHARP_);
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__19819_SHARP_);
}
});
;})(inst_19965,state_val_19972,c__16980__auto__,opts,channel,forms__$1,results))
})();
var inst_19967 = cljs.core.deref.call(null,results);
var inst_19968 = cljs.core.mapv.call(null,inst_19966,inst_19967);
var inst_19969 = cb.call(null,inst_19968);
var state_19971__$1 = (function (){var statearr_19980 = state_19971;
(statearr_19980[(11)] = inst_19965);

return statearr_19980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19971__$1,inst_19969);
} else {
if((state_val_19972 === (12))){
var inst_19926 = (state_19971[(9)]);
var inst_19942 = (state_19971[(2)]);
var inst_19943 = (inst_19926 instanceof Error);
var state_19971__$1 = (function (){var statearr_19981 = state_19971;
(statearr_19981[(12)] = inst_19942);

return statearr_19981;
})();
if(cljs.core.truth_(inst_19943)){
var statearr_19982_20012 = state_19971__$1;
(statearr_19982_20012[(1)] = (16));

} else {
var statearr_19983_20013 = state_19971__$1;
(statearr_19983_20013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (2))){
var inst_19914 = cljs.core.deref.call(null,forms__$1);
var inst_19915 = cljs.core.seq.call(null,inst_19914);
var state_19971__$1 = state_19971;
if(inst_19915){
var statearr_19984_20014 = state_19971__$1;
(statearr_19984_20014[(1)] = (4));

} else {
var statearr_19985_20015 = state_19971__$1;
(statearr_19985_20015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (19))){
var inst_19958 = (state_19971[(2)]);
var inst_19959 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_19958);
var state_19971__$1 = (function (){var statearr_19986 = state_19971;
(statearr_19986[(13)] = inst_19959);

return statearr_19986;
})();
var statearr_19987_20016 = state_19971__$1;
(statearr_19987_20016[(2)] = null);

(statearr_19987_20016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (11))){
var state_19971__$1 = state_19971;
var statearr_19988_20017 = state_19971__$1;
(statearr_19988_20017[(2)] = null);

(statearr_19988_20017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (9))){
var inst_19926 = (state_19971[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19971,(8),Error,null,(7));
var inst_19925 = cljs.core.deref.call(null,forms__$1);
var inst_19926__$1 = cljs.core.first.call(null,inst_19925);
var inst_19927 = cljs.core.deref.call(null,current_ns);
var inst_19928 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_19927);
var inst_19929 = cljs.core.list_QMARK_.call(null,inst_19926__$1);
var state_19971__$1 = (function (){var statearr_19989 = state_19971;
(statearr_19989[(9)] = inst_19926__$1);

(statearr_19989[(10)] = inst_19928);

return statearr_19989;
})();
if(inst_19929){
var statearr_19990_20018 = state_19971__$1;
(statearr_19990_20018[(1)] = (10));

} else {
var statearr_19991_20019 = state_19971__$1;
(statearr_19991_20019[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (5))){
var state_19971__$1 = state_19971;
var statearr_19992_20020 = state_19971__$1;
(statearr_19992_20020[(2)] = null);

(statearr_19992_20020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (14))){
var state_19971__$1 = state_19971;
var statearr_19993_20021 = state_19971__$1;
(statearr_19993_20021[(2)] = null);

(statearr_19993_20021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (16))){
var inst_19926 = (state_19971[(9)]);
var inst_19945 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19946 = [inst_19926];
var inst_19947 = cljs.core.PersistentHashMap.fromArrays(inst_19945,inst_19946);
var inst_19948 = cljs.core.async.put_BANG_.call(null,channel,inst_19947);
var state_19971__$1 = state_19971;
var statearr_19994_20022 = state_19971__$1;
(statearr_19994_20022[(2)] = inst_19948);

(statearr_19994_20022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (10))){
var inst_19926 = (state_19971[(9)]);
var inst_19931 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_19932 = cljs.core.first.call(null,inst_19926);
var inst_19933 = cljs.core._EQ_.call(null,inst_19931,inst_19932);
var state_19971__$1 = state_19971;
if(inst_19933){
var statearr_19995_20023 = state_19971__$1;
(statearr_19995_20023[(1)] = (13));

} else {
var statearr_19996_20024 = state_19971__$1;
(statearr_19996_20024[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (18))){
var inst_19953 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19997_20025 = state_19971__$1;
(statearr_19997_20025[(2)] = inst_19953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19971__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (8))){
var inst_19917 = (state_19971[(2)]);
var inst_19918 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19919 = [inst_19917];
var inst_19920 = cljs.core.PersistentHashMap.fromArrays(inst_19918,inst_19919);
var inst_19921 = cljs.core.async.put_BANG_.call(null,channel,inst_19920);
var state_19971__$1 = state_19971;
var statearr_19998_20026 = state_19971__$1;
(statearr_19998_20026[(2)] = inst_19921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19971__$1);

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
});})(c__16980__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__16868__auto__,c__16980__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__16869__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__16869__auto____0 = (function (){
var statearr_20002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20002[(0)] = eval_soup$core$eval_forms_$_state_machine__16869__auto__);

(statearr_20002[(1)] = (1));

return statearr_20002;
});
var eval_soup$core$eval_forms_$_state_machine__16869__auto____1 = (function (state_19971){
while(true){
var ret_value__16870__auto__ = (function (){try{while(true){
var result__16871__auto__ = switch__16868__auto__.call(null,state_19971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16871__auto__;
}
break;
}
}catch (e20003){if((e20003 instanceof Object)){
var ex__16872__auto__ = e20003;
var statearr_20004_20027 = state_19971;
(statearr_20004_20027[(5)] = ex__16872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20028 = state_19971;
state_19971 = G__20028;
continue;
} else {
return ret_value__16870__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__16869__auto__ = function(state_19971){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__16869__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__16869__auto____1.call(this,state_19971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__16869__auto____0;
eval_soup$core$eval_forms_$_state_machine__16869__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__16869__auto____1;
return eval_soup$core$eval_forms_$_state_machine__16869__auto__;
})()
;})(switch__16868__auto__,c__16980__auto__,opts,channel,forms__$1,results))
})();
var state__16982__auto__ = (function (){var statearr_20005 = f__16981__auto__.call(null);
(statearr_20005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16980__auto__);

return statearr_20005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16982__auto__);
});})(c__16980__auto__,opts,channel,forms__$1,results))
);

return c__16980__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e20030){if((e20030 instanceof Error)){
var _ = e20030;
return null;
} else {
throw e20030;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core._conj.call(null,(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__9705__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__20035(s__20036){
return (new cljs.core.LazySeq(null,(function (){
var s__20036__$1 = s__20036;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20036__$1);
if(temp__4657__auto__){
var s__20036__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20036__$2)){
var c__9703__auto__ = cljs.core.chunk_first.call(null,s__20036__$2);
var size__9704__auto__ = cljs.core.count.call(null,c__9703__auto__);
var b__20038 = cljs.core.chunk_buffer.call(null,size__9704__auto__);
if((function (){var i__20037 = (0);
while(true){
if((i__20037 < size__9704__auto__)){
var i = cljs.core._nth.call(null,c__9703__auto__,i__20037);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__20038,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__20039 = (i__20037 + (1));
i__20037 = G__20039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20038),eval_soup$core$add_timeouts_if_necessary_$_iter__20035.call(null,cljs.core.chunk_rest.call(null,s__20036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20038),null);
}
} else {
var i = cljs.core.first.call(null,s__20036__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__20035.call(null,cljs.core.rest.call(null,s__20036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9705__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args20040 = [];
var len__10030__auto___20046 = arguments.length;
var i__10031__auto___20047 = (0);
while(true){
if((i__10031__auto___20047 < len__10030__auto___20046)){
args20040.push((arguments[i__10031__auto___20047]));

var G__20048 = (i__10031__auto___20047 + (1));
i__10031__auto___20047 = G__20048;
continue;
} else {
}
break;
}

var G__20042 = args20040.length;
switch (G__20042) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20040.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__20043){
var map__20044 = p__20043;
var map__20044__$1 = ((((!((map__20044 == null)))?((((map__20044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20044):map__20044);
var custom_load = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__20044,map__20044__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__20044,map__20044__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__20044,map__20044__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__20044,map__20044__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__20044,map__20044__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__20044,map__20044__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map