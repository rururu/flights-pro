// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args27185 = [];
var len__20414__auto___27248 = arguments.length;
var i__20415__auto___27249 = (0);
while(true){
if((i__20415__auto___27249 < len__20414__auto___27248)){
args27185.push((arguments[i__20415__auto___27249]));

var G__27250 = (i__20415__auto___27249 + (1));
i__20415__auto___27249 = G__27250;
continue;
} else {
}
break;
}

var G__27187 = args27185.length;
switch (G__27187) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27185.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21369__auto__){
return (function (){
var f__21370__auto__ = (function (){var switch__21348__auto__ = ((function (c__21369__auto__){
return (function (state_27201){
var state_val_27202 = (state_27201[(1)]);
if((state_val_27202 === (1))){
var state_27201__$1 = state_27201;
var statearr_27203_27252 = state_27201__$1;
(statearr_27203_27252[(2)] = null);

(statearr_27203_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (2))){
var state_27201__$1 = state_27201;
var statearr_27204_27253 = state_27201__$1;
(statearr_27204_27253[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (3))){
var inst_27199 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27201__$1,inst_27199);
} else {
if((state_val_27202 === (4))){
var inst_27190 = func.call(null);
var inst_27191 = cljs.core.async.timeout.call(null,time_out);
var state_27201__$1 = (function (){var statearr_27206 = state_27201;
(statearr_27206[(7)] = inst_27190);

return statearr_27206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27201__$1,(7),inst_27191);
} else {
if((state_val_27202 === (5))){
var state_27201__$1 = state_27201;
var statearr_27207_27254 = state_27201__$1;
(statearr_27207_27254[(2)] = null);

(statearr_27207_27254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (6))){
var inst_27197 = (state_27201[(2)]);
var state_27201__$1 = state_27201;
var statearr_27208_27255 = state_27201__$1;
(statearr_27208_27255[(2)] = inst_27197);

(statearr_27208_27255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27202 === (7))){
var inst_27193 = (state_27201[(2)]);
var state_27201__$1 = (function (){var statearr_27209 = state_27201;
(statearr_27209[(8)] = inst_27193);

return statearr_27209;
})();
var statearr_27210_27256 = state_27201__$1;
(statearr_27210_27256[(2)] = null);

(statearr_27210_27256[(1)] = (2));


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
});})(c__21369__auto__))
;
return ((function (switch__21348__auto__,c__21369__auto__){
return (function() {
var csasync$proc$state_machine__21349__auto__ = null;
var csasync$proc$state_machine__21349__auto____0 = (function (){
var statearr_27214 = [null,null,null,null,null,null,null,null,null];
(statearr_27214[(0)] = csasync$proc$state_machine__21349__auto__);

(statearr_27214[(1)] = (1));

return statearr_27214;
});
var csasync$proc$state_machine__21349__auto____1 = (function (state_27201){
while(true){
var ret_value__21350__auto__ = (function (){try{while(true){
var result__21351__auto__ = switch__21348__auto__.call(null,state_27201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21351__auto__;
}
break;
}
}catch (e27215){if((e27215 instanceof Object)){
var ex__21352__auto__ = e27215;
var statearr_27216_27257 = state_27201;
(statearr_27216_27257[(5)] = ex__21352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27258 = state_27201;
state_27201 = G__27258;
continue;
} else {
return ret_value__21350__auto__;
}
break;
}
});
csasync$proc$state_machine__21349__auto__ = function(state_27201){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21349__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21349__auto____1.call(this,state_27201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21349__auto____0;
csasync$proc$state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21349__auto____1;
return csasync$proc$state_machine__21349__auto__;
})()
;})(switch__21348__auto__,c__21369__auto__))
})();
var state__21371__auto__ = (function (){var statearr_27217 = f__21370__auto__.call(null);
(statearr_27217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21369__auto__);

return statearr_27217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21371__auto__);
});})(c__21369__auto__))
);

return c__21369__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21369__auto__){
return (function (){
var f__21370__auto__ = (function (){var switch__21348__auto__ = ((function (c__21369__auto__){
return (function (state_27231){
var state_val_27232 = (state_27231[(1)]);
if((state_val_27232 === (1))){
var state_27231__$1 = state_27231;
var statearr_27233_27259 = state_27231__$1;
(statearr_27233_27259[(2)] = null);

(statearr_27233_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (2))){
var state_27231__$1 = state_27231;
var statearr_27234_27260 = state_27231__$1;
(statearr_27234_27260[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (3))){
var inst_27229 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27231__$1,inst_27229);
} else {
if((state_val_27232 === (4))){
var inst_27220 = func.call(null,param);
var inst_27221 = cljs.core.async.timeout.call(null,time_out);
var state_27231__$1 = (function (){var statearr_27236 = state_27231;
(statearr_27236[(7)] = inst_27220);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27231__$1,(7),inst_27221);
} else {
if((state_val_27232 === (5))){
var state_27231__$1 = state_27231;
var statearr_27237_27261 = state_27231__$1;
(statearr_27237_27261[(2)] = null);

(statearr_27237_27261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (6))){
var inst_27227 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27238_27262 = state_27231__$1;
(statearr_27238_27262[(2)] = inst_27227);

(statearr_27238_27262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (7))){
var inst_27223 = (state_27231[(2)]);
var state_27231__$1 = (function (){var statearr_27239 = state_27231;
(statearr_27239[(8)] = inst_27223);

return statearr_27239;
})();
var statearr_27240_27263 = state_27231__$1;
(statearr_27240_27263[(2)] = null);

(statearr_27240_27263[(1)] = (2));


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
});})(c__21369__auto__))
;
return ((function (switch__21348__auto__,c__21369__auto__){
return (function() {
var csasync$proc$state_machine__21349__auto__ = null;
var csasync$proc$state_machine__21349__auto____0 = (function (){
var statearr_27244 = [null,null,null,null,null,null,null,null,null];
(statearr_27244[(0)] = csasync$proc$state_machine__21349__auto__);

(statearr_27244[(1)] = (1));

return statearr_27244;
});
var csasync$proc$state_machine__21349__auto____1 = (function (state_27231){
while(true){
var ret_value__21350__auto__ = (function (){try{while(true){
var result__21351__auto__ = switch__21348__auto__.call(null,state_27231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21351__auto__;
}
break;
}
}catch (e27245){if((e27245 instanceof Object)){
var ex__21352__auto__ = e27245;
var statearr_27246_27264 = state_27231;
(statearr_27246_27264[(5)] = ex__21352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27265 = state_27231;
state_27231 = G__27265;
continue;
} else {
return ret_value__21350__auto__;
}
break;
}
});
csasync$proc$state_machine__21349__auto__ = function(state_27231){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21349__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21349__auto____1.call(this,state_27231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21349__auto____0;
csasync$proc$state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21349__auto____1;
return csasync$proc$state_machine__21349__auto__;
})()
;})(switch__21348__auto__,c__21369__auto__))
})();
var state__21371__auto__ = (function (){var statearr_27247 = f__21370__auto__.call(null);
(statearr_27247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21369__auto__);

return statearr_27247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21371__auto__);
});})(c__21369__auto__))
);

return c__21369__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21369__auto___27350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21369__auto___27350){
return (function (){
var f__21370__auto__ = (function (){var switch__21348__auto__ = ((function (c__21369__auto___27350){
return (function (state_27328){
var state_val_27329 = (state_27328[(1)]);
if((state_val_27329 === (7))){
var inst_27317 = cljs.core.async.timeout.call(null,time_out);
var state_27328__$1 = state_27328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27328__$1,(10),inst_27317);
} else {
if((state_val_27329 === (1))){
var state_27328__$1 = state_27328;
var statearr_27330_27351 = state_27328__$1;
(statearr_27330_27351[(2)] = null);

(statearr_27330_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (4))){
var inst_27312 = proc_fn.call(null);
var state_27328__$1 = state_27328;
var statearr_27331_27352 = state_27328__$1;
(statearr_27331_27352[(2)] = inst_27312);

(statearr_27331_27352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (6))){
var inst_27315 = (state_27328[(2)]);
var state_27328__$1 = state_27328;
if(cljs.core.truth_(inst_27315)){
var statearr_27332_27353 = state_27328__$1;
(statearr_27332_27353[(1)] = (7));

} else {
var statearr_27333_27354 = state_27328__$1;
(statearr_27333_27354[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (3))){
var inst_27325 = (state_27328[(2)]);
var inst_27326 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_27328__$1 = (function (){var statearr_27334 = state_27328;
(statearr_27334[(7)] = inst_27325);

return statearr_27334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27328__$1,inst_27326);
} else {
if((state_val_27329 === (2))){
var inst_27310 = (state_27328[(8)]);
var inst_27309 = cljs.core.deref.call(null,status);
var inst_27310__$1 = cljs.core._EQ_.call(null,inst_27309,"RUN");
var state_27328__$1 = (function (){var statearr_27335 = state_27328;
(statearr_27335[(8)] = inst_27310__$1);

return statearr_27335;
})();
if(inst_27310__$1){
var statearr_27336_27355 = state_27328__$1;
(statearr_27336_27355[(1)] = (4));

} else {
var statearr_27337_27356 = state_27328__$1;
(statearr_27337_27356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (9))){
var inst_27323 = (state_27328[(2)]);
var state_27328__$1 = state_27328;
var statearr_27338_27357 = state_27328__$1;
(statearr_27338_27357[(2)] = inst_27323);

(statearr_27338_27357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (5))){
var inst_27310 = (state_27328[(8)]);
var state_27328__$1 = state_27328;
var statearr_27339_27358 = state_27328__$1;
(statearr_27339_27358[(2)] = inst_27310);

(statearr_27339_27358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (10))){
var inst_27319 = (state_27328[(2)]);
var state_27328__$1 = (function (){var statearr_27340 = state_27328;
(statearr_27340[(9)] = inst_27319);

return statearr_27340;
})();
var statearr_27341_27359 = state_27328__$1;
(statearr_27341_27359[(2)] = null);

(statearr_27341_27359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27329 === (8))){
var state_27328__$1 = state_27328;
var statearr_27342_27360 = state_27328__$1;
(statearr_27342_27360[(2)] = null);

(statearr_27342_27360[(1)] = (9));


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
});})(c__21369__auto___27350))
;
return ((function (switch__21348__auto__,c__21369__auto___27350){
return (function() {
var csasync$proc$start_process_$_state_machine__21349__auto__ = null;
var csasync$proc$start_process_$_state_machine__21349__auto____0 = (function (){
var statearr_27346 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27346[(0)] = csasync$proc$start_process_$_state_machine__21349__auto__);

(statearr_27346[(1)] = (1));

return statearr_27346;
});
var csasync$proc$start_process_$_state_machine__21349__auto____1 = (function (state_27328){
while(true){
var ret_value__21350__auto__ = (function (){try{while(true){
var result__21351__auto__ = switch__21348__auto__.call(null,state_27328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21351__auto__;
}
break;
}
}catch (e27347){if((e27347 instanceof Object)){
var ex__21352__auto__ = e27347;
var statearr_27348_27361 = state_27328;
(statearr_27348_27361[(5)] = ex__21352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27362 = state_27328;
state_27328 = G__27362;
continue;
} else {
return ret_value__21350__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21349__auto__ = function(state_27328){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21349__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21349__auto____1.call(this,state_27328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21349__auto____0;
csasync$proc$start_process_$_state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21349__auto____1;
return csasync$proc$start_process_$_state_machine__21349__auto__;
})()
;})(switch__21348__auto__,c__21369__auto___27350))
})();
var state__21371__auto__ = (function (){var statearr_27349 = f__21370__auto__.call(null);
(statearr_27349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21369__auto___27350);

return statearr_27349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21371__auto__);
});})(c__21369__auto___27350))
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
var c__21369__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21369__auto__){
return (function (){
var f__21370__auto__ = (function (){var switch__21348__auto__ = ((function (c__21369__auto__){
return (function (state_27383){
var state_val_27384 = (state_27383[(1)]);
if((state_val_27384 === (1))){
var inst_27378 = cljs.core.async.timeout.call(null,time);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27383__$1,(2),inst_27378);
} else {
if((state_val_27384 === (2))){
var inst_27380 = (state_27383[(2)]);
var inst_27381 = func.call(null);
var state_27383__$1 = (function (){var statearr_27385 = state_27383;
(statearr_27385[(7)] = inst_27380);

return statearr_27385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27383__$1,inst_27381);
} else {
return null;
}
}
});})(c__21369__auto__))
;
return ((function (switch__21348__auto__,c__21369__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21349__auto__ = null;
var csasync$proc$delayer_$_state_machine__21349__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = csasync$proc$delayer_$_state_machine__21349__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var csasync$proc$delayer_$_state_machine__21349__auto____1 = (function (state_27383){
while(true){
var ret_value__21350__auto__ = (function (){try{while(true){
var result__21351__auto__ = switch__21348__auto__.call(null,state_27383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21351__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__21352__auto__ = e27390;
var statearr_27391_27393 = state_27383;
(statearr_27391_27393[(5)] = ex__21352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27394 = state_27383;
state_27383 = G__27394;
continue;
} else {
return ret_value__21350__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21349__auto__ = function(state_27383){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21349__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21349__auto____1.call(this,state_27383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21349__auto____0;
csasync$proc$delayer_$_state_machine__21349__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21349__auto____1;
return csasync$proc$delayer_$_state_machine__21349__auto__;
})()
;})(switch__21348__auto__,c__21369__auto__))
})();
var state__21371__auto__ = (function (){var statearr_27392 = f__21370__auto__.call(null);
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21369__auto__);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21371__auto__);
});})(c__21369__auto__))
);

return c__21369__auto__;
});

//# sourceMappingURL=proc.js.map