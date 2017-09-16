// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args43225 = [];
var len__23400__auto___43288 = arguments.length;
var i__23401__auto___43289 = (0);
while(true){
if((i__23401__auto___43289 < len__23400__auto___43288)){
args43225.push((arguments[i__23401__auto___43289]));

var G__43290 = (i__23401__auto___43289 + (1));
i__23401__auto___43289 = G__43290;
continue;
} else {
}
break;
}

var G__43227 = args43225.length;
switch (G__43227) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43225.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__24379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24379__auto__){
return (function (){
var f__24380__auto__ = (function (){var switch__24358__auto__ = ((function (c__24379__auto__){
return (function (state_43241){
var state_val_43242 = (state_43241[(1)]);
if((state_val_43242 === (1))){
var state_43241__$1 = state_43241;
var statearr_43243_43292 = state_43241__$1;
(statearr_43243_43292[(2)] = null);

(statearr_43243_43292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (2))){
var state_43241__$1 = state_43241;
var statearr_43244_43293 = state_43241__$1;
(statearr_43244_43293[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (3))){
var inst_43239 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43241__$1,inst_43239);
} else {
if((state_val_43242 === (4))){
var inst_43230 = func.call(null);
var inst_43231 = cljs.core.async.timeout.call(null,time_out);
var state_43241__$1 = (function (){var statearr_43246 = state_43241;
(statearr_43246[(7)] = inst_43230);

return statearr_43246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43241__$1,(7),inst_43231);
} else {
if((state_val_43242 === (5))){
var state_43241__$1 = state_43241;
var statearr_43247_43294 = state_43241__$1;
(statearr_43247_43294[(2)] = null);

(statearr_43247_43294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (6))){
var inst_43237 = (state_43241[(2)]);
var state_43241__$1 = state_43241;
var statearr_43248_43295 = state_43241__$1;
(statearr_43248_43295[(2)] = inst_43237);

(statearr_43248_43295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43242 === (7))){
var inst_43233 = (state_43241[(2)]);
var state_43241__$1 = (function (){var statearr_43249 = state_43241;
(statearr_43249[(8)] = inst_43233);

return statearr_43249;
})();
var statearr_43250_43296 = state_43241__$1;
(statearr_43250_43296[(2)] = null);

(statearr_43250_43296[(1)] = (2));


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
});})(c__24379__auto__))
;
return ((function (switch__24358__auto__,c__24379__auto__){
return (function() {
var csasync$proc$state_machine__24359__auto__ = null;
var csasync$proc$state_machine__24359__auto____0 = (function (){
var statearr_43254 = [null,null,null,null,null,null,null,null,null];
(statearr_43254[(0)] = csasync$proc$state_machine__24359__auto__);

(statearr_43254[(1)] = (1));

return statearr_43254;
});
var csasync$proc$state_machine__24359__auto____1 = (function (state_43241){
while(true){
var ret_value__24360__auto__ = (function (){try{while(true){
var result__24361__auto__ = switch__24358__auto__.call(null,state_43241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24361__auto__;
}
break;
}
}catch (e43255){if((e43255 instanceof Object)){
var ex__24362__auto__ = e43255;
var statearr_43256_43297 = state_43241;
(statearr_43256_43297[(5)] = ex__24362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43298 = state_43241;
state_43241 = G__43298;
continue;
} else {
return ret_value__24360__auto__;
}
break;
}
});
csasync$proc$state_machine__24359__auto__ = function(state_43241){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24359__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24359__auto____1.call(this,state_43241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24359__auto____0;
csasync$proc$state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24359__auto____1;
return csasync$proc$state_machine__24359__auto__;
})()
;})(switch__24358__auto__,c__24379__auto__))
})();
var state__24381__auto__ = (function (){var statearr_43257 = f__24380__auto__.call(null);
(statearr_43257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24379__auto__);

return statearr_43257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24381__auto__);
});})(c__24379__auto__))
);

return c__24379__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__24379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24379__auto__){
return (function (){
var f__24380__auto__ = (function (){var switch__24358__auto__ = ((function (c__24379__auto__){
return (function (state_43271){
var state_val_43272 = (state_43271[(1)]);
if((state_val_43272 === (1))){
var state_43271__$1 = state_43271;
var statearr_43273_43299 = state_43271__$1;
(statearr_43273_43299[(2)] = null);

(statearr_43273_43299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43272 === (2))){
var state_43271__$1 = state_43271;
var statearr_43274_43300 = state_43271__$1;
(statearr_43274_43300[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43272 === (3))){
var inst_43269 = (state_43271[(2)]);
var state_43271__$1 = state_43271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43271__$1,inst_43269);
} else {
if((state_val_43272 === (4))){
var inst_43260 = func.call(null,param);
var inst_43261 = cljs.core.async.timeout.call(null,time_out);
var state_43271__$1 = (function (){var statearr_43276 = state_43271;
(statearr_43276[(7)] = inst_43260);

return statearr_43276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43271__$1,(7),inst_43261);
} else {
if((state_val_43272 === (5))){
var state_43271__$1 = state_43271;
var statearr_43277_43301 = state_43271__$1;
(statearr_43277_43301[(2)] = null);

(statearr_43277_43301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43272 === (6))){
var inst_43267 = (state_43271[(2)]);
var state_43271__$1 = state_43271;
var statearr_43278_43302 = state_43271__$1;
(statearr_43278_43302[(2)] = inst_43267);

(statearr_43278_43302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43272 === (7))){
var inst_43263 = (state_43271[(2)]);
var state_43271__$1 = (function (){var statearr_43279 = state_43271;
(statearr_43279[(8)] = inst_43263);

return statearr_43279;
})();
var statearr_43280_43303 = state_43271__$1;
(statearr_43280_43303[(2)] = null);

(statearr_43280_43303[(1)] = (2));


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
});})(c__24379__auto__))
;
return ((function (switch__24358__auto__,c__24379__auto__){
return (function() {
var csasync$proc$state_machine__24359__auto__ = null;
var csasync$proc$state_machine__24359__auto____0 = (function (){
var statearr_43284 = [null,null,null,null,null,null,null,null,null];
(statearr_43284[(0)] = csasync$proc$state_machine__24359__auto__);

(statearr_43284[(1)] = (1));

return statearr_43284;
});
var csasync$proc$state_machine__24359__auto____1 = (function (state_43271){
while(true){
var ret_value__24360__auto__ = (function (){try{while(true){
var result__24361__auto__ = switch__24358__auto__.call(null,state_43271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24361__auto__;
}
break;
}
}catch (e43285){if((e43285 instanceof Object)){
var ex__24362__auto__ = e43285;
var statearr_43286_43304 = state_43271;
(statearr_43286_43304[(5)] = ex__24362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43305 = state_43271;
state_43271 = G__43305;
continue;
} else {
return ret_value__24360__auto__;
}
break;
}
});
csasync$proc$state_machine__24359__auto__ = function(state_43271){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__24359__auto____0.call(this);
case 1:
return csasync$proc$state_machine__24359__auto____1.call(this,state_43271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__24359__auto____0;
csasync$proc$state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__24359__auto____1;
return csasync$proc$state_machine__24359__auto__;
})()
;})(switch__24358__auto__,c__24379__auto__))
})();
var state__24381__auto__ = (function (){var statearr_43287 = f__24380__auto__.call(null);
(statearr_43287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24379__auto__);

return statearr_43287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24381__auto__);
});})(c__24379__auto__))
);

return c__24379__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__24379__auto___43414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24379__auto___43414){
return (function (){
var f__24380__auto__ = (function (){var switch__24358__auto__ = ((function (c__24379__auto___43414){
return (function (state_43387){
var state_val_43388 = (state_43387[(1)]);
if((state_val_43388 === (7))){
var inst_43369 = cljs.core.async.timeout.call(null,time_out);
var state_43387__$1 = state_43387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43387__$1,(10),inst_43369);
} else {
if((state_val_43388 === (1))){
var state_43387__$1 = state_43387;
var statearr_43389_43415 = state_43387__$1;
(statearr_43389_43415[(2)] = null);

(statearr_43389_43415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (4))){
var inst_43364 = proc_fn.call(null);
var state_43387__$1 = state_43387;
var statearr_43390_43416 = state_43387__$1;
(statearr_43390_43416[(2)] = inst_43364);

(statearr_43390_43416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (13))){
var inst_43384 = (state_43387[(2)]);
var inst_43385 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_43387__$1 = (function (){var statearr_43391 = state_43387;
(statearr_43391[(7)] = inst_43384);

return statearr_43391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43387__$1,inst_43385);
} else {
if((state_val_43388 === (6))){
var inst_43367 = (state_43387[(2)]);
var state_43387__$1 = state_43387;
if(cljs.core.truth_(inst_43367)){
var statearr_43392_43417 = state_43387__$1;
(statearr_43392_43417[(1)] = (7));

} else {
var statearr_43393_43418 = state_43387__$1;
(statearr_43393_43418[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (3))){
var inst_43377 = (state_43387[(2)]);
var inst_43378 = (final_fun == null);
var inst_43379 = cljs.core.not.call(null,inst_43378);
var state_43387__$1 = (function (){var statearr_43394 = state_43387;
(statearr_43394[(8)] = inst_43377);

return statearr_43394;
})();
if(inst_43379){
var statearr_43395_43419 = state_43387__$1;
(statearr_43395_43419[(1)] = (11));

} else {
var statearr_43396_43420 = state_43387__$1;
(statearr_43396_43420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (12))){
var state_43387__$1 = state_43387;
var statearr_43397_43421 = state_43387__$1;
(statearr_43397_43421[(2)] = null);

(statearr_43397_43421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (2))){
var inst_43362 = (state_43387[(9)]);
var inst_43361 = cljs.core.deref.call(null,status);
var inst_43362__$1 = cljs.core._EQ_.call(null,inst_43361,"RUN");
var state_43387__$1 = (function (){var statearr_43398 = state_43387;
(statearr_43398[(9)] = inst_43362__$1);

return statearr_43398;
})();
if(inst_43362__$1){
var statearr_43399_43422 = state_43387__$1;
(statearr_43399_43422[(1)] = (4));

} else {
var statearr_43400_43423 = state_43387__$1;
(statearr_43400_43423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (11))){
var inst_43381 = final_fun.call(null);
var state_43387__$1 = state_43387;
var statearr_43401_43424 = state_43387__$1;
(statearr_43401_43424[(2)] = inst_43381);

(statearr_43401_43424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (9))){
var inst_43375 = (state_43387[(2)]);
var state_43387__$1 = state_43387;
var statearr_43402_43425 = state_43387__$1;
(statearr_43402_43425[(2)] = inst_43375);

(statearr_43402_43425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (5))){
var inst_43362 = (state_43387[(9)]);
var state_43387__$1 = state_43387;
var statearr_43403_43426 = state_43387__$1;
(statearr_43403_43426[(2)] = inst_43362);

(statearr_43403_43426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (10))){
var inst_43371 = (state_43387[(2)]);
var state_43387__$1 = (function (){var statearr_43404 = state_43387;
(statearr_43404[(10)] = inst_43371);

return statearr_43404;
})();
var statearr_43405_43427 = state_43387__$1;
(statearr_43405_43427[(2)] = null);

(statearr_43405_43427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43388 === (8))){
var state_43387__$1 = state_43387;
var statearr_43406_43428 = state_43387__$1;
(statearr_43406_43428[(2)] = null);

(statearr_43406_43428[(1)] = (9));


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
});})(c__24379__auto___43414))
;
return ((function (switch__24358__auto__,c__24379__auto___43414){
return (function() {
var csasync$proc$start_process_$_state_machine__24359__auto__ = null;
var csasync$proc$start_process_$_state_machine__24359__auto____0 = (function (){
var statearr_43410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43410[(0)] = csasync$proc$start_process_$_state_machine__24359__auto__);

(statearr_43410[(1)] = (1));

return statearr_43410;
});
var csasync$proc$start_process_$_state_machine__24359__auto____1 = (function (state_43387){
while(true){
var ret_value__24360__auto__ = (function (){try{while(true){
var result__24361__auto__ = switch__24358__auto__.call(null,state_43387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24361__auto__;
}
break;
}
}catch (e43411){if((e43411 instanceof Object)){
var ex__24362__auto__ = e43411;
var statearr_43412_43429 = state_43387;
(statearr_43412_43429[(5)] = ex__24362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43430 = state_43387;
state_43387 = G__43430;
continue;
} else {
return ret_value__24360__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__24359__auto__ = function(state_43387){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__24359__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__24359__auto____1.call(this,state_43387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__24359__auto____0;
csasync$proc$start_process_$_state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__24359__auto____1;
return csasync$proc$start_process_$_state_machine__24359__auto__;
})()
;})(switch__24358__auto__,c__24379__auto___43414))
})();
var state__24381__auto__ = (function (){var statearr_43413 = f__24380__auto__.call(null);
(statearr_43413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24379__auto___43414);

return statearr_43413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24381__auto__);
});})(c__24379__auto___43414))
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
var c__24379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24379__auto__){
return (function (){
var f__24380__auto__ = (function (){var switch__24358__auto__ = ((function (c__24379__auto__){
return (function (state_43451){
var state_val_43452 = (state_43451[(1)]);
if((state_val_43452 === (1))){
var inst_43446 = cljs.core.async.timeout.call(null,time);
var state_43451__$1 = state_43451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43451__$1,(2),inst_43446);
} else {
if((state_val_43452 === (2))){
var inst_43448 = (state_43451[(2)]);
var inst_43449 = func.call(null);
var state_43451__$1 = (function (){var statearr_43453 = state_43451;
(statearr_43453[(7)] = inst_43448);

return statearr_43453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43451__$1,inst_43449);
} else {
return null;
}
}
});})(c__24379__auto__))
;
return ((function (switch__24358__auto__,c__24379__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__24359__auto__ = null;
var csasync$proc$delayer_$_state_machine__24359__auto____0 = (function (){
var statearr_43457 = [null,null,null,null,null,null,null,null];
(statearr_43457[(0)] = csasync$proc$delayer_$_state_machine__24359__auto__);

(statearr_43457[(1)] = (1));

return statearr_43457;
});
var csasync$proc$delayer_$_state_machine__24359__auto____1 = (function (state_43451){
while(true){
var ret_value__24360__auto__ = (function (){try{while(true){
var result__24361__auto__ = switch__24358__auto__.call(null,state_43451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24361__auto__;
}
break;
}
}catch (e43458){if((e43458 instanceof Object)){
var ex__24362__auto__ = e43458;
var statearr_43459_43461 = state_43451;
(statearr_43459_43461[(5)] = ex__24362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43462 = state_43451;
state_43451 = G__43462;
continue;
} else {
return ret_value__24360__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__24359__auto__ = function(state_43451){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__24359__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__24359__auto____1.call(this,state_43451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__24359__auto____0;
csasync$proc$delayer_$_state_machine__24359__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__24359__auto____1;
return csasync$proc$delayer_$_state_machine__24359__auto__;
})()
;})(switch__24358__auto__,c__24379__auto__))
})();
var state__24381__auto__ = (function (){var statearr_43460 = f__24380__auto__.call(null);
(statearr_43460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24379__auto__);

return statearr_43460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24381__auto__);
});})(c__24379__auto__))
);

return c__24379__auto__;
});

//# sourceMappingURL=proc.js.map