(this["webpackJsonppsylocke-web"]=this["webpackJsonppsylocke-web"]||[]).push([[0],{126:function(e,t,a){},162:function(e,t,a){e.exports=a(355)},330:function(e,t,a){},331:function(e,t,a){},339:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=(a(126),a(85)),c=a(10),u=a.n(c),l=a(20),m=a(93),p=a(160),d=(a(168),a(70),a(39)),h=(a(170),a(97)),v=(a(356),a(50)),f=(a(99),a(67)),b=a(23),g=a(24),E=a(26),_=a(25),y=a(27),k=(a(357),a(159)),x=(a(358),a(122)),w=x.a.Option,O=k.a.Title,j=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||(console.log("Received values of form: ",t),a.props.onResult(t))}))},a.state={confirmDirty:!1,autoCompleteResult:[]},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props,a=t.name,n=t.roomId,s=t.role;return r.a.createElement(v.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(O,{level:4},"\u76f4\u64addemo"),r.a.createElement(v.a.Item,{label:"\u4f60\u7684\u6635\u79f0"},e("name",{initialValue:a,rules:[{required:!0,message:"\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a!"}]})(r.a.createElement(f.a,{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0"}))),r.a.createElement(v.a.Item,{label:"\u623f\u95f4\u53f7"},e("roomId",{initialValue:n,rules:[{required:!0,message:"\u623f\u95f4\u53f7\u4e0d\u80fd\u4e3a\u7a7a!"}]})(r.a.createElement(x.a,null,r.a.createElement(w,{value:"15398"},"\u76f4\u64ad\u95f41"),r.a.createElement(w,{value:"2"},"\u76f4\u64ad\u95f42"),r.a.createElement(w,{value:"3"},"\u76f4\u64ad\u95f43")))),r.a.createElement(v.a.Item,{label:"\u89d2\u8272"},e("role",{initialValue:s,rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u89d2\u8272"}]})(r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{value:"1"},"\u6211\u662f\u89c2\u4f17"),r.a.createElement(h.a,{value:"2"},"\u6211\u662f\u4e3b\u64ad")))),r.a.createElement(v.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"\u767b\u5f55")))}}]),t}(n.Component),S=v.a.create({name:"register"})(j),I=(a(328),a(125)),N=(a(330),a(331),function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.stream.play(this.getDivId())}},{key:"getDivId",value:function(){var e=this.props.stream;return"video_".concat(e.getId().split("-").join("_"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"single_video"},r.a.createElement("div",{id:this.getDivId(),className:"single_video_player"}))}}]),t}(r.a.Component)),C=a(90),P=a.n(C),T=a(96),D=a.n(T);function M(e){var t="039e6f420c96b5d6fd03d4542923af89e4f066cc0cd12bd6278c2db45f807018";return{sdkAppId:1400308408,userSig:new window.LibGenerateTestUserSig(1400308408,t,604800).genTestUserSig(e)}}var G=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this))).name=e.name,a.roomId=e.roomId,a.localStream_=null,a.client_=null,a.remoteStreams_=[],D.a.checkSystemRequirements().then((function(e){e||alert("Your browser is not compatible with TRTC! Please download Chrome M72+")})),a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"_initialize",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.name,a=M(t),this.client_=D.a.createClient({mode:"videoCall",sdkAppId:a.sdkAppId,userId:t,userSig:a.userSig}),this.bindEvents(),e.next=6,this.client_.join({roomId:this.roomId});case 6:return e.prev=6,e.next=9,this.createLocalStream({audio:!0,video:!0});case 9:console.log("createLocalStream with audio/video success"),e.next=24;break;case 12:return e.prev=12,e.t0=e.catch(6),console.error("createLocalStream with audio/video failed: "+e.t0),alert("\u8bf7\u786e\u8ba4\u5df2\u8fde\u63a5\u6444\u50cf\u5934\u548c\u9ea6\u514b\u98ce\u5e76\u6388\u4e88\u5176\u8bbf\u95ee\u6743\u9650\uff01\r\n\r\n \u5982\u679c\u60a8\u6ca1\u6709\u8fde\u63a5\u6444\u50cf\u5934\u6216\u9ea6\u514b\u98ce\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u7b2c60\u884c\u4ee3\u7801\u6765\u5173\u95ed\u672a\u8fde\u63a5\u8bbe\u5907\u7684\u91c7\u96c6\u8bf7\u6c42\uff01"),e.prev=16,e.next=19,this.createLocalStream({audio:!1,video:!0});case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(16),console.error("createLocalStream with video failed: "+e.t1);case 24:case"end":return e.stop()}}),e,this,[[6,12],[16,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"createLocalStream",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.localStream_=D.a.createStream({audio:t.audio,video:t.video,userId:this.name}),this.localStream_.setVideoProfile("480p"),e.next=4,this.localStream_.initialize();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"publish",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isPublished_){e.next=3;break}return console.warn("duplicate RtcClient.publish() observed"),e.abrupt("return");case 3:return e.prev=3,e.next=6,this.client_.publish(this.localStream_);case 6:this.isPublished_=!0,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("failed to publish local stream "+e.t0),this.isPublished_=!1;case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"unpublish",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isPublished_){e.next=3;break}return console.warn("RtcClient.unpublish() called but not published yet"),e.abrupt("return");case 3:return e.prev=3,e.next=6,this.client_.unpublish(this.localStream_);case 6:this.isPublished_=!1,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("failed to unpublish local stream because "+e.t0),t||(console.warn("leaving the room because unpublish failure observed"),this.leave());case 13:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"bindEvents",value:function(){var e=this;this.client_.on("error",(function(e){console.error(e)})),this.client_.on("client-banned",(function(e){console.error("client has been banned for "+e)})),this.client_.on("peer-join",(function(e){var t=e.userId;console.log("peer-join "+t)})),this.client_.on("peer-leave",(function(e){var t=e.userId;console.log("peer-leave "+t)})),this.client_.on("stream-added",(function(t){var a=t.stream,n=a.getId(),r=a.getUserId();console.log("remote stream added: [".concat(r,"] ID: ").concat(n," type: ").concat(a.getType())),console.log("subscribe to this remote stream"),e.client_.subscribe(a)})),this.client_.on("stream-subscribed",(function(t){var a=t.stream;e.remoteStreams_.push(a),e.emit("remoteStreamUpdate",e.remoteStreams_)})),this.client_.on("stream-removed",(function(t){var a=t.stream,n=a.getId();a.stop(),e.remoteStreams_=e.remoteStreams_.filter((function(e){return e.getId()!==n})),console.log("stream-removed ID: ".concat(n,"  type: ").concat(a.getType())),e.emit("remoteStreamUpdate",e.remoteStreams_)})),this.client_.on("stream-updated",(function(e){var t=e.stream;console.log("type: "+t.getType()+" stream-updated hasAudio: "+t.hasAudio()+" hasVideo: "+t.hasVideo())})),this.client_.on("mute-audio",(function(e){console.log(e.userId+" mute audio")})),this.client_.on("unmute-audio",(function(e){console.log(e.userId+" unmute audio")})),this.client_.on("mute-video",(function(e){console.log(e.userId+" mute video")})),this.client_.on("unmute-video",(function(e){console.log(e.userId+" unmute video")})),this.client_.on("connection-state-changed",(function(e){console.log("RtcClient state changed to ".concat(e.state," from ").concat(e.prevState))}))}}]),t}(P.a.EventEmitter),L=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this,e))).state={roles:[],agents:[]},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.name,n=t.roomId,(r=new G({name:a,roomId:n})).on("remoteStreamUpdate",(function(e){var t=[],a=[];e.forEach((function(e){"1"===e.getUserId().split("$")[0]?t.push(e):a.push(e)})),s.setState({roles:t,agents:a})})),e.next=5,r._initialize();case 5:return e.next=7,r.publish();case 7:this.rtcClient=r,this.forceUpdate();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.role,t=this.state,a=t.roles,n=t.agents,s=null,i=r.a.createElement("div",{className:"video_waiting"},r.a.createElement("div",null,"\u76f4\u64ad\u8fdb\u5165\u4e2d..."));return this.rtcClient&&("1"===e?(s=r.a.createElement(N,{stream:this.rtcClient.localStream_}),i=null):i=r.a.createElement(N,{stream:this.rtcClient.localStream_})),r.a.createElement("div",{className:"video_wrapper"},r.a.createElement("div",{className:"agent_videos"},i,n.map((function(e){return r.a.createElement(N,{key:e.getId(),stream:e})}))),r.a.createElement("div",{className:"roles_videos"},s,a.map((function(e){return r.a.createElement(N,{key:e.getId(),stream:e})}))))}}]),t}(n.Component),A=(a(333),a(98)),R=(a(335),a(157)),U=a(2),V=a.n(U),z=function(e){var t=e.list,a=e.user;return r.a.createElement("div",{className:"message-wrapper"},null!=t?t.map((function(e,t){var n,s=e.sender,i=V()({"message-content":1,"message-mine":s.name===a.name});return r.a.createElement("div",{key:t,className:i},function(e){return r.a.createElement("div",{className:"usercard"},r.a.createElement("div",null,e,":"))}(s.name.split("$")[1]),(n=e.payload,r.a.createElement("div",{className:"user-message"},r.a.createElement("div",{className:"user-message-content"},n.text))))})):r.a.createElement("div",{className:"center"},r.a.createElement(R.a,null)))},Y=(a(339),a(41)),K=a.n(Y),q=a(158),$=a.n(q),B=K.a.TYPES.GRP_AVCHATROOM,H=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this))).messageResolveUtil={receiveMessage:function(e){this.emit("receiveMessage",W(e.data))}},a.name=e.name,a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"_initialize",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s,i=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.name,a=M(t),n={SDKAppID:a.sdkAppId},r=K.a.create(n),this.tim=r,r.setLogLevel(0),r.registerPlugin({"cos-js-sdk":$.a}),e.next=9,r.login({userID:t,userSig:a.userSig});case 9:return s=function(){r.on(K.a.EVENT.MESSAGE_RECEIVED,i.messageResolveUtil.receiveMessage.bind(i))},e.abrupt("return",new Promise((function(e,t){r.on(K.a.EVENT.SDK_READY,(function(){e(!0),s()}))})));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createGroup",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.tim,n=!1,r=null,e.prev=3,e.next=6,a.getGroupProfile({groupID:t});case 6:(s=e.sent)&&(n=!0),r=s,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:if(n){e.next=19;break}return e.next=17,a.createGroup({type:B,name:"WebSDK",groupID:t});case 17:i=e.sent,r=i.data.group;case 19:return e.abrupt("return",r);case 20:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"joinGroup",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.tim,e.next=3,a.joinGroup({groupID:t,type:B});case 3:return n=e.sent,e.abrupt("return",n.data.status);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"roomExists",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.tim,n=!1,e.prev=2,e.next=5,a.getGroupProfile({groupID:t});case 5:e.sent.data.group&&(n=!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getGroupMessage",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.length>1&&void 0!==r[1]?r[1]:50,a=this.tim,e.next=4,a.getMessageList({conversationID:"GROUP".concat(t)});case 4:return n=e.sent,console.log("get group messages ",n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendMessageToGroup",value:function(){var e=Object(l.a)(u.a.mark((function e(t,a){var n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.tim,r=n.createTextMessage({to:t,conversationType:K.a.TYPES.CONV_GROUP,payload:a}),e.next=4,n.sendMessage(r);case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),t}(P.a.EventEmitter),W=function(e){var t=[].concat(e),a=[];return t.forEach((function(e){var t=e.type,n=e.from,r=e.nick,s=e.avatar,i=e.payload;[K.a.TYPES.MSG_GRP_TIP,K.a.TYPES.MSG_CUSTOM,K.a.TYPES.MSG_GRP_SYS_NOTICE].indexOf(t)>=0||a.push({type:t,sender:{name:n,nick:r,avatar:s},payload:i})})),a},F=f.a.TextArea,J=f.a.Search,Q=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(_.a)(t).call(this,e))).changeText=function(e){a.setState({text:e.target.value})},a.sendMessage=Object(l.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a.state.text).trim()){e.next=4;break}return A.a.error("\u8bf7\u8f93\u5165\u6d88\u606f\u5185\u5bb9"),e.abrupt("return");case 4:return e.prev=4,e.next=7,a.tim.sendMessageToGroup(a.props.roomId,{text:t});case 7:n=e.sent,a.setState({text:""}),A.a.info("\u53d1\u9001\u6210\u529f"),r=a.state.messageList,a.setState({messageList:r.concat(W(n.data.message))}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),A.a.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[4,14]])}))),a.state={text:"",messageList:null},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.initializeSDK()}},{key:"initializeSDK",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n,r,s,i,o,c=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.name,n=t.roomId,r=t.role,s=this.tim=new H({name:a}),e.next=4,s._initialize();case 4:if("2"!==r){e.next=14;break}return e.prev=5,e.next=8,s.createGroup(n);case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(5);case 12:e.next=14;break;case 14:return e.prev=14,e.next=17,s.joinGroup(n);case 17:e.next=21;break;case 19:e.prev=19,e.t1=e.catch(14);case 21:return e.next=23,s.getGroupMessage(n);case 23:i=e.sent,o=W(i.data.messageList),this.setState({messageList:o}),s.on("receiveMessage",(function(e){var t=c.state.messageList||[];c.setState({messageList:t.concat(e)})}));case 27:case"end":return e.stop()}}),e,this,[[5,10],[14,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderPC",value:function(){var e=this.state,t=e.text,a=e.messageList,n=this.props,s=n.name,i=n.role;return r.a.createElement("div",{className:"feed-container"},r.a.createElement("div",{className:"feed_list_wrapper"},r.a.createElement(z,{list:a,user:{name:s,role:i}})),r.a.createElement("div",{className:"feed_editor_wrapper"},r.a.createElement(F,{rows:4,onChange:this.changeText,value:t}),r.a.createElement(d.a,{onClick:this.sendMessage},"\u53d1\u9001")))}},{key:"renderH5",value:function(){var e=this.state,t=e.text,a=e.messageList,n=this.props,s=n.name,i=n.role;return r.a.createElement("div",{className:"feed-container"},r.a.createElement("div",{className:"feed_list_wrapper"},r.a.createElement(z,{list:a,user:{name:s,role:i}})),r.a.createElement("div",{className:"feed_editor_wrapper"},r.a.createElement(J,{placeholder:"\u8f93\u5165\u5185\u5bb9",enterButton:"\u63d0\u4ea4",size:"large",onChange:this.changeText,value:t,onSearch:this.sendMessage})))}},{key:"render",value:function(){return this.props.mobile?this.renderH5():this.renderPC()}}]),t}(n.Component),X=(a(352),a(353),I.a.TabPane),Z=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.roomInfo;return r.a.createElement("div",{className:"room_page"},r.a.createElement("div",{className:"page_room_video"},r.a.createElement(L,e)),r.a.createElement("div",{className:"room-detail"},r.a.createElement("div",{className:"h1"},"\u676d\u5dde\u94fe\u5bb6\u8bb2\u76d8\u901a\u5173"),r.a.createElement("div",{className:"tag"},"\u8fdb\u884c\u4e2d")),r.a.createElement(I.a,{style:{flex:1},className:"page_room_tab"},r.a.createElement(X,{tab:"\u6d88\u606f",key:"1"},r.a.createElement("div",{className:"page_feed_list"},r.a.createElement(Q,Object.assign({mobile:this.props.mobile},e)))),r.a.createElement(X,{tab:"\u64cd\u4f5c",key:"2"},r.a.createElement(d.a,null,"\u558a\u9ea6"))))}}]),t}(n.Component);a(354);var ee=function(){var e,t,a=Object(n.useState)({showPage:"1",profileInfo:{name:"",roomId:"15398",role:""}}),s=Object(p.a)(a,2),i=s[0],c=s[1],d={1:{page:S,props:Object(m.a)({},i.profileInfo,{onResult:function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t,c(Object(m.a)({},i,{showPage:"2",profileInfo:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},2:{page:Z,props:{roomInfo:Object(m.a)({},i.profileInfo,{name:(e=i.profileInfo.name,t=i.profileInfo.role,"".concat(t,"$").concat(e))})}}},h=d[i.showPage].page,v=d[i.showPage].props,f=navigator.userAgent.toLocaleLowerCase().indexOf("mobile")>=0,b=V()({App:1,App_mobile:f}),g=V()(Object(o.a)({"App-body":1},"App-body-".concat(i.showPage),1));return r.a.createElement("div",{className:b},r.a.createElement("div",{className:"App-header"},"\u76f4\u64addemo"),r.a.createElement("div",{className:g},r.a.createElement(h,Object.assign({},v,{mobile:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);