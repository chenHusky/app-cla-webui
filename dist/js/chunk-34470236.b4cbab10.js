(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34470236"],{"0a31":function(e,t,a){"use strict";var n=a("0dc4"),r=a.n(n);r.a},"0dc4":function(e,t,a){},3564:function(e,t,a){"use strict";var n=a("df0c"),r=a.n(n);r.a},"45fb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.homeClass,attrs:{id:"emailVerify"}},[a("HeaderPure"),a("el-row",{attrs:{id:"section"}},[a("el-col",{attrs:{offset:9,span:6}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"20%"}},[a("el-form-item",{attrs:{label:"email",prop:"email"}},[a("el-input",{attrs:{placeholder:"email"}})],1),a("el-form-item",{attrs:{label:"name",prop:"name"}},[a("el-input",{attrs:{placeholder:"name"}})],1),a("el-form-item",{attrs:{label:"country",prop:"country"}},[a("el-input",{attrs:{placeholder:"country"}})],1),a("el-form-item",{attrs:{label:"language",prop:"language"}},[a("el-input",{attrs:{placeholder:"language"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("SUBMIT")])],1)],1)],1)],1),a("Footer")],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"header",attrs:{align:"meddle"}},[a("el-col",{attrs:{offset:4,span:16}},[a("el-row",[a("el-col",{attrs:{span:12,align:"left"}},[a("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"qianshu"},on:{click:function(t){return e.toHome()}}})],1),a("el-col",{attrs:{span:12,align:"right"}},[a("el-select",{model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},e._l(e.languageOptions,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)],1)],1)],1)},i=[],o={name:"HeaderPure",data:function(){return{language:"",languageOptions:""}},methods:{toHome:function(){this.$router.push("/home")}}},s=o,u=(a("3564"),a("2877")),c=Object(u["a"])(s,l,i,!1,null,"a1dc01e2",null),m=c.exports,f=a("fd2d"),g=(a("221d"),a("615a"));window.onresize=function(){g["a"]()>document.getElementById("emailVerify").offsetHeight&&(document.getElementById("emailVerify").style.height=g["a"]()+"px")};var d={name:"EmailVerify",components:{HeaderPure:m,Footer:f["a"]},data:function(){var e=function(e,t,a){var n=t;console.log(n);var r=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;r.test(n)?a():a(new Error("邮箱格式有误"))};return{homeClass:{height:""},ruleForm:{email:"",name:"",country:"",language:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],country:[{required:!0,message:"请选择国家",trigger:"blur"}],language:[{required:!0,message:"请选择语言",trigger:"blur"}]}}},methods:{setClientHeight:function(){this.$nextTick((function(){console.log(g["a"](),document.getElementById("emailVerify").offsetHeight),g["a"]()>document.getElementById("emailVerify").offsetHeight&&(console.log(">>>"),document.getElementById("emailVerify").style.height=g["a"]()+"px"),console.log(g["a"](),document.getElementById("emailVerify").offsetHeight)}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("发邮件")}))}},created:function(){},mounted:function(){this.setClientHeight()}},p=d,h=(a("0a31"),Object(u["a"])(p,n,r,!1,null,"0b9ee034",null));t["default"]=h.exports},"615a":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return window.innerHeight}},d32f:function(e,t,a){"use strict";var n=a("e35a"),r=a.n(n);r.a},df0c:function(e,t,a){},e35a:function(e,t,a){},fd2d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"footer"},[a("el-col",{staticClass:"left",attrs:{span:8}},[a("span",[e._v("© 2020 HUAWEI SE")])]),a("el-col",{staticClass:"center",attrs:{span:8}},[a("span",[e._v("Made with "),a("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),a("el-col",{staticClass:"right",attrs:{span:8}},[a("div",[a("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),a("span",{staticClass:"pointer"},[a("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},r=[],l={name:"Footer"},i=l,o=(a("d32f"),a("2877")),s=Object(o["a"])(i,n,r,!1,null,"023530e2",null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-34470236.b4cbab10.js.map