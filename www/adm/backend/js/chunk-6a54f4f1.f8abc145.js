(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a54f4f1"],{"4b5c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"searchs"},[n("el-row",[n("el-col",[n("router-link",{attrs:{to:"/jz/create"}},[n("el-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"success"}},[t._v("创建")])],1)],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list",attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"编号",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"名称",align:"center",width:"200"}}),n("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"100"}}),n("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center"}}),n("el-table-column",{attrs:{prop:"uptime_date",label:"添加时间",align:"center"}}),n("el-table-column",{attrs:{prop:"address",align:"center",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.eidt(e.row.id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.remove(e.row.id)}}},[t._v("删除")])]}}])})],1),n("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, prev, pager, next",total:t.count,"current-page":t.page_curren,"hide-on-single-page":!1},on:{"current-change":t.currentChange}})],1)},a=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("1c1e"),o=n("db51");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={data:function(){return{loading:!1,searchs:{name:"",status:"",type:""},tableData:[],count:0,page_curren:1,config:{type:null,status:null},id:0}},mounted:function(){this.FetchList()},methods:{remove:function(t){var e=this;this.loading=!0,Object(o["a"])("/user/jz/delete/"+t).then((function(){e.loading=!1,e.FetchList()})).catch((function(){return e.loading=!1}))},eidt:function(t){this.$router.push("/jz/edit/"+t)},FetchList:function(){var t=this;this.loading=!0,Object(i["a"])("/user/jz/getlist",s({page_curren:this.page_curren},this.searchs)).then((function(e){t.loading=!1,t.count=e.data.count,t.page_curren=Math.floor(e.data.page_curren),t.tableData=e.data.list,t.config=e.data.config})).catch((function(){return t.loading=!1}))},currentChange:function(t){this.page_curren=t,this.FetchList()},onSubmit:function(){this.page_curren=1,this.FetchList()}}},p=u,d=(n("830e"),n("2877")),g=Object(d["a"])(p,r,a,!1,null,"9d8bc4d0",null);e["default"]=g.exports},"830e":function(t,e,n){"use strict";var r=n("f2fc"),a=n.n(r);a.a},db51:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),c=n("5c96");e["a"]=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t="/v1/api"+t,a.a.delete(t,{headers:{"Access-Control-ALlow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("pstt")}}).then((function(t){return t.data})).then((function(t){return 200===t.code?t:Promise.reject(t.msg)})).catch((function(t){var e=String(t);return c["Message"].error(e),Promise.reject(e)}))}},f2fc:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6a54f4f1.f8abc145.js.map