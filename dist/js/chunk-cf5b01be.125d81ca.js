(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf5b01be"],{"34a3":function(e,t,l){"use strict";var i=l("5f9b"),n=l.n(i);n.a},"5f9b":function(e,t,l){},ab3a:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",{staticClass:"marginTop1rem tableStyle"},[l("el-col",[l("el-row",[l("el-col",{attrs:{align:"right"}},[l("el-button",{attrs:{size:"medium"},on:{click:function(t){e.multipleChoice=!0}}},[e._v("Multiple choice")])],1)],1),l("el-row",[l("el-table",{ref:"multipleTable",attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[e.multipleChoice?l("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),l("el-table-column",{attrs:{prop:"name",label:"userName"}}),l("el-table-column",{attrs:{prop:"email",label:"email"}}),l("el-table-column",{attrs:{prop:"role",label:"role"}}),l("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.multipleChoice?e._e():l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(l){return e.deleteUser(t.row)}}},[e._v("删除")])]}}])})],1)],1),e.multipleChoice?l("el-row",{staticStyle:{"margin-top":"20px"}},[l("el-col",{attrs:{align:"left"}},[l("el-button",{attrs:{size:"medium",type:"danger"},on:{click:function(t){return e.deleteUser()}}},[e._v("Delete")]),l("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.cancel()}}},[e._v("Cancel")])],1)],1):e._e()],1),l("el-dialog",{attrs:{width:"20%",title:"",align:"center",visible:e.deleteUserVisible},on:{"update:visible":function(t){e.deleteUserVisible=t}}},[l("el-row",{attrs:{align:"center"}},[e._v(" 确定删除？ ")]),l("el-row",{staticClass:"marginTop1rem contentTitle",attrs:{align:"center"}},[l("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit()}}},[e._v("确定")]),l("el-button",{attrs:{size:"medium"},on:{click:function(t){e.deleteUserVisible=!1}}},[e._v("取消")])],1)],1)],1)},n=[],o=l("221d"),a={name:"UserList",components:{},data:function(){return{multipleChoice:!1,multipleSelection:[],row:"",deleteUserVisible:!1,tableData:[{id:0,userName:"001",pwd:"001",email:"969707751@qq.com",class:"法务"},{id:1,userName:"002",pwd:"002",email:"1057750732@qq.com",class:"开发部"}]}},created:function(){this.getEmployeeManager()},methods:{cancel:function(){this.$refs.multipleTable.clearSelection(),this.multipleChoice=!1},handleSelectionChange:function(e){this.multipleSelection=e},deleteUser:function(e){e&&(console.log(e),this.row=e,console.log(this.multipleSelection)),this.deleteUserVisible=!0},getEmployeeManager:function(){var e=this,t={cla_org_id:this.$store.state.loginInfo.cla_org_id,email:this.$store.state.loginInfo.email};this.$axios({url:"/api"+o["A"],params:t}).then((function(t){console.log(t),e.tableData=t.data})).catch((function(e){console.log(e)}))},submit:function(){var e=this,t={cla_org_id:this.$store.state.loginInfo.cla_org_id,emails:[this.row.email]};this.$axios({url:"/api"+o["k"],method:"delete",data:t}).then((function(t){console.log(t),e.getEmployeeManager(),e.deleteUserVisible=!1})).catch((function(e){console.log(e)}))}}},c=a,s=(l("34a3"),l("2877")),r=Object(s["a"])(c,i,n,!1,null,"bc46ec0c",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-cf5b01be.125d81ca.js.map