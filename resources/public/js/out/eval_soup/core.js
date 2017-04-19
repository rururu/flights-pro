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
var args19885 = [];
var len__11385__auto___19889 = arguments.length;
var i__11386__auto___19890 = (0);
while(true){
if((i__11386__auto___19890 < len__11385__auto___19889)){
args19885.push((arguments[i__11386__auto___19890]));

var G__19891 = (i__11386__auto___19890 + (1));
i__11386__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var G__19887 = args19885.length;
switch (G__19887) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19885.length)].join('')));

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
}catch (e19888){if((e19888 instanceof Error)){
var _ = e19888;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e19888;

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
var c__17055__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17055__auto__,opts,channel,forms__$1,results){
return (function (){
var f__17056__auto__ = (function (){var switch__16943__auto__ = ((function (c__17055__auto__,opts,channel,forms__$1,results){
return (function (state_20046){
var state_val_20047 = (state_20046[(1)]);
if((state_val_20047 === (7))){
var inst_20030 = (state_20046[(2)]);
var inst_20031 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_20046__$1 = (function (){var statearr_20048 = state_20046;
(statearr_20048[(7)] = inst_20031);

(statearr_20048[(8)] = inst_20030);

return statearr_20048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20046__$1,(19),channel);
} else {
if((state_val_20047 === (1))){
var state_20046__$1 = state_20046;
var statearr_20049_20081 = state_20046__$1;
(statearr_20049_20081[(2)] = null);

(statearr_20049_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (4))){
var state_20046__$1 = state_20046;
var statearr_20050_20082 = state_20046__$1;
(statearr_20050_20082[(2)] = null);

(statearr_20050_20082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (15))){
var inst_20014 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20051_20083 = state_20046__$1;
(statearr_20051_20083[(2)] = inst_20014);

(statearr_20051_20083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (13))){
var inst_20001 = (state_20046[(9)]);
var inst_20010 = cljs.core.second.call(null,inst_20001);
var inst_20011 = cljs.core.reset_BANG_.call(null,current_ns,inst_20010);
var state_20046__$1 = state_20046;
var statearr_20052_20084 = state_20046__$1;
(statearr_20052_20084[(2)] = inst_20011);

(statearr_20052_20084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (6))){
var inst_20038 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20053_20085 = state_20046__$1;
(statearr_20053_20085[(2)] = inst_20038);

(statearr_20053_20085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (17))){
var inst_20001 = (state_20046[(9)]);
var inst_20003 = (state_20046[(10)]);
var inst_20025 = (function (){var form = inst_20001;
var opts__$1 = inst_20003;
return ((function (form,opts__$1,inst_20001,inst_20003,state_val_20047,c__17055__auto__,opts,channel,forms__$1,results){
return (function (p1__19893_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__19893_SHARP_);
});
;})(form,opts__$1,inst_20001,inst_20003,state_val_20047,c__17055__auto__,opts,channel,forms__$1,results))
})();
var inst_20026 = cljs.js.eval.call(null,state,inst_20001,inst_20003,inst_20025);
var state_20046__$1 = state_20046;
var statearr_20054_20086 = state_20046__$1;
(statearr_20054_20086[(2)] = inst_20026);

(statearr_20054_20086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (3))){
var inst_20040 = (state_20046[(2)]);
var inst_20041 = (function (){return ((function (inst_20040,state_val_20047,c__17055__auto__,opts,channel,forms__$1,results){
return (function (p1__19894_SHARP_){
var or__10277__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__19894_SHARP_);
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__19894_SHARP_);
}
});
;})(inst_20040,state_val_20047,c__17055__auto__,opts,channel,forms__$1,results))
})();
var inst_20042 = cljs.core.deref.call(null,results);
var inst_20043 = cljs.core.mapv.call(null,inst_20041,inst_20042);
var inst_20044 = cb.call(null,inst_20043);
var state_20046__$1 = (function (){var statearr_20055 = state_20046;
(statearr_20055[(11)] = inst_20040);

return statearr_20055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20046__$1,inst_20044);
} else {
if((state_val_20047 === (12))){
var inst_20001 = (state_20046[(9)]);
var inst_20017 = (state_20046[(2)]);
var inst_20018 = (inst_20001 instanceof Error);
var state_20046__$1 = (function (){var statearr_20056 = state_20046;
(statearr_20056[(12)] = inst_20017);

return statearr_20056;
})();
if(cljs.core.truth_(inst_20018)){
var statearr_20057_20087 = state_20046__$1;
(statearr_20057_20087[(1)] = (16));

} else {
var statearr_20058_20088 = state_20046__$1;
(statearr_20058_20088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (2))){
var inst_19989 = cljs.core.deref.call(null,forms__$1);
var inst_19990 = cljs.core.seq.call(null,inst_19989);
var state_20046__$1 = state_20046;
if(inst_19990){
var statearr_20059_20089 = state_20046__$1;
(statearr_20059_20089[(1)] = (4));

} else {
var statearr_20060_20090 = state_20046__$1;
(statearr_20060_20090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (19))){
var inst_20033 = (state_20046[(2)]);
var inst_20034 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_20033);
var state_20046__$1 = (function (){var statearr_20061 = state_20046;
(statearr_20061[(13)] = inst_20034);

return statearr_20061;
})();
var statearr_20062_20091 = state_20046__$1;
(statearr_20062_20091[(2)] = null);

(statearr_20062_20091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (11))){
var state_20046__$1 = state_20046;
var statearr_20063_20092 = state_20046__$1;
(statearr_20063_20092[(2)] = null);

(statearr_20063_20092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (9))){
var inst_20001 = (state_20046[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20046,(8),Error,null,(7));
var inst_20000 = cljs.core.deref.call(null,forms__$1);
var inst_20001__$1 = cljs.core.first.call(null,inst_20000);
var inst_20002 = cljs.core.deref.call(null,current_ns);
var inst_20003 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_20002);
var inst_20004 = cljs.core.list_QMARK_.call(null,inst_20001__$1);
var state_20046__$1 = (function (){var statearr_20064 = state_20046;
(statearr_20064[(9)] = inst_20001__$1);

(statearr_20064[(10)] = inst_20003);

return statearr_20064;
})();
if(inst_20004){
var statearr_20065_20093 = state_20046__$1;
(statearr_20065_20093[(1)] = (10));

} else {
var statearr_20066_20094 = state_20046__$1;
(statearr_20066_20094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (5))){
var state_20046__$1 = state_20046;
var statearr_20067_20095 = state_20046__$1;
(statearr_20067_20095[(2)] = null);

(statearr_20067_20095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (14))){
var state_20046__$1 = state_20046;
var statearr_20068_20096 = state_20046__$1;
(statearr_20068_20096[(2)] = null);

(statearr_20068_20096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (16))){
var inst_20001 = (state_20046[(9)]);
var inst_20020 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_20021 = [inst_20001];
var inst_20022 = cljs.core.PersistentHashMap.fromArrays(inst_20020,inst_20021);
var inst_20023 = cljs.core.async.put_BANG_.call(null,channel,inst_20022);
var state_20046__$1 = state_20046;
var statearr_20069_20097 = state_20046__$1;
(statearr_20069_20097[(2)] = inst_20023);

(statearr_20069_20097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (10))){
var inst_20001 = (state_20046[(9)]);
var inst_20006 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_20007 = cljs.core.first.call(null,inst_20001);
var inst_20008 = cljs.core._EQ_.call(null,inst_20006,inst_20007);
var state_20046__$1 = state_20046;
if(inst_20008){
var statearr_20070_20098 = state_20046__$1;
(statearr_20070_20098[(1)] = (13));

} else {
var statearr_20071_20099 = state_20046__$1;
(statearr_20071_20099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (18))){
var inst_20028 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20072_20100 = state_20046__$1;
(statearr_20072_20100[(2)] = inst_20028);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (8))){
var inst_19992 = (state_20046[(2)]);
var inst_19993 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19994 = [inst_19992];
var inst_19995 = cljs.core.PersistentHashMap.fromArrays(inst_19993,inst_19994);
var inst_19996 = cljs.core.async.put_BANG_.call(null,channel,inst_19995);
var state_20046__$1 = state_20046;
var statearr_20073_20101 = state_20046__$1;
(statearr_20073_20101[(2)] = inst_19996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20046__$1);

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
});})(c__17055__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__16943__auto__,c__17055__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__16944__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__16944__auto____0 = (function (){
var statearr_20077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20077[(0)] = eval_soup$core$eval_forms_$_state_machine__16944__auto__);

(statearr_20077[(1)] = (1));

return statearr_20077;
});
var eval_soup$core$eval_forms_$_state_machine__16944__auto____1 = (function (state_20046){
while(true){
var ret_value__16945__auto__ = (function (){try{while(true){
var result__16946__auto__ = switch__16943__auto__.call(null,state_20046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16946__auto__;
}
break;
}
}catch (e20078){if((e20078 instanceof Object)){
var ex__16947__auto__ = e20078;
var statearr_20079_20102 = state_20046;
(statearr_20079_20102[(5)] = ex__16947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20103 = state_20046;
state_20046 = G__20103;
continue;
} else {
return ret_value__16945__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__16944__auto__ = function(state_20046){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__16944__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__16944__auto____1.call(this,state_20046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__16944__auto____0;
eval_soup$core$eval_forms_$_state_machine__16944__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__16944__auto____1;
return eval_soup$core$eval_forms_$_state_machine__16944__auto__;
})()
;})(switch__16943__auto__,c__17055__auto__,opts,channel,forms__$1,results))
})();
var state__17057__auto__ = (function (){var statearr_20080 = f__17056__auto__.call(null);
(statearr_20080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__17055__auto__);

return statearr_20080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17057__auto__);
});})(c__17055__auto__,opts,channel,forms__$1,results))
);

return c__17055__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e20105){if((e20105 instanceof Error)){
var _ = e20105;
return null;
} else {
throw e20105;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core._conj.call(null,(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__11060__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__20110(s__20111){
return (new cljs.core.LazySeq(null,(function (){
var s__20111__$1 = s__20111;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20111__$1);
if(temp__4657__auto__){
var s__20111__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20111__$2)){
var c__11058__auto__ = cljs.core.chunk_first.call(null,s__20111__$2);
var size__11059__auto__ = cljs.core.count.call(null,c__11058__auto__);
var b__20113 = cljs.core.chunk_buffer.call(null,size__11059__auto__);
if((function (){var i__20112 = (0);
while(true){
if((i__20112 < size__11059__auto__)){
var i = cljs.core._nth.call(null,c__11058__auto__,i__20112);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__20113,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__20114 = (i__20112 + (1));
i__20112 = G__20114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20113),eval_soup$core$add_timeouts_if_necessary_$_iter__20110.call(null,cljs.core.chunk_rest.call(null,s__20111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20113),null);
}
} else {
var i = cljs.core.first.call(null,s__20111__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__20110.call(null,cljs.core.rest.call(null,s__20111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11060__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args20115 = [];
var len__11385__auto___20121 = arguments.length;
var i__11386__auto___20122 = (0);
while(true){
if((i__11386__auto___20122 < len__11385__auto___20121)){
args20115.push((arguments[i__11386__auto___20122]));

var G__20123 = (i__11386__auto___20122 + (1));
i__11386__auto___20122 = G__20123;
continue;
} else {
}
break;
}

var G__20117 = args20115.length;
switch (G__20117) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20115.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__20118){
var map__20119 = p__20118;
var map__20119__$1 = ((((!((map__20119 == null)))?((((map__20119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20119):map__20119);
var custom_load = cljs.core.get.call(null,map__20119__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__20119__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__20119,map__20119__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__20119,map__20119__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__20119,map__20119__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__20119,map__20119__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__20119,map__20119__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__20119,map__20119__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map