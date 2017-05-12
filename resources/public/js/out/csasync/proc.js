// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args24337 = [];
var len__23313__auto___24400 = arguments.length;
var i__23314__auto___24401 = (0);
while(true){
if((i__23314__auto___24401 < len__23313__auto___24400)){
args24337.push((arguments[i__23314__auto___24401]));

var G__24402 = (i__23314__auto___24401 + (1));
i__23314__auto___24401 = G__24402;
continue;
} else {
}
break;
}

var G__24339 = args24337.length;
switch (G__24339) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24337.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24271__auto__ = ((function (c__24292__auto__){
return (function (state_24353){
var state_val_24354 = (state_24353[(1)]);
if((state_val_24354 === (1))){
var state_24353__$1 = state_24353;
var statearr_24355_24404 = state_24353__$1;
(statearr_24355_24404[(2)] = null);

(statearr_24355_24404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (2))){
var state_24353__$1 = state_24353;
var statearr_24356_24405 = state_24353__$1;
(statearr_24356_24405[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (3))){
var inst_24351 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24353__$1,inst_24351);
} else {
if((state_val_24354 === (4))){
var inst_24342 = func.call(null);
var inst_24343 = cljs.core.async.timeout.call(null,time_out);
var state_24353__$1 = (function (){var statearr_24358 = state_24353;
(statearr_24358[(7)] = inst_24342);

return statearr_24358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24353__$1,(7),inst_24343);
} else {
if((state_val_24354 === (5))){
var state_24353__$1 = state_24353;
var statearr_24359_24406 = state_24353__$1;
(statearr_24359_24406[(2)] = null);

(statearr_24359_24406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (6))){
var inst_24349 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24360_24407 = state_24353__$1;
(statearr_24360_24407[(2)] = inst_24349);

(statearr_24360_24407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24354 === (7))){
var inst_24345 = (state_24353[(2)]);
var state_24353__$1 = (function (){var statearr_24361 = state_24353;
(statearr_24361[(8)] = inst_24345);

return statearr_24361;
})();
var statearr_24362_24408 = state_24353__$1;
(statearr_24362_24408[(2)] = null);

(statearr_24362_24408[(1)] = (2));


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
});})(c__24292__auto__))
;
return ((function (switch__24271__auto__,c__24292__auto__){
return (function() {
var csasync$proc$state_machine__24272__auto__ = null;
var csasync$proc$state_machine__24272__auto____0 = (function (){
var statearr_24366 = [null,null,null,null,null,null,null,null,null];
(statearr_24366[(0)] = csasync$proc$state_machine__24272__auto__);

(statearr_24366[(1)] = (1));

return statearr_24366;
});
var csasync$proc$state_machine__24272__auto____1 = (function (state_24353){
while(true){
var ret_value__24273__auto__ = (function (){try{while(true){
var result__24274__auto__ = switch__24271__auto__.call(null,state_24353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24274__auto__;
}
break;
}
}catch (e24367){if((e24367 instanceof Object)){
var ex__24275__auto__ = e24367;
var statearr_24368_24409 = state_24353;
(statearr_24368_24409[(5)] = ex__24275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24410 = state_24353;
state_24353 = G__24410;
continue;
} else {
return ret_value__24273__auto__;
}
break;
}
});
csasync$proc$state_machine__24272__auto__ = function(state_24353){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24272__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24272__auto____1.call(this,state_24353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24272__auto____0;
csasync$proc$state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24272__auto____1;
return csasync$proc$state_machine__24272__auto__;
})()
;})(switch__24271__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_24369 = f__24293__auto__.call(null);
(statearr_24369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_24369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24271__auto__ = ((function (c__24292__auto__){
return (function (state_24383){
var state_val_24384 = (state_24383[(1)]);
if((state_val_24384 === (1))){
var state_24383__$1 = state_24383;
var statearr_24385_24411 = state_24383__$1;
(statearr_24385_24411[(2)] = null);

(statearr_24385_24411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (2))){
var state_24383__$1 = state_24383;
var statearr_24386_24412 = state_24383__$1;
(statearr_24386_24412[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (3))){
var inst_24381 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24383__$1,inst_24381);
} else {
if((state_val_24384 === (4))){
var inst_24372 = func.call(null,param);
var inst_24373 = cljs.core.async.timeout.call(null,time_out);
var state_24383__$1 = (function (){var statearr_24388 = state_24383;
(statearr_24388[(7)] = inst_24372);

return statearr_24388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(7),inst_24373);
} else {
if((state_val_24384 === (5))){
var state_24383__$1 = state_24383;
var statearr_24389_24413 = state_24383__$1;
(statearr_24389_24413[(2)] = null);

(statearr_24389_24413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (6))){
var inst_24379 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24390_24414 = state_24383__$1;
(statearr_24390_24414[(2)] = inst_24379);

(statearr_24390_24414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (7))){
var inst_24375 = (state_24383[(2)]);
var state_24383__$1 = (function (){var statearr_24391 = state_24383;
(statearr_24391[(8)] = inst_24375);

return statearr_24391;
})();
var statearr_24392_24415 = state_24383__$1;
(statearr_24392_24415[(2)] = null);

(statearr_24392_24415[(1)] = (2));


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
});})(c__24292__auto__))
;
return ((function (switch__24271__auto__,c__24292__auto__){
return (function() {
var csasync$proc$state_machine__24272__auto__ = null;
var csasync$proc$state_machine__24272__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = csasync$proc$state_machine__24272__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var csasync$proc$state_machine__24272__auto____1 = (function (state_24383){
while(true){
var ret_value__24273__auto__ = (function (){try{while(true){
var result__24274__auto__ = switch__24271__auto__.call(null,state_24383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24274__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object)){
var ex__24275__auto__ = e24397;
var statearr_24398_24416 = state_24383;
(statearr_24398_24416[(5)] = ex__24275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24417 = state_24383;
state_24383 = G__24417;
continue;
} else {
return ret_value__24273__auto__;
}
break;
}
});
csasync$proc$state_machine__24272__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24272__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24272__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24272__auto____0;
csasync$proc$state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24272__auto____1;
return csasync$proc$state_machine__24272__auto__;
})()
;})(switch__24271__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_24399 = f__24293__auto__.call(null);
(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_24399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24292__auto___24524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto___24524){
return (function (){
var f__24293__auto__ = (function (){var switch__24271__auto__ = ((function (c__24292__auto___24524){
return (function (state_24497){
var state_val_24498 = (state_24497[(1)]);
if((state_val_24498 === (7))){
var inst_24480 = cljs.core.async.timeout.call(null,time_out);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24497__$1,(10),inst_24480);
} else {
if((state_val_24498 === (1))){
var state_24497__$1 = state_24497;
var statearr_24499_24525 = state_24497__$1;
(statearr_24499_24525[(2)] = null);

(statearr_24499_24525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (4))){
var inst_24475 = proc_fn.call(null);
var state_24497__$1 = state_24497;
var statearr_24500_24526 = state_24497__$1;
(statearr_24500_24526[(2)] = inst_24475);

(statearr_24500_24526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (13))){
var inst_24494 = (state_24497[(2)]);
var inst_24495 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24497__$1 = (function (){var statearr_24501 = state_24497;
(statearr_24501[(7)] = inst_24494);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24497__$1,inst_24495);
} else {
if((state_val_24498 === (6))){
var inst_24478 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
if(cljs.core.truth_(inst_24478)){
var statearr_24502_24527 = state_24497__$1;
(statearr_24502_24527[(1)] = (7));

} else {
var statearr_24503_24528 = state_24497__$1;
(statearr_24503_24528[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (3))){
var inst_24488 = (state_24497[(2)]);
var inst_24489 = (final_fun instanceof clojure.lang.IFn);
var state_24497__$1 = (function (){var statearr_24504 = state_24497;
(statearr_24504[(8)] = inst_24488);

return statearr_24504;
})();
if(cljs.core.truth_(inst_24489)){
var statearr_24505_24529 = state_24497__$1;
(statearr_24505_24529[(1)] = (11));

} else {
var statearr_24506_24530 = state_24497__$1;
(statearr_24506_24530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (12))){
var state_24497__$1 = state_24497;
var statearr_24507_24531 = state_24497__$1;
(statearr_24507_24531[(2)] = null);

(statearr_24507_24531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (2))){
var inst_24473 = (state_24497[(9)]);
var inst_24472 = cljs.core.deref.call(null,status);
var inst_24473__$1 = cljs.core._EQ_.call(null,inst_24472,"RUN");
var state_24497__$1 = (function (){var statearr_24508 = state_24497;
(statearr_24508[(9)] = inst_24473__$1);

return statearr_24508;
})();
if(inst_24473__$1){
var statearr_24509_24532 = state_24497__$1;
(statearr_24509_24532[(1)] = (4));

} else {
var statearr_24510_24533 = state_24497__$1;
(statearr_24510_24533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (11))){
var inst_24491 = final_fun.call(null);
var state_24497__$1 = state_24497;
var statearr_24511_24534 = state_24497__$1;
(statearr_24511_24534[(2)] = inst_24491);

(statearr_24511_24534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (9))){
var inst_24486 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24512_24535 = state_24497__$1;
(statearr_24512_24535[(2)] = inst_24486);

(statearr_24512_24535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (5))){
var inst_24473 = (state_24497[(9)]);
var state_24497__$1 = state_24497;
var statearr_24513_24536 = state_24497__$1;
(statearr_24513_24536[(2)] = inst_24473);

(statearr_24513_24536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (10))){
var inst_24482 = (state_24497[(2)]);
var state_24497__$1 = (function (){var statearr_24514 = state_24497;
(statearr_24514[(10)] = inst_24482);

return statearr_24514;
})();
var statearr_24515_24537 = state_24497__$1;
(statearr_24515_24537[(2)] = null);

(statearr_24515_24537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (8))){
var state_24497__$1 = state_24497;
var statearr_24516_24538 = state_24497__$1;
(statearr_24516_24538[(2)] = null);

(statearr_24516_24538[(1)] = (9));


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
});})(c__24292__auto___24524))
;
return ((function (switch__24271__auto__,c__24292__auto___24524){
return (function() {
var csasync$proc$start_process_$_state_machine__24272__auto__ = null;
var csasync$proc$start_process_$_state_machine__24272__auto____0 = (function (){
var statearr_24520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24520[(0)] = csasync$proc$start_process_$_state_machine__24272__auto__);

(statearr_24520[(1)] = (1));

return statearr_24520;
});
var csasync$proc$start_process_$_state_machine__24272__auto____1 = (function (state_24497){
while(true){
var ret_value__24273__auto__ = (function (){try{while(true){
var result__24274__auto__ = switch__24271__auto__.call(null,state_24497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24274__auto__;
}
break;
}
}catch (e24521){if((e24521 instanceof Object)){
var ex__24275__auto__ = e24521;
var statearr_24522_24539 = state_24497;
(statearr_24522_24539[(5)] = ex__24275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24540 = state_24497;
state_24497 = G__24540;
continue;
} else {
return ret_value__24273__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24272__auto__ = function(state_24497){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24272__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24272__auto____1.call(this,state_24497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24272__auto____0;
csasync$proc$start_process_$_state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24272__auto____1;
return csasync$proc$start_process_$_state_machine__24272__auto__;
})()
;})(switch__24271__auto__,c__24292__auto___24524))
})();
var state__24294__auto__ = (function (){var statearr_24523 = f__24293__auto__.call(null);
(statearr_24523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto___24524);

return statearr_24523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto___24524))
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
var c__24292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24292__auto__){
return (function (){
var f__24293__auto__ = (function (){var switch__24271__auto__ = ((function (c__24292__auto__){
return (function (state_24561){
var state_val_24562 = (state_24561[(1)]);
if((state_val_24562 === (1))){
var inst_24556 = cljs.core.async.timeout.call(null,time);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(2),inst_24556);
} else {
if((state_val_24562 === (2))){
var inst_24558 = (state_24561[(2)]);
var inst_24559 = func.call(null);
var state_24561__$1 = (function (){var statearr_24563 = state_24561;
(statearr_24563[(7)] = inst_24558);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24561__$1,inst_24559);
} else {
return null;
}
}
});})(c__24292__auto__))
;
return ((function (switch__24271__auto__,c__24292__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24272__auto__ = null;
var csasync$proc$delayer_$_state_machine__24272__auto____0 = (function (){
var statearr_24567 = [null,null,null,null,null,null,null,null];
(statearr_24567[(0)] = csasync$proc$delayer_$_state_machine__24272__auto__);

(statearr_24567[(1)] = (1));

return statearr_24567;
});
var csasync$proc$delayer_$_state_machine__24272__auto____1 = (function (state_24561){
while(true){
var ret_value__24273__auto__ = (function (){try{while(true){
var result__24274__auto__ = switch__24271__auto__.call(null,state_24561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24274__auto__;
}
break;
}
}catch (e24568){if((e24568 instanceof Object)){
var ex__24275__auto__ = e24568;
var statearr_24569_24571 = state_24561;
(statearr_24569_24571[(5)] = ex__24275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24572 = state_24561;
state_24561 = G__24572;
continue;
} else {
return ret_value__24273__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24272__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24272__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24272__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24272__auto____0;
csasync$proc$delayer_$_state_machine__24272__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24272__auto____1;
return csasync$proc$delayer_$_state_machine__24272__auto__;
})()
;})(switch__24271__auto__,c__24292__auto__))
})();
var state__24294__auto__ = (function (){var statearr_24570 = f__24293__auto__.call(null);
(statearr_24570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24292__auto__);

return statearr_24570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24294__auto__);
});})(c__24292__auto__))
);

return c__24292__auto__;
});

//# sourceMappingURL=proc.js.map