webpackJsonp([1],{"+skl":function(t,e){},Eszu:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Gu7T"),a=n.n(r),o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({data:function(){return{}},mounted:function(){},components:{},methods:{}},i,!1,function(t){n("bGhk")},null,null).exports,u=n("/ocq"),m={render:function(){var t=this.$createElement;return(this._self._c||t)("Table",{attrs:{border:"",columns:this.columns7,data:this.data6}})},staticRenderFns:[]},c={components:{Form:n("VU/8")({data:function(){var t=this;return{columns7:[{title:"编号",key:"number"},{title:"书名",key:"name",render:function(t,e){return t("div",[t("Icon",{}),t("strong",e.row.name)])}},{title:"图书编码",key:"booknumber"},{title:"借书时间",key:"time"},{title:"Action",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n.index)}}},"详细信息"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n.index)}}},"删除")])}}],data6:[{number:18,name:"高等数学",booknumber:23,time:"2018-02-06"},{number:22,name:"线性代数",booknumber:24,time:"2018-02-07"},{name:"大学英语",number:25,booknumber:26,time:"2018-02-08"},{name:"体育生活",number:66,booknumber:28,time:"2018-02-09"}]}},methods:{show:function(t){this.$Modal.info({title:"User Info",content:"编码："+this.data6[t].number+"<br>书名："+this.data6[t].name+"\n                        <br>图书编码："+this.data6[t].booknumber+"<br>借阅时间："+this.data6[t].time})},remove:function(t){this.data6.splice(t,1)}}},m,!1,null,null,null).exports}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"}},[n("Menu",{attrs:{"active-name":"1-2",theme:"dark",width:"auto","open-names":["1"]}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                    图书管理\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("增加图书")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("图书列表")]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[t._v("管理图书")])],2),t._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                    图书信息\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2-1"}},[t._v("图书借阅")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("图书归还")])],2)],1)],1),t._v(" "),n("Layout",{style:{marginLeft:"200px"}},[n("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}}),t._v(" "),n("Content",{style:{padding:"0 16px 16px"}},[n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",{attrs:{to:"/"}},[n("Icon",{attrs:{type:"ios-home-outline"}}),t._v("\n                     HomeHome\n                ")],1),t._v(" "),n("BreadcrumbItem",{attrs:{to:"/"}},[n("Icon",{attrs:{type:"social-buffer-outline"}}),t._v("\n                     Components\n                ")],1),t._v(" "),n("BreadcrumbItem",{attrs:{to:"/"}},[n("Icon",{attrs:{type:"pound"}}),t._v("\n                        Layout\n                ")],1)],1),t._v(" "),n("Card",[n("div",{staticStyle:{height:"300px"}},[n("Form")],1),t._v(" "),n("div",{staticStyle:{height:"100px","margin-left":"30%"}},[n("Page",{attrs:{total:100,"show-elevator":""}})],1)])],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,l,!1,function(t){n("Eszu")},null,null).exports;o.default.use(u.a);var p=new u.a({routes:[{path:"/",name:"header",component:d}]}),h=n("BTaQ"),v=n.n(h);n("+skl");o.default.use(v.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:p,render:function(t){return t(s)},data:{currentPageName:""},mounted:function(){this.currentPageName=this.$route.name,this.$store.commit("setOpenedList"),this.$store.commit("initCachepage"),this.$store.commit("updateMenulist"),util.checkUpdate(this)},created:function(){var t=[];appRouter.map(function(e){e.children.length<=1?t.push(e.children[0]):t.push.apply(t,a()(e.children))}),this.$store.commit("setTagsList",t)}})},bGhk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e2d8729c6a6fff064af8.js.map