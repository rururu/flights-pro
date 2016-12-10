// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args10954 = [];
var len__9613__auto___11017 = arguments.length;
var i__9614__auto___11018 = (0);
while(true){
if((i__9614__auto___11018 < len__9613__auto___11017)){
args10954.push((arguments[i__9614__auto___11018]));

var G__11019 = (i__9614__auto___11018 + (1));
i__9614__auto___11018 = G__11019;
continue;
} else {
}
break;
}

var G__10956 = args10954.length;
switch (G__10956) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10954.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__10909__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto__){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto__){
return (function (state_10970){
var state_val_10971 = (state_10970[(1)]);
if((state_val_10971 === (1))){
var state_10970__$1 = state_10970;
var statearr_10972_11021 = state_10970__$1;
(statearr_10972_11021[(2)] = null);

(statearr_10972_11021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (2))){
var state_10970__$1 = state_10970;
var statearr_10973_11022 = state_10970__$1;
(statearr_10973_11022[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (3))){
var inst_10968 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10970__$1,inst_10968);
} else {
if((state_val_10971 === (4))){
var inst_10959 = func.call(null);
var inst_10960 = cljs.core.async.timeout.call(null,time_out);
var state_10970__$1 = (function (){var statearr_10975 = state_10970;
(statearr_10975[(7)] = inst_10959);

return statearr_10975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10970__$1,(7),inst_10960);
} else {
if((state_val_10971 === (5))){
var state_10970__$1 = state_10970;
var statearr_10976_11023 = state_10970__$1;
(statearr_10976_11023[(2)] = null);

(statearr_10976_11023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (6))){
var inst_10966 = (state_10970[(2)]);
var state_10970__$1 = state_10970;
var statearr_10977_11024 = state_10970__$1;
(statearr_10977_11024[(2)] = inst_10966);

(statearr_10977_11024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10971 === (7))){
var inst_10962 = (state_10970[(2)]);
var state_10970__$1 = (function (){var statearr_10978 = state_10970;
(statearr_10978[(8)] = inst_10962);

return statearr_10978;
})();
var statearr_10979_11025 = state_10970__$1;
(statearr_10979_11025[(2)] = null);

(statearr_10979_11025[(1)] = (2));


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
var statearr_10983 = [null,null,null,null,null,null,null,null,null];
(statearr_10983[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_10983[(1)] = (1));

return statearr_10983;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_10970){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_10970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e10984){if((e10984 instanceof Object)){
var ex__10892__auto__ = e10984;
var statearr_10985_11026 = state_10970;
(statearr_10985_11026[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11027 = state_10970;
state_10970 = G__11027;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_10970){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_10970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_10986 = f__10910__auto__.call(null);
(statearr_10986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_10986;
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
return (function (state_11000){
var state_val_11001 = (state_11000[(1)]);
if((state_val_11001 === (1))){
var state_11000__$1 = state_11000;
var statearr_11002_11028 = state_11000__$1;
(statearr_11002_11028[(2)] = null);

(statearr_11002_11028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (2))){
var state_11000__$1 = state_11000;
var statearr_11003_11029 = state_11000__$1;
(statearr_11003_11029[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (3))){
var inst_10998 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11000__$1,inst_10998);
} else {
if((state_val_11001 === (4))){
var inst_10989 = func.call(null,param);
var inst_10990 = cljs.core.async.timeout.call(null,time_out);
var state_11000__$1 = (function (){var statearr_11005 = state_11000;
(statearr_11005[(7)] = inst_10989);

return statearr_11005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11000__$1,(7),inst_10990);
} else {
if((state_val_11001 === (5))){
var state_11000__$1 = state_11000;
var statearr_11006_11030 = state_11000__$1;
(statearr_11006_11030[(2)] = null);

(statearr_11006_11030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (6))){
var inst_10996 = (state_11000[(2)]);
var state_11000__$1 = state_11000;
var statearr_11007_11031 = state_11000__$1;
(statearr_11007_11031[(2)] = inst_10996);

(statearr_11007_11031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11001 === (7))){
var inst_10992 = (state_11000[(2)]);
var state_11000__$1 = (function (){var statearr_11008 = state_11000;
(statearr_11008[(8)] = inst_10992);

return statearr_11008;
})();
var statearr_11009_11032 = state_11000__$1;
(statearr_11009_11032[(2)] = null);

(statearr_11009_11032[(1)] = (2));


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
var statearr_11013 = [null,null,null,null,null,null,null,null,null];
(statearr_11013[(0)] = csasync$proc$state_machine__10889__auto__);

(statearr_11013[(1)] = (1));

return statearr_11013;
});
var csasync$proc$state_machine__10889__auto____1 = (function (state_11000){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_11000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e11014){if((e11014 instanceof Object)){
var ex__10892__auto__ = e11014;
var statearr_11015_11033 = state_11000;
(statearr_11015_11033[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11034 = state_11000;
state_11000 = G__11034;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$state_machine__10889__auto__ = function(state_11000){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$state_machine__10889__auto____1.call(this,state_11000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__10889__auto____0;
csasync$proc$state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__10889__auto____1;
return csasync$proc$state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_11016 = f__10910__auto__.call(null);
(statearr_11016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_11016;
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

var c__10909__auto___11119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10909__auto___11119){
return (function (){
var f__10910__auto__ = (function (){var switch__10888__auto__ = ((function (c__10909__auto___11119){
return (function (state_11097){
var state_val_11098 = (state_11097[(1)]);
if((state_val_11098 === (7))){
var inst_11086 = cljs.core.async.timeout.call(null,time_out);
var state_11097__$1 = state_11097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11097__$1,(10),inst_11086);
} else {
if((state_val_11098 === (1))){
var state_11097__$1 = state_11097;
var statearr_11099_11120 = state_11097__$1;
(statearr_11099_11120[(2)] = null);

(statearr_11099_11120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (4))){
var inst_11081 = proc_fn.call(null);
var state_11097__$1 = state_11097;
var statearr_11100_11121 = state_11097__$1;
(statearr_11100_11121[(2)] = inst_11081);

(statearr_11100_11121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (6))){
var inst_11084 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
if(cljs.core.truth_(inst_11084)){
var statearr_11101_11122 = state_11097__$1;
(statearr_11101_11122[(1)] = (7));

} else {
var statearr_11102_11123 = state_11097__$1;
(statearr_11102_11123[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (3))){
var inst_11094 = (state_11097[(2)]);
var inst_11095 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_11097__$1 = (function (){var statearr_11103 = state_11097;
(statearr_11103[(7)] = inst_11094);

return statearr_11103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11097__$1,inst_11095);
} else {
if((state_val_11098 === (2))){
var inst_11079 = (state_11097[(8)]);
var inst_11078 = cljs.core.deref.call(null,status);
var inst_11079__$1 = cljs.core._EQ_.call(null,inst_11078,"RUN");
var state_11097__$1 = (function (){var statearr_11104 = state_11097;
(statearr_11104[(8)] = inst_11079__$1);

return statearr_11104;
})();
if(inst_11079__$1){
var statearr_11105_11124 = state_11097__$1;
(statearr_11105_11124[(1)] = (4));

} else {
var statearr_11106_11125 = state_11097__$1;
(statearr_11106_11125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (9))){
var inst_11092 = (state_11097[(2)]);
var state_11097__$1 = state_11097;
var statearr_11107_11126 = state_11097__$1;
(statearr_11107_11126[(2)] = inst_11092);

(statearr_11107_11126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (5))){
var inst_11079 = (state_11097[(8)]);
var state_11097__$1 = state_11097;
var statearr_11108_11127 = state_11097__$1;
(statearr_11108_11127[(2)] = inst_11079);

(statearr_11108_11127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (10))){
var inst_11088 = (state_11097[(2)]);
var state_11097__$1 = (function (){var statearr_11109 = state_11097;
(statearr_11109[(9)] = inst_11088);

return statearr_11109;
})();
var statearr_11110_11128 = state_11097__$1;
(statearr_11110_11128[(2)] = null);

(statearr_11110_11128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11098 === (8))){
var state_11097__$1 = state_11097;
var statearr_11111_11129 = state_11097__$1;
(statearr_11111_11129[(2)] = null);

(statearr_11111_11129[(1)] = (9));


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
});})(c__10909__auto___11119))
;
return ((function (switch__10888__auto__,c__10909__auto___11119){
return (function() {
var csasync$proc$start_process_$_state_machine__10889__auto__ = null;
var csasync$proc$start_process_$_state_machine__10889__auto____0 = (function (){
var statearr_11115 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11115[(0)] = csasync$proc$start_process_$_state_machine__10889__auto__);

(statearr_11115[(1)] = (1));

return statearr_11115;
});
var csasync$proc$start_process_$_state_machine__10889__auto____1 = (function (state_11097){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_11097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e11116){if((e11116 instanceof Object)){
var ex__10892__auto__ = e11116;
var statearr_11117_11130 = state_11097;
(statearr_11117_11130[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11131 = state_11097;
state_11097 = G__11131;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__10889__auto__ = function(state_11097){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__10889__auto____1.call(this,state_11097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__10889__auto____0;
csasync$proc$start_process_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__10889__auto____1;
return csasync$proc$start_process_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto___11119))
})();
var state__10911__auto__ = (function (){var statearr_11118 = f__10910__auto__.call(null);
(statearr_11118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto___11119);

return statearr_11118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto___11119))
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
return (function (state_11152){
var state_val_11153 = (state_11152[(1)]);
if((state_val_11153 === (1))){
var inst_11147 = cljs.core.async.timeout.call(null,time);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11152__$1,(2),inst_11147);
} else {
if((state_val_11153 === (2))){
var inst_11149 = (state_11152[(2)]);
var inst_11150 = func.call(null);
var state_11152__$1 = (function (){var statearr_11154 = state_11152;
(statearr_11154[(7)] = inst_11149);

return statearr_11154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11152__$1,inst_11150);
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
var statearr_11158 = [null,null,null,null,null,null,null,null];
(statearr_11158[(0)] = csasync$proc$delayer_$_state_machine__10889__auto__);

(statearr_11158[(1)] = (1));

return statearr_11158;
});
var csasync$proc$delayer_$_state_machine__10889__auto____1 = (function (state_11152){
while(true){
var ret_value__10890__auto__ = (function (){try{while(true){
var result__10891__auto__ = switch__10888__auto__.call(null,state_11152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10891__auto__;
}
break;
}
}catch (e11159){if((e11159 instanceof Object)){
var ex__10892__auto__ = e11159;
var statearr_11160_11162 = state_11152;
(statearr_11160_11162[(5)] = ex__10892__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11163 = state_11152;
state_11152 = G__11163;
continue;
} else {
return ret_value__10890__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__10889__auto__ = function(state_11152){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__10889__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__10889__auto____1.call(this,state_11152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__10889__auto____0;
csasync$proc$delayer_$_state_machine__10889__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__10889__auto____1;
return csasync$proc$delayer_$_state_machine__10889__auto__;
})()
;})(switch__10888__auto__,c__10909__auto__))
})();
var state__10911__auto__ = (function (){var statearr_11161 = f__10910__auto__.call(null);
(statearr_11161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10909__auto__);

return statearr_11161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10911__auto__);
});})(c__10909__auto__))
);

return c__10909__auto__;
});

//# sourceMappingURL=proc.js.map