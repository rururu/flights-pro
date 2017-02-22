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
var args19018 = [];
var len__10516__auto___19022 = arguments.length;
var i__10517__auto___19023 = (0);
while(true){
if((i__10517__auto___19023 < len__10516__auto___19022)){
args19018.push((arguments[i__10517__auto___19023]));

var G__19024 = (i__10517__auto___19023 + (1));
i__10517__auto___19023 = G__19024;
continue;
} else {
}
break;
}

var G__19020 = args19018.length;
switch (G__19020) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19018.length)].join('')));

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
}catch (e19021){if((e19021 instanceof Error)){
var _ = e19021;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e19021;

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
var c__16188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16188__auto__,opts,channel,forms__$1,results){
return (function (){
var f__16189__auto__ = (function (){var switch__16076__auto__ = ((function (c__16188__auto__,opts,channel,forms__$1,results){
return (function (state_19179){
var state_val_19180 = (state_19179[(1)]);
if((state_val_19180 === (7))){
var inst_19163 = (state_19179[(2)]);
var inst_19164 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_19179__$1 = (function (){var statearr_19181 = state_19179;
(statearr_19181[(7)] = inst_19164);

(statearr_19181[(8)] = inst_19163);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19179__$1,(19),channel);
} else {
if((state_val_19180 === (1))){
var state_19179__$1 = state_19179;
var statearr_19182_19214 = state_19179__$1;
(statearr_19182_19214[(2)] = null);

(statearr_19182_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (4))){
var state_19179__$1 = state_19179;
var statearr_19183_19215 = state_19179__$1;
(statearr_19183_19215[(2)] = null);

(statearr_19183_19215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (15))){
var inst_19147 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19184_19216 = state_19179__$1;
(statearr_19184_19216[(2)] = inst_19147);

(statearr_19184_19216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (13))){
var inst_19134 = (state_19179[(9)]);
var inst_19143 = cljs.core.second.call(null,inst_19134);
var inst_19144 = cljs.core.reset_BANG_.call(null,current_ns,inst_19143);
var state_19179__$1 = state_19179;
var statearr_19185_19217 = state_19179__$1;
(statearr_19185_19217[(2)] = inst_19144);

(statearr_19185_19217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (6))){
var inst_19171 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19186_19218 = state_19179__$1;
(statearr_19186_19218[(2)] = inst_19171);

(statearr_19186_19218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (17))){
var inst_19134 = (state_19179[(9)]);
var inst_19136 = (state_19179[(10)]);
var inst_19158 = (function (){var form = inst_19134;
var opts__$1 = inst_19136;
return ((function (form,opts__$1,inst_19134,inst_19136,state_val_19180,c__16188__auto__,opts,channel,forms__$1,results){
return (function (p1__19026_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__19026_SHARP_);
});
;})(form,opts__$1,inst_19134,inst_19136,state_val_19180,c__16188__auto__,opts,channel,forms__$1,results))
})();
var inst_19159 = cljs.js.eval.call(null,state,inst_19134,inst_19136,inst_19158);
var state_19179__$1 = state_19179;
var statearr_19187_19219 = state_19179__$1;
(statearr_19187_19219[(2)] = inst_19159);

(statearr_19187_19219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (3))){
var inst_19173 = (state_19179[(2)]);
var inst_19174 = (function (){return ((function (inst_19173,state_val_19180,c__16188__auto__,opts,channel,forms__$1,results){
return (function (p1__19027_SHARP_){
var or__9408__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__19027_SHARP_);
if(cljs.core.truth_(or__9408__auto__)){
return or__9408__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__19027_SHARP_);
}
});
;})(inst_19173,state_val_19180,c__16188__auto__,opts,channel,forms__$1,results))
})();
var inst_19175 = cljs.core.deref.call(null,results);
var inst_19176 = cljs.core.mapv.call(null,inst_19174,inst_19175);
var inst_19177 = cb.call(null,inst_19176);
var state_19179__$1 = (function (){var statearr_19188 = state_19179;
(statearr_19188[(11)] = inst_19173);

return statearr_19188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19179__$1,inst_19177);
} else {
if((state_val_19180 === (12))){
var inst_19134 = (state_19179[(9)]);
var inst_19150 = (state_19179[(2)]);
var inst_19151 = (inst_19134 instanceof Error);
var state_19179__$1 = (function (){var statearr_19189 = state_19179;
(statearr_19189[(12)] = inst_19150);

return statearr_19189;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19190_19220 = state_19179__$1;
(statearr_19190_19220[(1)] = (16));

} else {
var statearr_19191_19221 = state_19179__$1;
(statearr_19191_19221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (2))){
var inst_19122 = cljs.core.deref.call(null,forms__$1);
var inst_19123 = cljs.core.seq.call(null,inst_19122);
var state_19179__$1 = state_19179;
if(inst_19123){
var statearr_19192_19222 = state_19179__$1;
(statearr_19192_19222[(1)] = (4));

} else {
var statearr_19193_19223 = state_19179__$1;
(statearr_19193_19223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (19))){
var inst_19166 = (state_19179[(2)]);
var inst_19167 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_19166);
var state_19179__$1 = (function (){var statearr_19194 = state_19179;
(statearr_19194[(13)] = inst_19167);

return statearr_19194;
})();
var statearr_19195_19224 = state_19179__$1;
(statearr_19195_19224[(2)] = null);

(statearr_19195_19224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (11))){
var state_19179__$1 = state_19179;
var statearr_19196_19225 = state_19179__$1;
(statearr_19196_19225[(2)] = null);

(statearr_19196_19225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (9))){
var inst_19134 = (state_19179[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19179,(8),Error,null,(7));
var inst_19133 = cljs.core.deref.call(null,forms__$1);
var inst_19134__$1 = cljs.core.first.call(null,inst_19133);
var inst_19135 = cljs.core.deref.call(null,current_ns);
var inst_19136 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_19135);
var inst_19137 = cljs.core.list_QMARK_.call(null,inst_19134__$1);
var state_19179__$1 = (function (){var statearr_19197 = state_19179;
(statearr_19197[(9)] = inst_19134__$1);

(statearr_19197[(10)] = inst_19136);

return statearr_19197;
})();
if(inst_19137){
var statearr_19198_19226 = state_19179__$1;
(statearr_19198_19226[(1)] = (10));

} else {
var statearr_19199_19227 = state_19179__$1;
(statearr_19199_19227[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (5))){
var state_19179__$1 = state_19179;
var statearr_19200_19228 = state_19179__$1;
(statearr_19200_19228[(2)] = null);

(statearr_19200_19228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (14))){
var state_19179__$1 = state_19179;
var statearr_19201_19229 = state_19179__$1;
(statearr_19201_19229[(2)] = null);

(statearr_19201_19229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (16))){
var inst_19134 = (state_19179[(9)]);
var inst_19153 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19154 = [inst_19134];
var inst_19155 = cljs.core.PersistentHashMap.fromArrays(inst_19153,inst_19154);
var inst_19156 = cljs.core.async.put_BANG_.call(null,channel,inst_19155);
var state_19179__$1 = state_19179;
var statearr_19202_19230 = state_19179__$1;
(statearr_19202_19230[(2)] = inst_19156);

(statearr_19202_19230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (10))){
var inst_19134 = (state_19179[(9)]);
var inst_19139 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_19140 = cljs.core.first.call(null,inst_19134);
var inst_19141 = cljs.core._EQ_.call(null,inst_19139,inst_19140);
var state_19179__$1 = state_19179;
if(inst_19141){
var statearr_19203_19231 = state_19179__$1;
(statearr_19203_19231[(1)] = (13));

} else {
var statearr_19204_19232 = state_19179__$1;
(statearr_19204_19232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (18))){
var inst_19161 = (state_19179[(2)]);
var state_19179__$1 = state_19179;
var statearr_19205_19233 = state_19179__$1;
(statearr_19205_19233[(2)] = inst_19161);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19180 === (8))){
var inst_19125 = (state_19179[(2)]);
var inst_19126 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19127 = [inst_19125];
var inst_19128 = cljs.core.PersistentHashMap.fromArrays(inst_19126,inst_19127);
var inst_19129 = cljs.core.async.put_BANG_.call(null,channel,inst_19128);
var state_19179__$1 = state_19179;
var statearr_19206_19234 = state_19179__$1;
(statearr_19206_19234[(2)] = inst_19129);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19179__$1);

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
});})(c__16188__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__16076__auto__,c__16188__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__16077__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__16077__auto____0 = (function (){
var statearr_19210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19210[(0)] = eval_soup$core$eval_forms_$_state_machine__16077__auto__);

(statearr_19210[(1)] = (1));

return statearr_19210;
});
var eval_soup$core$eval_forms_$_state_machine__16077__auto____1 = (function (state_19179){
while(true){
var ret_value__16078__auto__ = (function (){try{while(true){
var result__16079__auto__ = switch__16076__auto__.call(null,state_19179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16079__auto__;
}
break;
}
}catch (e19211){if((e19211 instanceof Object)){
var ex__16080__auto__ = e19211;
var statearr_19212_19235 = state_19179;
(statearr_19212_19235[(5)] = ex__16080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19236 = state_19179;
state_19179 = G__19236;
continue;
} else {
return ret_value__16078__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__16077__auto__ = function(state_19179){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__16077__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__16077__auto____1.call(this,state_19179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__16077__auto____0;
eval_soup$core$eval_forms_$_state_machine__16077__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__16077__auto____1;
return eval_soup$core$eval_forms_$_state_machine__16077__auto__;
})()
;})(switch__16076__auto__,c__16188__auto__,opts,channel,forms__$1,results))
})();
var state__16190__auto__ = (function (){var statearr_19213 = f__16189__auto__.call(null);
(statearr_19213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16188__auto__);

return statearr_19213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16190__auto__);
});})(c__16188__auto__,opts,channel,forms__$1,results))
);

return c__16188__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e19238){if((e19238 instanceof Error)){
var _ = e19238;
return null;
} else {
throw e19238;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.core._conj.call(null,(function (){var x__10245__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__10245__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto____$1);
})(),x__10245__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__10245__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto____$1);
})(),x__10245__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__10191__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__19243(s__19244){
return (new cljs.core.LazySeq(null,(function (){
var s__19244__$1 = s__19244;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19244__$1);
if(temp__4657__auto__){
var s__19244__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19244__$2)){
var c__10189__auto__ = cljs.core.chunk_first.call(null,s__19244__$2);
var size__10190__auto__ = cljs.core.count.call(null,c__10189__auto__);
var b__19246 = cljs.core.chunk_buffer.call(null,size__10190__auto__);
if((function (){var i__19245 = (0);
while(true){
if((i__19245 < size__10190__auto__)){
var i = cljs.core._nth.call(null,c__10189__auto__,i__19245);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__19246,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__19247 = (i__19245 + (1));
i__19245 = G__19247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19246),eval_soup$core$add_timeouts_if_necessary_$_iter__19243.call(null,cljs.core.chunk_rest.call(null,s__19244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19246),null);
}
} else {
var i = cljs.core.first.call(null,s__19244__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__19243.call(null,cljs.core.rest.call(null,s__19244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10191__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args19248 = [];
var len__10516__auto___19254 = arguments.length;
var i__10517__auto___19255 = (0);
while(true){
if((i__10517__auto___19255 < len__10516__auto___19254)){
args19248.push((arguments[i__10517__auto___19255]));

var G__19256 = (i__10517__auto___19255 + (1));
i__10517__auto___19255 = G__19256;
continue;
} else {
}
break;
}

var G__19250 = args19248.length;
switch (G__19250) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19248.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__19251){
var map__19252 = p__19251;
var map__19252__$1 = ((((!((map__19252 == null)))?((((map__19252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19252):map__19252);
var custom_load = cljs.core.get.call(null,map__19252__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__19252__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__19252,map__19252__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__19252,map__19252__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__19252,map__19252__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__19252,map__19252__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__19252,map__19252__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__19252,map__19252__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__10245__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10245__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map