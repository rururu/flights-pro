// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25353 = [];
var len__21501__auto___25416 = arguments.length;
var i__21502__auto___25417 = (0);
while(true){
if((i__21502__auto___25417 < len__21501__auto___25416)){
args25353.push((arguments[i__21502__auto___25417]));

var G__25418 = (i__21502__auto___25417 + (1));
i__21502__auto___25417 = G__25418;
continue;
} else {
}
break;
}

var G__25355 = args25353.length;
switch (G__25355) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25353.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (1))){
var state_25369__$1 = state_25369;
var statearr_25371_25420 = state_25369__$1;
(statearr_25371_25420[(2)] = null);

(statearr_25371_25420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (2))){
var state_25369__$1 = state_25369;
var statearr_25372_25421 = state_25369__$1;
(statearr_25372_25421[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (4))){
var inst_25358 = func.call(null);
var inst_25359 = cljs.core.async.timeout.call(null,time_out);
var state_25369__$1 = (function (){var statearr_25374 = state_25369;
(statearr_25374[(7)] = inst_25358);

return statearr_25374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(7),inst_25359);
} else {
if((state_val_25370 === (5))){
var state_25369__$1 = state_25369;
var statearr_25375_25422 = state_25369__$1;
(statearr_25375_25422[(2)] = null);

(statearr_25375_25422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (6))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25376_25423 = state_25369__$1;
(statearr_25376_25423[(2)] = inst_25365);

(statearr_25376_25423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (7))){
var inst_25361 = (state_25369[(2)]);
var state_25369__$1 = (function (){var statearr_25377 = state_25369;
(statearr_25377[(8)] = inst_25361);

return statearr_25377;
})();
var statearr_25378_25424 = state_25369__$1;
(statearr_25378_25424[(2)] = null);

(statearr_25378_25424[(1)] = (2));


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
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$state_machine__22557__auto__ = null;
var csasync$proc$state_machine__22557__auto____0 = (function (){
var statearr_25382 = [null,null,null,null,null,null,null,null,null];
(statearr_25382[(0)] = csasync$proc$state_machine__22557__auto__);

(statearr_25382[(1)] = (1));

return statearr_25382;
});
var csasync$proc$state_machine__22557__auto____1 = (function (state_25369){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e25383){if((e25383 instanceof Object)){
var ex__22560__auto__ = e25383;
var statearr_25384_25425 = state_25369;
(statearr_25384_25425[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25426 = state_25369;
state_25369 = G__25426;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$state_machine__22557__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22557__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22557__auto____0;
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22557__auto____1;
return csasync$proc$state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_25385 = f__22578__auto__.call(null);
(statearr_25385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_25385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_25399){
var state_val_25400 = (state_25399[(1)]);
if((state_val_25400 === (1))){
var state_25399__$1 = state_25399;
var statearr_25401_25427 = state_25399__$1;
(statearr_25401_25427[(2)] = null);

(statearr_25401_25427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (2))){
var state_25399__$1 = state_25399;
var statearr_25402_25428 = state_25399__$1;
(statearr_25402_25428[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (3))){
var inst_25397 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25399__$1,inst_25397);
} else {
if((state_val_25400 === (4))){
var inst_25388 = func.call(null,param);
var inst_25389 = cljs.core.async.timeout.call(null,time_out);
var state_25399__$1 = (function (){var statearr_25404 = state_25399;
(statearr_25404[(7)] = inst_25388);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(7),inst_25389);
} else {
if((state_val_25400 === (5))){
var state_25399__$1 = state_25399;
var statearr_25405_25429 = state_25399__$1;
(statearr_25405_25429[(2)] = null);

(statearr_25405_25429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (6))){
var inst_25395 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25406_25430 = state_25399__$1;
(statearr_25406_25430[(2)] = inst_25395);

(statearr_25406_25430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (7))){
var inst_25391 = (state_25399[(2)]);
var state_25399__$1 = (function (){var statearr_25407 = state_25399;
(statearr_25407[(8)] = inst_25391);

return statearr_25407;
})();
var statearr_25408_25431 = state_25399__$1;
(statearr_25408_25431[(2)] = null);

(statearr_25408_25431[(1)] = (2));


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
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$state_machine__22557__auto__ = null;
var csasync$proc$state_machine__22557__auto____0 = (function (){
var statearr_25412 = [null,null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = csasync$proc$state_machine__22557__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var csasync$proc$state_machine__22557__auto____1 = (function (state_25399){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_25399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__22560__auto__ = e25413;
var statearr_25414_25432 = state_25399;
(statearr_25414_25432[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25433 = state_25399;
state_25399 = G__25433;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$state_machine__22557__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22557__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22557__auto____0;
csasync$proc$state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22557__auto____1;
return csasync$proc$state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_25415 = f__22578__auto__.call(null);
(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22577__auto___25518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___25518){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto___25518){
return (function (state_25496){
var state_val_25497 = (state_25496[(1)]);
if((state_val_25497 === (7))){
var inst_25485 = cljs.core.async.timeout.call(null,time_out);
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25496__$1,(10),inst_25485);
} else {
if((state_val_25497 === (1))){
var state_25496__$1 = state_25496;
var statearr_25498_25519 = state_25496__$1;
(statearr_25498_25519[(2)] = null);

(statearr_25498_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (4))){
var inst_25480 = proc_fn.call(null);
var state_25496__$1 = state_25496;
var statearr_25499_25520 = state_25496__$1;
(statearr_25499_25520[(2)] = inst_25480);

(statearr_25499_25520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (6))){
var inst_25483 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
if(cljs.core.truth_(inst_25483)){
var statearr_25500_25521 = state_25496__$1;
(statearr_25500_25521[(1)] = (7));

} else {
var statearr_25501_25522 = state_25496__$1;
(statearr_25501_25522[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (3))){
var inst_25493 = (state_25496[(2)]);
var inst_25494 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25496__$1 = (function (){var statearr_25502 = state_25496;
(statearr_25502[(7)] = inst_25493);

return statearr_25502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25496__$1,inst_25494);
} else {
if((state_val_25497 === (2))){
var inst_25478 = (state_25496[(8)]);
var inst_25477 = cljs.core.deref.call(null,status);
var inst_25478__$1 = cljs.core._EQ_.call(null,inst_25477,"RUN");
var state_25496__$1 = (function (){var statearr_25503 = state_25496;
(statearr_25503[(8)] = inst_25478__$1);

return statearr_25503;
})();
if(inst_25478__$1){
var statearr_25504_25523 = state_25496__$1;
(statearr_25504_25523[(1)] = (4));

} else {
var statearr_25505_25524 = state_25496__$1;
(statearr_25505_25524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (9))){
var inst_25491 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
var statearr_25506_25525 = state_25496__$1;
(statearr_25506_25525[(2)] = inst_25491);

(statearr_25506_25525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (5))){
var inst_25478 = (state_25496[(8)]);
var state_25496__$1 = state_25496;
var statearr_25507_25526 = state_25496__$1;
(statearr_25507_25526[(2)] = inst_25478);

(statearr_25507_25526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (10))){
var inst_25487 = (state_25496[(2)]);
var state_25496__$1 = (function (){var statearr_25508 = state_25496;
(statearr_25508[(9)] = inst_25487);

return statearr_25508;
})();
var statearr_25509_25527 = state_25496__$1;
(statearr_25509_25527[(2)] = null);

(statearr_25509_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (8))){
var state_25496__$1 = state_25496;
var statearr_25510_25528 = state_25496__$1;
(statearr_25510_25528[(2)] = null);

(statearr_25510_25528[(1)] = (9));


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
});})(c__22577__auto___25518))
;
return ((function (switch__22556__auto__,c__22577__auto___25518){
return (function() {
var csasync$proc$start_process_$_state_machine__22557__auto__ = null;
var csasync$proc$start_process_$_state_machine__22557__auto____0 = (function (){
var statearr_25514 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25514[(0)] = csasync$proc$start_process_$_state_machine__22557__auto__);

(statearr_25514[(1)] = (1));

return statearr_25514;
});
var csasync$proc$start_process_$_state_machine__22557__auto____1 = (function (state_25496){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_25496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e25515){if((e25515 instanceof Object)){
var ex__22560__auto__ = e25515;
var statearr_25516_25529 = state_25496;
(statearr_25516_25529[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25530 = state_25496;
state_25496 = G__25530;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22557__auto__ = function(state_25496){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22557__auto____1.call(this,state_25496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22557__auto____0;
csasync$proc$start_process_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22557__auto____1;
return csasync$proc$start_process_$_state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto___25518))
})();
var state__22579__auto__ = (function (){var statearr_25517 = f__22578__auto__.call(null);
(statearr_25517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___25518);

return statearr_25517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___25518))
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
var c__22577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){
var f__22578__auto__ = (function (){var switch__22556__auto__ = ((function (c__22577__auto__){
return (function (state_25551){
var state_val_25552 = (state_25551[(1)]);
if((state_val_25552 === (1))){
var inst_25546 = cljs.core.async.timeout.call(null,time);
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25551__$1,(2),inst_25546);
} else {
if((state_val_25552 === (2))){
var inst_25548 = (state_25551[(2)]);
var inst_25549 = func.call(null);
var state_25551__$1 = (function (){var statearr_25553 = state_25551;
(statearr_25553[(7)] = inst_25548);

return statearr_25553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,inst_25549);
} else {
return null;
}
}
});})(c__22577__auto__))
;
return ((function (switch__22556__auto__,c__22577__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22557__auto__ = null;
var csasync$proc$delayer_$_state_machine__22557__auto____0 = (function (){
var statearr_25557 = [null,null,null,null,null,null,null,null];
(statearr_25557[(0)] = csasync$proc$delayer_$_state_machine__22557__auto__);

(statearr_25557[(1)] = (1));

return statearr_25557;
});
var csasync$proc$delayer_$_state_machine__22557__auto____1 = (function (state_25551){
while(true){
var ret_value__22558__auto__ = (function (){try{while(true){
var result__22559__auto__ = switch__22556__auto__.call(null,state_25551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22559__auto__;
}
break;
}
}catch (e25558){if((e25558 instanceof Object)){
var ex__22560__auto__ = e25558;
var statearr_25559_25561 = state_25551;
(statearr_25559_25561[(5)] = ex__22560__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25562 = state_25551;
state_25551 = G__25562;
continue;
} else {
return ret_value__22558__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22557__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22557__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22557__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22557__auto____0;
csasync$proc$delayer_$_state_machine__22557__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22557__auto____1;
return csasync$proc$delayer_$_state_machine__22557__auto__;
})()
;})(switch__22556__auto__,c__22577__auto__))
})();
var state__22579__auto__ = (function (){var statearr_25560 = f__22578__auto__.call(null);
(statearr_25560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);

return statearr_25560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);

return c__22577__auto__;
});

//# sourceMappingURL=proc.js.map