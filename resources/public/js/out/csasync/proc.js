// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23139 = [];
var len__19810__auto___23202 = arguments.length;
var i__19811__auto___23203 = (0);
while(true){
if((i__19811__auto___23203 < len__19810__auto___23202)){
args23139.push((arguments[i__19811__auto___23203]));

var G__23204 = (i__19811__auto___23203 + (1));
i__19811__auto___23203 = G__23204;
continue;
} else {
}
break;
}

var G__23141 = args23139.length;
switch (G__23141) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23139.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20765__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20765__auto__){
return (function (){
var f__20766__auto__ = (function (){var switch__20744__auto__ = ((function (c__20765__auto__){
return (function (state_23155){
var state_val_23156 = (state_23155[(1)]);
if((state_val_23156 === (1))){
var state_23155__$1 = state_23155;
var statearr_23157_23206 = state_23155__$1;
(statearr_23157_23206[(2)] = null);

(statearr_23157_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (2))){
var state_23155__$1 = state_23155;
var statearr_23158_23207 = state_23155__$1;
(statearr_23158_23207[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (3))){
var inst_23153 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23155__$1,inst_23153);
} else {
if((state_val_23156 === (4))){
var inst_23144 = func.call(null);
var inst_23145 = cljs.core.async.timeout.call(null,time_out);
var state_23155__$1 = (function (){var statearr_23160 = state_23155;
(statearr_23160[(7)] = inst_23144);

return statearr_23160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23155__$1,(7),inst_23145);
} else {
if((state_val_23156 === (5))){
var state_23155__$1 = state_23155;
var statearr_23161_23208 = state_23155__$1;
(statearr_23161_23208[(2)] = null);

(statearr_23161_23208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (6))){
var inst_23151 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23162_23209 = state_23155__$1;
(statearr_23162_23209[(2)] = inst_23151);

(statearr_23162_23209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (7))){
var inst_23147 = (state_23155[(2)]);
var state_23155__$1 = (function (){var statearr_23163 = state_23155;
(statearr_23163[(8)] = inst_23147);

return statearr_23163;
})();
var statearr_23164_23210 = state_23155__$1;
(statearr_23164_23210[(2)] = null);

(statearr_23164_23210[(1)] = (2));


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
});})(c__20765__auto__))
;
return ((function (switch__20744__auto__,c__20765__auto__){
return (function() {
var csasync$proc$state_machine__20745__auto__ = null;
var csasync$proc$state_machine__20745__auto____0 = (function (){
var statearr_23168 = [null,null,null,null,null,null,null,null,null];
(statearr_23168[(0)] = csasync$proc$state_machine__20745__auto__);

(statearr_23168[(1)] = (1));

return statearr_23168;
});
var csasync$proc$state_machine__20745__auto____1 = (function (state_23155){
while(true){
var ret_value__20746__auto__ = (function (){try{while(true){
var result__20747__auto__ = switch__20744__auto__.call(null,state_23155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20747__auto__;
}
break;
}
}catch (e23169){if((e23169 instanceof Object)){
var ex__20748__auto__ = e23169;
var statearr_23170_23211 = state_23155;
(statearr_23170_23211[(5)] = ex__20748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23212 = state_23155;
state_23155 = G__23212;
continue;
} else {
return ret_value__20746__auto__;
}
break;
}
});
csasync$proc$state_machine__20745__auto__ = function(state_23155){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20745__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20745__auto____1.call(this,state_23155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20745__auto____0;
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20745__auto____1;
return csasync$proc$state_machine__20745__auto__;
})()
;})(switch__20744__auto__,c__20765__auto__))
})();
var state__20767__auto__ = (function (){var statearr_23171 = f__20766__auto__.call(null);
(statearr_23171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20765__auto__);

return statearr_23171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20767__auto__);
});})(c__20765__auto__))
);

return c__20765__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20765__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20765__auto__){
return (function (){
var f__20766__auto__ = (function (){var switch__20744__auto__ = ((function (c__20765__auto__){
return (function (state_23185){
var state_val_23186 = (state_23185[(1)]);
if((state_val_23186 === (1))){
var state_23185__$1 = state_23185;
var statearr_23187_23213 = state_23185__$1;
(statearr_23187_23213[(2)] = null);

(statearr_23187_23213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23186 === (2))){
var state_23185__$1 = state_23185;
var statearr_23188_23214 = state_23185__$1;
(statearr_23188_23214[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23186 === (3))){
var inst_23183 = (state_23185[(2)]);
var state_23185__$1 = state_23185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23185__$1,inst_23183);
} else {
if((state_val_23186 === (4))){
var inst_23174 = func.call(null,param);
var inst_23175 = cljs.core.async.timeout.call(null,time_out);
var state_23185__$1 = (function (){var statearr_23190 = state_23185;
(statearr_23190[(7)] = inst_23174);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23185__$1,(7),inst_23175);
} else {
if((state_val_23186 === (5))){
var state_23185__$1 = state_23185;
var statearr_23191_23215 = state_23185__$1;
(statearr_23191_23215[(2)] = null);

(statearr_23191_23215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23186 === (6))){
var inst_23181 = (state_23185[(2)]);
var state_23185__$1 = state_23185;
var statearr_23192_23216 = state_23185__$1;
(statearr_23192_23216[(2)] = inst_23181);

(statearr_23192_23216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23186 === (7))){
var inst_23177 = (state_23185[(2)]);
var state_23185__$1 = (function (){var statearr_23193 = state_23185;
(statearr_23193[(8)] = inst_23177);

return statearr_23193;
})();
var statearr_23194_23217 = state_23185__$1;
(statearr_23194_23217[(2)] = null);

(statearr_23194_23217[(1)] = (2));


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
});})(c__20765__auto__))
;
return ((function (switch__20744__auto__,c__20765__auto__){
return (function() {
var csasync$proc$state_machine__20745__auto__ = null;
var csasync$proc$state_machine__20745__auto____0 = (function (){
var statearr_23198 = [null,null,null,null,null,null,null,null,null];
(statearr_23198[(0)] = csasync$proc$state_machine__20745__auto__);

(statearr_23198[(1)] = (1));

return statearr_23198;
});
var csasync$proc$state_machine__20745__auto____1 = (function (state_23185){
while(true){
var ret_value__20746__auto__ = (function (){try{while(true){
var result__20747__auto__ = switch__20744__auto__.call(null,state_23185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20747__auto__;
}
break;
}
}catch (e23199){if((e23199 instanceof Object)){
var ex__20748__auto__ = e23199;
var statearr_23200_23218 = state_23185;
(statearr_23200_23218[(5)] = ex__20748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23185;
state_23185 = G__23219;
continue;
} else {
return ret_value__20746__auto__;
}
break;
}
});
csasync$proc$state_machine__20745__auto__ = function(state_23185){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20745__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20745__auto____1.call(this,state_23185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20745__auto____0;
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20745__auto____1;
return csasync$proc$state_machine__20745__auto__;
})()
;})(switch__20744__auto__,c__20765__auto__))
})();
var state__20767__auto__ = (function (){var statearr_23201 = f__20766__auto__.call(null);
(statearr_23201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20765__auto__);

return statearr_23201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20767__auto__);
});})(c__20765__auto__))
);

return c__20765__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args23220 = [];
var len__19810__auto___23307 = arguments.length;
var i__19811__auto___23308 = (0);
while(true){
if((i__19811__auto___23308 < len__19810__auto___23307)){
args23220.push((arguments[i__19811__auto___23308]));

var G__23309 = (i__19811__auto___23308 + (1));
i__19811__auto___23308 = G__23309;
continue;
} else {
}
break;
}

var G__23222 = args23220.length;
switch (G__23222) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23220.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20765__auto___23311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20765__auto___23311){
return (function (){
var f__20766__auto__ = (function (){var switch__20744__auto__ = ((function (c__20765__auto___23311){
return (function (state_23243){
var state_val_23244 = (state_23243[(1)]);
if((state_val_23244 === (7))){
var inst_23232 = cljs.core.async.timeout.call(null,time_out);
var state_23243__$1 = state_23243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23243__$1,(10),inst_23232);
} else {
if((state_val_23244 === (1))){
var state_23243__$1 = state_23243;
var statearr_23245_23312 = state_23243__$1;
(statearr_23245_23312[(2)] = null);

(statearr_23245_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (4))){
var inst_23227 = proc_fn.call(null);
var state_23243__$1 = state_23243;
var statearr_23246_23313 = state_23243__$1;
(statearr_23246_23313[(2)] = inst_23227);

(statearr_23246_23313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (6))){
var inst_23230 = (state_23243[(2)]);
var state_23243__$1 = state_23243;
if(cljs.core.truth_(inst_23230)){
var statearr_23247_23314 = state_23243__$1;
(statearr_23247_23314[(1)] = (7));

} else {
var statearr_23248_23315 = state_23243__$1;
(statearr_23248_23315[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (3))){
var inst_23240 = (state_23243[(2)]);
var inst_23241 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23243__$1 = (function (){var statearr_23249 = state_23243;
(statearr_23249[(7)] = inst_23240);

return statearr_23249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23243__$1,inst_23241);
} else {
if((state_val_23244 === (2))){
var inst_23225 = (state_23243[(8)]);
var inst_23224 = cljs.core.deref.call(null,status);
var inst_23225__$1 = cljs.core._EQ_.call(null,inst_23224,"RUN");
var state_23243__$1 = (function (){var statearr_23250 = state_23243;
(statearr_23250[(8)] = inst_23225__$1);

return statearr_23250;
})();
if(inst_23225__$1){
var statearr_23251_23316 = state_23243__$1;
(statearr_23251_23316[(1)] = (4));

} else {
var statearr_23252_23317 = state_23243__$1;
(statearr_23252_23317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (9))){
var inst_23238 = (state_23243[(2)]);
var state_23243__$1 = state_23243;
var statearr_23253_23318 = state_23243__$1;
(statearr_23253_23318[(2)] = inst_23238);

(statearr_23253_23318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (5))){
var inst_23225 = (state_23243[(8)]);
var state_23243__$1 = state_23243;
var statearr_23254_23319 = state_23243__$1;
(statearr_23254_23319[(2)] = inst_23225);

(statearr_23254_23319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (10))){
var inst_23234 = (state_23243[(2)]);
var state_23243__$1 = (function (){var statearr_23255 = state_23243;
(statearr_23255[(9)] = inst_23234);

return statearr_23255;
})();
var statearr_23256_23320 = state_23243__$1;
(statearr_23256_23320[(2)] = null);

(statearr_23256_23320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (8))){
var state_23243__$1 = state_23243;
var statearr_23257_23321 = state_23243__$1;
(statearr_23257_23321[(2)] = null);

(statearr_23257_23321[(1)] = (9));


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
});})(c__20765__auto___23311))
;
return ((function (switch__20744__auto__,c__20765__auto___23311){
return (function() {
var csasync$proc$state_machine__20745__auto__ = null;
var csasync$proc$state_machine__20745__auto____0 = (function (){
var statearr_23261 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23261[(0)] = csasync$proc$state_machine__20745__auto__);

(statearr_23261[(1)] = (1));

return statearr_23261;
});
var csasync$proc$state_machine__20745__auto____1 = (function (state_23243){
while(true){
var ret_value__20746__auto__ = (function (){try{while(true){
var result__20747__auto__ = switch__20744__auto__.call(null,state_23243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20747__auto__;
}
break;
}
}catch (e23262){if((e23262 instanceof Object)){
var ex__20748__auto__ = e23262;
var statearr_23263_23322 = state_23243;
(statearr_23263_23322[(5)] = ex__20748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23323 = state_23243;
state_23243 = G__23323;
continue;
} else {
return ret_value__20746__auto__;
}
break;
}
});
csasync$proc$state_machine__20745__auto__ = function(state_23243){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20745__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20745__auto____1.call(this,state_23243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20745__auto____0;
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20745__auto____1;
return csasync$proc$state_machine__20745__auto__;
})()
;})(switch__20744__auto__,c__20765__auto___23311))
})();
var state__20767__auto__ = (function (){var statearr_23264 = f__20766__auto__.call(null);
(statearr_23264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20765__auto___23311);

return statearr_23264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20767__auto__);
});})(c__20765__auto___23311))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20765__auto___23324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20765__auto___23324){
return (function (){
var f__20766__auto__ = (function (){var switch__20744__auto__ = ((function (c__20765__auto___23324){
return (function (state_23285){
var state_val_23286 = (state_23285[(1)]);
if((state_val_23286 === (7))){
var inst_23274 = cljs.core.async.timeout.call(null,time_out);
var state_23285__$1 = state_23285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23285__$1,(10),inst_23274);
} else {
if((state_val_23286 === (1))){
var state_23285__$1 = state_23285;
var statearr_23287_23325 = state_23285__$1;
(statearr_23287_23325[(2)] = null);

(statearr_23287_23325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (4))){
var inst_23269 = proc_fn.call(null,param);
var state_23285__$1 = state_23285;
var statearr_23288_23326 = state_23285__$1;
(statearr_23288_23326[(2)] = inst_23269);

(statearr_23288_23326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (6))){
var inst_23272 = (state_23285[(2)]);
var state_23285__$1 = state_23285;
if(cljs.core.truth_(inst_23272)){
var statearr_23289_23327 = state_23285__$1;
(statearr_23289_23327[(1)] = (7));

} else {
var statearr_23290_23328 = state_23285__$1;
(statearr_23290_23328[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (3))){
var inst_23282 = (state_23285[(2)]);
var inst_23283 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23285__$1 = (function (){var statearr_23291 = state_23285;
(statearr_23291[(7)] = inst_23282);

return statearr_23291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23285__$1,inst_23283);
} else {
if((state_val_23286 === (2))){
var inst_23267 = (state_23285[(8)]);
var inst_23266 = cljs.core.deref.call(null,status);
var inst_23267__$1 = cljs.core._EQ_.call(null,inst_23266,"RUN");
var state_23285__$1 = (function (){var statearr_23292 = state_23285;
(statearr_23292[(8)] = inst_23267__$1);

return statearr_23292;
})();
if(inst_23267__$1){
var statearr_23293_23329 = state_23285__$1;
(statearr_23293_23329[(1)] = (4));

} else {
var statearr_23294_23330 = state_23285__$1;
(statearr_23294_23330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (9))){
var inst_23280 = (state_23285[(2)]);
var state_23285__$1 = state_23285;
var statearr_23295_23331 = state_23285__$1;
(statearr_23295_23331[(2)] = inst_23280);

(statearr_23295_23331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (5))){
var inst_23267 = (state_23285[(8)]);
var state_23285__$1 = state_23285;
var statearr_23296_23332 = state_23285__$1;
(statearr_23296_23332[(2)] = inst_23267);

(statearr_23296_23332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (10))){
var inst_23276 = (state_23285[(2)]);
var state_23285__$1 = (function (){var statearr_23297 = state_23285;
(statearr_23297[(9)] = inst_23276);

return statearr_23297;
})();
var statearr_23298_23333 = state_23285__$1;
(statearr_23298_23333[(2)] = null);

(statearr_23298_23333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23286 === (8))){
var state_23285__$1 = state_23285;
var statearr_23299_23334 = state_23285__$1;
(statearr_23299_23334[(2)] = null);

(statearr_23299_23334[(1)] = (9));


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
});})(c__20765__auto___23324))
;
return ((function (switch__20744__auto__,c__20765__auto___23324){
return (function() {
var csasync$proc$state_machine__20745__auto__ = null;
var csasync$proc$state_machine__20745__auto____0 = (function (){
var statearr_23303 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23303[(0)] = csasync$proc$state_machine__20745__auto__);

(statearr_23303[(1)] = (1));

return statearr_23303;
});
var csasync$proc$state_machine__20745__auto____1 = (function (state_23285){
while(true){
var ret_value__20746__auto__ = (function (){try{while(true){
var result__20747__auto__ = switch__20744__auto__.call(null,state_23285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20747__auto__;
}
break;
}
}catch (e23304){if((e23304 instanceof Object)){
var ex__20748__auto__ = e23304;
var statearr_23305_23335 = state_23285;
(statearr_23305_23335[(5)] = ex__20748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23336 = state_23285;
state_23285 = G__23336;
continue;
} else {
return ret_value__20746__auto__;
}
break;
}
});
csasync$proc$state_machine__20745__auto__ = function(state_23285){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20745__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20745__auto____1.call(this,state_23285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20745__auto____0;
csasync$proc$state_machine__20745__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20745__auto____1;
return csasync$proc$state_machine__20745__auto__;
})()
;})(switch__20744__auto__,c__20765__auto___23324))
})();
var state__20767__auto__ = (function (){var statearr_23306 = f__20766__auto__.call(null);
(statearr_23306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20765__auto___23324);

return statearr_23306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20767__auto__);
});})(c__20765__auto___23324))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$lang$maxFixedArity = 4;

csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"STOP");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});

//# sourceMappingURL=proc.js.map