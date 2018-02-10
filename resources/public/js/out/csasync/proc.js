// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args13304 = [];
var len__10374__auto___13367 = arguments.length;
var i__10375__auto___13368 = (0);
while(true){
if((i__10375__auto___13368 < len__10374__auto___13367)){
args13304.push((arguments[i__10375__auto___13368]));

var G__13369 = (i__10375__auto___13368 + (1));
i__10375__auto___13368 = G__13369;
continue;
} else {
}
break;
}

var G__13306 = args13304.length;
switch (G__13306) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13304.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11673__auto__ = ((function (c__11694__auto__){
return (function (state_13320){
var state_val_13321 = (state_13320[(1)]);
if((state_val_13321 === (1))){
var state_13320__$1 = state_13320;
var statearr_13322_13371 = state_13320__$1;
(statearr_13322_13371[(2)] = null);

(statearr_13322_13371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (2))){
var state_13320__$1 = state_13320;
var statearr_13323_13372 = state_13320__$1;
(statearr_13323_13372[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (3))){
var inst_13318 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else {
if((state_val_13321 === (4))){
var inst_13309 = func.call(null);
var inst_13310 = cljs.core.async.timeout.call(null,time_out);
var state_13320__$1 = (function (){var statearr_13325 = state_13320;
(statearr_13325[(7)] = inst_13309);

return statearr_13325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(7),inst_13310);
} else {
if((state_val_13321 === (5))){
var state_13320__$1 = state_13320;
var statearr_13326_13373 = state_13320__$1;
(statearr_13326_13373[(2)] = null);

(statearr_13326_13373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (6))){
var inst_13316 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13327_13374 = state_13320__$1;
(statearr_13327_13374[(2)] = inst_13316);

(statearr_13327_13374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (7))){
var inst_13312 = (state_13320[(2)]);
var state_13320__$1 = (function (){var statearr_13328 = state_13320;
(statearr_13328[(8)] = inst_13312);

return statearr_13328;
})();
var statearr_13329_13375 = state_13320__$1;
(statearr_13329_13375[(2)] = null);

(statearr_13329_13375[(1)] = (2));


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
});})(c__11694__auto__))
;
return ((function (switch__11673__auto__,c__11694__auto__){
return (function() {
var csasync$proc$state_machine__11674__auto__ = null;
var csasync$proc$state_machine__11674__auto____0 = (function (){
var statearr_13333 = [null,null,null,null,null,null,null,null,null];
(statearr_13333[(0)] = csasync$proc$state_machine__11674__auto__);

(statearr_13333[(1)] = (1));

return statearr_13333;
});
var csasync$proc$state_machine__11674__auto____1 = (function (state_13320){
while(true){
var ret_value__11675__auto__ = (function (){try{while(true){
var result__11676__auto__ = switch__11673__auto__.call(null,state_13320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11676__auto__;
}
break;
}
}catch (e13334){if((e13334 instanceof Object)){
var ex__11677__auto__ = e13334;
var statearr_13335_13376 = state_13320;
(statearr_13335_13376[(5)] = ex__11677__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13377 = state_13320;
state_13320 = G__13377;
continue;
} else {
return ret_value__11675__auto__;
}
break;
}
});
csasync$proc$state_machine__11674__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11674__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11674__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11674__auto____0;
csasync$proc$state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11674__auto____1;
return csasync$proc$state_machine__11674__auto__;
})()
;})(switch__11673__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_13336 = f__11695__auto__.call(null);
(statearr_13336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_13336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11673__auto__ = ((function (c__11694__auto__){
return (function (state_13350){
var state_val_13351 = (state_13350[(1)]);
if((state_val_13351 === (1))){
var state_13350__$1 = state_13350;
var statearr_13352_13378 = state_13350__$1;
(statearr_13352_13378[(2)] = null);

(statearr_13352_13378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (2))){
var state_13350__$1 = state_13350;
var statearr_13353_13379 = state_13350__$1;
(statearr_13353_13379[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (3))){
var inst_13348 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13350__$1,inst_13348);
} else {
if((state_val_13351 === (4))){
var inst_13339 = func.call(null,param);
var inst_13340 = cljs.core.async.timeout.call(null,time_out);
var state_13350__$1 = (function (){var statearr_13355 = state_13350;
(statearr_13355[(7)] = inst_13339);

return statearr_13355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13350__$1,(7),inst_13340);
} else {
if((state_val_13351 === (5))){
var state_13350__$1 = state_13350;
var statearr_13356_13380 = state_13350__$1;
(statearr_13356_13380[(2)] = null);

(statearr_13356_13380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (6))){
var inst_13346 = (state_13350[(2)]);
var state_13350__$1 = state_13350;
var statearr_13357_13381 = state_13350__$1;
(statearr_13357_13381[(2)] = inst_13346);

(statearr_13357_13381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13351 === (7))){
var inst_13342 = (state_13350[(2)]);
var state_13350__$1 = (function (){var statearr_13358 = state_13350;
(statearr_13358[(8)] = inst_13342);

return statearr_13358;
})();
var statearr_13359_13382 = state_13350__$1;
(statearr_13359_13382[(2)] = null);

(statearr_13359_13382[(1)] = (2));


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
});})(c__11694__auto__))
;
return ((function (switch__11673__auto__,c__11694__auto__){
return (function() {
var csasync$proc$state_machine__11674__auto__ = null;
var csasync$proc$state_machine__11674__auto____0 = (function (){
var statearr_13363 = [null,null,null,null,null,null,null,null,null];
(statearr_13363[(0)] = csasync$proc$state_machine__11674__auto__);

(statearr_13363[(1)] = (1));

return statearr_13363;
});
var csasync$proc$state_machine__11674__auto____1 = (function (state_13350){
while(true){
var ret_value__11675__auto__ = (function (){try{while(true){
var result__11676__auto__ = switch__11673__auto__.call(null,state_13350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11676__auto__;
}
break;
}
}catch (e13364){if((e13364 instanceof Object)){
var ex__11677__auto__ = e13364;
var statearr_13365_13383 = state_13350;
(statearr_13365_13383[(5)] = ex__11677__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13384 = state_13350;
state_13350 = G__13384;
continue;
} else {
return ret_value__11675__auto__;
}
break;
}
});
csasync$proc$state_machine__11674__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11674__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11674__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11674__auto____0;
csasync$proc$state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11674__auto____1;
return csasync$proc$state_machine__11674__auto__;
})()
;})(switch__11673__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_13366 = f__11695__auto__.call(null);
(statearr_13366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_13366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11694__auto___13493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13493){
return (function (){
var f__11695__auto__ = (function (){var switch__11673__auto__ = ((function (c__11694__auto___13493){
return (function (state_13466){
var state_val_13467 = (state_13466[(1)]);
if((state_val_13467 === (7))){
var inst_13448 = cljs.core.async.timeout.call(null,time_out);
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13466__$1,(10),inst_13448);
} else {
if((state_val_13467 === (1))){
var state_13466__$1 = state_13466;
var statearr_13468_13494 = state_13466__$1;
(statearr_13468_13494[(2)] = null);

(statearr_13468_13494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (4))){
var inst_13443 = proc_fn.call(null);
var state_13466__$1 = state_13466;
var statearr_13469_13495 = state_13466__$1;
(statearr_13469_13495[(2)] = inst_13443);

(statearr_13469_13495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (13))){
var inst_13463 = (state_13466[(2)]);
var inst_13464 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_13466__$1 = (function (){var statearr_13470 = state_13466;
(statearr_13470[(7)] = inst_13463);

return statearr_13470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13466__$1,inst_13464);
} else {
if((state_val_13467 === (6))){
var inst_13446 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
if(cljs.core.truth_(inst_13446)){
var statearr_13471_13496 = state_13466__$1;
(statearr_13471_13496[(1)] = (7));

} else {
var statearr_13472_13497 = state_13466__$1;
(statearr_13472_13497[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (3))){
var inst_13456 = (state_13466[(2)]);
var inst_13457 = (final_fun == null);
var inst_13458 = cljs.core.not.call(null,inst_13457);
var state_13466__$1 = (function (){var statearr_13473 = state_13466;
(statearr_13473[(8)] = inst_13456);

return statearr_13473;
})();
if(inst_13458){
var statearr_13474_13498 = state_13466__$1;
(statearr_13474_13498[(1)] = (11));

} else {
var statearr_13475_13499 = state_13466__$1;
(statearr_13475_13499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (12))){
var state_13466__$1 = state_13466;
var statearr_13476_13500 = state_13466__$1;
(statearr_13476_13500[(2)] = null);

(statearr_13476_13500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (2))){
var inst_13441 = (state_13466[(9)]);
var inst_13440 = cljs.core.deref.call(null,status);
var inst_13441__$1 = cljs.core._EQ_.call(null,inst_13440,"RUN");
var state_13466__$1 = (function (){var statearr_13477 = state_13466;
(statearr_13477[(9)] = inst_13441__$1);

return statearr_13477;
})();
if(inst_13441__$1){
var statearr_13478_13501 = state_13466__$1;
(statearr_13478_13501[(1)] = (4));

} else {
var statearr_13479_13502 = state_13466__$1;
(statearr_13479_13502[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (11))){
var inst_13460 = final_fun.call(null);
var state_13466__$1 = state_13466;
var statearr_13480_13503 = state_13466__$1;
(statearr_13480_13503[(2)] = inst_13460);

(statearr_13480_13503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (9))){
var inst_13454 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13481_13504 = state_13466__$1;
(statearr_13481_13504[(2)] = inst_13454);

(statearr_13481_13504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (5))){
var inst_13441 = (state_13466[(9)]);
var state_13466__$1 = state_13466;
var statearr_13482_13505 = state_13466__$1;
(statearr_13482_13505[(2)] = inst_13441);

(statearr_13482_13505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (10))){
var inst_13450 = (state_13466[(2)]);
var state_13466__$1 = (function (){var statearr_13483 = state_13466;
(statearr_13483[(10)] = inst_13450);

return statearr_13483;
})();
var statearr_13484_13506 = state_13466__$1;
(statearr_13484_13506[(2)] = null);

(statearr_13484_13506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (8))){
var state_13466__$1 = state_13466;
var statearr_13485_13507 = state_13466__$1;
(statearr_13485_13507[(2)] = null);

(statearr_13485_13507[(1)] = (9));


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
});})(c__11694__auto___13493))
;
return ((function (switch__11673__auto__,c__11694__auto___13493){
return (function() {
var csasync$proc$start_process_$_state_machine__11674__auto__ = null;
var csasync$proc$start_process_$_state_machine__11674__auto____0 = (function (){
var statearr_13489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13489[(0)] = csasync$proc$start_process_$_state_machine__11674__auto__);

(statearr_13489[(1)] = (1));

return statearr_13489;
});
var csasync$proc$start_process_$_state_machine__11674__auto____1 = (function (state_13466){
while(true){
var ret_value__11675__auto__ = (function (){try{while(true){
var result__11676__auto__ = switch__11673__auto__.call(null,state_13466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11676__auto__;
}
break;
}
}catch (e13490){if((e13490 instanceof Object)){
var ex__11677__auto__ = e13490;
var statearr_13491_13508 = state_13466;
(statearr_13491_13508[(5)] = ex__11677__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13509 = state_13466;
state_13466 = G__13509;
continue;
} else {
return ret_value__11675__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11674__auto__ = function(state_13466){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11674__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11674__auto____1.call(this,state_13466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11674__auto____0;
csasync$proc$start_process_$_state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11674__auto____1;
return csasync$proc$start_process_$_state_machine__11674__auto__;
})()
;})(switch__11673__auto__,c__11694__auto___13493))
})();
var state__11696__auto__ = (function (){var statearr_13492 = f__11695__auto__.call(null);
(statearr_13492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13493);

return statearr_13492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13493))
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
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11673__auto__ = ((function (c__11694__auto__){
return (function (state_13530){
var state_val_13531 = (state_13530[(1)]);
if((state_val_13531 === (1))){
var inst_13525 = cljs.core.async.timeout.call(null,time);
var state_13530__$1 = state_13530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13530__$1,(2),inst_13525);
} else {
if((state_val_13531 === (2))){
var inst_13527 = (state_13530[(2)]);
var inst_13528 = func.call(null);
var state_13530__$1 = (function (){var statearr_13532 = state_13530;
(statearr_13532[(7)] = inst_13527);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13530__$1,inst_13528);
} else {
return null;
}
}
});})(c__11694__auto__))
;
return ((function (switch__11673__auto__,c__11694__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11674__auto__ = null;
var csasync$proc$delayer_$_state_machine__11674__auto____0 = (function (){
var statearr_13536 = [null,null,null,null,null,null,null,null];
(statearr_13536[(0)] = csasync$proc$delayer_$_state_machine__11674__auto__);

(statearr_13536[(1)] = (1));

return statearr_13536;
});
var csasync$proc$delayer_$_state_machine__11674__auto____1 = (function (state_13530){
while(true){
var ret_value__11675__auto__ = (function (){try{while(true){
var result__11676__auto__ = switch__11673__auto__.call(null,state_13530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11676__auto__;
}
break;
}
}catch (e13537){if((e13537 instanceof Object)){
var ex__11677__auto__ = e13537;
var statearr_13538_13540 = state_13530;
(statearr_13538_13540[(5)] = ex__11677__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13541 = state_13530;
state_13530 = G__13541;
continue;
} else {
return ret_value__11675__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11674__auto__ = function(state_13530){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11674__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11674__auto____1.call(this,state_13530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11674__auto____0;
csasync$proc$delayer_$_state_machine__11674__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11674__auto____1;
return csasync$proc$delayer_$_state_machine__11674__auto__;
})()
;})(switch__11673__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_13539 = f__11695__auto__.call(null);
(statearr_13539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_13539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
});

//# sourceMappingURL=proc.js.map