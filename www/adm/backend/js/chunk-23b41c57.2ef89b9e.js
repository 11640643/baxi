(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b41c57"],{"41ad":function(e,t,a){"use strict";var n=a("dc7f"),r=a.n(n);r.a},adda:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"searchs"},[a("el-form",{staticClass:"form-search",attrs:{inline:!0,model:e.searchs}},[a("el-row",{attrs:{gutter:24}},[a("el-col",[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.searchs.keyword_search_value,callback:function(t){e.$set(e.searchs,"keyword_search_value",t)},expression:"searchs.keyword_search_value"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchs.status,callback:function(t){e.$set(e.searchs,"status",t)},expression:"searchs.status"}},e._l(e.config.status,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"list",attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"订单号",align:"center"}}),a("el-table-column",{attrs:{prop:"cat_id_name",label:"产品属性",align:"center"}}),a("el-table-column",{attrs:{prop:"goods_id_title",label:"兑换产品",align:"center"}}),a("el-table-column",{attrs:{prop:"credit",label:"积分",align:"center"}}),a("el-table-column",{attrs:{prop:"user_name",label:"申请人姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"user_mobile",label:"申请人手机",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"收货人姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"mobile",label:"收货人手机",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"收货人地址",align:"center"}}),a("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center"}}),a("el-table-column",{attrs:{prop:"uptime_date",label:"添加时间",align:"center",width:"130"}}),a("el-table-column",{attrs:{prop:"address",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["S"===t.row.status?a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){return e.show_dialog(t.row.id,t.row.status,t.row.kd_sn)}}},[e._v("去发货")]):e._e(),"D"===t.row.status?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.show_dialog(t.row.id,t.row.status,t.row.kd_sn)}}},[e._v("查看/修改物流")]):e._e()]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, prev, pager, next",total:e.count,"current-page":e.page_curren,"hide-on-single-page":!1},on:{"current-change":e.currentChange}}),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"填写物流信息",visible:e.dialogFormVisible,width:e.show_wl.show?"80%":"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"物流单号","label-width":"120px",prop:"dh"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.kd_sn,callback:function(t){e.$set(e.form,"kd_sn",t)},expression:"form.kd_sn"}})],1),a("el-form-item",{attrs:{label:"快递公司","label-width":"120px"}},[a("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:e.kd_value,callback:function(t){e.kd_value=t},expression:"kd_value"}},e._l(e.config.courier_company,(function(e){return a("el-option",{key:e.courier_name,attrs:{label:e.courier_name,value:e.courier_name}})})),1)],1),a("el-form-item",{attrs:{label:"快递状态","label-width":"120px",prop:"dh"}},[a("el-tag",[e._v(e._s(e.state_name))])],1),e.show_wl.show?a("el-timeline",{attrs:{reverse:!0}},e._l(e.wl_step,(function(t,n){return a("el-timeline-item",{key:n,attrs:{timestamp:t.time}},[e._v("\n          "+e._s(t.context)+"\n        ")])})),1):e._e(),0==e.wl_step.length?a("p",{domProps:{innerHTML:e._s(e.no_msg)}}):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v("确 定")])],1)],1)],1)},r=[],o=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("1c1e"));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={name:"aaaa",data:function(){return{loading:!1,searchs:{keyword_search_value:"",status:""},tableData:[],count:0,page_curren:1,config:{type:null,status:[1,2,3,5]},id:0,dialogFormVisible:!1,form:{kd_sn:"",kd_name:"",kd_name_pinyin:""},kd_value:"中通快递",kd_index:0,no_msg:"没有找到物流信息哦~",show_wl:{show:!1,kdgs:"",dh:""},wl_step:[],state_name:""}},mounted:function(){this.FetchList(),this.getLogistics()},methods:{show_dialog:function(e,t,a){var n=this;this.id=e,this.clear(),"D"===t&&a?(this.show_wl.show=!0,Object(i["a"])("/goods/order/logisInfo",{id:e,kd_sn:a}).then((function(e){n.loading=!1,n.wl_step=e.data.kd_info,n.kd_value=e.data.kd_name,0==n.wl_step.length&&(n.no_msg="没有找到物流信息哦~"),n.show_wl.kdgs=e.data.state_name,n.form.kd_sn=e.data.kd_sn,n.state_name=e.data.state_name||""})).catch((function(){return n.loading=!1}))):(this.show_wl.show=!1,this.kd_value="中通快递",this.no_msg=""),this.dialogFormVisible=!0},clear:function(){this.form.kd_sn="",this.kd_index=0,this.kd_index="中通快递"},send:function(){var e=this,t=this;this.config.courier_company.forEach((function(e,a){e.courier_name==t.kd_value&&(t.kd_index=a)})),this.form.kd_name=this.config.courier_company[this.kd_index].courier_name,this.form.kd_name_pinyin=this.config.courier_company[this.kd_index].courier_name_pinyin,""!=this.form.kd_name&&""!=this.form.kd_sn?Object(i["a"])("/goods/order/update",l({id:this.id,status:"D"},this.form)).then((function(){e.loading=!1,e.dialogFormVisible=!1,e.FetchList(),e.clear()})).catch((function(){return e.loading=!1})):this.$message({message:"信息填写不完整",type:"warning"})},emit:function(e){this.$router.push("/notice/edit/"+e)},look:function(e){this.$router.push("/notice/edit/"+e)},FetchList:function(){var e=this;this.loading=!0,Object(i["a"])("/goods/order/getlist",l({page_curren:this.page_curren},this.searchs)).then((function(t){e.loading=!1,e.count=t.data.count,e.page_curren=Math.floor(t.data.page_curren),e.tableData=t.data.list,e.config=t.data.config})).catch((function(){return e.loading=!1}))},getLogistics:function(){var e=this;this.loading=!0,Object(i["a"])("/goods/order/getlist",{page_curren:this.page_curren}).then((function(t){e.loading=!1,e.config=t.data.config})).catch((function(){return e.loading=!1}))},currentChange:function(e){this.page_curren=e,this.FetchList()},onSubmit:function(){this.page_curren=1,this.FetchList()}}},u=c,d=(a("41ad"),a("2877")),_=Object(d["a"])(u,n,r,!1,null,"26a37bff",null);t["default"]=_.exports},dc7f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-23b41c57.2ef89b9e.js.map