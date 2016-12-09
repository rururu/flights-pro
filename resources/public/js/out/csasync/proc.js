// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22965 = [];
var len__9931__auto___23028 = arguments.length;
var i__9932__auto___23029 = (0);
while(true){
if((i__9932__auto___23029 < len__9931__auto___23028)){
args22965.push((arguments[i__9932__auto___23029]));

var G__23030 = (i__9932__auto___23029 + (1));
i__9932__auto___23029 = G__23030;
continue;
} else {
}
break;
}

var G__22967 = args22965.length;
switch (G__22967) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22965.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11227__auto__){
return (function (){
var f__11228__auto__ = (function (){var switch__11206__auto__ = ((function (c__11227__auto__){
return (function (state_22981){
var state_val_22982 = (state_22981[(1)]);
if((state_val_22982 === (1))){
var state_22981__$1 = state_22981;
var statearr_22983_23032 = state_22981__$1;
(statearr_22983_23032[(2)] = null);

(statearr_22983_23032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (2))){
var state_22981__$1 = state_22981;
var statearr_22984_23033 = state_22981__$1;
(statearr_22984_23033[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (3))){
var inst_22979 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22981__$1,inst_22979);
} else {
if((state_val_22982 === (4))){
var inst_22970 = func.call(null);
var inst_22971 = cljs.core.async.timeout.call(null,time_out);
var state_22981__$1 = (function (){var statearr_22986 = state_22981;
(statearr_22986[(7)] = inst_22970);

return statearr_22986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22981__$1,(7),inst_22971);
} else {
if((state_val_22982 === (5))){
var state_22981__$1 = state_22981;
var statearr_22987_23034 = state_22981__$1;
(statearr_22987_23034[(2)] = null);

(statearr_22987_23034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (6))){
var inst_22977 = (state_22981[(2)]);
var state_22981__$1 = state_22981;
var statearr_22988_23035 = state_22981__$1;
(statearr_22988_23035[(2)] = inst_22977);

(statearr_22988_23035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22982 === (7))){
var inst_22973 = (state_22981[(2)]);
var state_22981__$1 = (function (){var statearr_22989 = state_22981;
(statearr_22989[(8)] = inst_22973);

return statearr_22989;
})();
var statearr_22990_23036 = state_22981__$1;
(statearr_22990_23036[(2)] = null);

(statearr_22990_23036[(1)] = (2));


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
});})(c__11227__auto__))
;
return ((function (switch__11206__auto__,c__11227__auto__){
return (function() {
var csasync$proc$state_machine__11207__auto__ = null;
var csasync$proc$state_machine__11207__auto____0 = (function (){
var statearr_22994 = [null,null,null,null,null,null,null,null,null];
(statearr_22994[(0)] = csasync$proc$state_machine__11207__auto__);

(statearr_22994[(1)] = (1));

return statearr_22994;
});
var csasync$proc$state_machine__11207__auto____1 = (function (state_22981){
while(true){
var ret_value__11208__auto__ = (function (){try{while(true){
var result__11209__auto__ = switch__11206__auto__.call(null,state_22981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11209__auto__;
}
break;
}
}catch (e22995){if((e22995 instanceof Object)){
var ex__11210__auto__ = e22995;
var statearr_22996_23037 = state_22981;
(statearr_22996_23037[(5)] = ex__11210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23038 = state_22981;
state_22981 = G__23038;
continue;
} else {
return ret_value__11208__auto__;
}
break;
}
});
csasync$proc$state_machine__11207__auto__ = function(state_22981){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11207__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11207__auto____1.call(this,state_22981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11207__auto____0;
csasync$proc$state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11207__auto____1;
return csasync$proc$state_machine__11207__auto__;
})()
;})(switch__11206__auto__,c__11227__auto__))
})();
var state__11229__auto__ = (function (){var statearr_22997 = f__11228__auto__.call(null);
(statearr_22997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11227__auto__);

return statearr_22997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11229__auto__);
});})(c__11227__auto__))
);

return c__11227__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11227__auto__){
return (function (){
var f__11228__auto__ = (function (){var switch__11206__auto__ = ((function (c__11227__auto__){
return (function (state_23011){
var state_val_23012 = (state_23011[(1)]);
if((state_val_23012 === (1))){
var state_23011__$1 = state_23011;
var statearr_23013_23039 = state_23011__$1;
(statearr_23013_23039[(2)] = null);

(statearr_23013_23039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (2))){
var state_23011__$1 = state_23011;
var statearr_23014_23040 = state_23011__$1;
(statearr_23014_23040[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (3))){
var inst_23009 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23011__$1,inst_23009);
} else {
if((state_val_23012 === (4))){
var inst_23000 = func.call(null,param);
var inst_23001 = cljs.core.async.timeout.call(null,time_out);
var state_23011__$1 = (function (){var statearr_23016 = state_23011;
(statearr_23016[(7)] = inst_23000);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23011__$1,(7),inst_23001);
} else {
if((state_val_23012 === (5))){
var state_23011__$1 = state_23011;
var statearr_23017_23041 = state_23011__$1;
(statearr_23017_23041[(2)] = null);

(statearr_23017_23041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (6))){
var inst_23007 = (state_23011[(2)]);
var state_23011__$1 = state_23011;
var statearr_23018_23042 = state_23011__$1;
(statearr_23018_23042[(2)] = inst_23007);

(statearr_23018_23042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23012 === (7))){
var inst_23003 = (state_23011[(2)]);
var state_23011__$1 = (function (){var statearr_23019 = state_23011;
(statearr_23019[(8)] = inst_23003);

return statearr_23019;
})();
var statearr_23020_23043 = state_23011__$1;
(statearr_23020_23043[(2)] = null);

(statearr_23020_23043[(1)] = (2));


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
});})(c__11227__auto__))
;
return ((function (switch__11206__auto__,c__11227__auto__){
return (function() {
var csasync$proc$state_machine__11207__auto__ = null;
var csasync$proc$state_machine__11207__auto____0 = (function (){
var statearr_23024 = [null,null,null,null,null,null,null,null,null];
(statearr_23024[(0)] = csasync$proc$state_machine__11207__auto__);

(statearr_23024[(1)] = (1));

return statearr_23024;
});
var csasync$proc$state_machine__11207__auto____1 = (function (state_23011){
while(true){
var ret_value__11208__auto__ = (function (){try{while(true){
var result__11209__auto__ = switch__11206__auto__.call(null,state_23011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11209__auto__;
}
break;
}
}catch (e23025){if((e23025 instanceof Object)){
var ex__11210__auto__ = e23025;
var statearr_23026_23044 = state_23011;
(statearr_23026_23044[(5)] = ex__11210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23045 = state_23011;
state_23011 = G__23045;
continue;
} else {
return ret_value__11208__auto__;
}
break;
}
});
csasync$proc$state_machine__11207__auto__ = function(state_23011){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11207__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11207__auto____1.call(this,state_23011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11207__auto____0;
csasync$proc$state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11207__auto____1;
return csasync$proc$state_machine__11207__auto__;
})()
;})(switch__11206__auto__,c__11227__auto__))
})();
var state__11229__auto__ = (function (){var statearr_23027 = f__11228__auto__.call(null);
(statearr_23027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11227__auto__);

return statearr_23027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11229__auto__);
});})(c__11227__auto__))
);

return c__11227__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11227__auto___23130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11227__auto___23130){
return (function (){
var f__11228__auto__ = (function (){var switch__11206__auto__ = ((function (c__11227__auto___23130){
return (function (state_23108){
var state_val_23109 = (state_23108[(1)]);
if((state_val_23109 === (7))){
var inst_23097 = cljs.core.async.timeout.call(null,time_out);
var state_23108__$1 = state_23108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23108__$1,(10),inst_23097);
} else {
if((state_val_23109 === (1))){
var state_23108__$1 = state_23108;
var statearr_23110_23131 = state_23108__$1;
(statearr_23110_23131[(2)] = null);

(statearr_23110_23131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (4))){
var inst_23092 = proc_fn.call(null);
var state_23108__$1 = state_23108;
var statearr_23111_23132 = state_23108__$1;
(statearr_23111_23132[(2)] = inst_23092);

(statearr_23111_23132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (6))){
var inst_23095 = (state_23108[(2)]);
var state_23108__$1 = state_23108;
if(cljs.core.truth_(inst_23095)){
var statearr_23112_23133 = state_23108__$1;
(statearr_23112_23133[(1)] = (7));

} else {
var statearr_23113_23134 = state_23108__$1;
(statearr_23113_23134[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (3))){
var inst_23105 = (state_23108[(2)]);
var inst_23106 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_23108__$1 = (function (){var statearr_23114 = state_23108;
(statearr_23114[(7)] = inst_23105);

return statearr_23114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23108__$1,inst_23106);
} else {
if((state_val_23109 === (2))){
var inst_23090 = (state_23108[(8)]);
var inst_23089 = cljs.core.deref.call(null,status);
var inst_23090__$1 = cljs.core._EQ_.call(null,inst_23089,"RUN");
var state_23108__$1 = (function (){var statearr_23115 = state_23108;
(statearr_23115[(8)] = inst_23090__$1);

return statearr_23115;
})();
if(inst_23090__$1){
var statearr_23116_23135 = state_23108__$1;
(statearr_23116_23135[(1)] = (4));

} else {
var statearr_23117_23136 = state_23108__$1;
(statearr_23117_23136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (9))){
var inst_23103 = (state_23108[(2)]);
var state_23108__$1 = state_23108;
var statearr_23118_23137 = state_23108__$1;
(statearr_23118_23137[(2)] = inst_23103);

(statearr_23118_23137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (5))){
var inst_23090 = (state_23108[(8)]);
var state_23108__$1 = state_23108;
var statearr_23119_23138 = state_23108__$1;
(statearr_23119_23138[(2)] = inst_23090);

(statearr_23119_23138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (10))){
var inst_23099 = (state_23108[(2)]);
var state_23108__$1 = (function (){var statearr_23120 = state_23108;
(statearr_23120[(9)] = inst_23099);

return statearr_23120;
})();
var statearr_23121_23139 = state_23108__$1;
(statearr_23121_23139[(2)] = null);

(statearr_23121_23139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23109 === (8))){
var state_23108__$1 = state_23108;
var statearr_23122_23140 = state_23108__$1;
(statearr_23122_23140[(2)] = null);

(statearr_23122_23140[(1)] = (9));


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
});})(c__11227__auto___23130))
;
return ((function (switch__11206__auto__,c__11227__auto___23130){
return (function() {
var csasync$proc$start_process_$_state_machine__11207__auto__ = null;
var csasync$proc$start_process_$_state_machine__11207__auto____0 = (function (){
var statearr_23126 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23126[(0)] = csasync$proc$start_process_$_state_machine__11207__auto__);

(statearr_23126[(1)] = (1));

return statearr_23126;
});
var csasync$proc$start_process_$_state_machine__11207__auto____1 = (function (state_23108){
while(true){
var ret_value__11208__auto__ = (function (){try{while(true){
var result__11209__auto__ = switch__11206__auto__.call(null,state_23108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11209__auto__;
}
break;
}
}catch (e23127){if((e23127 instanceof Object)){
var ex__11210__auto__ = e23127;
var statearr_23128_23141 = state_23108;
(statearr_23128_23141[(5)] = ex__11210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23142 = state_23108;
state_23108 = G__23142;
continue;
} else {
return ret_value__11208__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11207__auto__ = function(state_23108){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11207__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11207__auto____1.call(this,state_23108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11207__auto____0;
csasync$proc$start_process_$_state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11207__auto____1;
return csasync$proc$start_process_$_state_machine__11207__auto__;
})()
;})(switch__11206__auto__,c__11227__auto___23130))
})();
var state__11229__auto__ = (function (){var statearr_23129 = f__11228__auto__.call(null);
(statearr_23129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11227__auto___23130);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11229__auto__);
});})(c__11227__auto___23130))
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
var c__11227__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11227__auto__){
return (function (){
var f__11228__auto__ = (function (){var switch__11206__auto__ = ((function (c__11227__auto__){
return (function (state_23163){
var state_val_23164 = (state_23163[(1)]);
if((state_val_23164 === (1))){
var inst_23158 = cljs.core.async.timeout.call(null,time);
var state_23163__$1 = state_23163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23163__$1,(2),inst_23158);
} else {
if((state_val_23164 === (2))){
var inst_23160 = (state_23163[(2)]);
var inst_23161 = func.call(null);
var state_23163__$1 = (function (){var statearr_23165 = state_23163;
(statearr_23165[(7)] = inst_23160);

return statearr_23165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23163__$1,inst_23161);
} else {
return null;
}
}
});})(c__11227__auto__))
;
return ((function (switch__11206__auto__,c__11227__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11207__auto__ = null;
var csasync$proc$delayer_$_state_machine__11207__auto____0 = (function (){
var statearr_23169 = [null,null,null,null,null,null,null,null];
(statearr_23169[(0)] = csasync$proc$delayer_$_state_machine__11207__auto__);

(statearr_23169[(1)] = (1));

return statearr_23169;
});
var csasync$proc$delayer_$_state_machine__11207__auto____1 = (function (state_23163){
while(true){
var ret_value__11208__auto__ = (function (){try{while(true){
var result__11209__auto__ = switch__11206__auto__.call(null,state_23163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11209__auto__;
}
break;
}
}catch (e23170){if((e23170 instanceof Object)){
var ex__11210__auto__ = e23170;
var statearr_23171_23173 = state_23163;
(statearr_23171_23173[(5)] = ex__11210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23174 = state_23163;
state_23163 = G__23174;
continue;
} else {
return ret_value__11208__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11207__auto__ = function(state_23163){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11207__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11207__auto____1.call(this,state_23163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11207__auto____0;
csasync$proc$delayer_$_state_machine__11207__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11207__auto____1;
return csasync$proc$delayer_$_state_machine__11207__auto__;
})()
;})(switch__11206__auto__,c__11227__auto__))
})();
var state__11229__auto__ = (function (){var statearr_23172 = f__11228__auto__.call(null);
(statearr_23172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11227__auto__);

return statearr_23172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11229__auto__);
});})(c__11227__auto__))
);

return c__11227__auto__;
});

//# sourceMappingURL=proc.js.map