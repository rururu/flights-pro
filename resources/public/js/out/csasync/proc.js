// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args11123 = [];
var len__9661__auto___11186 = arguments.length;
var i__9662__auto___11187 = (0);
while(true){
if((i__9662__auto___11187 < len__9661__auto___11186)){
args11123.push((arguments[i__9662__auto___11187]));

var G__11188 = (i__9662__auto___11187 + (1));
i__9662__auto___11187 = G__11188;
continue;
} else {
}
break;
}

var G__11125 = args11123.length;
switch (G__11125) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11123.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_11139){
var state_val_11140 = (state_11139[(1)]);
if((state_val_11140 === (1))){
var state_11139__$1 = state_11139;
var statearr_11141_11190 = state_11139__$1;
(statearr_11141_11190[(2)] = null);

(statearr_11141_11190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (2))){
var state_11139__$1 = state_11139;
var statearr_11142_11191 = state_11139__$1;
(statearr_11142_11191[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (3))){
var inst_11137 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11139__$1,inst_11137);
} else {
if((state_val_11140 === (4))){
var inst_11128 = func.call(null);
var inst_11129 = cljs.core.async.timeout.call(null,time_out);
var state_11139__$1 = (function (){var statearr_11144 = state_11139;
(statearr_11144[(7)] = inst_11128);

return statearr_11144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11139__$1,(7),inst_11129);
} else {
if((state_val_11140 === (5))){
var state_11139__$1 = state_11139;
var statearr_11145_11192 = state_11139__$1;
(statearr_11145_11192[(2)] = null);

(statearr_11145_11192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (6))){
var inst_11135 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
var statearr_11146_11193 = state_11139__$1;
(statearr_11146_11193[(2)] = inst_11135);

(statearr_11146_11193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11140 === (7))){
var inst_11131 = (state_11139[(2)]);
var state_11139__$1 = (function (){var statearr_11147 = state_11139;
(statearr_11147[(8)] = inst_11131);

return statearr_11147;
})();
var statearr_11148_11194 = state_11139__$1;
(statearr_11148_11194[(2)] = null);

(statearr_11148_11194[(1)] = (2));


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
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$state_machine__11058__auto__ = null;
var csasync$proc$state_machine__11058__auto____0 = (function (){
var statearr_11152 = [null,null,null,null,null,null,null,null,null];
(statearr_11152[(0)] = csasync$proc$state_machine__11058__auto__);

(statearr_11152[(1)] = (1));

return statearr_11152;
});
var csasync$proc$state_machine__11058__auto____1 = (function (state_11139){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_11139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e11153){if((e11153 instanceof Object)){
var ex__11061__auto__ = e11153;
var statearr_11154_11195 = state_11139;
(statearr_11154_11195[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11196 = state_11139;
state_11139 = G__11196;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$state_machine__11058__auto__ = function(state_11139){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11058__auto____1.call(this,state_11139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11058__auto____0;
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11058__auto____1;
return csasync$proc$state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_11155 = f__11079__auto__.call(null);
(statearr_11155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_11155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_11169){
var state_val_11170 = (state_11169[(1)]);
if((state_val_11170 === (1))){
var state_11169__$1 = state_11169;
var statearr_11171_11197 = state_11169__$1;
(statearr_11171_11197[(2)] = null);

(statearr_11171_11197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11170 === (2))){
var state_11169__$1 = state_11169;
var statearr_11172_11198 = state_11169__$1;
(statearr_11172_11198[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11170 === (3))){
var inst_11167 = (state_11169[(2)]);
var state_11169__$1 = state_11169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11169__$1,inst_11167);
} else {
if((state_val_11170 === (4))){
var inst_11158 = func.call(null,param);
var inst_11159 = cljs.core.async.timeout.call(null,time_out);
var state_11169__$1 = (function (){var statearr_11174 = state_11169;
(statearr_11174[(7)] = inst_11158);

return statearr_11174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11169__$1,(7),inst_11159);
} else {
if((state_val_11170 === (5))){
var state_11169__$1 = state_11169;
var statearr_11175_11199 = state_11169__$1;
(statearr_11175_11199[(2)] = null);

(statearr_11175_11199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11170 === (6))){
var inst_11165 = (state_11169[(2)]);
var state_11169__$1 = state_11169;
var statearr_11176_11200 = state_11169__$1;
(statearr_11176_11200[(2)] = inst_11165);

(statearr_11176_11200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11170 === (7))){
var inst_11161 = (state_11169[(2)]);
var state_11169__$1 = (function (){var statearr_11177 = state_11169;
(statearr_11177[(8)] = inst_11161);

return statearr_11177;
})();
var statearr_11178_11201 = state_11169__$1;
(statearr_11178_11201[(2)] = null);

(statearr_11178_11201[(1)] = (2));


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
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$state_machine__11058__auto__ = null;
var csasync$proc$state_machine__11058__auto____0 = (function (){
var statearr_11182 = [null,null,null,null,null,null,null,null,null];
(statearr_11182[(0)] = csasync$proc$state_machine__11058__auto__);

(statearr_11182[(1)] = (1));

return statearr_11182;
});
var csasync$proc$state_machine__11058__auto____1 = (function (state_11169){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_11169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e11183){if((e11183 instanceof Object)){
var ex__11061__auto__ = e11183;
var statearr_11184_11202 = state_11169;
(statearr_11184_11202[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11203 = state_11169;
state_11169 = G__11203;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$state_machine__11058__auto__ = function(state_11169){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$state_machine__11058__auto____1.call(this,state_11169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__11058__auto____0;
csasync$proc$state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__11058__auto____1;
return csasync$proc$state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_11185 = f__11079__auto__.call(null);
(statearr_11185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_11185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__11078__auto___11288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto___11288){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto___11288){
return (function (state_11266){
var state_val_11267 = (state_11266[(1)]);
if((state_val_11267 === (7))){
var inst_11255 = cljs.core.async.timeout.call(null,time_out);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11266__$1,(10),inst_11255);
} else {
if((state_val_11267 === (1))){
var state_11266__$1 = state_11266;
var statearr_11268_11289 = state_11266__$1;
(statearr_11268_11289[(2)] = null);

(statearr_11268_11289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (4))){
var inst_11250 = proc_fn.call(null);
var state_11266__$1 = state_11266;
var statearr_11269_11290 = state_11266__$1;
(statearr_11269_11290[(2)] = inst_11250);

(statearr_11269_11290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (6))){
var inst_11253 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
if(cljs.core.truth_(inst_11253)){
var statearr_11270_11291 = state_11266__$1;
(statearr_11270_11291[(1)] = (7));

} else {
var statearr_11271_11292 = state_11266__$1;
(statearr_11271_11292[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (3))){
var inst_11263 = (state_11266[(2)]);
var inst_11264 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_11266__$1 = (function (){var statearr_11272 = state_11266;
(statearr_11272[(7)] = inst_11263);

return statearr_11272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11266__$1,inst_11264);
} else {
if((state_val_11267 === (2))){
var inst_11248 = (state_11266[(8)]);
var inst_11247 = cljs.core.deref.call(null,status);
var inst_11248__$1 = cljs.core._EQ_.call(null,inst_11247,"RUN");
var state_11266__$1 = (function (){var statearr_11273 = state_11266;
(statearr_11273[(8)] = inst_11248__$1);

return statearr_11273;
})();
if(inst_11248__$1){
var statearr_11274_11293 = state_11266__$1;
(statearr_11274_11293[(1)] = (4));

} else {
var statearr_11275_11294 = state_11266__$1;
(statearr_11275_11294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (9))){
var inst_11261 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11276_11295 = state_11266__$1;
(statearr_11276_11295[(2)] = inst_11261);

(statearr_11276_11295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (5))){
var inst_11248 = (state_11266[(8)]);
var state_11266__$1 = state_11266;
var statearr_11277_11296 = state_11266__$1;
(statearr_11277_11296[(2)] = inst_11248);

(statearr_11277_11296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (10))){
var inst_11257 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11278 = state_11266;
(statearr_11278[(9)] = inst_11257);

return statearr_11278;
})();
var statearr_11279_11297 = state_11266__$1;
(statearr_11279_11297[(2)] = null);

(statearr_11279_11297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (8))){
var state_11266__$1 = state_11266;
var statearr_11280_11298 = state_11266__$1;
(statearr_11280_11298[(2)] = null);

(statearr_11280_11298[(1)] = (9));


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
});})(c__11078__auto___11288))
;
return ((function (switch__11057__auto__,c__11078__auto___11288){
return (function() {
var csasync$proc$start_process_$_state_machine__11058__auto__ = null;
var csasync$proc$start_process_$_state_machine__11058__auto____0 = (function (){
var statearr_11284 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11284[(0)] = csasync$proc$start_process_$_state_machine__11058__auto__);

(statearr_11284[(1)] = (1));

return statearr_11284;
});
var csasync$proc$start_process_$_state_machine__11058__auto____1 = (function (state_11266){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_11266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e11285){if((e11285 instanceof Object)){
var ex__11061__auto__ = e11285;
var statearr_11286_11299 = state_11266;
(statearr_11286_11299[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11300 = state_11266;
state_11266 = G__11300;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__11058__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__11058__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__11058__auto____0;
csasync$proc$start_process_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__11058__auto____1;
return csasync$proc$start_process_$_state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto___11288))
})();
var state__11080__auto__ = (function (){var statearr_11287 = f__11079__auto__.call(null);
(statearr_11287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto___11288);

return statearr_11287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto___11288))
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
var c__11078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11078__auto__){
return (function (){
var f__11079__auto__ = (function (){var switch__11057__auto__ = ((function (c__11078__auto__){
return (function (state_11321){
var state_val_11322 = (state_11321[(1)]);
if((state_val_11322 === (1))){
var inst_11316 = cljs.core.async.timeout.call(null,time);
var state_11321__$1 = state_11321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11321__$1,(2),inst_11316);
} else {
if((state_val_11322 === (2))){
var inst_11318 = (state_11321[(2)]);
var inst_11319 = func.call(null);
var state_11321__$1 = (function (){var statearr_11323 = state_11321;
(statearr_11323[(7)] = inst_11318);

return statearr_11323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11321__$1,inst_11319);
} else {
return null;
}
}
});})(c__11078__auto__))
;
return ((function (switch__11057__auto__,c__11078__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__11058__auto__ = null;
var csasync$proc$delayer_$_state_machine__11058__auto____0 = (function (){
var statearr_11327 = [null,null,null,null,null,null,null,null];
(statearr_11327[(0)] = csasync$proc$delayer_$_state_machine__11058__auto__);

(statearr_11327[(1)] = (1));

return statearr_11327;
});
var csasync$proc$delayer_$_state_machine__11058__auto____1 = (function (state_11321){
while(true){
var ret_value__11059__auto__ = (function (){try{while(true){
var result__11060__auto__ = switch__11057__auto__.call(null,state_11321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11060__auto__;
}
break;
}
}catch (e11328){if((e11328 instanceof Object)){
var ex__11061__auto__ = e11328;
var statearr_11329_11331 = state_11321;
(statearr_11329_11331[(5)] = ex__11061__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11332 = state_11321;
state_11321 = G__11332;
continue;
} else {
return ret_value__11059__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__11058__auto__ = function(state_11321){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__11058__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__11058__auto____1.call(this,state_11321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__11058__auto____0;
csasync$proc$delayer_$_state_machine__11058__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__11058__auto____1;
return csasync$proc$delayer_$_state_machine__11058__auto__;
})()
;})(switch__11057__auto__,c__11078__auto__))
})();
var state__11080__auto__ = (function (){var statearr_11330 = f__11079__auto__.call(null);
(statearr_11330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11078__auto__);

return statearr_11330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11080__auto__);
});})(c__11078__auto__))
);

return c__11078__auto__;
});

//# sourceMappingURL=proc.js.map