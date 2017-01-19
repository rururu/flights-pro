// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args33066 = [];
var len__31959__auto___33129 = arguments.length;
var i__31960__auto___33130 = (0);
while(true){
if((i__31960__auto___33130 < len__31959__auto___33129)){
args33066.push((arguments[i__31960__auto___33130]));

var G__33131 = (i__31960__auto___33130 + (1));
i__31960__auto___33130 = G__33131;
continue;
} else {
}
break;
}

var G__33068 = args33066.length;
switch (G__33068) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33066.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__33021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33021__auto__){
return (function (){
var f__33022__auto__ = (function (){var switch__33000__auto__ = ((function (c__33021__auto__){
return (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (1))){
var state_33082__$1 = state_33082;
var statearr_33084_33133 = state_33082__$1;
(statearr_33084_33133[(2)] = null);

(statearr_33084_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (2))){
var state_33082__$1 = state_33082;
var statearr_33085_33134 = state_33082__$1;
(statearr_33085_33134[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (3))){
var inst_33080 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (4))){
var inst_33071 = func.call(null);
var inst_33072 = cljs.core.async.timeout.call(null,time_out);
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(7)] = inst_33071);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33082__$1,(7),inst_33072);
} else {
if((state_val_33083 === (5))){
var state_33082__$1 = state_33082;
var statearr_33088_33135 = state_33082__$1;
(statearr_33088_33135[(2)] = null);

(statearr_33088_33135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (6))){
var inst_33078 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33089_33136 = state_33082__$1;
(statearr_33089_33136[(2)] = inst_33078);

(statearr_33089_33136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (7))){
var inst_33074 = (state_33082[(2)]);
var state_33082__$1 = (function (){var statearr_33090 = state_33082;
(statearr_33090[(8)] = inst_33074);

return statearr_33090;
})();
var statearr_33091_33137 = state_33082__$1;
(statearr_33091_33137[(2)] = null);

(statearr_33091_33137[(1)] = (2));


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
});})(c__33021__auto__))
;
return ((function (switch__33000__auto__,c__33021__auto__){
return (function() {
var csasync$proc$state_machine__33001__auto__ = null;
var csasync$proc$state_machine__33001__auto____0 = (function (){
var statearr_33095 = [null,null,null,null,null,null,null,null,null];
(statearr_33095[(0)] = csasync$proc$state_machine__33001__auto__);

(statearr_33095[(1)] = (1));

return statearr_33095;
});
var csasync$proc$state_machine__33001__auto____1 = (function (state_33082){
while(true){
var ret_value__33002__auto__ = (function (){try{while(true){
var result__33003__auto__ = switch__33000__auto__.call(null,state_33082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33003__auto__;
}
break;
}
}catch (e33096){if((e33096 instanceof Object)){
var ex__33004__auto__ = e33096;
var statearr_33097_33138 = state_33082;
(statearr_33097_33138[(5)] = ex__33004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33139 = state_33082;
state_33082 = G__33139;
continue;
} else {
return ret_value__33002__auto__;
}
break;
}
});
csasync$proc$state_machine__33001__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__33001__auto____0.call(this);
case 1:
return csasync$proc$state_machine__33001__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__33001__auto____0;
csasync$proc$state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__33001__auto____1;
return csasync$proc$state_machine__33001__auto__;
})()
;})(switch__33000__auto__,c__33021__auto__))
})();
var state__33023__auto__ = (function (){var statearr_33098 = f__33022__auto__.call(null);
(statearr_33098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33021__auto__);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33023__auto__);
});})(c__33021__auto__))
);

return c__33021__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__33021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33021__auto__){
return (function (){
var f__33022__auto__ = (function (){var switch__33000__auto__ = ((function (c__33021__auto__){
return (function (state_33112){
var state_val_33113 = (state_33112[(1)]);
if((state_val_33113 === (1))){
var state_33112__$1 = state_33112;
var statearr_33114_33140 = state_33112__$1;
(statearr_33114_33140[(2)] = null);

(statearr_33114_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (2))){
var state_33112__$1 = state_33112;
var statearr_33115_33141 = state_33112__$1;
(statearr_33115_33141[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (3))){
var inst_33110 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33112__$1,inst_33110);
} else {
if((state_val_33113 === (4))){
var inst_33101 = func.call(null,param);
var inst_33102 = cljs.core.async.timeout.call(null,time_out);
var state_33112__$1 = (function (){var statearr_33117 = state_33112;
(statearr_33117[(7)] = inst_33101);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33112__$1,(7),inst_33102);
} else {
if((state_val_33113 === (5))){
var state_33112__$1 = state_33112;
var statearr_33118_33142 = state_33112__$1;
(statearr_33118_33142[(2)] = null);

(statearr_33118_33142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (6))){
var inst_33108 = (state_33112[(2)]);
var state_33112__$1 = state_33112;
var statearr_33119_33143 = state_33112__$1;
(statearr_33119_33143[(2)] = inst_33108);

(statearr_33119_33143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33113 === (7))){
var inst_33104 = (state_33112[(2)]);
var state_33112__$1 = (function (){var statearr_33120 = state_33112;
(statearr_33120[(8)] = inst_33104);

return statearr_33120;
})();
var statearr_33121_33144 = state_33112__$1;
(statearr_33121_33144[(2)] = null);

(statearr_33121_33144[(1)] = (2));


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
});})(c__33021__auto__))
;
return ((function (switch__33000__auto__,c__33021__auto__){
return (function() {
var csasync$proc$state_machine__33001__auto__ = null;
var csasync$proc$state_machine__33001__auto____0 = (function (){
var statearr_33125 = [null,null,null,null,null,null,null,null,null];
(statearr_33125[(0)] = csasync$proc$state_machine__33001__auto__);

(statearr_33125[(1)] = (1));

return statearr_33125;
});
var csasync$proc$state_machine__33001__auto____1 = (function (state_33112){
while(true){
var ret_value__33002__auto__ = (function (){try{while(true){
var result__33003__auto__ = switch__33000__auto__.call(null,state_33112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33003__auto__;
}
break;
}
}catch (e33126){if((e33126 instanceof Object)){
var ex__33004__auto__ = e33126;
var statearr_33127_33145 = state_33112;
(statearr_33127_33145[(5)] = ex__33004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33146 = state_33112;
state_33112 = G__33146;
continue;
} else {
return ret_value__33002__auto__;
}
break;
}
});
csasync$proc$state_machine__33001__auto__ = function(state_33112){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__33001__auto____0.call(this);
case 1:
return csasync$proc$state_machine__33001__auto____1.call(this,state_33112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__33001__auto____0;
csasync$proc$state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__33001__auto____1;
return csasync$proc$state_machine__33001__auto__;
})()
;})(switch__33000__auto__,c__33021__auto__))
})();
var state__33023__auto__ = (function (){var statearr_33128 = f__33022__auto__.call(null);
(statearr_33128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33021__auto__);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33023__auto__);
});})(c__33021__auto__))
);

return c__33021__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__33021__auto___33231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33021__auto___33231){
return (function (){
var f__33022__auto__ = (function (){var switch__33000__auto__ = ((function (c__33021__auto___33231){
return (function (state_33209){
var state_val_33210 = (state_33209[(1)]);
if((state_val_33210 === (7))){
var inst_33198 = cljs.core.async.timeout.call(null,time_out);
var state_33209__$1 = state_33209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33209__$1,(10),inst_33198);
} else {
if((state_val_33210 === (1))){
var state_33209__$1 = state_33209;
var statearr_33211_33232 = state_33209__$1;
(statearr_33211_33232[(2)] = null);

(statearr_33211_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (4))){
var inst_33193 = proc_fn.call(null);
var state_33209__$1 = state_33209;
var statearr_33212_33233 = state_33209__$1;
(statearr_33212_33233[(2)] = inst_33193);

(statearr_33212_33233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (6))){
var inst_33196 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
if(cljs.core.truth_(inst_33196)){
var statearr_33213_33234 = state_33209__$1;
(statearr_33213_33234[(1)] = (7));

} else {
var statearr_33214_33235 = state_33209__$1;
(statearr_33214_33235[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (3))){
var inst_33206 = (state_33209[(2)]);
var inst_33207 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_33209__$1 = (function (){var statearr_33215 = state_33209;
(statearr_33215[(7)] = inst_33206);

return statearr_33215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33209__$1,inst_33207);
} else {
if((state_val_33210 === (2))){
var inst_33191 = (state_33209[(8)]);
var inst_33190 = cljs.core.deref.call(null,status);
var inst_33191__$1 = cljs.core._EQ_.call(null,inst_33190,"RUN");
var state_33209__$1 = (function (){var statearr_33216 = state_33209;
(statearr_33216[(8)] = inst_33191__$1);

return statearr_33216;
})();
if(inst_33191__$1){
var statearr_33217_33236 = state_33209__$1;
(statearr_33217_33236[(1)] = (4));

} else {
var statearr_33218_33237 = state_33209__$1;
(statearr_33218_33237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (9))){
var inst_33204 = (state_33209[(2)]);
var state_33209__$1 = state_33209;
var statearr_33219_33238 = state_33209__$1;
(statearr_33219_33238[(2)] = inst_33204);

(statearr_33219_33238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (5))){
var inst_33191 = (state_33209[(8)]);
var state_33209__$1 = state_33209;
var statearr_33220_33239 = state_33209__$1;
(statearr_33220_33239[(2)] = inst_33191);

(statearr_33220_33239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (10))){
var inst_33200 = (state_33209[(2)]);
var state_33209__$1 = (function (){var statearr_33221 = state_33209;
(statearr_33221[(9)] = inst_33200);

return statearr_33221;
})();
var statearr_33222_33240 = state_33209__$1;
(statearr_33222_33240[(2)] = null);

(statearr_33222_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33210 === (8))){
var state_33209__$1 = state_33209;
var statearr_33223_33241 = state_33209__$1;
(statearr_33223_33241[(2)] = null);

(statearr_33223_33241[(1)] = (9));


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
});})(c__33021__auto___33231))
;
return ((function (switch__33000__auto__,c__33021__auto___33231){
return (function() {
var csasync$proc$start_process_$_state_machine__33001__auto__ = null;
var csasync$proc$start_process_$_state_machine__33001__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = csasync$proc$start_process_$_state_machine__33001__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var csasync$proc$start_process_$_state_machine__33001__auto____1 = (function (state_33209){
while(true){
var ret_value__33002__auto__ = (function (){try{while(true){
var result__33003__auto__ = switch__33000__auto__.call(null,state_33209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33003__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__33004__auto__ = e33228;
var statearr_33229_33242 = state_33209;
(statearr_33229_33242[(5)] = ex__33004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33243 = state_33209;
state_33209 = G__33243;
continue;
} else {
return ret_value__33002__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__33001__auto__ = function(state_33209){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__33001__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__33001__auto____1.call(this,state_33209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__33001__auto____0;
csasync$proc$start_process_$_state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__33001__auto____1;
return csasync$proc$start_process_$_state_machine__33001__auto__;
})()
;})(switch__33000__auto__,c__33021__auto___33231))
})();
var state__33023__auto__ = (function (){var statearr_33230 = f__33022__auto__.call(null);
(statearr_33230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33021__auto___33231);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33023__auto__);
});})(c__33021__auto___33231))
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
var c__33021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33021__auto__){
return (function (){
var f__33022__auto__ = (function (){var switch__33000__auto__ = ((function (c__33021__auto__){
return (function (state_33264){
var state_val_33265 = (state_33264[(1)]);
if((state_val_33265 === (1))){
var inst_33259 = cljs.core.async.timeout.call(null,time);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33264__$1,(2),inst_33259);
} else {
if((state_val_33265 === (2))){
var inst_33261 = (state_33264[(2)]);
var inst_33262 = func.call(null);
var state_33264__$1 = (function (){var statearr_33266 = state_33264;
(statearr_33266[(7)] = inst_33261);

return statearr_33266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33264__$1,inst_33262);
} else {
return null;
}
}
});})(c__33021__auto__))
;
return ((function (switch__33000__auto__,c__33021__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__33001__auto__ = null;
var csasync$proc$delayer_$_state_machine__33001__auto____0 = (function (){
var statearr_33270 = [null,null,null,null,null,null,null,null];
(statearr_33270[(0)] = csasync$proc$delayer_$_state_machine__33001__auto__);

(statearr_33270[(1)] = (1));

return statearr_33270;
});
var csasync$proc$delayer_$_state_machine__33001__auto____1 = (function (state_33264){
while(true){
var ret_value__33002__auto__ = (function (){try{while(true){
var result__33003__auto__ = switch__33000__auto__.call(null,state_33264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33003__auto__;
}
break;
}
}catch (e33271){if((e33271 instanceof Object)){
var ex__33004__auto__ = e33271;
var statearr_33272_33274 = state_33264;
(statearr_33272_33274[(5)] = ex__33004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33275 = state_33264;
state_33264 = G__33275;
continue;
} else {
return ret_value__33002__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__33001__auto__ = function(state_33264){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__33001__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__33001__auto____1.call(this,state_33264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__33001__auto____0;
csasync$proc$delayer_$_state_machine__33001__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__33001__auto____1;
return csasync$proc$delayer_$_state_machine__33001__auto__;
})()
;})(switch__33000__auto__,c__33021__auto__))
})();
var state__33023__auto__ = (function (){var statearr_33273 = f__33022__auto__.call(null);
(statearr_33273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33021__auto__);

return statearr_33273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33023__auto__);
});})(c__33021__auto__))
);

return c__33021__auto__;
});

//# sourceMappingURL=proc.js.map