// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args34289 = [];
var len__10289__auto___34352 = arguments.length;
var i__10290__auto___34353 = (0);
while(true){
if((i__10290__auto___34353 < len__10289__auto___34352)){
args34289.push((arguments[i__10290__auto___34353]));

var G__34354 = (i__10290__auto___34353 + (1));
i__10290__auto___34353 = G__34354;
continue;
} else {
}
break;
}

var G__34291 = args34289.length;
switch (G__34291) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34289.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11671__auto__ = ((function (c__11692__auto__){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (1))){
var state_34305__$1 = state_34305;
var statearr_34307_34356 = state_34305__$1;
(statearr_34307_34356[(2)] = null);

(statearr_34307_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (2))){
var state_34305__$1 = state_34305;
var statearr_34308_34357 = state_34305__$1;
(statearr_34308_34357[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34303 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (4))){
var inst_34294 = func.call(null);
var inst_34295 = cljs.core.async.timeout.call(null,time_out);
var state_34305__$1 = (function (){var statearr_34310 = state_34305;
(statearr_34310[(7)] = inst_34294);

return statearr_34310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(7),inst_34295);
} else {
if((state_val_34306 === (5))){
var state_34305__$1 = state_34305;
var statearr_34311_34358 = state_34305__$1;
(statearr_34311_34358[(2)] = null);

(statearr_34311_34358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (6))){
var inst_34301 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34312_34359 = state_34305__$1;
(statearr_34312_34359[(2)] = inst_34301);

(statearr_34312_34359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (7))){
var inst_34297 = (state_34305[(2)]);
var state_34305__$1 = (function (){var statearr_34313 = state_34305;
(statearr_34313[(8)] = inst_34297);

return statearr_34313;
})();
var statearr_34314_34360 = state_34305__$1;
(statearr_34314_34360[(2)] = null);

(statearr_34314_34360[(1)] = (2));


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
});})(c__11692__auto__))
;
return ((function (switch__11671__auto__,c__11692__auto__){
return (function() {
var csasync$proc$state_machine__11672__auto__ = null;
var csasync$proc$state_machine__11672__auto____0 = (function (){
var statearr_34318 = [null,null,null,null,null,null,null,null,null];
(statearr_34318[(0)] = csasync$proc$state_machine__11672__auto__);

(statearr_34318[(1)] = (1));

return statearr_34318;
});
var csasync$proc$state_machine__11672__auto____1 = (function (state_34305){
while(true){
var ret_value__11673__auto__ = (function (){try{while(true){
var result__11674__auto__ = switch__11671__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11674__auto__;
}
break;
}
}catch (e34319){if((e34319 instanceof Object)){
var ex__11675__auto__ = e34319;
var statearr_34320_34361 = state_34305;
(statearr_34320_34361[(5)] = ex__11675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34362 = state_34305;
state_34305 = G__34362;
continue;
} else {
return ret_value__11673__auto__;
}
break;
}
});
csasync$proc$state_machine__11672__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11672__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11672__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11672__auto____0;
csasync$proc$state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11672__auto____1;
return csasync$proc$state_machine__11672__auto__;
})()
;})(switch__11671__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_34321 = f__11693__auto__.call(null);
(statearr_34321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11692__auto__);

return statearr_34321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11671__auto__ = ((function (c__11692__auto__){
return (function (state_34335){
var state_val_34336 = (state_34335[(1)]);
if((state_val_34336 === (1))){
var state_34335__$1 = state_34335;
var statearr_34337_34363 = state_34335__$1;
(statearr_34337_34363[(2)] = null);

(statearr_34337_34363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (2))){
var state_34335__$1 = state_34335;
var statearr_34338_34364 = state_34335__$1;
(statearr_34338_34364[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (3))){
var inst_34333 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34335__$1,inst_34333);
} else {
if((state_val_34336 === (4))){
var inst_34324 = func.call(null,param);
var inst_34325 = cljs.core.async.timeout.call(null,time_out);
var state_34335__$1 = (function (){var statearr_34340 = state_34335;
(statearr_34340[(7)] = inst_34324);

return statearr_34340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34335__$1,(7),inst_34325);
} else {
if((state_val_34336 === (5))){
var state_34335__$1 = state_34335;
var statearr_34341_34365 = state_34335__$1;
(statearr_34341_34365[(2)] = null);

(statearr_34341_34365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (6))){
var inst_34331 = (state_34335[(2)]);
var state_34335__$1 = state_34335;
var statearr_34342_34366 = state_34335__$1;
(statearr_34342_34366[(2)] = inst_34331);

(statearr_34342_34366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34336 === (7))){
var inst_34327 = (state_34335[(2)]);
var state_34335__$1 = (function (){var statearr_34343 = state_34335;
(statearr_34343[(8)] = inst_34327);

return statearr_34343;
})();
var statearr_34344_34367 = state_34335__$1;
(statearr_34344_34367[(2)] = null);

(statearr_34344_34367[(1)] = (2));


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
});})(c__11692__auto__))
;
return ((function (switch__11671__auto__,c__11692__auto__){
return (function() {
var csasync$proc$state_machine__11672__auto__ = null;
var csasync$proc$state_machine__11672__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = csasync$proc$state_machine__11672__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var csasync$proc$state_machine__11672__auto____1 = (function (state_34335){
while(true){
var ret_value__11673__auto__ = (function (){try{while(true){
var result__11674__auto__ = switch__11671__auto__.call(null,state_34335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11674__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__11675__auto__ = e34349;
var statearr_34350_34368 = state_34335;
(statearr_34350_34368[(5)] = ex__11675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34369 = state_34335;
state_34335 = G__34369;
continue;
} else {
return ret_value__11673__auto__;
}
break;
}
});
csasync$proc$state_machine__11672__auto__ = function(state_34335){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11672__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11672__auto____1.call(this,state_34335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11672__auto____0;
csasync$proc$state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11672__auto____1;
return csasync$proc$state_machine__11672__auto__;
})()
;})(switch__11671__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_34351 = f__11693__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11692__auto__);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11692__auto___34454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto___34454){
return (function (){
var f__11693__auto__ = (function (){var switch__11671__auto__ = ((function (c__11692__auto___34454){
return (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (7))){
var inst_34421 = cljs.core.async.timeout.call(null,time_out);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34432__$1,(10),inst_34421);
} else {
if((state_val_34433 === (1))){
var state_34432__$1 = state_34432;
var statearr_34434_34455 = state_34432__$1;
(statearr_34434_34455[(2)] = null);

(statearr_34434_34455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (4))){
var inst_34416 = proc_fn.call(null);
var state_34432__$1 = state_34432;
var statearr_34435_34456 = state_34432__$1;
(statearr_34435_34456[(2)] = inst_34416);

(statearr_34435_34456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (6))){
var inst_34419 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
if(cljs.core.truth_(inst_34419)){
var statearr_34436_34457 = state_34432__$1;
(statearr_34436_34457[(1)] = (7));

} else {
var statearr_34437_34458 = state_34432__$1;
(statearr_34437_34458[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (3))){
var inst_34429 = (state_34432[(2)]);
var inst_34430 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_34432__$1 = (function (){var statearr_34438 = state_34432;
(statearr_34438[(7)] = inst_34429);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34432__$1,inst_34430);
} else {
if((state_val_34433 === (2))){
var inst_34414 = (state_34432[(8)]);
var inst_34413 = cljs.core.deref.call(null,status);
var inst_34414__$1 = cljs.core._EQ_.call(null,inst_34413,"RUN");
var state_34432__$1 = (function (){var statearr_34439 = state_34432;
(statearr_34439[(8)] = inst_34414__$1);

return statearr_34439;
})();
if(inst_34414__$1){
var statearr_34440_34459 = state_34432__$1;
(statearr_34440_34459[(1)] = (4));

} else {
var statearr_34441_34460 = state_34432__$1;
(statearr_34441_34460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (9))){
var inst_34427 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34442_34461 = state_34432__$1;
(statearr_34442_34461[(2)] = inst_34427);

(statearr_34442_34461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (5))){
var inst_34414 = (state_34432[(8)]);
var state_34432__$1 = state_34432;
var statearr_34443_34462 = state_34432__$1;
(statearr_34443_34462[(2)] = inst_34414);

(statearr_34443_34462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (10))){
var inst_34423 = (state_34432[(2)]);
var state_34432__$1 = (function (){var statearr_34444 = state_34432;
(statearr_34444[(9)] = inst_34423);

return statearr_34444;
})();
var statearr_34445_34463 = state_34432__$1;
(statearr_34445_34463[(2)] = null);

(statearr_34445_34463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (8))){
var state_34432__$1 = state_34432;
var statearr_34446_34464 = state_34432__$1;
(statearr_34446_34464[(2)] = null);

(statearr_34446_34464[(1)] = (9));


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
});})(c__11692__auto___34454))
;
return ((function (switch__11671__auto__,c__11692__auto___34454){
return (function() {
var csasync$proc$start_process_$_state_machine__11672__auto__ = null;
var csasync$proc$start_process_$_state_machine__11672__auto____0 = (function (){
var statearr_34450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34450[(0)] = csasync$proc$start_process_$_state_machine__11672__auto__);

(statearr_34450[(1)] = (1));

return statearr_34450;
});
var csasync$proc$start_process_$_state_machine__11672__auto____1 = (function (state_34432){
while(true){
var ret_value__11673__auto__ = (function (){try{while(true){
var result__11674__auto__ = switch__11671__auto__.call(null,state_34432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11674__auto__;
}
break;
}
}catch (e34451){if((e34451 instanceof Object)){
var ex__11675__auto__ = e34451;
var statearr_34452_34465 = state_34432;
(statearr_34452_34465[(5)] = ex__11675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34466 = state_34432;
state_34432 = G__34466;
continue;
} else {
return ret_value__11673__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11672__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11672__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11672__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11672__auto____0;
csasync$proc$start_process_$_state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11672__auto____1;
return csasync$proc$start_process_$_state_machine__11672__auto__;
})()
;})(switch__11671__auto__,c__11692__auto___34454))
})();
var state__11694__auto__ = (function (){var statearr_34453 = f__11693__auto__.call(null);
(statearr_34453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11692__auto___34454);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto___34454))
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
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11671__auto__ = ((function (c__11692__auto__){
return (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (1))){
var inst_34482 = cljs.core.async.timeout.call(null,time);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34487__$1,(2),inst_34482);
} else {
if((state_val_34488 === (2))){
var inst_34484 = (state_34487[(2)]);
var inst_34485 = func.call(null);
var state_34487__$1 = (function (){var statearr_34489 = state_34487;
(statearr_34489[(7)] = inst_34484);

return statearr_34489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34487__$1,inst_34485);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11671__auto__,c__11692__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11672__auto__ = null;
var csasync$proc$delayer_$_state_machine__11672__auto____0 = (function (){
var statearr_34493 = [null,null,null,null,null,null,null,null];
(statearr_34493[(0)] = csasync$proc$delayer_$_state_machine__11672__auto__);

(statearr_34493[(1)] = (1));

return statearr_34493;
});
var csasync$proc$delayer_$_state_machine__11672__auto____1 = (function (state_34487){
while(true){
var ret_value__11673__auto__ = (function (){try{while(true){
var result__11674__auto__ = switch__11671__auto__.call(null,state_34487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11674__auto__;
}
break;
}
}catch (e34494){if((e34494 instanceof Object)){
var ex__11675__auto__ = e34494;
var statearr_34495_34497 = state_34487;
(statearr_34495_34497[(5)] = ex__11675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34498 = state_34487;
state_34487 = G__34498;
continue;
} else {
return ret_value__11673__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11672__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11672__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11672__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11672__auto____0;
csasync$proc$delayer_$_state_machine__11672__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11672__auto____1;
return csasync$proc$delayer_$_state_machine__11672__auto__;
})()
;})(switch__11671__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_34496 = f__11693__auto__.call(null);
(statearr_34496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11692__auto__);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});

//# sourceMappingURL=proc.js.map