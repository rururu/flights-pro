// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21758 = [];
var len__19542__auto___21821 = arguments.length;
var i__19543__auto___21822 = (0);
while(true){
if((i__19543__auto___21822 < len__19542__auto___21821)){
args21758.push((arguments[i__19543__auto___21822]));

var G__21823 = (i__19543__auto___21822 + (1));
i__19543__auto___21822 = G__21823;
continue;
} else {
}
break;
}

var G__21760 = args21758.length;
switch (G__21760) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21758.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__20497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20497__auto__){
return (function (){
var f__20498__auto__ = (function (){var switch__20476__auto__ = ((function (c__20497__auto__){
return (function (state_21774){
var state_val_21775 = (state_21774[(1)]);
if((state_val_21775 === (1))){
var state_21774__$1 = state_21774;
var statearr_21776_21825 = state_21774__$1;
(statearr_21776_21825[(2)] = null);

(statearr_21776_21825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (2))){
var state_21774__$1 = state_21774;
var statearr_21777_21826 = state_21774__$1;
(statearr_21777_21826[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (3))){
var inst_21772 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21774__$1,inst_21772);
} else {
if((state_val_21775 === (4))){
var inst_21763 = func.call(null);
var inst_21764 = cljs.core.async.timeout.call(null,time_out);
var state_21774__$1 = (function (){var statearr_21779 = state_21774;
(statearr_21779[(7)] = inst_21763);

return statearr_21779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21774__$1,(7),inst_21764);
} else {
if((state_val_21775 === (5))){
var state_21774__$1 = state_21774;
var statearr_21780_21827 = state_21774__$1;
(statearr_21780_21827[(2)] = null);

(statearr_21780_21827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (6))){
var inst_21770 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
var statearr_21781_21828 = state_21774__$1;
(statearr_21781_21828[(2)] = inst_21770);

(statearr_21781_21828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (7))){
var inst_21766 = (state_21774[(2)]);
var state_21774__$1 = (function (){var statearr_21782 = state_21774;
(statearr_21782[(8)] = inst_21766);

return statearr_21782;
})();
var statearr_21783_21829 = state_21774__$1;
(statearr_21783_21829[(2)] = null);

(statearr_21783_21829[(1)] = (2));


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
});})(c__20497__auto__))
;
return ((function (switch__20476__auto__,c__20497__auto__){
return (function() {
var csasync$proc$state_machine__20477__auto__ = null;
var csasync$proc$state_machine__20477__auto____0 = (function (){
var statearr_21787 = [null,null,null,null,null,null,null,null,null];
(statearr_21787[(0)] = csasync$proc$state_machine__20477__auto__);

(statearr_21787[(1)] = (1));

return statearr_21787;
});
var csasync$proc$state_machine__20477__auto____1 = (function (state_21774){
while(true){
var ret_value__20478__auto__ = (function (){try{while(true){
var result__20479__auto__ = switch__20476__auto__.call(null,state_21774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20479__auto__;
}
break;
}
}catch (e21788){if((e21788 instanceof Object)){
var ex__20480__auto__ = e21788;
var statearr_21789_21830 = state_21774;
(statearr_21789_21830[(5)] = ex__20480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21831 = state_21774;
state_21774 = G__21831;
continue;
} else {
return ret_value__20478__auto__;
}
break;
}
});
csasync$proc$state_machine__20477__auto__ = function(state_21774){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20477__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20477__auto____1.call(this,state_21774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20477__auto____0;
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20477__auto____1;
return csasync$proc$state_machine__20477__auto__;
})()
;})(switch__20476__auto__,c__20497__auto__))
})();
var state__20499__auto__ = (function (){var statearr_21790 = f__20498__auto__.call(null);
(statearr_21790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20497__auto__);

return statearr_21790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20499__auto__);
});})(c__20497__auto__))
);

return c__20497__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__20497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20497__auto__){
return (function (){
var f__20498__auto__ = (function (){var switch__20476__auto__ = ((function (c__20497__auto__){
return (function (state_21804){
var state_val_21805 = (state_21804[(1)]);
if((state_val_21805 === (1))){
var state_21804__$1 = state_21804;
var statearr_21806_21832 = state_21804__$1;
(statearr_21806_21832[(2)] = null);

(statearr_21806_21832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (2))){
var state_21804__$1 = state_21804;
var statearr_21807_21833 = state_21804__$1;
(statearr_21807_21833[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (3))){
var inst_21802 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21804__$1,inst_21802);
} else {
if((state_val_21805 === (4))){
var inst_21793 = func.call(null,param);
var inst_21794 = cljs.core.async.timeout.call(null,time_out);
var state_21804__$1 = (function (){var statearr_21809 = state_21804;
(statearr_21809[(7)] = inst_21793);

return statearr_21809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21804__$1,(7),inst_21794);
} else {
if((state_val_21805 === (5))){
var state_21804__$1 = state_21804;
var statearr_21810_21834 = state_21804__$1;
(statearr_21810_21834[(2)] = null);

(statearr_21810_21834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (6))){
var inst_21800 = (state_21804[(2)]);
var state_21804__$1 = state_21804;
var statearr_21811_21835 = state_21804__$1;
(statearr_21811_21835[(2)] = inst_21800);

(statearr_21811_21835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21805 === (7))){
var inst_21796 = (state_21804[(2)]);
var state_21804__$1 = (function (){var statearr_21812 = state_21804;
(statearr_21812[(8)] = inst_21796);

return statearr_21812;
})();
var statearr_21813_21836 = state_21804__$1;
(statearr_21813_21836[(2)] = null);

(statearr_21813_21836[(1)] = (2));


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
});})(c__20497__auto__))
;
return ((function (switch__20476__auto__,c__20497__auto__){
return (function() {
var csasync$proc$state_machine__20477__auto__ = null;
var csasync$proc$state_machine__20477__auto____0 = (function (){
var statearr_21817 = [null,null,null,null,null,null,null,null,null];
(statearr_21817[(0)] = csasync$proc$state_machine__20477__auto__);

(statearr_21817[(1)] = (1));

return statearr_21817;
});
var csasync$proc$state_machine__20477__auto____1 = (function (state_21804){
while(true){
var ret_value__20478__auto__ = (function (){try{while(true){
var result__20479__auto__ = switch__20476__auto__.call(null,state_21804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20479__auto__;
}
break;
}
}catch (e21818){if((e21818 instanceof Object)){
var ex__20480__auto__ = e21818;
var statearr_21819_21837 = state_21804;
(statearr_21819_21837[(5)] = ex__20480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21838 = state_21804;
state_21804 = G__21838;
continue;
} else {
return ret_value__20478__auto__;
}
break;
}
});
csasync$proc$state_machine__20477__auto__ = function(state_21804){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20477__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20477__auto____1.call(this,state_21804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20477__auto____0;
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20477__auto____1;
return csasync$proc$state_machine__20477__auto__;
})()
;})(switch__20476__auto__,c__20497__auto__))
})();
var state__20499__auto__ = (function (){var statearr_21820 = f__20498__auto__.call(null);
(statearr_21820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20497__auto__);

return statearr_21820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20499__auto__);
});})(c__20497__auto__))
);

return c__20497__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args21839 = [];
var len__19542__auto___21926 = arguments.length;
var i__19543__auto___21927 = (0);
while(true){
if((i__19543__auto___21927 < len__19542__auto___21926)){
args21839.push((arguments[i__19543__auto___21927]));

var G__21928 = (i__19543__auto___21927 + (1));
i__19543__auto___21927 = G__21928;
continue;
} else {
}
break;
}

var G__21841 = args21839.length;
switch (G__21841) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21839.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20497__auto___21930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20497__auto___21930){
return (function (){
var f__20498__auto__ = (function (){var switch__20476__auto__ = ((function (c__20497__auto___21930){
return (function (state_21862){
var state_val_21863 = (state_21862[(1)]);
if((state_val_21863 === (7))){
var inst_21851 = cljs.core.async.timeout.call(null,time_out);
var state_21862__$1 = state_21862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21862__$1,(10),inst_21851);
} else {
if((state_val_21863 === (1))){
var state_21862__$1 = state_21862;
var statearr_21864_21931 = state_21862__$1;
(statearr_21864_21931[(2)] = null);

(statearr_21864_21931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (4))){
var inst_21846 = proc_fn.call(null);
var state_21862__$1 = state_21862;
var statearr_21865_21932 = state_21862__$1;
(statearr_21865_21932[(2)] = inst_21846);

(statearr_21865_21932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (6))){
var inst_21849 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
if(cljs.core.truth_(inst_21849)){
var statearr_21866_21933 = state_21862__$1;
(statearr_21866_21933[(1)] = (7));

} else {
var statearr_21867_21934 = state_21862__$1;
(statearr_21867_21934[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (3))){
var inst_21859 = (state_21862[(2)]);
var inst_21860 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21862__$1 = (function (){var statearr_21868 = state_21862;
(statearr_21868[(7)] = inst_21859);

return statearr_21868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21862__$1,inst_21860);
} else {
if((state_val_21863 === (2))){
var inst_21844 = (state_21862[(8)]);
var inst_21843 = cljs.core.deref.call(null,status);
var inst_21844__$1 = cljs.core._EQ_.call(null,inst_21843,"RUN");
var state_21862__$1 = (function (){var statearr_21869 = state_21862;
(statearr_21869[(8)] = inst_21844__$1);

return statearr_21869;
})();
if(inst_21844__$1){
var statearr_21870_21935 = state_21862__$1;
(statearr_21870_21935[(1)] = (4));

} else {
var statearr_21871_21936 = state_21862__$1;
(statearr_21871_21936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (9))){
var inst_21857 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
var statearr_21872_21937 = state_21862__$1;
(statearr_21872_21937[(2)] = inst_21857);

(statearr_21872_21937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (5))){
var inst_21844 = (state_21862[(8)]);
var state_21862__$1 = state_21862;
var statearr_21873_21938 = state_21862__$1;
(statearr_21873_21938[(2)] = inst_21844);

(statearr_21873_21938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (10))){
var inst_21853 = (state_21862[(2)]);
var state_21862__$1 = (function (){var statearr_21874 = state_21862;
(statearr_21874[(9)] = inst_21853);

return statearr_21874;
})();
var statearr_21875_21939 = state_21862__$1;
(statearr_21875_21939[(2)] = null);

(statearr_21875_21939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21863 === (8))){
var state_21862__$1 = state_21862;
var statearr_21876_21940 = state_21862__$1;
(statearr_21876_21940[(2)] = null);

(statearr_21876_21940[(1)] = (9));


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
});})(c__20497__auto___21930))
;
return ((function (switch__20476__auto__,c__20497__auto___21930){
return (function() {
var csasync$proc$state_machine__20477__auto__ = null;
var csasync$proc$state_machine__20477__auto____0 = (function (){
var statearr_21880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21880[(0)] = csasync$proc$state_machine__20477__auto__);

(statearr_21880[(1)] = (1));

return statearr_21880;
});
var csasync$proc$state_machine__20477__auto____1 = (function (state_21862){
while(true){
var ret_value__20478__auto__ = (function (){try{while(true){
var result__20479__auto__ = switch__20476__auto__.call(null,state_21862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20479__auto__;
}
break;
}
}catch (e21881){if((e21881 instanceof Object)){
var ex__20480__auto__ = e21881;
var statearr_21882_21941 = state_21862;
(statearr_21882_21941[(5)] = ex__20480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21942 = state_21862;
state_21862 = G__21942;
continue;
} else {
return ret_value__20478__auto__;
}
break;
}
});
csasync$proc$state_machine__20477__auto__ = function(state_21862){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20477__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20477__auto____1.call(this,state_21862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20477__auto____0;
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20477__auto____1;
return csasync$proc$state_machine__20477__auto__;
})()
;})(switch__20476__auto__,c__20497__auto___21930))
})();
var state__20499__auto__ = (function (){var statearr_21883 = f__20498__auto__.call(null);
(statearr_21883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20497__auto___21930);

return statearr_21883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20499__auto__);
});})(c__20497__auto___21930))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__20497__auto___21943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20497__auto___21943){
return (function (){
var f__20498__auto__ = (function (){var switch__20476__auto__ = ((function (c__20497__auto___21943){
return (function (state_21904){
var state_val_21905 = (state_21904[(1)]);
if((state_val_21905 === (7))){
var inst_21893 = cljs.core.async.timeout.call(null,time_out);
var state_21904__$1 = state_21904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21904__$1,(10),inst_21893);
} else {
if((state_val_21905 === (1))){
var state_21904__$1 = state_21904;
var statearr_21906_21944 = state_21904__$1;
(statearr_21906_21944[(2)] = null);

(statearr_21906_21944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (4))){
var inst_21888 = proc_fn.call(null,param);
var state_21904__$1 = state_21904;
var statearr_21907_21945 = state_21904__$1;
(statearr_21907_21945[(2)] = inst_21888);

(statearr_21907_21945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (6))){
var inst_21891 = (state_21904[(2)]);
var state_21904__$1 = state_21904;
if(cljs.core.truth_(inst_21891)){
var statearr_21908_21946 = state_21904__$1;
(statearr_21908_21946[(1)] = (7));

} else {
var statearr_21909_21947 = state_21904__$1;
(statearr_21909_21947[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (3))){
var inst_21901 = (state_21904[(2)]);
var inst_21902 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21904__$1 = (function (){var statearr_21910 = state_21904;
(statearr_21910[(7)] = inst_21901);

return statearr_21910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21904__$1,inst_21902);
} else {
if((state_val_21905 === (2))){
var inst_21886 = (state_21904[(8)]);
var inst_21885 = cljs.core.deref.call(null,status);
var inst_21886__$1 = cljs.core._EQ_.call(null,inst_21885,"RUN");
var state_21904__$1 = (function (){var statearr_21911 = state_21904;
(statearr_21911[(8)] = inst_21886__$1);

return statearr_21911;
})();
if(inst_21886__$1){
var statearr_21912_21948 = state_21904__$1;
(statearr_21912_21948[(1)] = (4));

} else {
var statearr_21913_21949 = state_21904__$1;
(statearr_21913_21949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (9))){
var inst_21899 = (state_21904[(2)]);
var state_21904__$1 = state_21904;
var statearr_21914_21950 = state_21904__$1;
(statearr_21914_21950[(2)] = inst_21899);

(statearr_21914_21950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (5))){
var inst_21886 = (state_21904[(8)]);
var state_21904__$1 = state_21904;
var statearr_21915_21951 = state_21904__$1;
(statearr_21915_21951[(2)] = inst_21886);

(statearr_21915_21951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (10))){
var inst_21895 = (state_21904[(2)]);
var state_21904__$1 = (function (){var statearr_21916 = state_21904;
(statearr_21916[(9)] = inst_21895);

return statearr_21916;
})();
var statearr_21917_21952 = state_21904__$1;
(statearr_21917_21952[(2)] = null);

(statearr_21917_21952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21905 === (8))){
var state_21904__$1 = state_21904;
var statearr_21918_21953 = state_21904__$1;
(statearr_21918_21953[(2)] = null);

(statearr_21918_21953[(1)] = (9));


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
});})(c__20497__auto___21943))
;
return ((function (switch__20476__auto__,c__20497__auto___21943){
return (function() {
var csasync$proc$state_machine__20477__auto__ = null;
var csasync$proc$state_machine__20477__auto____0 = (function (){
var statearr_21922 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21922[(0)] = csasync$proc$state_machine__20477__auto__);

(statearr_21922[(1)] = (1));

return statearr_21922;
});
var csasync$proc$state_machine__20477__auto____1 = (function (state_21904){
while(true){
var ret_value__20478__auto__ = (function (){try{while(true){
var result__20479__auto__ = switch__20476__auto__.call(null,state_21904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20479__auto__;
}
break;
}
}catch (e21923){if((e21923 instanceof Object)){
var ex__20480__auto__ = e21923;
var statearr_21924_21954 = state_21904;
(statearr_21924_21954[(5)] = ex__20480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21955 = state_21904;
state_21904 = G__21955;
continue;
} else {
return ret_value__20478__auto__;
}
break;
}
});
csasync$proc$state_machine__20477__auto__ = function(state_21904){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__20477__auto____0.call(this);
case 1:
return csasync$proc$state_machine__20477__auto____1.call(this,state_21904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__20477__auto____0;
csasync$proc$state_machine__20477__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__20477__auto____1;
return csasync$proc$state_machine__20477__auto__;
})()
;})(switch__20476__auto__,c__20497__auto___21943))
})();
var state__20499__auto__ = (function (){var statearr_21925 = f__20498__auto__.call(null);
(statearr_21925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20497__auto___21943);

return statearr_21925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20499__auto__);
});})(c__20497__auto___21943))
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
csasync.proc.close_chan = (function csasync$proc$close_chan(chn){
return cljs.core.async.close_BANG_.call(null,chn);
});

//# sourceMappingURL=proc.js.map