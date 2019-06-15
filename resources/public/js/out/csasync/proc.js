// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args16225 = [];
var len__11105__auto___16288 = arguments.length;
var i__11106__auto___16289 = (0);
while(true){
if((i__11106__auto___16289 < len__11105__auto___16288)){
args16225.push((arguments[i__11106__auto___16289]));

var G__16290 = (i__11106__auto___16289 + (1));
i__11106__auto___16289 = G__16290;
continue;
} else {
}
break;
}

var G__16227 = args16225.length;
switch (G__16227) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16225.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_16241){
var state_val_16242 = (state_16241[(1)]);
if((state_val_16242 === (1))){
var state_16241__$1 = state_16241;
var statearr_16243_16292 = state_16241__$1;
(statearr_16243_16292[(2)] = null);

(statearr_16243_16292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16242 === (2))){
var state_16241__$1 = state_16241;
var statearr_16244_16293 = state_16241__$1;
(statearr_16244_16293[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16242 === (3))){
var inst_16239 = (state_16241[(2)]);
var state_16241__$1 = state_16241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16241__$1,inst_16239);
} else {
if((state_val_16242 === (4))){
var inst_16230 = func.call(null);
var inst_16231 = cljs.core.async.timeout.call(null,time_out);
var state_16241__$1 = (function (){var statearr_16246 = state_16241;
(statearr_16246[(7)] = inst_16230);

return statearr_16246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16241__$1,(7),inst_16231);
} else {
if((state_val_16242 === (5))){
var state_16241__$1 = state_16241;
var statearr_16247_16294 = state_16241__$1;
(statearr_16247_16294[(2)] = null);

(statearr_16247_16294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16242 === (6))){
var inst_16237 = (state_16241[(2)]);
var state_16241__$1 = state_16241;
var statearr_16248_16295 = state_16241__$1;
(statearr_16248_16295[(2)] = inst_16237);

(statearr_16248_16295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16242 === (7))){
var inst_16233 = (state_16241[(2)]);
var state_16241__$1 = (function (){var statearr_16249 = state_16241;
(statearr_16249[(8)] = inst_16233);

return statearr_16249;
})();
var statearr_16250_16296 = state_16241__$1;
(statearr_16250_16296[(2)] = null);

(statearr_16250_16296[(1)] = (2));


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
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var csasync$proc$state_machine__12432__auto__ = null;
var csasync$proc$state_machine__12432__auto____0 = (function (){
var statearr_16254 = [null,null,null,null,null,null,null,null,null];
(statearr_16254[(0)] = csasync$proc$state_machine__12432__auto__);

(statearr_16254[(1)] = (1));

return statearr_16254;
});
var csasync$proc$state_machine__12432__auto____1 = (function (state_16241){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_16241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e16255){if((e16255 instanceof Object)){
var ex__12435__auto__ = e16255;
var statearr_16256_16297 = state_16241;
(statearr_16256_16297[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16298 = state_16241;
state_16241 = G__16298;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
csasync$proc$state_machine__12432__auto__ = function(state_16241){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12432__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12432__auto____1.call(this,state_16241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12432__auto____0;
csasync$proc$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12432__auto____1;
return csasync$proc$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_16257 = f__12544__auto__.call(null);
(statearr_16257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_16257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_16271){
var state_val_16272 = (state_16271[(1)]);
if((state_val_16272 === (1))){
var state_16271__$1 = state_16271;
var statearr_16273_16299 = state_16271__$1;
(statearr_16273_16299[(2)] = null);

(statearr_16273_16299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16272 === (2))){
var state_16271__$1 = state_16271;
var statearr_16274_16300 = state_16271__$1;
(statearr_16274_16300[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16272 === (3))){
var inst_16269 = (state_16271[(2)]);
var state_16271__$1 = state_16271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16271__$1,inst_16269);
} else {
if((state_val_16272 === (4))){
var inst_16260 = func.call(null,param);
var inst_16261 = cljs.core.async.timeout.call(null,time_out);
var state_16271__$1 = (function (){var statearr_16276 = state_16271;
(statearr_16276[(7)] = inst_16260);

return statearr_16276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16271__$1,(7),inst_16261);
} else {
if((state_val_16272 === (5))){
var state_16271__$1 = state_16271;
var statearr_16277_16301 = state_16271__$1;
(statearr_16277_16301[(2)] = null);

(statearr_16277_16301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16272 === (6))){
var inst_16267 = (state_16271[(2)]);
var state_16271__$1 = state_16271;
var statearr_16278_16302 = state_16271__$1;
(statearr_16278_16302[(2)] = inst_16267);

(statearr_16278_16302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16272 === (7))){
var inst_16263 = (state_16271[(2)]);
var state_16271__$1 = (function (){var statearr_16279 = state_16271;
(statearr_16279[(8)] = inst_16263);

return statearr_16279;
})();
var statearr_16280_16303 = state_16271__$1;
(statearr_16280_16303[(2)] = null);

(statearr_16280_16303[(1)] = (2));


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
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var csasync$proc$state_machine__12432__auto__ = null;
var csasync$proc$state_machine__12432__auto____0 = (function (){
var statearr_16284 = [null,null,null,null,null,null,null,null,null];
(statearr_16284[(0)] = csasync$proc$state_machine__12432__auto__);

(statearr_16284[(1)] = (1));

return statearr_16284;
});
var csasync$proc$state_machine__12432__auto____1 = (function (state_16271){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_16271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e16285){if((e16285 instanceof Object)){
var ex__12435__auto__ = e16285;
var statearr_16286_16304 = state_16271;
(statearr_16286_16304[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16305 = state_16271;
state_16271 = G__16305;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
csasync$proc$state_machine__12432__auto__ = function(state_16271){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__12432__auto____0.call(this);
case 1:
return csasync$proc$state_machine__12432__auto____1.call(this,state_16271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__12432__auto____0;
csasync$proc$state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__12432__auto____1;
return csasync$proc$state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_16287 = f__12544__auto__.call(null);
(statearr_16287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_16287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__12543__auto___16414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto___16414){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto___16414){
return (function (state_16387){
var state_val_16388 = (state_16387[(1)]);
if((state_val_16388 === (7))){
var inst_16369 = cljs.core.async.timeout.call(null,time_out);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16387__$1,(10),inst_16369);
} else {
if((state_val_16388 === (1))){
var state_16387__$1 = state_16387;
var statearr_16389_16415 = state_16387__$1;
(statearr_16389_16415[(2)] = null);

(statearr_16389_16415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (4))){
var inst_16364 = proc_fn.call(null);
var state_16387__$1 = state_16387;
var statearr_16390_16416 = state_16387__$1;
(statearr_16390_16416[(2)] = inst_16364);

(statearr_16390_16416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (13))){
var inst_16384 = (state_16387[(2)]);
var inst_16385 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_16387__$1 = (function (){var statearr_16391 = state_16387;
(statearr_16391[(7)] = inst_16384);

return statearr_16391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16387__$1,inst_16385);
} else {
if((state_val_16388 === (6))){
var inst_16367 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
if(cljs.core.truth_(inst_16367)){
var statearr_16392_16417 = state_16387__$1;
(statearr_16392_16417[(1)] = (7));

} else {
var statearr_16393_16418 = state_16387__$1;
(statearr_16393_16418[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (3))){
var inst_16377 = (state_16387[(2)]);
var inst_16378 = (final_fun == null);
var inst_16379 = cljs.core.not.call(null,inst_16378);
var state_16387__$1 = (function (){var statearr_16394 = state_16387;
(statearr_16394[(8)] = inst_16377);

return statearr_16394;
})();
if(inst_16379){
var statearr_16395_16419 = state_16387__$1;
(statearr_16395_16419[(1)] = (11));

} else {
var statearr_16396_16420 = state_16387__$1;
(statearr_16396_16420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (12))){
var state_16387__$1 = state_16387;
var statearr_16397_16421 = state_16387__$1;
(statearr_16397_16421[(2)] = null);

(statearr_16397_16421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (2))){
var inst_16362 = (state_16387[(9)]);
var inst_16361 = cljs.core.deref.call(null,status);
var inst_16362__$1 = cljs.core._EQ_.call(null,inst_16361,"RUN");
var state_16387__$1 = (function (){var statearr_16398 = state_16387;
(statearr_16398[(9)] = inst_16362__$1);

return statearr_16398;
})();
if(inst_16362__$1){
var statearr_16399_16422 = state_16387__$1;
(statearr_16399_16422[(1)] = (4));

} else {
var statearr_16400_16423 = state_16387__$1;
(statearr_16400_16423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (11))){
var inst_16381 = final_fun.call(null);
var state_16387__$1 = state_16387;
var statearr_16401_16424 = state_16387__$1;
(statearr_16401_16424[(2)] = inst_16381);

(statearr_16401_16424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (9))){
var inst_16375 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16402_16425 = state_16387__$1;
(statearr_16402_16425[(2)] = inst_16375);

(statearr_16402_16425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (5))){
var inst_16362 = (state_16387[(9)]);
var state_16387__$1 = state_16387;
var statearr_16403_16426 = state_16387__$1;
(statearr_16403_16426[(2)] = inst_16362);

(statearr_16403_16426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (10))){
var inst_16371 = (state_16387[(2)]);
var state_16387__$1 = (function (){var statearr_16404 = state_16387;
(statearr_16404[(10)] = inst_16371);

return statearr_16404;
})();
var statearr_16405_16427 = state_16387__$1;
(statearr_16405_16427[(2)] = null);

(statearr_16405_16427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (8))){
var state_16387__$1 = state_16387;
var statearr_16406_16428 = state_16387__$1;
(statearr_16406_16428[(2)] = null);

(statearr_16406_16428[(1)] = (9));


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
});})(c__12543__auto___16414))
;
return ((function (switch__12431__auto__,c__12543__auto___16414){
return (function() {
var csasync$proc$start_process_$_state_machine__12432__auto__ = null;
var csasync$proc$start_process_$_state_machine__12432__auto____0 = (function (){
var statearr_16410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16410[(0)] = csasync$proc$start_process_$_state_machine__12432__auto__);

(statearr_16410[(1)] = (1));

return statearr_16410;
});
var csasync$proc$start_process_$_state_machine__12432__auto____1 = (function (state_16387){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_16387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e16411){if((e16411 instanceof Object)){
var ex__12435__auto__ = e16411;
var statearr_16412_16429 = state_16387;
(statearr_16412_16429[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16430 = state_16387;
state_16387 = G__16430;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__12432__auto__ = function(state_16387){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__12432__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__12432__auto____1.call(this,state_16387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__12432__auto____0;
csasync$proc$start_process_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__12432__auto____1;
return csasync$proc$start_process_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto___16414))
})();
var state__12545__auto__ = (function (){var statearr_16413 = f__12544__auto__.call(null);
(statearr_16413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto___16414);

return statearr_16413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto___16414))
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
var c__12543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12543__auto__){
return (function (){
var f__12544__auto__ = (function (){var switch__12431__auto__ = ((function (c__12543__auto__){
return (function (state_16451){
var state_val_16452 = (state_16451[(1)]);
if((state_val_16452 === (1))){
var inst_16446 = cljs.core.async.timeout.call(null,time);
var state_16451__$1 = state_16451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16451__$1,(2),inst_16446);
} else {
if((state_val_16452 === (2))){
var inst_16448 = (state_16451[(2)]);
var inst_16449 = func.call(null);
var state_16451__$1 = (function (){var statearr_16453 = state_16451;
(statearr_16453[(7)] = inst_16448);

return statearr_16453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16451__$1,inst_16449);
} else {
return null;
}
}
});})(c__12543__auto__))
;
return ((function (switch__12431__auto__,c__12543__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__12432__auto__ = null;
var csasync$proc$delayer_$_state_machine__12432__auto____0 = (function (){
var statearr_16457 = [null,null,null,null,null,null,null,null];
(statearr_16457[(0)] = csasync$proc$delayer_$_state_machine__12432__auto__);

(statearr_16457[(1)] = (1));

return statearr_16457;
});
var csasync$proc$delayer_$_state_machine__12432__auto____1 = (function (state_16451){
while(true){
var ret_value__12433__auto__ = (function (){try{while(true){
var result__12434__auto__ = switch__12431__auto__.call(null,state_16451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12434__auto__;
}
break;
}
}catch (e16458){if((e16458 instanceof Object)){
var ex__12435__auto__ = e16458;
var statearr_16459_16461 = state_16451;
(statearr_16459_16461[(5)] = ex__12435__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16462 = state_16451;
state_16451 = G__16462;
continue;
} else {
return ret_value__12433__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__12432__auto__ = function(state_16451){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__12432__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__12432__auto____1.call(this,state_16451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__12432__auto____0;
csasync$proc$delayer_$_state_machine__12432__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__12432__auto____1;
return csasync$proc$delayer_$_state_machine__12432__auto__;
})()
;})(switch__12431__auto__,c__12543__auto__))
})();
var state__12545__auto__ = (function (){var statearr_16460 = f__12544__auto__.call(null);
(statearr_16460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12543__auto__);

return statearr_16460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12545__auto__);
});})(c__12543__auto__))
);

return c__12543__auto__;
});

//# sourceMappingURL=proc.js.map