(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d99edcb"],{2145:function(e,r,t){"use strict";var o=t("587a"),a=t.n(o);a.a},"587a":function(e,r,t){},bd09:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-row",[t("el-col",{staticStyle:{padding:"3rem"},attrs:{align:"middle"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{padding:"2rem 2rem 0 2rem",width:"15rem"},attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"0"}},[t("el-form-item",{attrs:{label:"",prop:"account"}},[t("el-input",{attrs:{autocomplete:"off",placeholder:"account"},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),t("el-form-item",{attrs:{label:"",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"password"},model:{value:e.ruleForm.pwd,callback:function(r){e.$set(e.ruleForm,"pwd",r)},expression:"ruleForm.pwd"}})],1),t("el-form-item",{staticStyle:{"text-align":"left"}},[t("span",{staticClass:"pointer",attrs:{id:"forgetPwd"},on:{click:e.findPwd}},[e._v("Forget the password?")])]),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("SIGN IN")])],1)],1)],1)],1)],1)},a=[],l={name:"RepoSelect",data:function(){var e=function(e,r,t){""===r&&t(new Error("please input account number")),t()},r=function(e,r,t){""===r&&t(new Error("please input password")),t()};return{rules:{userName:[{validator:e,trigger:"blur"}],pwd:[{validator:r,trigger:"blur"}]},ruleForm:{userName:"",pwd:""}}},methods:{login:function(e,r){var t=this;this.$router.push("/rootManager");var o={userName:e,pwd:r};this.$axios({url:"/api"+url.relogin,method:"post",data:o}).then((function(e){console.log(e),"root"===e.data.role?t.$router.push("/rootManager"):t.$router.push("/signedRepo")})).catch((function(e){console.log(e)}))},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.login(r.ruleForm.userName,r.ruleForm.pwd)}))}}},s=l,n=(t("2145"),t("2877")),u=Object(n["a"])(s,o,a,!1,null,"6e164d60",null);r["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0d99edcb.b51143d1.js.map