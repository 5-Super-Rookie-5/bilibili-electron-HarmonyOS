import{f as http,s as server,r as resToObj,cq as getCsrf,h as httpServer,cr as httpSvc,cs as APP_VERSION,aQ as IS_MAC,bv as IS_WIN,bV as IS_LINUX,ct as initEmojiPackage,O as formatImg,o as openBlock,c as createElementBlock,a as createBaseVNode,M as defineComponent,U as createVNode,g as events,ab as inject,cu as DYNAMIC_URL_REG_EXP,a9 as openInAppBrowser,al as useRouter,a4 as messageEvents,aa as openPlayerWindow,k as ref,n as onMounted,A as computed,aV as useGamepadStore,P as watch$1,p as onBeforeUnmount,at as renderSlot,R as withDirectives,T as vShow,X as Fragment,Y as renderList,Z as normalizeClass,_ as withModifiers,aj as createBlock,W as unref,a0 as createCommentVNode,a2 as createTextVNode,$ as toDisplayString,w as nextTick,cv as openMainWindowPage,bL as callNativeSync,bo as openInBrowser,ak as openInAppBrowser$1,q as allCustomReport,z as reactive,cw as usePopupZIndexStore,V as withCtx,ae as normalizeStyle,a1 as Transition,be as debounce,cx as getUserByKeyword,bN as createApp,x as storeToRefs,y as useUserInfoStore,aP as resolveDirective,az as setClipboardData,cy as mitt,Q as resolveComponent,t as toastAsync,a5 as alertAsync,C as requestLogin,cc as getDefaultExportFromCjs,aX as withKeys,bb as Upinfo,cz as biliMsg,ax as createStaticVNode,aJ as callNative,bg as throttle$1,a8 as h$6}from"./index.f074ecef.js";import{E as _imports_2,F as utils$2,G as createPopper,V as VImg,P as PlayTime,H as promiseTimeout,T as Tabs}from"./MoreFeedback.eac5fca1.js";import{_ as _export_sfc}from"./plugin-vue_export-helper.21dcd24c.js";import{I as IcoClose$1}from"./ico_max_exit.f7f1ea61.js";import{v as vuiCssPrefix}from"./style.2070e26d.js";function removeElement(me){var Le="__butils_element_dustbin",wt=document.getElementById(Le);wt||(wt=document.createElement("DIV"),wt.id=Le,wt.style.display="none",document.body.appendChild(wt)),wt.appendChild(me),wt.innerHTML=""}function copyText(me,Le){var wt=document.createElement("textarea");wt.value=me,wt.setAttribute("readonly",""),wt.style.position="absolute",wt.style.left="-9999px";var $t=Le||document.body;$t.appendChild(wt);var kt=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):!1;wt.select(),document.execCommand("copy"),$t.removeChild(wt),removeElement(wt),kt&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(kt))}function isFullscreen(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}const DEFAULT_FACE="//i0.hdslb.com/bfs/face/member/noface.jpg",DEFAULT_IMG="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAAAXNSR0IArs4c6QAACSlJREFUeAHtnFtsFFUYx1toiw1CpYiCEqURokhK6SUaIZE7ohArCokRlQdN9MUnH8REjYlEXzTB8AAmJsaEEAFFLlGMQBTRkChsL1K5FGMRVAxQAgi0tFB/X8O0y3am7NLd7tnZ/yTTM/Od6/zOf851tjk5OkRABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABERABEQglkBurCEM9w0NDQUtLS3zc3Nzb+PcUV5e3pjs56qpqRnT3t7+yIABA04XFxdvLikpaUl2HulOb0C6C5CK/C9evLi0o6PjiytXrqzk3BeJRB5PZj6kN+vy5cu/IbxV5LO2ubn5nWSm70paoRSHtRgeYCqvAIF8zpte7dn64pLObNLbQhqFXjrk0ZWfZwuDG0px0NS/T+Ucj6qgfN709Xv27HkiypbwJfHnkM5mIt4UFbk5Pz//3aj70FyGUhyMMZqooemc1wiE+3V79+5dgJvwQbxHiLSJM1oYpwYOHDizrKzsYMIJZkCEUA5IPe51dXX3trW1fcf9KM+G20a383RlZeWGKFuvlwhjLgE20n0Migp4ihZqZkVFRV2ULVSXoWw5vBqyNzovL28aYvjbs+Hm2yCSQeVTUbbAS8I9imesME6S5owwC8OAhFoc9oCTJk06RNM/PUYgeQwqP2MMscjCBB0MPh9DSF9Gtxikc4LwM2h56oPihcWecd0KFVoK/CVUUhXunZz5cVZGEZV8S0zYy6RzLMbWdUv4O7iJTf8scU53BerlgvgthD2Ku4su6FNamiO9BHfOK2PE0djYOPTMmTMfQPBF5yjGV6A2BPIeLdayqqqqtviipDdURoijvr5+GAPLbbyBlenFlZTcbcazKBME4vyYA0HkXrp0aUNIhGHqqqarWZEUmaU4EefFwTTyFRhMSzGHfk0eob9kK639mukNZJZ3A3H6LYptoLFP8vp1MjzEm9h8nTD97o0AbDB7V1DGjD3exm9bkL8LdqfF0dra+iSQRvqBQhC2+LSQKeVhP38XbKyRPIQI1lGW0bHlQTyTGUvdN3HixAOxfq7cO92tAHBOAKiLiKPaZWFYuZm67maG8mzAM+Sw5T8lyM8Fu9PiANCDAZC+ypQ1A8q5k2do8HsOWpUyP7srNqfFQcvh26UAb78rAOMsR1B5b40zflqCOS0Ouo5hflRoqi/52V218RytfmXDPtTP7orNaXHQcmTEIl0fKtNp/k4Xrg/QFTUJBLJOHKydjKRFGpgoOzb8or8JSTR6RoZ3ep2jr0T52KeEz/oqEEO5naRXzqLaKFYnJ3Ft6yRxHQjqZr5mP4ZATjNOqCFSDW6ETwFqWKdo5PpKXAllWKBQiMNaAhaUxiOEThF4QmCzrsivPvCvwB63ONjbKSOOtbLDcWfhzsLNYSqaw0LXeZb4La1OwTBYruGb0oYJEyZk1KCZ8vc4QiEOKudrnixowazHQ1Ox1op80sMjwEB4E5Pvgd9gPCbb6QkGke6+avONkynGsIw5fk0QeGBl+6XTmzj8wmOrD7BnlDkULQfEI3FQP0cYa/4jNP32ZidyrCXwKcYW1m3ZeKX4OpHjKc91kki/dyjFQSWeoBJt4BjhusbGAXxLepjrjhtBzh7ON8Szs/NgnHE34w3rmipMMLgmGvtksfPAJnF4MNLtUnmHmIG8SQXV2gwCIfyVyjJd3dc5Qh4bvXwQzAhPMEOGDEm0m/OSccoNRcvBm2pTyWXpJItg7Kv0b6+e6SxK0vIOy4A0aUCUUDcBiaObha5iCEgcMUB0201A4uhmoasYAlknDmYVL9TW1tr085oD2wOstO5k/6THR8HYZ3Dar+yz6sgqcZgomG5+zLebPyIS+zll57F///7hLHmvZSr8MIY1CKTrJ5CEW4htO+dW+9VdZ4Qs+ROKqWy8dcViWBNh/+EchUh2IIK3mAYfvHDhwjKEMQa7HVOwbUAUHxJmKudr2Oyjo8jYsWP/swDZcmRVy8H2um25z+W0NQlrBZYjiq2clVy3Y+9cBeV+PqKw35S8wWmtyIHCwsJ5+Nt6StYcWSUOq1VWU+sLCgrsl/prqGzbVm/n/JlWZSZ+9r84FnPuw8+W2s/hLmcLvoot+Oj/EoRX+I+s6la86iwtLf2X68W0EEuampryov9NJD9wXoPfGj4UGkxLY7+PyarWwmNkrtPisLeXI2UfGZO+tRp29jj4r0DnexiTb3BaeE53Kwij2a8+GA8M8rM7bIv+J3NdxeT5znTdOHjhtDjg5dvP88bf7yDL3ooUVN6TvUVKt5/r4gj6KGce09B70g0vnvyZEtv3puP9wiLyWj+7KzbXxWFb4D0OYA8C7BYEYrMOZw+EMZMucHVQAfn25KcgPxfsKRvsJePhbKUSEfyBGLq+svJJ9yhhTvvY020aRblHBBWCMv/A1HlqkL8LdqfFYYB4+17m7VvpAqxklQFhdLCuMoP/tPx9stJMRTqudys5APyIB/ftXlIBpD/SpEVZ4bowjIPz4rC3rKioaBFu0OC0P+ozaXnwHGvpTl5NWoIpTMh5cdizjxs37iz/pno2lyuA6/TCUS911UJXspRvTRfzDL4Lb73ETYuX82OOWCp8VzGWZvl5AFfhjsbtXOXluoSwPRab8LdNtqSvJ5Cf/Xbl9tjykZ/t1/xudsK0cv8n7i427lZn2v5MxokjtjK8e0Rj/6t0gXfvuVTOczTjgdNJL1yiLj+FqOYbkK6fJnjxyW87+Vkrl/FHRnQr8VBGGKt8wh3DvsXH3mcTwtiGEA77JBSamVVoxMFuqs1oFlBhv+Aep3/fxPV07CnZvyDdC6Q/i3zWW35cRxDiM7QaG3wEI5MIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIpJPA/+0R7s0ypFpmAAAAAElFTkSuQmCC",LINE_FEED=`
`,MAX_SAVE_STEPS=50,shareAdd=(me,Le)=>http.post(server.api+"/x/web-interface/share/add",me,Le),replyAdd=me=>http.post(server.api+"/x/v2/reply/add",{...me,jsonp:"jsonp",scene:"msg",plat:1,from:me.from||"im-reply",build:0,mobi_app:"web"}),replyAction=me=>http.post(server.api+"/x/v2/reply/action",{...me,build:0,mobi_app:"web"}),dmThumbupAdd=me=>http.post(server.api+"/x/v2/dm/thumbup/add",{oid:me.oid,dmid:me.dmid,op:me.op,scene:me.scene||"msg",from:me.from||"im-reply"}),watchAdd=me=>http.post(server.api+"/x/v2/history/toview/add",{aid:me}),watchDel=me=>http.post(server.api+"/x/v2/history/toview/del",{aid:me}),CONTENT_TYPE_JSON="application/json;charset=UTF-8",_addCsrfToApiUrl=me=>`${me}?csrf=${getCsrf()}`,_post=(me,Le)=>http.post(_addCsrfToApiUrl(me),Le,{headers:{"Content-Type":CONTENT_TYPE_JSON}});function getDynamicPublishConfig(){return http.get("//api.bilibili.com/x/dynamic/feed/create/init_check",{params:{scene:1,meta:{platform:"pc"}}}).then(resToObj)}function getUnameToMid(me){return http.get("//api.bilibili.com/x/polymer/web-dynamic/v1/name-to-uid",{params:{names:me,teenagers_mode:0}}).then(resToObj)}const _createDynamicCheck=({dyn_req:{content:me,pics:Le}})=>_post("//api.bilibili.com/x/dynamic/feed/create/submit_check",{content:me,pics:Le}).then(resToObj),_createDynamicSubmit=me=>_post("//api.bilibili.com/x/dynamic/feed/create/dyn",me).then(resToObj),_createDynamic=async me=>{try{return await _createDynamicCheck(me),await _createDynamicSubmit(me)}catch(Le){return Promise.reject(Le)}},_topicPubUpload=me=>_post("//api.bilibili.com/x/topic/web/pub/upload",me).then(resToObj),_setParamsOption=(me,Le,wt)=>{me.option||(me.option={}),me.option[Le]=wt},_getCreateContents=(me,Le)=>{switch(Le.type){case"text":me.push({raw_text:Le.text,type:1,biz_id:""});break;case"highlight":switch(Le.data.type){case"at":me.push({raw_text:Le.text,type:2,biz_id:String(Le.data.rid)});break;case"lottery":me.push({raw_text:Le.text,type:3,biz_id:String(Le.data.rid)});break;case"vote":me.push({raw_text:Le.text,type:4,biz_id:String(Le.data.rid)});break;case"bv":me.push({raw_text:Le.data.rid,type:7,biz_id:Le.data.rid});break}break;case"emoji":me.push({raw_text:Le.text,type:9,biz_id:""});break}return me},_setCommentOption=(me,Le)=>{switch(Le){case 0:_setParamsOption(me,"close_comment",1);break;case 2:_setParamsOption(me,"up_choose_comment",1);break}},_setCreateScene=me=>{var Le,wt,$t;if(!me.scene&&((wt=(Le=me.content)==null?void 0:Le.contents)!=null&&wt.length&&(me.scene=1),($t=me.pics)!=null&&$t.length&&(me.scene=2),me.video&&(me.scene=3),me.repost_src&&(me.repost_src.dynId?me.scene=4:me.repost_src.revsId&&(me.scene=5)),me.sketch&&(me.scene=6),!me.scene))throw new Error("dyn create params scene empty")};async function createDynamic(me){var Le,wt,$t,kt,It;try{const Rt={content:{contents:(Le=me==null?void 0:me.nodes)==null?void 0:Le.reduce(_getCreateContents,[])},pics:(wt=me==null?void 0:me.pics)!=null&&wt.length?me==null?void 0:me.pics:void 0,scene:me==null?void 0:me.scene,sketch_type:me==null?void 0:me.sketchType,sketch:me==null?void 0:me.sketch,attach_card:me==null?void 0:me.attachCard,repost_src:me==null?void 0:me.repostSrc,upload_id:me==null?void 0:me.uploadId,meta:{app_meta:{from:(me==null?void 0:me.from)||"create.dynamic.pc"}}};($t=me==null?void 0:me.topic)!=null&&$t.id&&(Rt.topic={id:me.topic.id,name:me.topic.name,from_source:me.topic.fromSource,from_topic_id:me.topic.fromTopicId||0}),_setCreateScene(Rt);const Pt={dyn_req:Rt};[4,5].includes(Rt.scene)&&(delete Rt.repost_src,Pt.web_repost_src={},Rt.scene===4?Pt.web_repost_src.dyn_id_str=me.repostSrc.dynId:Pt.web_repost_src.revs_id=me.repostSrc.revsId),_setCommentOption(Rt,me.comment);const Ft=await _createDynamic(Pt);if(Rt.topic)try{_topicPubUpload({topic_id:(kt=me==null?void 0:me.topic)==null?void 0:kt.id,request_id:(It=me==null?void 0:me.topic)==null?void 0:It.requestId,upload_id:me==null?void 0:me.uploadId})}catch(Ut){console.log(Ut)}return Ft}catch(Rt){return Promise.reject(Rt)}}function removeDynamic(me){return _post("//api.bilibili.com/x/dynamic/feed/operate/remove",{dyn_id_str:me}).then(resToObj)}function padZero(me,Le=2){if(Le<1)return me.toString();Le=Math.floor(Le);const wt=10**Le;return me<wt?`${"0".repeat(Le-me.toString().length)}${me}`:wt.toString()}const COMMON_PARAMS={build:0,platform:"web",device:"",mobi_app:"pc_electron"};function getBuildParam(){const me=APP_VERSION.split(".");return parseInt(`${me[0]}${padZero(me[1])}${padZero(me[2])}`)}function getDeviceParam(){let me="";return IS_MAC?me="mac":IS_WIN?me="win":IS_LINUX?me="linux":me="unknow",me}function getCommonQueryParams(){return COMMON_PARAMS.build||(COMMON_PARAMS.build=getBuildParam(),COMMON_PARAMS.device=getDeviceParam()),COMMON_PARAMS}let fakeMid="";function getFakeMid(me=!1){return(me||!fakeMid)&&(fakeMid=Math.random().toString().slice(2,8)),fakeMid}async function getDynamicListAll({page:me=1,current:Le="",offset:wt="",hostMid:$t=0}){return http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/all",{params:{page:me,update_baseline:Le,offset:wt,host_mid:$t,timezone_offset:new Date().getTimezoneOffset(),...getCommonQueryParams()}}).then(resToObj)}function getDynamicList({scene:me="GENERAL",page:Le=1,current:wt="",offset:$t="",hostMid:kt=0,isLogin:It=!0}){return me==="SPACE"?httpServer.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/space",{params:{page:Le,offset:$t,host_mid:kt,timezone_offset:new Date().getTimezoneOffset(),...getCommonQueryParams()},isWbi:!0}).then(resToObj):It?(kt&&Le===1&&getAllDynamicDetails(kt),getDynamicListAll({page:Le,current:wt,offset:$t,hostMid:kt})):http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/hot",{params:{page:Le,offset:$t,timezone_offset:new Date().getTimezoneOffset(),fake_mid:getFakeMid(Le===1),...getCommonQueryParams()}}).then(resToObj)}async function getDynamicUpdate(me,Le=!1){const wt=`//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/all/update${Le?"?type=video":""}`;return http.get(wt,{params:{update_baseline:me,...getCommonQueryParams()}}).then(resToObj)}async function getDynamicFeedVideo({page:me=1,offset:Le="",hostMid:wt=0}){try{return await http.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/feed/video",{params:{page:me,offset:Le,host_mid:wt,...getCommonQueryParams()}})}catch($t){return Promise.reject($t)}}async function getDynamicVideos({page:me=1,offset:Le="",hostMid:wt=0},$t=[]){var kt,It,Rt,Pt;try{if(wt){me===1&&getAllDynamicDetails(wt);const Ft=30,Ut=await http.get("//api.bilibili.com/x/space/arc/list",{params:{ps:Ft,pn:me,mid:wt}}),Xt=resToObj(Ut);let Jt=!0;return(Rt=Xt.page)!=null&&Rt.count?(Xt.page.pn||me)*(Xt.page.ps||Ft)>=Xt.page.count&&(Jt=!1):Jt=!1,(Pt=Xt.archives)!=null&&Pt.length&&($t=[...$t,...Xt.archives]),{items:$t,offset:"",has_more:Jt,page:me}}else{const Ft=await getDynamicFeedVideo({page:me,offset:Le,hostMid:0}),Ut=resToObj(Ft),Xt=!!(Ut.has_more&&((kt=Ut.items)==null?void 0:kt.length));return(It=Ut.items)!=null&&It.length&&($t=[...$t,...Ut.items]),$t.length<30&&Xt?await getDynamicVideos({page:++me,offset:Ut.offset,hostMid:wt},$t):{items:$t,offset:Ut.offset,has_more:Xt,page:me}}}catch(Ft){return Promise.reject(Ft)}}function getDynamicDetail(me,Le=!1,wt=0){const $t={...getCommonQueryParams()};return wt?($t.rid=me,$t.type=wt):($t.id=me,$t.preview=Le?"1":""),httpServer.get("//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/detail",{params:$t,isWbi:!0}).then(resToObj)}function getDynamicDetailForward(me){return httpSvc.request({url:"//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/detail/forward",params:{...me,...getCommonQueryParams()}}).then(resToObj)}function getDynamicForwardPreview(me,Le=0){const wt={...getCommonQueryParams()};return Le?(wt.rid=me,wt.type=Le):wt.id=me,httpSvc.request({url:"//api.bilibili.com/x/polymer/web-dynamic/desktop/v1/forward/preview",params:wt}).then(resToObj)}function postDynamicLike({dynamic_id:me,up:Le,statistics:wt,spmid:$t,from_spmid:kt}){return http.post("//api.vc.bilibili.com/dynamic_like/v1/dynamic_like/thumb",{dynamic_id:me,up:Le,statistics:wt,spmid:$t,from_spmid:kt}).then(resToObj)}function postDynamicReport({id:me,uid:Le,type:wt,desc:$t=""}){return http.post("//api.bilibili.com/x/dynamic/feed/dynamic_report/add",{dynamic_id:me,accused_uid:Le,reason_type:wt,reason_desc:$t}).then(resToObj)}function postSetDynamicSpaceTop(me){return http.post(_addCsrfToApiUrl(`//api.bilibili.com/x/dynamic/feed/space/${me.status?"rm_top":"set_top"}`),{dyn_str:me.dynamic_id},{headers:{"Content-Type":"application/json"}}).then(resToObj)}function getAllDynamicDetails(me){const Le=`${server.api}/x/polymer/web-dynamic/v1/feed/all?host_mid=${me}&offset=&page=1`;return http.get(Le).then(resToObj)}const map={},getMidByUname=me=>map[me]||null,getMidMapBatchByUnames=me=>new Promise((Le,wt)=>{const $t={},kt={};let It=!0;if(me.forEach(Rt=>{map[Rt]?$t[Rt]=map[Rt]:(It=!1,kt[Rt]=0)}),It)return Le($t);getUnameToMid(Object.keys(kt).join(",")).then(Rt=>{var Pt;(Pt=Rt.uid_list)!=null&&Pt.length&&(Rt.uid_list.forEach(Ft=>{Ft.name&&Ft.uid&&(kt[Ft.name]=Ft.uid)}),Object.assign(map,kt),Object.assign($t,kt)),Le($t)}).catch(wt)}),FULL_PATTERN="[\0-\xFF]",getStringLength=(me="")=>{if(typeof me!="string")return 0;let Le=me.length;const wt=new RegExp(FULL_PATTERN,"g");if(wt.test(me)){const $t=me.replace(wt,"").length;Le=Math.ceil((Le-$t)/2)+$t}return Le},getRange=me=>{const Le=me.ownerDocument||me.document,$t=(Le.defaultView||Le.parentWindow).getSelection();return $t.rangeCount>0?$t.getRangeAt(0):null},getElChildNode=(me,Le)=>{for(;Le.parentElement;){if(Le.parentElement===me)return Le;Le=Le.parentElement}return null},getCursorPosition=(me,Le=!1)=>{const wt={start:{index:0,offset:0},end:{index:0,offset:0},position:{top:0,left:0}};if(!me)return wt;const $t=getRange(me);if(!$t)return wt;if(Le){const Rt=me.getBoundingClientRect(),Pt=$t.getBoundingClientRect(),{scrollTop:Ft}=me.parentElement||{scrollTop:0};wt.position.top=Pt.top-Rt.top-Ft,wt.position.left=Pt.left-Rt.left}const kt=getElChildNode(me,$t.startContainer),It=getElChildNode(me,$t.endContainer);return kt?(wt.start.index=Array.from(me.childNodes).indexOf(kt),wt.start.offset=$t.startOffset):wt.start.index=$t.startOffset,It?(wt.end.index=Array.from(me.childNodes).indexOf(It),wt.end.offset=$t.endOffset):wt.end.index=$t.endOffset,wt};let packages=null;const dict={},initEmoji=async()=>{try{packages=await initEmojiPackage()}catch(me){return Promise.reject(me)}},getEmojiData=me=>{var wt;if(dict[me])return dict[me];if(!packages)return null;let Le=null;for(let $t=0;$t<packages.length;$t++)if(!!((wt=packages[$t].emote)!=null&&wt.length))for(let kt=0;kt<packages[$t].emote.length;kt++){const It=packages[$t].emote[kt];if(It.text===me){Le=It;break}}return Le&&Le.type!==4?(dict[me]={...Le,src:formatImg(Le.url,{w:48,h:48})},dict[me]):null},getRichTextareaNodeId=(me,Le)=>me&&Le?`${me}:${Le}`:null,getRichTextareaTextNode=me=>({type:"text",text:me,data:null}),getRichTextareaHighlightNode=({type:me,data:Le,unique:wt})=>({id:wt&&getRichTextareaNodeId(me,Le.rid)||null,type:"highlight",text:Le.text,data:{...Le,type:me}}),getRichTextareaEmojiNode=(me,Le)=>{const wt=Le||getEmojiData(me);return wt?{type:"emoji",text:wt.text,data:wt}:getRichTextareaTextNode(me)},getRichTextareaNode=({type:me,data:Le})=>{switch(me){case"text":return getRichTextareaTextNode(Le.text);case"at":return getRichTextareaHighlightNode({type:me,data:Le,unique:!1});case"vote":case"lottery":return getRichTextareaHighlightNode({type:me,data:Le,unique:!0});case"emoji":return getRichTextareaEmojiNode(Le.text,Le);default:return null}},mergeTextNodes=(me,Le=0)=>{const wt=[];let $t=0;for(let kt=0;kt<me.length;kt++){const It=me[kt],Rt=getArrayLastItem(wt);(Rt==null?void 0:Rt.type)==="text"&&It.type==="text"?(Rt.text+=It.text,kt>=Le&&$t++):It.type==="text"?It.text&&wt.push(It):wt.push(It)}return[wt,$t]},_genSplitFunc=(me,Le)=>async(wt,$t)=>{for(let kt=0;kt<$t.length;kt++){const It=$t[kt];It.type?wt.push(me(It.text)):await Le(wt,It.text)}},upgradeText2RichTextareaNodes=async(me="")=>{const Le=[];if(!me)return Le;const wt=_genSplitFunc(getRichTextareaEmojiNode,async(It,Rt)=>{It.push(getRichTextareaTextNode(Rt))}),$t=_genSplitFunc(It=>{const Rt=getMidByUname(It.substr(1));return Rt?getRichTextareaHighlightNode({type:"at",data:{text:It,rid:Rt},unique:!1}):getRichTextareaTextNode(It)},async(It,Rt)=>{const Pt=splitStringWithRegExp(Rt,new RegExp(/\[[^([.*\])]+\]/g));await wt(It,Pt)}),kt=splitStringWithRegExp(me,/@[^\s$]{1,16}/g);return await getMidMapBatchByUnames(kt.filter(It=>It.type===1).map(It=>It.text.substr(1))),await $t(Le,kt),mergeTextNodes(Le)[0]},splitStrByIndex=(me,Le)=>{const wt=me.slice(0,Le),$t=me.slice(Le);return{before:wt,after:$t}},insertStrIntoStr=(me,Le,wt)=>{const{before:$t,after:kt}=splitStrByIndex(me,Le);return`${$t}${wt}${kt}`},spliceStr=(me,Le,wt,$t="")=>{const{before:kt,after:It}=splitStrByIndex(me,Le);return`${kt}${$t}${It.slice(wt)}`},_genTextNode=me=>({type:"text",text:me,data:null}),_findUniqueNodeIndex=(me,Le)=>Le.findIndex(wt=>wt.id===me.id&&wt.type===me.type),_updateNodes=(me,Le)=>{for(let wt=0;wt<me.length;wt++)if(me[wt].id){const $t=_findUniqueNodeIndex(me[wt],Le);$t>-1&&(me[wt]=Le.splice($t,1)[0])}},insertNodesIntoNodes=({oldNodes:me,position:Le,newPositiveNodesSlice:wt})=>{wt=mergeTextNodes(wt)[0],_updateNodes(me.positive,wt);const $t={nodes:me.positive,position:{start:{...Le.start},end:{...Le.end}}};if(!wt.length)return $t;const kt=getArrayLastItem(wt),It=kt.type==="text"?kt.text.length:0;if(me.positive.length===0)return $t.nodes=wt,$t.position.start.index=$t.nodes.length,$t.position.start.offset=It,$t.nodes[0].type==="text"&&$t.position.start.index--,$t.position.end={...$t.position.start},$t;const Rt=Le.start.index,Pt=me.positive[Rt];if((Pt==null?void 0:Pt.type)!=="text"||!(Pt!=null&&Pt.text)){const[Ni]=mergeTextNodes([...$t.nodes.slice(0,Rt),...wt,...$t.nodes.slice(Rt)]);return $t.nodes=Ni,$t.position.start.index+=It?wt.length-1:wt.length,$t.position.start.offset=It,$t.position.end={...$t.position.start},$t}const{before:Ft,after:Ut}=splitStrByIndex(Pt.text,Le.start.offset),Xt=$t.nodes.slice(0,Rt),Jt=$t.nodes.slice(Rt+1);Ft&&Xt.push(_genTextNode(Ft)),Ut&&Jt.unshift(_genTextNode(Ut));const[ii]=mergeTextNodes([...Xt,...wt,...Jt]);if($t.nodes.length===ii.length)$t.position.start.offset=It+Le.start.offset;else{let Ni=$t.position.start.index+wt.length;Ft&&Ni++,(kt==null?void 0:kt.type)==="text"&&Ni--,$t.position.start.index=Ni,$t.position.start.offset=It}return $t.position.end={...$t.position.start},$t.nodes=ii,$t},getNodeText=me=>{if((me==null?void 0:me.nodeType)!==3)throw new Error("getNodeText error");return me.textContent},setNodeText=(me,Le)=>{if(!me)throw new Error("setNodeText error");me.textContent=Le},createTrimTextNode=me=>{const Le=getNodeText(me),wt={prefix:"",text:"",suffix:"",revert(It){return`${this.prefix}${It||this.text}${this.suffix}`}};if(!Le)return wt;const $t=0;let kt;return Le.slice(-1)===LINE_FEED&&(kt=-1,wt.suffix=LINE_FEED),wt.text=Le.slice($t,kt),wt},restoreFromRealNodes=me=>{const Le=[];for(let wt=0;wt<me.length;wt++){const $t=me[wt];if($t.nodeType===3){let kt=getNodeText($t);if((wt===0||wt===me.length-1)&&(kt=createTrimTextNode(me[wt]).text),kt){const It=Le.length-1,Rt=Le[It];(Rt==null?void 0:Rt.type)==="text"?Rt.text+=kt:Le.push({type:"text",text:kt})}}else Le.push(JSON.parse($t.dataset.data))}return Le},degradeRichTextareaNodes2Text=me=>me.reduce((Le,wt)=>Le+=wt.text,""),splitStringWithRegExp=(me,Le)=>{if(!me)return[];const wt=me.match(Le);if(!wt)return[{type:0,text:me}];let $t=0;const kt=wt.reduce((It,Rt)=>{const Pt=[],Ft=me.slice($t).indexOf(Rt),Ut=me.slice($t,$t+Ft);return Ut&&Pt.push({type:0,text:Ut}),Pt.push({type:1,text:Rt}),$t=$t+Ft+Rt.length,It.concat(Pt)},[]);return $t<me.length&&kt.push({type:0,text:me.slice($t)}),kt};var RichTextNodeType=(me=>(me.RICH_TEXT_NODE_TYPE_NONE="RICH_TEXT_NODE_TYPE_NONE",me.RICH_TEXT_NODE_TYPE_TEXT="RICH_TEXT_NODE_TYPE_TEXT",me.RICH_TEXT_NODE_TYPE_AT="RICH_TEXT_NODE_TYPE_AT",me.RICH_TEXT_NODE_TYPE_LOTTERY="RICH_TEXT_NODE_TYPE_LOTTERY",me.RICH_TEXT_NODE_TYPE_VOTE="RICH_TEXT_NODE_TYPE_VOTE",me.RICH_TEXT_NODE_TYPE_TOPIC="RICH_TEXT_NODE_TYPE_TOPIC",me.RICH_TEXT_NODE_TYPE_GOODS="RICH_TEXT_NODE_TYPE_GOODS",me.RICH_TEXT_NODE_TYPE_BV="RICH_TEXT_NODE_TYPE_BV",me.RICH_TEXT_NODE_TYPE_AV="RICH_TEXT_NODE_TYPE_AV",me.RICH_TEXT_NODE_TYPE_EMOJI="RICH_TEXT_NODE_TYPE_EMOJI",me.RICH_TEXT_NODE_TYPE_USER="RICH_TEXT_NODE_TYPE_USER",me.RICH_TEXT_NODE_TYPE_CV="RICH_TEXT_NODE_TYPE_CV",me.RICH_TEXT_NODE_TYPE_VC="RICH_TEXT_NODE_TYPE_VC",me.RICH_TEXT_NODE_TYPE_WEB="RICH_TEXT_NODE_TYPE_WEB",me.RICH_TEXT_NODE_TYPE_TAOBAO="RICH_TEXT_NODE_TYPE_TAOBAO",me.RICH_TEXT_NODE_TYPE_MAIL="RICH_TEXT_NODE_TYPE_MAIL",me.RICH_TEXT_NODE_TYPE_OGV_SEASON="RICH_TEXT_NODE_TYPE_OGV_SEASON",me.RICH_TEXT_NODE_TYPE_OGV_EP="RICH_TEXT_NODE_TYPE_OGV_EP",me.RICH_TEXT_NODE_TYPE_SEARCH_WORD="RICH_TEXT_NODE_TYPE_SEARCH_WORD",me))(RichTextNodeType||{}),MdlDynType=(me=>(me.MDL_DYN_TYPE_FORWARD="MDL_DYN_TYPE_FORWARD",me.MDL_DYN_TYPE_ARCHIVE="MDL_DYN_TYPE_ARCHIVE",me.MDL_DYN_TYPE_DRAW="MDL_DYN_TYPE_DRAW",me.MDL_DYN_TYPE_LIVE_RCMD="MDL_DYN_TYPE_LIVE_RCMD",me))(MdlDynType||{}),ThreePoint=(me=>(me.THREE_POINT_DELETE="THREE_POINT_DELETE",me.THREE_POINT_REPORT="THREE_POINT_REPORT",me.THREE_POINT_FOLLOWING="THREE_POINT_FOLLOWING",me.THREE_POINT_COPY="THREE_POINT_COPY",me.THREE_POINT_TOP="THREE_POINT_TOP",me.THREE_POINT_WATCH_LATER="THREE_POINT_WATCH_LATER",me.THREE_POINT_AUTOPLAY="THREE_POINT_AUTOPLAY",me.THREE_POINT_UNFAV="THREE_POINT_UNFAV",me.THREE_POINT_UNSUBS="THREE_POINT_UNSUBS",me.THREE_POINT_TOPIC_REPORT="THREE_POINT_TOPIC_REPORT",me.THREE_POINT_TOPIC_IRRELEVANT="THREE_POINT_TOPIC_IRRELEVANT",me.THREE_POINT_RCMD_RESOURCE="THREE_POINT_RCMD_RESOURCE",me.THREE_POINT_RCMD_FEEDBACK="THREE_POINT_RCMD_FEEDBACK",me))(ThreePoint||{}),ModuleType=(me=>(me.MODULE_TYPE_TAG="MODULE_TYPE_TAG",me.MODULE_TYPE_AUTHOR="MODULE_TYPE_AUTHOR",me.MODULE_TYPE_ITEM_NULL="MODULE_TYPE_ITEM_NULL",me.MODULE_TYPE_DISPUTE="MODULE_TYPE_DISPUTE",me.MODULE_TYPE_TOPIC="MODULE_TYPE_TOPIC",me.MODULE_TYPE_DESC="MODULE_TYPE_DESC",me.MODULE_TYPE_DYNAMIC="MODULE_TYPE_DYNAMIC",me.MODULE_TYPE_INTERACTION="MODULE_TYPE_INTERACTION",me.MODULE_TYPE_STAT="MODULE_TYPE_STAT",me))(ModuleType||{});const _compare=(me,Le)=>{if(!Le||typeof Le!="object")return!0;for(const wt in Le)if(Le[wt]!==me[wt])return!1;return!0},eventPathInclude=(me,Le,wt="ELEMENT")=>{const $t=me.path;for(let kt=0;kt<$t.length;kt++)if(wt==="ELEMENT"&&$t[kt]===Le||wt==="ABSTRACT"&&_compare($t[kt],Le))return!0;return!1},getScrollParent=me=>{let Le=me;if(!Le)return null;for(;Le&&Le.tagName!=="HTML"&&Le.tagName!=="BOYD"&&Le.nodeType===1;){const wt=window.getComputedStyle(Le).overflowY;if(wt==="scroll"||wt==="auto"||wt==="overlay")return Le.tagName==="HTML"||Le.tagName==="BODY"?document.documentElement:Le;Le=Le.parentNode}return document.documentElement},getSelectorByClassNames=(...me)=>"."+me.filter(Boolean).join("."),getArrayLastItem=me=>me.length>0?me[me.length-1]:null,clearArray=(me,...Le)=>(me.splice(0,me.length,...Le),me);function composeFunc(...me){return()=>{me.forEach(Le=>{try{Le()}catch(wt){console.log(wt)}})}}const _hoisted_1$H={viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$E=createBaseVNode("path",{"clip-rule":"evenodd",d:"m11.05 3.168 1.741 3.528c.163.33.48.56.844.613l3.894.566a1.12 1.12 0 0 1 .621 1.911l-2.817 2.747a1.12 1.12 0 0 0-.323.993l.666 3.877a1.12 1.12 0 0 1-1.626 1.181l-3.484-1.83a1.12 1.12 0 0 0-1.042 0l-3.483 1.83a1.12 1.12 0 0 1-1.626-1.18l.664-3.878a1.119 1.119 0 0 0-.321-.993L1.939 9.786a1.121 1.121 0 0 1 .622-1.911l3.894-.566a1.12 1.12 0 0 0 .843-.613L9.04 3.168a1.121 1.121 0 0 1 2.01 0Z",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),_hoisted_3$D=createBaseVNode("path",{d:"M11.603 11.874a1.618 1.618 0 0 1-3.12-.017",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),_hoisted_4$i=[_hoisted_2$E,_hoisted_3$D];function render$t(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$H,[..._hoisted_4$i])}var IcoCollect={render:render$t},style$1="";const Emoji$1=defineComponent({name:"DynamicRichTextNodeEmoji",props:{src:{type:String,required:!0},alt:{type:String,default:""}},setup(me){return()=>createVNode("img",{class:"dynamic_rich_text_emoji",src:me.src,alt:me.alt},null)}}),Tag=defineComponent({name:"DynamicRichTextNodeTag",props:{text:{type:String,default:"",required:!0}},setup(me){function Le(wt){wt.stopPropagation(),events.emit("hidePopover"),events.emit("search",me.text.slice(1,-1))}return()=>createVNode("span",{class:"dynamic_rich_text_tag",onClick:Le},[me.text])}}),Link=defineComponent({name:"DynamicRichTextNodeLink",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(me){const Le=inject("dynamicScene"),wt=$t=>{$t.stopPropagation(),events.emit("hidePopover");const kt=me.href.match(DYNAMIC_URL_REG_EXP);if(kt!=null&&kt[0]){$t.preventDefault();const It=kt[0].replace("t.bilibili.com/","");events.emit("viewDynamicDetails",{id:It,scene:Le});return}openInAppBrowser(me.href,"dynamic.RichText")};return()=>createVNode("span",{class:"dynamic_rich_text_link",onClick:wt},[me.text])}}),At$2=defineComponent({name:"DynamicRichTextNodeAt",props:{text:{type:String,default:""},rid:{type:String,default:""}},setup(me){const Le=useRouter(),wt=$t=>{$t.stopPropagation(),events.emit("hidePopover"),Le.push({name:"Space",query:{mid:Number(me.rid)}}),messageEvents.emit("close")};return()=>createVNode("span",{class:"dynamic_rich_text_at",onClick:wt},[me.text])}}),Vote=defineComponent({name:"DynamicRichTextNodeVote",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(me){const Le=wt=>{wt.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(me.href,"dynamic.Vote")};return()=>createVNode("span",{class:"dynamic_rich_text_vote",onClick:Le},[me.text])}}),Lottery=defineComponent({name:"DynamicRichTextNodeLottery",props:{href:{type:String,default:""},text:{type:String,default:""}},setup(me){const Le=wt=>{wt.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(me.href,"dynamic.Lottery")};return()=>createVNode("span",{class:"dynamic_rich_text_lottery",onClick:Le},[me.text])}}),Video$1=defineComponent({name:"DynamicRichTextNodeVideo",props:{href:{type:String,default:""},aid:String,bvid:String,epid:String,ssid:String,text:{type:String,default:""}},setup(me){const Le=inject("pageSpmId"),wt=$t=>{if($t.stopPropagation(),events.emit("hidePopover"),me.bvid){openPlayerWindow({type:"ugc",bvid:me.bvid,fromSpmid:Le});return}if(me.aid){openPlayerWindow({type:"ugc",aid:Number(me.aid),fromSpmid:Le});return}if(me.ssid){openPlayerWindow({type:"ogv",seasonId:Number(me.ssid),fromSpmid:Le});return}if(me.epid){openPlayerWindow({type:"ogv",epid:Number(me.epid),fromSpmid:Le});return}};return()=>createVNode("span",{class:"dynamic_rich_text_video",onClick:wt},[me.text])}}),Video=defineComponent({name:"DynamicRichTextNodeVideo",props:{cvid:String,text:{type:String,default:""}},setup(me){const Le=wt=>{wt.stopPropagation(),events.emit("hidePopover"),openInAppBrowser(`https://www.bilibili.com/read/cv${me.cvid}`,"dynamic.Article")};return()=>createVNode("span",{class:"dynamic_rich_text_article",onClick:Le},[me.text])}});var RichText=defineComponent({name:"DynamicRichText",components:{Emoji:Emoji$1,Tag},props:{nodes:{type:Array,default:()=>[]},unfold:{type:Boolean,default:!0},showAction:{type:Boolean,default:!0},lines:{type:String,default:"6"},once:{type:Boolean,default:!1},actionTexts:{type:Array,default:()=>["\u5C55\u5F00","\u6536\u8D77"]}},setup(me){const Le=ref(!0),wt=ref(!1),$t=Ut=>{Ut.stopPropagation(),events.emit("hidePopover"),Le.value=!Le.value},kt=ref(null),It=Ut=>{kt.value=Ut};onMounted(()=>{!me.unfold&&Le.value?(wt.value=kt.value.scrollHeight>kt.value.clientHeight+2,Le.value=wt.value):Le.value=!1});const Rt=Ut=>{switch(Ut.type){case RichTextNodeType.RICH_TEXT_NODE_TYPE_AT:return createVNode(At$2,{text:Ut.text,rid:Ut.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_VOTE:return createVNode(Vote,{text:Ut.text,href:Ut.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_LOTTERY:return createVNode(Lottery,{text:Ut.text,href:Ut.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_EMOJI:return createVNode(Emoji$1,{src:Ut.emoji.icon_url,alt:Ut.text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_WEB:return createVNode(Link,{text:Ut.text,href:Ut.jump_url},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_TOPIC:return createVNode(Tag,{text:Ut.text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_AV:return createVNode(Video$1,{text:Ut.text,aid:Ut.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_BV:return createVNode(Video$1,{text:Ut.text,bvid:Ut.rid||Ut.orig_text},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_OGV_SEASON:return createVNode(Video$1,{text:Ut.text,ssid:Ut.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_OGV_EP:return createVNode(Video$1,{text:Ut.text,epid:Ut.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_CV:return createVNode(Video,{text:Ut.text,cvid:Ut.rid},null);case RichTextNodeType.RICH_TEXT_NODE_TYPE_TEXT:return createVNode("span",null,[Ut.text]);default:return createVNode("span",null,[Ut.orig_text||Ut.text])}},Pt=me.nodes.map(Rt),Ft=computed(()=>({"dynamic_rich_text--content":!0,folded:Le.value,[`line--${me.lines}`]:Le.value}));return me.unfold||!Le.value&&me.once?()=>createVNode("div",{class:"dynamic_rich_text"},[createVNode("div",{class:Ft.value},[Pt])]):()=>createVNode("div",{class:"dynamic_rich_text"},[createVNode("div",{class:Ft.value,ref:It},[Pt]),wt.value&&me.showAction&&createVNode("div",{class:"dynamic_rich_text--action",onClick:$t},[Le.value?me.actionTexts[0]:me.actionTexts[1]])])}}),Loading_vue_vue_type_style_index_0_lang$1="";const _sfc_main$g={},_hoisted_1$G={class:"loading_wrapper p_relative"},_hoisted_2$D=createBaseVNode("img",{class:"loading-gif p_center",src:_imports_2,alt:""},null,-1),_hoisted_3$C=[_hoisted_2$D];function _sfc_render$1(me,Le){return openBlock(),createElementBlock("div",_hoisted_1$G,_hoisted_3$C)}var Loading=_export_sfc(_sfc_main$g,[["render",_sfc_render$1]]);const _hoisted_1$F={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$C=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.22 9.221a.75.75 0 0 1 1.06 0l6.01 6.01 6.012-6.011a.75.75 0 0 1 1.061 1.06l-6.012 6.012 6.01 6.01a.75.75 0 1 1-1.06 1.061l-6.01-6.01-6.01 6.009a.75.75 0 1 1-1.06-1.06l6.009-6.01-6.01-6.01a.75.75 0 0 1 0-1.06Z",fill:"#fff"},null,-1),_hoisted_3$B=createBaseVNode("path",{d:"m10.28 9.221-.212.212.212-.212Zm6.01 6.01-.212.213.213.212.212-.212-.212-.213Zm6.012-6.011-.212-.212.212.212Zm1.061 1.06.212.213-.212-.213Zm-6.012 6.012-.212-.212-.212.212.212.212.212-.212Zm4.95 7.071-.212.213.212-.213Zm-6.01-6.01.212-.212-.212-.212-.213.212.213.212Zm-6.01 6.009-.212-.212.213.212Zm-1.06-1.06-.212-.213.212.212Zm6.009-6.01.212.212.212-.212-.212-.212-.212.212Zm-6.01-6.01.212-.212-.212.212Zm1.272-1.273a1.05 1.05 0 0 0-1.484 0l.424.424a.45.45 0 0 1 .636 0l.425-.424Zm6.01 6.01-6.01-6.01-.424.424 6.01 6.01.425-.424Zm5.588-6.011-6.012 6.011.425.425 6.012-6.012-.425-.424Zm1.485 0a1.05 1.05 0 0 0-1.485 0l.425.424a.45.45 0 0 1 .636 0l.424-.424Zm0 1.485a1.05 1.05 0 0 0 0-1.485l-.424.424a.45.45 0 0 1 0 .636l.424.425Zm-6.012 6.011 6.012-6.012-.424-.424-6.012 6.012.424.424Zm6.01 5.587-6.01-6.01-.424.423 6.01 6.01.425-.423Zm0 1.485a1.05 1.05 0 0 0 0-1.485l-.423.424a.45.45 0 0 1 0 .636l.424.425Zm-1.484 0c.41.41 1.075.41 1.485 0l-.424-.425a.45.45 0 0 1-.637 0l-.424.425Zm-6.01-6.011 6.01 6.01.424-.424-6.01-6.01-.425.424Zm-5.585 6.009 6.009-6.009-.425-.424-6.008 6.009.424.424Zm-1.485 0c.41.41 1.075.41 1.485 0l-.425-.424a.45.45 0 0 1-.636 0l-.424.424Zm0-1.485a1.05 1.05 0 0 0 0 1.485l.424-.424a.45.45 0 0 1 0-.637l-.424-.424Zm6.009-6.009-6.01 6.009.425.424 6.009-6.009-.424-.424Zm-6.01-5.586 6.01 6.01.424-.424-6.01-6.01-.424.424Zm0-1.485a1.05 1.05 0 0 0 0 1.485l.424-.424a.45.45 0 0 1 0-.637l-.424-.424Z",fill:"#fff"},null,-1),_hoisted_4$h=[_hoisted_2$C,_hoisted_3$B];function render$s(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$F,[..._hoisted_4$h])}var IcoClose={render:render$s};const _hoisted_1$E={width:"15",height:"13",viewBox:"0 0 15 13",fill:"currentColor"},_hoisted_2$B=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5 1.834c0-.92-.746-1.667-1.666-1.667H6.167C5.247.167 4.5.913 4.5 1.834v.333H1.333a.5.5 0 1 0 0 1h12.334a.5.5 0 1 0 0-1H10.5v-.333Zm-1 .333h-4v-.333c0-.369.299-.667.667-.667h2.667c.368 0 .666.298.666.667v.333Zm-6.333 2.5a.5.5 0 0 0-1 0v5.436c0 1.333.99 2.48 2.345 2.592.87.073 1.944.139 2.988.139 1.045 0 2.118-.066 2.989-.139 1.354-.113 2.345-1.259 2.345-2.592V4.667a.5.5 0 0 0-1 0v5.436c0 .84-.618 1.528-1.428 1.596-.856.071-1.9.135-2.906.135-1.006 0-2.05-.064-2.905-.135-.81-.068-1.428-.756-1.428-1.596V4.667Zm2.667.833a.5.5 0 0 1 .5.5v2.334a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3.833.5a.5.5 0 1 0-1 0v2.334a.5.5 0 0 0 1 0V6Z"},null,-1),_hoisted_3$A=[_hoisted_2$B];function render$r(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$E,[..._hoisted_3$A])}var IcoDelete={render:render$r},MoreDropdown_vue_vue_type_style_index_0_lang="";const _hoisted_1$D=["onClick"],_hoisted_2$A={class:"more_dropdown--btn"},_hoisted_3$z=["onClick"],_hoisted_4$g=createBaseVNode("span",{class:"gamepad-cursor"},null,-1),_sfc_main$f=defineComponent({__name:"MoreDropdown",props:{items:{type:Array,default:()=>[]},info:{type:Object,default:()=>{}},isHover:{type:Boolean,default:!1},showMenu:{type:Boolean,default:!1}},emits:["select"],setup(me,{emit:Le}){const wt=me,$t=ref(!1),kt=useGamepadStore(),It=()=>kt.flashPageCursors();watch$1($t,()=>kt.flashPageCursors(200));function Rt(Jt){events.emit("hidePopover"),Le("select",Jt),Xt()}function Pt(){wt.isHover||($t.value||events.emit("hidePopover"),$t.value=!$t.value)}const Ft=()=>{wt.isHover&&wt.showMenu&&($t.value=!0)},Ut=()=>{wt.isHover&&wt.showMenu&&($t.value=!1)},Xt=()=>{$t.value&&($t.value=!1)};return events.on("hidePopover",Xt),onBeforeUnmount(()=>{events.off("hidePopover",Xt)}),(Jt,ii)=>(openBlock(),createElementBlock("div",{class:"more_dropdown",onClick:withModifiers(Pt,["stop"]),onMouseenter:Ft,onMouseleave:Ut},[createBaseVNode("div",_hoisted_2$A,[renderSlot(Jt.$slots,"default")]),withDirectives(createBaseVNode("div",{class:"more_dropdown--dropdown p_absolute",onScroll:It},[(openBlock(!0),createElementBlock(Fragment,null,renderList(me.items,(Ni,Vi)=>(openBlock(),createElementBlock(Fragment,null,[!Ni.info||Ni.info.aid?(openBlock(),createElementBlock("div",{key:Vi,class:normalizeClass(["more_dropdown--dropdown--item p_relative",{"more_dropdown--disabled":Ni.disabled}]),onClick:withModifiers(zi=>Rt(Ni),["stop"])},[Ni.icon==="collect"?(openBlock(),createBlock(unref(IcoCollect),{key:0,class:"ico_collect mr_xs"})):createCommentVNode("",!0),Ni.icon==="delete"?(openBlock(),createBlock(unref(IcoDelete),{key:1,class:"mr_xs"})):createCommentVNode("",!0),Jt.$slots.label?renderSlot(Jt.$slots,"label",{key:2,item:Ni}):(openBlock(),createElementBlock(Fragment,{key:3},[createTextVNode(toDisplayString(Ni.label)+" ",1),_hoisted_4$g],64))],10,_hoisted_3$z)):createCommentVNode("",!0)],64))),256))],544),[[vShow,$t.value]])],40,_hoisted_1$D))}}),_hoisted_1$C={width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$z=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.742 3.924A52.952 52.952 0 0 1 8 3.75c1.714 0 3.208.088 4.258.174A1.45 1.45 0 0 1 13.6 5.245c.078.862.151 2.004.151 3.255s-.073 2.393-.15 3.255a1.45 1.45 0 0 1-1.342 1.321c-1.05.086-2.544.174-4.258.174s-3.208-.088-4.258-.174A1.45 1.45 0 0 1 2.4 11.754 36.666 36.666 0 0 1 2.25 8.5c0-1.25.073-2.393.15-3.254a1.45 1.45 0 0 1 1.342-1.322ZM8 2.75c-1.747 0-3.27.09-4.34.177a2.45 2.45 0 0 0-2.255 2.229c-.08.883-.155 2.056-.155 3.344 0 1.288.075 2.461.155 3.344a2.45 2.45 0 0 0 2.255 2.229A53.91 53.91 0 0 0 8 14.25c1.747 0 3.27-.09 4.34-.177a2.45 2.45 0 0 0 2.255-2.229c.08-.882.155-2.056.155-3.344 0-1.288-.075-2.462-.155-3.345a2.45 2.45 0 0 0-2.255-2.228A53.953 53.953 0 0 0 8 2.75Zm1.75 6.328a.667.667 0 0 0 0-1.155l-2.5-1.444a.667.667 0 0 0-1 .577v2.888c0 .513.555.834 1 .578l2.5-1.444Z",fill:"currentColor"},null,-1),_hoisted_3$y=[_hoisted_2$z];function render$q(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$C,[..._hoisted_3$y])}var IcoPlay={render:render$q};const _hoisted_1$B={width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$y=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 3.75c-1.714 0-3.208.088-4.258.174A1.45 1.45 0 0 0 2.4 5.246C2.323 6.107 2.25 7.25 2.25 8.5s.073 2.393.15 3.254a1.45 1.45 0 0 0 1.342 1.322c1.05.086 2.544.174 4.258.174s3.208-.088 4.258-.174a1.45 1.45 0 0 0 1.341-1.321c.078-.862.151-2.004.151-3.255s-.073-2.393-.15-3.255a1.45 1.45 0 0 0-1.342-1.321A52.956 52.956 0 0 0 8 3.75Zm-4.34-.823A53.955 53.955 0 0 1 8 2.75c1.747 0 3.27.09 4.34.177a2.45 2.45 0 0 1 2.255 2.228c.08.883.155 2.057.155 3.345 0 1.288-.075 2.462-.155 3.345a2.45 2.45 0 0 1-2.255 2.228c-1.07.087-2.593.177-4.34.177-1.747 0-3.27-.09-4.34-.177a2.45 2.45 0 0 1-2.255-2.229A37.662 37.662 0 0 1 1.25 8.5c0-1.288.075-2.461.155-3.344A2.45 2.45 0 0 1 3.66 2.927ZM4 7.25a.5.5 0 0 1 .5-.5h.25a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm2 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-.5 2a.5.5 0 0 0 0 1h.25a.5.5 0 0 0 0-1H5.5Zm2 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",fill:"currentColor"},null,-1),_hoisted_3$x=[_hoisted_2$y];function render$p(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$B,[..._hoisted_3$x])}var IcoDanmaku={render:render$p},b$a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p$8={exports:{}};(function(me,Le){(function(wt,$t){$t(Le)})(b$a,function(wt){var $t=function(){function kt(It){var Rt=this;this.disposables=[],this.playing=!1,this.valid=!1,this.remove=!1,this.raf=0;var Pt=It.src,Ft=It.width,Ut=It.height,Xt=It.sizing,Jt=It.autoplay,ii=It.loop,Ni=It.canvas||document.createElement("canvas");this.canvas=Ni,It.container&&(It.container.appendChild(Ni),this.remove=!0),this.initVideo(Pt,Jt,ii),this.initWebgl(Ft,Ut,Xt),this.disposables.unshift(function(){Rt.playing&&Rt.pause(),Rt.raf&&window.cancelAnimationFrame(Rt.raf),Rt.remove&&Rt.canvas.parentElement&&Rt.canvas.parentElement.removeChild(Rt.canvas)})}return Object.defineProperty(kt.prototype,"currentTime",{get:function(){return this.video.currentTime},enumerable:!1,configurable:!0}),Object.defineProperty(kt.prototype,"duration",{get:function(){return this.video.duration},enumerable:!1,configurable:!0}),Object.defineProperty(kt.prototype,"src",{get:function(){return this.video.src},enumerable:!1,configurable:!0}),kt.prototype.addEventListener=function(It,Rt,Pt){var Ft=this;this.video.addEventListener(It,Rt,Pt),this.disposables.push(function(){Ft.video.removeEventListener(It,Rt,Pt)})},kt.prototype.initVideo=function(It,Rt,Pt){var Ft=this,Ut=document.createElement("video");this.video=Ut,Ut.src=It,Ut.autoplay=Rt||!1,Ut.muted=!0,Ut.volume=0,Ut.muted=!0,Ut.loop=Pt||!1,Ut.style.display="none",Ut.crossOrigin="anonymous",Ut.setAttribute("type","video/mp4"),this.addEventListener("play",function(){Ft.raf=window.requestAnimationFrame(function(){Ft.nextFrame()})}),this.addEventListener("playing",function(){Ft.valid=!0}),this.addEventListener("ended",function(){Ft.playing=!1})},kt.prototype.nextFrame=function(){var It=this;this.playing&&(this.callWebglDraw(),this.raf=window.requestAnimationFrame(function(){It.nextFrame()}))},kt.prototype.callWebglDraw=function(){var It=this.gl;this.valid&&(It.texImage2D(It.TEXTURE_2D,0,It.RGB,It.RGB,It.UNSIGNED_BYTE,this.video),It.drawArrays(It.TRIANGLE_STRIP,0,4))},kt.prototype.dispose=function(){for(;this.disposables.length;)this.disposables.pop()()},kt.prototype.play=function(){return this.playing=!0,this.valid=!1,this.video.play(),this},kt.prototype.pause=function(){return this.playing=!1,this.video.pause(),this},kt.prototype.reload=function(It){if(It)return this.video.src=It,this;console.warn("please set a valid src")},kt.prototype.initWebgl=function(It,Rt,Pt){var Ft=1,Ut=[It,Rt];Pt!=="raw"&&(Ft=window.devicePixelRatio||1,Ut.forEach(function(Qn,eo){Ut[eo]=Qn*Ft}),Pt==="dpr-raw"&&(this.canvas.style.setProperty("transform","scale(".concat(1/Ft,")")),this.canvas.style.setProperty("transform-origin","left top"))),this.canvas.width=Ut[0],this.canvas.height=Ut[1];var Xt=this.canvas.getContext("webgl");this.gl=Xt,Xt.viewport(0,0,Ut[0],Ut[1]);var Jt=this.initShaderProgram(Xt);Xt.linkProgram(Jt),Xt.useProgram(Jt);var ii=this.initBuffer(Xt);Xt.bindBuffer(Xt.ARRAY_BUFFER,ii.position);var Ni=Xt.getAttribLocation(Jt,"a_position");Xt.enableVertexAttribArray(Ni),Xt.vertexAttribPointer(Ni,2,Xt.FLOAT,!1,0,0),Xt.bindBuffer(Xt.ARRAY_BUFFER,ii.texture);var Vi=Xt.getAttribLocation(Jt,"a_texCoord");Xt.enableVertexAttribArray(Vi),Xt.vertexAttribPointer(Vi,2,Xt.FLOAT,!1,0,0);var zi=this.initTexture(Xt);Xt.bindTexture(Xt.TEXTURE_2D,zi);var Xn=Xt.getUniformLocation(Jt,"u_scale");return Xt.uniform2fv(Xn,[Ft,Ft]),Xt},kt.prototype.createShader=function(It,Rt,Pt){var Ft=It.createShader(Rt);return It.shaderSource(Ft,Pt),It.compileShader(Ft),It.getShaderParameter(Ft,It.COMPILE_STATUS)||console.error(It.getShaderInfoLog(Ft)),Ft},kt.prototype.initShaderProgram=function(It){var Rt=this.createShader(It,It.VERTEX_SHADER,`
          attribute vec2 a_position;
          attribute vec2 a_texCoord;
          varying vec2 v_texCoord;
          uniform vec2 u_scale;
          void main(void) {
              gl_Position = vec4(a_position, 0.0, 1.0);
              v_texCoord = a_texCoord;
          }
          `),Pt=this.createShader(It,It.FRAGMENT_SHADER,`
          precision lowp float;
          varying vec2 v_texCoord;
          uniform sampler2D u_sampler;
          void main(void) {
              gl_FragColor = vec4(texture2D(u_sampler, v_texCoord).rgb, texture2D(u_sampler, v_texCoord+vec2(-0.5, 0)).r);
          }
          `),Ft=It.createProgram();return It.attachShader(Ft,Rt),It.attachShader(Ft,Pt),It.linkProgram(Ft),Ft},kt.prototype.initBuffer=function(It){var Rt=new Float32Array([-1,1,1,1,-1,-1,1,-1]),Pt=It.createBuffer();It.bindBuffer(It.ARRAY_BUFFER,Pt),It.bufferData(It.ARRAY_BUFFER,Rt,It.STATIC_DRAW);var Ft=It.createBuffer(),Ut=new Float32Array([.5,1,1,1,.5,0,1,0]);return It.bindBuffer(It.ARRAY_BUFFER,Ft),It.bufferData(It.ARRAY_BUFFER,Ut,It.STATIC_DRAW),{position:Pt,texture:Ft}},kt.prototype.initTexture=function(It){var Rt=It.createTexture();return It.bindTexture(It.TEXTURE_2D,Rt),It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL,1),It.texParameteri(It.TEXTURE_2D,It.TEXTURE_MIN_FILTER,It.NEAREST),It.texParameteri(It.TEXTURE_2D,It.TEXTURE_WRAP_S,It.CLAMP_TO_EDGE),It.texParameteri(It.TEXTURE_2D,It.TEXTURE_WRAP_T,It.CLAMP_TO_EDGE),Rt},kt}();wt.create=function(kt){return new $t(kt)},Object.defineProperty(wt,"__esModule",{value:!0})})})(p$8,p$8.exports);var _$6=p$8.exports;class A$4 extends HTMLElement{constructor(){super(),this.alphaVideo=null;const Le=this.attachShadow({mode:"open"});Le.innerHTML=`
      <style>
        #wrap {
          overflow: hidden;
        }
      </style>
      <div id="wrap">
        <canvas></canvas>
      </div>
    `}get wrap(){return this.shadowRoot.querySelector("#wrap")}get canvas(){return this.shadowRoot.querySelector("canvas")}connectedCallback(){const Le=this.getAttribute("src"),wt=this.getAttribute("width"),$t=this.getAttribute("height"),kt=this.getAttribute("loop")!==null,It=this.getAttribute("autoplay")!==null;!Le||!wt||!$t||(this.wrap.style.setProperty("width",`${wt}px`),this.wrap.style.setProperty("height",`${$t}px`),this.alphaVideo=_$6.create({src:Le,canvas:this.canvas,width:Number(wt),height:Number($t),sizing:"dpr-raw",loop:kt}),this.alphaVideo.addEventListener("ended",()=>{this.dispatchEvent(new CustomEvent("ended"))}),It&&this.play())}play(){var Le;(Le=this.alphaVideo)==null||Le.play()}disconnectedCallback(){this.alphaVideo&&(this.alphaVideo.dispose(),this.alphaVideo=null)}}customElements.get("bili-alpha-video")||customElements.define("bili-alpha-video",A$4);let _isSSR$1=!0;const isSSR$1=()=>(_isSSR$1&&(_isSSR$1=typeof window=="undefined"),_isSSR$1),canUseAvif$1=()=>(isSSR$1(),!1);let webp;const canUseWebP=()=>{var me,Le,wt,$t;if(isSSR$1())return!1;if(typeof webp!="undefined")return webp;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return webp=Number(((me=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||me===void 0?void 0:me[1])||"0")>=65,webp;const kt=document.createElement("canvas");webp=!((Le=kt.getContext)===null||Le===void 0)&&Le.call(kt,"2d")?(($t=(wt=kt.toDataURL)===null||wt===void 0?void 0:wt.call(kt,"image/webp"))===null||$t===void 0?void 0:$t.indexOf("data:image/webp"))===0:!1}catch{webp=!1}return webp};var canUseHtmlPictureElement$1=()=>isSSR$1()?!1:!!window.HTMLPictureElement;const autoDetect=(me=["webp"])=>{for(let Le=0;Le<me.length;Le++)if(me[Le]==="avif"&&canUseAvif$1()||me[Le]==="webp"&&canUseWebP())return me[Le];return""};isSSR$1()||window.IntersectionObserver;const isNum=me=>typeof me=="number",isInt=me=>isNum(me)&&(me|0)===me;function trimURL(me){return me?me.replace(/^http(s)?:/,""):""}const EXT_REG$1=/\.(jpeg|jpg|png|webp|gif|avif)$/,getImgUrlExt$2=me=>{var Le;return((Le=me.match(EXT_REG$1))===null||Le===void 0?void 0:Le[0])||null},isBFS=me=>!!/\/bfs\//.test(me),isBSS=me=>/pic.bstarstatic.com/.test(me),isSupportBmgFormat=me=>!isBFS(me)&&!isBSS(me)?!1:!!getImgUrlExt$2(me),getIntNum=me=>typeof me!="number"||isNaN(me)?0:Math.floor(me)||0,getBmgSrc$1=(me,Le={c:!0})=>{var wt;if(typeof me!="string")return"";if(!isSupportBmgFormat(me))return me;if(me.indexOf("@")>-1){if(Le.cache)return me;me=me.split("@")[0]}me=me.replace("//pre-","//");const $t=Le.dpr||(isSSR$1()?2:Math.floor((wt=window==null?void 0:window.devicePixelRatio)!==null&&wt!==void 0?wt:2)||1),kt=[];Le.w&&isInt(Le.w)&&kt.push(`${Math.floor(Le.w*$t)}w`),Le.h&&isInt(Le.h)&&kt.push(`${Math.floor(Le.h*$t)}h`),Le.e&&kt.push(`${Le.e}e`),Le.c&&kt.push("1c"),Le.a&&kt.push(`${[getIntNum(Le.a.x),getIntNum(Le.a.y),getIntNum(Le.a.w)*$t,getIntNum(Le.a.h)*$t].join("-")}a`),Le.p&&isInt(Le.p)&&kt.push(`${Le.p}p`),Le.s&&kt.push("1s"),Le.q&&isInt(Le.q)&&kt.push(`${Le.q}q`),Le.style&&kt.push(`!${Le.style}`);let It="";return Le.ext&&["webp","avif"].includes(Le.ext)&&(It=Le.ext),kt.length===0&&!It?me:`${trimURL(me)}@${kt.join("_")}${It?`.${It}`:""}`};function _typeof$1(me){return _typeof$1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Le){return typeof Le}:function(Le){return Le&&typeof Symbol=="function"&&Le.constructor===Symbol&&Le!==Symbol.prototype?"symbol":typeof Le},_typeof$1(me)}var e$1$1="bmgOnLoad",t$1$1="bmgOnError",r$1$1="__BMG_TRACKER_COLLECT_EXTS__";var l$1$1=function(Le){return typeof Le=="function"},w$1$1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},h$5={};Object.defineProperty(h$5,"__esModule",{value:!0});var m$7=!0,g$4=h$5.default=function(){return m$7&&(m$7=typeof window=="undefined"),m$7},y$3={};Object.defineProperty(y$3,"__esModule",{value:!0});var _$1$1=/\.(jpeg|jpg|png|webp|gif|avif)$/;y$3.default=function(me){var Le;return((Le=me.match(_$1$1))===null||Le===void 0?void 0:Le[0])||null};var E$5={};(function(me){var Le=w$1$1&&w$1$1.__importDefault||function(kt){return kt&&kt.__esModule?kt:{default:kt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseAvif=me.canUseAvif=me.setAvif=void 0;var wt,$t=Le(h$5);me.setAvif=function(kt){wt=kt},me.canUseAvif=function(){return!(0,$t.default)()&&wt!==void 0&&wt},me.asyncCanUseAvif=function(){return new Promise(function(kt){if((0,$t.default)())return kt(!1);if((0,me.canUseAvif)())return kt(!0);var It=new Image;It.onerror=function(){(0,me.setAvif)(!1),kt(!1)},It.onload=function(){(0,me.setAvif)(!0),kt(!0)},It.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})}})(E$5);var O$1={};(function(me){var Le=w$1$1&&w$1$1.__importDefault||function(kt){return kt&&kt.__esModule?kt:{default:kt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseWebP=me.canUseWebP=me.setWebp=void 0;var wt,$t=Le(h$5);me.setWebp=function(kt){wt=kt},me.canUseWebP=function(){var kt,It,Rt,Pt;if((0,$t.default)())return!1;if(wt!==void 0)return wt;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return wt=Number(((kt=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||kt===void 0?void 0:kt[1])||"0")>=65;var Ft=document.createElement("canvas");wt=!!(!((It=Ft.getContext)===null||It===void 0)&&It.call(Ft,"2d"))&&((Pt=(Rt=Ft.toDataURL)===null||Rt===void 0?void 0:Rt.call(Ft,"image/webp"))===null||Pt===void 0?void 0:Pt.indexOf("data:image/webp"))===0}catch{wt=!1}return wt},me.asyncCanUseWebP=function(){return new Promise(function(kt){if((0,$t.default)())return kt(!1);if((0,me.canUseWebP)())return kt(!0);var It=new Image;It.onerror=function(){(0,me.setWebp)(!1),kt(!1)},It.onload=function(){(0,me.setWebp)(!0),kt(!0)},It.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})}})(O$1);var I$5="BMG_EXTS",B$4=null,C$2=function(Le){if(Le===void 0&&(Le=!1),!window[r$1$1]||Le){var wt=function(){if(B$4)return B$4;try{B$4=(localStorage.getItem(I$5)||"").split(",")}catch($t){console.warn($t),B$4=[]}return B$4}();window[r$1$1]={avif:wt.includes("avif"),webp:wt.includes("webp")}}},T$3=function(){if(g$4())return!1;var Le=window.rawWindow;return!!Le&&!!Le.__MICRO_APP_PROXY_WINDOW__},D$3=function(){return!g$4()&&!T$3()&&l$1$1(window[e$1$1])&&l$1$1(window[t$1$1])},k$5={};(function(me){Object.defineProperty(me,"__esModule",{value:!0}),me.commitLog=me.getSpmId=me.getSpmPrefix=void 0;var Le=function(){return typeof window=="undefined"},wt="";me.getSpmPrefix=function(){var $t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,kt;if(Le())return"";if(wt&&!$t)return wt;try{return wt=((kt=document.querySelector("meta[name=spm_prefix]"))===null||kt===void 0?void 0:kt.content)||"",wt}catch{return""}},me.getSpmId=function($t){if(!$t)return"";var kt=(0,me.getSpmPrefix)();return kt?$t.indexOf(kt)>-1?$t:"".concat(kt,".").concat($t):""},me.commitLog=function($t,kt,It,Rt){var Pt,Ft,Ut,Xt;if(!Le()&&!(!window.reportConfig&&!window.MReporter)&&!(!$t||!kt)){var Jt=null;if(!Jt&&window.reportConfig)if(window.reportMsgObj)Jt=window.reportMsgObj;else{var ii=window.reportConfig.msgObjects;Jt=window[ii]||null}var Ni=kt.indexOf("selfDef");if(Ni>-1)return void(Jt&&(Jt[kt.substring(Ni+8)]=It,(Pt=window.reportObserver)===null||Pt===void 0||Pt.forceCommit()));var Vi=(0,me.getSpmPrefix)();if(!!Vi){var zi=_typeof$1(It)=="object"?JSON.stringify(It):JSON.stringify({});if(window.MReporter)return kt.indexOf(Vi)>-1&&(kt=kt.replace("".concat(Vi,"."),"")),void((Ut=(Ft=window.MReporter)[$t])===null||Ut===void 0||Ut.call(Ft,{evt:kt,msg:zi,target_url:Rt||""}));(Xt=window.reportObserver)===null||Xt===void 0||Xt.reportCustomData($t,{spm_id:(0,me.getSpmId)(kt),msg:zi,target_url:Rt||""})}}}})(k$5);var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},detect={},canUseAvif={},isSsr={};Object.defineProperty(isSsr,"__esModule",{value:!0});var _isSSR=!0,isSSR=function(){return _isSSR&&(_isSSR=typeof window=="undefined"),_isSSR},_default=isSsr.default=isSSR;(function(me){var Le=commonjsGlobal&&commonjsGlobal.__importDefault||function(Pt){return Pt&&Pt.__esModule?Pt:{default:Pt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseAvif=me.canUseAvif=me.setAvif=void 0;var wt=Le(isSsr),$t,kt=function(Pt){$t=Pt};me.setAvif=kt;var It=function(){return(0,wt.default)()?!1:typeof $t!="undefined"?$t:!1};me.canUseAvif=It;var Rt=function(){return new Promise(function(Pt){if((0,wt.default)())return Pt(!1);if((0,me.canUseAvif)())return Pt(!0);var Ft=new Image;Ft.onerror=function(){(0,me.setAvif)(!1),Pt(!1)},Ft.onload=function(){(0,me.setAvif)(!0),Pt(!0)},Ft.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})};me.asyncCanUseAvif=Rt})(canUseAvif);var canUseWebp={};(function(me){var Le=commonjsGlobal&&commonjsGlobal.__importDefault||function(Pt){return Pt&&Pt.__esModule?Pt:{default:Pt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseWebP=me.canUseWebP=me.setWebp=void 0;var wt=Le(isSsr),$t,kt=function(Pt){$t=Pt};me.setWebp=kt;var It=function(){var Pt,Ft,Ut,Xt;if((0,wt.default)())return!1;if(typeof $t!="undefined")return $t;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return $t=Number(((Pt=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||Pt===void 0?void 0:Pt[1])||"0")>=65,$t;var Jt=document.createElement("canvas");$t=!((Ft=Jt.getContext)===null||Ft===void 0)&&Ft.call(Jt,"2d")?((Xt=(Ut=Jt.toDataURL)===null||Ut===void 0?void 0:Ut.call(Jt,"image/webp"))===null||Xt===void 0?void 0:Xt.indexOf("data:image/webp"))===0:!1}catch{$t=!1}return $t};me.canUseWebP=It;var Rt=function(){return new Promise(function(Pt){if((0,wt.default)())return Pt(!1);if((0,me.canUseWebP)())return Pt(!0);var Ft=new Image;Ft.onerror=function(){(0,me.setWebp)(!1),Pt(!1)},Ft.onload=function(){(0,me.setWebp)(!0),Pt(!0)},Ft.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})};me.asyncCanUseWebP=Rt})(canUseWebp);var canUseHtmlPictureElement={},__importDefault=commonjsGlobal&&commonjsGlobal.__importDefault||function(me){return me&&me.__esModule?me:{default:me}};Object.defineProperty(canUseHtmlPictureElement,"__esModule",{value:!0});var is_ssr_1=__importDefault(isSsr);canUseHtmlPictureElement.default=function(){return(0,is_ssr_1.default)()?!1:!!window.HTMLPictureElement};(function(me){var Le=commonjsGlobal&&commonjsGlobal.__importDefault||function(Pt){return Pt&&Pt.__esModule?Pt:{default:Pt}};Object.defineProperty(me,"__esModule",{value:!0}),me.autoDetectAll=me.autoDetect=me.canUseHtmlPictureElement=me.canUseWebP=me.setWebp=me.canUseAvif=me.setAvif=void 0;var wt=canUseAvif;Object.defineProperty(me,"canUseAvif",{enumerable:!0,get:function(){return wt.canUseAvif}}),Object.defineProperty(me,"setAvif",{enumerable:!0,get:function(){return wt.setAvif}});var $t=canUseWebp;Object.defineProperty(me,"canUseWebP",{enumerable:!0,get:function(){return $t.canUseWebP}}),Object.defineProperty(me,"setWebp",{enumerable:!0,get:function(){return $t.setWebp}});var kt=Le(canUseHtmlPictureElement);me.canUseHtmlPictureElement=kt.default;var It=function(Pt){Pt===void 0&&(Pt=["webp"]);for(var Ft=0;Ft<Pt.length;Ft++)if(Pt[Ft]==="avif"&&(0,wt.canUseAvif)()||Pt[Ft]==="webp"&&(0,$t.canUseWebP)())return Pt[Ft];return""};me.autoDetect=It;var Rt=function(){return new Promise(function(Pt){Promise.all([(0,wt.asyncCanUseAvif)(),(0,$t.asyncCanUseWebP)()]).then(function(Ft){var Ut=Ft[0],Xt=Ft[1];Pt({avif:Ut,webp:Xt})})})};me.autoDetectAll=Rt})(detect);var getBmgSrc={},trimUrl={};Object.defineProperty(trimUrl,"__esModule",{value:!0});function default_1(me){return me?me.replace(/^http(s)?:/,""):""}trimUrl.default=default_1;var shared={};(function(me){Object.defineProperty(me,"__esModule",{value:!0}),me.isInt=me.isNum=void 0;var Le=function($t){return typeof $t=="number"};me.isNum=Le;var wt=function($t){return(0,me.isNum)($t)&&($t|0)===$t};me.isInt=wt})(shared);var getImgUrlExt$1={};Object.defineProperty(getImgUrlExt$1,"__esModule",{value:!0});var EXT_REG=/\.(jpeg|jpg|png|webp|gif|avif)$/,getImgUrlExt=function(me){var Le;return((Le=me.match(EXT_REG))===null||Le===void 0?void 0:Le[0])||null};getImgUrlExt$1.default=getImgUrlExt;(function(me){var Le=commonjsGlobal&&commonjsGlobal.__importDefault||function(Jt){return Jt&&Jt.__esModule?Jt:{default:Jt}};Object.defineProperty(me,"__esModule",{value:!0}),me.getBmgSrc=me.isSupportBmgFormat=void 0;var wt=Le(trimUrl),$t=Le(isSsr),kt=shared,It=Le(getImgUrlExt$1),Rt=function(Jt){return!!/\/bfs\//.test(Jt)},Pt=function(Jt){return/pic.bstarstatic.com/.test(Jt)},Ft=function(Jt){return!Rt(Jt)&&!Pt(Jt)?!1:!!(0,It.default)(Jt)};me.isSupportBmgFormat=Ft;var Ut=function(Jt){return typeof Jt!="number"||isNaN(Jt)?0:Math.floor(Jt)||0},Xt=function(Jt,ii){var Ni;if(ii===void 0&&(ii={c:!0}),typeof Jt!="string")return"";if(!(0,me.isSupportBmgFormat)(Jt))return Jt;if(Jt.indexOf("@")>-1){if(ii.cache)return Jt;Jt=Jt.split("@")[0]}Jt=Jt.replace("//pre-","//");var Vi=ii.dpr||((0,$t.default)()?2:Math.floor((Ni=window==null?void 0:window.devicePixelRatio)!==null&&Ni!==void 0?Ni:2)||1),zi=[];ii.w&&(0,kt.isInt)(ii.w)&&zi.push("".concat(Math.floor(ii.w*Vi),"w")),ii.h&&(0,kt.isInt)(ii.h)&&zi.push("".concat(Math.floor(ii.h*Vi),"h")),ii.e&&zi.push("".concat(ii.e,"e")),ii.c&&zi.push("1c"),ii.a&&zi.push("".concat([Ut(ii.a.x),Ut(ii.a.y),Ut(ii.a.w)*Vi,Ut(ii.a.h)*Vi].join("-"),"a")),ii.p&&(0,kt.isInt)(ii.p)&&zi.push("".concat(ii.p,"p")),ii.s&&zi.push("1s"),ii.q&&(0,kt.isInt)(ii.q)&&zi.push("".concat(ii.q,"q")),ii.style&&zi.push("!".concat(ii.style));var Xn="";return ii.ext&&["webp","avif"].includes(ii.ext)&&(Xn=ii.ext),zi.length===0&&!Xn?Jt:"".concat((0,wt.default)(Jt),"@").concat(zi.join("_")).concat(Xn?".".concat(Xn):"")};me.getBmgSrc=Xt})(getBmgSrc);var collect={},getWindowExtsState;function _typeof(me){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Le){return typeof Le}:function(Le){return Le&&typeof Symbol=="function"&&Le.constructor===Symbol&&Le!==Symbol.prototype?"symbol":typeof Le},_typeof(me)}Object.defineProperty(collect,"__esModule",{value:!0});var e$9="__BMG_TRACKER_COLLECT_QUEUE__",A$3="__BMG_TRACKER_COLLECT_EXTS__",n$a="__BMG_TRACKER_COLLECT_MODE__",t$4=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof commonjsGlobal!="undefined"?commonjsGlobal:typeof self!="undefined"?self:{},i$7={};Object.defineProperty(i$7,"__esModule",{value:!0});var o$9=!0,a$4=i$7.default=function(){return o$9&&(o$9=typeof window=="undefined"),o$9},r$9={};Object.defineProperty(r$9,"__esModule",{value:!0});var u$5=/\.(jpeg|jpg|png|webp|gif|avif)$/,f$6=r$9.default=function(me){var Le;return((Le=me.match(u$5))===null||Le===void 0?void 0:Le[0])||null},d$4={};(function(me){var Le=t$4&&t$4.__importDefault||function(kt){return kt&&kt.__esModule?kt:{default:kt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseAvif=me.canUseAvif=me.setAvif=void 0;var wt,$t=Le(i$7);me.setAvif=function(kt){wt=kt},me.canUseAvif=function(){return!(0,$t.default)()&&wt!==void 0&&wt},me.asyncCanUseAvif=function(){return new Promise(function(kt){if((0,$t.default)())return kt(!1);if((0,me.canUseAvif)())return kt(!0);var It=new Image;It.onerror=function(){(0,me.setAvif)(!1),kt(!1)},It.onload=function(){(0,me.setAvif)(!0),kt(!0)},It.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="})}})(d$4);var l$c={};(function(me){var Le=t$4&&t$4.__importDefault||function(kt){return kt&&kt.__esModule?kt:{default:kt}};Object.defineProperty(me,"__esModule",{value:!0}),me.asyncCanUseWebP=me.canUseWebP=me.setWebp=void 0;var wt,$t=Le(i$7);me.setWebp=function(kt){wt=kt},me.canUseWebP=function(){var kt,It,Rt,Pt;if((0,$t.default)())return!1;if(wt!==void 0)return wt;try{if(typeof navigator!="undefined"&&/Firefox\/(\d+)/i.test(navigator.userAgent))return wt=Number(((kt=navigator.userAgent.match(/Firefox\/(\d+)/i))===null||kt===void 0?void 0:kt[1])||"0")>=65;var Ft=document.createElement("canvas");wt=!!(!((It=Ft.getContext)===null||It===void 0)&&It.call(Ft,"2d"))&&((Pt=(Rt=Ft.toDataURL)===null||Rt===void 0?void 0:Rt.call(Ft,"image/webp"))===null||Pt===void 0?void 0:Pt.indexOf("data:image/webp"))===0}catch{wt=!1}return wt},me.asyncCanUseWebP=function(){return new Promise(function(kt){if((0,$t.default)())return kt(!1);if((0,me.canUseWebP)())return kt(!0);var It=new Image;It.onerror=function(){(0,me.setWebp)(!1),kt(!1)},It.onload=function(){(0,me.setWebp)(!0),kt(!0)},It.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="})}})(l$c);var c$9="BMG_EXTS",s$8=null,v$6=function(){if(s$8)return s$8;try{s$8=(localStorage.getItem(c$9)||"").split(",")}catch(Le){console.warn(Le),s$8=[]}return s$8},w$3=function(Le){if(Le===void 0&&(Le=!1),!window[A$3]||Le){var wt=v$6();window[A$3]={avif:wt.includes("avif"),webp:wt.includes("webp")}}},p$7=function(Le){return function(wt){switch(function(){var $t=[],kt=window[A$3]||{avif:!1,webp:!1};kt.avif&&$t.push("avif"),kt.webp&&$t.push("webp");try{localStorage.setItem(c$9,$t.join(","))}catch(It){console.warn(It)}}(),Le){case"avif":d$4.setAvif(wt);break;case"webp":l$c.setWebp(wt)}}},b$9=function(Le){var wt;_typeof(window[A$3])!="object"&&w$3(),!((wt=window[A$3])===null||wt===void 0)&&wt[Le]||(window[A$3][Le]=!0,p$7(Le)(!0))},_$5=function(){return window[n$a]};collect.collect=function(me,Le,wt){if(!a$4()){var $t=a$4()?null:window.__BMG_TRACKER__||null;wt=wt||_$5();var kt=(f$6(me)||"").substring(1);if(["avif","webp"].indexOf(kt)>-1&&b$9(kt),wt!=="onlyext"){if($t)$t.collect(me,Le);else if(wt!=="nocache"){var It={src:me,type:Le,ts:Date.now()/1e3|0};Array.isArray(window[e$9])?window[e$9].push(It):window[e$9]=[It]}}}},collect.getCollectMode=_$5,collect.getLocalExtsState=v$6,getWindowExtsState=collect.getWindowExtsState=function(me){var Le,wt;return me==="avif"?((Le=window[A$3])===null||Le===void 0?void 0:Le.avif)||!1:me==="webp"?((wt=window[A$3])===null||wt===void 0?void 0:wt.webp)||!1:window[A$3]||null},collect.initWindowExtsState=w$3,collect.setCollectMode=function(me){window[n$a]=me},collect.updateExtState=p$7,collect.updateWindowExtsState=b$9;const getDomain=(me,Le)=>`${me}${Le}.hdslb.com`,DOMAIN_REGEXP=new RegExp(getDomain("(s|i)","\\d")),getSrcDefDomain=me=>{if(_default())return me||"";const Le=window.__BMG_AF__;return Le!=null&&Le.defDomain?(Le.defUpdated,Le.defDomain):me||""},replaceSrcDefDomain=(me,Le)=>{var wt;if(!Le)return me;const $t=((wt=me.match(DOMAIN_REGEXP))===null||wt===void 0?void 0:wt[0])||"";return $t&&$t!==Le?me.replace(DOMAIN_REGEXP,Le):me},getBmgSrcNext=(me,Le,wt)=>{var $t,kt,It,Rt;let Pt="";if(_default())return getBmgSrc.getBmgSrc(wt!=null&&wt.domain?replaceSrcDefDomain(me,wt.domain):me,Le);if(!(!(($t=wt==null?void 0:wt.disabledExts)===null||$t===void 0)&&$t.avif)&&getWindowExtsState("avif"))Pt="avif";else if(!(!((kt=wt==null?void 0:wt.disabledExts)===null||kt===void 0)&&kt.webp)&&getWindowExtsState("webp"))Pt="webp";else{const Ut=[];!((It=wt==null?void 0:wt.disabledExts)===null||It===void 0)&&It.avif||Ut.push("avif"),!((Rt=wt==null?void 0:wt.disabledExts)===null||Rt===void 0)&&Rt.webp||Ut.push("webp"),Ut.length&&(Pt=detect.autoDetect(Ut))}return getBmgSrc.getBmgSrc(replaceSrcDefDomain(me,getSrcDefDomain(wt==null?void 0:wt.domain)),Object.assign(Object.assign({},Le),{ext:Pt}))};let cacheClass="";const unhtml=function(me,Le){return me?me.replace(Le||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,function(wt,$t){return $t?wt:{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[wt]||""}):""},renderDOM=(me,Le,wt)=>{wt=(wt==null?void 0:wt.filter(Boolean))||[];const $t=me==="img"?">":`>${wt.length?wt.join(""):""}</${me}>`;return`<${me} ${Object.keys(Le).filter(kt=>typeof Le[kt]=="string").map(kt=>`${kt}="${unhtml(Le[kt]||"")}"`).join(" ")} ${$t}`},getImgCbStr=me=>me?`${me}(this)`:"",getSrcsetByExt=(me,Le)=>me.indexOf("@")===-1?`${me}@.${Le}`:(me=me.replace(new RegExp(".(avif|webp)$"),""),`${me}.${Le}`),getBmgExt=(me=!1)=>{var Le,wt;return isSSR$1()?"":me&&((Le=window[r$1$1])===null||Le===void 0?void 0:Le.avif)?"avif":!((wt=window[r$1$1])===null||wt===void 0)&&wt.webp?"webp":autoDetect()},render$o=(me,Le,wt)=>{var $t,kt;const It=[];let Rt="";Le.class?(It.push(Le.class),Rt=It.join(" ")):Rt=cacheClass,me=replaceSrcDefDomain(me,getSrcDefDomain(wt==null?void 0:wt.domain));const Pt=!!(!(($t=wt==null?void 0:wt.exts)===null||$t===void 0)&&$t.avif),Ft=((kt=wt==null?void 0:wt.exts)===null||kt===void 0?void 0:kt.webp)!==!1,Ut=!(Pt||Ft),Xt=!!(wt!=null&&wt.performance),Jt=isSupportBmgFormat(me)&&(wt!=null&&wt.tag?wt.tag==="picture":canUseHtmlPictureElement$1());let ii=D$3();const Ni={};if(typeof Le.dataset=="object")for(const eo in Le.dataset)Ni[`data-${eo}`]=Le.dataset[eo];let Vi=Ut?void 0:getBmgExt(Xt&&Pt),zi=!1;Xt&&(Pt&&Vi==="avif"||Ft&&Vi==="webp"||Ut&&Vi==="")&&(zi=!0),!zi&&Jt&&(wt==null?void 0:wt.safe)===!0&&(Vi=void 0,isSSR$1()&&(ii=!0));const Xn=getBmgSrc$1(me,Object.assign({},Le,{ext:Vi})),Qn=renderDOM("img",Object.assign({src:Xn,class:zi||!Jt?Rt:null,alt:Le.alt||null,loading:(Le==null?void 0:Le.loading)&&"lazy"||null,onload:ii?getImgCbStr(e$1$1):getImgCbStr((wt==null?void 0:wt.onload)||"")||null,onerror:ii?getImgCbStr(t$1$1):getImgCbStr((wt==null?void 0:wt.onerror)||"")||null,"data-onload":ii&&(wt==null?void 0:wt.onload)||null,"data-onerror":ii&&(wt==null?void 0:wt.onerror)||null},Ni));return zi?Qn:Jt?renderDOM("picture",{class:Rt||null},[Pt&&renderDOM("source",{type:"image/avif",srcset:getSrcsetByExt(Xn,"avif")})||"",Ft&&renderDOM("source",{type:"image/webp",srcset:getSrcsetByExt(Xn,"webp")})||"",Qn]):Qn};typeof window!="undefined"&&C$2();const m$6=()=>({group_id:"",layers:[{layer_id:"",layer_config:{allow_over_paint:!1,is_critical:!0,layer_mask:null,tags:{AVATAR_LAYER:{config_type:0},GENERAL_CONFIG:{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}}},general_spec:{pos_spec:{axis_x:.675,axis_y:.675,coordinate_pos:2},render_spec:{opacity:1},size_spec:{height:1,width:1}},visible:!0,resource:{res_type:3,res_image:{image_src:{src_type:2,placeholder:6,local:6}}}}],group_mask:null,is_critical_group:!0}),h$4="onAvtSrcError",v$5={animationWebpSrc:0,maskImageStyle:0},b$8=(me,Le)=>{v$5[me]=Le?1:2};class k$4{constructor(Le,wt){this.payload=Le,this.size=wt,this.layers=[],this.id=Le.group_id,this.createElement()}createElement(){this.el=document.createElement("div"),this.el.classList.add("layers")}async render(){try{return await Promise.all(this.payload.layers.filter(Le=>!!Le.visible).map(Le=>this.addLayer(Le,this.size))),this}catch(Le){return Promise.reject(Le)}}async addLayer(Le,wt){try{const $t=await new z$3(Le,wt).render();this.layers.push($t),this.el.appendChild($t.el)}catch($t){return Promise.reject($t)}}removeLayer(Le){const wt=this.layers.findIndex($t=>$t.id===Le);if(wt>-1){const $t=this.layers[wt];this.el.removeChild($t.el),this.layers.splice(wt,1)}}}class L$3{constructor(Le,wt){switch(this.localSrcList=["//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local1.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local2.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local3.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local4.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local5.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local6.jpeg"],this.type=Le.res_type,this.createElement(),this.type){case 3:this.loadLocal(Le.res_image.image_src.placeholder),this.load(Le.res_image.image_src,wt);break;case 4:this.play(Le.res_animation.webp_src,wt);break;case 5:this.draw(Le.res_native_draw.draw_src.draw);break}}createElement(){this.el=document.createElement("div"),this.el.classList.add("layer-res")}registerHandler(){const Le=window;Le[h$4]||(Le[h$4]=wt=>{wt.style.opacity="0"})}setStyle(Le,wt){this.el.style[Le]=wt}draw(Le){var wt;const{draw_type:$t,fill_mode:kt,color_config:It}=Le;$t===1&&this.setStyle("borderRadius","50%"),kt===1&&this.setStyle("backgroundColor",(wt=It==null?void 0:It.day)==null?void 0:wt.argb)}async play(Le,wt){const{src_type:$t}=Le;switch($t){case 1:try{return this.setStyle("background",`url(${getBmgSrcNext(Le.remote.url,{w:Math.floor(wt.width),h:Math.floor(wt.height),c:!0,dpr:2})}) center / cover no-repeat`),!0}catch(kt){return Promise.reject(kt)}case 2:return this.loadLocal(Le.local),!0;case 3:return this.draw(Le.draw),!0;default:return!0}}load(Le,wt){const{src_type:$t}=Le;switch($t){case 1:this.registerHandler(),this.el.innerHTML=render$o(Le.remote.url,{w:Math.floor(wt.width),h:Math.floor(wt.height),s:!0,c:!0,dpr:2},{onerror:h$4,exts:{avif:!0}});break;case 2:this.loadLocal(Le.local);break;case 3:this.draw(Le.draw);break}}loadLocal(Le){const wt=Math.floor(Le)-1;wt>-1&&this.localSrcList[wt]&&this.setStyle("backgroundImage",`url(${this.localSrcList[wt]})`)}}const S$4=(me,Le)=>new Promise((wt,$t)=>{if(!me)return $t();const kt=new Image;kt.crossOrigin="anonymous",kt.src=me,kt.onload=()=>{if(!Le)return wt(me);Le(kt).then(wt).catch($t)},kt.onerror=()=>{$t()}});class z$3{constructor(Le,wt){this.payload=Le,this.size=wt,this.id=Le.layer_id,this.createElement()}createElement(){this.el=document.createElement("div"),this.el.classList.add("layer")}async render(){try{return this.renderGeneralSpec(),await this.renderResource(),this.renderTag(),this.renderMask(),this}catch(Le){return Promise.reject(Le)}}renderGeneralSpec(){const{general_spec:Le}=this.payload;Le.pos_spec&&(Le.pos_spec.coordinate_pos===2?this.el.classList.add("center"):(this.el.style.left=`${Le.pos_spec.axis_x*this.size.width}px`,this.el.style.top=`${Le.pos_spec.axis_y*this.size.height}px`)),Le.size_spec&&(this.size={width:Le.size_spec.width*this.size.width,height:Le.size_spec.height*this.size.height},this.el.style.width=`${this.size.width}px`,this.el.style.height=`${this.size.height}px`),Le.render_spec&&typeof Le.render_spec.opacity=="number"&&(this.el.style.opacity=String(Le.render_spec.opacity))}renderTag(){var Le;const wt=(Le=this.payload.layer_config)==null?void 0:Le.tags;if(wt)for(const $t in wt){const{config_type:kt,general_config:It}=wt[$t];if(kt===1&&It){const Rt=It.web_css_style;if(Rt)for(const Pt in Rt)this.el.style[Pt]=Rt[Pt]}}}async renderMask(){var Le,wt;const $t=(Le=this.payload.layer_config)==null?void 0:Le.layer_mask;if(!$t)return;const{mask_src:kt}=$t;if(kt.src_type===1){switch(v$5.maskImageStyle){case 0:b$8("maskImageStyle",!0);break;case 2:throw new Error("Not support [maskImageStyle]")}const It=getBmgSrcNext(kt.remote.url,{w:Math.round(this.size.width),h:Math.round(this.size.height)}),Rt=await S$4(It);this.resource.setStyle("-webkit-mask-image",`url(${Rt})`),this.resource.setStyle("-webkit-mask-size","cover")}else(kt==null?void 0:kt.src_type)===3&&((wt=kt.draw)==null?void 0:wt.draw_type)===1&&this.resource.setStyle("borderRadius","50%")}renderResource(){this.resource=new L$3(this.payload.resource,this.size),this.el.appendChild(this.resource.el)}}var p$6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n$9={},u$4={};Object.defineProperty(u$4,"__esModule",{value:!0});var c$8=!0,E$4=function(){return c$8&&(c$8=typeof window>"u"),c$8};u$4.default=E$4;var x$5=p$6&&p$6.__importDefault||function(me){return me&&me.__esModule?me:{default:me}};Object.defineProperty(n$9,"__esModule",{value:!0});var d$3=n$9.unobserve=g$3=n$9.observe=void 0,_$4=x$5(u$4),l$b=null;(0,_$4.default)()||window.IntersectionObserver;var R$2=function(me,Le){me.forEach(function(wt){var $t,kt;(kt=($t=wt.target)===null||$t===void 0?void 0:$t.__i18r_callback__)===null||kt===void 0||kt.call($t,wt)})},M$1=function(me,Le){(0,_$4.default)()||(l$b||(l$b=new IntersectionObserver(R$2)),me.__i18r_callback__=Le,l$b.observe(me))},g$3=n$9.observe=M$1,P$5=function(me){var Le;l$b&&((Le=l$b.unobserve)===null||Le===void 0||Le.call(l$b,me),delete me.__i18r_callback__)};d$3=n$9.unobserve=P$5;class j$1 extends HTMLElement{constructor(){super(),this.loaded=!1,this.size={width:0,height:0},this.config={baseSize:0,isFloat:!1,lazyload:!1},this.layers=[],this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-block;
            position: relative;
            width: var(--avatar-width);
            height: var(--avatar-height);
          }
          #canvas {
            width: var(--avatar-canvas-width);
            height: var(--avatar-canvas-height);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
          .layers {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          .layer {
            position: absolute;
            isolation: isolate;
            overflow: hidden;
          }
          .layer.center {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .layer-res {
            width: 100%;
            height: 100%;
            isolation: isolate;
            overflow: hidden;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          .layer-res picture {
            display: inline-block;
          }
          .layer-res div,
          .layer-res picture,
          .layer-res img {
            width: 100%;
            height: 100%;
          }
        </style>
        <div id="canvas"></div>
      `,this.canvasElement=this.shadowRoot.querySelector("#canvas"))}disconnectedCallback(){this.config.lazyload&&!this.loaded&&d$3(this.canvasElement),this.clearCanvas(),this.clearLayers(),this.loaded=!1}load(Le,wt){const $t={width:0,height:0};typeof wt=="number"?($t.width=wt,$t.height=wt):typeof wt=="object"?(typeof wt.baseSize=="number"?($t.width=wt.baseSize,$t.height=wt.baseSize):typeof wt.baseSize=="object"?($t.width=wt.baseSize.width,$t.height=wt.baseSize.height):console.warn("Not found 'baseSize' in Avatar Config"),this.config.isFloat=wt.isFloat||!1,this.config.lazyload=wt.lazyload||!1):console.warn("Not found 'baseSize' in Avatar Config"),this.size={...$t},this.config.baseSize=$t,this.initCanvas(Le),this.renderLayers(Le)}renderLayers(Le){var wt;if(this.config.lazyload&&!this.loaded){this.renderDefaultLayers(),g$3(this.canvasElement,$t=>{$t.isIntersecting&&(this.loaded=!0,this.renderLayers(Le),d$3(this.canvasElement))});return}(wt=Le.layers)!=null&&wt.length?this.renderNormalLayers(Le):Le.fallback_layers&&this.renderFallbackLayers(Le.fallback_layers)}initCanvas(Le){const wt={width:this.size.width*Le.container_size.width,height:this.size.height*Le.container_size.height};this.config.isFloat?(this.style.setProperty("--avatar-width",`${this.size.width}px`),this.style.setProperty("--avatar-height",`${this.size.height}px`)):(this.style.setProperty("--avatar-width",wt.width+"px"),this.style.setProperty("--avatar-height",wt.height+"px")),this.canvasElement.style.setProperty("--avatar-canvas-width",wt.width+"px"),this.canvasElement.style.setProperty("--avatar-canvas-height",wt.height+"px")}async renderDefaultLayers(){await this.addLayerGroup(m$6(),this.size),this.renderCanvas()}async renderNormalLayers(Le){try{await Promise.all(Le.layers.map(wt=>this.addLayerGroup(wt,this.size))),this.renderCanvas()}catch{this.clearCanvas(),this.clearLayers(),this.renderFallbackLayers(Le.fallback_layers);return}}async renderFallbackLayers(Le){try{await this.addLayerGroup(Le,this.size),this.renderCanvas()}catch{this.clearCanvas(),this.clearLayers(),this.renderDefaultLayers()}}clearCanvas(){Array.from(this.canvasElement.children).forEach(Le=>{this.canvasElement.removeChild(Le)})}clearLayers(){this.layers=[]}renderCanvas(){this.clearCanvas(),this.layers.forEach(Le=>{this.canvasElement.appendChild(Le.el)})}async addLayerGroup(Le,wt){try{const $t=await new k$4(Le,wt).render();this.layers.push($t)}catch($t){return Promise.reject($t)}}}customElements.define("bili-avatar",j$1);function b$7(me){typeof queueMicrotask=="function"?queueMicrotask(me):Promise.resolve().then(me).catch(Le=>setTimeout(()=>{throw Le}))}function p$5(me,Le,wt,$t){me.removeEventListener(Le,wt,$t)}function m$5(me,Le,wt,$t){return me.addEventListener(Le,wt,$t),()=>{p$5(me,Le,wt,$t)}}class l$a{constructor(){this.disposables=[]}addEventListener(Le,wt,$t,kt){return this.add(m$5(Le,wt,$t,kt))}mutationObserve(Le,wt,$t){let kt=!1;const It=Pt=>{kt||(kt=!0,Pt.disconnect())},Rt=new MutationObserver(wt);return Rt.observe(Le,$t),()=>It(Rt)}requestAnimationFrame(...Le){const wt=requestAnimationFrame(...Le);return this.add(()=>cancelAnimationFrame(wt))}nextFrame(...Le){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...Le))}setTimeout(...Le){const wt=setTimeout(...Le);return this.add(()=>clearTimeout(wt))}microTask(...Le){const wt={current:!0};return b$7(()=>{wt.current&&Le[0]()}),this.add(()=>{wt.current=!1})}style(Le,wt,$t){const kt=Le.style.getPropertyValue(wt);return Object.assign(Le.style,{[wt]:$t}),this.add(()=>{Object.assign(Le.style,{[wt]:kt})})}group(Le){const wt=new l$a;return Le(wt),this.add(()=>wt.dispose())}add(Le){return this.disposables.push(Le),()=>{const wt=this.disposables.indexOf(Le);wt>=0&&this.remove(wt,1)}}remove(Le,wt){const $t=this.disposables.splice(Le,wt!=null?wt:this.disposables.length);for(const kt of $t)kt()}dispose(){this.remove(0)}}function k$3(){return new l$a}const x$4=typeof window<"u",v$4=1e3;x$4&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=v$4));const d$2=class uu extends HTMLElement{constructor(){super(),this.disposables=k$3(),this.state={label:"",value:"",name:"",disabled:!1,checked:!1},this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-checkbox-size: 16px;
            --bili-checkbox-font-size: 14px;
            --bili-checkbox-border-width: 1px;
            --bili-checkbox-border-radius: 2px;
            --bili-checkbox-checked-color: var(--brand_blue);
            --bili-checkbox-margin-inline-end: 8px;

            display: inline-flex;
            align-items: baseline;
            padding: 0;
            margin: 0;
            cursor: pointer;
            margin-inline-end: var(--bili-checkbox-margin-inline-end);
          }
          #input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            display: inline-block;
            outline: none;
            cursor: pointer;
            align-self: center;
            border-radius: var(--bili-checkbox-border-radius);
            width: var(--bili-checkbox-size);
            height: var(--bili-checkbox-size);
          }
          #input input {
            bottom: 0;
            left: 0;
            margin: 0;
            opacity: 0;
            outline: none;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
          }
          #input #inner {
            display: block;
            background-color: var(--bg1_float);
            border: 1px solid var(--text4);
            border-radius: var(--bili-checkbox-border-radius);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            transition: all .3s ease-in-out;
          }
          #input #inner:hover {
            border-color: var(--bili-checkbox-checked-color);
          }
          #input[checked] #inner {
            border-color: var(--bili-checkbox-checked-color);
            background-color: var(--bili-checkbox-checked-color);
          }
          #input[checked] #inner::after {
            transform: rotate(45deg) scale(1) translate(-65%, -50%);
            opacity: 1;
          }
          #input #inner::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 25%;
            display: table;
            width: 4px;
            height: 8px;
            border: 2px solid var(--text_white);
            opacity: 0;
            border-top: 0;
            border-left: 0;
            transition: all .3s ease-in-out;
            transform: rotate(45deg) scale(0) translate(-50%, -50%);
          }
          #label {
            margin-left: 8px;
            font-size: var(--bili-checkbox-font-size);
            color: var(--text2);
          }
        </style>
        <span id="input">
          <input type="checkbox">
          <span id="inner"></span>
        </span>
        <slot>
          <span id="label"></span>
        </slot>
      `)}static get observedAttributes(){return["name","value","label","disabled","checked"]}connectedCallback(){if(this.shadowRoot){const Le=this.getAttribute("label");uu.observedAttributes.forEach(wt=>{const $t=this.getAttribute(wt);$t!==null&&(wt==="value"&&!Le&&this.updateAttribute("label",$t),this.updateAttribute(wt,$t))}),this.shadowRoot&&this.disposables.addEventListener(this,"click",()=>{if(this.state.disabled)return;this.state.checked=!this.state.checked,this.updateInput("checked",this.state.checked);const wt={name:this.state.name,value:this.state.value,checked:this.state.checked},$t=new CustomEvent("change",{detail:wt});this.parentElement&&this.parentElement.isCheckboxGroup&&this.parentElement.onCheckboxChange($t),this.dispatchEvent($t)})}}disconnectedCallback(){this.disposables.dispose()}updateInput(Le,wt){var $t,kt;const It=($t=this.shadowRoot)==null?void 0:$t.querySelector("#input"),Rt=(kt=this.shadowRoot)==null?void 0:kt.querySelector("input");if(!(!It||!Rt))switch(Le){case"value":Rt.setAttribute(Le,wt);break;case"disabled":case"checked":wt?(It.setAttribute(Le,""),Rt.setAttribute(Le,"")):(It.removeAttribute(Le),Rt.removeAttribute(Le));break}}updateLabel(Le){var wt;const $t=(wt=this.shadowRoot)==null?void 0:wt.querySelector("#label");$t&&($t.textContent=Le)}updateAttribute(Le,wt){switch(Le){case"name":this.state.name=wt;break;case"label":this.updateLabel(wt),this.state.label=wt;break;case"value":this.updateInput(Le,wt),this.state[Le]=wt;break;case"disabled":case"checked":this.updateInput(Le,wt==="true"),this.state[Le]=wt==="true";break}}attributeChangedCallback(Le,wt,$t){this.updateAttribute(Le,$t)}};d$2.elName="bili-checkbox";let r$8=d$2;class c$7 extends HTMLElement{constructor(){super(...arguments),this.isCheckboxGroup=!0,this.valueList=[]}onCheckboxChange(Le){const{value:wt,checked:$t}=Le.detail;if($t){if(this.valueList.includes(wt))return;this.valueList.push(wt),this.dispatchEvent(new CustomEvent("change",{detail:[...this.valueList]}));return}const kt=this.valueList.indexOf(wt);kt!==-1&&(this.valueList.splice(kt,1),this.dispatchEvent(new CustomEvent("change",{detail:[...this.valueList]})))}}c$7.elName="bili-checkbox-group";customElements.get(r$8.elName)||(customElements.define(r$8.elName,r$8),customElements.define(c$7.elName,c$7));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$3=window,e$8=t$3.ShadowRoot&&(t$3.ShadyCSS===void 0||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$7=Symbol(),n$8=new WeakMap;class o$8{constructor(Le,wt,$t){if(this._$cssResult$=!0,$t!==s$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=Le,this.t=wt}get styleSheet(){let Le=this.o;const wt=this.t;if(e$8&&Le===void 0){const $t=wt!==void 0&&wt.length===1;$t&&(Le=n$8.get(wt)),Le===void 0&&((this.o=Le=new CSSStyleSheet).replaceSync(this.cssText),$t&&n$8.set(wt,Le))}return Le}toString(){return this.cssText}}const r$7=me=>new o$8(typeof me=="string"?me:me+"",void 0,s$7),i$6=(me,...Le)=>{const wt=me.length===1?me[0]:Le.reduce(($t,kt,It)=>$t+(Rt=>{if(Rt._$cssResult$===!0)return Rt.cssText;if(typeof Rt=="number")return Rt;throw Error("Value passed to 'css' function must be a 'css' function result: "+Rt+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(kt)+me[It+1],me[0]);return new o$8(wt,me,s$7)},S$3=(me,Le)=>{e$8?me.adoptedStyleSheets=Le.map(wt=>wt instanceof CSSStyleSheet?wt:wt.styleSheet):Le.forEach(wt=>{const $t=document.createElement("style"),kt=t$3.litNonce;kt!==void 0&&$t.setAttribute("nonce",kt),$t.textContent=wt.cssText,me.appendChild($t)})},c$6=e$8?me=>me:me=>me instanceof CSSStyleSheet?(Le=>{let wt="";for(const $t of Le.cssRules)wt+=$t.cssText;return r$7(wt)})(me):me;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$6;const e$7=window,r$6=e$7.trustedTypes,h$3=r$6?r$6.emptyScript:"",o$7=e$7.reactiveElementPolyfillSupport,n$7={toAttribute(me,Le){switch(Le){case Boolean:me=me?h$3:null;break;case Object:case Array:me=me==null?me:JSON.stringify(me)}return me},fromAttribute(me,Le){let wt=me;switch(Le){case Boolean:wt=me!==null;break;case Number:wt=me===null?null:Number(me);break;case Object:case Array:try{wt=JSON.parse(me)}catch{wt=null}}return wt}},a$3=(me,Le)=>Le!==me&&(Le==Le||me==me),l$9={attribute:!0,type:String,converter:n$7,reflect:!1,hasChanged:a$3},d$1="finalized";class u$3 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(Le){var wt;this.finalize(),((wt=this.h)!==null&&wt!==void 0?wt:this.h=[]).push(Le)}static get observedAttributes(){this.finalize();const Le=[];return this.elementProperties.forEach((wt,$t)=>{const kt=this._$Ep($t,wt);kt!==void 0&&(this._$Ev.set(kt,$t),Le.push(kt))}),Le}static createProperty(Le,wt=l$9){if(wt.state&&(wt.attribute=!1),this.finalize(),this.elementProperties.set(Le,wt),!wt.noAccessor&&!this.prototype.hasOwnProperty(Le)){const $t=typeof Le=="symbol"?Symbol():"__"+Le,kt=this.getPropertyDescriptor(Le,$t,wt);kt!==void 0&&Object.defineProperty(this.prototype,Le,kt)}}static getPropertyDescriptor(Le,wt,$t){return{get(){return this[wt]},set(kt){const It=this[Le];this[wt]=kt,this.requestUpdate(Le,It,$t)},configurable:!0,enumerable:!0}}static getPropertyOptions(Le){return this.elementProperties.get(Le)||l$9}static finalize(){if(this.hasOwnProperty(d$1))return!1;this[d$1]=!0;const Le=Object.getPrototypeOf(this);if(Le.finalize(),Le.h!==void 0&&(this.h=[...Le.h]),this.elementProperties=new Map(Le.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const wt=this.properties,$t=[...Object.getOwnPropertyNames(wt),...Object.getOwnPropertySymbols(wt)];for(const kt of $t)this.createProperty(kt,wt[kt])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(Le){const wt=[];if(Array.isArray(Le)){const $t=new Set(Le.flat(1/0).reverse());for(const kt of $t)wt.unshift(c$6(kt))}else Le!==void 0&&wt.push(c$6(Le));return wt}static _$Ep(Le,wt){const $t=wt.attribute;return $t===!1?void 0:typeof $t=="string"?$t:typeof Le=="string"?Le.toLowerCase():void 0}_$Eu(){var Le;this._$E_=new Promise(wt=>this.enableUpdating=wt),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(Le=this.constructor.h)===null||Le===void 0||Le.forEach(wt=>wt(this))}addController(Le){var wt,$t;((wt=this._$ES)!==null&&wt!==void 0?wt:this._$ES=[]).push(Le),this.renderRoot!==void 0&&this.isConnected&&(($t=Le.hostConnected)===null||$t===void 0||$t.call(Le))}removeController(Le){var wt;(wt=this._$ES)===null||wt===void 0||wt.splice(this._$ES.indexOf(Le)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((Le,wt)=>{this.hasOwnProperty(wt)&&(this._$Ei.set(wt,this[wt]),delete this[wt])})}createRenderRoot(){var Le;const wt=(Le=this.shadowRoot)!==null&&Le!==void 0?Le:this.attachShadow(this.constructor.shadowRootOptions);return S$3(wt,this.constructor.elementStyles),wt}connectedCallback(){var Le;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(Le=this._$ES)===null||Le===void 0||Le.forEach(wt=>{var $t;return($t=wt.hostConnected)===null||$t===void 0?void 0:$t.call(wt)})}enableUpdating(Le){}disconnectedCallback(){var Le;(Le=this._$ES)===null||Le===void 0||Le.forEach(wt=>{var $t;return($t=wt.hostDisconnected)===null||$t===void 0?void 0:$t.call(wt)})}attributeChangedCallback(Le,wt,$t){this._$AK(Le,$t)}_$EO(Le,wt,$t=l$9){var kt;const It=this.constructor._$Ep(Le,$t);if(It!==void 0&&$t.reflect===!0){const Rt=(((kt=$t.converter)===null||kt===void 0?void 0:kt.toAttribute)!==void 0?$t.converter:n$7).toAttribute(wt,$t.type);this._$El=Le,Rt==null?this.removeAttribute(It):this.setAttribute(It,Rt),this._$El=null}}_$AK(Le,wt){var $t;const kt=this.constructor,It=kt._$Ev.get(Le);if(It!==void 0&&this._$El!==It){const Rt=kt.getPropertyOptions(It),Pt=typeof Rt.converter=="function"?{fromAttribute:Rt.converter}:(($t=Rt.converter)===null||$t===void 0?void 0:$t.fromAttribute)!==void 0?Rt.converter:n$7;this._$El=It,this[It]=Pt.fromAttribute(wt,Rt.type),this._$El=null}}requestUpdate(Le,wt,$t){let kt=!0;Le!==void 0&&((($t=$t||this.constructor.getPropertyOptions(Le)).hasChanged||a$3)(this[Le],wt)?(this._$AL.has(Le)||this._$AL.set(Le,wt),$t.reflect===!0&&this._$El!==Le&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(Le,$t))):kt=!1),!this.isUpdatePending&&kt&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(wt){Promise.reject(wt)}const Le=this.scheduleUpdate();return Le!=null&&await Le,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var Le;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((kt,It)=>this[It]=kt),this._$Ei=void 0);let wt=!1;const $t=this._$AL;try{wt=this.shouldUpdate($t),wt?(this.willUpdate($t),(Le=this._$ES)===null||Le===void 0||Le.forEach(kt=>{var It;return(It=kt.hostUpdate)===null||It===void 0?void 0:It.call(kt)}),this.update($t)):this._$Ek()}catch(kt){throw wt=!1,this._$Ek(),kt}wt&&this._$AE($t)}willUpdate(Le){}_$AE(Le){var wt;(wt=this._$ES)===null||wt===void 0||wt.forEach($t=>{var kt;return(kt=$t.hostUpdated)===null||kt===void 0?void 0:kt.call($t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(Le)),this.updated(Le)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(Le){return!0}update(Le){this._$EC!==void 0&&(this._$EC.forEach((wt,$t)=>this._$EO($t,this[$t],wt)),this._$EC=void 0),this._$Ek()}updated(Le){}firstUpdated(Le){}}u$3[d$1]=!0,u$3.elementProperties=new Map,u$3.elementStyles=[],u$3.shadowRootOptions={mode:"open"},o$7==null||o$7({ReactiveElement:u$3}),((s$6=e$7.reactiveElementVersions)!==null&&s$6!==void 0?s$6:e$7.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$2;const i$5=window,s$5=i$5.trustedTypes,e$6=s$5?s$5.createPolicy("lit-html",{createHTML:me=>me}):void 0,o$6="$lit$",n$6=`lit$${(Math.random()+"").slice(9)}$`,l$8="?"+n$6,h$2=`<${l$8}>`,r$5=document,u$2=()=>r$5.createComment(""),d=me=>me===null||typeof me!="object"&&typeof me!="function",c$5=Array.isArray,v$3=me=>c$5(me)||typeof(me==null?void 0:me[Symbol.iterator])=="function",a$2=`[ 	
\f\r]`,f$5=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$3=/-->/g,m$4=/>/g,p$4=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),g$2=/'/g,$$2=/"/g,y$2=/^(?:script|style|textarea|title)$/i,w$2=me=>(Le,...wt)=>({_$litType$:me,strings:Le,values:wt}),x$3=w$2(1),T$2=Symbol.for("lit-noChange"),A$2=Symbol.for("lit-nothing"),E$3=new WeakMap,C$1=r$5.createTreeWalker(r$5,129,null,!1);function P$4(me,Le){if(!Array.isArray(me)||!me.hasOwnProperty("raw"))throw Error("invalid template strings array");return e$6!==void 0?e$6.createHTML(Le):Le}const V$1=(me,Le)=>{const wt=me.length-1,$t=[];let kt,It=Le===2?"<svg>":"",Rt=f$5;for(let Pt=0;Pt<wt;Pt++){const Ft=me[Pt];let Ut,Xt,Jt=-1,ii=0;for(;ii<Ft.length&&(Rt.lastIndex=ii,Xt=Rt.exec(Ft),Xt!==null);)ii=Rt.lastIndex,Rt===f$5?Xt[1]==="!--"?Rt=_$3:Xt[1]!==void 0?Rt=m$4:Xt[2]!==void 0?(y$2.test(Xt[2])&&(kt=RegExp("</"+Xt[2],"g")),Rt=p$4):Xt[3]!==void 0&&(Rt=p$4):Rt===p$4?Xt[0]===">"?(Rt=kt!=null?kt:f$5,Jt=-1):Xt[1]===void 0?Jt=-2:(Jt=Rt.lastIndex-Xt[2].length,Ut=Xt[1],Rt=Xt[3]===void 0?p$4:Xt[3]==='"'?$$2:g$2):Rt===$$2||Rt===g$2?Rt=p$4:Rt===_$3||Rt===m$4?Rt=f$5:(Rt=p$4,kt=void 0);const Ni=Rt===p$4&&me[Pt+1].startsWith("/>")?" ":"";It+=Rt===f$5?Ft+h$2:Jt>=0?($t.push(Ut),Ft.slice(0,Jt)+o$6+Ft.slice(Jt)+n$6+Ni):Ft+n$6+(Jt===-2?($t.push(void 0),Pt):Ni)}return[P$4(me,It+(me[wt]||"<?>")+(Le===2?"</svg>":"")),$t]};class N$1{constructor({strings:Le,_$litType$:wt},$t){let kt;this.parts=[];let It=0,Rt=0;const Pt=Le.length-1,Ft=this.parts,[Ut,Xt]=V$1(Le,wt);if(this.el=N$1.createElement(Ut,$t),C$1.currentNode=this.el.content,wt===2){const Jt=this.el.content,ii=Jt.firstChild;ii.remove(),Jt.append(...ii.childNodes)}for(;(kt=C$1.nextNode())!==null&&Ft.length<Pt;){if(kt.nodeType===1){if(kt.hasAttributes()){const Jt=[];for(const ii of kt.getAttributeNames())if(ii.endsWith(o$6)||ii.startsWith(n$6)){const Ni=Xt[Rt++];if(Jt.push(ii),Ni!==void 0){const Vi=kt.getAttribute(Ni.toLowerCase()+o$6).split(n$6),zi=/([.?@])?(.*)/.exec(Ni);Ft.push({type:1,index:It,name:zi[2],strings:Vi,ctor:zi[1]==="."?H$1:zi[1]==="?"?L$2:zi[1]==="@"?z$2:k$2})}else Ft.push({type:6,index:It})}for(const ii of Jt)kt.removeAttribute(ii)}if(y$2.test(kt.tagName)){const Jt=kt.textContent.split(n$6),ii=Jt.length-1;if(ii>0){kt.textContent=s$5?s$5.emptyScript:"";for(let Ni=0;Ni<ii;Ni++)kt.append(Jt[Ni],u$2()),C$1.nextNode(),Ft.push({type:2,index:++It});kt.append(Jt[ii],u$2())}}}else if(kt.nodeType===8)if(kt.data===l$8)Ft.push({type:2,index:It});else{let Jt=-1;for(;(Jt=kt.data.indexOf(n$6,Jt+1))!==-1;)Ft.push({type:7,index:It}),Jt+=n$6.length-1}It++}}static createElement(Le,wt){const $t=r$5.createElement("template");return $t.innerHTML=Le,$t}}function S$2(me,Le,wt=me,$t){var kt,It,Rt,Pt;if(Le===T$2)return Le;let Ft=$t!==void 0?(kt=wt._$Co)===null||kt===void 0?void 0:kt[$t]:wt._$Cl;const Ut=d(Le)?void 0:Le._$litDirective$;return(Ft==null?void 0:Ft.constructor)!==Ut&&((It=Ft==null?void 0:Ft._$AO)===null||It===void 0||It.call(Ft,!1),Ut===void 0?Ft=void 0:(Ft=new Ut(me),Ft._$AT(me,wt,$t)),$t!==void 0?((Rt=(Pt=wt)._$Co)!==null&&Rt!==void 0?Rt:Pt._$Co=[])[$t]=Ft:wt._$Cl=Ft),Ft!==void 0&&(Le=S$2(me,Ft._$AS(me,Le.values),Ft,$t)),Le}class M{constructor(Le,wt){this._$AV=[],this._$AN=void 0,this._$AD=Le,this._$AM=wt}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(Le){var wt;const{el:{content:$t},parts:kt}=this._$AD,It=((wt=Le==null?void 0:Le.creationScope)!==null&&wt!==void 0?wt:r$5).importNode($t,!0);C$1.currentNode=It;let Rt=C$1.nextNode(),Pt=0,Ft=0,Ut=kt[0];for(;Ut!==void 0;){if(Pt===Ut.index){let Xt;Ut.type===2?Xt=new R$1(Rt,Rt.nextSibling,this,Le):Ut.type===1?Xt=new Ut.ctor(Rt,Ut.name,Ut.strings,this,Le):Ut.type===6&&(Xt=new Z$2(Rt,this,Le)),this._$AV.push(Xt),Ut=kt[++Ft]}Pt!==(Ut==null?void 0:Ut.index)&&(Rt=C$1.nextNode(),Pt++)}return C$1.currentNode=r$5,It}v(Le){let wt=0;for(const $t of this._$AV)$t!==void 0&&($t.strings!==void 0?($t._$AI(Le,$t,wt),wt+=$t.strings.length-2):$t._$AI(Le[wt])),wt++}}class R$1{constructor(Le,wt,$t,kt){var It;this.type=2,this._$AH=A$2,this._$AN=void 0,this._$AA=Le,this._$AB=wt,this._$AM=$t,this.options=kt,this._$Cp=(It=kt==null?void 0:kt.isConnected)===null||It===void 0||It}get _$AU(){var Le,wt;return(wt=(Le=this._$AM)===null||Le===void 0?void 0:Le._$AU)!==null&&wt!==void 0?wt:this._$Cp}get parentNode(){let Le=this._$AA.parentNode;const wt=this._$AM;return wt!==void 0&&(Le==null?void 0:Le.nodeType)===11&&(Le=wt.parentNode),Le}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(Le,wt=this){Le=S$2(this,Le,wt),d(Le)?Le===A$2||Le==null||Le===""?(this._$AH!==A$2&&this._$AR(),this._$AH=A$2):Le!==this._$AH&&Le!==T$2&&this._(Le):Le._$litType$!==void 0?this.g(Le):Le.nodeType!==void 0?this.$(Le):v$3(Le)?this.T(Le):this._(Le)}k(Le){return this._$AA.parentNode.insertBefore(Le,this._$AB)}$(Le){this._$AH!==Le&&(this._$AR(),this._$AH=this.k(Le))}_(Le){this._$AH!==A$2&&d(this._$AH)?this._$AA.nextSibling.data=Le:this.$(r$5.createTextNode(Le)),this._$AH=Le}g(Le){var wt;const{values:$t,_$litType$:kt}=Le,It=typeof kt=="number"?this._$AC(Le):(kt.el===void 0&&(kt.el=N$1.createElement(P$4(kt.h,kt.h[0]),this.options)),kt);if(((wt=this._$AH)===null||wt===void 0?void 0:wt._$AD)===It)this._$AH.v($t);else{const Rt=new M(It,this),Pt=Rt.u(this.options);Rt.v($t),this.$(Pt),this._$AH=Rt}}_$AC(Le){let wt=E$3.get(Le.strings);return wt===void 0&&E$3.set(Le.strings,wt=new N$1(Le)),wt}T(Le){c$5(this._$AH)||(this._$AH=[],this._$AR());const wt=this._$AH;let $t,kt=0;for(const It of Le)kt===wt.length?wt.push($t=new R$1(this.k(u$2()),this.k(u$2()),this,this.options)):$t=wt[kt],$t._$AI(It),kt++;kt<wt.length&&(this._$AR($t&&$t._$AB.nextSibling,kt),wt.length=kt)}_$AR(Le=this._$AA.nextSibling,wt){var $t;for(($t=this._$AP)===null||$t===void 0||$t.call(this,!1,!0,wt);Le&&Le!==this._$AB;){const kt=Le.nextSibling;Le.remove(),Le=kt}}setConnected(Le){var wt;this._$AM===void 0&&(this._$Cp=Le,(wt=this._$AP)===null||wt===void 0||wt.call(this,Le))}}class k$2{constructor(Le,wt,$t,kt,It){this.type=1,this._$AH=A$2,this._$AN=void 0,this.element=Le,this.name=wt,this._$AM=kt,this.options=It,$t.length>2||$t[0]!==""||$t[1]!==""?(this._$AH=Array($t.length-1).fill(new String),this.strings=$t):this._$AH=A$2}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(Le,wt=this,$t,kt){const It=this.strings;let Rt=!1;if(It===void 0)Le=S$2(this,Le,wt,0),Rt=!d(Le)||Le!==this._$AH&&Le!==T$2,Rt&&(this._$AH=Le);else{const Pt=Le;let Ft,Ut;for(Le=It[0],Ft=0;Ft<It.length-1;Ft++)Ut=S$2(this,Pt[$t+Ft],wt,Ft),Ut===T$2&&(Ut=this._$AH[Ft]),Rt||(Rt=!d(Ut)||Ut!==this._$AH[Ft]),Ut===A$2?Le=A$2:Le!==A$2&&(Le+=(Ut!=null?Ut:"")+It[Ft+1]),this._$AH[Ft]=Ut}Rt&&!kt&&this.j(Le)}j(Le){Le===A$2?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,Le!=null?Le:"")}}class H$1 extends k$2{constructor(){super(...arguments),this.type=3}j(Le){this.element[this.name]=Le===A$2?void 0:Le}}const I$4=s$5?s$5.emptyScript:"";class L$2 extends k$2{constructor(){super(...arguments),this.type=4}j(Le){Le&&Le!==A$2?this.element.setAttribute(this.name,I$4):this.element.removeAttribute(this.name)}}class z$2 extends k$2{constructor(Le,wt,$t,kt,It){super(Le,wt,$t,kt,It),this.type=5}_$AI(Le,wt=this){var $t;if((Le=($t=S$2(this,Le,wt,0))!==null&&$t!==void 0?$t:A$2)===T$2)return;const kt=this._$AH,It=Le===A$2&&kt!==A$2||Le.capture!==kt.capture||Le.once!==kt.once||Le.passive!==kt.passive,Rt=Le!==A$2&&(kt===A$2||It);It&&this.element.removeEventListener(this.name,this,kt),Rt&&this.element.addEventListener(this.name,this,Le),this._$AH=Le}handleEvent(Le){var wt,$t;typeof this._$AH=="function"?this._$AH.call(($t=(wt=this.options)===null||wt===void 0?void 0:wt.host)!==null&&$t!==void 0?$t:this.element,Le):this._$AH.handleEvent(Le)}}class Z$2{constructor(Le,wt,$t){this.element=Le,this.type=6,this._$AN=void 0,this._$AM=wt,this.options=$t}get _$AU(){return this._$AM._$AU}_$AI(Le){S$2(this,Le)}}const j={O:o$6,P:n$6,A:l$8,C:1,M:V$1,L:M,R:v$3,D:S$2,I:R$1,V:k$2,H:L$2,N:z$2,U:H$1,F:Z$2},B$3=i$5.litHtmlPolyfillSupport;B$3==null||B$3(N$1,R$1),((t$2=i$5.litHtmlVersions)!==null&&t$2!==void 0?t$2:i$5.litHtmlVersions=[]).push("2.8.0");const D$2=(me,Le,wt)=>{var $t,kt;const It=($t=wt==null?void 0:wt.renderBefore)!==null&&$t!==void 0?$t:Le;let Rt=It._$litPart$;if(Rt===void 0){const Pt=(kt=wt==null?void 0:wt.renderBefore)!==null&&kt!==void 0?kt:null;It._$litPart$=Rt=new R$1(Le.insertBefore(u$2(),Pt),Pt,void 0,wt!=null?wt:{})}return Rt._$AI(me),Rt};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$7,o$5;class s$4 extends u$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var Le,wt;const $t=super.createRenderRoot();return(Le=(wt=this.renderOptions).renderBefore)!==null&&Le!==void 0||(wt.renderBefore=$t.firstChild),$t}update(Le){const wt=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(Le),this._$Do=D$2(wt,this.renderRoot,this.renderOptions)}connectedCallback(){var Le;super.connectedCallback(),(Le=this._$Do)===null||Le===void 0||Le.setConnected(!0)}disconnectedCallback(){var Le;super.disconnectedCallback(),(Le=this._$Do)===null||Le===void 0||Le.setConnected(!1)}render(){return T$2}}s$4.finalized=!0,s$4._$litElement$=!0,(l$7=globalThis.litElementHydrateSupport)===null||l$7===void 0||l$7.call(globalThis,{LitElement:s$4});const n$5=globalThis.litElementPolyfillSupport;n$5==null||n$5({LitElement:s$4});((o$5=globalThis.litElementVersions)!==null&&o$5!==void 0?o$5:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$5=me=>Le=>typeof Le=="function"?((wt,$t)=>(customElements.define(wt,$t),$t))(me,Le):((wt,$t)=>{const{kind:kt,elements:It}=$t;return{kind:kt,elements:It,finisher(Rt){customElements.define(wt,Rt)}}})(me,Le);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$4=(me,Le)=>Le.kind==="method"&&Le.descriptor&&!("value"in Le.descriptor)?{...Le,finisher(wt){wt.createProperty(Le.key,me)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:Le.key,initializer(){typeof Le.initializer=="function"&&(this[Le.key]=Le.initializer.call(this))},finisher(wt){wt.createProperty(Le.key,me)}},e$4=(me,Le,wt)=>{Le.constructor.createProperty(wt,me)};function n$4(me){return(Le,wt)=>wt!==void 0?e$4(me,Le,wt):i$4(me,Le)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(me){return n$4({...me,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$4=({finisher:me,descriptor:Le})=>(wt,$t)=>{var kt;if($t===void 0){const It=(kt=wt.originalKey)!==null&&kt!==void 0?kt:wt.key,Rt=Le!=null?{kind:"method",placement:"prototype",key:It,descriptor:Le(wt.key)}:{...wt,key:It};return me!=null&&(Rt.finisher=function(Pt){me(Pt,It)}),Rt}{const It=wt.constructor;Le!==void 0&&Object.defineProperty(wt,$t,Le($t)),me==null||me(It,$t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(me,Le){return o$4({descriptor:wt=>{const $t={get(){var kt,It;return(It=(kt=this.renderRoot)===null||kt===void 0?void 0:kt.querySelector(me))!==null&&It!==void 0?It:null},enumerable:!0,configurable:!0};if(Le){const kt=typeof wt=="symbol"?Symbol():"__"+wt;$t.get=function(){var It,Rt;return this[kt]===void 0&&(this[kt]=(Rt=(It=this.renderRoot)===null||It===void 0?void 0:It.querySelector(me))!==null&&Rt!==void 0?Rt:null),this[kt]}}return $t}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$3;const e$3=((n$3=window.HTMLSlotElement)===null||n$3===void 0?void 0:n$3.prototype.assignedElements)!=null?(me,Le)=>me.assignedElements(Le):(me,Le)=>me.assignedNodes(Le).filter(wt=>wt.nodeType===Node.ELEMENT_NODE);function l$6(me){const{slot:Le,selector:wt}=me!=null?me:{};return o$4({descriptor:$t=>({get(){var kt;const It="slot"+(Le?`[name=${Le}]`:":not([name])"),Rt=(kt=this.renderRoot)===null||kt===void 0?void 0:kt.querySelector(It),Pt=Rt!=null?e$3(Rt,me):[];return wt?Pt.filter(Ft=>Ft.matches(wt)):Pt},enumerable:!0,configurable:!0})})}class _$2{constructor(){this.reset()}reset(Le){this.promise=new Promise((wt,$t)=>{this.resolve=wt,this.reject=$t})}}function P$3(){return new _$2}function T$1(me){typeof queueMicrotask=="function"?queueMicrotask(me):Promise.resolve().then(me).catch(Le=>setTimeout(()=>{throw Le}))}function E$2(me,Le,wt,$t){me.removeEventListener(Le,wt,$t)}function g$1(me,Le,wt,$t){return me.addEventListener(Le,wt,$t),()=>{E$2(me,Le,wt,$t)}}class h$1{constructor(){this.disposables=[]}addEventListener(Le,wt,$t,kt){return this.add(g$1(Le,wt,$t,kt))}mutationObserve(Le,wt,$t){let kt=!1;const It=Pt=>{kt||(kt=!0,Pt.disconnect())},Rt=new MutationObserver(wt);return Rt.observe(Le,$t),()=>It(Rt)}requestAnimationFrame(...Le){const wt=requestAnimationFrame(...Le);return this.add(()=>cancelAnimationFrame(wt))}nextFrame(...Le){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...Le))}setTimeout(...Le){const wt=setTimeout(...Le);return this.add(()=>clearTimeout(wt))}microTask(...Le){const wt={current:!0};return T$1(()=>{wt.current&&Le[0]()}),this.add(()=>{wt.current=!1})}style(Le,wt,$t){const kt=Le.style.getPropertyValue(wt);return Object.assign(Le.style,{[wt]:$t}),this.add(()=>{Object.assign(Le.style,{[wt]:kt})})}group(Le){const wt=new h$1;return Le(wt),this.add(()=>wt.dispose())}add(Le){return this.disposables.push(Le),()=>{const wt=this.disposables.indexOf(Le);wt>=0&&this.remove(wt,1)}}remove(Le,wt){const $t=this.disposables.splice(Le,wt!=null?wt:this.disposables.length);for(const kt of $t)kt()}dispose(){this.remove(0)}}function p$3(){return new h$1}function f$4(me,Le,...wt){if(me in Le){const kt=Le[me];return typeof kt=="function"?kt(...wt):kt}const $t=new Error(`Tried to handle "${me}" but there is no handler defined. Only defined handlers are: ${Object.keys(Le).map(kt=>`"${kt}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace($t,f$4),$t}function F$2(){return()=>{}}function y$1(me){const Le={called:!1};return(...wt)=>{if(!Le.called)return Le.called=!0,me(...wt)}}const v$2=typeof window<"u",b$6=1e3;v$2&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=b$6));function I$3(){return v$2?window.__BILI_POPPER_ZINDEX__++:b$6}function m$3(me,...Le){me&&Le.length>0&&me.classList.add(...Le)}function l$5(me,...Le){me&&Le.length>0&&me.classList.remove(...Le)}function L$1(me,Le){const wt=p$3();if(!me)return wt.dispose;const{transitionDuration:$t,transitionDelay:kt}=getComputedStyle(me),[It,Rt]=[$t,kt].map(Ft=>{const[Ut=0]=Ft.split(",").filter(Boolean).map(Xt=>Xt.includes("ms")?parseFloat(Xt):parseFloat(Xt)*1e3).sort((Xt,Jt)=>Jt-Xt);return Ut}),Pt=It+Rt;if(Pt!==0){wt.group(Ut=>{Ut.setTimeout(()=>{Le(),Ut.dispose()},Pt),Ut.addEventListener(me,"transitionrun",Xt=>{Xt.target===Xt.currentTarget&&Ut.dispose()})});const Ft=wt.addEventListener(me,"transitionend",Ut=>{Ut.target===Ut.currentTarget&&(Le(),Ft())})}else Le();return wt.add(()=>Le()),wt.dispose}function O(me,Le,wt,$t){const kt=wt?"enter":"leave",It=p$3(),Rt=$t!==void 0?y$1($t):F$2();kt==="enter"&&(me.removeAttribute("hidden"),me.style.display="");const Pt=f$4(kt,{enter:()=>Le.enter,leave:()=>Le.leave}),Ft=f$4(kt,{enter:()=>Le.enterTo,leave:()=>Le.leaveTo}),Ut=f$4(kt,{enter:()=>Le.enterFrom,leave:()=>Le.leaveFrom});return l$5(me,...Le.base,...Le.enter,...Le.enterTo,...Le.enterFrom,...Le.leave,...Le.leaveFrom,...Le.leaveTo,...Le.entered),m$3(me,...Le.base,...Pt,...Ut),It.nextFrame(()=>{l$5(me,...Le.base,...Pt,...Ut),m$3(me,...Le.base,...Pt,...Ft),L$1(me,()=>(l$5(me,...Le.base,...Pt,...Ft),m$3(me,...Le.base,...Le.entered),Rt()))}),It.dispose}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=me=>(...Le)=>({_$litDirective$:me,values:Le});class i$2{constructor(Le){}get _$AU(){return this._$AM._$AU}_$AT(Le,wt,$t){this._$Ct=Le,this._$AM=wt,this._$Ci=$t}_$AS(Le,wt){return this.update(Le,wt)}update(Le,wt){return this.render(...wt)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1="important",n$2=" !"+i$1,o$3=e$2(class extends i$2{constructor(me){var Le;if(super(me),me.type!==t.ATTRIBUTE||me.name!=="style"||((Le=me.strings)===null||Le===void 0?void 0:Le.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(me){return Object.keys(me).reduce((Le,wt)=>{const $t=me[wt];return $t==null?Le:Le+`${wt=wt.includes("-")?wt:wt.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${$t};`},"")}update(me,[Le]){const{style:wt}=me.element;if(this.ht===void 0){this.ht=new Set;for(const $t in Le)this.ht.add($t);return this.render(Le)}this.ht.forEach($t=>{Le[$t]==null&&(this.ht.delete($t),$t.includes("-")?wt.removeProperty($t):wt[$t]="")});for(const $t in Le){const kt=Le[$t];if(kt!=null){this.ht.add($t);const It=typeof kt=="string"&&kt.endsWith(n$2);$t.includes("-")||It?wt.setProperty($t,It?kt.slice(0,-11):kt,It?i$1:""):wt[$t]=kt}}return T$2}});var f$3=Object.defineProperty,b$5=Object.getOwnPropertyDescriptor,r$4=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?b$5(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&f$3(Le,wt,kt),kt};class o$2 extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.eventId="cm_goods_common",this.sourceFrom="",this.spmIdFrom="",this.selectIds="",this.loaded=!1,this.url="",this.size={width:960,height:642}}initUrl(){const Le="//cm.bilibili.com/goods-plugin/pc#/goods-modal",wt={eventId:this.eventId,selectIds:this.selectIds,show:!0,source:"2",source_from:this.sourceFrom,no_top:1};this.spmIdFrom&&(wt.spm_id_from=this.spmIdFrom);const $t=Object.entries(wt).map(([kt,It])=>`${kt}=${It}`);this.url=`${Le}?${$t.join("&")}`}connectedCallback(){super.connectedCallback(),this.initUrl(),this.disposables.addEventListener(window,"message",Le=>{try{if(typeof Le.data=="string"){const wt=JSON.parse(Le.data);if(typeof wt!="object"||wt.eventId!==this.eventId)return;const $t=wt.data;switch(wt.type){case"on-ready":$t.width&&$t.height&&(this.size={width:$t.width,height:$t.height}),this.loaded=!0;break;case"close":this.dispatchEvent(new CustomEvent("cancel")),setTimeout(()=>{this.remove()},0);break;case"on-confirm":this.dispatchEvent(new CustomEvent("confirm",{detail:$t}));break;default:break}}}catch{}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}spinnerTemplate(){return x$3`<div id="spinner">
      <img width="24" height="24" src="//i0.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
      <span>正在玩命加载…</span>
    </div>`}render(){return x$3`
      <div id="wrap">
        <div
          id="window"
          style="${o$3({display:this.loaded?"flex":"",width:`${this.size.width}px`,height:`${this.size.height}px`})}"
        >
          ${this.url?x$3`<iframe src="${this.url}"></iframe>`:""}
        </div>
        ${this.loaded?"":this.spinnerTemplate()}
      </div>
    `}}o$2.styles=i$6`
    #wrap {
      min-height: 100px;
      min-width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #window {
      width: 960px;
      height: 642px;
      display: none;
      border-radius: 8px;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    #spinner {
      padding: 20px 0;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text3);
    }
    #spinner img {
      margin-right: 8px;
      vertical-align: bottom;
    }
  `;r$4([n$4({type:String,attribute:"event-id"})],o$2.prototype,"eventId",2);r$4([n$4({type:String,attribute:"source-from"})],o$2.prototype,"sourceFrom",2);r$4([n$4({type:String,attribute:"spm-id-from"})],o$2.prototype,"spmIdFrom",2);r$4([n$4({type:String,attribute:"data-select-ids"})],o$2.prototype,"selectIds",2);r$4([t$1()],o$2.prototype,"loaded",2);r$4([t$1()],o$2.prototype,"url",2);r$4([t$1()],o$2.prototype,"size",2);customElements.get("bili-cm-goods")||customElements.define("bili-cm-goods",o$2);var setCache=function(Le,wt){typeof window!="undefined"&&(window.__BILI_X_ENGINE_SCRIPT_CACHE__||(window.__BILI_X_ENGINE_SCRIPT_CACHE__={}),window.__BILI_X_ENGINE_SCRIPT_CACHE__[Le]=wt)},getCache=function(Le){return typeof window=="undefined"||!window.__BILI_X_ENGINE_SCRIPT_CACHE__?null:window.__BILI_X_ENGINE_SCRIPT_CACHE__[Le]||null},removeCache=function(Le){typeof window!="undefined"&&(!window.__BILI_X_ENGINE_SCRIPT_CACHE__||typeof window.__BILI_X_ENGINE_SCRIPT_CACHE__[Le]!="undefined"&&delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[Le])},loadScript=function(Le,wt){if(typeof window=="undefined")return Promise.reject(new Error("window is not defined"));Le=Le.replace(/^https?:\/\//,"//");var $t=Le,kt=getCache($t);if(kt!=null&&kt.promise)return kt.promise;var It=new Promise(function(Rt,Pt){var Ft=document.createElement("script");Ft.src=Le,wt!=null&&wt.behavior&&Ft.setAttribute(wt.behavior,""),Ft.onload=function(){var Ut=window;if(wt.lib)return Ut[wt.lib]?Rt(Ut[wt.lib]):Pt(new Error('Failed to access library "'+wt.lib+'" from '+Le));Rt(null)},Ft.onerror=function(){Pt(new Error("Failed to load "+Le)),document.head.removeChild(Ft)},document.head.appendChild(Ft)});return setCache($t,{promise:It,lib:wt==null?void 0:wt.lib}),It.then(function(){(wt==null?void 0:wt.cache)===!1&&removeCache($t)}).catch(function(){(wt==null?void 0:wt.cache)===!1&&removeCache($t)}),It},loadKvSDK=function(){try{return window.KvSDK?Promise.resolve(window.KvSDK):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/kv-sdk/index.js",{lib:"KvSDK"}))}catch(Le){return Promise.reject(Le)}},useKv=function(Le){return Promise.resolve(loadKvSDK()).then(function(wt){return new wt(Le)})},loadMiniLogin=function(){try{return window.MiniLogin?Promise.resolve(window.MiniLogin):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/mini-login/miniLogin.umd.min.js",{lib:"MiniLogin"}))}catch(Le){return Promise.reject(Le)}},loadBiliUser=function(){try{return Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/bili-user/index.js",{lib:"__BiliUser__"}))}catch(Le){return Promise.reject(Le)}},useAuthData=function(){try{var Le=function(){return Promise.resolve(window.__BiliUser__.get())},wt=function(){if(!window.__BiliUser__)return Promise.resolve(loadBiliUser()).then(function(){})}();return Promise.resolve(wt&&wt.then?wt.then(Le):Le(wt))}catch($t){return Promise.reject($t)}},miniLogin,useAuthLogin=function(Le){if(window.__BiliUser__){var wt=window.__BiliUser__;return new Promise(function($t,kt){wt.quickLogin(function(It){var Rt=It.code;if(Rt===0){$t();return}kt()},Le)})}return new Promise(function($t,kt){function It(){miniLogin.showComponent(),miniLogin.addEventListener("success",function(){$t(),miniLogin.removeEventListener("success"),miniLogin.removeEventListener("cancel")}),miniLogin.addEventListener("cancel",function(){kt(),miniLogin.removeEventListener("success"),miniLogin.removeEventListener("cancel")})}if(miniLogin){It();return}loadMiniLogin().then(function(Rt){if(!Rt)return kt("MiniLogin is not found");miniLogin=new Rt(Le),It()}).catch(kt)})};function _extends(){return _extends=Object.assign?Object.assign.bind():function(me){for(var Le=1;Le<arguments.length;Le++){var wt=arguments[Le];for(var $t in wt)Object.prototype.hasOwnProperty.call(wt,$t)&&(me[$t]=wt[$t])}return me},_extends.apply(this,arguments)}var useMeta=function(Le){if(typeof window=="undefined")return"";var wt=document.querySelector('meta[name="'+Le+'"]');return wt!=null&&wt.content?wt.content:""},spmId="",useSpmPrefix=function(){return spmId||(spmId=useMeta("spm_prefix"),spmId||"0.0")},loadReporter=function(){try{return window.ReporterPb?Promise.resolve(window.ReporterPb):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb/index.js",{lib:"ReporterPb"}))}catch(Le){return Promise.reject(Le)}},useReporter=function(Le){return Promise.resolve(loadReporter()).then(function(wt){return new wt(Le)})},noopReport=function(Le,wt,$t,kt){console.warn("["+(typeof window=="undefined"?"Node":"Browser")+"]Miss reporter args: "+JSON.stringify({type:Le,spm:wt,data:$t,options:kt}))},bindGlobalReport=function(Le){var wt=window,$t=useSpmPrefix(),kt=wt[Le].report.bind(wt[Le]);return function(It,Rt,Pt,Ft){return typeof Rt!="string"?Rt.prefix||(Rt=_extends({},Rt,{prefix:$t})):Rt.split(".").length<=3&&(Rt=$t+"."+Rt),kt(It,Rt,Pt,Ft)}},mirrorReport=function(Le,wt,$t,kt){var It=window.biliMirror,Rt=It.customReportPb,Pt=It.techReportPb,Ft="",Ut="";if(typeof wt!="string")Ut=[wt.c,wt.d,wt.e].filter(Boolean).join("."),wt.prefix&&(Ft=wt.prefix);else{var Xt=wt.split(".");!isNaN(Number(Xt[0]))&&!isNaN(Number(Xt[1]))?(Ft=Xt.splice(0,2).join("."),Ut=Xt.join(".")):Ut=wt}if(Le==="tech"){if(Pt){Pt({eventId:Ut,msg:$t,otherSpmId:Ft});return}}else if(Rt){Rt({type:Le,eventId:Ut,msg:$t,otherSpmId:Ft});return}noopReport(Le,wt,$t,kt)},useReportFunc=function(Le){if(typeof window=="undefined")return noopReport;var wt=window,$t="";function kt(){var It=wt[$t];return!!(It!=null&&It.report)}return typeof(Le==null?void 0:Le.globalInst)=="string"&&($t=Le.globalInst,kt())?bindGlobalReport($t):(Le==null?void 0:Le.mirror)!==!1&&window.biliMirror?mirrorReport:($t="__biliMirrorPbInstance__",kt()?bindGlobalReport($t):noopReport)},useReport=function(Le,wt,$t,kt){return useReportFunc()(Le,wt,$t,kt)},loadRequest=function(Le){if(window.Unios)return Promise.resolve(window.Unios);var wt=window.__LOAD_REQUEST_TYPE__||Le||"web";return loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/unios/"+wt+".min.js",{lib:"Unios"})},useRequest=function(Le){try{return window.Unios?Promise.resolve(window.Unios.request(Le)):Promise.resolve(loadRequest()).then(function(){return window.Unios.request(Le)})}catch(wt){return Promise.reject(wt)}},loadToast=function(){try{return window.BToast?Promise.resolve(window.BToast):Promise.resolve(loadScript("//s1.hdslb.com/bfs/seed/jinkela/short/webui/toast/index.js",{lib:"BToast"}))}catch(Le){return Promise.reject(Le)}},useToast=function(Le,wt,$t){try{return window.BToast?Promise.resolve(window.BToast.show(Le,wt,$t)):Promise.resolve(loadToast()).then(function(){return window.BToast.show(Le,wt,$t)})}catch(kt){return Promise.reject(kt)}};function x$2(){let me=window.__BILI_EMOJI_PICKER_DATA_TASK__;return me&&me instanceof Promise||(me=new Promise((Le,wt)=>{useRequest({url:"//api.bilibili.com/x/emote/user/panel/web",params:{business:"reply"}}).then($t=>{if($t.code!==0||!$t.data)return delete window.__BILI_EMOJI_PICKER_DATA_TASK__,wt(new Error($t.message||"get emoji data error"));Le($t.data)}).catch(wt)}),window.__BILI_EMOJI_PICKER_DATA_TASK__=me),me}var f$2=Object.defineProperty,w$1=Object.getOwnPropertyDescriptor,n$1=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?w$1(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&f$2(Le,wt,kt),kt};let r$3=class extends s$4{constructor(){super(...arguments),this.pageCount=5,this.packages=[],this.contentLoading=!1,this.currentIdx=0}get currentPage(){return Math.floor(this.currentIdx/this.pageCount)}get isFirstPage(){return this.currentPage===0}get isLastPage(){const me=Math.floor(this.packages.length/this.pageCount)+(this.packages.length%this.pageCount?1:0);return this.currentPage===me-1}get currentPackage(){return this.packages.length&&this.packages[this.currentIdx]||null}connectedCallback(){super.connectedCallback(),this.initData()}async initData(){try{const{packages:me}=await x$2();this.packages=me}catch(me){console.warn(me)}}setTab(me){if(me>this.packages.length-1||me<0)return;this.contentLoading=!0,this.currentIdx=me;const Le=Math.floor(me/this.pageCount);this.shadowRoot.querySelector("#tabs-track").style.setProperty("transform",`translateX(${-Le*100}%)`),window.setTimeout(()=>{this.contentLoading=!1},200)}handlePrev(){this.isFirstPage||this.setTab(this.currentPage*this.pageCount-1)}handleNext(){this.isLastPage||this.setTab((this.currentPage+1)*this.pageCount)}handleSelect(me){this.dispatchEvent(new CustomEvent("select",{detail:me}))}emojiRenderer(me){const{type:Le,meta:wt,text:$t,url:kt,gif_url:It,webp_url:Rt}=me;if(Le===4)return x$3`<div
        class="emoji text"
        @click=${()=>{this.handleSelect(me)}}
      >
        ${$t}
      </div>`;const Pt=wt.size===1?24:56,Ft=utils$2.getBmgSrcNext(Rt||It||kt,{w:Pt,h:Pt,dpr:2});return x$3`<div
      class="emoji img"
      style="height:${Pt}px"
      @click=${()=>{this.handleSelect(me)}}
    >
      <img width="${Pt}" height="${Pt}" src="${Ft}" alt="${$t}" />
    </div>`}contentTemplate(){return x$3`<div id="content">${this.currentPackage.emote.map(me=>this.emojiRenderer(me))}</div>`}render(){return x$3`<div id="picker">
      <div id="header">${this.currentPackage?this.currentPackage.text:"\u8868\u60C5"}</div>
      <div id="body">${this.currentPackage&&!this.contentLoading?this.contentTemplate():x$3`<div id="spinner">加载中...</div>`}</div>
      <div id="footer">
        <div id="tabs">
          <div
            id="tabs-track"
            style="${o$3({transform:`translateX(${-this.currentPage*58*this.pageCount}px)`})}"
          >
            ${this.packages.map((me,Le)=>x$3`<div
                class="${this.currentIdx===Le?"tab active":"tab"}"
                @click=${()=>{this.setTab(Le)}}
              >
                <img
                  width="22"
                  height="22"
                  src="${utils$2.getBmgSrcNext(me.url,{w:22,h:22})}"
                  alt="${me.text}"
                />
              </div>`)}
          </div>
        </div>
        <div id="nav">
          <button
            class="${this.isFirstPage?"disabled":""}"
            @click=${()=>{this.handlePrev()}}
          >
            <bili-icon size="16" icon="BDC/arrow_back_left_line/3"></bili-icon>
          </button>
          <button
            class="${this.isLastPage?"disabled":""}"
            @click=${()=>{this.handleNext()}}
          >
            <bili-icon size="16" icon="BDC/arrow_forward_right_line/3"></bili-icon>
          </button>
        </div>
      </div>
    </div>`}};r$3.styles=i$6`
    :host {
      --bili-emoji-picker-tab-count: 5;
      --bili-emoji-picker-tab-width: 58px;
      --bili-emoji-picker-nav-width: 73px;
      --bili-emoji-picker-body-height: 196px;
    }
    #picker {
      width: calc(var(--bili-emoji-picker-tab-width) * var(--bili-emoji-picker-tab-count) + var(--bili-emoji-picker-nav-width));
      font-size: 12px;
      color: var(--text2);
      overflow: hidden;
      background-color: var(--bg1);
      border: 1px solid var(--graph_bg_thick);
      border-radius: 8px;
      box-sizing: border-box;
    }

    #header {
      padding: 13px 15px 6px;
      box-sizing: border-box;
    }
    #body {
      height: var(--bili-emoji-picker-body-height);
    }
    #spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    #content {
      height: 100%;
      padding: 0 11px;
      background-color: var(--bg1);
      overflow: auto;
    }
    #content::-webkit-scrollbar {
      width: 4px;
      border-radius: 4px;
      background-color: transparent;
    }
    #content::-webkit-scrollbar-thumb {
      border-radius: 4px;
      border-radius: 4px;
      background-color: var(--graph_bg_thick);
      transition: 0.3s ease-in-out;
    }
    #content::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }
    #content .emoji {
      display: inline-block;
      border-radius: 4px;
      cursor: pointer;
    }
    #content .emoji:hover {
      background-color: var(--graph_bg_thick);
    }
    #content .emoji.img {
      box-sizing: content-box;
      padding: 4px;
    }
    #content .emoji.text {
      padding: 5px 8px;
      line-height: 22px;
    }
    #footer {
      background-color: var(--bg3);
      box-sizing: border-box;
      height: 36px;
      display: flex;
    }
    #tabs {
      height: 100%;
      width: calc(100% - var(--bili-emoji-picker-nav-width));
      overflow: hidden;
    }
    #tabs-track {
      transition: transform 0.3s ease-in-out;
      transform: translateX(0);
      display: flex;
      flex-wrap: no-wrap;
      height: 100%;
    }
    .tab {
      height: 100%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--bili-emoji-picker-tab-width);
      height: 100%;
      cursor: pointer;
    }
    .tab:hover {
      background-color: var(--graph_bg_thick);
    }
    .tab.active {
      background-color: var(--bg1);
    }
    #nav {
      height: 100%;
      width: var(--bili-emoji-picker-nav-width);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    #nav button {
      width: 36px;
      height: 100%;
      color: var(--text2);
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: color 0.2s;
    }
    #nav button.disabled {
      color: var(--text4);
    }
  `;n$1([t$1()],r$3.prototype,"packages",2);n$1([t$1()],r$3.prototype,"contentLoading",2);n$1([t$1()],r$3.prototype,"currentIdx",2);n$1([t$1()],r$3.prototype,"currentPage",1);n$1([t$1()],r$3.prototype,"isFirstPage",1);n$1([t$1()],r$3.prototype,"isLastPage",1);n$1([t$1()],r$3.prototype,"currentPackage",1);r$3=n$1([e$5("bili-emoji-picker")],r$3);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ot$1=function(me,Le){return(ot$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(wt,$t){wt.__proto__=$t}||function(wt,$t){for(var kt in $t)Object.prototype.hasOwnProperty.call($t,kt)&&(wt[kt]=$t[kt])})(me,Le)};function at$2(me,Le){if(typeof Le!="function"&&Le!==null)throw new TypeError("Class extends value "+String(Le)+" is not a constructor or null");function wt(){this.constructor=me}ot$1(me,Le),me.prototype=Le===null?Object.create(Le):(wt.prototype=Le.prototype,new wt)}function lt$1(me){var Le="";Array.isArray(me)||(me=[me]);for(var wt=0;wt<me.length;wt++){var $t=me[wt];if($t.type===m$2.CLOSE_PATH)Le+="z";else if($t.type===m$2.HORIZ_LINE_TO)Le+=($t.relative?"h":"H")+$t.x;else if($t.type===m$2.VERT_LINE_TO)Le+=($t.relative?"v":"V")+$t.y;else if($t.type===m$2.MOVE_TO)Le+=($t.relative?"m":"M")+$t.x+" "+$t.y;else if($t.type===m$2.LINE_TO)Le+=($t.relative?"l":"L")+$t.x+" "+$t.y;else if($t.type===m$2.CURVE_TO)Le+=($t.relative?"c":"C")+$t.x1+" "+$t.y1+" "+$t.x2+" "+$t.y2+" "+$t.x+" "+$t.y;else if($t.type===m$2.SMOOTH_CURVE_TO)Le+=($t.relative?"s":"S")+$t.x2+" "+$t.y2+" "+$t.x+" "+$t.y;else if($t.type===m$2.QUAD_TO)Le+=($t.relative?"q":"Q")+$t.x1+" "+$t.y1+" "+$t.x+" "+$t.y;else if($t.type===m$2.SMOOTH_QUAD_TO)Le+=($t.relative?"t":"T")+$t.x+" "+$t.y;else{if($t.type!==m$2.ARC)throw new Error('Unexpected command type "'+$t.type+'" at index '+wt+".");Le+=($t.relative?"a":"A")+$t.rX+" "+$t.rY+" "+$t.xRot+" "+ +$t.lArcFlag+" "+ +$t.sweepFlag+" "+$t.x+" "+$t.y}}return Le}function W$2(me,Le){var wt=me[0],$t=me[1];return[wt*Math.cos(Le)-$t*Math.sin(Le),wt*Math.sin(Le)+$t*Math.cos(Le)]}function b$4(){for(var me=[],Le=0;Le<arguments.length;Le++)me[Le]=arguments[Le];for(var wt=0;wt<me.length;wt++)if(typeof me[wt]!="number")throw new Error("assertNumbers arguments["+wt+"] is not a number. "+typeof me[wt]+" == typeof "+me[wt]);return!0}var z$1=Math.PI;function $$1(me,Le,wt){me.lArcFlag=me.lArcFlag===0?0:1,me.sweepFlag=me.sweepFlag===0?0:1;var $t=me.rX,kt=me.rY,It=me.x,Rt=me.y;$t=Math.abs(me.rX),kt=Math.abs(me.rY);var Pt=W$2([(Le-It)/2,(wt-Rt)/2],-me.xRot/180*z$1),Ft=Pt[0],Ut=Pt[1],Xt=Math.pow(Ft,2)/Math.pow($t,2)+Math.pow(Ut,2)/Math.pow(kt,2);1<Xt&&($t*=Math.sqrt(Xt),kt*=Math.sqrt(Xt)),me.rX=$t,me.rY=kt;var Jt=Math.pow($t,2)*Math.pow(Ut,2)+Math.pow(kt,2)*Math.pow(Ft,2),ii=(me.lArcFlag!==me.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow($t,2)*Math.pow(kt,2)-Jt)/Jt)),Ni=$t*Ut/kt*ii,Vi=-kt*Ft/$t*ii,zi=W$2([Ni,Vi],me.xRot/180*z$1);me.cX=zi[0]+(Le+It)/2,me.cY=zi[1]+(wt+Rt)/2,me.phi1=Math.atan2((Ut-Vi)/kt,(Ft-Ni)/$t),me.phi2=Math.atan2((-Ut-Vi)/kt,(-Ft-Ni)/$t),me.sweepFlag===0&&me.phi2>me.phi1&&(me.phi2-=2*z$1),me.sweepFlag===1&&me.phi2<me.phi1&&(me.phi2+=2*z$1),me.phi1*=180/z$1,me.phi2*=180/z$1}function J$2(me,Le,wt){b$4(me,Le,wt);var $t=me*me+Le*Le-wt*wt;if(0>$t)return[];if($t===0)return[[me*wt/(me*me+Le*Le),Le*wt/(me*me+Le*Le)]];var kt=Math.sqrt($t);return[[(me*wt+Le*kt)/(me*me+Le*Le),(Le*wt-me*kt)/(me*me+Le*Le)],[(me*wt-Le*kt)/(me*me+Le*Le),(Le*wt+me*kt)/(me*me+Le*Le)]]}var A$1,P$2=Math.PI/180;function tt(me,Le,wt){return(1-wt)*me+wt*Le}function et$1(me,Le,wt,$t){return me+Math.cos($t/180*z$1)*Le+Math.sin($t/180*z$1)*wt}function rt$1(me,Le,wt,$t){var kt=1e-6,It=Le-me,Rt=wt-Le,Pt=3*It+3*($t-wt)-6*Rt,Ft=6*(Rt-It),Ut=3*It;return Math.abs(Pt)<kt?[-Ut/Ft]:function(Xt,Jt,ii){ii===void 0&&(ii=1e-6);var Ni=Xt*Xt/4-Jt;if(Ni<-ii)return[];if(Ni<=ii)return[-Xt/2];var Vi=Math.sqrt(Ni);return[-Xt/2-Vi,-Xt/2+Vi]}(Ft/Pt,Ut/Pt,kt)}function it(me,Le,wt,$t,kt){var It=1-kt;return me*(It*It*It)+Le*(3*It*It*kt)+wt*(3*It*kt*kt)+$t*(kt*kt*kt)}(function(me){function Le(){return kt(function(Pt,Ft,Ut){return Pt.relative&&(Pt.x1!==void 0&&(Pt.x1+=Ft),Pt.y1!==void 0&&(Pt.y1+=Ut),Pt.x2!==void 0&&(Pt.x2+=Ft),Pt.y2!==void 0&&(Pt.y2+=Ut),Pt.x!==void 0&&(Pt.x+=Ft),Pt.y!==void 0&&(Pt.y+=Ut),Pt.relative=!1),Pt})}function wt(){var Pt=NaN,Ft=NaN,Ut=NaN,Xt=NaN;return kt(function(Jt,ii,Ni){return Jt.type&m$2.SMOOTH_CURVE_TO&&(Jt.type=m$2.CURVE_TO,Pt=isNaN(Pt)?ii:Pt,Ft=isNaN(Ft)?Ni:Ft,Jt.x1=Jt.relative?ii-Pt:2*ii-Pt,Jt.y1=Jt.relative?Ni-Ft:2*Ni-Ft),Jt.type&m$2.CURVE_TO?(Pt=Jt.relative?ii+Jt.x2:Jt.x2,Ft=Jt.relative?Ni+Jt.y2:Jt.y2):(Pt=NaN,Ft=NaN),Jt.type&m$2.SMOOTH_QUAD_TO&&(Jt.type=m$2.QUAD_TO,Ut=isNaN(Ut)?ii:Ut,Xt=isNaN(Xt)?Ni:Xt,Jt.x1=Jt.relative?ii-Ut:2*ii-Ut,Jt.y1=Jt.relative?Ni-Xt:2*Ni-Xt),Jt.type&m$2.QUAD_TO?(Ut=Jt.relative?ii+Jt.x1:Jt.x1,Xt=Jt.relative?Ni+Jt.y1:Jt.y1):(Ut=NaN,Xt=NaN),Jt})}function $t(){var Pt=NaN,Ft=NaN;return kt(function(Ut,Xt,Jt){if(Ut.type&m$2.SMOOTH_QUAD_TO&&(Ut.type=m$2.QUAD_TO,Pt=isNaN(Pt)?Xt:Pt,Ft=isNaN(Ft)?Jt:Ft,Ut.x1=Ut.relative?Xt-Pt:2*Xt-Pt,Ut.y1=Ut.relative?Jt-Ft:2*Jt-Ft),Ut.type&m$2.QUAD_TO){Pt=Ut.relative?Xt+Ut.x1:Ut.x1,Ft=Ut.relative?Jt+Ut.y1:Ut.y1;var ii=Ut.x1,Ni=Ut.y1;Ut.type=m$2.CURVE_TO,Ut.x1=((Ut.relative?0:Xt)+2*ii)/3,Ut.y1=((Ut.relative?0:Jt)+2*Ni)/3,Ut.x2=(Ut.x+2*ii)/3,Ut.y2=(Ut.y+2*Ni)/3}else Pt=NaN,Ft=NaN;return Ut})}function kt(Pt){var Ft=0,Ut=0,Xt=NaN,Jt=NaN;return function(ii){if(isNaN(Xt)&&!(ii.type&m$2.MOVE_TO))throw new Error("path must start with moveto");var Ni=Pt(ii,Ft,Ut,Xt,Jt);return ii.type&m$2.CLOSE_PATH&&(Ft=Xt,Ut=Jt),ii.x!==void 0&&(Ft=ii.relative?Ft+ii.x:ii.x),ii.y!==void 0&&(Ut=ii.relative?Ut+ii.y:ii.y),ii.type&m$2.MOVE_TO&&(Xt=Ft,Jt=Ut),Ni}}function It(Pt,Ft,Ut,Xt,Jt,ii){return b$4(Pt,Ft,Ut,Xt,Jt,ii),kt(function(Ni,Vi,zi,Xn){var Qn=Ni.x1,eo=Ni.x2,no=Ni.relative&&!isNaN(Xn),to=Ni.x!==void 0?Ni.x:no?0:Vi,oo=Ni.y!==void 0?Ni.y:no?0:zi;function ao(Eh){return Eh*Eh}Ni.type&m$2.HORIZ_LINE_TO&&Ft!==0&&(Ni.type=m$2.LINE_TO,Ni.y=Ni.relative?0:zi),Ni.type&m$2.VERT_LINE_TO&&Ut!==0&&(Ni.type=m$2.LINE_TO,Ni.x=Ni.relative?0:Vi),Ni.x!==void 0&&(Ni.x=Ni.x*Pt+oo*Ut+(no?0:Jt)),Ni.y!==void 0&&(Ni.y=to*Ft+Ni.y*Xt+(no?0:ii)),Ni.x1!==void 0&&(Ni.x1=Ni.x1*Pt+Ni.y1*Ut+(no?0:Jt)),Ni.y1!==void 0&&(Ni.y1=Qn*Ft+Ni.y1*Xt+(no?0:ii)),Ni.x2!==void 0&&(Ni.x2=Ni.x2*Pt+Ni.y2*Ut+(no?0:Jt)),Ni.y2!==void 0&&(Ni.y2=eo*Ft+Ni.y2*Xt+(no?0:ii));var ro=Pt*Xt-Ft*Ut;if(Ni.xRot!==void 0&&(Pt!==1||Ft!==0||Ut!==0||Xt!==1))if(ro===0)delete Ni.rX,delete Ni.rY,delete Ni.xRot,delete Ni.lArcFlag,delete Ni.sweepFlag,Ni.type=m$2.LINE_TO;else{var Fo=Ni.xRot*Math.PI/180,Qr=Math.sin(Fo),es=Math.cos(Fo),ns=1/ao(Ni.rX),so=1/ao(Ni.rY),gr=ao(es)*ns+ao(Qr)*so,Xr=2*Qr*es*(ns-so),as=ao(Qr)*ns+ao(es)*so,ls=gr*Xt*Xt-Xr*Ft*Xt+as*Ft*Ft,ms=Xr*(Pt*Xt+Ft*Ut)-2*(gr*Ut*Xt+as*Pt*Ft),Ah=gr*Ut*Ut-Xr*Pt*Ut+as*Pt*Pt,rs=(Math.atan2(ms,ls-Ah)+Math.PI)%Math.PI/2,us=Math.sin(rs),xh=Math.cos(rs);Ni.rX=Math.abs(ro)/Math.sqrt(ls*ao(xh)+ms*us*xh+Ah*ao(us)),Ni.rY=Math.abs(ro)/Math.sqrt(ls*ao(us)-ms*us*xh+Ah*ao(xh)),Ni.xRot=180*rs/Math.PI}return Ni.sweepFlag!==void 0&&0>ro&&(Ni.sweepFlag=+!Ni.sweepFlag),Ni})}function Rt(){return function(Pt){var Ft={};for(var Ut in Pt)Ft[Ut]=Pt[Ut];return Ft}}me.ROUND=function(Pt){function Ft(Ut){return Math.round(Ut*Pt)/Pt}return Pt===void 0&&(Pt=1e13),b$4(Pt),function(Ut){return Ut.x1!==void 0&&(Ut.x1=Ft(Ut.x1)),Ut.y1!==void 0&&(Ut.y1=Ft(Ut.y1)),Ut.x2!==void 0&&(Ut.x2=Ft(Ut.x2)),Ut.y2!==void 0&&(Ut.y2=Ft(Ut.y2)),Ut.x!==void 0&&(Ut.x=Ft(Ut.x)),Ut.y!==void 0&&(Ut.y=Ft(Ut.y)),Ut.rX!==void 0&&(Ut.rX=Ft(Ut.rX)),Ut.rY!==void 0&&(Ut.rY=Ft(Ut.rY)),Ut}},me.TO_ABS=Le,me.TO_REL=function(){return kt(function(Pt,Ft,Ut){return Pt.relative||(Pt.x1!==void 0&&(Pt.x1-=Ft),Pt.y1!==void 0&&(Pt.y1-=Ut),Pt.x2!==void 0&&(Pt.x2-=Ft),Pt.y2!==void 0&&(Pt.y2-=Ut),Pt.x!==void 0&&(Pt.x-=Ft),Pt.y!==void 0&&(Pt.y-=Ut),Pt.relative=!0),Pt})},me.NORMALIZE_HVZ=function(Pt,Ft,Ut){return Pt===void 0&&(Pt=!0),Ft===void 0&&(Ft=!0),Ut===void 0&&(Ut=!0),kt(function(Xt,Jt,ii,Ni,Vi){if(isNaN(Ni)&&!(Xt.type&m$2.MOVE_TO))throw new Error("path must start with moveto");return Ft&&Xt.type&m$2.HORIZ_LINE_TO&&(Xt.type=m$2.LINE_TO,Xt.y=Xt.relative?0:ii),Ut&&Xt.type&m$2.VERT_LINE_TO&&(Xt.type=m$2.LINE_TO,Xt.x=Xt.relative?0:Jt),Pt&&Xt.type&m$2.CLOSE_PATH&&(Xt.type=m$2.LINE_TO,Xt.x=Xt.relative?Ni-Jt:Ni,Xt.y=Xt.relative?Vi-ii:Vi),Xt.type&m$2.ARC&&(Xt.rX===0||Xt.rY===0)&&(Xt.type=m$2.LINE_TO,delete Xt.rX,delete Xt.rY,delete Xt.xRot,delete Xt.lArcFlag,delete Xt.sweepFlag),Xt})},me.NORMALIZE_ST=wt,me.QT_TO_C=$t,me.INFO=kt,me.SANITIZE=function(Pt){Pt===void 0&&(Pt=0),b$4(Pt);var Ft=NaN,Ut=NaN,Xt=NaN,Jt=NaN;return kt(function(ii,Ni,Vi,zi,Xn){var Qn=Math.abs,eo=!1,no=0,to=0;if(ii.type&m$2.SMOOTH_CURVE_TO&&(no=isNaN(Ft)?0:Ni-Ft,to=isNaN(Ut)?0:Vi-Ut),ii.type&(m$2.CURVE_TO|m$2.SMOOTH_CURVE_TO)?(Ft=ii.relative?Ni+ii.x2:ii.x2,Ut=ii.relative?Vi+ii.y2:ii.y2):(Ft=NaN,Ut=NaN),ii.type&m$2.SMOOTH_QUAD_TO?(Xt=isNaN(Xt)?Ni:2*Ni-Xt,Jt=isNaN(Jt)?Vi:2*Vi-Jt):ii.type&m$2.QUAD_TO?(Xt=ii.relative?Ni+ii.x1:ii.x1,Jt=ii.relative?Vi+ii.y1:ii.y2):(Xt=NaN,Jt=NaN),ii.type&m$2.LINE_COMMANDS||ii.type&m$2.ARC&&(ii.rX===0||ii.rY===0||!ii.lArcFlag)||ii.type&m$2.CURVE_TO||ii.type&m$2.SMOOTH_CURVE_TO||ii.type&m$2.QUAD_TO||ii.type&m$2.SMOOTH_QUAD_TO){var oo=ii.x===void 0?0:ii.relative?ii.x:ii.x-Ni,ao=ii.y===void 0?0:ii.relative?ii.y:ii.y-Vi;no=isNaN(Xt)?ii.x1===void 0?no:ii.relative?ii.x:ii.x1-Ni:Xt-Ni,to=isNaN(Jt)?ii.y1===void 0?to:ii.relative?ii.y:ii.y1-Vi:Jt-Vi;var ro=ii.x2===void 0?0:ii.relative?ii.x:ii.x2-Ni,Fo=ii.y2===void 0?0:ii.relative?ii.y:ii.y2-Vi;Qn(oo)<=Pt&&Qn(ao)<=Pt&&Qn(no)<=Pt&&Qn(to)<=Pt&&Qn(ro)<=Pt&&Qn(Fo)<=Pt&&(eo=!0)}return ii.type&m$2.CLOSE_PATH&&Qn(Ni-zi)<=Pt&&Qn(Vi-Xn)<=Pt&&(eo=!0),eo?[]:ii})},me.MATRIX=It,me.ROTATE=function(Pt,Ft,Ut){Ft===void 0&&(Ft=0),Ut===void 0&&(Ut=0),b$4(Pt,Ft,Ut);var Xt=Math.sin(Pt),Jt=Math.cos(Pt);return It(Jt,Xt,-Xt,Jt,Ft-Ft*Jt+Ut*Xt,Ut-Ft*Xt-Ut*Jt)},me.TRANSLATE=function(Pt,Ft){return Ft===void 0&&(Ft=0),b$4(Pt,Ft),It(1,0,0,1,Pt,Ft)},me.SCALE=function(Pt,Ft){return Ft===void 0&&(Ft=Pt),b$4(Pt,Ft),It(Pt,0,0,Ft,0,0)},me.SKEW_X=function(Pt){return b$4(Pt),It(1,0,Math.atan(Pt),1,0,0)},me.SKEW_Y=function(Pt){return b$4(Pt),It(1,Math.atan(Pt),0,1,0,0)},me.X_AXIS_SYMMETRY=function(Pt){return Pt===void 0&&(Pt=0),b$4(Pt),It(-1,0,0,1,Pt,0)},me.Y_AXIS_SYMMETRY=function(Pt){return Pt===void 0&&(Pt=0),b$4(Pt),It(1,0,0,-1,0,Pt)},me.A_TO_C=function(){return kt(function(Pt,Ft,Ut){return m$2.ARC===Pt.type?function(Xt,Jt,ii){var Ni,Vi,zi,Xn;Xt.cX||$$1(Xt,Jt,ii);for(var Qn=Math.min(Xt.phi1,Xt.phi2),eo=Math.max(Xt.phi1,Xt.phi2)-Qn,no=Math.ceil(eo/90),to=new Array(no),oo=Jt,ao=ii,ro=0;ro<no;ro++){var Fo=tt(Xt.phi1,Xt.phi2,ro/no),Qr=tt(Xt.phi1,Xt.phi2,(ro+1)/no),es=Qr-Fo,ns=4/3*Math.tan(es*P$2/4),so=[Math.cos(Fo*P$2)-ns*Math.sin(Fo*P$2),Math.sin(Fo*P$2)+ns*Math.cos(Fo*P$2)],gr=so[0],Xr=so[1],as=[Math.cos(Qr*P$2),Math.sin(Qr*P$2)],ls=as[0],ms=as[1],Ah=[ls+ns*Math.sin(Qr*P$2),ms-ns*Math.cos(Qr*P$2)],rs=Ah[0],us=Ah[1];to[ro]={relative:Xt.relative,type:m$2.CURVE_TO};var xh=function(Eh,$h){var ts=W$2([Eh*Xt.rX,$h*Xt.rY],Xt.xRot),ds=ts[0],vh=ts[1];return[Xt.cX+ds,Xt.cY+vh]};Ni=xh(gr,Xr),to[ro].x1=Ni[0],to[ro].y1=Ni[1],Vi=xh(rs,us),to[ro].x2=Vi[0],to[ro].y2=Vi[1],zi=xh(ls,ms),to[ro].x=zi[0],to[ro].y=zi[1],Xt.relative&&(to[ro].x1-=oo,to[ro].y1-=ao,to[ro].x2-=oo,to[ro].y2-=ao,to[ro].x-=oo,to[ro].y-=ao),oo=(Xn=[to[ro].x,to[ro].y])[0],ao=Xn[1]}return to}(Pt,Pt.relative?0:Ft,Pt.relative?0:Ut):Pt})},me.ANNOTATE_ARCS=function(){return kt(function(Pt,Ft,Ut){return Pt.relative&&(Ft=0,Ut=0),m$2.ARC===Pt.type&&$$1(Pt,Ft,Ut),Pt})},me.CLONE=Rt,me.CALCULATE_BOUNDS=function(){var Pt=function(ii){var Ni={};for(var Vi in ii)Ni[Vi]=ii[Vi];return Ni},Ft=Le(),Ut=$t(),Xt=wt(),Jt=kt(function(ii,Ni,Vi){var zi=Xt(Ut(Ft(Pt(ii))));function Xn(us){us>Jt.maxX&&(Jt.maxX=us),us<Jt.minX&&(Jt.minX=us)}function Qn(us){us>Jt.maxY&&(Jt.maxY=us),us<Jt.minY&&(Jt.minY=us)}if(zi.type&m$2.DRAWING_COMMANDS&&(Xn(Ni),Qn(Vi)),zi.type&m$2.HORIZ_LINE_TO&&Xn(zi.x),zi.type&m$2.VERT_LINE_TO&&Qn(zi.y),zi.type&m$2.LINE_TO&&(Xn(zi.x),Qn(zi.y)),zi.type&m$2.CURVE_TO){Xn(zi.x),Qn(zi.y);for(var eo=0,no=rt$1(Ni,zi.x1,zi.x2,zi.x);eo<no.length;eo++)0<(rs=no[eo])&&1>rs&&Xn(it(Ni,zi.x1,zi.x2,zi.x,rs));for(var to=0,oo=rt$1(Vi,zi.y1,zi.y2,zi.y);to<oo.length;to++)0<(rs=oo[to])&&1>rs&&Qn(it(Vi,zi.y1,zi.y2,zi.y,rs))}if(zi.type&m$2.ARC){Xn(zi.x),Qn(zi.y),$$1(zi,Ni,Vi);for(var ao=zi.xRot/180*Math.PI,ro=Math.cos(ao)*zi.rX,Fo=Math.sin(ao)*zi.rX,Qr=-Math.sin(ao)*zi.rY,es=Math.cos(ao)*zi.rY,ns=zi.phi1<zi.phi2?[zi.phi1,zi.phi2]:-180>zi.phi2?[zi.phi2+360,zi.phi1+360]:[zi.phi2,zi.phi1],so=ns[0],gr=ns[1],Xr=function(us){var xh=us[0],Eh=us[1],$h=180*Math.atan2(Eh,xh)/Math.PI;return $h<so?$h+360:$h},as=0,ls=J$2(Qr,-ro,0).map(Xr);as<ls.length;as++)(rs=ls[as])>so&&rs<gr&&Xn(et$1(zi.cX,ro,Qr,rs));for(var ms=0,Ah=J$2(es,-Fo,0).map(Xr);ms<Ah.length;ms++){var rs;(rs=Ah[ms])>so&&rs<gr&&Qn(et$1(zi.cY,Fo,es,rs))}}return ii});return Jt.minX=1/0,Jt.maxX=-1/0,Jt.minY=1/0,Jt.maxY=-1/0,Jt}})(A$1||(A$1={}));var I$2,ct$1=function(){function me(){}return me.prototype.round=function(Le){return this.transform(A$1.ROUND(Le))},me.prototype.toAbs=function(){return this.transform(A$1.TO_ABS())},me.prototype.toRel=function(){return this.transform(A$1.TO_REL())},me.prototype.normalizeHVZ=function(Le,wt,$t){return this.transform(A$1.NORMALIZE_HVZ(Le,wt,$t))},me.prototype.normalizeST=function(){return this.transform(A$1.NORMALIZE_ST())},me.prototype.qtToC=function(){return this.transform(A$1.QT_TO_C())},me.prototype.aToC=function(){return this.transform(A$1.A_TO_C())},me.prototype.sanitize=function(Le){return this.transform(A$1.SANITIZE(Le))},me.prototype.translate=function(Le,wt){return this.transform(A$1.TRANSLATE(Le,wt))},me.prototype.scale=function(Le,wt){return this.transform(A$1.SCALE(Le,wt))},me.prototype.rotate=function(Le,wt,$t){return this.transform(A$1.ROTATE(Le,wt,$t))},me.prototype.matrix=function(Le,wt,$t,kt,It,Rt){return this.transform(A$1.MATRIX(Le,wt,$t,kt,It,Rt))},me.prototype.skewX=function(Le){return this.transform(A$1.SKEW_X(Le))},me.prototype.skewY=function(Le){return this.transform(A$1.SKEW_Y(Le))},me.prototype.xSymmetry=function(Le){return this.transform(A$1.X_AXIS_SYMMETRY(Le))},me.prototype.ySymmetry=function(Le){return this.transform(A$1.Y_AXIS_SYMMETRY(Le))},me.prototype.annotateArcs=function(){return this.transform(A$1.ANNOTATE_ARCS())},me}(),yt$1=function(me){return me===" "||me==="	"||me==="\r"||me===`
`},nt$1=function(me){return"0".charCodeAt(0)<=me.charCodeAt(0)&&me.charCodeAt(0)<="9".charCodeAt(0)},ft$1=function(me){function Le(){var wt=me.call(this)||this;return wt.curNumber="",wt.curCommandType=-1,wt.curCommandRelative=!1,wt.canParseCommandOrComma=!0,wt.curNumberHasExp=!1,wt.curNumberHasExpDigits=!1,wt.curNumberHasDecimal=!1,wt.curArgs=[],wt}return at$2(Le,me),Le.prototype.finish=function(wt){if(wt===void 0&&(wt=[]),this.parse(" ",wt),this.curArgs.length!==0||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return wt},Le.prototype.parse=function(wt,$t){var kt=this;$t===void 0&&($t=[]);for(var It=function(Jt){$t.push(Jt),kt.curArgs.length=0,kt.canParseCommandOrComma=!0},Rt=0;Rt<wt.length;Rt++){var Pt=wt[Rt],Ft=!(this.curCommandType!==m$2.ARC||this.curArgs.length!==3&&this.curArgs.length!==4||this.curNumber.length!==1||this.curNumber!=="0"&&this.curNumber!=="1"),Ut=nt$1(Pt)&&(this.curNumber==="0"&&Pt==="0"||Ft);if(!nt$1(Pt)||Ut)if(Pt!=="e"&&Pt!=="E")if(Pt!=="-"&&Pt!=="+"||!this.curNumberHasExp||this.curNumberHasExpDigits)if(Pt!=="."||this.curNumberHasExp||this.curNumberHasDecimal||Ft){if(this.curNumber&&this.curCommandType!==-1){var Xt=Number(this.curNumber);if(isNaN(Xt))throw new SyntaxError("Invalid number ending at "+Rt);if(this.curCommandType===m$2.ARC){if(this.curArgs.length===0||this.curArgs.length===1){if(0>Xt)throw new SyntaxError('Expected positive number, got "'+Xt+'" at index "'+Rt+'"')}else if((this.curArgs.length===3||this.curArgs.length===4)&&this.curNumber!=="0"&&this.curNumber!=="1")throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+Rt+'"')}this.curArgs.push(Xt),this.curArgs.length===_t[this.curCommandType]&&(m$2.HORIZ_LINE_TO===this.curCommandType?It({type:m$2.HORIZ_LINE_TO,relative:this.curCommandRelative,x:Xt}):m$2.VERT_LINE_TO===this.curCommandType?It({type:m$2.VERT_LINE_TO,relative:this.curCommandRelative,y:Xt}):this.curCommandType===m$2.MOVE_TO||this.curCommandType===m$2.LINE_TO||this.curCommandType===m$2.SMOOTH_QUAD_TO?(It({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),m$2.MOVE_TO===this.curCommandType&&(this.curCommandType=m$2.LINE_TO)):this.curCommandType===m$2.CURVE_TO?It({type:m$2.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===m$2.SMOOTH_CURVE_TO?It({type:m$2.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===m$2.QUAD_TO?It({type:m$2.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===m$2.ARC&&It({type:m$2.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!yt$1(Pt))if(Pt===","&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if(Pt!=="+"&&Pt!=="-"&&Pt!==".")if(Ut)this.curNumber=Pt,this.curNumberHasDecimal=!1;else{if(this.curArgs.length!==0)throw new SyntaxError("Unterminated command at index "+Rt+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+Pt+'" at index '+Rt+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,Pt!=="z"&&Pt!=="Z")if(Pt==="h"||Pt==="H")this.curCommandType=m$2.HORIZ_LINE_TO,this.curCommandRelative=Pt==="h";else if(Pt==="v"||Pt==="V")this.curCommandType=m$2.VERT_LINE_TO,this.curCommandRelative=Pt==="v";else if(Pt==="m"||Pt==="M")this.curCommandType=m$2.MOVE_TO,this.curCommandRelative=Pt==="m";else if(Pt==="l"||Pt==="L")this.curCommandType=m$2.LINE_TO,this.curCommandRelative=Pt==="l";else if(Pt==="c"||Pt==="C")this.curCommandType=m$2.CURVE_TO,this.curCommandRelative=Pt==="c";else if(Pt==="s"||Pt==="S")this.curCommandType=m$2.SMOOTH_CURVE_TO,this.curCommandRelative=Pt==="s";else if(Pt==="q"||Pt==="Q")this.curCommandType=m$2.QUAD_TO,this.curCommandRelative=Pt==="q";else if(Pt==="t"||Pt==="T")this.curCommandType=m$2.SMOOTH_QUAD_TO,this.curCommandRelative=Pt==="t";else{if(Pt!=="a"&&Pt!=="A")throw new SyntaxError('Unexpected character "'+Pt+'" at index '+Rt+".");this.curCommandType=m$2.ARC,this.curCommandRelative=Pt==="a"}else $t.push({type:m$2.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=Pt,this.curNumberHasDecimal=Pt==="."}else this.curNumber+=Pt,this.curNumberHasDecimal=!0;else this.curNumber+=Pt;else this.curNumber+=Pt,this.curNumberHasExp=!0;else this.curNumber+=Pt,this.curNumberHasExpDigits=this.curNumberHasExp}return $t},Le.prototype.transform=function(wt){return Object.create(this,{parse:{value:function($t,kt){kt===void 0&&(kt=[]);for(var It=0,Rt=Object.getPrototypeOf(this).parse.call(this,$t);It<Rt.length;It++){var Pt=Rt[It],Ft=wt(Pt);Array.isArray(Ft)?kt.push.apply(kt,Ft):kt.push(Ft)}return kt}}})},Le}(ct$1),m$2=function(me){function Le(wt){var $t=me.call(this)||this;return $t.commands=typeof wt=="string"?Le.parse(wt):wt,$t}return at$2(Le,me),Le.prototype.encode=function(){return Le.encode(this.commands)},Le.prototype.getBounds=function(){var wt=A$1.CALCULATE_BOUNDS();return this.transform(wt),wt},Le.prototype.transform=function(wt){for(var $t=[],kt=0,It=this.commands;kt<It.length;kt++){var Rt=wt(It[kt]);Array.isArray(Rt)?$t.push.apply($t,Rt):$t.push(Rt)}return this.commands=$t,this},Le.encode=function(wt){return lt$1(wt)},Le.parse=function(wt){var $t=new ft$1,kt=[];return $t.parse(wt,kt),$t.finish(kt),kt},Le.CLOSE_PATH=1,Le.MOVE_TO=2,Le.HORIZ_LINE_TO=4,Le.VERT_LINE_TO=8,Le.LINE_TO=16,Le.CURVE_TO=32,Le.SMOOTH_CURVE_TO=64,Le.QUAD_TO=128,Le.SMOOTH_QUAD_TO=256,Le.ARC=512,Le.LINE_COMMANDS=Le.LINE_TO|Le.HORIZ_LINE_TO|Le.VERT_LINE_TO,Le.DRAWING_COMMANDS=Le.HORIZ_LINE_TO|Le.VERT_LINE_TO|Le.LINE_TO|Le.CURVE_TO|Le.SMOOTH_CURVE_TO|Le.QUAD_TO|Le.SMOOTH_QUAD_TO|Le.ARC,Le}(ct$1),_t=((I$2={})[m$2.MOVE_TO]=2,I$2[m$2.LINE_TO]=2,I$2[m$2.HORIZ_LINE_TO]=1,I$2[m$2.VERT_LINE_TO]=1,I$2[m$2.CLOSE_PATH]=0,I$2[m$2.QUAD_TO]=4,I$2[m$2.SMOOTH_QUAD_TO]=2,I$2[m$2.CURVE_TO]=6,I$2[m$2.SMOOTH_CURVE_TO]=4,I$2[m$2.ARC]=7,I$2);const G$2={},dt$1=(me,Le,wt)=>{if(me.type!==Le.type)throw new Error("Cannot diff between different command types");const $t=me,kt=Le,It={};return["x","y","x1","y1","x2","y2"].forEach(Rt=>{$t[Rt]!==void 0&&kt[Rt]!==void 0&&(It[Rt]=(kt[Rt]-$t[Rt])*wt)}),It},Ot$1=(me,Le,wt)=>{const $t=[];return me.commands.forEach((kt,It)=>{$t.push(dt$1(kt,Le.commands[It],wt))}),$t},Tt$1=(me,Le)=>{const wt=new m$2(me.encode());for(const $t of Le)$t.length!==0&&wt.commands.forEach((kt,It)=>{Object.keys($t[It]).forEach(Rt=>{kt[Rt]=kt[Rt]+$t[It][Rt]})});return wt},st$1=(me,Le,wt)=>{const $t=Le.max-Le.min,kt=wt.max-wt.min,It=(me-Le.min)/$t;return wt.min+It*kt},K$2=(me,Le,wt)=>{let $t=me;for(let kt=0;kt<Le.length;kt++){const It=Le[kt];if(kt===Le.length-1){$t[It]=wt;return}else $t[It]||($t[It]={});$t=$t[It]}},ut$1=async me=>typeof window.fetch=="function"?fetch(me).then(Le=>Le.json()):new Promise((Le,wt)=>{const $t=new XMLHttpRequest;$t.addEventListener("load",()=>{try{Le(JSON.parse($t.responseText))}catch(kt){wt(kt)}}),$t.onerror=wt,$t.open("GET",me),$t.send()}),vt$1=async({category:me,url:Le,json:wt})=>{let $t=null;if(wt)if(typeof wt=="string")try{$t=JSON.parse(wt)}catch{}else typeof wt=="object"&&($t=wt);if(!$t&&Le)try{$t=await ut$1(Le)}catch(It){console.error(It);return}if(!$t)return;const kt=(It,Rt,Pt=0)=>{if(Pt<=0)return It;for(const Ft in Rt)It[Ft]?It[Ft]=kt(It[Ft],Rt[Ft],Pt-1):It[Ft]=Rt[Ft];return It};me?Y$2[me]=kt(Y$2[me]||{},$t,2):Object.keys($t).map(It=>{Y$2[It]=kt(Y$2[It]||{},$t[It],2)})},ht=[],Nt$1=async me=>{const Le=Promise.all(me.map(vt$1));ht.push(Le),await Le},xt=async me=>{var Le,wt,$t,kt,It,Rt,Pt,Ft,Ut,Xt,Jt,ii;if(typeof window>"u")return Promise.resolve(null);const Ni=me.icon.split("/"),[Vi,zi,Xn]=Ni;if(!Vi||!zi||!Xn)throw new Error("SVGIconNext: invalid icon option");try{await Promise.all(ht)}catch{}if((wt=(Le=Y$2[Vi])==null?void 0:Le[zi])!=null&&wt[Xn])return(kt=($t=Y$2[Vi])==null?void 0:$t[zi])==null?void 0:kt[Xn];if((Rt=(It=G$2[Vi])==null?void 0:It[zi])!=null&&Rt[Xn])return(Ft=(Pt=G$2[Vi])==null?void 0:Pt[zi])==null?void 0:Ft[Xn];try{const Qn=ut$1(`//i0.hdslb.com/bfs/svg-next/${Vi}/${zi}/v${Xn}.json`);K$2(G$2,Ni,Qn),K$2(Y$2,Ni,await((Xt=(Ut=G$2[Vi])==null?void 0:Ut[zi])==null?void 0:Xt[Xn]))}catch{throw K$2(G$2,Ni,null),new Error("SVGIconNext: fetch icon config failed")}return(ii=(Jt=Y$2[Vi])==null?void 0:Jt[zi])==null?void 0:ii[Xn]},At$1=me=>{const Le=[24,24];return Array.isArray(me.size)?(Le[0]=me.size[0],Le[1]=me.size[1]):typeof me.size=="number"&&!Number.isNaN(Le)&&(Le[0]=me.size,Le[1]=me.size),Le},Et$1=(me,Le)=>{var wt;if(!me.palette)return"currentColor";if(Array.isArray(me.palette))return me.palette;const $t=(wt=Le==null?void 0:Le.palettes)==null?void 0:wt.find(kt=>kt.name===me.palette);return $t?$t.value:me.palette},Ct$1=(me,Le)=>{var wt,$t;if(!Le)return[];const kt=At$1(me),It=Le.default.map(Pt=>new m$2(Pt).toAbs()),Rt=((wt=Le.axes)==null?void 0:wt.map(Pt=>({min:Pt.min.map(Ft=>new m$2(Ft).toAbs()),max:Pt.max.map(Ft=>new m$2(Ft).toAbs())})))||[];return($t=Le.axes)!=null&&$t.length?It.map((Pt,Ft)=>{const Ut=Le.axes.map((Xt,Jt)=>{const ii=Rt[Jt].min[Ft],Ni=Rt[Jt].max[Ft];if(!ii||!Ni||[ii,Ni].some(Xn=>Xn.commands.length!==Pt.commands.length))return[];const Vi=(()=>{var Xn;const Qn=(Xn=me.axes)==null?void 0:Xn[Xt.name];return Qn?Xt.name==="stroke"?Qn/(kt[0]/24):Qn:Xt.value.default})();let zi=0;if(Vi<Xt.value.default){const Xn={min:Xt.value.min,max:Xt.value.default};zi=st$1(Vi,Xn,{min:-1,max:0})}else{const Xn={min:Xt.value.default,max:Xt.value.max};zi=st$1(Vi,Xn,{min:0,max:1})}return Ot$1(Pt,zi<0?ii:Ni,Math.abs(zi))});return Tt$1(Pt,Ut).scale(kt[0]/24,kt[1]/24).encode()}):It.map(Pt=>new m$2(Pt.encode()).scale(kt[0]/24,kt[1]/24).encode())};let Y$2={};typeof window<"u"&&(window.__SVG_ICON_NEXT_CACHE__&&(Y$2=window.__SVG_ICON_NEXT_CACHE__),window.__SVG_ICON_NEXT_PRELOAD_PACKS__||(window.__SVG_ICON_NEXT_PRELOAD_PACKS__=Nt$1));class B$2 extends HTMLElement{constructor(){super(),this.axes=null,this.palette="",this.width="",this.height="",this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            display: inline-flex;
            align-items: center;
          }
        </style>
        <svg
          id="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        ></svg>
      `)}static get observedAttributes(){return["icon"]}connectedCallback(){if(this.shadowRoot){const Le=this.getAttribute("icon");Le&&this.updateSvg(Le)}}disconnectedCallback(){this.palette="",this.axes={}}getSVGIconOptions(Le){return{icon:Le,size:[Number(this.width),Number(this.height)],axes:this.axes||{},palette:this.palette}}initSize(){let Le="24",wt="24";const $t=this.getAttribute("size")||"";if($t){const Rt=$t.split(",");Rt.length===2?(Le=Rt[0],wt=Rt[1]):Le=wt=Rt[0],this.width=Le,this.height=wt;return}const kt=this.getAttribute("width"),It=this.getAttribute("height");kt&&It&&(Le=kt,wt=It),this.width=Le,this.height=wt}async updateSvg(Le){if(!this.shadowRoot)return;const wt=this.shadowRoot.querySelector("#icon");if(!wt)return;this.initSize(),wt.setAttribute("width",this.width),wt.setAttribute("height",this.height),wt.setAttribute("viewBox",`0 0 ${this.width} ${this.height}`);const $t=this.getSVGIconOptions(Le),kt=await xt($t);if(!kt)return;const It=Ct$1($t,kt);if(It!=null&&It.length){const Rt=Et$1($t,kt);Rt!=null&&Rt.length&&(this.palette=Rt);const Pt=It.map((Ft,Ut)=>`
                    <path
                        d="${Ft}"
                        fill="${typeof this.palette=="string"?this.palette:this.palette[Ut]||""}"
                    ></path>
                `).join("");wt.innerHTML=Pt}}attributeChangedCallback(Le,wt,$t){switch(Le){case"icon":$t&&$t!==wt&&this.updateSvg($t);break}}}B$2.elName="bili-icon";customElements.get(B$2.elName)||customElements.define(B$2.elName,B$2);class r$2 extends HTMLElement{constructor(){super(),this.disposables=p$3(),this.deferred=P$3(),this.onConfirm=null,this.onCancel=null,this.final=null;const Le=this.attachShadow({mode:"open"}),wt=`
        <style>
            :host {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
            }
            #mask {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
              background-color: rgba(0, 0, 0, 0.5);
            }
            #wrap {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            #dialog {
              -webkit-font-smoothing: antialiased;
              background-color: var(--bg1);
              border-radius: 8px;
              box-sizing: border-box;
              font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
              font-weight: 400;
              overflow: hidden;
              padding-bottom: 24px!important;
              padding: 16px;
              position: relative;
              width: 320px;
              transform-origin: center center;
            }
            #close {
                color: var(--text2);
                cursor: pointer;
                height: 22px;
                position: absolute;
                right: 16px;
                top: 16px;
                width: 22px;
            }
            #title {
                color: var(--text1);
                font-size: 16px;
                font-weight: 600;
                margin-top: 16px;
                margin-bottom: 10px;
                text-align: center;
                padding: 0 16px;
            }
            #message {
                color: var(--text2);
                font-size: 14px;
                margin-bottom: 14px;
                text-align: center;
                padding: 0 16px 10px;
                white-space: pre-wrap;
            }
            #action {
                align-items: center;
                display: flex;
                justify-content: center;
                padding-right: 12px;
            }
            #action button {
                -webkit-font-smoothing: antialiased;
                border: 1px solid var(--brand_blue);
                border-radius: 6px;
                box-sizing: border-box;
                cursor: pointer;
                font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
                font-weight: 400;
                height: 32px;
                outline: none;
                transition: all .2s;
                width: 130px;
                margin-left: 12px;
            }
            #action button#cancel {
                background-color: var(--bg1);
                border-color: var(--line_regular);
                color: var(--text1);
            }
            #action button#confirm {
                background-color: var(--brand_blue);
                border-color: var(--brand_blue);
                color: var(--text_white);
            }
        </style>
        <div id="mask"></div>
        <div id="wrap">
          <div 
              role="dialog" 
              id="dialog"
          >
              <div id="close"><bili-icon icon="BDC/xmark_close_line/1" size="22"></bili-icon></div>
              <div id="title"></div>
              <div id="message"></div>
              <div id="action">
                  <button id="cancel"></button>
                  <button id="confirm"></button>
              </div>
          </div>
        </div>
    `,$t=document.createElement("template");$t.innerHTML=wt;const kt=document.importNode($t.content,!0);Le.appendChild(kt)}getEl(Le){var wt;return(wt=this.shadowRoot)==null?void 0:wt.querySelector(`#${Le}`)}connectedCallback(){this.disposables.addEventListener(this.getEl("close"),"click",()=>{this.handleActionEvent("cancel")}),this.disposables.addEventListener(this.getEl("cancel"),"click",()=>{this.handleActionEvent("cancel")}),this.disposables.addEventListener(this.getEl("confirm"),"click",()=>{this.handleActionEvent("confirm")})}disconnectedCallback(){this.disposables.dispose()}async handleActionEvent(Le){var wt;const $t=Le==="cancel"?this.onCancel:this.onConfirm;$t?await $t(this.hide.bind(this)):await this.hide(),(wt=this.final)==null||wt.call(this)}handleText(Le,wt){this.getEl(Le).textContent=wt,wt===""&&this.handleVisible(Le,!1)}doTransition(Le,wt,$t=200){const kt=this.getEl(Le);kt.style.transition=`all ${$t}ms linear`,kt.style.opacity=`var(--bili-modal-opacity, ${wt?"0":"1"})`,Le==="dialog"&&(kt.style.transform="var(--bili-modal-transform, scale(1))"),wt&&(kt.style.display="block"),setTimeout(()=>{kt.style.setProperty("--bili-modal-opacity",wt?"1":"0"),Le==="dialog"&&kt.style.setProperty("--bili-modal-transform",wt?"scale(1)":"scale(.8)"),setTimeout(()=>{wt||(kt.style.display="none",Le==="mask"&&this.handleVisible("",!1)),kt.style.removeProperty("transition"),kt.style.removeProperty("opacity"),kt.style.removeProperty("--bili-modal-opacity"),this.deferred.resolve(!0)},$t+20)},0)}handleVisible(Le,wt,$t){const kt=Le===""?this:this.getEl(Le);if(!$t){kt.style.display=wt?"block":"none";return}Le!=="mask"&&Le!=="dialog"||this.doTransition(Le,wt)}handleAction(Le,wt){if(wt===!1||wt===""){this.handleVisible(Le,!1);return}this.handleVisible(Le,!0);const $t=async()=>{await this.hide()},kt=Le==="cancel"?"\u53D6\u6D88":"\u786E\u5B9A";typeof wt>"u"?wt={text:kt,click:$t}:typeof wt=="string"?wt={text:wt,click:$t}:typeof wt=="function"&&(wt={text:kt,click:wt});const It=wt;this.handleText(Le,It.text),this[Le==="cancel"?"onCancel":"onConfirm"]=It.click}async show(Le){this.deferred=P$3(),this.final=Le.final||null,this.handleVisible("mask",Le.mask!==!1,!0),this.handleVisible("dialog",!0),this.handleVisible("",!0),this.style.setProperty("z-index",String(Le.zIndex||I$3()),"important"),this.handleText("title",Le.title||""),this.handleText("message",Le.message||""),this.handleAction("cancel",Le.cancel),this.handleAction("confirm",Le.confirm),await this.deferred.promise}async hide(){this.deferred=P$3(),this.handleVisible("dialog",!1,!0),this.getEl("mask").style.display==="block"?this.handleVisible("mask",!1,!0):this.handleVisible("",!1),await this.deferred.promise}}customElements.get("bili-modal")||customElements.define("bili-modal",r$2);function throttle(me,Le,wt){var $t=wt||{},kt=$t.noTrailing,It=kt===void 0?!1:kt,Rt=$t.noLeading,Pt=Rt===void 0?!1:Rt,Ft=$t.debounceMode,Ut=Ft===void 0?void 0:Ft,Xt,Jt=!1,ii=0;function Ni(){Xt&&clearTimeout(Xt)}function Vi(Xn){var Qn=Xn||{},eo=Qn.upcomingOnly,no=eo===void 0?!1:eo;Ni(),Jt=!no}function zi(){for(var Xn=arguments.length,Qn=new Array(Xn),eo=0;eo<Xn;eo++)Qn[eo]=arguments[eo];var no=this,to=Date.now()-ii;if(Jt)return;function oo(){ii=Date.now(),Le.apply(no,Qn)}function ao(){Xt=void 0}!Pt&&Ut&&!Xt&&oo(),Ni(),Ut===void 0&&to>me?Pt?(ii=Date.now(),It||(Xt=setTimeout(Ut?ao:oo,me))):oo():It!==!0&&(Xt=setTimeout(Ut?ao:oo,Ut===void 0?me-to:me))}return zi.cancel=Vi,zi}const h=333,l$4=30,u$1="cubic-bezier(0.4, 0, 0.22, 1)";class b$3 extends HTMLElement{constructor(){super(),this.visible=!1,this.disposables=p$3(),this.imgs=[],this.isOpening=!1,this.isZoomIn=!1,this.isZooming=!1,this.isOpen=!1,this.isClosing=!1,this.currIndex=0,this.removeSelfByClose=!1,this.isZoomInDragging=!1,this.zoomInDragPos=null,this.zoomInOffset={x:0,y:0},this.viewportRect={w:0,h:0,x:0,y:0},this.attachShadow({mode:"open"}),this.render()}shadowRootQuerySelector(Le){return this.shadowRoot.querySelector(Le)}get container(){return this.shadowRootQuerySelector("#container")}get item(){return this.shadowRootQuerySelector("#container #item")}get zoomWrap(){return this.shadowRootQuerySelector("#container #item #zoom-wrap")}get currImgEl(){return this.shadowRootQuerySelector("#container #item #zoom-wrap img")}get spinner(){return this.shadowRootQuerySelector("#container #spinner")}get thumb(){return this.shadowRootQuerySelector("#wrap #thumb")}get currImg(){return this.imgs[this.currIndex]}async connectedCallback(){T$1(()=>{this.initEvents()})}timeoutPromise(Le=0){return new Promise(wt=>{this.disposables.setTimeout(()=>{wt(!0)},Le)})}initEvents(){if(!this.shadowRoot)return;const Le=this.shadowRoot.querySelector("#close"),wt=this.shadowRoot.querySelector("#prev"),$t=this.shadowRoot.querySelector("#next");this.disposables.addEventListener(Le,"click",()=>{this.close()}),this.disposables.addEventListener(wt,"click",()=>{this.prev()}),this.disposables.addEventListener($t,"click",()=>{this.next()}),this.disposables.addEventListener(this.thumb,"click",It=>{var Rt;if(It.target instanceof HTMLElement){const Pt=(Rt=It.target.dataset.index)!=null?Rt:this.currIndex;Pt!==this.currIndex&&this.goTo(Number(Pt))}}),this.disposables.addEventListener(this.zoomWrap,"click",It=>{if(this.isZoomInDragging)return;if(this.isZoomIn){this.zoomTo();return}const{left:Rt,top:Pt}=this.zoomWrap.getBoundingClientRect();this.zoomTo({x:It.clientX-Rt,y:It.clientY-Pt})});const kt=It=>{this.isOpen&&It.preventDefault()};this.disposables.addEventListener(this,"touchmove",kt,{passive:!1}),this.disposables.addEventListener(this.container,"click",It=>{if(It.target===this.item){if(this.isZoomIn||this.isZooming)return;this.close()}}),this.disposables.addEventListener(this.zoomWrap,"wheel",It=>{kt(It),!(!this.isZoomIn||this.isZooming)&&this.scrollZoomWrap(It.deltaX,It.deltaY)},{passive:!0}),this.disposables.addEventListener(this.zoomWrap,"mousedown",It=>{!this.isZoomIn||this.isZooming||(this.isZoomInDragging=!0,this.zoomInDragPos={x:It.clientX,y:It.clientY,isOrigin:!0})}),this.disposables.addEventListener(this.zoomWrap,"mousemove",It=>{if(!this.isZoomIn||this.isZooming||!this.zoomInDragPos)return;const Rt=this.zoomInDragPos.x-It.clientX,Pt=this.zoomInDragPos.y-It.clientY;this.scrollZoomWrap(Rt,Pt),this.zoomInDragPos={x:It.clientX,y:It.clientY,isOrigin:!1}}),this.disposables.addEventListener(this.zoomWrap,"mouseup",async()=>{var It;if(!(!this.isZoomIn||this.isZooming)){if(!this.zoomInDragPos){this.isZoomInDragging=!1;return}if((It=this.zoomInDragPos)!=null&&It.isOrigin){this.zoomInDragPos=null,this.isZoomInDragging=!1;return}this.zoomInDragPos=null,await this.timeoutPromise(300),this.isZoomInDragging=!1}}),this.disposables.addEventListener(document,"keydown",It=>{const Rt=()=>{It.stopPropagation(),It.preventDefault()};if(this.isOpen)switch(It.key){case"Escape":this.close(),Rt();break;case"ArrowLeft":this.prev(),Rt();break;case"ArrowRight":this.next(),Rt();break}}),this.disposables.addEventListener(window,"resize",throttle(10,()=>{this.getViewportRect(),!(this.isZooming||this.isZoomInDragging)&&this.currImg&&(delete this.currImg.zoom,this.calculateImgZoom(),this.animateToOpenState(!1))}))}disconnectedCallback(){this.disposables.dispose(),this.isOpen=!1}getViewportRect(){const Le=this.container;if(!Le)return;const{width:wt,height:$t,x:kt,y:It}=Le.getBoundingClientRect();this.viewportRect.w=wt,this.viewportRect.h=$t,this.viewportRect.x=kt,this.viewportRect.y=It}setTransitionStyle(Le,wt,$t,kt){Le.style.setProperty("transition",wt?`${wt} ${$t}ms ${kt||u$1}`:"none")}removeTransitionStyle(Le){Le.style.removeProperty("transition")}async animateTo(Le,wt,$t){await this.timeoutPromise(),this.setTransitionStyle(Le,wt,h),await this.timeoutPromise(l$4),Le.style.setProperty(wt,$t)}async initialize(Le){function wt(){return new Error("bili photoswipe open options error")}const{gallery:$t,children:kt,dataSource:It,index:Rt,appendToEl:Pt}=Le;if($t&&kt){const Ft=document.querySelector($t);if(!Ft)return Promise.reject(wt());const Ut=Array.from(Ft.querySelectorAll(kt)||[]);if(!Ut.length)return Promise.reject(wt());this.imgs=Array.from(Ut).map(Xt=>{const Jt=Xt.dataset;return{src:Jt.pswpSrc||"",width:Number(Jt.pswpWidth)||0,height:Number(Jt.pswpHeight)||0,thumbEl:Xt,thumbCropped:Jt.cropped!==null}})}else if(It!=null&&It.length)this.imgs=It.map(Ft=>({...Ft}));else return Promise.reject(wt());typeof Rt=="number"&&Rt>=0&&Rt<this.imgs.length&&(this.currIndex=Rt|0),(Pt||!this.parentElement)&&(this.removeSelfByClose=!0,(Pt||document.body).appendChild(this),await this.timeoutPromise()),this.getViewportRect(),this.setAttribute("visible",""),this.style.setProperty("z-index",String(1e4+I$3())),this.setThumb()}setThumb(){if(this.imgs.length===1){this.thumb.style.display="none";return}const Le=(wt,$t)=>`
        <div class="thumb-item" data-index="${$t}"><img src="${wt}"></div>
      `;this.thumb.innerHTML=this.imgs.map((wt,$t)=>Le(`${wt.src}@96w_96h_1c.webp`,$t)).join(""),this.updateThumbActive()}updateThumbActive(){if(this.imgs.length===1)return;const Le=this.thumb.querySelector(".thumb-item.active");Le&&Le.classList.remove("active");const wt=this.thumb.children[this.currIndex];wt&&wt.classList.add("active")}getCurrImgOpenData(){const{src:Le,width:wt,height:$t,zoom:kt}=this.currImg;return{src:Le,width:this.isZoomIn?wt:(kt==null?void 0:kt.width)||wt,height:this.isZoomIn?$t:(kt==null?void 0:kt.height)||$t}}async animateZoomWrapToOpenState(Le,wt){const{width:$t,height:kt}=this.getCurrImgOpenData(),It=(this.viewportRect.w-$t)/2,Rt=kt>=this.viewportRect.h?0:(this.viewportRect.h-kt)/2;Le?this.animateTo(this.zoomWrap,"transform",this.getTransform(It,Rt,wt)):(this.removeTransitionStyle(this.zoomWrap),this.zoomWrap.style.setProperty("transform",this.getTransform(It,Rt,wt))),await this.timeoutPromise(l$4+(Le?h:0))}async animateToOpenState(Le){const{width:wt,height:$t}=this.getCurrImgOpenData();Le?(this.animateTo(this.container,"transform",this.getTransform(0,0)),this.animateTo(this.item,"transform","none"),this.animateZoomWrapToOpenState(Le,1)):(this.animateZoomWrapToOpenState(Le,1),this.currImgEl&&this.setElementSize(this.currImgEl,wt,$t)),await this.timeoutPromise(l$4+(Le?h:0))}async animateToClosedState(Le){const wt=this.currImg;if(!wt.thumbEl)return;const $t=wt.thumbCropped?this.getCroppedBoundsByElement(wt.thumbEl,wt.width,wt.height):this.getBoundsByElement(wt.thumbEl);if(!$t.innerRect)return;const kt=this.getCurrImgOpenData().width,It=-this.viewportRect.w+($t.x-$t.innerRect.x)+$t.innerRect.w,Rt=-this.viewportRect.h+($t.y-$t.innerRect.y)+$t.innerRect.h,Pt=this.viewportRect.w-$t.innerRect.w,Ft=this.viewportRect.h-$t.innerRect.h;this.zoomWrap.style.setProperty("transform-origin","0 0"),Le?(this.animateTo(this.container,"transform",this.getTransform(It,Rt)),this.animateTo(this.item,"transform",this.getTransform(Pt,Ft)),this.animateTo(this.zoomWrap,"transform",this.getTransform($t.innerRect.x,$t.innerRect.y,$t.w/kt))):(this.container.style.setProperty("transform",this.getTransform(It,Rt)),this.item.style.setProperty("transform",this.getTransform(Pt,Ft)),this.zoomWrap.style.setProperty("transform",this.getTransform($t.innerRect.x,$t.innerRect.y,$t.w/kt))),await this.timeoutPromise(l$4+(Le?h:0)),this.zoomWrap.classList.add("opend")}async open(Le){if(this.visible)return;await this.initialize(Le),this.triggerEvent("before-open"),this.visible=!0;const{src:wt,thumbEl:$t}=this.calculateImgZoom();if($t){this.isOpening=!0,this.appendPlaceholderEl();const kt=this.loadImg(wt);await this.animateToClosedState(!1),await this.animateToOpenState(!0),this.appendImgEl(await kt),this.isOpening=!1}else this.appendImgEl(),await this.animateToOpenState(!1);this.isOpen=!0,this.triggerEvent("after-open")}async close(){if(!this.visible||this.isOpening||this.isClosing)return;this.isClosing=!0,this.visible=!1,this.triggerEvent("before-close"),this.removeAttribute("visible");const{thumbEl:Le}=this.currImg;Le&&await this.animateToClosedState(!0),this.imgs=[],this.triggerEvent("after-close"),this.removeSelfByClose&&this.parentElement&&this.parentElement.removeChild(this),this.removeSelfByClose=!1,this.isOpen=!1}triggerEvent(Le){this.dispatchEvent(new CustomEvent(Le))}prev(){this.triggerEvent("prev"),this.goTo(this.currIndex-1)}next(){this.triggerEvent("next"),this.goTo(this.currIndex+1)}clearZoomState(){this.zoomInOffset.x=0,this.zoomInOffset.y=0,this.isZoomIn=!1,this.zoomWrap.classList.remove("zoom-in"),this.zoomWrap.classList.add("zoom-out")}async goTo(Le){if(Le<0||Le>this.imgs.length-1)return;this.currIndex=Le,this.updateThumbActive(),this.isZoomIn&&this.clearZoomState();const{src:wt,thumbEl:$t}=this.calculateImgZoom();this.animateToOpenState(!1);try{$t?(this.appendPlaceholderEl(),this.appendImgEl(await this.loadImg(wt))):(this.removeImgFromContent(),this.spinner.classList.add("visible"),this.appendImgEl(await this.loadImg(wt)),this.spinner.classList.remove("visible"))}catch(kt){console.log(kt)}}scrollZoomWrap(Le,wt){const{width:$t,height:kt,zoom:It}=this.currImg;It&&($t<this.viewportRect.w&&kt<this.viewportRect.h||(this.zoomInOffset.x=$t>this.viewportRect.w?-Math.max(0,Math.min(-this.zoomInOffset.x+Le,$t-this.viewportRect.w)):(this.viewportRect.w-$t)/2,this.zoomInOffset.y=kt>this.viewportRect.h?-Math.max(0,Math.min(-this.zoomInOffset.y+wt,kt-this.viewportRect.h)):(this.viewportRect.h-kt)/2,this.zoomWrap.style.setProperty("transform",this.getTransform(this.zoomInOffset.x,this.zoomInOffset.y,1))))}async zoomTo(Le){const{width:wt,height:$t,zoom:kt}=this.currImg;if(!kt||this.isZooming)return;if(this.isZoomIn){this.isZooming=!0,this.clearZoomState(),await this.animateZoomWrapToOpenState(!0,kt.width/wt),await this.animateToOpenState(!1),this.isZooming=!1;return}this.isZooming=!0,this.isZoomIn=!0,this.zoomWrap.classList.remove("zoom-out"),this.zoomWrap.classList.add("zoom-in");let It=(this.viewportRect.w-wt)/2,Rt=0;wt>this.viewportRect.w&&(It=-(((Le==null?void 0:Le.x)||0)/kt.width)*(wt-this.viewportRect.w)),$t<this.viewportRect.h?Rt=(this.viewportRect.h-$t)/2:Le!=null&&Le.y&&(Rt=-(((Le==null?void 0:Le.y)||0)/kt.height)*($t-this.viewportRect.h)),this.zoomInOffset.x=It,this.zoomInOffset.y=Rt,await this.animateTo(this.zoomWrap,"transform",this.getTransform(It,Rt,wt/kt.width)),await this.timeoutPromise(h+l$4),this.removeTransitionStyle(this.zoomWrap),this.setElementSize(this.currImgEl,wt,$t),this.zoomWrap.style.setProperty("transform",this.getTransform(It,Rt,1)),this.isZooming=!1}loadImg(Le,wt){return new Promise(($t,kt)=>{const It=wt||new Image;It.onload=()=>{$t(It)},It.onerror=()=>{kt(new Error("load img error"))},It.src=Le})}calculateImgZoom(Le){if(Le=Le!=null?Le:this.currIndex,Le>=this.imgs.length||Le<0)throw new Error("index out of range");if(this.imgs[Le].zoom)return this.imgs[Le];let{width:wt,height:$t}=this.imgs[Le],kt=!1;const It=wt/$t,Rt=this.viewportRect.w/this.viewportRect.h;if(It>Rt)wt>this.viewportRect.w&&(wt=this.viewportRect.w,$t=wt/It,kt=!0);else if(It<Rt)$t>this.viewportRect.h&&($t=this.viewportRect.h,wt=$t*It,kt=!0);else{const Pt=Math.min(this.viewportRect.w,this.viewportRect.h);Pt<wt&&(kt=!0,wt=$t=Pt)}return kt&&(this.imgs[Le].zoom={width:Math.round(wt),height:Math.round($t)}),this.imgs[Le]}getBoundsByElement(Le){const wt=Le.getBoundingClientRect();return{x:wt.left,y:wt.top,w:wt.width}}getCroppedBoundsByElement(Le,wt,$t){const kt=Le.getBoundingClientRect(),It=kt.width/wt,Rt=kt.height/$t,Pt=It>Rt?It:Rt,Ft=(kt.width-wt*Pt)/2,Ut=(kt.height-$t*Pt)/2;return{x:kt.left+Ft,y:kt.top+Ut,w:wt*Pt,innerRect:{w:kt.width,h:kt.height,x:Ft,y:Ut}}}getTransform(Le,wt,$t){let kt=`translate3d(${Le}px, ${wt}px, 0px)`;return typeof $t=="number"&&(kt+=` scale3d(${$t}, ${$t}, 1)`),kt}appendImgToContent(Le){const wt=this.zoomWrap.querySelector("img");wt?this.zoomWrap.replaceChild(Le,wt):this.zoomWrap.appendChild(Le)}removeImgFromContent(){const Le=this.zoomWrap.querySelector("img");Le&&this.zoomWrap.removeChild(Le)}appendPlaceholderEl(){const{thumbEl:Le}=this.currImg;if(!Le)return;const wt=Le.querySelector("img"),$t=wt==null?void 0:wt.getAttribute("src");if(!$t)return;const kt=new Image;kt.alt="",kt.src=$t,kt.setAttribute("role","presentation"),kt.setAttribute("aria-hidden","true"),this.setElementSize(kt,250),kt.style.setProperty("width","250px"),kt.style.setProperty("height","auto"),kt.style.transformOrigin="0 0",kt.style.transform=this.getTransform(0,0,this.getCurrImgOpenData().width/250),this.appendImgToContent(kt)}setElementSize(Le,wt,$t){Le.style.setProperty("width",`${wt}px`),Le.style.setProperty("height",$t?`${$t}px`:"auto")}appendImgEl(Le){const{src:wt,width:$t,height:kt}=this.getCurrImgOpenData();Le||(Le=new Image,Le.src=wt),this.setElementSize(Le,$t,kt),this.appendImgToContent(Le),this.currImg.zoom&&this.zoomWrap.classList.add("zoom-out"),this.zoomWrap.classList.contains("opend")||this.zoomWrap.classList.add("opend")}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        #bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
        }
        :host([visible]) .ui-visible {
          opacity: .8;
          pointer-events: auto;
        }
        :host([visible]) #thumb.ui-visible {
          opacity: 1;
          pointer-events: auto;
        }
        .ui-visible {
          opacity: 0.005;
          will-change: opacity;
          transition: opacity ${h}ms ease;
          pointer-events: none;
        }
        #wrap,
        #wrap #container,
        #wrap #container #item,
        #wrap #container #zoom-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #wrap button {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          z-index: 2;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: var(--text_white);
          background: rgba(0,0,0,.58);
          transition-function: ${u$1};
          cursor: pointer;
          outline: none;
          border: none;
        }
        button.top {
          top: 16px;
        }
        button.left {
          left: 16px;
        }
        button.right {
          right: 16px;
        }
        button.middle {
          top: 50%;
        }
        button#prev {
          transform: translateY(-50%);
        }
        button#next {
          transform: translateY(-50%) rotate(180deg);
        }
        #wrap button:hover {
          color: var(--brand_pink);
        }
        #wrap #container,
        #wrap #item {
          overflow: hidden;
        }
        #wrap #container #zoom-wrap.opend {
          width: auto;
          height: auto;
        }
        #zoom-wrap img {
          max-width: none;
          -webkit-user-drag: none;
        }
        #zoom-wrap.zoom-out {
          cursor: zoom-in;
        }
        #zoom-wrap.zoom-in {
          cursor: move;
          cursor: -webkit-grab;
          cursor: -moz-grab;
          cursor: grab;
        }
        #spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 20px 0;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: var(--text3);
          pointer-events: none;
          display: none;
        }
        #spinner.visible {
          display: block;
        }
        #spinner img {
          margin-right: 8px;
          vertical-align: bottom;
        }
        #thumb {
          display: flex;
          align-items: center;
          position: absolute;
          left: 50%;
          bottom: 30px;
          z-index: 2;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(24,25,28,.8);
          backdrop-filter: blur(20px);
          transform: translate(-50%);
        }
        #thumb .thumb-item {
          width: 54px;
          height: 54px;
          padding: 1px;
          border: 2px solid transparent;
          border-radius: 8px;
          transition: .3s;
          cursor: pointer;
          box-sizing: border-box;
        }
        #thumb .thumb-item img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          -webkit-user-drag: none;
          pointer-events: none;
        }
        #thumb .thumb-item.active {
          border-color: var(--brand_pink);
        }
      </style>
      <div id="bg" class="ui-visible"></div>
      <section id="wrap" aria-roledescription="carousel">
        <div id="container">
          <div id="item">
            <div id="zoom-wrap"></div>
          </div>
          <div id="spinner">
            <img width="24" height="24" src="//s1.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
            <span>\u6B63\u5728\u73A9\u547D\u52A0\u8F7D\u2026</span>
          </div>
        </div>
        <button id="close" class="right top ui-visible"><bili-icon icon="BDC/xmark_close_line/1" size="20"></bili-icon></button>
        <button id="prev" class="left middle ui-visible"><bili-icon icon="BDC/arrow_back_left_line/3" size="20"></bili-icon></button>
        <button id="next" class="right middle ui-visible"><bili-icon icon="BDC/arrow_back_left_line/3" size="20"></bili-icon></button>
        <div id="thumb" class="ui-visible"></div>
      </section>
    `)}}customElements.get("bili-photoswipe")||customElements.define("bili-photoswipe",b$3);class l$3 extends _$2{constructor(Le){super(),this.timer=null,typeof Le<"u"&&this.reset(Le)}reset(Le){super.reset(),typeof Le<"u"&&(this.timer=window.setTimeout(()=>{this.resolve(!0),this.timer=null},Le))}clear(){this.timer&&(window.clearTimeout(this.timer),this.timer=null,this.reject(new Error("User canceled")))}}class c$4 extends HTMLElement{constructor(){super(),this.reference=null,this.transition="",this.disposables=p$3(),this.deferred=null,this.state="hidden",this.showDelay=0,this.hideDelay=0,this.zIndex=0;const Le=this.attachShadow({mode:"open"}),wt=`
      <style>
        :host {
        }
      </style>
      <div id="content">
        <slot></slot>
      </div>
    `,$t=document.createElement("template");$t.innerHTML=wt;const kt=document.importNode($t.content,!0);Le.appendChild(kt)}setup(Le,wt){if(this.reference){console.warn("This popover has been setuped");return}let $t;if(typeof Le=="string"&&(this.parentElement&&($t=this.parentElement.querySelector(Le)),$t||($t=document.querySelector(Le))),!$t){console.warn("reference is not found:",Le);return}if(this.reference=$t,this.popperInstance=createPopper($t,this,{placement:(wt==null?void 0:wt.placement)||"bottom",modifiers:[{name:"offset",options:{offset:(wt==null?void 0:wt.offset)||[0,4]}}]}),wt!=null&&wt.zIndex&&(this.zIndex=wt.zIndex),wt!=null&&wt.to){let It=null;typeof wt.to=="string"?It=document.querySelector(wt.to):It=wt.to,It?It.appendChild(this):console.warn("Popover config.to is not found:",wt.to)}wt!=null&&wt.transition&&(typeof(wt==null?void 0:wt.transition)=="string"?this.transition=wt==null?void 0:wt.transition:this.transition="bili-popover-transition");const kt=(wt==null?void 0:wt.trigger)||"hover";wt!=null&&wt.delay?typeof wt.delay=="number"?(this.showDelay=wt.delay,this.hideDelay=wt.delay):Array.isArray(wt.delay)&&(this.showDelay=wt.delay[0],this.hideDelay=wt.delay[1]):kt==="hover"&&(this.showDelay=100,this.hideDelay=200),kt==="hover"?(this.disposables.addEventListener($t,"mouseenter",this.show.bind(this)),this.disposables.addEventListener($t,"mouseleave",this.hide.bind(this))):kt==="click"&&this.disposables.addEventListener($t,"click",()=>{if(this.style.display==="block"){this.hide();return}this.show()}),this.disposables.mutationObserve($t,It=>{for(const Rt of It)if(Rt.type==="childList"&&Array.from(Rt.removedNodes).includes($t)){this.parentElement&&this.parentElement.removeChild(this);break}},{childList:!0})}getTransitionTimingClass(Le){return`${this.transition}-${Le}`}delay(Le){return new Promise(wt=>setTimeout(wt,Le))}doTransition(Le){this.dispatchEvent(new CustomEvent(Le?"before-enter":"before-leave"));const wt=new l$3;return O(this,Le?{base:[],enter:[],enterFrom:[this.getTransitionTimingClass("enter-from")],enterTo:[this.getTransitionTimingClass("enter-active")],leave:[],leaveFrom:[],leaveTo:[],entered:[]}:{base:[],enter:[],enterFrom:[],enterTo:[],leave:[],leaveFrom:[this.getTransitionTimingClass("leave-from")],leaveTo:[this.getTransitionTimingClass("leave-active")],entered:[]},Le,()=>{this.dispatchEvent(new CustomEvent(Le?"after-enter":"after-leave")),wt.resolve(!0)}),this.deferred=wt,wt.promise}async showDeferred(){let Le=this.deferred;if(Le){if(this.state==="showing"||this.state==="visible")return Le.clear(),this.deferred=null,Promise.reject("popover is showing or visible");this.state==="hiding"?(await Le.promise,await this.delay(0)):Le.clear()}Le=this.deferred=new l$3(this.showDelay),await Le.promise}async hideDeferred(){let Le=this.deferred;if(Le){if(this.state==="hiding"||this.state==="hidden")return Le.clear(),this.deferred=null,Promise.reject("popover is hiding or hidden");this.state==="showing"?await Le.promise:Le.clear()}return Le=this.deferred=new l$3(this.hideDelay),await Le.promise}toggle(Le){if(!this.popperInstance)return;const wt=Le==="show";Array.from(this.children).forEach($t=>{if($t instanceof HTMLElement){if(!wt){$t.style.removeProperty("display");return}$t.style.setProperty("display","block","important")}}),wt?(this.popperInstance.update(),this.style.setProperty("display","block","important"),this.style.setProperty("z-index",String(this.zIndex||I$3()),"important")):this.style.removeProperty("display")}async show(){if(this.popperInstance){try{await this.showDeferred()}catch{return}this.state="showing",this.toggle("show"),this.transition&&await this.doTransition(!0),this.state="visible",this.deferred=null}}async hide(){if(this.popperInstance){try{await this.hideDeferred()}catch{return}if(this.state="hiding",this.transition)await this.doTransition(!1);else if(this.style.display!=="block")return;this.toggle("hide"),this.deferred=null}}connectedCallback(){const Le=this.getAttribute("reference");if(Le){const wt=this.getAttribute("placement"),$t=this.getAttribute("trigger"),kt=this.getAttribute("z-index"),It=this.getAttribute("transition"),Rt=this.getAttribute("delay"),Pt=this.getAttribute("to"),Ft={};if(wt&&(Ft.placement=wt),$t&&["hover","click"].includes($t)?Ft.trigger=$t:Ft.trigger="hover",kt&&(Ft.zIndex=Number(kt)),It&&(["1","true"].includes(It)?Ft.transition=!0:Ft.transition=It),Pt&&(Ft.to=Pt),Rt){const Ut=Rt.split(",");Ut.length===2?Ft.delay=[Number(Ut[0]),Number(Ut[1])]:Ft.delay=Number(Ut[0])}this.setup(Le,Ft)}}disconnectedCallback(){this.disposables.dispose(),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=void 0),this.reference=null}}customElements.get("bili-popover")||customElements.define("bili-popover",c$4);const r$1=class pu extends HTMLElement{constructor(){super(),this.disposables=p$3(),this.state={label:"",value:"",name:"",disabled:!1,checked:!1},this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-radio-size: 16px;
            --bili-radio-font-size: 14px;
            --bili-radio-border-width: 1px;
            --bili-radio-checked-color: var(--brand_blue);
            --bili-radio-margin-inline-end: 8px;

            display: inline-flex;
            align-items: baseline;
            padding: 0;
            margin: 0;
            cursor: pointer;
            margin-inline-end: var(--bili-radio-margin-inline-end);
          }
          #input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            display: inline-block;
            outline: none;
            cursor: pointer;
            align-self: center;
            border-radius: 50%;
            width: var(--bili-radio-size);
            height: var(--bili-radio-size);
          }
          #input input {
            bottom: 0;
            left: 0;
            margin: 0;
            opacity: 0;
            outline: none;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
          }
          #input #inner {
            display: block;
            background-color: var(--bg1_float);
            border: 1px solid var(--text4);
            border-radius: 50%;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
          }
          #input[checked] #inner {
            border-color: var(--bili-radio-checked-color);
          }
          #input[checked] #inner::after {
            transform: translate(-50%,-50%) scale(1);
          }
          #input #inner::after {
            width: 50%;
            height: 50%;
            background-color: var(--bili-radio-checked-color);
            border-radius: 50%;
            content: "";
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%) scale(0);
            transition: transform .15s ease-in;
          }
          #label {
            margin-left: 8px;
            font-size: var(--bili-radio-font-size);
            color: var(--text2);
          }
        </style>
        <span id="input">
          <input type="radio">
          <span id="inner"></span>
        </span>
        <slot>
          <span id="label"></span>
        </slot>
      `)}static get observedAttributes(){return["name","value","label","disabled","checked"]}connectedCallback(){if(this.shadowRoot){const Le=this.getAttribute("label");if(pu.observedAttributes.forEach(wt=>{const $t=this.getAttribute(wt);$t!==null&&(wt==="value"&&!Le&&this.updateAttribute("label",$t),this.updateAttribute(wt,$t))}),this.shadowRoot&&this.disposables.addEventListener(this,"click",()=>{if(!(this.state.disabled||this.state.checked))if(this.updateInput("checked",!0),this.state.name){const wt={name:this.state.name,value:this.state.value},$t=new CustomEvent("bili-radio-change",{detail:wt});document.dispatchEvent($t)}else{const wt=new CustomEvent("change",{detail:{value:this.state.value}});this.dispatchEvent(wt)}}),this.state.name){const wt=$t=>{const kt=$t.detail;kt&&kt.name===this.state.name&&kt.value!==this.state.value&&this.updateInput("checked",!1)};document.addEventListener("bili-radio-change",wt),this.disposables.add(()=>{document.removeEventListener("bili-radio-change",wt)})}}}disconnectedCallback(){this.disposables.dispose()}updateInput(Le,wt){var $t,kt;const It=($t=this.shadowRoot)==null?void 0:$t.querySelector("#input"),Rt=(kt=this.shadowRoot)==null?void 0:kt.querySelector("input");if(!(!It||!Rt))switch(Le){case"value":Rt.setAttribute(Le,wt);break;case"disabled":case"checked":wt?(It.setAttribute(Le,""),Rt.setAttribute(Le,"")):(It.removeAttribute(Le),Rt.removeAttribute(Le));break}}updateLabel(Le){var wt;const $t=(wt=this.shadowRoot)==null?void 0:wt.querySelector("#label");$t&&($t.textContent=Le)}updateAttribute(Le,wt){switch(Le){case"name":this.state.name=wt;break;case"label":this.updateLabel(wt),this.state.label=wt;break;case"value":this.updateInput(Le,wt),this.state[Le]=wt;break;case"disabled":case"checked":this.updateInput(Le,wt==="true"),this.state[Le]=wt==="true";break}}attributeChangedCallback(Le,wt,$t){this.updateAttribute(Le,$t)}};r$1.elName="bili-radio";let s$3=r$1;customElements.get(s$3.elName)||customElements.define(s$3.elName,s$3);function b$2(me){typeof queueMicrotask=="function"?queueMicrotask(me):Promise.resolve().then(me).catch(Le=>setTimeout(()=>{throw Le}))}function m$1(me,Le,wt,$t){me.removeEventListener(Le,wt,$t)}function g(me,Le,wt,$t){return me.addEventListener(Le,wt,$t),()=>{m$1(me,Le,wt,$t)}}class l$2{constructor(){this.disposables=[]}addEventListener(Le,wt,$t,kt){return this.add(g(Le,wt,$t,kt))}mutationObserve(Le,wt,$t){let kt=!1;const It=Pt=>{kt||(kt=!0,Pt.disconnect())},Rt=new MutationObserver(wt);return Rt.observe(Le,$t),()=>It(Rt)}requestAnimationFrame(...Le){const wt=requestAnimationFrame(...Le);return this.add(()=>cancelAnimationFrame(wt))}nextFrame(...Le){return this.requestAnimationFrame(()=>this.requestAnimationFrame(...Le))}setTimeout(...Le){const wt=setTimeout(...Le);return this.add(()=>clearTimeout(wt))}microTask(...Le){const wt={current:!0};return b$2(()=>{wt.current&&Le[0]()}),this.add(()=>{wt.current=!1})}style(Le,wt,$t){const kt=Le.style.getPropertyValue(wt);return Object.assign(Le.style,{[wt]:$t}),this.add(()=>{Object.assign(Le.style,{[wt]:kt})})}group(Le){const wt=new l$2;return Le(wt),this.add(()=>wt.dispose())}add(Le){return this.disposables.push(Le),()=>{const wt=this.disposables.indexOf(Le);wt>=0&&this.remove(wt,1)}}remove(Le,wt){const $t=this.disposables.splice(Le,wt!=null?wt:this.disposables.length);for(const kt of $t)kt()}dispose(){this.remove(0)}}function v$1(){return new l$2}const p$2=typeof window<"u",f$1=1e3;p$2&&(window.__BILI_POPPER_ZINDEX__||(window.__BILI_POPPER_ZINDEX__=f$1));class c$3 extends HTMLElement{constructor(){super(),this.disposables=v$1(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
        <style>
          :host {
            --bili-rich-text-display: block;
            --bili-rich-text-white-space: pre-line;
            --bili-rich-text-word-break: break-word;
            --bili-rich-text-icon-vertical-align: sub;
            --bili-rich-text-link-color: var(--text_link, #008AC5);
            --bili-rich-text-link-color-hover: var(--brand_blue, #00AEEC);
            --icon-vertical-align: var(--bili-rich-text-icon-vertical-align);
            color: var(--bili-rich-text-color, var(--text1, #18191C));
            font-size: var(--bili-rich-text-font-size, 15px);
            line-height: var(--bili-rich-text-line-height, 21px);
            font-family: var(--bili-font-family);
          }
          #contents {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            display: var(--bili-rich-text-display);
            white-space: var(--bili-rich-text-white-space);
            word-break: var(--bili-rich-text-word-break);
            -webkit-font-smoothing: antialiased;
          }
          #contents a {
            color: var(--bili-rich-text-link-color);
            text-decoration: none;
            background-color: transparent;
            cursor: pointer;
          }

          #contents a:hover {
            color: var(--bili-rich-text-link-color-hover);
          }
          
          #contents a bili-icon {
            vertical-align: var(--bili-rich-text-icon-vertical-align);
          }
          #contents img, #contents a i {
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            vertical-align: var(--bili-rich-text-icon-vertical-align);
          }
        </style>
        <p id="contents"></p>
      `)}get contentsElement(){return this.shadowRoot.querySelector("#contents")}connectedCallback(){this.disposables.addEventListener(this.contentsElement,"click",Le=>{const wt={...Le.target.dataset};Object.keys(wt).length!==0&&this.dispatchEvent(new CustomEvent("text-click",{detail:wt}))})}disconnectedCallback(){this.disposables.dispose()}get contents(){return this.shadowRoot.querySelector("#contents")}styleMap(Le){return Le?Object.keys(Le).reduce((wt,$t)=>Le[$t]?wt+`${$t}:${Le[$t]};`:wt,""):""}renderToString(Le,wt,$t){let kt="";return wt&&(kt=Object.keys(wt||{}).reduce((It,Rt)=>wt[Rt]?It+` ${Rt}="${wt[Rt]}"`:It,"")),`<${Le}${kt}${Le==="img"?"/>":`>${$t||""}</${Le}>`}`}setContents(Le){const wt=Le.map($t=>{const kt={style:this.styleMap($t.style),...$t[$t.tag]||{}},It=$t.dataset;if(It){const Pt={};Object.assign(kt,Object.keys(It).reduce((Ft,Ut)=>{const Xt=It[Ut];return Xt&&(Ft[`data-${Ut}`]=Xt),Ft},Pt))}let Rt="";return $t.html?this.renderToString($t.tag,kt,$t.html):(kt.text&&(kt.icon&&(/^(https?:)?\/\//.test(kt.icon)?Rt+=this.renderToString("img",{src:kt.icon,loading:"lazy",style:"width:var(--icon-width);height:var(--icon-height);vertical-align:var(--icon-vertical-align);"}):Rt+=this.renderToString("i",{class:"holder "+kt.icon}),delete kt.icon),Rt+=kt.text,delete kt.text),this.renderToString($t.tag,kt,Rt))}).join("");this.contents.innerHTML=wt,setTimeout(()=>{const $t=Array.from(this.contents.getElementsByTagName("i"));if($t.length){const kt=$t[0].getBoundingClientRect().width.toString();$t.forEach(It=>{const Rt=document.createElement("bili-icon");Rt.setAttribute("size",kt),Rt.setAttribute("icon",It.classList[1]),It.parentElement.replaceChild(Rt,It)})}},0)}}c$3.elName="bili-rich-text";customElements.get(c$3.elName)||customElements.define(c$3.elName,c$3);var K$1=function(me,Le){typeof window>"u"||(window.__BILI_X_ENGINE_SCRIPT_CACHE__||(window.__BILI_X_ENGINE_SCRIPT_CACHE__={}),window.__BILI_X_ENGINE_SCRIPT_CACHE__[me]=Le)},G$1=function(me){return typeof window>"u"||!window.__BILI_X_ENGINE_SCRIPT_CACHE__?null:window.__BILI_X_ENGINE_SCRIPT_CACHE__[me]||null},_$1=function(me){typeof window>"u"||window.__BILI_X_ENGINE_SCRIPT_CACHE__&&typeof window.__BILI_X_ENGINE_SCRIPT_CACHE__[me]<"u"&&delete window.__BILI_X_ENGINE_SCRIPT_CACHE__[me]},T=function(me,Le){if(typeof window>"u")return Promise.reject(new Error("window is not defined"));me=me.replace(/^https?:\/\//,"//");var wt=me,$t=G$1(wt);if($t!=null&&$t.promise)return $t.promise;var kt=new Promise(function(It,Rt){var Pt=document.createElement("script");Pt.src=me,Le!=null&&Le.behavior&&Pt.setAttribute(Le.behavior,""),Pt.onload=function(){var Ft=window;if(Le.lib)return Ft[Le.lib]?It(Ft[Le.lib]):Rt(new Error('Failed to access library "'+Le.lib+'" from '+me));It(null)},Pt.onerror=function(){Rt(new Error("Failed to load "+me)),document.head.removeChild(Pt)},document.head.appendChild(Pt)});return K$1(wt,{promise:kt,lib:Le==null?void 0:Le.lib}),kt.then(function(){(Le==null?void 0:Le.cache)===!1&&_$1(wt)}).catch(function(){(Le==null?void 0:Le.cache)===!1&&_$1(wt)}),kt},X$1=function(){try{return Promise.resolve(T("//s1.hdslb.com/bfs/seed/jinkela/short/bili-user/index.js",{lib:"__BiliUser__"}))}catch(me){return Promise.reject(me)}},z=function(){try{var me=function(){return Promise.resolve(window.__BiliUser__.get())},Le=function(){if(!window.__BiliUser__)return Promise.resolve(X$1()).then(function(){})}();return Promise.resolve(Le&&Le.then?Le.then(me):me(Le))}catch(wt){return Promise.reject(wt)}},q$1=function(me){if(window.Unios)return Promise.resolve(window.Unios);var Le=window.__LOAD_REQUEST_TYPE__||me||"web";return T("//s1.hdslb.com/bfs/seed/jinkela/short/unios/"+Le+".min.js",{lib:"Unios"})},F$1=function(me){try{return window.Unios?Promise.resolve(window.Unios.request(me)):Promise.resolve(q$1()).then(function(){return window.Unios.request(me)})}catch(Le){return Promise.reject(Le)}},J$1=function(){try{return window.BToast?Promise.resolve(window.BToast):Promise.resolve(T("//s1.hdslb.com/bfs/seed/jinkela/short/webui/toast/index.js",{lib:"BToast"}))}catch(me){return Promise.reject(me)}},Z$1=function(me,Le,wt){try{return window.BToast?Promise.resolve(window.BToast.show(me,Le,wt)):Promise.resolve(J$1()).then(function(){return window.BToast.show(me,Le,wt)})}catch($t){return Promise.reject($t)}};function Y$1(me){return new Promise((Le,wt)=>{F$1({url:"//api.bilibili.com/x/web-interface/card",params:{mid:me,photo:"true"}}).then($t=>{if($t.code!==0||!$t.data)return wt(new Error($t.message||"get card data error"));Le($t.data)}).catch(wt)})}let b$1="";function V(){var me;return b$1||(b$1=((me=document.querySelector("meta[name=spm_prefix]"))==null?void 0:me.getAttribute("content"))||"",b$1)}function W$1(me,Le){return new Promise((wt,$t)=>{F$1({url:"//api.bilibili.com/x/relation/modify",method:"POST",data:{act:Le?1:2,fid:me,spmid:V(),re_src:0},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(kt=>{if(kt.code!==0)return $t(new Error(kt.message||"modify relation error"));wt(kt)}).catch($t)})}function C(me,Le,wt){return Le in me?Object.defineProperty(me,Le,{value:wt,enumerable:!0,configurable:!0,writable:!0}):me[Le]=wt,me}function $(me){var Le=Object.keys(me);if(Le.length===0)return"";var wt="";return Le.forEach(function($t){me[$t]!==void 0&&(wt+="".concat($t,":").concat(me[$t],";"))}),wt}function L(me){return!(!me||typeof me!="object"||typeof me.render_scheme>"u"||!me.colors_info||!me.colors_info.color||!Array.isArray(me.colors_info.color))}var S$1="to top right";function B$1(me,Le){return"linear-gradient(".concat(me,",").concat(Le,")")}function ee$1(me){return me[0]==="#"?me:"#".concat(me)}function te$1(me){var Le=me.length,wt=[],$t=[],kt=function(It,Rt){return"".concat(ee$1(It)," ").concat(Rt/(Le-1)*100,"%")};return me.forEach(function(It,Rt){wt.push(kt(It.color_day,Rt)),$t.push(kt(It.color_night,Rt))}),{light:B$1(S$1,wt.join(",")),dark:B$1(S$1,$t.join(","))}}function ie$1(){return{"background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}function re$1(me,Le){Le=Le||{};var wt=Le.theme||"",$t=Le.stringType||!1,kt="",It="";if(L(me)){var Rt=me.render_scheme,Pt=me.colors_info.color;if(Rt!==1&&Rt!=="Colorful"||!Pt||Pt.length===0)return null;var Ft=te$1(Pt);kt=Ft.light,It=Ft.dark}if(kt&&It){var Ut={base:ie$1(),theme:{light:{"background-image":kt},dark:{"background-image":It}}};if(["light","dark"].includes(wt)){var Xt=Object.assign({},Ut.base,Ut.theme[wt]);return $t?$(Xt):Xt}if(Le.variable&&typeof Le.variable=="string"&&/^--[a-z]/.test(Le.variable)){var Jt;Ut.variable=(Jt={},C(Jt,"".concat(Le.variable,"-light"),kt),C(Jt,"".concat(Le.variable,"-dark"),It),Jt)}return Ut}return null}var ne$1=function(me){return me[me.DEFAULT=0]="DEFAULT",me[me.PAGE=1]="PAGE",me[me.IFRAME=2]="IFRAME",me[me.SITE=3]="SITE",me}({}),x$1=!1;function oe$1(){return x$1===!1&&(x$1=typeof window<"u"),x$1}function ae$1(me,Le){if(!(me instanceof Le))throw new TypeError("Cannot call a class as a function")}function v(me){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Le){return typeof Le}:function(Le){return Le&&typeof Symbol=="function"&&Le.constructor===Symbol&&Le!==Symbol.prototype?"symbol":typeof Le},v(me)}function se$1(me,Le){if(v(me)!="object"||!me)return me;var wt=me[Symbol.toPrimitive];if(wt!==void 0){var $t=wt.call(me,Le||"default");if(v($t)!="object")return $t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Le==="string"?String:Number)(me)}function P$1(me){var Le=se$1(me,"string");return v(Le)=="symbol"?Le:Le+""}function R(me,Le){for(var wt=0;wt<Le.length;wt++){var $t=Le[wt];$t.enumerable=$t.enumerable||!1,$t.configurable=!0,"value"in $t&&($t.writable=!0),Object.defineProperty(me,P$1($t.key),$t)}}function le(me,Le,wt){return Le&&R(me.prototype,Le),wt&&R(me,wt),Object.defineProperty(me,"prototype",{writable:!1}),me}function k$1(me,Le,wt){return(Le=P$1(Le))in me?Object.defineProperty(me,Le,{value:wt,enumerable:!0,configurable:!0,writable:!0}):me[Le]=wt,me}var de$1=function(){function me(Le){var wt=this;ae$1(this,me),k$1(this,"all",new Map),k$1(this,"weakMap",new WeakMap),k$1(this,"defaultEventTarget",void 0),Le?Le instanceof Element||Le instanceof Document?this.defaultEventTarget=Le:this.defaultEventTarget=document.querySelector(Le)||document:this.defaultEventTarget=document,this.all.clear=function(){wt.all.forEach(function($t,kt){$t.forEach(function(It){wt.off(kt,It)})}),wt.all.clear()}}return le(me,[{key:"on",value:function(Le,wt,$t){this.all.has(Le)||this.all.set(Le,[]),this.weakMap.has(wt)||this.weakMap.set(wt,[]);var kt=$t||this.defaultEventTarget,It=kt.addEventListener,Rt=function(Pt){wt({sourceType:ne$1.PAGE,customEvent:Pt,event:Le,payload:Pt.detail,samePage:!0,emitter:It})};this.all.get(Le).push(wt),this.weakMap.get(wt).push(Rt),It(Le,Rt)}},{key:"off",value:function(Le,wt,$t){var kt=this,It=$t||this.defaultEventTarget,Rt=It.removeEventListener;if(!wt){var Pt;(Pt=this.all.get(Le))===null||Pt===void 0||Pt.forEach(function(Ut){var Xt=kt.weakMap.get(Ut);Xt.forEach(function(Jt){Rt(Le,Jt)})}),this.all.delete(Le);return}var Ft=this.weakMap.get(wt);Ft.forEach(function(Ut){Rt(Le,Ut)})}},{key:"emit",value:function(Le,wt,$t){var kt=new CustomEvent(Le,{detail:wt}),It=$t||this.defaultEventTarget,Rt=It.dispatchEvent;Rt(kt);var Pt=new CustomEvent("*",{detail:wt});Rt(Pt)}}]),me}(),ce$1=function(){var me=null;return function(){var Le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return oe$1()?me||(me=new de$1(Le),me):(console.error("useEvent must be used in the browser environment"),null)}}(),p$1=(me=>(me[me.DEFAULT=-1]="DEFAULT",me[me.NOT_FOLLOW=0]="NOT_FOLLOW",me[me.QUIET=1]="QUIET",me[me.ONE_WAY=2]="ONE_WAY",me[me.TWO_WAY=6]="TWO_WAY",me[me.BLOCK=128]="BLOCK",me))(p$1||{}),w=(me=>(me.OPEN_BOOKMARK="follow.openBookmark",me.TRIGGER_SETTING_BOOKMARK="follow.triggerSettingBookmark",me.TRIGGER_DELETE_BOOKMARK="follow.triggerDeleteBookmark",me.TRIGGER_REMOVE_FANS="follow.triggerRemoveFans",me.CREATED_USER_BOOKMARK="follow.createdUserBookmark",me.SET_USER_BOOKMARK="follow.setUserBookmark",me.REMOVED_USER_FANS="follow.removedUserFans",me.CHANGED_USER_RELATION="follow.changedUserRelation",me))(w||{}),ue=Object.defineProperty,he$1=Object.getOwnPropertyDescriptor,c$2=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?he$1(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&ue(Le,wt,kt),kt};const fe$1="//i0.hdslb.com/bfs/face/member/noface.jpg",U$1=300,E$1=(me,Le=1)=>(Le=Math.max(0,Le),typeof me!="number"&&(me=Number(me)),isNaN(me)?0:me>1e8?(me/1e8).toFixed(Le)+"\u4EBF":me>1e4?(me/1e4).toFixed(Le)+"\u4E07":me),I$1=366,D$1=85;let s$2=class extends s$4{constructor(){super(...arguments),this.event=ce$1(),this.userData=null,this.uid="",this.data=null,this.showSpinner=!1,this.isFollowing=!1,this.disposables=p$3(),this.cacheData={},this.showTimer=null,this.hideTimer=null,this.lastShowEl=null}get backgroundImage(){var me;return utils$2.getBmgSrcNext(((me=this.data)==null?void 0:me.space.l_img)||"",{w:I$1,h:D$1,c:!0,dpr:2})}get faceSrc(){var me;return utils$2.getBmgSrcNext(((me=this.data)==null?void 0:me.card.face)||fe$1,{w:48,h:48,dpr:2})}get ovType(){var $t;var me,Le,wt;return($t=(wt=(Le=(me=this.data)==null?void 0:me.card)==null?void 0:Le.Official)==null?void 0:wt.type)!=null?$t:-1}get ovText(){var me;return this.ovType>-1?`bilibili${this.ovType===1?"\u673A\u6784":"\u4E2A\u4EBA"}\u8BA4\u8BC1\uFF1A${(me=this.data)==null?void 0:me.card.Official.title}`:""}get name(){var me;return this.data?(me=this.data)==null?void 0:me.card.name:""}get nameRenderStyle(){var me,Le,wt;if(!((Le=(me=this.data)==null?void 0:me.card)!=null&&Le.name_render))return"";const $t=re$1((wt=this.data)==null?void 0:wt.card.name_render,{variable:"--name-render-bg"});return $t!=null&&$t.variable?$t.variable:null}get nameStyle(){var me;if(!((me=this.data)!=null&&me.card))return null;if(this.nameRenderStyle)return this.nameRenderStyle;let Le="";const{vip:wt}=this.data.card;return wt.status===1&&wt.nickname_color&&(Le=wt.nickname_color),Le?{color:Le}:null}get gender(){let me="";return this.data&&["\u7537","\u5973"].includes(this.data.card.sex)&&(me=this.data.card.sex==="\u7537"?"male":"female"),me}get genderImg(){return utils$2.getBmgSrcNext(`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/gender_${this.gender}.png`,{dpr:2})}get level(){const me={img:"",url:"//www.bilibili.com/html/help.html#k_5"};if(!this.data)return me;const{is_senior_member:Le,level_info:{current_level:wt}}=this.data.card;return me.img=s$2.getLevelImgSrc(wt,!!Le),me}get vipLabel(){var me,Le;const{vip:wt}=((me=this.data)==null?void 0:me.card)||{};return!wt||!((Le=wt.label)!=null&&Le.text)?null:{img:wt.label.img_label_uri_hans_static||"",text:wt.label.text,style:{backgroundColor:wt.label.bg_color,color:wt.label.text_color}}}get stats(){var me,Le,wt,$t,kt;return[{key:"follow",count:String(E$1(((Le=(me=this.data)==null?void 0:me.card)==null?void 0:Le.attention)||0)),url:this.getSpaceLink("follow"),label:"\u5173\u6CE8"},{key:"fans",count:String(E$1((($t=(wt=this.data)==null?void 0:wt.card)==null?void 0:$t.fans)||0)),url:this.getSpaceLink("fans"),label:"\u7C89\u4E1D"},{key:"like",count:String(E$1(((kt=this.data)==null?void 0:kt.like_num)||0)),label:"\u83B7\u8D5E"}]}get signText(){var me;return(me=this.data)==null?void 0:me.card.sign}appendToParent(me){let Le=document.body;if(me){const wt=document.querySelector(me);wt&&(Le=wt)}Le.appendChild(this)}setup(me){const Le=this.disposables.addEventListener(me,"mouseenter",this.refMouseEnter.bind(this)),wt=this.disposables.addEventListener(me,"mouseleave",this.refMouseLeave.bind(this));return()=>{Le(),wt()}}setPosition(me){const{innerWidth:Le}=window,{width:wt,bottom:$t,left:kt,top:It}=me.getBoundingClientRect(),Rt=I$1,Pt=290;let Ft=kt+wt/2;Le-Ft<Rt&&(Ft-=Rt),this.style.left=`${Ft}px`,It>Pt?(this.style.top="",this.style.bottom=`${window.innerHeight-It}px`):(this.style.bottom="",this.style.top=`${$t}px`),this.style.zIndex=`${I$3()}`}clearTimer(me){if(me==="show"){this.showTimer&&(clearTimeout(this.showTimer),this.showTimer=null);return}this.hideTimer&&(clearTimeout(this.hideTimer),this.hideTimer=null)}refMouseEnter(me){const Le=me.target;if(this.clearTimer("hide"),this.showTimer){if(this.lastShowEl===Le)return;this.clearTimer("show")}this.lastShowEl=Le,this.showTimer=window.setTimeout(()=>{this.showTimer=null,this.show(Le)},U$1)}hide(){this.hideTimer=window.setTimeout(()=>{this.visible(!1),this.lastShowEl=null,this.hideTimer=null},U$1)}refMouseLeave(me){me.target===this.lastShowEl&&(this.clearTimer("show"),this.hide())}visible(me){this.style.display=me?"block":""}async show(me){var Le;this.parentElement||this.appendToParent(me.getAttribute("data-user-profile-parent")||"");const wt=me.getAttribute("data-user-profile-id");if(!wt){this.uid="";return}this.uid=wt,this.setPosition(me),this.visible(!0);try{const $t=this.cacheData[wt];if($t)this.data=$t;else{this.showSpinner=!0;const kt=await Y$1(wt);this.cacheData[wt]=kt,this.data=kt}this.isFollowing=((Le=this.data)==null?void 0:Le.following)||!1}catch($t){console.warn($t.message)}this.showSpinner=!1}connectedCallback(){super.connectedCallback(),z().then(me=>{this.userData=me.data||null}),this.disposables.addEventListener(this,"mouseenter",()=>{this.clearTimer("hide")}),this.disposables.addEventListener(this,"mouseleave",()=>{this.hide()}),this.event.on(w.CHANGED_USER_RELATION,me=>{var Le,wt;if(!me.payload)return;const{mineId:$t,targetId:kt,attribute:It}=me.payload;if($t&&(Le=this.userData)!=null&&Le.mid&&String($t)!==String(this.userData.mid))return;const Rt=[p$1.ONE_WAY,p$1.TWO_WAY,p$1.QUIET].includes(It);this.uid===String(kt)&&(this.isFollowing=Rt),((wt=this.data)==null?void 0:wt.card.mid)===String(kt)&&(this.data.following=Rt),this.cacheData[kt]&&(this.cacheData[kt].following=Rt)}),this.disposables.add(()=>{this.event.off(w.CHANGED_USER_RELATION)})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.cacheData={},this.lastShowEl=null,this.userData=null}handleJumpMsg(){window.open(`https://message.bilibili.com/#/whisper/mid${this.uid}`)}getSpaceLink(me){if(!this.data)return"";const Le=`//space.bilibili.com/${this.uid}`;switch(me){case"follow":return`${Le}/fans/follow`;case"fans":return`${Le}/fans/fans`;default:return Le}}async handleFollow(){var me;try{await W$1(this.uid,!this.isFollowing),this.isFollowing=!this.isFollowing,this.data&&(this.data.following=this.isFollowing),this.event.emit(w.CHANGED_USER_RELATION,{mineId:((me=this.userData)==null?void 0:me.mid)||"",targetId:this.uid,attribute:this.isFollowing?p$1.ONE_WAY:p$1.NOT_FOLLOW,preAttribute:this.isFollowing?p$1.NOT_FOLLOW:p$1.ONE_WAY})}catch(Le){Z$1(Le.message||"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}}ovIconTemplate(){return x$3`<i id="ov-icon" class="ov-${this.ovType}"></i>`}ovTemplate(){return x$3`<div id="ov">
      ${this.ovIconTemplate()}
      <span>${this.ovText}</span>
    </div>`}vipLabelTemplate(){return this.vipLabel?this.vipLabel.img?x$3`<div id="vip"><img src="${this.vipLabel.img}" /></div>`:x$3`<div id="vip">
      <label style="${o$3(this.vipLabel.style)}"><span>${this.vipLabel.text}</span></label>
    </div>`:""}viewTemplate(){return x$3`
      <div id="view">
        <div
          id="bg"
          style="${o$3({backgroundImage:`url(${this.backgroundImage})`})}"
        ></div>
        <a href="${this.getSpaceLink("")}" target="_blank" id="avatar">
          <img id="face" src="${this.faceSrc}" />
          ${this.ovType>-1?this.ovIconTemplate():""}
        </a>
        <div id="body">
          <div id="title">
            <a id="name" class="${this.nameRenderStyle?"render-style":""}" style="${this.nameStyle?o$3(this.nameStyle):""}"
              >${this.name}</a
            >
            ${this.gender?x$3`<div id="gender"><img width="16" height="16" src="${this.genderImg}" /></div>`:""}
            ${this.level.img?x$3`<a id="level" href="${this.level.url}" target="_blank"><img src="${this.level.img}" /></a>`:""}
            ${this.vipLabelTemplate()}
          </div>
          <div id="content">
            <div id="stats">
              ${this.stats.map(me=>me.url?x$3`<a id="${me.key}" href="${me.url}" target="_blank"><span>${me.count}</span>${me.label}</a>`:x$3`<a id="${me.key}"><span>${me.count}</span>${me.label}</a>`)}
            </div>
            ${this.ovType>-1?this.ovTemplate():""}
            <div id="sign">${this.signText}</div>
          </div>
          <div id="action">
            <button id="follow" class="${this.isFollowing?"active":""}" @click=${this.handleFollow}>
              <bili-icon icon="BDC/plus_add_line/2" size="16"></bili-icon>
              <span>${this.isFollowing?"\u5DF2\u5173\u6CE8":"\u5173\u6CE8"}</span>
            </button>
            <button id="chat" @click=${this.handleJumpMsg}>发消息</button>
          </div>
        </div>
      </div>
    `}spinnerTemplate(){return x$3`<div id="spinner">正在加载中...请稍候</div>`}fallbackTemplate(){return x$3`<div id="fallback">加载出错，请稍后再试</div>`}render(){return x$3`<div id="wrap">
      ${this.showSpinner?this.spinnerTemplate():this.data?this.viewTemplate():this.fallbackTemplate()}
    </div>`}static getLevelImgSrc(me,Le){return`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/level_${Le?"h":me}.svg`}};s$2.styles=i$6`
    :host {
      width: ${I$1}px;
      display: none;
      position: fixed;
    }

    #wrap {
      background-color: var(--bg1_float);
      border-radius: 8px;
      box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.1);
      color: var(--text3);
      font-size: 12px;
      width: 100%;
      font-family: var(--bili-font-family);
      -webkit-font-smoothing: antialiased;
    }
    #spinner {
      padding: 12px;
    }

    #bg {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px 8px 0 0;
      height: ${D$1}px;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 366px;
    }

    #avatar {
      border-radius: 50%;
      height: 48px;
      left: 10px;
      position: absolute;
      top: 95px;
      width: 48px;
    }

    #avatar #face {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    #avatar #ov-icon {
      background-color: var(--text_white);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      height: 14px;
      position: absolute;
      right: 0;
      top: 34px;
      width: 14px;
    }
    #ov-icon.ov-0 {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASZSURBVHgBxVptThNBGJ5Wo4FAgjGBSCSuMZHon5Z4AMoN4ATACVpOwHIC6gkoJ6A3KJygNDH+8Icu0YhUCU0wEAxmfZ/d2XZnZ/ZzpvVJhk1nttPn/ZyZdygxA3Bdd44e69Sq1F7w5xxvARzeetS61E5KpZLD/hdAmtoutY5bHF1qm9QsNimEiF+5ZnEwdkHGRDyK3TycSlle4po5Yr5vq3F9zNhtjz9PGbsfMPZ34I89oFB4TFM8ojZFU8yuUquxBDjU1rLESKoARH6THk0mBqQPkPz5nrGL5ohsVkAYCPFs1xdOBibcJiHaSdMkCsDNaUsDIP5jzyduAk+3kgSxSYi9uK/GChBLvk8a/27n13gaYJFFm4TZVI3GCqEUgMgjpx9JA992zGk9DvMNxpb2VSNbJMRhtFMSgAcsFpqRz8NlPm/4AToJTFOgv+74wT8CTL4SDWyVAF/oYQmdH1f8zDJJIMAhhIhTEmAl3FEOf+B+bwlfgdtMmjwAa3/difZWiaMd7hgKwF1HGGSXLTM+jwzzzo0L0Hj0m37SEFF3/b2Xh7AFbOG1O4eyTWz2yg6QR3YpCjnjgXwj+OAJwLUvquecvvjHYVqIkr/psdwAeVmRQysEFqgJw9D+5SHTQpQ8iBSNpX4z1gqBAHXhC9C+DubrsttcnzAtXEixsIo/Ze4+VWM/hkBdUgS+7hrSl+aswY1ggZr0Q0V9H+StlnpMNxXDhWQlrEMAM9pPIg/cGFhL5CRQhQAVoeu2y3IjC3kTm7/fx9EeCwJYQtfdGcuFNPKAqZVctmKlhDOc0HX6JLu2cLp6m8FimO9+kDx+tp3uZtjcVa/CPYOHysmyAOSXO9nexQ+LO8tikLnNlVkR4PCx3DFDCsii/RhAAFGsLKRw9Ls3EJQAyP9qZXtXwQ0uBCZzwktpboR8/OFl8jsI7LTdZx7yACwvwoEFRNtNV5gRpM2TlzwgH/o9AcS8ObPGtAErTlXjx3FIyksekOfsjccCSeTPNcoxs6vRni4EaIsv1fSzy3SMACCPA0oRBIUwESdlOiQjYo+F7vkG04KsKT3y3py1aA8O+E6wDog7uIU600LUArrkgUWp5uv5YTn0YZQ74UJFrQBTh9OdCfIoPcop1FO6JwB3I/HIA4mLxEJY+ybIeyVHSfutoMAV3krIVljMVar3ESyCJsgDOJrK2h+e8oXKHC8aiaxRXOoXTHu6wNlaPp7ukfbt4IOqtIj9sRiFn9YmVxcNoN6qO0Re2MOodqNUxY1s8F4dxef2cWCmptqqg5O0TZAE4MEhFiURD2+6+utDFsBt1Fv1bdWVk/I8QC+2WChQhkDd3jpQBZU+QPj5vrok4/t9WzWQdsVks2hQAyi7IMPoVu8CBIUwddoWgjaKLJd86/QgtSsu+QJBUIrJW0vyFksivtCIIw6f3+HeEIs816yIKiv2JWQpCIIKBGqrECh8zYqGRIA9zVQl7ZoVO+QN4/+KAJdyx4ur6AWGccAa1FquWXjE3dDFxdjBBdly/X/YKIqOLvFMMZBFGOYXibHa4UhnMTFeBrzBt8/4s803kVr4B9ZWrx2gQRFMAAAAAElFTkSuQmCC);
    }
    #ov-icon.ov-1 {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT3SURBVHgBxVq9bxxFFH/3kVzwWY5FAUYK4iK7oEDyhhIh4VSkTEQaqnMKKpCCK2hQLqJKBUhQUeTcx0rKUBn/A/gsUSBxUS6iiJUmTnSX2Mbn5f3mZk+zs7MfNzN3/KTx6t7e7f7e18ybNy6RB4RhuMiXqzwCHu/J66IcEXpy7PHY5bFTKpV69H8BpHnc4rEd2mOXR5NHg2YFhfjz0C/uTl2RKRHXcWsSTqUiX5KWuU+j2Dai82JI3VdD2ntxQt3BkPpDov5JKO7NV0u0dJbHuTIt1ysULFQpOF/JeKPIlctFciRXASbf5MuPFE9IARDcenpM93hEZItiqVYWSjQv1IRiBhzwuMFKPMh6TqYC0p0tXQ6ym/8cCeI+cOWtM1mKtFiJ22m/TVUgjTws3mbyk1o8D/BI892aUMaAVCWMCjB5zOn3dfkvjw+9WT0N1985S19ePGe6tc5KbOrChAIyYbHQjGMe1v7ur1fUeTmkWWBlrkw/fFAXya8AOXFJT2yTAo/50lBlX3T6PMOc0iwRLFSEEho6rMAlVRDLGhn3DVWGsJk1eQDexrs1BMyxpQrGCsjQid18+OzYS8wjObc/WqBPzQmaintPje+/GY5qLwHVAy31W/tHp2KqdAXIr/MACq2aGjaTMx7Ifx19EApI6zf1H+4fuU2VKnmg2588FKM1R8PYC5EH1tS7sP7DZ/+SC3TyIIJSwwaGlX7shUiBm+pd19D5jOdylTyAWskFhlz4BH/KMnyC+MtOyBZI1K8MC1Hnpf0zga2kAmsII3hgLfYitpRt7IP8tytvGO89Grh5ACFkMOxVKBC3vqWlssgDPtYSwzMCKLCqSmwslUse+wMPxZ/BAw0o0FAl+4eTvSiPPNAd+KmhHg0SHlitkq7AcXFXo+jKIw98/OYZCj6spt7vD0O68/fr3DDD9zQsJp5a1NVRxVgEqCq1ytIKBm6LZbIANh+Gctcad7qvrZMcChyogiKklmolbzsykC+66pu4IYSgwLi6m6/AVZnPEaXu53/0M7/zDefGlZzqcxLyAAynoQcPdFTJSr1CPrBSz47OSckDb9cSzxQKPFElq+er5Aq4OssQ2KjYFIuGZ+4lPTBnlddU9Bku7RhsMzXs4k2xxlHAHnCdXZZTrA/ybctKd9QIS0THTpk3yUji31UpymEXGF7kRB5YTbYiscHvRb7eUe9cd1RADyFX8sD6hZouQrtzvKHBh/F6gBCy9QJcrbYIfZBHvWVoOwqjC6kMo5/Uu9hR2eTCct0veRjEYP121OBS1Up4oZn8YS4GcoX2QR7A3tpg/XGfNGZi2TSKHTD8zHP21pT7oWlAGBu2p7fZ+q3og6m1iL5obJe28edgZn3RCJgIfg3mdXGPyV9UBaYV5xppBd737895WeCKIqUvCk6XdWGClUyODVWGfIA1XNeHIsA7Ukr1G6Yjp6wDjhZp+QCgX+qja6dDTBqcsClrUCzuVeQdMbXIoAQ6d5hhfnPs3kWIGmEp03YqeaDIIR9Oa+6S4ZAvUgQnk5N6JFosYfEU4oj5DSbfznrOJMes26Q1AFSg5YGZCm2Z/cNTbg6EsWNWbJRQDqNcx4QQZJftqJCvef9XBIRUOF081w8wvAPe4NEO/UIQD5WDi6lDKrIejv5hwxbbrsS99EXCUY6s0WgFR6uyQfF8OZADsf1EXh/IItIJ/wGIiiU8ye7cIAAAAABJRU5ErkJggg==);
    }

    #body {
      box-sizing: border-box;
      padding: 97px 20px 16px 70px;
    }

    #title {
      align-items: center;
      display: flex;
      height: 21px;
      padding-bottom: 10px;
    }
    #title #name {
      color: var(--text1);
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }
    #title #name.render-style {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: var(--name-render-bg-light);
    }
    #title #name.render-style.dark {
      background-image: var(--name-render-bg-dark);
    }
    #title #gender {
      display: block;
      height: 16px;
      margin-left: 6px;
      width: 16px;
    }
    #title #level {
      margin-left: 6px;
      margin-right: -2px;
      display: flex;
    }
    #level img {
      width: 30px;
    }
    #vip {
      margin-left: 6px;
    }
    #vip img {
      display: flex;
      height: 20px;
    }
    #vip label {
      background-color: var(--brand_pink);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--text_white);
      font-size: 12px;
      font-weight: 400;
      height: 16px;
      line-height: 16px;
      margin-left: 0;
      max-width: 58px;
      overflow: hidden;
      white-space: nowrap;
    }
    #vip label span {
      align-items: center;
      display: inline-flex;
      justify-content: center;
      transform: scale(0.83);
      transform-origin: center;
    }

    #content {
    }
    #content #stats {
      align-items: center;
      display: flex;
      font-size: 12px;
      padding-bottom: 10px;
    }
    #content #stats a {
      color: var(--text3);
      padding-right: 18px;
      text-decoration: none;
    }
    #content #stats a span {
      color: var(--text1);
      display: inline-block;
      margin-right: 3px;
    }
    #content #ov {
      color: var(--text3);
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 10px;
    }
    #content #ov i {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-block;
      height: 14px;
      margin-right: 2px;
      vertical-align: sub;
      width: 14px;
    }
    #content sign {
      -webkit-line-clamp: 2;
      color: var(--text3);
      display: -webkit-box;
      line-height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    #action {
      align-items: center;
      display: flex;
      margin-top: 16px;
    }
    #action button {
      align-items: center;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      cursor: pointer;
      display: flex;
      font-size: 14px;
      height: 30px;
      justify-content: center;
      transition: all 0.3s;
      width: 100px;
    }
    #action button#follow {
      color: var(--text_white);
      border-color: var(--brand_blue);
      background-color: var(--brand_blue);
    }
    #action button#follow bili-icon {
      margin-right: 3px;
    }
    #action button#follow.active {
      background-color: var(--graph_bg_thick);
      border-color: var(--graph_bg_thick);
      color: var(--text3);
    }
    #action button#follow.active bili-icon {
      display: none;
    }
    #action button#follow.active:hover {
      background-color: var(--graph_bg_regular);
      border-color: var(--graph_bg_regular);
    }
    #action button#follow:hover {
      background-color: #00b8f6;
      border-color: #00b8f6;
    }
    #action button#chat {
      background-color: transparent;
      border-color: var(--text3);
      color: var(--text2);
      margin-left: 8px;
    }
  `;c$2([t$1()],s$2.prototype,"uid",2);c$2([t$1()],s$2.prototype,"data",2);c$2([t$1()],s$2.prototype,"showSpinner",2);c$2([t$1()],s$2.prototype,"isFollowing",2);c$2([t$1()],s$2.prototype,"backgroundImage",1);c$2([t$1()],s$2.prototype,"faceSrc",1);c$2([t$1()],s$2.prototype,"ovType",1);c$2([t$1()],s$2.prototype,"ovText",1);c$2([t$1()],s$2.prototype,"name",1);c$2([t$1()],s$2.prototype,"nameRenderStyle",1);c$2([t$1()],s$2.prototype,"nameStyle",1);c$2([t$1()],s$2.prototype,"gender",1);c$2([t$1()],s$2.prototype,"genderImg",1);c$2([t$1()],s$2.prototype,"level",1);c$2([t$1()],s$2.prototype,"vipLabel",1);c$2([t$1()],s$2.prototype,"stats",1);c$2([t$1()],s$2.prototype,"signText",1);s$2=c$2([e$5("bili-user-profile")],s$2);customElements.get("bili-user-profile")||customElements.define("bili-user-profile",s$2);window.__WEB_UI_VERSION__="1.0.5";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$2(class extends i$2{constructor(me){var Le;if(super(me),me.type!==t.ATTRIBUTE||me.name!=="class"||((Le=me.strings)===null||Le===void 0?void 0:Le.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(me){return" "+Object.keys(me).filter(Le=>me[Le]).join(" ")+" "}update(me,[Le]){var wt,$t;if(this.it===void 0){this.it=new Set,me.strings!==void 0&&(this.nt=new Set(me.strings.join(" ").split(/\s/).filter(It=>It!=="")));for(const It in Le)Le[It]&&!(!((wt=this.nt)===null||wt===void 0)&&wt.has(It))&&this.it.add(It);return this.render(Le)}const kt=me.element.classList;this.it.forEach(It=>{It in Le||(kt.remove(It),this.it.delete(It))});for(const It in Le){const Rt=!!Le[It];Rt===this.it.has(It)||(($t=this.nt)===null||$t===void 0?void 0:$t.has(It))||(Rt?(kt.add(It),this.it.add(It)):(kt.remove(It),this.it.delete(It)))}return T$2}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),l$1=me=>{if((me==null?void 0:me.r)===e$1)return me==null?void 0:me._$litStatic$},i=(me,...Le)=>({_$litStatic$:Le.reduce((wt,$t,kt)=>wt+(It=>{if(It._$litStatic$!==void 0)return It._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${It}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})($t)+me[kt+1],me[0]),r:e$1}),s$1=new Map,a$1=me=>(Le,...wt)=>{const $t=wt.length;let kt,It;const Rt=[],Pt=[];let Ft,Ut=0,Xt=!1;for(;Ut<$t;){for(Ft=Le[Ut];Ut<$t&&(It=wt[Ut],(kt=l$1(It))!==void 0);)Ft+=kt+Le[++Ut],Xt=!0;Ut!==$t&&Pt.push(It),Rt.push(Ft),Ut++}if(Ut===$t&&Rt.push(Le[$t]),Xt){const Jt=Rt.join("$$lit$$");(Le=s$1.get(Jt))===void 0&&(Rt.raw=Rt,s$1.set(Jt,Le=Rt)),wt=Pt}return me(Le,...wt)},n=a$1(x$3);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i$2{constructor(Le){if(super(Le),this.et=A$2,Le.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(Le){if(Le===A$2||Le==null)return this.ft=void 0,this.et=Le;if(Le===T$2)return Le;if(typeof Le!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(Le===this.et)return this.ft;this.et=Le;const wt=[Le];return wt.raw=wt,this.ft={_$litType$:this.constructor.resultType,strings:wt,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$2(e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:l}=j,r=()=>document.createComment(""),c$1=(me,Le,wt)=>{var $t;const kt=me._$AA.parentNode,It=Le===void 0?me._$AB:Le._$AA;if(wt===void 0){const Rt=kt.insertBefore(r(),It),Pt=kt.insertBefore(r(),It);wt=new l(Rt,Pt,me,me.options)}else{const Rt=wt._$AB.nextSibling,Pt=wt._$AM,Ft=Pt!==me;if(Ft){let Ut;($t=wt._$AQ)===null||$t===void 0||$t.call(wt,me),wt._$AM=me,wt._$AP!==void 0&&(Ut=me._$AU)!==Pt._$AU&&wt._$AP(Ut)}if(Rt!==It||Ft){let Ut=wt._$AA;for(;Ut!==Rt;){const Xt=Ut.nextSibling;kt.insertBefore(Ut,It),Ut=Xt}}}return wt},f=(me,Le,wt=me)=>(me._$AI(Le,wt),me),s={},a=(me,Le=s)=>me._$AH=Le,m=me=>me._$AH,p=me=>{var Le;(Le=me._$AP)===null||Le===void 0||Le.call(me,!1,!0);let wt=me._$AA;const $t=me._$AB.nextSibling;for(;wt!==$t;){const kt=wt.nextSibling;wt.remove(),wt=kt}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(me,Le,wt)=>{const $t=new Map;for(let kt=Le;kt<=wt;kt++)$t.set(me[kt],kt);return $t},c=e$2(class extends i$2{constructor(me){if(super(me),me.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}ct(me,Le,wt){let $t;wt===void 0?wt=Le:Le!==void 0&&($t=Le);const kt=[],It=[];let Rt=0;for(const Pt of me)kt[Rt]=$t?$t(Pt,Rt):Rt,It[Rt]=wt(Pt,Rt),Rt++;return{values:It,keys:kt}}render(me,Le,wt){return this.ct(me,Le,wt).values}update(me,[Le,wt,$t]){var kt;const It=m(me),{values:Rt,keys:Pt}=this.ct(Le,wt,$t);if(!Array.isArray(It))return this.ut=Pt,Rt;const Ft=(kt=this.ut)!==null&&kt!==void 0?kt:this.ut=[],Ut=[];let Xt,Jt,ii=0,Ni=It.length-1,Vi=0,zi=Rt.length-1;for(;ii<=Ni&&Vi<=zi;)if(It[ii]===null)ii++;else if(It[Ni]===null)Ni--;else if(Ft[ii]===Pt[Vi])Ut[Vi]=f(It[ii],Rt[Vi]),ii++,Vi++;else if(Ft[Ni]===Pt[zi])Ut[zi]=f(It[Ni],Rt[zi]),Ni--,zi--;else if(Ft[ii]===Pt[zi])Ut[zi]=f(It[ii],Rt[zi]),c$1(me,Ut[zi+1],It[ii]),ii++,zi--;else if(Ft[Ni]===Pt[Vi])Ut[Vi]=f(It[Ni],Rt[Vi]),c$1(me,It[ii],It[Ni]),Ni--,Vi++;else if(Xt===void 0&&(Xt=u(Pt,Vi,zi),Jt=u(Ft,ii,Ni)),Xt.has(Ft[ii]))if(Xt.has(Ft[Ni])){const Xn=Jt.get(Pt[Vi]),Qn=Xn!==void 0?It[Xn]:null;if(Qn===null){const eo=c$1(me,It[ii]);f(eo,Rt[Vi]),Ut[Vi]=eo}else Ut[Vi]=f(Qn,Rt[Vi]),c$1(me,It[ii],Qn),It[Xn]=null;Vi++}else p(It[Ni]),Ni--;else p(It[ii]),ii++;for(;Vi<=zi;){const Xn=c$1(me,Ut[zi+1]);f(Xn,Rt[Vi]),Ut[Vi++]=Xn}for(;ii<=Ni;){const Xn=It[ii++];Xn!==null&&p(Xn)}return this.ut=Pt,a(me,Ut),T$2}});var fs=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,re=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?gs(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&fs(Le,wt,kt),kt};let At=class extends s$4{constructor(){super(...arguments),this.disabled=!1,this.trailingIcon=!1,this.hasIcon=!1,this.href="",this.target=""}get name(){var me;return(me=this.getAttribute("name"))!=null?me:""}set name(me){this.setAttribute("name",me)}focus(){var me;(me=this.buttonElement)==null||me.focus()}blur(){var me;(me=this.buttonElement)==null||me.blur()}getRenderClasses(){return{"button--icon-leading":!this.trailingIcon&&this.hasIcon,"button--icon-trailing":this.trailingIcon&&this.hasIcon}}render(){const me=this.disabled&&!this.href,Le=this.href?i`a`:i`button`,{ariaLabel:wt,ariaHasPopup:$t,ariaExpanded:kt}=this;return n`
      <${Le}
        class="button ${o$1(this.getRenderClasses())}"
        ?disabled=${me}
        aria-label="${wt||A$2}"
        aria-haspopup="${$t||A$2}"
        aria-expanded="${kt||A$2}"
        href=${this.href||A$2}
        target=${this.target||A$2}
      >${this.renderContent()}</${Le}>`}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}renderContent(){var me;const Le=x$3`<slot name="icon" @slotchange="${this.handleSlotChange}"></slot>`;return x$3`
      ${(me=this.renderOutline)==null?void 0:me.call(this)} ${this.trailingIcon?A$2:Le}
      <span class="button__label"><slot></slot></span>
      ${this.trailingIcon?Le:A$2}
    `}};At.styles=i$6``;re([n$4()],At.prototype,"disabled",2);re([n$4()],At.prototype,"trailingIcon",2);re([n$4()],At.prototype,"hasIcon",2);re([n$4()],At.prototype,"href",2);re([n$4()],At.prototype,"target",2);re([i$3(".button")],At.prototype,"buttonElement",2);re([l$6({slot:"icon",flatten:!0})],At.prototype,"assignedIcons",2);At=re([e$5("bili-button")],At);var bs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,ys=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?vs(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&bs(Le,wt,kt),kt};let Yi=class extends At{};Yi.styles=i$6`
    :host {
      display: inline-flex;
      height: var(--_container-height);
      outline: none;
      font-family: var(--_label-text-font);
      font-size: var(--_label-text-size);
      line-height: var(--_label-text-line-height);
      font-weight: var(--_label-text-weight);
      -webkit-tap-highlight-color: transparent;
      vertical-align: middle;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      outline: none;
      user-select: none;
      appearance: none;
      background: rgba(0, 0, 0, 0);
      text-decoration: none;
      inline-size: 100%;
      position: relative;
      z-index: 0;
      height: 100%;
      font: inherit;
      color: var(--_label-text-color);
      padding-inline-start: var(--_leading-space);
      padding-inline-end: var(--_trailing-space);
      cursor: pointer;
    }
    .button:not([disabled]):hover {
      color: var(--_label-text-color-hover, var(--brand_blue));
    }
    .button::before {
      background-color: var(--_container-color);
      border-radius: inherit;
      content: "";
      inset: 0px;
      position: absolute;
    }
  `;Yi=ys([e$5("bili-text-button")],Yi);const b={show:(me,Le,wt)=>{useToast({content:me,duration:Le!=null?Le:2e3,...wt})}},ws=me=>typeof me!="object"?!1:Object.prototype.toString.call(me)==="[object Object]",ri=me=>me.replace(/[^\d]/g,""),ci=me=>new Promise(Le=>setTimeout(Le,me)),xs=me=>me.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");class _s{async request(Le){return await useRequest(Le)}}const X=new _s,Cs=me=>JSON.stringify(me),Ei=async(me,Le,wt)=>{if(me.request){const{method:$t,data:kt}=me.request;if($t==="POST"&&ws(kt)){const It=kt;if(!It.statistics){const{appId:Rt,platform:Pt,active:Ft}=(wt==null?void 0:wt.payload)||{active:!0,appId:100,platform:5};Ft!==!1&&(It.statistics=Cs({appId:Rt,platform:Pt}))}}}await Le()},ks=me=>X.request({url:"/x/v2/reply/report/metadata",params:me}),$s=(me,Le=!1)=>X.request({method:"POST",url:"/x/v2/reply/action",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:wt=>Le?wt:wt.with(Ei)}),Es=(me,Le=!1)=>X.request({method:"POST",url:"/x/v2/reply/hate",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:wt=>Le?wt:wt.with(Ei)}),je=me=>X.request({method:"POST",url:"/x/v2/reply/del",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),di=me=>X.request({method:"POST",url:"/x/v2/reply/top",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"}});var Tt=(me=>(me[me.SELECT=1]="SELECT",me[me.UNSELECT=2]="UNSELECT",me[me.CLOSE=3]="CLOSE",me[me.OPEN=4]="OPEN",me))(Tt||{});const _e=me=>X.request({method:"POST",url:"/x/v2/reply/subject/modify",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),br=me=>X.request({method:"POST",url:"/x/v2/dm/subject/state/update",data:{...me,type:1},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Ts=me=>X.request({method:"POST",url:"/x/v2/reply/vote/do",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Ss=(me,Le=!1)=>X.request({url:"/x/v2/reply/report",method:"POST",data:{...me,gaia_source:"main_web"},headers:{"Content-Type":"application/x-www-form-urlencoded"},chainProxy:wt=>Le?wt:wt.with(Ei)}),vr=(me,Le)=>X.request({url:"/x/relation/modify",method:"POST",params:Le,data:{...me,gaia_source:"main_web"},headers:{"Content-Type":"application/x-www-form-urlencoded"}}),Is=me=>X.request({method:"POST",baseURL:"//cm.bilibili.com",url:"/commercialorder/api/web_api/v1/main_site/upper/comment/apply_remove",data:{...me},headers:{"Content-Type":"application/x-www-form-urlencoded"}});function Ps(me){return{all:me=me||new Map,on:function(Le,wt){var $t=me.get(Le);$t?$t.push(wt):me.set(Le,[wt])},off:function(Le,wt){var $t=me.get(Le);$t&&(wt?$t.splice($t.indexOf(wt)>>>0,1):me.set(Le,[]))},emit:function(Le,wt){var $t=me.get(Le);$t&&$t.slice().map(function(kt){kt(wt)}),($t=me.get("*"))&&$t.slice().map(function(kt){kt(Le,wt)})}}}var Os=function(me){return me[me.DEFAULT=0]="DEFAULT",me[me.PAGE=1]="PAGE",me[me.IFRAME=2]="IFRAME",me[me.SITE=3]="SITE",me}({});function Ds(me,Le){var wt=parseInt(me,10);return Number.isNaN(wt)||wt<0?"":wt>=1e4&&wt<1e8?(wt/1e4).toFixed(1)+(Le?"\u842C":"\u4E07"):wt>=1e8?(wt/1e8).toFixed(1)+(Le?"\u5104":"\u4EBF"):/\./.test(me)?me:wt}var Fi=!1;function Ls(){return Fi===!1&&(Fi=typeof window<"u"),Fi}function As(me){try{return JSON.parse(localStorage.getItem(me))}catch{return null}}function Rs(me,Le){try{localStorage.setItem(me,JSON.stringify(Le))}catch{}}function te(me,Le){if(me||(me={}),Le||(Le={}),!me.type)throw new Error("Report need type!");var wt="";if(me.spm_info&&(me.spm_info.match(/\./g)||[]).length>=3)wt=me.spm_info;else{var $t=document.getElementsByTagName("meta"),kt=me.spm_id||$t&&$t.spm_prefix&&$t.spm_prefix.content||"0.0",It=me.c||"0",Rt=me.d||"0",Pt=me.e;wt=Pt?"".concat(kt,".").concat(It,".").concat(Rt,".").concat(Pt):"".concat(kt,".").concat(It,".").concat(Rt)}var Ft=Object.assign({},Le);Ft.spm_id=wt,window.reportObserver&&window.reportObserver.reportCustomData&&window.reportObserver.reportCustomData(me.type,Ft)}function lo(me,Le,wt){return Le in me?Object.defineProperty(me,Le,{value:wt,enumerable:!0,configurable:!0,writable:!0}):me[Le]=wt,me}function Ms(me){var Le=Object.keys(me);if(Le.length===0)return"";var wt="";return Le.forEach(function($t){me[$t]!==void 0&&(wt+="".concat($t,":").concat(me[$t],";"))}),wt}function Bs(me){return!(!me||typeof me!="object"||typeof me.render_scheme>"u"||!me.colors_info||!me.colors_info.color||!Array.isArray(me.colors_info.color))}var co="to top right";function ho(me,Le){return"linear-gradient(".concat(me,",").concat(Le,")")}function js(me){return me[0]==="#"?me:"#".concat(me)}function Ns(me){var Le=me.length,wt=[],$t=[],kt=function(It,Rt){return"".concat(js(It)," ").concat(Rt/(Le-1)*100,"%")};return me.forEach(function(It,Rt){wt.push(kt(It.color_day,Rt)),$t.push(kt(It.color_night,Rt))}),{light:ho(co,wt.join(",")),dark:ho(co,$t.join(","))}}function Vs(){return{"background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}function zs(me,Le){Le=Le||{};var wt=Le.theme||"",$t=Le.stringType||!1,kt="",It="";if(Bs(me)){var Rt=me.render_scheme,Pt=me.colors_info.color;if(Rt!==1&&Rt!=="Colorful"||!Pt||Pt.length===0)return null;var Ft=Ns(Pt);kt=Ft.light,It=Ft.dark}if(kt&&It){var Ut={base:Vs(),theme:{light:{"background-image":kt},dark:{"background-image":It}}};if(["light","dark"].includes(wt)){var Xt=Object.assign({},Ut.base,Ut.theme[wt]);return $t?Ms(Xt):Xt}if(Le.variable&&typeof Le.variable=="string"&&/^--[a-z]/.test(Le.variable)){var Jt;Ut.variable=(Jt={},lo(Jt,"".concat(Le.variable,"-light"),kt),lo(Jt,"".concat(Le.variable,"-dark"),It),Jt)}return Ut}return null}function Fs(me,Le){if(!(me instanceof Le))throw new TypeError("Cannot call a class as a function")}function Ne(me){return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Le){return typeof Le}:function(Le){return Le&&typeof Symbol=="function"&&Le.constructor===Symbol&&Le!==Symbol.prototype?"symbol":typeof Le},Ne(me)}function Us(me,Le){if(Ne(me)!="object"||!me)return me;var wt=me[Symbol.toPrimitive];if(wt!==void 0){var $t=wt.call(me,Le||"default");if(Ne($t)!="object")return $t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Le==="string"?String:Number)(me)}function Uo(me){var Le=Us(me,"string");return Ne(Le)=="symbol"?Le:Le+""}function po(me,Le){for(var wt=0;wt<Le.length;wt++){var $t=Le[wt];$t.enumerable=$t.enumerable||!1,$t.configurable=!0,"value"in $t&&($t.writable=!0),Object.defineProperty(me,Uo($t.key),$t)}}function qs(me,Le,wt){return Le&&po(me.prototype,Le),wt&&po(me,wt),Object.defineProperty(me,"prototype",{writable:!1}),me}function Ui(me,Le,wt){return(Le=Uo(Le))in me?Object.defineProperty(me,Le,{value:wt,enumerable:!0,configurable:!0,writable:!0}):me[Le]=wt,me}var Hs=function(){function me(Le){var wt=this;Fs(this,me),Ui(this,"all",new Map),Ui(this,"weakMap",new WeakMap),Ui(this,"defaultEventTarget",void 0),Le?Le instanceof Element||Le instanceof Document?this.defaultEventTarget=Le:this.defaultEventTarget=document.querySelector(Le)||document:this.defaultEventTarget=document,this.all.clear=function(){wt.all.forEach(function($t,kt){$t.forEach(function(It){wt.off(kt,It)})}),wt.all.clear()}}return qs(me,[{key:"on",value:function(Le,wt,$t){this.all.has(Le)||this.all.set(Le,[]),this.weakMap.has(wt)||this.weakMap.set(wt,[]);var kt=$t||this.defaultEventTarget,It=kt.addEventListener,Rt=function(Pt){wt({sourceType:Os.PAGE,customEvent:Pt,event:Le,payload:Pt.detail,samePage:!0,emitter:It})};this.all.get(Le).push(wt),this.weakMap.get(wt).push(Rt),It(Le,Rt)}},{key:"off",value:function(Le,wt,$t){var kt=this,It=$t||this.defaultEventTarget,Rt=It.removeEventListener;if(!wt){var Pt;(Pt=this.all.get(Le))===null||Pt===void 0||Pt.forEach(function(Ut){var Xt=kt.weakMap.get(Ut);Xt.forEach(function(Jt){Rt(Le,Jt)})}),this.all.delete(Le);return}var Ft=this.weakMap.get(wt);Ft.forEach(function(Ut){Rt(Le,Ut)})}},{key:"emit",value:function(Le,wt,$t){var kt=new CustomEvent(Le,{detail:wt}),It=$t||this.defaultEventTarget,Rt=It.dispatchEvent;Rt(kt);var Pt=new CustomEvent("*",{detail:wt});Rt(Pt)}}]),me}(),Ws=function(){var me=null;return function(){var Le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return Ls()?me||(me=new Hs(Le),me):(console.error("useEvent must be used in the browser environment"),null)}}();const y=Ps();Ws();const q={MAIN:"main",REPLY:"reply"},qi=(me,Le,wt)=>{const $t={...wt,spm_id:`${useSpmPrefix()}.${Le}.${me}`};window.reportObserver&&window.reportObserver.reportCustomData&&window.reportObserver.reportCustomData(me==="show"?"appear":me,$t)},Ki=(me,Le,wt,$t)=>{if(Le=`${($t==null?void 0:$t.spmPrefix)||useSpmPrefix()}.${Le}`,$t!=null&&$t.flush){const kt=useReportFunc({globalInst:"__biliMirrorPbInstance__"});if(kt){switch(me){case"show":kt("exposure",Le,wt,{flush:!0});break;case"click":kt("click",Le,wt,{flush:!0});break;case"tech":kt("tech",Le,wt,{flush:!0});break}return}}switch(me){case"show":useReport("exposure",Le,wt);break;case"click":useReport("click",Le,wt);break;case"tech":useReport("tech",Le,wt);break}},yr=async()=>{if(window.biliMirror||window.__biliMirrorPbInstance__)return;const me=(window==null?void 0:window.__MIRROR_CONFIG__)||{};let Le={feature:{tech:!0},autoPv:!1,batch:!1};me!=null&&me.pbOptions&&(Le={...Le,...me.pbOptions,feature:{...Le.feature,...me.pbOptions.feature}}),window.__biliMirrorPbInstance__=await useReporter(Le)},qo="bili-comments-config",Ti=()=>As(qo)||{},Ho=me=>{Rs(qo,me)},Gs=me=>{const Le=Ti();Le.report=me,Ho(Le)},Js=()=>Ti().report||{blockChecked:!0,deleteChecked:!0},Ys=me=>{const Le=Ti();Le.notice=me,Ho(Le)},Ks=()=>Ti().notice||{expires:-1},Zs=()=>[{name:"\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4",options:[{label:"\u8FDD\u6CD5\u8FDD\u89C4",value:9},{label:"\u8272\u60C5",value:2},{label:"\u4F4E\u4FD7",value:10},{label:"\u8D4C\u535A\u8BC8\u9A97",value:12},{label:"\u8FDD\u6CD5\u4FE1\u606F\u5916\u94FE",value:23}]},{name:"\u8C23\u8A00\u7C7B\u4E0D\u5B9E\u4FE1\u606F",options:[{label:"\u6D89\u653F\u8C23\u8A00",value:19},{label:"\u865A\u5047\u4E0D\u5B9E\u4FE1\u606F",value:22},{label:"\u6D89\u793E\u4F1A\u4E8B\u4EF6\u8C23\u8A00",value:20}]},{name:"\u4FB5\u72AF\u4E2A\u4EBA\u6743\u76CA",options:[{label:"\u4EBA\u8EAB\u653B\u51FB",value:7},{label:"\u4FB5\u72AF\u9690\u79C1",value:15}]},{name:"\u6709\u5BB3\u793E\u533A\u73AF\u5883",options:[{label:"\u5783\u573E\u5E7F\u544A",value:1},{label:"\u5F15\u6218",value:4},{label:"\u5267\u900F",value:5},{label:"\u5237\u5C4F",value:3},{label:"\u89C6\u9891\u4E0D\u76F8\u5173",value:8},{label:"\u8FDD\u89C4\u62BD\u5956",value:18},{label:"\u9752\u5C11\u5E74\u4E0D\u826F\u4FE1\u606F",value:17}]},{name:"",options:[{label:"\u5176\u4ED6",value:0}]}],Qs=me=>me.reason_list?me.reason_list.map(Le=>({label:Le.tag_name,value:Le.tag_id,detailIsRequired:Le.content_required?Le.content_required:!1})):[];var Xs=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,at$1=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?ta(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Xs(Le,wt,kt),kt};let Y=class extends s$4{constructor(){super(...arguments),this.type="",this.oid="",this.rpid="",this.mid="",this.uname="",this.ordering="heat",this.appId=100,this.platform=5,this.maxInputLength=200,this.optionValue=-1,this.currentDetailIsRequired=!1,this.inputValue="",this.blockValue=!0,this.canDeleteReply=!1,this.deleteValue=!0,this.groups=[],this.options=[]}get isBiliPc(){return this.appId&&this.platform?Number(this.appId)===112:!1}connectedCallback(){super.connectedCallback();const me={oid:this.oid,type:this.type,rpid:this.rpid,mid:this.mid};this.isBiliPc?this.dispatchEvent(new CustomEvent("trackReport",{detail:{type:"show",event:"main.comment.report.all.show",data:me},bubbles:!0})):(qi("show","comment-report-reason",me),Ki("show","comments.report.show",me)),this.initData()}async initData(){var wt;var me,Le;try{const{code:$t,data:kt}=await ks({oid:this.oid,type:this.type});if($t!==0||!kt){console.error("\u83B7\u53D6\u4E3E\u62A5\u5143\u6570\u636E\u5931\u8D25");return}(me=kt.reason_list)!=null&&me.length?this.options=Qs(kt):(Le=kt.report_groups)!=null&&Le.length?this.groups=kt.report_groups.map(Rt=>({name:Rt.name,options:Rt.report_options})):this.groups=Zs(),this.canDeleteReply=(wt=kt.can_delete)!=null?wt:!1;const It=Js();this.blockValue=It.blockChecked,this.canDeleteReply?this.deleteValue=It.deleteChecked:this.deleteValue=!1,console.log(this.blockValue,this.deleteValue)}catch($t){console.error("\u83B7\u53D6\u4E3E\u62A5\u5143\u6570\u636E\u5931\u8D25",$t)}}handleOptionClick(me,Le){this.optionValue!==me&&(this.inputValue=""),this.optionValue=me,this.currentDetailIsRequired=Le}handleOptionChange(me){this.optionValue=parseInt(me.detail.value)}handleInputChange(me){this.inputValue=me.target.value}onBlockChange(me){this.blockValue=me.detail.checked}deleteReply(me){this.deleteValue=me.detail.checked}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){var me;if(this.optionValue===-1){b.show("\u8BF7\u9009\u62E9\u4E3E\u62A5\u7406\u7531");return}let Le=-1,wt="";if(this.options.length){if(Le=this.optionValue,this.currentDetailIsRequired&&this.inputValue.trim()===""){b.show("\u8BF7\u586B\u5199\u8BE6\u7EC6\u63CF\u8FF0\uFF5E");return}this.inputValue&&(wt=this.inputValue)}else{if(this.optionValue===0){if(!this.inputValue){b.show("\u8BF7\u5B8C\u5584\u4E3E\u62A5\u7406\u7531");return}if(this.inputValue&&(this.inputValue.length<2||this.inputValue.length>this.maxInputLength)){b.show("\u81EA\u5B9A\u4E49\u4E3E\u62A5\u5185\u5BB9\u957F\u5EA6\u4E3A2-200\u5B57\u7B26");return}wt=this.inputValue}Le=this.optionValue}try{let $t={};this.isBiliPc&&($t={appId:Number(this.appId),platform:Number(this.platform)});const kt=await Ss({type:Number(this.type),oid:this.oid,rpid:this.rpid,reason:Le,content:wt,add_blacklist:this.blockValue,delete:this.deleteValue,ordering:this.ordering,statistics:this.isBiliPc?JSON.stringify($t):""});if(Gs({blockChecked:this.blockValue,deleteChecked:this.deleteValue}),kt.code===0){b.show(((me=kt.data)==null?void 0:me.toast)||"\u4E3E\u62A5\u6210\u529F");const It={oid:this.oid,type:this.type,rpid:this.rpid,mid:this.mid,reasonid:Le,reasonLevel:1,blacklist:this.blockValue,is_block:this.blockValue?1:0,is_delete:this.deleteValue?1:0,ctime:Date.now()};this.isBiliPc?this.dispatchEvent(new CustomEvent("trackReport",{detail:{type:"click",event:"main.comment.report.submit.click",data:It},bubbles:!0})):(qi("click","comment-report-reason-submit-button",It),Ki("click","comments.report_submit.click",It)),this.handleHide();const Rt={type:Number(this.type),oid:Number(this.oid),oid_str:this.oid,rpid:Number(this.rpid),rpid_str:this.rpid};if(this.blockValue){y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"filter",predicate:Pt=>{var Ft;return((Ft=Pt.member)==null?void 0:Ft.mid)===this.mid},value:Rt});return}y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"findIndex",predicate:Pt=>Pt.rpid_str===this.rpid,value:Rt});return}b.show(kt.message||"\u4E3E\u62A5\u5931\u8D25")}catch{b.show("\u4E3E\u62A5\u5931\u8D25")}}handleJumpJudgement(){this.isBiliPc||qi("click","judgement",{}),window.open("//www.bilibili.com/judgement/apply"),this.isBiliPc&&y.emit("jump",{type:"link",link:"https://www.bilibili.com/judgement/apply"})}textareaTemplate(me){return me?x$3`<textarea
      data-key=${me}
      .value=${this.inputValue}
      placeholder="请填写具体违规内容出现时间点和详细描述，更容易举报成功"
      maxlength="${this.maxInputLength}"
      @input=${this.handleInputChange}
      @keydown=${Le=>Le.stopPropagation()}
      @keyup=${Le=>Le.stopPropagation()}
    ></textarea>`:x$3`
        <textarea
          .value=${this.inputValue}
          placeholder="请填写举报理由"
          maxlength="${this.maxInputLength}"
          @input=${this.handleInputChange}
          @keydown=${Le=>Le.stopPropagation()}
          @keyup=${Le=>Le.stopPropagation()}
        ></textarea>
      `}groupsTemplate(){return x$3`
      <div id="groups">
        ${this.groups.map(me=>x$3`<div id="group">
              ${me.name?x$3`<div id="group-name">${me.name}</div`:""}
              <div id="group-options">
                ${me.options.map(Le=>x$3`<bili-radio
                      label="${Le.label}"
                      value="${Le.value}"
                      checked="${Le.value===this.optionValue}"
                      @change=${this.handleOptionChange}
                    ></bili-radio>`)}
              </div>
            </div>`)}
        ${this.optionValue===0?this.textareaTemplate():""}
      </div>
    `}optionsTemplate(){return x$3`
      <div id="options">
        ${this.options.map(me=>x$3` <div id="option">
            <div id="option-name" @click=${()=>this.handleOptionClick(me.value,me.detailIsRequired)}>
              ${me.label}
              <bili-radio label="" value="${me.value}" checked="${me.value===this.optionValue}"></bili-radio>
            </div>
            <div id="sub-option" class="${me.value===this.optionValue?"show":""}">
              <div id="sub-option-name">
                详细描述
                <span>${me.detailIsRequired?"(\u5FC5\u586B)":"(\u9009\u586B)"}</span>
              </div>
              ${this.textareaTemplate(me.value)}
            </div>
          </div>`)}
      </div>
    `}render(){return x$3`
      <div id="form">
        ${this.groups?x$3`<div id="main">
              <!-- 风纪委员 -->
              <div id="tips" @click=${this.handleJumpJudgement}>
                <div class="tips-prefix">申请加入风纪委员会，共治更好的社区氛围</div>
                <bili-icon size="16" icon="BDC/arrow_forward_right_line/3"></bili-icon>
              </div>
              ${this.options.length?this.optionsTemplate():this.groupsTemplate()}
            </div>`:""}
      </div>

      <!-- 底部 -->
      <div id="footer">
        ${this.mid&&this.uname?x$3`<div id="optional">
              <bili-checkbox
                value="block"
                label="拉黑 @${this.uname}"
                checked="${this.blockValue}"
                @change=${this.onBlockChange}
              ></bili-checkbox>
              ${this.canDeleteReply?x$3`<bili-checkbox
                    value="block"
                    label="删除该评论"
                    checked="${this.deleteValue}"
                    @change=${this.deleteReply}
                  ></bili-checkbox>`:""}
            </div>`:""}
        <div id="action">
          <button id="cancel" @click=${this.handleCancel}>取消</button>
          <button id="confirm" @click=${this.handleConfirm}>确定</button>
        </div>
      </div>
    `}};Y.styles=i$6`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
    #tips {
      display: flex;
      position: relative;
      padding: 12px;
      font-size: 13px;
      border-radius: 8px;
      color: var(--text2);
      background-color: var(--bg2);
      margin: 4px 0px;
      cursor: pointer;
    }
    #tips .tips-prefix {
      flex: 1;
      line-height: 18px;
    }
    #form {
      padding: 12px;
      min-height: 400px;
      max-height: calc(100vh - 200px);
      overflow-y: auto;
      padding-bottom: 80px; /* 为固定底部预留空间 */
    }
    #form::-webkit-scrollbar {
      width: 8px;
    }
    #form::-webkit-scrollbar-thumb {
      background-color: var(--bg3);
    }
    /* 老版举报选项 */
    #groups {
      padding-top: 12px;
    }
    #group + #group {
      margin-top: 12px;
    }
    #group-name {
      font-size: 12px;
      color: var(--text3);
      margin-bottom: 15px;
    }
    #group-options {
      display: flex;
      flex-wrap: wrap;
    }
    /* 新版举报选项 */
    #option-name {
      height: 62px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: var(--text1);
      border-radius: 8px;
      padding: 0 12px;
      transition: background-color 0.2s;
    }
    #option-name bili-radio {
        display: block;
        --bili-radio-margin-inline-end: 0;
        height: 16px;
        width: 16px;
        margin-bottom: 0;
    }
    #option-name:hover {
      background-color: var(--bg3);
    }
    #sub-option {
      padding: 0 12px;
      padding-bottom: 20px;
      display: none;
    }
    /* 分割线 */
    #option::after {
      content: "";
      display: block;
      height: 1px;
      background-color: var(--line_light);
      width: calc(100% - 24px);
      margin: 0px auto;
    }
    #sub-option.show {
      display: block;
    }
    #sub-option-name {
      font-size: 13px;
      color: var(--text3);
      margin-bottom: 8px;
    }
    #sub-option-name .pink-tag {
      color: var(--brand_pink);
    }
    #options {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
    }
    bili-radio {
      --bili-radio-margin-inline-end: 0;
      width: 25%;
      margin-bottom: 16px;
    }
    textarea {
      box-sizing: border-box;
      font-size: 14px;
      color: var(--text1);
      background-color: var(--bg2);
      width: 100%;
      height: 120px;
      padding: 8px;
      border: none;
      border-radius: 6px;
      outline: none;
      resize: none;
    }

    textarea::placeholder {
      color: var(--text4);
    }

    #footer {
      display: flex;
      margin-top: 16px;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 0px;
      left: 12px;
      right: 12px;
      background-color: var(--bg1);
      padding: 16px 0;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 130px;
      margin-left: 12px;
    }
    #action button#cancel {
      width: 100px;
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      width: 100px;
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
    #optional {
      color: var(--text3);
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    /* PC客户端 粉色主题样式 */
    /* 新版举报样式 - 只在新版举报中使用 */

    :host([data-app-id="112"]) bili-radio {
      --bili-radio-checked-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) bili-checkbox {
      --bili-checkbox-checked-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) #action button {
      border-color: var(--brand_pink);
    }

    :host([data-app-id="112"]) #action button#confirm {
      background-color: var(--brand_pink);
      border-color: var(--brand_pink);
      color: var(--text_white);
    }
  `;at$1([n$4({type:String,attribute:"data-type"})],Y.prototype,"type",2);at$1([n$4({type:String,attribute:"data-oid"})],Y.prototype,"oid",2);at$1([n$4({type:String,attribute:"data-rpid"})],Y.prototype,"rpid",2);at$1([n$4({type:String,attribute:"data-mid"})],Y.prototype,"mid",2);at$1([n$4({type:String,attribute:"data-uname"})],Y.prototype,"uname",2);at$1([n$4({type:String,attribute:"data-ordering"})],Y.prototype,"ordering",2);at$1([n$4({type:Number,attribute:"data-app-id"})],Y.prototype,"appId",2);at$1([n$4({type:Number,attribute:"data-platform"})],Y.prototype,"platform",2);at$1([t$1()],Y.prototype,"maxInputLength",2);at$1([t$1()],Y.prototype,"optionValue",2);at$1([t$1()],Y.prototype,"currentDetailIsRequired",2);at$1([t$1()],Y.prototype,"inputValue",2);at$1([t$1()],Y.prototype,"blockValue",2);at$1([t$1()],Y.prototype,"canDeleteReply",2);at$1([t$1()],Y.prototype,"deleteValue",2);at$1([t$1()],Y.prototype,"groups",2);at$1([t$1()],Y.prototype,"options",2);Y=at$1([e$5("bili-comment-report-form")],Y);const ea=me=>X.request({url:"/x/member/web/uname/update",method:"POST",data:{uname:me,source:"reply"},headers:{"Content-Type":"application/x-www-form-urlencoded"}});var ia=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,Wo=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?ra(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&ia(Le,wt,kt),kt};let hi=class extends s$4{constructor(){super(...arguments),this.inputValue=""}handleInputChange(me){this.inputValue=me.target.value}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){try{if(!this.inputValue){b.show("\u8BF7\u8F93\u5165\u6635\u79F0");return}const{code:me,message:Le}=await ea(this.inputValue);if(me===0){b.show("\u6210\u529F\u8BBE\u7F6E\u6635\u79F0"),this.handleHide();return}b.show(Le||"\u8BBE\u7F6E\u6635\u79F0\u5931\u8D25")}catch{b.show("\u8BBE\u7F6E\u6635\u79F0\u5931\u8D25")}}render(){return x$3`
      <div id="form">
        <div id="tips">拥有昵称后才能评论哦！快来取个适合你的昵称吧！</div>
        <div id="input">
          <input .value=${this.inputValue} placeholder="请输入新的昵称" maxlength="16" @input=${this.handleInputChange} />
        </div>
        <div id="footer">
          <div id="action">
            <button id="cancel" @click=${this.handleCancel}>取消</button>
            <button id="confirm" @click=${this.handleConfirm}>确定</button>
          </div>
        </div>
      </div>
    `}};hi.styles=i$6`
    :host {
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    #tips {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text2);
      margin-bottom: 16px;
    }

    #input {
      width: 100%;
      margin-bottom: 40px;
    }

    #input input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 10px;
      border: 1px solid var(--graph_weak);
      border-radius: 4px;
      outline: none;
    }

    #footer {
      margin-top: 16px;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 160px;
    }
    #action button#cancel {
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
  `;Wo([t$1()],hi.prototype,"inputValue",2);hi=Wo([e$5("bili-comment-update-uname-form")],hi);const oa=()=>X.request({baseURL:"//cm.bilibili.com",url:"/commercialorder/api/web_api/v1/main_site/upper/comment/reason_list"});var na=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,oe=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?sa(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&na(Le,wt,kt),kt};let Nt=class extends s$4{constructor(){super(...arguments),this.type="",this.oid="",this.rpid="",this.maxInputLength=100,this.optionValue=-1,this.inputValue="",this.options=[]}connectedCallback(){super.connectedCallback(),this.initData()}async initData(){var me;try{const Le=await oa();if(Le.code===0&&(me=Le.result)!=null&&me.length){const wt=Le.result.map($t=>({label:$t.reason_content,value:$t.reason_index}));this.options=wt.concat({label:"\u5176\u4ED6\u539F\u56E0",value:0})}}catch{b.show("\u83B7\u53D6\u4E3E\u62A5\u7406\u7531\u5931\u8D25")}}handleOptionChange(me){this.optionValue=parseInt(me.detail.value)}handleInputChange(me){this.inputValue=me.target.value}handleHide(){this.dispatchEvent(new CustomEvent("hide"))}handleCancel(){this.handleHide()}async handleConfirm(){if(this.optionValue===-1){b.show("\u8BF7\u9009\u62E9\u7533\u8BC9\u539F\u56E0");return}if(this.optionValue===0){if(!this.inputValue){b.show("\u8BF7\u9009\u62E9\u6216\u586B\u5199\u7533\u8BC9\u539F\u56E0");return}if(this.inputValue&&(this.inputValue.length<2||this.inputValue.length>this.maxInputLength)){b.show("\u81EA\u5B9A\u4E49\u4E3E\u62A5\u5185\u5BB9\u957F\u5EA6\u4E3A2-100\u5B57\u7B26");return}}try{let me="";const Le=this.options.find($t=>$t.value===this.optionValue);this.optionValue===0?me=this.inputValue:Le&&(me=Le.label);const wt=await Is({av_id:this.oid,comment_id:this.rpid,reason:me});wt.code===0?b.show(wt.result||"\u7533\u8BC9\u6210\u529F"):b.show(wt.message||"\u7533\u8BC9\u5931\u8D25"),this.handleHide()}catch{b.show("\u7533\u8BC9\u5931\u8D25")}}textareaTemplate(){return x$3`<div id="input">
      <textarea
        .value=${this.inputValue}
        placeholder="请填写具体原因"
        maxlength="${this.maxInputLength}"
        @input=${this.handleInputChange}
      ></textarea>
    </div>`}render(){return x$3`
      <div id="tips">
        <span>因以下理由申请撤销商业推广置顶：</span>
      </div>
      <div id="form">
        ${this.options.map(me=>x$3`<div class="option">
              <bili-radio
                label="${me.label}"
                value="${me.value}"
                checked="${me.value===this.optionValue}"
                @change=${this.handleOptionChange}
              ></bili-radio>
            </div>`)}
        ${this.optionValue===0?this.textareaTemplate():""}
      </div>
      <div id="footer">
        <div id="action">
          <button id="cancel" @click=${this.handleCancel}>取消</button>
          <button id="confirm" @click=${this.handleConfirm}>确定</button>
        </div>
      </div>
    `}};Nt.styles=i$6`
    :host {
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    #tips {
      display: flex;
      align-items: center;
      position: relative;
      padding: 12px 0;
      font-size: 14px;
      border-radius: 4px;
      color: var(--text1);
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 12px;
    }
    #form {
      min-height: 220px;
    }
    bili-radio {
      --bili-radio-margin-inline-end: 0;
      margin-bottom: 16px;
    }
    #input {
    }
    textarea {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      padding: 8px;
      border: 1px solid var(--graph_weak);
      border-radius: 4px;
      outline: none;
      resize: none;
    }

    #footer {
      margin-top: 16px;
    }
    #footer #action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #action button {
      -webkit-font-smoothing: antialiased;
      border: 1px solid var(--brand_blue);
      border-radius: 6px;
      box-sizing: border-box;
      cursor: pointer;
      font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
      font-weight: 400;
      height: 32px;
      outline: none;
      transition: all 0.2s;
      width: 130px;
      margin-left: 12px;
    }
    #action button#cancel {
      background-color: var(--bg1);
      border-color: var(--line_regular);
      color: var(--text1);
    }
    #action button#confirm {
      background-color: var(--brand_blue);
      border-color: var(--brand_blue);
      color: var(--text_white);
    }
  `;oe([n$4({type:String,attribute:"data-type"})],Nt.prototype,"type",2);oe([n$4({type:String,attribute:"data-oid"})],Nt.prototype,"oid",2);oe([n$4({type:String,attribute:"data-rpid"})],Nt.prototype,"rpid",2);oe([t$1()],Nt.prototype,"maxInputLength",2);oe([t$1()],Nt.prototype,"optionValue",2);oe([t$1()],Nt.prototype,"inputValue",2);oe([t$1()],Nt.prototype,"options",2);Nt=oe([e$5("bili-comment-commercial-order-appeal-form")],Nt);const aa=me=>{const Le=Math.floor(new Date().getTime()/1e3)-me,wt=new Date;if(wt.setHours(0),wt.setMinutes(0),wt.setSeconds(0),Math.floor(wt.getTime()/1e3)<me&&Le>=0){if(Le<60){const $t=Math.floor(Le%60/10)*10;return $t>=10?`${$t}\u79D2\u524D`:"\u521A\u521A"}if(60<=Le&&Le<3600)return`${Math.floor(Le/60)}\u5206\u949F\u524D`;if(Le>=3600)return`${Math.floor(Le/3600)}\u5C0F\u65F6\u524D`}else{const $t=new Date;$t.setTime(me*1e3);const kt=$t.getFullYear(),It=$t.getMonth()+1>=10?$t.getMonth()+1:`0${$t.getMonth()+1}`,Rt=$t.getDate()>=10?$t.getDate():`0${$t.getDate()}`,Pt=$t.getHours()>=10?$t.getHours():`0${$t.getHours()}`,Ft=$t.getMinutes()>=10?$t.getMinutes():`0${$t.getMinutes()}`;return`${kt}-${It}-${Rt} ${Pt}:${Ft}`}};function wr(me,Le){const wt=[];if(me.can_modify!==!0)return wt;const{up_reply_selection:$t,up_reply:kt,up_dm:It}=me;if($t!=null&&$t.can_modify){const Rt=$t.status===1;wt.push({key:"select",text:Rt?"\u505C\u6B62\u8BC4\u8BBA\u7CBE\u9009":"\u5F00\u542F\u8BC4\u8BBA\u7CBE\u9009",data:{active:!Rt}})}if(kt!=null&&kt.can_modify){const Rt=kt.status===1;wt.push({key:"close",text:Rt?"\u5173\u95ED\u8BC4\u8BBA":"\u6062\u590D\u8BC4\u8BBA",data:{active:!Rt}})}if(It!=null&&It.can_modify&&!Le){const Rt=It.status===1;wt.push({key:"close-danmaku",text:Rt?"\u5173\u95ED\u5F39\u5E55":"\u6062\u590D\u5F39\u5E55",data:{active:!Rt}})}return wt}function la(me){const{upMid:Le,reply:wt,user:$t,top:kt,assist:It,isBiliPc:Rt}=me;if(!Le)return console.warn("get comments actions warning: no up mid"),[];const Pt=[],Ft=($t==null?void 0:$t.mid)===Le;Ft&&me.ns==="main"&&Pt.push({key:"top",text:kt?"\u53D6\u6D88\u7F6E\u9876":"\u8BBE\u4E3A\u7F6E\u9876",data:{active:!kt}});const Ut=!$t||String($t.mid)!==wt.member.mid;if(Ut)if(Rt||Pt.push({key:"block",text:"\u52A0\u5165\u9ED1\u540D\u5355"}),$t){const{is_jury:Xt,is_senior_member:Jt}=$t;Xt?Pt.push({key:"report",text:"\u98CE\u7EAA\u59D4\u4E3E\u62A5",data:{hiddenJuryTips:!0}}):Pt.push({key:"report",text:Jt?"\u786C\u6838\u4F1A\u5458\u4E3E\u62A5":"\u4E3E\u62A5"})}else Pt.push({key:"report",text:"\u4E3E\u62A5"});return(Ft||!Ut||It)&&Pt.push({key:"delete",text:"\u5220\u9664"}),Pt}function St(me){const Le={customTitle:"\u767B\u5F55\u53C2\u4E0E\u793E\u533A\u4E92\u52A8",hideClose:!1,origin:(me==null?void 0:me.origin)||"comments",spm_id_from:`${(me==null?void 0:me.spmPrefix)||useSpmPrefix()}.${(me==null?void 0:me.event)||"replyUnknowAction"}`};return useAuthLogin(Le)}var Go=globalThis&&globalThis.__spreadArray||function(me,Le,wt){if(wt||arguments.length===2)for(var $t,kt=0,It=Le.length;kt<It;kt++)!$t&&kt in Le||($t||($t=Array.prototype.slice.call(Le,0,kt)),$t[kt]=Le[kt]);return me.concat($t||Array.prototype.slice.call(Le))},Hi=void 0;function F(){if(Hi===void 0){if(typeof window!="object")return!1;var me=window;if(!me.biliBridgePc&&window!==window.parent&&window.top)try{me.biliBridgePc=me.top.biliBridgePc}catch{}Hi=typeof me.biliBridgePc=="object"}return Hi}function xr(me){for(var Le,wt=[],$t=1;$t<arguments.length;$t++)wt[$t-1]=arguments[$t];return F()?(Le=window.biliBridgePc)[me].apply(Le,wt):Promise.reject(new Error("Not in biliPc!"))}function Lt(me,Le){for(var wt=[],$t=2;$t<arguments.length;$t++)wt[$t-2]=arguments[$t];return xr.apply(void 0,Go(["callNative",me,Le],wt,!1))}function Ce(me,Le){for(var wt=[],$t=2;$t<arguments.length;$t++)wt[$t-2]=arguments[$t];return xr.apply(void 0,Go(["callNativeSync",me,Le],wt,!1))}function Si(me,Le){return xr("addListener",me,Le)}var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,lt=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?da(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&ca(Le,wt,kt),kt};let K=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.showCheckText=!1,this.type=0,this.root="",this.assist=!1,this.rootType="list",this.user=null,this.upMid=0,this.likeCount=0,this.isLike=!1,this.isDislike=!1,this.showMoreMenu=!1,this.options=[]}get pubDate(){return aa(this.data.ctime)}get likeIcon(){return this.isLike?"BDC/hand_thumbsup_fill/1":"BDC/hand_thumbsup_line/1"}get dislikeIcon(){return this.isDislike?"BDC/hand_thumbsdown_fill/2":"BDC/hand_thumbsdown_line/1"}get commentIcon(){return"BDC/bubble_comment_line/1"}get showText(){return this.data.root_str&&this.data.parent_str&&this.data.root_str!==this.data.parent_str}async handleLikeState(me){if(me==="like"){!this.isLike&&this.isDislike&&(this.isDislike=!1),this.isLike=!this.isLike,this.likeCount=this.isLike?this.likeCount+1:this.likeCount-1;return}!this.isDislike&&this.isLike&&(this.isLike=!1,this.likeCount=this.likeCount-1),this.isDislike=!this.isDislike}connectedCallback(){super.connectedCallback(),this.initData()}initData(){this.likeCount=this.data.like,this.isLike=this.data.action===1,this.isDislike=this.data.action===2,this.options=la({upMid:this.upMid,reply:this.data,user:this.user,top:this.data.reply_control.is_up_top||!1,ns:this.root?"reply":"main",assist:this.assist,isBiliPc:F()}),setTimeout(()=>{this.disposables.addEventListener(this.menu,"mouseleave",()=>{this.showMoreMenu=!1})})}updated(me){me.get("data")&&this.initData()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}async handleLike(){if(!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardLikeClick"});return}try{this.handleClickTrack(this.isLike?21:5);let me={};if(F()){const{app_id:wt,platform:$t}=Ce("app/getAppInfo");me={appId:wt||112,platform:$t||4}}const{code:Le}=await $s({oid:this.oid,type:this.type,rpid:this.data.rpid,action:this.isLike?0:1,statistics:JSON.stringify(me)});if(Le!==0)return;te({type:"click",spm_info:"main.comment.floor.like"},{msg:JSON.stringify({type:this.rootType==="list"?"root":"sub"})})}catch(me){console.error(me)}this.handleLikeState("like")}async handleHate(){if(!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardDisikeClick"});return}try{let me={};if(F()){const{app_id:wt,platform:$t}=Ce("app/getAppInfo");me={appId:wt||112,platform:$t||4}}this.handleClickTrack(this.isDislike?22:6);const{code:Le}=await Es({oid:this.oid,type:this.type,rpid:this.data.rpid,action:this.isDislike?0:1,statistics:JSON.stringify(me)});if(Le!==0)return;this.handleLikeState("dislike")}catch(me){console.error(me)}}handleClickTrack(me){this.dispatchEvent(new CustomEvent("track",{detail:{position:me}}))}handleReply(){this.handleClickTrack(28),this.dispatchEvent(new CustomEvent("reply"))}async handleCheckText(){this.handleClickTrack(26),this.dispatchEvent(new CustomEvent("view-dialog",{detail:{oid:this.oid,root:this.root,dialog:this.data.dialog_str}}))}handleMore(){this.handleClickTrack(8),this.showMoreMenu=!0}handleSelectOption(me){if(this.showMoreMenu=!1,!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardOptionClick"});return}this.dispatchEvent(new CustomEvent("action",{detail:me.detail}))}render(){return x$3`
      <div id="like">
        <button @click=${this.handleLike}>
          <bili-icon
            size="16"
            icon="${this.likeIcon}"
            style="${this.isLike?o$3({color:"var(--brand_pink)"}):""}"
          ></bili-icon>
          <span id="count">${this.likeCount>0?this.likeCount:""}</span>
        </button>
      </div>
      <div id="dislike">
        <button @click=${this.handleHate}>
          <bili-icon
            size="16"
            icon="${this.dislikeIcon}"
            style="${this.isDislike?o$3({color:"var(--brand_pink)"}):""}"
          ></bili-icon>
        </button>
      </div>
      <div id="reply">
        <button @click=${this.handleReply}>
          <bili-icon size="16" icon="${this.commentIcon}"></bili-icon>
        </button>
      </div>
      ${this.showCheckText&&this.showText?x$3` <div id="checkText">
            <button @click=${this.handleCheckText}>查看对话</button>
          </div>`:""}
      <div id="more">
        <button @click=${this.handleMore}>
          <bili-icon size="16" icon="BDC/more_vertical_fill/1"></bili-icon>
        </button>
        <bili-comment-menu
          style="${this.showMoreMenu?o$3({"--bili-comment-menu-display":"block"}):""}"
          .options=${this.options}
          @select=${this.handleSelectOption}
        ></bili-comment-menu>
      </div>
    `}};K.styles=i$6`
    :host {
      width: 100%;
      display: flex;
      height: 17px;
      align-items: center;
      position: relative;
      margin-top: 12px;
      font-size: 13px;
      color: var(--text3);
    }
    :host > *:not(:first-child) {
      margin-left: 20px;
    }

    button {
      padding: 0;
      outline: none;
      border: none;
      background: transparent;
      height: 24px;
      font-size: 13px;
      color: var(--text3);
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    button:hover {
      color: var(--brand_pink);
    }
    button span {
      margin-left: 5px;
      display: inline-block;
    }
    button bili-icon {
      vertical-align: middle;
    }

    #more {
      margin-left: auto;
      margin-right: 20px;
      width: 24px;
      height: 24px;
      position: relative;
    }
    #more button {
      width: 24px;
      height: 24px;
      text-align: center;
      display: var(--bili-comment-action-buttons-more-display, none);
    }
  `;lt([n$4()],K.prototype,"data",2);lt([n$4()],K.prototype,"oid",2);lt([n$4()],K.prototype,"showCheckText",2);lt([n$4()],K.prototype,"type",2);lt([n$4()],K.prototype,"root",2);lt([n$4()],K.prototype,"assist",2);lt([n$4()],K.prototype,"rootType",2);lt([n$4()],K.prototype,"user",2);lt([n$4()],K.prototype,"upMid",2);lt([t$1()],K.prototype,"pubDate",1);lt([t$1()],K.prototype,"likeCount",2);lt([t$1()],K.prototype,"isLike",2);lt([t$1()],K.prototype,"isDislike",2);lt([t$1()],K.prototype,"showMoreMenu",2);lt([t$1()],K.prototype,"likeIcon",1);lt([t$1()],K.prototype,"options",2);lt([i$3("bili-comment-menu")],K.prototype,"menu",2);K=lt([e$5("bili-comment-action-buttons-renderer")],K);const ha=(me,Le=!1)=>{var wt;const $t={...me};return(wt=me.pictures)!=null&&wt.length&&($t.pictures=JSON.stringify(me.pictures)),me.has_vote_option&&($t.has_vote_option="true"),X.request({method:"POST",url:"/x/v2/reply/add",data:{...$t,gaia_source:"main_web"},chainProxy:kt=>Le?kt:kt.with("UNIOS_RISK_USER_LOG",{active:!0}).with(Ei).with("UNIOS_WBI_ENCODE",{active:!0}),headers:{"Content-Type":"application/x-www-form-urlencoded"}})};function Ve(me){const Le=document.createElement("bili-modal");document.body.appendChild(Le),Le.show({...me,final:()=>{var wt;(wt=me.final)==null||wt.call(me),document.body.removeChild(Le)}})}function ot(me){return new Promise((Le,wt)=>{const $t={...me},kt=me.confirm===!1,It=me.cancel===!1;if(kt&&It)return wt("Not allow confirm and cancel both false");function Rt(Pt){var Xt;const Ft=Pt==="confirm",Ut=(Xt=me[Pt])!=null?Xt:Ft?"\u786E\u5B9A":"\u53D6\u6D88";if(typeof Ut=="function")$t[Pt]=async Jt=>{typeof Ut=="function"&&await Ut(Jt),Le(Ft)};else if(typeof Ut=="string")$t[Pt]={text:Ut,click:async Jt=>{await Jt(),Le(Ft)}};else{const Jt=Ut;$t[Pt]={text:Jt.text||(Pt==="confirm"?"\u786E\u5B9A":"\u53D6\u6D88"),click:async ii=>{await Jt.click(ii),Le(Ft)}}}}kt||It?me.final=()=>Le(kt):(Rt("confirm"),Rt("cancel")),Ve($t)})}const Dt={API:"//api.bilibili.com",API_CO:"//api.bilibili.co",API_VC:"//api.vc.bilibili.com",API_VC_CO:"//api.vc.bilibili.co",API_LIVE:"//api.live.bilibili.com",WWW:"//www.bilibili.com",SPACE:"//space.bilibili.com",SEARCH:"//search.bilibili.com",PASSPORT:"//passport.bilibili.com",BANGUMI:"//bangumi.bilibili.com",DATA:"//data.bilibili.com",T:"//t.bilibili.com",H:"//h.bilibili.com",VC:"//vc.bilibili.com",APP:"//app.bilibili.com",MESSAGE:"//message.bilibili.com",MEMBER:"//member.bilibili.com",LINK:"//link.bilibili.com",M:"//m.bilibili.com",LIVE:"//live.bilibili.com",CM:"//cm.bilibili.com"},Zi=me=>/https?:/.test(me)?me:(me.startsWith("//")||(me=`//${me}`),`${location.protocol}${me}`),Jo=(me,Le)=>{const wt=new URL(Zi(me));return Object.keys(Le).forEach($t=>{wt.searchParams.has($t)&&wt.searchParams.delete($t),wt.searchParams.append($t,encodeURIComponent(Le[$t]))}),wt.toJSON()},pa=me=>`${Dt.T}/${me}`,ua=me=>`${Dt.WWW}/read/cv${me}/`,ma=(me,Le="")=>`${Dt.SPACE}/${me}${Le}`,fa=me=>`${Dt.BANGUMI}/anime/${me}`,ga=me=>{const{bvid:Le,avid:wt,ssid:$t,epid:kt}=me;return Le?`${Dt.WWW}/video/${Le}/`:wt?`${Dt.WWW}/video/av${wt}/`:$t?`${Dt.WWW}/bangumi/play/ss${$t}`:kt?`${Dt.WWW}/bangumi/play/ep${$t}`:""},ba=me=>`${Dt.LIVE}/${me}`,va=me=>Jo(`${Dt.SEARCH}/all`,{keyword:me}),ya=(me,Le,wt=!0)=>{let $t=`${Dt.T}/lottery/h5/index/#/result`;return wt&&($t=`${Dt.WWW}/h5/lottery/result`),Jo($t,{business_type:String(me),business_id:String(Le),isWeb:"1"})},wa=(me,Le)=>(Le||(Le="comment"),`//t.bilibili.com/h5/dynamic/vote/#/result?vote_id=${me}&from=${Le}&isWeb=1`),Ct={DYN:pa,SPACE:ma,VIDEO:ga,ARTICLE:ua,PGC:fa,LIVE:ba,SEARCH:va,LOTTERY:ya,VOTE:wa};function xa(me,Le,wt){const $t=[];return Le&&Object.keys(Le).forEach(kt=>{Le[kt]!==void 0&&$t.push(`${kt}="${Le[kt]}"`)}),`<${me}${$t.length?` ${$t.join(" ")}`:""}>${wt?Array.isArray(wt)?wt.join(""):wt:""}</${me}>`}function _a(me){return Object.keys(me).map(Le=>`${Le}:${me[Le]}`).join(";")}function Ca(me,Le){return xa("iframe",{src:me,style:Le||""})}function Ii(me){var $t;const Le=document.createElement("bili-comments-popup");if(me.mask&&(Le.setAttribute("mask",""),me.maskClosable!==!1&&Le.setAttribute("maskClosable","")),Le.style.zIndex=(($t=me.zIndex)!=null?$t:I$3()+2e3).toString(),me.title&&Le.setAttribute("title",me.title),me.width){let kt="";typeof me.width=="number"?kt=`${me.width}px`:kt=me.width,Le.setAttribute("width",kt)}me.transparent&&Le.setAttribute("transparent","true");const wt=me.render();return typeof wt=="string"?Le.innerHTML=wt:Le.appendChild(wt),document.body.appendChild(Le),Le}function Yo(me){return Ii({title:"\u6295\u7968\u8BE6\u60C5",width:550,render:()=>Ca(Ct.VOTE(me),_a({"min-height":"550px"})),mask:!0})}function _r(me){var It,Rt;var Le,wt;const $t=document.createElement("bili-comment-report-form");$t.dataset.type=String(me.type),$t.dataset.oid=me.oid,$t.dataset.rpid=me.rpid,$t.dataset.mid=(It=(Le=me.member)==null?void 0:Le.mid)!=null?It:"",$t.dataset.uname=(Rt=(wt=me.member)==null?void 0:wt.uname)!=null?Rt:"",$t.dataset.ordering=me.ordering,$t.dataset.appId=String(me.appId||112),$t.dataset.platform=String(me.platform||4);const kt=Ii({title:"\u4E3E\u62A5",width:520,mask:!0,maskClosable:!0,render:()=>$t});$t.addEventListener("hide",()=>{kt.parentElement&&kt.parentElement.removeChild(kt)})}function ka(){const me=document.createElement("bili-comment-update-uname-form"),Le=Ii({title:"\u8BBE\u7F6E\u6635\u79F0",width:380,mask:!0,maskClosable:!0,render:()=>me});me.addEventListener("hide",()=>{Le.parentElement&&Le.parentElement.removeChild(Le)})}function pi(me){const Le=document.createElement("bili-comment-commercial-order-appeal-form");Le.dataset.type=String(me.type),Le.dataset.oid=String(me.oid),Le.dataset.rpid=me.rpid;const wt=Ii({title:"\u7533\u8BF7\u64A4\u9500\u63A8\u5E7F\u7F6E\u9876",width:520,mask:!0,maskClosable:!0,render:()=>Le});Le.addEventListener("hide",()=>{wt.parentElement&&wt.parentElement.removeChild(wt)})}var $a=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,N=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Ea(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&$a(Le,wt,kt),kt};let D=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.isSub=!1,this.mode=3,this.reply=null,this.user=null,this.avatarSize=48,this.keepActive=!1,this.active=!1,this.activeToggleTimer=0,this.inputValue="",this.placeholder="",this.voteOption=null,this.scrollContainer=null,this.pubBtnText="\u53D1\u5E03",this.uploadPicState=1,this.voteOptionHidden=!1,this.syncToDynamic=!1,this.showEmojiPicker=!1,this.mountEmojiPicker=!1,this.pics=[],this.mentionMap={},this.mentionText="",this.trackObserver=null}get hasContent(){return!!this.inputValue||this.pics.length>0||this.syncToDynamic}get uploadImgExts(){return["jpg","jpeg","png"]}get addNamespace(){return this.reply?q.REPLY:q.MAIN}connectedCallback(){super.connectedCallback(),this.disposables.addEventListener(document.documentElement,"click",me=>{if(this.style.getPropertyValue("--bili-comment-box-display")==="none"||!me.composedPath)return;const Le=me.composedPath();Le.includes(this.shadowRoot)||this.handleDeactive(),Le.includes(this.emojiPopover)||(this.showEmojiPicker=!1)},!0),this.disposables.addEventListener(document.documentElement,"mousedown",me=>{const Le=me.composedPath();(Le.includes(this.emojiPopover)||Le.includes(this.emojiButton))&&me.preventDefault()},!0)}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleActive(){this.active||this.voteOption&&this.voteOptionHidden&&(this.voteOptionHidden=!1),this.toggleActive(!0,20)}handleBlur(){this.toggleActive(!1,20)}handleDeactive(){var me;this.keepActive||((me=this.mentionPopover)==null||me.refresh(null),this.showEmojiPicker=!1,!this.hasContent&&this.toggleActive(!1,0))}toggleActive(me,Le=200){this.activeToggleTimer&&(window.clearTimeout(this.activeToggleTimer),this.activeToggleTimer=0),this.activeToggleTimer=window.setTimeout(()=>{this.active=me},Le)}handleFocusInput(){window.setTimeout(()=>{this.focus()},20)}handleInputChange(me){this.inputValue=me.detail}handleHideVoteOption(me){me.stopPropagation(),this.voteOptionHidden=!0}handleReset(){this.inputValue="",this.mentionMap={},this.picturesUpload.reset(),this.syncToDynamic&&(this.syncToDynamic=!1),this.toggleActive(!1),this.addNamespace===q.REPLY&&y.emit("hideReply")}handleTool(me,Le){var wt;if(Le.stopPropagation(),me==="emoji"){if(!this.mountEmojiPicker&&!this.showEmojiPicker&&(this.mountEmojiPicker=!0),this.showEmojiPicker=!0,this.showEmojiPicker){this.emojiPopover.style.zIndex=`${I$3()}`;const{bottom:$t,top:kt}=this.getBoundingClientRect();if(window.innerHeight-$t>=300)this.emojiPopover.style.removeProperty("top"),this.emojiPopover.style.setProperty("bottom","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(100%)");else{const It=(wt=this.scrollContainer)==null?void 0:wt.getBoundingClientRect();(It?kt-It.top>300:kt>300)?(this.emojiPopover.style.removeProperty("bottom"),this.emojiPopover.style.setProperty("top","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(-100%)")):(this.emojiPopover.style.removeProperty("top"),this.emojiPopover.style.setProperty("bottom","-10px"),this.emojiPopover.style.setProperty("left","-10px"),this.parentElement&&this.parentElement.id==="reply-container"&&this.emojiPopover.style.setProperty("left","-52px"),this.emojiPopover.style.setProperty("transform","translateY(100%)"))}}this.textarea.focus();return}this.showEmojiPicker=!1}handleUploadPic(){this.picturesUpload.trigger()}async handlePicsChange(me){try{this.pics=[...me.detail]}catch(Le){b.show(Le.message)}}handleSelectEmoji(me){setTimeout(()=>{this.textarea.insertText(me.detail.text),this.toggleActive(!0,20)})}handleSyncToDynamicChange(me){this.syncToDynamic=me.detail.checked}async handlePublish(me){var Le;if(me.stopPropagation(),this.showEmojiPicker=!1,!this.inputValue){b.show("\u4F60\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF01");return}let wt=0;try{const $t={plat:1,oid:this.oid,type:this.type,message:""};let kt=this.inputValue;if(this.reply&&(this.reply.parent?($t.root=this.reply.root_str,$t.parent=this.reply.rpid_str,this.placeholder&&(kt=`${this.placeholder}${kt}`)):($t.root=this.reply.rpid_str,$t.parent=this.reply.rpid_str)),$t.message=kt,this.voteOption&&!this.voteOptionHidden&&($t.has_vote_option=!0),Object.keys(this.mentionMap)&&($t.at_name_to_mid=this.mentionMap),this.pics.length&&($t.pictures=this.pics),this.syncToDynamic&&($t.sync_to_dynamic=1),F()){const{app_id:Ft,platform:Ut}=Ce("app/getAppInfo"),Xt={appId:Ft||112,platform:Ut||4};$t.statistics=JSON.stringify(Xt)}const{code:It,data:Rt,message:Pt}=await ha($t);if(It!==0||!Rt){switch(It){case 12074:wt=1;break;case 61001:wt=2;break;default:break}throw new Error(Pt||"\u53D1\u5E03\u5931\u8D25")}if(b.show(Rt.success_toast||"\u53D1\u5E03\u6210\u529F"),y.emit("add",{namespaces:[this.addNamespace],root:{type:this.rootType,params:{type:this.type,oid:this.oid}},method:this.addNamespace===q.MAIN?"unshift":"push",value:Rt.reply}),this.handleReset(),Rt.easter_egg){const{resource:Ft,jump_url:Ut}=Rt.easter_egg;y.emit("displayAlphaVideo",{src:Ft,jumpUrl:Ut})}te({type:"click",spm_info:"main.comment.reply.send"},{msg:JSON.stringify({type:this.reply?"sub":"root",oid:this.oid,root_rpid:((Le=this.reply)==null?void 0:Le.rpid_str)||"0"})})}catch($t){if(wt===1){ka();return}if(wt===2){ot({title:"\u8BF7\u7ED1\u5B9A\u624B\u673A\u53F7",message:"\u6839\u636E\u56FD\u5BB6\u5B9E\u540D\u5236\u8BA4\u8BC1\u7684\u76F8\u5173\u8981\u6C42\uFF0C\u60A8\u9700\u8981\u7ED1\u5B9A\u624B\u673A\u53F7\uFF0C\u624D\u80FD\u7EE7\u7EED\u8FDB\u884C\u64CD\u4F5C\u3002",cancel:!1,confirm:()=>{const kt="//passport.bilibili.com/account/security#/bindphone/unverify/set";window.open(kt)}});return}b.show($t.message)}}focus(){this.textarea.focus()}blur(){this.textarea.blur()}resetState(){this.emojiPopover&&this.emojiPopover.style.display!=="none"&&(this.showEmojiPicker=!1)}voteOptionTemplate(){return x$3`<div
      id="vote-option"
      class="${this.voteOptionHidden?o$1({hidden:!0}):""}"
    >
      <bili-comment-vote-option .data=${this.voteOption}></bili-comment-vote-option>
      <bili-icon @click=${this.handleHideVoteOption} size="12" icon="BDC/xmark_close_circle_fill/1"></bili-icon>
    </div>`}render(){return x$3`
      <div id="comment-area">
        <div
          id="emoji-popover"
          style=${o$3({display:this.showEmojiPicker?"block":"none"})}
        >
          ${this.mountEmojiPicker?x$3`<bili-emoji-picker @select=${this.handleSelectEmoji}></bili-emoji-picker>`:""}
        </div>
        <div id="body">
          <div
            id="editor"
            class=${this.keepActive||this.active?o$1({active:!0}):""}
            @click=${this.handleFocusInput}
          >
            ${this.voteOption?this.voteOptionTemplate():""}
            <bili-comment-textarea
              .value=${this.inputValue}
              .placeholder=${this.placeholder}
              @focus=${this.handleActive}
              @blur=${this.handleBlur}
              @change=${this.handleInputChange}
            ></bili-comment-textarea>
            <bili-comment-pictures-upload .accept=${this.uploadImgExts} @change=${this.handlePicsChange}></bili-comment-pictures-upload>
          </div>
        </div>
        <div
          id="footer"
          class=${o$1({hidden:!this.keepActive&&!this.active})}
        >
          <button id="emoji-button" class="tool-btn emoji" @click=${me=>this.handleTool("emoji",me)}>
            <bili-icon icon="BDC/emoji_circle_line/1" size="24"></bili-icon>
          </button>
          <div id="pub">
            <button
              class=${o$1({active:!!this.inputValue})}
              @click=${this.handlePublish}
            >
              ${this.pubBtnText}
            </button>
          </div>
        </div>
      </div>
    `}};D.styles=i$6`
    :host {
      --bili-comment-box-display: flex;
      display: var(--bili-comment-box-display);
    }

    #comment-area {
      position: relative;
      width: 100%;
    }
    #emoji-popover {
      position: absolute;
      left: 0;
    }

    #body {
      width: 100%;
      transition: height 0.2s;
    }
    #editor {
      width: 100%;
      padding: 0 12px;
      border: 1px solid var(--Ga1);
      box-sizing: border-box;
      border-radius: 6px;
      background-color: var(--bg2);
      transition: 0.2s;
      cursor: text;
    }
    #editor:hover,
    #editor.active {
      border: 1px solid var(--brand_pink);
    }
    #editor.active #vote-option {
      display: flex;
    }
    #editor #vote-option {
      display: none;
      padding: 0 8px;
      align-items: center;
      margin-bottom: 4px;
    }
    #editor #vote-option.hidden {
      display: none;
    }
    #editor #vote-option bili-comment-vote-option {
      margin-right: 4px;
    }
    #editor #vote-option bili-icon {
      color: var(--text4);
      cursor: pointer;
    }
    #editor bili-comment-pictures-upload {
      margin-top: 8px;
    }
    bili-comment-mention-popover {
      left: 38px;
      z-index: 2;
    }
    #pub {
      height: 32px;
      width: 70px;
      margin-left: auto;
    }
    #pub button {
      cursor: pointer;
      border-radius: 4px;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      font-size: 16px;
      color: var(--text_white);
      background-color: var(--brand_pink);
      opacity: 0.5;
    }
    #pub button:hover,
    #pub button.active {
      background-color: var(--brand_pink);
      opacity: 1;
    }

    #footer {
      position: relative;
      margin-top: 10px;
      display: flex;
      align-items: center;
    }

    /* 设置slot 隐藏 */
    #footer bili-popover > * {
      display: none;
    }

    .tool-btn {
      outline: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 32px;
      height: 26px;
      border: none;
      background-color: var(--bg1);
      border-radius: 4px;
      color: var(--text2);
      cursor: pointer;
      margin-right: 6px;
    }
    .tool-btn.disabled {
      color: var(--text4);
      cursor: not-allowed;
    }
  `;N([n$4()],D.prototype,"oid",2);N([n$4()],D.prototype,"type",2);N([n$4()],D.prototype,"rootType",2);N([n$4()],D.prototype,"isSub",2);N([n$4()],D.prototype,"mode",2);N([n$4()],D.prototype,"reply",2);N([n$4()],D.prototype,"user",2);N([n$4({type:Boolean})],D.prototype,"keepActive",2);N([t$1()],D.prototype,"active",2);N([n$4({type:String})],D.prototype,"inputValue",2);N([n$4({type:String})],D.prototype,"placeholder",2);N([n$4({type:Object})],D.prototype,"voteOption",2);N([n$4()],D.prototype,"scrollContainer",2);N([n$4({type:String})],D.prototype,"pubBtnText",2);N([n$4()],D.prototype,"uploadPicState",2);N([t$1()],D.prototype,"voteOptionHidden",2);N([t$1()],D.prototype,"syncToDynamic",2);N([t$1()],D.prototype,"showEmojiPicker",2);N([t$1()],D.prototype,"mountEmojiPicker",2);N([t$1()],D.prototype,"pics",2);N([t$1()],D.prototype,"hasContent",1);N([t$1()],D.prototype,"uploadImgExts",1);N([t$1()],D.prototype,"addNamespace",1);N([i$3("#editor bili-comment-textarea")],D.prototype,"textarea",2);N([i$3("#emoji-popover")],D.prototype,"emojiPopover",2);N([i$3("bili-comment-mention-popover")],D.prototype,"mentionPopover",2);N([i$3("#emoji-button")],D.prototype,"emojiButton",2);N([i$3("#editor bili-comment-pictures-upload")],D.prototype,"picturesUpload",2);D=N([e$5("bili-comment-box")],D);var Ta=Object.defineProperty,Sa=Object.getOwnPropertyDescriptor,Ie=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Sa(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Ta(Le,wt,kt),kt};let ee=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.commentBoxDisabledState=null,this.user=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleLogin(){if(!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.relpyInputClick"});return}}render(){var me,Le;return x$3`
      <div id="disabled-commentbox">
        ${((me=this.commentBoxDisabledState)==null?void 0:me.source)==="unlogin"?x$3`<div id="edit">
              <div @click=${this.handleLogin}>请先登录后发表评论 (・ω・)</div>
            </div>`:x$3`<div id="edit">
              <div>${((Le=this.commentBoxDisabledState)==null?void 0:Le.message)||"\u5565\u90FD\u6728\u6709"}</div>
            </div>`}
      </div>
    `}};ee.styles=i$6`
    #disabled-commentbox {
      display: flex;
      height: 32px;
      cursor: pointer;
    }
    #disabled-commentbox #user-avatar {
      flex-shrink: 0;
      width: 80px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #disabled-commentbox #user-avatar img {
      border-radius: 50%;
    }
    #disabled-commentbox #edit {
      flex: 1;
      height: 100%;
      border-radius: 6px;
      font-size: 12px;
      color: var(--text3);
      background-color: var(--bg3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #disabled-commentbox #edit button {
      box-sizing: border-box;
      padding: 4px 9px;
      margin: 0 3px;
      border-radius: 4px;
      color: var(--text_white);
      background-color: var(--brand_blue);
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 12px;
    }
    #disabled-commentbox #edit button:hover {
      background-color: var(--Lb4);
    }
  `;Ie([n$4()],ee.prototype,"oid",2);Ie([n$4()],ee.prototype,"type",2);Ie([n$4()],ee.prototype,"rootType",2);Ie([n$4({type:Object})],ee.prototype,"commentBoxDisabledState",2);Ie([n$4()],ee.prototype,"user",2);ee=Ie([e$5("bili-comment-disabled-box")],ee);const Ia=me=>X.request({url:"/x/v2/reply/at",params:{...me}});var Pa=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Cr=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Oa(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Pa(Le,wt,kt),kt};let ze=class extends s$4{constructor(){super(...arguments),this.keyword="",this.groups=[]}handleVisible(me){this.style[me?"setProperty":"removeProperty"]("display","flex")}async refresh(me){if(this.groups=[],me===null){this.keyword="",this.handleVisible(!1);return}this.keyword=me;try{const{code:Le,data:wt}=await Ia({keyword:me});Le===0&&wt!=null&&wt.groups&&(this.groups=wt.groups)}catch(Le){console.error(Le)}this.handleVisible(!0)}handleSelect(me){const Le=me.target.dataset,wt=Number(Le.group),$t=Number(Le.item);if(isNaN(wt)||isNaN($t))return;const kt=this.groups[wt].items[$t];kt&&this.dispatchEvent(new CustomEvent("select",{detail:{mid:kt.mid,name:kt.name}}))}renderKeywordName(me){if(this.keyword){const Le=me.indexOf(this.keyword);if(Le>-1)return x$3`${me.slice(0,Le)}<em>${this.keyword}</em>${me.slice(Le+this.keyword.length)}`}return x$3`${me}`}renderCountDesc(me){return`${Ds(me)}\u7C89\u4E1D`}itemTemplate(me,Le,wt){return x$3`<li class="item" data-group="${wt}" data-item="${Le}" @click=${this.handleSelect}>
      <div class="item-avatar">
        <img
          src="${utils$2.getBmgSrcNext(me.face,{w:36,h:36,dpr:2})}"
        />
      </div>
      <div class="item-info">
        <div class="item-name">${this.renderKeywordName(me.name)}</div>
        <div class="item-desc">${this.renderCountDesc(me.fan)}</div>
      </div>
    </li>`}render(){return x$3`<div id="title">选择或输入你想@的人</div>
      ${this.groups.length?x$3`<div id="content">
            ${this.groups.map((me,Le)=>x$3`<div class="group">
                <div class="group-name">${me.group_name}</div>
                <ul class="group-items">
                  ${me.items.map((wt,$t)=>this.itemTemplate(wt,$t,Le))}
                </ul>
              </div>`)}
          </div>`:""}`}};ze.styles=i$6`
    :host {
      --max-content-height: 282px;
      position: absolute;
      display: none;
      flex-direction: column;
      width: 219px;
      border: 1px solid var(--graph_bg_thick);
      border-radius: 6px;
      font-size: 12px;
      background-color: var(--bg1);
      box-shadow: 0 2px 10px #00000014;
    }
    #title {
      width: 100%;
      height: 41px;
      padding: 12px;
      color: var(--text2);
      font-size: 12px;
      box-sizing: border-box;
    }
    #content {
      max-height: var(--max-content-height);
      overflow-x: hidden;
      overflow-y: scroll;
    }
    #content::-webkit-scrollbar {
      width: 4px;
      border-radius: 4px;
      background-color: transparent;
    }
    #content::-webkit-scrollbar-thumb {
      border-radius: 4px;
      border-radius: 4px;
      background-color: var(--graph_bg_thick);
      transition: 0.3s ease-in-out;
    }
    #content::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }

    .group {
    }
    .group-name {
      padding: 0 12px;
      color: var(--text2);
    }
    .group-items {
      padding: 0;
      margin: 0;
    }
    .item {
      display: flex;
      align-items: center;
      height: 52px;
      padding: 0 12px;
      margin: 4px 0;
      cursor: pointer;
      box-sizing: border-box;
    }
    .item:hover {
      background-color: var(--bg2_float);
    }
    .item-avatar {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      pointer-events: none;
    }
    .item-avatar img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .item-info {
      font-size: 12px;
      color: var(--text1);
      pointer-events: none;
    }
    .item-name em {
      color: var(--brand_blue);
      font-style: normal;
    }
    .item-desc {
      color: var(--text3);
    }
  `;Cr([t$1()],ze.prototype,"keyword",2);Cr([t$1()],ze.prototype,"groups",2);ze=Cr([e$5("bili-comment-mention-popover")],ze);var Da=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Ko=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?La(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Da(Le,wt,kt),kt};let ui=class extends s$4{constructor(){super(...arguments),this.options=[]}handleClick(me){this.dispatchEvent(new CustomEvent("select",{detail:me}))}render(){return x$3`
      <ul id="options">
        ${this.options.map(me=>x$3` <li @click=${()=>this.handleClick(me)}>${me.text}</li> `)}
      </ul>
    `}};ui.styles=i$6`
    :host {
      --bili-comment-menu-display: none;
      --bili-comment-menu-position: absolute;
      --bili-comment-menu-top: 10px;
      --bili-comment-menu-right: 0;
    }
    #options {
      display: var(--bili-comment-menu-display);
      position: var(--bili-comment-menu-position);
      background-color: var(--bg1_float);
      overflow: hidden;
      top: var(--bili-comment-menu-top);
      right: var(--bili-comment-menu-right);
      margin: 0;
      padding: 12px 0;
      z-index: 10;
      width: 120px;
      list-style: none;
      border: 1px solid var(--bg2_float);
      border-radius: 6px;
      font-size: 14px;
      color: var(--text1);
      box-shadow: 0 0 5px #0003;
    }

    #options li {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 15px;
      cursor: pointer;
      user-select: none;
      color: var(--text3);
    }
    #options li:hover {
      background-color: var(--graph_bg_thick);
    }
  `;Ko([n$4()],ui.prototype,"options",2);ui=Ko([e$5("bili-comment-menu")],ui);function Aa(me,Le){const wt=[],$t=me.length===1;for(const kt of me){const{img_src:It,img_width:Rt,img_height:Pt}=kt;let{width:Ft,height:Ut}=Le.multiple;const Xt=Rt>Pt,Jt=Math.floor(Xt?Rt/Pt:Pt/Rt)>=3,ii={x:0,y:0,w:Ft,h:Ut};if($t){const Ni=Le.single[Xt?"horizontal":"vertical"],Vi=Ni.width/Ni.height,zi=Rt/Pt;Jt||!Xt&&Rt>Ni.width&&Pt>Ni.height?(Ft=Ni.width,Ut=Ni.height,ii.w=Ft,ii.h=Ut):zi>Vi?(Ft=Ni.width,Ut=Math.floor(Ft/zi)):(Ut=Ni.height,Ft=Math.floor(Ut*zi))}wt.push({width:Ft,height:Ut,src:utils$2.getBmgSrcNext(It,{w:Jt&&Xt?0:Ft,h:Jt&&!Xt?0:Ut,s:!0,...Jt?{a:ii}:{c:!$t},dpr:2}),original:kt})}return wt}var Ra=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,kr=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Ma(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Ra(Le,wt,kt),kt};let Fe=class extends s$4{constructor(){super(...arguments),this.list=[]}get items(){return Aa(this.list,{single:{horizontal:{width:240,height:135},vertical:{width:135,height:180}},multiple:{width:88,height:88}}).slice(0,3)}handleView(me){this.dispatchEvent(new CustomEvent("preview-image",{detail:{imageList:this.list,index:me}}))}render(){return x$3`
      <div id="content">
        ${this.items.map((me,Le)=>x$3` <img
            src="${me.src}"
            width="${me.width}"
            height="${me.height}"
            loading="lazy"
            @click=${()=>this.handleView(Le)}
          />`)}
        ${this.list.length>this.items.length?x$3`<div id="more-tag">+${this.list.length-this.items.length}</div>`:""}
      </div>
    `}};Fe.styles=i$6`
    :host {
    }
    #content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 364px;
    }
    #content img {
      display: block;
      border-radius: var(--bili-comment-picutres-border-radius, 6px);
      cursor: zoom-in;
    }
    #more-tag {
      position: absolute;
      left: 244px;
      bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 2px;
      border-radius: 4px;
      font-size: 13px;
      color: var(--text_white);
      font-weight: 500;
      line-height: 18px;
      background: rgba(0, 0, 0, 0.7);
      pointer-events: none;
    }
  `;kr([n$4({type:Array})],Fe.prototype,"list",2);kr([t$1()],Fe.prototype,"items",1);Fe=kr([e$5("bili-comment-pictures-renderer")],Fe);function Ba(me){return new Promise((Le,wt)=>{const $t=new FileReader;$t.onload=kt=>{Le(kt.target.result)},$t.onerror=()=>{wt(new Error("blobToBase64 error"))},$t.readAsDataURL(me)})}function Pi(){const me={};return me.promise=new Promise((Le,wt)=>{me.resolve=Le,me.reject=wt}),me}var ja=(me,Le,wt)=>{if(!Le.has(me))throw TypeError("Cannot "+wt)},qt=(me,Le,wt)=>{if(Le.has(me))throw TypeError("Cannot add the same private member more than once");Le instanceof WeakSet?Le.add(me):Le.set(me,wt)},jt=(me,Le,wt)=>(ja(me,Le,"access private method"),wt),Qi,Zo,$r,Qo,Er,Xo,Tr,tn,Sr,en,Ir,rn,Pr,on,Or,nn,mi,Xi;const uo=8,Na=20,Va=10,za=10,mo=1048576;var sn=(me=>(me[me.PICTURE_UPLOAD_STATUS_INITIAL=0]="PICTURE_UPLOAD_STATUS_INITIAL",me[me.PICTURE_UPLOAD_STATUS_SUCCESS=1]="PICTURE_UPLOAD_STATUS_SUCCESS",me[me.PICTURE_UPLOAD_STATUS_FAILURE=2]="PICTURE_UPLOAD_STATUS_FAILURE",me))(sn||{});class we{constructor(Le){qt(this,Qi),qt(this,$r),qt(this,Er),qt(this,Tr),qt(this,Sr),qt(this,Ir),qt(this,Pr),qt(this,Or),qt(this,mi),this.defer=null,this.config=Object.assign({},{remoteOptions:{url:"",body:()=>({})},accept:["png","jpeg","jpg","gif"],multiple:!1,maxSize:Na,minWidth:Va,minHeight:za,onComplete:()=>{},onError:()=>{}},Le||{}),jt(this,Qi,Zo).call(this)}trigger(){return this.defer=Pi(),this.el.click(),this.defer.promise}}Qi=new WeakSet;Zo=function(){const me=document.createElement("input");me.type="file",this.config.multiple&&me.setAttribute("multiple","multiple");const Le=this.config.accept.filter(Boolean).map(wt=>`image/${wt}`).join(", ");me.accept=Le||"image/png, image/jpeg, image/jpg, image/gif",me.name="upload",me.addEventListener("change",jt(this,Or,nn).bind(this)),this.el=me,this.defer=null};$r=new WeakSet;Qo=function(me){const Le=me.type||"";for(let wt=0;wt<this.config.accept.length;wt++)if(Le.indexOf(this.config.accept[wt])>-1)return"";return`\u4EC5\u652F\u6301${this.config.accept.map(wt=>wt.toLocaleUpperCase()).join(" ")}`};Er=new WeakSet;Xo=function(me){return((me==null?void 0:me.type)||"").indexOf("gif")>-1?Math.floor(me.size/mo)>=uo?`\u8BF7\u4E0A\u4F20\u5C0F\u4E8E${uo}MB\u7684Gif\u56FE\u7247`:"":Math.floor(me.size/mo)>=this.config.maxSize?`\u8BF7\u4E0A\u4F20\u5C0F\u4E8E${this.config.maxSize}MB\u7684\u56FE\u7247`:""};Tr=new WeakSet;tn=function(me){return me<this.config.minWidth?`\u56FE\u7247\u5BBD\u5EA6\u4E0D\u5F97\u5C0F\u4E8E${this.config.minWidth}\u50CF\u7D20`:""};Sr=new WeakSet;en=function(me){return me<this.config.minHeight?`\u56FE\u7247\u9AD8\u5EA6\u4E0D\u5F97\u5C0F\u4E8E${this.config.minHeight}\u50CF\u7D20`:""};Ir=new WeakSet;rn=function(me,Le){return new Promise((wt,$t)=>{const kt=Ft=>{me.status=2,me.msg=Ft},It=jt(this,$r,Qo).call(this,Le);if(It)return kt(It),$t(me);const Rt=jt(this,Er,Xo).call(this,Le);if(Rt)return kt(Rt),$t(me);const Pt=new Image;Pt.src=URL.createObjectURL(Le),Pt.onload=async()=>{const Ft=jt(this,Tr,tn).call(this,Pt.width);if(Ft)return kt(Ft),$t(me);const Ut=jt(this,Sr,en).call(this,Pt.height);if(Ut)return kt(Ut),$t(me);try{me.src=await Ba(Le)}catch(Xt){console.log(Xt)}try{const Xt=await X.request({url:this.config.remoteOptions.url,method:"POST",data:this.config.remoteOptions.body(Le)});if(Xt.code!==0)throw new Error(Xt.message);me.data=this.config.remoteOptions.response(Xt),me.status=1,wt(me)}catch{kt("\u4E0A\u4F20\u5931\u8D25"),$t(me)}}})};Pr=new WeakSet;on=function(){return{status:0,msg:"",src:"",data:null}};Or=new WeakSet;nn=function(me){var Le,wt;const $t=[],kt=me.target,It=Array.from(kt.files);if(kt.value="",It.length===0)return(Le=this.defer)==null?void 0:Le.reject("empty");this.config.onBeforeUpload&&this.config.onBeforeUpload(It);const Rt=[];It.forEach(Pt=>{const Ft=jt(this,Pr,on).call(this);$t.push(Ft),Rt.push(jt(this,Ir,rn).call(this,Ft,Pt))}),setTimeout(async()=>{if(Rt.length===$t.length)try{await Promise.all(Rt),jt(this,mi,Xi).call(this,this.config.onComplete,$t)}catch(Pt){jt(this,mi,Xi).call(this,this.config.onError,Pt)}}),(wt=this.defer)==null||wt.resolve($t)};mi=new WeakSet;Xi=async function(me,...Le){if(typeof me!="function")throw new Error("cb is not a function");return await me(...Le)};we.status=sn;var Fa=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,ne=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Ua(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Fa(Le,wt,kt),kt};let Vt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.items=[],this.showSlideLeft=!1,this.showSlideRight=!1,this.slideOffsetX=0,this.slideToRight=!1}connectedCallback(){super.connectedCallback(),this.uploader=new we({remoteOptions:{url:"/x/dynamic/feed/draw/upload_bfs",body:me=>{const Le=new FormData;return Le.append("file_up",me),Le.append("biz","new_dyn"),Le.append("category","daily"),Le},response:me=>({img_src:me.data.image_url,img_width:me.data.image_width,img_height:me.data.image_height,img_size:me.data.img_size})},accept:this.accept||["png","jpeg","jpg"],multiple:!0,onComplete:()=>{this.requestUpdate(),this.updateState()},onBeforeUpload:me=>{const Le=me.length+this.items.length-9;Le>0&&(me.splice(me.length-Le),b.show("\u4E0A\u4F20\u56FE\u7247\u4E0D\u5F97\u8D85\u8FC79\u5F20\uFF08\uFFE3\u221E\uFFE3\uFF09"))}}),this.disposables.addEventListener(window,"resize",this.handleSlideBtnVisible.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}reset(){this.items=[],this.updateState()}async trigger(){try{const me=await this.uploader.trigger();this.items=[...this.items,...me],this.items.length&&this.updateVisible(!0)}catch(me){b.show(me.message)}}updateState(){this.handleSlideBtnVisible(),this.dispatchEvent(new CustomEvent("change",{detail:this.items.filter(me=>me.data&&me.status===we.status.PICTURE_UPLOAD_STATUS_SUCCESS).map(me=>me.data)}))}handleComputeOffset(){const me=this.contentEl.parentElement.offsetWidth,Le=this.contentEl.offsetWidth,wt=8*2;this.slideOffsetX=Math.max(0,Le+wt-me)}handleSlideBtnVisible(){if(this.handleComputeOffset(),this.slideOffsetX<=0){this.showSlideLeft=!1,this.showSlideRight=!1;return}this.showSlideLeft=this.slideToRight,this.showSlideRight=!this.showSlideLeft}handleSlide(me){this.slideOffsetX!==0&&(this.slideToRight=me,this.showSlideLeft=me,this.showSlideRight=!this.showSlideLeft)}updateVisible(me){this.style.display=me?"flex":"none"}removeItem(me){const Le=[...this.items];Le.splice(me,1),this.items=Le,this.items.length===0&&this.updateVisible(!1),this.updateState()}itemTemplate(me,Le){const wt=()=>{switch(me.status){case we.status.PICTURE_UPLOAD_STATUS_INITIAL:return x$3`<div class="mask">
            <img class="loading" width="24" height="24" src="//i0.hdslb.com/bfs/static/jinkela/long/gif/loading-blue.gif" />
          </div>`;case we.status.PICTURE_UPLOAD_STATUS_FAILURE:return x$3`<div class="mask error"><div class="msg">${me.msg||"\u4E0A\u4F20\u5931\u8D25"}</div></div>`;case we.status.PICTURE_UPLOAD_STATUS_SUCCESS:default:return""}};return x$3`<div class="item">
      <div class="close" @click=${()=>this.removeItem(Le)}>
        <bili-icon icon="BDC/xmark_close_line/1" size="12"> </bili-icon>
      </div>
      ${me.src?x$3`<img src=${me.src} alt="图片" />`:""} ${wt()}
    </div>`}render(){return x$3`
      <div
        id="wrapper"
        class="${o$1({"slide-left":this.showSlideLeft,"slide-right":this.showSlideRight})}"
      >
        <div id="shadow" class="left"></div>
        <div id="slide-btn" class="left" @click=${()=>this.handleSlide(!1)}>
          <bili-icon icon="BDC/arrow_back_left_line/3" size="12"></bili-icon>
        </div>
        <div
          id="content"
          style="${o$3({transform:`translateX(${this.slideToRight?-this.slideOffsetX:0}px)`})}"
        >
          ${this.items.map((me,Le)=>this.itemTemplate(me,Le))}
        </div>
        <div id="slide-btn" class="right" @click=${()=>this.handleSlide(!0)}>
          <bili-icon icon="BDC/arrow_back_left_line/3" size="12"></bili-icon>
        </div>
        <div id="shadow" class="right"></div>
      </div>
    `}};Vt.styles=i$6`
    :host {
      display: none;
    }
    #wrapper {
      position: relative;
      padding: 0 8px;
      width: 100%;
      overflow: hidden;
    }
    #wrapper.slide-left #slide-btn.left,
    #wrapper.slide-left #shadow.left {
      display: flex;
    }
    #wrapper.slide-right #slide-btn.right,
    #wrapper.slide-right #shadow.right {
      display: flex;
    }
    #slide-btn {
      position: absolute;
      top: 50%;
      display: none;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid var(--line_regular);
      background-color: #fff;
      color: var(--text3);
      cursor: pointer;
      z-index: 2;
    }
    #slide-btn.left {
      left: 8px;
      transform: translateY(-50%);
    }
    #slide-btn.right {
      right: 8px;
      transform: translateY(-50%) rotate(180deg);
    }
    #shadow {
      display: none;
      position: absolute;
      top: 0;
      width: 20px;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    #shadow.left {
      left: 0;
      background: linear-gradient(to right, #fff, #fff 28.5%, rgba(255, 255, 255, 0) 100%);
    }
    #shadow.right {
      right: 0;
      background: linear-gradient(to left, #fff 28.5%, rgba(255, 255, 255, 0) 100%);
    }
    #content {
      width: fit-content;
      display: flex;
      flex-wrap: nowrap;
      transition: 0.2s ease-in-out;
    }
    .item {
      position: relative;
      width: 72px;
      height: 72px;
      border-radius: 4px;
      background-color: #f1f2f3;
      overflow: hidden;
      flex-shrink: 0;
    }
    .item .close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      border-radius: 0 4px;
      background-color: #0003;
      color: #fff;
      cursor: pointer;
      z-index: 2;
    }
    .item > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .item .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0005;
      flex-direction: column;
      color: #fff;
      font-size: 20px;
      z-index: 1;
    }
    .item .mask.error {
      color: #f85a54;
    }
    .item .mask .msg {
      height: 14px;
      font-size: 20px;
      transform: scale(0.5);
      transform-origin: center center;
      font-weight: 500;
      white-space: nowrap;
    }

    #content .item:not(:last-child) {
      margin-right: 8px;
    }
  `;ne([n$4()],Vt.prototype,"accept",2);ne([t$1()],Vt.prototype,"items",2);ne([t$1()],Vt.prototype,"showSlideLeft",2);ne([t$1()],Vt.prototype,"showSlideRight",2);ne([t$1()],Vt.prototype,"slideOffsetX",2);ne([t$1()],Vt.prototype,"slideToRight",2);ne([i$3("#content")],Vt.prototype,"contentEl",2);Vt=ne([e$5("bili-comment-pictures-upload")],Vt);var Wt=(me=>(me.PC_BROWSER="pc_browser",me.MOBILE_BROWSER="mobile_browser",me.DESKTOP_APP="desktop_app",me))(Wt||{});const qa=(me,Le)=>{if(!me)return[];const wt=[];let $t=me.indexOf(Le);for(;$t!==-1;){const kt=me.slice(0,$t);kt&&wt.push({type:0,text:kt}),wt.push({type:1,text:Le}),me=me.slice($t+Le.length),$t=me.indexOf(Le)}return me&&wt.push({type:0,text:me}),wt},Zt=(me,Le)=>{if(!me)return[];const wt=me.match(Le);if(!wt)return[{type:0,text:me}];let $t=0;const kt=wt.reduce((It,Rt)=>{const Pt=[],Ft=me.slice($t).indexOf(Rt),Ut=me.slice($t,$t+Ft);return Ut&&Pt.push({type:0,text:Ut}),Pt.push({type:1,text:Rt}),$t=$t+Ft+Rt.length,It.concat(Pt)},[]);return $t<me.length&&kt.push({type:0,text:me.slice($t)}),kt};function Qt(me,Le){return(wt,$t)=>{for(let kt=0;kt<$t.length;kt++){const It=$t[kt];It.type?wt.push(me(It.text)):Le(wt,It.text)}}}var Ha=Object.defineProperty,Wa=Object.defineProperties,Ga=Object.getOwnPropertyDescriptors,fo=Object.getOwnPropertySymbols,Ja=Object.prototype.hasOwnProperty,Ya=Object.prototype.propertyIsEnumerable,tr=(me,Le,wt)=>Le in me?Ha(me,Le,{enumerable:!0,configurable:!0,writable:!0,value:wt}):me[Le]=wt,Me=(me,Le)=>{for(var wt in Le||(Le={}))Ja.call(Le,wt)&&tr(me,wt,Le[wt]);if(fo)for(var wt of fo(Le))Ya.call(Le,wt)&&tr(me,wt,Le[wt]);return me},Ka=(me,Le)=>Wa(me,Ga(Le)),Wi=(me,Le,wt)=>(tr(me,typeof Le!="symbol"?Le+"":Le,wt),wt);const Za=/(https?:\/\/)((?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))+(?:\.(?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))*)+)((?:\/(?!\/)(?:[a-zA-Z0-9]|[.~!@$%^&*=+_-](?=[a-zA-Z0-9]))*)*)([?#][a-zA-Z0-9\[{\]}\\\|;:'",<.>/?`~!@#$%^&*()=+_-]{0,256})?/,Qa=/(https?:\/\/)((?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))+(?:\.(?:[a-zA-Z0-9]|[_-](?=[a-zA-Z0-9]))*)+)((?:\/(?!\/)(?:[a-zA-Z0-9]|[.~!@$%^&*=+_-](?=[a-zA-Z0-9]))*)*)/,xe="default",ai={blacklist:{domain:[],rex:[]},whitelist:{domain:[],rex:[]}},Xa=me=>Ka(Me({},me!=null?me:{}),{appKey:"333.1339",nscode:7}),go=me=>{const Le=[];for(let wt=0;wt<me.length;wt++)/[^a-zA-Z0-9]/.test(me[wt])?Le.push(`\\${me[wt]}`):Le.push(me[wt]);return Le.join("")},tl=me=>{const Le={domain:[],rex:[]},wt={domain:[],rex:[]};return me==null||me.forEach($t=>{var kt,It,Rt,Pt,Ft,Ut,Xt,Jt,ii,Ni,Vi,zi;(Rt=Le.domain)==null||Rt.push(...(It=(kt=$t==null?void 0:$t.whitelist)==null?void 0:kt.domain)!=null?It:[]),(Ut=Le.rex)==null||Ut.push(...(Ft=(Pt=$t==null?void 0:$t.whitelist)==null?void 0:Pt.rex)!=null?Ft:[]),(ii=wt.domain)==null||ii.push(...(Jt=(Xt=$t==null?void 0:$t.blacklist)==null?void 0:Xt.domain)!=null?Jt:[]),(zi=wt.rex)==null||zi.push(...(Vi=(Ni=$t==null?void 0:$t.blacklist)==null?void 0:Ni.rex)!=null?Vi:[])}),{whitelist:Le,blacklist:wt}},el=(me,Le)=>{var wt,$t,kt,It,Rt,Pt,Ft,Ut;const Xt=Le!=null?Le:xe;let Jt=Me({},ai);try{const ii=me;let Ni=Me({},ai),Vi=Me({},ai);Ni={blacklist:JSON.parse(($t=(wt=ii==null?void 0:ii[xe])==null?void 0:wt.blacklist)!=null?$t:"{}"),whitelist:JSON.parse((It=(kt=ii==null?void 0:ii[xe])==null?void 0:kt.whitelist)!=null?It:"{}")},Xt!==xe&&(Vi={blacklist:JSON.parse((Pt=(Rt=ii==null?void 0:ii[Xt])==null?void 0:Rt.blacklist)!=null?Pt:"{}"),whitelist:JSON.parse((Ut=(Ft=ii==null?void 0:ii[Xt])==null?void 0:Ft.whitelist)!=null?Ut:"{}")}),Jt=tl([Ni,Vi])}catch(ii){console.warn(ii)}return Jt},an=(me,Le)=>{var wt,$t,kt,It,Rt,Pt,Ft,Ut,Xt,Jt;if(typeof me!="string")return!1;const ii=($t=(wt=Qa.exec(me))==null?void 0:wt[0])!=null?$t:"";if(!ii)return!1;const Ni=(It=(kt=Le==null?void 0:Le.blacklist)==null?void 0:kt.rex)!=null?It:[];for(const Qn of Ni)if(new RegExp(Qn).test(ii))return!1;const Vi=(Pt=(Rt=Le==null?void 0:Le.blacklist)==null?void 0:Rt.domain)!=null?Pt:[];for(const Qn of Vi)if(new RegExp(`(?:^(?:https?://)?(?:[a-zA-Z0-9_-]+.)?)(${go(Qn)})(?=[\\/?#]|$)`).test(ii))return!1;const zi=(Ut=(Ft=Le==null?void 0:Le.whitelist)==null?void 0:Ft.rex)!=null?Ut:[];for(const Qn of zi)if(new RegExp(Qn).test(ii))return!0;const Xn=(Jt=(Xt=Le==null?void 0:Le.whitelist)==null?void 0:Xt.domain)!=null?Jt:[];for(const Qn of Xn)if(new RegExp(`(?:^(?:https?://)?(?:[a-zA-Z0-9_-]+.)?)(${go(Qn)})(?=[\\/?#]|$)`).test(ii))return!0;return!1},il=(me,Le)=>{if(typeof me!="string")return[];const wt=[],$t=me.matchAll(new RegExp(Za,"g")),kt=Array.from($t);let It=0;for(const Rt of kt){const Pt=Rt[0];if(!an(Pt,Le))continue;const Ft=Rt.index,Ut=Ft+Pt.length;It<Ft&&wt.push({value:me.slice(It,Ft),type:"text"}),wt.push({value:Pt,type:"link"}),It=Ut}return It<me.length&&wt.push({value:me.slice(It,me.length),type:"text"}),wt};let bo=class{constructor(me){Wi(this,"rawKvConfig",{}),Wi(this,"scene",xe),Wi(this,"urlRuleSceneConfig",Me({},ai));var Le,wt;this.rawKvConfig=(Le=me==null?void 0:me.rawKvConfig)!=null?Le:{},this.scene=(wt=me==null?void 0:me.scene)!=null?wt:xe,this.urlRuleSceneConfig=el(this.rawKvConfig,this.scene)}static getKvInitConfig(me){return Xa(me)}isWhitelistUrl(me){return an(me,this.urlRuleSceneConfig)}getProcessedText(me){return il(me,this.urlRuleSceneConfig)}},er=null;const Dr=async()=>{if(!er)try{const me=await(await useKv(bo.getKvInitConfig())).getAll();er=new bo({rawKvConfig:me,scene:"comments"})}catch{Ki("tech","comments.urlkv.failed",{})}},rl=()=>er,ol={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Oi=me=>me.replace(/[&<>"'``]/g,Le=>ol[Le]||Le),vo=(me,Le)=>(me=me.replace(/^(https?:)?\/\//,"//"),Le?me.indexOf("//")===0?me:`//${me}`:me),nl=me=>me.replace(/^(https?:)?\/\//,"https://"),ln="%[a-f0-9]{2}",yo=new RegExp("("+ln+")|([^%]+?)","gi"),wo=new RegExp("("+ln+")+","gi");function ir(me,Le){try{return[decodeURIComponent(me.join(""))]}catch{}if(me.length===1)return me;Le=Le||1;const wt=me.slice(0,Le),$t=me.slice(Le);return Array.prototype.concat.call([],ir(wt),ir($t))}function sl(me){try{return decodeURIComponent(me)}catch{let Le=me.match(yo)||[];for(let wt=1;wt<Le.length;wt++)me=ir(Le,wt).join(""),Le=me.match(yo)||[];return me}}function al(me){const Le={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"};let wt=wo.exec(me);for(;wt;){try{Le[wt[0]]=decodeURIComponent(wt[0])}catch{const kt=sl(wt[0]);kt!==wt[0]&&(Le[wt[0]]=kt)}wt=wo.exec(me)}Le["%C2"]="\uFFFD";const $t=Object.keys(Le);for(const kt of $t)me=me.replace(new RegExp(kt,"g"),Le[kt]);return me}function ll(me){if(typeof me!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof me+"`");try{return decodeURIComponent(me)}catch{return al(me)}}function cl(me,Le){const wt={};if(Array.isArray(Le))for(const $t of Le){const kt=Object.getOwnPropertyDescriptor(me,$t);kt!=null&&kt.enumerable&&Object.defineProperty(wt,$t,kt)}else for(const $t of Reflect.ownKeys(me)){const kt=Object.getOwnPropertyDescriptor(me,$t);if(kt.enumerable){const It=me[$t];Le($t,It,me)&&Object.defineProperty(wt,$t,kt)}}return wt}function cn(me,Le){if(!(typeof me=="string"&&typeof Le=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(me===""||Le==="")return[];const wt=me.indexOf(Le);return wt===-1?[]:[me.slice(0,wt),me.slice(wt+Le.length)]}const dl=me=>me==null,hl=me=>encodeURIComponent(me).replaceAll(/[!'()*]/g,Le=>`%${Le.charCodeAt(0).toString(16).toUpperCase()}`),rr=Symbol("encodeFragmentIdentifier");function pl(me){switch(me.arrayFormat){case"index":return Le=>(wt,$t)=>{const kt=wt.length;return $t===void 0||me.skipNull&&$t===null||me.skipEmptyString&&$t===""?wt:$t===null?[...wt,[G(Le,me),"[",kt,"]"].join("")]:[...wt,[G(Le,me),"[",G(kt,me),"]=",G($t,me)].join("")]};case"bracket":return Le=>(wt,$t)=>$t===void 0||me.skipNull&&$t===null||me.skipEmptyString&&$t===""?wt:$t===null?[...wt,[G(Le,me),"[]"].join("")]:[...wt,[G(Le,me),"[]=",G($t,me)].join("")];case"colon-list-separator":return Le=>(wt,$t)=>$t===void 0||me.skipNull&&$t===null||me.skipEmptyString&&$t===""?wt:$t===null?[...wt,[G(Le,me),":list="].join("")]:[...wt,[G(Le,me),":list=",G($t,me)].join("")];case"comma":case"separator":case"bracket-separator":{const Le=me.arrayFormat==="bracket-separator"?"[]=":"=";return wt=>($t,kt)=>kt===void 0||me.skipNull&&kt===null||me.skipEmptyString&&kt===""?$t:(kt=kt===null?"":kt,$t.length===0?[[G(wt,me),Le,G(kt,me)].join("")]:[[$t,G(kt,me)].join(me.arrayFormatSeparator)])}default:return Le=>(wt,$t)=>$t===void 0||me.skipNull&&$t===null||me.skipEmptyString&&$t===""?wt:$t===null?[...wt,G(Le,me)]:[...wt,[G(Le,me),"=",G($t,me)].join("")]}}function ul(me){let Le;switch(me.arrayFormat){case"index":return(wt,$t,kt)=>{if(Le=/\[(\d*)]$/.exec(wt),wt=wt.replace(/\[\d*]$/,""),!Le){kt[wt]=$t;return}kt[wt]===void 0&&(kt[wt]={}),kt[wt][Le[1]]=$t};case"bracket":return(wt,$t,kt)=>{if(Le=/(\[])$/.exec(wt),wt=wt.replace(/\[]$/,""),!Le){kt[wt]=$t;return}if(kt[wt]===void 0){kt[wt]=[$t];return}kt[wt]=[...kt[wt],$t]};case"colon-list-separator":return(wt,$t,kt)=>{if(Le=/(:list)$/.exec(wt),wt=wt.replace(/:list$/,""),!Le){kt[wt]=$t;return}if(kt[wt]===void 0){kt[wt]=[$t];return}kt[wt]=[...kt[wt],$t]};case"comma":case"separator":return(wt,$t,kt)=>{const It=typeof $t=="string"&&$t.includes(me.arrayFormatSeparator),Rt=typeof $t=="string"&&!It&&Ht($t,me).includes(me.arrayFormatSeparator);$t=Rt?Ht($t,me):$t;const Pt=It||Rt?$t.split(me.arrayFormatSeparator).map(Ft=>Ht(Ft,me)):$t===null?$t:Ht($t,me);kt[wt]=Pt};case"bracket-separator":return(wt,$t,kt)=>{const It=/(\[])$/.test(wt);if(wt=wt.replace(/\[]$/,""),!It){kt[wt]=$t&&Ht($t,me);return}const Rt=$t===null?[]:$t.split(me.arrayFormatSeparator).map(Pt=>Ht(Pt,me));if(kt[wt]===void 0){kt[wt]=Rt;return}kt[wt]=[...kt[wt],...Rt]};default:return(wt,$t,kt)=>{if(kt[wt]===void 0){kt[wt]=$t;return}kt[wt]=[...[kt[wt]].flat(),$t]}}}function dn(me){if(typeof me!="string"||me.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function G(me,Le){return Le.encode?Le.strict?hl(me):encodeURIComponent(me):me}function Ht(me,Le){return Le.decode?ll(me):me}function hn(me){return Array.isArray(me)?me.sort():typeof me=="object"?hn(Object.keys(me)).sort((Le,wt)=>Number(Le)-Number(wt)).map(Le=>me[Le]):me}function pn(me){const Le=me.indexOf("#");return Le!==-1&&(me=me.slice(0,Le)),me}function ml(me){let Le="";const wt=me.indexOf("#");return wt!==-1&&(Le=me.slice(wt)),Le}function xo(me,Le,wt){return wt==="string"&&typeof me=="string"?me:typeof wt=="function"&&typeof me=="string"?wt(me):Le.parseBooleans&&me!==null&&(me.toLowerCase()==="true"||me.toLowerCase()==="false")?me.toLowerCase()==="true":wt==="number"&&!Number.isNaN(Number(me))&&typeof me=="string"&&me.trim()!==""||Le.parseNumbers&&!Number.isNaN(Number(me))&&typeof me=="string"&&me.trim()!==""?Number(me):me}function Lr(me){me=pn(me);const Le=me.indexOf("?");return Le===-1?"":me.slice(Le+1)}function Ar(me,Le){Le={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...Le},dn(Le.arrayFormatSeparator);const wt=ul(Le),$t=Object.create(null);if(typeof me!="string"||(me=me.trim().replace(/^[?#&]/,""),!me))return $t;for(const kt of me.split("&")){if(kt==="")continue;const It=Le.decode?kt.replaceAll("+"," "):kt;let[Rt,Pt]=cn(It,"=");Rt===void 0&&(Rt=It),Pt=Pt===void 0?null:["comma","separator","bracket-separator"].includes(Le.arrayFormat)?Pt:Ht(Pt,Le),wt(Ht(Rt,Le),Pt,$t)}for(const[kt,It]of Object.entries($t))if(typeof It=="object"&&It!==null&&Le.types[kt]!=="string")for(const[Rt,Pt]of Object.entries(It)){const Ft=Le.types[kt]?Le.types[kt].replace("[]",""):void 0;It[Rt]=xo(Pt,Le,Ft)}else typeof It=="object"&&It!==null&&Le.types[kt]==="string"?$t[kt]=Object.values(It).join(Le.arrayFormatSeparator):$t[kt]=xo(It,Le,Le.types[kt]);return Le.sort===!1?$t:(Le.sort===!0?Object.keys($t).sort():Object.keys($t).sort(Le.sort)).reduce((kt,It)=>{const Rt=$t[It];return kt[It]=Rt&&typeof Rt=="object"&&!Array.isArray(Rt)?hn(Rt):Rt,kt},Object.create(null))}function un(me,Le){if(!me)return"";Le={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...Le},dn(Le.arrayFormatSeparator);const wt=Rt=>Le.skipNull&&dl(me[Rt])||Le.skipEmptyString&&me[Rt]==="",$t=pl(Le),kt={};for(const[Rt,Pt]of Object.entries(me))wt(Rt)||(kt[Rt]=Pt);const It=Object.keys(kt);return Le.sort!==!1&&It.sort(Le.sort),It.map(Rt=>{const Pt=me[Rt];return Pt===void 0?"":Pt===null?G(Rt,Le):Array.isArray(Pt)?Pt.length===0&&Le.arrayFormat==="bracket-separator"?G(Rt,Le)+"[]":Pt.reduce($t(Rt),[]).join("&"):G(Rt,Le)+"="+G(Pt,Le)}).filter(Rt=>Rt.length>0).join("&")}function mn(me,Le){var It;var wt;Le={decode:!0,...Le};let[$t,kt]=cn(me,"#");return $t===void 0&&($t=me),{url:(It=(wt=$t==null?void 0:$t.split("?"))==null?void 0:wt[0])!=null?It:"",query:Ar(Lr(me),Le),...Le&&Le.parseFragmentIdentifier&&kt?{fragmentIdentifier:Ht(kt,Le)}:{}}}function fn(me,Le){Le={encode:!0,strict:!0,[rr]:!0,...Le};const wt=pn(me.url).split("?")[0]||"",$t=Lr(me.url),kt={...Ar($t,{sort:!1}),...me.query};let It=un(kt,Le);It&&(It=`?${It}`);let Rt=ml(me.url);if(typeof me.fragmentIdentifier=="string"){const Pt=new URL(wt);Pt.hash=me.fragmentIdentifier,Rt=Le[rr]?Pt.hash:`#${me.fragmentIdentifier}`}return`${wt}${It}${Rt}`}function gn(me,Le,wt){wt={parseFragmentIdentifier:!0,[rr]:!1,...wt};const{url:$t,query:kt,fragmentIdentifier:It}=mn(me,wt);return fn({url:$t,query:cl(kt,Le),fragmentIdentifier:It},wt)}function fl(me,Le,wt){const $t=Array.isArray(Le)?kt=>!Le.includes(kt):(kt,It)=>!Le(kt,It);return gn(me,$t,wt)}const _o=Object.freeze(Object.defineProperty({__proto__:null,exclude:fl,extract:Lr,parse:Ar,parseUrl:mn,pick:gn,stringify:un,stringifyUrl:fn},Symbol.toStringTag,{value:"Module"})),fe=(me,Le)=>{try{const wt=_o.parseUrl(me);return wt.query.spm_id_from=Le,_o.stringifyUrl(wt)}catch{return me}},gl=me=>`bilibili://space/${me}`,bl=(me,Le,wt)=>({tag:"img",style:wt,img:{src:me,alt:Le?Oi(Le):"",loading:"lazy"}}),Co="BDC/chain_link_line/1",ge="BDC/video_circle_line/1",ko="BDC/column_line/1",$o="BDC/vote_line/2",mt=(me,Le,wt,$t,kt)=>({tag:"a",style:$t,dataset:kt||{type:"link"},a:{text:Oi(Le||"\u7F51\u9875\u94FE\u63A5"),href:me,icon:wt,target:"_blank"}}),Mt=me=>({tag:"span",span:{text:Oi(me)}}),oi="(https?://)",ni="([/.$*?~=#!%@&A-Za-z0-9_-]*)";function vl(me){if(me.startsWith("http")){const Le=me.match(/www.bilibili.com\/h5\/note-app\/view\?cvid=(\d+)/);return Le!=null&&Le[1]?Ct.ARTICLE(Le[1]):me}return""}const yl=me=>{const Le=[];let wt=null;return me.forEach($t=>{if(wt)$t.tag==="span"&&wt.tag==="span"?wt.span.text+=$t.span.text:(wt=$t,Le.push(wt));else{wt=$t,Le.push($t);return}}),Le};function Rr(me,Le,wt,$t){var kt;const It=[];if(!((kt=me.content)!=null&&kt.message))return It.push(Mt("\u6682\u4E0D\u652F\u6301\u5C55\u793A\u7684\u5185\u5BB9")),It;const{message:Rt,emote:Pt,members:Ft,jump_url:Ut,vote:Xt}=me.content,Jt=rl(),ii=new RegExp("(AV|av|Av|aV)[0-9]+","ug"),Ni=new RegExp("(BV|bv|Bv|bV)1[1-9A-NP-Za-km-z]{9}","ug"),Vi=new RegExp("((CV|cv)[0-9]+|(mobile/[0-9]+))","ug"),zi=new RegExp("(EP|ep|Ep|eP)[0-9]+","ug"),Xn=new RegExp("(SS|ss|Ss|sS)[0-9]+","ug"),Qn=/\[[^([*\])]+\]/gu,eo=new RegExp(`${oi}?([a-z0-9A-Z-]{1,15}.)?(bilibili\\.(com|tv|cn)|esheep\\.(com|cn|net)|biligame\\.(com|cn|net)|(bilibiliyoo|im9)\\.com|biliapi\\.net|b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn|(sugs\\.suning\\.com)|jueze2021\\.peopleapp\\.com|kaola\\.com|bigfun\\.cn|mcbbs\\.net|mp\\.weixin\\.qq\\.com|static\\.cdsb\\.com|bjnews\\.com\\.cn|720yun\\.com|\\.cctv\\.com)($|/|)${ni}`,"ug"),no=new RegExp(`${oi}?(((uat-)?www\\.bilibili\\.com)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn))(/video)?/((av[0-9]+)|((BV)1[1-9A-NP-Za-km-z]{9}))($|/|)${ni}`,"ug"),to=new RegExp(`${oi}?(((uat-)?www\\.bilibili\\.com/bangumi/(play/|media/)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233.cn)/)(ss|ep)[0-9]+)($|/|)${ni}`,"ug"),oo=new RegExp(`${oi}?(uat-)?www\\.bilibili\\.com/read/((cv[0-9]+)|(native?id=[0-9]+)|(app/[0-9]+)|(native/[0-9]+)|(mobile/[0-9]+))($|/|)${ni}`,"ug"),ao=/(\d+#)?(\d+(:|：)){1,2}\d\d/g,ro=ts=>{ts.lastIndex=0},Fo=Qt(ts=>{if(Pt!=null&&Pt[ts]){const{url:ds,meta:vh,webp_url:wh,gif_url:Ch}=Pt[ts],Mh=wh||Ch||ds;let zh=20,Wh={width:"1.4em",height:"1.4em","vertical-align":"text-bottom"};return vh.size===2&&(zh=50,Wh={width:"50px",height:"50px"}),bl(utils$2.getBmgSrcNext(Mh,{w:zh,h:zh,dpr:2}),ts,Wh)}return Mt(ts)},(ts,ds)=>{ts.push(Mt(ds))}),Qr=Qt(ts=>{const ds=ts;if((Le==null?void 0:Le.videoTime)===!1)return Mt(ts);let vh="-1";if(ts.indexOf("#")>-1){const[Ch,Mh]=ts.split("#");vh=Ch,ts=Mh}ts=ts.replace(/[:：]/g,":");const wh=ts.split(":").map(Ch=>parseInt(Ch)).reverse().reduce((Ch,Mh,zh)=>Ch+Mh*Math.pow(60,zh),0);return{tag:"a",dataset:{type:"seek","video-time":String(wh),"video-part":vh},a:{text:ds,href:""}}},(ts,ds)=>{Fo(ts,Zt(ds,Qn))}),es=Qt(ts=>mt(Ct.ARTICLE(ri(ts)),ts,ko),(ts,ds)=>{Qr(ts,Zt(ds,ao))}),ns=ts=>{let ds=Ct.VIDEO({avid:ts});return $t&&(ds=fe(ds,$t)),ds},so=ts=>{let ds=Ct.VIDEO({bvid:ts});return $t&&(ds=fe(ds,$t)),ds},gr=Qt(ts=>mt(so(ts),ts,ge),(ts,ds)=>{es(ts,Zt(ds,Vi))}),Xr=Qt(ts=>/^av1$/i.test(ts)?Mt(ts):mt(ns(ri(ts)),ts,ge),(ts,ds)=>{gr(ts,Zt(ds,Ni))}),as={};Ft.length&&Ft.forEach(ts=>{as["@"+ts.uname]=ts});const ls=Qt(ts=>{const ds=as[ts],vh=ds==null?void 0:ds.mid;if(wt===Wt.MOBILE_BROWSER)return mt(Ct.SPACE(vh),ts,void 0,void 0,{type:"link",link:gl(vh)});const wh={type:"mention","user-profile-id":vh};return mt(Ct.SPACE(vh),ts,void 0,void 0,wh)},(ts,ds)=>{xh(ts,ds,1)}),ms=Object.keys(Ut||{}),Ah={},rs=(ts,ds)=>{const{pc_url:vh,app_url_schema:wh,title:Ch,prefix_icon:Mh,match_once:zh,icon_position:Wh,extra:Lh}=ds;if(!zh||!Ah[ts]){Ah[ts]=!0;const eu=Wh===1;let Th="";if(vh?Th=vo(vh):(ro(eo),eo.test(ts)?(Th=vo(ts,!0),$t&&(ro(no),no.test(Th)&&(Th=fe(Th,$t)))):(ro(Ni),ro(ii),ro(Vi),Ni.test(ts)?(Th=Ct.VIDEO({bvid:ts}),$t&&(Th=fe(Th,$t))):ii.test(ts)?(Th=Ct.VIDEO({avid:ri(ts)}),$t&&(Th=fe(Th,$t))):Vi.test(ts)?(Th=Ct.ARTICLE(ri(ts)),$t&&(Th=fe(Th,$t))):Th=vl(ts))),!Th)return Mt(ts);const qh=Ch||ts;let Kh="",Jh=!1,tu="";(Lh!=null&&Lh.goods_item_id||Lh!=null&&Lh.goods_prefetched_cache)&&(Jh=!0,Lh!=null&&Lh.goods_pc_click_urls&&Array.isArray(Lh.goods_pc_click_urls)&&(tu=Lh.goods_pc_click_urls.join(",")),ro(eo),eo.test(ts)&&(Kh=ts));let Yh=Jh?{type:"goods","goods-url":tu,"raw-url":Kh}:Lh!=null&&Lh.is_word_search?{type:"search",keyword:Oi(qh)}:{type:"link"};return wt===Wt.DESKTOP_APP?Yh={...Yh,link:Th}:wt===Wt.MOBILE_BROWSER&&wh&&(Yh={...Yh,link:wh}),mt(Th,qh,Mh,eu?{display:"inline-flex","flex-direction":"row-reverse","--icon-width":13/20+"em","--icon-height":12/10+"em"}:{"--icon-width":12/10+"em","--icon-height":12/10+"em"},Yh)}else return Mt(ts)},us=Qt(ts=>Ut!=null&&Ut[ts]?rs(ts,Ut[ts]):mt(Ct.SEARCH(ts),ts),(ts,ds)=>{xh(ts,ds,2)}),xh=(ts,ds,vh)=>{if(vh<=0&&Ft.length){ls(ts,Zt(ds,new RegExp(`@(${Ft.map(wh=>wh.uname).join("|")})`,"gu")));return}if(vh<=1&&ms.length){us(ts,Zt(ds,new RegExp(`(${ms.map(xs).join("|")})`,"gu")));return}Xr(ts,Zt(ds,ii))},Eh=Qt(ts=>{if(Ut!=null&&Ut[ts])return rs(ts,Ut[ts]);let ds=null;const vh=ts;if(ds=vh.match(no),ds!=null&&ds[0]){const wh=ds[0].match(Ni);if(wh!=null&&wh[0])return mt(vh,wh[0],ge);const Ch=ds[0].match(ii);if(Ch!=null&&Ch[0])return mt(vh,Ch[0],ge)}if(ds=vh.match(to),ds!=null&&ds[0]){const wh=ds[0].match(Xn);if(wh!=null&&wh[0])return mt(vh,wh[0],ge);const Ch=ds[0].match(zi);if(Ch!=null&&Ch[0])return mt(vh,Ch[0],ge)}if(ds=vh.match(oo),ds!=null&&ds[0]){const wh=ds[0].match(Vi);if(wh!=null&&wh[0])return mt(vh,wh[0],ko)}if(wt===Wt.DESKTOP_APP){const wh={type:"link",link:vh};return mt(Zi(ts),ts,Co,void 0,wh)}return mt(Zi(ts),ts,Co)},(ts,ds)=>{xh(ts,ds,0)}),$h=[];if(Xt){const ts=`{vote:${Xt.id}}`;Rt.indexOf(ts)>-1?qa(Rt,ts).forEach(({type:ds,text:vh})=>{if(ds)if(wt===Wt.DESKTOP_APP){const wh={type:"link",link:Xt.url};$h.push(mt(Xt.url,Xt.title,$o,void 0,wh))}else $h.push(mt(Xt.url,Xt.title,$o));else $h.push(Mt(vh))}):$h.push(Mt(Rt))}else $h.push(Mt(Rt));return $h.forEach(ts=>{if(ts.tag!=="span")It.push(ts);else{const ds=ts.span.text;Jt?Eh(It,Jt.getProcessedText(ds).map(vh=>({type:vh.type==="link"?1:0,text:vh.value}))):Eh(It,Zt(ds,eo))}}),yl(It)}function nt(me){if(me===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return me}function or(me,Le){return or=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(wt,$t){return wt.__proto__=$t,wt},or(me,Le)}function Ge(me,Le){if(typeof Le!="function"&&Le!==null)throw new TypeError("Super expression must either be null or a function");me.prototype=Object.create(Le&&Le.prototype,{constructor:{value:me,writable:!0,configurable:!0}}),Object.defineProperty(me,"prototype",{writable:!1}),Le&&or(me,Le)}function fi(me){return fi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(Le){return Le.__proto__||Object.getPrototypeOf(Le)},fi(me)}function bn(){try{var me=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bn=function(){return!!me})()}function ke(me){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Le){return typeof Le}:function(Le){return Le&&typeof Symbol=="function"&&Le.constructor===Symbol&&Le!==Symbol.prototype?"symbol":typeof Le},ke(me)}function wl(me,Le){if(Le&&(ke(Le)==="object"||typeof Le=="function"))return Le;if(Le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nt(me)}function Je(me){var Le=bn();return function(){var wt=fi(me),$t;if(Le){var kt=fi(this).constructor;$t=Reflect.construct(wt,arguments,kt)}else $t=wt.apply(this,arguments);return wl(this,$t)}}function xl(me,Le){if(ke(me)!="object"||!me)return me;var wt=me[Symbol.toPrimitive];if(wt!==void 0){var $t=wt.call(me,Le||"default");if(ke($t)!="object")return $t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Le==="string"?String:Number)(me)}function vn(me){var Le=xl(me,"string");return ke(Le)=="symbol"?Le:String(Le)}function pt(me,Le,wt){return Le=vn(Le),Le in me?Object.defineProperty(me,Le,{value:wt,enumerable:!0,configurable:!0,writable:!0}):me[Le]=wt,me}function Eo(me,Le){for(var wt=0;wt<Le.length;wt++){var $t=Le[wt];$t.enumerable=$t.enumerable||!1,$t.configurable=!0,"value"in $t&&($t.writable=!0),Object.defineProperty(me,vn($t.key),$t)}}function Pe(me,Le,wt){return Le&&Eo(me.prototype,Le),wt&&Eo(me,wt),Object.defineProperty(me,"prototype",{writable:!1}),me}function Oe(me,Le){if(!(me instanceof Le))throw new TypeError("Cannot call a class as a function")}var Ye=Pe(function me(){Oe(this,me)}),To="widget-layer-avatar",_l=function(me){Ge(wt,me);var Le=Je(wt);function wt(){var $t;Oe(this,wt);for(var kt=arguments.length,It=new Array(kt),Rt=0;Rt<kt;Rt++)It[Rt]=arguments[Rt];return $t=Le.call.apply(Le,[this].concat(It)),pt(nt($t),"pos",{axis_x:1,axis_y:1,coordinate_pos:0}),pt(nt($t),"size",{height:1,width:1}),pt(nt($t),"render",{opacity:1}),$t}return Pe(wt,[{key:"setPos",value:function($t,kt,It){return this.pos={axis_x:$t,axis_y:kt,coordinate_pos:It},this}},{key:"setSize",value:function($t,kt){return this.size={height:kt,width:$t},this}},{key:"getValue",value:function(){return{pos_spec:this.pos,size_spec:this.size,render_spec:this.render}}}]),wt}(Ye),Cl=function(me){Ge(wt,me);var Le=Je(wt);function wt(){var $t;Oe(this,wt);for(var kt=arguments.length,It=new Array(kt),Rt=0;Rt<kt;Rt++)It[Rt]=arguments[Rt];return $t=Le.call.apply(Le,[this].concat(It)),pt(nt($t),"tags",{}),pt(nt($t),"isCritical",!1),pt(nt($t),"allowOverPaint",!1),pt(nt($t),"mask",null),$t}return Pe(wt,[{key:"setIsCritical",value:function(){return this.isCritical=!0,this}},{key:"setTag",value:function($t,kt){return this.tags[$t]=kt,this}},{key:"getTag",value:function($t){return this.tags[$t]}},{key:"setMask",value:function($t){return this.mask=$t,this}},{key:"getValue",value:function(){return{tags:this.tags,is_critical:this.isCritical,allow_over_paint:this.allowOverPaint,layer_mask:this.mask}}}]),wt}(Ye),kl=function(me){Ge(wt,me);var Le=Je(wt);function wt(){var $t;Oe(this,wt);for(var kt=arguments.length,It=new Array(kt),Rt=0;Rt<kt;Rt++)It[Rt]=arguments[Rt];return $t=Le.call.apply(Le,[this].concat(It)),pt(nt($t),"type",3),pt(nt($t),"image",void 0),pt(nt($t),"animation",void 0),pt(nt($t),"nativeDraw",void 0),$t}return Pe(wt,[{key:"setImage",value:function(){var $t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,kt=arguments.length>1?arguments[1]:void 0;return this.type=3,kt?this.image={image_src:{src_type:1,remote:{url:kt,bfs_style:To},placeholder:$t}}:this.image={image_src:{src_type:2,local:$t,placeholder:$t}},this}},{key:"setAnimation",value:function($t,kt){return this.type=4,this.animation={webp_src:{src_type:1,remote:{url:$t,bfs_style:To},placeholder:kt}},this}},{key:"setNativeDraw",value:function($t,kt){var It=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"#fff";return this.type=5,this.nativeDraw={draw_src:{src_type:3,placeholder:0,draw:{draw_type:$t,fill_mode:kt!=null?kt:0,color_config:{day:{argb:It},is_dark_mode_aware:!1,night:{argb:It}},edge_weight:0}}},this}},{key:"getValue",value:function(){switch(this.type){case 3:return{res_type:this.type,res_image:this.image};case 4:return{res_type:this.type,res_animation:this.animation};case 5:return{res_type:this.type,res_native_draw:this.nativeDraw};default:return{res_type:this.type}}}}]),wt}(Ye),Mr=function(me){Ge(wt,me);var Le=Je(wt);function wt(){var $t;Oe(this,wt);for(var kt=arguments.length,It=new Array(kt),Rt=0;Rt<kt;Rt++)It[Rt]=arguments[Rt];return $t=Le.call.apply(Le,[this].concat(It)),pt(nt($t),"spec",new _l),pt(nt($t),"config",new Cl),pt(nt($t),"resource",new kl),$t}return Pe(wt,[{key:"getConfigTag",value:function($t){return this.config.getTag($t)}},{key:"getValue",value:function(){return{layer_id:"",visible:!0,general_spec:this.spec.getValue(),layer_config:this.config.getValue(),resource:this.resource.getValue()}}}]),wt}(Ye),yn=function(me){Ge(wt,me);var Le=Je(wt);function wt(){var $t;Oe(this,wt);for(var kt=arguments.length,It=new Array(kt),Rt=0;Rt<kt;Rt++)It[Rt]=arguments[Rt];return $t=Le.call.apply(Le,[this].concat(It)),pt(nt($t),"layers",[]),pt(nt($t),"mask",null),pt(nt($t),"isCritical",!1),$t}return Pe(wt,[{key:"setMask",value:function($t){return this.mask=$t,this}},{key:"addLayer",value:function($t){return this.layers.push($t),this}},{key:"setIsCritical",value:function(){return this.isCritical=!0,this}},{key:"getValue",value:function(){return{group_id:"",layers:this.layers.map(function($t){return $t.getValue()}),group_mask:this.mask,is_critical_group:this.isCritical}}}]),wt}(Ye),$l="https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/j8AeXAkEul.gif",El="https://i0.hdslb.com/bfs/activity-plat/static/20220506/334553dd7c506a92b88eaf4d59ac8b4d/IOHoVs1ebP.gif",Tl=function(me){var Le=new Mr;return Le.config.setIsCritical().setTag("AVATAR_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}),Le.resource.setImage(6,me),Le},wn=function(me){return typeof me=="string"?me:me.image||""},xn=function(){var me=new Mr;return me.config.setIsCritical().setTag("PENDENT_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{borderRadius:"50%"}}}),me},Br=function(){var me=new Mr;return me.config.setTag("ICON_LAYER",{config_type:0}).setTag("GENERAL_CFG",{config_type:1,general_config:{web_css_style:{"background-color":"rgb(255,255,255)",border:"2px solid rgba(255,255,255,1)",borderRadius:"50%",boxSizing:"border-box"}}}),me},Sl=function(me){var Le=Br();return Le.resource.setAnimation(me===1?$l:El,5),Le},Il=function(me){var Le=-1;return me&&(typeof me=="number"?Le=me:Le=me.type),Le},Pl=function(me){var Le=Br();return Le.resource.setImage(me===0?3:4),Le},Ol=function(me){if(!me)return!1;if(me===!0)return!0;if(typeof me=="string")return me;var Le=me.type,wt=me.status,$t=me.avatar_subscript_url;return Le>0&&wt===1?$t||!0:!1},Dl=function(me){var Le=Br();return Le.resource.setImage(1,me),Le},Ll=function(me,Le,wt){switch(me){case 64:return(16+Le*2)/me;case 80:return(16+Le*2)/me;case 48:default:return((wt===1?16:14)+Le*2)/me}},Al=function(me,Le){var wt,$t=new yn,kt=me.face,It=me.pendant,Rt=me.official,Pt=me.vip,Ft=me.nft,Ut=(wt=me.a)!==null&&wt!==void 0?wt:48,Xt=Tl(kt),Jt=1,ii=null,Ni=It?wn(It):"";Ni&&(ii=xn(),ii.resource.setImage(0,Ni));var Vi=[];Ft&&[1,2].includes(Ft)?(Vi.push(Sl(Ft)),ii?(ii.spec.setSize(Le,Le).setPos(Le/2,Le/2,2),Jt=.94,Xt.spec.setSize(Jt,Jt).setPos(Le/2,Le/2,2)):(Jt=Ut>48?1.2:1.3,Xt.spec.setSize(Jt,Jt).setPos(Le/2,Le/2,2))):ii?(ii.spec.setPos(.6875,.6875,2).setSize(1.375,1.375),Jt=.787,Xt.spec.setSize(Jt,Jt).setPos(.6875,.6875,2)):Xt.spec.setSize(1,1).setPos(.675,.675,2);var zi=Il(Rt),Xn=Ol(Pt);if(zi!==-1?Vi.push(Pl(zi)):Xn&&Vi.push(Dl(typeof Xn=="string"?Xn:"")),$t.addLayer(Xt),ii&&$t.addLayer(ii),Vi.length){var Qn=2,eo=Ll(Ut,Qn,Vi.length),no=(eo*Ut-Qn)/Ut,to=Le/2+Jt/2-no,oo=to;ii&&(to+=1/15,oo+=1/20),Vi.slice(0,2).reverse().forEach(function(ao,ro){ao.spec.setSize(eo,eo).setPos(oo-ro*no,to,1),$t.addLayer(ao)})}return $t},Rl=function(me,Le){var wt=me.pendant,$t=null;if(wt&&typeof wt!="string"&&wt.image_enhance)$t=xn(),$t.resource.setAnimation(wt.image_enhance,0);else return[];var kt=[];return Le.layers.forEach(function(It){var Rt=new yn;It.getConfigTag("PENDENT_LAYER")&&It.resource.setAnimation(wt.image_enhance,0),Rt.addLayer(It),kt.push(Rt)}),kt.map(function(It){return It.getValue()})},Ml=function(me){var Le,wt=1.35,$t=(Le=me.a)!==null&&Le!==void 0?Le:48,kt=me.pendant?wn(me.pendant):"";return $t===80?(me.nft?kt?wt=1.8:wt=1.65:wt=1.5,wt):(me.nft?kt?wt=1.65:wt=1.5:kt?wt=1.375:wt=1.35,wt)},Bl=function(me){var Le=Ml(me),wt=Al(me,Le),$t={container_size:{width:Le,height:Le},fallback_layers:wt.getValue(),mid:me.mid},kt=Rl(me,wt);return kt.length&&($t.layers=kt),$t};function jl(me){return me.reply_control?!!me.reply_control.is_up_top||!!me.reply_control.is_admin_top:!1}function _n(me){return me.reply_control?!!me.reply_control.is_note_v2:!1}function Cn(me){return me.reply_control?me.reply_control.is_note?{type:"note",oid:me.note_cvid_str}:me.reply_control.is_note_v2&&me.reply_control.fold_pictures?{type:"opus",oid:me.dynamic_id_str}:null:null}var Nl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,se=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Vl(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Nl(Le,wt,kt),kt};const zl=me=>{const Le=Math.floor(me/3600),wt=Math.floor((me-Le*3600)/60),$t=me-(Le*3600+wt*60),kt=Le.toString().padStart(2,"0"),It=wt.toString().padStart(2,"0"),Rt=$t.toString().padStart(2,"0");return Le?`${kt}:${It}:${Rt}`:`${It}:${Rt}`};let zt=class extends s$4{constructor(){super(...arguments),this.data=null,this.userNameColor=""}get note(){return this.data?_n(this.data):!1}get expand(){return this.data?!!Cn(this.data):!1}get pictures(){var me,Le,wt;return(wt=(Le=(me=this.data)==null?void 0:me.content)==null?void 0:Le.pictures)!=null&&wt.length?this.data.content.pictures:null}load(me){this.data=me}loadNoteData(me){let Le="";const wt=[];me.noteContent.forEach(kt=>{var It,Rt,Pt;const Ft=kt.insert;if(((It=Ft.imageUpload)==null?void 0:It.source)==="video"&&wt.length<3&&wt.push({img_src:Ft.imageUpload.url,img_width:Ft.imageUpload.width}),(Pt=(Rt=Ft.tag)==null?void 0:Rt.seconds)!=null&&Pt.toString()){const Ut=Ft.tag.seconds,Xt=Ft.tag.desc;Le=Le.concat(`${zl(Ut)} ${Xt}`)}typeof Ft=="string"&&(Le=Le.concat(Ft))}),Le=this.limitContent(Le);const $t={member:{mid:"1",uname:me.upName,level_info:{current_level:me.upLevel||0},avatar:me.upAvatar,face_nft_new:0,is_contractor:!1,official_verify:{type:-1,desc:""},avatar_item:null,is_senior_member:me.isHardcoreMember?1:0},content:{message:Le,members:[],max_line:6,jump_url:{},pictures:wt},ctime:me.noteTime==="\u521A\u521A"?Date.now()/1e3-1:new Date(me.noteTime).getTime()/1e3,reply_control:{is_note:!0,max_line:6,time_desc:"",location:""}};me.upNameColor&&(this.userNameColor=me.upNameColor),this.data=$t}limitContent(me){me=me.replace(/^\s*/,"").replace(/\s*$/,"");const Le=me.match(/\n/g);return Le&&Le.length>6?me.split(`
`).slice(0,6).join(`
`).slice(0,77).concat("..."):me.length>77?me.slice(0,77).concat("..."):me}connectedCallback(){super.connectedCallback(),this.initData()}initData(){setTimeout(()=>{var me;if(!this.data)return;if((me=this.data.member)!=null&&me.avatar){const{avatar:wt,mid:$t,pendant:kt,vip:It,official_verify:Rt,face_nft_new:Pt}=this.data.member;this.biliAvatar.load(Bl({face:wt,mid:$t,pendant:kt||"",vip:It,official:Rt,nft:Pt!=null?Pt:0}),{baseSize:48,isFloat:!0})}const Le=F();this.biliRichText.setContents(Rr(this.data,void 0,Le?Wt.DESKTOP_APP:void 0))})}noteTemplate(){return x$3`<i id="note">
      <bili-icon icon="BDC/note_line/1" size="16"></bili-icon>
      <span>笔记</span>
    </i>`}expandTemplate(){return x$3`<span id="expand">展开</span>`}picturesTemplate(){return x$3`<div id="pictures">
      <div id="pic">
        <bili-comment-pictures-renderer .list=${this.pictures}></bili-comment-pictures-renderer>
      </div>
    </div>`}render(){return x$3`<div id="body">
      <div id="user-avatar"><bili-avatar></bili-avatar></div>
      <div id="main">
        <div id="header">
          <bili-comment-user-info
            .data=${this.data}
            style="${this.userNameColor?o$3({"--bili-comment-user-info-name-color":this.userNameColor}):""}"
          ></bili-comment-user-info>
        </div>
        <div id="content">
          ${this.note?this.noteTemplate():""}

          <bili-rich-text
            style="${o$3({"--bili-rich-text-font-size":"var(--bili-comments-font-size-content)","--bili-rich-text-line-height":"var(--bili-comments-line-height-content)","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline"})}"
          ></bili-rich-text>
          ${this.expand?this.expandTemplate():""} ${this.pictures?this.picturesTemplate():""}
        </div>
        <div id="footer">
          <bili-comment-action-buttons-renderer
            style="${o$3({"--bili-comment-action-buttons-more-display":"var(--bili-comment-hover-more-display)"})}"
            .data=${this.data}
          ></bili-comment-action-buttons-renderer>
        </div>
      </div>
    </div>`}};zt.styles=i$6`
    #body {
      pointer-events: none;
      position: relative;
      padding-left: 80px;
      --bili-comment-hover-more-display: block;
    }
    #user-avatar {
      position: absolute;
      left: 20px;
      top: 0;
      width: 48px;
      height: 48px;
      transform-origin: left top;
      transform: var(--bili-comments-avatar-size);
    }
    #ornament {
      position: absolute;
      right: 0;
      top: 7px;
      user-select: none;
    }
    bili-comment-vote-option {
      margin-top: 2px;
      margin-bottom: 6px;
    }
    #main {
      width: 100%;
    }
    #header {
      margin-bottom: 4px;
    }
    i {
      font-size: 12px;
      font-style: normal;
    }
    i#note {
      width: 48px;
      height: 22px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      color: var(--text3);
      background-color: var(--bg2);
      vertical-align: text-bottom;
    }
    #content {
      font-size: var(--bili-comments-font-size-content);
      line-height: var(--bili-comments-line-height-content);
      color: var(--text1);
    }
    #content #expand {
      color: var(--brand_blue);
      cursor: pointer;
    }
    #pictures {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
  `;se([t$1()],zt.prototype,"data",2);se([t$1()],zt.prototype,"userNameColor",2);se([i$3("bili-avatar")],zt.prototype,"biliAvatar",2);se([i$3("bili-rich-text")],zt.prototype,"biliRichText",2);se([t$1()],zt.prototype,"note",1);se([t$1()],zt.prototype,"expand",1);se([t$1()],zt.prototype,"pictures",1);zt=se([e$5("bili-comment-preview-renderer")],zt);function kn(me){return me.type===1}function Fl(me){var Le;if((Le=me.card_label)!=null&&Le.length){const wt=me.card_label.filter($t=>!kn($t));if(wt.length)return wt}return null}function Ul(me){var Le;if((Le=me.card_label)!=null&&Le.length){const wt=me.card_label.find($t=>kn($t));if(wt)return wt}return null}function ql(me){var Le,wt;const{reply_control:$t}=me;if((Le=$t==null?void 0:$t.easter_egg_label)!=null&&Le.image){const It=$t.easter_egg_label.image,Rt=82,Pt=36;return{type:"easter-egg",width:Rt,height:Pt,render:()=>o(`<img src="${utils$2.getBmgSrcNext(It,{w:Rt,h:Pt})}" width="${Rt}" height="${Pt}" style="transform: translateY(6px)" >`)}}const kt=Ul(me);if(kt!=null&&kt.background){const It=kt.background_width,Rt=kt.background_height;return{type:"awesome-comment",width:It,height:Rt,render:()=>o(`<img src="${utils$2.getBmgSrcNext(kt.background,{w:It,h:Rt,dpr:2})}" width="${It}" height="${Rt}">`)}}return(wt=me.member)!=null&&wt.user_sailing_v2?{type:"user-sailing",width:288,height:48,render:()=>x$3`<bili-comment-user-sailing-card .data=${me.member.user_sailing_v2}></bili-comment-user-sailing-card>`}:null}let $n=!1,Ae=null;typeof window<"u"&&($n="IntersectionObserver"in window);const Hl=me=>me.__i18r_callback__,Wl=(me,Le)=>{me.__i18r_callback__=Le},Gl=me=>{delete me.__i18r_callback__},Jl=me=>{me.forEach(Le=>{const wt=Hl(Le.target);typeof wt=="function"&&wt(Le)})},be={start:"start_time",end:"end_time",duration:"duration"};class Ke{constructor(Le){this.isIntersecting=!1,this.showFinished=!1,this.showSupport=$n,this.showDurational=!1,this.showDurationConfig=be,this.showDurationStart=0,this.type=Le.type,this.el=Le.el,this.handler=Le.handler,this.value=Le.value,this.modifiers=Le.modifiers||{},Le.durational&&(this.showDurational=!0,typeof Le.durational=="object"&&(this.showDurationConfig=Le.durational)),this.init()}observeShow(Le,wt){Ae||(Ae=new IntersectionObserver(Jl)),Wl(Le,wt),Ae.observe(Le)}unobserveShow(Le){this.showFinished=!0,Ae&&(Ae.unobserve(Le),Gl(Le))}observeClick(Le,wt){Le.addEventListener("click",wt)}unobserveClick(Le,wt){Le.removeEventListener("click",wt)}report(Le){let wt=this.value.event;const $t={...this.value.data},{raw:kt}=this.modifiers;let It=!1;this.type==="both"&&kt&&console.warn("show and click event use raw will be same"),this.showDurational&&["tech","show"].includes(Le)&&(this.showDurationStart?(Object.assign($t,{[this.showDurationConfig.end||be.end]:Date.now(),[this.showDurationConfig.duration||be.duration]:Date.now()-this.showDurationStart}),this.showDurationConfig.repeat&&(this.showDurationStart=0),this.showDurationConfig.endEvent?wt=this.showDurationConfig.endEvent:(wt=wt.replace(".all",".end"),this.showDurationStart=0),this.showDurationConfig.beforeunload&&(It=!0)):(this.showDurationStart=Date.now(),delete $t[this.showDurationConfig.end||be.end],delete $t[this.showDurationConfig.duration||be.duration],Object.assign($t,{[this.showDurationConfig.start||be.start]:this.showDurationStart}))),this.handler(Le,kt?wt:`${wt}.${Le}`,$t,{flush:It})}reportShowDuration(Le){if(this.showDurational&&!this.showFinished){if(Le){if(!this.isIntersecting||this.showDurationStart!==0)return;this.report("show");return}this.showDurationStart!==0&&(this.report("show"),this.showDurationConfig.repeat||(this.showFinished=!0))}}init(){if(!this.el)return;const Le=this.el,wt=[];if(this.type==="click"||this.type==="both"){const $t=()=>{this.report(this.modifiers.tech?"tech":"click")};wt.push(()=>{this.unobserveClick(Le,$t)}),this.observeClick(Le,$t)}if(this.type==="show"||this.type==="both")if(this.showSupport){wt.push(()=>{this.showFinished||(this.showDurational&&this.showDurationStart&&this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(Le))});let $t=()=>{};if(this.showDurationConfig.beforeunload){let It=!1;const Rt=()=>{this.showFinished||(this.showDurationStart&&this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(Le))};window.addEventListener("beforeunload",Rt),window.addEventListener("pagehide",Rt),$t=()=>{It||(It=!0,window.removeEventListener("beforeunload",Rt),window.removeEventListener("pagehide",Rt))},wt.push($t)}const kt=It=>{if(this.isIntersecting=It.isIntersecting,this.showDurational)if(It.isIntersecting){if(this.showDurationStart)return;this.report(this.modifiers.tech?"tech":"show")}else{if(!this.showDurationStart||(this.report(this.modifiers.tech?"tech":"show"),this.showDurationConfig.repeat))return;this.showDurationConfig.beforeunload&&$t(),this.unobserveShow(Le)}else It.isIntersecting&&(this.report(this.modifiers.tech?"tech":"show"),this.unobserveShow(Le))};this.observeShow(Le,kt)}else console.warn("IntersectionObserver not supported");this.removeListener=()=>{wt.forEach($t=>{$t()})}}update(Le){this.value=Le}dispose(){var Le;(Le=this.removeListener)==null||Le.call(this),this.el=null}}const En=(me,Le,wt)=>{let $t;wt?$t=wt==null?void 0:wt.scrollTop:$t=document.documentElement.scrollTop;const kt=me.getBoundingClientRect().top+$t+(Le||0);(wt||window).scrollTo({top:kt,left:0,behavior:"smooth"})},Yl=me=>{me=me*1e3;const Le=Math.floor(new Date().getTime()),wt=(Le-me)/1e3,$t=new Date(Le).getFullYear()-new Date(me).getFullYear(),kt=Math.floor(wt/60),It=Math.floor(kt/60),Rt=new Date(me).getFullYear(),Pt=new Date(me).getMonth()+1,Ft=new Date(me).getDate();if(kt<1)return"\u521A\u521A";if(kt>=1&&It<1)return`${kt}\u5206\u949F\u524D`;if(It>=1&&It<24)return`${It}\u5C0F\u65F6\u524D`;if(It>=24&&It<48)return"\u6628\u5929";if(It>=48&&$t<1)return`${Pt}-${Ft}`;if($t>=1)return`${Rt}-${Pt}-${Ft}`};var Kl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,_=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Zl(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Kl(Le,wt,kt),kt};let x=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.richTextDisposables=null,this.avatarIconList=["//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local3.png","//i0.hdslb.com/bfs/seed/jinkela/short/webui/avatar/img/res-local4.png"],this.upMid=0,this.rootType="list",this.idx=-1,this.user=null,this.oid="",this.root="",this.showCheckText=!1,this.assist=!1,this.type=0,this.showTextExpand=!1,this.expanded=!1,this.trackObserver=null,this.visible=!0,this.avatarSize=30}get ornament(){return ql(this.data)}get top(){return jl(this.data)}get note(){return _n(this.data)}get expandAction(){return Cn(this.data)}get showExpand(){return this.showTextExpand||!!this.expandAction&&!this.data.reply_control.is_note_v2}get voteOption(){var me;return((me=this.data.reply_control)==null?void 0:me.vote_option)||null}get vote(){return this.data.content.vote||null}getRichTextContent(){return this.richTextContent}get richTextContent(){const me=F();return Rr(this.data,this.contentFeatures,me?Wt.DESKTOP_APP:void 0)}get pictures(){var me,Le;return!((me=this.data.content.pictures)!=null&&me.length)||(Le=this.data.reply_control)!=null&&Le.fold_pictures?null:this.data.content.pictures}get tags(){return Fl(this.data)}get uid(){return this.data.member.mid}get spaceLink(){return Ct.SPACE(this.uid)}get userAvatarSrc(){return utils$2.getBmgSrcNext(this.data.member.avatar,{w:this.avatarSize,h:this.avatarSize,s:!0,dpr:2})}get userAvatarIcon(){if(!this.data.member.official_verify)return null;const{type:me}=this.data.member.official_verify;return[0,1].includes(me)?this.avatarIconList[me]:null}connectedCallback(){super.connectedCallback(),this.initData(),setTimeout(()=>{this.trackObserver=new Ke({el:this,type:"show",value:{event:"main.comment.floor.0",data:{type:this.type,oid:this.oid,rpid:this.data.rpid_str,rootType:this.rootType,index:this.idx}},modifiers:{raw:!0},handler:(me,Le,wt)=>{me==="show"&&te({type:"show",spm_info:Le},{msg:JSON.stringify({floorNo:wt.index,type:wt.rootType==="list"?"root":"sub"})})}})})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.clearRichTextDisposables()}clearRichTextDisposables(){this.richTextDisposables&&(this.richTextDisposables.dispose(),this.richTextDisposables=null)}initData(){this.clearRichTextDisposables(),this.disposables.setTimeout(()=>{var me;this.biliRichText.setContents(this.richTextContent),this.showTextExpand=this.biliRichTextContainer.scrollHeight>this.biliRichTextContainer.clientHeight+2,(me=this.data.$extra)!=null&&me.spotlight&&window.setTimeout(()=>{En(this,-300),setTimeout(()=>{this.startSpotlight()},100)},200)})}async startSpotlight(){const me="spotlight";this.disposables.addEventListener(this.bodyElement,"transitionend",()=>{this.bodyElement.classList.remove(me),this.bodyElement.style.removeProperty("background-color"),this.bodyElement.style.removeProperty("transition")}),this.bodyElement.classList.add(me),await ci(10),this.bodyElement.style.setProperty("transition","background-color 2s 3s"),await ci(10),this.bodyElement.style.setProperty("background-color","transparent")}updated(me){me.get("data")&&this.initData(),me.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}isFilterClick(me){const Le=me.target;return[this.biliRichText,this.actionButtons,this.biliAvatar,this.expandButton].includes(Le)}handleClickTrack(me){this.dispatchEvent(new CustomEvent("track",{detail:{position:me}}))}handleAction(me){const{key:Le,data:wt}=me.detail;switch(Le){case"top":this.dispatchEvent(new CustomEvent("top",{detail:wt.active})),this.handleClickTrack(wt.active?18:19);break;case"block":this.dispatchEvent(new CustomEvent("block")),this.handleClickTrack(13);break;case"report":this.dispatchEvent(new CustomEvent("report")),this.handleClickTrack(14);break;case"delete":this.dispatchEvent(new CustomEvent("delete")),this.handleClickTrack(23);break}}async handleViewDialog(me){this.dispatchEvent(new CustomEvent("view-dialog",{detail:me}))}handleReply(){var me;y.emit("reply",{target:this.data,root:{type:this.rootType,params:{type:this.type,oid:this.oid,root:this.root}},defaultInput:((me=this.data.reply_control)==null?void 0:me.preset_reply_text)||"",mount:Le=>{Le.parentElement!==this.replyContainer&&this.replyContainer.appendChild(Le)}})}handleAvatarNameClick(){this.handleClickTrack(3),this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}}))}handleTextClick(me){var Le,wt;const $t=me.detail;if($t){if($t.type==="seek"){const kt=Number($t.videoTime),It=Number($t.videoPart);!isNaN(kt)&&!isNaN(It)&&(this.dispatchEvent(new CustomEvent("jump",{detail:$t,composed:!0})),this.handleClickTrack(29))}if($t.type==="search"&&(this.dispatchEvent(new CustomEvent("jump",{detail:$t,composed:!0})),this.handleClickTrack(32)),$t.type==="goods"){const kt=$t.goodsUrl;kt&&(wt=(Le=window.BiliCm)==null?void 0:Le.Base)!=null&&wt.sendThirdClickUrls&&window.BiliCm.Base.sendThirdClickUrls(kt),this.dispatchEvent(new CustomEvent("jump",{detail:$t,composed:!0})),this.handleClickTrack(15)}$t.type==="link"&&(this.dispatchEvent(new CustomEvent("jump",{detail:$t,composed:!0})),this.handleClickTrack(15)),$t.type==="mention"&&this.dispatchEvent(new CustomEvent("jump",{detail:$t,composed:!0}))}}handleExpand(me){this.handleClickTrack(this.expanded?25:24),this.expanded=!this.expanded;const Le=me.target,wt={...this.expandAction,ref:Le};this.dispatchEvent(new CustomEvent("expand",{detail:wt}))}mainTags(){var me;return x$3` <div id="tags">${(me=this.tags)==null?void 0:me.map(Le=>x$3`<div class="tag">${Le.text_content}</div>`)}</div> `}ornamentTemplate(){if(!this.ornament)return"";const{render:me,width:Le,height:wt}=this.ornament;return x$3`<div
      id="ornament"
      style="${o$3({width:`${Le}px`,height:`${wt}px`})}"
    >
      ${me()}
    </div>`}topTemplate(){return x$3`<i id="top">置顶</i>`}noteTemplate(){return x$3`<i id="note">
      <bili-icon icon="BDC/note_line/1" size="16"></bili-icon>
      <span>笔记</span>
    </i>`}expandTemplate(){return x$3`<div id="expand" @click=${this.handleExpand}>${this.expanded?"\u6536\u8D77":"\u5C55\u5F00"}</div>`}voteTemplate(){return x$3`<div id="vote">
      <bili-comment-vote-renderer .data=${this.vote}></bili-comment-vote-renderer>
    </div>`}picturesTemplate(){return x$3`<div
      id="pictures"
      @click=${me=>{me.stopPropagation(),this.handleClickTrack(37)}}
    >
      <div id="pic">
        <bili-comment-pictures-renderer
          .list=${this.pictures}
          @preview-image=${me=>this.dispatchEvent(new CustomEvent("preview-image",{detail:me.detail}))}
        ></bili-comment-pictures-renderer>
      </div>
    </div>`}render(){var Le;var me;return x$3`
      <div
        id="body"
        class="${o$1({spotlight:(Le=(me=this.data.$extra)==null?void 0:me.spotlight)!=null?Le:!1})}"
        @click=${wt=>{wt.stopPropagation(),!this.isFilterClick(wt)&&this.handleClickTrack(1)}}
      >
        <a
          href="${this.spaceLink}"
          @click=${this.handleAvatarNameClick}
          id="user-avatar"
          data-user-profile-id="${this.uid}"
          target="_blank"
        >
          <img id="user-avatar-img" width="${this.avatarSize}" height="${this.avatarSize}" src=${this.userAvatarSrc} />
          ${this.userAvatarIcon?x$3`<div
                id="user-avatar-icon"
                style=${o$3({"background-image":`url(${this.userAvatarIcon})`})}
              ></div>`:""}
        </a>
        <div id="main">
          <div id="header">
            <bili-comment-user-info
              id="user-info"
              .data=${this.data}
              .upMid=${this.upMid}
              .medalVisible=${!0}
              style=${o$3({"--bili-comments-font-size-name":"13px"})}
              @jump-space=${()=>this.handleAvatarNameClick()}
              @track=${wt=>this.handleClickTrack(wt.detail.position)}
            ></bili-comment-user-info>
            <div id="reply-time">${Yl(this.data.ctime)}</div>
          </div>
          <div id="content">
            <div
              id="rich-text-container"
              class="${o$1({collapsed:!this.expanded})}"
            >
              ${this.top?this.topTemplate():""} ${this.note?this.noteTemplate():""}
              <bili-rich-text
                @text-click=${this.handleTextClick}
                style="${o$3({"--bili-rich-text-font-size":"var(--bili-comments-font-size-content)","--bili-rich-text-line-height":"20px !important","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline","vertical-align":"text-bottom"})}"
              ></bili-rich-text>
            </div>
            ${this.showExpand?this.expandTemplate():""} ${this.pictures?this.picturesTemplate():""}
          </div>
          <div id="footer">
            <bili-comment-action-buttons-renderer
              .user=${this.user}
              .upMid=${this.upMid}
              .oid=${this.oid}
              .showCheckText=${this.showCheckText}
              .type=${this.type}
              .rootType=${this.rootType}
              .root=${this.root}
              .assist=${this.assist}
              style="${o$3({"--bili-comment-action-buttons-more-display":"var(--bili-comment-hover-more-display)"})}"
              .data=${this.data}
              @reply=${this.handleReply}
              @action=${this.handleAction}
              @view-dialog=${wt=>this.handleViewDialog(wt.detail)}
              @track=${wt=>this.handleClickTrack(wt.detail.position)}
            ></bili-comment-action-buttons-renderer>
          </div>
          <div id="reply-container"></div>
          ${this.tags&&this.mainTags()}
        </div>
      </div>
    `}};x.styles=i$6`
    :host {
      --bili-comment-spotlight-color: var(--brand_blue_thin);
      --bili-comment-padding-left: 42px;
      --bili-comment-padding-top: 10px;
      --bili-comment-padding-bottom: 0;
      --bili-comment-padding-left: 42px;
      --bili-comment-margin-top: 0;
      --bili-comment-margin-bottom: 0;
      --bili-comment-border-bottom: 1px solid var(--line_light);
    }
    #body {
      position: relative;
      margin-top: var(--bili-comment-margin-top);
      nargin-bottom: var(--bili-comment-margin-bottom);
      padding-left: var(--bili-comment-padding-left);
      padding-top: var(--bili-comment-padding-top);
      padding-bottom: var(--bili-comment-padding-bottom);
      --bili-comment-hover-more-display: none;
      border-bottom: var(--bili-comment-border-bottom);
    }
    #body.spotlight {
      background-color: var(--bili-comment-spotlight-color);
      transition: background-color 2s 3s;
    }
    #body:hover {
      --bili-comment-hover-more-display: block;
    }
    #user-avatar {
      position: absolute;
      left: 0;
      top: 15px;
      width: 40px;
      height: 40px;
      transform-origin: left top;
      transform: var(--bili-comments-avatar-size);
    }

    #user-avatar img {
      display: inline-block;
      border-radius: 50%;
    }

    #user-avatar-icon {
      position: absolute;
      right: 8px;
      bottom: 8px;
      width: 14px;
      height: 14px;
      box-sizing: border-box;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
    }

    #reply-time {
      font-size: 12px;
      height: 15px;
      line-height: 15px;
      color: var(--text3);
    }
    #ornament {
      position: absolute;
      right: 0;
      top: 7px;
      user-select: none;
    }
    bili-comment-vote-option {
      margin-top: 2px;
      margin-bottom: 6px;
    }
    #main {
      width: 100%;
    }
    #header {
      margin-bottom: 8px;
    }
    i {
      font-size: 12px;
      font-style: normal;
    }
    i#top {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 30px;
      height: 18px;
      border: 1px solid var(--brand_pink);
      border-radius: 3px;
      color: var(--brand_pink);
      vertical-align: text-bottom;
    }
    i#note {
      width: 48px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      color: var(--text3);
      background-color: var(--bg2);
      vertical-align: text-bottom;
    }

    #rich-text-container {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .collapsed {
      -webkit-line-clamp: 5;
    }
    #content {
      font-size: var(--bili-comments-font-size-content);
      line-height: var(--bili-comments-line-height-content);
      color: var(--text1);
    }
    #content #expand {
      color: var(--brand_blue);
      font-size: 12px;
      cursor: pointer;
    }
    #vote {
      margin: 10px 0;
    }
    #pictures {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
    #tags {
      margin-top: 12px;
      display: flex;
      align-items: center;
    }
    .tag {
      color: var(--bili-comment-tag-color-light, var(--text2));
      background-color: var(--bili-comment-tag-bg-light, var(--bg2_float));
      padding: 5px 6px;
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 1;
    }
    .tag + .tag {
      margin-left: 10px;
    }
  `;_([n$4()],x.prototype,"data",2);_([n$4()],x.prototype,"upMid",2);_([n$4()],x.prototype,"rootType",2);_([n$4()],x.prototype,"idx",2);_([n$4()],x.prototype,"user",2);_([n$4()],x.prototype,"contentFeatures",2);_([n$4()],x.prototype,"oid",2);_([n$4()],x.prototype,"root",2);_([n$4()],x.prototype,"showCheckText",2);_([n$4()],x.prototype,"assist",2);_([n$4()],x.prototype,"type",2);_([t$1()],x.prototype,"showTextExpand",2);_([n$4()],x.prototype,"expanded",2);_([n$4({type:Boolean})],x.prototype,"visible",2);_([t$1()],x.prototype,"ornament",1);_([t$1()],x.prototype,"top",1);_([t$1()],x.prototype,"note",1);_([t$1()],x.prototype,"expandAction",1);_([t$1()],x.prototype,"showExpand",1);_([t$1()],x.prototype,"voteOption",1);_([t$1()],x.prototype,"vote",1);_([t$1()],x.prototype,"pictures",1);_([t$1()],x.prototype,"tags",1);_([t$1()],x.prototype,"uid",1);_([t$1()],x.prototype,"spaceLink",1);_([t$1()],x.prototype,"userAvatarSrc",1);_([t$1()],x.prototype,"userAvatarIcon",1);_([i$3("#user-avatar-img")],x.prototype,"biliAvatar",2);_([i$3("#expand")],x.prototype,"expandButton",2);_([i$3("bili-user-info")],x.prototype,"biliUserInfo",2);_([i$3("bili-rich-text")],x.prototype,"biliRichText",2);_([i$3("bili-comment-action-buttons-renderer")],x.prototype,"actionButtons",2);_([i$3("#reply-container")],x.prototype,"replyContainer",2);_([i$3("#rich-text-container")],x.prototype,"biliRichTextContainer",2);_([i$3("#body")],x.prototype,"bodyElement",2);x=_([e$5("bili-comment-renderer")],x);function Di(me,Le,wt){if(!wt.namespaces.includes(me))return Le;const $t=[...Le];if(wt.method==="findIndex"){const kt=$t.findIndex(wt.predicate);return kt>-1?$t.splice(kt,1):[]}return $t.filter(wt.predicate)}function Li(me,Le,wt){if(!wt.namespaces.includes(me))return Le;const $t=[...Le];return $t[wt.method](wt.value),$t}var Ql=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor,ct=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Xl(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Ql(Le,wt,kt),kt};let Z=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.upMid=0,this.oid="",this.type=0,this.root="",this.currentPage=1,this.pageSize=10,this.showSpinner=!1,this.showViewMore=!0,this.showPagination=!1,this.count=0,this.totalPage=0,this.cacheList=[],this.list=[],this.newItems=[],this.invisibleID={},this.user=null}get showExpander(){return this.data.rcount!==0||this.newItems.length!==0}connectedCallback(){super.connectedCallback();const me=wt=>{wt.value.root_str===this.root&&(console.log("handleReplyListAdd+",wt,this.root),this.newItems=Li(q.REPLY,this.newItems,wt))},Le=wt=>{if(!this.isChildItem(wt.value))return;const $t=Di(q.REPLY,[...this.newItems,...this.list],wt);this.updateInvisibleID($t.map(kt=>kt.rpid_str))};y.on("add",me),y.on("remove",Le),this.disposables.add(()=>y.off("remove",Le)),this.disposables.add(()=>y.off("add",me)),this.root=this.data.rpid_str,this.list=this.data.replies||[],this.count=this.data.rcount,this.totalPage=Math.ceil(this.count/this.pageSize)}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}isChildItem(me){return`${me.type},${me.oid_str}`==`${this.type},${this.oid}`}handleClickTrack(me,Le){this.dispatchEvent(new CustomEvent("track",{detail:{position:me,rpid:Le||this.data.rpid_str}}))}get viewMoreText(){var me,Le;const{rcount:wt,replies:$t}=this.data;if(!this.data.rcount||wt===($t==null?void 0:$t.length))return"";let kt=`\u5171${this.data.rcount||0}\u6761\u56DE\u590D`;return(me=this.data.reply_control)!=null&&me.sub_reply_entry_text&&(kt=(Le=this.data.reply_control)==null?void 0:Le.sub_reply_entry_text),kt}get paginationItems(){const me=[],Le=this.currentPage-1;if(this.totalPage>7){let wt=Le,$t=Le;Le<=2?(wt=0,$t=Math.min(wt+5,this.totalPage-1)):Le>=this.totalPage-3?($t=this.totalPage-1,wt=Math.max($t-5,0)):($t=Math.min(Le+3,this.totalPage-1),wt=Math.max(0,Le-2)),new Array($t-wt).fill(1).forEach((kt,It)=>{me.push({text:String(wt+1+It),idx:wt+It,clickable:!0})}),wt>0&&(wt>1&&me.unshift({text:"...",idx:-1,clickable:!1}),me.unshift({text:"1",idx:0,clickable:!0})),$t<=this.totalPage-1&&($t<=this.totalPage-2&&me.push({text:"...",idx:-1,clickable:!1}),me.push({text:String(this.totalPage),idx:this.totalPage-1,clickable:!0}))}else new Array(this.totalPage).fill(1).forEach((wt,$t)=>{me.push({text:String(1+$t),idx:$t,clickable:!0})});return Le>0&&me.unshift({text:"\u4E0A\u4E00\u9875",idx:Le-1,clickable:!0}),this.currentPage<this.totalPage&&me.push({text:"\u4E0B\u4E00\u9875",idx:Le+1,clickable:!0}),me}handleRevert(){this.list=[...this.cacheList],this.showPagination=!1,this.showViewMore=!0}handleViewMore(){if(this.handleClickTrack(51),!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardCheckClick"});return}this.cacheList=[...this.list],this.dispatchEvent(new CustomEvent("view-detail",{detail:{oid:this.oid,root:this.root}}))}handleDispatchViewDetail(me){if(this.handleClickTrack(2,me),!this.user){F()&&Lt("auth/requestLogin",{from:"comments"});return}this.dispatchEvent(new CustomEvent("view-detail",{detail:{oid:this.oid,root:this.root}}))}async handleItemDelete(me,Le){const wt=[...Le==="feed"?this.list:this.newItems][me];let $t="\u5220\u9664\u5931\u8D25";try{if(!await ot({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:kt}=await je({oid:this.oid,type:this.type,rpid:wt.rpid_str});kt===0&&(this.updateInvisibleID([wt.rpid_str]),$t="\u5220\u9664\u6210\u529F")}catch(kt){console.log("\u5220\u9664\u5931\u8D25",kt)}finally{b.show($t)}}handleItemReport(me,Le){const wt={member:{mid:this.data.member.mid,uname:this.data.member.uname},oid:this.oid,type:this.type,rpid:me.rpid_str,hiddenJuryTips:Le||!1};this.dispatchEvent(new CustomEvent("report",{detail:wt}))}updateInvisibleID(me){const Le={...this.invisibleID};me.forEach(wt=>{Le[wt]=!0}),this.invisibleID=Le,this.requestUpdate()}viewMoreTemplate(){return this.viewMoreText?x$3`
          <div id="view-more">
            <span @click="${this.handleViewMore}">${this.viewMoreText}</span>
          </div>
        `:""}isVisibleItem(me){return!this.invisibleID[me]}renderItem(me,Le,wt){return x$3`<bili-comment-reply-renderer
      .oid=${this.oid}
      .type=${this.type}
      .root=${this.root}
      .data=${me}
      .user=${this.user}
      .upMid=${this.upMid}
      .visible=${this.isVisibleItem(me.rpid_str)}
      .contentFeatures=${this.contentFeatures}
      @reply=${()=>this.dispatchEvent(new CustomEvent("reply",{detail:me}))}
      @view-detail=${()=>this.handleDispatchViewDetail(me.rpid_str)}
      @delete=${()=>this.handleItemDelete(Le,wt)}
      @block=${()=>this.dispatchEvent(new CustomEvent("block",{detail:{mid:me.member.mid}}))}
      @jump-space=${$t=>this.dispatchEvent(new CustomEvent("jump-space",{detail:$t.detail}))}
      @report="${$t=>{var kt;return this.handleItemReport(me,(kt=$t.detail)==null?void 0:kt.hiddenJuryTips)}}"
    ></bili-comment-reply-renderer>`}render(){return x$3`
      <div
        id="expander"
        class=${o$1({"no-expand":!this.showExpander})}
      >
        <div id="expander-contents">
          ${c(this.list,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"feed"))}
          ${c(this.newItems,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"new"))}
          ${this.showSpinner?x$3`<div id="spinner"><bili-comments-spinner></bili-comments-spinner></div>`:""}
          <div id="expander-footer">${this.showViewMore?this.viewMoreTemplate():""}</div>
        </div>
      </div>
    `}};Z.styles=i$6`
    :host {
      display: block;
    }
    #expander {
      margin-left: 42px;
      margin-top: 12px;
      padding: 7px 10px;
      border-radius: 6px;
      background-color: var(--bg2_float);
    }
    .no-expand {
      display: none;
    }
    #expander-contents {
      position: relative;
    }
    #spinner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(var(--bg1_rgb), 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #view-more {
      font-size: 13px;
      color: var(--text3);
    }
    #view-more span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      outline: none;
      user-select: none;
      appearance: none;
      background: rgba(0, 0, 0, 0);
      text-decoration: none;
      position: relative;
      z-index: 0;
      height: 100%;
      font: inherit;
      color: var(--brand_blue);
      cursor: pointer;
    }
    #pagination {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: var(--text1);
    }
    #expander-footer bili-text-button {
      vertical-align: unset;
    }
    #pagination-head {
      margin-right: 10px;
    }
    #pagination-body {
      display: flex;
      align-items: center;
    }
    #pagination-body bili-text-button,
    #pagination-foot bili-text-button {
      margin-left: 8px;
    }
    #pagination-body bili-text-button:first-child {
      margin-left: 10px;
    }
  `;ct([n$4()],Z.prototype,"contentFeatures",2);ct([n$4()],Z.prototype,"data",2);ct([n$4()],Z.prototype,"upMid",2);ct([n$4()],Z.prototype,"oid",2);ct([n$4()],Z.prototype,"type",2);ct([n$4()],Z.prototype,"root",2);ct([t$1()],Z.prototype,"currentPage",2);ct([t$1()],Z.prototype,"showSpinner",2);ct([t$1()],Z.prototype,"showViewMore",2);ct([t$1()],Z.prototype,"showPagination",2);ct([t$1()],Z.prototype,"totalPage",2);ct([n$4({type:Array})],Z.prototype,"list",2);ct([t$1()],Z.prototype,"newItems",2);ct([t$1()],Z.prototype,"showExpander",1);ct([n$4()],Z.prototype,"user",2);ct([t$1()],Z.prototype,"viewMoreText",1);ct([t$1()],Z.prototype,"paginationItems",1);Z=ct([e$5("bili-comment-replies-renderer")],Z);var tc=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,yt=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?ec(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&tc(Le,wt,kt),kt};let ut=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.richTextDisposables=null,this.visible=!0,this.upMid=0,this.oid="",this.type=0,this.root="",this.user=null,this.avatarSize=24}get colonVisible(){return this.data.parent_str&&this.data.root_str&&this.data.parent_str!==this.data.root_str}get uid(){return this.data.member.mid}get spaceLink(){return Ct.SPACE(this.uid)}get userAvatarSrc(){return utils$2.getBmgSrcNext(this.data.member.avatar,{w:this.avatarSize,h:this.avatarSize,s:!0,dpr:2})}connectedCallback(){super.connectedCallback(),this.initData()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}clearRichTextDisposables(){this.richTextDisposables&&(this.richTextDisposables.dispose(),this.richTextDisposables=null)}initData(){this.clearRichTextDisposables(),setTimeout(()=>{var me;const Le=F();this.biliRichText.setContents(Rr(this.data,this.contentFeatures,Le?Wt.DESKTOP_APP:void 0)),(me=this.data.$extra)!=null&&me.spotlight&&window.setTimeout(()=>{En(this,-300),setTimeout(()=>{this.startSpotlight()},100)},100)})}async startSpotlight(){const me="spotlight";this.disposables.addEventListener(this.bodyElement,"transitionend",()=>{this.bodyElement.classList.remove(me),this.bodyElement.style.removeProperty("background-color"),this.bodyElement.style.removeProperty("transition")}),this.bodyElement.classList.add(me),await ci(10),this.bodyElement.style.setProperty("transition","background-color 2s 3s"),await ci(10),this.bodyElement.style.setProperty("background-color","transparent")}updated(me){me.get("data")&&this.initData(),me.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}handleReply(){this.dispatchEvent(new CustomEvent("reply"))}handleReplyClick(){this.dispatchEvent(new CustomEvent("view-detail"))}handleAction(me){const{key:Le,data:wt}=me.detail;this.dispatchEvent(new CustomEvent(Le,{detail:wt}))}handleTextClick(me){const Le=me.detail;Le&&this.dispatchEvent(new CustomEvent("jump",{detail:Le,composed:!0}))}render(){return x$3`
      <div id="body">
        <div id="main" @click=${this.handleReplyClick}>
          <div id="sub-user-info">
            <bili-comment-user-info
              .data=${this.data}
              .upMid=${this.upMid}
              .levelVisible=${!1}
              .showVipColor=${!1}
              style="${o$3({"--bili-comments-font-size-name":"14px","margin-right":this.colonVisible?"":"5px"})}"
              @jump-space=${()=>this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}}))}
            >
            </bili-comment-user-info>
            ${this.colonVisible?"":x$3`<span>:</span>`}
          </div>
          <bili-rich-text
            @text-click=${this.handleTextClick}
            style="${o$3({"--bili-rich-text-line-height":"20px","--bili-rich-text-link-color":"var(--Lb6)","--bili-rich-text-display":"inline","--bili-rich-text-font-size":"14px","word-break":"break-word"})}"
          ></bili-rich-text>
        </div>
      </div>
    `}};ut.styles=i$6`
    :host {
      --bili-comment-spotlight-color: var(--brand_blue_thin);
    }
    #body {
      position: relative;
      padding: 3px 0;
      border-radius: 4px;
      --bili-comment-hover-more-display: none;
    }

    #main {
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: var(--text1);
      font: 14px;
    }

    #sub-user-info {
      display: inline-flex;
    }

    #body.spotlight {
      background-color: var(--bili-comment-spotlight-color);
    }
    #body:hover {
      --bili-comment-hover-more-display: block;
    }
    #footer {
      padding-right: 20px;
    }
    #user-avatar {
      position: absolute;
      left: 0;
      width: 24px;
      height: 24px;
    }
    #user-avatar img {
      border-radius: 50%;
    }
  `;yt([n$4({type:Boolean})],ut.prototype,"visible",2);yt([n$4({type:Object})],ut.prototype,"data",2);yt([n$4()],ut.prototype,"upMid",2);yt([n$4()],ut.prototype,"oid",2);yt([n$4()],ut.prototype,"type",2);yt([n$4()],ut.prototype,"root",2);yt([n$4()],ut.prototype,"user",2);yt([n$4()],ut.prototype,"contentFeatures",2);yt([t$1()],ut.prototype,"colonVisible",1);yt([t$1()],ut.prototype,"uid",1);yt([t$1()],ut.prototype,"spaceLink",1);yt([t$1()],ut.prototype,"userAvatarSrc",1);yt([i$3("bili-rich-text")],ut.prototype,"biliRichText",2);yt([i$3("#body")],ut.prototype,"bodyElement",2);ut=yt([e$5("bili-comment-reply-renderer")],ut);const ic=me=>X.request({url:"/x/v2/reply/wbi/main",params:{...me,web_location:1315875},chainProxy:Le=>Le.with("UNIOS_WBI_ENCODE",{active:!0,encWbiKeys:{wbiImgKey:"839c8b697b0d44dc80e9a604592bb432",wbiSubKey:"02cd020b04d64aacad6b3a08d06f8eb0"}})}),jr=()=>useAuthData(),Nr=me=>X.request({url:"/x/v2/reply/subject/interaction-status",params:{...me}});function rc(me,Le){return window.BiliCm?window.BiliCm.Base.getSyncUrl(me,Le):me.url}function Vr(){const me=Date.now()+864e5;Ys({expires:me})}function oc(){return Ks().expires}function nc(){return oc()<Date.now()}function sc(me){if(typeof window<"u"&&!nc()||!(me!=null&&me.ads))return null;for(const Le in me.ads){const wt=me.ads[Le];if(Array.isArray(wt)){const $t=wt[0];return $t?{isEmpty:!(!!$t.name&&!!$t.creative_id&&!!$t.is_ad),locId:Number(Le),title:$t.name,data:$t}:null}}return null}function $e(me){return me.disabled?{source:"disabled",message:me.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED"}:me.user?me.closed?{source:"closed",message:me.message}:null:{source:"unlogin"}}function Ai(me){if(!(me!=null&&me.options)||!(me!=null&&me.my_vote_option))return null;const Le=me.options[me.my_vote_option-1];if(!Le)return null;let wt=Le.desc;wt.indexOf("\u5DF2\u6295")===-1&&(wt=`\u5DF2\u6295\u201C${wt}\u201D`);let $t=3;return me.options.length===2&&($t=Le.idx),{...Le,label_kind:$t,desc:wt}}function ac(me,Le){let wt="",$t="\u67E5\u770B\u5B8C\u6574\u8BC4\u8BBA";return me==="unlogin"&&(wt="\u767B\u5F55\u540E"),Le>=1e4?$t=`\u67E5\u770B ${Math.floor(Le/1e3)/10}\u4E07+ \u6761\u8BC4\u8BBA`:Le>=1e3?$t=`\u67E5\u770B ${Math.floor(Le/1e3)*1e3}+ \u6761\u8BC4\u8BBA`:Le>=3&&($t=`\u67E5\u770B ${Le} \u6761\u8BC4\u8BBA`),`${wt}${$t}`}function zr(me){if(!me.user){if(me.count<=2)return null;const Le="unlogin";return{type:Le,count:2,text:ac(Le,me.count)}}return null}function Fr(me){return me===12061||me===12002}function Ur(me){var Le;return((Le=me.control)==null?void 0:Le.web_selection)===!0}function qr(me,Le,wt){var $t=wt||{},kt=$t.noTrailing,It=kt===void 0?!1:kt,Rt=$t.noLeading,Pt=Rt===void 0?!1:Rt,Ft=$t.debounceMode,Ut=Ft===void 0?void 0:Ft,Xt,Jt=!1,ii=0;function Ni(){Xt&&clearTimeout(Xt)}function Vi(Xn){var Qn=Xn||{},eo=Qn.upcomingOnly,no=eo===void 0?!1:eo;Ni(),Jt=!no}function zi(){for(var Xn=arguments.length,Qn=new Array(Xn),eo=0;eo<Xn;eo++)Qn[eo]=arguments[eo];var no=this,to=Date.now()-ii;if(Jt)return;function oo(){ii=Date.now(),Le.apply(no,Qn)}function ao(){Xt=void 0}!Pt&&Ut&&!Xt&&oo(),Ni(),Ut===void 0&&to>me?Pt?(ii=Date.now(),It||(Xt=setTimeout(Ut?ao:oo,me))):oo():It!==!0&&(Xt=setTimeout(Ut?ao:oo,Ut===void 0?me-to:me))}return zi.cancel=Vi,zi}const So="0,0",Io="0,0,0",Po="0,0,0,0",lc="//s1.hdslb.com/bfs/seed/jinkela/short/webui/comments",cc="medalnum",dc="pc-comments-cljzkg6fxb9",Hr=`
  @font-face {
    font-family: "fans-num";
    src: url("//activity.hdslb.com/blackboard/static/20240516/6fdde5f06d0b876f68573682fa59da66/v6u7v27Ucs.ttf");
  }
  @font-face {
    font-family: "${cc}";
    src: url("${lc}/font/medal-num.ttf");
  }
  @font-face {
    font-family: "${dc}";
    src: url('https://s1.hdslb.com/bfs/svg-next/font/2024-08-12/pc-comments-cljzkg6fxb9.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --bili-comments-font-size-title: 20px;
    --bili-comments-font-size-count: 13px;
    --bili-comments-font-size-sort: 13px;
    --bili-comments-font-size-name: 13px;
    --bili-comments-font-size-content: 15px;
    --bili-comments-line-height-content: 24px;
    --bili-comments-avatar-size: scale(0.83333333);
  }
  @media screen and (min-width: 1681px) {
    :root {
      --bili-comments-font-size-title: 24px;
      --bili-comments-font-size-count: 14px;
      --bili-comments-font-size-sort: 16px;
      --bili-comments-font-size-name: 14px;
      --bili-comments-font-size-content: 16px;
      --bili-comments-line-height-content: 26px;
      --bili-comments-avatar-size: scale(1);
    }
  }
`,Wr=me=>{let Le=me.src;Le.indexOf("//")===-1&&(Le=`//${Le}`);const wt=me.root.getBoundingClientRect(),$t=document.createElement("bili-alpha-video");$t.setAttribute("src",Le),$t.setAttribute("width","600"),$t.setAttribute("height","500"),$t.setAttribute("autoplay",""),$t.style.setProperty("position","fixed"),$t.style.setProperty("top","50%"),$t.style.setProperty("left","50%"),$t.style.setProperty("transform","translate(-50%, -50%)"),$t.style.setProperty("position","fixed"),$t.style.setProperty("z-index","9999"),$t.style.setProperty("top","50%"),$t.style.setProperty("left",`${wt.left+wt.width/2}px`),$t.style.setProperty("transform","translate(-50%, -50%)");const kt=()=>{var Rt;(Rt=me==null?void 0:me.onClick)==null||Rt.call(me)};$t.addEventListener("click",kt);const It=()=>{var Rt;(Rt=me==null?void 0:me.onEnded)==null||Rt.call(me),setTimeout(()=>{$t.removeEventListener("click",kt),$t.removeEventListener("ended",It),$t.parentElement&&$t.parentElement.removeChild($t)},20)};$t.addEventListener("ended",It),document.documentElement.appendChild($t)};function Gr(){{const me=document.querySelector("bili-user-profile");me&&me.parentElement&&me.parentElement.removeChild(me);return}}var hc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,S=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?pc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&hc(Le,wt,kt),kt};let k=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=So,this.oid="",this.type=0,this.rootType="list",this.mode=3,this.assist=!1,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.unLoginCount=3,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var me,Le;return`\u56DE\u590D @${(Le=(me=this.replyTarget)==null?void 0:me.member)==null?void 0:Le.uname} : `}get voteOption(){return Ai(this.vote)}isVisibleItem(me){return!this.invisibleID[me]}isChildItem(me){return`${me.type},${me.oid_str||me.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const me=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");me&&(this.replyCommentBox=me)}connectedCallback(){super.connectedCallback(),this.initData();const me=Ft=>{if(!this.isChildItem(Ft.value))return;const Ut=Di(q.MAIN,[...this.newItems,...this.list],Ft);this.updateInvisibleID(Ut.map(Xt=>Xt.rpid_str))},Le=Ft=>{Ft.root&&Ft.root.type!=="list"||Ft.root&&(Ft.root.params.type!==this.type||Ft.root.params.oid!==this.oid)||this.isChildItem(Ft.value)&&(this.newItems=Li(q.MAIN,this.newItems,Ft))},wt=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},$t=({target:Ft,root:Ut,defaultInput:Xt,mount:Jt})=>{if(Ft&&!(Ut&&Ut.type!=="list")&&!(Ut&&(Ut.params.type!==this.type||Ut.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&Ft===this.replyTarget){wt();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),Xt&&(this.replyInputValue=Xt),this.replyTarget=Ft,Jt(this.replyCommentBox)}},kt=({src:Ft,jumpUrl:Ut})=>{let Xt=!1;Wr({src:Ft,root:this,onClick:()=>{Ut&&(Xt=!0,window.open(Ut))},onEnded:()=>{Ut&&(Xt||window.open(Ut))}})},It=this.handleJumpSpace.bind(this),Rt=this.handleJump.bind(this),Pt=this.handlePreviewImage.bind(this);y.on("remove",me),y.on("add",Le),y.on("reply",$t),y.on("hideReply",wt),y.on("displayAlphaVideo",kt),y.on("jumpSpace",It),y.on("jump",Rt),y.on("previewImage",Pt),this.disposables.add(()=>y.off("remove",me)),this.disposables.add(()=>y.off("add",Le)),this.disposables.add(()=>y.off("reply",$t)),this.disposables.add(()=>y.off("displayAlphaVideo",kt)),this.disposables.add(()=>y.off("jumpSpace",It)),this.disposables.add(()=>y.off("jump",Rt)),this.disposables.add(()=>y.off("previewImage",Pt)),this.disposables.add(Gr),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new Ke({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(Ft,Ut,Xt)=>{Ft==="show"&&te({type:"show",spm_info:Ut},{msg:JSON.stringify(Xt)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(F()){const Ft=Si("window/visibleChange",({data:Ut})=>{var Xt;(Xt=this.trackObserver)==null||Xt.reportShowDuration(Ut)});this.disposables.add(()=>{Ft()})}})}disconnectedCallback(){this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(me){me.get("params")&&(this.unload(),this.initData())}initDependencies(){yr()}appendGlobalStyle(){const me="bili-comments-global-style";if(document.querySelector("#"+me))return;const Le=document.createElement("style");Le.id=me,Le.innerHTML=Hr,document.body.appendChild(Le)}async initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===So)return;const[me,Le]=this.params.split(",");if(!Le||Le==="0"||!me||me==="0"||isNaN(Number(me)))return;const wt=this.getAttribute("mode")||"3",$t=this.getAttribute("seek-id")||"";let kt=0;const It=this.getAttribute("max-view-limit");typeof It=="string"&&(kt=Number(It),isNaN(kt)&&(kt=0));const Rt=this.getAttribute("disable-video-time");typeof Rt=="string"&&Rt!=="false"&&(this.contentFeatures.videoTime=!1);const Pt=this.getAttribute("event-bubbles");let Ft;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const Xt=getComputedStyle(this.parentElement);["auto","scroll"].includes(Xt.overflowY)&&(Ft=this.parentElement)}const Ut=this.getAttribute("cm-from-track-id")||"";this.load({oid:Le,type:Number(me),seekRpid:$t,mode:Number(wt),maxViewLimit:kt,cmFromTrackId:Ut,eventBubbles:Pt!==null,scrollContainer:Ft})}updateList(me){this.list=me}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.assist=!1,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(me){return this.unload(),await this.load(me)}async load(me){try{if(me){const{oid:Le,type:wt,mode:$t,seekRpid:kt,disableVideoTime:It,maxViewLimit:Rt,scrollContainer:Pt,spmInfo:Ft,cmFromTrackId:Ut}=me;if(this.oid=String(Le),this.type=wt,typeof It=="string"&&It!=="false"&&(this.contentFeatures.videoTime=!1),$t&&[2,3].includes($t)&&(this.mode=$t),kt&&(this.seekRpid=kt),Ut?this.cmFromTrackId=Ut:this.cmFromTrackId="",Rt&&Rt>0&&(this.maxViewLimit=Rt),Pt)if(typeof Pt=="string"){const Xt=document.querySelector(Pt);Xt?this.scrollContainer=Xt:console.warn("scrollContainer not found")}else this.scrollContainer=Pt;Ft&&(this.spmInfo=Ft),this.eventBubbles=me.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Dr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(Le){return console.warn("bili comments load error",Le),Promise.reject(Le)}}async initUser(){try{this.initUserDP=Pi();const{code:me,data:Le}=await jr();if(this.initUserDP.resolve(),this.initUserDP=null,me===0&&Le)return this.user=Le,Le}catch(me){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",me)}return null}async initUpGlobalActions(){try{const{code:me,data:Le}=await Nr({oid:this.oid,type:this.type});if(me!==0||!Le)return;this.globalOptions=wr(Le,F())}catch(me){console.log("bili comments up interaction status error",me)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const me=new IntersectionObserver(async Le=>{if(Le[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});me.observe(this.continueTrigger),this.disposables.add(()=>{me.unobserve(this.continueTrigger),me.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",qr(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:me,scrollHeight:Le,clientHeight:wt}=this.scrollContainer;Math.ceil(me)+wt*2>=Le&&this.getList()}else{const{scrollTop:me,scrollHeight:Le}=document.documentElement,wt=window.innerHeight;Math.ceil(me)+wt*2>=Le&&this.getList()}}))}updateInvisibleID(me){const Le={...this.invisibleID};me.forEach(wt=>{Le[wt]=!0}),this.invisibleID=Le,this.requestUpdate()}async handleItemDelete(me,Le){var wt;const $t=[...Le==="feed"?this.list:this.newItems][me];if(((wt=this.cmTopProtection)==null?void 0:wt.rpid)===($t==null?void 0:$t.rpid_str)){Ve({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:It=>{It(),pi({type:this.type,oid:this.oid,rpid:$t.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:It=>{It()}}});return}let kt="\u5220\u9664\u5931\u8D25";try{if(!await ot({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:It}=await je({oid:this.oid,type:this.type,rpid:$t.rpid_str});It===0&&(this.updateInvisibleID([$t.rpid_str]),kt="\u5220\u9664\u6210\u529F")}catch(It){console.log("\u5220\u9664\u5931\u8D25",It)}finally{b.show(kt)}}async handleItemTop(me,Le,wt){const $t=[...Le==="feed"?this.list:this.newItems][me];let kt=`${wt?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:It}=await di({oid:this.oid,type:this.type,rpid:$t.rpid_str,action:wt?1:0});It===0?kt+="\u6210\u529F":kt+="\u5931\u8D25"}catch{kt+="\u5931\u8D25"}finally{b.show(kt)}}async handleItemReport(me){const{app_id:Le,platform:wt}=Ce("app/getAppInfo");_r({...me,ordering:this.mode===3?"heat":"time",appId:Le,platform:wt})}async handleItemBlock(me){try{if(!await ot({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:Le,message:wt}=await vr({fid:me.mid,act:5,re_src:15});if(Le!==0){b.show(wt||"\u62C9\u9ED1\u5931\u8D25");return}y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"filter",predicate:$t=>{var kt;return((kt=$t.member)==null?void 0:kt.mid)===me.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}handlePreviewImage(me){this.dispatchEvent(new CustomEvent("preview-image",{detail:me}))}handleJumpSpace(me){this.dispatchEvent(new CustomEvent("jump-space",{detail:me}))}handleJump(me){this.dispatchEvent(new CustomEvent("jump",{detail:me}))}handleViewDetail(me){this.dispatchEvent(new CustomEvent("view-detail",{detail:me}))}updatePaginationStr(me){this.paginationStr=JSON.stringify({offset:me})}updateReplyItemExtra(me,Le,wt){me.$extra||(me.$extra={}),me.$extra[Le]=wt}async getList(){var me,Le;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const wt=await ic({oid:this.oid,type:this.type,mode:this.mode,pagination_str:this.paginationStr,plat:1,seek_rpid:this.list.length===0?this.seekRpid:void 0,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,wt.code!==0||!wt.data){this.isClosed=Fr(wt.code),this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:wt.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:$t,cm_info:kt,control:It,top_replies:Rt,upper:Pt,assist:Ft}=wt.data;let Ut=wt.data.replies||[];const Xt=[];this.list.length||Rt!=null&&Rt.length&&Rt.reverse().forEach(ii=>{Ut.unshift(ii)}),this.showSpinner&&(this.upMid=Pt.mid,this.assist=Ft===1,this.notice=sc(kt),this.vote=wt.data.vote_card||null,this.count=($t==null?void 0:$t.all_count)||0,It&&(this.rootInputPlaceholder=It.root_input_text||"",this.rootInputUploadPicState=It.upload_picture_icon_state,this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:It.root_input_text||"",disabled:It.input_disable}),It.cm_top_reply_protection&&(this.cmTopProtection={rpid:String(It.cm_top_reply_protection.protected_top_rpid),message:It.cm_top_reply_protection.popup_message})),this.isSelected=Ur(wt.data),this.limitMaskState=zr({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Ut=Ut.slice(0,this.unLoginCount))),(me=$t==null?void 0:$t.pagination_reply)!=null&&me.next_offset&&this.updatePaginationStr((Le=$t==null?void 0:$t.pagination_reply)==null?void 0:Le.next_offset);let Jt=!this.seekRpid;if(Ut.forEach(ii=>{var Ni;this.loadedID[ii.rpid_str]||ii.invisible!==!0&&(this.loadedID[ii.rpid_str]=!0,Jt===!1&&(ii.rpid_str===this.seekRpid?(this.updateReplyItemExtra(ii,"spotlight",!0),Jt=!0):(Ni=ii.replies)!=null&&Ni.length&&ii.replies.forEach(Vi=>{Jt||Vi.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(Vi,"spotlight",!0),Jt=!0)})),Xt.push(ii))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){Xt.length&&(Xt.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(Xt.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}$t!=null&&$t.is_end&&(this.showEnd=!0),Xt.length?this.updateList(this.list.concat(Xt)):this.showEnd=!0,this.disposables.setTimeout(()=>{if(this.commentFeed&&this.limitMaskWall){const ii=this.commentFeed.lastElementChild;if(ii){const Ni=ii.clientHeight;Ni<236&&(this.limitMaskWall.style.height=`${Ni}px`)}}},500)}catch(wt){console.log("getList error",wt),this.showContinuations=!1}}async handleGlobalAction(me){var Le,wt;if(!((Le=me.detail)!=null&&Le.key)||!((wt=me.detail)!=null&&wt.data))return;const $t=me.detail.key,kt=me.detail.data.active,It=me.detail.text;if($t==="select"){try{if(!await ot({title:It,message:kt?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.SELECT:Tt.UNSELECT});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.OPEN:Tt.CLOSE});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close-danmaku"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await br({aid:this.oid,state:kt?0:1});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}let Ut=(Ft==null?void 0:Ft.action_toast)||Pt;Ut==="0"&&(Ut="\u64CD\u4F5C\u6210\u529F"),b.show(Ut||It+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(me){this.mode=me.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){Vr(),this.notice=null}handleTriggerEvent(me,Le){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${me}`,{detail:Le,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(me,{detail:Le}))}handleLimitClick(){var me;((me=this.limitMaskState)==null?void 0:me.type)==="unlogin"&&(F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardShowMore"}))}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}headerTemplate(){return x$3`
      <div id="header">
        <bili-comments-header-renderer
          .oid=${this.oid}
          .type=${this.type}
          .mode=${this.mode}
          .user=${this.user}
          .upMid=${this.upMid}
          .isClosed=${this.isClosed}
          .isSelected=${this.isSelected}
          .options=${this.globalOptions}
          .notice=${this.notice}
          .vote=${this.vote}
          .count=${this.count}
          .limitMaskState=${this.limitMaskState}
          .inputPlaceholder=${this.rootInputPlaceholder}
          .commentBoxDisabledState=${this.commentBoxDisabledState}
          .commentBoxTeleportDisabled=${this.maxViewLimit>0}
          .uploadPicState=${this.rootInputUploadPicState}
          .scrollContainer=${this.scrollContainer}
          @mode-change=${this.handleModeChange}
          @notice-close=${this.handleNoticeClose}
          @action=${this.handleGlobalAction}
          @jump=${me=>this.handleJump(me.detail)}
        ></bili-comments-header-renderer>
      </div>
    `}spinnerTemplate(){return x$3`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(me,Le,wt){return x$3`<bili-comment-thread-renderer
      .user=${this.user}
      .upMid=${this.upMid}
      .data=${me}
      .visible=${this.isVisibleItem(me.rpid_str)}
      .oid=${this.oid}
      .type=${this.type}
      .rootType=${this.rootType}
      .mode=${this.mode}
      .cmFromTrackId=${this.cmFromTrackId}
      .idx=${Le}
      .spmInfo=${this.spmInfo}
      .assist=${this.assist}
      .contentFeatures=${this.contentFeatures}
      @delete=${()=>this.handleItemDelete(Le,wt)}
      @top=${$t=>this.handleItemTop(Le,wt,$t.detail)}
      @report=${$t=>this.handleItemReport($t.detail)}
      @block=${$t=>this.handleItemBlock($t.detail)}
      @expand=${$t=>this.handleTriggerEvent("expand",$t.detail)}
      @jump=${$t=>{$t.stopPropagation(),this.handleJump($t.detail)}}
      @view-detail=${$t=>this.handleViewDetail($t.detail)}
      @preview-image=${$t=>this.handlePreviewImage($t.detail)}
      @jump-space=${$t=>this.handleJumpSpace($t.detail)}
    ></bili-comment-thread-renderer>`}limitMaskTemplate(){return x$3`<div id="limit-mask" @click=${this.handleLimitClick}>
      <div id="limit-mask-wall"></div>
      <div id="limit-mask-tip">登录后查看更多评论 ${x$3`<bili-icon icon="BDC/arrow_forward_right_line/3" size="12" />`}</div>
    </div>`}contentTemplate(){return x$3`
      <div id="contents">
        <div id="new">
          ${c(this.newItems,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"feed"))}
        </div>
        ${this.limitMaskState?this.limitMaskTemplate():""}
        <div id="reply-commentbox">
          <bili-comment-box
            style="padding: 10px 0 ;--bili-comment-box-display: none;"
            .oid=${this.oid}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .reply=${this.replyTarget}
            .inputValue=${this.replyInputValue}
            .voteOption=${this.voteOption}
            .keepActive=${this.replyKeepActive}
            .user=${this.user}
            .placeholder=${this.replyInputPlaceholder}
          ></bili-comment-box>
        </div>
      </div>
    `}continuationsTemplate(){return x$3`
      <div id="continuations">
        ${this.showContinuations?x$3`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$3`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$3`
      <div id="end">
        ${this.showViewMore?x$3`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论 {</div>`:x$3`<div
              class="bottombar ${this.limitMaskState?o$1({disabled:!0}):""}"
            >
              没有更多评论
            </div>`}
      </div>
    `}render(){return x$3`
      ${x$3`${this.headerTemplate()}${this.showSpinner?this.spinnerTemplate():x$3`${this.contentTemplate()}${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}`}
    `}};k.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
      z-index: 35;
    }

    #limit-mask-wall {
      width: 100%;
      height: 200px;
      cursor: pointer;
    }
    #limit-mask-wall::before {
      display: block;
      content: "";
      height: 100%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--bg1) 100%);
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 36px;
      border-radius: 6px;
      font-size: 12px;
      color: var(--brand_pink);
      background: var(--bg1);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }

    #end .bottombar.disabled {
      padding-bottom: 60px;
    }
  `;S([t$1()],k.prototype,"scrollContainer",2);S([t$1()],k.prototype,"user",2);S([n$4({attribute:"data-params"})],k.prototype,"params",2);S([t$1()],k.prototype,"mode",2);S([t$1()],k.prototype,"assist",2);S([t$1()],k.prototype,"showSpinner",2);S([t$1()],k.prototype,"showContinuations",2);S([t$1()],k.prototype,"showContinueTrigger",2);S([t$1()],k.prototype,"contentFeatures",2);S([t$1()],k.prototype,"showEnd",2);S([t$1()],k.prototype,"upMid",2);S([t$1()],k.prototype,"globalOptions",2);S([t$1()],k.prototype,"notice",2);S([t$1()],k.prototype,"vote",2);S([t$1()],k.prototype,"count",2);S([t$1()],k.prototype,"spmInfo",2);S([t$1()],k.prototype,"rootInputPlaceholder",2);S([t$1()],k.prototype,"inputDisabled",2);S([t$1()],k.prototype,"rootInputUploadPicState",2);S([t$1()],k.prototype,"limitMaskState",2);S([t$1()],k.prototype,"list",2);S([t$1()],k.prototype,"newItems",2);S([t$1()],k.prototype,"replyTarget",2);S([t$1()],k.prototype,"replyInputValue",2);S([t$1()],k.prototype,"replyKeepActive",2);S([t$1()],k.prototype,"replyInputPlaceholder",1);S([t$1()],k.prototype,"commentBoxDisabledState",2);S([t$1()],k.prototype,"voteOption",1);S([i$3("#continuations .trigger")],k.prototype,"continueTrigger",2);S([i$3("#reply-commentbox")],k.prototype,"replyCommentBoxContainer",2);S([i$3("#limit-mask-wall")],k.prototype,"limitMaskWall",2);S([i$3("#feed")],k.prototype,"commentFeed",2);k=S([e$5("bili-comments")],k);var uc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,H=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?mc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&uc(Le,wt,kt),kt};const Oo="bili-comments-bottom-fixed-wrapper";let U=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.type=0,this.rootType="list",this.rootReply=null,this.user=null,this.isClosed=!1,this.isSelected=!1,this.options=[],this.notice=null,this.vote=null,this.count=0,this.mode=3,this.inputPlaceholder="",this.commentBoxDisabledState=null,this.commentBoxTeleportDisabled=!1,this.uploadPicState=1,this.scrollContainer=null,this.commentboxInited=!1,this.revertTeleportCommentbox=null,this.showMoreMenu=!1,this.moreMenuInited=!1}get voteOption(){return Ai(this.vote)}get containerZIndex(){var me;return this.scrollContainer?(me=window.getComputedStyle(this.scrollContainer))==null?void 0:me.zIndex:"30"}get sortClass(){return this.mode===3?"hot":this.mode===2?"time":""}connectedCallback(){super.connectedCallback(),this.initMoreMenu(),this.initCommentbox()}disconnectedCallback(){super.disconnectedCallback(),this.commentboxInited=!1,this.disposables.dispose(),this.revertTeleportCommentbox&&this.revertTeleportCommentbox()}update(me){super.update(me),me.get("options")&&this.initMoreMenu(),me.get("user")&&this.initCommentbox()}initMoreMenu(){this.menu&&(this.moreMenuInited||setTimeout(()=>{this.disposables.addEventListener(this.menu,"mouseleave",()=>{this.showMoreMenu=!1})}))}initCommentbox(){this.disposables.setTimeout(()=>{if(this.rootType==="list"&&this.removeBottomWrapper(),this.commentBoxDisabledState||this.commentboxInited||(this.commentboxInited=!0,this.commentBoxTeleportDisabled)||!window.IntersectionObserver)return;const me=new IntersectionObserver(async Le=>{if(!this.commentBoxDisabledState){if(this.scrollContainer){const wt=this.scrollContainer.scrollTop,$t=this.commentboxEl.offsetTop-this.scrollContainer.offsetTop,kt=this.scrollContainer.clientHeight;if($t-wt>kt)return}else{const{top:wt}=this.commentboxEl.getBoundingClientRect(),$t=window.innerHeight;if(wt>=$t)return}this.teleportCommentbox(Le[0].isIntersecting)}});me.observe(this.commentboxEl),this.disposables.add(()=>{me.unobserve(this.commentboxEl),me.disconnect()})},1e3)}updateBottomFixedWrapperStyle(){var me;if(!this.commentboxEl||!this.revertTeleportCommentbox)return;const Le=(((me=this.scrollContainer)==null?void 0:me.parentElement)||this.shadowRoot).querySelector(`.${Oo}`);if(!Le)return;const{width:wt,left:$t}=this.commentboxEl.getBoundingClientRect();Le.style.width=`${wt}px`,Le.style.left=`${$t}px`}removeBottomWrapper(){if(this.scrollContainer){const me=this.scrollContainer.parentElement;me&&Array.from(me.children).forEach(Le=>{Le.className.toLowerCase()==="bili-comments-bottom-fixed-wrapper"&&me.removeChild(Le)})}}teleportCommentbox(me){var Le;if(me){(Le=this.revertTeleportCommentbox)==null||Le.call(this),this.revertTeleportCommentbox=null;return}const wt=this.commentboxEl.children[0];wt.resetState();const{width:$t,height:kt}=this.commentboxEl.getBoundingClientRect();if($t===0||kt===0)return;const It=this.commentboxEl.offsetLeft;this.commentboxEl.style.setProperty("--bili-comments-commentbox-height",`${kt}px`);const Rt=document.createElement("div");Rt.className=Oo,Rt.style.position=this.scrollContainer?"absolute":"fixed",Rt.style.bottom="0",Rt.style.left=`${It}px`,Rt.style.width=`${$t}px`,Rt.style.zIndex=`${Number(this.containerZIndex)+1}`;const Pt=document.createElement("div");Pt.appendChild(wt),Pt.style.width="100%",Pt.style.padding="15px 0",Pt.style.position="relative",Pt.style.backgroundColor="var(--bg1)",Pt.style.borderTop="0.5px solid var(--graph_bg_thick)",Rt.appendChild(Pt);let Ft=this.shadowRoot,Ut=!1;this.scrollContainer&&this.scrollContainer.parentElement&&this.scrollContainer.parentElement!==document.body&&(Ft=this.scrollContainer.parentElement,getComputedStyle(Ft).position==="static"&&(Ut=!0,Ft.style.position="relative")),Ft.appendChild(Rt),this.revertTeleportCommentbox=()=>{this.commentboxEl.appendChild(wt),wt.resetState(),Rt&&Ft.contains(Rt)&&Ft.removeChild(Rt),Ut&&Ft instanceof HTMLElement&&(Ft.style.position=""),this.commentboxEl.style.setProperty("--bili-comments-commentbox-height",`${wt.clientHeight}px`),setTimeout(()=>{this.commentboxEl.style.removeProperty("--bili-comments-commentbox-height")},300)}}handleChangeMode(me){this.mode!==me&&this.dispatchEvent(new CustomEvent("mode-change",{detail:me}))}handleMore(){this.showMoreMenu=!0}handleSelectOption(me){this.showMoreMenu=!1,this.dispatchEvent(new CustomEvent("action",{detail:me.detail}))}handleNoticeClose(){this.dispatchEvent(new CustomEvent("notice-close"))}handleLogin(){if(!this.user){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.relpyInputClick"});return}}noticeTemplate(){return x$3`
      <div id="notice">
        ${x$3`<bili-comments-notice
          .data=${this.notice}
          @jump=${me=>this.dispatchEvent(new CustomEvent("jump",{detail:me.detail}))}
          @close=${this.handleNoticeClose}
        ></bili-comments-notice>`}
      </div>
    `}voteTemplate(){return x$3`
      <div id="vote">
        ${x$3`<bili-comments-vote-card
          .data=${this.vote}
          .oid=${this.oid}
          .type=${this.type}
          .user=${this.user}
        ></bili-comments-vote-card>`}
      </div>
    `}sortTemplate(){return this.isSelected?x$3`<div id="sort-title">精选评论</div>`:this.commentBoxDisabledState?x$3`<div
          id="sort-actions"
          class=${this.sortClass?o$1({[this.sortClass]:!0}):""}
        >
          <bili-text-button @click=${()=>this.handleChangeMode(3)}>最热</bili-text-button>
        </div>`:x$3`<div
          id="sort-actions"
          class=${this.sortClass?o$1({[this.sortClass]:!0}):""}
        >
          <bili-text-button @click=${()=>this.handleChangeMode(3)}>最热</bili-text-button>
          <div class="sort-div"></div>
          <bili-text-button @click=${()=>this.handleChangeMode(2)}>最新</bili-text-button>
        </div>`}navbarTemplate(){return this.rootType==="list"?x$3`
          <div id="navbar">
            ${this.isClosed?"":this.sortTemplate()}
            ${this.options.length?x$3` <div id="more">
                  <button @click=${this.handleMore}>
                    <bili-icon size="16" icon="BDC/more_vertical_fill/1"></bili-icon>
                  </button>
                  <bili-comment-menu
                    style="${this.showMoreMenu?o$3({"--bili-comment-menu-display":"block"}):""}"
                    .options=${this.options}
                    @select=${this.handleSelectOption}
                  ></bili-comment-menu>
                </div>`:""}
          </div>
        `:x$3`<div id="navbar-div"></div>`}disabledCommentboxTemplate(){return x$3`
      <bili-comment-disabled-box
        .oid=${this.oid}
        .type=${this.type}
        .rootType=${this.rootType}
        .user=${this.user}
        .scrollContainer=${this.scrollContainer}
        .commentBoxDisabledState=${this.commentBoxDisabledState}
      >
      </bili-comment-disabled-box>
    `}commentboxTemplate(){return x$3`
      <div id="commentbox">
        ${this.commentBoxDisabledState?this.disabledCommentboxTemplate():x$3`<bili-comment-box
              .oid=${this.oid}
              .type=${this.type}
              .rootType=${this.rootType}
              .mode=${this.mode}
              .user=${this.user}
              .reply=${this.rootReply}
              .placeholder=${this.inputPlaceholder}
              .uploadPicState=${this.uploadPicState}
              .voteOption=${this.voteOption}
              .scrollContainer=${this.scrollContainer}
            ></bili-comment-box>`}
      </div>
    `}render(){return x$3` ${this.notice?this.noticeTemplate():""} ${this.navbarTemplate()} ${this.commentboxTemplate()} `}};U.styles=[i$6`
      #notice {
        margin-bottom: 10px;
        width: calc(100% + 40px);
        transform: translateX(-20px);
      }
      #vote {
        margin-bottom: 24px;
      }
    `,i$6`
      #navbar {
        display: flex;
        align-items: center;
        height: 28px;
        margin-bottom: 12px;
      }
      #navbar-div {
        margin-bottom: 12px;
      }
      #title {
        display: flex;
        align-items: center;
      }
      #title h2 {
        margin: 0;
        color: var(--text1);
        font-weight: 500;
        font-size: var(--bili-comments-font-size-title, 20px);
      }
      #title #count {
        margin: 0 30px 0 6px;
        font-size: var(--bili-comments-font-size-count, 13px);
        font-weight: 400;
        color: var(--text3);
      }

      #sort-title {
        font-weight: 500;
        color: var(--text1);
      }

      #sort-actions .sort-div {
        display: inline-block;
        height: 11px;
        margin: 0 3px;
        border-left: solid 1px var(--text3);
        vertical-align: -2px;
      }

      #sort-actions bili-text-button {
        --_container-height: 28px;
        --_leading-space: 6px;
        --_trailing-space: 6px;
        --_label-text-size: var(--bili-comments-font-size-sort, 13px);
        --_label-text-color: var(--text3);
      }

      #sort-actions.hot bili-text-button:first-child {
        --_label-text-color: var(--text1);
      }
      #sort-actions.time bili-text-button:last-child {
        --_label-text-color: var(--text1);
      }
    `,i$6`
      #commentbox {
        flex-shrink: 0;
        transition: height 0.2s;
        height: var(--bili-comments-commentbox-height, auto);
      }
    `,i$6`
      #more {
        margin-left: auto;
        width: 24px;
        height: 24px;
        position: relative;
      }
      #more button {
        width: 24px;
        height: 24px;
        text-align: center;
        padding: 0;
        outline: none;
        border: none;
        background: transparent;
        font-size: 13px;
        color: var(--text3);
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        justify-content: end;
      }
    `];H([n$4()],U.prototype,"oid",2);H([n$4()],U.prototype,"type",2);H([n$4()],U.prototype,"rootType",2);H([n$4()],U.prototype,"rootReply",2);H([n$4()],U.prototype,"user",2);H([n$4()],U.prototype,"isClosed",2);H([n$4()],U.prototype,"isSelected",2);H([n$4()],U.prototype,"options",2);H([n$4()],U.prototype,"notice",2);H([n$4()],U.prototype,"vote",2);H([n$4({type:Number})],U.prototype,"count",2);H([n$4({type:String})],U.prototype,"mode",2);H([n$4({type:String})],U.prototype,"inputPlaceholder",2);H([n$4({type:Object})],U.prototype,"commentBoxDisabledState",2);H([n$4({type:Boolean})],U.prototype,"commentBoxTeleportDisabled",2);H([n$4({type:Number})],U.prototype,"uploadPicState",2);H([t$1()],U.prototype,"voteOption",1);H([n$4()],U.prototype,"scrollContainer",2);H([t$1()],U.prototype,"showMoreMenu",2);H([t$1()],U.prototype,"sortClass",1);H([i$3("#commentbox")],U.prototype,"commentboxEl",2);H([i$3("bili-comment-menu")],U.prototype,"menu",2);U=H([e$5("bili-comments-header-renderer")],U);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,Tn=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?gc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&fc(Le,wt,kt),kt};let gi=class extends s$4{constructor(){super(...arguments),this.i18r=null,this.isIntersecting=!1,this.isReported=!1}connectedCallback(){super.connectedCallback(),window.IntersectionObserver&&(this.i18r=new IntersectionObserver(me=>{const Le=me[0];Le&&Le.target===this&&(this.isIntersecting=Le.isIntersecting,!this.isReported&&Le.isIntersecting&&this.cmReport())}),this.i18r.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.clearI18r(),this.isReported=!1}clearI18r(){this.isIntersecting=!1,this.i18r&&(this.i18r.disconnect(),this.i18r=null)}cmReport(){var me;if(!((me=window.BiliCm)!=null&&me.Base))return;this.isReported=!0;const{isEmpty:Le,data:wt,locId:$t}=this.data;if(window.BiliCm.Base.sendShowData(wt,$t),Le){this.clearI18r();return}setTimeout(()=>{var kt;(kt=window.BiliCm)!=null&&kt.Base&&(this.isIntersecting&&window.BiliCm.Base.sendStrictShowData(wt,$t),this.clearI18r())},1e3)}handleJump(){const me=rc(this.data.data,this.data.locId);me&&window.open(me,"_blank"),this.dispatchEvent(new CustomEvent("jump",{detail:{type:"link",link:me}}))}handleClose(me){me.stopPropagation(),this.dispatchEvent(new CustomEvent("close"))}render(){return x$3`
      <div
        id="bar"
        style=${o$3({display:this.data.isEmpty?"none":"flex"})}
        @click=${this.handleJump}
      >
        <div id="bg"></div>
        <div id="icon">
          <bili-icon icon="BDC/speaker_notice_fill/1" size="14"></bili-icon>
        </div>
        <div id="title">${this.data.title}</div>
        <div id="close" @click=${this.handleClose}>
          <bili-icon icon="BDC/xmark_close_line/1" size="16"></bili-icon>
        </div>
      </div>
    `}};gi.styles=i$6`
    :host {
      display: block;
    }
    #bar {
      display: flex;
      align-items: center;
      position: relative;
      height: 40px;
      padding: 0 10px;
      font-size: 12px;
      color: var(--Ye5_u);
      cursor: pointer;
    }
    #bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background-color: var(--Or0);
      pointer-events: none;
    }
    #title {
      position: relative;
      z-index: 1;
      margin-right: auto;
      flex: 1;
      padding: 0 5px;
      vertical-align: top;
      word-wrap: break-word;
      word-break: break-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #icon {
      position: relative;
      z-index: 1;
      width: 14px;
      height: 14px;
    }
    #close {
      position: relative;
      z-index: 1;
      display: flex;
    }
  `;Tn([n$4()],gi.prototype,"data",2);gi=Tn([e$5("bili-comments-notice")],gi);var bc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,Ze=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?vc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&bc(Le,wt,kt),kt};let he=class extends s$4{constructor(){super(...arguments),this.mask=!1,this.maskClosable=!0,this.titleText="",this.width="600px"}handleClose(){this.maskClosable&&this.hide()}hide(){this.parentElement&&this.parentElement.removeChild(this)}connectedCallback(){super.connectedCallback(),this.initData()}initData(){const me=this.getAttribute("title"),Le=this.getAttribute("width");me&&(this.titleText=me||"\u8BE6\u60C5"),Le&&(this.width=Le)}render(){return x$3`
      ${this.mask?x$3`<div id="mask" @click=${this.handleClose}></div>`:x$3``}
      <div
        id="wrap"
        style="${o$3({width:this.width})}"
      >
        <div id="header">
          <div id="title">${this.titleText}</div>
          <div id="close" @click=${this.hide}><bili-icon icon="BDC/xmark_close_line/1" size="22"></bili-icon></div>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
    `}};he.styles=i$6`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    #wrap {
      position: relative;
      width: 100%;
      border-radius: 6px;
      box-shadow: 0 0 25px #00000026;
      background-color: var(--bg1);
      overflow: hidden;
      max-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    #header {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      flex-shrink: 0;
      padding: 0 10px;
      border-bottom: 0.5px solid var(--line_light);
      position: relative;
      color: var(--text1);
    }
    #close {
      cursor: pointer;
      position: absolute;
      right: 10px;
      color: var(--text2);
    }
    #content {
      height: calc(100% - 50px);
      overflow-y: auto;
    }
    ::slotted(iframe) {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;Ze([n$4({type:Boolean})],he.prototype,"mask",2);Ze([n$4({type:Boolean})],he.prototype,"maskClosable",2);Ze([n$4()],he.prototype,"titleText",2);Ze([t$1()],he.prototype,"width",2);he=Ze([e$5("bili-comments-popup")],he);var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,xc=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?wc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&yc(Le,wt,kt),kt};let nr=class extends s$4{render(){return x$3`
      <div id="spinner">
        <span>正在加载…</span>
      </div>
    `}};nr.styles=i$6`
    #spinner {
      margin-top: 20px;
      padding: 20px 0 40px;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: var(--text3);
    }
  `;nr=xc([e$5("bili-comments-spinner")],nr);var _c=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,pe=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Cc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&_c(Le,wt,kt),kt};let Yt=class extends s$4{constructor(){super(...arguments),this.oid="",this.type=0,this.user=null}get isDuel(){return this.data.options.length===2}get optionIdx(){return this.data.my_vote_option||0}handleClick(){Yo(this.data.vote_id)}async handleOptionClick(me){if(!this.user){St({event:"selfDef.voteCardClick"});return}if(this.optionIdx>0)return;const Le=me.idx;try{await Ts({option:Le,vote_id:this.data.vote_id,oid:this.oid,type:this.type}),this.data.my_vote_option=Le,this.data.count?this.data.count+=1:this.data.count=1,this.data.options[Le-1].count?this.data.options[Le-1].count+=1:this.data.options[Le-1].count=1,this.requestUpdate()}catch(wt){console.error(wt)}}duelOptionTemplate(me){const Le=this.optionIdx,wt=Le!==0,$t=`${Le?Math.round((me.count||0)/this.data.count*100):50}%`;return x$3`<div
      class="${o$1({option:!0,[me.idx===1?"left":"right"]:!0})}"
      style="${wt?o$3({"--option-opacity":".8","--option-width":$t,"--option-color":"var(--text_white)","--option-font-size":"12px","--option-cursor":"default"}):""}"
      @click=${()=>this.handleOptionClick(me)}
    >
      <div class="option-info">
        <div class="option-desc">${me.desc}</div>
        ${wt?x$3`<div class="option-ratio">${$t}</div>`:""}
      </div>
      <div class="option-skew">
        <div class="option-skew-fill"></div>
      </div>
      ${me.idx===Le?x$3`<bili-icon icon="BDC/checkmark_circle_fill/1" size="20"></bili-icon>`:""}
    </div>`}duelTemplate(){return x$3`<div id="duel">${this.data.options.map(me=>this.duelOptionTemplate(me))}</div>`}render(){return x$3`
      <div id="card">
        <div id="info">
          <div id="title">
            <bili-icon icon="BDC/vote_line/2" size="16"></bili-icon>
            <span>${this.data.title}</span>
          </div>
          ${this.isDuel?x$3`<div id="desc">
                <div id="count">${this.data.count||0}人参与</div>
              </div>`:x$3`<div id="desc">
                <div id="count">${this.data.count||0}人参与</div>
                <div id="split">|</div>
                ${this.optionIdx>0?x$3`<div id="status">已投票 ·&nbsp;</div>
                      <bili-text-button .trailingIcon=${!0} id="action" @click=${this.handleClick}>
                        查看投票结果 <bili-icon slot="icon" icon="BDC/arrow_forward_right_line/3" size="12"></bili-icon
                      ></bili-text-button> `:x$3`<bili-text-button id="action" @click=${this.handleClick}>去投票</bili-text-button>`}
              </div>`}
        </div>
        ${this.isDuel?this.duelTemplate():""}
      </div>
    `}};Yt.styles=i$6`
    :host {
      --option-opacity: 0.15;
      --option-width: 50%;
      --option-radius: 6px;
      --option-font-size: 13px;
      --option-color: var(--Pi10_u);
      --option-cursor: pointer;
    }
    #card {
      width: 100%;
      height: 80px;
      display: flex;
      border-radius: 6px;
      background-color: var(--graph_bg_thin);
      padding: 12px 16px 12px 10px;
      box-sizing: border-box;
      align-items: center;
    }

    #info {
      flex: 1;
      color: var(--option-color);
    }

    #duel {
      flex-shrink: 0;
      width: 60%;
      margin-left: 30px;
      height: 40px;
      display: flex;
    }

    #info #title {
      color: var(--text1);
      font-size: 13px;
      display: flex;
      align-items: center;
    }
    #info #title span {
      margin-left: 2px;
    }
    #info #desc {
      margin-top: 4px;
      color: var(--text3);
      display: flex;
      font-size: 12px;
      align-items: center;
    }
    #info #desc #split {
      color: var(--line_regular);
      margin: 0px 6px;
    }

    #duel .option {
      position: relative;
      display: flex;
      min-width: 120px;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: var(--option-width);
      color: var(--option-color);
      font-size: var(--option-font-size);
      cursor: var(--option-cursor);
    }
    #duel .option.left {
      margin-right: 30px;
      padding-left: 10px;
      border-radius: var(--option-radius) 0 0 var(--option-radius);
      background-color: rgba(255, 102, 153, var(--option-opacity));
    }
    #duel .option.right {
      flex-direction: row-reverse;
      text-align: right;
      padding-right: 10px;
      border-radius: 0 var(--option-radius) var(--option-radius) 0;
      background-color: rgba(0, 174, 236, var(--option-opacity));
    }
    #duel .option-skew {
      position: absolute;
      top: 0;
      height: 100%;
      width: 20px;
      overflow: hidden;
      opacity: var(--option-opacity);
      pointer-events: none;
    }
    #duel .option-skew-fill {
      pointer-events: all;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }
    #duel .option.left .option-skew {
      right: -20px;
    }
    #duel .option.right .option-skew {
      left: -20px;
    }
    #duel .option.left .option-skew-fill {
      left: -8px;
      background-color: #f69;
      transform: skew(21deg);
      border-top-right-radius: calc(var(--option-radius) - 2px);
      border-bottom-right-radius: var(--option-radius);
    }
    #duel .option.right .option-skew-fill {
      left: 8px;
      background-color: #00aeec;
      transform: skew(21deg);
      border-top-left-radius: var(--option-radius);
      border-bottom-left-radius: calc(var(--option-radius) - 2px);
    }
  `;pe([n$4({type:Object})],Yt.prototype,"data",2);pe([n$4()],Yt.prototype,"oid",2);pe([n$4()],Yt.prototype,"type",2);pe([n$4()],Yt.prototype,"user",2);pe([t$1()],Yt.prototype,"isDuel",1);pe([t$1()],Yt.prototype,"optionIdx",1);Yt=pe([e$5("bili-comments-vote-card")],Yt);var kc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,De=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?$c(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&kc(Le,wt,kt),kt};let ie=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.value="",this.placeholder="\u8BF7\u8F93\u5165\u4F60\u60F3\u8BC4\u8BBA\u7684\u5185\u5BB9",this.rows=1,this.isFocus=!1,this.selection={start:0,end:0}}getSelection(){return{...this.selection}}connectedCallback(){super.connectedCallback()}handleFocus(me){me.stopPropagation(),this.isFocus=me.type==="focus",this.dispatchEvent(new CustomEvent(me.type))}handleSelectionChange(me){const Le=me.selectionStart,wt=me.selectionEnd;Le===this.selection.start&&wt===this.selection.end||(this.selection.start=me.selectionStart,this.selection.end=me.selectionEnd,this.dispatchEvent(new CustomEvent("selection-change",{detail:{...this.selection}})))}handleClick(me){me.stopPropagation(),this.handleSelectionChange(me.target)}handleInput(me){const Le=me.target;me.stopPropagation(),this.value=Le.value,this.dispatchInputEvent()}handleKeydown(me){me.stopPropagation()}handleKeyup(me){me.stopPropagation();const Le=me.target;this.handleSelectionChange(Le)}dispatchInputEvent(){this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}focus(){this.input.focus()}blur(){this.input.blur()}insertText(me,Le){const wt=this.input;Le||(Le={start:wt.selectionStart,end:wt.selectionEnd});const{start:$t,end:kt}=Le,It=this.value;this.value=It.slice(0,$t)+me+It.slice(kt),this.dispatchInputEvent(),setTimeout(()=>{wt.selectionStart=wt.selectionEnd=$t+me.length,this.handleSelectionChange(wt),this.focus()})}render(){return x$3`
      <textarea
        id="input"
        .value=${this.value}
        .placeholder=${this.placeholder}
        class="${o$1({active:!!this.value,focus:this.isFocus})}"
        @focus=${this.handleFocus}
        @blur=${this.handleFocus}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
        @keyup=${this.handleKeyup}
        @input=${this.handleInput}
      ></textarea>
    `}};ie.styles=i$6`
    :host {
      --bili-comment-textarea-bg: var(--bg2);
      --bili-comment-textarea-color: var(--text1);
      --bili-comment-textarea-placeholder-color: var(--text3);
      --bili-comment-textarea-padding: 12px;
      --bili-comment-textarea-font-size: 14px;
    }
    :host {
      display: flex;
    }
    #input {
      height: 32px;
      min-height: 32px;
      max-height: 60px;
      line-height: 20px;
      width: 100%;
      font-size: var(--bili-comment-textarea-font-size);
      font-family: inherit;
      box-sizing: border-box;
      color: var(--bili-comment-textarea-color);
      background-color: var(--bili-comment-textarea-bg);
      padding: 5px 0;
      border: none;
      resize: none;
      outline: none;
      transition: 0.2s;
    }
    #input.focus {
      height: 60px;
      min-height: 60px;
    }
    #input.active {
      height: 60px;
      min-height: 60px;
    }
    #input::placeholder {
      color: var(--bili-comment-textarea-placeholder-color);
    }
  `;De([i$3("#input")],ie.prototype,"input",2);De([n$4({type:String})],ie.prototype,"value",2);De([n$4({type:String})],ie.prototype,"placeholder",2);De([t$1()],ie.prototype,"rows",2);De([t$1()],ie.prototype,"isFocus",2);ie=De([e$5("bili-comment-textarea")],ie);var Ec=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,dt=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Tc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Ec(Le,wt,kt),kt};let Q=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.oid="",this.root="",this.type=0,this.rootType="list",this.cmFromTrackId="",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.idx=-1,this.mode=3,this.assist=!1,this.visible=!0,this.upMid=0,this.showCheckText=!1,this.user=null,this.commonTrackData=null,this.trackObserver=null}handleReply(me){var Le;y.emit("reply",{target:me,root:{type:this.rootType,params:{type:this.type,oid:this.oid}},defaultInput:((Le=me.reply_control)==null?void 0:Le.preset_reply_text)||"",mount:wt=>{wt.parentElement!==this.replyContainer&&this.replyContainer.appendChild(wt)}})}handleReport(me){this.dispatchEvent(new CustomEvent("report",{detail:me}))}handleBlock(me){this.dispatchEvent(new CustomEvent("block",{detail:me}))}handleViewDetail(me){this.dispatchEvent(new CustomEvent("view-detail",{detail:me}))}async handleViewDialog(me){this.dispatchEvent(new CustomEvent("view-dialog",{detail:me}))}getClickTrackData(me){const Le=this.getCommonTrackData(!1);return Object.assign(Le,me,{ext_json:JSON.stringify({likes:this.data.like,rank:this.idx,rp_mid:this.data.member.mid,rpid:this.data.rpid_str})}),Le}getCommonTrackData(me=!0){var Vi,zi;var Le,wt,$t,kt,It;if(me&&this.commonTrackData)return this.commonTrackData;let Rt="-";(Le=this.data.reply_control)!=null&&Le.is_note_v2&&(this.data.reply_control.is_note?Rt="note":Rt="opus_"+this.data.dynamic_id_str);let Pt="";if(typeof this.data.track_info=="string")try{const Xn=JSON.parse(this.data.track_info);Xn!=null&&Xn.track_id&&(Pt=Xn.track_id)}catch{}const Ft=[];let Ut=0;this.commentRenderer?this.commentRenderer.getRichTextContent().forEach(Xn=>{var Qn,eo,no;if(Xn.tag==="a"&&Xn.a)if(Xn.a.href){const to=((Qn=Xn.dataset)==null?void 0:Qn.type)||"";if(!["search","mention"].includes(to)){const oo=((eo=Xn.dataset)==null?void 0:eo["raw-url"])||nl(Xn.a.href);Ft.push(oo)}}else((no=Xn.dataset)==null?void 0:no.type)==="seek"&&(Ut+=1)}):console.warn("commentRenderer is not ready");const{members:Xt}=(Vi=this.data.content)!=null?Vi:{},Jt=((wt=this.data.replies)==null?void 0:wt.map(Xn=>Xn.rpid_str))||[],ii=[];this.data.card_label&&this.data.card_label.forEach(Xn=>{ii.push(Xn.text_content)});const Ni={oid:this.oid,type:this.type,page:this.rootType,rpid:this.data.rpid_str,root_rpid:this.getRootRpid(),tag_name:"",ordering:this.mode===3?"heat":"time",from_spmid:this.spmInfo.from_spmid,spmid:this.spmInfo.spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,reply_list:Jt.join(","),rank:this.idx,card_type:Rt,url:Ft.join(","),ext_json:JSON.stringify({is_contain_at:(Xt==null?void 0:Xt.length)||0,is_contain_vote:0,is_contain_topic:0,is_contain_url:Ft.length,is_contain_time:Ut}),reply_track_id:Pt,cm_from_track_id:this.cmFromTrackId,exposure_metadata:"",shown_tags:ii.join(","),has_image:($t=this.data.content.pictures)!=null&&$t.length?1:0,fold_pictures:((kt=this.data.reply_control)==null?void 0:kt.fold_pictures)||"",picture_count:(zi=(It=this.data.content.pictures)==null?void 0:It.length)!=null?zi:0,pic_scale:1,has_fans_medal:0,has_god_label:0,has_oldfans_label:0,has_decoration:0,has_guard:0};return this.commonTrackData=Ni,Ni}getRootRpid(){switch(this.rootType){case"list":return this.data.rpid_str;case"detail":return Number(this.data.root_str)===0?this.data.rpid_str:this.data.root_str;case"dialog":return this.data.root_str;default:return this.data.rpid_str}}handleClickTrack(me){te({type:"click",spm_info:"main.comment.reply-card.all"},{msg:JSON.stringify(this.getClickTrackData(me.detail))})}repliesTemplate(){const{replies:me,rcount:Le}=this.data;return me!=null&&me.length&&!Le?"":x$3`<div id="replies">
      <bili-comment-replies-renderer
        .data=${this.data}
        .oid=${this.oid}
        .type=${this.type}
        .user=${this.user}
        .upMid=${this.upMid}
        .assist=${this.assist}
        .contentFeatures=${this.contentFeatures}
        @reply=${wt=>this.handleReply(wt.detail)}
        @block=${wt=>this.handleBlock(wt.detail)}
        @report=${wt=>this.handleReport(wt.detail)}
        @view-detail=${wt=>this.handleViewDetail(wt.detail)}
        @track=${this.handleClickTrack}
        @jump-space=${wt=>this.dispatchEvent(new CustomEvent("jump-space",{detail:wt.detail}))}
      ></bili-comment-replies-renderer>
    </div>`}connectedCallback(){super.connectedCallback(),this.disposables.setTimeout(()=>{this.trackObserver=new Ke({el:this,type:"show",value:{event:"main.comment.reply-card.all",data:this.getCommonTrackData(!0)},modifiers:{raw:!0},durational:!0,handler:(me,Le,wt)=>{me==="show"&&te({type:"show",spm_info:Le},{msg:JSON.stringify(wt)})}})}),this.disposables.setTimeout(()=>{if(F()){const me=Si("window/visibleChange",({data:Le})=>{var wt;(wt=this.trackObserver)==null||wt.reportShowDuration(Le)});this.disposables.add(()=>{me()})}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)}updated(me){super.updated(me),me.get("visible")&&(this.visible===!1?this.style.setProperty("display","none"):this.style.removeProperty("display"))}render(){return x$3`
      <bili-comment-renderer
        id="comment"
        .data=${this.data}
        .user=${this.user}
        .root=${this.root}
        .rootType=${this.rootType}
        .upMid=${this.upMid}
        .oid=${this.oid}
        .type=${this.type}
        .contentFeatures=${this.contentFeatures}
        .showCheckText=${this.showCheckText}
        .idx=${this.idx}
        .assist=${this.assist}
        style=${o$3({"--bili-comment-border-bottom":"none"})}
        @delete=${()=>this.dispatchEvent(new CustomEvent("delete"))}
        @block=${()=>{this.handleBlock({mid:this.data.member.mid})}}
        @report=${me=>{var Le;return this.handleReport({member:{mid:this.data.member.mid,uname:this.data.member.uname},oid:this.oid,type:this.type,rpid:this.data.rpid_str,hiddenJuryTips:((Le=me.detail)==null?void 0:Le.hiddenJuryTips)||!1})}}
        @top=${me=>this.dispatchEvent(new CustomEvent("top",{detail:me.detail}))}
        @expand=${me=>this.dispatchEvent(new CustomEvent("expand",{detail:me.detail}))}
        @view-dialog=${me=>this.handleViewDialog(me.detail)}
        @track=${this.handleClickTrack}
        @preview-image=${me=>this.dispatchEvent(new CustomEvent("preview-image",{detail:me.detail}))}
        @jump-space=${me=>this.dispatchEvent(new CustomEvent("jump-space",{detail:me.detail}))}
      ></bili-comment-renderer>
      ${this.rootType==="list"?this.repliesTemplate():""} ${this.idx!==-1?x$3`<div id="div"></div>`:""}
    `}};Q.styles=i$6`
    :host {
      display: block;
    }
    #div {
      padding-bottom: 14px;
      border-bottom: 1px solid var(--graph_bg_thick);
    }
  `;dt([n$4({type:Object})],Q.prototype,"data",2);dt([n$4()],Q.prototype,"oid",2);dt([n$4()],Q.prototype,"root",2);dt([n$4()],Q.prototype,"type",2);dt([n$4()],Q.prototype,"rootType",2);dt([n$4()],Q.prototype,"cmFromTrackId",2);dt([n$4()],Q.prototype,"spmInfo",2);dt([n$4()],Q.prototype,"idx",2);dt([n$4()],Q.prototype,"mode",2);dt([n$4()],Q.prototype,"assist",2);dt([n$4({type:Boolean})],Q.prototype,"visible",2);dt([n$4()],Q.prototype,"upMid",2);dt([n$4()],Q.prototype,"showCheckText",2);dt([n$4()],Q.prototype,"user",2);dt([n$4()],Q.prototype,"contentFeatures",2);dt([i$3("#comment")],Q.prototype,"commentRenderer",2);dt([i$3("#reply-container")],Q.prototype,"replyContainer",2);Q=dt([e$5("bili-comment-thread-renderer")],Q);const ve=me=>{typeof me=="number"&&(me=me.toString(16)),me.length===6&&(me=`ff${me}`);const Le=parseInt(me.slice(2,4),16),wt=parseInt(me.slice(4,6),16),$t=parseInt(me.slice(6,8),16),kt=parseInt(me.slice(0,2),16);return`rgba(${Le},${wt},${$t},${kt/255})`};var sr=(me=>(me[me.NONE=0]="NONE",me[me.CONTRACTOR=1]="CONTRACTOR",me[me.FANS=2]="FANS",me))(sr||{});function Sc(me){const{is_contractor:Le,contract_desc:wt,fans_detail:$t}=me.member,kt={type:0};return Le?(kt.type=1,kt.contractor={name:{text:wt,style:{color:"var(--brand_pink, #FF6699)"}}},wt==="\u539F\u59CB\u7C89\u4E1D"?kt.contractor.style={backgroundColor:"transparent",borderColor:"var(--brand_pink, #FF6699)"}:kt.contractor.style={backgroundColor:"var(--brand_pink_thin, #FFECF1)",borderColor:"transparent"},kt):$t!=null&&$t.medal_name?(kt.type=2,kt.fans={style:{},name:{text:$t.medal_name,style:{color:$t.medal_color_name?ve($t.medal_color_name):""}},level:{text:String($t.level),style:{color:$t.medal_color_level?ve($t.medal_color_level):"",backgroundColor:$t.medal_level_bg_color?ve($t.medal_level_bg_color):""}}},$t.medal_color&&$t.medal_color_end&&(kt.fans.style.backgroundImage=`linear-gradient(90deg, ${ve($t.medal_color)}, ${ve($t.medal_color_end)})`),$t.medal_color_border&&(kt.fans.style.borderColor=ve($t.medal_color_border)),$t.first_icon&&(kt.fans.icon={first:$t.first_icon},$t.second_icon&&(kt.fans.icon.second=$t.second_icon)),kt):null}var Ic=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,Et=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Pc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Ic(Le,wt,kt),kt};let bt=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.upMid=0,this.medalVisible=!1,this.levelVisible=!0,this.showVipColor=!0}get uid(){return this.data.member.mid}get isUp(){return this.uid===String(this.upMid)}get userName(){return this.data.member.uname}get userNameRenderStyle(){var me,Le;if(!((me=this.data.member)!=null&&me.name_render))return null;const wt=zs((Le=this.data.member)==null?void 0:Le.name_render,{variable:"--name-render-bg"});return wt?wt.variable:null}get userNameStyle(){var me,Le;if(!this.showVipColor||!this.data.member)return null;if(this.userNameRenderStyle)return this.userNameRenderStyle;const wt=(Le=(me=this.data.member)==null?void 0:me.vip)==null?void 0:Le.nickname_color;return wt?{color:wt}:null}get spaceLink(){return Ct.SPACE(this.uid)}get levelImgSrc(){const{is_senior_member:me,level_info:{current_level:Le}}=this.data.member;return`//i0.hdslb.com/bfs/seed/jinkela/short/webui/user-profile/img/level_${me?"h":Le}.svg`}get userMedal(){return!this.medalVisible||this.isUp?null:Sc(this.data)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose()}handleClickTrack(me){this.dispatchEvent(new CustomEvent("track",{detail:{position:me}}))}handleNameClick(me){this.dispatchEvent(new CustomEvent("jump-space",{detail:{uid:this.uid}})),me.stopPropagation()}handleLevelClick(){window.open("https://www.bilibili.com/blackboard/help.html#/?qid=59e2cffdaa69465486497bb35a5ac295")}render(){return x$3`<div id="info">
      <slot></slot>
      <div id="user-name" data-user-profile-id="${this.uid}" @click=${this.handleNameClick}>
        <a
          href="${this.spaceLink}"
          class="${this.userNameRenderStyle?"name-render-style":""}"
          style="${this.userNameStyle?o$3(this.userNameStyle):""}"
          target="_blank"
          >${this.userName}</a
        >
      </div>
      ${this.levelVisible?x$3`<div id="user-level" @click=${this.handleLevelClick}>
            <img width="30" height="30" src="${this.levelImgSrc}" />
          </div>`:""}
      ${this.isUp?x$3`<div id="user-up">
            <img width="24" height="24" src="//i0.hdslb.com/bfs/seed/jinkela/short/webui/comments/img/icons/up_pb.svg" />
          </div>`:""}
    </div>`}};bt.styles=i$6`
    :host {
      --bili-comment-user-info-name-color: var(--text2);
      --bili-comment-user-info-height: 22px;
    }
    #info {
      display: inline-flex;
      align-items: center;
      height: var(--bili-comment-user-info-height);
    }
    #user-name {
      color: var(--bili-comment-user-info-name-color);
      font-size: var(--bili-comments-font-size-name, 13px);
      font-weight: 500;
    }
    #user-name a.name-render-style {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .name-render-style {
      background-image: var(--name-render-bg-light);
    }
    :host([dark]) .name-render-style {
      background-image: var(--name-render-bg-dark);
    }
    #user-level {
      margin-left: 5px;
      width: 30px;
      height: 30px;
    }
    #user-up {
      width: 24px;
      height: 24px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `;Et([n$4()],bt.prototype,"data",2);Et([n$4()],bt.prototype,"upMid",2);Et([n$4({type:Boolean})],bt.prototype,"medalVisible",2);Et([n$4({type:Boolean})],bt.prototype,"levelVisible",2);Et([n$4({type:Boolean})],bt.prototype,"showVipColor",2);Et([t$1()],bt.prototype,"uid",1);Et([t$1()],bt.prototype,"isUp",1);Et([t$1()],bt.prototype,"userName",1);Et([t$1()],bt.prototype,"userNameRenderStyle",1);Et([t$1()],bt.prototype,"userNameStyle",1);Et([t$1()],bt.prototype,"spaceLink",1);Et([t$1()],bt.prototype,"levelImgSrc",1);Et([t$1()],bt.prototype,"userMedal",1);bt=Et([e$5("bili-comment-user-info")],bt);var Oc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Sn=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?Dc(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&Oc(Le,wt,kt),kt};let bi=class extends s$4{connectedCallback(){super.connectedCallback(),this.init()}init(){setTimeout(()=>{const me=this.shadowRoot.querySelector("#name #name-text"),Le=this.shadowRoot.querySelector("#name"),wt=me.getBoundingClientRect().width;wt&&(Le.style.width=`${wt}px`)})}render(){if(this.data.type===sr.CONTRACTOR){const{style:me,name:Le}=this.data.contractor;return x$3`<div id="contractor" style=${me?o$3({...me}):""}>
        <div id="name" style=${Le.style?o$3({...Le.style}):""}><div id="name-text">${Le.text}</div></div>
      </div>`}if(this.data.type===sr.FANS){const{style:me,name:Le,level:wt,icon:$t}=this.data.fans;return x$3`<div
        id="fans"
        style=${me?o$3({...me}):""}
      >
        ${$t?x$3`<div
              id="icon"
              style=${o$3({width:`${$t!=null&&$t.second?20:13}px`})}
            >
              ${$t.first?x$3`<img
                    id="first-icon"
                    src=${utils$2.getBmgSrcNext($t.first,{w:20,h:20,dpr:2})}
                  />`:""}
              ${$t.second?x$3`<img
                    id="second-icon"
                    src=${utils$2.getBmgSrcNext($t.second,{w:20,h:20,dpr:2})}
                  />`:""}
            </div>`:""}
        <div id="name" style=${Le.style?o$3({...Le.style}):""}><div id="name-text">${Le.text}</div></div>
        <div id="level" style=${wt.style?o$3({...wt.style}):""}><div id="level-text">${wt.text}</div></div>
      </div>`}return x$3`<div id="none"></div>`}};bi.styles=i$6`
    #contractor {
      height: 12px;
      padding: 0 2px;
      border-radius: 2px;
      border-width: 0.5px;
      border-style: solid;
      box-sizing: border-box;
    }
    #contractor #name {
      height: 11px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #contractor #name #name-text {
      position: absolute;
      top: 50%;
      left: 50%;
      white-space: nowrap;
      transform: scale(0.5) translate(-50%, -50%);
      transform-origin: 0 0;
      font-size: 16px;
    }
    #fans {
      display: flex;
      align-items: center;
      height: 14px;
      padding-left: 5px;
      border-width: 0.5px;
      border-style: solid;
      border-radius: 10px;
      margin-left: 5px;
    }
    #fans #icon {
      display: flex;
      align-items: center;
      position: relative;
    }
    #fans #icon #first-icon {
      position: absolute;
      left: -8px;
      width: 20px;
      height: 20px;
    }
    #fans #icon #second-icon {
      position: absolute;
      right: 0;
      width: 8px;
      height: 11px;
    }
    #fans #name {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;
      margin-right: 4px;
    }
    #fans #name #name-text {
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 500;
      white-space: nowrap;
      transform: scale(0.5) translate(-50%, -50%);
      transform-origin: 0 0;
      font-size: 18px;
    }
    #fans #level {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 11.5px;
      height: 11.5px;
      border-radius: 50%;
      margin-right: 0.5px;
    }
    #fans #level #level-text {
      position: absolute;
      top: 52%;
      left: 50%;
      font-family: medalnum;
      font-weight: 500;
      white-space: nowrap;
      line-height: 1;
      transform: scale(0.5) translate(-50%, -43%);
      transform-origin: 0 0;
    }
  `;Sn([n$4()],bi.prototype,"data",2);bi=Sn([e$5("bili-comment-user-medal")],bi);var Lc=Object.defineProperty,Ac=Object.defineProperties,Rc=Object.getOwnPropertyDescriptors,Do=Object.getOwnPropertySymbols,Mc=Object.prototype.hasOwnProperty,Bc=Object.prototype.propertyIsEnumerable,Lo=(me,Le,wt)=>Le in me?Lc(me,Le,{enumerable:!0,configurable:!0,writable:!0,value:wt}):me[Le]=wt,Ee=(me,Le)=>{for(var wt in Le||(Le={}))Mc.call(Le,wt)&&Lo(me,wt,Le[wt]);if(Do)for(var wt of Do(Le))Bc.call(Le,wt)&&Lo(me,wt,Le[wt]);return me},Ue=(me,Le)=>Ac(me,Rc(Le)),jc=(me,Le,wt)=>new Promise(($t,kt)=>{var It=Ft=>{try{Pt(wt.next(Ft))}catch(Ut){kt(Ut)}},Rt=Ft=>{try{Pt(wt.throw(Ft))}catch(Ut){kt(Ut)}},Pt=Ft=>Ft.done?$t(Ft.value):Promise.resolve(Ft.value).then(It,Rt);Pt((wt=wt.apply(me,Le)).next())});class Nc{constructor(){this.target=null,this.events={}}addEventListener(Le,wt){if(typeof window>"u"){console.warn("EventBridge is not supported in server side");return}this.events[Le]?this.events[Le].push(wt):this.events[Le]=[wt],this.target&&this.target.addEventListener(Le,wt)}removeEventListener(Le,wt){if(typeof window>"u"){console.warn("EventBridge is not supported in server side");return}if(this.target&&this.target.removeEventListener(Le,wt),!this.events[Le].length)return;const $t=this.events[Le];this.events[Le]=$t.filter(kt=>kt!==wt)}connect(Le){this.target||!Le||(this.target=Le,Object.keys(this.events).forEach(wt=>{this.events[wt].forEach($t=>{this.addEventListener(wt,$t)})}))}disconnect(){if(this.target){const Le=this.target;Object.keys(this.events).forEach(wt=>{this.events[wt].forEach($t=>{Le.removeEventListener(wt,$t)})})}this.events={},this.target=null}}const Vc=()=>{};class zc{constructor(Le){this.el={current:null},this.parent=null,this.props={},this.methods={},this.emits=[],this.dispose=null,this.eventBridge=new Nc,Le&&(this.props=Le)}get engine(){return{core:"custom"}}addEventListener(Le,wt){if(this.emits.length&&this.emits.indexOf(Le)===-1){console.warn(`Event ${String(Le)} is not defined in emits`);return}this.eventBridge.addEventListener(Le,wt)}removeEventListener(Le,wt){this.eventBridge.removeEventListener(Le,wt)}dispatchAction(Le){var wt;const{type:$t,args:kt,callback:It}=Le,Rt=(wt=this.methods)==null?void 0:wt[$t];if(typeof Rt!="function")return console.warn(`Action ${String($t)} is undefined or not a function`),Vc();const Pt=Rt(...kt||[]);return It==null||It(Pt),Pt}update(Le){const wt=!!this.el.current,$t=this.parent;return wt&&this.unmount(),this.props=Le,wt&&(this.parent=$t,this.render()),this}mount(Le,wt){return this.el.current?(console.warn("Component is already mounted"),this):this.parent?Le===this.parent?this:(console.warn("Component maybe in mounting, please wait mounted, and then use update or unmount first"),this):(this.parent=Le,wt?this.renderAsync():this.render(),this)}unmount(){var Le;if((Le=this.dispose)==null||Le.call(this),this.eventBridge.disconnect(),this.props={},this.methods={},this.el.current){const wt=this.parent||this.el.current.parentElement;wt!==this.el.current&&wt!=null&&wt.contains(this.el.current)&&(wt.removeChild(this.el.current),this.parent=null),this.el.current=null}}}const Fc=me=>{const{name:Le,engine:wt,emits:$t,render:kt,renderAsync:It,renderToString:Rt}=me;return class extends zc{constructor(Pt){super(Pt),this.name=Le,this.emits=$t||[]}get engine(){return wt||super.engine}render(){try{if(!this.parent)return;this.dispose=kt({ref:Pt=>{this.el.current=Pt,Pt?this.eventBridge.connect(Pt):this.eventBridge.disconnect()},props:this.props,parent:this.parent,expose:Pt=>{this.methods=Pt}})}catch(Pt){console.error(Pt)}}renderAsync(){return jc(this,null,function*(){try{if(!this.parent)return!1;if(It){let Pt,Ft=!1;const Ut=new Promise(Xt=>{Pt=()=>{Ft||(Ft=!0,Xt(!0))}});return this.dispose=yield It({parent:this.parent,ref:Xt=>{this.el.current=Xt,Xt?(Pt(),this.eventBridge.connect(Xt)):this.eventBridge.disconnect()},props:this.props,expose:Xt=>{this.methods=Xt}}),yield Ut}return this.render(),!!this.el.current}catch(Pt){return console.error(Pt),!1}})}renderToString(){try{return typeof Rt!="function"?"":Rt(this.props)}catch(Pt){return console.error(Pt),""}}}},Uc=(me,Le)=>me===Le,ar=Symbol("solid-proxy"),vi={equals:Uc};let In=Ln;const ae=1,yi=2,Pn={owned:null,cleanups:null,context:null,owner:null};var vt=null;let Gi=null,J=null,gt=null,Gt=null,Ri=0;function Qe(me,Le){const wt=J,$t=vt,kt=me.length===0,It=Le===void 0?$t:Le,Rt=kt?Pn:{owned:null,cleanups:null,context:It?It.context:null,owner:It},Pt=kt?me:()=>me(()=>Te(()=>Mi(Rt)));vt=Rt,J=null;try{return ti(Pt,!0)}finally{J=wt,vt=$t}}function qc(me,Le){Le=Le?Object.assign({},vi,Le):vi;const wt={value:me,observers:null,observerSlots:null,comparator:Le.equals||void 0},$t=kt=>(typeof kt=="function"&&(kt=kt(wt.value)),Dn(wt,kt));return[On.bind(wt),$t]}function st(me,Le,wt){const $t=Jr(me,Le,!1,ae);Xe($t)}function Hc(me,Le,wt){In=Yc;const $t=Jr(me,Le,!1,ae);$t.user=!0,Gt?Gt.push($t):Xe($t)}function qe(me,Le,wt){wt=wt?Object.assign({},vi,wt):vi;const $t=Jr(me,Le,!0,0);return $t.observers=null,$t.observerSlots=null,$t.comparator=wt.equals||void 0,Xe($t),On.bind($t)}function Te(me){if(J===null)return me();const Le=J;J=null;try{return me()}finally{J=Le}}function Wc(me){Hc(()=>Te(me))}function On(){if(this.sources&&this.state)if(this.state===ae)Xe(this);else{const me=gt;gt=null,ti(()=>xi(this),!1),gt=me}if(J){const me=this.observers?this.observers.length:0;J.sources?(J.sources.push(this),J.sourceSlots.push(me)):(J.sources=[this],J.sourceSlots=[me]),this.observers?(this.observers.push(J),this.observerSlots.push(J.sources.length-1)):(this.observers=[J],this.observerSlots=[J.sources.length-1])}return this.value}function Dn(me,Le,wt){let $t=me.value;return(!me.comparator||!me.comparator($t,Le))&&(me.value=Le,me.observers&&me.observers.length&&ti(()=>{for(let kt=0;kt<me.observers.length;kt+=1){const It=me.observers[kt],Rt=Gi&&Gi.running;Rt&&Gi.disposed.has(It),(Rt?!It.tState:!It.state)&&(It.pure?gt.push(It):Gt.push(It),It.observers&&An(It)),Rt||(It.state=ae)}if(gt.length>1e6)throw gt=[],new Error},!1)),Le}function Xe(me){if(!me.fn)return;Mi(me);const Le=Ri;Gc(me,me.value,Le)}function Gc(me,Le,wt){let $t;const kt=vt,It=J;J=vt=me;try{$t=me.fn(Le)}catch(Rt){return me.pure&&(me.state=ae,me.owned&&me.owned.forEach(Mi),me.owned=null),me.updatedAt=wt+1,Rn(Rt)}finally{J=It,vt=kt}(!me.updatedAt||me.updatedAt<=wt)&&(me.updatedAt!=null&&"observers"in me?Dn(me,$t):me.value=$t,me.updatedAt=wt)}function Jr(me,Le,wt,$t=ae,kt){const It={fn:me,state:$t,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:Le,owner:vt,context:vt?vt.context:null,pure:wt};return vt===null||vt!==Pn&&(vt.owned?vt.owned.push(It):vt.owned=[It]),It}function wi(me){if(me.state===0)return;if(me.state===yi)return xi(me);if(me.suspense&&Te(me.suspense.inFallback))return me.suspense.effects.push(me);const Le=[me];for(;(me=me.owner)&&(!me.updatedAt||me.updatedAt<Ri);)me.state&&Le.push(me);for(let wt=Le.length-1;wt>=0;wt--)if(me=Le[wt],me.state===ae)Xe(me);else if(me.state===yi){const $t=gt;gt=null,ti(()=>xi(me,Le[0]),!1),gt=$t}}function ti(me,Le){if(gt)return me();let wt=!1;Le||(gt=[]),Gt?wt=!0:Gt=[],Ri++;try{const $t=me();return Jc(wt),$t}catch($t){wt||(Gt=null),gt=null,Rn($t)}}function Jc(me){if(gt&&(Ln(gt),gt=null),me)return;const Le=Gt;Gt=null,Le.length&&ti(()=>In(Le),!1)}function Ln(me){for(let Le=0;Le<me.length;Le++)wi(me[Le])}function Yc(me){let Le,wt=0;for(Le=0;Le<me.length;Le++){const $t=me[Le];$t.user?me[wt++]=$t:wi($t)}for(Le=0;Le<wt;Le++)wi(me[Le])}function xi(me,Le){me.state=0;for(let wt=0;wt<me.sources.length;wt+=1){const $t=me.sources[wt];if($t.sources){const kt=$t.state;kt===ae?$t!==Le&&(!$t.updatedAt||$t.updatedAt<Ri)&&wi($t):kt===yi&&xi($t,Le)}}}function An(me){for(let Le=0;Le<me.observers.length;Le+=1){const wt=me.observers[Le];wt.state||(wt.state=yi,wt.pure?gt.push(wt):Gt.push(wt),wt.observers&&An(wt))}}function Mi(me){let Le;if(me.sources)for(;me.sources.length;){const wt=me.sources.pop(),$t=me.sourceSlots.pop(),kt=wt.observers;if(kt&&kt.length){const It=kt.pop(),Rt=wt.observerSlots.pop();$t<kt.length&&(It.sourceSlots[Rt]=$t,kt[$t]=It,wt.observerSlots[$t]=Rt)}}if(me.owned){for(Le=me.owned.length-1;Le>=0;Le--)Mi(me.owned[Le]);me.owned=null}if(me.cleanups){for(Le=me.cleanups.length-1;Le>=0;Le--)me.cleanups[Le]();me.cleanups=null}me.state=0}function Kc(me){return me instanceof Error?me:new Error(typeof me=="string"?me:"Unknown error",{cause:me})}function Rn(me,Le=vt){throw Kc(me)}function I(me,Le){return Te(()=>me(Le||{}))}function si(){return!0}const Zc={get(me,Le,wt){return Le===ar?wt:me.get(Le)},has(me,Le){return Le===ar?!0:me.has(Le)},set:si,deleteProperty:si,getOwnPropertyDescriptor(me,Le){return{configurable:!0,enumerable:!0,get(){return me.get(Le)},set:si,deleteProperty:si}},ownKeys(me){return me.keys()}};function Ji(me){return(me=typeof me=="function"?me():me)?me:{}}function Qc(){for(let me=0,Le=this.length;me<Le;++me){const wt=this[me]();if(wt!==void 0)return wt}}function ei(...me){let Le=!1;for(let Rt=0;Rt<me.length;Rt++){const Pt=me[Rt];Le=Le||!!Pt&&ar in Pt,me[Rt]=typeof Pt=="function"?(Le=!0,qe(Pt)):Pt}if(Le)return new Proxy({get(Rt){for(let Pt=me.length-1;Pt>=0;Pt--){const Ft=Ji(me[Pt])[Rt];if(Ft!==void 0)return Ft}},has(Rt){for(let Pt=me.length-1;Pt>=0;Pt--)if(Rt in Ji(me[Pt]))return!0;return!1},keys(){const Rt=[];for(let Pt=0;Pt<me.length;Pt++)Rt.push(...Object.keys(Ji(me[Pt])));return[...new Set(Rt)]}},Zc);const wt={},$t=Object.create(null);for(let Rt=me.length-1;Rt>=0;Rt--){const Pt=me[Rt];if(!Pt)continue;const Ft=Object.getOwnPropertyNames(Pt);for(let Ut=Ft.length-1;Ut>=0;Ut--){const Xt=Ft[Ut];if(Xt==="__proto__"||Xt==="constructor")continue;const Jt=Object.getOwnPropertyDescriptor(Pt,Xt);if(!$t[Xt])$t[Xt]=Jt.get?{enumerable:!0,configurable:!0,get:Qc.bind(wt[Xt]=[Jt.get.bind(Pt)])}:Jt.value!==void 0?Jt:void 0;else{const ii=wt[Xt];ii&&(Jt.get?ii.push(Jt.get.bind(Pt)):Jt.value!==void 0&&ii.push(()=>Jt.value))}}}const kt={},It=Object.keys($t);for(let Rt=It.length-1;Rt>=0;Rt--){const Pt=It[Rt],Ft=$t[Pt];Ft&&Ft.get?Object.defineProperty(kt,Pt,Ft):kt[Pt]=Ft?Ft.value:void 0}return kt}const Xc=me=>`Stale read from <${me}>.`;function et(me){const Le=me.keyed,wt=qe(()=>me.when,void 0,{equals:($t,kt)=>Le?$t===kt:!$t==!kt});return qe(()=>{const $t=wt();if($t){const kt=me.children;return typeof kt=="function"&&kt.length>0?Te(()=>kt(Le?$t:()=>{if(!Te(wt))throw Xc("Show");return me.when})):kt}return me.fallback},void 0,void 0)}function td(me,Le,wt){let $t=wt.length,kt=Le.length,It=$t,Rt=0,Pt=0,Ft=Le[kt-1].nextSibling,Ut=null;for(;Rt<kt||Pt<It;){if(Le[Rt]===wt[Pt]){Rt++,Pt++;continue}for(;Le[kt-1]===wt[It-1];)kt--,It--;if(kt===Rt){const Xt=It<$t?Pt?wt[Pt-1].nextSibling:wt[It-Pt]:Ft;for(;Pt<It;)me.insertBefore(wt[Pt++],Xt)}else if(It===Pt)for(;Rt<kt;)(!Ut||!Ut.has(Le[Rt]))&&Le[Rt].remove(),Rt++;else if(Le[Rt]===wt[It-1]&&wt[Pt]===Le[kt-1]){const Xt=Le[--kt].nextSibling;me.insertBefore(wt[Pt++],Le[Rt++].nextSibling),me.insertBefore(wt[--It],Xt),Le[kt]=wt[It]}else{if(!Ut){Ut=new Map;let Jt=Pt;for(;Jt<It;)Ut.set(wt[Jt],Jt++)}const Xt=Ut.get(Le[Rt]);if(Xt!=null)if(Pt<Xt&&Xt<It){let Jt=Rt,ii=1,Ni;for(;++Jt<kt&&Jt<It&&!((Ni=Ut.get(Le[Jt]))==null||Ni!==Xt+ii);)ii++;if(ii>Xt-Pt){const Vi=Le[Rt];for(;Pt<Xt;)me.insertBefore(wt[Pt++],Vi)}else me.replaceChild(wt[Pt++],Le[Rt++])}else Rt++;else Le[Rt++].remove()}}}function Bi(me,Le,wt,$t={}){let kt;return Qe(It=>{kt=It,Le===document?me():W(Le,me(),Le.firstChild?null:void 0,wt)},$t.owner),()=>{kt(),Le.textContent=""}}function Kt(me,Le,wt){let $t;const kt=()=>{const Rt=document.createElement("template");return Rt.innerHTML=me,Rt.content.firstChild},It=()=>($t||($t=kt())).cloneNode(!0);return It.cloneNode=It,It}function lr(me,Le,wt){wt==null?me.removeAttribute(Le):me.setAttribute(Le,wt)}function ft(me,Le){Le==null?me.removeAttribute("class"):me.className=Le}function Se(me,Le,wt){if(!Le)return wt?lr(me,"style"):Le;const $t=me.style;if(typeof Le=="string")return $t.cssText=Le;typeof wt=="string"&&($t.cssText=wt=void 0),wt||(wt={}),Le||(Le={});let kt,It;for(It in wt)Le[It]==null&&$t.removeProperty(It),delete wt[It];for(It in Le)kt=Le[It],kt!==wt[It]&&($t.setProperty(It,kt),wt[It]=kt);return wt}function W(me,Le,wt,$t){if(wt!==void 0&&!$t&&($t=[]),typeof Le!="function")return _i(me,Le,$t,wt);st(kt=>_i(me,Le(),kt,wt),$t)}function _i(me,Le,wt,$t,kt){for(;typeof wt=="function";)wt=wt();if(Le===wt)return wt;const It=typeof Le,Rt=$t!==void 0;if(me=Rt&&wt[0]&&wt[0].parentNode||me,It==="string"||It==="number")if(It==="number"&&(Le=Le.toString()),Rt){let Pt=wt[0];Pt&&Pt.nodeType===3?Pt.data!==Le&&(Pt.data=Le):Pt=document.createTextNode(Le),wt=ye(me,wt,$t,Pt)}else wt!==""&&typeof wt=="string"?wt=me.firstChild.data=Le:wt=me.textContent=Le;else if(Le==null||It==="boolean")wt=ye(me,wt,$t);else{if(It==="function")return st(()=>{let Pt=Le();for(;typeof Pt=="function";)Pt=Pt();wt=_i(me,Pt,wt,$t)}),()=>wt;if(Array.isArray(Le)){const Pt=[],Ft=wt&&Array.isArray(wt);if(cr(Pt,Le,wt,kt))return st(()=>wt=_i(me,Pt,wt,$t,!0)),()=>wt;if(Pt.length===0){if(wt=ye(me,wt,$t),Rt)return wt}else Ft?wt.length===0?Ao(me,Pt,$t):td(me,wt,Pt):(wt&&ye(me),Ao(me,Pt));wt=Pt}else if(Le.nodeType){if(Array.isArray(wt)){if(Rt)return wt=ye(me,wt,$t,Le);ye(me,wt,null,Le)}else wt==null||wt===""||!me.firstChild?me.appendChild(Le):me.replaceChild(Le,me.firstChild);wt=Le}}return wt}function cr(me,Le,wt,$t){let kt=!1;for(let It=0,Rt=Le.length;It<Rt;It++){let Pt=Le[It],Ft=wt&&wt[me.length],Ut;if(!(Pt==null||Pt===!0||Pt===!1))if((Ut=typeof Pt)=="object"&&Pt.nodeType)me.push(Pt);else if(Array.isArray(Pt))kt=cr(me,Pt,Ft)||kt;else if(Ut==="function")if($t){for(;typeof Pt=="function";)Pt=Pt();kt=cr(me,Array.isArray(Pt)?Pt:[Pt],Array.isArray(Ft)?Ft:[Ft])||kt}else me.push(Pt),kt=!0;else{const Xt=String(Pt);Ft&&Ft.nodeType===3&&Ft.data===Xt?me.push(Ft):me.push(document.createTextNode(Xt))}}return kt}function Ao(me,Le,wt=null){for(let $t=0,kt=Le.length;$t<kt;$t++)me.insertBefore(Le[$t],wt)}function ye(me,Le,wt,$t){if(wt===void 0)return me.textContent="";const kt=$t||document.createTextNode("");if(Le.length){let It=!1;for(let Rt=Le.length-1;Rt>=0;Rt--){const Pt=Le[Rt];if(kt!==Pt){const Ft=Pt.parentNode===me;!It&&!Rt?Ft?me.replaceChild(kt,Pt):me.insertBefore(kt,wt):Ft&&Pt.remove()}else It=!0}}else me.insertBefore(kt,wt);return[kt]}const ed="//s1.hdslb.com/bfs/seed/water-ui/engine/solid-core.umd.js",id$1=me=>new Promise((Le,wt)=>{const $t=()=>window.Solid&&window.SolidWeb?(Le(window.Solid),!0):!1;if(typeof window>"u")return wt(new Error("not in browser"));if($t())return;const kt=document.createElement("script");kt.onload=()=>{$t()||wt(new Error("load solid fail"))},kt.onerror=It=>{wt(It)},kt.src=me}),rd=me=>{if(me instanceof HTMLElement)for(;me.firstChild;)me.removeChild(me.firstChild)},ji=me=>{const{component:Le,engine:wt,renderToString:$t}=me,kt=({ref:Rt,props:Pt,parent:Ft,expose:Ut})=>{var Xt,Jt,ii,Ni,Vi,zi;const Xn=(wt==null?void 0:wt.core.createRoot)||((Xt=window.Solid)==null?void 0:Xt.createRoot)||((ii=(Jt=window.SolidCore)==null?void 0:Jt.Solid)==null?void 0:ii.createRoot),Qn=(wt==null?void 0:wt.core.render)||((Ni=window.SolidWeb)==null?void 0:Ni.render)||((zi=(Vi=window.SolidCore)==null?void 0:Vi.SolidWeb)==null?void 0:zi.render);if(!Xn)throw new Error("Solid engine API`createRoot` is not found");if(!Qn)throw new Error("Solid engine API`render` is not found");return Xn(eo=>{const no=document.createElement("div");Qn(()=>Le(Ue(Ee({},Pt),{waterExpose:Ut})),no);const to=no.firstChild;return rd(Ft),Ft.appendChild(to),Rt(to),eo})},It=(wt==null?void 0:wt.src)||ed;return Fc({name:me.name,engine:{core:"solid",version:(wt==null?void 0:wt.version)||"",src:It},render:kt,renderAsync:Rt=>new Promise((Pt,Ft)=>{id$1(It).then(()=>{Pt(kt(Rt))}).catch(Ft)}),renderToString:$t})},od="_star_14qf7_99",nd="_fans_14qf7_13",sd="_specialDynamicMedalPc_14qf7_30",ad="_specialDynamicMedal_14qf7_30",ld="_text_14qf7_40",cd="_background_14qf7_53",dd="_medalImg_14qf7_66",hd="_medalImgAnimation_14qf7_71",pd="_jiggle_14qf7_1",ud="_textMask_14qf7_88",md="_light_14qf7_1",Bt={star:od,fans:nd,specialDynamicMedalPc:sd,specialDynamicMedal:ad,text:ld,background:cd,medalImg:dd,medalImgAnimation:hd,jiggle:pd,textMask:ud,light:md},fd="_backgroundImg_aob6i_1",gd="_bfsImg_aob6i_6",Ro={backgroundImg:fd,bfsImg:gd};function bd(me){return typeof me=="string"||me instanceof String}function rt(me){return!isNaN(parseFloat(me))&&isFinite(me)}function dr(){return typeof window<"u"}function vd(me){return Array.from(new Set(me.map(function(Le){return JSON.stringify(Le)}))).map(function(Le){return JSON.parse(Le)})}var yd={webp:dr(),fuzzyMatch:!0,whiteList:[],webpFallback:dr()?"png":"",dpr:1,ratio:1},hr={isSupported:!1};function wd(){if(!dr()){ce(!0);return}try{var me=document.createElement("canvas");if(me.getContext&&me.getContext("2d"))try{me.toDataURL("image/webp").indexOf("data:image/webp")===0?ce(!0):xd()}catch{ce(!1)}else ce(!1)}catch{ce(!1)}}function xd(){var me=new Image;me.onload=function(){ce(me.height===2)},me.onerror=function(){ce(me.height===2)},me.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function ce(me){hr.isSupported=me}wd();var Mo=function(){function me(Le){this.debounceTime=1e3,this.timer=null,this.debounceTime=Le}return me.prototype.set=function(Le){this.clear(),this.timer=setTimeout(Le,this.debounceTime)},me.prototype.clear=function(){this.timer&&clearTimeout(this.timer)},me}(),_d=function(){function me(Le){Le===void 0&&(Le=1e3),this.MIN_TO_COLLAPSE=2,this.warnings=[],this.errors=[],this.warningDebouncer=new Mo(Le),this.errorDebouncer=new Mo(Le)}return me.prototype.pushWarning=function(Le){var wt=this;console.groupCollapsed?(this.warnings.push(Le),this.warningDebouncer.set(function(){return wt.printWarnings()})):console.warn("[BFS Warning]:",Le)},me.prototype.printWarnings=function(){var Le=this.warnings.length>=this.MIN_TO_COLLAPSE;for(Le&&console.groupCollapsed("[BFS Warning]: \u6709 "+this.warnings.length+" \u4E2A\u8B66\u544A\uFF0C\u70B9\u51FB\u67E5\u770B.");this.warnings.length>0;){var wt=this.warnings.shift();console.warn("[BFS Warning]:",wt)}Le&&console.groupEnd()},me.prototype.pushError=function(Le){var wt=this;console.groupCollapsed?(this.errors.push(Le),this.errorDebouncer.set(function(){return wt.printError()})):console.error("[BFS Error]:",Le)},me.prototype.printError=function(){var Le=this.errors.length>=this.MIN_TO_COLLAPSE;for(Le&&console.groupCollapsed("[BFS Error]: \u6709 "+this.errors.length+" \u4E2A\u9519\u8BEF\uFF0C\u70B9\u51FB\u67E5\u770B.");this.errors.length>0;){var wt=this.errors.shift();console.error("[BFS Error]:",wt)}Le&&console.groupEnd()},me}(),Mn=new _d(1e3);function Be(me,Le){Le===void 0&&(Le=!1),Le&&Mn.pushWarning(me)}function Ci(me,Le){Le===void 0&&(Le=!1),Le&&Mn.pushError(me)}var Bo=function(){function me(Le){Le===void 0&&(Le=[]),this.whiteList=[],this.whiteListQuickMap={byWidth:[],byHeight:[]},Le.length&&this.set(Le)}return me.prototype.set=function(Le){this.clear(),Le.length>0&&(this.whiteList=Le,this.setQuickMap())},me.prototype.get=function(){return this.whiteList},me.prototype.clear=function(){this.whiteList=[],this.initQuickMap()},me.prototype.initQuickMap=function(){this.whiteListQuickMap={byWidth:[],byHeight:[]}},me.prototype.setQuickMap=function(){var Le=this;this.convertWhiteList().forEach(function(wt){if(rt(wt.width)&&wt.width>0&&rt(wt.height)&&wt.height>0){var $t=wt.width/wt.height;Le.whiteListQuickMap[$t]||(Le.whiteListQuickMap[$t]=[]),Le.whiteListQuickMap[$t].push(wt)}else rt(wt.width)&&wt.width>0?(Le.whiteListQuickMap.byWidth||(Le.whiteListQuickMap.byWidth=[]),Le.whiteListQuickMap.byWidth.push({width:wt.width,height:"auto"})):rt(wt.height)&&wt.height>0&&(Le.whiteListQuickMap.byHeight||(Le.whiteListQuickMap.byHeight=[]),Le.whiteListQuickMap.byHeight.push({width:"auto",height:wt.height}))}),this.sortQuickMap()},me.prototype.convertWhiteList=function(){var Le=this.whiteList.map(function(wt){var $t=wt&&wt.split?wt.split("|"):[],kt=$t[0]&&rt($t[0].trim())&&parseInt($t[0].trim())>0?parseInt($t[0].trim()):"auto",It=$t[1]&&rt($t[1].trim())&&parseInt($t[1].trim())>0?parseInt($t[1].trim()):"auto";return{width:kt,height:It}});return vd(Le)},me.prototype.sortQuickMap=function(){var Le=this;Object.keys(this.whiteListQuickMap).forEach(function(wt){var $t=Le.whiteListQuickMap[wt],kt=$t.sort(function(It,Rt){if(rt(It.width)&&rt(Rt.width))return It.width-Rt.width;if(rt(It.height)&&rt(Rt.height))return It.height-Rt.height});Le.whiteListQuickMap[wt]=kt})},me.prototype.getMatchedSize=function(Le,wt){var $t=null;if(this.whiteList.length===0)return Le;var kt={width:"auto",height:"auto"};rt(Le.width)&&Le.width>0&&rt(Le.height)&&Le.height>0?$t=Le.width/Le.height:rt(Le.width)&&Le.width>0?$t="byWidth":rt(Le.height)&&Le.height>0&&($t="byHeight");var It=$t?this.whiteListQuickMap[$t]:[];if(It&&It.length>0){var Rt=wt?this.fuzzyMatch(It,Le):this.exactMatch(It,Le);Rt.length>0?(kt=Rt[0],(Le.width!==kt.width||Le.height!==kt.height)&&Be(Le.width+" x "+Le.height+" \u5728\u767D\u540D\u5355\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5411\u4E0A\u5339\u914D\u5F97\u5230 "+kt.width+" x "+kt.height)):Be("\u627E\u4E0D\u5230\u4E0E "+Le.width+" x "+Le.height+" \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.")}else Be("\u627E\u4E0D\u5230\u4E0E "+Le.width+" x "+Le.height+" \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.");return kt},me.prototype.fuzzyMatch=function(Le,wt){return Le.filter(function($t){return rt($t.width)?$t.width>=wt.width:$t.height>=wt.height})},me.prototype.exactMatch=function(Le,wt){return Le.filter(function($t){return rt($t.width)?$t.width===wt.width:$t.height===wt.height})},me}();function Bn(me){return me==="auto"&&typeof window<"u"&&window.devicePixelRatio?Number(window.devicePixelRatio)||1:Number(me)>0?Number(me):1}function pr(me){if(me&&me.split)return me.split(".").pop().toLowerCase()}function Cd(me){if(!me||!bd(me))return Ci("URL \u5E94\u8BE5\u4E3A string \u7C7B\u578B."),!1;var Le=["jpg","jpeg","png","webp","gif"];return Le.indexOf(pr(me))===-1?(Ci(me+" \u4E0D\u662F\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F."),!1):(pr(me)==="webp"&&Be(me+" \u662Fwebp\u683C\u5F0F\u7684\u6587\u4EF6\u3002\u5EFA\u8BAE\u901A\u8FC7\u914D\u7F6E\u53C2\u6570 webp: true \u4F7F\u7528webp\u683C\u5F0F\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u652F\u6301\u7684\u6D4F\u89C8\u5668\u4E0A\u964D\u7EA7."),me.indexOf("/bfs/")===-1?(Be(me+" \u4E0D\u662F bfs \u8DEF\u5F84."),!1):!0)}function kd(me){var Le="";return me&&me.split&&(Le=me.split("?")[1]),Le}function $d(me){var Le=me;if(me&&me.slice&&me.indexOf){var wt=me.indexOf("?");wt>-1&&(Le=me.slice(0,wt))}return Le}function Ed(me,Le){return Le&&Le!==""?me+"?"+Le:me}function ur(me){var Le=me;if(me&&me.slice&&me.indexOf){var wt=me.indexOf("@");wt>-1&&(Le=me.slice(0,wt))}return Le}function mr(me,Le,wt){return me+=me.indexOf("@")===-1?"@":"_",me+=wt+Le,me}function jo(me){return me.indexOf("@")>-1}function Td(me,Le,wt,$t,kt){var It=$t.getMatchedSize({width:Le,height:wt},kt.fuzzyMatch),Rt=It.width,Pt=It.height,Ft=Bn(kt.dpr),Ut=kt.ratio||1;return rt(Rt)&&Rt>0&&(me=mr(me,"w",Math.floor(Rt*Ft*Ut))),rt(Pt)&&Pt>0&&(me=mr(me,"h",Math.floor(Pt*Ft*Ut))),me}function Sd(me,Le){var wt=["e","p","c","rc","a","bl","q","o","s"];return wt.forEach(function($t){Le[$t]!==void 0&&(me=mr(me,$t,Le[$t]))}),me}function Id(me,Le){return me}function Pd(me,Le){var wt=pr(ur(me)),$t=wt;return Le.webp&&(wt!=="gif"||Le.s)&&hr.isSupported&&($t="webp"),!hr.isSupported&&$t==="webp"&&Le.webpFallback&&($t=Le.webpFallback),!jo(me)&&wt!==$t?me+="@."+$t:jo(me)&&(me+="."+$t),me}function Od(me){var Le=Bn(me.dpr),wt=Number(me.ratio)||1,$t=Le*wt;if($t===1)return me;if(me.a)if(!/^\d+-\d+-\d+-\d+$/.test(me.a))Ci(me.a+"\u4E0D\u662F\u6709\u6548\u7684\u9AD8\u7EA7\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");else{var kt=me.a.split("-");me.a=kt.map(function(Rt){return Math.floor(Number(Rt)*$t)}).join("-")}if(me.rc)if(!/^\d+x\d+-[1-9]$/.test(me.rc))Ci(me.rc+"\u4E0D\u662F\u6709\u6548\u7684\u533A\u57DF\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");else{var kt=me.rc.split("-"),It=kt[0].split("x");me.rc=It.map(function(Pt){return Math.floor(Number(Pt)*$t)}).join("x")+("-"+kt[1])}return me}var Dd=function(){function me(Le){Le===void 0&&(Le={}),this.defaultOpts=yd,this.whiteList=new Bo,Object.assign(this.defaultOpts,Le),this.setWhiteList(this.defaultOpts.whiteList)}return me.prototype.getImageLink=function(Le,wt,$t,kt){wt===void 0&&(wt="auto"),$t===void 0&&($t="auto"),kt===void 0&&(kt={});var It=Object.assign({},this.defaultOpts,kt),Rt=kt.whiteList?new Bo(kt.whiteList):this.whiteList,Pt=kd(Le);return Le=$d(Le),Cd(ur(Le))&&(Od(It),Le=ur(Le),Le=Td(Le,wt,$t,Rt,It),Le=Id(Le,It.watermark),Le=Sd(Le,It),Le=Pd(Le,It)),Ed(Le,Pt)},me.prototype.getWhiteList=function(){return this.whiteList.get()},me.prototype.setWhiteList=function(Le){Le===void 0&&(Le=[]),this.whiteList.set(Le)},me.prototype.clearWhiteList=function(){this.whiteList.clear()},me}(),Ld=Kt("<div>"),Ad=Kt("<img>");const Rd=new Dd,He=me=>{const Le=ei({fit:"cover"},me),wt=()=>{if(!Le.src)return"";if(/^data:/.test(Le.src))return Le.src;const kt=Le.src.replace("http://","https://");if(kt.includes("gif")||kt.includes(".svg"))return kt;let It=typeof window>"u"?2:window.devicePixelRatio;return It=It>2?It:2,Rd.getImageLink(kt,Le.width?Math.ceil(Le.width*It):"auto",Le.height?Math.ceil(Le.height*It):"auto",{webp:!0,webpFallback:"png"})},$t=()=>{const kt=It=>typeof me.pxHandle=="function"?me.pxHandle(It):It+"px";return{width:Le.width?kt(Le.width):"auto",height:Le.height?kt(Le.height):"auto"}};return I(et,{get when(){return Le.src},get children(){return[I(et,{get when(){return Le.background},get children(){var kt=Ld();return W(kt,()=>Le.children),st(It=>{var Rt=`${Ro.backgroundImg} ${me.class}`,Pt=Ue(Ee({},$t()),{"background-size":Le.fit,"background-image":`url(${wt()})`});return Rt!==It.e&&ft(kt,It.e=Rt),It.t=Se(kt,Pt,It.t),It},{e:void 0,t:void 0}),kt}}),I(et,{get when(){return!Le.background},get children(){var kt=Ad();return st(It=>{var Rt=wt(),Pt=`${Ro.bfsImg} ${me.class}`,Ft=Ue(Ee({},$t()),{"object-fit":Le.fit}),Ut=Le.alt;return Rt!==It.e&&lr(kt,"src",It.e=Rt),Pt!==It.t&&ft(kt,It.t=Pt),It.a=Se(kt,Ft,It.a),Ut!==It.o&&lr(kt,"alt",It.o=Ut),It},{e:void 0,t:void 0,a:void 0,o:void 0}),kt}})]}})};var de=(me=>(me[me.NORMAL=1]="NORMAL",me[me.FAN=2]="FAN",me[me.SPECIAL_DYNAMIC_MEDAL=3]="SPECIAL_DYNAMIC_MEDAL",me))(de||{}),jn=(me=>(me.PC="pc",me.H5="h5",me))(jn||{});const Md=({colors:me,gradients:Le},{width:wt,height:$t}={width:1,height:1})=>{if(!(me!=null&&me.length)||!(Le!=null&&Le.length))return"";const kt=(Rt,Pt)=>Math.atan2(Pt,Rt)*180/Math.PI+90,It=me.map((Rt,Pt)=>`${Rt} ${Le[Pt]}%`).join(",");return`linear-gradient(${kt(wt,$t)}deg, ${It})`};function No(me,Le=0){return!me||!/^#([0-9a-fA-F]{6})$/.test(me)?"rgba(0,0,0,0)":"rgba("+parseInt("0x"+me.slice(1,3))+","+parseInt("0x"+me.slice(3,5))+","+parseInt("0x"+me.slice(5,7))+","+Le+")"}const Bd=(me,Le)=>{const wt=Ee({},me);return Object.keys(me).forEach($t=>{wt[$t]=Le}),wt},Nn=()=>{const me={medal:[0,1400],text:[750,1750],star:[1750,3e3]},[Le,wt]=qc(Bd(me,!1));Wc(()=>{$t()});const $t=()=>{let kt=null;kt&&clearTimeout(kt),Object.keys(me).forEach(It=>{const[Rt,Pt]=me[It];setTimeout(()=>{wt(Ue(Ee({},Le()),{[It]:!0}))},Rt),setTimeout(()=>{wt(Ue(Ee({},Le()),{[It]:!1}))},Pt)}),kt=setTimeout(()=>{$t()},4e3)};return Le},Vn=me=>(me==null?void 0:me.num_desc)||(me!=null&&me.number?`000000${me==null?void 0:me.number}`.substring(String(me==null?void 0:me.number).length):""),zn=me=>{const Le=me==null?void 0:me.color_format;if(Le){const wt=Md(Le||{});if(wt)return{"background-image":wt,"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","background-clip":"text"}}return{color:me==null?void 0:me.color}},Fn=(me,Le)=>(Le==null?void 0:Le.type)===1?de.SPECIAL_DYNAMIC_MEDAL:me!=null&&me.is_fan?de.FAN:de.NORMAL,Un=me=>me==null?void 0:me.effect_visual;var li=Kt("<span>"),jd=Kt("<div><div>"),Nd=Kt("<div>");let qn;const Vo=me=>{const Le=Nn();return(()=>{var wt=jd(),$t=wt.firstChild;return W(wt,I(He,{get src(){var kt;return(kt=me.effect)==null?void 0:kt.medal_image},width:40,height:40,fit:"contain",get class(){return`${Bt.medalImg} ${Le().medal?Bt.medalImgAnimation:""}`},pxHandle:qn}),null),W(wt,I(et,{get when(){return me.text},get children(){return[(()=>{var kt=li();return W(kt,()=>me.text),st(It=>{var Rt=me.textStyle,Pt=Bt.text;return It.e=Se(kt,Rt,It.e),Pt!==It.t&&ft(kt,It.t=Pt),It},{e:void 0,t:void 0}),kt})(),I(et,{get when(){return Le().text},get children(){var kt=li();return W(kt,()=>me.text),st(()=>ft(kt,`${Bt.text} ${Bt.textMask}`)),kt}}),I(et,{get when(){return Le().star},get children(){var kt=li();return st(()=>ft(kt,Bt.star)),kt}})]}}),null),st(kt=>{var It,Rt,Pt=`${Bt.specialDynamicMedal}`,Ft=Bt.background,Ut=`linear-gradient(270deg, ${No((It=me.effect)==null?void 0:It.color_theme,.3)} 0%, ${No((Rt=me.effect)==null?void 0:Rt.color_theme,0)} 100%)`;return Pt!==kt.e&&ft(wt,kt.e=Pt),Ft!==kt.t&&ft($t,kt.t=Ft),Ut!==kt.a&&((kt.a=Ut)!=null?$t.style.setProperty("background",Ut):$t.style.removeProperty("background")),kt},{e:void 0,t:void 0,a:void 0}),wt})()},Vd=me=>I(et,{get when(){return me.uiType},get children(){return[I(et,{get when(){return me.uiType===de.NORMAL},get children(){return I(He,{get src(){return me.url},width:60,height:34,fit:"contain"})}}),I(et,{get when(){return me.uiType===de.FAN},get children(){return I(He,{get src(){return me.url},width:110,height:33,fit:"contain",background:!0,get class(){return Bt.fans},get children(){return I(et,{get when(){return me.text},get children(){var Le=li();return W(Le,()=>me.text),st(wt=>Se(Le,me.textStyle,wt)),Le}})}})}}),I(et,{get when(){return me.uiType===de.SPECIAL_DYNAMIC_MEDAL},get children(){return qe(()=>me.scene==="pc")()?(()=>{var Le=Nd();return W(Le,I(Vo,me)),st(()=>ft(Le,Bt.specialDynamicMedalPc)),Le})():I(Vo,me)}})]}}),Hn=me=>(qn=me.pxHandle,I(Vd,ei(()=>({uiType:Fn(me.fan,me.image_group),url:me.card_url,text:Vn(me.fan),textStyle:zn(me.fan),effect:Un(me.image_group),scene:me.scene})))),zd=me=>I(Hn,ei(()=>({fan:me.fan,card_url:me.card_url,image_group:me.image_group,scene:jn.PC})));var Re=(me=>(me[me.NORMAL=1]="NORMAL",me[me.FAN=2]="FAN",me[me.SPECIAL_DYNAMIC_MEDAL=3]="SPECIAL_DYNAMIC_MEDAL",me))(Re||{}),Wn=(me=>(me.PC="pc",me.H5="h5",me))(Wn||{});const Fd="_star_1aw9v_61",Ud="_cardBg_1aw9v_13",qd="_fanTextPosition_1aw9v_21",Hd="_fanText_1aw9v_21",Wd="_specialMedal_1aw9v_44",Gd="_medalImgAnimation_1aw9v_57",Jd="_jiggle_1aw9v_1",Yd="_fanTextWrap_1aw9v_67",Kd="_textMask_1aw9v_71",Zd="_light_1aw9v_1",Qd="_specialMedalPc_1aw9v_86",Xd="_medalImg_1aw9v_57",Ot={star:Fd,cardBg:Ud,fanTextPosition:qd,fanText:Hd,specialMedal:Wd,medalImgAnimation:Gd,jiggle:Jd,fanTextWrap:Yd,textMask:Kd,light:Zd,specialMedalPc:Qd,medalImg:Xd};var Gn=Kt("<div><span></span><span>"),th=Kt("<div><div><span></span><span>"),eh=Kt("<span>"),fr=Kt("<div>");let Jn;const zo=me=>{const Le=Nn();return(()=>{var wt=fr();return W(wt,I(He,{get src(){var $t;return($t=me.effect)==null?void 0:$t.medal_image},width:40,height:40,fit:"contain",get class(){return`${Ot.medalImg} ${Le().medal?Ot.medalImgAnimation:""}`},pxHandle:Jn}),null),W(wt,I(et,{get when(){return me.text},get children(){var $t=th(),kt=$t.firstChild,It=kt.firstChild,Rt=It.nextSibling;return W(It,()=>me.textPrefix),W(Rt,()=>me.text),W($t,I(et,{get when(){return Le().text},get children(){var Pt=Gn(),Ft=Pt.firstChild,Ut=Ft.nextSibling;return W(Ft,()=>me.textPrefix),W(Ut,()=>me.text),st(()=>ft(Pt,`${Ot.fanText} ${Ot.textMask}`)),Pt}}),null),st(Pt=>{var Ft=Ot.fanTextWrap,Ut=me.textStyle,Xt=Ot.fanText;return Ft!==Pt.e&&ft($t,Pt.e=Ft),Pt.t=Se(kt,Ut,Pt.t),Xt!==Pt.a&&ft(kt,Pt.a=Xt),Pt},{e:void 0,t:void 0,a:void 0}),$t}}),null),W(wt,I(et,{get when(){return Le().star},get children(){var $t=eh();return st(()=>ft($t,Ot.star)),$t}}),null),st(()=>ft(wt,`${Ot.specialMedal}`)),wt})()},ih=me=>I(et,{get when(){return me.uiType},get children(){return[I(et,{get when(){return me.uiType===Re.NORMAL||me.uiType===Re.FAN},get children(){var Le=fr();return W(Le,I(et,{get when(){return me.url},get children(){return I(He,{get src(){return me.url},height:48})}}),null),W(Le,I(et,{get when(){return me.uiType===Re.FAN&&me.text},get children(){var wt=Gn(),$t=wt.firstChild,kt=$t.nextSibling;return W($t,()=>me.textPrefix),W(kt,()=>me.text),st(It=>{var Rt=me.textStyle,Pt=`${Ot.fanText} ${Ot.fanTextPosition}`;return It.e=Se(wt,Rt,It.e),Pt!==It.t&&ft(wt,It.t=Pt),It},{e:void 0,t:void 0}),wt}}),null),st(()=>ft(Le,Ot.cardBg)),Le}}),I(et,{get when(){return me.uiType===Re.SPECIAL_DYNAMIC_MEDAL},get children(){return qe(()=>me.scene==="pc")()?(()=>{var Le=fr();return W(Le,I(zo,me)),st(()=>ft(Le,Ot.specialMedalPc)),Le})():I(zo,me)}})]}}),Yn=me=>(Jn=me.pxHandle,I(ih,ei(()=>{var Le;return{uiType:Fn(me.fan,me.image_group),url:me.image,text:Vn(me.fan),textStyle:zn(me.fan),effect:Un(me.image_group),textPrefix:((Le=me.fan)==null?void 0:Le.num_prefix)||"NO.",scene:me.scene}}))),rh=me=>{const Le=()=>me.card_bg||{};return I(Yn,ei(()=>({fan:Le().fan,image:Le().image,image_group:Le().image_group,scene:Wn.PC})))};ji({name:"CardForPC",component:zd,engine:{core:{createRoot:Qe,render:Bi}}});const oh=ji({name:"CardBgForPC",component:rh,engine:{core:{createRoot:Qe,render:Bi}}});ji({name:"CardCommon",component:Hn,engine:{core:{createRoot:Qe,render:Bi}}});ji({name:"CardCommon",component:Yn,engine:{core:{createRoot:Qe,render:Bi}}});var nh=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,Kn=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?sh(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&nh(Le,wt,kt),kt};let ki=class extends s$4{constructor(){super(...arguments),this.card=null}clearData(){this.card&&(this.card.unmount(),this.card=null)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.initData(this.data)})}disconnectedCallback(){super.disconnectedCallback(),this.clearData()}updated(me){me.has("data")&&this.initData(this.data)}async initData(me){this.card&&this.clearData(),this.card=new oh(me).mount(this.shadowRoot.querySelector("#card"))}render(){return x$3`<div id="card"></div>`}};ki.styles=i$6`
    #card {
      width: 288px;
      height: 48px;
      position: relative;
      overflow: hidden;
      user-select: none;
    }
    #card div {
      height: 100%;
      max-width: 100%;
    }
    // 注意这里是通过copy产物，所以要锁版本
    @keyframes _jiggle_14qf7_1 {
      0% {
        transform: rotate(0);
      }
      14.3% {
        transform: rotate(11deg);
      }
      28.6% {
        transform: rotate(0);
      }
      35.7% {
        transform: rotate(-8deg);
      }
      46.4% {
        transform: rotate(0);
      }
      46.4% {
        transform: rotate(0);
      }
      53.6% {
        transform: rotate(3deg);
      }
      64.3% {
        transform: rotate(0);
      }
      71.4% {
        transform: rotate(-1deg);
      }
      82.1% {
        transform: rotate(0);
      }
      92.8% {
        transform: rotate(0.5deg);
      }
      to {
        transform: rotate(0);
      }
    }
    @keyframes _star_14qf7_99 {
      0% {
        background-position: 0 0;
      }
      to {
        background-position: -340px 0;
      }
    }
    ._star_14qf7_99 {
      display: inline-block;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240521/6fdde5f06d0b876f68573682fa59da66/a8DG0BREmj.png);
      background-size: 340px 20px;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      animation: _star_14qf7_99 0.85s steps(17);
    }
    @keyframes _light_14qf7_1 {
      0% {
        background-position: -100% 0;
      }
      to {
        background-position: 60px 0;
      }
    }
    ._fans_14qf7_13 {
      position: relative;
      user-select: none;
    }
    ._fans_14qf7_13 > span {
      color: #fff;
      font-family: fans-num, sans-serif !important;
      font-size: 12px;
      position: absolute;
      top: 11px;
      right: 39px;
      transform: scale(0.88);
      transform-origin: right center;
      line-height: 1;
    }
    ._specialDynamicMedalPc_14qf7_30 {
      display: inline-block;
      height: 33px;
      width: 110px;
      overflow: hidden;
    }
    ._specialDynamicMedalPc_14qf7_30 ._specialDynamicMedal_14qf7_30 {
      transform: scale(0.75);
      transform-origin: left top;
    }
    ._specialDynamicMedalPc_14qf7_30 ._specialDynamicMedal_14qf7_30 ._text_14qf7_40 {
      font-size: 14px;
      transform: scale(1);
    }
    ._specialDynamicMedal_14qf7_30 {
      width: 146px;
      height: 44px;
      position: relative;
      user-select: none;
    }
    ._specialDynamicMedal_14qf7_30 ._background_14qf7_53 {
      width: 108px;
      height: 30px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      background-color: gray;
      position: absolute;
      top: 7px;
      right: 0;
      background: linear-gradient(270deg, #f8bb5b4d, #f8bb5b00);
    }
    ._specialDynamicMedal_14qf7_30 ._medalImg_14qf7_66 {
      position: absolute;
      right: 0;
      top: 2px;
    }
    ._specialDynamicMedal_14qf7_30 ._medalImg_14qf7_66._medalImgAnimation_14qf7_71 {
      animation: _jiggle_14qf7_1 1.4s linear;
    }
    ._specialDynamicMedal_14qf7_30 ._text_14qf7_40 {
      color: #fff;
      font-family: fans-num, sans-serif !important;
      font-size: 12px;
      line-height: 44px;
      position: absolute;
      top: 0;
      right: 40px;
      transform: scale(0.67);
      transform-origin: right center;
    }
    ._specialDynamicMedal_14qf7_30 ._textMask_14qf7_88 {
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240522/6fdde5f06d0b876f68573682fa59da66/BalugIvNR2.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: -100% 0;
      animation: _light_14qf7_1 1.1s linear;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    ._specialDynamicMedal_14qf7_30 ._star_14qf7_99 {
      position: absolute;
      top: 5px;
      right: 3px;
    }
    ._backgroundImg_aob6i_1 {
      background-position: center;
      background-repeat: no-repeat;
    }
    ._bfsImg_aob6i_6 {
      display: block;
    }
    @font-face {
      font-family: fans-num;
      src: url(https://activity.hdslb.com/blackboard/static/20240516/6fdde5f06d0b876f68573682fa59da66/v6u7v27Ucs.ttf);
    }
    @keyframes _jiggle_1aw9v_1 {
      0% {
        transform: rotate(0);
      }
      14.3% {
        transform: rotate(11deg);
      }
      28.6% {
        transform: rotate(0);
      }
      35.7% {
        transform: rotate(-8deg);
      }
      46.4% {
        transform: rotate(0);
      }
      46.4% {
        transform: rotate(0);
      }
      53.6% {
        transform: rotate(3deg);
      }
      64.3% {
        transform: rotate(0);
      }
      71.4% {
        transform: rotate(-1deg);
      }
      82.1% {
        transform: rotate(0);
      }
      92.8% {
        transform: rotate(0.5deg);
      }
      to {
        transform: rotate(0);
      }
    }
    @keyframes _star_1aw9v_61 {
      0% {
        background-position: 0 0;
      }
      to {
        background-position: -340px 0;
      }
    }
    ._star_1aw9v_61 {
      display: inline-block;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240521/6fdde5f06d0b876f68573682fa59da66/a8DG0BREmj.png);
      background-size: 340px 20px;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      animation: _star_1aw9v_61 0.85s steps(17);
    }
    @keyframes _light_1aw9v_1 {
      0% {
        background-position: -100% 0;
      }
      to {
        background-position: 42px 0;
      }
    }
    ._cardBg_1aw9v_13 {
      display: inline-block;
      position: relative;
      user-select: none;
      height: 48px;
      max-width: 288px;
      overflow: hidden;
    }
    ._cardBg_1aw9v_13 ._fanTextPosition_1aw9v_21 {
      position: absolute;
      right: 0;
      top: 0;
    }
    ._fanText_1aw9v_21 {
      height: 100%;
      font-size: 13px;
      line-height: 16px;
      transform: scale(0.7);
      transform-origin: center center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    ._fanText_1aw9v_21 > span {
      font-family: fans-num, sans-serif !important;
    }
    ._specialMedal_1aw9v_44 {
      user-select: none;
      display: flex;
      align-items: center;
      position: relative;
      height: 40px;
    }
    ._specialMedal_1aw9v_44 ._fanText_1aw9v_21 {
      font-size: 8px;
      line-height: 10px;
      transform: none;
    }
    ._specialMedal_1aw9v_44 ._medalImgAnimation_1aw9v_57 {
      animation: _jiggle_1aw9v_1 1.4s linear;
    }
    ._specialMedal_1aw9v_44 ._star_1aw9v_61 {
      position: absolute;
      top: 3px;
      left: 17px;
    }
    ._specialMedal_1aw9v_44 ._fanTextWrap_1aw9v_67 {
      position: relative;
    }
    ._specialMedal_1aw9v_44 ._textMask_1aw9v_71 {
      position: absolute;
      left: 0;
      top: 0;
      background-image: url(https://i0.hdslb.com/bfs/activity-plat/static/20240522/6fdde5f06d0b876f68573682fa59da66/BalugIvNR2.png);
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: -100% 0;
      animation: _light_1aw9v_1 1.1s linear;
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    ._specialMedalPc_1aw9v_86 {
      padding: 7px 12px;
      display: inline-block;
      height: 48px;
      max-width: 288px;
      overflow: hidden;
      box-sizing: border-box;
    }
    ._specialMedalPc_1aw9v_86 ._specialMedal_1aw9v_44 {
      height: 33px;
    }
    ._specialMedalPc_1aw9v_86 ._medalImg_1aw9v_57 {
      width: 33px !important;
      height: 33px !important;
    }
    ._specialMedalPc_1aw9v_86 ._star_1aw9v_61 {
      transform: scale(0.8);
      transform-origin: left top;
      left: 14px;
      top: 2px;
    }
    ._specialMedalPc_1aw9v_86 ._fanText_1aw9v_21 {
      font-size: 9px;
      line-height: 11px;
    }
  `;Kn([n$4()],ki.prototype,"data",2);ki=Kn([e$5("bili-comment-user-sailing-card")],ki);var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,Yr=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?lh(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&ah(Le,wt,kt),kt};let We=class extends s$4{get tag(){const me={class:"",text:"\u6295\u7968"};switch(this.data.label_kind){case 1:me.class="red",me.text="\u7EA2\u65B9";break;case 2:me.class="blue",me.text="\u84DD\u65B9";break}return me}render(){return x$3`<div id="option">
      <div id="tag" class="${this.tag.class}">${this.tag.text}</div>
      <div id="desc">${this.data.desc}</div>
    </div>`}};We.styles=i$6`
    :host {
      display: flex;
    }
    #option {
      display: flex;
      align-items: center;
      font-size: 12px;
    }
    #tag {
      box-sizing: border-box;
      line-height: 16px;
      padding: 2px 6px;
      border-radius: 2px;
      margin-right: 4px;
      background-color: var(--graph_bg_regular);
      color: var(--text3);
    }
    #tag.red {
      background-color: var(--Pi1);
      color: var(--Pi5);
    }
    #tag.blue {
      background-color: var(--brand_blue_thin);
      color: var(--brand_blue);
    }
    #desc {
      color: var(--text2);
    }
  `;Yr([n$4()],We.prototype,"data",2);Yr([t$1()],We.prototype,"tag",1);We=Yr([e$5("bili-comment-vote-option")],We);var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Zn=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?dh(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&ch(Le,wt,kt),kt};let $i=class extends s$4{handleClick(){Yo(this.data.id)}render(){return x$3`
      <div id="card">
        <div id="head">
          <bili-icon icon="BDC/vote_line/2" size="40"></bili-icon>
        </div>
        <div id="content">
          <div id="info">
            <div id="title">${this.data.title}</div>
            <div id="desc">${this.data.cnt||0}人参与</div>
          </div>
        </div>
        <div id="action">
          <button @click=${this.handleClick}>投票</button>
        </div>
      </div>
    `}};$i.styles=i$6`
    #card {
      width: 100%;
      height: 80px;
      display: flex;
      border: 0.5px solid var(--graph_bg_thick);
      border-radius: 4px;
      background-color: var(--bg1);
    }

    #head {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: var(--brand_blue_thin);
      color: var(--brand_blue);
    }

    #content {
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
    #info #title {
      font-size: 14px;
      color: var(--text1);
    }
    #info #desc {
      margin-top: 10px;
      font-size: 12px;
      color: var(--text3);
    }

    #action {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 90px;
    }
    #action button {
      width: 54px;
      height: 28px;
      font-size: 13px;
      border-radius: 4px;
      text-align: center;
      line-height: 28px;
      color: var(--text_white);
      background-color: var(--brand_blue);
      cursor: pointer;
      outline: none;
      border: none;
    }
  `;Zn([n$4({type:Object})],$i.prototype,"data",2);$i=Zn([e$5("bili-comment-vote-renderer")],$i);const hh=me=>X.request({url:"/x/v2/reply/detail",params:{...me}}),ph=me=>X.request({url:"/x/v2/reply/dialog/cursor",params:{...me}});var uh=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,A=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?mh(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&uh(Le,wt,kt),kt};let E=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=Io,this.oid="",this.type=0,this.root="",this.rootType="detail",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.mode=3,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showCheckText=!0,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.rootReply=null,this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var me,Le;return`\u56DE\u590D @${(Le=(me=this.replyTarget)==null?void 0:me.member)==null?void 0:Le.uname} : `}get voteOption(){return Ai(this.vote)}isVisibleItem(me){return!this.invisibleID[me]}isChildItem(me){return`${me.type},${me.oid_str||me.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const me=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");me&&(this.replyCommentBox=me)}connectedCallback(){super.connectedCallback(),this.initData();const me=It=>{if(!this.isChildItem(It.value))return;const Rt=Di(q.REPLY,[...this.newItems,...this.list],It);this.updateInvisibleID(Rt.map(Pt=>Pt.rpid_str))},Le=It=>{It.root&&It.root.type!=="detail"||It.root&&(It.root.params.type!==this.type||It.root.params.oid!==this.oid)||this.isChildItem(It.value)&&(this.newItems=Li(q.REPLY,this.newItems,It))},wt=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},$t=({target:It,root:Rt,defaultInput:Pt,mount:Ft})=>{if(It&&!(Rt&&Rt.type!=="detail")&&!(Rt&&(Rt.params.type!==this.type||Rt.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&It===this.replyTarget){wt();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),Pt&&(this.replyInputValue=Pt),this.replyTarget=It,Ft(this.replyCommentBox)}},kt=({src:It,jumpUrl:Rt})=>{let Pt=!1;Wr({src:It,root:this,onClick:()=>{Rt&&(Pt=!0,window.open(Rt))},onEnded:()=>{Rt&&(Pt||window.open(Rt))}})};y.on("remove",me),y.on("add",Le),y.on("reply",$t),y.on("hideReply",wt),y.on("displayAlphaVideo",kt),this.disposables.add(()=>y.off("remove",me)),this.disposables.add(()=>y.off("add",Le)),this.disposables.add(()=>y.off("reply",$t)),this.disposables.add(()=>y.off("displayAlphaVideo",kt)),this.disposables.add(Gr),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new Ke({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(It,Rt,Pt)=>{It==="show"&&te({type:"show",spm_info:Rt},{msg:JSON.stringify(Pt)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(F()){const It=Si("window/visibleChange",({data:Rt})=>{var Pt;(Pt=this.trackObserver)==null||Pt.reportShowDuration(Rt)});this.disposables.add(()=>{It()})}})}disconnectedCallback(){super.disconnectedCallback(),this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(me){me.get("params")&&(this.unload(),this.initData())}initDependencies(){yr()}appendGlobalStyle(){const me="bili-comments-global-style";if(document.querySelector("#"+me))return;const Le=document.createElement("style");Le.id=me,Le.innerHTML=Hr,document.body.appendChild(Le)}initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===Io)return;const[me,Le,wt]=this.params.split(",");if(!Le||Le==="0"||!wt||wt==="0"||!me||me==="0"||isNaN(Number(me)))return;const $t=this.getAttribute("mode")||"3",kt=this.getAttribute("seek-id")||"";let It=0;const Rt=this.getAttribute("max-view-limit");typeof Rt=="string"&&(It=Number(Rt),isNaN(It)&&(It=0));const Pt=this.getAttribute("disable-video-time");typeof Pt=="string"&&Pt!=="false"&&(this.contentFeatures.videoTime=!1);const Ft=this.getAttribute("event-bubbles");let Ut;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const Jt=getComputedStyle(this.parentElement);["auto","scroll"].includes(Jt.overflowY)&&(Ut=this.parentElement)}const Xt=this.getAttribute("cm-from-track-id")||"";this.load({oid:Le,root:wt,type:Number(me),seekRpid:kt,mode:Number($t),maxViewLimit:It,cmFromTrackId:Xt,eventBubbles:Ft!==null,scrollContainer:Ut})}updateList(me){this.list=me}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(me){return this.unload(),await this.load(me)}async load(me){try{if(me){const{oid:Le,root:wt,type:$t,mode:kt,seekRpid:It,disableVideoTime:Rt,maxViewLimit:Pt,scrollContainer:Ft,spmInfo:Ut,cmFromTrackId:Xt}=me;if(this.oid=String(Le),this.root=String(wt),typeof Rt=="string"&&Rt!=="false"&&(this.contentFeatures.videoTime=!1),this.type=$t,kt&&[2,3].includes(kt)&&(this.mode=kt),It&&(this.seekRpid=It),Xt?this.cmFromTrackId=Xt:this.cmFromTrackId="",Pt&&Pt>0&&(this.maxViewLimit=Pt),Ft)if(typeof Ft=="string"){const Jt=document.querySelector(Ft);Jt?this.scrollContainer=Jt:console.warn("scrollContainer not found")}else this.scrollContainer=Ft;Ut&&(this.spmInfo=Ut),this.eventBubbles=me.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Dr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(Le){return console.warn("bili comments load error",Le),Promise.reject(Le)}}async initUser(){try{this.initUserDP=Pi();const{code:me,data:Le}=await jr();if(this.initUserDP.resolve(),this.initUserDP=null,me===0&&Le)return this.user=Le,Le}catch(me){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",me)}return null}async initUpGlobalActions(){try{const{code:me,data:Le}=await Nr({oid:this.oid,type:this.type});if(me!==0||!Le)return;this.globalOptions=wr(Le,F())}catch(me){console.log("bili comments up interaction status error",me)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const me=new IntersectionObserver(async Le=>{if(Le[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});me.observe(this.continueTrigger),this.disposables.add(()=>{me.unobserve(this.continueTrigger),me.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",qr(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:me,scrollHeight:Le,clientHeight:wt}=this.scrollContainer;Math.ceil(me)+wt*2>=Le&&this.getList()}else{const{scrollTop:me,scrollHeight:Le}=document.documentElement,wt=window.innerHeight;Math.ceil(me)+wt*2>=Le&&this.getList()}}))}updateInvisibleID(me){const Le={...this.invisibleID};me.forEach(wt=>{Le[wt]=!0}),this.invisibleID=Le,this.requestUpdate()}handlePreviewImage(me){y.emit("previewImage",me)}handleJumpSpace(me){y.emit("jumpSpace",me)}handleJump(me){y.emit("jump",me)}async handleItemDelete(me,Le){var wt;const $t=[...Le==="feed"?this.list:this.newItems][me];if(((wt=this.cmTopProtection)==null?void 0:wt.rpid)===($t==null?void 0:$t.rpid_str)){Ve({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:It=>{It(),pi({type:this.type,oid:this.oid,rpid:$t.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:It=>{It()}}});return}let kt="\u5220\u9664\u5931\u8D25";try{if(!await ot({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:It}=await je({oid:this.oid,type:this.type,rpid:$t.rpid_str});It===0&&(this.updateInvisibleID([$t.rpid_str]),kt="\u5220\u9664\u6210\u529F")}catch(It){console.log("\u5220\u9664\u5931\u8D25",It)}finally{b.show(kt)}}async handleRootReplyDelete(me){var Le;if(((Le=this.cmTopProtection)==null?void 0:Le.rpid)===(me==null?void 0:me.rpid_str)){Ve({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:$t=>{$t(),pi({type:this.type,oid:this.oid,rpid:me.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:$t=>{$t()}}});return}let wt="\u5220\u9664\u5931\u8D25";try{if(!await ot({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:$t}=await je({oid:this.oid,type:this.type,rpid:me.rpid_str});if($t===0){this.updateInvisibleID([me.rpid_str]),wt="\u5220\u9664\u6210\u529F";const kt={type:Number(me.type),oid:Number(me.oid),oid_str:me.oid,rpid:Number(me.rpid),rpid_str:me.rpid_str};y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"findIndex",predicate:It=>It.rpid_str===me.rpid_str,value:kt})}}catch($t){console.log("\u5220\u9664\u5931\u8D25",$t)}finally{b.show(wt)}}async handleItemTop(me,Le,wt){const $t=[...Le==="feed"?this.list:this.newItems][me];let kt=`${wt?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:It}=await di({oid:this.oid,type:this.type,rpid:$t.rpid_str,action:wt?1:0});It===0?kt+="\u6210\u529F":kt+="\u5931\u8D25"}catch{kt+="\u5931\u8D25"}finally{b.show(kt)}}async handleRootReplyTop(me,Le){let wt=`${Le?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:$t}=await di({oid:this.oid,type:this.type,rpid:me.rpid_str,action:Le?1:0});$t===0?wt+="\u6210\u529F":wt+="\u5931\u8D25"}catch{wt+="\u5931\u8D25"}finally{b.show(wt)}}async handleItemReport(me){const{app_id:Le,platform:wt}=Ce("app/getAppInfo");_r({...me,ordering:this.mode===3?"heat":"time",appId:Le,platform:wt})}async handleItemBlock(me){try{if(!await ot({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:Le,message:wt}=await vr({fid:me.mid,act:5,re_src:15});if(Le!==0){b.show(wt||"\u62C9\u9ED1\u5931\u8D25");return}y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"filter",predicate:$t=>{var kt;return((kt=$t.member)==null?void 0:kt.mid)===me.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}handleViewDialog(me){this.dispatchEvent(new CustomEvent("view-dialog",{detail:me}))}updatePaginationStr(me){this.paginationStr=JSON.stringify({offset:me})}updateReplyItemExtra(me,Le,wt){me.$extra||(me.$extra={}),me.$extra[Le]=wt}async getList(){var me,Le;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const wt=await hh({oid:this.oid,type:this.type,root:this.root,pagination_str:this.paginationStr,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,wt.code!==0||!wt.data){this.isClosed=Fr(wt.code),this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:wt.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:$t,control:kt,upper:It}=wt.data;let Rt=wt.data.root.replies||[];this.rootReply=wt.data.root;const Pt=[];this.showSpinner&&(this.upMid=It.mid,this.count=($t==null?void 0:$t.all_count)||0,kt&&(this.rootInputPlaceholder=kt.root_input_text||"",this.rootInputUploadPicState=kt.upload_picture_icon_state,this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:kt.root_input_text||"",disabled:kt.input_disable})),this.isSelected=Ur(wt.data),this.limitMaskState=zr({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Rt=Rt.slice(0,this.limitMaskState.count))),(me=$t==null?void 0:$t.pagination_reply)!=null&&me.next_offset&&this.updatePaginationStr((Le=$t==null?void 0:$t.pagination_reply)==null?void 0:Le.next_offset);let Ft=!this.seekRpid;if(Rt.forEach(Ut=>{var Xt;this.loadedID[Ut.rpid_str]||Ut.invisible!==!0&&(this.loadedID[Ut.rpid_str]=!0,Ft===!1&&(Ut.rpid_str===this.seekRpid?(this.updateReplyItemExtra(Ut,"spotlight",!0),Ft=!0):(Xt=Ut.replies)!=null&&Xt.length&&Ut.replies.forEach(Jt=>{Ft||Jt.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(Jt,"spotlight",!0),Ft=!0)})),Pt.push(Ut))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){Pt.length&&(Pt.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(Pt.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}$t!=null&&$t.is_end&&(this.showEnd=!0),Pt.length?this.updateList(this.list.concat(Pt)):this.showEnd=!0}catch(wt){console.log("getList error",wt),this.showContinuations=!1}}async handleGlobalAction(me){var Le,wt;if(!((Le=me.detail)!=null&&Le.key)||!((wt=me.detail)!=null&&wt.data))return;const $t=me.detail.key,kt=me.detail.data.active,It=me.detail.text;if($t==="select"){try{if(!await ot({title:It,message:kt?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.SELECT:Tt.UNSELECT});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.OPEN:Tt.CLOSE});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close-danmaku"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await br({aid:this.oid,state:kt?0:1});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}let Ut=(Ft==null?void 0:Ft.action_toast)||Pt;Ut==="0"&&(Ut="\u64CD\u4F5C\u6210\u529F"),b.show(Ut||It+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(me){this.mode=me.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){Vr(),this.notice=null}handleTriggerEvent(me,Le){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${me}`,{detail:Le,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(me,{detail:Le}))}handleLimitClick(){var me;((me=this.limitMaskState)==null?void 0:me.type)==="unlogin"&&St({event:"selfDef.replyCardShowMore"})}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}headerTemplate(){return x$3`
      <div id="header">
        <bili-comments-header-renderer
          .oid=${this.oid}
          .type=${this.type}
          .rootType=${this.rootType}
          .rootReply=${this.rootReply}
          .mode=${this.mode}
          .user=${this.user}
          .upMid=${this.upMid}
          .isClosed=${this.isClosed}
          .isSelected=${this.isSelected}
          .options=${this.globalOptions}
          .notice=${this.notice}
          .vote=${this.vote}
          .count=${this.count}
          .inputPlaceholder=${this.rootInputPlaceholder}
          .commentBoxDisabledState=${this.commentBoxDisabledState}
          .commentBoxTeleportDisabled=${this.maxViewLimit>0}
          .uploadPicState=${this.rootInputUploadPicState}
          .scrollContainer=${this.scrollContainer}
          @mode-change=${this.handleModeChange}
          @notice-close=${this.handleNoticeClose}
          @action=${this.handleGlobalAction}
          @jump=${me=>this.handleJump(me.detail)}
        ></bili-comments-header-renderer>
      </div>
    `}spinnerTemplate(){return x$3`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(me,Le,wt){return x$3`
      <bili-comment-thread-renderer
        .user=${this.user}
        .upMid=${this.upMid}
        .root=${this.root}
        .data=${me}
        .visible=${this.isVisibleItem(me.rpid_str)}
        .oid=${this.oid}
        .type=${this.type}
        .rootType=${this.rootType}
        .cmFromTrackId=${this.cmFromTrackId}
        .mode=${this.mode}
        .idx=${Le}
        .showCheckText=${this.showCheckText}
        .spmInfo=${this.spmInfo}
        .contentFeatures=${this.contentFeatures}
        @delete=${()=>this.handleItemDelete(Le,wt)}
        @top=${$t=>this.handleItemTop(Le,wt,$t.detail)}
        @report=${$t=>this.handleItemReport($t.detail)}
        @block=${$t=>this.handleItemBlock($t.detail)}
        @jump=${$t=>{$t.stopPropagation(),this.handleJump($t.detail)}}
        @view-dialog=${$t=>this.handleViewDialog($t.detail)}
        @preview-image=${$t=>this.handlePreviewImage($t.detail)}
        @jump-space=${$t=>this.handleJumpSpace($t.detail)}
        @mode-change=${this.handleModeChange}
        @notice-close=${this.handleNoticeClose}
        @action=${this.handleGlobalAction}
      ></bili-comment-thread-renderer>
    `}limitMaskTemplate(){return x$3`<div id="limit-mask">
      <div id="limit-mask-wall"></div>
    </div>`}contentTemplate(){var me;return x$3`
      <div id="contents">
        <div class="root-reply">
          <bili-comment-thread-renderer
            .user=${this.user}
            .upMid=${this.upMid}
            .visible=${this.isVisibleItem(this.rootReply.rpid_str)}
            .data=${this.rootReply}
            .oid=${this.oid}
            .cmFromTrackId=${this.cmFromTrackId}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .spmInfo=${this.spmInfo}
            .contentFeatures=${this.contentFeatures}
            style=${o$3({display:"block","background-color":"var(--bg1)","padding-bottom":"14px"})}
            @delete=${()=>this.handleRootReplyDelete(this.rootReply)}
            @block=${()=>{this.handleItemBlock({mid:this.rootReply.member.mid})}}
            @report=${Le=>{var wt;return this.handleItemReport({member:{mid:this.rootReply.member.mid,uname:this.rootReply.member.uname},oid:this.oid,type:this.type,rpid:this.rootReply.rpid_str,hiddenJuryTips:((wt=Le.detail)==null?void 0:wt.hiddenJuryTips)||!1})}}
            @top=${Le=>this.handleRootReplyTop(this.rootReply,Le.detail)}
            @jump=${Le=>{Le.stopPropagation(),this.handleJump(Le.detail)}}
            @view-detail=${Le=>this.handleViewDialog(Le.detail)}
            @preview-image=${Le=>this.handlePreviewImage(Le.detail)}
            @jump-space=${Le=>this.handleJumpSpace(Le.detail)}
            @mode-change=${this.handleModeChange}
            @notice-close=${this.handleNoticeClose}
            @action=${this.handleGlobalAction}
          ></bili-comment-thread-renderer>
        </div>
        <div id="reply-num">相关回复共${((me=this.rootReply)==null?void 0:me.rcount)||0}条</div>
        <div id="new">
          ${c(this.newItems,Le=>Le.rpid_str,(Le,wt)=>this.renderItem(Le,wt,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,Le=>Le.rpid_str,(Le,wt)=>this.renderItem(Le,wt,"feed"))}
        </div>
        ${this.limitMaskState?this.limitMaskTemplate():""}
        <div id="reply-commentbox">
          <bili-comment-box
            style="padding: 10px 0 ;--bili-comment-box-display: none;"
            .oid=${this.oid}
            .type=${this.type}
            .rootType=${this.rootType}
            .mode=${this.mode}
            .reply=${this.replyTarget}
            .inputValue=${this.replyInputValue}
            .voteOption=${this.voteOption}
            .keepActive=${this.replyKeepActive}
            .user=${this.user}
            .placeholder=${this.replyInputPlaceholder}
          ></bili-comment-box>
        </div>
      </div>
    `}continuationsTemplate(){return x$3`
      <div id="continuations">
        ${this.showContinuations?x$3`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$3`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$3`
      <div id="end">
        ${this.showViewMore?x$3`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论</div>`:x$3`<div class="bottombar">没有更多评论</div>`}
      </div>
    `}render(){return x$3`
      ${x$3`${this.headerTemplate()}${this.showSpinner?this.spinnerTemplate():x$3`${this.contentTemplate()} ${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}`}
    `}};E.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    .root-reply {
      padding-bottom: 14px;
      background-color: var(--bg2);
    }

    #reply-num {
      display: flex;
      height: 30px;
      align-items: end;
      font-size: 13px;
      color: var(--text2);
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
    }

    #limit-mask-wall {
      width: 100%;
      height: 300px;
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 80px;
      width: calc(100% - 80px);
      height: 50px;
      border-radius: 6px;
      font-size: 14px;
      color: var(--brand_blue);
      background-color: var(--brand_blue_thin);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }
  `;A([t$1()],E.prototype,"scrollContainer",2);A([t$1()],E.prototype,"user",2);A([n$4({attribute:"data-params"})],E.prototype,"params",2);A([t$1()],E.prototype,"spmInfo",2);A([t$1()],E.prototype,"mode",2);A([t$1()],E.prototype,"showSpinner",2);A([t$1()],E.prototype,"showContinuations",2);A([t$1()],E.prototype,"showContinueTrigger",2);A([t$1()],E.prototype,"contentFeatures",2);A([t$1()],E.prototype,"rootReply",2);A([t$1()],E.prototype,"showEnd",2);A([t$1()],E.prototype,"upMid",2);A([t$1()],E.prototype,"globalOptions",2);A([t$1()],E.prototype,"notice",2);A([t$1()],E.prototype,"vote",2);A([t$1()],E.prototype,"count",2);A([t$1()],E.prototype,"rootInputPlaceholder",2);A([t$1()],E.prototype,"inputDisabled",2);A([t$1()],E.prototype,"rootInputUploadPicState",2);A([t$1()],E.prototype,"limitMaskState",2);A([t$1()],E.prototype,"list",2);A([t$1()],E.prototype,"newItems",2);A([t$1()],E.prototype,"replyTarget",2);A([t$1()],E.prototype,"replyInputValue",2);A([t$1()],E.prototype,"replyKeepActive",2);A([t$1()],E.prototype,"replyInputPlaceholder",1);A([t$1()],E.prototype,"commentBoxDisabledState",2);A([t$1()],E.prototype,"voteOption",1);A([i$3("#continuations .trigger")],E.prototype,"continueTrigger",2);A([i$3("#reply-commentbox")],E.prototype,"replyCommentBoxContainer",2);E=A([e$5("bili-comments-reply-detail")],E);var fh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,B=(me,Le,wt,$t)=>{for(var kt=$t>1?void 0:$t?gh(Le,wt):Le,It=me.length-1,Rt;It>=0;It--)(Rt=me[It])&&(kt=($t?Rt(Le,wt,kt):Rt(kt))||kt);return $t&&kt&&fh(Le,wt,kt),kt};let P=class extends s$4{constructor(){super(...arguments),this.disposables=p$3(),this.scrollContainer=null,this.user=null,this.params=Po,this.oid="",this.type=0,this.rootType="dialog",this.root="",this.dialog="",this.spmInfo={spmid:"",from_spmid:"",from_outer_spmid:""},this.mode=3,this.paginationStr=JSON.stringify({offset:""}),this.seekRpid="",this.maxViewLimit=0,this.showViewMore=!1,this.eventBubbles=!1,this.showSpinner=!0,this.showContinuations=!1,this.showContinueTrigger=!!window.IntersectionObserver,this.contentFeatures={videoTime:!0},this.showEnd=!1,this.upMid=0,this.globalOptions=[],this.notice=null,this.vote=null,this.count=0,this.rootInputPlaceholder="\u52A0\u8F7D\u4E2D\u2026",this.inputDisabled=!1,this.rootInputUploadPicState=1,this.initUserDP=null,this.invisibleID={},this.loadedID={},this.isClosed=!1,this.isSelected=!1,this.limitMaskState=null,this.cmTopProtection=null,this.list=[],this.newItems=[],this.replyTarget=null,this.replyInputValue="",this.replyKeepActive=!1,this.commentBoxDisabledState=null,this.cmFromTrackId="",this.replyCommentBox=null,this.trackObserver=null}get replyInputPlaceholder(){var me,Le;return`\u56DE\u590D @${(Le=(me=this.replyTarget)==null?void 0:me.member)==null?void 0:Le.uname} : `}get voteOption(){return Ai(this.vote)}isVisibleItem(me){return!this.invisibleID[me]}isChildItem(me){return`${me.type},${me.oid_str||me.oid}`==`${this.type},${this.oid}`}initReplyCommentBox(){if(this.replyCommentBox)return;const me=this.shadowRoot.querySelector("#reply-commentbox bili-comment-box");me&&(this.replyCommentBox=me)}connectedCallback(){super.connectedCallback(),this.initData();const me=It=>{if(!this.isChildItem(It.value))return;const Rt=Di(q.REPLY,[...this.newItems,...this.list],It);this.updateInvisibleID(Rt.map(Pt=>Pt.rpid_str))},Le=It=>{It.root&&It.root.type!=="dialog"||It.root&&(It.root.params.type!==this.type||It.root.params.oid!==this.oid)||this.isChildItem(It.value)&&(this.newItems=Li(q.REPLY,this.newItems,It))},wt=()=>{this.replyCommentBox&&(this.replyKeepActive=!1,this.replyTarget=null,this.replyCommentBoxContainer.appendChild(this.replyCommentBox),this.replyCommentBox.style.setProperty("--bili-comment-box-display","none"))},$t=({target:It,root:Rt,defaultInput:Pt,mount:Ft})=>{if(It&&!(Rt&&Rt.type!=="dialog")&&!(Rt&&(Rt.params.type!==this.type||Rt.params.oid!==this.oid))&&(this.initReplyCommentBox(),!!this.replyCommentBox)){if(this.commentBoxDisabledState){if(this.commentBoxDisabledState.source==="unlogin"){F()?Lt("auth/requestLogin",{from:"comments"}):St({event:"selfDef.replyCardReplyClick"});return}b.show(this.commentBoxDisabledState.message||"\u8BC4\u8BBA\u529F\u80FD\u5DF2\u5173\u95ED");return}if(this.replyTarget&&It===this.replyTarget){wt();return}this.replyCommentBox.style.removeProperty("--bili-comment-box-display"),Pt&&(this.replyInputValue=Pt),this.replyTarget=It,Ft(this.replyCommentBox)}},kt=({src:It,jumpUrl:Rt})=>{let Pt=!1;Wr({src:It,root:this,onClick:()=>{Rt&&(Pt=!0,window.open(Rt))},onEnded:()=>{Rt&&(Pt||window.open(Rt))}})};y.on("remove",me),y.on("add",Le),y.on("reply",$t),y.on("hideReply",wt),y.on("displayAlphaVideo",kt),this.disposables.add(()=>y.off("remove",me)),this.disposables.add(()=>y.off("add",Le)),this.disposables.add(()=>y.off("reply",$t)),this.disposables.add(()=>y.off("displayAlphaVideo",kt)),this.disposables.add(Gr),setTimeout(()=>{this.addLoadEvent()}),this.initDependencies(),this.disposables.setTimeout(()=>{this.trackObserver=new Ke({el:this,type:"show",value:{event:"main.comment.reply-page.all",data:{ordering:this.mode===3?"heat":"time",type:this.type,oid:this.oid,spmid:this.spmInfo.spmid,from_spmid:this.spmInfo.from_spmid,from_outer_spmid:this.spmInfo.from_outer_spmid,page:this.rootType}},modifiers:{raw:!0},durational:{repeat:!0},handler:(It,Rt,Pt)=>{It==="show"&&te({type:"show",spm_info:Rt},{msg:JSON.stringify(Pt)})}}),this.disposables.add(()=>{setTimeout(()=>{this.trackObserver&&(this.trackObserver.dispose(),this.trackObserver=null)})})}),this.disposables.setTimeout(()=>{if(F()){const It=Si("window/visibleChange",({data:Rt})=>{var Pt;(Pt=this.trackObserver)==null||Pt.reportShowDuration(Rt)});this.disposables.add(()=>{It()})}})}disconnectedCallback(){this.disposables.dispose(),this.replyCommentBox=null,this.maxViewLimit=0,this.eventBubbles=!1,this.unload()}updated(me){me.get("params")&&(this.unload(),this.initData())}initDependencies(){yr()}appendGlobalStyle(){const me="bili-comments-global-style";if(document.querySelector("#"+me))return;const Le=document.createElement("style");Le.id=me,Le.innerHTML=Hr,document.body.appendChild(Le)}initData(){if(!this.shadowRoot||!this.params||typeof this.params!="string"||this.params===Po)return;const[me,Le,wt,$t]=this.params.split(",");if(!Le||Le==="0"||!me||me==="0"||isNaN(Number(me))||!wt||wt==="0"||!$t||$t==="0")return;const kt=this.getAttribute("mode")||"3",It=this.getAttribute("seek-id")||"";let Rt=0;const Pt=this.getAttribute("max-view-limit");typeof Pt=="string"&&(Rt=Number(Pt),isNaN(Rt)&&(Rt=0));const Ft=this.getAttribute("disable-video-time");typeof Ft=="string"&&Ft!=="false"&&(this.contentFeatures.videoTime=!1);const Ut=this.getAttribute("event-bubbles");let Xt;if(this.parentElement&&!this.scrollContainer&&this.parentElement!==document.body){const ii=getComputedStyle(this.parentElement);["auto","scroll"].includes(ii.overflowY)&&(Xt=this.parentElement)}const Jt=this.getAttribute("cm-from-track-id")||"";this.load({oid:Le,root:wt,dialog:$t,type:Number(me),seekRpid:It,mode:Number(kt),cmFromTrackId:Jt,maxViewLimit:Rt,eventBubbles:Ut!==null,scrollContainer:Xt})}updateList(me){this.list=me}clearList(){this.newItems=[],this.list=[],this.invisibleID={},this.loadedID={},this.showEnd=!1,this.showContinuations=!1,this.paginationStr=JSON.stringify({offset:""})}unload(){this.user=null,this.notice=null,this.vote=null,this.cmTopProtection=null,this.mode=3,this.showViewMore=!1,this.clearList()}async reload(me){return this.unload(),await this.load(me)}async load(me){try{if(me){const{oid:Le,root:wt,dialog:$t,type:kt,mode:It,disableVideoTime:Rt,seekRpid:Pt,maxViewLimit:Ft,scrollContainer:Ut,spmInfo:Xt,cmFromTrackId:Jt}=me;if(this.oid=String(Le),this.root=String(wt),this.dialog=String($t),typeof Rt=="string"&&Rt!=="false"&&(this.contentFeatures.videoTime=!1),this.type=kt,It&&[2,3].includes(It)&&(this.mode=It),Pt&&(this.seekRpid=Pt),Jt?this.cmFromTrackId=Jt:this.cmFromTrackId="",Ft&&Ft>0&&(this.maxViewLimit=Ft),Ut)if(typeof Ut=="string"){const ii=document.querySelector(Ut);ii?this.scrollContainer=ii:console.warn("scrollContainer not found")}else this.scrollContainer=Ut;Xt&&(this.spmInfo=Xt),this.eventBubbles=me.eventBubbles||!1}this.showSpinner=!0,this.initUser(),await Promise.all([this.initUpGlobalActions(),this.getList(),Dr()]),await this.requestUpdate(),this.showSpinner=!1,this.handleTriggerEvent("inited"),!this.showEnd&&this.list.length<10&&this.getList()}catch(Le){return console.warn("bili comments load error",Le),Promise.reject(Le)}}async initUser(){try{this.initUserDP=Pi();const{code:me,data:Le}=await jr();if(this.initUserDP.resolve(),this.initUserDP=null,me===0&&Le)return this.user=Le,Le}catch(me){this.initUserDP&&(this.initUserDP.resolve(),this.initUserDP=null),console.warn("\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25",me)}return null}async initUpGlobalActions(){try{const{code:me,data:Le}=await Nr({oid:this.oid,type:this.type});if(me!==0||!Le)return;this.globalOptions=wr(Le,F())}catch(me){console.log("bili comments up interaction status error",me)}}async addLoadEvent(){if(this.showContinueTrigger&&this.continueTrigger){const me=new IntersectionObserver(async Le=>{if(Le[0].isIntersecting&&!this.showEnd){if(this.showSpinner||this.showContinuations)return;this.getList()}});me.observe(this.continueTrigger),this.disposables.add(()=>{me.unobserve(this.continueTrigger),me.disconnect()})}else this.disposables.addEventListener(this.scrollContainer||window,"scroll",qr(100,()=>{if(!this.showSpinner&&!this.showContinuations)if(this.scrollContainer){const{scrollTop:me,scrollHeight:Le,clientHeight:wt}=this.scrollContainer;Math.ceil(me)+wt*2>=Le&&this.getList()}else{const{scrollTop:me,scrollHeight:Le}=document.documentElement,wt=window.innerHeight;Math.ceil(me)+wt*2>=Le&&this.getList()}}))}updateInvisibleID(me){const Le={...this.invisibleID};me.forEach(wt=>{Le[wt]=!0}),this.invisibleID=Le,this.requestUpdate()}handlePreviewImage(me){y.emit("previewImage",me)}handleJumpSpace(me){y.emit("jumpSpace",me)}handleJump(me){y.emit("jump",me)}async handleItemDelete(me,Le){var wt;const $t=[...Le==="feed"?this.list:this.newItems][me];if(((wt=this.cmTopProtection)==null?void 0:wt.rpid)===($t==null?void 0:$t.rpid_str)){Ve({title:"\u5220\u9664\u8BC4\u8BBA",message:this.cmTopProtection.message,cancel:{text:"\u6211\u8981\u7533\u8BC9",click:It=>{It(),pi({type:this.type,oid:this.oid,rpid:$t.rpid_str})}},confirm:{text:"\u6211\u77E5\u9053\u4E86",click:It=>{It()}}});return}let kt="\u5220\u9664\u5931\u8D25";try{if(!await ot({title:"\u5220\u9664\u8BC4\u8BBA",message:"\u5220\u9664\u8BC4\u8BBA\u540E\uFF0C\u8BC4\u8BBA\u4E0B\u6240\u6709\u56DE\u590D\u90FD\u4F1A\u88AB\u5220\u9664,\u662F\u5426\u7EE7\u7EED?"}))return;const{code:It}=await je({oid:this.oid,type:this.type,rpid:$t.rpid_str});It===0&&(this.updateInvisibleID([$t.rpid_str]),kt="\u5220\u9664\u6210\u529F")}catch(It){console.log("\u5220\u9664\u5931\u8D25",It)}finally{b.show(kt)}}async handleItemTop(me,Le,wt){const $t=[...Le==="feed"?this.list:this.newItems][me];let kt=`${wt?"":"\u53D6\u6D88"}\u7F6E\u9876`;try{const{code:It}=await di({oid:this.oid,type:this.type,rpid:$t.rpid_str,action:wt?1:0});It===0?kt+="\u6210\u529F":kt+="\u5931\u8D25"}catch{kt+="\u5931\u8D25"}finally{b.show(kt)}}async handleItemReport(me){const{app_id:Le,platform:wt}=Ce("app/getAppInfo");_r({...me,ordering:this.mode===3?"heat":"time",appId:Le,platform:wt})}async handleItemBlock(me){try{if(!await ot({title:"\u62C9\u9ED1\u7528\u6237",message:"\u52A0\u5165\u9ED1\u540D\u5355\u540E\uFF0C\u5C06\u81EA\u52A8\u89E3\u9664\u5173\u6CE8\u5173\u7CFB\u548C\u5BF9\u8BE5\u7528\u6237\u7684\u5408\u96C6\u8BA2\u9605\u5173\u7CFB\uFF0C\u7981\u6B62\u8BE5\u7528\u6237\u4E0E\u6211\u4E92\u52A8\u6216\u67E5\u770B\u6211\u7684\u7A7A\u95F4"}))return;const{code:Le,message:wt}=await vr({fid:me.mid,act:5,re_src:15});if(Le!==0){b.show(wt||"\u62C9\u9ED1\u5931\u8D25");return}y.emit("remove",{namespaces:[q.MAIN,q.REPLY],method:"filter",predicate:$t=>{var kt;return((kt=$t.member)==null?void 0:kt.mid)===me.mid},value:{type:this.type,oid:this.oid,oid_str:this.oid}}),b.show("\u62C9\u9ED1\u6210\u529F")}catch{b.show("\u62C9\u9ED1\u5931\u8D25")}}updatePaginationStr(me){this.paginationStr=JSON.stringify({offset:me})}updateReplyItemExtra(me,Le,wt){me.$extra||(me.$extra={}),me.$extra[Le]=wt}async getList(){var me,Le;try{if(this.showEnd)return;this.list.length&&(this.showContinuations=!0);const wt=await ph({oid:this.oid,type:this.type,root:this.root,dialog:this.dialog,size:20,pagination_str:this.paginationStr,cm_from_track_id:this.cmFromTrackId||void 0});if(this.showSpinner&&this.initUserDP&&await this.initUserDP.promise,wt.code!==0||!wt.data){this.isClosed=Fr(wt.code),this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:wt.message||"\u5565\u90FD\u6728\u6709~",disabled:!0}),this.showContinuations=!1,this.showSpinner&&(this.showEnd=!0);return}const{cursor:$t,control:kt,upper:It}=wt.data;let Rt=wt.data.replies||[];const Pt=[];this.showSpinner&&(this.upMid=It.mid,this.count=($t==null?void 0:$t.all_count)||0,kt&&(this.rootInputPlaceholder=kt.root_input_text||"",this.rootInputUploadPicState=kt.upload_picture_icon_state,this.commentBoxDisabledState=$e({user:this.user,closed:this.isClosed,message:kt.root_input_text||"",disabled:kt.input_disable})),this.isSelected=Ur(wt.data),this.limitMaskState=zr({user:this.user,count:this.count}),this.limitMaskState&&(this.showEnd=!0,Rt=Rt.slice(0,this.limitMaskState.count))),(me=$t==null?void 0:$t.pagination_reply)!=null&&me.next_offset&&this.updatePaginationStr((Le=$t==null?void 0:$t.pagination_reply)==null?void 0:Le.next_offset);let Ft=!this.seekRpid;if(Rt.forEach(Ut=>{var Xt;this.loadedID[Ut.rpid_str]||Ut.invisible!==!0&&(this.loadedID[Ut.rpid_str]=!0,Ft===!1&&(Ut.rpid_str===this.seekRpid?(this.updateReplyItemExtra(Ut,"spotlight",!0),Ft=!0):(Xt=Ut.replies)!=null&&Xt.length&&Ut.replies.forEach(Jt=>{Ft||Jt.rpid_str===this.seekRpid&&(this.updateReplyItemExtra(Jt,"spotlight",!0),Ft=!0)})),Pt.push(Ut))}),this.showContinuations=!1,this.showSpinner&&this.maxViewLimit>0){Pt.length&&(Pt.length>this.maxViewLimit&&(this.showViewMore=!0),this.updateList(this.list.concat(Pt.slice(0,this.maxViewLimit)))),this.showEnd=!0;return}$t!=null&&$t.is_end&&(this.showEnd=!0),Pt.length?this.updateList(this.list.concat(Pt)):this.showEnd=!0}catch(wt){console.log("getList error",wt),this.showContinuations=!1}}async handleGlobalAction(me){var Le,wt;if(!((Le=me.detail)!=null&&Le.key)||!((wt=me.detail)!=null&&wt.data))return;const $t=me.detail.key,kt=me.detail.data.active,It=me.detail.text;if($t==="select"){try{if(!await ot({title:It,message:kt?"\u5F00\u542F\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u6240\u6709\u8BC4\u8BBA\u90FD\u9700\u7ECF\u8FC7\u6211\u7684\u786E\u8BA4\u540E\u518D\u5411\u6240\u6709\u7528\u6237\u5C55\u793A\u3002\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3":"\u505C\u6B62\u7CBE\u9009\u8BC4\u8BBA\u540E\uFF0C\u5982\u6709\u9057\u7559\u672A\u5904\u7406\u8BC4\u8BBA\uFF0C\u53EF\u524D\u5F80PC\u7AEF\u521B\u4F5C\u4E2D\u5FC3"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.SELECT:Tt.UNSELECT});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u8BC4\u8BBA\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u8BC4\u8BBA\u3001\u53C2\u4E0E\u8BC4\u8BBA\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u8BC4\u8BBA\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await _e({oid:this.oid,type:this.type,action:kt?Tt.OPEN:Tt.CLOSE});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}b.show((Ft==null?void 0:Ft.action_toast)||Pt||It+"\u6210\u529F"),setTimeout(()=>{this.reload()},2e3)}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}if($t==="close-danmaku"){try{if(!await ot({title:It,message:kt?"\u6062\u590D\u5F39\u5E55\u540E\uFF0C\u7528\u6237\u53EF\u6B63\u5E38\u53D1\u8868\u5F39\u5E55\u3001\u53C2\u4E0E\u5F39\u5E55\u4E92\u52A8\uFF0C\u5DF2\u6709\u7684\u5F39\u5E55\u4E5F\u6062\u590D\u6B63\u5E38\u5C55\u793A":"\u5173\u95ED\u8BC4\u8BBA\u5C06\u4F1A\u7981\u6B62\u4EFB\u4F55\u4EBA\u5728\u6B64\u8BC4\u8BBA\u533A\u53D1\u8868\u5185\u5BB9\uFF0C\u4E14\u5DF2\u6709\u8BC4\u8BBA\u5728\u5173\u95ED\u671F\u95F4\u5C06\u4E0D\u53EF\u89C1"}))return;const{code:Rt,message:Pt,data:Ft}=await br({aid:this.oid,state:kt?0:1});if(Rt!==0){b.show((Ft==null?void 0:Ft.action_toast)||Pt||"\u64CD\u4F5C\u5931\u8D25");return}let Ut=(Ft==null?void 0:Ft.action_toast)||Pt;Ut==="0"&&(Ut="\u64CD\u4F5C\u6210\u529F"),b.show(Ut||It+"\u6210\u529F")}catch{b.show("\u64CD\u4F5C\u5931\u8D25")}return}}async handleModeChange(me){this.mode=me.detail,this.clearList(),this.showContinuations=!0,await this.getList()}handleNoticeClose(){Vr(),this.notice=null}handleTriggerEvent(me,Le){if(this.eventBubbles){this.dispatchEvent(new CustomEvent(`bili-comments-${me}`,{detail:Le,bubbles:!0}));return}this.dispatchEvent(new CustomEvent(me,{detail:Le}))}handleLimitClick(){var me;((me=this.limitMaskState)==null?void 0:me.type)==="unlogin"&&St({event:"selfDef.replyCardShowMore"})}handleViewMoreClick(){this.dispatchEvent(new CustomEvent("view-more"))}spinnerTemplate(){return x$3`<div id="spinner-container">
      <bili-comments-spinner></bili-comments-spinner>
    </div> `}renderItem(me,Le,wt){return x$3`
      <bili-comment-thread-renderer
        .user=${this.user}
        .upMid=${this.upMid}
        .data=${me}
        .visible=${this.isVisibleItem(me.rpid_str)}
        .oid=${this.oid}
        .type=${this.type}
        .root=${this.root}
        .rootType=${this.rootType}
        .cmFromTrackId=${this.cmFromTrackId}
        .mode=${this.mode}
        .idx=${Le}
        .spmInfo=${this.spmInfo}
        .contentFeatures=${this.contentFeatures}
        @delete=${()=>this.handleItemDelete(Le,wt)}
        @top=${$t=>this.handleItemTop(Le,wt,$t.detail)}
        @report=${$t=>this.handleItemReport($t.detail)}
        @block=${$t=>this.handleItemBlock($t.detail)}
        @jump=${$t=>{$t.stopPropagation(),this.handleJump($t.detail)}}
        @preview-image=${$t=>this.handlePreviewImage($t.detail)}
        @jump-space=${$t=>this.handleJumpSpace($t.detail)}
        @mode-change=${this.handleModeChange}
        @notice-close=${this.handleNoticeClose}
        @action=${this.handleGlobalAction}
      ></bili-comment-thread-renderer>
    `}limitMaskTemplate(){return x$3`<div id="limit-mask">
      <div id="limit-mask-wall"></div>
    </div>`}contentTemplate(){return x$3`
      <div id="contents">
        <div id="new">
          ${c(this.newItems,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"new"))}
        </div>
        <div id="feed">
          ${c(this.list,me=>me.rpid_str,(me,Le)=>this.renderItem(me,Le,"feed"))}
        </div>
          ${this.limitMaskState?this.limitMaskTemplate():""}
          <div id="reply-commentbox">
            <bili-comment-box
              style="padding: 10px 0 ;--bili-comment-box-display: none;"
              .oid=${this.oid}
              .type=${this.type}
              .rootType=${this.rootType}
              .mode=${this.mode}
              .reply=${this.replyTarget}
              .inputValue=${this.replyInputValue}
              .voteOption=${this.voteOption}
              .keepActive=${this.replyKeepActive}
              .user=${this.user}
              .placeholder=${this.replyInputPlaceholder}
            ></bili-comment-box>
          </div>
        </div>
      </div>
    `}continuationsTemplate(){return x$3`
      <div id="continuations">
        ${this.showContinuations?x$3`<div class="bottombar">正在加载…</div>`:""}
        ${this.showContinueTrigger?x$3`<div class="trigger"></div>`:""}
      </div>
    `}endTemplate(){return x$3`
      <div id="end">
        ${this.showViewMore?x$3`<div class="bottombar clickable" @click=${this.handleViewMoreClick}>查看更多评论</div>`:x$3`<div class="bottombar">没有更多评论</div>`}
      </div>
    `}render(){return x$3`
      ${this.showSpinner?this.spinnerTemplate():x$3`${this.contentTemplate()}${this.showEnd?this.endTemplate():this.continuationsTemplate()}`}
    `}};P.styles=i$6`
    :host {
      display: block;
      background-color: var(--bg1);
      -webkit-font-smoothing: antialiased;
    }

    #spinner-container #title {
      margin: 0;
      color: var(--text1);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 20px;
    }

    #contents {
      padding-top: 14px;
      position: relative;
    }

    #root-reply {
      padding-bottom: 10px;
      background-color: var(--bg2);
    }

    #reply-num {
      display: flex;
      height: 30px;
      align-items: end;
      font-size: 13px;
      color: var(--text2);
    }

    #reply-commentbox {
      display: none;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }

    #limit-mask {
      width: 100%;
      position: absolute;
      bottom: -36px;
      left: 0;
    }

    #limit-mask-wall {
      width: 100%;
      height: 300px;
    }
    #limit-mask-tip {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 80px;
      width: calc(100% - 80px);
      height: 50px;
      border-radius: 6px;
      font-size: 14px;
      color: var(--brand_blue);
      background-color: var(--brand_blue_thin);
      transition: 0.2s;
      cursor: pointer;
    }

    .bottombar {
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
      color: var(--text3);
      text-align: center;
      user-select: none;
    }
    .bottombar.clickable:hover {
      cursor: pointer;
      color: var(--brand_blue);
    }

    #continuations .trigger {
      width: 100%;
      height: 40px;
    }

    #end .bottombar {
      padding-bottom: 160px;
    }
  `;B([t$1()],P.prototype,"scrollContainer",2);B([t$1()],P.prototype,"user",2);B([n$4({attribute:"data-params"})],P.prototype,"params",2);B([t$1()],P.prototype,"spmInfo",2);B([t$1()],P.prototype,"mode",2);B([t$1()],P.prototype,"showSpinner",2);B([t$1()],P.prototype,"showContinuations",2);B([t$1()],P.prototype,"showContinueTrigger",2);B([t$1()],P.prototype,"contentFeatures",2);B([t$1()],P.prototype,"showEnd",2);B([t$1()],P.prototype,"upMid",2);B([t$1()],P.prototype,"globalOptions",2);B([t$1()],P.prototype,"notice",2);B([t$1()],P.prototype,"vote",2);B([t$1()],P.prototype,"count",2);B([t$1()],P.prototype,"rootInputPlaceholder",2);B([t$1()],P.prototype,"inputDisabled",2);B([t$1()],P.prototype,"rootInputUploadPicState",2);B([t$1()],P.prototype,"limitMaskState",2);B([t$1()],P.prototype,"list",2);B([t$1()],P.prototype,"newItems",2);B([t$1()],P.prototype,"replyTarget",2);B([t$1()],P.prototype,"replyInputValue",2);B([t$1()],P.prototype,"replyKeepActive",2);B([t$1()],P.prototype,"replyInputPlaceholder",1);B([t$1()],P.prototype,"commentBoxDisabledState",2);B([t$1()],P.prototype,"voteOption",1);B([i$3("#continuations .trigger")],P.prototype,"continueTrigger",2);B([i$3("#reply-commentbox")],P.prototype,"replyCommentBoxContainer",2);P=B([e$5("bili-comments-reply-dialog")],P);const _TrackReportManager=class{constructor(){this.isListenerAdded=!1,this.globalHandler=me=>{const Le=me.detail,wt=Le==null?void 0:Le.event;allCustomReport({type:Le==null?void 0:Le.type,spm_info:wt},{msg:JSON.stringify(Le==null?void 0:Le.data)})}}static getInstance(){return _TrackReportManager.instance||(_TrackReportManager.instance=new _TrackReportManager),_TrackReportManager.instance}addEventListner(){this.isListenerAdded||(document.body.addEventListener("trackReport",this.globalHandler),this.isListenerAdded=!0)}removeEventListner(){this.isListenerAdded&&(document.body.removeEventListener("trackReport",this.globalHandler),this.isListenerAdded=!1)}};let TrackReportManager=_TrackReportManager;TrackReportManager.instance=null;const judgeMainWindowOpen=me=>{const Le=/space\.bilibili\.com\/(\d+)/,wt=/https:\/\/search\.bilibili\.com\/.*[?&]keyword=([^&#]*)/;if(me.match(Le)){const $t=me.match(Le)[1];return{page:"SpacePage",meta:{mid:$t.toString()}}}if(me.match(wt)){const $t=me.match(wt)[1],kt=decodeURIComponent($t);return{page:"SearchPage",meta:{keyword:kt}}}return null},judgePlayerWindowOpen=async me=>{var Ut,Xt,Jt,ii,Ni,Vi,zi,Xn;const Le=new RegExp("av([0-9]+)","i"),wt=new RegExp("bv1[1-9A-NP-Za-km-z]{9}","ugi"),$t="([/.$*?~=#!%@&A-Za-z0-9_-]*)",kt=new RegExp("ep([0-9]+)","i"),It=new RegExp("ss([0-9]+)","i"),Rt=new RegExp(`((https?:)?//)?(((uat-)?www\\.bilibili\\.com)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn))(/video)?/((av[0-9]+)|((BV)1[1-9A-NP-Za-km-z]{9}))($|/|)${$t}`,"ugi"),Pt=new RegExp(`((https?:)?//)?(((uat-)?www\\.bilibili\\.com/bangumi/(play/|media/)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233.cn)/)(ss|ep)[0-9]+)($|/|)${$t}`,"ugi"),Ft=/((https?:)?\/\/)?(b23\.tv|bili22\.cn|bili33\.cn|bili23\.cn|bili2233\.cn)\/\w+/i;if(me.match(Rt)){const Qn=me.match(Rt),eo=(Ut=Qn[0])==null?void 0:Ut.match(wt);if(eo!=null&&eo[0]){const to=eo[0];return{type:"ugc",bvid:to}}const no=(Xt=Qn[0])==null?void 0:Xt.match(Le);if(no!=null&&no[0])return{type:"ugc",aid:Number(no[1])}}else if(me.match(Pt)){const Qn=me.match(Pt),eo=(Jt=Qn[0])==null?void 0:Jt.match(It);if(eo!=null&&eo[0])return{type:"ogv",seasonId:Number(eo[1])};const no=(ii=Qn[0])==null?void 0:ii.match(kt);if(no!=null&&no[0])return{type:"ogv",epid:Number(no[1])}}else if(me.match(Ft))try{const Qn=await fetch(me);if(Qn.url){const eo=Qn.url;if(eo.match(Rt)){const no=eo.match(Rt),to=(Ni=no[0])==null?void 0:Ni.match(wt);if(to!=null&&to[0]){const ao=to[0];return{type:"ugc",bvid:ao,fromSpmid:"main.comment.0.0.pv"}}const oo=(Vi=no[0])==null?void 0:Vi.match(Le);if(oo!=null&&oo[0])return{type:"ugc",aid:Number(oo[1]),fromSpmid:"main.comment.0.0.pv"}}if(eo.match(Pt)){const no=eo.match(Pt),to=(zi=no[0])==null?void 0:zi.match(It);if(to!=null&&to[0])return{type:"ogv",seasonId:Number(to[1]),fromSpmid:"main.comment.0.0.pv"};const oo=(Xn=no[0])==null?void 0:Xn.match(kt);if(oo!=null&&oo[0])return{type:"ogv",epid:Number(oo[1]),fromSpmid:"main.comment.0.0.pv"}}}}catch{}return null},useNewCommentModule=(me="player")=>{const Le=ref(null),wt=ref(null),$t=ref(null),kt=ref(null),It=ref(null),Rt=ref(null),Pt=ref("list");let Ft=null,Ut=null,Xt=null,Jt=null,ii=null;async function Ni(Qn,eo){const no={oid:Qn.oid,type:Qn.type,seekRpid:Qn.seekRpid},to=Qn.videoOptions,oo=Qn.spmInfo,{container:ao}=eo;zi(eo);const ro=document.createElement("bili-comments"),Fo=document.createElement("bili-comments-reply-detail"),Qr=document.createElement("bili-comments-reply-dialog");return ro.id="pc-comments",Fo.id="pc-comments-detail",Qr.id="pc-comments-dialog",Le.value=ro,ao.appendChild(ro),kt.value=ao,customElements.whenDefined("bili-comments").then(async()=>{await ro.load({...no,scrollContainer:ao,spmInfo:Qn.spmInfo,disableVideoTime:me==="dynamic"?"true":"false",cmFromTrackId:Qn==null?void 0:Qn.cmFromTrackId})}),Ft=ns=>{Pt.value="detail";const so=ns.detail;nextTick(()=>{const gr=document.querySelector("#pc-comment-detail-container");gr.appendChild(Fo),wt.value=Fo,It.value=gr,customElements.whenDefined("bili-comments-reply-detail").then(async()=>{await Fo.load({oid:so.oid,root:so.root,type:Qn.type,scrollContainer:gr,spmInfo:Qn.spmInfo,disableVideoTime:me==="dynamic"?"true":"false",cmFromTrackId:Qn==null?void 0:Qn.cmFromTrackId}),kt.value&&(kt.value.style.display="none")})})},Ut=ns=>{Pt.value="dialog";const so=ns.detail;nextTick(()=>{const gr=document.querySelector("#pc-comment-dialog-container");gr.appendChild(Qr),$t.value=Qr,Rt.value=gr,customElements.whenDefined("bili-comments-reply-dialog").then(async()=>{await Qr.load({oid:so.oid,root:so.root,dialog:so.dialog,type:Qn.type,scrollContainer:gr,spmInfo:Qn.spmInfo,disableVideoTime:me==="dynamic"?"true":"false",cmFromTrackId:Qn==null?void 0:Qn.cmFromTrackId}),kt.value&&(kt.value.style.display="none"),It.value&&(It.value.style.display="none")})})},Xt=async ns=>{const so=ns.detail,gr=so.type;if(gr==="link"){let Xr=so.link;const as=judgeMainWindowOpen(Xr);if(as){openMainWindowPage(as);return}const ls=await judgePlayerWindowOpen(Xr);if(ls){openPlayerWindow(ls);return}Xr.startsWith("//")&&(Xr="https:"+Xr);const ms=callNativeSync("config/getCustomConfig");ms!=null&&ms.isDisableAppBrowser?openInBrowser(Xr):openInAppBrowser$1(Xr,"comment.Link")}if(gr==="goods"){let Xr=so.link;Xr.startsWith("//")&&(Xr="https:"+Xr);const as=callNativeSync("config/getCustomConfig");as!=null&&as.isDisableAppBrowser?openInBrowser(Xr):openInAppBrowser$1(Xr,"comment.Link")}if(gr==="search"){const Xr=so.keyword;Xr&&openMainWindowPage({page:"SearchPage",meta:{keyword:Xr}})}if(gr==="seek"&&to){const Xr=ns.detail,as={...to,p:Number(Xr.videoPart),t:Number(Xr.videoTime)};Qn.seekHandler&&Qn.seekHandler(as)}if(gr==="mention"){const Xr=so.userProfileId;Xr&&openMainWindowPage({page:"SpacePage",meta:{mid:Xr,fromOuterSpmId:oo.spmid}})}},Jt=ns=>{const gr=ns.detail.uid;gr&&openMainWindowPage({page:"SpacePage",meta:{mid:gr,fromOuterSpmId:oo.spmid}})},ii=ns=>{const so=ns.detail;Qn.previewImageHandler&&Qn.previewImageHandler(so.imageList,so.index)},ro.addEventListener("view-detail",Ft),ro.addEventListener("jump",Xt),ro.addEventListener("jump-space",Jt),ro.addEventListener("preview-image",ii),Fo.addEventListener("view-dialog",Ut),TrackReportManager.getInstance().addEventListner(),{comments:ro,commentsDetail:Fo,commentsDialog:Qr}}function Vi(Qn){Pt.value=Qn,Qn==="list"&&kt.value&&kt.value.style.removeProperty("display"),Qn==="detail"&&It.value&&It.value.style.removeProperty("display")}async function zi(Qn){const{container:eo,detailContainer:no,dialogContainer:to}=Qn;TrackReportManager.getInstance().removeEventListner(),Le.value&&(Le.value.removeEventListener("view-detail",Ft),Le.value.removeEventListener("jump",Xt),Le.value.removeEventListener("jump-space",Jt),Le.value.removeEventListener("preview-image",ii)),wt.value&&wt.value.removeEventListener("view-dialog",Ut),Le.value=null,wt.value=null,$t.value=null,kt.value=null,It.value=null,Rt.value=null,Pt.value="list",Xn(eo),eo&&eo.style.removeProperty("display"),no&&no.style.removeProperty("display"),eo&&Array.from(eo.children).forEach(ao=>{ao.tagName.toLowerCase()==="bili-comments"&&eo.removeChild(ao)}),no&&Array.from(no.children).forEach(ao=>{ao.tagName.toLowerCase()==="bili-comments-reply-detail"&&no.removeChild(ao)}),to&&Array.from(to.children).forEach(ao=>{ao.tagName.toLowerCase()==="bili-comments-reply-dialog"&&to.removeChild(ao)})}function Xn(Qn){if(Qn){const eo=Qn.parentElement;eo&&Array.from(eo.children).forEach(no=>{no.className.toLowerCase()==="bili-comments-bottom-fixed-wrapper"&&eo.removeChild(no)})}}return{commentsInstance:Le,commentsDetailInstance:wt,commentsDialogInstance:$t,currentCommentType:Pt,clearFixedWrapper:Xn,initComment:Ni,changeComment:Vi,clearComment:zi}};var Popup_vue_vue_type_style_index_0_lang="";const popups=reactive([]),_sfc_main$e=defineComponent({name:"VPopup",props:{customClass:{type:String,default:""},mask:{type:Boolean,default:!0},fadeOpacity:{type:Number,default:.7}},emits:["wrap-click"],setup(me,{expose:Le,emit:wt}){const $t=ref(null),kt=ref(null),{getZIndex:It}=usePopupZIndexStore(),Rt=ref(!1),Pt=ref(!1),Ft=ref(!1),Ut=ref(!0);let Xt=0;watch$1(popups,Xn=>{Xn.forEach((Qn,eo)=>{eo!==Xn.length-1?Qn.ts===Xt&&Qn.fade(!0):Qn.fade(!1)})});const Jt=()=>{Rt.value||!$t.value||(ii(),Xt=Date.now(),popups.push({ts:Xt,fade(Xn){Pt.value=Xn}}),popups.length>1&&(Ut.value=!1),Rt.value=!0)},ii=()=>{$t.value.style.zIndex=`${It()}`},Ni=()=>{Rt.value=!1,Xt=0,popups.pop()},Vi=()=>{!me.mask&&!Ft.value&&(Ft.value=!0,setTimeout(()=>{Ft.value=!1},500)),wt("wrap-click")},zi=()=>{events.emit("hidePopover")};return Le({show:Jt,hide:Ni,el:kt}),{root:$t,el:kt,visible:Rt,showTs:Xt,isFade:Pt,isFlashing:Ft,showMask:Ut,onWrapClick:Vi,onClick:zi}}}),_hoisted_1$A={class:"base_popup--mask"};function _sfc_render(me,Le,wt,$t,kt,It){return openBlock(),createBlock(Transition,{name:"base_popup--transition"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:"base_popup--wrap flex_center",ref:"root",onClick:Le[1]||(Le[1]=withModifiers((...Rt)=>me.onWrapClick&&me.onWrapClick(...Rt),["stop"]))},[withDirectives(createBaseVNode("div",_hoisted_1$A,null,512),[[vShow,me.mask&&me.showMask]]),createBaseVNode("div",{class:normalizeClass(["base_popup",{"is-fade":me.isFade,"is-flashing":me.isFlashing,[me.customClass]:!!me.customClass}]),ref:"el",style:normalizeStyle({opacity:me.isFade?me.fadeOpacity:void 0}),onClick:Le[0]||(Le[0]=withModifiers((...Rt)=>me.onClick&&me.onClick(...Rt),["stop"]))},[renderSlot(me.$slots,"default")],6)],512),[[vShow,me.visible]])]),_:3})}var VPopup=_export_sfc(_sfc_main$e,[["render",_sfc_render]]);const mouseEvent=me=>{me.directive("longClick",{mounted(Le,wt){Le.addEventListener("mousedown",function($t){Le.isPressing=!0;const kt=wt.value;Le.timer=setTimeout(()=>{$t.stopPropagation(),Le.isPressing&&kt()},wt.arg)})}}),me.directive("longClickLeave",{mounted(Le,wt){Le.addEventListener("mouseup",function(){Le.isPressing&&(clearTimeout(Le.timer),Le.isPressing=!1,wt.value())}),Le.addEventListener("mouseleave",function(){Le.isPressing&&(clearTimeout(Le.timer),Le.isPressing=!1,wt.value())})}}),me.directive("focus",{inserted:function(Le){Le.focus()}})};var AtPopup_vue_vue_type_style_index_0_lang="";const _hoisted_1$z=createBaseVNode("div",{class:"at_popup__hint"},"\u9009\u62E9\u6216\u8F93\u5165\u4F60\u60F3@\u7684\u4EBA",-1),_hoisted_2$x={key:0,class:"at_popup__group-name"},_hoisted_3$w={class:"at_popup__group-list"},_hoisted_4$f=["onClick","onMouseover"],_hoisted_5$a={class:"at_popup__user-avatar"},_hoisted_6$5=["src"],_hoisted_7$5={class:"at_popup__user-info"},_hoisted_8$5=["innerHTML"],_hoisted_9$5={class:"at_popup__user-fans"},_sfc_main$d=defineComponent({__name:"AtPopup",props:{mid:{type:Number,default:0,required:!0},onSelect:{type:Function,default:()=>!0},onVisiblaChange:{type:Function,default:null},lineHeight:{type:[String,Number],default:"14"}},emits:["active","inactive"],setup(me,{expose:Le,emit:wt}){const $t=me,kt=33,It=ref(null),Rt=ref(!1),Pt=ref(""),Ft=reactive({top:0,left:0}),Ut=reactive([0,0]),Xt=ref([]),Jt=ref(!0);ref(!1);const ii=computed(()=>({left:`${Ft.left}px`,top:`${Ft.top+Number($t.lineHeight)}px`}));watch$1(Rt,so=>{typeof $t.onVisiblaChange=="function"&&$t.onVisiblaChange(so)});function Ni(so,{visible:gr,position:Xr,data:as}){gr===-1&&Vi(so),gr===1?(Ft.left=Xr.left,Ft.top=Xr.top,Fo(),ns(as)):gr===0&&Qr()}function Vi(so){switch(so.type){case"keydown":zi(so);break}}function zi(so){if(!(!Rt.value||Xt.value.length===0))switch(so.keyCode){case 13:so.preventDefault(),eo(Xt.value[Ut[0]].items[Ut[1]]);break;case 38:so.preventDefault(),no();break;case 40:so.preventDefault(),to();break}}function Xn(so,gr){!Jt.value||(Ut[0]=so,Ut[1]=gr)}function Qn(so,gr){return Ut[0]===so&&Ut[1]===gr}function eo(so){!so||($t.onSelect({uname:so.uname,uid:so.uid,keyword:Pt.value}),Qr())}function no(){const so=Ut[0],gr=Ut[1];gr-1>=0?Ut[1]=gr-1:(so-1>=0?Ut[0]=so-1:Ut[0]=Xt.value.length-1,Ut[1]=Xt.value[Ut[0]].items.length-1),oo()}function to(){const so=[...Ut];so[1]+1<Xt.value[so[0]].items.length?Ut[1]=Ut[1]+1:(so[0]+1<Xt.value.length?Ut[0]=so[0]+1:Ut[0]=0,Ut[1]=0),oo()}function oo(){if(Xt.value.length===0)return;const Xr=It.value.children[Ut[0]].querySelector(".at_popup__group-list").children[Ut[1]];if(!Xr)return;const as=Xr.offsetHeight;It.value.offsetHeight+It.value.scrollTop<=Xr.offsetTop?(It.value.scrollTop=Xr.offsetTop-It.value.offsetHeight+as,ao()):Xr.offsetTop<=It.value.scrollTop+kt-as&&(It.value.scrollTop=Xr.offsetTop-(Ut[1]===0?kt:0),ao())}function ao(){Jt.value=!1,ro()}const ro=debounce(function(){Jt.value=!0},200);function Fo(){Rt.value=!0,Ut[0]=0,Ut[1]=0,wt("active")}function Qr(){setTimeout(()=>{Rt.value=!1,wt("inactive"),Xt.value=[]},150)}const es=(so,gr,Xr="#00A1D6")=>{if(!gr)return so;const as=new RegExp("("+gr+")","g");return so.replace(as,`<font style='color: ${Xr};'>$1</font>`)},ns=debounce(async function(so){Pt.value=so;try{const{groups:gr}=await getUserByKeyword(so,$t.mid);if(gr){const Xr=gr.map(as=>({name:as.group_name,type:as.group_type,items:as.items.map(ls=>{const ms=ls.face?ls.face.replace(/http(s)?:/,""):DEFAULT_FACE;return{uid:ls.uid,uname:ls.name,fans:ls.fans>1e5?`${(ls.fans/1e4).toFixed(1)}\u4E07\u7C89\u4E1D`:`${ls.fans}\u7C89\u4E1D`,type:ls.official_verify_type,name:es(ls.name,so),avatar:formatImg(ms,{w:80,h:80,webp:!0})}})}));Xt.value=Xr}else Xt.value=[]}catch{Xt.value=[]}},500);return Le({trigger:Ni}),(so,gr)=>withDirectives((openBlock(),createElementBlock("div",{class:"at_popup",style:normalizeStyle(unref(ii))},[_hoisted_1$z,createBaseVNode("div",{class:"at_popup__list",ref_key:"listRef",ref:It},[(openBlock(!0),createElementBlock(Fragment,null,renderList(Xt.value,(Xr,as)=>(openBlock(),createElementBlock("div",{key:as,class:"at_popup__group"},[Xt.value.length>1||Xr.name!=="\u5176\u4ED6"?(openBlock(),createElementBlock("div",_hoisted_2$x,toDisplayString(Xr.name),1)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$w,[(openBlock(!0),createElementBlock(Fragment,null,renderList(Xr.items,(ls,ms)=>(openBlock(),createElementBlock("div",{key:ls.uid,class:normalizeClass({at_popup__user:!0,"at_popup__user--selected":Qn(as,ms)}),onClick:Ah=>eo(ls),onMouseover:Ah=>Xn(as,ms)},[createBaseVNode("div",_hoisted_5$a,[createBaseVNode("img",{src:ls.avatar},null,8,_hoisted_6$5)]),createBaseVNode("div",_hoisted_7$5,[createBaseVNode("div",{class:"at_popup__user-name",innerHTML:ls.name},null,8,_hoisted_8$5),createBaseVNode("div",_hoisted_9$5,toDisplayString(ls.fans),1)])],42,_hoisted_4$f))),128))])]))),128))],512)],4)),[[vShow,Rt.value]])}});function createAt(me){return createApp(_sfc_main$d,me)}class at{constructor({container:Le,onSelect:wt,mid:$t,lineHeight:kt,onVisiblaChange:It}){this.symbol="@",this.maxlength=16,this.app=null,this.instance=null,this.check=Pt=>Pt.length===2&&Pt[1]===`
`?!0:!/\s/.test(Pt),this.app=createAt({mid:$t,onSelect:Pt=>wt({type:"at",data:Pt}),onVisiblaChange:Pt=>It("at",Pt),lineHeight:kt});const Rt=document.createElement("div");this.instance=this.app.mount(Rt),Le.appendChild(Rt.firstElementChild)}destroy(){this.instance=null,this.app.unmount(),this.app=null}}var CTRLS={at};let blurTimer=null;const DEFAULT_PAYLOAD={visible:-1,data:""},ctrlManager={},_setCtrls=(me,Le)=>{ctrlManager[me]=Le},_getCtrls=me=>me&&ctrlManager[me]||null,_getElementCtrls=me=>{var Le;return _getCtrls((Le=me==null?void 0:me._inputHelper)==null?void 0:Le.id)},_match=(me,Le,wt)=>{const $t={ctrl:null,data:"",original:""},kt=_getElementCtrls(me);if(!kt)return $t;for(let It=0;It<kt.length;It++){const Rt=kt[It],Pt=Le.substring(0,wt),Ft=Pt.lastIndexOf(Rt.symbol);if(Ft>-1){const Ut=Pt.substring(Ft);if(Ut.length<=Rt.maxlength&&Rt.check(Ut))return $t.ctrl=Rt,$t.data=Ut.slice(Rt.symbol.length).trim(),$t}}return $t},_trigger=(me,Le)=>{const wt=_getElementCtrls(me.target);!wt||wt.forEach($t=>{var kt,It;(It=(kt=$t.instance).trigger)==null||It.call(kt,me,Le||DEFAULT_PAYLOAD)})},_scan=me=>{const Le=me.target,{start:wt,end:$t,position:kt}=getCursorPosition(Le,!0);if(wt.index===$t.index&&wt.offset===$t.offset){const It=Le.childNodes[wt.index];if((It==null?void 0:It.nodeType)===3){const{ctrl:Rt,data:Pt}=_match(Le,It.textContent,$t.offset);Rt?(clearTimeout(blurTimer),Rt.instance.trigger(me,{visible:1,position:kt,data:Pt})):_trigger(me,{visible:0,data:""})}else _trigger(me,{visible:0,data:""})}},_onblur=me=>{blurTimer=setTimeout(()=>{_trigger(me,{visible:0,data:""})},200)},_onkeydown=me=>{_trigger(me,{visible:-1,position:{left:0,top:0},data:""})},_onkeyup=me=>{if([37,39].indexOf(me.keyCode)>-1){_scan(me);return}},_eventMap={input:_scan,click:_scan,focus:_scan,blur:_onblur,keydown:_onkeydown,keyup:_onkeyup},_addEventListener=me=>{Object.keys(_eventMap).forEach(Le=>{me.addEventListener(Le,_eventMap[Le])})},_removeEventListener=me=>{Object.keys(_eventMap).forEach(Le=>{me.removeEventListener(Le,_eventMap[Le])})},watch=(me,Le={mid:0,container:null,ctrls:[],offset:{x:0,y:0},lineHeight:0,onSelect:()=>{},onVisiblaChange:wt=>{}})=>{const wt=me._inputHelper.id,$t=[];return Le.ctrls.forEach(kt=>{const It=CTRLS[kt];It&&$t.push(new It({mid:Le.mid,container:Le.container,onSelect:Le.onSelect||(({type:Rt,data:Pt})=>{console.warn(`on-select: type-${Rt}`,Pt)}),lineHeight:Le.lineHeight,onVisiblaChange:Le.onVisiblaChange}))}),_addEventListener(me),_setCtrls(wt,$t),()=>{for(;$t.length;)$t.pop().destroy();delete ctrlManager[wt],_removeEventListener(me)}};let id=0;const install=(me,Le)=>{var wt;Le.container||(Le.container=me.parentElement.parentElement),(wt=Le.ctrls)!=null&&wt.length&&(me._inputHelper={id:++id,unwatch:null},me._inputHelper.unwatch=watch(me,Le))},inputHelper={mounted(me,Le){const wt=Le.value;install(me,{...wt})},beforeUnmount(me){!me._inputHelper||me._inputHelper.unwatch()}},directive=me=>{mouseEvent(me)};var style="";const Emoji=defineComponent({name:"DynamicRichTextareaHighlightNode",props:{data:{type:Object,default:()=>({})}},setup({data:me}){return()=>createVNode("img",{class:"dynamic_rich_textarea_emoji",src:me.data.src,alt:me.data.text,"data-length":me.data.text.length,"data-data":JSON.stringify(me)},null)}}),Highlight=defineComponent({name:"DynamicRichTextareaHighlightNode",props:{data:{type:Object,default:()=>({})}},setup({data:me}){return()=>createVNode("span",{class:"dynamic_rich_textarea_highlight","data-length":me.data.text.length,"data-data":JSON.stringify(me),contenteditable:!1},[me.text])}}),deepClone=me=>JSON.parse(JSON.stringify(me));var RichTextarea=defineComponent({name:"DynamicRichTextarea",directives:{"input-helper":inputHelper},components:{Emoji,Highlight},props:{placeholder:{type:String,default:"\u8BF7\u8F93\u5165\u5185\u5BB9"},defaultValue:{type:String,default:""},defaultNodes:{type:Array,default:()=>[]},enableAt:{type:Boolean,default:!0},enableHt:{type:Boolean,default:!0},maxlength:{type:[String,Number],default:-1},height:{type:[String,Number],default:100},fontSize:{type:[String,Number],default:14},lineHeight:{type:[String,Number],default:22},beforeInsert:{type:Function,default:null}},emits:["change"],setup(me,{emit:Le,expose:wt}){var iu;const{userInfo:$t}=storeToRefs(useUserInfoStore()),kt=reactive({active:!1,syncOn:!1,value:"",nodes:{passive:[],positive:[],real:[]},position:{start:{index:0,offset:0},end:{index:0,offset:0}},history:{steps:[],index:-1},disableState:{inputprev:!1,inputcurr:!1,inputnext:!1,save:!1,linefeed:!1,backspace:!1}}),It=Zr=>{var ss;return((ss=kt.nodes.positive[0])==null?void 0:ss.type)==="text"?Zr:Zr-1},Rt=computed(()=>kt.position.start.index),Pt=computed(()=>kt.nodes.positive[Rt.value]||null),Ft=computed(()=>kt.nodes.real[kt.position.start.index]||null),Ut=computed(()=>{var Zr;return kt.nodes.real.length?kt.nodes.real.length>1||((Zr=kt.nodes.real[0])==null?void 0:Zr.nodeType)!==3?!1:!getNodeText(kt.nodes.real[0]).length:!!me.defaultValue||!me.defaultNodes.length}),Xt=computed(()=>Ut.value?!0:kt.position.start.index!==0?!1:Pt.value?!(Pt.value.type!=="text"||kt.position.start.offset>0):!0),Jt=computed(()=>{var ss;if(Ut.value||((ss=Ft.value)==null?void 0:ss.nodeType)!==3)return!0;const Zr=getNodeText(Ft.value);return!(kt.position.end.offset<Zr.length-1)}),ii=computed(()=>{const Zr=Number(me.maxlength);return Zr<=0?!1:Zr===kt.value.length});watch$1(()=>kt.nodes.positive,Zr=>{kt.value=degradeRichTextareaNodes2Text(Zr),Le("change",{value:kt.value,nodes:Zr.reduce((ss,kh)=>{const bh=deepClone(kh);return(bh.type!=="text"||bh.text)&&ss.push(bh),ss},[])}),xh()},{deep:!0});const Ni=ref(null),Vi=ref(null),zi=ref(null);wt({refresh:ns,focus:Ah,insert:Xr,clear:so});const Xn=()=>{kt.active&&ao()};onMounted(async()=>{window.addEventListener("mouseup",Xn),await initEmoji(),ns({value:me.defaultValue,nodes:me.defaultNodes})}),onBeforeUnmount(()=>{window.removeEventListener("mouseup",Xn)});const Qn=computed(()=>{const Zr=["dynamic_rich_textarea--inner"];return Ut.value&&Zr.push("empty"),Zr.join(" ")}),eo={height:`${me.height}px`},no={fontSize:`${me.fontSize}px`,lineHeight:`${me.lineHeight}px`,minHeight:`${me.lineHeight}px`},to=[];me.enableAt&&to.push("at");const oo={mid:(iu=$t.value)==null?void 0:iu.mid,container:null,ctrls:to,onSelect:wh,lineHeight:me.lineHeight,onVisiblaChange:Mh};function ao(){ro(),Fo()}function ro(){var Zr;kt.nodes.real=Array.from(((Zr=Vi.value)==null?void 0:Zr.childNodes)||[]).filter(ss=>ss.nodeType===3?!!ss.textContent:!0)}function Fo(){const{start:Zr,end:ss,position:kh}=getCursorPosition(Vi.value,!0);rs(Zr,ss),Qr(kh)}function Qr({top:Zr}){var bh;if(!Ni.value)return;const{scrollTop:ss,offsetHeight:kh}=Ni.value;if(((bh=Ft.value)==null?void 0:bh.nodeType)===3){const Ih=getNodeText(Ft.value),Fh=kt.position.start.offset-1;Ih[Fh]===LINE_FEED&&(Zr+=me.lineHeight)}ss+kh<Zr+43&&(Ni.value.scrollTop=Zr+43)}const es=debounce(async function(Zr){await ls(),Zr==null||Zr()},80,!1);async function ns({value:Zr,nodes:ss}){var kh;ss!=null&&ss.length?kt.nodes.positive=mergeTextNodes(deepClone(ss))[0]:kt.nodes.positive=await upgradeText2RichTextareaNodes(Zr),kt.history.index=-1,kt.history.steps=[],rs({index:Math.max(kt.nodes.passive.length-1,0),offset:((kh=Pt.value)==null?void 0:kh.text.length)||0}),await ls()}async function so(){kt.nodes.passive.length!==0&&(kt.nodes.positive=[],rs({index:0,offset:1}),await ls(),ms())}function gr(Zr){return Zr.reduce((ss,{type:kh,data:bh})=>{const Ih=getRichTextareaNode({type:kh,data:bh});return Ih&&ss.push(Ih),ss},[])}async function Xr(...Zr){ii.value||(await as(...gr(Zr)),Ah())}async function as(...Zr){const ss=kt.position.start.index;if(me.beforeInsert&&(Zr=me.beforeInsert(Zr,{nodes:deepClone(kt.nodes.positive),index:ss})||Zr),!Zr.length)return;const{nodes:kh,position:bh}=insertNodesIntoNodes({oldNodes:{positive:deepClone(kt.nodes.positive),real:kt.nodes.real},position:kt.position,newPositiveNodesSlice:Zr});kt.nodes.positive=kh,rs(bh.start,bh.end),await ls(),ms()}async function ls(){kt.syncOn=!0,kt.nodes.passive=deepClone(kt.nodes.positive),await nextTick(),Vi.value.innerHTML=zi.value.innerHTML,kt.syncOn=!1,ro()}function ms(){const Zr=window.getSelection();if(!!Zr)try{if(!Ft.value){Zr.collapse(Vi.value,kt.position.start.index);return}if(Ft.value.nodeType!==3){Zr.collapse(Vi.value,kt.position.start.index);return}const ss=getNodeText(Ft.value).length;Zr.collapse(Ft.value,Math.min(kt.position.start.offset,ss))}catch(ss){console.log(ss)}}function Ah(){var Zr;(Zr=Vi.value)==null||Zr.focus(),ms()}function rs(Zr,ss){Zr.index=Math.max(0,Zr.index),ss=ss!=null?ss:Zr,ss.index=Math.max(0,ss.index),kt.position.start=Zr,kt.position.end={...ss}}function us(Zr){if(Ut.value){Zr(),ms();return}if(Xt.value&&Jt.value){setClipboardData(kt.value),so(),Zr();return}Wh()}function xh(){if(kt.disableState.save){kt.disableState.save=!1;return}const{steps:Zr,index:ss}=kt.history;ss===MAX_SAVE_STEPS-1?Zr.shift():kt.history.index=ss+1,kt.history.steps=[...Zr.splice(0,kt.history.index),deepClone({nodes:kt.nodes.positive,position:kt.position})]}async function Eh(Zr){let{index:ss}=kt.history;const kh=kt.history.steps;if(kh.length===1)return;if(Zr){if(ss===kh.length-1)return;++ss}else{if(ss===0)return;--ss}kt.history.index=ss;const{nodes:bh,position:Ih}=deepClone(kh[kt.history.index]);kt.nodes.positive=bh,kt.position=Ih,kt.disableState.save=!0,await ls(),ms()}function $h(Zr){Zr()}async function ts(){let Zr=Rt.value;if(Zr<0)return;let ss=-1;for(;Zr>=0;Zr--){const kh=kt.nodes.positive[Zr];if(kh.type==="text"&&(ss=kh.text.lastIndexOf(LINE_FEED),ss>-1))break}ss===-1?(Zr=0,ss=1):Zr===0&&++ss,kt.nodes.positive[0].type!=="text"&&Zr++,vh({index:Zr,offset:ss}),await ls(),ms()}async function ds(){var bh;if(Ut.value||kt.disableState.linefeed)return;if(((bh=Pt.value)==null?void 0:bh.type)!=="text"){await Xr({type:"text",data:{text:LINE_FEED.repeat(2)}});return}let Zr=createTrimTextNode(Ft.value);const ss=0,kh=insertStrIntoStr(Zr.text,kt.position.start.offset-ss,LINE_FEED);kt.nodes.positive[Rt.value].text=kh,rs({index:kt.position.start.index,offset:kt.position.start.offset+1}),await ls(),Zr=createTrimTextNode(Ft.value),Zr.text!==Pt.value.text&&setNodeText(Ft.value,Zr.revert(Pt.value.text)),ms()}function vh({index:Zr,offset:ss}){if(Rt.value<0||!kt.nodes.positive[Zr])return;const{type:kh,text:bh}=kt.nodes.positive[Zr];if(Zr===kt.position.start.index){if(kh!=="text"||ss===kt.position.start.offset)return;const Qh=kt.position.start.offset-ss,lu=spliceStr(bh,ss,Qh);kt.nodes.positive[Zr].text=lu,rs({index:Zr,offset:ss});return}const Ih=It(Zr),Fh=kt.nodes.positive[Ih];if(kh!=="text")if(Fh.type==="text"){const Qh=Fh.text.length-ss;Fh.text=spliceStr(Fh.text,ss,Qh),kt.nodes.positive.splice(Ih+1,Rt.value-Ih)}else kt.nodes.positive.splice(Ih,Rt.value-Ih+1);else if(Pt.value.text=spliceStr(bh,0,kt.position.start.offset),Fh.type==="text"){const Qh=Fh.text.length-ss;Fh.text=spliceStr(Fh.text,ss,Qh),kt.nodes.positive.splice(Ih+1,Rt.value-Ih)}else kt.nodes.positive.splice(Ih,Rt.value-Ih+1);rs({index:Zr,offset:ss})}function wh({type:Zr,data:ss}){switch(Zr){case"at":Ch(ss);break}}async function Ch(Zr){vh({index:kt.position.start.index,offset:kt.position.start.offset-(Zr.keyword.length+1)}),await Xr({type:"at",data:{text:`@${Zr.uname}`,rid:Zr.uid}},{type:"text",data:{text:" "}}),Fo()}function Mh(Zr,ss){kt.disableState.linefeed=ss}async function zh(Zr){if(!Zr.data){Lh();return}const kh=kt.position.start.index,bh=kt.nodes.positive[kh];if(ao(),!bh)qh(Zr.data);else{const Ih=bh.type==="text",Fh=bh.type==="highlight";Ih?Th():Fh?kt.nodes.positive.splice(kh,0,getRichTextareaNode({type:"text",data:{text:Zr.data}})):eu(Zr.data)}}function Wh(){setTimeout(()=>{if(Ut.value){so();return}},100)}function Lh(){if(ao(),Ut.value){so();return}kt.nodes.positive=restoreFromRealNodes(kt.nodes.real),es(ms)}async function eu(Zr){if(kt.disableState.inputprev)return;const ss=kt.position.start.index;kt.nodes.positive.splice(ss,0,getRichTextareaNode({type:"text",data:{text:Zr}})),await ls(),ms()}function Th(){if(kt.disableState.inputcurr)return;const Zr=Ft.value,ss=createTrimTextNode(Zr),kh=kt.position.start.index;kt.nodes.positive[kh].text=ss.text}async function qh(Zr){kt.disableState.inputnext||await Xr({type:"text",data:{text:Zr}})}function Kh(Zr){const ss=()=>{Zr.preventDefault()};setTimeout(ao,20);const kh=Zr.ctrlKey||Zr.metaKey,bh=Zr.shiftKey;if(ii.value&&!kh&&![8].includes(Zr.keyCode))return ss();switch(Zr.keyCode){case 8:if(Xt.value)return Jt.value&&so(),ss();kh?(ss(),ts()):Wh();break;case 13:ss(),bh||ds();break;case 37:case 38:Xt.value&&ss();break;case 39:case 40:break;case 46:$h(ss);break;case 88:kh&&us(ss);break;case 90:kh&&(ss(),Eh(bh));break}}function Jh(Zr,ss){if(ss==="start"){const kh=kt.position.start.index,bh=kt.nodes.positive[kh];if(!bh){kt.disableState.inputnext=!0;return}bh.type==="text"?kt.disableState.inputcurr=!0:kt.disableState.inputprev=!0;return}if(ss==="end"){if(kt.disableState.inputcurr){kt.disableState.inputcurr=!1,Zr.data&&Th();return}if(kt.disableState.inputprev){kt.disableState.inputprev=!1,Zr.data&&eu(Zr.data);return}kt.disableState.inputnext&&(kt.disableState.inputnext=!1,Zr.data&&qh(Zr.data))}}function tu(Zr){Zr.target===Ni.value&&Ah()}async function Yh(Zr){if(Zr.stopPropagation(),Zr.preventDefault(),ii.value)return;let kh=Zr.clipboardData.getData("Text").trim()+" ";me.maxlength>0&&kt.value.length+kh.length>me.maxlength&&(kh=kh.slice(0,Number(me.maxlength)-kt.value.length)),as(...await upgradeText2RichTextareaNodes(kh))}function nu(Zr){switch(Zr.type){case"text":return Zr.text;case"highlight":return createVNode(Highlight,{data:Zr},null);case"emoji":return createVNode(Emoji,{data:Zr},null);default:return Zr.text}}return()=>createVNode("div",{class:"dynamic_rich_textarea",ref:Zr=>Ni.value=Zr,style:eo,onClick:tu},[withDirectives(createVNode("div",{ref:Zr=>Vi.value=Zr,class:Qn.value,style:no,placeholder:me.placeholder,onInput:zh,onCompositionstart:Zr=>Jh(Zr,"start"),onCompositionend:Zr=>Jh(Zr,"end"),onKeydown:Kh,onPaste:Yh,onMouseup:Zr=>{Zr.stopPropagation(),ao()},onBlur:()=>{kt.active=!1},onFocus:()=>{kt.active=!0},contenteditable:!0},null),[[resolveDirective("input-helper"),oo]]),kt.syncOn?createVNode("div",{ref:Zr=>zi.value=Zr,class:"dynamic_rich_textarea--inner-shadow"},[kt.nodes.passive.map(nu)]):null])}}),Popover_vue_vue_type_style_index_0_lang="";const _sfc_main$c=defineComponent({__name:"Popover",props:{visible:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},trigger:{type:String,default:"click"},autohide:{type:Boolean,default:!0},beforeAutohide:{type:Function,default:null},width:{type:[String,Number],default:300},borderRadius:{type:[String,Number],default:8},boxShadow:{type:String,default:"0 3px 5px 0 rgb(0 0 0 / 17%)"},placement:{type:String,default:"bottom-start"},offset:{type:Object,default:()=>({x:0,y:0})},noArrow:{type:Boolean,default:!1},mutexId:{type:String,default:""}},emits:["update:visible"],setup(me,{emit:Le}){const wt=me,$t=mitt(),{getZIndex:kt}=usePopupZIndexStore(),It=reactive({ref:null,mutexTs:0,zIndex:0,position:{left:0,top:0},listeners:[]}),Rt=Fo=>{Le("update:visible",Fo)},Pt=computed(()=>{var es,ns;const Fo=((es=wt.offset)==null?void 0:es.x)||0,Qr=Math.max(Number(wt.width),0);switch(wt.placement){case"bottom":return It.position.left+Fo-(Qr-(((ns=It.ref)==null?void 0:ns.offsetWidth)||0))/2;case"bottom-start":default:return It.position.left+Fo}}),Ft=computed(()=>{var es,ns;const Fo=((es=wt.offset)==null?void 0:es.y)||0,Qr=((ns=It.ref)==null?void 0:ns.offsetHeight)||0;switch(wt.placement){case"bottom":return It.position.top+(Fo||Qr);case"bottom-start":default:return It.position.top+Fo}}),Ut=computed(()=>{const Fo=Math.max(Number(wt.width),0);return{left:Pt.value+"px",top:Ft.value+"px",width:`${Fo}px`,zIndex:It.zIndex,borderRadius:`${wt.borderRadius}px`,boxShadow:wt.boxShadow}}),Xt=computed(()=>{switch(wt.placement){case"bottom":return{left:"50%",transform:"translateX(-50%) rotate(45deg)"};case"bottom-end":return{right:"12px"};case"bottom-start":default:return{left:"22px"}}});watch$1(()=>wt.visible,Fo=>{if(Fo&&(It.zIndex=kt(),wt.mutexId)){const Qr=Date.now();It.mutexTs=Qr,$t.emit("visible",{id:wt.mutexId,ts:Qr})}});const Jt=ref(null),ii=ref(null),Ni=ref(null);let Vi=null;const zi=async()=>{var so,gr;await nextTick();const Fo=Jt.value,Qr=(so=ii.value)==null?void 0:so.firstElementChild,es=(gr=Ni.value)==null?void 0:gr.firstElementChild;if(!es||!Qr||!Fo)return;const ns=Fo.parentElement;if(It.ref=es,ns.replaceChild(es,Fo),Fo.replaceChild(Qr,ii.value),Fo.removeChild(Ni.value),Vi=()=>{Fo.replaceChild(ii.value,Qr),ii.value.appendChild(Qr),Fo.appendChild(Ni.value);const Xr=document.createElement("div");ns.replaceChild(Xr,es),Ni.value.appendChild(es),ns.replaceChild(Fo,Xr)},wt.relative)getComputedStyle(es).position==="static"&&(es.style.position="relative",Vi=composeFunc(()=>{es.style.position=""},Vi)),Fo.style.cursor="default",es.appendChild(Fo),Vi=composeFunc(()=>{Fo.style.cursor="",es.removeChild(Fo)},Vi);else{document.body.appendChild(Fo);const{x:Xr,y:as}=es.getBoundingClientRect(),ls=getScrollParent(es);It.position.left=Xr+ls.scrollLeft,It.position.top=as+ls.scrollTop}switch(wt.trigger){case"click":no(es,"click",Xr=>{wt.relative&&Xr.target!==es||eo(Xr)}),wt.autohide&&no(window,"click",Xr=>{!wt.visible||typeof wt.beforeAutohide=="function"&&wt.beforeAutohide(Xr)||eventPathInclude(Xr,Jt)||eo(Xr)});break;case"hover":no(es,"mouseenter",()=>{Rt(!0)}),no(es,"mouseleave",()=>{Rt(!1)});break}},Xn=()=>{!wt.mutexId||$t.off("visible",Qn)},Qn=({id:Fo,ts:Qr})=>{wt.visible&&Fo===wt.mutexId&&Qr!==It.mutexTs&&eo(null)},eo=Fo=>{var Qr;wt.autohide&&((Qr=Fo==null?void 0:Fo.stopPropagation)==null||Qr.call(Fo)),Rt(!wt.visible)},no=(Fo,Qr,es)=>{Fo.addEventListener(Qr,es),It.listeners.push({el:Fo,eventName:Qr,cb:es})},to=()=>{for(;It.listeners.length;){const{el:Fo,eventName:Qr,cb:es}=It.listeners.pop();Fo.removeEventListener(Qr,es)}},oo=()=>{to(),Xn(),Vi()},ao=()=>{!wt.mutexId||$t.on("visible",Qn)};return onMounted(()=>{zi(),ao()}),onBeforeUnmount(oo),(Fo,Qr)=>(openBlock(),createBlock(Transition,{name:"base_popover--transition"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{role:"tooltip",class:"base_popover",style:normalizeStyle(unref(Ut)),ref_key:"elRef",ref:Jt},[me.noArrow?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:"base_popover--arrow",style:normalizeStyle(unref(Xt))},null,4)),createBaseVNode("div",{class:"base_popover--default",ref_key:"defaultRef",ref:ii},[renderSlot(Fo.$slots,"default")],512),createBaseVNode("div",{class:"base_popover--reference",ref_key:"referenceRef",ref:Ni},[renderSlot(Fo.$slots,"reference")],512)],4),[[vShow,me.visible]])]),_:3}))}});var EmojiPopover_vue_vue_type_style_index_0_lang="";const _hoisted_1$y={class:"v_emoji"},_hoisted_2$w={class:"v_emoji--content"},_hoisted_3$v={class:"v_emoji--title"},_hoisted_4$e={class:"v_emoji--list"},_hoisted_5$9=["onClick"],_hoisted_6$4=["src","alt"],_hoisted_7$4={key:1},_hoisted_8$4={class:"v_emoji--footer"},_hoisted_9$4={class:"v_emoji--footer--left"},_hoisted_10$2=["onClick"],_hoisted_11$1=["src","alt"],_hoisted_12$1={class:"v_emoji--footer--right"},_hoisted_13$1={class:"v_emoji--pagi"},_sfc_main$b=defineComponent({__name:"EmojiPopover",props:{visible:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},placement:{type:String,default:"bottom-start"},offset:{type:Object,default:()=>({x:0,y:0})},beforeAutohide:{type:Function,default:null},mutexId:{type:String,default:""}},emits:["update:visible","select"],setup(me,{emit:Le}){const $t=ref(!1),kt=ref("EMPTY"),It=reactive([]),Rt=ref(0),Pt=ref(0),Ft=computed(()=>Pt.value?{transform:`translateX(${-Pt.value*270}px)`}:{}),Ut=computed(()=>It.length?It[Rt.value]:{}),Xt=computed(()=>Ut.value.text||""),Jt=computed(()=>(Ut.value.emote||[]).map(Qn=>{let eo="small",no=Qn.url;return Qn.meta.size===2?(eo="middle",no=formatImg(Qn.url,{w:112,h:112})):Qn.type!==4?no=formatImg(Qn.url,{w:64,h:64}):eo="large",{src:no,size:eo,text:Qn.text,id:Qn.id,type:Qn.type}}));watch$1($t,Xn=>{Le("update:visible",Xn)}),onMounted(()=>{setTimeout(ii,1e3)});async function ii(){if(kt.value!=="FETCHING"){kt.value="FETCHING";try{It.push(...(await initEmojiPackage()||[]).map((Xn,Qn)=>({...Xn,src:formatImg(Xn.url,{w:48,h:48}),active:Rt.value===Qn}))),kt.value="FETCHED"}catch(Xn){kt.value="ERROR",console.log("error",Xn)}}}function Ni(Xn){Xn!==Rt.value&&(It[Rt.value].active=!1,Rt.value=Xn,It[Rt.value].active=!0)}function Vi(Xn){Le("select",Xn)}function zi(Xn){Pt.value+Xn>=Math.ceil(It.length/5)||Pt.value+Xn<0||(Pt.value+=Xn)}return events.on("hidePopover",()=>{$t.value=!1}),(Xn,Qn)=>(openBlock(),createBlock(_sfc_main$c,{visible:$t.value,"onUpdate:visible":Qn[2]||(Qn[2]=eo=>$t.value=eo),width:"380",relative:me.relative,"mutex-id":me.mutexId,placement:me.placement,"before-autohide":me.beforeAutohide,offset:me.offset},{reference:withCtx(()=>[renderSlot(Xn.$slots,"reference")]),default:withCtx(()=>[createBaseVNode("div",_hoisted_1$y,[createBaseVNode("div",_hoisted_2$w,[createBaseVNode("div",_hoisted_3$v,toDisplayString(unref(Xt)),1),createBaseVNode("ul",_hoisted_4$e,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(Jt),(eo,no)=>(openBlock(),createElementBlock("li",{key:no,class:normalizeClass(["v_emoji--list--item",{"v_emoji--list--item":!0,[eo.size]:!0}]),onClick:withModifiers(to=>Vi(eo),["stop"])},[eo.type!==4?(openBlock(),createElementBlock("img",{key:0,src:eo.src,alt:eo.text},null,8,_hoisted_6$4)):(openBlock(),createElementBlock("span",_hoisted_7$4,toDisplayString(eo.src),1))],10,_hoisted_5$9))),128))])]),createBaseVNode("div",_hoisted_8$4,[createBaseVNode("div",_hoisted_9$4,[createBaseVNode("div",{class:"v_emoji--pkgs",style:normalizeStyle(unref(Ft))},[(openBlock(!0),createElementBlock(Fragment,null,renderList(It,(eo,no)=>(openBlock(),createElementBlock("div",{key:no,class:normalizeClass({"v_emoji--pkg":!0,active:eo.active}),onClick:withModifiers(to=>Ni(no),["stop"])},[createBaseVNode("img",{src:eo.src,alt:eo.text},null,8,_hoisted_11$1)],10,_hoisted_10$2))),128))],4)]),createBaseVNode("div",_hoisted_12$1,[createBaseVNode("div",_hoisted_13$1,[createBaseVNode("div",{class:"v_emoji--pagi--prev",onClick:Qn[0]||(Qn[0]=withModifiers(eo=>zi(-1),["stop"]))}),createBaseVNode("div",{class:"v_emoji--pagi--next",onClick:Qn[1]||(Qn[1]=withModifiers(eo=>zi(1),["stop"]))})])])])])]),_:3},8,["visible","relative","mutex-id","placement","before-autohide","offset"]))}});var CommonCard_vue_vue_type_style_index_0_lang="";const _hoisted_1$x={class:"dynamic_preview_common_card"},_hoisted_2$v={class:"dynamic_preview_common_card--cover"},_hoisted_3$u={class:"dynamic_preview_common_card--content"},_sfc_main$a=defineComponent({__name:"CommonCard",props:{data:{type:Object,default:()=>({cover:"",nodes:[]})}},setup(me){return(Le,wt)=>(openBlock(),createElementBlock("div",_hoisted_1$x,[createBaseVNode("div",_hoisted_2$v,[createVNode(unref(VImg),{class:"dynamic_card_archive--cover--img",src:me.data.cover.replace("pre-",""),width:80,height:80,rule:"1c"},null,8,["src"])]),createBaseVNode("div",_hoisted_3$u,[createVNode(unref(RichText),{nodes:me.data.nodes,lines:"4",unfold:""},null,8,["nodes"])])]))}});var VideoCard_vue_vue_type_style_index_0_lang="";const _hoisted_1$w={class:"dynamic_preview_video_card"},_hoisted_2$u={class:"dynamic_preview_video_card--cover"},_hoisted_3$t={class:"dynamic_preview_video_card--content"},_hoisted_4$d={class:"dynamic_preview_video_card--title"},_hoisted_5$8={class:"dynamic_preview_video_card--desc"},_hoisted_6$3={class:"dynamic_preview_video_card--stat"},_hoisted_7$3={key:0,class:"dynamic_preview_video_card--stat--item"},_hoisted_8$3={key:1,class:"dynamic_preview_video_card--stat--item"},_hoisted_9$3={class:"dynamic_preview_video_card--stat--item"},_sfc_main$9=defineComponent({__name:"VideoCard",props:{data:{type:Object,default:()=>({cover:"",title:"",desc:"",stat:{play:"",danmaku:"",vt:""},enable_vt:0})}},setup(me){return(Le,wt)=>(openBlock(),createElementBlock("div",_hoisted_1$w,[createBaseVNode("div",_hoisted_2$u,[createVNode(unref(VImg),{class:"dynamic_card_archive--cover--img",src:me.data.cover.replace("pre-",""),width:142,height:80,rule:"1c"},null,8,["src"])]),createBaseVNode("div",_hoisted_3$t,[createBaseVNode("div",_hoisted_4$d,toDisplayString(me.data.title),1),createBaseVNode("div",_hoisted_5$8,toDisplayString(me.data.desc),1),createBaseVNode("div",_hoisted_6$3,[me.data.enable_vt?(openBlock(),createElementBlock("div",_hoisted_7$3,[createVNode(unref(PlayTime)),createTextVNode(" "+toDisplayString(me.data.stat.play||"0"),1)])):(openBlock(),createElementBlock("div",_hoisted_8$3,[createVNode(unref(IcoPlay)),createTextVNode(" "+toDisplayString(me.data.stat.play||"0"),1)])),createBaseVNode("div",_hoisted_9$3,[createVNode(unref(IcoDanmaku)),createTextVNode(" "+toDisplayString(me.data.stat.danmaku||"0"),1)])])])]))}}),_hoisted_1$v={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$t=createBaseVNode("path",{d:"M6.2 13.588v7.645c0 2.413 1.967 4.37 4.39 4.37h10.42c2.42 0 4.39-1.958 4.39-4.37v-7.645c0-2.412-1.967-4.37-4.39-4.37H10.59c-2.42 0-4.39 1.959-4.39 4.37Zm5.22-8.216 1.404 2.653h5.954l1.404-2.622a.702.702 0 0 1 .851-.33l.095.042c.31.163.446.526.332.845l-.042.095-1.054 1.97h.646c3.086 0 5.59 2.493 5.59 5.563v7.645c0 3.07-2.508 5.563-5.59 5.563H10.59c-3.087 0-5.59-2.493-5.59-5.563v-7.645c0-3.069 2.507-5.562 5.59-5.562l.653-.001-1.063-2.006a.693.693 0 0 1 .294-.939.702.702 0 0 1 .946.292Zm6.964 14.075H13.22c-.558 0-.913.521-.756 1.054.414 1.407 1.773 2.421 3.336 2.421 1.568 0 2.9-1.043 3.34-2.435.145-.458-.2-1.04-.756-1.04Zm-9.149-6.445a.593.593 0 0 0 .116.835l2.541 1.913-2.474 1.705a.594.594 0 0 0-.2.745l.048.084c.17.244.49.322.75.199l.085-.049 3.168-2.181.052-.041.073-.08a.593.593 0 0 0-.116-.835l-3.202-2.41a.603.603 0 0 0-.841.115Zm13.13 0a.603.603 0 0 0-.749-.172l-.092.057-3.202 2.41a.593.593 0 0 0-.116.835l.04.047.058.054 3.195 2.201c.272.188.646.12.835-.15a.593.593 0 0 0-.151-.829l-2.476-1.705 2.542-1.913a.593.593 0 0 0 .169-.753l-.053-.082Z",fill:"#9499A0"},null,-1),_hoisted_3$s=[_hoisted_2$t];function render$n(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$v,[..._hoisted_3$s])}var IcoEmoji={render:render$n};const _hoisted_1$u={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$s=createBaseVNode("path",{d:"M16.822 5.263c6.37 0 10.48 5.343 9.486 11.06-.497 2.858-2.138 4.66-4.843 5.303a.673.673 0 0 1-.534-.098c-.453.06-.93.049-1.391-.09-.746-.226-1.164-1.256-1.223-1.711a3.42 3.42 0 0 1-.318.445c-.202.243-.449.47-.74.683a4.358 4.358 0 0 1-.998.536 3.44 3.44 0 0 1-1.252.22c-.62 0-1.178-.122-1.673-.365a3.677 3.677 0 0 1-1.251-.991c-.34-.417-.6-.92-.782-1.509a6.441 6.441 0 0 1-.271-1.912c0-.802.126-1.59.378-2.364a6.894 6.894 0 0 1 1.07-2.065 5.308 5.308 0 0 1 1.7-1.456c.673-.366 1.428-.549 2.261-.549.696 0 1.3.17 1.808.514.436.293.762.644.975 1.05.003.006.01-.008.02-.033l.034-.103.049-.193.009-.053c.038-.27.279-1.023.923-.952.645.071.626.734.573.991l-.62 2.997-.161.76-.122.603-.118.639c-.074.43-.138.859-.175 1.24l-.035.39c-.08 1.012-.042 1.758.62 2.005l.133.046c.136.043.332.092.583.107a.626.626 0 0 1 .216-.096c2.171-.515 3.42-1.886 3.825-4.22.855-4.918-2.653-9.48-8.156-9.48-5.786 0-9.928 4.2-9.928 9.595 0 4.98 4.374 9.18 9.241 9.18 3.901 0 5.982-.814 8.447-2.983a.675.675 0 1 1 .892 1.013c-2.707 2.382-5.103 3.32-9.339 3.32-5.601 0-10.59-4.792-10.59-10.53 0-6.136 4.742-10.944 11.277-10.944Zm-.65 6.537c-.603 0-1.126.157-1.574.47-.459.321-.852.73-1.179 1.229a5.685 5.685 0 0 0-.74 1.69 7.295 7.295 0 0 0-.247 1.857c0 .29.036.623.108 1 .07.369.197.717.379 1.045.178.322.42.587.727.799.3.206.686.31 1.163.31.687 0 1.268-.173 1.747-.517.488-.352.885-.791 1.19-1.319a6.296 6.296 0 0 0 .68-1.71c.146-.61.218-1.177.218-1.7a5.62 5.62 0 0 0-.123-1.173 2.986 2.986 0 0 0-.406-1.008 2.142 2.142 0 0 0-.753-.704c-.313-.179-.709-.269-1.19-.269Z",fill:"#9499A0"},null,-1),_hoisted_3$r=[_hoisted_2$s];function render$m(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$u,[..._hoisted_3$r])}var IcoAt={render:render$m},ForwardPublish_vue_vue_type_style_index_0_lang="";const _hoisted_1$t={class:"dynamic_forward_publish"},_hoisted_2$r={class:"dynamic_forward_publish--input"},_hoisted_3$q={class:"dynamic_forward_publish--preview"},_hoisted_4$c={class:"dynamic_forward_publish--preview--user"},_hoisted_5$7={class:"dynamic_forward_publish--preview--card"},_hoisted_6$2={class:"dynamic_forward_publish--control"},_hoisted_7$2={class:"dynamic_forward_publish--tools"},_hoisted_8$2=createTextVNode(" > "),_hoisted_9$2={class:"dynamic_forward_publish--headquarters"},_hoisted_10$1=["title"],_sfc_main$8=defineComponent({__name:"ForwardPublish",props:{version:{type:String,default:"lite",validator(me){return["lite","pro"].includes(me)}},defaultContent:{type:String,default:""},defaultContentNodes:{type:Array,default:()=>[]}},emits:["done","popover-visible-change"],setup(me,{expose:Le,emit:wt}){const{userInfo:kt}=storeToRefs(useUserInfoStore()),It=reactive({init:!1,publish:!1}),Rt=ref(""),Pt=reactive({id:0,name:"",requestId:"",fromSource:""}),Ft=reactive({value:"",nodes:[]}),Ut=reactive({tools:{emoji:{visible:!0,active:!1},at:{visible:!0,active:!1,config:{maxCount:20}}}}),Xt=ref(null),Jt=computed(()=>!!Ft.value),ii=computed(()=>getStringLength(Ft.value)),Ni=computed(()=>{const so=ii.value,gr=so>0,Xr=so>233;let as=so;return Xr&&(as=233-so),{visible:gr,text:as,heedful:Xr,title:"\u5168\u89D2\u5B57\u7B26\u8BA1\u6570\u4E3A1\u534A\u89D2\u5B57\u7B26\u8BA1\u6570\u4E3A0.5\uFF0C\u4E0D\u8DB31\u65F6\u8BB0\u4E3A1"}}),Vi=computed(()=>{var gr;const so=It.init||It.publish;return{text:"\u8F6C\u53D1",disabled:so||((gr=Ni.value)==null?void 0:gr.heedful)}}),zi=reactive({textarea:null});function Xn(so,gr){zi[so]=gr}function Qn(so,{nodes:gr}){let Xr=0,as={at:!1};const ls=Ut.tools.at.config.maxCount;gr.forEach(ms=>{if(ms.type==="highlight")switch(ms.data.type){case"at":Xr++;break}}),so.forEach((ms,Ah)=>{if(ms.type==="highlight")switch(ms.data.type){case"at":Xr===ls?(as.at=!0,so[Ah]=getRichTextareaTextNode(ms.text)):Xr++;break}}),as.at&&toastAsync({content:`\u6700\u591A\u652F\u6301@ ${ls}\u4F4D\u7528\u6237`})}function eo(so){const{value:gr,nodes:Xr}=so;Ft.value=gr,Ft.nodes=Xr,Ni.value.heedful&&toastAsync({content:"\u5DF2\u8D85\u51FA\u89C4\u5B9A\u5B57\u6570\u4E86\u54E6~"})}function no(so){so.type===4?oo({type:"text",data:{text:so.text}}):oo({type:"emoji",data:so})}async function to(so){var gr,Xr;switch((Xr=(gr=Ut.tools[so])==null?void 0:gr.config)!=null&&Xr.focus&&await ns(),so){case"at":oo({type:"text",data:{text:"@"}});break}}function oo(...so){zi.textarea.insert(...so)}function ao(){zi.textarea.refresh({nodes:[]}),Xt.value=null}async function ro(){if(Vi.value.disabled)return;It.publish=!0;const so=Xt.value.id;try{const gr=await createDynamic({nodes:Ft.nodes,topic:Pt,scene:4,uploadId:Rt.value,comment:1,repostSrc:{dynId:so}});toastAsync({content:"\u8F6C\u53D1\u6210\u529F"}),It.publish=!1,events.emit("syncDynamicState",{id:so,module:"stat",key:"forwardState",state:{offset:1}}),wt("done",{...gr}),ao()}catch(gr){It.publish=!1,toastAsync({content:gr.message})}}function Fo(){Rt.value=`${kt.value.mid||0}_${Math.floor(Date.now()/1e3)}_${Math.floor(Math.random()*1e4)}`}async function Qr(so){var gr;try{It.init=!0;const[{settings:Xr},{item:as}]=await Promise.all([getDynamicPublishConfig(),getDynamicForwardPreview(so.id||so.rid,so.type)]);if(!as)return It.init=!1,Promise.reject(new Error("Miss preview data"));(gr=so.defaultContent)!=null&&gr.length&&zi.textarea.refresh({nodes:[...so.defaultContent]}),Xt.value=as,Ut.tools.at.config.maxCount=Xr.max_at_count||20,Rt.value||Fo()}catch(Xr){console.log(Xr.message)}It.init=!1}async function es(){if(It.init||It.publish)return Promise.reject(new Error("loading..."));if(Jt.value&&!await alertAsync({content:`\u786E\u8BA4\u8981\u653E\u5F03\u53D1\u5E03\u5417
\u653E\u5F03\u540E\u5C06\u4E0D\u4F1A\u4FDD\u5B58`,cancelText:"\u53D6\u6D88",confirmText:"\u786E\u5B9A"}))return Promise.reject("cancel");ao()}async function ns(){await promiseTimeout(0),zi.textarea.focus()}return watch$1(Ut,so=>{const gr=so.tools.emoji.active;wt("popover-visible-change",gr)},{deep:!0}),Le({init:Qr,exit:es,focus:ns}),(so,gr)=>{const Xr=resolveComponent("VButton");return openBlock(),createElementBlock("div",_hoisted_1$t,[createBaseVNode("div",_hoisted_2$r,[createVNode(unref(RichTextarea),{ref:as=>Xn("textarea",as),placeholder:"\u5206\u4EAB\u81F3\u52A8\u6001","default-value":me.defaultContent,"default-nodes":me.defaultContentNodes,"before-insert":Qn,onChange:eo},null,8,["default-value","default-nodes"])]),createBaseVNode("div",_hoisted_3$q,[Xt.value?(openBlock(),createElementBlock(Fragment,{key:0},[createBaseVNode("div",_hoisted_4$c,"@"+toDisplayString(Xt.value.user.name),1),createBaseVNode("div",_hoisted_5$7,[Xt.value.type===1?(openBlock(),createBlock(_sfc_main$a,{key:0,data:Xt.value.common_card},null,8,["data"])):createCommentVNode("",!0),Xt.value.type===2?(openBlock(),createBlock(_sfc_main$9,{key:1,data:Xt.value.video_card},null,8,["data"])):createCommentVNode("",!0)])],64)):createCommentVNode("",!0)]),createBaseVNode("div",_hoisted_6$2,[createBaseVNode("div",_hoisted_7$2,[createVNode(_sfc_main$b,{visible:Ut.tools.emoji.active,"onUpdate:visible":gr[0]||(gr[0]=as=>Ut.tools.emoji.active=as),relative:"","mutex-id":"tool",offset:{x:-11,y:32},onSelect:no},{reference:withCtx(()=>[createBaseVNode("div",{class:normalizeClass({"dynamic_forward_publish--tools--item":!0,active:Ut.tools.emoji.active})},[createVNode(unref(IcoEmoji))],2),_hoisted_8$2]),_:1},8,["visible"]),createBaseVNode("div",{class:"dynamic_forward_publish--tools--item",onClick:gr[1]||(gr[1]=as=>to("at"))},[createVNode(unref(IcoAt))])]),createBaseVNode("div",_hoisted_9$2,[withDirectives(createBaseVNode("div",{class:normalizeClass({"dynamic_forward_publish--hint":!0,heedful:unref(Ni).heedful}),title:unref(Ni).title},toDisplayString(unref(Ni).text),11,_hoisted_10$1),[[vShow,unref(Ni).visible]]),createVNode(Xr,{class:"dynamic_forward_publish--action bd_radius_sm",disabled:unref(Vi).disabled,type:"pink",onClick:ro},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(Vi).text),1)]),_:1},8,["disabled"])])])])}}});var ForwardPopup_vue_vue_type_style_index_0_lang="";const _hoisted_1$s={class:"dynamic_forward_popup--header flex_between"},_hoisted_2$q=["textContent"],_hoisted_3$p=["onClick"],_hoisted_4$b={class:"dynamic_forward_popup--content"},_sfc_main$7=defineComponent({__name:"ForwardPopup",props:{active:{type:Boolean,default:!1}},setup(me,{expose:Le}){const wt=me,{userInfo:$t}=storeToRefs(useUserInfoStore()),kt=ref(!1),It=ref(!1),Rt=ref(null),Pt=ref(null),Ft=ref("\u8F6C\u53D1\u52A8\u6001"),Ut=async Xn=>{try{if(kt.value)return;kt.value=!0,await Pt.value.init(Xn),It.value=!0,Ni(Xn.rid&&!Xn.id),Rt.value.show(),Pt.value.focus(),kt.value=!1}catch(Qn){kt.value=!1,console.log(Qn)}},Xt=async()=>{It.value=!1;try{await Pt.value.exit(),Rt.value.hide()}catch(Xn){console.log(Xn)}},Jt=Xn=>{Rt.value.hide(),It.value=!1},ii=Xn=>{Xn?Rt.value.el.style.top="calc(50% - 130px)":Rt.value.el.style.top=""},Ni=Xn=>{Ft.value=Xn?"\u5206\u4EAB\u81F3\u52A8\u6001":"\u8F6C\u53D1\u52A8\u6001"},Vi=Xn=>{if(!!wt.active){if(!$t.value.isLogin){requestLogin("forwardPopup.onForwardDynamic");return}Ut(Xn)}};return events.on("forwardDynamic",Vi),onBeforeUnmount(()=>{events.off("forwardDynamic",Vi)}),Le({show:Ut,hide:Xt,closeDialog:()=>Xt(),isShowDialog:It}),(Xn,Qn)=>(openBlock(),createBlock(VPopup,{"custom-class":"dynamic_forward_popup",ref_key:"popupRef",ref:Rt,onWrapClick:Xt},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$s,[createBaseVNode("div",{class:"dynamic_forward_popup--title",textContent:toDisplayString(Ft.value)},null,8,_hoisted_2$q),createBaseVNode("div",{class:"dynamic_forward_popup--close",onClick:withModifiers(Xt,["stop"])},[createVNode(unref(IcoClose$1))],8,_hoisted_3$p)]),createBaseVNode("div",_hoisted_4$b,[createVNode(_sfc_main$8,{ref_key:"publishRef",ref:Pt,onDone:Jt,onPopoverVisibleChange:ii},null,512)])]),_:1},512))}}),_hoisted_1$r={viewBox:"0 0 22 22",fill:"currentColor"},_hoisted_2$p=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.982 9.275c1.296.785 1.296 2.665 0 3.45l-9.946 6.02C6.703 19.552 5 18.592 5 17.034V4.966c0-1.558 1.703-2.518 3.036-1.711l9.946 6.02Z"},null,-1),_hoisted_3$o=[_hoisted_2$p];function render$l(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$r,[..._hoisted_3$o])}var VdPlays={render:render$l};const _hoisted_1$q={viewBox:"0 0 1024 1024"},_hoisted_2$o=createBaseVNode("path",{d:"M213.333 192A85.333 85.333 0 1 1 384 192v640a85.333 85.333 0 1 1-170.667 0V192zM640 192a85.333 85.333 0 1 1 170.667 0v640A85.333 85.333 0 1 1 640 832V192z",fill:"currentColor"},null,-1),_hoisted_3$n=[_hoisted_2$o];function render$k(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$q,[..._hoisted_3$n])}var VdPauseS={render:render$k};const _hoisted_1$p={viewBox:"0 0 21 18",fill:"currentColor"},_hoisted_2$n=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17 0a2 2 0 0 1 2 2v7h-2V2.8a.8.8 0 0 0-.8-.8H2.8a.8.8 0 0 0-.794.7L2 2.8v10.4a.8.8 0 0 0 .7.794l.1.006H10v2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15Z"},null,-1),_hoisted_3$m=createBaseVNode("path",{d:"M19.875 11h-6.75c-.621 0-1.125.522-1.125 1.167v4.666c0 .645.504 1.167 1.125 1.167h6.75c.621 0 1.125-.522 1.125-1.167v-4.666c0-.645-.504-1.167-1.125-1.167Z"},null,-1),_hoisted_4$a=[_hoisted_2$n,_hoisted_3$m];function render$j(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$p,[..._hoisted_4$a])}var IcoMini={render:render$j},Loading_vue_vue_type_style_index_0_lang="";const _hoisted_1$o={class:"app_video--loading"},_hoisted_2$m=createBaseVNode("div",{class:"app_video--loading-img"},null,-1),_hoisted_3$l=[_hoisted_2$m],_sfc_main$6=defineComponent({__name:"Loading",props:{loading:{type:Boolean,default:!1}},setup(me){const Le=me;return(wt,$t)=>withDirectives((openBlock(),createElementBlock("div",_hoisted_1$o,_hoisted_3$l,512)),[[vShow,Le.loading]])}}),_hoisted_1$n={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$l=createBaseVNode("path",{stroke:"#A2A7AE","stroke-width":"2","stroke-linecap":"round",d:"M1 1h10M1 6h10M1 11h10"},null,-1),_hoisted_3$k=[_hoisted_2$l];function render$i(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$n,[..._hoisted_3$k])}var VdMenu={render:render$i};const _hoisted_1$m={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},_hoisted_2$k=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 4.063c-2.142 0-4.01.11-5.323.217a1.813 1.813 0 0 0-1.676 1.652A45.835 45.835 0 0 0 2.813 10c0 1.563.09 2.99.188 4.068.08.891.778 1.579 1.676 1.652a66.19 66.19 0 0 0 5.323.217c2.142 0 4.01-.11 5.323-.217a1.813 1.813 0 0 0 1.676-1.652c.097-1.076.189-2.504.189-4.068 0-1.564-.092-2.992-.19-4.068a1.813 1.813 0 0 0-1.675-1.652A66.19 66.19 0 0 0 10 4.062ZM4.575 3.034A67.443 67.443 0 0 1 10 2.813c2.184 0 4.087.112 5.425.221a3.062 3.062 0 0 1 2.819 2.785c.1 1.104.194 2.57.194 4.181 0 1.61-.095 3.077-.194 4.18a3.062 3.062 0 0 1-2.82 2.786 67.44 67.44 0 0 1-5.424.221c-2.183 0-4.086-.112-5.425-.221a3.063 3.063 0 0 1-2.819-2.786c-.1-1.104-.194-2.57-.194-4.18 0-1.61.095-3.076.194-4.18a3.063 3.063 0 0 1 2.82-2.786ZM5 8.438c0-.346.28-.626.625-.626h.313a.625.625 0 1 1 0 1.25h-.313A.625.625 0 0 1 5 8.438Zm2.5 0c0-.346.28-.626.625-.626h5a.625.625 0 1 1 0 1.25h-5a.625.625 0 0 1-.625-.624Zm-.625 2.5a.625.625 0 1 0 0 1.25h.313a.625.625 0 1 0 0-1.25h-.313Zm2.5 0a.625.625 0 1 0 0 1.25h5a.625.625 0 1 0 0-1.25h-5Z"},null,-1),_hoisted_3$j=[_hoisted_2$k];function render$h(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$m,[..._hoisted_3$j])}var VdDm={render:render$h};const _hoisted_1$l={width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},_hoisted_2$j=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.677 4.28A66.19 66.19 0 0 1 10 4.062c2.142 0 4.01.11 5.323.218.899.073 1.595.76 1.676 1.652.097 1.076.189 2.504.189 4.068 0 1.564-.092 2.992-.19 4.068a1.813 1.813 0 0 1-1.675 1.652c-1.313.107-3.18.217-5.323.217-2.142 0-4.01-.11-5.323-.217a1.813 1.813 0 0 1-1.676-1.652A45.835 45.835 0 0 1 2.813 10c0-1.563.09-2.99.188-4.068A1.813 1.813 0 0 1 4.677 4.28ZM10 2.812c-2.183 0-4.086.113-5.425.222A3.063 3.063 0 0 0 1.756 5.82c-.1 1.104-.194 2.57-.194 4.18 0 1.61.095 3.076.194 4.18a3.063 3.063 0 0 0 2.82 2.786c1.338.11 3.24.221 5.424.221a67.44 67.44 0 0 0 5.425-.221 3.062 3.062 0 0 0 2.819-2.785c.1-1.104.194-2.57.194-4.181 0-1.61-.095-3.077-.194-4.18a3.062 3.062 0 0 0-2.82-2.786A67.442 67.442 0 0 0 10 2.813Zm2.188 7.91a.833.833 0 0 0 0-1.443L9.06 7.474a.833.833 0 0 0-1.25.721v3.61a.833.833 0 0 0 1.25.722l3.127-1.805Z"},null,-1),_hoisted_3$i=[_hoisted_2$j];function render$g(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$l,[..._hoisted_3$i])}var VdPlay={render:render$g},RingProgress_vue_vue_type_style_index_0_lang="";const _hoisted_1$k=["width","height"],_sfc_main$5=defineComponent({__name:"RingProgress",props:{size:Number,left:Number,top:Number,start:{type:Boolean,default:()=>!1}},emits:["scaleAnim","shakeAnim","animFinish"],setup(me,{emit:Le}){const wt=me,$t=ref(0),kt=ref(null),It=ref(null),Rt=ref(.25),Pt=ref(null),Ft=computed(()=>wt.size/2),Ut=()=>{It.value.clearRect(0,0,wt.size,wt.size),It.value.beginPath(),It.value.strokeStyle="#FF6699",It.value.lineWidth=1,It.value.arc(Ft.value,Ft.value,Ft.value-1,-Math.PI/2,($t.value-.5)*Math.PI),It.value.stroke()};onMounted(()=>{});const Xt=()=>{clearInterval(kt.value),Rt.value=.25,kt.value=setInterval(()=>{$t.value+=2/15,Ut(),$t.value<8/15&&(Rt.value*=Math.cbrt(4),Le("scaleAnim",Rt.value)),$t.value>=8/15&&$t.value<10/15&&Le("shakeAnim"),$t.value>=28/15&&$t.value<2&&(Rt.value/=Math.cbrt(4),Le("scaleAnim",Rt.value)),$t.value>=2&&($t.value=0,Ut(),clearInterval(kt.value),Le("animFinish"))},100)},Jt=()=>{clearInterval(kt.value),kt.value=setInterval(()=>{$t.value-=.1,Ut(),$t.value<=0&&($t.value=0,Ut(),clearInterval(kt.value))},50)};return onMounted(()=>{It.value=Pt.value.getContext("2d"),Ut(),watch$1(()=>wt.start,()=>{wt.start?Xt():Jt()})}),(ii,Ni)=>(openBlock(),createElementBlock("canvas",{ref_key:"progress",ref:Pt,width:me.size,height:me.size,style:normalizeStyle({width:`${me.size}px`,height:`${me.size}px`,left:`${me.left}px`,top:`${me.top}px`}),class:"ring-progress"},null,12,_hoisted_1$k))}});var svga_min={exports:{}};(function(module,exports){(function(me,Le){module.exports=Le()})(window,function(){return function(me){function Le($t){if(wt[$t])return wt[$t].exports;var kt=wt[$t]={i:$t,l:!1,exports:{}};return me[$t].call(kt.exports,kt,kt.exports,Le),kt.l=!0,kt.exports}var wt={};return Le.m=me,Le.c=wt,Le.d=function($t,kt,It){Le.o($t,kt)||Object.defineProperty($t,kt,{enumerable:!0,get:It})},Le.r=function($t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty($t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty($t,"__esModule",{value:!0})},Le.t=function($t,kt){if(1&kt&&($t=Le($t)),8&kt||4&kt&&typeof $t=="object"&&$t&&$t.__esModule)return $t;var It=Object.create(null);if(Le.r(It),Object.defineProperty(It,"default",{enumerable:!0,value:$t}),2&kt&&typeof $t!="string")for(var Rt in $t)Le.d(It,Rt,function(Pt){return $t[Pt]}.bind(null,Rt));return It},Le.n=function($t){var kt=$t&&$t.__esModule?function(){return $t.default}:function(){return $t};return Le.d(kt,"a",kt),kt},Le.o=function($t,kt){return Object.prototype.hasOwnProperty.call($t,kt)},Le.p="",Le(Le.s=64)}([function(me,Le,wt){var $t,kt,It=me.exports=wt(1),Rt=wt(20);It.codegen=wt(47),It.fetch=wt(48),It.path=wt(49),It.fs=It.inquire("fs"),It.toArray=function(Jt){if(Jt){for(var ii=Object.keys(Jt),Ni=new Array(ii.length),Vi=0;Vi<ii.length;)Ni[Vi]=Jt[ii[Vi++]];return Ni}return[]},It.toObject=function(Jt){for(var ii={},Ni=0;Ni<Jt.length;){var Vi=Jt[Ni++],zi=Jt[Ni++];zi!==void 0&&(ii[Vi]=zi)}return ii};var Pt=/\\/g,Ft=/"/g;It.isReserved=function(Jt){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(Jt)},It.safeProp=function(Jt){return!/^[$\w_]+$/.test(Jt)||It.isReserved(Jt)?'["'+Jt.replace(Pt,"\\\\").replace(Ft,'\\"')+'"]':"."+Jt},It.ucFirst=function(Jt){return Jt.charAt(0).toUpperCase()+Jt.substring(1)};var Ut=/_([a-z])/g;It.camelCase=function(Jt){return Jt.substring(0,1)+Jt.substring(1).replace(Ut,function(ii,Ni){return Ni.toUpperCase()})},It.compareFieldsById=function(Jt,ii){return Jt.id-ii.id},It.decorateType=function(Jt,ii){if(Jt.$type)return ii&&Jt.$type.name!==ii&&(It.decorateRoot.remove(Jt.$type),Jt.$type.name=ii,It.decorateRoot.add(Jt.$type)),Jt.$type;$t||($t=wt(22));var Ni=new $t(ii||Jt.name);return It.decorateRoot.add(Ni),Ni.ctor=Jt,Object.defineProperty(Jt,"$type",{value:Ni,enumerable:!1}),Object.defineProperty(Jt.prototype,"$type",{value:Ni,enumerable:!1}),Ni};var Xt=0;It.decorateEnum=function(Jt){if(Jt.$type)return Jt.$type;kt||(kt=wt(2));var ii=new kt("Enum"+Xt++,Jt);return It.decorateRoot.add(ii),Object.defineProperty(Jt,"$type",{value:ii,enumerable:!1}),ii},It.setProperty=function(Jt,ii,Ni){if(typeof Jt!="object")throw TypeError("dst must be an object");if(!ii)throw TypeError("path must be specified");return function Vi(zi,Xn,Qn){var eo=Xn.shift();if(Xn.length>0)zi[eo]=Vi(zi[eo]||{},Xn,Qn);else{var no=zi[eo];no&&(Qn=[].concat(no).concat(Qn)),zi[eo]=Qn}return zi}(Jt,ii=ii.split("."),Ni)},Object.defineProperty(It,"decorateRoot",{get:function(){return Rt.decorated||(Rt.decorated=new(wt(30)))}})},function(me,Le,wt){(function($t){function kt(Pt,Ft,Ut){for(var Xt=Object.keys(Ft),Jt=0;Jt<Xt.length;++Jt)Pt[Xt[Jt]]!==void 0&&Ut||(Pt[Xt[Jt]]=Ft[Xt[Jt]]);return Pt}function It(Pt){function Ft(Ut,Xt){if(!(this instanceof Ft))return new Ft(Ut,Xt);Object.defineProperty(this,"message",{get:function(){return Ut}}),Error.captureStackTrace?Error.captureStackTrace(this,Ft):Object.defineProperty(this,"stack",{value:new Error().stack||""}),Xt&&kt(this,Xt)}return(Ft.prototype=Object.create(Error.prototype)).constructor=Ft,Object.defineProperty(Ft.prototype,"name",{get:function(){return Pt}}),Ft.prototype.toString=function(){return this.name+": "+this.message},Ft}var Rt=Le;Rt.asPromise=wt(17),Rt.base64=wt(38),Rt.EventEmitter=wt(39),Rt.float=wt(40),Rt.inquire=wt(18),Rt.utf8=wt(41),Rt.pool=wt(42),Rt.LongBits=wt(43),Rt.isNode=Boolean($t!==void 0&&$t&&$t.process&&$t.process.versions&&$t.process.versions.node),Rt.global=Rt.isNode&&$t||typeof window!="undefined"&&window||typeof self!="undefined"&&self||this,Rt.emptyArray=Object.freeze?Object.freeze([]):[],Rt.emptyObject=Object.freeze?Object.freeze({}):{},Rt.isInteger=Number.isInteger||function(Pt){return typeof Pt=="number"&&isFinite(Pt)&&Math.floor(Pt)===Pt},Rt.isString=function(Pt){return typeof Pt=="string"||Pt instanceof String},Rt.isObject=function(Pt){return Pt&&typeof Pt=="object"},Rt.isset=Rt.isSet=function(Pt,Ft){var Ut=Pt[Ft];return!(Ut==null||!Pt.hasOwnProperty(Ft))&&(typeof Ut!="object"||(Array.isArray(Ut)?Ut.length:Object.keys(Ut).length)>0)},Rt.Buffer=function(){try{var Pt=Rt.inquire("buffer").Buffer;return Pt.prototype.utf8Write?Pt:null}catch{return null}}(),Rt._Buffer_from=null,Rt._Buffer_allocUnsafe=null,Rt.newBuffer=function(Pt){return typeof Pt=="number"?Rt.Buffer?Rt._Buffer_allocUnsafe(Pt):new Rt.Array(Pt):Rt.Buffer?Rt._Buffer_from(Pt):typeof Uint8Array=="undefined"?Pt:new Uint8Array(Pt)},Rt.Array=typeof Uint8Array!="undefined"?Uint8Array:Array,Rt.Long=Rt.global.dcodeIO&&Rt.global.dcodeIO.Long||Rt.global.Long||Rt.inquire("long"),Rt.key2Re=/^true|false|0|1$/,Rt.key32Re=/^-?(?:0|[1-9][0-9]*)$/,Rt.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,Rt.longToHash=function(Pt){return Pt?Rt.LongBits.from(Pt).toHash():Rt.LongBits.zeroHash},Rt.longFromHash=function(Pt,Ft){var Ut=Rt.LongBits.fromHash(Pt);return Rt.Long?Rt.Long.fromBits(Ut.lo,Ut.hi,Ft):Ut.toNumber(Boolean(Ft))},Rt.merge=kt,Rt.lcFirst=function(Pt){return Pt.charAt(0).toLowerCase()+Pt.substring(1)},Rt.newError=It,Rt.ProtocolError=It("ProtocolError"),Rt.oneOfGetter=function(Pt){for(var Ft={},Ut=0;Ut<Pt.length;++Ut)Ft[Pt[Ut]]=1;return function(){for(var Xt=Object.keys(this),Jt=Xt.length-1;Jt>-1;--Jt)if(Ft[Xt[Jt]]===1&&this[Xt[Jt]]!==void 0&&this[Xt[Jt]]!==null)return Xt[Jt]}},Rt.oneOfSetter=function(Pt){return function(Ft){for(var Ut=0;Ut<Pt.length;++Ut)Pt[Ut]!==Ft&&delete this[Pt[Ut]]}},Rt.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},Rt._configure=function(){var Pt=Rt.Buffer;Pt?(Rt._Buffer_from=Pt.from!==Uint8Array.from&&Pt.from||function(Ft,Ut){return new Pt(Ft,Ut)},Rt._Buffer_allocUnsafe=Pt.allocUnsafe||function(Ft){return new Pt(Ft)}):Rt._Buffer_from=Rt._Buffer_allocUnsafe=null}}).call(this,wt(37))},function(me,Le,wt){function $t(Pt,Ft,Ut,Xt,Jt){if(kt.call(this,Pt,Ut),Ft&&typeof Ft!="object")throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=Xt,this.comments=Jt||{},this.reserved=void 0,Ft)for(var ii=Object.keys(Ft),Ni=0;Ni<ii.length;++Ni)typeof Ft[ii[Ni]]=="number"&&(this.valuesById[this.values[ii[Ni]]=Ft[ii[Ni]]]=ii[Ni])}me.exports=$t;var kt=wt(3);(($t.prototype=Object.create(kt.prototype)).constructor=$t).className="Enum";var It=wt(6),Rt=wt(0);$t.fromJSON=function(Pt,Ft){var Ut=new $t(Pt,Ft.values,Ft.options,Ft.comment,Ft.comments);return Ut.reserved=Ft.reserved,Ut},$t.prototype.toJSON=function(Pt){var Ft=!!Pt&&Boolean(Pt.keepComments);return Rt.toObject(["options",this.options,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"comment",Ft?this.comment:void 0,"comments",Ft?this.comments:void 0])},$t.prototype.add=function(Pt,Ft,Ut){if(!Rt.isString(Pt))throw TypeError("name must be a string");if(!Rt.isInteger(Ft))throw TypeError("id must be an integer");if(this.values[Pt]!==void 0)throw Error("duplicate name '"+Pt+"' in "+this);if(this.isReservedId(Ft))throw Error("id "+Ft+" is reserved in "+this);if(this.isReservedName(Pt))throw Error("name '"+Pt+"' is reserved in "+this);if(this.valuesById[Ft]!==void 0){if(!this.options||!this.options.allow_alias)throw Error("duplicate id "+Ft+" in "+this);this.values[Pt]=Ft}else this.valuesById[this.values[Pt]=Ft]=Pt;return this.comments[Pt]=Ut||null,this},$t.prototype.remove=function(Pt){if(!Rt.isString(Pt))throw TypeError("name must be a string");var Ft=this.values[Pt];if(Ft==null)throw Error("name '"+Pt+"' does not exist in "+this);return delete this.valuesById[Ft],delete this.values[Pt],delete this.comments[Pt],this},$t.prototype.isReservedId=function(Pt){return It.isReservedId(this.reserved,Pt)},$t.prototype.isReservedName=function(Pt){return It.isReservedName(this.reserved,Pt)}},function(me,Le,wt){function $t(Rt,Pt){if(!It.isString(Rt))throw TypeError("name must be a string");if(Pt&&!It.isObject(Pt))throw TypeError("options must be an object");this.options=Pt,this.parsedOptions=null,this.name=Rt,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}me.exports=$t,$t.className="ReflectionObject";var kt,It=wt(0);Object.defineProperties($t.prototype,{root:{get:function(){for(var Rt=this;Rt.parent!==null;)Rt=Rt.parent;return Rt}},fullName:{get:function(){for(var Rt=[this.name],Pt=this.parent;Pt;)Rt.unshift(Pt.name),Pt=Pt.parent;return Rt.join(".")}}}),$t.prototype.toJSON=function(){throw Error()},$t.prototype.onAdd=function(Rt){this.parent&&this.parent!==Rt&&this.parent.remove(this),this.parent=Rt,this.resolved=!1;var Pt=Rt.root;Pt instanceof kt&&Pt._handleAdd(this)},$t.prototype.onRemove=function(Rt){var Pt=Rt.root;Pt instanceof kt&&Pt._handleRemove(this),this.parent=null,this.resolved=!1},$t.prototype.resolve=function(){return this.resolved?this:(this.root instanceof kt&&(this.resolved=!0),this)},$t.prototype.getOption=function(Rt){if(this.options)return this.options[Rt]},$t.prototype.setOption=function(Rt,Pt,Ft){return Ft&&this.options&&this.options[Rt]!==void 0||((this.options||(this.options={}))[Rt]=Pt),this},$t.prototype.setParsedOption=function(Rt,Pt,Ft){this.parsedOptions||(this.parsedOptions=[]);var Ut=this.parsedOptions;if(Ft){var Xt=Ut.find(function(Ni){return Object.prototype.hasOwnProperty.call(Ni,Rt)});if(Xt){var Jt=Xt[Rt];It.setProperty(Jt,Ft,Pt)}else(Xt={})[Rt]=It.setProperty({},Ft,Pt),Ut.push(Xt)}else{var ii={};ii[Rt]=Pt,Ut.push(ii)}return this},$t.prototype.setOptions=function(Rt,Pt){if(Rt)for(var Ft=Object.keys(Rt),Ut=0;Ut<Ft.length;++Ut)this.setOption(Ft[Ut],Rt[Ft[Ut]],Pt);return this},$t.prototype.toString=function(){var Rt=this.constructor.className,Pt=this.fullName;return Pt.length?Rt+" "+Pt:Rt},$t._configure=function(Rt){kt=Rt}},function(me,Le,wt){function $t(Xt,Jt,ii,Ni,Vi,zi,Xn){if(Ft.isObject(Ni)?(Xn=Vi,zi=Ni,Ni=Vi=void 0):Ft.isObject(Vi)&&(Xn=zi,zi=Vi,Vi=void 0),kt.call(this,Xt,zi),!Ft.isInteger(Jt)||Jt<0)throw TypeError("id must be a non-negative integer");if(!Ft.isString(ii))throw TypeError("type must be a string");if(Ni!==void 0&&!Ut.test(Ni=Ni.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(Vi!==void 0&&!Ft.isString(Vi))throw TypeError("extend must be a string");this.rule=Ni&&Ni!=="optional"?Ni:void 0,this.type=ii,this.id=Jt,this.extend=Vi||void 0,this.required=Ni==="required",this.optional=!this.required,this.repeated=Ni==="repeated",this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=!!Ft.Long&&Pt.long[ii]!==void 0,this.bytes=ii==="bytes",this.resolvedType=null,this.extensionField=null,this.declaringField=null,this._packed=null,this.comment=Xn}me.exports=$t;var kt=wt(3);(($t.prototype=Object.create(kt.prototype)).constructor=$t).className="Field";var It,Rt=wt(2),Pt=wt(7),Ft=wt(0),Ut=/^required|optional|repeated$/;$t.fromJSON=function(Xt,Jt){return new $t(Xt,Jt.id,Jt.type,Jt.rule,Jt.extend,Jt.options,Jt.comment)},Object.defineProperty($t.prototype,"packed",{get:function(){return this._packed===null&&(this._packed=this.getOption("packed")!==!1),this._packed}}),$t.prototype.setOption=function(Xt,Jt,ii){return Xt==="packed"&&(this._packed=null),kt.prototype.setOption.call(this,Xt,Jt,ii)},$t.prototype.toJSON=function(Xt){var Jt=!!Xt&&Boolean(Xt.keepComments);return Ft.toObject(["rule",this.rule!=="optional"&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",Jt?this.comment:void 0])},$t.prototype.resolve=function(){if(this.resolved)return this;if((this.typeDefault=Pt.defaults[this.type])===void 0&&(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof It?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),this.options&&this.options.default!=null&&(this.typeDefault=this.options.default,this.resolvedType instanceof Rt&&typeof this.typeDefault=="string"&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(this.options.packed!==!0&&(this.options.packed===void 0||!this.resolvedType||this.resolvedType instanceof Rt)||delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long)this.typeDefault=Ft.Long.fromNumber(this.typeDefault,this.type.charAt(0)==="u"),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&typeof this.typeDefault=="string"){var Xt;Ft.base64.test(this.typeDefault)?Ft.base64.decode(this.typeDefault,Xt=Ft.newBuffer(Ft.base64.length(this.typeDefault)),0):Ft.utf8.write(this.typeDefault,Xt=Ft.newBuffer(Ft.utf8.length(this.typeDefault)),0),this.typeDefault=Xt}return this.map?this.defaultValue=Ft.emptyObject:this.repeated?this.defaultValue=Ft.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof It&&(this.parent.ctor.prototype[this.name]=this.defaultValue),kt.prototype.resolve.call(this)},$t.d=function(Xt,Jt,ii,Ni){return typeof Jt=="function"?Jt=Ft.decorateType(Jt).name:Jt&&typeof Jt=="object"&&(Jt=Ft.decorateEnum(Jt).name),function(Vi,zi){Ft.decorateType(Vi.constructor).add(new $t(zi,Xt,Jt,ii,{default:Ni}))}},$t._configure=function(Xt){It=Xt}},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.BezierPath=function $t(kt,It,Rt){(function(Pt,Ft){if(!(Pt instanceof Ft))throw new TypeError("Cannot call a class as a function")})(this,$t),this._d=kt,this._transform=It,this._styles=Rt}},function(me,Le,wt){function $t(ii,Ni){if(ii&&ii.length){for(var Vi={},zi=0;zi<ii.length;++zi)Vi[ii[zi].name]=ii[zi].toJSON(Ni);return Vi}}function kt(ii,Ni){Rt.call(this,ii,Ni),this.nested=void 0,this._nestedArray=null}function It(ii){return ii._nestedArray=null,ii}me.exports=kt;var Rt=wt(3);((kt.prototype=Object.create(Rt.prototype)).constructor=kt).className="Namespace";var Pt,Ft,Ut,Xt=wt(4),Jt=wt(0);kt.fromJSON=function(ii,Ni){return new kt(ii,Ni.options).addJSON(Ni.nested)},kt.arrayToJSON=$t,kt.isReservedId=function(ii,Ni){if(ii){for(var Vi=0;Vi<ii.length;++Vi)if(typeof ii[Vi]!="string"&&ii[Vi][0]<=Ni&&ii[Vi][1]>Ni)return!0}return!1},kt.isReservedName=function(ii,Ni){if(ii){for(var Vi=0;Vi<ii.length;++Vi)if(ii[Vi]===Ni)return!0}return!1},Object.defineProperty(kt.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=Jt.toArray(this.nested))}}),kt.prototype.toJSON=function(ii){return Jt.toObject(["options",this.options,"nested",$t(this.nestedArray,ii)])},kt.prototype.addJSON=function(ii){if(ii)for(var Ni,Vi=Object.keys(ii),zi=0;zi<Vi.length;++zi)Ni=ii[Vi[zi]],this.add((Ni.fields!==void 0?Pt.fromJSON:Ni.values!==void 0?Ut.fromJSON:Ni.methods!==void 0?Ft.fromJSON:Ni.id!==void 0?Xt.fromJSON:kt.fromJSON)(Vi[zi],Ni));return this},kt.prototype.get=function(ii){return this.nested&&this.nested[ii]||null},kt.prototype.getEnum=function(ii){if(this.nested&&this.nested[ii]instanceof Ut)return this.nested[ii].values;throw Error("no such enum: "+ii)},kt.prototype.add=function(ii){if(!(ii instanceof Xt&&ii.extend!==void 0||ii instanceof Pt||ii instanceof Ut||ii instanceof Ft||ii instanceof kt))throw TypeError("object must be a valid nested object");if(this.nested){var Ni=this.get(ii.name);if(Ni){if(!(Ni instanceof kt&&ii instanceof kt)||Ni instanceof Pt||Ni instanceof Ft)throw Error("duplicate name '"+ii.name+"' in "+this);for(var Vi=Ni.nestedArray,zi=0;zi<Vi.length;++zi)ii.add(Vi[zi]);this.remove(Ni),this.nested||(this.nested={}),ii.setOptions(Ni.options,!0)}}else this.nested={};return this.nested[ii.name]=ii,ii.onAdd(this),It(this)},kt.prototype.remove=function(ii){if(!(ii instanceof Rt))throw TypeError("object must be a ReflectionObject");if(ii.parent!==this)throw Error(ii+" is not a member of "+this);return delete this.nested[ii.name],Object.keys(this.nested).length||(this.nested=void 0),ii.onRemove(this),It(this)},kt.prototype.define=function(ii,Ni){if(Jt.isString(ii))ii=ii.split(".");else if(!Array.isArray(ii))throw TypeError("illegal path");if(ii&&ii.length&&ii[0]==="")throw Error("path must be relative");for(var Vi=this;ii.length>0;){var zi=ii.shift();if(Vi.nested&&Vi.nested[zi]){if(!((Vi=Vi.nested[zi])instanceof kt))throw Error("path conflicts with non-namespace objects")}else Vi.add(Vi=new kt(zi))}return Ni&&Vi.addJSON(Ni),Vi},kt.prototype.resolveAll=function(){for(var ii=this.nestedArray,Ni=0;Ni<ii.length;)ii[Ni]instanceof kt?ii[Ni++].resolveAll():ii[Ni++].resolve();return this.resolve()},kt.prototype.lookup=function(ii,Ni,Vi){if(typeof Ni=="boolean"?(Vi=Ni,Ni=void 0):Ni&&!Array.isArray(Ni)&&(Ni=[Ni]),Jt.isString(ii)&&ii.length){if(ii===".")return this.root;ii=ii.split(".")}else if(!ii.length)return this;if(ii[0]==="")return this.root.lookup(ii.slice(1),Ni);var zi=this.get(ii[0]);if(zi){if(ii.length===1){if(!Ni||Ni.indexOf(zi.constructor)>-1)return zi}else if(zi instanceof kt&&(zi=zi.lookup(ii.slice(1),Ni,!0)))return zi}else for(var Xn=0;Xn<this.nestedArray.length;++Xn)if(this._nestedArray[Xn]instanceof kt&&(zi=this._nestedArray[Xn].lookup(ii,Ni,!0)))return zi;return this.parent===null||Vi?null:this.parent.lookup(ii,Ni)},kt.prototype.lookupType=function(ii){var Ni=this.lookup(ii,[Pt]);if(!Ni)throw Error("no such type: "+ii);return Ni},kt.prototype.lookupEnum=function(ii){var Ni=this.lookup(ii,[Ut]);if(!Ni)throw Error("no such Enum '"+ii+"' in "+this);return Ni},kt.prototype.lookupTypeOrEnum=function(ii){var Ni=this.lookup(ii,[Pt,Ut]);if(!Ni)throw Error("no such Type or Enum '"+ii+"' in "+this);return Ni},kt.prototype.lookupService=function(ii){var Ni=this.lookup(ii,[Ft]);if(!Ni)throw Error("no such Service '"+ii+"' in "+this);return Ni},kt._configure=function(ii,Ni,Vi){Pt=ii,Ft=Ni,Ut=Vi}},function(me,Le,wt){function $t(Pt,Ft){var Ut=0,Xt={};for(Ft|=0;Ut<Pt.length;)Xt[Rt[Ut+Ft]]=Pt[Ut++];return Xt}var kt=Le,It=wt(0),Rt=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];kt.basic=$t([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),kt.defaults=$t([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",It.emptyArray,null]),kt.long=$t([0,0,0,1,1],7),kt.mapKey=$t([0,0,0,5,5,0,0,0,1,1,0,2],2),kt.packed=$t([1,5,0,0,0,5,5,0,0,0,1,1,0])},function(me,Le,wt){function $t(Pt,Ft){return Object.prototype.hasOwnProperty.call(Pt,Ft)}var kt=typeof Uint8Array!="undefined"&&typeof Uint16Array!="undefined"&&typeof Int32Array!="undefined";Le.assign=function(Pt){for(var Ft=Array.prototype.slice.call(arguments,1);Ft.length;){var Ut=Ft.shift();if(Ut){if(typeof Ut!="object")throw new TypeError(Ut+"must be non-object");for(var Xt in Ut)$t(Ut,Xt)&&(Pt[Xt]=Ut[Xt])}}return Pt},Le.shrinkBuf=function(Pt,Ft){return Pt.length===Ft?Pt:Pt.subarray?Pt.subarray(0,Ft):(Pt.length=Ft,Pt)};var It={arraySet:function(Pt,Ft,Ut,Xt,Jt){if(Ft.subarray&&Pt.subarray)Pt.set(Ft.subarray(Ut,Ut+Xt),Jt);else for(var ii=0;ii<Xt;ii++)Pt[Jt+ii]=Ft[Ut+ii]},flattenChunks:function(Pt){var Ft,Ut,Xt,Jt,ii,Ni;for(Xt=0,Ft=0,Ut=Pt.length;Ft<Ut;Ft++)Xt+=Pt[Ft].length;for(Ni=new Uint8Array(Xt),Jt=0,Ft=0,Ut=Pt.length;Ft<Ut;Ft++)ii=Pt[Ft],Ni.set(ii,Jt),Jt+=ii.length;return Ni}},Rt={arraySet:function(Pt,Ft,Ut,Xt,Jt){for(var ii=0;ii<Xt;ii++)Pt[Jt+ii]=Ft[Ut+ii]},flattenChunks:function(Pt){return[].concat.apply([],Pt)}};Le.setTyped=function(Pt){Pt?(Le.Buf8=Uint8Array,Le.Buf16=Uint16Array,Le.Buf32=Int32Array,Le.assign(Le,It)):(Le.Buf8=Array,Le.Buf16=Array,Le.Buf32=Array,Le.assign(Le,Rt))},Le.setTyped(kt)},function(me,Le,wt){function $t(eo,no,to){this.fn=eo,this.len=no,this.next=void 0,this.val=to}function kt(){}function It(eo){this.head=eo.head,this.tail=eo.tail,this.len=eo.len,this.next=eo.states}function Rt(){this.len=0,this.head=new $t(kt,0,0),this.tail=this.head,this.states=null}function Pt(eo,no,to){no[to]=255&eo}function Ft(eo,no){this.len=eo,this.next=void 0,this.val=no}function Ut(eo,no,to){for(;eo.hi;)no[to++]=127&eo.lo|128,eo.lo=(eo.lo>>>7|eo.hi<<25)>>>0,eo.hi>>>=7;for(;eo.lo>127;)no[to++]=127&eo.lo|128,eo.lo=eo.lo>>>7;no[to++]=eo.lo}function Xt(eo,no,to){no[to]=255&eo,no[to+1]=eo>>>8&255,no[to+2]=eo>>>16&255,no[to+3]=eo>>>24}me.exports=Rt;var Jt,ii=wt(1),Ni=ii.LongBits,Vi=ii.base64,zi=ii.utf8,Xn=function(){return ii.Buffer?function(){return(Rt.create=function(){return new Jt})()}:function(){return new Rt}};Rt.create=Xn(),Rt.alloc=function(eo){return new ii.Array(eo)},ii.Array!==Array&&(Rt.alloc=ii.pool(Rt.alloc,ii.Array.prototype.subarray)),Rt.prototype._push=function(eo,no,to){return this.tail=this.tail.next=new $t(eo,no,to),this.len+=no,this},Ft.prototype=Object.create($t.prototype),Ft.prototype.fn=function(eo,no,to){for(;eo>127;)no[to++]=127&eo|128,eo>>>=7;no[to]=eo},Rt.prototype.uint32=function(eo){return this.len+=(this.tail=this.tail.next=new Ft((eo>>>=0)<128?1:eo<16384?2:eo<2097152?3:eo<268435456?4:5,eo)).len,this},Rt.prototype.int32=function(eo){return eo<0?this._push(Ut,10,Ni.fromNumber(eo)):this.uint32(eo)},Rt.prototype.sint32=function(eo){return this.uint32((eo<<1^eo>>31)>>>0)},Rt.prototype.uint64=function(eo){var no=Ni.from(eo);return this._push(Ut,no.length(),no)},Rt.prototype.int64=Rt.prototype.uint64,Rt.prototype.sint64=function(eo){var no=Ni.from(eo).zzEncode();return this._push(Ut,no.length(),no)},Rt.prototype.bool=function(eo){return this._push(Pt,1,eo?1:0)},Rt.prototype.fixed32=function(eo){return this._push(Xt,4,eo>>>0)},Rt.prototype.sfixed32=Rt.prototype.fixed32,Rt.prototype.fixed64=function(eo){var no=Ni.from(eo);return this._push(Xt,4,no.lo)._push(Xt,4,no.hi)},Rt.prototype.sfixed64=Rt.prototype.fixed64,Rt.prototype.float=function(eo){return this._push(ii.float.writeFloatLE,4,eo)},Rt.prototype.double=function(eo){return this._push(ii.float.writeDoubleLE,8,eo)};var Qn=ii.Array.prototype.set?function(eo,no,to){no.set(eo,to)}:function(eo,no,to){for(var oo=0;oo<eo.length;++oo)no[to+oo]=eo[oo]};Rt.prototype.bytes=function(eo){var no=eo.length>>>0;if(!no)return this._push(Pt,1,0);if(ii.isString(eo)){var to=Rt.alloc(no=Vi.length(eo));Vi.decode(eo,to,0),eo=to}return this.uint32(no)._push(Qn,no,eo)},Rt.prototype.string=function(eo){var no=zi.length(eo);return no?this.uint32(no)._push(zi.write,no,eo):this._push(Pt,1,0)},Rt.prototype.fork=function(){return this.states=new It(this),this.head=this.tail=new $t(kt,0,0),this.len=0,this},Rt.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new $t(kt,0,0),this.len=0),this},Rt.prototype.ldelim=function(){var eo=this.head,no=this.tail,to=this.len;return this.reset().uint32(to),to&&(this.tail.next=eo.next,this.tail=no,this.len+=to),this},Rt.prototype.finish=function(){for(var eo=this.head.next,no=this.constructor.alloc(this.len),to=0;eo;)eo.fn(eo.val,no,to),to+=eo.len,eo=eo.next;return no},Rt._configure=function(eo){Jt=eo,Rt.create=Xn(),Jt._configure()}},function(me,Le,wt){function $t(Vi,zi){return RangeError("index out of range: "+Vi.pos+" + "+(zi||1)+" > "+Vi.len)}function kt(Vi){this.buf=Vi,this.pos=0,this.len=Vi.length}function It(){var Vi=new Xt(0,0),zi=0;if(!(this.len-this.pos>4)){for(;zi<3;++zi){if(this.pos>=this.len)throw $t(this);if(Vi.lo=(Vi.lo|(127&this.buf[this.pos])<<7*zi)>>>0,this.buf[this.pos++]<128)return Vi}return Vi.lo=(Vi.lo|(127&this.buf[this.pos++])<<7*zi)>>>0,Vi}for(;zi<4;++zi)if(Vi.lo=(Vi.lo|(127&this.buf[this.pos])<<7*zi)>>>0,this.buf[this.pos++]<128)return Vi;if(Vi.lo=(Vi.lo|(127&this.buf[this.pos])<<28)>>>0,Vi.hi=(Vi.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return Vi;if(zi=0,this.len-this.pos>4){for(;zi<5;++zi)if(Vi.hi=(Vi.hi|(127&this.buf[this.pos])<<7*zi+3)>>>0,this.buf[this.pos++]<128)return Vi}else for(;zi<5;++zi){if(this.pos>=this.len)throw $t(this);if(Vi.hi=(Vi.hi|(127&this.buf[this.pos])<<7*zi+3)>>>0,this.buf[this.pos++]<128)return Vi}throw Error("invalid varint encoding")}function Rt(Vi,zi){return(Vi[zi-4]|Vi[zi-3]<<8|Vi[zi-2]<<16|Vi[zi-1]<<24)>>>0}function Pt(){if(this.pos+8>this.len)throw $t(this,8);return new Xt(Rt(this.buf,this.pos+=4),Rt(this.buf,this.pos+=4))}me.exports=kt;var Ft,Ut=wt(1),Xt=Ut.LongBits,Jt=Ut.utf8,ii=typeof Uint8Array!="undefined"?function(Vi){if(Vi instanceof Uint8Array||Array.isArray(Vi))return new kt(Vi);throw Error("illegal buffer")}:function(Vi){if(Array.isArray(Vi))return new kt(Vi);throw Error("illegal buffer")},Ni=function(){return Ut.Buffer?function(Vi){return(kt.create=function(zi){return Ut.Buffer.isBuffer(zi)?new Ft(zi):ii(zi)})(Vi)}:ii};kt.create=Ni(),kt.prototype._slice=Ut.Array.prototype.subarray||Ut.Array.prototype.slice,kt.prototype.uint32=function(){var Vi=4294967295;return function(){if(Vi=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(Vi=(Vi|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)||(Vi=(Vi|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)||(Vi=(Vi|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)||(Vi=(Vi|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128))return Vi;if((this.pos+=5)>this.len)throw this.pos=this.len,$t(this,10);return Vi}}(),kt.prototype.int32=function(){return 0|this.uint32()},kt.prototype.sint32=function(){var Vi=this.uint32();return Vi>>>1^-(1&Vi)|0},kt.prototype.bool=function(){return this.uint32()!==0},kt.prototype.fixed32=function(){if(this.pos+4>this.len)throw $t(this,4);return Rt(this.buf,this.pos+=4)},kt.prototype.sfixed32=function(){if(this.pos+4>this.len)throw $t(this,4);return 0|Rt(this.buf,this.pos+=4)},kt.prototype.float=function(){if(this.pos+4>this.len)throw $t(this,4);var Vi=Ut.float.readFloatLE(this.buf,this.pos);return this.pos+=4,Vi},kt.prototype.double=function(){if(this.pos+8>this.len)throw $t(this,4);var Vi=Ut.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,Vi},kt.prototype.bytes=function(){var Vi=this.uint32(),zi=this.pos,Xn=this.pos+Vi;if(Xn>this.len)throw $t(this,Vi);return this.pos+=Vi,Array.isArray(this.buf)?this.buf.slice(zi,Xn):zi===Xn?new this.buf.constructor(0):this._slice.call(this.buf,zi,Xn)},kt.prototype.string=function(){var Vi=this.bytes();return Jt.read(Vi,0,Vi.length)},kt.prototype.skip=function(Vi){if(typeof Vi=="number"){if(this.pos+Vi>this.len)throw $t(this,Vi);this.pos+=Vi}else do if(this.pos>=this.len)throw $t(this);while(128&this.buf[this.pos++]);return this},kt.prototype.skipType=function(Vi){switch(Vi){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(Vi=7&this.uint32())!=4;)this.skipType(Vi);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+Vi+" at offset "+this.pos)}return this},kt._configure=function(Vi){Ft=Vi,kt.create=Ni(),Ft._configure();var zi=Ut.Long?"toLong":"toNumber";Ut.merge(kt.prototype,{int64:function(){return It.call(this)[zi](!1)},uint64:function(){return It.call(this)[zi](!0)},sint64:function(){return It.call(this).zzDecode()[zi](!1)},fixed64:function(){return Pt.call(this)[zi](!0)},sfixed64:function(){return Pt.call(this)[zi](!1)}})}},function(me,Le,wt){function $t(Ft,Ut,Xt,Jt){if(Array.isArray(Ut)||(Xt=Ut,Ut=void 0),It.call(this,Ft,Xt),Ut!==void 0&&!Array.isArray(Ut))throw TypeError("fieldNames must be an Array");this.oneof=Ut||[],this.fieldsArray=[],this.comment=Jt}function kt(Ft){if(Ft.parent)for(var Ut=0;Ut<Ft.fieldsArray.length;++Ut)Ft.fieldsArray[Ut].parent||Ft.parent.add(Ft.fieldsArray[Ut])}me.exports=$t;var It=wt(3);(($t.prototype=Object.create(It.prototype)).constructor=$t).className="OneOf";var Rt=wt(4),Pt=wt(0);$t.fromJSON=function(Ft,Ut){return new $t(Ft,Ut.oneof,Ut.options,Ut.comment)},$t.prototype.toJSON=function(Ft){var Ut=!!Ft&&Boolean(Ft.keepComments);return Pt.toObject(["options",this.options,"oneof",this.oneof,"comment",Ut?this.comment:void 0])},$t.prototype.add=function(Ft){if(!(Ft instanceof Rt))throw TypeError("field must be a Field");return Ft.parent&&Ft.parent!==this.parent&&Ft.parent.remove(Ft),this.oneof.push(Ft.name),this.fieldsArray.push(Ft),Ft.partOf=this,kt(this),this},$t.prototype.remove=function(Ft){if(!(Ft instanceof Rt))throw TypeError("field must be a Field");var Ut=this.fieldsArray.indexOf(Ft);if(Ut<0)throw Error(Ft+" is not a member of "+this);return this.fieldsArray.splice(Ut,1),(Ut=this.oneof.indexOf(Ft.name))>-1&&this.oneof.splice(Ut,1),Ft.partOf=null,this},$t.prototype.onAdd=function(Ft){It.prototype.onAdd.call(this,Ft);for(var Ut=0;Ut<this.oneof.length;++Ut){var Xt=Ft.get(this.oneof[Ut]);Xt&&!Xt.partOf&&(Xt.partOf=this,this.fieldsArray.push(Xt))}kt(this)},$t.prototype.onRemove=function(Ft){for(var Ut,Xt=0;Xt<this.fieldsArray.length;++Xt)(Ut=this.fieldsArray[Xt]).parent&&Ut.parent.remove(Ut);It.prototype.onRemove.call(this,Ft)},$t.d=function(){for(var Ft=new Array(arguments.length),Ut=0;Ut<arguments.length;)Ft[Ut]=arguments[Ut++];return function(Xt,Jt){Pt.decorateType(Xt.constructor).add(new $t(Jt,Ft)),Object.defineProperty(Xt,Jt,{get:Pt.oneOfGetter(Ft),set:Pt.oneOfSetter(Ft)})}}},function(me,Le,wt){function $t(It){if(It)for(var Rt=Object.keys(It),Pt=0;Pt<Rt.length;++Pt)this[Rt[Pt]]=It[Rt[Pt]]}me.exports=$t;var kt=wt(1);$t.create=function(It){return this.$type.create(It)},$t.encode=function(It,Rt){return this.$type.encode(It,Rt)},$t.encodeDelimited=function(It,Rt){return this.$type.encodeDelimited(It,Rt)},$t.decode=function(It){return this.$type.decode(It)},$t.decodeDelimited=function(It){return this.$type.decodeDelimited(It)},$t.verify=function(It){return this.$type.verify(It)},$t.fromObject=function(It){return this.$type.fromObject(It)},$t.toObject=function(It,Rt){return this.$type.toObject(It,Rt)},$t.prototype.toJSON=function(){return this.$type.toObject(this,kt.toJSONOptions)}},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.Parser=void 0;var $t=function(){function Rt(Pt,Ft){for(var Ut=0;Ut<Ft.length;Ut++){var Xt=Ft[Ut];Xt.enumerable=Xt.enumerable||!1,Xt.configurable=!0,"value"in Xt&&(Xt.writable=!0),Object.defineProperty(Pt,Xt.key,Xt)}}return function(Pt,Ft,Ut){return Ft&&Rt(Pt.prototype,Ft),Ut&&Rt(Pt,Ut),Pt}}(),kt=wt(31),It=function(Rt){return Rt&&Rt.__esModule?Rt:{default:Rt}}(wt(50));Le.Parser=function(){function Rt(){(function(Pt,Ft){if(!(Pt instanceof Ft))throw new TypeError("Cannot call a class as a function")})(this,Rt)}return $t(Rt,[{key:"load",value:function(Pt,Ft,Ut){this.loadViaWorker(Pt,Ft,Ut)}},{key:"loadViaWorker",value:function(Pt,Ft,Ut){(0,It.default)(Pt,function(Xt){var Jt=Xt.movie;Jt.version=Xt.ver;var ii=Xt.images,Ni=new kt.VideoEntity(Jt,ii);Ft(Ni)},Ut)}}]),Rt}()},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.RectPath=void 0;var $t=wt(5);Le.RectPath=function(kt){function It(Rt,Pt,Ft,Ut,Xt,Jt,ii){(function(Vi,zi){if(!(Vi instanceof zi))throw new TypeError("Cannot call a class as a function")})(this,It);var Ni=function(Vi,zi){if(!Vi)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!zi||typeof zi!="object"&&typeof zi!="function"?Vi:zi}(this,(It.__proto__||Object.getPrototypeOf(It)).call(this));return Ni._x=Rt,Ni._y=Pt,Ni._width=Ft,Ni._height=Ut,Ni._cornerRadius=Xt,Ni._transform=Jt,Ni._styles=ii,Ni}return function(Rt,Pt){if(typeof Pt!="function"&&Pt!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Pt);Rt.prototype=Object.create(Pt&&Pt.prototype,{constructor:{value:Rt,enumerable:!1,writable:!0,configurable:!0}}),Pt&&(Object.setPrototypeOf?Object.setPrototypeOf(Rt,Pt):Rt.__proto__=Pt)}(It,kt),It}($t.BezierPath)},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.EllipsePath=void 0;var $t=wt(5);Le.EllipsePath=function(kt){function It(Rt,Pt,Ft,Ut,Xt,Jt){(function(Ni,Vi){if(!(Ni instanceof Vi))throw new TypeError("Cannot call a class as a function")})(this,It);var ii=function(Ni,Vi){if(!Ni)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!Vi||typeof Vi!="object"&&typeof Vi!="function"?Ni:Vi}(this,(It.__proto__||Object.getPrototypeOf(It)).call(this));return ii._x=Rt,ii._y=Pt,ii._radiusX=Ft,ii._radiusY=Ut,ii._transform=Xt,ii._styles=Jt,ii}return function(Rt,Pt){if(typeof Pt!="function"&&Pt!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Pt);Rt.prototype=Object.create(Pt&&Pt.prototype,{constructor:{value:Rt,enumerable:!1,writable:!0,configurable:!0}}),Pt&&(Object.setPrototypeOf?Object.setPrototypeOf(Rt,Pt):Rt.__proto__=Pt)}(It,kt),It}($t.BezierPath)},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0});var $t=wt(34),kt=JSON.parse('{"nested":{"com":{"nested":{"opensource":{"nested":{"svga":{"options":{"objc_class_prefix":"SVGAProto","java_package":"com.opensource.svgaplayer.proto"},"nested":{"MovieParams":{"fields":{"viewBoxWidth":{"type":"float","id":1},"viewBoxHeight":{"type":"float","id":2},"fps":{"type":"int32","id":3},"frames":{"type":"int32","id":4}}},"SpriteEntity":{"fields":{"imageKey":{"type":"string","id":1},"frames":{"rule":"repeated","type":"FrameEntity","id":2},"matteKey":{"type":"string","id":3}}},"AudioEntity":{"fields":{"audioKey":{"type":"string","id":1},"startFrame":{"type":"int32","id":2},"endFrame":{"type":"int32","id":3},"startTime":{"type":"int32","id":4},"totalTime":{"type":"int32","id":5}}},"Layout":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4}}},"Transform":{"fields":{"a":{"type":"float","id":1},"b":{"type":"float","id":2},"c":{"type":"float","id":3},"d":{"type":"float","id":4},"tx":{"type":"float","id":5},"ty":{"type":"float","id":6}}},"ShapeEntity":{"oneofs":{"args":{"oneof":["shape","rect","ellipse"]}},"fields":{"type":{"type":"ShapeType","id":1},"shape":{"type":"ShapeArgs","id":2},"rect":{"type":"RectArgs","id":3},"ellipse":{"type":"EllipseArgs","id":4},"styles":{"type":"ShapeStyle","id":10},"transform":{"type":"Transform","id":11}},"nested":{"ShapeType":{"values":{"SHAPE":0,"RECT":1,"ELLIPSE":2,"KEEP":3}},"ShapeArgs":{"fields":{"d":{"type":"string","id":1}}},"RectArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4},"cornerRadius":{"type":"float","id":5}}},"EllipseArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"radiusX":{"type":"float","id":3},"radiusY":{"type":"float","id":4}}},"ShapeStyle":{"fields":{"fill":{"type":"RGBAColor","id":1},"stroke":{"type":"RGBAColor","id":2},"strokeWidth":{"type":"float","id":3},"lineCap":{"type":"LineCap","id":4},"lineJoin":{"type":"LineJoin","id":5},"miterLimit":{"type":"float","id":6},"lineDashI":{"type":"float","id":7},"lineDashII":{"type":"float","id":8},"lineDashIII":{"type":"float","id":9}},"nested":{"RGBAColor":{"fields":{"r":{"type":"float","id":1},"g":{"type":"float","id":2},"b":{"type":"float","id":3},"a":{"type":"float","id":4}}},"LineCap":{"values":{"LineCap_BUTT":0,"LineCap_ROUND":1,"LineCap_SQUARE":2}},"LineJoin":{"values":{"LineJoin_MITER":0,"LineJoin_ROUND":1,"LineJoin_BEVEL":2}}}}}},"FrameEntity":{"fields":{"alpha":{"type":"float","id":1},"layout":{"type":"Layout","id":2},"transform":{"type":"Transform","id":3},"clipPath":{"type":"string","id":4},"shapes":{"rule":"repeated","type":"ShapeEntity","id":5}}},"MovieEntity":{"fields":{"version":{"type":"string","id":1},"params":{"type":"MovieParams","id":2},"images":{"keyType":"string","type":"bytes","id":3},"sprites":{"rule":"repeated","type":"SpriteEntity","id":4},"audios":{"rule":"repeated","type":"AudioEntity","id":5}}}}}}}}}}}'),It=Le.proto=$t.Root.fromJSON(kt);Le.ProtoMovieEntity=It.lookupType("com.opensource.svga.MovieEntity")},function(me,Le,wt){me.exports=function($t,kt){for(var It=new Array(arguments.length-1),Rt=0,Pt=2,Ft=!0;Pt<arguments.length;)It[Rt++]=arguments[Pt++];return new Promise(function(Ut,Xt){It[Rt]=function(Jt){if(Ft)if(Ft=!1,Jt)Xt(Jt);else{for(var ii=new Array(arguments.length-1),Ni=0;Ni<ii.length;)ii[Ni++]=arguments[Ni];Ut.apply(null,ii)}};try{$t.apply(kt||null,It)}catch(Jt){Ft&&(Ft=!1,Xt(Jt))}})}},function(module,exports,__webpack_require__){function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(me){}return null}module.exports=inquire},function(me,Le,wt){Le.Service=wt(46)},function(me,Le,wt){me.exports={}},function(me,Le,wt){function $t(Pt,Ft,Ut,Xt){return Ft.resolvedType.group?Pt("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",Ut,Xt,(Ft.id<<3|3)>>>0,(Ft.id<<3|4)>>>0):Pt("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",Ut,Xt,(Ft.id<<3|2)>>>0)}me.exports=function(Pt){for(var Ft,Ut=Rt.codegen(["m","w"],Pt.name+"$encode")("if(!w)")("w=Writer.create()"),Xt=Pt.fieldsArray.slice().sort(Rt.compareFieldsById),Jt=0;Jt<Xt.length;++Jt){var ii=Xt[Jt].resolve(),Ni=Pt._fieldsArray.indexOf(ii),Vi=ii.resolvedType instanceof kt?"int32":ii.type,zi=It.basic[Vi];Ft="m"+Rt.safeProp(ii.name),ii.map?(Ut("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",Ft,ii.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",Ft)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(ii.id<<3|2)>>>0,8|It.mapKey[ii.keyType],ii.keyType),zi===void 0?Ut("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",Ni,Ft):Ut(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|zi,Vi,Ft),Ut("}")("}")):ii.repeated?(Ut("if(%s!=null&&%s.length){",Ft,Ft),ii.packed&&It.packed[Vi]!==void 0?Ut("w.uint32(%i).fork()",(ii.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",Ft)("w.%s(%s[i])",Vi,Ft)("w.ldelim()"):(Ut("for(var i=0;i<%s.length;++i)",Ft),zi===void 0?$t(Ut,ii,Ni,Ft+"[i]"):Ut("w.uint32(%i).%s(%s[i])",(ii.id<<3|zi)>>>0,Vi,Ft)),Ut("}")):(ii.optional&&Ut("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",Ft,ii.name),zi===void 0?$t(Ut,ii,Ni,Ft):Ut("w.uint32(%i).%s(%s)",(ii.id<<3|zi)>>>0,Vi,Ft))}return Ut("return w")};var kt=wt(2),It=wt(7),Rt=wt(0)},function(me,Le,wt){function $t(to,oo){It.call(this,to,oo),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null}function kt(to){return to._fieldsById=to._fieldsArray=to._oneofsArray=null,delete to.encode,delete to.decode,delete to.verify,to}me.exports=$t;var It=wt(6);(($t.prototype=Object.create(It.prototype)).constructor=$t).className="Type";var Rt=wt(2),Pt=wt(11),Ft=wt(4),Ut=wt(23),Xt=wt(24),Jt=wt(12),ii=wt(10),Ni=wt(9),Vi=wt(0),zi=wt(21),Xn=wt(26),Qn=wt(27),eo=wt(28),no=wt(29);Object.defineProperties($t.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var to=Object.keys(this.fields),oo=0;oo<to.length;++oo){var ao=this.fields[to[oo]],ro=ao.id;if(this._fieldsById[ro])throw Error("duplicate id "+ro+" in "+this);this._fieldsById[ro]=ao}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=Vi.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=Vi.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=$t.generateConstructor(this)())},set:function(to){var oo=to.prototype;oo instanceof Jt||((to.prototype=new Jt).constructor=to,Vi.merge(to.prototype,oo)),to.$type=to.prototype.$type=this,Vi.merge(to,Jt,!0),this._ctor=to;for(var ao=0;ao<this.fieldsArray.length;++ao)this._fieldsArray[ao].resolve();var ro={};for(ao=0;ao<this.oneofsArray.length;++ao)ro[this._oneofsArray[ao].resolve().name]={get:Vi.oneOfGetter(this._oneofsArray[ao].oneof),set:Vi.oneOfSetter(this._oneofsArray[ao].oneof)};ao&&Object.defineProperties(to.prototype,ro)}}}),$t.generateConstructor=function(to){for(var oo,ao=Vi.codegen(["p"],to.name),ro=0;ro<to.fieldsArray.length;++ro)(oo=to._fieldsArray[ro]).map?ao("this%s={}",Vi.safeProp(oo.name)):oo.repeated&&ao("this%s=[]",Vi.safeProp(oo.name));return ao("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")},$t.fromJSON=function(to,oo){var ao=new $t(to,oo.options);ao.extensions=oo.extensions,ao.reserved=oo.reserved;for(var ro=Object.keys(oo.fields),Fo=0;Fo<ro.length;++Fo)ao.add((oo.fields[ro[Fo]].keyType!==void 0?Ut.fromJSON:Ft.fromJSON)(ro[Fo],oo.fields[ro[Fo]]));if(oo.oneofs)for(ro=Object.keys(oo.oneofs),Fo=0;Fo<ro.length;++Fo)ao.add(Pt.fromJSON(ro[Fo],oo.oneofs[ro[Fo]]));if(oo.nested)for(ro=Object.keys(oo.nested),Fo=0;Fo<ro.length;++Fo){var Qr=oo.nested[ro[Fo]];ao.add((Qr.id!==void 0?Ft.fromJSON:Qr.fields!==void 0?$t.fromJSON:Qr.values!==void 0?Rt.fromJSON:Qr.methods!==void 0?Xt.fromJSON:It.fromJSON)(ro[Fo],Qr))}return oo.extensions&&oo.extensions.length&&(ao.extensions=oo.extensions),oo.reserved&&oo.reserved.length&&(ao.reserved=oo.reserved),oo.group&&(ao.group=!0),oo.comment&&(ao.comment=oo.comment),ao},$t.prototype.toJSON=function(to){var oo=It.prototype.toJSON.call(this,to),ao=!!to&&Boolean(to.keepComments);return Vi.toObject(["options",oo&&oo.options||void 0,"oneofs",It.arrayToJSON(this.oneofsArray,to),"fields",It.arrayToJSON(this.fieldsArray.filter(function(ro){return!ro.declaringField}),to)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"nested",oo&&oo.nested||void 0,"comment",ao?this.comment:void 0])},$t.prototype.resolveAll=function(){for(var to=this.fieldsArray,oo=0;oo<to.length;)to[oo++].resolve();var ao=this.oneofsArray;for(oo=0;oo<ao.length;)ao[oo++].resolve();return It.prototype.resolveAll.call(this)},$t.prototype.get=function(to){return this.fields[to]||this.oneofs&&this.oneofs[to]||this.nested&&this.nested[to]||null},$t.prototype.add=function(to){if(this.get(to.name))throw Error("duplicate name '"+to.name+"' in "+this);if(to instanceof Ft&&to.extend===void 0){if(this._fieldsById?this._fieldsById[to.id]:this.fieldsById[to.id])throw Error("duplicate id "+to.id+" in "+this);if(this.isReservedId(to.id))throw Error("id "+to.id+" is reserved in "+this);if(this.isReservedName(to.name))throw Error("name '"+to.name+"' is reserved in "+this);return to.parent&&to.parent.remove(to),this.fields[to.name]=to,to.message=this,to.onAdd(this),kt(this)}return to instanceof Pt?(this.oneofs||(this.oneofs={}),this.oneofs[to.name]=to,to.onAdd(this),kt(this)):It.prototype.add.call(this,to)},$t.prototype.remove=function(to){if(to instanceof Ft&&to.extend===void 0){if(!this.fields||this.fields[to.name]!==to)throw Error(to+" is not a member of "+this);return delete this.fields[to.name],to.parent=null,to.onRemove(this),kt(this)}if(to instanceof Pt){if(!this.oneofs||this.oneofs[to.name]!==to)throw Error(to+" is not a member of "+this);return delete this.oneofs[to.name],to.parent=null,to.onRemove(this),kt(this)}return It.prototype.remove.call(this,to)},$t.prototype.isReservedId=function(to){return It.isReservedId(this.reserved,to)},$t.prototype.isReservedName=function(to){return It.isReservedName(this.reserved,to)},$t.prototype.create=function(to){return new this.ctor(to)},$t.prototype.setup=function(){for(var to=this.fullName,oo=[],ao=0;ao<this.fieldsArray.length;++ao)oo.push(this._fieldsArray[ao].resolve().resolvedType);this.encode=zi(this)({Writer:Ni,types:oo,util:Vi}),this.decode=Xn(this)({Reader:ii,types:oo,util:Vi}),this.verify=Qn(this)({types:oo,util:Vi}),this.fromObject=eo.fromObject(this)({types:oo,util:Vi}),this.toObject=eo.toObject(this)({types:oo,util:Vi});var ro=no[to];if(ro){var Fo=Object.create(this);Fo.fromObject=this.fromObject,this.fromObject=ro.fromObject.bind(Fo),Fo.toObject=this.toObject,this.toObject=ro.toObject.bind(Fo)}return this},$t.prototype.encode=function(to,oo){return this.setup().encode(to,oo)},$t.prototype.encodeDelimited=function(to,oo){return this.encode(to,oo&&oo.len?oo.fork():oo).ldelim()},$t.prototype.decode=function(to,oo){return this.setup().decode(to,oo)},$t.prototype.decodeDelimited=function(to){return to instanceof ii||(to=ii.create(to)),this.decode(to,to.uint32())},$t.prototype.verify=function(to){return this.setup().verify(to)},$t.prototype.fromObject=function(to){return this.setup().fromObject(to)},$t.prototype.toObject=function(to,oo){return this.setup().toObject(to,oo)},$t.d=function(to){return function(oo){Vi.decorateType(oo,to)}}},function(me,Le,wt){function $t(Pt,Ft,Ut,Xt,Jt,ii){if(kt.call(this,Pt,Ft,Xt,void 0,void 0,Jt,ii),!Rt.isString(Ut))throw TypeError("keyType must be a string");this.keyType=Ut,this.resolvedKeyType=null,this.map=!0}me.exports=$t;var kt=wt(4);(($t.prototype=Object.create(kt.prototype)).constructor=$t).className="MapField";var It=wt(7),Rt=wt(0);$t.fromJSON=function(Pt,Ft){return new $t(Pt,Ft.id,Ft.keyType,Ft.type,Ft.options,Ft.comment)},$t.prototype.toJSON=function(Pt){var Ft=!!Pt&&Boolean(Pt.keepComments);return Rt.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",Ft?this.comment:void 0])},$t.prototype.resolve=function(){if(this.resolved)return this;if(It.mapKey[this.keyType]===void 0)throw Error("invalid key type: "+this.keyType);return kt.prototype.resolve.call(this)},$t.d=function(Pt,Ft,Ut){return typeof Ut=="function"?Ut=Rt.decorateType(Ut).name:Ut&&typeof Ut=="object"&&(Ut=Rt.decorateEnum(Ut).name),function(Xt,Jt){Rt.decorateType(Xt.constructor).add(new $t(Jt,Pt,Ft,Ut))}}},function(me,Le,wt){function $t(Ut,Xt){It.call(this,Ut,Xt),this.methods={},this._methodsArray=null}function kt(Ut){return Ut._methodsArray=null,Ut}me.exports=$t;var It=wt(6);(($t.prototype=Object.create(It.prototype)).constructor=$t).className="Service";var Rt=wt(25),Pt=wt(0),Ft=wt(19);$t.fromJSON=function(Ut,Xt){var Jt=new $t(Ut,Xt.options);if(Xt.methods)for(var ii=Object.keys(Xt.methods),Ni=0;Ni<ii.length;++Ni)Jt.add(Rt.fromJSON(ii[Ni],Xt.methods[ii[Ni]]));return Xt.nested&&Jt.addJSON(Xt.nested),Jt.comment=Xt.comment,Jt},$t.prototype.toJSON=function(Ut){var Xt=It.prototype.toJSON.call(this,Ut),Jt=!!Ut&&Boolean(Ut.keepComments);return Pt.toObject(["options",Xt&&Xt.options||void 0,"methods",It.arrayToJSON(this.methodsArray,Ut)||{},"nested",Xt&&Xt.nested||void 0,"comment",Jt?this.comment:void 0])},Object.defineProperty($t.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=Pt.toArray(this.methods))}}),$t.prototype.get=function(Ut){return this.methods[Ut]||It.prototype.get.call(this,Ut)},$t.prototype.resolveAll=function(){for(var Ut=this.methodsArray,Xt=0;Xt<Ut.length;++Xt)Ut[Xt].resolve();return It.prototype.resolve.call(this)},$t.prototype.add=function(Ut){if(this.get(Ut.name))throw Error("duplicate name '"+Ut.name+"' in "+this);return Ut instanceof Rt?(this.methods[Ut.name]=Ut,Ut.parent=this,kt(this)):It.prototype.add.call(this,Ut)},$t.prototype.remove=function(Ut){if(Ut instanceof Rt){if(this.methods[Ut.name]!==Ut)throw Error(Ut+" is not a member of "+this);return delete this.methods[Ut.name],Ut.parent=null,kt(this)}return It.prototype.remove.call(this,Ut)},$t.prototype.create=function(Ut,Xt,Jt){for(var ii,Ni=new Ft.Service(Ut,Xt,Jt),Vi=0;Vi<this.methodsArray.length;++Vi){var zi=Pt.lcFirst((ii=this._methodsArray[Vi]).resolve().name).replace(/[^$\w_]/g,"");Ni[zi]=Pt.codegen(["r","c"],Pt.isReserved(zi)?zi+"_":zi)("return this.rpcCall(m,q,s,r,c)")({m:ii,q:ii.resolvedRequestType.ctor,s:ii.resolvedResponseType.ctor})}return Ni}},function(me,Le,wt){function $t(Rt,Pt,Ft,Ut,Xt,Jt,ii,Ni,Vi){if(It.isObject(Xt)?(ii=Xt,Xt=Jt=void 0):It.isObject(Jt)&&(ii=Jt,Jt=void 0),Pt!==void 0&&!It.isString(Pt))throw TypeError("type must be a string");if(!It.isString(Ft))throw TypeError("requestType must be a string");if(!It.isString(Ut))throw TypeError("responseType must be a string");kt.call(this,Rt,ii),this.type=Pt||"rpc",this.requestType=Ft,this.requestStream=!!Xt||void 0,this.responseType=Ut,this.responseStream=!!Jt||void 0,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=Ni,this.parsedOptions=Vi}me.exports=$t;var kt=wt(3);(($t.prototype=Object.create(kt.prototype)).constructor=$t).className="Method";var It=wt(0);$t.fromJSON=function(Rt,Pt){return new $t(Rt,Pt.type,Pt.requestType,Pt.responseType,Pt.requestStream,Pt.responseStream,Pt.options,Pt.comment,Pt.parsedOptions)},$t.prototype.toJSON=function(Rt){var Pt=!!Rt&&Boolean(Rt.keepComments);return It.toObject(["type",this.type!=="rpc"&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",Pt?this.comment:void 0,"parsedOptions",this.parsedOptions])},$t.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),kt.prototype.resolve.call(this))}},function(me,Le,wt){function $t(Pt){return"missing required '"+Pt.name+"'"}me.exports=function(Pt){var Ft=Rt.codegen(["r","l"],Pt.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(Pt.fieldsArray.filter(function(Vi){return Vi.map}).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");Pt.group&&Ft("if((t&7)===4)")("break"),Ft("switch(t>>>3){");for(var Ut=0;Ut<Pt.fieldsArray.length;++Ut){var Xt=Pt._fieldsArray[Ut].resolve(),Jt=Xt.resolvedType instanceof kt?"int32":Xt.type,ii="m"+Rt.safeProp(Xt.name);Ft("case %i:",Xt.id),Xt.map?(Ft("if(%s===util.emptyObject)",ii)("%s={}",ii)("var c2 = r.uint32()+r.pos"),It.defaults[Xt.keyType]!==void 0?Ft("k=%j",It.defaults[Xt.keyType]):Ft("k=null"),It.defaults[Jt]!==void 0?Ft("value=%j",It.defaults[Jt]):Ft("value=null"),Ft("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",Xt.keyType)("case 2:"),It.basic[Jt]===void 0?Ft("value=types[%i].decode(r,r.uint32())",Ut):Ft("value=r.%s()",Jt),Ft("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),It.long[Xt.keyType]!==void 0?Ft('%s[typeof k==="object"?util.longToHash(k):k]=value',ii):Ft("%s[k]=value",ii)):Xt.repeated?(Ft("if(!(%s&&%s.length))",ii,ii)("%s=[]",ii),It.packed[Jt]!==void 0&&Ft("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",ii,Jt)("}else"),It.basic[Jt]===void 0?Ft(Xt.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",ii,Ut):Ft("%s.push(r.%s())",ii,Jt)):It.basic[Jt]===void 0?Ft(Xt.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",ii,Ut):Ft("%s=r.%s()",ii,Jt),Ft("break")}for(Ft("default:")("r.skipType(t&7)")("break")("}")("}"),Ut=0;Ut<Pt._fieldsArray.length;++Ut){var Ni=Pt._fieldsArray[Ut];Ni.required&&Ft("if(!m.hasOwnProperty(%j))",Ni.name)("throw util.ProtocolError(%j,{instance:m})",$t(Ni))}return Ft("return m")};var kt=wt(2),It=wt(7),Rt=wt(0)},function(me,Le,wt){function $t(Ft,Ut){return Ft.name+": "+Ut+(Ft.repeated&&Ut!=="array"?"[]":Ft.map&&Ut!=="object"?"{k:"+Ft.keyType+"}":"")+" expected"}function kt(Ft,Ut,Xt,Jt){if(Ut.resolvedType)if(Ut.resolvedType instanceof Rt){Ft("switch(%s){",Jt)("default:")("return%j",$t(Ut,"enum value"));for(var ii=Object.keys(Ut.resolvedType.values),Ni=0;Ni<ii.length;++Ni)Ft("case %i:",Ut.resolvedType.values[ii[Ni]]);Ft("break")("}")}else Ft("{")("var e=types[%i].verify(%s);",Xt,Jt)("if(e)")("return%j+e",Ut.name+".")("}");else switch(Ut.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":Ft("if(!util.isInteger(%s))",Jt)("return%j",$t(Ut,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":Ft("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",Jt,Jt,Jt,Jt)("return%j",$t(Ut,"integer|Long"));break;case"float":case"double":Ft('if(typeof %s!=="number")',Jt)("return%j",$t(Ut,"number"));break;case"bool":Ft('if(typeof %s!=="boolean")',Jt)("return%j",$t(Ut,"boolean"));break;case"string":Ft("if(!util.isString(%s))",Jt)("return%j",$t(Ut,"string"));break;case"bytes":Ft('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',Jt,Jt,Jt)("return%j",$t(Ut,"buffer"))}return Ft}function It(Ft,Ut,Xt){switch(Ut.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":Ft("if(!util.key32Re.test(%s))",Xt)("return%j",$t(Ut,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":Ft("if(!util.key64Re.test(%s))",Xt)("return%j",$t(Ut,"integer|Long key"));break;case"bool":Ft("if(!util.key2Re.test(%s))",Xt)("return%j",$t(Ut,"boolean key"))}return Ft}me.exports=function(Ft){var Ut=Pt.codegen(["m"],Ft.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),Xt={};Ft.oneofsArray.length&&Ut("var p={}");for(var Jt=0;Jt<Ft.fieldsArray.length;++Jt){var ii=Ft._fieldsArray[Jt].resolve(),Ni="m"+Pt.safeProp(ii.name);if(ii.optional&&Ut("if(%s!=null&&m.hasOwnProperty(%j)){",Ni,ii.name),ii.map)Ut("if(!util.isObject(%s))",Ni)("return%j",$t(ii,"object"))("var k=Object.keys(%s)",Ni)("for(var i=0;i<k.length;++i){"),It(Ut,ii,"k[i]"),kt(Ut,ii,Jt,Ni+"[k[i]]")("}");else if(ii.repeated)Ut("if(!Array.isArray(%s))",Ni)("return%j",$t(ii,"array"))("for(var i=0;i<%s.length;++i){",Ni),kt(Ut,ii,Jt,Ni+"[i]")("}");else{if(ii.partOf){var Vi=Pt.safeProp(ii.partOf.name);Xt[ii.partOf.name]===1&&Ut("if(p%s===1)",Vi)("return%j",ii.partOf.name+": multiple values"),Xt[ii.partOf.name]=1,Ut("p%s=1",Vi)}kt(Ut,ii,Jt,Ni)}ii.optional&&Ut("}")}return Ut("return null")};var Rt=wt(2),Pt=wt(0)},function(me,Le,wt){function $t(Ft,Ut,Xt,Jt){if(Ut.resolvedType)if(Ut.resolvedType instanceof Rt){Ft("switch(d%s){",Jt);for(var ii=Ut.resolvedType.values,Ni=Object.keys(ii),Vi=0;Vi<Ni.length;++Vi)Ut.repeated&&ii[Ni[Vi]]===Ut.typeDefault&&Ft("default:"),Ft("case%j:",Ni[Vi])("case %i:",ii[Ni[Vi]])("m%s=%j",Jt,ii[Ni[Vi]])("break");Ft("}")}else Ft('if(typeof d%s!=="object")',Jt)("throw TypeError(%j)",Ut.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",Jt,Xt,Jt);else{var zi=!1;switch(Ut.type){case"double":case"float":Ft("m%s=Number(d%s)",Jt,Jt);break;case"uint32":case"fixed32":Ft("m%s=d%s>>>0",Jt,Jt);break;case"int32":case"sint32":case"sfixed32":Ft("m%s=d%s|0",Jt,Jt);break;case"uint64":zi=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":Ft("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",Jt,Jt,zi)('else if(typeof d%s==="string")',Jt)("m%s=parseInt(d%s,10)",Jt,Jt)('else if(typeof d%s==="number")',Jt)("m%s=d%s",Jt,Jt)('else if(typeof d%s==="object")',Jt)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",Jt,Jt,Jt,zi?"true":"");break;case"bytes":Ft('if(typeof d%s==="string")',Jt)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",Jt,Jt,Jt)("else if(d%s.length)",Jt)("m%s=d%s",Jt,Jt);break;case"string":Ft("m%s=String(d%s)",Jt,Jt);break;case"bool":Ft("m%s=Boolean(d%s)",Jt,Jt)}}return Ft}function kt(Ft,Ut,Xt,Jt){if(Ut.resolvedType)Ut.resolvedType instanceof Rt?Ft("d%s=o.enums===String?types[%i].values[m%s]:m%s",Jt,Xt,Jt,Jt):Ft("d%s=types[%i].toObject(m%s,o)",Jt,Xt,Jt);else{var ii=!1;switch(Ut.type){case"double":case"float":Ft("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",Jt,Jt,Jt,Jt);break;case"uint64":ii=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":Ft('if(typeof m%s==="number")',Jt)("d%s=o.longs===String?String(m%s):m%s",Jt,Jt,Jt)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",Jt,Jt,Jt,Jt,ii?"true":"",Jt);break;case"bytes":Ft("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",Jt,Jt,Jt,Jt,Jt);break;default:Ft("d%s=m%s",Jt,Jt)}}return Ft}var It=Le,Rt=wt(2),Pt=wt(0);It.fromObject=function(Ft){var Ut=Ft.fieldsArray,Xt=Pt.codegen(["d"],Ft.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!Ut.length)return Xt("return new this.ctor");Xt("var m=new this.ctor");for(var Jt=0;Jt<Ut.length;++Jt){var ii=Ut[Jt].resolve(),Ni=Pt.safeProp(ii.name);ii.map?(Xt("if(d%s){",Ni)('if(typeof d%s!=="object")',Ni)("throw TypeError(%j)",ii.fullName+": object expected")("m%s={}",Ni)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",Ni),$t(Xt,ii,Jt,Ni+"[ks[i]]")("}")("}")):ii.repeated?(Xt("if(d%s){",Ni)("if(!Array.isArray(d%s))",Ni)("throw TypeError(%j)",ii.fullName+": array expected")("m%s=[]",Ni)("for(var i=0;i<d%s.length;++i){",Ni),$t(Xt,ii,Jt,Ni+"[i]")("}")("}")):(ii.resolvedType instanceof Rt||Xt("if(d%s!=null){",Ni),$t(Xt,ii,Jt,Ni),ii.resolvedType instanceof Rt||Xt("}"))}return Xt("return m")},It.toObject=function(Ft){var Ut=Ft.fieldsArray.slice().sort(Pt.compareFieldsById);if(!Ut.length)return Pt.codegen()("return {}");for(var Xt=Pt.codegen(["m","o"],Ft.name+"$toObject")("if(!o)")("o={}")("var d={}"),Jt=[],ii=[],Ni=[],Vi=0;Vi<Ut.length;++Vi)Ut[Vi].partOf||(Ut[Vi].resolve().repeated?Jt:Ut[Vi].map?ii:Ni).push(Ut[Vi]);if(Jt.length){for(Xt("if(o.arrays||o.defaults){"),Vi=0;Vi<Jt.length;++Vi)Xt("d%s=[]",Pt.safeProp(Jt[Vi].name));Xt("}")}if(ii.length){for(Xt("if(o.objects||o.defaults){"),Vi=0;Vi<ii.length;++Vi)Xt("d%s={}",Pt.safeProp(ii[Vi].name));Xt("}")}if(Ni.length){for(Xt("if(o.defaults){"),Vi=0;Vi<Ni.length;++Vi){var zi=Ni[Vi],Xn=Pt.safeProp(zi.name);if(zi.resolvedType instanceof Rt)Xt("d%s=o.enums===String?%j:%j",Xn,zi.resolvedType.valuesById[zi.typeDefault],zi.typeDefault);else if(zi.long)Xt("if(util.Long){")("var n=new util.Long(%i,%i,%j)",zi.typeDefault.low,zi.typeDefault.high,zi.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",Xn)("}else")("d%s=o.longs===String?%j:%i",Xn,zi.typeDefault.toString(),zi.typeDefault.toNumber());else if(zi.bytes){var Qn="["+Array.prototype.slice.call(zi.typeDefault).join(",")+"]";Xt("if(o.bytes===String)d%s=%j",Xn,String.fromCharCode.apply(String,zi.typeDefault))("else{")("d%s=%s",Xn,Qn)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",Xn,Xn)("}")}else Xt("d%s=%j",Xn,zi.typeDefault)}Xt("}")}var eo=!1;for(Vi=0;Vi<Ut.length;++Vi){zi=Ut[Vi];var no=Ft._fieldsArray.indexOf(zi);Xn=Pt.safeProp(zi.name),zi.map?(eo||(eo=!0,Xt("var ks2")),Xt("if(m%s&&(ks2=Object.keys(m%s)).length){",Xn,Xn)("d%s={}",Xn)("for(var j=0;j<ks2.length;++j){"),kt(Xt,zi,no,Xn+"[ks2[j]]")("}")):zi.repeated?(Xt("if(m%s&&m%s.length){",Xn,Xn)("d%s=[]",Xn)("for(var j=0;j<m%s.length;++j){",Xn),kt(Xt,zi,no,Xn+"[j]")("}")):(Xt("if(m%s!=null&&m.hasOwnProperty(%j)){",Xn,zi.name),kt(Xt,zi,no,Xn),zi.partOf&&Xt("if(o.oneofs)")("d%s=%j",Pt.safeProp(zi.partOf.name),zi.name)),Xt("}")}return Xt("return d")}},function(me,Le,wt){var $t=Le,kt=wt(12);$t[".google.protobuf.Any"]={fromObject:function(It){if(It&&It["@type"]){var Rt=It["@type"].substring(It["@type"].lastIndexOf("/")+1),Pt=this.lookup(Rt);if(Pt){var Ft=It["@type"].charAt(0)==="."?It["@type"].substr(1):It["@type"];return Ft.indexOf("/")===-1&&(Ft="/"+Ft),this.create({type_url:Ft,value:Pt.encode(Pt.fromObject(It)).finish()})}}return this.fromObject(It)},toObject:function(It,Rt){var Pt="",Ft="";if(Rt&&Rt.json&&It.type_url&&It.value){Ft=It.type_url.substring(It.type_url.lastIndexOf("/")+1),Pt=It.type_url.substring(0,It.type_url.lastIndexOf("/")+1);var Ut=this.lookup(Ft);Ut&&(It=Ut.decode(It.value))}if(!(It instanceof this.ctor)&&It instanceof kt){var Xt=It.$type.toObject(It,Rt);return Pt===""&&(Pt="type.googleapis.com/"),Ft=Pt+(It.$type.fullName[0]==="."?It.$type.fullName.substr(1):It.$type.fullName),Xt["@type"]=Ft,Xt}return this.toObject(It,Rt)}}},function(me,Le,wt){function $t(zi){Rt.call(this,"",zi),this.deferred=[],this.files=[]}function kt(){}function It(zi,Xn){var Qn=Xn.parent.lookup(Xn.extend);if(Qn){var eo=new Xt(Xn.fullName,Xn.id,Xn.type,Xn.rule,void 0,Xn.options);return eo.declaringField=Xn,Xn.extensionField=eo,Qn.add(eo),!0}return!1}me.exports=$t;var Rt=wt(6);(($t.prototype=Object.create(Rt.prototype)).constructor=$t).className="Root";var Pt,Ft,Ut,Xt=wt(4),Jt=wt(2),ii=wt(11),Ni=wt(0);$t.fromJSON=function(zi,Xn){return Xn||(Xn=new $t),zi.options&&Xn.setOptions(zi.options),Xn.addJSON(zi.nested)},$t.prototype.resolvePath=Ni.path.resolve,$t.prototype.fetch=Ni.fetch,$t.prototype.load=function zi(Xn,Qn,eo){function no(so,gr){if(eo){var Xr=eo;if(eo=null,Fo)throw so;Xr(so,gr)}}function to(so){var gr=so.lastIndexOf("google/protobuf/");if(gr>-1){var Xr=so.substring(gr);if(Xr in Ut)return Xr}return null}function oo(so,gr){try{if(Ni.isString(gr)&&gr.charAt(0)==="{"&&(gr=JSON.parse(gr)),Ni.isString(gr)){Ft.filename=so;var Xr,as=Ft(gr,ro,Qn),ls=0;if(as.imports)for(;ls<as.imports.length;++ls)(Xr=to(as.imports[ls])||ro.resolvePath(so,as.imports[ls]))&&ao(Xr);if(as.weakImports)for(ls=0;ls<as.weakImports.length;++ls)(Xr=to(as.weakImports[ls])||ro.resolvePath(so,as.weakImports[ls]))&&ao(Xr,!0)}else ro.setOptions(gr.options).addJSON(gr.nested)}catch(ms){no(ms)}Fo||Qr||no(null,ro)}function ao(so,gr){if(!(ro.files.indexOf(so)>-1)){if(ro.files.push(so),so in Ut)return void(Fo?oo(so,Ut[so]):(++Qr,setTimeout(function(){--Qr,oo(so,Ut[so])})));if(Fo){var Xr;try{Xr=Ni.fs.readFileSync(so).toString("utf8")}catch(as){return void(gr||no(as))}oo(so,Xr)}else++Qr,ro.fetch(so,function(as,ls){if(--Qr,eo)return as?void(gr?Qr||no(null,ro):no(as)):void oo(so,ls)})}}typeof Qn=="function"&&(eo=Qn,Qn=void 0);var ro=this;if(!eo)return Ni.asPromise(zi,ro,Xn,Qn);var Fo=eo===kt,Qr=0;Ni.isString(Xn)&&(Xn=[Xn]);for(var es,ns=0;ns<Xn.length;++ns)(es=ro.resolvePath("",Xn[ns]))&&ao(es);if(Fo)return ro;Qr||no(null,ro)},$t.prototype.loadSync=function(zi,Xn){if(!Ni.isNode)throw Error("not supported");return this.load(zi,Xn,kt)},$t.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(zi){return"'extend "+zi.extend+"' in "+zi.parent.fullName}).join(", "));return Rt.prototype.resolveAll.call(this)};var Vi=/^[A-Z]/;$t.prototype._handleAdd=function(zi){if(zi instanceof Xt)zi.extend===void 0||zi.extensionField||It(0,zi)||this.deferred.push(zi);else if(zi instanceof Jt)Vi.test(zi.name)&&(zi.parent[zi.name]=zi.values);else if(!(zi instanceof ii)){if(zi instanceof Pt)for(var Xn=0;Xn<this.deferred.length;)It(0,this.deferred[Xn])?this.deferred.splice(Xn,1):++Xn;for(var Qn=0;Qn<zi.nestedArray.length;++Qn)this._handleAdd(zi._nestedArray[Qn]);Vi.test(zi.name)&&(zi.parent[zi.name]=zi)}},$t.prototype._handleRemove=function(zi){if(zi instanceof Xt){if(zi.extend!==void 0)if(zi.extensionField)zi.extensionField.parent.remove(zi.extensionField),zi.extensionField=null;else{var Xn=this.deferred.indexOf(zi);Xn>-1&&this.deferred.splice(Xn,1)}}else if(zi instanceof Jt)Vi.test(zi.name)&&delete zi.parent[zi.name];else if(zi instanceof Rt){for(var Qn=0;Qn<zi.nestedArray.length;++Qn)this._handleRemove(zi._nestedArray[Qn]);Vi.test(zi.name)&&delete zi.parent[zi.name]}},$t._configure=function(zi,Xn,Qn){Pt=zi,Ft=Xn,Ut=Qn}},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.VideoEntity=void 0;var $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Pt){return typeof Pt}:function(Pt){return Pt&&typeof Symbol=="function"&&Pt.constructor===Symbol&&Pt!==Symbol.prototype?"symbol":typeof Pt},kt=function(){function Pt(Ft,Ut){for(var Xt=0;Xt<Ut.length;Xt++){var Jt=Ut[Xt];Jt.enumerable=Jt.enumerable||!1,Jt.configurable=!0,"value"in Jt&&(Jt.writable=!0),Object.defineProperty(Ft,Jt.key,Jt)}}return function(Ft,Ut,Xt){return Ut&&Pt(Ft.prototype,Ut),Xt&&Pt(Ft,Xt),Ft}}(),It=wt(32),Rt=wt(16).ProtoMovieEntity;Le.VideoEntity=function(){function Pt(Ft,Ut){(function(Xt,Jt){if(!(Xt instanceof Jt))throw new TypeError("Cannot call a class as a function")})(this,Pt),this.version="",this.videoSize={width:0,height:0},this.FPS=20,this.frames=0,this.images={},this.sprites=[],this.audios=[],(Ft===void 0?"undefined":$t(Ft))==="object"&&Ft.$type==Rt?($t(Ft.params)==="object"&&(this.version=Ft.ver,this.videoSize.width=Ft.params.viewBoxWidth||0,this.videoSize.height=Ft.params.viewBoxHeight||0,this.FPS=Ft.params.fps||20,this.frames=Ft.params.frames||0),this.resetSprites(Ft),this.audios=Ft.audios):Ft&&(Ft.movie&&(Ft.movie.viewBox&&(this.videoSize.width=parseFloat(Ft.movie.viewBox.width)||0,this.videoSize.height=parseFloat(Ft.movie.viewBox.height)||0),this.version=Ft.ver,this.FPS=parseInt(Ft.movie.fps)||20,this.frames=parseInt(Ft.movie.frames)||0),this.resetSprites(Ft)),Ut&&(this.images=Ut)}return kt(Pt,[{key:"resetSprites",value:function(Ft){Ft.sprites instanceof Array&&(this.sprites=Ft.sprites.map(function(Ut){return new It.SpriteEntity(Ut)}))}}]),Pt}()},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.SpriteEntity=void 0;var $t=wt(33);wt(5),wt(14),wt(15),Le.SpriteEntity=function kt(It){(function(Rt,Pt){if(!(Rt instanceof Pt))throw new TypeError("Cannot call a class as a function")})(this,kt),this.matteKey=null,this.imageKey=null,this.frames=[],this.matteKey=It.matteKey,this.imageKey=It.imageKey,It.frames&&(this.frames=It.frames.map(function(Rt){return new $t.FrameEntity(Rt)}))}},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.FrameEntity=void 0;var $t=wt(5);Le.FrameEntity=function kt(It){(function(Vi,zi){if(!(Vi instanceof zi))throw new TypeError("Cannot call a class as a function")})(this,kt),this.alpha=0,this.transform={a:1,b:0,c:0,d:1,tx:0,ty:0},this.layout={x:0,y:0,width:0,height:0},this.nx=0,this.ny=0,this.maskPath=null,this.shapes=[],this.alpha=parseFloat(It.alpha)||0,It.layout&&(this.layout.x=parseFloat(It.layout.x)||0,this.layout.y=parseFloat(It.layout.y)||0,this.layout.width=parseFloat(It.layout.width)||0,this.layout.height=parseFloat(It.layout.height)||0),It.transform&&(this.transform.a=parseFloat(It.transform.a)||1,this.transform.b=parseFloat(It.transform.b)||0,this.transform.c=parseFloat(It.transform.c)||0,this.transform.d=parseFloat(It.transform.d)||1,this.transform.tx=parseFloat(It.transform.tx)||0,this.transform.ty=parseFloat(It.transform.ty)||0),It.clipPath&&It.clipPath.length>0&&(this.maskPath=new $t.BezierPath(It.clipPath,void 0,{fill:"#000000"})),It.shapes&&(It.shapes instanceof Array&&It.shapes.forEach(function(Vi){switch(Vi.pathArgs=Vi.args,Vi.type){case 0:Vi.type="shape",Vi.pathArgs=Vi.shape;break;case 1:Vi.type="rect",Vi.pathArgs=Vi.rect;break;case 2:Vi.type="ellipse",Vi.pathArgs=Vi.ellipse;break;case 3:Vi.type="keep"}if(Vi.styles){Vi.styles.fill&&(typeof Vi.styles.fill.r=="number"&&(Vi.styles.fill[0]=Vi.styles.fill.r),typeof Vi.styles.fill.g=="number"&&(Vi.styles.fill[1]=Vi.styles.fill.g),typeof Vi.styles.fill.b=="number"&&(Vi.styles.fill[2]=Vi.styles.fill.b),typeof Vi.styles.fill.a=="number"&&(Vi.styles.fill[3]=Vi.styles.fill.a)),Vi.styles.stroke&&(typeof Vi.styles.stroke.r=="number"&&(Vi.styles.stroke[0]=Vi.styles.stroke.r),typeof Vi.styles.stroke.g=="number"&&(Vi.styles.stroke[1]=Vi.styles.stroke.g),typeof Vi.styles.stroke.b=="number"&&(Vi.styles.stroke[2]=Vi.styles.stroke.b),typeof Vi.styles.stroke.a=="number"&&(Vi.styles.stroke[3]=Vi.styles.stroke.a));var zi=Vi.styles.lineDash||[];switch(Vi.styles.lineDashI>0&&zi.push(Vi.styles.lineDashI),Vi.styles.lineDashII>0&&(zi.length<1&&zi.push(0),zi.push(Vi.styles.lineDashII),zi.push(0)),Vi.styles.lineDashIII>0&&(zi.length<2&&(zi.push(0),zi.push(0)),zi[2]=Vi.styles.lineDashIII),Vi.styles.lineDash=zi,Vi.styles.lineJoin){case 0:Vi.styles.lineJoin="miter";break;case 1:Vi.styles.lineJoin="round";break;case 2:Vi.styles.lineJoin="bevel"}switch(Vi.styles.lineCap){case 0:Vi.styles.lineCap="butt";break;case 1:Vi.styles.lineCap="round";break;case 2:Vi.styles.lineCap="square"}}}),It.shapes[0]&&It.shapes[0].type==="keep"?this.shapes=kt.lastShapes:(this.shapes=It.shapes,kt.lastShapes=It.shapes));var Rt=this.transform.a*this.layout.x+this.transform.c*this.layout.y+this.transform.tx,Pt=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*this.layout.y+this.transform.tx,Ft=this.transform.a*this.layout.x+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,Ut=this.transform.a*(this.layout.x+this.layout.width)+this.transform.c*(this.layout.y+this.layout.height)+this.transform.tx,Xt=this.transform.b*this.layout.x+this.transform.d*this.layout.y+this.transform.ty,Jt=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*this.layout.y+this.transform.ty,ii=this.transform.b*this.layout.x+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty,Ni=this.transform.b*(this.layout.x+this.layout.width)+this.transform.d*(this.layout.y+this.layout.height)+this.transform.ty;this.nx=Math.min(Math.min(Ft,Ut),Math.min(Rt,Pt)),this.ny=Math.min(Math.min(ii,Ni),Math.min(Xt,Jt))}},function(me,Le,wt){me.exports=wt(35)},function(me,Le,wt){var $t=me.exports=wt(36);$t.build="light",$t.load=function(kt,It,Rt){return typeof It=="function"?(Rt=It,It=new $t.Root):It||(It=new $t.Root),It.load(kt,Rt)},$t.loadSync=function(kt,It){return It||(It=new $t.Root),It.loadSync(kt)},$t.encoder=wt(21),$t.decoder=wt(26),$t.verifier=wt(27),$t.converter=wt(28),$t.ReflectionObject=wt(3),$t.Namespace=wt(6),$t.Root=wt(30),$t.Enum=wt(2),$t.Type=wt(22),$t.Field=wt(4),$t.OneOf=wt(11),$t.MapField=wt(23),$t.Service=wt(24),$t.Method=wt(25),$t.Message=wt(12),$t.wrappers=wt(29),$t.types=wt(7),$t.util=wt(0),$t.ReflectionObject._configure($t.Root),$t.Namespace._configure($t.Type,$t.Service,$t.Enum),$t.Root._configure($t.Type),$t.Field._configure($t.Type)},function(me,Le,wt){function $t(){kt.util._configure(),kt.Writer._configure(kt.BufferWriter),kt.Reader._configure(kt.BufferReader)}var kt=Le;kt.build="minimal",kt.Writer=wt(9),kt.BufferWriter=wt(44),kt.Reader=wt(10),kt.BufferReader=wt(45),kt.util=wt(1),kt.rpc=wt(19),kt.roots=wt(20),kt.configure=$t,$t()},function(me,Le){var wt;wt=function(){return this}();try{wt=wt||new Function("return this")()}catch{typeof window=="object"&&(wt=window)}me.exports=wt},function(me,Le,wt){var $t=Le;$t.length=function(Pt){var Ft=Pt.length;if(!Ft)return 0;for(var Ut=0;--Ft%4>1&&Pt.charAt(Ft)==="=";)++Ut;return Math.ceil(3*Pt.length)/4-Ut};for(var kt=new Array(64),It=new Array(123),Rt=0;Rt<64;)It[kt[Rt]=Rt<26?Rt+65:Rt<52?Rt+71:Rt<62?Rt-4:Rt-59|43]=Rt++;$t.encode=function(Pt,Ft,Ut){for(var Xt,Jt=null,ii=[],Ni=0,Vi=0;Ft<Ut;){var zi=Pt[Ft++];switch(Vi){case 0:ii[Ni++]=kt[zi>>2],Xt=(3&zi)<<4,Vi=1;break;case 1:ii[Ni++]=kt[Xt|zi>>4],Xt=(15&zi)<<2,Vi=2;break;case 2:ii[Ni++]=kt[Xt|zi>>6],ii[Ni++]=kt[63&zi],Vi=0}Ni>8191&&((Jt||(Jt=[])).push(String.fromCharCode.apply(String,ii)),Ni=0)}return Vi&&(ii[Ni++]=kt[Xt],ii[Ni++]=61,Vi===1&&(ii[Ni++]=61)),Jt?(Ni&&Jt.push(String.fromCharCode.apply(String,ii.slice(0,Ni))),Jt.join("")):String.fromCharCode.apply(String,ii.slice(0,Ni))},$t.decode=function(Pt,Ft,Ut){for(var Xt,Jt=Ut,ii=0,Ni=0;Ni<Pt.length;){var Vi=Pt.charCodeAt(Ni++);if(Vi===61&&ii>1)break;if((Vi=It[Vi])===void 0)throw Error("invalid encoding");switch(ii){case 0:Xt=Vi,ii=1;break;case 1:Ft[Ut++]=Xt<<2|(48&Vi)>>4,Xt=Vi,ii=2;break;case 2:Ft[Ut++]=(15&Xt)<<4|(60&Vi)>>2,Xt=Vi,ii=3;break;case 3:Ft[Ut++]=(3&Xt)<<6|Vi,ii=0}}if(ii===1)throw Error("invalid encoding");return Ut-Jt},$t.test=function(Pt){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(Pt)}},function(me,Le,wt){function $t(){this._listeners={}}me.exports=$t,$t.prototype.on=function(kt,It,Rt){return(this._listeners[kt]||(this._listeners[kt]=[])).push({fn:It,ctx:Rt||this}),this},$t.prototype.off=function(kt,It){if(kt===void 0)this._listeners={};else if(It===void 0)this._listeners[kt]=[];else for(var Rt=this._listeners[kt],Pt=0;Pt<Rt.length;)Rt[Pt].fn===It?Rt.splice(Pt,1):++Pt;return this},$t.prototype.emit=function(kt){var It=this._listeners[kt];if(It){for(var Rt=[],Pt=1;Pt<arguments.length;)Rt.push(arguments[Pt++]);for(Pt=0;Pt<It.length;)It[Pt].fn.apply(It[Pt++].ctx,Rt)}return this}},function(me,Le,wt){function $t(Ft){return typeof Float32Array!="undefined"?function(){function Ut(Xn,Qn,eo){Ni[0]=Xn,Qn[eo]=Vi[0],Qn[eo+1]=Vi[1],Qn[eo+2]=Vi[2],Qn[eo+3]=Vi[3]}function Xt(Xn,Qn,eo){Ni[0]=Xn,Qn[eo]=Vi[3],Qn[eo+1]=Vi[2],Qn[eo+2]=Vi[1],Qn[eo+3]=Vi[0]}function Jt(Xn,Qn){return Vi[0]=Xn[Qn],Vi[1]=Xn[Qn+1],Vi[2]=Xn[Qn+2],Vi[3]=Xn[Qn+3],Ni[0]}function ii(Xn,Qn){return Vi[3]=Xn[Qn],Vi[2]=Xn[Qn+1],Vi[1]=Xn[Qn+2],Vi[0]=Xn[Qn+3],Ni[0]}var Ni=new Float32Array([-0]),Vi=new Uint8Array(Ni.buffer),zi=Vi[3]===128;Ft.writeFloatLE=zi?Ut:Xt,Ft.writeFloatBE=zi?Xt:Ut,Ft.readFloatLE=zi?Jt:ii,Ft.readFloatBE=zi?ii:Jt}():function(){function Ut(Jt,ii,Ni,Vi){var zi=ii<0?1:0;if(zi&&(ii=-ii),ii===0)Jt(1/ii>0?0:2147483648,Ni,Vi);else if(isNaN(ii))Jt(2143289344,Ni,Vi);else if(ii>34028234663852886e22)Jt((zi<<31|2139095040)>>>0,Ni,Vi);else if(ii<11754943508222875e-54)Jt((zi<<31|Math.round(ii/1401298464324817e-60))>>>0,Ni,Vi);else{var Xn=Math.floor(Math.log(ii)/Math.LN2);Jt((zi<<31|Xn+127<<23|8388607&Math.round(ii*Math.pow(2,-Xn)*8388608))>>>0,Ni,Vi)}}function Xt(Jt,ii,Ni){var Vi=Jt(ii,Ni),zi=2*(Vi>>31)+1,Xn=Vi>>>23&255,Qn=8388607&Vi;return Xn===255?Qn?NaN:zi*(1/0):Xn===0?1401298464324817e-60*zi*Qn:zi*Math.pow(2,Xn-150)*(Qn+8388608)}Ft.writeFloatLE=Ut.bind(null,kt),Ft.writeFloatBE=Ut.bind(null,It),Ft.readFloatLE=Xt.bind(null,Rt),Ft.readFloatBE=Xt.bind(null,Pt)}(),typeof Float64Array!="undefined"?function(){function Ut(Xn,Qn,eo){Ni[0]=Xn,Qn[eo]=Vi[0],Qn[eo+1]=Vi[1],Qn[eo+2]=Vi[2],Qn[eo+3]=Vi[3],Qn[eo+4]=Vi[4],Qn[eo+5]=Vi[5],Qn[eo+6]=Vi[6],Qn[eo+7]=Vi[7]}function Xt(Xn,Qn,eo){Ni[0]=Xn,Qn[eo]=Vi[7],Qn[eo+1]=Vi[6],Qn[eo+2]=Vi[5],Qn[eo+3]=Vi[4],Qn[eo+4]=Vi[3],Qn[eo+5]=Vi[2],Qn[eo+6]=Vi[1],Qn[eo+7]=Vi[0]}function Jt(Xn,Qn){return Vi[0]=Xn[Qn],Vi[1]=Xn[Qn+1],Vi[2]=Xn[Qn+2],Vi[3]=Xn[Qn+3],Vi[4]=Xn[Qn+4],Vi[5]=Xn[Qn+5],Vi[6]=Xn[Qn+6],Vi[7]=Xn[Qn+7],Ni[0]}function ii(Xn,Qn){return Vi[7]=Xn[Qn],Vi[6]=Xn[Qn+1],Vi[5]=Xn[Qn+2],Vi[4]=Xn[Qn+3],Vi[3]=Xn[Qn+4],Vi[2]=Xn[Qn+5],Vi[1]=Xn[Qn+6],Vi[0]=Xn[Qn+7],Ni[0]}var Ni=new Float64Array([-0]),Vi=new Uint8Array(Ni.buffer),zi=Vi[7]===128;Ft.writeDoubleLE=zi?Ut:Xt,Ft.writeDoubleBE=zi?Xt:Ut,Ft.readDoubleLE=zi?Jt:ii,Ft.readDoubleBE=zi?ii:Jt}():function(){function Ut(Jt,ii,Ni,Vi,zi,Xn){var Qn=Vi<0?1:0;if(Qn&&(Vi=-Vi),Vi===0)Jt(0,zi,Xn+ii),Jt(1/Vi>0?0:2147483648,zi,Xn+Ni);else if(isNaN(Vi))Jt(0,zi,Xn+ii),Jt(2146959360,zi,Xn+Ni);else if(Vi>17976931348623157e292)Jt(0,zi,Xn+ii),Jt((Qn<<31|2146435072)>>>0,zi,Xn+Ni);else{var eo;if(Vi<22250738585072014e-324)Jt((eo=Vi/5e-324)>>>0,zi,Xn+ii),Jt((Qn<<31|eo/4294967296)>>>0,zi,Xn+Ni);else{var no=Math.floor(Math.log(Vi)/Math.LN2);no===1024&&(no=1023),Jt(4503599627370496*(eo=Vi*Math.pow(2,-no))>>>0,zi,Xn+ii),Jt((Qn<<31|no+1023<<20|1048576*eo&1048575)>>>0,zi,Xn+Ni)}}}function Xt(Jt,ii,Ni,Vi,zi){var Xn=Jt(Vi,zi+ii),Qn=Jt(Vi,zi+Ni),eo=2*(Qn>>31)+1,no=Qn>>>20&2047,to=4294967296*(1048575&Qn)+Xn;return no===2047?to?NaN:eo*(1/0):no===0?5e-324*eo*to:eo*Math.pow(2,no-1075)*(to+4503599627370496)}Ft.writeDoubleLE=Ut.bind(null,kt,0,4),Ft.writeDoubleBE=Ut.bind(null,It,4,0),Ft.readDoubleLE=Xt.bind(null,Rt,0,4),Ft.readDoubleBE=Xt.bind(null,Pt,4,0)}(),Ft}function kt(Ft,Ut,Xt){Ut[Xt]=255&Ft,Ut[Xt+1]=Ft>>>8&255,Ut[Xt+2]=Ft>>>16&255,Ut[Xt+3]=Ft>>>24}function It(Ft,Ut,Xt){Ut[Xt]=Ft>>>24,Ut[Xt+1]=Ft>>>16&255,Ut[Xt+2]=Ft>>>8&255,Ut[Xt+3]=255&Ft}function Rt(Ft,Ut){return(Ft[Ut]|Ft[Ut+1]<<8|Ft[Ut+2]<<16|Ft[Ut+3]<<24)>>>0}function Pt(Ft,Ut){return(Ft[Ut]<<24|Ft[Ut+1]<<16|Ft[Ut+2]<<8|Ft[Ut+3])>>>0}me.exports=$t($t)},function(me,Le,wt){var $t=Le;$t.length=function(kt){for(var It=0,Rt=0,Pt=0;Pt<kt.length;++Pt)(Rt=kt.charCodeAt(Pt))<128?It+=1:Rt<2048?It+=2:(64512&Rt)==55296&&(64512&kt.charCodeAt(Pt+1))==56320?(++Pt,It+=4):It+=3;return It},$t.read=function(kt,It,Rt){if(Rt-It<1)return"";for(var Pt,Ft=null,Ut=[],Xt=0;It<Rt;)(Pt=kt[It++])<128?Ut[Xt++]=Pt:Pt>191&&Pt<224?Ut[Xt++]=(31&Pt)<<6|63&kt[It++]:Pt>239&&Pt<365?(Pt=((7&Pt)<<18|(63&kt[It++])<<12|(63&kt[It++])<<6|63&kt[It++])-65536,Ut[Xt++]=55296+(Pt>>10),Ut[Xt++]=56320+(1023&Pt)):Ut[Xt++]=(15&Pt)<<12|(63&kt[It++])<<6|63&kt[It++],Xt>8191&&((Ft||(Ft=[])).push(String.fromCharCode.apply(String,Ut)),Xt=0);return Ft?(Xt&&Ft.push(String.fromCharCode.apply(String,Ut.slice(0,Xt))),Ft.join("")):String.fromCharCode.apply(String,Ut.slice(0,Xt))},$t.write=function(kt,It,Rt){for(var Pt,Ft,Ut=Rt,Xt=0;Xt<kt.length;++Xt)(Pt=kt.charCodeAt(Xt))<128?It[Rt++]=Pt:Pt<2048?(It[Rt++]=Pt>>6|192,It[Rt++]=63&Pt|128):(64512&Pt)==55296&&(64512&(Ft=kt.charCodeAt(Xt+1)))==56320?(Pt=65536+((1023&Pt)<<10)+(1023&Ft),++Xt,It[Rt++]=Pt>>18|240,It[Rt++]=Pt>>12&63|128,It[Rt++]=Pt>>6&63|128,It[Rt++]=63&Pt|128):(It[Rt++]=Pt>>12|224,It[Rt++]=Pt>>6&63|128,It[Rt++]=63&Pt|128);return Rt-Ut}},function(me,Le,wt){me.exports=function($t,kt,It){var Rt=It||8192,Pt=Rt>>>1,Ft=null,Ut=Rt;return function(Xt){if(Xt<1||Xt>Pt)return $t(Xt);Ut+Xt>Rt&&(Ft=$t(Rt),Ut=0);var Jt=kt.call(Ft,Ut,Ut+=Xt);return 7&Ut&&(Ut=1+(7|Ut)),Jt}}},function(me,Le,wt){function $t(Ft,Ut){this.lo=Ft>>>0,this.hi=Ut>>>0}me.exports=$t;var kt=wt(1),It=$t.zero=new $t(0,0);It.toNumber=function(){return 0},It.zzEncode=It.zzDecode=function(){return this},It.length=function(){return 1};var Rt=$t.zeroHash="\0\0\0\0\0\0\0\0";$t.fromNumber=function(Ft){if(Ft===0)return It;var Ut=Ft<0;Ut&&(Ft=-Ft);var Xt=Ft>>>0,Jt=(Ft-Xt)/4294967296>>>0;return Ut&&(Jt=~Jt>>>0,Xt=~Xt>>>0,++Xt>4294967295&&(Xt=0,++Jt>4294967295&&(Jt=0))),new $t(Xt,Jt)},$t.from=function(Ft){if(typeof Ft=="number")return $t.fromNumber(Ft);if(kt.isString(Ft)){if(!kt.Long)return $t.fromNumber(parseInt(Ft,10));Ft=kt.Long.fromString(Ft)}return Ft.low||Ft.high?new $t(Ft.low>>>0,Ft.high>>>0):It},$t.prototype.toNumber=function(Ft){if(!Ft&&this.hi>>>31){var Ut=1+~this.lo>>>0,Xt=~this.hi>>>0;return Ut||(Xt=Xt+1>>>0),-(Ut+4294967296*Xt)}return this.lo+4294967296*this.hi},$t.prototype.toLong=function(Ft){return kt.Long?new kt.Long(0|this.lo,0|this.hi,Boolean(Ft)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(Ft)}};var Pt=String.prototype.charCodeAt;$t.fromHash=function(Ft){return Ft===Rt?It:new $t((Pt.call(Ft,0)|Pt.call(Ft,1)<<8|Pt.call(Ft,2)<<16|Pt.call(Ft,3)<<24)>>>0,(Pt.call(Ft,4)|Pt.call(Ft,5)<<8|Pt.call(Ft,6)<<16|Pt.call(Ft,7)<<24)>>>0)},$t.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},$t.prototype.zzEncode=function(){var Ft=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^Ft)>>>0,this.lo=(this.lo<<1^Ft)>>>0,this},$t.prototype.zzDecode=function(){var Ft=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^Ft)>>>0,this.hi=(this.hi>>>1^Ft)>>>0,this},$t.prototype.length=function(){var Ft=this.lo,Ut=(this.lo>>>28|this.hi<<4)>>>0,Xt=this.hi>>>24;return Xt===0?Ut===0?Ft<16384?Ft<128?1:2:Ft<2097152?3:4:Ut<16384?Ut<128?5:6:Ut<2097152?7:8:Xt<128?9:10}},function(me,Le,wt){function $t(){It.call(this)}function kt(Pt,Ft,Ut){Pt.length<40?Rt.utf8.write(Pt,Ft,Ut):Ft.utf8Write?Ft.utf8Write(Pt,Ut):Ft.write(Pt,Ut)}me.exports=$t;var It=wt(9);($t.prototype=Object.create(It.prototype)).constructor=$t;var Rt=wt(1);$t._configure=function(){$t.alloc=Rt._Buffer_allocUnsafe,$t.writeBytesBuffer=Rt.Buffer&&Rt.Buffer.prototype instanceof Uint8Array&&Rt.Buffer.prototype.set.name==="set"?function(Pt,Ft,Ut){Ft.set(Pt,Ut)}:function(Pt,Ft,Ut){if(Pt.copy)Pt.copy(Ft,Ut,0,Pt.length);else for(var Xt=0;Xt<Pt.length;)Ft[Ut++]=Pt[Xt++]}},$t.prototype.bytes=function(Pt){Rt.isString(Pt)&&(Pt=Rt._Buffer_from(Pt,"base64"));var Ft=Pt.length>>>0;return this.uint32(Ft),Ft&&this._push($t.writeBytesBuffer,Ft,Pt),this},$t.prototype.string=function(Pt){var Ft=Rt.Buffer.byteLength(Pt);return this.uint32(Ft),Ft&&this._push(kt,Ft,Pt),this},$t._configure()},function(me,Le,wt){function $t(Rt){kt.call(this,Rt)}me.exports=$t;var kt=wt(10);($t.prototype=Object.create(kt.prototype)).constructor=$t;var It=wt(1);$t._configure=function(){It.Buffer&&($t.prototype._slice=It.Buffer.prototype.slice)},$t.prototype.string=function(){var Rt=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+Rt,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+Rt,this.len))},$t._configure()},function(me,Le,wt){function $t(It,Rt,Pt){if(typeof It!="function")throw TypeError("rpcImpl must be a function");kt.EventEmitter.call(this),this.rpcImpl=It,this.requestDelimited=Boolean(Rt),this.responseDelimited=Boolean(Pt)}me.exports=$t;var kt=wt(1);($t.prototype=Object.create(kt.EventEmitter.prototype)).constructor=$t,$t.prototype.rpcCall=function It(Rt,Pt,Ft,Ut,Xt){if(!Ut)throw TypeError("request must be specified");var Jt=this;if(!Xt)return kt.asPromise(It,Jt,Rt,Pt,Ft,Ut);if(Jt.rpcImpl)try{return Jt.rpcImpl(Rt,Pt[Jt.requestDelimited?"encodeDelimited":"encode"](Ut).finish(),function(ii,Ni){if(ii)return Jt.emit("error",ii,Rt),Xt(ii);if(Ni!==null){if(!(Ni instanceof Ft))try{Ni=Ft[Jt.responseDelimited?"decodeDelimited":"decode"](Ni)}catch(Vi){return Jt.emit("error",Vi,Rt),Xt(Vi)}return Jt.emit("data",Ni,Rt),Xt(null,Ni)}Jt.end(!0)})}catch(ii){return Jt.emit("error",ii,Rt),void setTimeout(function(){Xt(ii)},0)}else setTimeout(function(){Xt(Error("already ended"))},0)},$t.prototype.end=function(It){return this.rpcImpl&&(It||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}},function(me,Le,wt){function $t(kt,It){function Rt(Ut){if(typeof Ut!="string"){var Xt=Pt();if($t.verbose&&console.log("codegen: "+Xt),Xt="return "+Xt,Ut){for(var Jt=Object.keys(Ut),ii=new Array(Jt.length+1),Ni=new Array(Jt.length),Vi=0;Vi<Jt.length;)ii[Vi]=Jt[Vi],Ni[Vi]=Ut[Jt[Vi++]];return ii[Vi]=Xt,Function.apply(null,ii).apply(null,Ni)}return Function(Xt)()}for(var zi=new Array(arguments.length-1),Xn=0;Xn<zi.length;)zi[Xn]=arguments[++Xn];if(Xn=0,Ut=Ut.replace(/%([%dfijs])/g,function(Qn,eo){var no=zi[Xn++];switch(eo){case"d":case"f":return String(Number(no));case"i":return String(Math.floor(no));case"j":return JSON.stringify(no);case"s":return String(no)}return"%"}),Xn!==zi.length)throw Error("parameter count mismatch");return Ft.push(Ut),Rt}function Pt(Ut){return"function "+(Ut||It||"")+"("+(kt&&kt.join(",")||"")+`){
  `+Ft.join(`
  `)+`
}`}typeof kt=="string"&&(It=kt,kt=void 0);var Ft=[];return Rt.toString=Pt,Rt}me.exports=$t,$t.verbose=!1},function(me,Le,wt){function $t(Rt,Pt,Ft){return typeof Pt=="function"?(Ft=Pt,Pt={}):Pt||(Pt={}),Ft?!Pt.xhr&&It&&It.readFile?It.readFile(Rt,function(Ut,Xt){return Ut&&typeof XMLHttpRequest!="undefined"?$t.xhr(Rt,Pt,Ft):Ut?Ft(Ut):Ft(null,Pt.binary?Xt:Xt.toString("utf8"))}):$t.xhr(Rt,Pt,Ft):kt($t,this,Rt,Pt)}me.exports=$t;var kt=wt(17),It=wt(18)("fs");$t.xhr=function(Rt,Pt,Ft){var Ut=new XMLHttpRequest;Ut.onreadystatechange=function(){if(Ut.readyState===4){if(Ut.status!==0&&Ut.status!==200)return Ft(Error("status "+Ut.status));if(Pt.binary){var Xt=Ut.response;if(!Xt){Xt=[];for(var Jt=0;Jt<Ut.responseText.length;++Jt)Xt.push(255&Ut.responseText.charCodeAt(Jt))}return Ft(null,typeof Uint8Array!="undefined"?new Uint8Array(Xt):Xt)}return Ft(null,Ut.responseText)}},Pt.binary&&("overrideMimeType"in Ut&&Ut.overrideMimeType("text/plain; charset=x-user-defined"),Ut.responseType="arraybuffer"),Ut.open("GET",Rt),Ut.send()}},function(me,Le,wt){var $t=Le,kt=$t.isAbsolute=function(Rt){return/^(?:\/|\w+:)/.test(Rt)},It=$t.normalize=function(Rt){var Pt=(Rt=Rt.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),Ft=kt(Rt),Ut="";Ft&&(Ut=Pt.shift()+"/");for(var Xt=0;Xt<Pt.length;)Pt[Xt]===".."?Xt>0&&Pt[Xt-1]!==".."?Pt.splice(--Xt,2):Ft?Pt.splice(Xt,1):++Xt:Pt[Xt]==="."?Pt.splice(Xt,1):++Xt;return Ut+Pt.join("/")};$t.resolve=function(Rt,Pt,Ft){return Ft||(Pt=It(Pt)),kt(Pt)?Pt:(Ft||(Rt=It(Rt)),(Rt=Rt.replace(/(?:\/|^)[^/]+$/,"")).length?It(Rt+"/"+Pt):Pt)}},function(me,Le,wt){var $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Xt){return typeof Xt}:function(Xt){return Xt&&typeof Symbol=="function"&&Xt.constructor===Symbol&&Xt!==Symbol.prototype?"symbol":typeof Xt},kt=wt(16).ProtoMovieEntity,It=wt(8).assign,Rt=wt(51),Pt={};It(Pt,Rt);var Ft=function(Xt){for(var Jt=[],ii=0;ii<Xt.length;ii+=32768)Jt.push(String.fromCharCode.apply(null,Xt.subarray(ii,ii+32768)));return Jt.join("")},Ut={loadAssets:function(Xt,Jt,ii){if((typeof JSZipUtils=="undefined"?"undefined":$t(JSZipUtils))==="object"&&typeof JSZip=="function")if(Xt.toString()=="[object File]")Ut._readBlobAsArrayBuffer(Xt,function(zi){var Xn=new Uint8Array(zi,0,4);Xn[0]==80&&Xn[1]==75&&Xn[2]==3&&Xn[3]==4?JSZip.loadAsync(zi).then(function(Qn){Ut._decodeAssets(Qn,Jt)}):Ut.load_viaProto(zi,Jt,ii)});else if(Xt.indexOf("data:svga/1.0;base64,")>=0){var Ni=Ut._base64ToArrayBuffer(Xt.substring(21));JSZip.loadAsync(Ni).then(function(zi){Ut._decodeAssets(zi,Jt)})}else Xt.indexOf("data:svga/2.0;base64,")>=0?(Ni=Ut._base64ToArrayBuffer(Xt.substring(21)),Ut.load_viaProto(Ni,Jt,ii)):JSZipUtils.getBinaryContent(Xt,function(zi,Xn){if(zi)throw ii&&ii(zi),console.error(zi),zi;var Qn=new Uint8Array(Xn,0,4);Qn[0]==80&&Qn[1]==75&&Qn[2]==3&&Qn[3]==4?JSZip.loadAsync(Xn).then(function(eo){Ut._decodeAssets(eo,Jt)}):Ut.load_viaProto(Xn,Jt,ii)});else{var Vi=new XMLHttpRequest;Vi.open("GET",Xt,!0),Vi.responseType="arraybuffer",Vi.onload=function(){Ut.load_viaProto(Vi.response,Jt,ii)},Vi.onerror=function(zi){if(!ii)throw console.error(zi),zi;ii(zi)},Vi.send()}},load_viaProto:function(Xt,Jt,ii){try{var Ni=Pt.inflate(Xt),Vi=kt.decode(Ni),zi={};Ut._loadImages(zi,void 0,Vi,function(){Vi.ver="2.0",Jt({movie:Vi,images:zi})})}catch(Xn){if(ii)return void ii(Xn);throw console.error(Xn),Xn}},_decodeAssets:function(Xt,Jt){var ii="1.0";Xt.file("movie.binary")&&(ii="1.5"),Xt.file("movie.spec").async("string").then(function(Ni){var Vi=JSON.parse(Ni),zi={};Vi.ver=ii,Ut._loadImages(zi,Xt,Vi,function(){Jt({movie:Vi,images:zi})})})},_loadImages:function(Xt,Jt,ii,Ni){var Vi=this;if((ii===void 0?"undefined":$t(ii))==="object"&&ii.$type==kt){var zi=!0;if(Jt)e:for(var Xn in ii.images)switch(function(ao){if(ii.images.hasOwnProperty(ao)){var ro=ii.images[ao],Fo=Ft(ro);return Xt.hasOwnProperty(ao)?"continue":(zi=!1,Jt.file(Fo+".png").async("base64").then(function(Qr){Xt[ao]=Qr,Ut._loadImages(Xt,Jt,ii,Ni)}.bind(Vi)),"break")}}(Xn)){case"continue":continue;case"break":break e}else for(var Qn in ii.images)if(ii.images.hasOwnProperty(Qn)){var eo=ii.images[Qn],no=void 0;try{no=Ft(eo)}catch{no=Ft(eo)}Xt[Qn]=btoa(no)}zi&&Ni.call(this)}else{zi=!0;for(var to in ii.images)if(ii.images.hasOwnProperty(to)){var oo=ii.images[to];if(Xt.hasOwnProperty(to))continue;zi=!1,Jt.file(oo+".png").async("base64").then(function(ao){Xt[to]=ao,Ut._loadImages(Xt,Jt,ii,Ni)}.bind(this));break}zi&&Ni.call(this)}},_base64ToArrayBuffer:function(Xt){for(var Jt=window.atob(Xt),ii=Jt.length,Ni=new Uint8Array(ii),Vi=0;Vi<ii;Vi++)Ni[Vi]=Jt.charCodeAt(Vi);return Ni.buffer},_readBlobAsArrayBuffer:function(Xt,Jt){var ii=new FileReader;ii.onload=function(Ni){Jt(Ni.target.result)},ii.readAsArrayBuffer(Xt)}};me.exports=function(Xt,Jt,ii){Ut.loadAssets(Xt,Jt,ii)}},function(me,Le,wt){function $t(Ni){if(!(this instanceof $t))return new $t(Ni);this.options=Rt.assign({chunkSize:16384,windowBits:0,to:""},Ni||{});var Vi=this.options;Vi.raw&&Vi.windowBits>=0&&Vi.windowBits<16&&(Vi.windowBits=-Vi.windowBits,Vi.windowBits===0&&(Vi.windowBits=-15)),!(Vi.windowBits>=0&&Vi.windowBits<16)||Ni&&Ni.windowBits||(Vi.windowBits+=32),Vi.windowBits>15&&Vi.windowBits<48&&(15&Vi.windowBits)==0&&(Vi.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Xt,this.strm.avail_out=0;var zi=It.inflateInit2(this.strm,Vi.windowBits);if(zi!==Ft.Z_OK)throw new Error(Ut[zi]);if(this.header=new Jt,It.inflateGetHeader(this.strm,this.header),Vi.dictionary&&(typeof Vi.dictionary=="string"?Vi.dictionary=Pt.string2buf(Vi.dictionary):ii.call(Vi.dictionary)==="[object ArrayBuffer]"&&(Vi.dictionary=new Uint8Array(Vi.dictionary)),Vi.raw&&(zi=It.inflateSetDictionary(this.strm,Vi.dictionary))!==Ft.Z_OK))throw new Error(Ut[zi])}function kt(Ni,Vi){var zi=new $t(Vi);if(zi.push(Ni,!0),zi.err)throw zi.msg||Ut[zi.err];return zi.result}var It=wt(52),Rt=wt(8),Pt=wt(57),Ft=wt(58),Ut=wt(59),Xt=wt(60),Jt=wt(61),ii=Object.prototype.toString;$t.prototype.push=function(Ni,Vi){var zi,Xn,Qn,eo,no,to=this.strm,oo=this.options.chunkSize,ao=this.options.dictionary,ro=!1;if(this.ended)return!1;Xn=Vi===~~Vi?Vi:Vi===!0?Ft.Z_FINISH:Ft.Z_NO_FLUSH,typeof Ni=="string"?to.input=Pt.binstring2buf(Ni):ii.call(Ni)==="[object ArrayBuffer]"?to.input=new Uint8Array(Ni):to.input=Ni,to.next_in=0,to.avail_in=to.input.length;do{if(to.avail_out===0&&(to.output=new Rt.Buf8(oo),to.next_out=0,to.avail_out=oo),(zi=It.inflate(to,Ft.Z_NO_FLUSH))===Ft.Z_NEED_DICT&&ao&&(zi=It.inflateSetDictionary(this.strm,ao)),zi===Ft.Z_BUF_ERROR&&ro===!0&&(zi=Ft.Z_OK,ro=!1),zi!==Ft.Z_STREAM_END&&zi!==Ft.Z_OK)return this.onEnd(zi),this.ended=!0,!1;to.next_out&&(to.avail_out!==0&&zi!==Ft.Z_STREAM_END&&(to.avail_in!==0||Xn!==Ft.Z_FINISH&&Xn!==Ft.Z_SYNC_FLUSH)||(this.options.to==="string"?(Qn=Pt.utf8border(to.output,to.next_out),eo=to.next_out-Qn,no=Pt.buf2string(to.output,Qn),to.next_out=eo,to.avail_out=oo-eo,eo&&Rt.arraySet(to.output,to.output,Qn,eo,0),this.onData(no)):this.onData(Rt.shrinkBuf(to.output,to.next_out)))),to.avail_in===0&&to.avail_out===0&&(ro=!0)}while((to.avail_in>0||to.avail_out===0)&&zi!==Ft.Z_STREAM_END);return zi===Ft.Z_STREAM_END&&(Xn=Ft.Z_FINISH),Xn===Ft.Z_FINISH?(zi=It.inflateEnd(this.strm),this.onEnd(zi),this.ended=!0,zi===Ft.Z_OK):Xn!==Ft.Z_SYNC_FLUSH||(this.onEnd(Ft.Z_OK),to.avail_out=0,!0)},$t.prototype.onData=function(Ni){this.chunks.push(Ni)},$t.prototype.onEnd=function(Ni){Ni===Ft.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Rt.flattenChunks(this.chunks)),this.chunks=[],this.err=Ni,this.msg=this.strm.msg},Le.Inflate=$t,Le.inflate=kt,Le.inflateRaw=function(Ni,Vi){return(Vi=Vi||{}).raw=!0,kt(Ni,Vi)},Le.ungzip=kt},function(me,Le,wt){function $t(Kr){return(Kr>>>24&255)+(Kr>>>8&65280)+((65280&Kr)<<8)+((255&Kr)<<24)}function kt(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Ni.Buf16(320),this.work=new Ni.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function It(Kr){var cs;return Kr&&Kr.state?(cs=Kr.state,Kr.total_in=Kr.total_out=cs.total=0,Kr.msg="",cs.wrap&&(Kr.adler=1&cs.wrap),cs.mode=ls,cs.last=0,cs.havedict=0,cs.dmax=32768,cs.head=null,cs.hold=0,cs.bits=0,cs.lencode=cs.lendyn=new Ni.Buf32(Qh),cs.distcode=cs.distdyn=new Ni.Buf32(lu),cs.sane=1,cs.back=-1,Fo):ns}function Rt(Kr){var cs;return Kr&&Kr.state?((cs=Kr.state).wsize=0,cs.whave=0,cs.wnext=0,It(Kr)):ns}function Pt(Kr,cs){var io,yh;return Kr&&Kr.state?(yh=Kr.state,cs<0?(io=0,cs=-cs):(io=1+(cs>>4),cs<48&&(cs&=15)),cs&&(cs<8||cs>15)?ns:(yh.window!==null&&yh.wbits!==cs&&(yh.window=null),yh.wrap=io,yh.wbits=cs,Rt(Kr))):ns}function Ft(Kr,cs){var io,yh;return Kr?(yh=new kt,Kr.state=yh,yh.window=null,(io=Pt(Kr,cs))!==Fo&&(Kr.state=null),io):ns}function Ut(Kr){if(du){var cs;for(Jt=new Ni.Buf32(512),ii=new Ni.Buf32(32),cs=0;cs<144;)Kr.lens[cs++]=8;for(;cs<256;)Kr.lens[cs++]=9;for(;cs<280;)Kr.lens[cs++]=7;for(;cs<288;)Kr.lens[cs++]=8;for(Qn(no,Kr.lens,0,288,Jt,0,Kr.work,{bits:9}),cs=0;cs<32;)Kr.lens[cs++]=5;Qn(to,Kr.lens,0,32,ii,0,Kr.work,{bits:5}),du=!1}Kr.lencode=Jt,Kr.lenbits=9,Kr.distcode=ii,Kr.distbits=5}function Xt(Kr,cs,io,yh){var Bh,hs=Kr.state;return hs.window===null&&(hs.wsize=1<<hs.wbits,hs.wnext=0,hs.whave=0,hs.window=new Ni.Buf8(hs.wsize)),yh>=hs.wsize?(Ni.arraySet(hs.window,cs,io-hs.wsize,hs.wsize,0),hs.wnext=0,hs.whave=hs.wsize):((Bh=hs.wsize-hs.wnext)>yh&&(Bh=yh),Ni.arraySet(hs.window,cs,io-yh,Bh,hs.wnext),(yh-=Bh)?(Ni.arraySet(hs.window,cs,io-yh,yh,0),hs.wnext=yh,hs.whave=hs.wsize):(hs.wnext+=Bh,hs.wnext===hs.wsize&&(hs.wnext=0),hs.whave<hs.wsize&&(hs.whave+=Bh))),0}var Jt,ii,Ni=wt(8),Vi=wt(53),zi=wt(54),Xn=wt(55),Qn=wt(56),eo=0,no=1,to=2,oo=4,ao=5,ro=6,Fo=0,Qr=1,es=2,ns=-2,so=-3,gr=-4,Xr=-5,as=8,ls=1,ms=2,Ah=3,rs=4,us=5,xh=6,Eh=7,$h=8,ts=9,ds=10,vh=11,wh=12,Ch=13,Mh=14,zh=15,Wh=16,Lh=17,eu=18,Th=19,qh=20,Kh=21,Jh=22,tu=23,Yh=24,nu=25,iu=26,Zr=27,ss=28,kh=29,bh=30,Ih=31,Fh=32,Qh=852,lu=592,fu=15,du=!0;Le.inflateReset=Rt,Le.inflateReset2=Pt,Le.inflateResetKeep=It,Le.inflateInit=function(Kr){return Ft(Kr,fu)},Le.inflateInit2=Ft,Le.inflate=function(Kr,cs){var io,yh,Bh,hs,Hh,ps,Nh,os,is,ou,Ph,_h,ru,cu,Sh,Dh,Uh,Vh,su,au,Oh,Zh,Xh,Gh,jh=0,Rh=new Ni.Buf8(4),hu=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!Kr||!Kr.state||!Kr.output||!Kr.input&&Kr.avail_in!==0)return ns;(io=Kr.state).mode===wh&&(io.mode=Ch),Hh=Kr.next_out,Bh=Kr.output,Nh=Kr.avail_out,hs=Kr.next_in,yh=Kr.input,ps=Kr.avail_in,os=io.hold,is=io.bits,ou=ps,Ph=Nh,Zh=Fo;e:for(;;)switch(io.mode){case ls:if(io.wrap===0){io.mode=Ch;break}for(;is<16;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(2&io.wrap&&os===35615){io.check=0,Rh[0]=255&os,Rh[1]=os>>>8&255,io.check=zi(io.check,Rh,2,0),os=0,is=0,io.mode=ms;break}if(io.flags=0,io.head&&(io.head.done=!1),!(1&io.wrap)||(((255&os)<<8)+(os>>8))%31){Kr.msg="incorrect header check",io.mode=bh;break}if((15&os)!==as){Kr.msg="unknown compression method",io.mode=bh;break}if(is-=4,Oh=8+(15&(os>>>=4)),io.wbits===0)io.wbits=Oh;else if(Oh>io.wbits){Kr.msg="invalid window size",io.mode=bh;break}io.dmax=1<<Oh,Kr.adler=io.check=1,io.mode=512&os?ds:wh,os=0,is=0;break;case ms:for(;is<16;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(io.flags=os,(255&io.flags)!==as){Kr.msg="unknown compression method",io.mode=bh;break}if(57344&io.flags){Kr.msg="unknown header flags set",io.mode=bh;break}io.head&&(io.head.text=os>>8&1),512&io.flags&&(Rh[0]=255&os,Rh[1]=os>>>8&255,io.check=zi(io.check,Rh,2,0)),os=0,is=0,io.mode=Ah;case Ah:for(;is<32;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.head&&(io.head.time=os),512&io.flags&&(Rh[0]=255&os,Rh[1]=os>>>8&255,Rh[2]=os>>>16&255,Rh[3]=os>>>24&255,io.check=zi(io.check,Rh,4,0)),os=0,is=0,io.mode=rs;case rs:for(;is<16;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.head&&(io.head.xflags=255&os,io.head.os=os>>8),512&io.flags&&(Rh[0]=255&os,Rh[1]=os>>>8&255,io.check=zi(io.check,Rh,2,0)),os=0,is=0,io.mode=us;case us:if(1024&io.flags){for(;is<16;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.length=os,io.head&&(io.head.extra_len=os),512&io.flags&&(Rh[0]=255&os,Rh[1]=os>>>8&255,io.check=zi(io.check,Rh,2,0)),os=0,is=0}else io.head&&(io.head.extra=null);io.mode=xh;case xh:if(1024&io.flags&&((_h=io.length)>ps&&(_h=ps),_h&&(io.head&&(Oh=io.head.extra_len-io.length,io.head.extra||(io.head.extra=new Array(io.head.extra_len)),Ni.arraySet(io.head.extra,yh,hs,_h,Oh)),512&io.flags&&(io.check=zi(io.check,yh,_h,hs)),ps-=_h,hs+=_h,io.length-=_h),io.length))break e;io.length=0,io.mode=Eh;case Eh:if(2048&io.flags){if(ps===0)break e;_h=0;do Oh=yh[hs+_h++],io.head&&Oh&&io.length<65536&&(io.head.name+=String.fromCharCode(Oh));while(Oh&&_h<ps);if(512&io.flags&&(io.check=zi(io.check,yh,_h,hs)),ps-=_h,hs+=_h,Oh)break e}else io.head&&(io.head.name=null);io.length=0,io.mode=$h;case $h:if(4096&io.flags){if(ps===0)break e;_h=0;do Oh=yh[hs+_h++],io.head&&Oh&&io.length<65536&&(io.head.comment+=String.fromCharCode(Oh));while(Oh&&_h<ps);if(512&io.flags&&(io.check=zi(io.check,yh,_h,hs)),ps-=_h,hs+=_h,Oh)break e}else io.head&&(io.head.comment=null);io.mode=ts;case ts:if(512&io.flags){for(;is<16;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(os!==(65535&io.check)){Kr.msg="header crc mismatch",io.mode=bh;break}os=0,is=0}io.head&&(io.head.hcrc=io.flags>>9&1,io.head.done=!0),Kr.adler=io.check=0,io.mode=wh;break;case ds:for(;is<32;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}Kr.adler=io.check=$t(os),os=0,is=0,io.mode=vh;case vh:if(io.havedict===0)return Kr.next_out=Hh,Kr.avail_out=Nh,Kr.next_in=hs,Kr.avail_in=ps,io.hold=os,io.bits=is,es;Kr.adler=io.check=1,io.mode=wh;case wh:if(cs===ao||cs===ro)break e;case Ch:if(io.last){os>>>=7&is,is-=7&is,io.mode=Zr;break}for(;is<3;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}switch(io.last=1&os,is-=1,3&(os>>>=1)){case 0:io.mode=Mh;break;case 1:if(Ut(io),io.mode=qh,cs===ro){os>>>=2,is-=2;break e}break;case 2:io.mode=Lh;break;case 3:Kr.msg="invalid block type",io.mode=bh}os>>>=2,is-=2;break;case Mh:for(os>>>=7&is,is-=7&is;is<32;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if((65535&os)!=(os>>>16^65535)){Kr.msg="invalid stored block lengths",io.mode=bh;break}if(io.length=65535&os,os=0,is=0,io.mode=zh,cs===ro)break e;case zh:io.mode=Wh;case Wh:if(_h=io.length){if(_h>ps&&(_h=ps),_h>Nh&&(_h=Nh),_h===0)break e;Ni.arraySet(Bh,yh,hs,_h,Hh),ps-=_h,hs+=_h,Nh-=_h,Hh+=_h,io.length-=_h;break}io.mode=wh;break;case Lh:for(;is<14;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(io.nlen=257+(31&os),os>>>=5,is-=5,io.ndist=1+(31&os),os>>>=5,is-=5,io.ncode=4+(15&os),os>>>=4,is-=4,io.nlen>286||io.ndist>30){Kr.msg="too many length or distance symbols",io.mode=bh;break}io.have=0,io.mode=eu;case eu:for(;io.have<io.ncode;){for(;is<3;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.lens[hu[io.have++]]=7&os,os>>>=3,is-=3}for(;io.have<19;)io.lens[hu[io.have++]]=0;if(io.lencode=io.lendyn,io.lenbits=7,Xh={bits:io.lenbits},Zh=Qn(eo,io.lens,0,19,io.lencode,0,io.work,Xh),io.lenbits=Xh.bits,Zh){Kr.msg="invalid code lengths set",io.mode=bh;break}io.have=0,io.mode=Th;case Th:for(;io.have<io.nlen+io.ndist;){for(;Dh=(jh=io.lencode[os&(1<<io.lenbits)-1])>>>16&255,Uh=65535&jh,!((Sh=jh>>>24)<=is);){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(Uh<16)os>>>=Sh,is-=Sh,io.lens[io.have++]=Uh;else{if(Uh===16){for(Gh=Sh+2;is<Gh;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(os>>>=Sh,is-=Sh,io.have===0){Kr.msg="invalid bit length repeat",io.mode=bh;break}Oh=io.lens[io.have-1],_h=3+(3&os),os>>>=2,is-=2}else if(Uh===17){for(Gh=Sh+3;is<Gh;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}is-=Sh,Oh=0,_h=3+(7&(os>>>=Sh)),os>>>=3,is-=3}else{for(Gh=Sh+7;is<Gh;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}is-=Sh,Oh=0,_h=11+(127&(os>>>=Sh)),os>>>=7,is-=7}if(io.have+_h>io.nlen+io.ndist){Kr.msg="invalid bit length repeat",io.mode=bh;break}for(;_h--;)io.lens[io.have++]=Oh}}if(io.mode===bh)break;if(io.lens[256]===0){Kr.msg="invalid code -- missing end-of-block",io.mode=bh;break}if(io.lenbits=9,Xh={bits:io.lenbits},Zh=Qn(no,io.lens,0,io.nlen,io.lencode,0,io.work,Xh),io.lenbits=Xh.bits,Zh){Kr.msg="invalid literal/lengths set",io.mode=bh;break}if(io.distbits=6,io.distcode=io.distdyn,Xh={bits:io.distbits},Zh=Qn(to,io.lens,io.nlen,io.ndist,io.distcode,0,io.work,Xh),io.distbits=Xh.bits,Zh){Kr.msg="invalid distances set",io.mode=bh;break}if(io.mode=qh,cs===ro)break e;case qh:io.mode=Kh;case Kh:if(ps>=6&&Nh>=258){Kr.next_out=Hh,Kr.avail_out=Nh,Kr.next_in=hs,Kr.avail_in=ps,io.hold=os,io.bits=is,Xn(Kr,Ph),Hh=Kr.next_out,Bh=Kr.output,Nh=Kr.avail_out,hs=Kr.next_in,yh=Kr.input,ps=Kr.avail_in,os=io.hold,is=io.bits,io.mode===wh&&(io.back=-1);break}for(io.back=0;Dh=(jh=io.lencode[os&(1<<io.lenbits)-1])>>>16&255,Uh=65535&jh,!((Sh=jh>>>24)<=is);){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(Dh&&(240&Dh)==0){for(Vh=Sh,su=Dh,au=Uh;Dh=(jh=io.lencode[au+((os&(1<<Vh+su)-1)>>Vh)])>>>16&255,Uh=65535&jh,!(Vh+(Sh=jh>>>24)<=is);){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}os>>>=Vh,is-=Vh,io.back+=Vh}if(os>>>=Sh,is-=Sh,io.back+=Sh,io.length=Uh,Dh===0){io.mode=iu;break}if(32&Dh){io.back=-1,io.mode=wh;break}if(64&Dh){Kr.msg="invalid literal/length code",io.mode=bh;break}io.extra=15&Dh,io.mode=Jh;case Jh:if(io.extra){for(Gh=io.extra;is<Gh;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.length+=os&(1<<io.extra)-1,os>>>=io.extra,is-=io.extra,io.back+=io.extra}io.was=io.length,io.mode=tu;case tu:for(;Dh=(jh=io.distcode[os&(1<<io.distbits)-1])>>>16&255,Uh=65535&jh,!((Sh=jh>>>24)<=is);){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if((240&Dh)==0){for(Vh=Sh,su=Dh,au=Uh;Dh=(jh=io.distcode[au+((os&(1<<Vh+su)-1)>>Vh)])>>>16&255,Uh=65535&jh,!(Vh+(Sh=jh>>>24)<=is);){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}os>>>=Vh,is-=Vh,io.back+=Vh}if(os>>>=Sh,is-=Sh,io.back+=Sh,64&Dh){Kr.msg="invalid distance code",io.mode=bh;break}io.offset=Uh,io.extra=15&Dh,io.mode=Yh;case Yh:if(io.extra){for(Gh=io.extra;is<Gh;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}io.offset+=os&(1<<io.extra)-1,os>>>=io.extra,is-=io.extra,io.back+=io.extra}if(io.offset>io.dmax){Kr.msg="invalid distance too far back",io.mode=bh;break}io.mode=nu;case nu:if(Nh===0)break e;if(_h=Ph-Nh,io.offset>_h){if((_h=io.offset-_h)>io.whave&&io.sane){Kr.msg="invalid distance too far back",io.mode=bh;break}_h>io.wnext?(_h-=io.wnext,ru=io.wsize-_h):ru=io.wnext-_h,_h>io.length&&(_h=io.length),cu=io.window}else cu=Bh,ru=Hh-io.offset,_h=io.length;_h>Nh&&(_h=Nh),Nh-=_h,io.length-=_h;do Bh[Hh++]=cu[ru++];while(--_h);io.length===0&&(io.mode=Kh);break;case iu:if(Nh===0)break e;Bh[Hh++]=io.length,Nh--,io.mode=Kh;break;case Zr:if(io.wrap){for(;is<32;){if(ps===0)break e;ps--,os|=yh[hs++]<<is,is+=8}if(Ph-=Nh,Kr.total_out+=Ph,io.total+=Ph,Ph&&(Kr.adler=io.check=io.flags?zi(io.check,Bh,Ph,Hh-Ph):Vi(io.check,Bh,Ph,Hh-Ph)),Ph=Nh,(io.flags?os:$t(os))!==io.check){Kr.msg="incorrect data check",io.mode=bh;break}os=0,is=0}io.mode=ss;case ss:if(io.wrap&&io.flags){for(;is<32;){if(ps===0)break e;ps--,os+=yh[hs++]<<is,is+=8}if(os!==(4294967295&io.total)){Kr.msg="incorrect length check",io.mode=bh;break}os=0,is=0}io.mode=kh;case kh:Zh=Qr;break e;case bh:Zh=so;break e;case Ih:return gr;case Fh:default:return ns}return Kr.next_out=Hh,Kr.avail_out=Nh,Kr.next_in=hs,Kr.avail_in=ps,io.hold=os,io.bits=is,(io.wsize||Ph!==Kr.avail_out&&io.mode<bh&&(io.mode<Zr||cs!==oo))&&Xt(Kr,Kr.output,Kr.next_out,Ph-Kr.avail_out)?(io.mode=Ih,gr):(ou-=Kr.avail_in,Ph-=Kr.avail_out,Kr.total_in+=ou,Kr.total_out+=Ph,io.total+=Ph,io.wrap&&Ph&&(Kr.adler=io.check=io.flags?zi(io.check,Bh,Ph,Kr.next_out-Ph):Vi(io.check,Bh,Ph,Kr.next_out-Ph)),Kr.data_type=io.bits+(io.last?64:0)+(io.mode===wh?128:0)+(io.mode===qh||io.mode===zh?256:0),(ou===0&&Ph===0||cs===oo)&&Zh===Fo&&(Zh=Xr),Zh)},Le.inflateEnd=function(Kr){if(!Kr||!Kr.state)return ns;var cs=Kr.state;return cs.window&&(cs.window=null),Kr.state=null,Fo},Le.inflateGetHeader=function(Kr,cs){var io;return Kr&&Kr.state?(2&(io=Kr.state).wrap)==0?ns:(io.head=cs,cs.done=!1,Fo):ns},Le.inflateSetDictionary=function(Kr,cs){var io,yh=cs.length;return Kr&&Kr.state?(io=Kr.state).wrap!==0&&io.mode!==vh?ns:io.mode===vh&&Vi(1,cs,yh,0)!==io.check?so:Xt(Kr,cs,yh,yh)?(io.mode=Ih,gr):(io.havedict=1,Fo):ns},Le.inflateInfo="pako inflate (from Nodeca project)"},function(me,Le,wt){me.exports=function($t,kt,It,Rt){for(var Pt=65535&$t|0,Ft=$t>>>16&65535|0,Ut=0;It!==0;){It-=Ut=It>2e3?2e3:It;do Ft=Ft+(Pt=Pt+kt[Rt++]|0)|0;while(--Ut);Pt%=65521,Ft%=65521}return Pt|Ft<<16|0}},function(me,Le,wt){var $t=function(){for(var kt,It=[],Rt=0;Rt<256;Rt++){kt=Rt;for(var Pt=0;Pt<8;Pt++)kt=1&kt?3988292384^kt>>>1:kt>>>1;It[Rt]=kt}return It}();me.exports=function(kt,It,Rt,Pt){var Ft=$t,Ut=Pt+Rt;kt^=-1;for(var Xt=Pt;Xt<Ut;Xt++)kt=kt>>>8^Ft[255&(kt^It[Xt])];return-1^kt}},function(me,Le,wt){me.exports=function($t,kt){var It,Rt,Pt,Ft,Ut,Xt,Jt,ii,Ni,Vi,zi,Xn,Qn,eo,no,to,oo,ao,ro,Fo,Qr,es,ns,so,gr;It=$t.state,Rt=$t.next_in,so=$t.input,Pt=Rt+($t.avail_in-5),Ft=$t.next_out,gr=$t.output,Ut=Ft-(kt-$t.avail_out),Xt=Ft+($t.avail_out-257),Jt=It.dmax,ii=It.wsize,Ni=It.whave,Vi=It.wnext,zi=It.window,Xn=It.hold,Qn=It.bits,eo=It.lencode,no=It.distcode,to=(1<<It.lenbits)-1,oo=(1<<It.distbits)-1;e:do{Qn<15&&(Xn+=so[Rt++]<<Qn,Qn+=8,Xn+=so[Rt++]<<Qn,Qn+=8),ao=eo[Xn&to];t:for(;;){if(Xn>>>=ro=ao>>>24,Qn-=ro,(ro=ao>>>16&255)==0)gr[Ft++]=65535&ao;else{if(!(16&ro)){if((64&ro)==0){ao=eo[(65535&ao)+(Xn&(1<<ro)-1)];continue t}if(32&ro){It.mode=12;break e}$t.msg="invalid literal/length code",It.mode=30;break e}Fo=65535&ao,(ro&=15)&&(Qn<ro&&(Xn+=so[Rt++]<<Qn,Qn+=8),Fo+=Xn&(1<<ro)-1,Xn>>>=ro,Qn-=ro),Qn<15&&(Xn+=so[Rt++]<<Qn,Qn+=8,Xn+=so[Rt++]<<Qn,Qn+=8),ao=no[Xn&oo];i:for(;;){if(Xn>>>=ro=ao>>>24,Qn-=ro,!(16&(ro=ao>>>16&255))){if((64&ro)==0){ao=no[(65535&ao)+(Xn&(1<<ro)-1)];continue i}$t.msg="invalid distance code",It.mode=30;break e}if(Qr=65535&ao,Qn<(ro&=15)&&(Xn+=so[Rt++]<<Qn,(Qn+=8)<ro&&(Xn+=so[Rt++]<<Qn,Qn+=8)),(Qr+=Xn&(1<<ro)-1)>Jt){$t.msg="invalid distance too far back",It.mode=30;break e}if(Xn>>>=ro,Qn-=ro,Qr>(ro=Ft-Ut)){if((ro=Qr-ro)>Ni&&It.sane){$t.msg="invalid distance too far back",It.mode=30;break e}if(es=0,ns=zi,Vi===0){if(es+=ii-ro,ro<Fo){Fo-=ro;do gr[Ft++]=zi[es++];while(--ro);es=Ft-Qr,ns=gr}}else if(Vi<ro){if(es+=ii+Vi-ro,(ro-=Vi)<Fo){Fo-=ro;do gr[Ft++]=zi[es++];while(--ro);if(es=0,Vi<Fo){Fo-=ro=Vi;do gr[Ft++]=zi[es++];while(--ro);es=Ft-Qr,ns=gr}}}else if(es+=Vi-ro,ro<Fo){Fo-=ro;do gr[Ft++]=zi[es++];while(--ro);es=Ft-Qr,ns=gr}for(;Fo>2;)gr[Ft++]=ns[es++],gr[Ft++]=ns[es++],gr[Ft++]=ns[es++],Fo-=3;Fo&&(gr[Ft++]=ns[es++],Fo>1&&(gr[Ft++]=ns[es++]))}else{es=Ft-Qr;do gr[Ft++]=gr[es++],gr[Ft++]=gr[es++],gr[Ft++]=gr[es++],Fo-=3;while(Fo>2);Fo&&(gr[Ft++]=gr[es++],Fo>1&&(gr[Ft++]=gr[es++]))}break}}break}}while(Rt<Pt&&Ft<Xt);Rt-=Fo=Qn>>3,Xn&=(1<<(Qn-=Fo<<3))-1,$t.next_in=Rt,$t.next_out=Ft,$t.avail_in=Rt<Pt?Pt-Rt+5:5-(Rt-Pt),$t.avail_out=Ft<Xt?Xt-Ft+257:257-(Ft-Xt),It.hold=Xn,It.bits=Qn}},function(me,Le,wt){var $t=wt(8),kt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],It=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Rt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Pt=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];me.exports=function(Ft,Ut,Xt,Jt,ii,Ni,Vi,zi){var Xn,Qn,eo,no,to,oo,ao,ro,Fo,Qr=zi.bits,es=0,ns=0,so=0,gr=0,Xr=0,as=0,ls=0,ms=0,Ah=0,rs=0,us=null,xh=0,Eh=new $t.Buf16(16),$h=new $t.Buf16(16),ts=null,ds=0;for(es=0;es<=15;es++)Eh[es]=0;for(ns=0;ns<Jt;ns++)Eh[Ut[Xt+ns]]++;for(Xr=Qr,gr=15;gr>=1&&Eh[gr]===0;gr--);if(Xr>gr&&(Xr=gr),gr===0)return ii[Ni++]=20971520,ii[Ni++]=20971520,zi.bits=1,0;for(so=1;so<gr&&Eh[so]===0;so++);for(Xr<so&&(Xr=so),ms=1,es=1;es<=15;es++)if(ms<<=1,(ms-=Eh[es])<0)return-1;if(ms>0&&(Ft===0||gr!==1))return-1;for($h[1]=0,es=1;es<15;es++)$h[es+1]=$h[es]+Eh[es];for(ns=0;ns<Jt;ns++)Ut[Xt+ns]!==0&&(Vi[$h[Ut[Xt+ns]]++]=ns);if(Ft===0?(us=ts=Vi,oo=19):Ft===1?(us=kt,xh-=257,ts=It,ds-=257,oo=256):(us=Rt,ts=Pt,oo=-1),rs=0,ns=0,es=so,to=Ni,as=Xr,ls=0,eo=-1,no=(Ah=1<<Xr)-1,Ft===1&&Ah>852||Ft===2&&Ah>592)return 1;for(;;){ao=es-ls,Vi[ns]<oo?(ro=0,Fo=Vi[ns]):Vi[ns]>oo?(ro=ts[ds+Vi[ns]],Fo=us[xh+Vi[ns]]):(ro=96,Fo=0),Xn=1<<es-ls,so=Qn=1<<as;do ii[to+(rs>>ls)+(Qn-=Xn)]=ao<<24|ro<<16|Fo|0;while(Qn!==0);for(Xn=1<<es-1;rs&Xn;)Xn>>=1;if(Xn!==0?(rs&=Xn-1,rs+=Xn):rs=0,ns++,--Eh[es]==0){if(es===gr)break;es=Ut[Xt+Vi[ns]]}if(es>Xr&&(rs&no)!==eo){for(ls===0&&(ls=Xr),to+=so,ms=1<<(as=es-ls);as+ls<gr&&!((ms-=Eh[as+ls])<=0);)as++,ms<<=1;if(Ah+=1<<as,Ft===1&&Ah>852||Ft===2&&Ah>592)return 1;ii[eo=rs&no]=Xr<<24|as<<16|to-Ni|0}}return rs!==0&&(ii[to+rs]=es-ls<<24|64<<16|0),zi.bits=Xr,0}},function(me,Le,wt){function $t(Ut,Xt){if(Xt<65534&&(Ut.subarray&&Rt||!Ut.subarray&&It))return String.fromCharCode.apply(null,kt.shrinkBuf(Ut,Xt));for(var Jt="",ii=0;ii<Xt;ii++)Jt+=String.fromCharCode(Ut[ii]);return Jt}var kt=wt(8),It=!0,Rt=!0;try{String.fromCharCode.apply(null,[0])}catch{It=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Rt=!1}for(var Pt=new kt.Buf8(256),Ft=0;Ft<256;Ft++)Pt[Ft]=Ft>=252?6:Ft>=248?5:Ft>=240?4:Ft>=224?3:Ft>=192?2:1;Pt[254]=Pt[254]=1,Le.string2buf=function(Ut){var Xt,Jt,ii,Ni,Vi,zi=Ut.length,Xn=0;for(Ni=0;Ni<zi;Ni++)(64512&(Jt=Ut.charCodeAt(Ni)))==55296&&Ni+1<zi&&(64512&(ii=Ut.charCodeAt(Ni+1)))==56320&&(Jt=65536+(Jt-55296<<10)+(ii-56320),Ni++),Xn+=Jt<128?1:Jt<2048?2:Jt<65536?3:4;for(Xt=new kt.Buf8(Xn),Vi=0,Ni=0;Vi<Xn;Ni++)(64512&(Jt=Ut.charCodeAt(Ni)))==55296&&Ni+1<zi&&(64512&(ii=Ut.charCodeAt(Ni+1)))==56320&&(Jt=65536+(Jt-55296<<10)+(ii-56320),Ni++),Jt<128?Xt[Vi++]=Jt:Jt<2048?(Xt[Vi++]=192|Jt>>>6,Xt[Vi++]=128|63&Jt):Jt<65536?(Xt[Vi++]=224|Jt>>>12,Xt[Vi++]=128|Jt>>>6&63,Xt[Vi++]=128|63&Jt):(Xt[Vi++]=240|Jt>>>18,Xt[Vi++]=128|Jt>>>12&63,Xt[Vi++]=128|Jt>>>6&63,Xt[Vi++]=128|63&Jt);return Xt},Le.buf2binstring=function(Ut){return $t(Ut,Ut.length)},Le.binstring2buf=function(Ut){for(var Xt=new kt.Buf8(Ut.length),Jt=0,ii=Xt.length;Jt<ii;Jt++)Xt[Jt]=Ut.charCodeAt(Jt);return Xt},Le.buf2string=function(Ut,Xt){var Jt,ii,Ni,Vi,zi=Xt||Ut.length,Xn=new Array(2*zi);for(ii=0,Jt=0;Jt<zi;)if((Ni=Ut[Jt++])<128)Xn[ii++]=Ni;else if((Vi=Pt[Ni])>4)Xn[ii++]=65533,Jt+=Vi-1;else{for(Ni&=Vi===2?31:Vi===3?15:7;Vi>1&&Jt<zi;)Ni=Ni<<6|63&Ut[Jt++],Vi--;Vi>1?Xn[ii++]=65533:Ni<65536?Xn[ii++]=Ni:(Ni-=65536,Xn[ii++]=55296|Ni>>10&1023,Xn[ii++]=56320|1023&Ni)}return $t(Xn,ii)},Le.utf8border=function(Ut,Xt){var Jt;for((Xt=Xt||Ut.length)>Ut.length&&(Xt=Ut.length),Jt=Xt-1;Jt>=0&&(192&Ut[Jt])==128;)Jt--;return Jt<0||Jt===0?Xt:Jt+Pt[Ut[Jt]]>Xt?Jt:Xt}},function(me,Le,wt){me.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(me,Le,wt){me.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(me,Le,wt){me.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},function(me,Le,wt){me.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},function(me,Le,wt){me.exports=function($t){function kt(Rt){if(It[Rt])return It[Rt].exports;var Pt=It[Rt]={i:Rt,l:!1,exports:{}};return $t[Rt].call(Pt.exports,Pt,Pt.exports,kt),Pt.l=!0,Pt.exports}var It={};return kt.m=$t,kt.c=It,kt.d=function(Rt,Pt,Ft){kt.o(Rt,Pt)||Object.defineProperty(Rt,Pt,{configurable:!1,enumerable:!0,get:Ft})},kt.n=function(Rt){var Pt=Rt&&Rt.__esModule?function(){return Rt.default}:function(){return Rt};return kt.d(Pt,"a",Pt),Pt},kt.o=function(Rt,Pt){return Object.prototype.hasOwnProperty.call(Rt,Pt)},kt.p="",kt(kt.s=0)}([function($t,kt,It){Object.defineProperty(kt,"__esModule",{value:!0});var Rt=It(1);$t.exports=Rt.ValueAnimator},function($t,kt,It){Object.defineProperty(kt,"__esModule",{value:!0});var Rt=function(){function Pt(){this.startValue=0,this.endValue=0,this.duration=0,this.loops=1,this.fillRule=0,this.onStart=function(){},this.onUpdate=function(){},this.onEnd=function(){},this.mRunning=!1,this.mStartTime=0,this.mCurrentFrication=0,this.mReverse=!1}return Pt.prototype.start=function(Ft){Ft===void 0&&(Ft=void 0),this.doStart(!1,Ft)},Pt.prototype.reverse=function(Ft){Ft===void 0&&(Ft=void 0),this.doStart(!0,Ft)},Pt.prototype.stop=function(){this.doStop()},Object.defineProperty(Pt.prototype,"animatedValue",{get:function(){return(this.endValue-this.startValue)*this.mCurrentFrication+this.startValue},enumerable:!0,configurable:!0}),Pt.prototype.doStart=function(Ft,Ut){Ft===void 0&&(Ft=!1),Ut===void 0&&(Ut=void 0),this.mReverse=Ft,this.mRunning=!0,this.mStartTime=Pt.currentTimeMillsecond(),Ut&&(this.mStartTime-=Ft?(1-Ut/(this.endValue-this.startValue))*this.duration:Ut/(this.endValue-this.startValue)*this.duration),this.mCurrentFrication=0,this.onStart(),this.doFrame()},Pt.prototype.doStop=function(){this.mRunning=!1},Pt.prototype.doFrame=function(){this.mRunning&&(this.doDeltaTime(Pt.currentTimeMillsecond()-this.mStartTime),this.mRunning&&Pt.requestAnimationFrame(this.doFrame.bind(this)))},Pt.prototype.doDeltaTime=function(Ft){Ft>=this.duration*this.loops?(this.mCurrentFrication=this.fillRule===1?0:1,this.mRunning=!1):(this.mCurrentFrication=Ft%this.duration/this.duration,this.mReverse&&(this.mCurrentFrication=1-this.mCurrentFrication)),this.onUpdate(this.animatedValue),this.mRunning===!1&&this.onEnd()},Pt.currentTimeMillsecond=function(){return typeof performance=="undefined"?new Date().getTime():performance.now()},Pt.requestAnimationFrame=function(Ft){return typeof requestAnimationFrame=="undefined"?setTimeout(Ft,16):window.requestAnimationFrame(Ft)},Pt}();kt.ValueAnimator=Rt}])},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.Player=void 0;var $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Pt){return typeof Pt}:function(Pt){return Pt&&typeof Symbol=="function"&&Pt.constructor===Symbol&&Pt!==Symbol.prototype?"symbol":typeof Pt},kt=function(){function Pt(Ft,Ut){for(var Xt=0;Xt<Ut.length;Xt++){var Jt=Ut[Xt];Jt.enumerable=Jt.enumerable||!1,Jt.configurable=!0,"value"in Jt&&(Jt.writable=!0),Object.defineProperty(Ft,Jt.key,Jt)}}return function(Ft,Ut,Xt){return Ut&&Pt(Ft.prototype,Ut),Xt&&Pt(Ft,Xt),Ft}}(),It=wt(65),Rt=wt(62);Le.Player=function(){function Pt(Ft){(function(Ut,Xt){if(!(Ut instanceof Xt))throw new TypeError("Cannot call a class as a function")})(this,Pt),this.loops=0,this.clearsAfterStop=!0,this.fillMode="Forward",this._asChild=!1,this._container=void 0,this._renderer=void 0,this._animator=void 0,this._drawingCanvas=void 0,this._contentMode="AspectFit",this._videoItem=void 0,this._forwardAnimating=!1,this._currentFrame=0,this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={},this._onFinished=void 0,this._onFrame=void 0,this._onPercentage=void 0,this._container=typeof Ft=="string"?document.querySelector(Ft):Ft,this._asChild=Ft===void 0,this._init()}return kt(Pt,[{key:"setVideoItem",value:function(Ft){this._currentFrame=0,this._videoItem=Ft,this._renderer.prepare(),this.clear(),this._update()}},{key:"setContentMode",value:function(Ft){this._contentMode=Ft,this._update()}},{key:"setClipsToBounds",value:function(Ft){this._container instanceof HTMLDivElement&&(this._container.style.overflowX=this._container.style.overflowY=Ft?"hidden":void 0)}},{key:"startAnimation",value:function(Ft){this.stopAnimation(!1),this._doStart(void 0,Ft,void 0)}},{key:"startAnimationWithRange",value:function(Ft,Ut){this.stopAnimation(!1),this._doStart(Ft,Ut,void 0)}},{key:"pauseAnimation",value:function(){this.stopAnimation(!1)}},{key:"stopAnimation",value:function(Ft){this._forwardAnimating=!1,this._animator!==void 0&&this._animator.stop(),Ft===void 0&&(Ft=this.clearsAfterStop),Ft&&this.clear()}},{key:"clear",value:function(){this._renderer.clear(),this._renderer.clearAudios()}},{key:"stepToFrame",value:function(Ft,Ut){Ft>=this._videoItem.frames||Ft<0||(this.pauseAnimation(),this._currentFrame=Ft,this._update(),Ut&&this._doStart(void 0,!1,this._currentFrame))}},{key:"stepToPercentage",value:function(Ft,Ut){var Xt=parseInt(Ft*this._videoItem.frames);Xt>=this._videoItem.frames&&Xt>0&&(Xt=this._videoItem.frames-1),this.stepToFrame(Xt,Ut)}},{key:"setImage",value:function(Ft,Ut,Xt){this._dynamicImage[Ut]=Ft,Xt!==void 0&&Xt instanceof Array&&Xt.length==6&&(this._dynamicImageTransform[Ut]=Xt)}},{key:"setText",value:function(Ft,Ut){var Xt=typeof Ft=="string"?Ft:Ft.text,Jt=((Ft===void 0?"undefined":$t(Ft))==="object"?Ft.size:"14px")||"14px",ii=((Ft===void 0?"undefined":$t(Ft))==="object"?Ft.family:"Arial")||"Arial",Ni=((Ft===void 0?"undefined":$t(Ft))==="object"?Ft.color:"#000000")||"#000000",Vi=((Ft===void 0?"undefined":$t(Ft))==="object"?Ft.offset:{x:0,y:0})||{x:0,y:0};this._dynamicText[Ut]={text:Xt,style:Jt+" "+ii,color:Ni,offset:Vi}}},{key:"clearDynamicObjects",value:function(){this._dynamicImage={},this._dynamicImageTransform={},this._dynamicText={}}},{key:"onFinished",value:function(Ft){this._onFinished=Ft}},{key:"onFrame",value:function(Ft){this._onFrame=Ft}},{key:"onPercentage",value:function(Ft){this._onPercentage=Ft}},{key:"drawOnContext",value:function(Ft,Ut,Xt,Jt,ii){this._drawingCanvas&&this._videoItem&&Ft.drawImage(this._drawingCanvas,Ut,Xt,Jt||this._videoItem.videoSize.width,ii||this._videoItem.videoSize.height)}},{key:"_init",value:function(){if(this._container instanceof HTMLDivElement||this._asChild){if(this._container)for(var Ft=this._container.querySelectorAll("canvas"),Ut=0;Ut<Ft.length;Ut++){var Xt=Ft[Ut];Xt!==void 0&&Xt.__isPlayer&&this._container.removeChild(Xt)}this._drawingCanvas=document.createElement("canvas"),this._drawingCanvas.__isPlayer=!0,this._drawingCanvas.style.backgroundColor="transparent",this._container&&(this._container.appendChild(this._drawingCanvas),this._container.style.textAlign="left")}this._renderer=new It.Renderer(this)}},{key:"_doStart",value:function(Ft,Ut,Xt){var Jt=this;this._animator=new Rt,Ft!==void 0?(this._animator.startValue=Math.max(0,Ft.location),this._animator.endValue=Math.min(this._videoItem.frames-1,Ft.location+Ft.length),this._animator.duration=(this._animator.endValue-this._animator.startValue+1)*(1/this._videoItem.FPS)*1e3):(this._animator.startValue=0,this._animator.endValue=this._videoItem.frames-1,this._animator.duration=this._videoItem.frames*(1/this._videoItem.FPS)*1e3),this._animator.loops=this.loops<=0?1/0:this.loops,this._animator.fillRule=this.fillMode==="Backward"?1:0,this._animator.onUpdate=function(ii){Jt._currentFrame!==Math.floor(ii)&&(Jt._forwardAnimating&&Jt._currentFrame>Math.floor(ii)&&Jt._renderer.clearAudios(),Jt._currentFrame=Math.floor(ii),Jt._update(),typeof Jt._onFrame=="function"&&Jt._onFrame(Jt._currentFrame),typeof Jt._onPercentage=="function"&&Jt._onPercentage(parseFloat(Jt._currentFrame+1)/parseFloat(Jt._videoItem.frames)))},this._animator.onEnd=function(){Jt._forwardAnimating=!1,Jt.clearsAfterStop===!0&&Jt.clear(),typeof Jt._onFinished=="function"&&Jt._onFinished()},Ut===!0?(this._animator.reverse(Xt),this._forwardAnimating=!1):(this._animator.start(Xt),this._forwardAnimating=!0),this._currentFrame=this._animator.startValue,this._update()}},{key:"_resize",value:function(){var Ft=!1;if(this._drawingCanvas){var Ut;Ut=this._drawingCanvas.parentNode?{width:this._drawingCanvas.parentNode.clientWidth,height:this._drawingCanvas.parentNode.clientHeight}:this._videoItem.videoSize;var Xt=this._videoItem.videoSize;if(Ut.width>=Xt.width&&Ut.height>=Xt.height)this._drawingCanvas.width=Ut.width,this._drawingCanvas.height=Ut.height,this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="",Ft=!0;else{if(this._drawingCanvas.width=Xt.width,this._drawingCanvas.height=Xt.height,this._contentMode==="Fill"){var Jt=Ut.width/Xt.width,ii=Ut.height/Xt.height,Ni=(Xt.width*Jt-Xt.width)/2,Vi=(Xt.height*ii-Xt.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+Jt+", 0.0, 0.0, "+ii+", "+Ni+", "+Vi+")"}else if(this._contentMode==="AspectFit"||this._contentMode==="AspectFill"){var zi=Xt.width/Xt.height,Xn=Ut.width/Ut.height;if(zi>=Xn&&this._contentMode==="AspectFit"||zi<=Xn&&this._contentMode==="AspectFill"){var Qn=Ut.width/Xt.width,eo=(Xt.width*Qn-Xt.width)/2,no=(Xt.height*Qn-Xt.height)/2+(Ut.height-Xt.height*Qn)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+Qn+", 0.0, 0.0, "+Qn+", "+eo+", "+no+")"}else if(zi<Xn&&this._contentMode==="AspectFit"||zi>Xn&&this._contentMode==="AspectFill"){var to=Ut.height/Xt.height,oo=(Xt.width*to-Xt.width)/2+(Ut.width-Xt.width*to)/2,ao=(Xt.height*to-Xt.height)/2;this._drawingCanvas.style.webkitTransform=this._drawingCanvas.style.transform="matrix("+to+", 0.0, 0.0, "+to+", "+oo+", "+ao+")"}}this._globalTransform=void 0}}if(this._drawingCanvas===void 0||Ft===!0){var ro=1,Fo=1,Qr=0,es=0,ns={width:this._container!==void 0?this._container.clientWidth:0,height:this._container!==void 0?this._container.clientHeight:0},so=this._videoItem.videoSize;if(this._contentMode==="Fill")ro=ns.width/so.width,Fo=ns.height/so.height;else if(this._contentMode==="AspectFit"||this._contentMode==="AspectFill"){var gr=so.width/so.height,Xr=ns.width/ns.height;gr>=Xr&&this._contentMode==="AspectFit"||gr<=Xr&&this._contentMode==="AspectFill"?(ro=Fo=ns.width/so.width,es=(ns.height-so.height*Fo)/2):(gr<Xr&&this._contentMode==="AspectFit"||gr>Xr&&this._contentMode==="AspectFill")&&(ro=Fo=ns.height/so.height,Qr=(ns.width-so.width*ro)/2)}this._globalTransform={a:ro,b:0,c:0,d:Fo,tx:Qr,ty:es}}}},{key:"_update",value:function(){this._videoItem!==void 0&&(this._resize(),this._renderer.drawFrame(this._currentFrame),this._renderer.playAudio(this._currentFrame))}}]),Pt}()},function(me,Le,wt){var $t=wt(13),kt=wt(63),It=wt(66);me.exports={Parser:$t.Parser,Player:kt.Player,autoload:It.AutoLoader.autoload},It.AutoLoader.autoload()},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.Renderer=void 0;var $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Ft){return typeof Ft}:function(Ft){return Ft&&typeof Symbol=="function"&&Ft.constructor===Symbol&&Ft!==Symbol.prototype?"symbol":typeof Ft},kt=function(){function Ft(Ut,Xt){for(var Jt=0;Jt<Xt.length;Jt++){var ii=Xt[Jt];ii.enumerable=ii.enumerable||!1,ii.configurable=!0,"value"in ii&&(ii.writable=!0),Object.defineProperty(Ut,ii.key,ii)}}return function(Ut,Xt,Jt){return Xt&&Ft(Ut.prototype,Xt),Jt&&Ft(Ut,Jt),Ut}}(),It=wt(5),Rt=wt(15),Pt=wt(14);Le.Renderer=function(){function Ft(Ut){(function(Xt,Jt){if(!(Xt instanceof Jt))throw new TypeError("Cannot call a class as a function")})(this,Ft),this._owner=void 0,this._prepared=!1,this._undrawFrame=void 0,this._bitmapCache=void 0,this._soundsQueue=[],this._owner=Ut}return kt(Ft,[{key:"dataURLtoBlob",value:function(Ut){for(var Xt=Ut.split(","),Jt=Xt[0].match(/:(.*?);/)[1],ii=atob(Xt[1]),Ni=ii.length,Vi=new Uint8Array(Ni);Ni--;)Vi[Ni]=ii.charCodeAt(Ni);return new Blob([Vi],{type:Jt})}},{key:"prepare",value:function(){var Ut,Xt,Jt=this;if(this._prepared=!1,this._bitmapCache=void 0,this._owner._videoItem.images===void 0||Object.keys(this._owner._videoItem.images).length==0)return this._bitmapCache={},void(this._prepared=!0);this._bitmapCache===void 0&&function(){Jt._bitmapCache={};var ii=0,Ni=0;for(Ut in Jt._owner._videoItem.images){var Vi=Jt._owner._videoItem.images[Ut];if(Vi.indexOf("iVBO")===0||Vi.indexOf("/9j/2w")===0){ii++;var zi=document.createElement("img");zi.onload=function(){++Ni==ii&&(this._prepared=!0,typeof this._undrawFrame=="number"&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0))}.bind(Jt),zi.src="data:image/png;base64,"+Vi;var Xn=Ut.replace(".matte","");Jt._bitmapCache[Xn]=zi}else Vi.indexOf("SUQz")===0&&window.Howl!==void 0&&(ii++,(Xt=new Howl({src:[navigator.vendor==="Google Inc."?URL.createObjectURL(Jt.dataURLtoBlob("data:audio/x-mpeg;base64,"+Vi)):"data:audio/x-mpeg;base64,"+Vi],html5:navigator.vendor==="Google Inc."||void 0,preload:navigator.vendor==="Google Inc."||void 0,format:navigator.vendor==="Google Inc."?["mp3"]:void 0})).once("load",function(){++Ni==ii&&(this._prepared=!0,typeof this._undrawFrame=="number"&&(this.drawFrame(this._undrawFrame),this._undrawFrame=void 0))}.bind(Jt)),Xt.on("loaderror",function(Qn){console.error(Qn)}),Jt._bitmapCache[Ut]=Xt)}}()}},{key:"clear",value:function(){var Ut=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),Xt={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};Ut.clearRect(Xt.x,Xt.y,Xt.width,Xt.height)}},{key:"clearAudios",value:function(){this._soundsQueue.forEach(function(Ut){Ut.player.stop(Ut.playID)}),this._soundsQueue=[]}},{key:"drawFrame",value:function(Ut){var Xt=this;if(this._prepared){var Jt=(this._owner._drawingCanvas||this._owner._container).getContext("2d"),ii={x:0,y:0,width:(this._owner._drawingCanvas||this._owner._container).width,height:(this._owner._drawingCanvas||this._owner._container).height};Jt.clearRect(ii.x,ii.y,ii.width,ii.height);var Ni=new Map,Vi=!1,zi=this._owner._videoItem.sprites;zi.forEach(function(Xn,Qn){if(zi[0].imageKey.indexOf(".matte")!=-1)if(Xn.imageKey.indexOf(".matte")==-1){var eo=zi[Qn-1];if(Vi&&(Xn.matteKey==null||Xn.matteKey.length==0||Xn.matteKey!=eo.matteKey)){Vi=!1;var no=Ni.get(Xn.matteKey);Jt.globalCompositeOperation="destination-in",Xt.drawSprite(no,Jt,Ut),Jt.globalCompositeOperation="source-over",Jt.restore()}Xn.matteKey==null||eo.matteKey!=null&&eo.matteKey.length!=0&&eo.matteKey==Xn.matteKey||(Vi=!0,Jt.save()),Xt.drawSprite(Xn,Jt,Ut),Vi&&Qn==zi.length-1&&(no=Ni.get(Xn.matteKey),Jt.globalCompositeOperation="destination-in",Xt.drawSprite(no,Jt,Ut),Jt.globalCompositeOperation="source-over",Jt.restore())}else Ni.set(Xn.imageKey,Xn);else Xt.drawSprite(Xn,Jt,Ut)})}else this._undrawFrame=Ut}},{key:"drawSprite",value:function(Ut,Xt,Jt){var ii=this,Ni=Ut.frames[this._owner._currentFrame];if(!(Ni.alpha<.05)){Xt.save(),this._owner._globalTransform&&Xt.transform(this._owner._globalTransform.a,this._owner._globalTransform.b,this._owner._globalTransform.c,this._owner._globalTransform.d,this._owner._globalTransform.tx,this._owner._globalTransform.ty),Xt.globalAlpha=Ni.alpha,Xt.transform(Ni.transform.a,Ni.transform.b,Ni.transform.c,Ni.transform.d,Ni.transform.tx,Ni.transform.ty);var Vi=Ut.imageKey.replace(".matte",""),zi=this._owner._dynamicImage[Vi]||this._bitmapCache[Vi]||this._owner._videoItem.images[Vi];if(typeof zi=="string"){var Xn=this._bitmapCache[Ut.imageKey]||document.createElement("img"),Qn=void 0,eo=void 0;if(zi.indexOf("iVBO")===0||zi.indexOf("/9j/2w")===0?Xn.src="data:image/png;base64,"+zi:(Xn._svgaSrc!==zi&&(Xn._svgaSrc=zi,Xn.src=zi),Qn=Ni.layout.width,eo=Ni.layout.height),this._bitmapCache[Ut.imageKey]=Xn,Ni.maskPath!==void 0&&Ni.maskPath!==null&&(this.drawBezier(Xt,Ni.maskPath),Xt.clip()),this._owner._dynamicImageTransform[Ut.imageKey]!==void 0){Xt.save();var no=this._owner._dynamicImageTransform[Ut.imageKey];Xt.transform(no[0],no[1],no[2],no[3],no[4],no[5])}Qn&&eo?Xt.drawImage(Xn,0,0,Qn,eo):Xt.drawImage(Xn,0,0),this._owner._dynamicImageTransform[Ut.imageKey]!==void 0&&Xt.restore()}else if((zi===void 0?"undefined":$t(zi))==="object"){if(Ni.maskPath!==void 0&&Ni.maskPath!==null&&(Ni.maskPath._styles=void 0,this.drawBezier(Xt,Ni.maskPath),Xt.clip()),this._owner._dynamicImageTransform[Ut.imageKey]!==void 0){Xt.save();var to=this._owner._dynamicImageTransform[Ut.imageKey];Xt.transform(to[0],to[1],to[2],to[3],to[4],to[5])}Xt.drawImage(zi,0,0),this._owner._dynamicImageTransform[Ut.imageKey]!==void 0&&Xt.restore()}Ni.shapes&&Ni.shapes.forEach(function(Qr){Qr.type==="shape"&&Qr.pathArgs&&Qr.pathArgs.d&&ii.drawBezier(Xt,new It.BezierPath(Qr.pathArgs.d,Qr.transform,Qr.styles)),Qr.type==="ellipse"&&Qr.pathArgs&&ii.drawEllipse(Xt,new Rt.EllipsePath(parseFloat(Qr.pathArgs.x)||0,parseFloat(Qr.pathArgs.y)||0,parseFloat(Qr.pathArgs.radiusX)||0,parseFloat(Qr.pathArgs.radiusY)||0,Qr.transform,Qr.styles)),Qr.type==="rect"&&Qr.pathArgs&&ii.drawRect(Xt,new Pt.RectPath(parseFloat(Qr.pathArgs.x)||0,parseFloat(Qr.pathArgs.y)||0,parseFloat(Qr.pathArgs.width)||0,parseFloat(Qr.pathArgs.height)||0,parseFloat(Qr.pathArgs.cornerRadius)||0,Qr.transform,Qr.styles))});var oo=this._owner._dynamicText[Ut.imageKey];if(oo!==void 0){Xt.textBaseline="middle",Xt.font=oo.style;var ao=Xt.measureText(oo.text).width;Xt.fillStyle=oo.color;var ro=oo.offset!==void 0&&oo.offset.x!==void 0?isNaN(parseFloat(oo.offset.x))?0:parseFloat(oo.offset.x):0,Fo=oo.offset!==void 0&&oo.offset.y!==void 0?isNaN(parseFloat(oo.offset.y))?0:parseFloat(oo.offset.y):0;Xt.fillText(oo.text,(Ni.layout.width-ao)/2+ro,Ni.layout.height/2+Fo)}Xt.restore()}}},{key:"playAudio",value:function(Ut){var Xt=this;if(this._owner._forwardAnimating&&this._owner._videoItem.audios instanceof Array){this._owner._videoItem.audios.forEach(function(ii){if(ii.startFrame===Ut&&Xt._bitmapCache[ii.audioKey]!==void 0&&typeof Xt._bitmapCache[ii.audioKey].play=="function"){var Ni={playID:Xt._bitmapCache[ii.audioKey].play(),player:Xt._bitmapCache[ii.audioKey],endFrame:ii.endFrame};Ni.player.seek(ii.startTime/1e3,Ni.playID),Xt._soundsQueue.push(Ni)}});var Jt=!1;this._soundsQueue.forEach(function(ii){Ut>=ii.endFrame&&(Jt=!0,ii.player.stop(ii.playID))}),Jt&&(this._soundsQueue=this._soundsQueue.filter(function(ii){return Ut<ii.endFrame}))}}},{key:"resetShapeStyles",value:function(Ut,Xt){var Jt=Xt._styles;Jt!==void 0&&(Jt&&Jt.stroke?Ut.strokeStyle="rgba("+parseInt(255*Jt.stroke[0])+", "+parseInt(255*Jt.stroke[1])+", "+parseInt(255*Jt.stroke[2])+", "+Jt.stroke[3]+")":Ut.strokeStyle="transparent",Jt&&(Ut.lineWidth=Jt.strokeWidth||void 0,Ut.lineCap=Jt.lineCap||void 0,Ut.lineJoin=Jt.lineJoin||void 0,Ut.miterLimit=Jt.miterLimit||void 0),Jt&&Jt.fill?Ut.fillStyle="rgba("+parseInt(255*Jt.fill[0])+", "+parseInt(255*Jt.fill[1])+", "+parseInt(255*Jt.fill[2])+", "+Jt.fill[3]+")":Ut.fillStyle="transparent",Jt&&Jt.lineDash&&Ut.setLineDash(Jt.lineDash))}},{key:"drawBezier",value:function(Ut,Xt){var Jt=this;Ut.save(),this.resetShapeStyles(Ut,Xt),Xt._transform!==void 0&&Xt._transform!==null&&Ut.transform(Xt._transform.a,Xt._transform.b,Xt._transform.c,Xt._transform.d,Xt._transform.tx,Xt._transform.ty);var ii={x:0,y:0,x1:0,y1:0,x2:0,y2:0};Ut.beginPath(),Xt._d.replace(/([a-zA-Z])/g,"|||$1 ").replace(/,/g," ").split("|||").forEach(function(Ni){if(Ni.length!=0){var Vi=Ni.substr(0,1);if("MLHVCSQRZmlhvcsqrz".indexOf(Vi)>=0){var zi=Ni.substr(1).trim().split(" ");Jt.drawBezierElement(Ut,ii,Vi,zi)}}}),Xt._styles&&Xt._styles.fill&&Ut.fill(),Xt._styles&&Xt._styles.stroke&&Ut.stroke(),Ut.restore()}},{key:"drawBezierElement",value:function(Ut,Xt,Jt,ii){switch(Jt){case"M":Xt.x=Number(ii[0]),Xt.y=Number(ii[1]),Ut.moveTo(Xt.x,Xt.y);break;case"m":Xt.x+=Number(ii[0]),Xt.y+=Number(ii[1]),Ut.moveTo(Xt.x,Xt.y);break;case"L":Xt.x=Number(ii[0]),Xt.y=Number(ii[1]),Ut.lineTo(Xt.x,Xt.y);break;case"l":Xt.x+=Number(ii[0]),Xt.y+=Number(ii[1]),Ut.lineTo(Xt.x,Xt.y);break;case"H":Xt.x=Number(ii[0]),Ut.lineTo(Xt.x,Xt.y);break;case"h":Xt.x+=Number(ii[0]),Ut.lineTo(Xt.x,Xt.y);break;case"V":Xt.y=Number(ii[0]),Ut.lineTo(Xt.x,Xt.y);break;case"v":Xt.y+=Number(ii[0]),Ut.lineTo(Xt.x,Xt.y);break;case"C":Xt.x1=Number(ii[0]),Xt.y1=Number(ii[1]),Xt.x2=Number(ii[2]),Xt.y2=Number(ii[3]),Xt.x=Number(ii[4]),Xt.y=Number(ii[5]),Ut.bezierCurveTo(Xt.x1,Xt.y1,Xt.x2,Xt.y2,Xt.x,Xt.y);break;case"c":Xt.x1=Xt.x+Number(ii[0]),Xt.y1=Xt.y+Number(ii[1]),Xt.x2=Xt.x+Number(ii[2]),Xt.y2=Xt.y+Number(ii[3]),Xt.x+=Number(ii[4]),Xt.y+=Number(ii[5]),Ut.bezierCurveTo(Xt.x1,Xt.y1,Xt.x2,Xt.y2,Xt.x,Xt.y);break;case"S":Xt.x1&&Xt.y1&&Xt.x2&&Xt.y2?(Xt.x1=Xt.x-Xt.x2+Xt.x,Xt.y1=Xt.y-Xt.y2+Xt.y,Xt.x2=Number(ii[0]),Xt.y2=Number(ii[1]),Xt.x=Number(ii[2]),Xt.y=Number(ii[3]),Ut.bezierCurveTo(Xt.x1,Xt.y1,Xt.x2,Xt.y2,Xt.x,Xt.y)):(Xt.x1=Number(ii[0]),Xt.y1=Number(ii[1]),Xt.x=Number(ii[2]),Xt.y=Number(ii[3]),Ut.quadraticCurveTo(Xt.x1,Xt.y1,Xt.x,Xt.y));break;case"s":Xt.x1&&Xt.y1&&Xt.x2&&Xt.y2?(Xt.x1=Xt.x-Xt.x2+Xt.x,Xt.y1=Xt.y-Xt.y2+Xt.y,Xt.x2=Xt.x+Number(ii[0]),Xt.y2=Xt.y+Number(ii[1]),Xt.x+=Number(ii[2]),Xt.y+=Number(ii[3]),Ut.bezierCurveTo(Xt.x1,Xt.y1,Xt.x2,Xt.y2,Xt.x,Xt.y)):(Xt.x1=Xt.x+Number(ii[0]),Xt.y1=Xt.y+Number(ii[1]),Xt.x+=Number(ii[2]),Xt.y+=Number(ii[3]),Ut.quadraticCurveTo(Xt.x1,Xt.y1,Xt.x,Xt.y));break;case"Q":Xt.x1=Number(ii[0]),Xt.y1=Number(ii[1]),Xt.x=Number(ii[2]),Xt.y=Number(ii[3]),Ut.quadraticCurveTo(Xt.x1,Xt.y1,Xt.x,Xt.y);break;case"q":Xt.x1=Xt.x+Number(ii[0]),Xt.y1=Xt.y+Number(ii[1]),Xt.x+=Number(ii[2]),Xt.y+=Number(ii[3]),Ut.quadraticCurveTo(Xt.x1,Xt.y1,Xt.x,Xt.y);break;case"A":case"a":break;case"Z":case"z":Ut.closePath()}}},{key:"drawEllipse",value:function(Ut,Xt){Ut.save(),this.resetShapeStyles(Ut,Xt),Xt._transform!==void 0&&Xt._transform!==null&&Ut.transform(Xt._transform.a,Xt._transform.b,Xt._transform.c,Xt._transform.d,Xt._transform.tx,Xt._transform.ty);var Jt=Xt._x-Xt._radiusX,ii=Xt._y-Xt._radiusY,Ni=2*Xt._radiusX,Vi=2*Xt._radiusY,zi=Ni/2*.5522848,Xn=Vi/2*.5522848,Qn=Jt+Ni,eo=ii+Vi,no=Jt+Ni/2,to=ii+Vi/2;Ut.beginPath(),Ut.moveTo(Jt,to),Ut.bezierCurveTo(Jt,to-Xn,no-zi,ii,no,ii),Ut.bezierCurveTo(no+zi,ii,Qn,to-Xn,Qn,to),Ut.bezierCurveTo(Qn,to+Xn,no+zi,eo,no,eo),Ut.bezierCurveTo(no-zi,eo,Jt,to+Xn,Jt,to),Xt._styles&&Xt._styles.fill&&Ut.fill(),Xt._styles&&Xt._styles.stroke&&Ut.stroke(),Ut.restore()}},{key:"drawRect",value:function(Ut,Xt){Ut.save(),this.resetShapeStyles(Ut,Xt),Xt._transform!==void 0&&Xt._transform!==null&&Ut.transform(Xt._transform.a,Xt._transform.b,Xt._transform.c,Xt._transform.d,Xt._transform.tx,Xt._transform.ty);var Jt=Xt._x,ii=Xt._y,Ni=Xt._width,Vi=Xt._height,zi=Xt._cornerRadius;Ni<2*zi&&(zi=Ni/2),Vi<2*zi&&(zi=Vi/2),Ut.beginPath(),Ut.moveTo(Jt+zi,ii),Ut.arcTo(Jt+Ni,ii,Jt+Ni,ii+Vi,zi),Ut.arcTo(Jt+Ni,ii+Vi,Jt,ii+Vi,zi),Ut.arcTo(Jt,ii+Vi,Jt,ii,zi),Ut.arcTo(Jt,ii,Jt+Ni,ii,zi),Ut.closePath(),Xt._styles&&Xt._styles.fill&&Ut.fill(),Xt._styles&&Xt._styles.stroke&&Ut.stroke(),Ut.restore()}}]),Ft}()},function(me,Le,wt){Object.defineProperty(Le,"__esModule",{value:!0}),Le.AutoLoader=void 0;var $t=wt(13),kt=wt(63),It=Le.AutoLoader=function Rt(){(function(Pt,Ft){if(!(Pt instanceof Ft))throw new TypeError("Cannot call a class as a function")})(this,Rt)};It.sharedParser=new $t.Parser,It.autoload=function(Rt,Pt){if(typeof window!="undefined"&&typeof document!="undefined"){var Ft=Pt||It.sharedParser;if(Rt){if((Rt.tagName==="CANVAS"||Rt.tagName==="DIV")&&Rt.attributes.src&&Rt.attributes.src.value.indexOf(".svga")===Rt.attributes.src.value.length-5){var Ut=Rt.attributes.src.value,Xt=new kt.Player(Rt);Ft.load(Ut,function(Ni){if(Rt.attributes.loops){var Vi=parseFloat(Rt.attributes.loops.value)||0;Xt.loops=Vi}if(Rt.attributes.clearsAfterStop){var zi=Rt.attributes.clearsAfterStop.value!=="false";Xt.clearsAfterStop=zi}Xt.setVideoItem(Ni),Xt.startAnimation()}),Rt.player=Xt}}else for(var Jt=document.querySelectorAll('[src$=".svga"]'),ii=0;ii<Jt.length;ii++)Rt=Jt[ii],It.autoload(Rt)}}}])})})(svga_min);var SVGAPlayer=getDefaultExportFromCjs(svga_min.exports),SVGA_vue_vue_type_style_index_0_lang="";const _sfc_main$4=defineComponent({__name:"SVGA",props:{file:String,loop:{type:Boolean,default:!1}},emits:["finish","start"],setup(me,{emit:Le}){const wt=me,$t=ref(null);return onMounted(()=>{nextTick(()=>{const kt=new SVGAPlayer.Player($t.value);wt.loop||(kt.loops=1),kt.onFinished(()=>{Le("finish")}),new SVGAPlayer.Parser().load(wt.file,Rt=>{Le("start"),kt.setVideoItem(Rt),kt.startAnimation()})})}),(kt,It)=>(openBlock(),createElementBlock("div",{ref_key:"demoCanvas",ref:$t,class:"app_svga"},null,512))}}),_hoisted_1$j={width:"28",height:"28",viewBox:"0 0 36 36"},_hoisted_2$i=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.772 30.857v-19.11H7.546a3.683 3.683 0 0 0-3.689 3.678v11.754a3.683 3.683 0 0 0 3.689 3.678h2.226Zm2.218 0V11.705c3-1.078 4.704-3.82 5.115-8.37.162-1.78 1.858-2.52 3.475-1.74 1.605.775 2.663 2.73 2.663 5.344 0 1.564-.195 3.166-.585 4.808h7.074a3.696 3.696 0 0 1 3.59 4.581l-2.334 9.468a6.654 6.654 0 0 1-6.46 5.061H11.991Z"},null,-1),_hoisted_3$h=[_hoisted_2$i];function render$f(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$j,[..._hoisted_3$h])}var BarLike={render:render$f};const _hoisted_1$i={width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$h=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.045 25.545c-6.351 0-11.5-5.148-11.5-11.5 0-6.35 5.149-11.5 11.5-11.5s11.5 5.15 11.5 11.5a11.5 11.5 0 0 1-11.5 11.5ZM9.662 6.816h8.614c.549 0 .994.406.994.906s-.445.906-.994.906H14.95v1.662a5.725 5.725 0 0 1 5.436 5.702v1.207a.906.906 0 0 1-1.812 0v-1.207a3.913 3.913 0 0 0-3.624-3.89v8.455a.906.906 0 0 1-1.812 0v-8.455a3.914 3.914 0 0 0-3.624 3.89v1.207a.906.906 0 0 1-1.811 0v-1.207a5.725 5.725 0 0 1 5.435-5.702V8.628H9.662c-.549 0-.994-.406-.994-.906s.445-.906.994-.906Z"},null,-1),_hoisted_3$g=[_hoisted_2$h];function render$e(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$i,[..._hoisted_3$g])}var BarCoin={render:render$e};const _hoisted_1$h={width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$g=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.807 9.262c-1.063-.163-2.045-.894-2.454-1.868l-1.88-3.897c-.573-1.299-2.373-1.299-3.027 0l-1.8 3.897c-.49.974-1.39 1.705-2.453 1.868L3.94 9.91c-1.308.162-1.881 1.786-.9 2.76l3.19 3.248c.736.73 1.063 1.786.9 2.841l-.736 4.547c-.246 1.38 1.227 2.354 2.453 1.705l3.6-1.949a3.197 3.197 0 0 1 3.189 0l3.599 1.949c1.226.65 2.617-.325 2.453-1.705l-.818-4.546c-.165-1.056.164-2.111.9-2.842l3.19-3.248c.981-.974.409-2.598-.9-2.76l-4.253-.65Z"},null,-1),_hoisted_3$f=[_hoisted_2$g];function render$d(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$h,[..._hoisted_3$f])}var BarFav={render:render$d};const _hoisted_1$g={class:"icon",width:"28",height:"28",viewBox:"0 0 28 28"},_hoisted_2$f=createBaseVNode("path",{d:"M12.606 10.333v-4.89c0-.797.666-1.443 1.487-1.443.35 0 .687.119.955.336l10.337 8.386a1.632 1.632 0 0 1 0 2.556l-10.337 8.386c-.63.511-1.569.43-2.096-.182a1.418 1.418 0 0 1-.346-.926v-4.503c-5.011 0-7.235 1.859-10.034 5.472-.096.124-.572.252-.572-.313 0-6.995 1.901-12.88 10.606-12.88Z"},null,-1),_hoisted_3$e=[_hoisted_2$f];function render$c(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$g,[..._hoisted_3$e])}var BarShare={render:render$c},BiliDialog_vue_vue_type_style_index_0_lang="";const _hoisted_1$f={key:0,class:"gamepad-cursor-modal cursor-modal-close r_sm"},_sfc_main$3=defineComponent({__name:"BiliDialog",props:{show:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},isShowGpCursor:{type:Boolean,default:!1}},emits:["close"],setup(me,{emit:Le}){const wt=me;return($t,kt)=>wt.show?(openBlock(),createElementBlock("div",{key:0,class:"bili-dialog-m",style:normalizeStyle({zIndex:wt.zIndex}),onClick:kt[1]||(kt[1]=It=>Le("close")),onWheel:kt[2]||(kt[2]=withModifiers(()=>{},["stop"]))},[createBaseVNode("div",{class:"bili-dialog-bomb",onClick:kt[0]||(kt[0]=withModifiers(()=>{},["stop"]))},[renderSlot($t.$slots,"default"),me.isShowGpCursor?(openBlock(),createElementBlock("span",_hoisted_1$f)):createCommentVNode("",!0)])],36)):createCommentVNode("",!0)}}),_hoisted_1$e={viewBox:"0 0 24 24",fill:"currentColor"},_hoisted_2$e=createBaseVNode("rect",{width:"24",height:"24",rx:"12"},null,-1),_hoisted_3$d=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 8c.194 0 .352.158.352.353v3.294h3.295a.353.353 0 0 1 0 .706h-3.295v3.294a.353.353 0 0 1-.706 0v-3.294H8.353a.353.353 0 1 1 0-.706h3.293V8.353c0-.195.158-.353.353-.353Z",fill:"#fff"},null,-1),_hoisted_4$9=createBaseVNode("path",{d:"M12.352 11.647h-.5v.5h.5v-.5Zm0 .706v-.5h-.5v.5h.5Zm-.706 0h.5v-.5h-.5v.5Zm0-.706v.5h.5v-.5h-.5Zm1.206-3.294a.853.853 0 0 0-.853-.853v1a.147.147 0 0 1-.147-.147h1Zm0 3.294V8.353h-1v3.294h1Zm2.795-.5h-3.295v1h3.295v-1ZM16.5 12a.853.853 0 0 0-.853-.853v1A.147.147 0 0 1 15.5 12h1Zm-.853.853A.853.853 0 0 0 16.5 12h-1c0-.081.066-.147.147-.147v1Zm-3.295 0h3.295v-1h-3.295v1Zm.5 2.794v-3.294h-1v3.294h1Zm-.853.853a.853.853 0 0 0 .853-.853h-1c0-.081.066-.147.147-.147v1Zm-.853-.853c0 .471.382.853.853.853v-1c.081 0 .147.066.147.147h-1Zm0-3.294v3.294h1v-3.294h-1Zm-2.793.5h3.293v-1H8.353v1ZM7.5 12c0 .471.382.853.853.853v-1c.081 0 .147.066.147.147h-1Zm.853-.853A.853.853 0 0 0 7.5 12h1a.147.147 0 0 1-.147.147v-1Zm3.293 0H8.353v1h3.293v-1Zm-.5-2.794v3.294h1V8.353h-1ZM12 7.5a.853.853 0 0 0-.853.853h1A.147.147 0 0 1 12 8.5v-1Z",fill:"#fff"},null,-1),_hoisted_5$6=[_hoisted_2$e,_hoisted_3$d,_hoisted_4$9];function render$b(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$e,[..._hoisted_5$6])}var IcoAdd={render:render$b};const _hoisted_1$d={viewBox:"0 0 16 16",fill:"none",stroke:"currentColor"},_hoisted_2$d=createBaseVNode("path",{class:"st0",d:"M2.5.5h11c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2z"},null,-1),_hoisted_3$c=[_hoisted_2$d];function render$a(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$d,[..._hoisted_3$c])}var CheckboxDefault={render:render$a};const _hoisted_1$c={viewBox:"0 0 16 16",fill:"currentColor"},_hoisted_2$c=createBaseVNode("rect",{width:"16",height:"16",rx:"2"},null,-1),_hoisted_3$b=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.225 4.671a.469.469 0 0 0-.662.035L6.31 10.54 4.445 8.468a.469.469 0 1 0-.697.627l2.208 2.452c.13.144.329.19.501.13a.466.466 0 0 0 .213-.135l5.59-6.209a.469.469 0 0 0-.035-.662Z",fill:"#fff"},null,-1),_hoisted_4$8=createBaseVNode("path",{d:"m11.563 4.706-.371-.335.371.335Zm.662-.035.335-.371-.335.371ZM6.31 10.54l-.371.334.371.413.372-.413-.372-.334ZM4.445 8.468l-.372.334.372-.334Zm-.662-.035-.335-.372.335.372Zm-.035.662-.372.334.372-.334Zm2.208 2.452-.372.335.372-.335Zm.501.13-.144-.479-.01.003-.009.003.163.473Zm.213-.135-.372-.335.372.335Zm5.59-6.209L11.889 5l.371.334Zm-.325-.293a.031.031 0 0 1-.044.003l.669-.743a.969.969 0 0 0-1.368.071l.743.67Zm-5.253 5.834 5.253-5.834-.743-.669-5.253 5.834.743.67Zm0-.669L4.816 8.133l-.743.67 1.866 2.071.743-.669ZM4.816 8.133a.969.969 0 0 0-1.368-.072l.67.743a.031.031 0 0 1-.045-.002l.743-.669Zm-1.368-.072a.969.969 0 0 0-.072 1.368l.743-.669a.031.031 0 0 1-.002.044l-.669-.743ZM3.376 9.43l2.208 2.453.744-.67L4.119 8.76l-.743.67Zm2.208 2.453c.27.298.68.39 1.036.268l-.326-.946a.03.03 0 0 1 .018 0 .034.034 0 0 1 .016.009l-.744.669Zm.714-.675a.032.032 0 0 1 .006-.005.04.04 0 0 1 .009-.004l.288.958a.966.966 0 0 0 .44-.28l-.743-.669ZM11.888 5l-5.59 6.208.743.67 5.59-6.21L11.89 5Zm.003.044a.031.031 0 0 1-.002-.044l.743.669A.969.969 0 0 0 12.56 4.3l-.67.743Z",fill:"#fff"},null,-1),_hoisted_5$5=[_hoisted_2$c,_hoisted_3$b,_hoisted_4$8];function render$9(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$c,[..._hoisted_5$5])}var CheckboxSelected={render:render$9},FollowedDialog_vue_vue_type_style_index_0_lang="";const _hoisted_1$b={class:"app-follow--title"},_hoisted_2$b=createTextVNode("\u8BBE\u7F6E\u5206\u7EC4"),_hoisted_3$a={class:"app-follow--info"},_hoisted_4$7=createTextVNode("\u8BF7\u4E3A "),_hoisted_5$4=["textContent"],_hoisted_6$1=createTextVNode(" \u9009\u62E9\u5206\u7EC4"),_hoisted_7$1=["onClick"],_hoisted_8$1={class:"app-follow--list-item-name"},_hoisted_9$1=["textContent"],_hoisted_10=["textContent"],_hoisted_11=["onClick"],_hoisted_12=["value"],_hoisted_13={type:"submit",class:"submit"},_hoisted_14={class:"bottom"},_hoisted_15=["disabled","textContent"],_sfc_main$2=defineComponent({__name:"FollowedDialog",props:{upid:{type:Number,default:0},upName:{type:String,default:""}},emits:["close","save"],setup(me,{emit:Le}){const wt=me,$t=ref([]),kt=ref({}),It=ref(""),Rt=ref(null),Pt=ref(null),Ft=ref(!1),Ut=ref(""),Xt=computed(()=>{for(let Qn of $t.value)if(Qn.checked&&Qn.tagid!==0)return"\u4FDD\u5B58";return"\u4FDD\u5B58\u81F3\u9ED8\u8BA4\u5206\u7EC4"});watch$1(Ft,()=>{Ft.value&&nextTick(()=>{Rt.value.focus()})});const Jt=async()=>{const[Qn,eo]=await Promise.all([Upinfo.getUserTags(wt.upid||0),Upinfo.getRelationTags()]);if(Qn.code===0?kt.value=Qn.data:Qn&&Qn.message&&(It.value=Qn.message),eo.code===0){let no=eo.data;for(let to of no)kt.value[to.tagid]?to.checked=!0:to.checked=!1;$t.value=no}else eo&&eo.message&&(It.value=eo.message)};onMounted(()=>{Jt()});const ii=Qn=>{(!Pt.value||!Pt.value.contains(Qn.target))&&Ni()},Ni=()=>{Ut.value="",Ft.value=!1},Vi=()=>{It.value="",Ft.value=!0},zi=()=>{if(!Ut.value){toastAsync({content:"\u8BF7\u586B\u5199\u5206\u7EC4\u540D\u79F0"});return}Upinfo.addGroup(Ut.value).then(Qn=>{Qn.code===0?$t.value.push({name:Ut.value,tagid:Qn.data.tagid,checked:!1}):It.value=Qn.message,Ut.value="",Ft.value=!1}).catch(Qn=>{toastAsync({content:Qn.message||"\u7F51\u7EDC\u9519\u8BEF"})})},Xn=Qn=>{let eo=[];for(let no of $t.value)no.checked&&eo.push(no.tagid);eo.length===0&&eo.push(0),Upinfo.addUsers({fids:wt.upid||0,tagids:eo.join(",")}).then(no=>{let to=no==null?void 0:no.message,oo=Qn.target;(no==null?void 0:no.code)===0&&(to="\u52A0\u5165\u5206\u7EC4\u6210\u529F",oo=null,Le("save",eo)),biliMsg({el:oo,msg:to,cd:1e3})}).catch(()=>{biliMsg({el:Qn.target,msg:"\u52A0\u5165\u5206\u7EC4\u5931\u8D25",cd:1e3,type:"error"})})};return(Qn,eo)=>(openBlock(),createElementBlock("div",{class:"app-follow",onClick:eo[5]||(eo[5]=no=>ii(no))},[createBaseVNode("div",_hoisted_1$b,[_hoisted_2$b,createVNode(unref(IcoClose$1),{class:"app-follow--close",onClick:eo[0]||(eo[0]=no=>Le("close"))})]),createBaseVNode("div",{class:normalizeClass(["app-follow--list",{adding:Ft.value}])},[createBaseVNode("div",_hoisted_3$a,[_hoisted_4$7,createBaseVNode("span",{class:"uname",textContent:toDisplayString(wt.upName)},null,8,_hoisted_5$4),_hoisted_6$1]),(openBlock(!0),createElementBlock(Fragment,null,renderList($t.value,(no,to)=>(openBlock(),createElementBlock(Fragment,null,[no.tagid!==0?(openBlock(),createElementBlock("div",{class:normalizeClass(["app-follow--list-item",no.tip?"special-group":""]),key:to,onClick:oo=>no.checked=!no.checked},[createBaseVNode("div",_hoisted_8$1,[withDirectives(createVNode(unref(CheckboxDefault),null,null,512),[[vShow,!no.checked]]),withDirectives(createVNode(unref(CheckboxSelected),{class:"app-follow--selected"},null,512),[[vShow,no.checked]]),createBaseVNode("span",{class:"app-follow--list-item-title",textContent:toDisplayString(no.name)},null,8,_hoisted_9$1)]),no.tip?(openBlock(),createElementBlock("div",{key:0,class:"app-follow--list-item-right",textContent:toDisplayString(no.tip)},null,8,_hoisted_10)):createCommentVNode("",!0)],10,_hoisted_7$1)):createCommentVNode("",!0)],64))),256))],2),createBaseVNode("div",{class:"add-group",ref_key:"addGroup",ref:Pt},[withDirectives(createBaseVNode("div",{class:"add-btn",onClick:withModifiers(Vi,["stop"])},"\u65B0\u5EFA\u5206\u7EC4",8,_hoisted_11),[[vShow,!Ft.value]]),withDirectives(createBaseVNode("form",{class:"input-group",onSubmit:eo[3]||(eo[3]=no=>zi())},[createBaseVNode("input",{ref_key:"groupInput",ref:Rt,type:"text",maxLength:"16",placeholder:"\u6700\u591A\u8F93\u516516\u4E2A\u5B57",value:Ut.value,onInput:eo[1]||(eo[1]=no=>Ut.value=no.target.value),onKeydown:eo[2]||(eo[2]=withKeys(no=>Ni(),["esc"]))},null,40,_hoisted_12),createBaseVNode("button",_hoisted_13,[createVNode(unref(IcoAdd),{class:"submit-icon"})])],544),[[vShow,Ft.value]])],512),createBaseVNode("div",_hoisted_14,[createBaseVNode("button",{class:"btn submit-move",disabled:Ft.value,textContent:toDisplayString(unref(Xt)),onClick:eo[4]||(eo[4]=no=>Xn(no))},null,8,_hoisted_15)])]))}}),_hoisted_1$a={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$a=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#57BB40"},null,-1),_hoisted_3$9=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.717 13.712c-.707 0-1.273.55-1.273 1.237 0 .688.566 1.237 1.273 1.237s1.273-.55 1.273-1.237-.566-1.237-1.273-1.237Zm-6.081 0c-.707 0-1.273.55-1.273 1.237 0 .688.566 1.237 1.273 1.237s1.273-.55 1.273-1.237-.566-1.237-1.274-1.237Zm3.536 9.21c0 .688.142 1.375.424 1.925h-.848c-.99 0-2.121-.137-3.111-.412l-3.535 1.65.848-2.75c-2.263-1.375-3.677-3.437-3.677-5.911C7.273 13.3 11.516 10 16.607 10c4.666 0 8.485 2.75 9.192 6.186h-.707c-4.385 0-7.92 3.025-7.92 6.736Zm10.748-3.024c-.566 0-.99.413-.99.962 0 .55.424.963.99.963.565 0 .99-.412.99-.963 0-.55-.425-.962-.99-.962Zm-5.092 0c-.565 0-.989.413-.989.962 0 .55.424.963.99.963.565 0 .99-.412.99-.963 0-.55-.425-.962-.99-.962Zm6.93 8.111.707 2.2-2.546-1.375a8.46 8.46 0 0 1-2.686.412c-4.102 0-7.496-2.75-7.496-6.186s3.394-6.186 7.496-6.186c4.1 0 7.494 2.75 7.494 6.186 0 1.925-1.13 3.712-2.97 4.95Z",fill:"#fff"},null,-1),_hoisted_4$6=[_hoisted_2$a,_hoisted_3$9];function render$8(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$a,[..._hoisted_4$6])}var ShareWeixin={render:render$8};const _hoisted_1$9={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$9=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#4CA2E5"},null,-1),_hoisted_3$8=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.037 24.266c-.131-1.563-.993-3.302-1.345-4.177l-.912-2.25c-.029-.936.261-3.087-1.258-5.78-1.525-2.692-4.578-2.935-5.143-2.963-.565-.028-4.097-.055-5.834 2.876-1.737 2.93-1.268 5.868-1.268 5.868l-.972 2.265s-.451 1.034-.842 2.292c-.391 1.257-.783 3.235-.391 3.636.39.402 1.808-1.839 1.939-2.046 0 0 .101 1.07.37 1.63.214.449.73 1.567 1.77 2.445-.5.154-1.7.567-1.877.996-.222.545.174.609.85.646.677.037 3.919.12 5.472-.087a.99.99 0 0 1 .048-.008 15 15 0 0 0 .432.008c.088 0 .19-.003.298-.005.01.002.022.002.032.005 1.553.207 4.797.124 5.471.087.677-.037 1.07-.101.85-.646-.179-.437-1.413-.854-1.898-1.002.151-.129.3-.268.444-.417 1.751-1.839 1.607-3 1.68-3.664 0 0 1.475 2.032 1.794 2.102.319.07.418-.25.29-1.811Z",fill:"#fff"},null,-1),_hoisted_4$5=[_hoisted_2$9,_hoisted_3$8];function render$7(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$9,[..._hoisted_4$5])}var ShareQQ={render:render$7};const _hoisted_1$8={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$8=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#FB7299"},null,-1),_hoisted_3$7=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.546 14.546A4.545 4.545 0 0 1 19.09 10v9.09a4.545 4.545 0 0 1-4.546-4.544Zm10.909 10.909a4.545 4.545 0 0 0-4.546-4.546V30a4.545 4.545 0 0 0 4.546-4.546Zm-4.546-6.364a4.545 4.545 0 0 1 9.091 0h-9.09Zm-6.363 6.363A4.545 4.545 0 0 1 10 20.91h9.09a4.545 4.545 0 0 1-4.544 4.546Z",fill:"#fff"},null,-1),_hoisted_4$4=createBaseVNode("path",{d:"M19.09 10h.456a.455.455 0 0 0-.455-.455V10Zm0 9.09v.456a.455.455 0 0 0 .456-.455h-.455Zm1.82 1.82v-.456a.455.455 0 0 0-.456.455h.455Zm0 9.09h-.456c0 .251.204.454.455.454V30Zm0-10.91h-.456c0 .252.204.456.455.456v-.455Zm9.09 0v.456a.455.455 0 0 0 .454-.455H30Zm-20 1.82v-.456a.455.455 0 0 0-.455.455H10Zm9.09 0h.456a.455.455 0 0 0-.455-.456v.455Zm0-11.365a5 5 0 0 0-5 5H15a4.091 4.091 0 0 1 4.09-4.09v-.91Zm.456 9.546V10h-.91v9.09h.91Zm-5.455-4.546a5 5 0 0 0 5 5v-.909A4.091 4.091 0 0 1 15 14.546h-.91Zm6.818 6.819c2.26 0 4.091 1.831 4.091 4.09h.91a5 5 0 0 0-5-5v.91ZM21.364 30v-9.09h-.91V30h.91ZM25 25.454a4.091 4.091 0 0 1-4.09 4.091v.91a5 5 0 0 0 5-5H25Zm.454-11.363a5 5 0 0 0-5 5h.91c0-2.26 1.831-4.091 4.09-4.091v-.91Zm5 5a5 5 0 0 0-5-5V15a4.091 4.091 0 0 1 4.091 4.09h.91Zm-9.545.454H30v-.909h-9.09v.91ZM9.545 20.91a5 5 0 0 0 5 5V25a4.091 4.091 0 0 1-4.09-4.09h-.91Zm9.546-.454H10v.909h9.09v-.91Zm-4.546 5.454a5 5 0 0 0 5-5h-.909c0 2.26-1.831 4.091-4.09 4.091v.91Z",fill:"#fff"},null,-1),_hoisted_5$3=[_hoisted_2$8,_hoisted_3$7,_hoisted_4$4];function render$6(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$8,[..._hoisted_5$3])}var ShareDynmic={render:render$6};const _hoisted_1$7={width:"45",height:"44",viewBox:"0 0 45 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$7=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.5 0C10.35 0 .5 9.85.5 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22Z",fill:"#5A62C7"},null,-1),_hoisted_3$6=createBaseVNode("path",{d:"M25.623 19.425a5.242 5.242 0 0 0-.535-.462 1.063 1.063 0 0 0-1.551 1.448c.075.089.163.165.262.226.1.082.199.164.29.256l.088.087c1.102 1.1.773 2.995-.328 4.097l-4.7 4.698a2.829 2.829 0 0 1-3.994 0l-.088-.088a2.824 2.824 0 0 1 0-3.992l2.076-2.076a1.154 1.154 0 0 0-1.365-1.859l-.002-.003-.022.02a1.164 1.164 0 0 0-.22.206l-2.157 2.019c-2.029 2.03-2.029 5.35 0 7.376l.087.088c2.029 2.027 5.347 2.027 7.375 0l4.699-4.7c2.025-2.028 2.197-5.228.171-7.255l-.086-.086Z",fill:"#fff"},null,-1),_hoisted_4$3=createBaseVNode("path",{d:"m32.396 12.535-.088-.088c-2.028-2.028-5.346-2.028-7.375 0l-4.698 4.7c-2.028 2.028-2.14 4.957-.112 6.987l.086.085c.093.092.188.179.286.262.07.079.153.146.246.2l.002.002a1.003 1.003 0 0 0 1.403-1.306c-.133-.299-.381-.48-.553-.652l-.086-.085c-1.101-1.101-.683-2.701.418-3.803l4.701-4.698a2.824 2.824 0 0 1 3.992 0l.088.086a2.827 2.827 0 0 1 0 3.994l-2.07 2.071a1.143 1.143 0 0 0 .68 2.065c.22 0 .426-.062.6-.17l.005.007.032-.03a1.15 1.15 0 0 0 .26-.24l2.181-2.013c2.03-2.028 2.03-5.346.002-7.374Z",fill:"#fff"},null,-1),_hoisted_5$2=[_hoisted_2$7,_hoisted_3$6,_hoisted_4$3];function render$5(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$7,[..._hoisted_5$2])}var ShareVideo={render:render$5};const _hoisted_1$6={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$6=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#F4BF41"},null,-1),_hoisted_3$5=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m25.76 17.822-7.047 5.056s2.829.42 7.094.371l-.194-.836 6.079-5.266a.368.368 0 0 0-.211-.644l-8.013-.689-3.13-7.408a.368.368 0 0 0-.677 0l-3.13 7.408-8.013.689a.367.367 0 0 0-.21.644l6.079 5.266-1.822 7.834a.367.367 0 0 0 .548.397L20 26.491l6.887 4.153a.354.354 0 0 0 .19.053.368.368 0 0 0 .358-.45l-1.44-6.195c.617-.31 1.298-.837 1.298-.837s-2.697 1.317-12.38.674l7.017-5.086s-.276-.43-9.07-.736c-.588-.02 7.17-1.47 12.9-.245Z",fill:"#fff"},null,-1),_hoisted_4$2=[_hoisted_2$6,_hoisted_3$5];function render$4(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$6,[..._hoisted_4$2])}var ShareQzone={render:render$4};const _hoisted_1$5={width:"40",height:"40",viewBox:"0 0 40 40",fill:"none"},_hoisted_2$5=createBaseVNode("circle",{cx:"20",cy:"20",r:"20",fill:"#DB4437"},null,-1),_hoisted_3$4=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M27.618 16.703c-.394 0-.787-.394-.787-.787.13-.92-.394-1.838-1.444-2.1h-.394c-.394 0-.787-.394-.787-.788s.393-.787.787-.787a3.25 3.25 0 0 1 3.282 3.28v.263c0 .656-.263.919-.657.919Zm-9.974 6.43c-.263 0-.394.264-.394.526s.262.394.394.394c.13 0 .393-.263.393-.394.132-.262-.131-.525-.393-.525Zm-2.231.395c-.657 0-1.182.525-1.182 1.18 0 .657.525 1.182 1.181 1.182.657 0 1.182-.525 1.182-1.181s-.525-1.181-1.182-1.181Zm2.1 3.675c-2.1.524-4.2-.394-4.594-2.231-.394-1.838.919-3.544 3.018-4.069 2.1-.525 4.2.394 4.594 2.23.393 1.839-.919 3.545-3.019 4.07Zm-.526-8.269c-3.937.263-7.087 2.494-6.955 5.119.13 2.625 3.543 4.462 7.48 4.2 3.938-.263 7.087-2.494 6.956-5.12-.13-2.624-3.544-4.33-7.48-4.199Zm7.481-3.543c1.706.787.657 3.937.657 3.937a4.072 4.072 0 0 1 2.362 1.181c1.838 2.1.263 6.563-6.037 8.663-5.644 1.837-11.288 0-12.862-3.544-1.575-3.806 1.574-9.581 6.956-12.6.656-.394 2.756-1.05 3.937.263.656.787 0 3.018 0 3.018s2.494-2.1 4.987-.918Zm7.22 1.312c0 .525-.526 1.05-1.051 1.05-.525 0-1.05-.525-1.05-1.05v-.131c.393-2.625-1.444-4.987-4.069-5.381h-.787c-.525 0-1.05-.525-1.05-1.05s.525-1.05 1.05-1.05h.131c3.806 0 6.956 3.15 6.956 6.956v.525c-.13 0-.13.131-.13.131Z",fill:"#fff"},null,-1),_hoisted_4$1=[_hoisted_2$5,_hoisted_3$4];function render$3(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$5,[..._hoisted_4$1])}var ShareWeibo={render:render$3},browser={},canPromise$1=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},qrcode={},utils$1={};let toSJISFunction;const CODEWORDS_COUNT=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];utils$1.getSymbolSize=function me(Le){if(!Le)throw new Error('"version" cannot be null or undefined');if(Le<1||Le>40)throw new Error('"version" should be in range from 1 to 40');return Le*4+17};utils$1.getSymbolTotalCodewords=function me(Le){return CODEWORDS_COUNT[Le]};utils$1.getBCHDigit=function(me){let Le=0;for(;me!==0;)Le++,me>>>=1;return Le};utils$1.setToSJISFunction=function me(Le){if(typeof Le!="function")throw new Error('"toSJISFunc" is not a valid function.');toSJISFunction=Le};utils$1.isKanjiModeEnabled=function(){return typeof toSJISFunction!="undefined"};utils$1.toSJIS=function me(Le){return toSJISFunction(Le)};var errorCorrectionLevel={};(function(me){me.L={bit:1},me.M={bit:0},me.Q={bit:3},me.H={bit:2};function Le(wt){if(typeof wt!="string")throw new Error("Param is not a string");switch(wt.toLowerCase()){case"l":case"low":return me.L;case"m":case"medium":return me.M;case"q":case"quartile":return me.Q;case"h":case"high":return me.H;default:throw new Error("Unknown EC Level: "+wt)}}me.isValid=function($t){return $t&&typeof $t.bit!="undefined"&&$t.bit>=0&&$t.bit<4},me.from=function($t,kt){if(me.isValid($t))return $t;try{return Le($t)}catch{return kt}}})(errorCorrectionLevel);function BitBuffer$1(){this.buffer=[],this.length=0}BitBuffer$1.prototype={get:function(me){const Le=Math.floor(me/8);return(this.buffer[Le]>>>7-me%8&1)===1},put:function(me,Le){for(let wt=0;wt<Le;wt++)this.putBit((me>>>Le-wt-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(me){const Le=Math.floor(this.length/8);this.buffer.length<=Le&&this.buffer.push(0),me&&(this.buffer[Le]|=128>>>this.length%8),this.length++}};var bitBuffer=BitBuffer$1;function BitMatrix$1(me){if(!me||me<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=me,this.data=new Uint8Array(me*me),this.reservedBit=new Uint8Array(me*me)}BitMatrix$1.prototype.set=function(me,Le,wt,$t){const kt=me*this.size+Le;this.data[kt]=wt,$t&&(this.reservedBit[kt]=!0)};BitMatrix$1.prototype.get=function(me,Le){return this.data[me*this.size+Le]};BitMatrix$1.prototype.xor=function(me,Le,wt){this.data[me*this.size+Le]^=wt};BitMatrix$1.prototype.isReserved=function(me,Le){return this.reservedBit[me*this.size+Le]};var bitMatrix=BitMatrix$1,alignmentPattern={};(function(me){const Le=utils$1.getSymbolSize;me.getRowColCoords=function($t){if($t===1)return[];const kt=Math.floor($t/7)+2,It=Le($t),Rt=It===145?26:Math.ceil((It-13)/(2*kt-2))*2,Pt=[It-7];for(let Ft=1;Ft<kt-1;Ft++)Pt[Ft]=Pt[Ft-1]-Rt;return Pt.push(6),Pt.reverse()},me.getPositions=function($t){const kt=[],It=me.getRowColCoords($t),Rt=It.length;for(let Pt=0;Pt<Rt;Pt++)for(let Ft=0;Ft<Rt;Ft++)Pt===0&&Ft===0||Pt===0&&Ft===Rt-1||Pt===Rt-1&&Ft===0||kt.push([It[Pt],It[Ft]]);return kt}})(alignmentPattern);var finderPattern={};const getSymbolSize=utils$1.getSymbolSize,FINDER_PATTERN_SIZE=7;finderPattern.getPositions=function me(Le){const wt=getSymbolSize(Le);return[[0,0],[wt-FINDER_PATTERN_SIZE,0],[0,wt-FINDER_PATTERN_SIZE]]};var maskPattern={};(function(me){me.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const Le={N1:3,N2:3,N3:40,N4:10};me.isValid=function(kt){return kt!=null&&kt!==""&&!isNaN(kt)&&kt>=0&&kt<=7},me.from=function(kt){return me.isValid(kt)?parseInt(kt,10):void 0},me.getPenaltyN1=function(kt){const It=kt.size;let Rt=0,Pt=0,Ft=0,Ut=null,Xt=null;for(let Jt=0;Jt<It;Jt++){Pt=Ft=0,Ut=Xt=null;for(let ii=0;ii<It;ii++){let Ni=kt.get(Jt,ii);Ni===Ut?Pt++:(Pt>=5&&(Rt+=Le.N1+(Pt-5)),Ut=Ni,Pt=1),Ni=kt.get(ii,Jt),Ni===Xt?Ft++:(Ft>=5&&(Rt+=Le.N1+(Ft-5)),Xt=Ni,Ft=1)}Pt>=5&&(Rt+=Le.N1+(Pt-5)),Ft>=5&&(Rt+=Le.N1+(Ft-5))}return Rt},me.getPenaltyN2=function(kt){const It=kt.size;let Rt=0;for(let Pt=0;Pt<It-1;Pt++)for(let Ft=0;Ft<It-1;Ft++){const Ut=kt.get(Pt,Ft)+kt.get(Pt,Ft+1)+kt.get(Pt+1,Ft)+kt.get(Pt+1,Ft+1);(Ut===4||Ut===0)&&Rt++}return Rt*Le.N2},me.getPenaltyN3=function(kt){const It=kt.size;let Rt=0,Pt=0,Ft=0;for(let Ut=0;Ut<It;Ut++){Pt=Ft=0;for(let Xt=0;Xt<It;Xt++)Pt=Pt<<1&2047|kt.get(Ut,Xt),Xt>=10&&(Pt===1488||Pt===93)&&Rt++,Ft=Ft<<1&2047|kt.get(Xt,Ut),Xt>=10&&(Ft===1488||Ft===93)&&Rt++}return Rt*Le.N3},me.getPenaltyN4=function(kt){let It=0;const Rt=kt.data.length;for(let Ft=0;Ft<Rt;Ft++)It+=kt.data[Ft];return Math.abs(Math.ceil(It*100/Rt/5)-10)*Le.N4};function wt($t,kt,It){switch($t){case me.Patterns.PATTERN000:return(kt+It)%2===0;case me.Patterns.PATTERN001:return kt%2===0;case me.Patterns.PATTERN010:return It%3===0;case me.Patterns.PATTERN011:return(kt+It)%3===0;case me.Patterns.PATTERN100:return(Math.floor(kt/2)+Math.floor(It/3))%2===0;case me.Patterns.PATTERN101:return kt*It%2+kt*It%3===0;case me.Patterns.PATTERN110:return(kt*It%2+kt*It%3)%2===0;case me.Patterns.PATTERN111:return(kt*It%3+(kt+It)%2)%2===0;default:throw new Error("bad maskPattern:"+$t)}}me.applyMask=function(kt,It){const Rt=It.size;for(let Pt=0;Pt<Rt;Pt++)for(let Ft=0;Ft<Rt;Ft++)It.isReserved(Ft,Pt)||It.xor(Ft,Pt,wt(kt,Ft,Pt))},me.getBestMask=function(kt,It){const Rt=Object.keys(me.Patterns).length;let Pt=0,Ft=1/0;for(let Ut=0;Ut<Rt;Ut++){It(Ut),me.applyMask(Ut,kt);const Xt=me.getPenaltyN1(kt)+me.getPenaltyN2(kt)+me.getPenaltyN3(kt)+me.getPenaltyN4(kt);me.applyMask(Ut,kt),Xt<Ft&&(Ft=Xt,Pt=Ut)}return Pt}})(maskPattern);var errorCorrectionCode={};const ECLevel$1=errorCorrectionLevel,EC_BLOCKS_TABLE=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],EC_CODEWORDS_TABLE=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];errorCorrectionCode.getBlocksCount=function me(Le,wt){switch(wt){case ECLevel$1.L:return EC_BLOCKS_TABLE[(Le-1)*4+0];case ECLevel$1.M:return EC_BLOCKS_TABLE[(Le-1)*4+1];case ECLevel$1.Q:return EC_BLOCKS_TABLE[(Le-1)*4+2];case ECLevel$1.H:return EC_BLOCKS_TABLE[(Le-1)*4+3];default:return}};errorCorrectionCode.getTotalCodewordsCount=function me(Le,wt){switch(wt){case ECLevel$1.L:return EC_CODEWORDS_TABLE[(Le-1)*4+0];case ECLevel$1.M:return EC_CODEWORDS_TABLE[(Le-1)*4+1];case ECLevel$1.Q:return EC_CODEWORDS_TABLE[(Le-1)*4+2];case ECLevel$1.H:return EC_CODEWORDS_TABLE[(Le-1)*4+3];default:return}};var polynomial={},galoisField={};const EXP_TABLE=new Uint8Array(512),LOG_TABLE=new Uint8Array(256);(function me(){let Le=1;for(let wt=0;wt<255;wt++)EXP_TABLE[wt]=Le,LOG_TABLE[Le]=wt,Le<<=1,Le&256&&(Le^=285);for(let wt=255;wt<512;wt++)EXP_TABLE[wt]=EXP_TABLE[wt-255]})();galoisField.log=function me(Le){if(Le<1)throw new Error("log("+Le+")");return LOG_TABLE[Le]};galoisField.exp=function me(Le){return EXP_TABLE[Le]};galoisField.mul=function me(Le,wt){return Le===0||wt===0?0:EXP_TABLE[LOG_TABLE[Le]+LOG_TABLE[wt]]};(function(me){const Le=galoisField;me.mul=function($t,kt){const It=new Uint8Array($t.length+kt.length-1);for(let Rt=0;Rt<$t.length;Rt++)for(let Pt=0;Pt<kt.length;Pt++)It[Rt+Pt]^=Le.mul($t[Rt],kt[Pt]);return It},me.mod=function($t,kt){let It=new Uint8Array($t);for(;It.length-kt.length>=0;){const Rt=It[0];for(let Ft=0;Ft<kt.length;Ft++)It[Ft]^=Le.mul(kt[Ft],Rt);let Pt=0;for(;Pt<It.length&&It[Pt]===0;)Pt++;It=It.slice(Pt)}return It},me.generateECPolynomial=function($t){let kt=new Uint8Array([1]);for(let It=0;It<$t;It++)kt=me.mul(kt,new Uint8Array([1,Le.exp(It)]));return kt}})(polynomial);const Polynomial=polynomial;function ReedSolomonEncoder$1(me){this.genPoly=void 0,this.degree=me,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder$1.prototype.initialize=function me(Le){this.degree=Le,this.genPoly=Polynomial.generateECPolynomial(this.degree)};ReedSolomonEncoder$1.prototype.encode=function me(Le){if(!this.genPoly)throw new Error("Encoder not initialized");const wt=new Uint8Array(Le.length+this.degree);wt.set(Le);const $t=Polynomial.mod(wt,this.genPoly),kt=this.degree-$t.length;if(kt>0){const It=new Uint8Array(this.degree);return It.set($t,kt),It}return $t};var reedSolomonEncoder=ReedSolomonEncoder$1,version={},mode={},versionCheck={};versionCheck.isValid=function me(Le){return!isNaN(Le)&&Le>=1&&Le<=40};var regex={};const numeric="[0-9]+",alphanumeric="[A-Z $%*+\\-./:]+";let kanji="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";kanji=kanji.replace(/u/g,"\\u");const byte="(?:(?![A-Z0-9 $%*+\\-./:]|"+kanji+`)(?:.|[\r
]))+`;regex.KANJI=new RegExp(kanji,"g");regex.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");regex.BYTE=new RegExp(byte,"g");regex.NUMERIC=new RegExp(numeric,"g");regex.ALPHANUMERIC=new RegExp(alphanumeric,"g");const TEST_KANJI=new RegExp("^"+kanji+"$"),TEST_NUMERIC=new RegExp("^"+numeric+"$"),TEST_ALPHANUMERIC=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");regex.testKanji=function me(Le){return TEST_KANJI.test(Le)};regex.testNumeric=function me(Le){return TEST_NUMERIC.test(Le)};regex.testAlphanumeric=function me(Le){return TEST_ALPHANUMERIC.test(Le)};(function(me){const Le=versionCheck,wt=regex;me.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},me.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},me.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},me.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},me.MIXED={bit:-1},me.getCharCountIndicator=function(It,Rt){if(!It.ccBits)throw new Error("Invalid mode: "+It);if(!Le.isValid(Rt))throw new Error("Invalid version: "+Rt);return Rt>=1&&Rt<10?It.ccBits[0]:Rt<27?It.ccBits[1]:It.ccBits[2]},me.getBestModeForData=function(It){return wt.testNumeric(It)?me.NUMERIC:wt.testAlphanumeric(It)?me.ALPHANUMERIC:wt.testKanji(It)?me.KANJI:me.BYTE},me.toString=function(It){if(It&&It.id)return It.id;throw new Error("Invalid mode")},me.isValid=function(It){return It&&It.bit&&It.ccBits};function $t(kt){if(typeof kt!="string")throw new Error("Param is not a string");switch(kt.toLowerCase()){case"numeric":return me.NUMERIC;case"alphanumeric":return me.ALPHANUMERIC;case"kanji":return me.KANJI;case"byte":return me.BYTE;default:throw new Error("Unknown mode: "+kt)}}me.from=function(It,Rt){if(me.isValid(It))return It;try{return $t(It)}catch{return Rt}}})(mode);(function(me){const Le=utils$1,wt=errorCorrectionCode,$t=errorCorrectionLevel,kt=mode,It=versionCheck,Rt=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,Pt=Le.getBCHDigit(Rt);function Ft(ii,Ni,Vi){for(let zi=1;zi<=40;zi++)if(Ni<=me.getCapacity(zi,Vi,ii))return zi}function Ut(ii,Ni){return kt.getCharCountIndicator(ii,Ni)+4}function Xt(ii,Ni){let Vi=0;return ii.forEach(function(zi){Vi+=Ut(zi.mode,Ni)+zi.getBitsLength()}),Vi}function Jt(ii,Ni){for(let Vi=1;Vi<=40;Vi++)if(Xt(ii,Vi)<=me.getCapacity(Vi,Ni,kt.MIXED))return Vi}me.from=function(Ni,Vi){return It.isValid(Ni)?parseInt(Ni,10):Vi},me.getCapacity=function(Ni,Vi,zi){if(!It.isValid(Ni))throw new Error("Invalid QR Code version");typeof zi=="undefined"&&(zi=kt.BYTE);const Xn=Le.getSymbolTotalCodewords(Ni),Qn=wt.getTotalCodewordsCount(Ni,Vi),eo=(Xn-Qn)*8;if(zi===kt.MIXED)return eo;const no=eo-Ut(zi,Ni);switch(zi){case kt.NUMERIC:return Math.floor(no/10*3);case kt.ALPHANUMERIC:return Math.floor(no/11*2);case kt.KANJI:return Math.floor(no/13);case kt.BYTE:default:return Math.floor(no/8)}},me.getBestVersionForData=function(Ni,Vi){let zi;const Xn=$t.from(Vi,$t.M);if(Array.isArray(Ni)){if(Ni.length>1)return Jt(Ni,Xn);if(Ni.length===0)return 1;zi=Ni[0]}else zi=Ni;return Ft(zi.mode,zi.getLength(),Xn)},me.getEncodedBits=function(Ni){if(!It.isValid(Ni)||Ni<7)throw new Error("Invalid QR Code version");let Vi=Ni<<12;for(;Le.getBCHDigit(Vi)-Pt>=0;)Vi^=Rt<<Le.getBCHDigit(Vi)-Pt;return Ni<<12|Vi}})(version);var formatInfo={};const Utils$3=utils$1,G15=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G15_MASK=1<<14|1<<12|1<<10|1<<4|1<<1,G15_BCH=Utils$3.getBCHDigit(G15);formatInfo.getEncodedBits=function me(Le,wt){const $t=Le.bit<<3|wt;let kt=$t<<10;for(;Utils$3.getBCHDigit(kt)-G15_BCH>=0;)kt^=G15<<Utils$3.getBCHDigit(kt)-G15_BCH;return($t<<10|kt)^G15_MASK};var segments={};const Mode$4=mode;function NumericData(me){this.mode=Mode$4.NUMERIC,this.data=me.toString()}NumericData.getBitsLength=function me(Le){return 10*Math.floor(Le/3)+(Le%3?Le%3*3+1:0)};NumericData.prototype.getLength=function me(){return this.data.length};NumericData.prototype.getBitsLength=function me(){return NumericData.getBitsLength(this.data.length)};NumericData.prototype.write=function me(Le){let wt,$t,kt;for(wt=0;wt+3<=this.data.length;wt+=3)$t=this.data.substr(wt,3),kt=parseInt($t,10),Le.put(kt,10);const It=this.data.length-wt;It>0&&($t=this.data.substr(wt),kt=parseInt($t,10),Le.put(kt,It*3+1))};var numericData=NumericData;const Mode$3=mode,ALPHA_NUM_CHARS=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(me){this.mode=Mode$3.ALPHANUMERIC,this.data=me}AlphanumericData.getBitsLength=function me(Le){return 11*Math.floor(Le/2)+6*(Le%2)};AlphanumericData.prototype.getLength=function me(){return this.data.length};AlphanumericData.prototype.getBitsLength=function me(){return AlphanumericData.getBitsLength(this.data.length)};AlphanumericData.prototype.write=function me(Le){let wt;for(wt=0;wt+2<=this.data.length;wt+=2){let $t=ALPHA_NUM_CHARS.indexOf(this.data[wt])*45;$t+=ALPHA_NUM_CHARS.indexOf(this.data[wt+1]),Le.put($t,11)}this.data.length%2&&Le.put(ALPHA_NUM_CHARS.indexOf(this.data[wt]),6)};var alphanumericData=AlphanumericData,encodeUtf8$1=function me(Le){for(var wt=[],$t=Le.length,kt=0;kt<$t;kt++){var It=Le.charCodeAt(kt);if(It>=55296&&It<=56319&&$t>kt+1){var Rt=Le.charCodeAt(kt+1);Rt>=56320&&Rt<=57343&&(It=(It-55296)*1024+Rt-56320+65536,kt+=1)}if(It<128){wt.push(It);continue}if(It<2048){wt.push(It>>6|192),wt.push(It&63|128);continue}if(It<55296||It>=57344&&It<65536){wt.push(It>>12|224),wt.push(It>>6&63|128),wt.push(It&63|128);continue}if(It>=65536&&It<=1114111){wt.push(It>>18|240),wt.push(It>>12&63|128),wt.push(It>>6&63|128),wt.push(It&63|128);continue}wt.push(239,191,189)}return new Uint8Array(wt).buffer};const encodeUtf8=encodeUtf8$1,Mode$2=mode;function ByteData(me){this.mode=Mode$2.BYTE,typeof me=="string"&&(me=encodeUtf8(me)),this.data=new Uint8Array(me)}ByteData.getBitsLength=function me(Le){return Le*8};ByteData.prototype.getLength=function me(){return this.data.length};ByteData.prototype.getBitsLength=function me(){return ByteData.getBitsLength(this.data.length)};ByteData.prototype.write=function(me){for(let Le=0,wt=this.data.length;Le<wt;Le++)me.put(this.data[Le],8)};var byteData=ByteData;const Mode$1=mode,Utils$2=utils$1;function KanjiData(me){this.mode=Mode$1.KANJI,this.data=me}KanjiData.getBitsLength=function me(Le){return Le*13};KanjiData.prototype.getLength=function me(){return this.data.length};KanjiData.prototype.getBitsLength=function me(){return KanjiData.getBitsLength(this.data.length)};KanjiData.prototype.write=function(me){let Le;for(Le=0;Le<this.data.length;Le++){let wt=Utils$2.toSJIS(this.data[Le]);if(wt>=33088&&wt<=40956)wt-=33088;else if(wt>=57408&&wt<=60351)wt-=49472;else throw new Error("Invalid SJIS character: "+this.data[Le]+`
Make sure your charset is UTF-8`);wt=(wt>>>8&255)*192+(wt&255),me.put(wt,13)}};var kanjiData=KanjiData,dijkstra={exports:{}};(function(me){var Le={single_source_shortest_paths:function(wt,$t,kt){var It={},Rt={};Rt[$t]=0;var Pt=Le.PriorityQueue.make();Pt.push($t,0);for(var Ft,Ut,Xt,Jt,ii,Ni,Vi,zi,Xn;!Pt.empty();){Ft=Pt.pop(),Ut=Ft.value,Jt=Ft.cost,ii=wt[Ut]||{};for(Xt in ii)ii.hasOwnProperty(Xt)&&(Ni=ii[Xt],Vi=Jt+Ni,zi=Rt[Xt],Xn=typeof Rt[Xt]=="undefined",(Xn||zi>Vi)&&(Rt[Xt]=Vi,Pt.push(Xt,Vi),It[Xt]=Ut))}if(typeof kt!="undefined"&&typeof Rt[kt]=="undefined"){var Qn=["Could not find a path from ",$t," to ",kt,"."].join("");throw new Error(Qn)}return It},extract_shortest_path_from_predecessor_list:function(wt,$t){for(var kt=[],It=$t;It;)kt.push(It),wt[It],It=wt[It];return kt.reverse(),kt},find_path:function(wt,$t,kt){var It=Le.single_source_shortest_paths(wt,$t,kt);return Le.extract_shortest_path_from_predecessor_list(It,kt)},PriorityQueue:{make:function(wt){var $t=Le.PriorityQueue,kt={},It;wt=wt||{};for(It in $t)$t.hasOwnProperty(It)&&(kt[It]=$t[It]);return kt.queue=[],kt.sorter=wt.sorter||$t.default_sorter,kt},default_sorter:function(wt,$t){return wt.cost-$t.cost},push:function(wt,$t){var kt={value:wt,cost:$t};this.queue.push(kt),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};me.exports=Le})(dijkstra);(function(me){const Le=mode,wt=numericData,$t=alphanumericData,kt=byteData,It=kanjiData,Rt=regex,Pt=utils$1,Ft=dijkstra.exports;function Ut(Qn){return unescape(encodeURIComponent(Qn)).length}function Xt(Qn,eo,no){const to=[];let oo;for(;(oo=Qn.exec(no))!==null;)to.push({data:oo[0],index:oo.index,mode:eo,length:oo[0].length});return to}function Jt(Qn){const eo=Xt(Rt.NUMERIC,Le.NUMERIC,Qn),no=Xt(Rt.ALPHANUMERIC,Le.ALPHANUMERIC,Qn);let to,oo;return Pt.isKanjiModeEnabled()?(to=Xt(Rt.BYTE,Le.BYTE,Qn),oo=Xt(Rt.KANJI,Le.KANJI,Qn)):(to=Xt(Rt.BYTE_KANJI,Le.BYTE,Qn),oo=[]),eo.concat(no,to,oo).sort(function(ro,Fo){return ro.index-Fo.index}).map(function(ro){return{data:ro.data,mode:ro.mode,length:ro.length}})}function ii(Qn,eo){switch(eo){case Le.NUMERIC:return wt.getBitsLength(Qn);case Le.ALPHANUMERIC:return $t.getBitsLength(Qn);case Le.KANJI:return It.getBitsLength(Qn);case Le.BYTE:return kt.getBitsLength(Qn)}}function Ni(Qn){return Qn.reduce(function(eo,no){const to=eo.length-1>=0?eo[eo.length-1]:null;return to&&to.mode===no.mode?(eo[eo.length-1].data+=no.data,eo):(eo.push(no),eo)},[])}function Vi(Qn){const eo=[];for(let no=0;no<Qn.length;no++){const to=Qn[no];switch(to.mode){case Le.NUMERIC:eo.push([to,{data:to.data,mode:Le.ALPHANUMERIC,length:to.length},{data:to.data,mode:Le.BYTE,length:to.length}]);break;case Le.ALPHANUMERIC:eo.push([to,{data:to.data,mode:Le.BYTE,length:to.length}]);break;case Le.KANJI:eo.push([to,{data:to.data,mode:Le.BYTE,length:Ut(to.data)}]);break;case Le.BYTE:eo.push([{data:to.data,mode:Le.BYTE,length:Ut(to.data)}])}}return eo}function zi(Qn,eo){const no={},to={start:{}};let oo=["start"];for(let ao=0;ao<Qn.length;ao++){const ro=Qn[ao],Fo=[];for(let Qr=0;Qr<ro.length;Qr++){const es=ro[Qr],ns=""+ao+Qr;Fo.push(ns),no[ns]={node:es,lastCount:0},to[ns]={};for(let so=0;so<oo.length;so++){const gr=oo[so];no[gr]&&no[gr].node.mode===es.mode?(to[gr][ns]=ii(no[gr].lastCount+es.length,es.mode)-ii(no[gr].lastCount,es.mode),no[gr].lastCount+=es.length):(no[gr]&&(no[gr].lastCount=es.length),to[gr][ns]=ii(es.length,es.mode)+4+Le.getCharCountIndicator(es.mode,eo))}}oo=Fo}for(let ao=0;ao<oo.length;ao++)to[oo[ao]].end=0;return{map:to,table:no}}function Xn(Qn,eo){let no;const to=Le.getBestModeForData(Qn);if(no=Le.from(eo,to),no!==Le.BYTE&&no.bit<to.bit)throw new Error('"'+Qn+'" cannot be encoded with mode '+Le.toString(no)+`.
 Suggested mode is: `+Le.toString(to));switch(no===Le.KANJI&&!Pt.isKanjiModeEnabled()&&(no=Le.BYTE),no){case Le.NUMERIC:return new wt(Qn);case Le.ALPHANUMERIC:return new $t(Qn);case Le.KANJI:return new It(Qn);case Le.BYTE:return new kt(Qn)}}me.fromArray=function(eo){return eo.reduce(function(no,to){return typeof to=="string"?no.push(Xn(to,null)):to.data&&no.push(Xn(to.data,to.mode)),no},[])},me.fromString=function(eo,no){const to=Jt(eo,Pt.isKanjiModeEnabled()),oo=Vi(to),ao=zi(oo,no),ro=Ft.find_path(ao.map,"start","end"),Fo=[];for(let Qr=1;Qr<ro.length-1;Qr++)Fo.push(ao.table[ro[Qr]].node);return me.fromArray(Ni(Fo))},me.rawSplit=function(eo){return me.fromArray(Jt(eo,Pt.isKanjiModeEnabled()))}})(segments);const Utils$1=utils$1,ECLevel=errorCorrectionLevel,BitBuffer=bitBuffer,BitMatrix=bitMatrix,AlignmentPattern=alignmentPattern,FinderPattern=finderPattern,MaskPattern=maskPattern,ECCode=errorCorrectionCode,ReedSolomonEncoder=reedSolomonEncoder,Version=version,FormatInfo=formatInfo,Mode=mode,Segments=segments;function setupFinderPattern(me,Le){const wt=me.size,$t=FinderPattern.getPositions(Le);for(let kt=0;kt<$t.length;kt++){const It=$t[kt][0],Rt=$t[kt][1];for(let Pt=-1;Pt<=7;Pt++)if(!(It+Pt<=-1||wt<=It+Pt))for(let Ft=-1;Ft<=7;Ft++)Rt+Ft<=-1||wt<=Rt+Ft||(Pt>=0&&Pt<=6&&(Ft===0||Ft===6)||Ft>=0&&Ft<=6&&(Pt===0||Pt===6)||Pt>=2&&Pt<=4&&Ft>=2&&Ft<=4?me.set(It+Pt,Rt+Ft,!0,!0):me.set(It+Pt,Rt+Ft,!1,!0))}}function setupTimingPattern(me){const Le=me.size;for(let wt=8;wt<Le-8;wt++){const $t=wt%2===0;me.set(wt,6,$t,!0),me.set(6,wt,$t,!0)}}function setupAlignmentPattern(me,Le){const wt=AlignmentPattern.getPositions(Le);for(let $t=0;$t<wt.length;$t++){const kt=wt[$t][0],It=wt[$t][1];for(let Rt=-2;Rt<=2;Rt++)for(let Pt=-2;Pt<=2;Pt++)Rt===-2||Rt===2||Pt===-2||Pt===2||Rt===0&&Pt===0?me.set(kt+Rt,It+Pt,!0,!0):me.set(kt+Rt,It+Pt,!1,!0)}}function setupVersionInfo(me,Le){const wt=me.size,$t=Version.getEncodedBits(Le);let kt,It,Rt;for(let Pt=0;Pt<18;Pt++)kt=Math.floor(Pt/3),It=Pt%3+wt-8-3,Rt=($t>>Pt&1)===1,me.set(kt,It,Rt,!0),me.set(It,kt,Rt,!0)}function setupFormatInfo(me,Le,wt){const $t=me.size,kt=FormatInfo.getEncodedBits(Le,wt);let It,Rt;for(It=0;It<15;It++)Rt=(kt>>It&1)===1,It<6?me.set(It,8,Rt,!0):It<8?me.set(It+1,8,Rt,!0):me.set($t-15+It,8,Rt,!0),It<8?me.set(8,$t-It-1,Rt,!0):It<9?me.set(8,15-It-1+1,Rt,!0):me.set(8,15-It-1,Rt,!0);me.set($t-8,8,1,!0)}function setupData(me,Le){const wt=me.size;let $t=-1,kt=wt-1,It=7,Rt=0;for(let Pt=wt-1;Pt>0;Pt-=2)for(Pt===6&&Pt--;;){for(let Ft=0;Ft<2;Ft++)if(!me.isReserved(kt,Pt-Ft)){let Ut=!1;Rt<Le.length&&(Ut=(Le[Rt]>>>It&1)===1),me.set(kt,Pt-Ft,Ut),It--,It===-1&&(Rt++,It=7)}if(kt+=$t,kt<0||wt<=kt){kt-=$t,$t=-$t;break}}}function createData(me,Le,wt){const $t=new BitBuffer;wt.forEach(function(Ft){$t.put(Ft.mode.bit,4),$t.put(Ft.getLength(),Mode.getCharCountIndicator(Ft.mode,me)),Ft.write($t)});const kt=Utils$1.getSymbolTotalCodewords(me),It=ECCode.getTotalCodewordsCount(me,Le),Rt=(kt-It)*8;for($t.getLengthInBits()+4<=Rt&&$t.put(0,4);$t.getLengthInBits()%8!==0;)$t.putBit(0);const Pt=(Rt-$t.getLengthInBits())/8;for(let Ft=0;Ft<Pt;Ft++)$t.put(Ft%2?17:236,8);return createCodewords($t,me,Le)}function createCodewords(me,Le,wt){const $t=Utils$1.getSymbolTotalCodewords(Le),kt=ECCode.getTotalCodewordsCount(Le,wt),It=$t-kt,Rt=ECCode.getBlocksCount(Le,wt),Pt=$t%Rt,Ft=Rt-Pt,Ut=Math.floor($t/Rt),Xt=Math.floor(It/Rt),Jt=Xt+1,ii=Ut-Xt,Ni=new ReedSolomonEncoder(ii);let Vi=0;const zi=new Array(Rt),Xn=new Array(Rt);let Qn=0;const eo=new Uint8Array(me.buffer);for(let ro=0;ro<Rt;ro++){const Fo=ro<Ft?Xt:Jt;zi[ro]=eo.slice(Vi,Vi+Fo),Xn[ro]=Ni.encode(zi[ro]),Vi+=Fo,Qn=Math.max(Qn,Fo)}const no=new Uint8Array($t);let to=0,oo,ao;for(oo=0;oo<Qn;oo++)for(ao=0;ao<Rt;ao++)oo<zi[ao].length&&(no[to++]=zi[ao][oo]);for(oo=0;oo<ii;oo++)for(ao=0;ao<Rt;ao++)no[to++]=Xn[ao][oo];return no}function createSymbol(me,Le,wt,$t){let kt;if(Array.isArray(me))kt=Segments.fromArray(me);else if(typeof me=="string"){let Ut=Le;if(!Ut){const Xt=Segments.rawSplit(me);Ut=Version.getBestVersionForData(Xt,wt)}kt=Segments.fromString(me,Ut||40)}else throw new Error("Invalid data");const It=Version.getBestVersionForData(kt,wt);if(!It)throw new Error("The amount of data is too big to be stored in a QR Code");if(!Le)Le=It;else if(Le<It)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+It+`.
`);const Rt=createData(Le,wt,kt),Pt=Utils$1.getSymbolSize(Le),Ft=new BitMatrix(Pt);return setupFinderPattern(Ft,Le),setupTimingPattern(Ft),setupAlignmentPattern(Ft,Le),setupFormatInfo(Ft,wt,0),Le>=7&&setupVersionInfo(Ft,Le),setupData(Ft,Rt),isNaN($t)&&($t=MaskPattern.getBestMask(Ft,setupFormatInfo.bind(null,Ft,wt))),MaskPattern.applyMask($t,Ft),setupFormatInfo(Ft,wt,$t),{modules:Ft,version:Le,errorCorrectionLevel:wt,maskPattern:$t,segments:kt}}qrcode.create=function me(Le,wt){if(typeof Le=="undefined"||Le==="")throw new Error("No input text");let $t=ECLevel.M,kt,It;return typeof wt!="undefined"&&($t=ECLevel.from(wt.errorCorrectionLevel,ECLevel.M),kt=Version.from(wt.version),It=MaskPattern.from(wt.maskPattern),wt.toSJISFunc&&Utils$1.setToSJISFunction(wt.toSJISFunc)),createSymbol(Le,kt,$t,It)};var canvas={},utils={};(function(me){function Le(wt){if(typeof wt=="number"&&(wt=wt.toString()),typeof wt!="string")throw new Error("Color should be defined as hex string");let $t=wt.slice().replace("#","").split("");if($t.length<3||$t.length===5||$t.length>8)throw new Error("Invalid hex color: "+wt);($t.length===3||$t.length===4)&&($t=Array.prototype.concat.apply([],$t.map(function(It){return[It,It]}))),$t.length===6&&$t.push("F","F");const kt=parseInt($t.join(""),16);return{r:kt>>24&255,g:kt>>16&255,b:kt>>8&255,a:kt&255,hex:"#"+$t.slice(0,6).join("")}}me.getOptions=function($t){$t||($t={}),$t.color||($t.color={});const kt=typeof $t.margin=="undefined"||$t.margin===null||$t.margin<0?4:$t.margin,It=$t.width&&$t.width>=21?$t.width:void 0,Rt=$t.scale||4;return{width:It,scale:It?4:Rt,margin:kt,color:{dark:Le($t.color.dark||"#000000ff"),light:Le($t.color.light||"#ffffffff")},type:$t.type,rendererOpts:$t.rendererOpts||{}}},me.getScale=function($t,kt){return kt.width&&kt.width>=$t+kt.margin*2?kt.width/($t+kt.margin*2):kt.scale},me.getImageWidth=function($t,kt){const It=me.getScale($t,kt);return Math.floor(($t+kt.margin*2)*It)},me.qrToImageData=function($t,kt,It){const Rt=kt.modules.size,Pt=kt.modules.data,Ft=me.getScale(Rt,It),Ut=Math.floor((Rt+It.margin*2)*Ft),Xt=It.margin*Ft,Jt=[It.color.light,It.color.dark];for(let ii=0;ii<Ut;ii++)for(let Ni=0;Ni<Ut;Ni++){let Vi=(ii*Ut+Ni)*4,zi=It.color.light;if(ii>=Xt&&Ni>=Xt&&ii<Ut-Xt&&Ni<Ut-Xt){const Xn=Math.floor((ii-Xt)/Ft),Qn=Math.floor((Ni-Xt)/Ft);zi=Jt[Pt[Xn*Rt+Qn]?1:0]}$t[Vi++]=zi.r,$t[Vi++]=zi.g,$t[Vi++]=zi.b,$t[Vi]=zi.a}}})(utils);(function(me){const Le=utils;function wt(kt,It,Rt){kt.clearRect(0,0,It.width,It.height),It.style||(It.style={}),It.height=Rt,It.width=Rt,It.style.height=Rt+"px",It.style.width=Rt+"px"}function $t(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}me.render=function(It,Rt,Pt){let Ft=Pt,Ut=Rt;typeof Ft=="undefined"&&(!Rt||!Rt.getContext)&&(Ft=Rt,Rt=void 0),Rt||(Ut=$t()),Ft=Le.getOptions(Ft);const Xt=Le.getImageWidth(It.modules.size,Ft),Jt=Ut.getContext("2d"),ii=Jt.createImageData(Xt,Xt);return Le.qrToImageData(ii.data,It,Ft),wt(Jt,Ut,Xt),Jt.putImageData(ii,0,0),Ut},me.renderToDataURL=function(It,Rt,Pt){let Ft=Pt;typeof Ft=="undefined"&&(!Rt||!Rt.getContext)&&(Ft=Rt,Rt=void 0),Ft||(Ft={});const Ut=me.render(It,Rt,Ft),Xt=Ft.type||"image/png",Jt=Ft.rendererOpts||{};return Ut.toDataURL(Xt,Jt.quality)}})(canvas);var svgTag={};const Utils=utils;function getColorAttrib(me,Le){const wt=me.a/255,$t=Le+'="'+me.hex+'"';return wt<1?$t+" "+Le+'-opacity="'+wt.toFixed(2).slice(1)+'"':$t}function svgCmd(me,Le,wt){let $t=me+Le;return typeof wt!="undefined"&&($t+=" "+wt),$t}function qrToPath(me,Le,wt){let $t="",kt=0,It=!1,Rt=0;for(let Pt=0;Pt<me.length;Pt++){const Ft=Math.floor(Pt%Le),Ut=Math.floor(Pt/Le);!Ft&&!It&&(It=!0),me[Pt]?(Rt++,Pt>0&&Ft>0&&me[Pt-1]||($t+=It?svgCmd("M",Ft+wt,.5+Ut+wt):svgCmd("m",kt,0),kt=0,It=!1),Ft+1<Le&&me[Pt+1]||($t+=svgCmd("h",Rt),Rt=0)):kt++}return $t}svgTag.render=function me(Le,wt,$t){const kt=Utils.getOptions(wt),It=Le.modules.size,Rt=Le.modules.data,Pt=It+kt.margin*2,Ft=kt.color.light.a?"<path "+getColorAttrib(kt.color.light,"fill")+' d="M0 0h'+Pt+"v"+Pt+'H0z"/>':"",Ut="<path "+getColorAttrib(kt.color.dark,"stroke")+' d="'+qrToPath(Rt,It,kt.margin)+'"/>',Xt='viewBox="0 0 '+Pt+" "+Pt+'"',Jt=kt.width?'width="'+kt.width+'" height="'+kt.width+'" ':"",ii='<svg xmlns="http://www.w3.org/2000/svg" '+Jt+Xt+' shape-rendering="crispEdges">'+Ft+Ut+`</svg>
`;return typeof $t=="function"&&$t(null,ii),ii};const canPromise=canPromise$1,QRCode=qrcode,CanvasRenderer=canvas,SvgRenderer=svgTag;function renderCanvas(me,Le,wt,$t,kt){const It=[].slice.call(arguments,1),Rt=It.length,Pt=typeof It[Rt-1]=="function";if(!Pt&&!canPromise())throw new Error("Callback required as last argument");if(Pt){if(Rt<2)throw new Error("Too few arguments provided");Rt===2?(kt=wt,wt=Le,Le=$t=void 0):Rt===3&&(Le.getContext&&typeof kt=="undefined"?(kt=$t,$t=void 0):(kt=$t,$t=wt,wt=Le,Le=void 0))}else{if(Rt<1)throw new Error("Too few arguments provided");return Rt===1?(wt=Le,Le=$t=void 0):Rt===2&&!Le.getContext&&($t=wt,wt=Le,Le=void 0),new Promise(function(Ft,Ut){try{const Xt=QRCode.create(wt,$t);Ft(me(Xt,Le,$t))}catch(Xt){Ut(Xt)}})}try{const Ft=QRCode.create(wt,$t);kt(null,me(Ft,Le,$t))}catch(Ft){kt(Ft)}}browser.create=QRCode.create;browser.toCanvas=renderCanvas.bind(null,CanvasRenderer.render);browser.toDataURL=renderCanvas.bind(null,CanvasRenderer.renderToDataURL);browser.toString=renderCanvas.bind(null,function(me,Le,wt){return SvgRenderer.render(me,wt)});var md5$1={exports:{}},crypt={exports:{}};(function(){var me="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Le={rotl:function(wt,$t){return wt<<$t|wt>>>32-$t},rotr:function(wt,$t){return wt<<32-$t|wt>>>$t},endian:function(wt){if(wt.constructor==Number)return Le.rotl(wt,8)&16711935|Le.rotl(wt,24)&4278255360;for(var $t=0;$t<wt.length;$t++)wt[$t]=Le.endian(wt[$t]);return wt},randomBytes:function(wt){for(var $t=[];wt>0;wt--)$t.push(Math.floor(Math.random()*256));return $t},bytesToWords:function(wt){for(var $t=[],kt=0,It=0;kt<wt.length;kt++,It+=8)$t[It>>>5]|=wt[kt]<<24-It%32;return $t},wordsToBytes:function(wt){for(var $t=[],kt=0;kt<wt.length*32;kt+=8)$t.push(wt[kt>>>5]>>>24-kt%32&255);return $t},bytesToHex:function(wt){for(var $t=[],kt=0;kt<wt.length;kt++)$t.push((wt[kt]>>>4).toString(16)),$t.push((wt[kt]&15).toString(16));return $t.join("")},hexToBytes:function(wt){for(var $t=[],kt=0;kt<wt.length;kt+=2)$t.push(parseInt(wt.substr(kt,2),16));return $t},bytesToBase64:function(wt){for(var $t=[],kt=0;kt<wt.length;kt+=3)for(var It=wt[kt]<<16|wt[kt+1]<<8|wt[kt+2],Rt=0;Rt<4;Rt++)kt*8+Rt*6<=wt.length*8?$t.push(me.charAt(It>>>6*(3-Rt)&63)):$t.push("=");return $t.join("")},base64ToBytes:function(wt){wt=wt.replace(/[^A-Z0-9+\/]/ig,"");for(var $t=[],kt=0,It=0;kt<wt.length;It=++kt%4)It!=0&&$t.push((me.indexOf(wt.charAt(kt-1))&Math.pow(2,-2*It+8)-1)<<It*2|me.indexOf(wt.charAt(kt))>>>6-It*2);return $t}};crypt.exports=Le})();var charenc={utf8:{stringToBytes:function(me){return charenc.bin.stringToBytes(unescape(encodeURIComponent(me)))},bytesToString:function(me){return decodeURIComponent(escape(charenc.bin.bytesToString(me)))}},bin:{stringToBytes:function(me){for(var Le=[],wt=0;wt<me.length;wt++)Le.push(me.charCodeAt(wt)&255);return Le},bytesToString:function(me){for(var Le=[],wt=0;wt<me.length;wt++)Le.push(String.fromCharCode(me[wt]));return Le.join("")}}},charenc_1=charenc;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var isBuffer_1=function(me){return me!=null&&(isBuffer(me)||isSlowBuffer(me)||!!me._isBuffer)};function isBuffer(me){return!!me.constructor&&typeof me.constructor.isBuffer=="function"&&me.constructor.isBuffer(me)}function isSlowBuffer(me){return typeof me.readFloatLE=="function"&&typeof me.slice=="function"&&isBuffer(me.slice(0,0))}(function(){var me=crypt.exports,Le=charenc_1.utf8,wt=isBuffer_1,$t=charenc_1.bin,kt=function(It,Rt){It.constructor==String?Rt&&Rt.encoding==="binary"?It=$t.stringToBytes(It):It=Le.stringToBytes(It):wt(It)?It=Array.prototype.slice.call(It,0):!Array.isArray(It)&&It.constructor!==Uint8Array&&(It=It.toString());for(var Pt=me.bytesToWords(It),Ft=It.length*8,Ut=1732584193,Xt=-271733879,Jt=-1732584194,ii=271733878,Ni=0;Ni<Pt.length;Ni++)Pt[Ni]=(Pt[Ni]<<8|Pt[Ni]>>>24)&16711935|(Pt[Ni]<<24|Pt[Ni]>>>8)&4278255360;Pt[Ft>>>5]|=128<<Ft%32,Pt[(Ft+64>>>9<<4)+14]=Ft;for(var Vi=kt._ff,zi=kt._gg,Xn=kt._hh,Qn=kt._ii,Ni=0;Ni<Pt.length;Ni+=16){var eo=Ut,no=Xt,to=Jt,oo=ii;Ut=Vi(Ut,Xt,Jt,ii,Pt[Ni+0],7,-680876936),ii=Vi(ii,Ut,Xt,Jt,Pt[Ni+1],12,-389564586),Jt=Vi(Jt,ii,Ut,Xt,Pt[Ni+2],17,606105819),Xt=Vi(Xt,Jt,ii,Ut,Pt[Ni+3],22,-1044525330),Ut=Vi(Ut,Xt,Jt,ii,Pt[Ni+4],7,-176418897),ii=Vi(ii,Ut,Xt,Jt,Pt[Ni+5],12,1200080426),Jt=Vi(Jt,ii,Ut,Xt,Pt[Ni+6],17,-1473231341),Xt=Vi(Xt,Jt,ii,Ut,Pt[Ni+7],22,-45705983),Ut=Vi(Ut,Xt,Jt,ii,Pt[Ni+8],7,1770035416),ii=Vi(ii,Ut,Xt,Jt,Pt[Ni+9],12,-1958414417),Jt=Vi(Jt,ii,Ut,Xt,Pt[Ni+10],17,-42063),Xt=Vi(Xt,Jt,ii,Ut,Pt[Ni+11],22,-1990404162),Ut=Vi(Ut,Xt,Jt,ii,Pt[Ni+12],7,1804603682),ii=Vi(ii,Ut,Xt,Jt,Pt[Ni+13],12,-40341101),Jt=Vi(Jt,ii,Ut,Xt,Pt[Ni+14],17,-1502002290),Xt=Vi(Xt,Jt,ii,Ut,Pt[Ni+15],22,1236535329),Ut=zi(Ut,Xt,Jt,ii,Pt[Ni+1],5,-165796510),ii=zi(ii,Ut,Xt,Jt,Pt[Ni+6],9,-1069501632),Jt=zi(Jt,ii,Ut,Xt,Pt[Ni+11],14,643717713),Xt=zi(Xt,Jt,ii,Ut,Pt[Ni+0],20,-373897302),Ut=zi(Ut,Xt,Jt,ii,Pt[Ni+5],5,-701558691),ii=zi(ii,Ut,Xt,Jt,Pt[Ni+10],9,38016083),Jt=zi(Jt,ii,Ut,Xt,Pt[Ni+15],14,-660478335),Xt=zi(Xt,Jt,ii,Ut,Pt[Ni+4],20,-405537848),Ut=zi(Ut,Xt,Jt,ii,Pt[Ni+9],5,568446438),ii=zi(ii,Ut,Xt,Jt,Pt[Ni+14],9,-1019803690),Jt=zi(Jt,ii,Ut,Xt,Pt[Ni+3],14,-187363961),Xt=zi(Xt,Jt,ii,Ut,Pt[Ni+8],20,1163531501),Ut=zi(Ut,Xt,Jt,ii,Pt[Ni+13],5,-1444681467),ii=zi(ii,Ut,Xt,Jt,Pt[Ni+2],9,-51403784),Jt=zi(Jt,ii,Ut,Xt,Pt[Ni+7],14,1735328473),Xt=zi(Xt,Jt,ii,Ut,Pt[Ni+12],20,-1926607734),Ut=Xn(Ut,Xt,Jt,ii,Pt[Ni+5],4,-378558),ii=Xn(ii,Ut,Xt,Jt,Pt[Ni+8],11,-2022574463),Jt=Xn(Jt,ii,Ut,Xt,Pt[Ni+11],16,1839030562),Xt=Xn(Xt,Jt,ii,Ut,Pt[Ni+14],23,-35309556),Ut=Xn(Ut,Xt,Jt,ii,Pt[Ni+1],4,-1530992060),ii=Xn(ii,Ut,Xt,Jt,Pt[Ni+4],11,1272893353),Jt=Xn(Jt,ii,Ut,Xt,Pt[Ni+7],16,-155497632),Xt=Xn(Xt,Jt,ii,Ut,Pt[Ni+10],23,-1094730640),Ut=Xn(Ut,Xt,Jt,ii,Pt[Ni+13],4,681279174),ii=Xn(ii,Ut,Xt,Jt,Pt[Ni+0],11,-358537222),Jt=Xn(Jt,ii,Ut,Xt,Pt[Ni+3],16,-722521979),Xt=Xn(Xt,Jt,ii,Ut,Pt[Ni+6],23,76029189),Ut=Xn(Ut,Xt,Jt,ii,Pt[Ni+9],4,-640364487),ii=Xn(ii,Ut,Xt,Jt,Pt[Ni+12],11,-421815835),Jt=Xn(Jt,ii,Ut,Xt,Pt[Ni+15],16,530742520),Xt=Xn(Xt,Jt,ii,Ut,Pt[Ni+2],23,-995338651),Ut=Qn(Ut,Xt,Jt,ii,Pt[Ni+0],6,-198630844),ii=Qn(ii,Ut,Xt,Jt,Pt[Ni+7],10,1126891415),Jt=Qn(Jt,ii,Ut,Xt,Pt[Ni+14],15,-1416354905),Xt=Qn(Xt,Jt,ii,Ut,Pt[Ni+5],21,-57434055),Ut=Qn(Ut,Xt,Jt,ii,Pt[Ni+12],6,1700485571),ii=Qn(ii,Ut,Xt,Jt,Pt[Ni+3],10,-1894986606),Jt=Qn(Jt,ii,Ut,Xt,Pt[Ni+10],15,-1051523),Xt=Qn(Xt,Jt,ii,Ut,Pt[Ni+1],21,-2054922799),Ut=Qn(Ut,Xt,Jt,ii,Pt[Ni+8],6,1873313359),ii=Qn(ii,Ut,Xt,Jt,Pt[Ni+15],10,-30611744),Jt=Qn(Jt,ii,Ut,Xt,Pt[Ni+6],15,-1560198380),Xt=Qn(Xt,Jt,ii,Ut,Pt[Ni+13],21,1309151649),Ut=Qn(Ut,Xt,Jt,ii,Pt[Ni+4],6,-145523070),ii=Qn(ii,Ut,Xt,Jt,Pt[Ni+11],10,-1120210379),Jt=Qn(Jt,ii,Ut,Xt,Pt[Ni+2],15,718787259),Xt=Qn(Xt,Jt,ii,Ut,Pt[Ni+9],21,-343485551),Ut=Ut+eo>>>0,Xt=Xt+no>>>0,Jt=Jt+to>>>0,ii=ii+oo>>>0}return me.endian([Ut,Xt,Jt,ii])};kt._ff=function(It,Rt,Pt,Ft,Ut,Xt,Jt){var ii=It+(Rt&Pt|~Rt&Ft)+(Ut>>>0)+Jt;return(ii<<Xt|ii>>>32-Xt)+Rt},kt._gg=function(It,Rt,Pt,Ft,Ut,Xt,Jt){var ii=It+(Rt&Ft|Pt&~Ft)+(Ut>>>0)+Jt;return(ii<<Xt|ii>>>32-Xt)+Rt},kt._hh=function(It,Rt,Pt,Ft,Ut,Xt,Jt){var ii=It+(Rt^Pt^Ft)+(Ut>>>0)+Jt;return(ii<<Xt|ii>>>32-Xt)+Rt},kt._ii=function(It,Rt,Pt,Ft,Ut,Xt,Jt){var ii=It+(Pt^(Rt|~Ft))+(Ut>>>0)+Jt;return(ii<<Xt|ii>>>32-Xt)+Rt},kt._blocksize=16,kt._digestsize=16,md5$1.exports=function(It,Rt){if(It==null)throw new Error("Illegal argument "+It);var Pt=me.wordsToBytes(kt(It,Rt));return Rt&&Rt.asBytes?Pt:Rt&&Rt.asString?$t.bytesToString(Pt):me.bytesToHex(Pt)}})();var md5=md5$1.exports;const _hoisted_1$4={fill:"none",height:"32",viewBox:"0 0 32 32",width:"32",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$4=createStaticVNode('<path clip-rule="evenodd" d="M23 7a2 2 0 0 1 2 2v7h-2V9.8a.8.8 0 0 0-.8-.8H8.8a.8.8 0 0 0-.794.7L8 9.8v10.4a.8.8 0 0 0 .7.794l.1.006H16v2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" fill="currentColor" fill-rule="evenodd"></path><path d="M25.875 18h-6.75c-.621 0-1.125.522-1.125 1.167v4.666c0 .645.504 1.167 1.125 1.167h6.75c.621 0 1.125-.522 1.125-1.167v-4.666c0-.645-.504-1.167-1.125-1.167z" fill="currentColor"></path><g stroke="currentColor" stroke-width="2"><path d="m11.935 12.566 4.454 4.455"></path><path d="M15.714 12.566h-3.962a.01.01 0 0 0-.01.01v3.963" stroke-linecap="round"></path></g>',3),_hoisted_5$1=[_hoisted_2$4];function render$2(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$4,[..._hoisted_5$1])}var IcoMiniEx={render:render$2},Alert_vue_vue_type_style_index_0_lang="";const _hoisted_1$3=["innerHTML"],_hoisted_2$3=["innerHTML"],_hoisted_3$3={class:"base_alert--footer flex_between"},_sfc_main$1=defineComponent({__name:"Alert",setup(me){const Le="\u53D6\u6D88",wt="\u786E\u8BA4",$t=ref("\u662F\u5426\u786E\u8BA4\uFF1F"),kt=ref(""),It=ref(Le),Rt=ref(wt),Pt=ref(null),Ft=ref(null),Ut=ref(null),Xt=()=>{Ut.value.show()},Jt=()=>{Ut.value.hide()};events.on("alert",Vi=>{$t.value=Vi.content,kt.value=Vi.message||"",It.value=Vi.cancelText||Le,Rt.value=Vi.confirmText||wt,Pt.value=Vi.onCancel,Ft.value=Vi.onConfirm,Xt()});async function ii(){Pt.value&&await Pt.value(),Jt()}async function Ni(){await Ft.value(),Jt()}return(Vi,zi)=>{const Xn=resolveComponent("VButton");return openBlock(),createBlock(VPopup,{"custom-class":"base_alert",ref_key:"popupRef",ref:Ut},{default:withCtx(()=>[createVNode(unref(IcoClose$1),{class:"base_alert--close",onClick:withModifiers(Jt,["stop"])},null,8,["onClick"]),createBaseVNode("div",{class:"base_alert--content text_center",innerHTML:$t.value},null,8,_hoisted_1$3),kt.value?(openBlock(),createElementBlock("div",{key:0,class:"base_alert--message text_center",innerHTML:kt.value},null,8,_hoisted_2$3)):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$3,[createVNode(Xn,{class:"base_alert--btn",onClick:withModifiers(ii,["stop"])},{default:withCtx(()=>[createTextVNode(toDisplayString(It.value),1)]),_:1},8,["onClick"]),createVNode(Xn,{class:"base_alert--btn",onClick:withModifiers(Ni,["stop"]),type:"pink"},{default:withCtx(()=>[createTextVNode(toDisplayString(Rt.value),1)]),_:1},8,["onClick"])])]),_:1},512)}}}),_hoisted_1$2={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$2=createBaseVNode("path",{d:"M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm-9.71 1.71a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1.004 1.004 0 1 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1.005 1.005 0 0 0-1.714.71 1.004 1.004 0 0 0 .294.71l4 4Z",fill:"currentcolor"},null,-1),_hoisted_3$2=[_hoisted_2$2];function render$1(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$2,[..._hoisted_3$2])}var IcoSave={render:render$1};const _hoisted_1$1={width:"12",height:"18",viewBox:"0 0 12 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_hoisted_2$1=createBaseVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4 8.995c0-.438-.17-.874-.506-1.208L3.551.497a1.743 1.743 0 0 0-2.442.004 1.701 1.701 0 0 0-.004 2.424l6.117 6.073-6.117 6.072a1.713 1.713 0 0 0 .004 2.424c.68.675 1.768.672 2.442.004l7.343-7.29a1.7 1.7 0 0 0 .5-1.206l.006-.007Z",fill:"#fff"},null,-1),_hoisted_3$1=[_hoisted_2$1];function render(me,Le){return openBlock(),createElementBlock("svg",_hoisted_1$1,[..._hoisted_3$1])}var IcoNext={render},Gallery_vue_vue_type_style_index_0_lang="";const _hoisted_1=["onClick"],_hoisted_2={class:"v_gallery--screen--loading"},_hoisted_3={class:"v_gallery--actions p_sticky"},_hoisted_4=["onClick"],_hoisted_5=["onClick"],_hoisted_6={class:"v_gallery--nav p_sticky w_100 flex_between"},_hoisted_7=["onClick"],_hoisted_8={class:"v_gallery--console--preview"},_hoisted_9=["onClick"],_sfc_main=defineComponent({__name:"Gallery",setup(me){const wt=ref(!1),$t=ref(""),kt=ref(0),It=ref(!0),Rt=ref(0),Pt=reactive([]),Ft=ref(null),Ut=ref(null),Xt=ref(!1),Jt=reactive({loading:!0,el:null,size:{width:0,height:0},pic:{src:"",zoom:!1,zoomIn:!0,style:{width:"",height:"",backgroundImage:"",top:""}}}),ii=computed(()=>Pt.length===1),Ni=rs=>{Jt.el=rs},Vi=async()=>{await nextTick(),Jt.size.width=Jt.el.offsetWidth,Jt.size.height=Jt.el.offsetHeight},zi=()=>{var ts,ds;if(!Jt.pic.zoom){Jt.pic.style.top="";return}const rs=(ts=Ft.value)==null?void 0:ts.offsetWidth,us=(ds=Ft.value)==null?void 0:ds.offsetHeight,xh=Jt.size.width,Eh=Jt.size.height,$h=Pt[kt.value];if($h.width<$h.height)if(Jt.pic.zoomIn){const vh=Math.min(Math.min($h.width,600),rs),wh=$h.height/$h.width*vh;Jt.pic.style.width=`${vh}px`,Jt.pic.style.height=`${wh}px`,wh>us?Jt.pic.style.top=`${wh/2}px`:Jt.pic.style.top=`${us/2}px`}else Jt.pic.style.height=`${Eh}px`,Jt.pic.style.width=`${(Eh/$h.height*$h.width).toFixed(3)}px`;if($h.width>=$h.height){let vh=xh,wh=Eh;if(Jt.pic.zoomIn)vh=Math.min($h.width,rs),wh=$h.height/$h.width*vh,wh>us&&(wh=us,vh=$h.width/$h.height*wh);else{const Ch=$h.width/$h.height*wh,Mh=$h.height/$h.width*vh;wh>=Mh?wh=Mh:vh=Ch}Jt.pic.style.width=`${vh}px`,Jt.pic.style.height=`${wh}px`,Jt.pic.zoomIn?Jt.pic.style.top=`calc(50% + ${Math.max(wh-us,0)/2}px)`:Jt.pic.style.top=""}if($h.width===$h.height){let vh=Math.min(xh,Eh);Jt.pic.zoomIn&&(vh=Math.min($h.width,rs),vh>us?Jt.pic.style.top=`${vh/2}px`:Jt.pic.style.top=`${us/2}px`),Jt.pic.style.width=`${vh}px`,Jt.pic.style.height=`${vh}px`}},Xn=()=>{if(!Jt.pic.zoom){ao();return}zi()},Qn=async rs=>{Jt.pic.zoom=!1,await Vi();const us=Jt.size.width,xh=Jt.size.height,Eh=Pt[kt.value];Eh.width&&Eh.height?Eh.width>us||Eh.height>xh?Jt.pic.zoom=!0:(Jt.pic.style.width=`${Eh.width}px`,Jt.pic.style.height=`${Eh.height}px`):Eh.width&&(Jt.pic.style.width=`${us}px`),Jt.pic.style.backgroundImage=`url(${rs})`,zi()},eo=async()=>{const rs=Pt[kt.value];if(!rs)return;const us=rs.src.replace("pre-","")+"@.webp";Jt.loading=!0;const xh=new Image;xh.onload=()=>{Jt.loading=!1},xh.src=us,await Qn(us)},no=rs=>{if(rs!==kt.value){if(Xr(),rs<0)if(rs===-1)rs=Pt.length-1;else return;if(rs>Pt.length-1)if(rs===Pt.length)rs=0;else return;kt.value=rs,to(),eo()}},to=()=>{Pt.length<=9||(Rt.value/62>kt.value&&(Rt.value=kt.value*62),Rt.value/62+8<kt.value&&(Rt.value=(kt.value-8)*62))},oo=()=>{const us=Pt[kt.value].src.replace("pre-","");callNative("download/downloadURL",us)},ao=()=>{!Xt.value||(Jt.pic.zoom&&Jt.pic.zoomIn&&Xn(),Xt.value=!1,It.value=!0,Rt.value=0)},ro=rs=>{if(!rs.items.length)return;const us=document.querySelector(rs.container);!us||(Ut.value=us,us.appendChild(Ft.value),wt.value=rs.fixed,rs.downloadable===!1&&(It.value=!1),(!rs.key||rs.key!==$t.value||rs.items.length!==Pt.length)&&($t.value=rs.key,Pt.splice(0,Pt.length,...rs.items.map(xh=>({...xh,width:xh.width/window.devicePixelRatio,height:xh.height/window.devicePixelRatio})))),kt.value=rs.index||0,Xt.value=!0,eo())},Fo=ref(!0),Qr=ref(!0);let es=null,ns=!1;const so=rs=>{Fo.value=rs,rs&&Xr()},gr=3e3,Xr=throttle$1(()=>{ns||(es&&clearTimeout(es),Qr.value=!0,es=setTimeout(()=>{as()},gr))},200),as=()=>{es=null,Qr.value=!1},ls=rs=>{if(!!Fo.value)switch(rs.type){case"click":case"mouseenter":ns=!1,Xr();break;case"mousemove":Xr();break;case"mouseleave":ns=!0,es&&clearTimeout(es),as();break}};events.on("visitGallery",ro),events.on("leaveGallery",ao),events.on("windowFocusChange",so);const ms=rs=>{if(!!Xt.value)switch(rs.keyCode){case 37:case 38:case 39:case 40:rs.preventDefault(),rs.stopPropagation();break}},Ah=rs=>{if(!!Xt.value)switch(rs.keyCode){case 27:ao(),rs.preventDefault(),rs.stopPropagation();break;case 37:case 38:no(kt.value-1),rs.preventDefault(),rs.stopPropagation();break;case 39:case 40:no(kt.value+1),rs.preventDefault(),rs.stopPropagation();break}};return onMounted(()=>{Ut.value=Ft.value.parentElement,document.addEventListener("keyup",Ah),document.addEventListener("keydown",ms),document.addEventListener("keypress",ms)}),onBeforeUnmount(()=>{events.off("visitGallery",ro),events.off("windowFocusChange",so),document.removeEventListener("keyup",Ah),document.removeEventListener("keydown",ms),document.removeEventListener("keypress",ms)}),(rs,us)=>withDirectives((openBlock(),createElementBlock("div",{ref_key:"el",ref:Ft,class:normalizeClass(["v_gallery i_frame flex_col_center",{"is-fixed":wt.value}]),onClickCapture:us[3]||(us[3]=xh=>ls(xh)),onMouseenter:us[4]||(us[4]=xh=>ls(xh)),onMousemove:us[5]||(us[5]=xh=>ls(xh)),onMouseleave:us[6]||(us[6]=xh=>ls(xh))},[createBaseVNode("div",{ref:Ni,class:"v_gallery--screen p_relative",onClick:ao,onScrollPassive:us[2]||(us[2]=()=>unref(Xr)())},[Jt.loading?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:"v_gallery--screen--pic",style:normalizeStyle(Jt.pic.style),onClick:withModifiers(xh=>{},["stop"])},null,12,_hoisted_1)),withDirectives(createBaseVNode("div",_hoisted_2,null,512),[[vShow,Jt.loading]]),createVNode(Transition,{name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",_hoisted_3,[It.value?(openBlock(),createElementBlock("div",{key:0,class:"v_gallery--actions--btn bd_radius_50 flex_center cs_pointer",onClick:withModifiers(oo,["stop"])},[createVNode(unref(IcoSave),{class:"v_gallery--actions--btn--save"})],8,_hoisted_4)):createCommentVNode("",!0),createBaseVNode("div",{class:"v_gallery--actions--btn bd_radius_50 flex_center cs_pointer",onClick:withModifiers(ao,["stop"])},[createVNode(unref(IcoClose),{class:"v_gallery--actions--btn--close"})],8,_hoisted_5)],512),[[vShow,Qr.value]])]),_:1}),unref(ii)?createCommentVNode("",!0):(openBlock(),createBlock(Transition,{key:1,name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",_hoisted_6,[createBaseVNode("div",{class:"v_gallery--nav--btn bd_radius_50 flex_center cs_pointer prev",onClick:us[0]||(us[0]=withModifiers(xh=>no(kt.value-1),["stop"]))},[createVNode(unref(IcoNext))]),createBaseVNode("div",{class:"v_gallery--nav--btn bd_radius_50 flex_center cs_pointer next",onClick:us[1]||(us[1]=withModifiers(xh=>no(kt.value+1),["stop"]))},[createVNode(unref(IcoNext))])],512),[[vShow,Qr.value]])]),_:1}))],32),unref(ii)?createCommentVNode("",!0):(openBlock(),createBlock(Transition,{key:0,name:"ctrl-fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:"v_gallery--console flex_center",onClick:withModifiers(xh=>{},["stop"])},[createBaseVNode("div",_hoisted_8,[createBaseVNode("div",{class:"v_gallery--console--preview--track",style:normalizeStyle({"margin-left":`${-Rt.value}px`})},[(openBlock(!0),createElementBlock(Fragment,null,renderList(Pt,(xh,Eh)=>(openBlock(),createElementBlock("div",{key:Eh,class:normalizeClass(["v_gallery--console--preview--item flex_center",{"is-active":kt.value===Eh}]),onClick:$h=>no(Eh)},[createVNode(unref(VImg),{class:"v_gallery--console--preview--item--pic",src:xh.src.replace("pre-",""),width:104,height:104,rule:"1c"},null,8,["src"])],10,_hoisted_9))),128))],4)])],8,_hoisted_7),[[vShow,Qr.value]])]),_:1}))],34)),[[vShow,Xt.value]])}});var component="tab-item",cssPrefix=vuiCssPrefix+"_"+component,tabItemProps={key:String,tab:String,num:Number,showZerro:Boolean,disabled:Boolean},TabItem=defineComponent({name:"VTabItem",inheritAttrs:!1,props:tabItemProps,setup:function(me,Le){var wt=Le.slots;return Le.attrs,Le.emit,function(){var $t;return h$6("div",{class:cssPrefix},($t=wt.default)===null||$t===void 0?void 0:$t.call(wt))}}});Tabs.TabItem=TabItem;Tabs.install=function(me){return me.component(Tabs.name,Tabs),me.component(TabItem.name,TabItem),me};export{ShareVideo as $,_sfc_main$4 as A,BarLike as B,_sfc_main$5 as C,DEFAULT_IMG as D,BarCoin as E,BarFav as F,BarShare as G,VdMenu as H,IcoPlay as I,_sfc_main$6 as J,_sfc_main$2 as K,Loading as L,ModuleType as M,_sfc_main$3 as N,CheckboxDefault as O,CheckboxSelected as P,IcoAdd as Q,RichTextNodeType as R,md5 as S,ThreePoint as T,ShareQzone as U,VPopup as V,ShareWeibo as W,ShareDynmic as X,ShareWeixin as Y,ShareQQ as Z,_sfc_main$f as _,getRichTextareaHighlightNode as a,shareAdd as a0,copyText as a1,browser as a2,IcoMiniEx as a3,isFullscreen as a4,_sfc_main$1 as a5,_sfc_main as a6,directive as a7,watchDel as a8,IcoDelete as a9,_sfc_main$c as aa,getStringLength as ab,RichTextarea as ac,IcoEmoji as ad,_sfc_main$b as ae,IcoAt as af,createDynamic as ag,getDynamicPublishConfig as ah,getSelectorByClassNames as ai,getDynamicVideos as aj,getDynamicUpdate as ak,getScrollParent as al,getDynamicList as am,getRichTextareaEmojiNode as b,clearArray as c,RichText as d,dmThumbupAdd as e,replyAction as f,getRichTextareaTextNode as g,removeDynamic as h,postSetDynamicSpaceTop as i,IcoDanmaku as j,MdlDynType as k,IcoClose as l,getDynamicDetailForward as m,getDynamicDetail as n,postDynamicReport as o,postDynamicLike as p,_sfc_main$7 as q,replyAdd as r,splitStringWithRegExp as s,VdPlays as t,useNewCommentModule as u,VdPauseS as v,watchAdd as w,IcoMini as x,VdPlay as y,VdDm as z};
