// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args21834 = [];
var len__20176__auto___21897 = arguments.length;
var i__20177__auto___21898 = (0);
while(true){
if((i__20177__auto___21898 < len__20176__auto___21897)){
args21834.push((arguments[i__20177__auto___21898]));

var G__21899 = (i__20177__auto___21898 + (1));
i__20177__auto___21898 = G__21899;
continue;
} else {
}
break;
}

var G__21836 = args21834.length;
switch (G__21836) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21834.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__21131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21131__auto__){
return (function (){
var f__21132__auto__ = (function (){var switch__21110__auto__ = ((function (c__21131__auto__){
return (function (state_21850){
var state_val_21851 = (state_21850[(1)]);
if((state_val_21851 === (1))){
var state_21850__$1 = state_21850;
var statearr_21852_21901 = state_21850__$1;
(statearr_21852_21901[(2)] = null);

(statearr_21852_21901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (2))){
var state_21850__$1 = state_21850;
var statearr_21853_21902 = state_21850__$1;
(statearr_21853_21902[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (3))){
var inst_21848 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21850__$1,inst_21848);
} else {
if((state_val_21851 === (4))){
var inst_21839 = func.call(null);
var inst_21840 = cljs.core.async.timeout.call(null,time_out);
var state_21850__$1 = (function (){var statearr_21855 = state_21850;
(statearr_21855[(7)] = inst_21839);

return statearr_21855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21850__$1,(7),inst_21840);
} else {
if((state_val_21851 === (5))){
var state_21850__$1 = state_21850;
var statearr_21856_21903 = state_21850__$1;
(statearr_21856_21903[(2)] = null);

(statearr_21856_21903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (6))){
var inst_21846 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21857_21904 = state_21850__$1;
(statearr_21857_21904[(2)] = inst_21846);

(statearr_21857_21904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21851 === (7))){
var inst_21842 = (state_21850[(2)]);
var state_21850__$1 = (function (){var statearr_21858 = state_21850;
(statearr_21858[(8)] = inst_21842);

return statearr_21858;
})();
var statearr_21859_21905 = state_21850__$1;
(statearr_21859_21905[(2)] = null);

(statearr_21859_21905[(1)] = (2));


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
});})(c__21131__auto__))
;
return ((function (switch__21110__auto__,c__21131__auto__){
return (function() {
var csasync$proc$state_machine__21111__auto__ = null;
var csasync$proc$state_machine__21111__auto____0 = (function (){
var statearr_21863 = [null,null,null,null,null,null,null,null,null];
(statearr_21863[(0)] = csasync$proc$state_machine__21111__auto__);

(statearr_21863[(1)] = (1));

return statearr_21863;
});
var csasync$proc$state_machine__21111__auto____1 = (function (state_21850){
while(true){
var ret_value__21112__auto__ = (function (){try{while(true){
var result__21113__auto__ = switch__21110__auto__.call(null,state_21850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21113__auto__;
}
break;
}
}catch (e21864){if((e21864 instanceof Object)){
var ex__21114__auto__ = e21864;
var statearr_21865_21906 = state_21850;
(statearr_21865_21906[(5)] = ex__21114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21907 = state_21850;
state_21850 = G__21907;
continue;
} else {
return ret_value__21112__auto__;
}
break;
}
});
csasync$proc$state_machine__21111__auto__ = function(state_21850){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21111__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21111__auto____1.call(this,state_21850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21111__auto____0;
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21111__auto____1;
return csasync$proc$state_machine__21111__auto__;
})()
;})(switch__21110__auto__,c__21131__auto__))
})();
var state__21133__auto__ = (function (){var statearr_21866 = f__21132__auto__.call(null);
(statearr_21866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21131__auto__);

return statearr_21866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21133__auto__);
});})(c__21131__auto__))
);

return c__21131__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__21131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21131__auto__){
return (function (){
var f__21132__auto__ = (function (){var switch__21110__auto__ = ((function (c__21131__auto__){
return (function (state_21880){
var state_val_21881 = (state_21880[(1)]);
if((state_val_21881 === (1))){
var state_21880__$1 = state_21880;
var statearr_21882_21908 = state_21880__$1;
(statearr_21882_21908[(2)] = null);

(statearr_21882_21908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (2))){
var state_21880__$1 = state_21880;
var statearr_21883_21909 = state_21880__$1;
(statearr_21883_21909[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (3))){
var inst_21878 = (state_21880[(2)]);
var state_21880__$1 = state_21880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21880__$1,inst_21878);
} else {
if((state_val_21881 === (4))){
var inst_21869 = func.call(null,param);
var inst_21870 = cljs.core.async.timeout.call(null,time_out);
var state_21880__$1 = (function (){var statearr_21885 = state_21880;
(statearr_21885[(7)] = inst_21869);

return statearr_21885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21880__$1,(7),inst_21870);
} else {
if((state_val_21881 === (5))){
var state_21880__$1 = state_21880;
var statearr_21886_21910 = state_21880__$1;
(statearr_21886_21910[(2)] = null);

(statearr_21886_21910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (6))){
var inst_21876 = (state_21880[(2)]);
var state_21880__$1 = state_21880;
var statearr_21887_21911 = state_21880__$1;
(statearr_21887_21911[(2)] = inst_21876);

(statearr_21887_21911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21881 === (7))){
var inst_21872 = (state_21880[(2)]);
var state_21880__$1 = (function (){var statearr_21888 = state_21880;
(statearr_21888[(8)] = inst_21872);

return statearr_21888;
})();
var statearr_21889_21912 = state_21880__$1;
(statearr_21889_21912[(2)] = null);

(statearr_21889_21912[(1)] = (2));


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
});})(c__21131__auto__))
;
return ((function (switch__21110__auto__,c__21131__auto__){
return (function() {
var csasync$proc$state_machine__21111__auto__ = null;
var csasync$proc$state_machine__21111__auto____0 = (function (){
var statearr_21893 = [null,null,null,null,null,null,null,null,null];
(statearr_21893[(0)] = csasync$proc$state_machine__21111__auto__);

(statearr_21893[(1)] = (1));

return statearr_21893;
});
var csasync$proc$state_machine__21111__auto____1 = (function (state_21880){
while(true){
var ret_value__21112__auto__ = (function (){try{while(true){
var result__21113__auto__ = switch__21110__auto__.call(null,state_21880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21113__auto__;
}
break;
}
}catch (e21894){if((e21894 instanceof Object)){
var ex__21114__auto__ = e21894;
var statearr_21895_21913 = state_21880;
(statearr_21895_21913[(5)] = ex__21114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21914 = state_21880;
state_21880 = G__21914;
continue;
} else {
return ret_value__21112__auto__;
}
break;
}
});
csasync$proc$state_machine__21111__auto__ = function(state_21880){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21111__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21111__auto____1.call(this,state_21880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21111__auto____0;
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21111__auto____1;
return csasync$proc$state_machine__21111__auto__;
})()
;})(switch__21110__auto__,c__21131__auto__))
})();
var state__21133__auto__ = (function (){var statearr_21896 = f__21132__auto__.call(null);
(statearr_21896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21131__auto__);

return statearr_21896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21133__auto__);
});})(c__21131__auto__))
);

return c__21131__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(var_args){
var args21915 = [];
var len__20176__auto___22002 = arguments.length;
var i__20177__auto___22003 = (0);
while(true){
if((i__20177__auto___22003 < len__20176__auto___22002)){
args21915.push((arguments[i__20177__auto___22003]));

var G__22004 = (i__20177__auto___22003 + (1));
i__20177__auto___22003 = G__22004;
continue;
} else {
}
break;
}

var G__21917 = args21915.length;
switch (G__21917) {
case 3:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21915.length)].join('')));

}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$3 = (function (status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21131__auto___22006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21131__auto___22006){
return (function (){
var f__21132__auto__ = (function (){var switch__21110__auto__ = ((function (c__21131__auto___22006){
return (function (state_21938){
var state_val_21939 = (state_21938[(1)]);
if((state_val_21939 === (7))){
var inst_21927 = cljs.core.async.timeout.call(null,time_out);
var state_21938__$1 = state_21938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21938__$1,(10),inst_21927);
} else {
if((state_val_21939 === (1))){
var state_21938__$1 = state_21938;
var statearr_21940_22007 = state_21938__$1;
(statearr_21940_22007[(2)] = null);

(statearr_21940_22007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (4))){
var inst_21922 = proc_fn.call(null);
var state_21938__$1 = state_21938;
var statearr_21941_22008 = state_21938__$1;
(statearr_21941_22008[(2)] = inst_21922);

(statearr_21941_22008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (6))){
var inst_21925 = (state_21938[(2)]);
var state_21938__$1 = state_21938;
if(cljs.core.truth_(inst_21925)){
var statearr_21942_22009 = state_21938__$1;
(statearr_21942_22009[(1)] = (7));

} else {
var statearr_21943_22010 = state_21938__$1;
(statearr_21943_22010[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (3))){
var inst_21935 = (state_21938[(2)]);
var inst_21936 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21938__$1 = (function (){var statearr_21944 = state_21938;
(statearr_21944[(7)] = inst_21935);

return statearr_21944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21938__$1,inst_21936);
} else {
if((state_val_21939 === (2))){
var inst_21920 = (state_21938[(8)]);
var inst_21919 = cljs.core.deref.call(null,status);
var inst_21920__$1 = cljs.core._EQ_.call(null,inst_21919,"RUN");
var state_21938__$1 = (function (){var statearr_21945 = state_21938;
(statearr_21945[(8)] = inst_21920__$1);

return statearr_21945;
})();
if(inst_21920__$1){
var statearr_21946_22011 = state_21938__$1;
(statearr_21946_22011[(1)] = (4));

} else {
var statearr_21947_22012 = state_21938__$1;
(statearr_21947_22012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (9))){
var inst_21933 = (state_21938[(2)]);
var state_21938__$1 = state_21938;
var statearr_21948_22013 = state_21938__$1;
(statearr_21948_22013[(2)] = inst_21933);

(statearr_21948_22013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (5))){
var inst_21920 = (state_21938[(8)]);
var state_21938__$1 = state_21938;
var statearr_21949_22014 = state_21938__$1;
(statearr_21949_22014[(2)] = inst_21920);

(statearr_21949_22014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (10))){
var inst_21929 = (state_21938[(2)]);
var state_21938__$1 = (function (){var statearr_21950 = state_21938;
(statearr_21950[(9)] = inst_21929);

return statearr_21950;
})();
var statearr_21951_22015 = state_21938__$1;
(statearr_21951_22015[(2)] = null);

(statearr_21951_22015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (8))){
var state_21938__$1 = state_21938;
var statearr_21952_22016 = state_21938__$1;
(statearr_21952_22016[(2)] = null);

(statearr_21952_22016[(1)] = (9));


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
});})(c__21131__auto___22006))
;
return ((function (switch__21110__auto__,c__21131__auto___22006){
return (function() {
var csasync$proc$state_machine__21111__auto__ = null;
var csasync$proc$state_machine__21111__auto____0 = (function (){
var statearr_21956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21956[(0)] = csasync$proc$state_machine__21111__auto__);

(statearr_21956[(1)] = (1));

return statearr_21956;
});
var csasync$proc$state_machine__21111__auto____1 = (function (state_21938){
while(true){
var ret_value__21112__auto__ = (function (){try{while(true){
var result__21113__auto__ = switch__21110__auto__.call(null,state_21938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21113__auto__;
}
break;
}
}catch (e21957){if((e21957 instanceof Object)){
var ex__21114__auto__ = e21957;
var statearr_21958_22017 = state_21938;
(statearr_21958_22017[(5)] = ex__21114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22018 = state_21938;
state_21938 = G__22018;
continue;
} else {
return ret_value__21112__auto__;
}
break;
}
});
csasync$proc$state_machine__21111__auto__ = function(state_21938){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21111__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21111__auto____1.call(this,state_21938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21111__auto____0;
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21111__auto____1;
return csasync$proc$state_machine__21111__auto__;
})()
;})(switch__21110__auto__,c__21131__auto___22006))
})();
var state__21133__auto__ = (function (){var statearr_21959 = f__21132__auto__.call(null);
(statearr_21959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21131__auto___22006);

return statearr_21959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21133__auto__);
});})(c__21131__auto___22006))
);


return cljs.core.deref.call(null,status);
} else {
return null;
}
});

csasync.proc.start_process.cljs$core$IFn$_invoke$arity$4 = (function (status,proc_fn,param,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"STOP")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__21131__auto___22019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21131__auto___22019){
return (function (){
var f__21132__auto__ = (function (){var switch__21110__auto__ = ((function (c__21131__auto___22019){
return (function (state_21980){
var state_val_21981 = (state_21980[(1)]);
if((state_val_21981 === (7))){
var inst_21969 = cljs.core.async.timeout.call(null,time_out);
var state_21980__$1 = state_21980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21980__$1,(10),inst_21969);
} else {
if((state_val_21981 === (1))){
var state_21980__$1 = state_21980;
var statearr_21982_22020 = state_21980__$1;
(statearr_21982_22020[(2)] = null);

(statearr_21982_22020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (4))){
var inst_21964 = proc_fn.call(null,param);
var state_21980__$1 = state_21980;
var statearr_21983_22021 = state_21980__$1;
(statearr_21983_22021[(2)] = inst_21964);

(statearr_21983_22021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (6))){
var inst_21967 = (state_21980[(2)]);
var state_21980__$1 = state_21980;
if(cljs.core.truth_(inst_21967)){
var statearr_21984_22022 = state_21980__$1;
(statearr_21984_22022[(1)] = (7));

} else {
var statearr_21985_22023 = state_21980__$1;
(statearr_21985_22023[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (3))){
var inst_21977 = (state_21980[(2)]);
var inst_21978 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_21980__$1 = (function (){var statearr_21986 = state_21980;
(statearr_21986[(7)] = inst_21977);

return statearr_21986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21980__$1,inst_21978);
} else {
if((state_val_21981 === (2))){
var inst_21962 = (state_21980[(8)]);
var inst_21961 = cljs.core.deref.call(null,status);
var inst_21962__$1 = cljs.core._EQ_.call(null,inst_21961,"RUN");
var state_21980__$1 = (function (){var statearr_21987 = state_21980;
(statearr_21987[(8)] = inst_21962__$1);

return statearr_21987;
})();
if(inst_21962__$1){
var statearr_21988_22024 = state_21980__$1;
(statearr_21988_22024[(1)] = (4));

} else {
var statearr_21989_22025 = state_21980__$1;
(statearr_21989_22025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (9))){
var inst_21975 = (state_21980[(2)]);
var state_21980__$1 = state_21980;
var statearr_21990_22026 = state_21980__$1;
(statearr_21990_22026[(2)] = inst_21975);

(statearr_21990_22026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (5))){
var inst_21962 = (state_21980[(8)]);
var state_21980__$1 = state_21980;
var statearr_21991_22027 = state_21980__$1;
(statearr_21991_22027[(2)] = inst_21962);

(statearr_21991_22027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (10))){
var inst_21971 = (state_21980[(2)]);
var state_21980__$1 = (function (){var statearr_21992 = state_21980;
(statearr_21992[(9)] = inst_21971);

return statearr_21992;
})();
var statearr_21993_22028 = state_21980__$1;
(statearr_21993_22028[(2)] = null);

(statearr_21993_22028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21981 === (8))){
var state_21980__$1 = state_21980;
var statearr_21994_22029 = state_21980__$1;
(statearr_21994_22029[(2)] = null);

(statearr_21994_22029[(1)] = (9));


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
});})(c__21131__auto___22019))
;
return ((function (switch__21110__auto__,c__21131__auto___22019){
return (function() {
var csasync$proc$state_machine__21111__auto__ = null;
var csasync$proc$state_machine__21111__auto____0 = (function (){
var statearr_21998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21998[(0)] = csasync$proc$state_machine__21111__auto__);

(statearr_21998[(1)] = (1));

return statearr_21998;
});
var csasync$proc$state_machine__21111__auto____1 = (function (state_21980){
while(true){
var ret_value__21112__auto__ = (function (){try{while(true){
var result__21113__auto__ = switch__21110__auto__.call(null,state_21980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21113__auto__;
}
break;
}
}catch (e21999){if((e21999 instanceof Object)){
var ex__21114__auto__ = e21999;
var statearr_22000_22030 = state_21980;
(statearr_22000_22030[(5)] = ex__21114__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22031 = state_21980;
state_21980 = G__22031;
continue;
} else {
return ret_value__21112__auto__;
}
break;
}
});
csasync$proc$state_machine__21111__auto__ = function(state_21980){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21111__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21111__auto____1.call(this,state_21980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21111__auto____0;
csasync$proc$state_machine__21111__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21111__auto____1;
return csasync$proc$state_machine__21111__auto__;
})()
;})(switch__21110__auto__,c__21131__auto___22019))
})();
var state__21133__auto__ = (function (){var statearr_22001 = f__21132__auto__.call(null);
(statearr_22001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21131__auto___22019);

return statearr_22001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21133__auto__);
});})(c__21131__auto___22019))
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