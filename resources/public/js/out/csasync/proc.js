// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args23947 = [];
var len__9613__auto___24010 = arguments.length;
var i__9614__auto___24011 = (0);
while(true){
if((i__9614__auto___24011 < len__9613__auto___24010)){
args23947.push((arguments[i__9614__auto___24011]));

var G__24012 = (i__9614__auto___24011 + (1));
i__9614__auto___24011 = G__24012;
continue;
} else {
}
break;
}

var G__23949 = args23947.length;
switch (G__23949) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23947.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_23963){
var state_val_23964 = (state_23963[(1)]);
if((state_val_23964 === (1))){
var state_23963__$1 = state_23963;
var statearr_23965_24014 = state_23963__$1;
(statearr_23965_24014[(2)] = null);

(statearr_23965_24014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (2))){
var state_23963__$1 = state_23963;
var statearr_23966_24015 = state_23963__$1;
(statearr_23966_24015[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (3))){
var inst_23961 = (state_23963[(2)]);
var state_23963__$1 = state_23963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23963__$1,inst_23961);
} else {
if((state_val_23964 === (4))){
var inst_23952 = func.call(null);
var inst_23953 = cljs.core.async.timeout.call(null,time_out);
var state_23963__$1 = (function (){var statearr_23968 = state_23963;
(statearr_23968[(7)] = inst_23952);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23963__$1,(7),inst_23953);
} else {
if((state_val_23964 === (5))){
var state_23963__$1 = state_23963;
var statearr_23969_24016 = state_23963__$1;
(statearr_23969_24016[(2)] = null);

(statearr_23969_24016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (6))){
var inst_23959 = (state_23963[(2)]);
var state_23963__$1 = state_23963;
var statearr_23970_24017 = state_23963__$1;
(statearr_23970_24017[(2)] = inst_23959);

(statearr_23970_24017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23964 === (7))){
var inst_23955 = (state_23963[(2)]);
var state_23963__$1 = (function (){var statearr_23971 = state_23963;
(statearr_23971[(8)] = inst_23955);

return statearr_23971;
})();
var statearr_23972_24018 = state_23963__$1;
(statearr_23972_24018[(2)] = null);

(statearr_23972_24018[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null,null,null];
(statearr_23976[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_23963){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_23963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__10892__auto__ = e23977;
var statearr_23978_24019 = state_23963;
(statearr_23978_24019[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24020 = state_23963;
state_23963 = G__24020;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_23963){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_23979 = f__10910__auto__.call(null);
(statearr_23979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_23993){
var state_val_23994 = (state_23993[(1)]);
if((state_val_23994 === (1))){
var state_23993__$1 = state_23993;
var statearr_23995_24021 = state_23993__$1;
(statearr_23995_24021[(2)] = null);

(statearr_23995_24021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (2))){
var state_23993__$1 = state_23993;
var statearr_23996_24022 = state_23993__$1;
(statearr_23996_24022[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (3))){
var inst_23991 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23993__$1,inst_23991);
} else {
if((state_val_23994 === (4))){
var inst_23982 = func.call(null,param);
var inst_23983 = cljs.core.async.timeout.call(null,time_out);
var state_23993__$1 = (function (){var statearr_23998 = state_23993;
(statearr_23998[(7)] = inst_23982);

return statearr_23998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(7),inst_23983);
} else {
if((state_val_23994 === (5))){
var state_23993__$1 = state_23993;
var statearr_23999_24023 = state_23993__$1;
(statearr_23999_24023[(2)] = null);

(statearr_23999_24023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (6))){
var inst_23989 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24000_24024 = state_23993__$1;
(statearr_24000_24024[(2)] = inst_23989);

(statearr_24000_24024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (7))){
var inst_23985 = (state_23993[(2)]);
var state_23993__$1 = (function (){var statearr_24001 = state_23993;
(statearr_24001[(8)] = inst_23985);

return statearr_24001;
})();
var statearr_24002_24025 = state_23993__$1;
(statearr_24002_24025[(2)] = null);

(statearr_24002_24025[(1)] = (2));


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
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$state_machine__10889__auto__ = null;
var csasync$proc$state_machine__10889__auto____0 = (function (){
var statearr_24006 = [null,null,null,null,null,null,null,null,null];
(statearr_24006[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_24006[(1)] = (1));

return statearr_24006;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_23993){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_23993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e24007){if((e24007 instanceof Object)){
var ex__10892__auto__ = e24007;
var statearr_24008_24026 = state_23993;
(statearr_24008_24026[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24027 = state_23993;
state_23993 = G__24027;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_23993){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_24009 = f__10910__auto__.call(null);
(statearr_24009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_24009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__10909__auto___24112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto___24112){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto___24112){
return (function (state_24090){
var state_val_24091 = (state_24090[(1)]);
if((state_val_24091 === (7))){
var inst_24079 = cljs.core.async.timeout.call(null,time_out);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24090__$1,(10),inst_24079);
} else {
if((state_val_24091 === (1))){
var state_24090__$1 = state_24090;
var statearr_24092_24113 = state_24090__$1;
(statearr_24092_24113[(2)] = null);

(statearr_24092_24113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (4))){
var inst_24074 = proc_fn.call(null);
var state_24090__$1 = state_24090;
var statearr_24093_24114 = state_24090__$1;
(statearr_24093_24114[(2)] = inst_24074);

(statearr_24093_24114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (6))){
var inst_24077 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24077)){
var statearr_24094_24115 = state_24090__$1;
(statearr_24094_24115[(1)] = (7));

} else {
var statearr_24095_24116 = state_24090__$1;
(statearr_24095_24116[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (3))){
var inst_24087 = (state_24090[(2)]);
var inst_24088 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_24090__$1 = (function (){var statearr_24096 = state_24090;
(statearr_24096[(7)] = inst_24087);

return statearr_24096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24090__$1,inst_24088);
} else {
if((state_val_24091 === (2))){
var inst_24072 = (state_24090[(8)]);
var inst_24071 = cljs.core.deref.call(null,status);
var inst_24072__$1 = cljs.core._EQ_.call(null,inst_24071,"RUN");
var state_24090__$1 = (function (){var statearr_24097 = state_24090;
(statearr_24097[(8)] = inst_24072__$1);

return statearr_24097;
})();
if(inst_24072__$1){
var statearr_24098_24117 = state_24090__$1;
(statearr_24098_24117[(1)] = (4));

} else {
var statearr_24099_24118 = state_24090__$1;
(statearr_24099_24118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (9))){
var inst_24085 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24100_24119 = state_24090__$1;
(statearr_24100_24119[(2)] = inst_24085);

(statearr_24100_24119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (5))){
var inst_24072 = (state_24090[(8)]);
var state_24090__$1 = state_24090;
var statearr_24101_24120 = state_24090__$1;
(statearr_24101_24120[(2)] = inst_24072);

(statearr_24101_24120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (10))){
var inst_24081 = (state_24090[(2)]);
var state_24090__$1 = (function (){var statearr_24102 = state_24090;
(statearr_24102[(9)] = inst_24081);

return statearr_24102;
})();
var statearr_24103_24121 = state_24090__$1;
(statearr_24103_24121[(2)] = null);

(statearr_24103_24121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (8))){
var state_24090__$1 = state_24090;
var statearr_24104_24122 = state_24090__$1;
(statearr_24104_24122[(2)] = null);

(statearr_24104_24122[(1)] = (9));


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
});})(c__10909__auto___24112))
;
return ((function (switch__10888__auto__,c__10909__auto___24112){
return (function() {
var csasync$proc$start_process_$_state_machine__10889__auto__ = null;
var csasync$proc$start_process_$_state_machine__10889__auto____0 = (function (){
var statearr_24108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24108[(0)] = csasync$proc$start_process_$_state_machine__10889__auto__);

(statearr_24108[(1)] = (1));

return statearr_24108;
});
var csasync$proc$start_process_$_state_machine__10889__auto____1 = (function (state_24090){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_24090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object)){
var ex__10892__auto__ = e24109;
var statearr_24110_24123 = state_24090;
(statearr_24110_24123[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24124 = state_24090;
state_24090 = G__24124;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__10889__auto__ = function(state_24090){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__10889__auto____1.call(this,state_24090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__10889__auto____0;
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__10889__auto____1;
return csasync$proc$start_process_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto___24112))
})();
var state__10911__auto__ = (function (){var statearr_24111 = f__10910__auto__.call(null);
(statearr_24111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto___24112);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto___24112))
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
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_24145){
var state_val_24146 = (state_24145[(1)]);
if((state_val_24146 === (1))){
var inst_24140 = cljs.core.async.timeout.call(null,time);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24145__$1,(2),inst_24140);
} else {
if((state_val_24146 === (2))){
var inst_24142 = (state_24145[(2)]);
var inst_24143 = func.call(null);
var state_24145__$1 = (function (){var statearr_24147 = state_24145;
(statearr_24147[(7)] = inst_24142);

return statearr_24147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24145__$1,inst_24143);
} else {
return null;
}
}
});})(c__10909__auto__))
;
return ((function (switch__10888__auto__,c__10909__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__10889__auto__ = null;
var csasync$proc$delayer_$_state_machine__10889__auto____0 = (function (){
var statearr_24151 = [null,null,null,null,null,null,null,null];
(statearr_24151[(0)] = csasync$proc$delayer_$_state_machine__10889__auto__);

(statearr_24151[(1)] = (1));

return statearr_24151;
});
var csasync$proc$delayer_$_state_machine__10889__auto____1 = (function (state_24145){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_24145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e24152){if((e24152 instanceof Object)){
var ex__10892__auto__ = e24152;
var statearr_24153_24155 = state_24145;
(statearr_24153_24155[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24156 = state_24145;
state_24145 = G__24156;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__10889__auto__ = function(state_24145){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__10889__auto____1.call(this,state_24145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__10889__auto____0;
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__10889__auto____1;
return csasync$proc$delayer_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_24154 = f__10910__auto__.call(null);
(statearr_24154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_24154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

//# sourceMappingURL=proc.js.map