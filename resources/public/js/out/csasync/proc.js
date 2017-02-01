// Compiled by ClojureScript 1.9.293 {}
goog.provide('csasync.proc');
goog.require('cljs.core');
goog.require('cljs.core.async');
csasync.proc.repeater = (function csasync$proc$repeater(var_args){
var args22059 = [];
var len__20952__auto___22122 = arguments.length;
var i__20953__auto___22123 = (0);
while(true){
if((i__20953__auto___22123 < len__20952__auto___22122)){
args22059.push((arguments[i__20953__auto___22123]));

var G__22124 = (i__20953__auto___22123 + (1));
i__20953__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var G__22061 = args22059.length;
switch (G__22061) {
case 2:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22059.length)].join('')));

}
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$2 = (function (func,time_out){
var c__22014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22014__auto__){
return (function (){
var f__22015__auto__ = (function (){var switch__21993__auto__ = ((function (c__22014__auto__){
return (function (state_22075){
var state_val_22076 = (state_22075[(1)]);
if((state_val_22076 === (1))){
var state_22075__$1 = state_22075;
var statearr_22077_22126 = state_22075__$1;
(statearr_22077_22126[(2)] = null);

(statearr_22077_22126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22076 === (2))){
var state_22075__$1 = state_22075;
var statearr_22078_22127 = state_22075__$1;
(statearr_22078_22127[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22076 === (3))){
var inst_22073 = (state_22075[(2)]);
var state_22075__$1 = state_22075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22075__$1,inst_22073);
} else {
if((state_val_22076 === (4))){
var inst_22064 = func.call(null);
var inst_22065 = cljs.core.async.timeout.call(null,time_out);
var state_22075__$1 = (function (){var statearr_22080 = state_22075;
(statearr_22080[(7)] = inst_22064);

return statearr_22080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22075__$1,(7),inst_22065);
} else {
if((state_val_22076 === (5))){
var state_22075__$1 = state_22075;
var statearr_22081_22128 = state_22075__$1;
(statearr_22081_22128[(2)] = null);

(statearr_22081_22128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22076 === (6))){
var inst_22071 = (state_22075[(2)]);
var state_22075__$1 = state_22075;
var statearr_22082_22129 = state_22075__$1;
(statearr_22082_22129[(2)] = inst_22071);

(statearr_22082_22129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22076 === (7))){
var inst_22067 = (state_22075[(2)]);
var state_22075__$1 = (function (){var statearr_22083 = state_22075;
(statearr_22083[(8)] = inst_22067);

return statearr_22083;
})();
var statearr_22084_22130 = state_22075__$1;
(statearr_22084_22130[(2)] = null);

(statearr_22084_22130[(1)] = (2));


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
});})(c__22014__auto__))
;
return ((function (switch__21993__auto__,c__22014__auto__){
return (function() {
var csasync$proc$state_machine__21994__auto__ = null;
var csasync$proc$state_machine__21994__auto____0 = (function (){
var statearr_22088 = [null,null,null,null,null,null,null,null,null];
(statearr_22088[(0)] = csasync$proc$state_machine__21994__auto__);

(statearr_22088[(1)] = (1));

return statearr_22088;
});
var csasync$proc$state_machine__21994__auto____1 = (function (state_22075){
while(true){
var ret_value__21995__auto__ = (function (){try{while(true){
var result__21996__auto__ = switch__21993__auto__.call(null,state_22075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21996__auto__;
}
break;
}
}catch (e22089){if((e22089 instanceof Object)){
var ex__21997__auto__ = e22089;
var statearr_22090_22131 = state_22075;
(statearr_22090_22131[(5)] = ex__21997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22132 = state_22075;
state_22075 = G__22132;
continue;
} else {
return ret_value__21995__auto__;
}
break;
}
});
csasync$proc$state_machine__21994__auto__ = function(state_22075){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21994__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21994__auto____1.call(this,state_22075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21994__auto____0;
csasync$proc$state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21994__auto____1;
return csasync$proc$state_machine__21994__auto__;
})()
;})(switch__21993__auto__,c__22014__auto__))
})();
var state__22016__auto__ = (function (){var statearr_22091 = f__22015__auto__.call(null);
(statearr_22091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22014__auto__);

return statearr_22091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22016__auto__);
});})(c__22014__auto__))
);

return c__22014__auto__;
});

csasync.proc.repeater.cljs$core$IFn$_invoke$arity$3 = (function (func,param,time_out){
var c__22014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22014__auto__){
return (function (){
var f__22015__auto__ = (function (){var switch__21993__auto__ = ((function (c__22014__auto__){
return (function (state_22105){
var state_val_22106 = (state_22105[(1)]);
if((state_val_22106 === (1))){
var state_22105__$1 = state_22105;
var statearr_22107_22133 = state_22105__$1;
(statearr_22107_22133[(2)] = null);

(statearr_22107_22133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (2))){
var state_22105__$1 = state_22105;
var statearr_22108_22134 = state_22105__$1;
(statearr_22108_22134[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (3))){
var inst_22103 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22105__$1,inst_22103);
} else {
if((state_val_22106 === (4))){
var inst_22094 = func.call(null,param);
var inst_22095 = cljs.core.async.timeout.call(null,time_out);
var state_22105__$1 = (function (){var statearr_22110 = state_22105;
(statearr_22110[(7)] = inst_22094);

return statearr_22110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22105__$1,(7),inst_22095);
} else {
if((state_val_22106 === (5))){
var state_22105__$1 = state_22105;
var statearr_22111_22135 = state_22105__$1;
(statearr_22111_22135[(2)] = null);

(statearr_22111_22135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (6))){
var inst_22101 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22112_22136 = state_22105__$1;
(statearr_22112_22136[(2)] = inst_22101);

(statearr_22112_22136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (7))){
var inst_22097 = (state_22105[(2)]);
var state_22105__$1 = (function (){var statearr_22113 = state_22105;
(statearr_22113[(8)] = inst_22097);

return statearr_22113;
})();
var statearr_22114_22137 = state_22105__$1;
(statearr_22114_22137[(2)] = null);

(statearr_22114_22137[(1)] = (2));


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
});})(c__22014__auto__))
;
return ((function (switch__21993__auto__,c__22014__auto__){
return (function() {
var csasync$proc$state_machine__21994__auto__ = null;
var csasync$proc$state_machine__21994__auto____0 = (function (){
var statearr_22118 = [null,null,null,null,null,null,null,null,null];
(statearr_22118[(0)] = csasync$proc$state_machine__21994__auto__);

(statearr_22118[(1)] = (1));

return statearr_22118;
});
var csasync$proc$state_machine__21994__auto____1 = (function (state_22105){
while(true){
var ret_value__21995__auto__ = (function (){try{while(true){
var result__21996__auto__ = switch__21993__auto__.call(null,state_22105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21996__auto__;
}
break;
}
}catch (e22119){if((e22119 instanceof Object)){
var ex__21997__auto__ = e22119;
var statearr_22120_22138 = state_22105;
(statearr_22120_22138[(5)] = ex__21997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22139 = state_22105;
state_22105 = G__22139;
continue;
} else {
return ret_value__21995__auto__;
}
break;
}
});
csasync$proc$state_machine__21994__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return csasync$proc$state_machine__21994__auto____0.call(this);
case 1:
return csasync$proc$state_machine__21994__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$state_machine__21994__auto____0;
csasync$proc$state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$state_machine__21994__auto____1;
return csasync$proc$state_machine__21994__auto__;
})()
;})(switch__21993__auto__,c__22014__auto__))
})();
var state__22016__auto__ = (function (){var statearr_22121 = f__22015__auto__.call(null);
(statearr_22121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22014__auto__);

return statearr_22121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22016__auto__);
});})(c__22014__auto__))
);

return c__22014__auto__;
});

csasync.proc.repeater.cljs$lang$maxFixedArity = 3;

csasync.proc.start_process = (function csasync$proc$start_process(status,proc_fn,time_out){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,status),"RUN")){
cljs.core.vreset_BANG_.call(null,status,"RUN");

var c__22014__auto___22224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22014__auto___22224){
return (function (){
var f__22015__auto__ = (function (){var switch__21993__auto__ = ((function (c__22014__auto___22224){
return (function (state_22202){
var state_val_22203 = (state_22202[(1)]);
if((state_val_22203 === (7))){
var inst_22191 = cljs.core.async.timeout.call(null,time_out);
var state_22202__$1 = state_22202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22202__$1,(10),inst_22191);
} else {
if((state_val_22203 === (1))){
var state_22202__$1 = state_22202;
var statearr_22204_22225 = state_22202__$1;
(statearr_22204_22225[(2)] = null);

(statearr_22204_22225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (4))){
var inst_22186 = proc_fn.call(null);
var state_22202__$1 = state_22202;
var statearr_22205_22226 = state_22202__$1;
(statearr_22205_22226[(2)] = inst_22186);

(statearr_22205_22226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (6))){
var inst_22189 = (state_22202[(2)]);
var state_22202__$1 = state_22202;
if(cljs.core.truth_(inst_22189)){
var statearr_22206_22227 = state_22202__$1;
(statearr_22206_22227[(1)] = (7));

} else {
var statearr_22207_22228 = state_22202__$1;
(statearr_22207_22228[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (3))){
var inst_22199 = (state_22202[(2)]);
var inst_22200 = cljs.core.vreset_BANG_.call(null,status,"STOP");
var state_22202__$1 = (function (){var statearr_22208 = state_22202;
(statearr_22208[(7)] = inst_22199);

return statearr_22208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22202__$1,inst_22200);
} else {
if((state_val_22203 === (2))){
var inst_22184 = (state_22202[(8)]);
var inst_22183 = cljs.core.deref.call(null,status);
var inst_22184__$1 = cljs.core._EQ_.call(null,inst_22183,"RUN");
var state_22202__$1 = (function (){var statearr_22209 = state_22202;
(statearr_22209[(8)] = inst_22184__$1);

return statearr_22209;
})();
if(inst_22184__$1){
var statearr_22210_22229 = state_22202__$1;
(statearr_22210_22229[(1)] = (4));

} else {
var statearr_22211_22230 = state_22202__$1;
(statearr_22211_22230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (9))){
var inst_22197 = (state_22202[(2)]);
var state_22202__$1 = state_22202;
var statearr_22212_22231 = state_22202__$1;
(statearr_22212_22231[(2)] = inst_22197);

(statearr_22212_22231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (5))){
var inst_22184 = (state_22202[(8)]);
var state_22202__$1 = state_22202;
var statearr_22213_22232 = state_22202__$1;
(statearr_22213_22232[(2)] = inst_22184);

(statearr_22213_22232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (10))){
var inst_22193 = (state_22202[(2)]);
var state_22202__$1 = (function (){var statearr_22214 = state_22202;
(statearr_22214[(9)] = inst_22193);

return statearr_22214;
})();
var statearr_22215_22233 = state_22202__$1;
(statearr_22215_22233[(2)] = null);

(statearr_22215_22233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22203 === (8))){
var state_22202__$1 = state_22202;
var statearr_22216_22234 = state_22202__$1;
(statearr_22216_22234[(2)] = null);

(statearr_22216_22234[(1)] = (9));


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
});})(c__22014__auto___22224))
;
return ((function (switch__21993__auto__,c__22014__auto___22224){
return (function() {
var csasync$proc$start_process_$_state_machine__21994__auto__ = null;
var csasync$proc$start_process_$_state_machine__21994__auto____0 = (function (){
var statearr_22220 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22220[(0)] = csasync$proc$start_process_$_state_machine__21994__auto__);

(statearr_22220[(1)] = (1));

return statearr_22220;
});
var csasync$proc$start_process_$_state_machine__21994__auto____1 = (function (state_22202){
while(true){
var ret_value__21995__auto__ = (function (){try{while(true){
var result__21996__auto__ = switch__21993__auto__.call(null,state_22202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21996__auto__;
}
break;
}
}catch (e22221){if((e22221 instanceof Object)){
var ex__21997__auto__ = e22221;
var statearr_22222_22235 = state_22202;
(statearr_22222_22235[(5)] = ex__21997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22236 = state_22202;
state_22202 = G__22236;
continue;
} else {
return ret_value__21995__auto__;
}
break;
}
});
csasync$proc$start_process_$_state_machine__21994__auto__ = function(state_22202){
switch(arguments.length){
case 0:
return csasync$proc$start_process_$_state_machine__21994__auto____0.call(this);
case 1:
return csasync$proc$start_process_$_state_machine__21994__auto____1.call(this,state_22202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$start_process_$_state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$start_process_$_state_machine__21994__auto____0;
csasync$proc$start_process_$_state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$start_process_$_state_machine__21994__auto____1;
return csasync$proc$start_process_$_state_machine__21994__auto__;
})()
;})(switch__21993__auto__,c__22014__auto___22224))
})();
var state__22016__auto__ = (function (){var statearr_22223 = f__22015__auto__.call(null);
(statearr_22223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22014__auto___22224);

return statearr_22223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22016__auto__);
});})(c__22014__auto___22224))
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
var c__22014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22014__auto__){
return (function (){
var f__22015__auto__ = (function (){var switch__21993__auto__ = ((function (c__22014__auto__){
return (function (state_22257){
var state_val_22258 = (state_22257[(1)]);
if((state_val_22258 === (1))){
var inst_22252 = cljs.core.async.timeout.call(null,time);
var state_22257__$1 = state_22257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22257__$1,(2),inst_22252);
} else {
if((state_val_22258 === (2))){
var inst_22254 = (state_22257[(2)]);
var inst_22255 = func.call(null);
var state_22257__$1 = (function (){var statearr_22259 = state_22257;
(statearr_22259[(7)] = inst_22254);

return statearr_22259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22257__$1,inst_22255);
} else {
return null;
}
}
});})(c__22014__auto__))
;
return ((function (switch__21993__auto__,c__22014__auto__){
return (function() {
var csasync$proc$delayer_$_state_machine__21994__auto__ = null;
var csasync$proc$delayer_$_state_machine__21994__auto____0 = (function (){
var statearr_22263 = [null,null,null,null,null,null,null,null];
(statearr_22263[(0)] = csasync$proc$delayer_$_state_machine__21994__auto__);

(statearr_22263[(1)] = (1));

return statearr_22263;
});
var csasync$proc$delayer_$_state_machine__21994__auto____1 = (function (state_22257){
while(true){
var ret_value__21995__auto__ = (function (){try{while(true){
var result__21996__auto__ = switch__21993__auto__.call(null,state_22257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21996__auto__;
}
break;
}
}catch (e22264){if((e22264 instanceof Object)){
var ex__21997__auto__ = e22264;
var statearr_22265_22267 = state_22257;
(statearr_22265_22267[(5)] = ex__21997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22268 = state_22257;
state_22257 = G__22268;
continue;
} else {
return ret_value__21995__auto__;
}
break;
}
});
csasync$proc$delayer_$_state_machine__21994__auto__ = function(state_22257){
switch(arguments.length){
case 0:
return csasync$proc$delayer_$_state_machine__21994__auto____0.call(this);
case 1:
return csasync$proc$delayer_$_state_machine__21994__auto____1.call(this,state_22257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csasync$proc$delayer_$_state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$0 = csasync$proc$delayer_$_state_machine__21994__auto____0;
csasync$proc$delayer_$_state_machine__21994__auto__.cljs$core$IFn$_invoke$arity$1 = csasync$proc$delayer_$_state_machine__21994__auto____1;
return csasync$proc$delayer_$_state_machine__21994__auto__;
})()
;})(switch__21993__auto__,c__22014__auto__))
})();
var state__22016__auto__ = (function (){var statearr_22266 = f__22015__auto__.call(null);
(statearr_22266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22014__auto__);

return statearr_22266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22016__auto__);
});})(c__22014__auto__))
);

return c__22014__auto__;
});

//# sourceMappingURL=proc.js.map