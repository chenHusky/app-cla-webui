(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f067c"],{"9bda":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",[l("el-col",{staticStyle:{padding:"3rem"},attrs:{span:8,offset:8}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("el-select",{attrs:{clearable:"",filterable:"",value:""},on:{change:e.changePlatform},model:{value:e.platform,callback:function(t){e.platform=t},expression:"platform"}},e._l(e.platformOption,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),l("el-col",{attrs:{span:8}},[l("el-select",{attrs:{clearable:"",filterable:"",value:""},model:{value:e.org,callback:function(t){e.org=t},expression:"org"}},e._l(e.orgOption,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),l("el-col",{attrs:{span:8}},[l("el-select",{attrs:{clearable:"",filterable:"",value:""},model:{value:e.repo,callback:function(t){e.repo=t},expression:"repo"}},e._l(e.repoOption,(function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)],1),l("el-row",{staticStyle:{margin:"3rem 0"},attrs:{gutter:20}},[l("el-col",{attrs:{span:8,offset:8}},[l("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.submit}},[e._v(" SUBMIT ")])],1)],1)],1)],1)],1)},o=[],r=l("221d"),n={name:"RepoSelect",data:function(){return{platform:"",platformOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}],org:"",orgOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}],repo:"",repoOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}]}},methods:{changePlatform:function(){this.getOrg(this.platform)},submit:function(){console.log("submit",this.platform,this.org,this.repo)},getOrg:function(e){console.log(e),"gitee"===e&&this.$axios({url:"/api"+r["getOrg"],params:{}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},getRepo:function(){console.log(this.org)}},created:function(){}},i=n,u=l("2877"),c=Object(u["a"])(i,a,o,!1,null,"673a85c2",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0f067c.d86695c6.js.map