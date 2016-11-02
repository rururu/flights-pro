// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args32498 = [];
var len__19536__auto___32561 = arguments.length;
var i__19537__auto___32562 = (0);
while(true){
if((i__19537__auto___32562 < len__19536__auto___32561)){
args32498.push((arguments[i__19537__auto___32562]));

var G__32563 = (i__19537__auto___32562 + (1));
i__19537__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var G__32500 = args32498.length;
switch (G__32500) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32498.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20491__auto__){
return (function (){
var f__20492__auto__ = (function (){var switch__20470__auto__ = ((function (c__20491__auto__){
return (function (state_32514){
var state_val_32515 = (state_32514[(1)]);
if((state_val_32515 === (1))){
var state_32514__$1 = state_32514;
var statearr_32516_32565 = state_32514__$1;
(statearr_32516_32565[(2)] = null);

(statearr_32516_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (2))){
var state_32514__$1 = state_32514;
var statearr_32517_32566 = state_32514__$1;
(statearr_32517_32566[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (3))){
var inst_32512 = (state_32514[(2)]);
var state_32514__$1 = state_32514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32514__$1,inst_32512);
} else {
if((state_val_32515 === (4))){
var inst_32503 = func.call(null);
var inst_32504 = cljs.core.async.timeout.call(null,time_out);
var state_32514__$1 = (function (){var statearr_32519 = state_32514;
(statearr_32519[(7)] = inst_32503);

return statearr_32519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32514__$1,(7),inst_32504);
} else {
if((state_val_32515 === (5))){
var state_32514__$1 = state_32514;
var statearr_32520_32567 = state_32514__$1;
(statearr_32520_32567[(2)] = null);

(statearr_32520_32567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (6))){
var inst_32510 = (state_32514[(2)]);
var state_32514__$1 = state_32514;
var statearr_32521_32568 = state_32514__$1;
(statearr_32521_32568[(2)] = inst_32510);

(statearr_32521_32568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32515 === (7))){
var inst_32506 = (state_32514[(2)]);
var state_32514__$1 = (function (){var statearr_32522 = state_32514;
(statearr_32522[(8)] = inst_32506);

return statearr_32522;
})();
var statearr_32523_32569 = state_32514__$1;
(statearr_32523_32569[(2)] = null);

(statearr_32523_32569[(1)] = (2));


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
});})(c__20491__auto__))
;
return ((function (switch__20470__auto__,c__20491__auto__){
return (function() {
var csasync$proc$state_machine__20471__auto__ = null;
var csasync$proc$state_machine__20471__auto____0 = (function (){
var statearr_32527 = [null,null,null,null,null,null,null,null,null];
(statearr_32527[(0)] = csasync$proc$state_machine__20471__auto__);

(statearr_32527[(1)] = (1));

return statearr_32527;
});
var csasync$proc$state_machine__20471__auto____1 = (function (state_32514){
while(true){
var ret_value__20472__auto__ = (function (){try{while(true){
var result__20473__auto__ = switch__20470__auto__.call(null,state_32514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20473__auto__;
}
break;
}
}catch (e32528){if((e32528 instanceof Object)){
var ex__20474__auto__ = e32528;
var statearr_32529_32570 = state_32514;
(statearr_32529_32570[(5)] = ex__20474__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_32514;
state_32514 = G__32571;
continue;
} else {
return ret_value__20472__auto__;
}
break;
}
});
csasync$proc$state_machine__20471__auto__ = function(state_32514){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20471__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20471__auto____1.call(this,state_32514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20471__auto____0;
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20471__auto____1;
return csasync$proc$state_machine__20471__auto__;
})()
;})(switch__20470__auto__,c__20491__auto__))
})();
var state__20493__auto__ = (function (){var statearr_32530 = f__20492__auto__.call(null);
(statearr_32530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20491__auto__);

return statearr_32530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20493__auto__);
});})(c__20491__auto__))
);

return c__20491__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20491__auto__){
return (function (){
var f__20492__auto__ = (function (){var switch__20470__auto__ = ((function (c__20491__auto__){
return (function (state_32544){
var state_val_32545 = (state_32544[(1)]);
if((state_val_32545 === (1))){
var state_32544__$1 = state_32544;
var statearr_32546_32572 = state_32544__$1;
(statearr_32546_32572[(2)] = null);

(statearr_32546_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (2))){
var state_32544__$1 = state_32544;
var statearr_32547_32573 = state_32544__$1;
(statearr_32547_32573[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (3))){
var inst_32542 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32544__$1,inst_32542);
} else {
if((state_val_32545 === (4))){
var inst_32533 = func.call(null,param);
var inst_32534 = cljs.core.async.timeout.call(null,time_out);
var state_32544__$1 = (function (){var statearr_32549 = state_32544;
(statearr_32549[(7)] = inst_32533);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32544__$1,(7),inst_32534);
} else {
if((state_val_32545 === (5))){
var state_32544__$1 = state_32544;
var statearr_32550_32574 = state_32544__$1;
(statearr_32550_32574[(2)] = null);

(statearr_32550_32574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (6))){
var inst_32540 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
var statearr_32551_32575 = state_32544__$1;
(statearr_32551_32575[(2)] = inst_32540);

(statearr_32551_32575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (7))){
var inst_32536 = (state_32544[(2)]);
var state_32544__$1 = (function (){var statearr_32552 = state_32544;
(statearr_32552[(8)] = inst_32536);

return statearr_32552;
})();
var statearr_32553_32576 = state_32544__$1;
(statearr_32553_32576[(2)] = null);

(statearr_32553_32576[(1)] = (2));


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
});})(c__20491__auto__))
;
return ((function (switch__20470__auto__,c__20491__auto__){
return (function() {
var csasync$proc$state_machine__20471__auto__ = null;
var csasync$proc$state_machine__20471__auto____0 = (function (){
var statearr_32557 = [null,null,null,null,null,null,null,null,null];
(statearr_32557[(0)] = csasync$proc$state_machine__20471__auto__);

(statearr_32557[(1)] = (1));

return statearr_32557;
});
var csasync$proc$state_machine__20471__auto____1 = (function (state_32544){
while(true){
var ret_value__20472__auto__ = (function (){try{while(true){
var result__20473__auto__ = switch__20470__auto__.call(null,state_32544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20473__auto__;
}
break;
}
}catch (e32558){if((e32558 instanceof Object)){
var ex__20474__auto__ = e32558;
var statearr_32559_32577 = state_32544;
(statearr_32559_32577[(5)] = ex__20474__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32578 = state_32544;
state_32544 = G__32578;
continue;
} else {
return ret_value__20472__auto__;
}
break;
}
});
csasync$proc$state_machine__20471__auto__ = function(state_32544){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20471__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20471__auto____1.call(this,state_32544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20471__auto____0;
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20471__auto____1;
return csasync$proc$state_machine__20471__auto__;
})()
;})(switch__20470__auto__,c__20491__auto__))
})();
var state__20493__auto__ = (function (){var statearr_32560 = f__20492__auto__.call(null);
(statearr_32560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20491__auto__);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20493__auto__);
});})(c__20491__auto__))
);

return c__20491__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args32579 = [];
var len__19536__auto___32666 = arguments.length;
var i__19537__auto___32667 = (0);
while(true){
if((i__19537__auto___32667 < len__19536__auto___32666)){
args32579.push((arguments[i__19537__auto___32667]));

var G__32668 = (i__19537__auto___32667 + (1));
i__19537__auto___32667 = G__32668;
continue;
} else {
}
break;
}

var G__32581 = args32579.length;
switch (G__32581) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32579.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20491__auto___32670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20491__auto___32670){
return (function (){
var f__20492__auto__ = (function (){var switch__20470__auto__ = ((function (c__20491__auto___32670){
return (function (state_32602){
var state_val_32603 = (state_32602[(1)]);
if((state_val_32603 === (7))){
var inst_32591 = cljs.core.async.timeout.call(null,time_out);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32602__$1,(10),inst_32591);
} else {
if((state_val_32603 === (1))){
var state_32602__$1 = state_32602;
var statearr_32604_32671 = state_32602__$1;
(statearr_32604_32671[(2)] = null);

(statearr_32604_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (4))){
var inst_32586 = proc_fn.call(null);
var state_32602__$1 = state_32602;
var statearr_32605_32672 = state_32602__$1;
(statearr_32605_32672[(2)] = inst_32586);

(statearr_32605_32672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (6))){
var inst_32589 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32589)){
var statearr_32606_32673 = state_32602__$1;
(statearr_32606_32673[(1)] = (7));

} else {
var statearr_32607_32674 = state_32602__$1;
(statearr_32607_32674[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (3))){
var inst_32599 = (state_32602[(2)]);
var inst_32600 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_32602__$1 = (function (){var statearr_32608 = state_32602;
(statearr_32608[(7)] = inst_32599);

return statearr_32608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32602__$1,inst_32600);
} else {
if((state_val_32603 === (2))){
var inst_32584 = (state_32602[(8)]);
var inst_32583 = cljs.core.deref.call(null,status);
var inst_32584__$1 = cljs.core._EQ_.call(null,inst_32583,"RUN");
var state_32602__$1 = (function (){var statearr_32609 = state_32602;
(statearr_32609[(8)] = inst_32584__$1);

return statearr_32609;
})();
if(inst_32584__$1){
var statearr_32610_32675 = state_32602__$1;
(statearr_32610_32675[(1)] = (4));

} else {
var statearr_32611_32676 = state_32602__$1;
(statearr_32611_32676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (9))){
var inst_32597 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32612_32677 = state_32602__$1;
(statearr_32612_32677[(2)] = inst_32597);

(statearr_32612_32677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (5))){
var inst_32584 = (state_32602[(8)]);
var state_32602__$1 = state_32602;
var statearr_32613_32678 = state_32602__$1;
(statearr_32613_32678[(2)] = inst_32584);

(statearr_32613_32678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (10))){
var inst_32593 = (state_32602[(2)]);
var state_32602__$1 = (function (){var statearr_32614 = state_32602;
(statearr_32614[(9)] = inst_32593);

return statearr_32614;
})();
var statearr_32615_32679 = state_32602__$1;
(statearr_32615_32679[(2)] = null);

(statearr_32615_32679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (8))){
var state_32602__$1 = state_32602;
var statearr_32616_32680 = state_32602__$1;
(statearr_32616_32680[(2)] = null);

(statearr_32616_32680[(1)] = (9));


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
});})(c__20491__auto___32670))
;
return ((function (switch__20470__auto__,c__20491__auto___32670){
return (function() {
var csasync$proc$state_machine__20471__auto__ = null;
var csasync$proc$state_machine__20471__auto____0 = (function (){
var statearr_32620 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32620[(0)] = csasync$proc$state_machine__20471__auto__);

(statearr_32620[(1)] = (1));

return statearr_32620;
});
var csasync$proc$state_machine__20471__auto____1 = (function (state_32602){
while(true){
var ret_value__20472__auto__ = (function (){try{while(true){
var result__20473__auto__ = switch__20470__auto__.call(null,state_32602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20473__auto__;
}
break;
}
}catch (e32621){if((e32621 instanceof Object)){
var ex__20474__auto__ = e32621;
var statearr_32622_32681 = state_32602;
(statearr_32622_32681[(5)] = ex__20474__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32602;
state_32602 = G__32682;
continue;
} else {
return ret_value__20472__auto__;
}
break;
}
});
csasync$proc$state_machine__20471__auto__ = function(state_32602){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20471__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20471__auto____1.call(this,state_32602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20471__auto____0;
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20471__auto____1;
return csasync$proc$state_machine__20471__auto__;
})()
;})(switch__20470__auto__,c__20491__auto___32670))
})();
var state__20493__auto__ = (function (){var statearr_32623 = f__20492__auto__.call(null);
(statearr_32623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20491__auto___32670);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20493__auto__);
});})(c__20491__auto___32670))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20491__auto___32683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20491__auto___32683){
return (function (){
var f__20492__auto__ = (function (){var switch__20470__auto__ = ((function (c__20491__auto___32683){
return (function (state_32644){
var state_val_32645 = (state_32644[(1)]);
if((state_val_32645 === (7))){
var inst_32633 = cljs.core.async.timeout.call(null,time_out);
var state_32644__$1 = state_32644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32644__$1,(10),inst_32633);
} else {
if((state_val_32645 === (1))){
var state_32644__$1 = state_32644;
var statearr_32646_32684 = state_32644__$1;
(statearr_32646_32684[(2)] = null);

(statearr_32646_32684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (4))){
var inst_32628 = proc_fn.call(null,param);
var state_32644__$1 = state_32644;
var statearr_32647_32685 = state_32644__$1;
(statearr_32647_32685[(2)] = inst_32628);

(statearr_32647_32685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (6))){
var inst_32631 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
if(cljs.core.truth_(inst_32631)){
var statearr_32648_32686 = state_32644__$1;
(statearr_32648_32686[(1)] = (7));

} else {
var statearr_32649_32687 = state_32644__$1;
(statearr_32649_32687[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (3))){
var inst_32641 = (state_32644[(2)]);
var inst_32642 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_32644__$1 = (function (){var statearr_32650 = state_32644;
(statearr_32650[(7)] = inst_32641);

return statearr_32650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32644__$1,inst_32642);
} else {
if((state_val_32645 === (2))){
var inst_32626 = (state_32644[(8)]);
var inst_32625 = cljs.core.deref.call(null,status);
var inst_32626__$1 = cljs.core._EQ_.call(null,inst_32625,"RUN");
var state_32644__$1 = (function (){var statearr_32651 = state_32644;
(statearr_32651[(8)] = inst_32626__$1);

return statearr_32651;
})();
if(inst_32626__$1){
var statearr_32652_32688 = state_32644__$1;
(statearr_32652_32688[(1)] = (4));

} else {
var statearr_32653_32689 = state_32644__$1;
(statearr_32653_32689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (9))){
var inst_32639 = (state_32644[(2)]);
var state_32644__$1 = state_32644;
var statearr_32654_32690 = state_32644__$1;
(statearr_32654_32690[(2)] = inst_32639);

(statearr_32654_32690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (5))){
var inst_32626 = (state_32644[(8)]);
var state_32644__$1 = state_32644;
var statearr_32655_32691 = state_32644__$1;
(statearr_32655_32691[(2)] = inst_32626);

(statearr_32655_32691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (10))){
var inst_32635 = (state_32644[(2)]);
var state_32644__$1 = (function (){var statearr_32656 = state_32644;
(statearr_32656[(9)] = inst_32635);

return statearr_32656;
})();
var statearr_32657_32692 = state_32644__$1;
(statearr_32657_32692[(2)] = null);

(statearr_32657_32692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32645 === (8))){
var state_32644__$1 = state_32644;
var statearr_32658_32693 = state_32644__$1;
(statearr_32658_32693[(2)] = null);

(statearr_32658_32693[(1)] = (9));


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
});})(c__20491__auto___32683))
;
return ((function (switch__20470__auto__,c__20491__auto___32683){
return (function() {
var csasync$proc$state_machine__20471__auto__ = null;
var csasync$proc$state_machine__20471__auto____0 = (function (){
var statearr_32662 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32662[(0)] = csasync$proc$state_machine__20471__auto__);

(statearr_32662[(1)] = (1));

return statearr_32662;
});
var csasync$proc$state_machine__20471__auto____1 = (function (state_32644){
while(true){
var ret_value__20472__auto__ = (function (){try{while(true){
var result__20473__auto__ = switch__20470__auto__.call(null,state_32644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20473__auto__;
}
break;
}
}catch (e32663){if((e32663 instanceof Object)){
var ex__20474__auto__ = e32663;
var statearr_32664_32694 = state_32644;
(statearr_32664_32694[(5)] = ex__20474__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32695 = state_32644;
state_32644 = G__32695;
continue;
} else {
return ret_value__20472__auto__;
}
break;
}
});
csasync$proc$state_machine__20471__auto__ = function(state_32644){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20471__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20471__auto____1.call(this,state_32644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20471__auto____0;
csasync$proc$state_machine__20471__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20471__auto____1;
return csasync$proc$state_machine__20471__auto__;
})()
;})(switch__20470__auto__,c__20491__auto___32683))
})();
var state__20493__auto__ = (function (){var statearr_32665 = f__20492__auto__.call(null);
(statearr_32665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20491__auto___32683);

return statearr_32665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20493__auto__);
});})(c__20491__auto___32683))
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