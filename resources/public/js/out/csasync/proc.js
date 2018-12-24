// Compiled by ClojureScript 1.9.521 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args11395 = [];
var len__10030__auto___11458 = arguments.length;
var i__10031__auto___11459 = (0);
while(true){
if((i__10031__auto___11459 < len__10030__auto___11458)){
args11395.push((arguments[i__10031__auto___11459]));

var G__11460 = (i__10031__auto___11459 + (1));
i__10031__auto___11459 = G__11460;
continue;
} else {
}
break;
}

var G__11397 = args11395.length;
switch (G__11397) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11395.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11329__auto__ = ((function (c__11350__auto__){
return (function (state_11411){
var state_val_11412 = (state_11411[(1)]);
if((state_val_11412 === (1))){
var state_11411__$1 = state_11411;
var statearr_11413_11462 = state_11411__$1;
(statearr_11413_11462[(2)] = null);

(statearr_11413_11462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (2))){
var state_11411__$1 = state_11411;
var statearr_11414_11463 = state_11411__$1;
(statearr_11414_11463[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (3))){
var inst_11409 = (state_11411[(2)]);
var state_11411__$1 = state_11411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11411__$1,inst_11409);
} else {
if((state_val_11412 === (4))){
var inst_11400 = func.call(null);
var inst_11401 = cljs.core.async.timeout.call(null,time_out);
var state_11411__$1 = (function (){var statearr_11416 = state_11411;
(statearr_11416[(7)] = inst_11400);

return statearr_11416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11411__$1,(7),inst_11401);
} else {
if((state_val_11412 === (5))){
var state_11411__$1 = state_11411;
var statearr_11417_11464 = state_11411__$1;
(statearr_11417_11464[(2)] = null);

(statearr_11417_11464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (6))){
var inst_11407 = (state_11411[(2)]);
var state_11411__$1 = state_11411;
var statearr_11418_11465 = state_11411__$1;
(statearr_11418_11465[(2)] = inst_11407);

(statearr_11418_11465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11412 === (7))){
var inst_11403 = (state_11411[(2)]);
var state_11411__$1 = (function (){var statearr_11419 = state_11411;
(statearr_11419[(8)] = inst_11403);

return statearr_11419;
})();
var statearr_11420_11466 = state_11411__$1;
(statearr_11420_11466[(2)] = null);

(statearr_11420_11466[(1)] = (2));


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
});})(c__11350__auto__))
;
return ((function (switch__11329__auto__,c__11350__auto__){
return (function() {
var csasync$proc$state_machine__11330__auto__ = null;
var csasync$proc$state_machine__11330__auto____0 = (function (){
var statearr_11424 = [null,null,null,null,null,null,null,null,null];
(statearr_11424[(0)] = csasync$proc$state_machine__11330__auto__);

(statearr_11424[(1)] = (1));

return statearr_11424;
});
var csasync$proc$state_machine__11330__auto____1 = (function (state_11411){
while(true){
var ret_value__11331__auto__ = (function (){try{while(true){
var result__11332__auto__ = switch__11329__auto__.call(null,state_11411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11332__auto__;
}
break;
}
}catch (e11425){if((e11425 instanceof Object)){
var ex__11333__auto__ = e11425;
var statearr_11426_11467 = state_11411;
(statearr_11426_11467[(5)] = ex__11333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11468 = state_11411;
state_11411 = G__11468;
continue;
} else {
return ret_value__11331__auto__;
}
break;
}
});
csasync$proc$state_machine__11330__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11330__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11330__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11330__auto____0;
csasync$proc$state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11330__auto____1;
return csasync$proc$state_machine__11330__auto__;
})()
;})(switch__11329__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_11427 = f__11351__auto__.call(null);
(statearr_11427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_11427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11329__auto__ = ((function (c__11350__auto__){
return (function (state_11441){
var state_val_11442 = (state_11441[(1)]);
if((state_val_11442 === (1))){
var state_11441__$1 = state_11441;
var statearr_11443_11469 = state_11441__$1;
(statearr_11443_11469[(2)] = null);

(statearr_11443_11469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (2))){
var state_11441__$1 = state_11441;
var statearr_11444_11470 = state_11441__$1;
(statearr_11444_11470[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (3))){
var inst_11439 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11441__$1,inst_11439);
} else {
if((state_val_11442 === (4))){
var inst_11430 = func.call(null,param);
var inst_11431 = cljs.core.async.timeout.call(null,time_out);
var state_11441__$1 = (function (){var statearr_11446 = state_11441;
(statearr_11446[(7)] = inst_11430);

return statearr_11446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11441__$1,(7),inst_11431);
} else {
if((state_val_11442 === (5))){
var state_11441__$1 = state_11441;
var statearr_11447_11471 = state_11441__$1;
(statearr_11447_11471[(2)] = null);

(statearr_11447_11471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (6))){
var inst_11437 = (state_11441[(2)]);
var state_11441__$1 = state_11441;
var statearr_11448_11472 = state_11441__$1;
(statearr_11448_11472[(2)] = inst_11437);

(statearr_11448_11472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11442 === (7))){
var inst_11433 = (state_11441[(2)]);
var state_11441__$1 = (function (){var statearr_11449 = state_11441;
(statearr_11449[(8)] = inst_11433);

return statearr_11449;
})();
var statearr_11450_11473 = state_11441__$1;
(statearr_11450_11473[(2)] = null);

(statearr_11450_11473[(1)] = (2));


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
});})(c__11350__auto__))
;
return ((function (switch__11329__auto__,c__11350__auto__){
return (function() {
var csasync$proc$state_machine__11330__auto__ = null;
var csasync$proc$state_machine__11330__auto____0 = (function (){
var statearr_11454 = [null,null,null,null,null,null,null,null,null];
(statearr_11454[(0)] = csasync$proc$state_machine__11330__auto__);

(statearr_11454[(1)] = (1));

return statearr_11454;
});
var csasync$proc$state_machine__11330__auto____1 = (function (state_11441){
while(true){
var ret_value__11331__auto__ = (function (){try{while(true){
var result__11332__auto__ = switch__11329__auto__.call(null,state_11441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11332__auto__;
}
break;
}
}catch (e11455){if((e11455 instanceof Object)){
var ex__11333__auto__ = e11455;
var statearr_11456_11474 = state_11441;
(statearr_11456_11474[(5)] = ex__11333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11475 = state_11441;
state_11441 = G__11475;
continue;
} else {
return ret_value__11331__auto__;
}
break;
}
});
csasync$proc$state_machine__11330__auto__ = function(state_11441){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11330__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11330__auto____1.call(this,state_11441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11330__auto____0;
csasync$proc$state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11330__auto____1;
return csasync$proc$state_machine__11330__auto__;
})()
;})(switch__11329__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_11457 = f__11351__auto__.call(null);
(statearr_11457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_11457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out,final_fun){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11350__auto___11584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto___11584){
return (function (){
var f__11351__auto__ = (function (){var switch__11329__auto__ = ((function (c__11350__auto___11584){
return (function (state_11557){
var state_val_11558 = (state_11557[(1)]);
if((state_val_11558 === (7))){
var inst_11539 = cljs.core.async.timeout.call(null,time_out);
var state_11557__$1 = state_11557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11557__$1,(10),inst_11539);
} else {
if((state_val_11558 === (1))){
var state_11557__$1 = state_11557;
var statearr_11559_11585 = state_11557__$1;
(statearr_11559_11585[(2)] = null);

(statearr_11559_11585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (4))){
var inst_11534 = proc_fn.call(null);
var state_11557__$1 = state_11557;
var statearr_11560_11586 = state_11557__$1;
(statearr_11560_11586[(2)] = inst_11534);

(statearr_11560_11586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (13))){
var inst_11554 = (state_11557[(2)]);
var inst_11555 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_11557__$1 = (function (){var statearr_11561 = state_11557;
(statearr_11561[(7)] = inst_11554);

return statearr_11561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11557__$1,inst_11555);
} else {
if((state_val_11558 === (6))){
var inst_11537 = (state_11557[(2)]);
var state_11557__$1 = state_11557;
if(cljs.core.truth_(inst_11537)){
var statearr_11562_11587 = state_11557__$1;
(statearr_11562_11587[(1)] = (7));

} else {
var statearr_11563_11588 = state_11557__$1;
(statearr_11563_11588[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (3))){
var inst_11547 = (state_11557[(2)]);
var inst_11548 = (final_fun == null);
var inst_11549 = cljs.core.not.call(null,inst_11548);
var state_11557__$1 = (function (){var statearr_11564 = state_11557;
(statearr_11564[(8)] = inst_11547);

return statearr_11564;
})();
if(inst_11549){
var statearr_11565_11589 = state_11557__$1;
(statearr_11565_11589[(1)] = (11));

} else {
var statearr_11566_11590 = state_11557__$1;
(statearr_11566_11590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (12))){
var state_11557__$1 = state_11557;
var statearr_11567_11591 = state_11557__$1;
(statearr_11567_11591[(2)] = null);

(statearr_11567_11591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (2))){
var inst_11532 = (state_11557[(9)]);
var inst_11531 = cljs.core.deref.call(null,status);
var inst_11532__$1 = cljs.core._EQ_.call(null,inst_11531,"RUN");
var state_11557__$1 = (function (){var statearr_11568 = state_11557;
(statearr_11568[(9)] = inst_11532__$1);

return statearr_11568;
})();
if(inst_11532__$1){
var statearr_11569_11592 = state_11557__$1;
(statearr_11569_11592[(1)] = (4));

} else {
var statearr_11570_11593 = state_11557__$1;
(statearr_11570_11593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (11))){
var inst_11551 = final_fun.call(null);
var state_11557__$1 = state_11557;
var statearr_11571_11594 = state_11557__$1;
(statearr_11571_11594[(2)] = inst_11551);

(statearr_11571_11594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (9))){
var inst_11545 = (state_11557[(2)]);
var state_11557__$1 = state_11557;
var statearr_11572_11595 = state_11557__$1;
(statearr_11572_11595[(2)] = inst_11545);

(statearr_11572_11595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (5))){
var inst_11532 = (state_11557[(9)]);
var state_11557__$1 = state_11557;
var statearr_11573_11596 = state_11557__$1;
(statearr_11573_11596[(2)] = inst_11532);

(statearr_11573_11596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (10))){
var inst_11541 = (state_11557[(2)]);
var state_11557__$1 = (function (){var statearr_11574 = state_11557;
(statearr_11574[(10)] = inst_11541);

return statearr_11574;
})();
var statearr_11575_11597 = state_11557__$1;
(statearr_11575_11597[(2)] = null);

(statearr_11575_11597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11558 === (8))){
var state_11557__$1 = state_11557;
var statearr_11576_11598 = state_11557__$1;
(statearr_11576_11598[(2)] = null);

(statearr_11576_11598[(1)] = (9));


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
});})(c__11350__auto___11584))
;
return ((function (switch__11329__auto__,c__11350__auto___11584){
return (function() {
var csasync$proc$start_process_$_state_machine__11330__auto__ = null;
var csasync$proc$start_process_$_state_machine__11330__auto____0 = (function (){
var statearr_11580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11580[(0)] = csasync$proc$start_process_$_state_machine__11330__auto__);

(statearr_11580[(1)] = (1));

return statearr_11580;
});
var csasync$proc$start_process_$_state_machine__11330__auto____1 = (function (state_11557){
while(true){
var ret_value__11331__auto__ = (function (){try{while(true){
var result__11332__auto__ = switch__11329__auto__.call(null,state_11557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11332__auto__;
}
break;
}
}catch (e11581){if((e11581 instanceof Object)){
var ex__11333__auto__ = e11581;
var statearr_11582_11599 = state_11557;
(statearr_11582_11599[(5)] = ex__11333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11600 = state_11557;
state_11557 = G__11600;
continue;
} else {
return ret_value__11331__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11330__auto__ = function(state_11557){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11330__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11330__auto____1.call(this,state_11557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$start_process_$_state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11330__auto____0;
csasync$proc$start_process_$_state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11330__auto____1;
return csasync$proc$start_process_$_state_machine__11330__auto__;
})()
;})(switch__11329__auto__,c__11350__auto___11584))
})();
var state__11352__auto__ = (function (){var statearr_11583 = f__11351__auto__.call(null);
(statearr_11583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto___11584);

return statearr_11583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto___11584))
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
var c__11350__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11350__auto__){
return (function (){
var f__11351__auto__ = (function (){var switch__11329__auto__ = ((function (c__11350__auto__){
return (function (state_11621){
var state_val_11622 = (state_11621[(1)]);
if((state_val_11622 === (1))){
var inst_11616 = cljs.core.async.timeout.call(null,time);
var state_11621__$1 = state_11621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,(2),inst_11616);
} else {
if((state_val_11622 === (2))){
var inst_11618 = (state_11621[(2)]);
var inst_11619 = func.call(null);
var state_11621__$1 = (function (){var statearr_11623 = state_11621;
(statearr_11623[(7)] = inst_11618);

return statearr_11623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11621__$1,inst_11619);
} else {
return null;
}
}
});})(c__11350__auto__))
;
return ((function (switch__11329__auto__,c__11350__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11330__auto__ = null;
var csasync$proc$delayer_$_state_machine__11330__auto____0 = (function (){
var statearr_11627 = [null,null,null,null,null,null,null,null];
(statearr_11627[(0)] = csasync$proc$delayer_$_state_machine__11330__auto__);

(statearr_11627[(1)] = (1));

return statearr_11627;
});
var csasync$proc$delayer_$_state_machine__11330__auto____1 = (function (state_11621){
while(true){
var ret_value__11331__auto__ = (function (){try{while(true){
var result__11332__auto__ = switch__11329__auto__.call(null,state_11621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11332__auto__;
}
break;
}
}catch (e11628){if((e11628 instanceof Object)){
var ex__11333__auto__ = e11628;
var statearr_11629_11631 = state_11621;
(statearr_11629_11631[(5)] = ex__11333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11632 = state_11621;
state_11621 = G__11632;
continue;
} else {
return ret_value__11331__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11330__auto__ = function(state_11621){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11330__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11330__auto____1.call(this,state_11621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
csasync$proc$delayer_$_state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11330__auto____0;
csasync$proc$delayer_$_state_machine__11330__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11330__auto____1;
return csasync$proc$delayer_$_state_machine__11330__auto__;
})()
;})(switch__11329__auto__,c__11350__auto__))
})();
var state__11352__auto__ = (function (){var statearr_11630 = f__11351__auto__.call(null);
(statearr_11630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11350__auto__);

return statearr_11630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11352__auto__);
});})(c__11350__auto__))
);

return c__11350__auto__;
});

//# sourceMappingURL=proc.js.map