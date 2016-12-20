// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args24238 = [];
var len__21389__auto___24301 = arguments.length;
var i__21390__auto___24302 = (0);
while(true){
if((i__21390__auto___24302 < len__21389__auto___24301)){
args24238.push((arguments[i__21390__auto___24302]));

var G__24303 = (i__21390__auto___24302 + (1));
i__21390__auto___24302 = G__24303;
continue;
} else {
}
break;
}

var G__24240 = args24238.length;
switch (G__24240) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24238.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22344__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22344__auto__){
return (function (){
var f__22345__auto__ = (function (){var switch__22323__auto__ = ((function (c__22344__auto__){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (1))){
var state_24254__$1 = state_24254;
var statearr_24256_24305 = state_24254__$1;
(statearr_24256_24305[(2)] = null);

(statearr_24256_24305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (2))){
var state_24254__$1 = state_24254;
var statearr_24257_24306 = state_24254__$1;
(statearr_24257_24306[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (3))){
var inst_24252 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (4))){
var inst_24243 = func.call(null);
var inst_24244 = cljs.core.async.timeout.call(null,time_out);
var state_24254__$1 = (function (){var statearr_24259 = state_24254;
(statearr_24259[(7)] = inst_24243);

return statearr_24259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(7),inst_24244);
} else {
if((state_val_24255 === (5))){
var state_24254__$1 = state_24254;
var statearr_24260_24307 = state_24254__$1;
(statearr_24260_24307[(2)] = null);

(statearr_24260_24307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var inst_24250 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24261_24308 = state_24254__$1;
(statearr_24261_24308[(2)] = inst_24250);

(statearr_24261_24308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (7))){
var inst_24246 = (state_24254[(2)]);
var state_24254__$1 = (function (){var statearr_24262 = state_24254;
(statearr_24262[(8)] = inst_24246);

return statearr_24262;
})();
var statearr_24263_24309 = state_24254__$1;
(statearr_24263_24309[(2)] = null);

(statearr_24263_24309[(1)] = (2));


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
});})(c__22344__auto__))
;
return ((function (switch__22323__auto__,c__22344__auto__){
return (function() {
var csasync$proc$state_machine__22324__auto__ = null;
var csasync$proc$state_machine__22324__auto____0 = (function (){
var statearr_24267 = [null,null,null,null,null,null,null,null,null];
(statearr_24267[(0)] = csasync$proc$state_machine__22324__auto__);

(statearr_24267[(1)] = (1));

return statearr_24267;
});
var csasync$proc$state_machine__22324__auto____1 = (function (state_24254){
while(true){
var ret_value__22325__auto__ = (function (){try{while(true){
var result__22326__auto__ = switch__22323__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22326__auto__;
}
break;
}
}catch (e24268){if((e24268 instanceof Object)){
var ex__22327__auto__ = e24268;
var statearr_24269_24310 = state_24254;
(statearr_24269_24310[(5)] = ex__22327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24311 = state_24254;
state_24254 = G__24311;
continue;
} else {
return ret_value__22325__auto__;
}
break;
}
});
csasync$proc$state_machine__22324__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22324__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22324__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22324__auto____0;
csasync$proc$state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22324__auto____1;
return csasync$proc$state_machine__22324__auto__;
})()
;})(switch__22323__auto__,c__22344__auto__))
})();
var state__22346__auto__ = (function (){var statearr_24270 = f__22345__auto__.call(null);
(statearr_24270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22344__auto__);

return statearr_24270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22346__auto__);
});})(c__22344__auto__))
);

return c__22344__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22344__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22344__auto__){
return (function (){
var f__22345__auto__ = (function (){var switch__22323__auto__ = ((function (c__22344__auto__){
return (function (state_24284){
var state_val_24285 = (state_24284[(1)]);
if((state_val_24285 === (1))){
var state_24284__$1 = state_24284;
var statearr_24286_24312 = state_24284__$1;
(statearr_24286_24312[(2)] = null);

(statearr_24286_24312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (2))){
var state_24284__$1 = state_24284;
var statearr_24287_24313 = state_24284__$1;
(statearr_24287_24313[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (3))){
var inst_24282 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24284__$1,inst_24282);
} else {
if((state_val_24285 === (4))){
var inst_24273 = func.call(null,param);
var inst_24274 = cljs.core.async.timeout.call(null,time_out);
var state_24284__$1 = (function (){var statearr_24289 = state_24284;
(statearr_24289[(7)] = inst_24273);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(7),inst_24274);
} else {
if((state_val_24285 === (5))){
var state_24284__$1 = state_24284;
var statearr_24290_24314 = state_24284__$1;
(statearr_24290_24314[(2)] = null);

(statearr_24290_24314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (6))){
var inst_24280 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24291_24315 = state_24284__$1;
(statearr_24291_24315[(2)] = inst_24280);

(statearr_24291_24315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (7))){
var inst_24276 = (state_24284[(2)]);
var state_24284__$1 = (function (){var statearr_24292 = state_24284;
(statearr_24292[(8)] = inst_24276);

return statearr_24292;
})();
var statearr_24293_24316 = state_24284__$1;
(statearr_24293_24316[(2)] = null);

(statearr_24293_24316[(1)] = (2));


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
});})(c__22344__auto__))
;
return ((function (switch__22323__auto__,c__22344__auto__){
return (function() {
var csasync$proc$state_machine__22324__auto__ = null;
var csasync$proc$state_machine__22324__auto____0 = (function (){
var statearr_24297 = [null,null,null,null,null,null,null,null,null];
(statearr_24297[(0)] = csasync$proc$state_machine__22324__auto__);

(statearr_24297[(1)] = (1));

return statearr_24297;
});
var csasync$proc$state_machine__22324__auto____1 = (function (state_24284){
while(true){
var ret_value__22325__auto__ = (function (){try{while(true){
var result__22326__auto__ = switch__22323__auto__.call(null,state_24284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22326__auto__;
}
break;
}
}catch (e24298){if((e24298 instanceof Object)){
var ex__22327__auto__ = e24298;
var statearr_24299_24317 = state_24284;
(statearr_24299_24317[(5)] = ex__22327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24318 = state_24284;
state_24284 = G__24318;
continue;
} else {
return ret_value__22325__auto__;
}
break;
}
});
csasync$proc$state_machine__22324__auto__ = function(state_24284){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22324__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22324__auto____1.call(this,state_24284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22324__auto____0;
csasync$proc$state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22324__auto____1;
return csasync$proc$state_machine__22324__auto__;
})()
;})(switch__22323__auto__,c__22344__auto__))
})();
var state__22346__auto__ = (function (){var statearr_24300 = f__22345__auto__.call(null);
(statearr_24300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22344__auto__);

return statearr_24300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22346__auto__);
});})(c__22344__auto__))
);

return c__22344__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22344__auto___24403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22344__auto___24403){
return (function (){
var f__22345__auto__ = (function (){var switch__22323__auto__ = ((function (c__22344__auto___24403){
return (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (7))){
var inst_24370 = cljs.core.async.timeout.call(null,time_out);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24381__$1,(10),inst_24370);
} else {
if((state_val_24382 === (1))){
var state_24381__$1 = state_24381;
var statearr_24383_24404 = state_24381__$1;
(statearr_24383_24404[(2)] = null);

(statearr_24383_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (4))){
var inst_24365 = proc_fn.call(null);
var state_24381__$1 = state_24381;
var statearr_24384_24405 = state_24381__$1;
(statearr_24384_24405[(2)] = inst_24365);

(statearr_24384_24405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (6))){
var inst_24368 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
if(cljs.core.truth_(inst_24368)){
var statearr_24385_24406 = state_24381__$1;
(statearr_24385_24406[(1)] = (7));

} else {
var statearr_24386_24407 = state_24381__$1;
(statearr_24386_24407[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (3))){
var inst_24378 = (state_24381[(2)]);
var inst_24379 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24381__$1 = (function (){var statearr_24387 = state_24381;
(statearr_24387[(7)] = inst_24378);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
if((state_val_24382 === (2))){
var inst_24363 = (state_24381[(8)]);
var inst_24362 = cljs.core.deref.call(null,status);
var inst_24363__$1 = cljs.core._EQ_.call(null,inst_24362,"RUN");
var state_24381__$1 = (function (){var statearr_24388 = state_24381;
(statearr_24388[(8)] = inst_24363__$1);

return statearr_24388;
})();
if(inst_24363__$1){
var statearr_24389_24408 = state_24381__$1;
(statearr_24389_24408[(1)] = (4));

} else {
var statearr_24390_24409 = state_24381__$1;
(statearr_24390_24409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (9))){
var inst_24376 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24391_24410 = state_24381__$1;
(statearr_24391_24410[(2)] = inst_24376);

(statearr_24391_24410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (5))){
var inst_24363 = (state_24381[(8)]);
var state_24381__$1 = state_24381;
var statearr_24392_24411 = state_24381__$1;
(statearr_24392_24411[(2)] = inst_24363);

(statearr_24392_24411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (10))){
var inst_24372 = (state_24381[(2)]);
var state_24381__$1 = (function (){var statearr_24393 = state_24381;
(statearr_24393[(9)] = inst_24372);

return statearr_24393;
})();
var statearr_24394_24412 = state_24381__$1;
(statearr_24394_24412[(2)] = null);

(statearr_24394_24412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (8))){
var state_24381__$1 = state_24381;
var statearr_24395_24413 = state_24381__$1;
(statearr_24395_24413[(2)] = null);

(statearr_24395_24413[(1)] = (9));


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
});})(c__22344__auto___24403))
;
return ((function (switch__22323__auto__,c__22344__auto___24403){
return (function() {
var csasync$proc$start_process_$_state_machine__22324__auto__ = null;
var csasync$proc$start_process_$_state_machine__22324__auto____0 = (function (){
var statearr_24399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24399[(0)] = csasync$proc$start_process_$_state_machine__22324__auto__);

(statearr_24399[(1)] = (1));

return statearr_24399;
});
var csasync$proc$start_process_$_state_machine__22324__auto____1 = (function (state_24381){
while(true){
var ret_value__22325__auto__ = (function (){try{while(true){
var result__22326__auto__ = switch__22323__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22326__auto__;
}
break;
}
}catch (e24400){if((e24400 instanceof Object)){
var ex__22327__auto__ = e24400;
var statearr_24401_24414 = state_24381;
(statearr_24401_24414[(5)] = ex__22327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24415 = state_24381;
state_24381 = G__24415;
continue;
} else {
return ret_value__22325__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22324__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22324__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22324__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22324__auto____0;
csasync$proc$start_process_$_state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22324__auto____1;
return csasync$proc$start_process_$_state_machine__22324__auto__;
})()
;})(switch__22323__auto__,c__22344__auto___24403))
})();
var state__22346__auto__ = (function (){var statearr_24402 = f__22345__auto__.call(null);
(statearr_24402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22344__auto___24403);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22346__auto__);
});})(c__22344__auto___24403))
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
var c__22344__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22344__auto__){
return (function (){
var f__22345__auto__ = (function (){var switch__22323__auto__ = ((function (c__22344__auto__){
return (function (state_24436){
var state_val_24437 = (state_24436[(1)]);
if((state_val_24437 === (1))){
var inst_24431 = cljs.core.async.timeout.call(null,time);
var state_24436__$1 = state_24436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24436__$1,(2),inst_24431);
} else {
if((state_val_24437 === (2))){
var inst_24433 = (state_24436[(2)]);
var inst_24434 = func.call(null);
var state_24436__$1 = (function (){var statearr_24438 = state_24436;
(statearr_24438[(7)] = inst_24433);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24436__$1,inst_24434);
} else {
return null;
}
}
});})(c__22344__auto__))
;
return ((function (switch__22323__auto__,c__22344__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22324__auto__ = null;
var csasync$proc$delayer_$_state_machine__22324__auto____0 = (function (){
var statearr_24442 = [null,null,null,null,null,null,null,null];
(statearr_24442[(0)] = csasync$proc$delayer_$_state_machine__22324__auto__);

(statearr_24442[(1)] = (1));

return statearr_24442;
});
var csasync$proc$delayer_$_state_machine__22324__auto____1 = (function (state_24436){
while(true){
var ret_value__22325__auto__ = (function (){try{while(true){
var result__22326__auto__ = switch__22323__auto__.call(null,state_24436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22326__auto__;
}
break;
}
}catch (e24443){if((e24443 instanceof Object)){
var ex__22327__auto__ = e24443;
var statearr_24444_24446 = state_24436;
(statearr_24444_24446[(5)] = ex__22327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24447 = state_24436;
state_24436 = G__24447;
continue;
} else {
return ret_value__22325__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22324__auto__ = function(state_24436){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22324__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22324__auto____1.call(this,state_24436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22324__auto____0;
csasync$proc$delayer_$_state_machine__22324__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22324__auto____1;
return csasync$proc$delayer_$_state_machine__22324__auto__;
})()
;})(switch__22323__auto__,c__22344__auto__))
})();
var state__22346__auto__ = (function (){var statearr_24445 = f__22345__auto__.call(null);
(statearr_24445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22344__auto__);

return statearr_24445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22346__auto__);
});})(c__22344__auto__))
);

return c__22344__auto__;
});

//# sourceMappingURL=proc.js.map