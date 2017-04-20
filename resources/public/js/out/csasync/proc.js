// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args26249 = [];
var len__21845__auto___26312 = arguments.length;
var i__21846__auto___26313 = (0);
while(true){
if((i__21846__auto___26313 < len__21845__auto___26312)){
args26249.push((arguments[i__21846__auto___26313]));

var G__26314 = (i__21846__auto___26313 + (1));
i__21846__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var G__26251 = args26249.length;
switch (G__26251) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26249.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_26265){
var state_val_26266 = (state_26265[(1)]);
if((state_val_26266 === (1))){
var state_26265__$1 = state_26265;
var statearr_26267_26316 = state_26265__$1;
(statearr_26267_26316[(2)] = null);

(statearr_26267_26316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (2))){
var state_26265__$1 = state_26265;
var statearr_26268_26317 = state_26265__$1;
(statearr_26268_26317[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (3))){
var inst_26263 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26265__$1,inst_26263);
} else {
if((state_val_26266 === (4))){
var inst_26254 = func.call(null);
var inst_26255 = cljs.core.async.timeout.call(null,time_out);
var state_26265__$1 = (function (){var statearr_26270 = state_26265;
(statearr_26270[(7)] = inst_26254);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26265__$1,(7),inst_26255);
} else {
if((state_val_26266 === (5))){
var state_26265__$1 = state_26265;
var statearr_26271_26318 = state_26265__$1;
(statearr_26271_26318[(2)] = null);

(statearr_26271_26318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (6))){
var inst_26261 = (state_26265[(2)]);
var state_26265__$1 = state_26265;
var statearr_26272_26319 = state_26265__$1;
(statearr_26272_26319[(2)] = inst_26261);

(statearr_26272_26319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26266 === (7))){
var inst_26257 = (state_26265[(2)]);
var state_26265__$1 = (function (){var statearr_26273 = state_26265;
(statearr_26273[(8)] = inst_26257);

return statearr_26273;
})();
var statearr_26274_26320 = state_26265__$1;
(statearr_26274_26320[(2)] = null);

(statearr_26274_26320[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$state_machine__22901__auto__ = null;
var csasync$proc$state_machine__22901__auto____0 = (function (){
var statearr_26278 = [null,null,null,null,null,null,null,null,null];
(statearr_26278[(0)] = csasync$proc$state_machine__22901__auto__);

(statearr_26278[(1)] = (1));

return statearr_26278;
});
var csasync$proc$state_machine__22901__auto____1 = (function (state_26265){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_26265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e26279){if((e26279 instanceof Object)){
var ex__22904__auto__ = e26279;
var statearr_26280_26321 = state_26265;
(statearr_26280_26321[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26322 = state_26265;
state_26265 = G__26322;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$state_machine__22901__auto__ = function(state_26265){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22901__auto____1.call(this,state_26265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22901__auto____0;
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22901__auto____1;
return csasync$proc$state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_26281 = f__22922__auto__.call(null);
(statearr_26281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_26281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_26295){
var state_val_26296 = (state_26295[(1)]);
if((state_val_26296 === (1))){
var state_26295__$1 = state_26295;
var statearr_26297_26323 = state_26295__$1;
(statearr_26297_26323[(2)] = null);

(statearr_26297_26323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (2))){
var state_26295__$1 = state_26295;
var statearr_26298_26324 = state_26295__$1;
(statearr_26298_26324[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (3))){
var inst_26293 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26295__$1,inst_26293);
} else {
if((state_val_26296 === (4))){
var inst_26284 = func.call(null,param);
var inst_26285 = cljs.core.async.timeout.call(null,time_out);
var state_26295__$1 = (function (){var statearr_26300 = state_26295;
(statearr_26300[(7)] = inst_26284);

return statearr_26300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(7),inst_26285);
} else {
if((state_val_26296 === (5))){
var state_26295__$1 = state_26295;
var statearr_26301_26325 = state_26295__$1;
(statearr_26301_26325[(2)] = null);

(statearr_26301_26325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (6))){
var inst_26291 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26302_26326 = state_26295__$1;
(statearr_26302_26326[(2)] = inst_26291);

(statearr_26302_26326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (7))){
var inst_26287 = (state_26295[(2)]);
var state_26295__$1 = (function (){var statearr_26303 = state_26295;
(statearr_26303[(8)] = inst_26287);

return statearr_26303;
})();
var statearr_26304_26327 = state_26295__$1;
(statearr_26304_26327[(2)] = null);

(statearr_26304_26327[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$state_machine__22901__auto__ = null;
var csasync$proc$state_machine__22901__auto____0 = (function (){
var statearr_26308 = [null,null,null,null,null,null,null,null,null];
(statearr_26308[(0)] = csasync$proc$state_machine__22901__auto__);

(statearr_26308[(1)] = (1));

return statearr_26308;
});
var csasync$proc$state_machine__22901__auto____1 = (function (state_26295){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_26295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e26309){if((e26309 instanceof Object)){
var ex__22904__auto__ = e26309;
var statearr_26310_26328 = state_26295;
(statearr_26310_26328[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26329 = state_26295;
state_26295 = G__26329;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$state_machine__22901__auto__ = function(state_26295){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$state_machine__22901__auto____1.call(this,state_26295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__22901__auto____0;
csasync$proc$state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__22901__auto____1;
return csasync$proc$state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_26311 = f__22922__auto__.call(null);
(statearr_26311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_26311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22921__auto___26414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___26414){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto___26414){
return (function (state_26392){
var state_val_26393 = (state_26392[(1)]);
if((state_val_26393 === (7))){
var inst_26381 = cljs.core.async.timeout.call(null,time_out);
var state_26392__$1 = state_26392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26392__$1,(10),inst_26381);
} else {
if((state_val_26393 === (1))){
var state_26392__$1 = state_26392;
var statearr_26394_26415 = state_26392__$1;
(statearr_26394_26415[(2)] = null);

(statearr_26394_26415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (4))){
var inst_26376 = proc_fn.call(null);
var state_26392__$1 = state_26392;
var statearr_26395_26416 = state_26392__$1;
(statearr_26395_26416[(2)] = inst_26376);

(statearr_26395_26416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (6))){
var inst_26379 = (state_26392[(2)]);
var state_26392__$1 = state_26392;
if(cljs.core.truth_(inst_26379)){
var statearr_26396_26417 = state_26392__$1;
(statearr_26396_26417[(1)] = (7));

} else {
var statearr_26397_26418 = state_26392__$1;
(statearr_26397_26418[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (3))){
var inst_26389 = (state_26392[(2)]);
var inst_26390 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_26392__$1 = (function (){var statearr_26398 = state_26392;
(statearr_26398[(7)] = inst_26389);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26392__$1,inst_26390);
} else {
if((state_val_26393 === (2))){
var inst_26374 = (state_26392[(8)]);
var inst_26373 = cljs.core.deref.call(null,status);
var inst_26374__$1 = cljs.core._EQ_.call(null,inst_26373,"RUN");
var state_26392__$1 = (function (){var statearr_26399 = state_26392;
(statearr_26399[(8)] = inst_26374__$1);

return statearr_26399;
})();
if(inst_26374__$1){
var statearr_26400_26419 = state_26392__$1;
(statearr_26400_26419[(1)] = (4));

} else {
var statearr_26401_26420 = state_26392__$1;
(statearr_26401_26420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (9))){
var inst_26387 = (state_26392[(2)]);
var state_26392__$1 = state_26392;
var statearr_26402_26421 = state_26392__$1;
(statearr_26402_26421[(2)] = inst_26387);

(statearr_26402_26421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (5))){
var inst_26374 = (state_26392[(8)]);
var state_26392__$1 = state_26392;
var statearr_26403_26422 = state_26392__$1;
(statearr_26403_26422[(2)] = inst_26374);

(statearr_26403_26422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (10))){
var inst_26383 = (state_26392[(2)]);
var state_26392__$1 = (function (){var statearr_26404 = state_26392;
(statearr_26404[(9)] = inst_26383);

return statearr_26404;
})();
var statearr_26405_26423 = state_26392__$1;
(statearr_26405_26423[(2)] = null);

(statearr_26405_26423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26393 === (8))){
var state_26392__$1 = state_26392;
var statearr_26406_26424 = state_26392__$1;
(statearr_26406_26424[(2)] = null);

(statearr_26406_26424[(1)] = (9));


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
});})(c__22921__auto___26414))
;
return ((function (switch__22900__auto__,c__22921__auto___26414){
return (function() {
var csasync$proc$start_process_$_state_machine__22901__auto__ = null;
var csasync$proc$start_process_$_state_machine__22901__auto____0 = (function (){
var statearr_26410 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26410[(0)] = csasync$proc$start_process_$_state_machine__22901__auto__);

(statearr_26410[(1)] = (1));

return statearr_26410;
});
var csasync$proc$start_process_$_state_machine__22901__auto____1 = (function (state_26392){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_26392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object)){
var ex__22904__auto__ = e26411;
var statearr_26412_26425 = state_26392;
(statearr_26412_26425[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26392;
state_26392 = G__26426;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__22901__auto__ = function(state_26392){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__22901__auto____1.call(this,state_26392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__22901__auto____0;
csasync$proc$start_process_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__22901__auto____1;
return csasync$proc$start_process_$_state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto___26414))
})();
var state__22923__auto__ = (function (){var statearr_26413 = f__22922__auto__.call(null);
(statearr_26413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___26414);

return statearr_26413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___26414))
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
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22900__auto__ = ((function (c__22921__auto__){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (1))){
var inst_26442 = cljs.core.async.timeout.call(null,time);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(2),inst_26442);
} else {
if((state_val_26448 === (2))){
var inst_26444 = (state_26447[(2)]);
var inst_26445 = func.call(null);
var state_26447__$1 = (function (){var statearr_26449 = state_26447;
(statearr_26449[(7)] = inst_26444);

return statearr_26449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
return null;
}
}
});})(c__22921__auto__))
;
return ((function (switch__22900__auto__,c__22921__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__22901__auto__ = null;
var csasync$proc$delayer_$_state_machine__22901__auto____0 = (function (){
var statearr_26453 = [null,null,null,null,null,null,null,null];
(statearr_26453[(0)] = csasync$proc$delayer_$_state_machine__22901__auto__);

(statearr_26453[(1)] = (1));

return statearr_26453;
});
var csasync$proc$delayer_$_state_machine__22901__auto____1 = (function (state_26447){
while(true){
var ret_value__22902__auto__ = (function (){try{while(true){
var result__22903__auto__ = switch__22900__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22903__auto__;
}
break;
}
}catch (e26454){if((e26454 instanceof Object)){
var ex__22904__auto__ = e26454;
var statearr_26455_26457 = state_26447;
(statearr_26455_26457[(5)] = ex__22904__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26458 = state_26447;
state_26447 = G__26458;
continue;
} else {
return ret_value__22902__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__22901__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__22901__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__22901__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__22901__auto____0;
csasync$proc$delayer_$_state_machine__22901__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__22901__auto____1;
return csasync$proc$delayer_$_state_machine__22901__auto__;
})()
;})(switch__22900__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_26456 = f__22922__auto__.call(null);
(statearr_26456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_26456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

//# sourceMappingURL=proc.js.map