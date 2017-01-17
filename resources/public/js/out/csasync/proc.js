// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args11061 = [];
var len__9613__auto___11124 = arguments.length;
var i__9614__auto___11125 = (0);
while(true){
if((i__9614__auto___11125 < len__9613__auto___11124)){
args11061.push((arguments[i__9614__auto___11125]));

var G__11126 = (i__9614__auto___11125 + (1));
i__9614__auto___11125 = G__11126;
continue;
} else {
}
break;
}

var G__11063 = args11061.length;
switch (G__11063) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11061.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){
var f__11017__auto__ = (function (){var switch__10995__auto__ = ((function (c__11016__auto__){
return (function (state_11077){
var state_val_11078 = (state_11077[(1)]);
if((state_val_11078 === (1))){
var state_11077__$1 = state_11077;
var statearr_11079_11128 = state_11077__$1;
(statearr_11079_11128[(2)] = null);

(statearr_11079_11128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11078 === (2))){
var state_11077__$1 = state_11077;
var statearr_11080_11129 = state_11077__$1;
(statearr_11080_11129[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11078 === (3))){
var inst_11075 = (state_11077[(2)]);
var state_11077__$1 = state_11077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11077__$1,inst_11075);
} else {
if((state_val_11078 === (4))){
var inst_11066 = func.call(null);
var inst_11067 = cljs.core.async.timeout.call(null,time_out);
var state_11077__$1 = (function (){var statearr_11082 = state_11077;
(statearr_11082[(7)] = inst_11066);

return statearr_11082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11077__$1,(7),inst_11067);
} else {
if((state_val_11078 === (5))){
var state_11077__$1 = state_11077;
var statearr_11083_11130 = state_11077__$1;
(statearr_11083_11130[(2)] = null);

(statearr_11083_11130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11078 === (6))){
var inst_11073 = (state_11077[(2)]);
var state_11077__$1 = state_11077;
var statearr_11084_11131 = state_11077__$1;
(statearr_11084_11131[(2)] = inst_11073);

(statearr_11084_11131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11078 === (7))){
var inst_11069 = (state_11077[(2)]);
var state_11077__$1 = (function (){var statearr_11085 = state_11077;
(statearr_11085[(8)] = inst_11069);

return statearr_11085;
})();
var statearr_11086_11132 = state_11077__$1;
(statearr_11086_11132[(2)] = null);

(statearr_11086_11132[(1)] = (2));


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
});})(c__11016__auto__))
;
return ((function (switch__10995__auto__,c__11016__auto__){
return (function() {
var csasync$proc$state_machine__10996__auto__ = null;
var csasync$proc$state_machine__10996__auto____0 = (function (){
var statearr_11090 = [null,null,null,null,null,null,null,null,null];
(statearr_11090[(0)] = csasync$proc$state_machine__10996__auto__);

(statearr_11090[(1)] = (1));

return statearr_11090;
});
var csasync$proc$state_machine__10996__auto____1 = (function (state_11077){
while(true){
var ret_value__10997__auto__ = (function (){try{while(true){
var result__10998__auto__ = switch__10995__auto__.call(null,state_11077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10998__auto__;
}
break;
}
}catch (e11091){if((e11091 instanceof Object)){
var ex__10999__auto__ = e11091;
var statearr_11092_11133 = state_11077;
(statearr_11092_11133[(5)] = ex__10999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11134 = state_11077;
state_11077 = G__11134;
continue;
} else {
return ret_value__10997__auto__;
}
break;
}
});
csasync$proc$state_machine__10996__auto__ = function(state_11077){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10996__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10996__auto____1.call(this,state_11077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10996__auto____0;
csasync$proc$state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10996__auto____1;
return csasync$proc$state_machine__10996__auto__;
})()
;})(switch__10995__auto__,c__11016__auto__))
})();
var state__11018__auto__ = (function (){var statearr_11093 = f__11017__auto__.call(null);
(statearr_11093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);

return statearr_11093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);

return c__11016__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){
var f__11017__auto__ = (function (){var switch__10995__auto__ = ((function (c__11016__auto__){
return (function (state_11107){
var state_val_11108 = (state_11107[(1)]);
if((state_val_11108 === (1))){
var state_11107__$1 = state_11107;
var statearr_11109_11135 = state_11107__$1;
(statearr_11109_11135[(2)] = null);

(statearr_11109_11135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11108 === (2))){
var state_11107__$1 = state_11107;
var statearr_11110_11136 = state_11107__$1;
(statearr_11110_11136[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11108 === (3))){
var inst_11105 = (state_11107[(2)]);
var state_11107__$1 = state_11107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11107__$1,inst_11105);
} else {
if((state_val_11108 === (4))){
var inst_11096 = func.call(null,param);
var inst_11097 = cljs.core.async.timeout.call(null,time_out);
var state_11107__$1 = (function (){var statearr_11112 = state_11107;
(statearr_11112[(7)] = inst_11096);

return statearr_11112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11107__$1,(7),inst_11097);
} else {
if((state_val_11108 === (5))){
var state_11107__$1 = state_11107;
var statearr_11113_11137 = state_11107__$1;
(statearr_11113_11137[(2)] = null);

(statearr_11113_11137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11108 === (6))){
var inst_11103 = (state_11107[(2)]);
var state_11107__$1 = state_11107;
var statearr_11114_11138 = state_11107__$1;
(statearr_11114_11138[(2)] = inst_11103);

(statearr_11114_11138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11108 === (7))){
var inst_11099 = (state_11107[(2)]);
var state_11107__$1 = (function (){var statearr_11115 = state_11107;
(statearr_11115[(8)] = inst_11099);

return statearr_11115;
})();
var statearr_11116_11139 = state_11107__$1;
(statearr_11116_11139[(2)] = null);

(statearr_11116_11139[(1)] = (2));


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
});})(c__11016__auto__))
;
return ((function (switch__10995__auto__,c__11016__auto__){
return (function() {
var csasync$proc$state_machine__10996__auto__ = null;
var csasync$proc$state_machine__10996__auto____0 = (function (){
var statearr_11120 = [null,null,null,null,null,null,null,null,null];
(statearr_11120[(0)] = csasync$proc$state_machine__10996__auto__);

(statearr_11120[(1)] = (1));

return statearr_11120;
});
var csasync$proc$state_machine__10996__auto____1 = (function (state_11107){
while(true){
var ret_value__10997__auto__ = (function (){try{while(true){
var result__10998__auto__ = switch__10995__auto__.call(null,state_11107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10998__auto__;
}
break;
}
}catch (e11121){if((e11121 instanceof Object)){
var ex__10999__auto__ = e11121;
var statearr_11122_11140 = state_11107;
(statearr_11122_11140[(5)] = ex__10999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11141 = state_11107;
state_11107 = G__11141;
continue;
} else {
return ret_value__10997__auto__;
}
break;
}
});
csasync$proc$state_machine__10996__auto__ = function(state_11107){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10996__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10996__auto____1.call(this,state_11107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10996__auto____0;
csasync$proc$state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10996__auto____1;
return csasync$proc$state_machine__10996__auto__;
})()
;})(switch__10995__auto__,c__11016__auto__))
})();
var state__11018__auto__ = (function (){var statearr_11123 = f__11017__auto__.call(null);
(statearr_11123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);

return statearr_11123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);

return c__11016__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11016__auto___11226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto___11226){
return (function (){
var f__11017__auto__ = (function (){var switch__10995__auto__ = ((function (c__11016__auto___11226){
return (function (state_11204){
var state_val_11205 = (state_11204[(1)]);
if((state_val_11205 === (7))){
var inst_11193 = cljs.core.async.timeout.call(null,time_out);
var state_11204__$1 = state_11204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11204__$1,(10),inst_11193);
} else {
if((state_val_11205 === (1))){
var state_11204__$1 = state_11204;
var statearr_11206_11227 = state_11204__$1;
(statearr_11206_11227[(2)] = null);

(statearr_11206_11227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (4))){
var inst_11188 = proc_fn.call(null);
var state_11204__$1 = state_11204;
var statearr_11207_11228 = state_11204__$1;
(statearr_11207_11228[(2)] = inst_11188);

(statearr_11207_11228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (6))){
var inst_11191 = (state_11204[(2)]);
var state_11204__$1 = state_11204;
if(cljs.core.truth_(inst_11191)){
var statearr_11208_11229 = state_11204__$1;
(statearr_11208_11229[(1)] = (7));

} else {
var statearr_11209_11230 = state_11204__$1;
(statearr_11209_11230[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (3))){
var inst_11201 = (state_11204[(2)]);
var inst_11202 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_11204__$1 = (function (){var statearr_11210 = state_11204;
(statearr_11210[(7)] = inst_11201);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11204__$1,inst_11202);
} else {
if((state_val_11205 === (2))){
var inst_11186 = (state_11204[(8)]);
var inst_11185 = cljs.core.deref.call(null,status);
var inst_11186__$1 = cljs.core._EQ_.call(null,inst_11185,"RUN");
var state_11204__$1 = (function (){var statearr_11211 = state_11204;
(statearr_11211[(8)] = inst_11186__$1);

return statearr_11211;
})();
if(inst_11186__$1){
var statearr_11212_11231 = state_11204__$1;
(statearr_11212_11231[(1)] = (4));

} else {
var statearr_11213_11232 = state_11204__$1;
(statearr_11213_11232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (9))){
var inst_11199 = (state_11204[(2)]);
var state_11204__$1 = state_11204;
var statearr_11214_11233 = state_11204__$1;
(statearr_11214_11233[(2)] = inst_11199);

(statearr_11214_11233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (5))){
var inst_11186 = (state_11204[(8)]);
var state_11204__$1 = state_11204;
var statearr_11215_11234 = state_11204__$1;
(statearr_11215_11234[(2)] = inst_11186);

(statearr_11215_11234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (10))){
var inst_11195 = (state_11204[(2)]);
var state_11204__$1 = (function (){var statearr_11216 = state_11204;
(statearr_11216[(9)] = inst_11195);

return statearr_11216;
})();
var statearr_11217_11235 = state_11204__$1;
(statearr_11217_11235[(2)] = null);

(statearr_11217_11235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11205 === (8))){
var state_11204__$1 = state_11204;
var statearr_11218_11236 = state_11204__$1;
(statearr_11218_11236[(2)] = null);

(statearr_11218_11236[(1)] = (9));


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
});})(c__11016__auto___11226))
;
return ((function (switch__10995__auto__,c__11016__auto___11226){
return (function() {
var csasync$proc$start_process_$_state_machine__10996__auto__ = null;
var csasync$proc$start_process_$_state_machine__10996__auto____0 = (function (){
var statearr_11222 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11222[(0)] = csasync$proc$start_process_$_state_machine__10996__auto__);

(statearr_11222[(1)] = (1));

return statearr_11222;
});
var csasync$proc$start_process_$_state_machine__10996__auto____1 = (function (state_11204){
while(true){
var ret_value__10997__auto__ = (function (){try{while(true){
var result__10998__auto__ = switch__10995__auto__.call(null,state_11204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10998__auto__;
}
break;
}
}catch (e11223){if((e11223 instanceof Object)){
var ex__10999__auto__ = e11223;
var statearr_11224_11237 = state_11204;
(statearr_11224_11237[(5)] = ex__10999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11238 = state_11204;
state_11204 = G__11238;
continue;
} else {
return ret_value__10997__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__10996__auto__ = function(state_11204){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__10996__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__10996__auto____1.call(this,state_11204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__10996__auto____0;
csasync$proc$start_process_$_state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__10996__auto____1;
return csasync$proc$start_process_$_state_machine__10996__auto__;
})()
;})(switch__10995__auto__,c__11016__auto___11226))
})();
var state__11018__auto__ = (function (){var statearr_11225 = f__11017__auto__.call(null);
(statearr_11225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto___11226);

return statearr_11225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto___11226))
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
var c__11016__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11016__auto__){
return (function (){
var f__11017__auto__ = (function (){var switch__10995__auto__ = ((function (c__11016__auto__){
return (function (state_11259){
var state_val_11260 = (state_11259[(1)]);
if((state_val_11260 === (1))){
var inst_11254 = cljs.core.async.timeout.call(null,time);
var state_11259__$1 = state_11259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11259__$1,(2),inst_11254);
} else {
if((state_val_11260 === (2))){
var inst_11256 = (state_11259[(2)]);
var inst_11257 = func.call(null);
var state_11259__$1 = (function (){var statearr_11261 = state_11259;
(statearr_11261[(7)] = inst_11256);

return statearr_11261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11259__$1,inst_11257);
} else {
return null;
}
}
});})(c__11016__auto__))
;
return ((function (switch__10995__auto__,c__11016__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__10996__auto__ = null;
var csasync$proc$delayer_$_state_machine__10996__auto____0 = (function (){
var statearr_11265 = [null,null,null,null,null,null,null,null];
(statearr_11265[(0)] = csasync$proc$delayer_$_state_machine__10996__auto__);

(statearr_11265[(1)] = (1));

return statearr_11265;
});
var csasync$proc$delayer_$_state_machine__10996__auto____1 = (function (state_11259){
while(true){
var ret_value__10997__auto__ = (function (){try{while(true){
var result__10998__auto__ = switch__10995__auto__.call(null,state_11259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10998__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object)){
var ex__10999__auto__ = e11266;
var statearr_11267_11269 = state_11259;
(statearr_11267_11269[(5)] = ex__10999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11270 = state_11259;
state_11259 = G__11270;
continue;
} else {
return ret_value__10997__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__10996__auto__ = function(state_11259){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__10996__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__10996__auto____1.call(this,state_11259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__10996__auto____0;
csasync$proc$delayer_$_state_machine__10996__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__10996__auto____1;
return csasync$proc$delayer_$_state_machine__10996__auto__;
})()
;})(switch__10995__auto__,c__11016__auto__))
})();
var state__11018__auto__ = (function (){var statearr_11268 = f__11017__auto__.call(null);
(statearr_11268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11016__auto__);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11018__auto__);
});})(c__11016__auto__))
);

return c__11016__auto__;
});

//# sourceMappingURL=proc.js.map