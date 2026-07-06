import{$ as e,C as t,E as n,H as r,St as i,U as a,W as o,_ as s,b as c,c as l,d as u,g as d,ht as f,j as p,k as m,ut as h,v as g,w as _,y as v}from"./vue.runtime.esm-bundler-CoGLJnd5.js";import{At as ee,Ft as y,L as b}from"./router-CL4BRAPG.js";import{t as x}from"./svg-icon-SV4-T3K_.js";import{B as S,Bn as C,Ct as w,In as T,Ln as E,Nn as D,Pn as O,Rt as k,U as A,Vn as j,Yt as M,u as N,wt as P}from"./Tabs-CcQUUH2_.js";import{t as F}from"./Alert-BlriaDbf.js";import{a as I,o as L}from"./vue-router-B49f2QON.js";import{c as R}from"./index-ChRE0XAA.js";var z=D([O(`list`,`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[E(`show-divider`,[O(`list-item`,[D(`&:not(:last-child)`,[T(`divider`,`
 background-color: var(--n-merged-border-color);
 `)])])]),E(`clickable`,[O(`list-item`,`
 cursor: pointer;
 `)]),E(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),E(`hoverable`,[O(`list-item`,`
 border-radius: var(--n-border-radius);
 `,[D(`&:hover`,`
 background-color: var(--n-merged-color-hover);
 `,[T(`divider`,`
 background-color: transparent;
 `)])])]),E(`bordered, hoverable`,[O(`list-item`,`
 padding: 12px 20px;
 `),T(`header, footer`,`
 padding: 12px 20px;
 `)]),T(`header, footer`,`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[D(`&:not(:last-child)`,`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),O(`list-item`,`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[T(`prefix`,`
 margin-right: 20px;
 flex: 0;
 `),T(`suffix`,`
 margin-left: 20px;
 flex: 0;
 `),T(`main`,`
 flex: 1;
 `),T(`divider`,`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),C(O(`list`,`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),j(O(`list`,`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),B=Object.assign(Object.assign({},S.props),{size:{type:String,default:`medium`},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),V=M(`n-list`),H=n({name:`List`,props:B,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=P(e),i=A(`List`,r,t),o=S(`List`,`-list`,z,R,e,t);a(V,{showDividerRef:f(e,`showDivider`),mergedClsPrefixRef:t});let s=d(()=>{let{common:{cubicBezierEaseInOut:e},self:{fontSize:t,textColor:n,color:r,colorModal:i,colorPopover:a,borderColor:s,borderColorModal:c,borderColorPopover:l,borderRadius:u,colorHover:d,colorHoverModal:f,colorHoverPopover:p}}=o.value;return{"--n-font-size":t,"--n-bezier":e,"--n-text-color":n,"--n-color":r,"--n-border-radius":u,"--n-border-color":s,"--n-border-color-modal":c,"--n-border-color-popover":l,"--n-color-modal":i,"--n-color-popover":a,"--n-color-hover":d,"--n-color-hover-modal":f,"--n-color-hover-popover":p}}),c=n?w(`list`,void 0,s,e):void 0;return{mergedClsPrefix:t,rtlEnabled:i,cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),m(`ul`,{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},e.header?m(`div`,{class:`${t}-list__header`},e.header()):null,e.default?.call(e),e.footer?m(`div`,{class:`${t}-list__footer`},e.footer()):null)}}),U=n({name:`ListItem`,slots:Object,setup(){let e=p(V,null);return e||k(`list-item`,"`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{$slots:e,mergedClsPrefix:t}=this;return m(`li`,{class:`${t}-list-item`},e.prefix?m(`div`,{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?m(`div`,{class:`${t}-list-item__main`},e):null,e.suffix?m(`div`,{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&m(`div`,{class:`${t}-list-item__divider`}))}}),W={class:`min-h-screen bg-gray-50 flex flex-col`},G={class:`bg-blue-600 text-white p-16px flex items-center justify-between`},K={class:`flex items-center gap-8px`},q={class:`flex flex-col gap-8px min-w-130px`},J={class:`p-16px`},te={class:`flex gap-8px`},Y={key:1,class:`mt-16px`},X={key:0,class:`text-center text-gray-400 mt-24px`},Z={key:1,class:`mt-12px`},Q={class:`text-14px font-bold text-gray-700 mb-8px`},ne={class:`text-14px font-medium`},re={class:`text-12px text-gray-500`},ie={key:2,class:`mt-12px`},ae={class:`text-14px font-bold text-gray-700 mb-8px`},oe={class:`text-14px font-medium`},$={class:`text-12px text-gray-500`},se={key:0,class:`text-12px text-blue-600`},ce={key:3,class:`mt-12px`},le={class:`text-14px font-bold text-gray-700 mb-8px`},ue={class:`text-14px font-medium`},de={class:`text-12px text-gray-500`},fe={key:0,class:`text-12px text-blue-600`},pe={key:1,class:`text-12px text-orange-500`},me=n({name:`h5_query`,__name:`index`,setup(n){let a=L(),f=I(),p=h(``),m=h(!1),S=h(!1),C=h(null),w=h(``),T=d(()=>{let e=f.query.redirect;return typeof e==`string`&&e.startsWith(`/`)?e:``}),E=[{label:`数据质量`,path:`/quality`,icon:`mdi:shield-check`},{label:`SUM 监测`,path:`/sum`,icon:`mdi:chart-line`},{label:`炉灶台账`,path:`/stove`,icon:`mdi:stove`},{label:`首页`,path:`/home`,icon:`mdi:monitor-dashboard`}];async function D(){if(p.value.trim()){m.value=!0,w.value=``;try{let{data:e,error:t}=await b(p.value.trim());if(t){w.value=`查询失败，请确认已登录后重试。`,C.value={households:[],stoves:[],sums:[]};return}C.value={households:e?.households||[],stoves:e?.stoves||[],sums:e?.sums||[]}}catch(e){console.error(`Failed to query H5 data`,e),w.value=`查询失败，请确认已登录后重试。`,C.value={households:[],stoves:[],sums:[]}}finally{m.value=!1}}}function O(){a.push({path:`/h5/bind`,query:T.value?{redirect:T.value}:void 0})}function k(){T.value&&a.push(T.value)}function A(e){S.value=!1,a.push(e)}return(n,a)=>{let d=N,f=x,h=y,b=F,j=ee,M=U,P=H;return r(),c(`div`,W,[s(`div`,G,[a[5]||=s(`div`,{class:`text-16px font-bold`},`D-MRV 采集查询`,-1),s(`div`,K,[T.value?(r(),g(d,{key:0,size:`small`,type:`default`,ghost:``,onClick:k},{default:e(()=>[...a[2]||=[t(`返回后台`,-1)]]),_:1})):v(``,!0),_(h,{show:S.value,"onUpdate:show":a[0]||=e=>S.value=e,trigger:`click`,placement:`bottom-end`},{trigger:e(()=>[_(d,{size:`small`,type:`default`,ghost:``},{default:e(()=>[...a[3]||=[t(`后台入口`,-1)]]),_:1})]),default:e(()=>[s(`div`,q,[(r(),c(u,null,o(E,n=>_(d,{key:n.path,text:``,class:`justify-start`,onClick:e=>A(n.path)},{icon:e(()=>[_(f,{icon:n.icon},null,8,[`icon`])]),default:e(()=>[t(` `+i(n.label),1)]),_:2},1032,[`onClick`])),64))])]),_:1},8,[`show`]),_(d,{size:`small`,type:`warning`,onClick:O},{default:e(()=>[...a[4]||=[t(`手工绑定`,-1)]]),_:1})])]),s(`div`,J,[w.value?(r(),g(b,{key:0,type:`error`,class:`mb-12px`},{default:e(()=>[t(i(w.value),1)]),_:1})):v(``,!0),s(`div`,te,[_(j,{value:p.value,"onUpdate:value":a[1]||=e=>p.value=e,placeholder:`输入炉具/家庭/SUM编号`,clearable:``,onKeyup:l(D,[`enter`])},null,8,[`value`]),_(d,{type:`primary`,loading:m.value,onClick:D},{default:e(()=>[...a[6]||=[t(`查询`,-1)]]),_:1},8,[`loading`])]),C.value?(r(),c(`div`,Y,[C.value.stoves.length===0&&C.value.sums.length===0&&C.value.households.length===0?(r(),c(`div`,X,` 未找到匹配记录 `)):v(``,!0),C.value.households.length>0?(r(),c(`div`,Z,[s(`div`,Q,`家庭 (`+i(C.value.households.length)+`)`,1),_(P,null,{default:e(()=>[(r(!0),c(u,null,o(C.value.households,t=>(r(),g(M,{key:t.id},{default:e(()=>[s(`div`,ne,i(t.code),1),s(`div`,re,i(t.displayName)+` | `+i(t.areaName)+` | `+i(t.status),1)]),_:2},1024))),128))]),_:1})])):v(``,!0),C.value.stoves.length>0?(r(),c(`div`,ie,[s(`div`,ae,`炉具 (`+i(C.value.stoves.length)+`)`,1),_(P,null,{default:e(()=>[(r(!0),c(u,null,o(C.value.stoves,t=>(r(),g(M,{key:t.id},{default:e(()=>[s(`div`,oe,i(t.code),1),s(`div`,$,i(t.model)+` | `+i(t.householdName)+` | `+i(t.status),1),t.boundSumCode?(r(),c(`div`,se,`已绑定SUM: `+i(t.boundSumCode),1)):v(``,!0)]),_:2},1024))),128))]),_:1})])):v(``,!0),C.value.sums.length>0?(r(),c(`div`,ce,[s(`div`,le,`SUM设备 (`+i(C.value.sums.length)+`)`,1),_(P,null,{default:e(()=>[(r(!0),c(u,null,o(C.value.sums,t=>(r(),g(M,{key:t.id},{default:e(()=>[s(`div`,ue,i(t.code),1),s(`div`,de,i(t.model)+` | `+i(t.status),1),t.boundStoveCode?(r(),c(`div`,fe,`已绑定炉具: `+i(t.boundStoveCode),1)):(r(),c(`div`,pe,`未绑定`))]),_:2},1024))),128))]),_:1})])):v(``,!0)])):v(``,!0)]),a[7]||=s(`div`,{class:`mt-auto p-16px text-center text-12px text-gray-400`},` 数据已同步 | 气候未来 D-MRV `,-1)])}}});export{me as default};