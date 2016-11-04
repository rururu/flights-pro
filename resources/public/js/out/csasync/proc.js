// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args25487 = [];
var len__19854__auto___25550 = arguments.length;
var i__19855__auto___25551 = (0);
while(true){
if((i__19855__auto___25551 < len__19854__auto___25550)){
args25487.push((arguments[i__19855__auto___25551]));

var G__25552 = (i__19855__auto___25551 + (1));
i__19855__auto___25551 = G__25552;
continue;
} else {
}
break;
}

var G__25489 = args25487.length;
switch (G__25489) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25487.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20809__auto__){
return (function (){
var f__20810__auto__ = (function (){var switch__20788__auto__ = ((function (c__20809__auto__){
return (function (state_25503){
var state_val_25504 = (state_25503[(1)]);
if((state_val_25504 === (1))){
var state_25503__$1 = state_25503;
var statearr_25505_25554 = state_25503__$1;
(statearr_25505_25554[(2)] = null);

(statearr_25505_25554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (2))){
var state_25503__$1 = state_25503;
var statearr_25506_25555 = state_25503__$1;
(statearr_25506_25555[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (3))){
var inst_25501 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25503__$1,inst_25501);
} else {
if((state_val_25504 === (4))){
var inst_25492 = func.call(null);
var inst_25493 = cljs.core.async.timeout.call(null,time_out);
var state_25503__$1 = (function (){var statearr_25508 = state_25503;
(statearr_25508[(7)] = inst_25492);

return statearr_25508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25503__$1,(7),inst_25493);
} else {
if((state_val_25504 === (5))){
var state_25503__$1 = state_25503;
var statearr_25509_25556 = state_25503__$1;
(statearr_25509_25556[(2)] = null);

(statearr_25509_25556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (6))){
var inst_25499 = (state_25503[(2)]);
var state_25503__$1 = state_25503;
var statearr_25510_25557 = state_25503__$1;
(statearr_25510_25557[(2)] = inst_25499);

(statearr_25510_25557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25504 === (7))){
var inst_25495 = (state_25503[(2)]);
var state_25503__$1 = (function (){var statearr_25511 = state_25503;
(statearr_25511[(8)] = inst_25495);

return statearr_25511;
})();
var statearr_25512_25558 = state_25503__$1;
(statearr_25512_25558[(2)] = null);

(statearr_25512_25558[(1)] = (2));


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
});})(c__20809__auto__))
;
return ((function (switch__20788__auto__,c__20809__auto__){
return (function() {
var csasync$proc$state_machine__20789__auto__ = null;
var csasync$proc$state_machine__20789__auto____0 = (function (){
var statearr_25516 = [null,null,null,null,null,null,null,null,null];
(statearr_25516[(0)] = csasync$proc$state_machine__20789__auto__);

(statearr_25516[(1)] = (1));

return statearr_25516;
});
var csasync$proc$state_machine__20789__auto____1 = (function (state_25503){
while(true){
var ret_value__20790__auto__ = (function (){try{while(true){
var result__20791__auto__ = switch__20788__auto__.call(null,state_25503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20791__auto__;
}
break;
}
}catch (e25517){if((e25517 instanceof Object)){
var ex__20792__auto__ = e25517;
var statearr_25518_25559 = state_25503;
(statearr_25518_25559[(5)] = ex__20792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25560 = state_25503;
state_25503 = G__25560;
continue;
} else {
return ret_value__20790__auto__;
}
break;
}
});
csasync$proc$state_machine__20789__auto__ = function(state_25503){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20789__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20789__auto____1.call(this,state_25503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20789__auto____0;
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20789__auto____1;
return csasync$proc$state_machine__20789__auto__;
})()
;})(switch__20788__auto__,c__20809__auto__))
})();
var state__20811__auto__ = (function (){var statearr_25519 = f__20810__auto__.call(null);
(statearr_25519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20809__auto__);

return statearr_25519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20811__auto__);
});})(c__20809__auto__))
);

return c__20809__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20809__auto__){
return (function (){
var f__20810__auto__ = (function (){var switch__20788__auto__ = ((function (c__20809__auto__){
return (function (state_25533){
var state_val_25534 = (state_25533[(1)]);
if((state_val_25534 === (1))){
var state_25533__$1 = state_25533;
var statearr_25535_25561 = state_25533__$1;
(statearr_25535_25561[(2)] = null);

(statearr_25535_25561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (2))){
var state_25533__$1 = state_25533;
var statearr_25536_25562 = state_25533__$1;
(statearr_25536_25562[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (3))){
var inst_25531 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25533__$1,inst_25531);
} else {
if((state_val_25534 === (4))){
var inst_25522 = func.call(null,param);
var inst_25523 = cljs.core.async.timeout.call(null,time_out);
var state_25533__$1 = (function (){var statearr_25538 = state_25533;
(statearr_25538[(7)] = inst_25522);

return statearr_25538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25533__$1,(7),inst_25523);
} else {
if((state_val_25534 === (5))){
var state_25533__$1 = state_25533;
var statearr_25539_25563 = state_25533__$1;
(statearr_25539_25563[(2)] = null);

(statearr_25539_25563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (6))){
var inst_25529 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25540_25564 = state_25533__$1;
(statearr_25540_25564[(2)] = inst_25529);

(statearr_25540_25564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (7))){
var inst_25525 = (state_25533[(2)]);
var state_25533__$1 = (function (){var statearr_25541 = state_25533;
(statearr_25541[(8)] = inst_25525);

return statearr_25541;
})();
var statearr_25542_25565 = state_25533__$1;
(statearr_25542_25565[(2)] = null);

(statearr_25542_25565[(1)] = (2));


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
});})(c__20809__auto__))
;
return ((function (switch__20788__auto__,c__20809__auto__){
return (function() {
var csasync$proc$state_machine__20789__auto__ = null;
var csasync$proc$state_machine__20789__auto____0 = (function (){
var statearr_25546 = [null,null,null,null,null,null,null,null,null];
(statearr_25546[(0)] = csasync$proc$state_machine__20789__auto__);

(statearr_25546[(1)] = (1));

return statearr_25546;
});
var csasync$proc$state_machine__20789__auto____1 = (function (state_25533){
while(true){
var ret_value__20790__auto__ = (function (){try{while(true){
var result__20791__auto__ = switch__20788__auto__.call(null,state_25533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20791__auto__;
}
break;
}
}catch (e25547){if((e25547 instanceof Object)){
var ex__20792__auto__ = e25547;
var statearr_25548_25566 = state_25533;
(statearr_25548_25566[(5)] = ex__20792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25567 = state_25533;
state_25533 = G__25567;
continue;
} else {
return ret_value__20790__auto__;
}
break;
}
});
csasync$proc$state_machine__20789__auto__ = function(state_25533){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20789__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20789__auto____1.call(this,state_25533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20789__auto____0;
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20789__auto____1;
return csasync$proc$state_machine__20789__auto__;
})()
;})(switch__20788__auto__,c__20809__auto__))
})();
var state__20811__auto__ = (function (){var statearr_25549 = f__20810__auto__.call(null);
(statearr_25549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20809__auto__);

return statearr_25549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20811__auto__);
});})(c__20809__auto__))
);

return c__20809__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args25568 = [];
var len__19854__auto___25655 = arguments.length;
var i__19855__auto___25656 = (0);
while(true){
if((i__19855__auto___25656 < len__19854__auto___25655)){
args25568.push((arguments[i__19855__auto___25656]));

var G__25657 = (i__19855__auto___25656 + (1));
i__19855__auto___25656 = G__25657;
continue;
} else {
}
break;
}

var G__25570 = args25568.length;
switch (G__25570) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25568.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20809__auto___25659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20809__auto___25659){
return (function (){
var f__20810__auto__ = (function (){var switch__20788__auto__ = ((function (c__20809__auto___25659){
return (function (state_25591){
var state_val_25592 = (state_25591[(1)]);
if((state_val_25592 === (7))){
var inst_25580 = cljs.core.async.timeout.call(null,time_out);
var state_25591__$1 = state_25591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25591__$1,(10),inst_25580);
} else {
if((state_val_25592 === (1))){
var state_25591__$1 = state_25591;
var statearr_25593_25660 = state_25591__$1;
(statearr_25593_25660[(2)] = null);

(statearr_25593_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (4))){
var inst_25575 = proc_fn.call(null);
var state_25591__$1 = state_25591;
var statearr_25594_25661 = state_25591__$1;
(statearr_25594_25661[(2)] = inst_25575);

(statearr_25594_25661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (6))){
var inst_25578 = (state_25591[(2)]);
var state_25591__$1 = state_25591;
if(cljs.core.truth_(inst_25578)){
var statearr_25595_25662 = state_25591__$1;
(statearr_25595_25662[(1)] = (7));

} else {
var statearr_25596_25663 = state_25591__$1;
(statearr_25596_25663[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (3))){
var inst_25588 = (state_25591[(2)]);
var inst_25589 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25591__$1 = (function (){var statearr_25597 = state_25591;
(statearr_25597[(7)] = inst_25588);

return statearr_25597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25591__$1,inst_25589);
} else {
if((state_val_25592 === (2))){
var inst_25573 = (state_25591[(8)]);
var inst_25572 = cljs.core.deref.call(null,status);
var inst_25573__$1 = cljs.core._EQ_.call(null,inst_25572,"RUN");
var state_25591__$1 = (function (){var statearr_25598 = state_25591;
(statearr_25598[(8)] = inst_25573__$1);

return statearr_25598;
})();
if(inst_25573__$1){
var statearr_25599_25664 = state_25591__$1;
(statearr_25599_25664[(1)] = (4));

} else {
var statearr_25600_25665 = state_25591__$1;
(statearr_25600_25665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (9))){
var inst_25586 = (state_25591[(2)]);
var state_25591__$1 = state_25591;
var statearr_25601_25666 = state_25591__$1;
(statearr_25601_25666[(2)] = inst_25586);

(statearr_25601_25666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (5))){
var inst_25573 = (state_25591[(8)]);
var state_25591__$1 = state_25591;
var statearr_25602_25667 = state_25591__$1;
(statearr_25602_25667[(2)] = inst_25573);

(statearr_25602_25667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (10))){
var inst_25582 = (state_25591[(2)]);
var state_25591__$1 = (function (){var statearr_25603 = state_25591;
(statearr_25603[(9)] = inst_25582);

return statearr_25603;
})();
var statearr_25604_25668 = state_25591__$1;
(statearr_25604_25668[(2)] = null);

(statearr_25604_25668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25592 === (8))){
var state_25591__$1 = state_25591;
var statearr_25605_25669 = state_25591__$1;
(statearr_25605_25669[(2)] = null);

(statearr_25605_25669[(1)] = (9));


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
});})(c__20809__auto___25659))
;
return ((function (switch__20788__auto__,c__20809__auto___25659){
return (function() {
var csasync$proc$state_machine__20789__auto__ = null;
var csasync$proc$state_machine__20789__auto____0 = (function (){
var statearr_25609 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25609[(0)] = csasync$proc$state_machine__20789__auto__);

(statearr_25609[(1)] = (1));

return statearr_25609;
});
var csasync$proc$state_machine__20789__auto____1 = (function (state_25591){
while(true){
var ret_value__20790__auto__ = (function (){try{while(true){
var result__20791__auto__ = switch__20788__auto__.call(null,state_25591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20791__auto__;
}
break;
}
}catch (e25610){if((e25610 instanceof Object)){
var ex__20792__auto__ = e25610;
var statearr_25611_25670 = state_25591;
(statearr_25611_25670[(5)] = ex__20792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25671 = state_25591;
state_25591 = G__25671;
continue;
} else {
return ret_value__20790__auto__;
}
break;
}
});
csasync$proc$state_machine__20789__auto__ = function(state_25591){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20789__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20789__auto____1.call(this,state_25591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20789__auto____0;
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20789__auto____1;
return csasync$proc$state_machine__20789__auto__;
})()
;})(switch__20788__auto__,c__20809__auto___25659))
})();
var state__20811__auto__ = (function (){var statearr_25612 = f__20810__auto__.call(null);
(statearr_25612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20809__auto___25659);

return statearr_25612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20811__auto__);
});})(c__20809__auto___25659))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20809__auto___25672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20809__auto___25672){
return (function (){
var f__20810__auto__ = (function (){var switch__20788__auto__ = ((function (c__20809__auto___25672){
return (function (state_25633){
var state_val_25634 = (state_25633[(1)]);
if((state_val_25634 === (7))){
var inst_25622 = cljs.core.async.timeout.call(null,time_out);
var state_25633__$1 = state_25633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25633__$1,(10),inst_25622);
} else {
if((state_val_25634 === (1))){
var state_25633__$1 = state_25633;
var statearr_25635_25673 = state_25633__$1;
(statearr_25635_25673[(2)] = null);

(statearr_25635_25673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (4))){
var inst_25617 = proc_fn.call(null,param);
var state_25633__$1 = state_25633;
var statearr_25636_25674 = state_25633__$1;
(statearr_25636_25674[(2)] = inst_25617);

(statearr_25636_25674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (6))){
var inst_25620 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
if(cljs.core.truth_(inst_25620)){
var statearr_25637_25675 = state_25633__$1;
(statearr_25637_25675[(1)] = (7));

} else {
var statearr_25638_25676 = state_25633__$1;
(statearr_25638_25676[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (3))){
var inst_25630 = (state_25633[(2)]);
var inst_25631 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_25633__$1 = (function (){var statearr_25639 = state_25633;
(statearr_25639[(7)] = inst_25630);

return statearr_25639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25633__$1,inst_25631);
} else {
if((state_val_25634 === (2))){
var inst_25615 = (state_25633[(8)]);
var inst_25614 = cljs.core.deref.call(null,status);
var inst_25615__$1 = cljs.core._EQ_.call(null,inst_25614,"RUN");
var state_25633__$1 = (function (){var statearr_25640 = state_25633;
(statearr_25640[(8)] = inst_25615__$1);

return statearr_25640;
})();
if(inst_25615__$1){
var statearr_25641_25677 = state_25633__$1;
(statearr_25641_25677[(1)] = (4));

} else {
var statearr_25642_25678 = state_25633__$1;
(statearr_25642_25678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (9))){
var inst_25628 = (state_25633[(2)]);
var state_25633__$1 = state_25633;
var statearr_25643_25679 = state_25633__$1;
(statearr_25643_25679[(2)] = inst_25628);

(statearr_25643_25679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (5))){
var inst_25615 = (state_25633[(8)]);
var state_25633__$1 = state_25633;
var statearr_25644_25680 = state_25633__$1;
(statearr_25644_25680[(2)] = inst_25615);

(statearr_25644_25680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (10))){
var inst_25624 = (state_25633[(2)]);
var state_25633__$1 = (function (){var statearr_25645 = state_25633;
(statearr_25645[(9)] = inst_25624);

return statearr_25645;
})();
var statearr_25646_25681 = state_25633__$1;
(statearr_25646_25681[(2)] = null);

(statearr_25646_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25634 === (8))){
var state_25633__$1 = state_25633;
var statearr_25647_25682 = state_25633__$1;
(statearr_25647_25682[(2)] = null);

(statearr_25647_25682[(1)] = (9));


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
});})(c__20809__auto___25672))
;
return ((function (switch__20788__auto__,c__20809__auto___25672){
return (function() {
var csasync$proc$state_machine__20789__auto__ = null;
var csasync$proc$state_machine__20789__auto____0 = (function (){
var statearr_25651 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25651[(0)] = csasync$proc$state_machine__20789__auto__);

(statearr_25651[(1)] = (1));

return statearr_25651;
});
var csasync$proc$state_machine__20789__auto____1 = (function (state_25633){
while(true){
var ret_value__20790__auto__ = (function (){try{while(true){
var result__20791__auto__ = switch__20788__auto__.call(null,state_25633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20791__auto__;
}
break;
}
}catch (e25652){if((e25652 instanceof Object)){
var ex__20792__auto__ = e25652;
var statearr_25653_25683 = state_25633;
(statearr_25653_25683[(5)] = ex__20792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25684 = state_25633;
state_25633 = G__25684;
continue;
} else {
return ret_value__20790__auto__;
}
break;
}
});
csasync$proc$state_machine__20789__auto__ = function(state_25633){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20789__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20789__auto____1.call(this,state_25633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20789__auto____0;
csasync$proc$state_machine__20789__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20789__auto____1;
return csasync$proc$state_machine__20789__auto__;
})()
;})(switch__20788__auto__,c__20809__auto___25672))
})();
var state__20811__auto__ = (function (){var statearr_25654 = f__20810__auto__.call(null);
(statearr_25654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20809__auto___25672);

return statearr_25654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20811__auto__);
});})(c__20809__auto___25672))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$lang$maxFixedArity = 4;

csasync.proc.stop_process = (function csasync$proc$stop_process(status){
return cljs.core.vreset_BANG_.call(null,status,"STOP");
});
csasync.proc.running_QMARK_ = (function csasync$proc$running_QMARK_(status){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"RUN");
});

//# sourceMappingURL=proc.js.map