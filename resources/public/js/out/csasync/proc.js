// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22993 = [];
var len__21872__auto___23056 = arguments.length;
var i__21873__auto___23057 = (0);
while(true){
if((i__21873__auto___23057 < len__21872__auto___23056)){
args22993.push((arguments[i__21873__auto___23057]));

var G__23058 = (i__21873__auto___23057 + (1));
i__21873__auto___23057 = G__23058;
continue;
} else {
}
break;
}

var G__22995 = args22993.length;
switch (G__22995) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22993.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22948__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22948__auto__){
return (function (){
var f__22949__auto__ = (function (){var switch__22927__auto__ = ((function (c__22948__auto__){
return (function (state_23009){
var state_val_23010 = (state_23009[(1)]);
if((state_val_23010 === (1))){
var state_23009__$1 = state_23009;
var statearr_23011_23060 = state_23009__$1;
(statearr_23011_23060[(2)] = null);

(statearr_23011_23060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (2))){
var state_23009__$1 = state_23009;
var statearr_23012_23061 = state_23009__$1;
(statearr_23012_23061[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (3))){
var inst_23007 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23009__$1,inst_23007);
} else {
if((state_val_23010 === (4))){
var inst_22998 = func.call(null);
var inst_22999 = cljs.core.async.timeout.call(null,time_out);
var state_23009__$1 = (function (){var statearr_23014 = state_23009;
(statearr_23014[(7)] = inst_22998);

return statearr_23014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23009__$1,(7),inst_22999);
} else {
if((state_val_23010 === (5))){
var state_23009__$1 = state_23009;
var statearr_23015_23062 = state_23009__$1;
(statearr_23015_23062[(2)] = null);

(statearr_23015_23062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (6))){
var inst_23005 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23016_23063 = state_23009__$1;
(statearr_23016_23063[(2)] = inst_23005);

(statearr_23016_23063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (7))){
var inst_23001 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23017 = state_23009;
(statearr_23017[(8)] = inst_23001);

return statearr_23017;
})();
var statearr_23018_23064 = state_23009__$1;
(statearr_23018_23064[(2)] = null);

(statearr_23018_23064[(1)] = (2));


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
});})(c__22948__auto__))
;
return ((function (switch__22927__auto__,c__22948__auto__){
return (function() {
var csasync$proc$state_machine__22928__auto__ = null;
var csasync$proc$state_machine__22928__auto____0 = (function (){
var statearr_23022 = [null,null,null,null,null,null,null,null,null];
(statearr_23022[(0)] = csasync$proc$state_machine__22928__auto__);

(statearr_23022[(1)] = (1));

return statearr_23022;
});
var csasync$proc$state_machine__22928__auto____1 = (function (state_23009){
while(true){
var ret_value__22929__auto__ = (function (){try{while(true){
var result__22930__auto__ = switch__22927__auto__.call(null,state_23009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22930__auto__;
}
break;
}
}catch (e23023){if((e23023 instanceof Object)){
var ex__22931__auto__ = e23023;
var statearr_23024_23065 = state_23009;
(statearr_23024_23065[(5)] = ex__22931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23066 = state_23009;
state_23009 = G__23066;
continue;
} else {
return ret_value__22929__auto__;
}
break;
}
});
csasync$proc$state_machine__22928__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22928__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22928__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22928__auto____0;
csasync$proc$state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22928__auto____1;
return csasync$proc$state_machine__22928__auto__;
})()
;})(switch__22927__auto__,c__22948__auto__))
})();
var state__22950__auto__ = (function (){var statearr_23025 = f__22949__auto__.call(null);
(statearr_23025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22948__auto__);

return statearr_23025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22950__auto__);
});})(c__22948__auto__))
);

return c__22948__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22948__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22948__auto__){
return (function (){
var f__22949__auto__ = (function (){var switch__22927__auto__ = ((function (c__22948__auto__){
return (function (state_23039){
var state_val_23040 = (state_23039[(1)]);
if((state_val_23040 === (1))){
var state_23039__$1 = state_23039;
var statearr_23041_23067 = state_23039__$1;
(statearr_23041_23067[(2)] = null);

(statearr_23041_23067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (2))){
var state_23039__$1 = state_23039;
var statearr_23042_23068 = state_23039__$1;
(statearr_23042_23068[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (3))){
var inst_23037 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23039__$1,inst_23037);
} else {
if((state_val_23040 === (4))){
var inst_23028 = func.call(null,param);
var inst_23029 = cljs.core.async.timeout.call(null,time_out);
var state_23039__$1 = (function (){var statearr_23044 = state_23039;
(statearr_23044[(7)] = inst_23028);

return statearr_23044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23039__$1,(7),inst_23029);
} else {
if((state_val_23040 === (5))){
var state_23039__$1 = state_23039;
var statearr_23045_23069 = state_23039__$1;
(statearr_23045_23069[(2)] = null);

(statearr_23045_23069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (6))){
var inst_23035 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23046_23070 = state_23039__$1;
(statearr_23046_23070[(2)] = inst_23035);

(statearr_23046_23070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (7))){
var inst_23031 = (state_23039[(2)]);
var state_23039__$1 = (function (){var statearr_23047 = state_23039;
(statearr_23047[(8)] = inst_23031);

return statearr_23047;
})();
var statearr_23048_23071 = state_23039__$1;
(statearr_23048_23071[(2)] = null);

(statearr_23048_23071[(1)] = (2));


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
});})(c__22948__auto__))
;
return ((function (switch__22927__auto__,c__22948__auto__){
return (function() {
var csasync$proc$state_machine__22928__auto__ = null;
var csasync$proc$state_machine__22928__auto____0 = (function (){
var statearr_23052 = [null,null,null,null,null,null,null,null,null];
(statearr_23052[(0)] = csasync$proc$state_machine__22928__auto__);

(statearr_23052[(1)] = (1));

return statearr_23052;
});
var csasync$proc$state_machine__22928__auto____1 = (function (state_23039){
while(true){
var ret_value__22929__auto__ = (function (){try{while(true){
var result__22930__auto__ = switch__22927__auto__.call(null,state_23039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22930__auto__;
}
break;
}
}catch (e23053){if((e23053 instanceof Object)){
var ex__22931__auto__ = e23053;
var statearr_23054_23072 = state_23039;
(statearr_23054_23072[(5)] = ex__22931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23073 = state_23039;
state_23039 = G__23073;
continue;
} else {
return ret_value__22929__auto__;
}
break;
}
});
csasync$proc$state_machine__22928__auto__ = function(state_23039){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22928__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22928__auto____1.call(this,state_23039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22928__auto____0;
csasync$proc$state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22928__auto____1;
return csasync$proc$state_machine__22928__auto__;
})()
;})(switch__22927__auto__,c__22948__auto__))
})();
var state__22950__auto__ = (function (){var statearr_23055 = f__22949__auto__.call(null);
(statearr_23055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22948__auto__);

return statearr_23055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22950__auto__);
});})(c__22948__auto__))
);

return c__22948__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22948__auto___23158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22948__auto___23158){
return (function (){
var f__22949__auto__ = (function (){var switch__22927__auto__ = ((function (c__22948__auto___23158){
return (function (state_23136){
var state_val_23137 = (state_23136[(1)]);
if((state_val_23137 === (7))){
var inst_23125 = cljs.core.async.timeout.call(null,time_out);
var state_23136__$1 = state_23136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23136__$1,(10),inst_23125);
} else {
if((state_val_23137 === (1))){
var state_23136__$1 = state_23136;
var statearr_23138_23159 = state_23136__$1;
(statearr_23138_23159[(2)] = null);

(statearr_23138_23159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (4))){
var inst_23120 = proc_fn.call(null);
var state_23136__$1 = state_23136;
var statearr_23139_23160 = state_23136__$1;
(statearr_23139_23160[(2)] = inst_23120);

(statearr_23139_23160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (6))){
var inst_23123 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
if(cljs.core.truth_(inst_23123)){
var statearr_23140_23161 = state_23136__$1;
(statearr_23140_23161[(1)] = (7));

} else {
var statearr_23141_23162 = state_23136__$1;
(statearr_23141_23162[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (3))){
var inst_23133 = (state_23136[(2)]);
var inst_23134 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23136__$1 = (function (){var statearr_23142 = state_23136;
(statearr_23142[(7)] = inst_23133);

return statearr_23142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23136__$1,inst_23134);
} else {
if((state_val_23137 === (2))){
var inst_23118 = (state_23136[(8)]);
var inst_23117 = cljs.core.deref.call(null,status);
var inst_23118__$1 = cljs.core._EQ_.call(null,inst_23117,"RUN");
var state_23136__$1 = (function (){var statearr_23143 = state_23136;
(statearr_23143[(8)] = inst_23118__$1);

return statearr_23143;
})();
if(inst_23118__$1){
var statearr_23144_23163 = state_23136__$1;
(statearr_23144_23163[(1)] = (4));

} else {
var statearr_23145_23164 = state_23136__$1;
(statearr_23145_23164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (9))){
var inst_23131 = (state_23136[(2)]);
var state_23136__$1 = state_23136;
var statearr_23146_23165 = state_23136__$1;
(statearr_23146_23165[(2)] = inst_23131);

(statearr_23146_23165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (5))){
var inst_23118 = (state_23136[(8)]);
var state_23136__$1 = state_23136;
var statearr_23147_23166 = state_23136__$1;
(statearr_23147_23166[(2)] = inst_23118);

(statearr_23147_23166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (10))){
var inst_23127 = (state_23136[(2)]);
var state_23136__$1 = (function (){var statearr_23148 = state_23136;
(statearr_23148[(9)] = inst_23127);

return statearr_23148;
})();
var statearr_23149_23167 = state_23136__$1;
(statearr_23149_23167[(2)] = null);

(statearr_23149_23167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23137 === (8))){
var state_23136__$1 = state_23136;
var statearr_23150_23168 = state_23136__$1;
(statearr_23150_23168[(2)] = null);

(statearr_23150_23168[(1)] = (9));


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
});})(c__22948__auto___23158))
;
return ((function (switch__22927__auto__,c__22948__auto___23158){
return (function() {
var csasync$proc$start_process_$_state_machine__22928__auto__ = null;
var csasync$proc$start_process_$_state_machine__22928__auto____0 = (function (){
var statearr_23154 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23154[(0)] = csasync$proc$start_process_$_state_machine__22928__auto__);

(statearr_23154[(1)] = (1));

return statearr_23154;
});
var csasync$proc$start_process_$_state_machine__22928__auto____1 = (function (state_23136){
while(true){
var ret_value__22929__auto__ = (function (){try{while(true){
var result__22930__auto__ = switch__22927__auto__.call(null,state_23136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22930__auto__;
}
break;
}
}catch (e23155){if((e23155 instanceof Object)){
var ex__22931__auto__ = e23155;
var statearr_23156_23169 = state_23136;
(statearr_23156_23169[(5)] = ex__22931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23170 = state_23136;
state_23136 = G__23170;
continue;
} else {
return ret_value__22929__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22928__auto__ = function(state_23136){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22928__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22928__auto____1.call(this,state_23136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22928__auto____0;
csasync$proc$start_process_$_state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22928__auto____1;
return csasync$proc$start_process_$_state_machine__22928__auto__;
})()
;})(switch__22927__auto__,c__22948__auto___23158))
})();
var state__22950__auto__ = (function (){var statearr_23157 = f__22949__auto__.call(null);
(statearr_23157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22948__auto___23158);

return statearr_23157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22950__auto__);
});})(c__22948__auto___23158))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});
csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"FINISH");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});
csasync.proc.delayer = (function csasync$proc$delayer(func,time){
var c__22948__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22948__auto__){
return (function (){
var f__22949__auto__ = (function (){var switch__22927__auto__ = ((function (c__22948__auto__){
return (function (state_23191){
var state_val_23192 = (state_23191[(1)]);
if((state_val_23192 === (1))){
var inst_23186 = cljs.core.async.timeout.call(null,time);
var state_23191__$1 = state_23191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23191__$1,(2),inst_23186);
} else {
if((state_val_23192 === (2))){
var inst_23188 = (state_23191[(2)]);
var inst_23189 = func.call(null);
var state_23191__$1 = (function (){var statearr_23193 = state_23191;
(statearr_23193[(7)] = inst_23188);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23191__$1,inst_23189);
} else {
return null;
}
}
});})(c__22948__auto__))
;
return ((function (switch__22927__auto__,c__22948__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22928__auto__ = null;
var csasync$proc$delayer_$_state_machine__22928__auto____0 = (function (){
var statearr_23197 = [null,null,null,null,null,null,null,null];
(statearr_23197[(0)] = csasync$proc$delayer_$_state_machine__22928__auto__);

(statearr_23197[(1)] = (1));

return statearr_23197;
});
var csasync$proc$delayer_$_state_machine__22928__auto____1 = (function (state_23191){
while(true){
var ret_value__22929__auto__ = (function (){try{while(true){
var result__22930__auto__ = switch__22927__auto__.call(null,state_23191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22930__auto__;
}
break;
}
}catch (e23198){if((e23198 instanceof Object)){
var ex__22931__auto__ = e23198;
var statearr_23199_23201 = state_23191;
(statearr_23199_23201[(5)] = ex__22931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23202 = state_23191;
state_23191 = G__23202;
continue;
} else {
return ret_value__22929__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22928__auto__ = function(state_23191){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22928__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22928__auto____1.call(this,state_23191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22928__auto____0;
csasync$proc$delayer_$_state_machine__22928__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22928__auto____1;
return csasync$proc$delayer_$_state_machine__22928__auto__;
})()
;})(switch__22927__auto__,c__22948__auto__))
})();
var state__22950__auto__ = (function (){var statearr_23200 = f__22949__auto__.call(null);
(statearr_23200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22948__auto__);

return statearr_23200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22950__auto__);
});})(c__22948__auto__))
);

return c__22948__auto__;
});

//# sourceMappingURL=proc.js.map