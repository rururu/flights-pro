// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args33191 = [];
var len__24591__auto___33254 = arguments.length;
var i__24592__auto___33255 = (0);
while(true){
if((i__24592__auto___33255 < len__24591__auto___33254)){
args33191.push((arguments[i__24592__auto___33255]));

var G__33256 = (i__24592__auto___33255 + (1));
i__24592__auto___33255 = G__33256;
continue;
} else {
}
break;
}

var G__33193 = args33191.length;
switch (G__33193) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33191.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__25546__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25546__auto__){
return (function (){
var f__25547__auto__ = (function (){var switch__25525__auto__ = ((function (c__25546__auto__){
return (function (state_33207){
var state_val_33208 = (state_33207[(1)]);
if((state_val_33208 === (1))){
var state_33207__$1 = state_33207;
var statearr_33209_33258 = state_33207__$1;
(statearr_33209_33258[(2)] = null);

(statearr_33209_33258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33208 === (2))){
var state_33207__$1 = state_33207;
var statearr_33210_33259 = state_33207__$1;
(statearr_33210_33259[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33208 === (3))){
var inst_33205 = (state_33207[(2)]);
var state_33207__$1 = state_33207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33207__$1,inst_33205);
} else {
if((state_val_33208 === (4))){
var inst_33196 = func.call(null);
var inst_33197 = cljs.core.async.timeout.call(null,time_out);
var state_33207__$1 = (function (){var statearr_33212 = state_33207;
(statearr_33212[(7)] = inst_33196);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33207__$1,(7),inst_33197);
} else {
if((state_val_33208 === (5))){
var state_33207__$1 = state_33207;
var statearr_33213_33260 = state_33207__$1;
(statearr_33213_33260[(2)] = null);

(statearr_33213_33260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33208 === (6))){
var inst_33203 = (state_33207[(2)]);
var state_33207__$1 = state_33207;
var statearr_33214_33261 = state_33207__$1;
(statearr_33214_33261[(2)] = inst_33203);

(statearr_33214_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33208 === (7))){
var inst_33199 = (state_33207[(2)]);
var state_33207__$1 = (function (){var statearr_33215 = state_33207;
(statearr_33215[(8)] = inst_33199);

return statearr_33215;
})();
var statearr_33216_33262 = state_33207__$1;
(statearr_33216_33262[(2)] = null);

(statearr_33216_33262[(1)] = (2));


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
});})(c__25546__auto__))
;
return ((function (switch__25525__auto__,c__25546__auto__){
return (function() {
var csasync$proc$state_machine__25526__auto__ = null;
var csasync$proc$state_machine__25526__auto____0 = (function (){
var statearr_33220 = [null,null,null,null,null,null,null,null,null];
(statearr_33220[(0)] = csasync$proc$state_machine__25526__auto__);

(statearr_33220[(1)] = (1));

return statearr_33220;
});
var csasync$proc$state_machine__25526__auto____1 = (function (state_33207){
while(true){
var ret_value__25527__auto__ = (function (){try{while(true){
var result__25528__auto__ = switch__25525__auto__.call(null,state_33207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25528__auto__;
}
break;
}
}catch (e33221){if((e33221 instanceof Object)){
var ex__25529__auto__ = e33221;
var statearr_33222_33263 = state_33207;
(statearr_33222_33263[(5)] = ex__25529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33264 = state_33207;
state_33207 = G__33264;
continue;
} else {
return ret_value__25527__auto__;
}
break;
}
});
csasync$proc$state_machine__25526__auto__ = function(state_33207){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25526__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25526__auto____1.call(this,state_33207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25526__auto____0;
csasync$proc$state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25526__auto____1;
return csasync$proc$state_machine__25526__auto__;
})()
;})(switch__25525__auto__,c__25546__auto__))
})();
var state__25548__auto__ = (function (){var statearr_33223 = f__25547__auto__.call(null);
(statearr_33223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25546__auto__);

return statearr_33223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25548__auto__);
});})(c__25546__auto__))
);

return c__25546__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__25546__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25546__auto__){
return (function (){
var f__25547__auto__ = (function (){var switch__25525__auto__ = ((function (c__25546__auto__){
return (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (1))){
var state_33237__$1 = state_33237;
var statearr_33239_33265 = state_33237__$1;
(statearr_33239_33265[(2)] = null);

(statearr_33239_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (2))){
var state_33237__$1 = state_33237;
var statearr_33240_33266 = state_33237__$1;
(statearr_33240_33266[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (3))){
var inst_33235 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33237__$1,inst_33235);
} else {
if((state_val_33238 === (4))){
var inst_33226 = func.call(null,param);
var inst_33227 = cljs.core.async.timeout.call(null,time_out);
var state_33237__$1 = (function (){var statearr_33242 = state_33237;
(statearr_33242[(7)] = inst_33226);

return statearr_33242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33237__$1,(7),inst_33227);
} else {
if((state_val_33238 === (5))){
var state_33237__$1 = state_33237;
var statearr_33243_33267 = state_33237__$1;
(statearr_33243_33267[(2)] = null);

(statearr_33243_33267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (6))){
var inst_33233 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33244_33268 = state_33237__$1;
(statearr_33244_33268[(2)] = inst_33233);

(statearr_33244_33268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (7))){
var inst_33229 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33245 = state_33237;
(statearr_33245[(8)] = inst_33229);

return statearr_33245;
})();
var statearr_33246_33269 = state_33237__$1;
(statearr_33246_33269[(2)] = null);

(statearr_33246_33269[(1)] = (2));


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
});})(c__25546__auto__))
;
return ((function (switch__25525__auto__,c__25546__auto__){
return (function() {
var csasync$proc$state_machine__25526__auto__ = null;
var csasync$proc$state_machine__25526__auto____0 = (function (){
var statearr_33250 = [null,null,null,null,null,null,null,null,null];
(statearr_33250[(0)] = csasync$proc$state_machine__25526__auto__);

(statearr_33250[(1)] = (1));

return statearr_33250;
});
var csasync$proc$state_machine__25526__auto____1 = (function (state_33237){
while(true){
var ret_value__25527__auto__ = (function (){try{while(true){
var result__25528__auto__ = switch__25525__auto__.call(null,state_33237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25528__auto__;
}
break;
}
}catch (e33251){if((e33251 instanceof Object)){
var ex__25529__auto__ = e33251;
var statearr_33252_33270 = state_33237;
(statearr_33252_33270[(5)] = ex__25529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33271 = state_33237;
state_33237 = G__33271;
continue;
} else {
return ret_value__25527__auto__;
}
break;
}
});
csasync$proc$state_machine__25526__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__25526__auto____0.call(this);
case 1:
return csasync$proc$state_machine__25526__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__25526__auto____0;
csasync$proc$state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__25526__auto____1;
return csasync$proc$state_machine__25526__auto__;
})()
;})(switch__25525__auto__,c__25546__auto__))
})();
var state__25548__auto__ = (function (){var statearr_33253 = f__25547__auto__.call(null);
(statearr_33253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25546__auto__);

return statearr_33253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25548__auto__);
});})(c__25546__auto__))
);

return c__25546__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,status),"START")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__25546__auto___33356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25546__auto___33356){
return (function (){
var f__25547__auto__ = (function (){var switch__25525__auto__ = ((function (c__25546__auto___33356){
return (function (state_33334){
var state_val_33335 = (state_33334[(1)]);
if((state_val_33335 === (7))){
var inst_33323 = cljs.core.async.timeout.call(null,time_out);
var state_33334__$1 = state_33334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33334__$1,(10),inst_33323);
} else {
if((state_val_33335 === (1))){
var state_33334__$1 = state_33334;
var statearr_33336_33357 = state_33334__$1;
(statearr_33336_33357[(2)] = null);

(statearr_33336_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (4))){
var inst_33318 = proc_fn.call(null);
var state_33334__$1 = state_33334;
var statearr_33337_33358 = state_33334__$1;
(statearr_33337_33358[(2)] = inst_33318);

(statearr_33337_33358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (6))){
var inst_33321 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
if(cljs.core.truth_(inst_33321)){
var statearr_33338_33359 = state_33334__$1;
(statearr_33338_33359[(1)] = (7));

} else {
var statearr_33339_33360 = state_33334__$1;
(statearr_33339_33360[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (3))){
var inst_33331 = (state_33334[(2)]);
var inst_33332 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_33334__$1 = (function (){var statearr_33340 = state_33334;
(statearr_33340[(7)] = inst_33331);

return statearr_33340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33334__$1,inst_33332);
} else {
if((state_val_33335 === (2))){
var inst_33316 = (state_33334[(8)]);
var inst_33315 = cljs.core.deref.call(null,status);
var inst_33316__$1 = cljs.core._EQ_.call(null,inst_33315,"RUN");
var state_33334__$1 = (function (){var statearr_33341 = state_33334;
(statearr_33341[(8)] = inst_33316__$1);

return statearr_33341;
})();
if(inst_33316__$1){
var statearr_33342_33361 = state_33334__$1;
(statearr_33342_33361[(1)] = (4));

} else {
var statearr_33343_33362 = state_33334__$1;
(statearr_33343_33362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (9))){
var inst_33329 = (state_33334[(2)]);
var state_33334__$1 = state_33334;
var statearr_33344_33363 = state_33334__$1;
(statearr_33344_33363[(2)] = inst_33329);

(statearr_33344_33363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (5))){
var inst_33316 = (state_33334[(8)]);
var state_33334__$1 = state_33334;
var statearr_33345_33364 = state_33334__$1;
(statearr_33345_33364[(2)] = inst_33316);

(statearr_33345_33364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (10))){
var inst_33325 = (state_33334[(2)]);
var state_33334__$1 = (function (){var statearr_33346 = state_33334;
(statearr_33346[(9)] = inst_33325);

return statearr_33346;
})();
var statearr_33347_33365 = state_33334__$1;
(statearr_33347_33365[(2)] = null);

(statearr_33347_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33335 === (8))){
var state_33334__$1 = state_33334;
var statearr_33348_33366 = state_33334__$1;
(statearr_33348_33366[(2)] = null);

(statearr_33348_33366[(1)] = (9));


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
});})(c__25546__auto___33356))
;
return ((function (switch__25525__auto__,c__25546__auto___33356){
return (function() {
var csasync$proc$start_process_$_state_machine__25526__auto__ = null;
var csasync$proc$start_process_$_state_machine__25526__auto____0 = (function (){
var statearr_33352 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33352[(0)] = csasync$proc$start_process_$_state_machine__25526__auto__);

(statearr_33352[(1)] = (1));

return statearr_33352;
});
var csasync$proc$start_process_$_state_machine__25526__auto____1 = (function (state_33334){
while(true){
var ret_value__25527__auto__ = (function (){try{while(true){
var result__25528__auto__ = switch__25525__auto__.call(null,state_33334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25528__auto__;
}
break;
}
}catch (e33353){if((e33353 instanceof Object)){
var ex__25529__auto__ = e33353;
var statearr_33354_33367 = state_33334;
(statearr_33354_33367[(5)] = ex__25529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33368 = state_33334;
state_33334 = G__33368;
continue;
} else {
return ret_value__25527__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__25526__auto__ = function(state_33334){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__25526__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__25526__auto____1.call(this,state_33334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__25526__auto____0;
csasync$proc$start_process_$_state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__25526__auto____1;
return csasync$proc$start_process_$_state_machine__25526__auto__;
})()
;})(switch__25525__auto__,c__25546__auto___33356))
})();
var state__25548__auto__ = (function (){var statearr_33355 = f__25547__auto__.call(null);
(statearr_33355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25546__auto___33356);

return statearr_33355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25548__auto__);
});})(c__25546__auto___33356))
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
var c__25546__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25546__auto__){
return (function (){
var f__25547__auto__ = (function (){var switch__25525__auto__ = ((function (c__25546__auto__){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (1))){
var inst_33384 = cljs.core.async.timeout.call(null,time);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33389__$1,(2),inst_33384);
} else {
if((state_val_33390 === (2))){
var inst_33386 = (state_33389[(2)]);
var inst_33387 = func.call(null);
var state_33389__$1 = (function (){var statearr_33391 = state_33389;
(statearr_33391[(7)] = inst_33386);

return statearr_33391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33389__$1,inst_33387);
} else {
return null;
}
}
});})(c__25546__auto__))
;
return ((function (switch__25525__auto__,c__25546__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__25526__auto__ = null;
var csasync$proc$delayer_$_state_machine__25526__auto____0 = (function (){
var statearr_33395 = [null,null,null,null,null,null,null,null];
(statearr_33395[(0)] = csasync$proc$delayer_$_state_machine__25526__auto__);

(statearr_33395[(1)] = (1));

return statearr_33395;
});
var csasync$proc$delayer_$_state_machine__25526__auto____1 = (function (state_33389){
while(true){
var ret_value__25527__auto__ = (function (){try{while(true){
var result__25528__auto__ = switch__25525__auto__.call(null,state_33389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25528__auto__;
}
break;
}
}catch (e33396){if((e33396 instanceof Object)){
var ex__25529__auto__ = e33396;
var statearr_33397_33399 = state_33389;
(statearr_33397_33399[(5)] = ex__25529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33400 = state_33389;
state_33389 = G__33400;
continue;
} else {
return ret_value__25527__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__25526__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__25526__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__25526__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__25526__auto____0;
csasync$proc$delayer_$_state_machine__25526__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__25526__auto____1;
return csasync$proc$delayer_$_state_machine__25526__auto__;
})()
;})(switch__25525__auto__,c__25546__auto__))
})();
var state__25548__auto__ = (function (){var statearr_33398 = f__25547__auto__.call(null);
(statearr_33398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25546__auto__);

return statearr_33398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25548__auto__);
});})(c__25546__auto__))
);

return c__25546__auto__;
});

//# sourceMappingURL=proc.js.map