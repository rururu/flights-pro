// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args93515 = [];
var len__89855__auto___93578 = arguments.length;
var i__89856__auto___93579 = (0);
while(true){
if((i__89856__auto___93579 < len__89855__auto___93578)){
args93515.push((arguments[i__89856__auto___93579]));

var G__93580 = (i__89856__auto___93579 + (1));
i__89856__auto___93579 = G__93580;
continue;
} else {
}
break;
}

var G__93517 = args93515.length;
switch (G__93517) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93515.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__90917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__90917__auto__){
return (function (){
var f__90918__auto__ = (function (){var switch__90896__auto__ = ((function (c__90917__auto__){
return (function (state_93531){
var state_val_93532 = (state_93531[(1)]);
if((state_val_93532 === (1))){
var state_93531__$1 = state_93531;
var statearr_93533_93582 = state_93531__$1;
(statearr_93533_93582[(2)] = null);

(statearr_93533_93582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93532 === (2))){
var state_93531__$1 = state_93531;
var statearr_93534_93583 = state_93531__$1;
(statearr_93534_93583[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93532 === (3))){
var inst_93529 = (state_93531[(2)]);
var state_93531__$1 = state_93531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93531__$1,inst_93529);
} else {
if((state_val_93532 === (4))){
var inst_93520 = func.call(null);
var inst_93521 = cljs.core.async.timeout.call(null,time_out);
var state_93531__$1 = (function (){var statearr_93536 = state_93531;
(statearr_93536[(7)] = inst_93520);

return statearr_93536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93531__$1,(7),inst_93521);
} else {
if((state_val_93532 === (5))){
var state_93531__$1 = state_93531;
var statearr_93537_93584 = state_93531__$1;
(statearr_93537_93584[(2)] = null);

(statearr_93537_93584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93532 === (6))){
var inst_93527 = (state_93531[(2)]);
var state_93531__$1 = state_93531;
var statearr_93538_93585 = state_93531__$1;
(statearr_93538_93585[(2)] = inst_93527);

(statearr_93538_93585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93532 === (7))){
var inst_93523 = (state_93531[(2)]);
var state_93531__$1 = (function (){var statearr_93539 = state_93531;
(statearr_93539[(8)] = inst_93523);

return statearr_93539;
})();
var statearr_93540_93586 = state_93531__$1;
(statearr_93540_93586[(2)] = null);

(statearr_93540_93586[(1)] = (2));


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
});})(c__90917__auto__))
;
return ((function (switch__90896__auto__,c__90917__auto__){
return (function() {
var csasync$proc$state_machine__90897__auto__ = null;
var csasync$proc$state_machine__90897__auto____0 = (function (){
var statearr_93544 = [null,null,null,null,null,null,null,null,null];
(statearr_93544[(0)] = csasync$proc$state_machine__90897__auto__);

(statearr_93544[(1)] = (1));

return statearr_93544;
});
var csasync$proc$state_machine__90897__auto____1 = (function (state_93531){
while(true){
var ret_value__90898__auto__ = (function (){try{while(true){
var result__90899__auto__ = switch__90896__auto__.call(null,state_93531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__90899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__90899__auto__;
}
break;
}
}catch (e93545){if((e93545 instanceof Object)){
var ex__90900__auto__ = e93545;
var statearr_93546_93587 = state_93531;
(statearr_93546_93587[(5)] = ex__90900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__90898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93588 = state_93531;
state_93531 = G__93588;
continue;
} else {
return ret_value__90898__auto__;
}
break;
}
});
csasync$proc$state_machine__90897__auto__ = function(state_93531){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__90897__auto____0.call(this);
case 1:
return csasync$proc$state_machine__90897__auto____1.call(this,state_93531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__90897__auto____0;
csasync$proc$state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__90897__auto____1;
return csasync$proc$state_machine__90897__auto__;
})()
;})(switch__90896__auto__,c__90917__auto__))
})();
var state__90919__auto__ = (function (){var statearr_93547 = f__90918__auto__.call(null);
(statearr_93547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__90917__auto__);

return statearr_93547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__90919__auto__);
});})(c__90917__auto__))
);

return c__90917__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__90917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__90917__auto__){
return (function (){
var f__90918__auto__ = (function (){var switch__90896__auto__ = ((function (c__90917__auto__){
return (function (state_93561){
var state_val_93562 = (state_93561[(1)]);
if((state_val_93562 === (1))){
var state_93561__$1 = state_93561;
var statearr_93563_93589 = state_93561__$1;
(statearr_93563_93589[(2)] = null);

(statearr_93563_93589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93562 === (2))){
var state_93561__$1 = state_93561;
var statearr_93564_93590 = state_93561__$1;
(statearr_93564_93590[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93562 === (3))){
var inst_93559 = (state_93561[(2)]);
var state_93561__$1 = state_93561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93561__$1,inst_93559);
} else {
if((state_val_93562 === (4))){
var inst_93550 = func.call(null,param);
var inst_93551 = cljs.core.async.timeout.call(null,time_out);
var state_93561__$1 = (function (){var statearr_93566 = state_93561;
(statearr_93566[(7)] = inst_93550);

return statearr_93566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93561__$1,(7),inst_93551);
} else {
if((state_val_93562 === (5))){
var state_93561__$1 = state_93561;
var statearr_93567_93591 = state_93561__$1;
(statearr_93567_93591[(2)] = null);

(statearr_93567_93591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93562 === (6))){
var inst_93557 = (state_93561[(2)]);
var state_93561__$1 = state_93561;
var statearr_93568_93592 = state_93561__$1;
(statearr_93568_93592[(2)] = inst_93557);

(statearr_93568_93592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93562 === (7))){
var inst_93553 = (state_93561[(2)]);
var state_93561__$1 = (function (){var statearr_93569 = state_93561;
(statearr_93569[(8)] = inst_93553);

return statearr_93569;
})();
var statearr_93570_93593 = state_93561__$1;
(statearr_93570_93593[(2)] = null);

(statearr_93570_93593[(1)] = (2));


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
});})(c__90917__auto__))
;
return ((function (switch__90896__auto__,c__90917__auto__){
return (function() {
var csasync$proc$state_machine__90897__auto__ = null;
var csasync$proc$state_machine__90897__auto____0 = (function (){
var statearr_93574 = [null,null,null,null,null,null,null,null,null];
(statearr_93574[(0)] = csasync$proc$state_machine__90897__auto__);

(statearr_93574[(1)] = (1));

return statearr_93574;
});
var csasync$proc$state_machine__90897__auto____1 = (function (state_93561){
while(true){
var ret_value__90898__auto__ = (function (){try{while(true){
var result__90899__auto__ = switch__90896__auto__.call(null,state_93561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__90899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__90899__auto__;
}
break;
}
}catch (e93575){if((e93575 instanceof Object)){
var ex__90900__auto__ = e93575;
var statearr_93576_93594 = state_93561;
(statearr_93576_93594[(5)] = ex__90900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__90898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93595 = state_93561;
state_93561 = G__93595;
continue;
} else {
return ret_value__90898__auto__;
}
break;
}
});
csasync$proc$state_machine__90897__auto__ = function(state_93561){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__90897__auto____0.call(this);
case 1:
return csasync$proc$state_machine__90897__auto____1.call(this,state_93561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__90897__auto____0;
csasync$proc$state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__90897__auto____1;
return csasync$proc$state_machine__90897__auto__;
})()
;})(switch__90896__auto__,c__90917__auto__))
})();
var state__90919__auto__ = (function (){var statearr_93577 = f__90918__auto__.call(null);
(statearr_93577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__90917__auto__);

return statearr_93577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__90919__auto__);
});})(c__90917__auto__))
);

return c__90917__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__90917__auto___93680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__90917__auto___93680){
return (function (){
var f__90918__auto__ = (function (){var switch__90896__auto__ = ((function (c__90917__auto___93680){
return (function (state_93658){
var state_val_93659 = (state_93658[(1)]);
if((state_val_93659 === (7))){
var inst_93647 = cljs.core.async.timeout.call(null,time_out);
var state_93658__$1 = state_93658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93658__$1,(10),inst_93647);
} else {
if((state_val_93659 === (1))){
var state_93658__$1 = state_93658;
var statearr_93660_93681 = state_93658__$1;
(statearr_93660_93681[(2)] = null);

(statearr_93660_93681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (4))){
var inst_93642 = proc_fn.call(null);
var state_93658__$1 = state_93658;
var statearr_93661_93682 = state_93658__$1;
(statearr_93661_93682[(2)] = inst_93642);

(statearr_93661_93682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (6))){
var inst_93645 = (state_93658[(2)]);
var state_93658__$1 = state_93658;
if(cljs.core.truth_(inst_93645)){
var statearr_93662_93683 = state_93658__$1;
(statearr_93662_93683[(1)] = (7));

} else {
var statearr_93663_93684 = state_93658__$1;
(statearr_93663_93684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (3))){
var inst_93655 = (state_93658[(2)]);
var inst_93656 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_93658__$1 = (function (){var statearr_93664 = state_93658;
(statearr_93664[(7)] = inst_93655);

return statearr_93664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93658__$1,inst_93656);
} else {
if((state_val_93659 === (2))){
var inst_93640 = (state_93658[(8)]);
var inst_93639 = cljs.core.deref.call(null,status);
var inst_93640__$1 = cljs.core._EQ_.call(null,inst_93639,"RUN");
var state_93658__$1 = (function (){var statearr_93665 = state_93658;
(statearr_93665[(8)] = inst_93640__$1);

return statearr_93665;
})();
if(inst_93640__$1){
var statearr_93666_93685 = state_93658__$1;
(statearr_93666_93685[(1)] = (4));

} else {
var statearr_93667_93686 = state_93658__$1;
(statearr_93667_93686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (9))){
var inst_93653 = (state_93658[(2)]);
var state_93658__$1 = state_93658;
var statearr_93668_93687 = state_93658__$1;
(statearr_93668_93687[(2)] = inst_93653);

(statearr_93668_93687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (5))){
var inst_93640 = (state_93658[(8)]);
var state_93658__$1 = state_93658;
var statearr_93669_93688 = state_93658__$1;
(statearr_93669_93688[(2)] = inst_93640);

(statearr_93669_93688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (10))){
var inst_93649 = (state_93658[(2)]);
var state_93658__$1 = (function (){var statearr_93670 = state_93658;
(statearr_93670[(9)] = inst_93649);

return statearr_93670;
})();
var statearr_93671_93689 = state_93658__$1;
(statearr_93671_93689[(2)] = null);

(statearr_93671_93689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93659 === (8))){
var state_93658__$1 = state_93658;
var statearr_93672_93690 = state_93658__$1;
(statearr_93672_93690[(2)] = null);

(statearr_93672_93690[(1)] = (9));


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
});})(c__90917__auto___93680))
;
return ((function (switch__90896__auto__,c__90917__auto___93680){
return (function() {
var csasync$proc$start_process_$_state_machine__90897__auto__ = null;
var csasync$proc$start_process_$_state_machine__90897__auto____0 = (function (){
var statearr_93676 = [null,null,null,null,null,null,null,null,null,null];
(statearr_93676[(0)] = csasync$proc$start_process_$_state_machine__90897__auto__);

(statearr_93676[(1)] = (1));

return statearr_93676;
});
var csasync$proc$start_process_$_state_machine__90897__auto____1 = (function (state_93658){
while(true){
var ret_value__90898__auto__ = (function (){try{while(true){
var result__90899__auto__ = switch__90896__auto__.call(null,state_93658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__90899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__90899__auto__;
}
break;
}
}catch (e93677){if((e93677 instanceof Object)){
var ex__90900__auto__ = e93677;
var statearr_93678_93691 = state_93658;
(statearr_93678_93691[(5)] = ex__90900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__90898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93692 = state_93658;
state_93658 = G__93692;
continue;
} else {
return ret_value__90898__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__90897__auto__ = function(state_93658){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__90897__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__90897__auto____1.call(this,state_93658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__90897__auto____0;
csasync$proc$start_process_$_state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__90897__auto____1;
return csasync$proc$start_process_$_state_machine__90897__auto__;
})()
;})(switch__90896__auto__,c__90917__auto___93680))
})();
var state__90919__auto__ = (function (){var statearr_93679 = f__90918__auto__.call(null);
(statearr_93679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__90917__auto___93680);

return statearr_93679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__90919__auto__);
});})(c__90917__auto___93680))
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
var c__90917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__90917__auto__){
return (function (){
var f__90918__auto__ = (function (){var switch__90896__auto__ = ((function (c__90917__auto__){
return (function (state_93713){
var state_val_93714 = (state_93713[(1)]);
if((state_val_93714 === (1))){
var inst_93708 = cljs.core.async.timeout.call(null,time);
var state_93713__$1 = state_93713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93713__$1,(2),inst_93708);
} else {
if((state_val_93714 === (2))){
var inst_93710 = (state_93713[(2)]);
var inst_93711 = func.call(null);
var state_93713__$1 = (function (){var statearr_93715 = state_93713;
(statearr_93715[(7)] = inst_93710);

return statearr_93715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93713__$1,inst_93711);
} else {
return null;
}
}
});})(c__90917__auto__))
;
return ((function (switch__90896__auto__,c__90917__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__90897__auto__ = null;
var csasync$proc$delayer_$_state_machine__90897__auto____0 = (function (){
var statearr_93719 = [null,null,null,null,null,null,null,null];
(statearr_93719[(0)] = csasync$proc$delayer_$_state_machine__90897__auto__);

(statearr_93719[(1)] = (1));

return statearr_93719;
});
var csasync$proc$delayer_$_state_machine__90897__auto____1 = (function (state_93713){
while(true){
var ret_value__90898__auto__ = (function (){try{while(true){
var result__90899__auto__ = switch__90896__auto__.call(null,state_93713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__90899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__90899__auto__;
}
break;
}
}catch (e93720){if((e93720 instanceof Object)){
var ex__90900__auto__ = e93720;
var statearr_93721_93723 = state_93713;
(statearr_93721_93723[(5)] = ex__90900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__90898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93724 = state_93713;
state_93713 = G__93724;
continue;
} else {
return ret_value__90898__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__90897__auto__ = function(state_93713){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__90897__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__90897__auto____1.call(this,state_93713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__90897__auto____0;
csasync$proc$delayer_$_state_machine__90897__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__90897__auto____1;
return csasync$proc$delayer_$_state_machine__90897__auto__;
})()
;})(switch__90896__auto__,c__90917__auto__))
})();
var state__90919__auto__ = (function (){var statearr_93722 = f__90918__auto__.call(null);
(statearr_93722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__90917__auto__);

return statearr_93722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__90919__auto__);
});})(c__90917__auto__))
);

return c__90917__auto__;
});

//# sourceMappingURL=proc.js.map