(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56560726"],{"02f4":function(e,t,r){var n=r("4588"),o=r("be13");e.exports=function(e){return function(t,r){var a,i,c=String(o(t)),s=n(r),l=c.length;return s<0||s>=l?e?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):a:e?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),o=r("32e9"),a=r("79e5"),i=r("be13"),c=r("2b4c"),s=r("520a"),l=c("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var m=c(e),d=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),p=d?!a((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[m](""),!t})):void 0;if(!d||!p||"replace"===e&&!u||"split"===e&&!f){var v=/./[m],b=r(i,m,""[e],(function(e,t,r,n,o){return t.exec===s?d&&!o?{done:!0,value:v.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),h=b[0],g=b[1];n(String.prototype,e,h),o(RegExp.prototype,m,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},2219:function(e,t,r){"use strict";var n=r("bc3a"),o=r.n(n),a=r("5c96");t["a"]=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e="/v1/api"+e,o.a.get(e,{headers:{"Access-Control-ALlow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("pstt")}}).then((function(e){return e.data})).then((function(e){return 200===e.code?e:Promise.reject(e.msg)})).catch((function(e){var t=String(e);return a["Message"].error(t),Promise.reject(t)}))}},"2f21":function(e,t,r){"use strict";var n=r("79e5");e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},4921:function(e,t,r){"use strict";var n=r("5bce"),o=r.n(n);o.a},"520a":function(e,t,r){"use strict";var n=r("0bfb"),o=RegExp.prototype.exec,a=String.prototype.replace,i=o,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(i=function(e){var t,r,i,u,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(t=f[c]),i=o.call(f,e),s&&i&&(f[c]=f.global?i.index+i[0].length:t),l&&i&&i.length>1&&a.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"55dd":function(e,t,r){"use strict";var n=r("5ca1"),o=r("d8e8"),a=r("4bf8"),i=r("79e5"),c=[].sort,s=[1,2,3];n(n.P+n.F*(i((function(){s.sort(void 0)}))||!i((function(){s.sort(null)}))||!r("2f21")(c)),"Array",{sort:function(e){return void 0===e?c.call(a(this)):c.call(a(this),o(e))}})},"5bce":function(e,t,r){},"5dbc":function(e,t,r){var n=r("d3f4"),o=r("8b97").set;e.exports=function(e,t,r){var a,i=t.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&n(a)&&o&&o(e,a),e}},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"6d85":function(e,t,r){"use strict";r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),o=r("bc3a"),a=r.n(o),i=r("5c96");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=null;return r=t instanceof FormData?t:s({},t),e="/v1/api"+e,a.a.put(e,{data:r},{headers:{"Access-Control-ALlow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("pstt")}}).then((function(e){return e.data})).then((function(e){return 200===e.code?e:Promise.reject(e.msg)})).catch((function(e){var t=String(e);return i["Message"].error(t),Promise.reject(t)}))}},"7d30":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("el-breadcrumb",{staticStyle:{"margin-bottom":"50px"},attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:"/"}},[e._v("工作台")]),r("el-breadcrumb-item",{attrs:{to:"/integral"}},[e._v("商品列表")]),r("el-breadcrumb-item",[e._v("创建")])],1),r("el-form",{ref:"form",staticClass:"form-search",attrs:{inline:!0,model:e.form,rules:e.rules},nativeOn:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("el-row",[r("el-col",[r("el-form-item",{attrs:{label:"商品标题",prop:"title"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入商品标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),r("el-input",{attrs:{size:"small",placeholder:"请输入商品标题(英文)"},model:{value:e.form.title_en,callback:function(t){e.$set(e.form,"title_en",t)},expression:"form.title_en"}}),r("el-input",{attrs:{size:"small",placeholder:"请输入商品标题（越南）"},model:{value:e.form.title_yn,callback:function(t){e.$set(e.form,"title_yn",t)},expression:"form.title_yn"}})],1)],1),r("el-col",[r("el-form-item",{attrs:{label:"积分",prop:"credit"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入积分"},model:{value:e.form.credit,callback:function(t){e.$set(e.form,"credit",e._n(t))},expression:"form.credit"}})],1)],1),r("el-col",[r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",e._n(t))},expression:"form.sort"}})],1)],1),r("el-col",[r("el-form-item",{attrs:{label:"每日最大购买数量",prop:"sort"}},[r("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.form.max_shop_num,callback:function(t){e.$set(e.form,"max_shop_num",t)},expression:"form.max_shop_num"}},[r("template",{slot:"append"},[e._v("件,为0则无限制")])],2)],1)],1),r("el-col",[r("el-form-item",{attrs:{label:"是否上架",prop:"status"}},[r("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.config.status,(function(e,t){return r("el-option",{key:e,attrs:{value:t,label:e}})})),1)],1)],1),r("el-form-item",{attrs:{label:"分类",prop:"cat_id"}},[r("el-select",{attrs:{size:"small",clearable:"",placeholder:"请选择"},model:{value:e.form.cat_id,callback:function(t){e.$set(e.form,"cat_id",t)},expression:"form.cat_id"}},e._l(e.config.cats,(function(e){var t=e.id,n=e.name;return r("el-option",{key:t,attrs:{value:t,label:n}})})),1)],1),r("el-col",[r("el-form-item",{attrs:{label:"标题图片",prop:"thumbs"}},[r("el-upload",{attrs:{limit:5,headers:e.myHeaders,action:"/v1/api/api/api/upload","before-upload":e.fileSuccessBefore,"on-success":e.fileSuccess,"file-list":e.file1,"list-type":"picture","on-remove":e.onDelct1}},[r("el-button",{attrs:{size:"small",type:"infor"}},[e._v("点击上传")])],1)],1)],1),r("el-col",[r("el-form-item",{attrs:{label:"缩略图",prop:"thumb"}},[r("el-upload",{attrs:{limit:1,headers:e.myHeaders,action:"/v1/api/api/api/upload","on-success":e.fileSuccess1,"before-upload":e.fileSuccessBefore,"file-list":e.file,"list-type":"picture","on-remove":e.onDelct1}},[r("el-button",{attrs:{size:"small",type:"infor"}},[e._v("点击上传")])],1)],1)],1),r("el-col",[r("el-form-item",{staticClass:"content",staticStyle:{display:"flex"},attrs:{label:"内容",prop:"content"}},[r("vue-editor",{staticStyle:{flex:"1"},attrs:{id:"editor",useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),r("el-form-item",{staticClass:"content",staticStyle:{display:"flex"},attrs:{label:"内容（英文）",prop:"content"}},[r("vue-editor",{staticStyle:{flex:"1"},attrs:{id:"editor",useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.form.content_en,callback:function(t){e.$set(e.form,"content_en",t)},expression:"form.content_en"}})],1),r("el-form-item",{staticClass:"content",staticStyle:{display:"flex"},attrs:{label:"内容（越南）",prop:"content"}},[r("vue-editor",{staticStyle:{flex:"1"},attrs:{id:"editor",useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.form.content_yn,callback:function(t){e.$set(e.form,"content_yn",t)},expression:"form.content_yn"}})],1)],1),r("el-col",[r("el-button",{attrs:{"native-type":"submit",type:"primary"}},[e._v("提交")])],1)],1)],1)],1)},o=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=(r("7f7f"),r("a481"),r("55dd"),r("c5f6"),r("5c96")),c=r("1c1e"),s=r("2219"),l=r("6d85"),u=r("5873");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"goodsCreate",components:{VueEditor:u["a"]},data:function(){return{myHeaders:{Authorization:"Bearer "+localStorage.getItem("pstt")},form:{credit:0,title:"",title_en:"",title_yn:"",max_shop_num:0,sort:0,status:"Y",thumb:"",thumbs:[],content:"",content_en:"",content_yn:"",cat_id:""},rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:100,message:"长度在 3 到 100 个字符",trigger:"blur"}],credit:[{required:!0,message:"积分不能为空"},{type:"number",message:"积分为数字值"}],sort:[{required:!0,message:"积分不能为空"},{type:"number",message:"排序为数字值"}],max_shop_num:[{required:!0,message:"限购数为空"},{type:"number",message:"限购数为数字值"}],status:[{required:!0}],cat_id:[{required:!0,message:"分类为空"}],content:[{required:!0,message:"商品内容为空"}],thumb:[{required:!0,message:"标题图片为空"}],thumbs:[{type:"array",required:!0,message:"缩略图为空"}]},is_open_v:!1,config:{status:{},type:{},is_low_risk:null,cats:null},file:[],file1:[],date:new Date,id:null}},mounted:function(){var e=this;this.id=this.$route.query.id;var t="/goods/goods/getlist";this.id?(t="/goods/goods/edit/"+this.id,Object(s["a"])(t).then((function(t){t.data.view?("Y"==t.data.view.if_open_vouchers?e.is_open_v=!0:e.is_open_v=!1,e.form=t.data.view,e.config=t.data.config,e.form.credit=Number(t.data.view.credit),e.form.max_shop_num=Number(t.data.view.max_shop_num),e.form.sort=Number(t.data.view.sort),e.form.thumb=t.data.view.thumb,e.form.thumbs=t.data.view.thumbs,t.data.view.thumb&&(e.file=[{url:t.data.view.thumb,name:t.data.view.thumb}]),t.data.view.thumbs&&(e.file1=t.data.view.thumbs.map((function(e){return{url:e,name:e}}))),t.data.view.begin_time>0&&(e.date=new Date(1e3*parseInt(t.data.view.begin_time)))):e.config=t.data.config}))):Object(c["a"])(t).then((function(t){t.data.view?("Y"==t.data.view.if_open_vouchers?e.is_open_v=!0:e.is_open_v=!1,e.form=t.data.view,e.config=t.data.config,e.form.credit=Number(t.data.view.credit),e.form.max_shop_num=Number(t.data.view.max_shop_num),e.form.sort=Number(t.data.view.sort),e.form.thumb=t.data.view.thumb,e.form.thumbs=t.data.view.thumbs,t.data.view.thumb&&(e.file=[{url:t.data.view.thumb,name:t.data.view.thumb}]),t.data.view.thumbs&&(e.file1=t.data.view.thumbs.map((function(e){return{url:e,name:e}}))),t.data.view.begin_time>0&&(e.date=new Date(1e3*parseInt(t.data.view.begin_time)))):e.config=t.data.config}))},methods:{fileSuccessBefore:function(e){var t=2,r=e.name.replace(/.+\./,""),n=["png","jpg","jpeg","gif"],o=(e.size||0)/1024/1024<t;return o?-1!==n.indexOf(r.toLowerCase())||(this.$message.warning({message:"请上传后缀名为png、jpg、jpeg、gif的附件"}),!1):(this.$message.error("文件大小超过 "+t+"MB"),!1)},vouchersHandle:function(e){e?(this.form.if_open_vouchers="Y",this.is_open_v=!0,this.form.if_open_vouchers_name="是"):(this.form.if_open_vouchers="N",this.is_open_v=!1,this.form.if_open_vouchers_name="否")},handleImageAdded:function(e,t,r,n){var o=new FormData;o.append("file",e),Object(c["a"])("/api/api/upload",o).then((function(e){var o=e.data.file;t.insertEmbed(r,"image",o),n()}))},onSubmit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!"),!1;var r="/goods/goods/create";e.id?(r="/goods/goods/edit/"+e.id,Object(l["a"])(r,m({id:e.id},e.form)).then((function(){i["Message"].success("操作成功"),e.$router.replace("/integral/goodslist")}))):Object(c["a"])(r,m({id:e.id},e.form)).then((function(){i["Message"].success("操作成功"),e.$router.replace("/integral/goodslist")}))}))},fileSuccess:function(e,t){this.file1.push(t),this.form.thumbs.push(e.data.file)},fileSuccess1:function(e,t){console.log("thumb :>> "),this.file=[t],this.form.thumb=e.data.file},onDelct1:function(e,t){this.file1=t,this.form.thumbs=t.map((function(e){return e.name})),console.log("object :>> ",e),console.log("object :>> ",t)},onDelct:function(e,t){this.file=t,this.form.thumb=t.map((function(e){return e.name})),console.log("object :>> ",e),console.log("object :>> ",t)}}},p=d,v=(r("4921"),r("2877")),b=Object(v["a"])(p,n,o,!1,null,"3a01c3bc",null);t["default"]=b.exports},"7f7f":function(e,t,r){var n=r("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||r("9e1e")&&n(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"8b97":function(e,t,r){var n=r("d3f4"),o=r("cb7c"),a=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},a481:function(e,t,r){"use strict";var n=r("cb7c"),o=r("4bf8"),a=r("9def"),i=r("4588"),c=r("0390"),s=r("5f1b"),l=Math.max,u=Math.min,f=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,v){return[function(n,o){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,o):r.call(String(a),n,o)},function(e,t){var o=v(r,e,this,t);if(o.done)return o.value;var f=n(e),m=String(this),d="function"===typeof t;d||(t=String(t));var h=f.global;if(h){var g=f.unicode;f.lastIndex=0}var _=[];while(1){var y=s(f,m);if(null===y)break;if(_.push(y),!h)break;var x=String(y[0]);""===x&&(f.lastIndex=c(m,a(f.lastIndex),g))}for(var w="",O=0,S=0;S<_.length;S++){y=_[S];for(var j=String(y[0]),I=l(u(i(y.index),m.length),0),E=[],A=1;A<y.length;A++)E.push(p(y[A]));var $=y.groups;if(d){var k=[j].concat(E,I,m);void 0!==$&&k.push($);var N=String(t.apply(void 0,k))}else N=b(j,m,I,E,$,t);I>=O&&(w+=m.slice(O,I)+N,O=I+j.length)}return w+m.slice(O)}];function b(e,t,n,a,i,c){var s=n+e.length,l=a.length,u=d;return void 0!==i&&(i=o(i),u=m),r.call(c,u,(function(r,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return r;if(u>l){var m=f(u/10);return 0===m?r:m<=l?void 0===a[m-1]?o.charAt(1):a[m-1]+o.charAt(1):r}c=a[u-1]}return void 0===c?"":c}))}}))},aa77:function(e,t,r){var n=r("5ca1"),o=r("be13"),a=r("79e5"),i=r("fdef"),c="["+i+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(e,t,r){var o={},c=a((function(){return!!i[e]()||s[e]()!=s})),l=o[e]=c?t(m):i[e];r&&(o[r]=l),n(n.P+n.F*c,"String",o)},m=f.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(e,t,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("2d95"),i=r("5dbc"),c=r("6a99"),s=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,m=r("aa77").trim,d="Number",p=n[d],v=p,b=p.prototype,h=a(r("2aeb")(b))==d,g="trim"in String.prototype,_=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():m(t,3);var r,n,o,a=t.charCodeAt(0);if(43===a||45===a){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,s=t.slice(2),l=0,u=s.length;l<u;l++)if(i=s.charCodeAt(l),i<48||i>o)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(h?s((function(){b.valueOf.call(r)})):a(r)!=d)?i(new v(_(t)),r,p):_(t)};for(var y,x=r("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)o(v,y=x[w])&&!o(p,y)&&f(p,y,u(v,y));p.prototype=b,b.constructor=p,r("2aba")(n,d,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-56560726.501a9e81.js.map