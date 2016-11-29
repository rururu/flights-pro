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
var args28869 = [];
var len__20732__auto___28873 = arguments.length;
var i__20733__auto___28874 = (0);
while(true){
if((i__20733__auto___28874 < len__20732__auto___28873)){
args28869.push((arguments[i__20733__auto___28874]));

var G__28875 = (i__20733__auto___28874 + (1));
i__20733__auto___28874 = G__28875;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

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
}catch (e28872){if((e28872 instanceof Error)){
var _ = e28872;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e28872;

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
var c__26039__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26039__auto__,opts,channel,forms__$1,results){
return (function (){
var f__26040__auto__ = (function (){var switch__25927__auto__ = ((function (c__26039__auto__,opts,channel,forms__$1,results){
return (function (state_29030){
var state_val_29031 = (state_29030[(1)]);
if((state_val_29031 === (7))){
var inst_29014 = (state_29030[(2)]);
var inst_29015 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_29030__$1 = (function (){var statearr_29032 = state_29030;
(statearr_29032[(7)] = inst_29015);

(statearr_29032[(8)] = inst_29014);

return statearr_29032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29030__$1,(19),channel);
} else {
if((state_val_29031 === (1))){
var state_29030__$1 = state_29030;
var statearr_29033_29065 = state_29030__$1;
(statearr_29033_29065[(2)] = null);

(statearr_29033_29065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (4))){
var state_29030__$1 = state_29030;
var statearr_29034_29066 = state_29030__$1;
(statearr_29034_29066[(2)] = null);

(statearr_29034_29066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (15))){
var inst_28998 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29035_29067 = state_29030__$1;
(statearr_29035_29067[(2)] = inst_28998);

(statearr_29035_29067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (13))){
var inst_28985 = (state_29030[(9)]);
var inst_28994 = cljs.core.second.call(null,inst_28985);
var inst_28995 = cljs.core.reset_BANG_.call(null,current_ns,inst_28994);
var state_29030__$1 = state_29030;
var statearr_29036_29068 = state_29030__$1;
(statearr_29036_29068[(2)] = inst_28995);

(statearr_29036_29068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (6))){
var inst_29022 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29037_29069 = state_29030__$1;
(statearr_29037_29069[(2)] = inst_29022);

(statearr_29037_29069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (17))){
var inst_28987 = (state_29030[(10)]);
var inst_28985 = (state_29030[(9)]);
var inst_29009 = (function (){var form = inst_28985;
var opts__$1 = inst_28987;
return ((function (form,opts__$1,inst_28987,inst_28985,state_val_29031,c__26039__auto__,opts,channel,forms__$1,results){
return (function (p1__28877_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__28877_SHARP_);
});
;})(form,opts__$1,inst_28987,inst_28985,state_val_29031,c__26039__auto__,opts,channel,forms__$1,results))
})();
var inst_29010 = cljs.js.eval.call(null,state,inst_28985,inst_28987,inst_29009);
var state_29030__$1 = state_29030;
var statearr_29038_29070 = state_29030__$1;
(statearr_29038_29070[(2)] = inst_29010);

(statearr_29038_29070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (3))){
var inst_29024 = (state_29030[(2)]);
var inst_29025 = (function (){return ((function (inst_29024,state_val_29031,c__26039__auto__,opts,channel,forms__$1,results){
return (function (p1__28878_SHARP_){
var or__19624__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__28878_SHARP_);
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28878_SHARP_);
}
});
;})(inst_29024,state_val_29031,c__26039__auto__,opts,channel,forms__$1,results))
})();
var inst_29026 = cljs.core.deref.call(null,results);
var inst_29027 = cljs.core.mapv.call(null,inst_29025,inst_29026);
var inst_29028 = cb.call(null,inst_29027);
var state_29030__$1 = (function (){var statearr_29039 = state_29030;
(statearr_29039[(11)] = inst_29024);

return statearr_29039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else {
if((state_val_29031 === (12))){
var inst_28985 = (state_29030[(9)]);
var inst_29001 = (state_29030[(2)]);
var inst_29002 = (inst_28985 instanceof Error);
var state_29030__$1 = (function (){var statearr_29040 = state_29030;
(statearr_29040[(12)] = inst_29001);

return statearr_29040;
})();
if(cljs.core.truth_(inst_29002)){
var statearr_29041_29071 = state_29030__$1;
(statearr_29041_29071[(1)] = (16));

} else {
var statearr_29042_29072 = state_29030__$1;
(statearr_29042_29072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (2))){
var inst_28973 = cljs.core.deref.call(null,forms__$1);
var inst_28974 = cljs.core.seq.call(null,inst_28973);
var state_29030__$1 = state_29030;
if(inst_28974){
var statearr_29043_29073 = state_29030__$1;
(statearr_29043_29073[(1)] = (4));

} else {
var statearr_29044_29074 = state_29030__$1;
(statearr_29044_29074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (19))){
var inst_29017 = (state_29030[(2)]);
var inst_29018 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_29017);
var state_29030__$1 = (function (){var statearr_29045 = state_29030;
(statearr_29045[(13)] = inst_29018);

return statearr_29045;
})();
var statearr_29046_29075 = state_29030__$1;
(statearr_29046_29075[(2)] = null);

(statearr_29046_29075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (11))){
var state_29030__$1 = state_29030;
var statearr_29047_29076 = state_29030__$1;
(statearr_29047_29076[(2)] = null);

(statearr_29047_29076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (9))){
var inst_28985 = (state_29030[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29030,(8),Error,null,(7));
var inst_28984 = cljs.core.deref.call(null,forms__$1);
var inst_28985__$1 = cljs.core.first.call(null,inst_28984);
var inst_28986 = cljs.core.deref.call(null,current_ns);
var inst_28987 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_28986);
var inst_28988 = cljs.core.list_QMARK_.call(null,inst_28985__$1);
var state_29030__$1 = (function (){var statearr_29048 = state_29030;
(statearr_29048[(10)] = inst_28987);

(statearr_29048[(9)] = inst_28985__$1);

return statearr_29048;
})();
if(inst_28988){
var statearr_29049_29077 = state_29030__$1;
(statearr_29049_29077[(1)] = (10));

} else {
var statearr_29050_29078 = state_29030__$1;
(statearr_29050_29078[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (5))){
var state_29030__$1 = state_29030;
var statearr_29051_29079 = state_29030__$1;
(statearr_29051_29079[(2)] = null);

(statearr_29051_29079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (14))){
var state_29030__$1 = state_29030;
var statearr_29052_29080 = state_29030__$1;
(statearr_29052_29080[(2)] = null);

(statearr_29052_29080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (16))){
var inst_28985 = (state_29030[(9)]);
var inst_29004 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_29005 = [inst_28985];
var inst_29006 = cljs.core.PersistentHashMap.fromArrays(inst_29004,inst_29005);
var inst_29007 = cljs.core.async.put_BANG_.call(null,channel,inst_29006);
var state_29030__$1 = state_29030;
var statearr_29053_29081 = state_29030__$1;
(statearr_29053_29081[(2)] = inst_29007);

(statearr_29053_29081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (10))){
var inst_28985 = (state_29030[(9)]);
var inst_28990 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_28991 = cljs.core.first.call(null,inst_28985);
var inst_28992 = cljs.core._EQ_.call(null,inst_28990,inst_28991);
var state_29030__$1 = state_29030;
if(inst_28992){
var statearr_29054_29082 = state_29030__$1;
(statearr_29054_29082[(1)] = (13));

} else {
var statearr_29055_29083 = state_29030__$1;
(statearr_29055_29083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (18))){
var inst_29012 = (state_29030[(2)]);
var state_29030__$1 = state_29030;
var statearr_29056_29084 = state_29030__$1;
(statearr_29056_29084[(2)] = inst_29012);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29031 === (8))){
var inst_28976 = (state_29030[(2)]);
var inst_28977 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_28978 = [inst_28976];
var inst_28979 = cljs.core.PersistentHashMap.fromArrays(inst_28977,inst_28978);
var inst_28980 = cljs.core.async.put_BANG_.call(null,channel,inst_28979);
var state_29030__$1 = state_29030;
var statearr_29057_29085 = state_29030__$1;
(statearr_29057_29085[(2)] = inst_28980);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030__$1);

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
});})(c__26039__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__25927__auto__,c__26039__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__25928__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__25928__auto____0 = (function (){
var statearr_29061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29061[(0)] = eval_soup$core$eval_forms_$_state_machine__25928__auto__);

(statearr_29061[(1)] = (1));

return statearr_29061;
});
var eval_soup$core$eval_forms_$_state_machine__25928__auto____1 = (function (state_29030){
while(true){
var ret_value__25929__auto__ = (function (){try{while(true){
var result__25930__auto__ = switch__25927__auto__.call(null,state_29030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25930__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__25931__auto__ = e29062;
var statearr_29063_29086 = state_29030;
(statearr_29063_29086[(5)] = ex__25931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29087 = state_29030;
state_29030 = G__29087;
continue;
} else {
return ret_value__25929__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__25928__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__25928__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__25928__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__25928__auto____0;
eval_soup$core$eval_forms_$_state_machine__25928__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__25928__auto____1;
return eval_soup$core$eval_forms_$_state_machine__25928__auto__;
})()
;})(switch__25927__auto__,c__26039__auto__,opts,channel,forms__$1,results))
})();
var state__26041__auto__ = (function (){var statearr_29064 = f__26040__auto__.call(null);
(statearr_29064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26039__auto__);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26041__auto__);
});})(c__26039__auto__,opts,channel,forms__$1,results))
);

return c__26039__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e29089){if((e29089 instanceof Error)){
var _ = e29089;
return null;
} else {
throw e29089;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core._conj.call(null,(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__20407__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__29094(s__29095){
return (new cljs.core.LazySeq(null,(function (){
var s__29095__$1 = s__29095;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29095__$1);
if(temp__4657__auto__){
var s__29095__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29095__$2)){
var c__20405__auto__ = cljs.core.chunk_first.call(null,s__29095__$2);
var size__20406__auto__ = cljs.core.count.call(null,c__20405__auto__);
var b__29097 = cljs.core.chunk_buffer.call(null,size__20406__auto__);
if((function (){var i__29096 = (0);
while(true){
if((i__29096 < size__20406__auto__)){
var i = cljs.core._nth.call(null,c__20405__auto__,i__29096);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__29097,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__29098 = (i__29096 + (1));
i__29096 = G__29098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29097),eval_soup$core$add_timeouts_if_necessary_$_iter__29094.call(null,cljs.core.chunk_rest.call(null,s__29095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29097),null);
}
} else {
var i = cljs.core.first.call(null,s__29095__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__29094.call(null,cljs.core.rest.call(null,s__29095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20407__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args29099 = [];
var len__20732__auto___29105 = arguments.length;
var i__20733__auto___29106 = (0);
while(true){
if((i__20733__auto___29106 < len__20732__auto___29105)){
args29099.push((arguments[i__20733__auto___29106]));

var G__29107 = (i__20733__auto___29106 + (1));
i__20733__auto___29106 = G__29107;
continue;
} else {
}
break;
}

var G__29101 = args29099.length;
switch (G__29101) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29099.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__29102){
var map__29103 = p__29102;
var map__29103__$1 = ((((!((map__29103 == null)))?((((map__29103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);
var custom_load = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__29103,map__29103__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__29103,map__29103__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__29103,map__29103__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__29103,map__29103__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__29103,map__29103__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__29103,map__29103__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map