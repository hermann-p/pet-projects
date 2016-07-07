// Compiled by ClojureScript 1.7.145 {}
goog.provide('soccer.core');
goog.require('cljs.core');
goog.require('soccer.pixi');
goog.require('soccer.assets');
goog.require('soccer.channels');
goog.require('soccer.main');
goog.require('soccer.gamestate');
goog.require('cljs.core.async');
if(typeof soccer.core.pixi !== 'undefined'){
} else {
soccer.core.pixi = PIXI;
}
var c__7221__auto___11273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7221__auto___11273){
return (function (){
var f__7222__auto__ = (function (){var switch__7200__auto__ = ((function (c__7221__auto___11273){
return (function (state_11264){
var state_val_11265 = (state_11264[(1)]);
if((state_val_11265 === (1))){
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11264__$1,(2),soccer.channels.state_chan,new cljs.core.Keyword(null,"loading","loading",-737050189));
} else {
if((state_val_11265 === (2))){
var inst_11262 = (state_11264[(2)]);
var state_11264__$1 = state_11264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11264__$1,inst_11262);
} else {
return null;
}
}
});})(c__7221__auto___11273))
;
return ((function (switch__7200__auto__,c__7221__auto___11273){
return (function() {
var soccer$core$state_machine__7201__auto__ = null;
var soccer$core$state_machine__7201__auto____0 = (function (){
var statearr_11269 = [null,null,null,null,null,null,null];
(statearr_11269[(0)] = soccer$core$state_machine__7201__auto__);

(statearr_11269[(1)] = (1));

return statearr_11269;
});
var soccer$core$state_machine__7201__auto____1 = (function (state_11264){
while(true){
var ret_value__7202__auto__ = (function (){try{while(true){
var result__7203__auto__ = switch__7200__auto__.call(null,state_11264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7203__auto__;
}
break;
}
}catch (e11270){if((e11270 instanceof Object)){
var ex__7204__auto__ = e11270;
var statearr_11271_11274 = state_11264;
(statearr_11271_11274[(5)] = ex__7204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11275 = state_11264;
state_11264 = G__11275;
continue;
} else {
return ret_value__7202__auto__;
}
break;
}
});
soccer$core$state_machine__7201__auto__ = function(state_11264){
switch(arguments.length){
case 0:
return soccer$core$state_machine__7201__auto____0.call(this);
case 1:
return soccer$core$state_machine__7201__auto____1.call(this,state_11264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$state_machine__7201__auto____0;
soccer$core$state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$state_machine__7201__auto____1;
return soccer$core$state_machine__7201__auto__;
})()
;})(switch__7200__auto__,c__7221__auto___11273))
})();
var state__7223__auto__ = (function (){var statearr_11272 = f__7222__auto__.call(null);
(statearr_11272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7221__auto___11273);

return statearr_11272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7223__auto__);
});})(c__7221__auto___11273))
);

soccer.core.request_frame = (function soccer$core$request_frame(){
var c__7221__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7221__auto__){
return (function (){
var f__7222__auto__ = (function (){var switch__7200__auto__ = ((function (c__7221__auto__){
return (function (state_11291){
var state_val_11292 = (state_11291[(1)]);
if((state_val_11292 === (1))){
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11291__$1,(2),soccer.channels.time_chan,new cljs.core.Keyword(null,"tick","tick",-835886976));
} else {
if((state_val_11292 === (2))){
var inst_11289 = (state_11291[(2)]);
var state_11291__$1 = state_11291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11291__$1,inst_11289);
} else {
return null;
}
}
});})(c__7221__auto__))
;
return ((function (switch__7200__auto__,c__7221__auto__){
return (function() {
var soccer$core$request_frame_$_state_machine__7201__auto__ = null;
var soccer$core$request_frame_$_state_machine__7201__auto____0 = (function (){
var statearr_11296 = [null,null,null,null,null,null,null];
(statearr_11296[(0)] = soccer$core$request_frame_$_state_machine__7201__auto__);

(statearr_11296[(1)] = (1));

return statearr_11296;
});
var soccer$core$request_frame_$_state_machine__7201__auto____1 = (function (state_11291){
while(true){
var ret_value__7202__auto__ = (function (){try{while(true){
var result__7203__auto__ = switch__7200__auto__.call(null,state_11291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7203__auto__;
}
break;
}
}catch (e11297){if((e11297 instanceof Object)){
var ex__7204__auto__ = e11297;
var statearr_11298_11300 = state_11291;
(statearr_11298_11300[(5)] = ex__7204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11301 = state_11291;
state_11291 = G__11301;
continue;
} else {
return ret_value__7202__auto__;
}
break;
}
});
soccer$core$request_frame_$_state_machine__7201__auto__ = function(state_11291){
switch(arguments.length){
case 0:
return soccer$core$request_frame_$_state_machine__7201__auto____0.call(this);
case 1:
return soccer$core$request_frame_$_state_machine__7201__auto____1.call(this,state_11291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$request_frame_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$request_frame_$_state_machine__7201__auto____0;
soccer$core$request_frame_$_state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$request_frame_$_state_machine__7201__auto____1;
return soccer$core$request_frame_$_state_machine__7201__auto__;
})()
;})(switch__7200__auto__,c__7221__auto__))
})();
var state__7223__auto__ = (function (){var statearr_11299 = f__7222__auto__.call(null);
(statearr_11299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7221__auto__);

return statearr_11299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7223__auto__);
});})(c__7221__auto__))
);

return c__7221__auto__;
});
var c__7221__auto___11355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7221__auto___11355){
return (function (){
var f__7222__auto__ = (function (){var switch__7200__auto__ = ((function (c__7221__auto___11355){
return (function (state_11332){
var state_val_11333 = (state_11332[(1)]);
if((state_val_11333 === (7))){
var inst_11328 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
var statearr_11334_11356 = state_11332__$1;
(statearr_11334_11356[(2)] = inst_11328);

(statearr_11334_11356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (1))){
var inst_11302 = soccer.main.init.call(null);
var inst_11303 = inst_11302;
var state_11332__$1 = (function (){var statearr_11335 = state_11332;
(statearr_11335[(7)] = inst_11303);

return statearr_11335;
})();
var statearr_11336_11357 = state_11332__$1;
(statearr_11336_11357[(2)] = null);

(statearr_11336_11357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (4))){
var inst_11312 = (state_11332[(8)]);
var inst_11310 = (state_11332[(2)]);
var inst_11311 = cljs.core.nth.call(null,inst_11310,(0),null);
var inst_11312__$1 = cljs.core.nth.call(null,inst_11310,(1),null);
var inst_11313 = cljs.core._EQ_.call(null,soccer.channels.time_chan,inst_11312__$1);
var state_11332__$1 = (function (){var statearr_11337 = state_11332;
(statearr_11337[(8)] = inst_11312__$1);

(statearr_11337[(9)] = inst_11311);

return statearr_11337;
})();
if(inst_11313){
var statearr_11338_11358 = state_11332__$1;
(statearr_11338_11358[(1)] = (5));

} else {
var statearr_11339_11359 = state_11332__$1;
(statearr_11339_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (6))){
var inst_11312 = (state_11332[(8)]);
var inst_11320 = cljs.core._EQ_.call(null,soccer.channels.state_chan,inst_11312);
var state_11332__$1 = state_11332;
if(inst_11320){
var statearr_11340_11360 = state_11332__$1;
(statearr_11340_11360[(1)] = (8));

} else {
var statearr_11341_11361 = state_11332__$1;
(statearr_11341_11361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (3))){
var inst_11330 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11332__$1,inst_11330);
} else {
if((state_val_11333 === (2))){
var inst_11306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11307 = [soccer.channels.state_chan,soccer.channels.time_chan,soccer.channels.event_chan,soccer.channels.global_chan];
var inst_11308 = (new cljs.core.PersistentVector(null,4,(5),inst_11306,inst_11307,null));
var state_11332__$1 = state_11332;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11332__$1,(4),inst_11308);
} else {
if((state_val_11333 === (9))){
var state_11332__$1 = state_11332;
var statearr_11342_11362 = state_11332__$1;
(statearr_11342_11362[(2)] = null);

(statearr_11342_11362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (5))){
var inst_11303 = (state_11332[(7)]);
var inst_11315 = window.requestAnimationFrame(soccer.core.request_frame);
var inst_11316 = soccer.gamestate.draw.call(null,inst_11303);
var inst_11317 = soccer.gamestate.time_tick.call(null,inst_11303);
var inst_11303__$1 = inst_11317;
var state_11332__$1 = (function (){var statearr_11343 = state_11332;
(statearr_11343[(10)] = inst_11316);

(statearr_11343[(7)] = inst_11303__$1);

(statearr_11343[(11)] = inst_11315);

return statearr_11343;
})();
var statearr_11344_11363 = state_11332__$1;
(statearr_11344_11363[(2)] = null);

(statearr_11344_11363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (10))){
var inst_11326 = (state_11332[(2)]);
var state_11332__$1 = state_11332;
var statearr_11345_11364 = state_11332__$1;
(statearr_11345_11364[(2)] = inst_11326);

(statearr_11345_11364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11333 === (8))){
var inst_11303 = (state_11332[(7)]);
var inst_11311 = (state_11332[(9)]);
var inst_11322 = soccer.gamestate.enter.call(null,inst_11303,inst_11311);
var inst_11303__$1 = inst_11322;
var state_11332__$1 = (function (){var statearr_11346 = state_11332;
(statearr_11346[(7)] = inst_11303__$1);

return statearr_11346;
})();
var statearr_11347_11365 = state_11332__$1;
(statearr_11347_11365[(2)] = null);

(statearr_11347_11365[(1)] = (2));


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
});})(c__7221__auto___11355))
;
return ((function (switch__7200__auto__,c__7221__auto___11355){
return (function() {
var soccer$core$state_machine__7201__auto__ = null;
var soccer$core$state_machine__7201__auto____0 = (function (){
var statearr_11351 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11351[(0)] = soccer$core$state_machine__7201__auto__);

(statearr_11351[(1)] = (1));

return statearr_11351;
});
var soccer$core$state_machine__7201__auto____1 = (function (state_11332){
while(true){
var ret_value__7202__auto__ = (function (){try{while(true){
var result__7203__auto__ = switch__7200__auto__.call(null,state_11332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7203__auto__;
}
break;
}
}catch (e11352){if((e11352 instanceof Object)){
var ex__7204__auto__ = e11352;
var statearr_11353_11366 = state_11332;
(statearr_11353_11366[(5)] = ex__7204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11367 = state_11332;
state_11332 = G__11367;
continue;
} else {
return ret_value__7202__auto__;
}
break;
}
});
soccer$core$state_machine__7201__auto__ = function(state_11332){
switch(arguments.length){
case 0:
return soccer$core$state_machine__7201__auto____0.call(this);
case 1:
return soccer$core$state_machine__7201__auto____1.call(this,state_11332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
soccer$core$state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$0 = soccer$core$state_machine__7201__auto____0;
soccer$core$state_machine__7201__auto__.cljs$core$IFn$_invoke$arity$1 = soccer$core$state_machine__7201__auto____1;
return soccer$core$state_machine__7201__auto__;
})()
;})(switch__7200__auto__,c__7221__auto___11355))
})();
var state__7223__auto__ = (function (){var statearr_11354 = f__7222__auto__.call(null);
(statearr_11354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7221__auto___11355);

return statearr_11354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7223__auto__);
});})(c__7221__auto___11355))
);

soccer.core.request_frame.call(null);

//# sourceMappingURL=core.js.map