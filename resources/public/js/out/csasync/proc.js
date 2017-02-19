// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args35261 = [];
var len__21990__auto___35324 = arguments.length;
var i__21991__auto___35325 = (0);
while(true){
if((i__21991__auto___35325 < len__21990__auto___35324)){
args35261.push((arguments[i__21991__auto___35325]));

var G__35326 = (i__21991__auto___35325 + (1));
i__21991__auto___35325 = G__35326;
continue;
} else {
}
break;
}

var G__35263 = args35261.length;
switch (G__35263) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35261.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__23052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23052__auto__){
return (function (){
var f__23053__auto__ = (function (){var switch__23031__auto__ = ((function (c__23052__auto__){
return (function (state_35277){
var state_val_35278 = (state_35277[(1)]);
if((state_val_35278 === (1))){
var state_35277__$1 = state_35277;
var statearr_35279_35328 = state_35277__$1;
(statearr_35279_35328[(2)] = null);

(statearr_35279_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (2))){
var state_35277__$1 = state_35277;
var statearr_35280_35329 = state_35277__$1;
(statearr_35280_35329[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (3))){
var inst_35275 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35277__$1,inst_35275);
} else {
if((state_val_35278 === (4))){
var inst_35266 = func.call(null);
var inst_35267 = cljs.core.async.timeout.call(null,time_out);
var state_35277__$1 = (function (){var statearr_35282 = state_35277;
(statearr_35282[(7)] = inst_35266);

return statearr_35282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35277__$1,(7),inst_35267);
} else {
if((state_val_35278 === (5))){
var state_35277__$1 = state_35277;
var statearr_35283_35330 = state_35277__$1;
(statearr_35283_35330[(2)] = null);

(statearr_35283_35330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (6))){
var inst_35273 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35284_35331 = state_35277__$1;
(statearr_35284_35331[(2)] = inst_35273);

(statearr_35284_35331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (7))){
var inst_35269 = (state_35277[(2)]);
var state_35277__$1 = (function (){var statearr_35285 = state_35277;
(statearr_35285[(8)] = inst_35269);

return statearr_35285;
})();
var statearr_35286_35332 = state_35277__$1;
(statearr_35286_35332[(2)] = null);

(statearr_35286_35332[(1)] = (2));


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
});})(c__23052__auto__))
;
return ((function (switch__23031__auto__,c__23052__auto__){
return (function() {
var csasync$proc$state_machine__23032__auto__ = null;
var csasync$proc$state_machine__23032__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = csasync$proc$state_machine__23032__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var csasync$proc$state_machine__23032__auto____1 = (function (state_35277){
while(true){
var ret_value__23033__auto__ = (function (){try{while(true){
var result__23034__auto__ = switch__23031__auto__.call(null,state_35277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23034__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__23035__auto__ = e35291;
var statearr_35292_35333 = state_35277;
(statearr_35292_35333[(5)] = ex__23035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35334 = state_35277;
state_35277 = G__35334;
continue;
} else {
return ret_value__23033__auto__;
}
break;
}
});
csasync$proc$state_machine__23032__auto__ = function(state_35277){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23032__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23032__auto____1.call(this,state_35277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23032__auto____0;
csasync$proc$state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23032__auto____1;
return csasync$proc$state_machine__23032__auto__;
})()
;})(switch__23031__auto__,c__23052__auto__))
})();
var state__23054__auto__ = (function (){var statearr_35293 = f__23053__auto__.call(null);
(statearr_35293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23052__auto__);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23054__auto__);
});})(c__23052__auto__))
);

return c__23052__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__23052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23052__auto__){
return (function (){
var f__23053__auto__ = (function (){var switch__23031__auto__ = ((function (c__23052__auto__){
return (function (state_35307){
var state_val_35308 = (state_35307[(1)]);
if((state_val_35308 === (1))){
var state_35307__$1 = state_35307;
var statearr_35309_35335 = state_35307__$1;
(statearr_35309_35335[(2)] = null);

(statearr_35309_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (2))){
var state_35307__$1 = state_35307;
var statearr_35310_35336 = state_35307__$1;
(statearr_35310_35336[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (3))){
var inst_35305 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35307__$1,inst_35305);
} else {
if((state_val_35308 === (4))){
var inst_35296 = func.call(null,param);
var inst_35297 = cljs.core.async.timeout.call(null,time_out);
var state_35307__$1 = (function (){var statearr_35312 = state_35307;
(statearr_35312[(7)] = inst_35296);

return statearr_35312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35307__$1,(7),inst_35297);
} else {
if((state_val_35308 === (5))){
var state_35307__$1 = state_35307;
var statearr_35313_35337 = state_35307__$1;
(statearr_35313_35337[(2)] = null);

(statearr_35313_35337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (6))){
var inst_35303 = (state_35307[(2)]);
var state_35307__$1 = state_35307;
var statearr_35314_35338 = state_35307__$1;
(statearr_35314_35338[(2)] = inst_35303);

(statearr_35314_35338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (7))){
var inst_35299 = (state_35307[(2)]);
var state_35307__$1 = (function (){var statearr_35315 = state_35307;
(statearr_35315[(8)] = inst_35299);

return statearr_35315;
})();
var statearr_35316_35339 = state_35307__$1;
(statearr_35316_35339[(2)] = null);

(statearr_35316_35339[(1)] = (2));


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
});})(c__23052__auto__))
;
return ((function (switch__23031__auto__,c__23052__auto__){
return (function() {
var csasync$proc$state_machine__23032__auto__ = null;
var csasync$proc$state_machine__23032__auto____0 = (function (){
var statearr_35320 = [null,null,null,null,null,null,null,null,null];
(statearr_35320[(0)] = csasync$proc$state_machine__23032__auto__);

(statearr_35320[(1)] = (1));

return statearr_35320;
});
var csasync$proc$state_machine__23032__auto____1 = (function (state_35307){
while(true){
var ret_value__23033__auto__ = (function (){try{while(true){
var result__23034__auto__ = switch__23031__auto__.call(null,state_35307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23034__auto__;
}
break;
}
}catch (e35321){if((e35321 instanceof Object)){
var ex__23035__auto__ = e35321;
var statearr_35322_35340 = state_35307;
(statearr_35322_35340[(5)] = ex__23035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35341 = state_35307;
state_35307 = G__35341;
continue;
} else {
return ret_value__23033__auto__;
}
break;
}
});
csasync$proc$state_machine__23032__auto__ = function(state_35307){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__23032__auto____0.call(this);
case 1:
return csasync$proc$state_machine__23032__auto____1.call(this,state_35307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__23032__auto____0;
csasync$proc$state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__23032__auto____1;
return csasync$proc$state_machine__23032__auto__;
})()
;})(switch__23031__auto__,c__23052__auto__))
})();
var state__23054__auto__ = (function (){var statearr_35323 = f__23053__auto__.call(null);
(statearr_35323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23052__auto__);

return statearr_35323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23054__auto__);
});})(c__23052__auto__))
);

return c__23052__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__23052__auto___35426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23052__auto___35426){
return (function (){
var f__23053__auto__ = (function (){var switch__23031__auto__ = ((function (c__23052__auto___35426){
return (function (state_35404){
var state_val_35405 = (state_35404[(1)]);
if((state_val_35405 === (7))){
var inst_35393 = cljs.core.async.timeout.call(null,time_out);
var state_35404__$1 = state_35404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35404__$1,(10),inst_35393);
} else {
if((state_val_35405 === (1))){
var state_35404__$1 = state_35404;
var statearr_35406_35427 = state_35404__$1;
(statearr_35406_35427[(2)] = null);

(statearr_35406_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (4))){
var inst_35388 = proc_fn.call(null);
var state_35404__$1 = state_35404;
var statearr_35407_35428 = state_35404__$1;
(statearr_35407_35428[(2)] = inst_35388);

(statearr_35407_35428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (6))){
var inst_35391 = (state_35404[(2)]);
var state_35404__$1 = state_35404;
if(cljs.core.truth_(inst_35391)){
var statearr_35408_35429 = state_35404__$1;
(statearr_35408_35429[(1)] = (7));

} else {
var statearr_35409_35430 = state_35404__$1;
(statearr_35409_35430[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (3))){
var inst_35401 = (state_35404[(2)]);
var inst_35402 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_35404__$1 = (function (){var statearr_35410 = state_35404;
(statearr_35410[(7)] = inst_35401);

return statearr_35410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35404__$1,inst_35402);
} else {
if((state_val_35405 === (2))){
var inst_35386 = (state_35404[(8)]);
var inst_35385 = cljs.core.deref.call(null,status);
var inst_35386__$1 = cljs.core._EQ_.call(null,inst_35385,"RUN");
var state_35404__$1 = (function (){var statearr_35411 = state_35404;
(statearr_35411[(8)] = inst_35386__$1);

return statearr_35411;
})();
if(inst_35386__$1){
var statearr_35412_35431 = state_35404__$1;
(statearr_35412_35431[(1)] = (4));

} else {
var statearr_35413_35432 = state_35404__$1;
(statearr_35413_35432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (9))){
var inst_35399 = (state_35404[(2)]);
var state_35404__$1 = state_35404;
var statearr_35414_35433 = state_35404__$1;
(statearr_35414_35433[(2)] = inst_35399);

(statearr_35414_35433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (5))){
var inst_35386 = (state_35404[(8)]);
var state_35404__$1 = state_35404;
var statearr_35415_35434 = state_35404__$1;
(statearr_35415_35434[(2)] = inst_35386);

(statearr_35415_35434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (10))){
var inst_35395 = (state_35404[(2)]);
var state_35404__$1 = (function (){var statearr_35416 = state_35404;
(statearr_35416[(9)] = inst_35395);

return statearr_35416;
})();
var statearr_35417_35435 = state_35404__$1;
(statearr_35417_35435[(2)] = null);

(statearr_35417_35435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35405 === (8))){
var state_35404__$1 = state_35404;
var statearr_35418_35436 = state_35404__$1;
(statearr_35418_35436[(2)] = null);

(statearr_35418_35436[(1)] = (9));


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
});})(c__23052__auto___35426))
;
return ((function (switch__23031__auto__,c__23052__auto___35426){
return (function() {
var csasync$proc$start_process_$_state_machine__23032__auto__ = null;
var csasync$proc$start_process_$_state_machine__23032__auto____0 = (function (){
var statearr_35422 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35422[(0)] = csasync$proc$start_process_$_state_machine__23032__auto__);

(statearr_35422[(1)] = (1));

return statearr_35422;
});
var csasync$proc$start_process_$_state_machine__23032__auto____1 = (function (state_35404){
while(true){
var ret_value__23033__auto__ = (function (){try{while(true){
var result__23034__auto__ = switch__23031__auto__.call(null,state_35404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23034__auto__;
}
break;
}
}catch (e35423){if((e35423 instanceof Object)){
var ex__23035__auto__ = e35423;
var statearr_35424_35437 = state_35404;
(statearr_35424_35437[(5)] = ex__23035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35438 = state_35404;
state_35404 = G__35438;
continue;
} else {
return ret_value__23033__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__23032__auto__ = function(state_35404){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__23032__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__23032__auto____1.call(this,state_35404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__23032__auto____0;
csasync$proc$start_process_$_state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__23032__auto____1;
return csasync$proc$start_process_$_state_machine__23032__auto__;
})()
;})(switch__23031__auto__,c__23052__auto___35426))
})();
var state__23054__auto__ = (function (){var statearr_35425 = f__23053__auto__.call(null);
(statearr_35425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23052__auto___35426);

return statearr_35425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23054__auto__);
});})(c__23052__auto___35426))
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
var c__23052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23052__auto__){
return (function (){
var f__23053__auto__ = (function (){var switch__23031__auto__ = ((function (c__23052__auto__){
return (function (state_35459){
var state_val_35460 = (state_35459[(1)]);
if((state_val_35460 === (1))){
var inst_35454 = cljs.core.async.timeout.call(null,time);
var state_35459__$1 = state_35459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35459__$1,(2),inst_35454);
} else {
if((state_val_35460 === (2))){
var inst_35456 = (state_35459[(2)]);
var inst_35457 = func.call(null);
var state_35459__$1 = (function (){var statearr_35461 = state_35459;
(statearr_35461[(7)] = inst_35456);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35459__$1,inst_35457);
} else {
return null;
}
}
});})(c__23052__auto__))
;
return ((function (switch__23031__auto__,c__23052__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__23032__auto__ = null;
var csasync$proc$delayer_$_state_machine__23032__auto____0 = (function (){
var statearr_35465 = [null,null,null,null,null,null,null,null];
(statearr_35465[(0)] = csasync$proc$delayer_$_state_machine__23032__auto__);

(statearr_35465[(1)] = (1));

return statearr_35465;
});
var csasync$proc$delayer_$_state_machine__23032__auto____1 = (function (state_35459){
while(true){
var ret_value__23033__auto__ = (function (){try{while(true){
var result__23034__auto__ = switch__23031__auto__.call(null,state_35459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23034__auto__;
}
break;
}
}catch (e35466){if((e35466 instanceof Object)){
var ex__23035__auto__ = e35466;
var statearr_35467_35469 = state_35459;
(statearr_35467_35469[(5)] = ex__23035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35470 = state_35459;
state_35459 = G__35470;
continue;
} else {
return ret_value__23033__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__23032__auto__ = function(state_35459){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__23032__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__23032__auto____1.call(this,state_35459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__23032__auto____0;
csasync$proc$delayer_$_state_machine__23032__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__23032__auto____1;
return csasync$proc$delayer_$_state_machine__23032__auto__;
})()
;})(switch__23031__auto__,c__23052__auto__))
})();
var state__23054__auto__ = (function (){var statearr_35468 = f__23053__auto__.call(null);
(statearr_35468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23052__auto__);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23054__auto__);
});})(c__23052__auto__))
);

return c__23052__auto__;
});

//# sourceMappingURL=proc.js.map