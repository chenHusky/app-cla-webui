(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba7f532e"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7"),n("e6cf");function r(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,c,"next",t)}function c(t){r(i,a,o,s,c,"throw",t)}s(void 0)}))}}},8996:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.createCLAClass,attrs:{id:"createCLA"}},[n("v-header"),n("div",{attrs:{id:"section"}},[n("el-col",{attrs:{offset:6,span:12}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[n("span",[t._v("Edit your CLA")])]),n("div",t._l(t.claTags,(function(e,r){return n("el-tag",{key:e,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(e){return t.chooseCla(r)},close:function(n){return t.handleClose(e,r)}}},[t._v(" "+t._s(e)+" ")])})),1),t.addNewFile?n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-col",{staticStyle:{"padding-right":"2rem"},attrs:{span:20}},[n("el-input",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:t.newClaFileName,callback:function(e){t.newClaFileName=e},expression:"newClaFileName"}})],1),n("el-col",{attrs:{span:4,align:"right"}},[n("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1):n("div",[n("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(e){return t.clickAddNewClaFile()}}},[t._v("+ add new file")])],1),n("div",[n("el-input",{staticClass:"textAreaClass",attrs:{rows:"15",readonly:!t.isEdit,type:"textarea"},on:{change:t.claTextChange},model:{value:t.claText,callback:function(e){t.claText=e},expression:"claText"}})],1),n("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{size:"medium",disabled:!t.verifyNotNull(),type:"primary"},on:{click:function(e){return t.uploadCla()}}},[t._v("create CLA ")])],1)])],1),n("v-footer")],1)},a=[],o=(n("99af"),n("4160"),n("c975"),n("a434"),n("b0c0"),n("ac1f"),n("5319"),n("498a"),n("159b"),n("96cf"),n("1da1")),i=n("0418"),s=n("fd2d"),c=n("615a"),l=n("221d"),u={name:"CreateCLA",components:{"v-header":i["a"],"v-footer":s["a"]},data:function(){return{access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,isAddNewMetaFile:!1,isEditMeta:!1,metaText:"",currentIndex:"",newMetaFileName:"",metaTags:["test","myMeta","test1","myTest","test2","test3","test4","test5","test6","test7","internationalMetadata","openLooKeng","test8"],newClaFileName:"",addNewFile:!1,isEdit:!1,claTags:[],claOptions:[],metaOptions:[{value:0,text:"{userName:{type:string,require:true},email:{type:string,require:true},}"}],fullscreenLoading:!1,claName:"",value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],claText:"",metaData:"",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{clickAddNewClaFile:function(){this.addNewFile=!0,this.claText="",this.isEdit=!0},clickAddNewMetaFile:function(){this.isAddNewMetaFile=!0,this.metaData="",this.isEditMeta=!0},chooseMeta:function(t){console.log("chooseMeta",t),this.metaData=this.metaOptions[0].text,this.isEditMeta=!1,this.isAddNewMetaFile=!1,this.newMetaFileName=""},chooseCla:function(t){console.log("chooseCla",t),this.claText=this.claOptions[t].text,this.isEdit=!1,this.currentIndex=t,this.addNewFile=!1,this.newClaFileName=""},handleClose:function(t,e){var n=this;this.$axios({url:"/api".concat(l["delCla"],"/").concat(this.claOptions[e].id),method:"delete",headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(r){console.log(r),n.claTags.splice(n.claTags.indexOf(t),1),n.currentIndex===e&&(n.claText="",n.currentIndex=""),n.getCLA()})).catch((function(t){console.log(t),n.$message.error("已有绑定关系，无法删除")}))},getCLA:function(){var t=this;console.log("getCLA"),this.$axios({url:"/api"+l["getClaInfo"],headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),e.data.length&&(t.claOptions=[],t.claTags=[],e.data.forEach((function(e,n){t.claTags.push(e.name),t.claOptions.push({value:n,label:e.name,id:e.id,text:e.text,language:e.language})})))})).catch((function(t){console.log(t)}))},claTextChange:function(t){console.log(t)},verifyNotNull:function(){return this.addNewFile?""!==this.newClaFileName.trim()&&""!==this.claText.trim():""!==this.claText.trim()},uploadCla:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fullscreenLoading=!0,n={name:t.newClaFileName,text:t.claText,language:t.languageOptions[t.value].label,submitter:"".concat(t.platform,"/").concat(t.user.userName)},console.log(n),t.$axios({url:"/api"+l["uploadCla"],method:"post",data:n,headers:{"Access-Token":t.access_token,"Refresh-Token":t.refresh_token,User:"".concat(t.platform,"/").concat(t.user.userName)}}).then((function(e){console.log(e),t.fullscreenLoading=!1,t.$message.success("succeed"),setTimeout((function(){t.$router.replace("/home")}),2e3)})).catch((function(e){console.log(e),t.fullscreenLoading=!1,t.$message.error("failed")}));case 4:case"end":return e.stop()}}),e)})))()},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(c["a"]()),console.log(document.getElementById("createCLA").offsetHeight),c["a"]()>document.getElementById("createCLA").offsetHeight?t.createCLAClass.height=c["a"]()+"px":t.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var t=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(t),this.metaData=t}},created:function(){this.getCLA()},mounted:function(){this.setClientHeight()}};window.onresize=function(){c["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=c["a"]()+"px")};var h=u,f=(n("c77a"),n("2877")),d=Object(f["a"])(h,r,a,!1,null,"09ba18b4",null);e["default"]=d.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=x;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={},m={};m[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==r&&a.call(y,i)&&(m=y);var w=k.prototype=b.prototype=Object.create(m);C.prototype=w.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},N(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var a=new E(x(t,e,n,r));return u.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},N(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return s.type="throw",s.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;F(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function x(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=T(t,n,i),o}function L(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function b(){}function C(){}function k(){}function N(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,o,i){var s=L(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,i)}))}i(s.arg)}var n;function r(t,r){function a(){return new Promise((function(n,a){e(t,r,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=r}function T(t,e,n){var r=h;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return I()}n.method=a,n.arg=o;while(1){var i=n.delegate;if(i){var s=_(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=L(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=L(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c192:function(t,e,n){},c77a:function(t,e,n){"use strict";var r=n("c192"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-ba7f532e.596ea63a.js.map