(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2d8c55"],{"474e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"searchs"},[a("el-form",{staticClass:"form-search",attrs:{inline:!0,model:e.searchs},nativeOn:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"产品名"}},[a("el-input",{attrs:{placeholder:"姓名/手机号"},model:{value:e.searchs.keyword_search_value,callback:function(t){e.$set(e.searchs,"keyword_search_value",t)},expression:"searchs.keyword_search_value"}})],1),a("el-form-item",{attrs:{label:"产品名"}},[a("el-input",{attrs:{placeholder:"奖品名"},model:{value:e.searchs.jp_name,callback:function(t){e.$set(e.searchs,"jp_name",t)},expression:"searchs.jp_name"}})],1),a("el-form-item",{attrs:{label:"是否显示在中奖列表"}},[a("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择"},model:{value:e.searchs.is_show_index,callback:function(t){e.$set(e.searchs,"is_show_index",t)},expression:"searchs.is_show_index"}},[a("el-option",{attrs:{value:"Y",label:"是"}}),a("el-option",{attrs:{value:"N",label:"否"}})],1)],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchs.status,callback:function(t){e.$set(e.searchs,"status",t)},expression:"searchs.status"}},e._l(e.config.status,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("查询")]),a("router-link",{attrs:{to:"/prize/create"}},[a("el-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"success"}},[e._v("创建")])],1),a("el-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.setShows("Y")}}},[e._v("批量显示中奖")]),a("el-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"warning"},on:{click:function(t){return e.setShows("N")}}},[e._v("批量关闭中奖")])],1)],1)],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"list",attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[e._v("\n    >\n    "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"id",label:"编号",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号",align:"center"}}),a("el-table-column",{attrs:{prop:"jp_name",label:"奖品",align:"center"}}),a("el-table-column",{attrs:{prop:"jp_pro",label:"奖品概率",align:"center"}}),a("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center"}}),a("el-table-column",{attrs:{prop:"is_show_index_name",label:"是否显示在中奖列表",align:"center"}}),a("el-table-column",{attrs:{prop:"addtime_date",label:"添加时间",align:"center",width:"200"}}),a("el-table-column",{attrs:{prop:"address",align:"center",label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.eidt(t.row.id)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.remove(t.row.id)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, prev, pager, next",total:e.count,"current-page":e.page_curren,"hide-on-single-page":!1},on:{"current-change":e.currentChange}})],1)},r=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),l=a("1c1e"),c=a("db51"),i=a("5c96");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={data:function(){return{loading:!1,searchs:{keyword_search_value:"",status:"",is_show_index:"",jq_name:""},tableData:[],count:0,page_curren:1,config:{status:null},selectIds:[]}},mounted:function(){this.FetchList()},methods:{eidt:function(e){this.$router.push("/prize/edit/"+e)},remove:function(e){var t=this;Object(c["a"])("/user/prize/delete/"+e).then((function(){t.FetchList()}))},FetchList:function(){var e=this;this.loading=!0,Object(l["a"])("/user/prize/getlist",u({page_curren:this.page_curren},this.searchs)).then((function(t){e.loading=!1,e.count=t.data.count,e.page_curren=Math.floor(t.data.page_curren),e.tableData=t.data.list,e.config=t.data.config})).catch((function(){return e.loading=!1}))},currentChange:function(e){this.page_curren=e,this.FetchList()},onSubmit:function(){this.page_curren=1,this.FetchList()},handleSelectionChange:function(e){var t=this;this.selectIds=[],e.forEach((function(e){t.selectIds.push(e.id)}))},setShows:function(e){var t=this;if(this.selectIds.length<1)i["Message"].error("未选中数据");else{var a="此操作将显示在前台展示, 是否继续?";"N"===e&&(a="此操作将不显示在前台展示, 是否继续?"),this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,Object(l["a"])("/user/prize/setShows",{ids:t.selectIds,type:e}).then((function(){t.loading=!1,i["Message"].success("设置成功"),t.FetchList()})).catch((function(){return t.loading=!1}))})).catch((function(){}))}}}},h=p,d=(a("c9d9"),a("2877")),f=Object(d["a"])(h,n,r,!1,null,"404745ba",null);t["default"]=f.exports},"884d":function(e,t,a){},c9d9:function(e,t,a){"use strict";var n=a("884d"),r=a.n(n);r.a},db51:function(e,t,a){"use strict";var n=a("bc3a"),r=a.n(n),s=a("5c96");t["a"]=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e="/v1/api"+e,r.a.delete(e,{headers:{"Access-Control-ALlow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("pstt")}}).then((function(e){return e.data})).then((function(e){return 200===e.code?e:Promise.reject(e.msg)})).catch((function(e){var t=String(e);return s["Message"].error(t),Promise.reject(t)}))}}}]);
//# sourceMappingURL=chunk-3d2d8c55.235d8bda.js.map