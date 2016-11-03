// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args38614 = [];
var len__20279__auto___38677 = arguments.length;
var i__20280__auto___38678 = (0);
while(true){
if((i__20280__auto___38678 < len__20279__auto___38677)){
args38614.push((arguments[i__20280__auto___38678]));

var G__38679 = (i__20280__auto___38678 + (1));
i__20280__auto___38678 = G__38679;
continue;
} else {
}
break;
}

var G__38616 = args38614.length;
switch (G__38616) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38614.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21234__auto__){
return (function (){
var f__21235__auto__ = (function (){var switch__21213__auto__ = ((function (c__21234__auto__){
return (function (state_38630){
var state_val_38631 = (state_38630[(1)]);
if((state_val_38631 === (1))){
var state_38630__$1 = state_38630;
var statearr_38632_38681 = state_38630__$1;
(statearr_38632_38681[(2)] = null);

(statearr_38632_38681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (2))){
var state_38630__$1 = state_38630;
var statearr_38633_38682 = state_38630__$1;
(statearr_38633_38682[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (3))){
var inst_38628 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38630__$1,inst_38628);
} else {
if((state_val_38631 === (4))){
var inst_38619 = func.call(null);
var inst_38620 = cljs.core.async.timeout.call(null,time_out);
var state_38630__$1 = (function (){var statearr_38635 = state_38630;
(statearr_38635[(7)] = inst_38619);

return statearr_38635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38630__$1,(7),inst_38620);
} else {
if((state_val_38631 === (5))){
var state_38630__$1 = state_38630;
var statearr_38636_38683 = state_38630__$1;
(statearr_38636_38683[(2)] = null);

(statearr_38636_38683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (6))){
var inst_38626 = (state_38630[(2)]);
var state_38630__$1 = state_38630;
var statearr_38637_38684 = state_38630__$1;
(statearr_38637_38684[(2)] = inst_38626);

(statearr_38637_38684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38631 === (7))){
var inst_38622 = (state_38630[(2)]);
var state_38630__$1 = (function (){var statearr_38638 = state_38630;
(statearr_38638[(8)] = inst_38622);

return statearr_38638;
})();
var statearr_38639_38685 = state_38630__$1;
(statearr_38639_38685[(2)] = null);

(statearr_38639_38685[(1)] = (2));


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
});})(c__21234__auto__))
;
return ((function (switch__21213__auto__,c__21234__auto__){
return (function() {
var csasync$proc$state_machine__21214__auto__ = null;
var csasync$proc$state_machine__21214__auto____0 = (function (){
var statearr_38643 = [null,null,null,null,null,null,null,null,null];
(statearr_38643[(0)] = csasync$proc$state_machine__21214__auto__);

(statearr_38643[(1)] = (1));

return statearr_38643;
});
var csasync$proc$state_machine__21214__auto____1 = (function (state_38630){
while(true){
var ret_value__21215__auto__ = (function (){try{while(true){
var result__21216__auto__ = switch__21213__auto__.call(null,state_38630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21216__auto__;
}
break;
}
}catch (e38644){if((e38644 instanceof Object)){
var ex__21217__auto__ = e38644;
var statearr_38645_38686 = state_38630;
(statearr_38645_38686[(5)] = ex__21217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38687 = state_38630;
state_38630 = G__38687;
continue;
} else {
return ret_value__21215__auto__;
}
break;
}
});
csasync$proc$state_machine__21214__auto__ = function(state_38630){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21214__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21214__auto____1.call(this,state_38630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21214__auto____0;
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21214__auto____1;
return csasync$proc$state_machine__21214__auto__;
})()
;})(switch__21213__auto__,c__21234__auto__))
})();
var state__21236__auto__ = (function (){var statearr_38646 = f__21235__auto__.call(null);
(statearr_38646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21234__auto__);

return statearr_38646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21236__auto__);
});})(c__21234__auto__))
);

return c__21234__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21234__auto__){
return (function (){
var f__21235__auto__ = (function (){var switch__21213__auto__ = ((function (c__21234__auto__){
return (function (state_38660){
var state_val_38661 = (state_38660[(1)]);
if((state_val_38661 === (1))){
var state_38660__$1 = state_38660;
var statearr_38662_38688 = state_38660__$1;
(statearr_38662_38688[(2)] = null);

(statearr_38662_38688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38661 === (2))){
var state_38660__$1 = state_38660;
var statearr_38663_38689 = state_38660__$1;
(statearr_38663_38689[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38661 === (3))){
var inst_38658 = (state_38660[(2)]);
var state_38660__$1 = state_38660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38660__$1,inst_38658);
} else {
if((state_val_38661 === (4))){
var inst_38649 = func.call(null,param);
var inst_38650 = cljs.core.async.timeout.call(null,time_out);
var state_38660__$1 = (function (){var statearr_38665 = state_38660;
(statearr_38665[(7)] = inst_38649);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38660__$1,(7),inst_38650);
} else {
if((state_val_38661 === (5))){
var state_38660__$1 = state_38660;
var statearr_38666_38690 = state_38660__$1;
(statearr_38666_38690[(2)] = null);

(statearr_38666_38690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38661 === (6))){
var inst_38656 = (state_38660[(2)]);
var state_38660__$1 = state_38660;
var statearr_38667_38691 = state_38660__$1;
(statearr_38667_38691[(2)] = inst_38656);

(statearr_38667_38691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38661 === (7))){
var inst_38652 = (state_38660[(2)]);
var state_38660__$1 = (function (){var statearr_38668 = state_38660;
(statearr_38668[(8)] = inst_38652);

return statearr_38668;
})();
var statearr_38669_38692 = state_38660__$1;
(statearr_38669_38692[(2)] = null);

(statearr_38669_38692[(1)] = (2));


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
});})(c__21234__auto__))
;
return ((function (switch__21213__auto__,c__21234__auto__){
return (function() {
var csasync$proc$state_machine__21214__auto__ = null;
var csasync$proc$state_machine__21214__auto____0 = (function (){
var statearr_38673 = [null,null,null,null,null,null,null,null,null];
(statearr_38673[(0)] = csasync$proc$state_machine__21214__auto__);

(statearr_38673[(1)] = (1));

return statearr_38673;
});
var csasync$proc$state_machine__21214__auto____1 = (function (state_38660){
while(true){
var ret_value__21215__auto__ = (function (){try{while(true){
var result__21216__auto__ = switch__21213__auto__.call(null,state_38660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21216__auto__;
}
break;
}
}catch (e38674){if((e38674 instanceof Object)){
var ex__21217__auto__ = e38674;
var statearr_38675_38693 = state_38660;
(statearr_38675_38693[(5)] = ex__21217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38694 = state_38660;
state_38660 = G__38694;
continue;
} else {
return ret_value__21215__auto__;
}
break;
}
});
csasync$proc$state_machine__21214__auto__ = function(state_38660){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21214__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21214__auto____1.call(this,state_38660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21214__auto____0;
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21214__auto____1;
return csasync$proc$state_machine__21214__auto__;
})()
;})(switch__21213__auto__,c__21234__auto__))
})();
var state__21236__auto__ = (function (){var statearr_38676 = f__21235__auto__.call(null);
(statearr_38676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21234__auto__);

return statearr_38676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21236__auto__);
});})(c__21234__auto__))
);

return c__21234__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args38695 = [];
var len__20279__auto___38782 = arguments.length;
var i__20280__auto___38783 = (0);
while(true){
if((i__20280__auto___38783 < len__20279__auto___38782)){
args38695.push((arguments[i__20280__auto___38783]));

var G__38784 = (i__20280__auto___38783 + (1));
i__20280__auto___38783 = G__38784;
continue;
} else {
}
break;
}

var G__38697 = args38695.length;
switch (G__38697) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38695.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21234__auto___38786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21234__auto___38786){
return (function (){
var f__21235__auto__ = (function (){var switch__21213__auto__ = ((function (c__21234__auto___38786){
return (function (state_38718){
var state_val_38719 = (state_38718[(1)]);
if((state_val_38719 === (7))){
var inst_38707 = cljs.core.async.timeout.call(null,time_out);
var state_38718__$1 = state_38718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38718__$1,(10),inst_38707);
} else {
if((state_val_38719 === (1))){
var state_38718__$1 = state_38718;
var statearr_38720_38787 = state_38718__$1;
(statearr_38720_38787[(2)] = null);

(statearr_38720_38787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (4))){
var inst_38702 = proc_fn.call(null);
var state_38718__$1 = state_38718;
var statearr_38721_38788 = state_38718__$1;
(statearr_38721_38788[(2)] = inst_38702);

(statearr_38721_38788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (6))){
var inst_38705 = (state_38718[(2)]);
var state_38718__$1 = state_38718;
if(cljs.core.truth_(inst_38705)){
var statearr_38722_38789 = state_38718__$1;
(statearr_38722_38789[(1)] = (7));

} else {
var statearr_38723_38790 = state_38718__$1;
(statearr_38723_38790[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (3))){
var inst_38715 = (state_38718[(2)]);
var inst_38716 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_38718__$1 = (function (){var statearr_38724 = state_38718;
(statearr_38724[(7)] = inst_38715);

return statearr_38724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38718__$1,inst_38716);
} else {
if((state_val_38719 === (2))){
var inst_38700 = (state_38718[(8)]);
var inst_38699 = cljs.core.deref.call(null,status);
var inst_38700__$1 = cljs.core._EQ_.call(null,inst_38699,"RUN");
var state_38718__$1 = (function (){var statearr_38725 = state_38718;
(statearr_38725[(8)] = inst_38700__$1);

return statearr_38725;
})();
if(inst_38700__$1){
var statearr_38726_38791 = state_38718__$1;
(statearr_38726_38791[(1)] = (4));

} else {
var statearr_38727_38792 = state_38718__$1;
(statearr_38727_38792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (9))){
var inst_38713 = (state_38718[(2)]);
var state_38718__$1 = state_38718;
var statearr_38728_38793 = state_38718__$1;
(statearr_38728_38793[(2)] = inst_38713);

(statearr_38728_38793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (5))){
var inst_38700 = (state_38718[(8)]);
var state_38718__$1 = state_38718;
var statearr_38729_38794 = state_38718__$1;
(statearr_38729_38794[(2)] = inst_38700);

(statearr_38729_38794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (10))){
var inst_38709 = (state_38718[(2)]);
var state_38718__$1 = (function (){var statearr_38730 = state_38718;
(statearr_38730[(9)] = inst_38709);

return statearr_38730;
})();
var statearr_38731_38795 = state_38718__$1;
(statearr_38731_38795[(2)] = null);

(statearr_38731_38795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (8))){
var state_38718__$1 = state_38718;
var statearr_38732_38796 = state_38718__$1;
(statearr_38732_38796[(2)] = null);

(statearr_38732_38796[(1)] = (9));


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
});})(c__21234__auto___38786))
;
return ((function (switch__21213__auto__,c__21234__auto___38786){
return (function() {
var csasync$proc$state_machine__21214__auto__ = null;
var csasync$proc$state_machine__21214__auto____0 = (function (){
var statearr_38736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38736[(0)] = csasync$proc$state_machine__21214__auto__);

(statearr_38736[(1)] = (1));

return statearr_38736;
});
var csasync$proc$state_machine__21214__auto____1 = (function (state_38718){
while(true){
var ret_value__21215__auto__ = (function (){try{while(true){
var result__21216__auto__ = switch__21213__auto__.call(null,state_38718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21216__auto__;
}
break;
}
}catch (e38737){if((e38737 instanceof Object)){
var ex__21217__auto__ = e38737;
var statearr_38738_38797 = state_38718;
(statearr_38738_38797[(5)] = ex__21217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38798 = state_38718;
state_38718 = G__38798;
continue;
} else {
return ret_value__21215__auto__;
}
break;
}
});
csasync$proc$state_machine__21214__auto__ = function(state_38718){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21214__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21214__auto____1.call(this,state_38718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21214__auto____0;
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21214__auto____1;
return csasync$proc$state_machine__21214__auto__;
})()
;})(switch__21213__auto__,c__21234__auto___38786))
})();
var state__21236__auto__ = (function (){var statearr_38739 = f__21235__auto__.call(null);
(statearr_38739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21234__auto___38786);

return statearr_38739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21236__auto__);
});})(c__21234__auto___38786))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SP","SP",124290284),cljs.core.deref.call(null,status),time_out], null));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21234__auto___38799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21234__auto___38799){
return (function (){
var f__21235__auto__ = (function (){var switch__21213__auto__ = ((function (c__21234__auto___38799){
return (function (state_38760){
var state_val_38761 = (state_38760[(1)]);
if((state_val_38761 === (7))){
var inst_38749 = cljs.core.async.timeout.call(null,time_out);
var state_38760__$1 = state_38760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38760__$1,(10),inst_38749);
} else {
if((state_val_38761 === (1))){
var state_38760__$1 = state_38760;
var statearr_38762_38800 = state_38760__$1;
(statearr_38762_38800[(2)] = null);

(statearr_38762_38800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (4))){
var inst_38744 = proc_fn.call(null,param);
var state_38760__$1 = state_38760;
var statearr_38763_38801 = state_38760__$1;
(statearr_38763_38801[(2)] = inst_38744);

(statearr_38763_38801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (6))){
var inst_38747 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
if(cljs.core.truth_(inst_38747)){
var statearr_38764_38802 = state_38760__$1;
(statearr_38764_38802[(1)] = (7));

} else {
var statearr_38765_38803 = state_38760__$1;
(statearr_38765_38803[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (3))){
var inst_38757 = (state_38760[(2)]);
var inst_38758 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_38760__$1 = (function (){var statearr_38766 = state_38760;
(statearr_38766[(7)] = inst_38757);

return statearr_38766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38760__$1,inst_38758);
} else {
if((state_val_38761 === (2))){
var inst_38742 = (state_38760[(8)]);
var inst_38741 = cljs.core.deref.call(null,status);
var inst_38742__$1 = cljs.core._EQ_.call(null,inst_38741,"RUN");
var state_38760__$1 = (function (){var statearr_38767 = state_38760;
(statearr_38767[(8)] = inst_38742__$1);

return statearr_38767;
})();
if(inst_38742__$1){
var statearr_38768_38804 = state_38760__$1;
(statearr_38768_38804[(1)] = (4));

} else {
var statearr_38769_38805 = state_38760__$1;
(statearr_38769_38805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (9))){
var inst_38755 = (state_38760[(2)]);
var state_38760__$1 = state_38760;
var statearr_38770_38806 = state_38760__$1;
(statearr_38770_38806[(2)] = inst_38755);

(statearr_38770_38806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (5))){
var inst_38742 = (state_38760[(8)]);
var state_38760__$1 = state_38760;
var statearr_38771_38807 = state_38760__$1;
(statearr_38771_38807[(2)] = inst_38742);

(statearr_38771_38807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (10))){
var inst_38751 = (state_38760[(2)]);
var state_38760__$1 = (function (){var statearr_38772 = state_38760;
(statearr_38772[(9)] = inst_38751);

return statearr_38772;
})();
var statearr_38773_38808 = state_38760__$1;
(statearr_38773_38808[(2)] = null);

(statearr_38773_38808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38761 === (8))){
var state_38760__$1 = state_38760;
var statearr_38774_38809 = state_38760__$1;
(statearr_38774_38809[(2)] = null);

(statearr_38774_38809[(1)] = (9));


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
});})(c__21234__auto___38799))
;
return ((function (switch__21213__auto__,c__21234__auto___38799){
return (function() {
var csasync$proc$state_machine__21214__auto__ = null;
var csasync$proc$state_machine__21214__auto____0 = (function (){
var statearr_38778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38778[(0)] = csasync$proc$state_machine__21214__auto__);

(statearr_38778[(1)] = (1));

return statearr_38778;
});
var csasync$proc$state_machine__21214__auto____1 = (function (state_38760){
while(true){
var ret_value__21215__auto__ = (function (){try{while(true){
var result__21216__auto__ = switch__21213__auto__.call(null,state_38760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21216__auto__;
}
break;
}
}catch (e38779){if((e38779 instanceof Object)){
var ex__21217__auto__ = e38779;
var statearr_38780_38810 = state_38760;
(statearr_38780_38810[(5)] = ex__21217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38811 = state_38760;
state_38760 = G__38811;
continue;
} else {
return ret_value__21215__auto__;
}
break;
}
});
csasync$proc$state_machine__21214__auto__ = function(state_38760){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21214__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21214__auto____1.call(this,state_38760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21214__auto____0;
csasync$proc$state_machine__21214__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21214__auto____1;
return csasync$proc$state_machine__21214__auto__;
})()
;})(switch__21213__auto__,c__21234__auto___38799))
})();
var state__21236__auto__ = (function (){var statearr_38781 = f__21235__auto__.call(null);
(statearr_38781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21234__auto___38799);

return statearr_38781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21236__auto__);
});})(c__21234__auto___38799))
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