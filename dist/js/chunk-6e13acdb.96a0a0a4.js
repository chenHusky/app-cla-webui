(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e13acdb"],{1460:function(e,t,a){"use strict";var r=a("cf23"),n=a.n(r);n.a},2744:function(e,t,a){"use strict";var r=a("a08a"),n=a.n(r);n.a},"45fb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.homeClass,attrs:{id:"home"}},[a("HeaderPure"),a("el-row",{attrs:{id:"section"}},[a("el-col",{attrs:{offset:9,span:6}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"20%"}},[a("el-form-item",{attrs:{label:"email",prop:"email"}},[a("el-input",{attrs:{placeholder:"email"}})],1),a("el-form-item",{attrs:{label:"name",prop:"name"}},[a("el-input",{attrs:{placeholder:"name"}})],1),a("el-form-item",{attrs:{label:"country",prop:"country"}},[a("el-input",{attrs:{placeholder:"country"}})],1),a("el-form-item",{attrs:{label:"language",prop:"language"}},[a("el-input",{attrs:{placeholder:"language"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("SUBMIT")])],1)],1)],1)],1),a("Footer")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("el-col",{attrs:{offset:8,span:8}},[a("div",[a("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)])],1)},s=[],i={name:"HeaderPure",methods:{toHome:function(){this.$router.push("/home")}}},l=i,c=(a("a9d6"),a("2877")),u=Object(c["a"])(l,o,s,!1,null,"031b9cfc",null),m=u.exports,f=a("fd2d"),g=(a("221d"),a("615a"));window.onresize=function(){g["a"]()>document.getElementById("home").offsetHeight&&(document.getElementById("home").style.height=g["a"]()+"px")};var d={name:"EmailVerify",components:{HeaderPure:m,Footer:f["a"]},data:function(){var e=function(e,t,a){var r=t;console.log(r);var n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;n.test(r)?a():a(new Error("邮箱格式有误"))};return{homeClass:{height:""},ruleForm:{email:"",name:"",country:"",language:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],country:[{required:!0,message:"请选择国家",trigger:"blur"}],language:[{required:!0,message:"请选择语言",trigger:"blur"}]}}},methods:{setClientHeight:function(){var e=this;this.$nextTick((function(){console.log(g["a"](),document.getElementById("home").offsetHeight),g["a"]()>document.getElementById("home").offsetHeight?e.homeClass.height=g["a"]()+"px":e.homeClass.height=document.getElementById("home").offsetHeight}))},submit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("发邮件")}))}},created:function(){},mounted:function(){this.setClientHeight()}},h=d,p=(a("2744"),Object(c["a"])(h,r,n,!1,null,"29d26efe",null));t["default"]=p.exports},"615a":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(){return window.innerHeight}},a08a:function(e,t,a){},a5a7:function(e,t,a){},a9d6:function(e,t,a){"use strict";var r=a("a5a7"),n=a.n(r);n.a},cf23:function(e,t,a){},fd2d:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"footer"},[a("el-col",{staticClass:"left",attrs:{span:8}},[a("span",[e._v("© 2020 HUAWEI SE")])]),a("el-col",{staticClass:"center",attrs:{span:8}},[a("span",[e._v("Made with "),a("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),a("el-col",{staticClass:"right",attrs:{span:8}},[a("div",[a("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),a("span",{staticClass:"pointer"},[a("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},n=[],o={name:"Footer"},s=o,i=(a("1460"),a("2877")),l=Object(i["a"])(s,r,n,!1,null,"bc0631b2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-6e13acdb.96a0a0a4.js.map