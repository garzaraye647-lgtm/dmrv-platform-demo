import{E as e,g as t,k as n}from"./vue.runtime.esm-bundler-CoGLJnd5.js";import{pn as r}from"./router-CHtSwxvq.js";import{B as i,Bn as a,Ct as o,In as s,It as c,Ln as l,Nn as u,Pn as d,Rn as f,Vn as p,Xt as m,wt as h,zn as g}from"./Tabs-CcQUUH2_.js";import{n as _}from"./Space-BQ6-PZzZ.js";import{f as v}from"./index-BG778Gjx.js";function y(e,t=`default`,n=[]){let{children:r}=e;if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r[t];if(typeof e==`function`)return e()}return n}var b=u([d(`descriptions`,{fontSize:`var(--n-font-size)`},[d(`descriptions-separator`,`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),d(`descriptions-table-wrapper`,[d(`descriptions-table`,[d(`descriptions-table-row`,[d(`descriptions-table-header`,{padding:`var(--n-th-padding)`}),d(`descriptions-table-content`,{padding:`var(--n-td-padding)`})])])]),f(`bordered`,[d(`descriptions-table-wrapper`,[d(`descriptions-table`,[d(`descriptions-table-row`,[u(`&:last-child`,[d(`descriptions-table-content`,{paddingBottom:0})])])])])]),l(`left-label-placement`,[d(`descriptions-table-content`,[u(`> *`,{verticalAlign:`top`})])]),l(`left-label-align`,[u(`th`,{textAlign:`left`})]),l(`center-label-align`,[u(`th`,{textAlign:`center`})]),l(`right-label-align`,[u(`th`,{textAlign:`right`})]),l(`bordered`,[d(`descriptions-table-wrapper`,`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[d(`descriptions-table`,[d(`descriptions-table-row`,[u(`&:not(:last-child)`,[d(`descriptions-table-content`,{borderBottom:`1px solid var(--n-merged-border-color)`}),d(`descriptions-table-header`,{borderBottom:`1px solid var(--n-merged-border-color)`})]),d(`descriptions-table-header`,`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[u(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})]),d(`descriptions-table-content`,[u(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})])])])])]),d(`descriptions-header`,`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),d(`descriptions-table-wrapper`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d(`descriptions-table`,`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[d(`descriptions-table-row`,`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[d(`descriptions-table-header`,`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),d(`descriptions-table-content`,`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s(`content`,`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),s(`label`,`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),d(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),a(d(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),p(d(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),x=`DESCRIPTION_ITEM_FLAG`;function S(e){return typeof e==`object`&&e&&!Array.isArray(e)?e.type&&e.type.DESCRIPTION_ITEM_FLAG:!1}var C=e({name:`Descriptions`,props:Object.assign(Object.assign({},i.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:`top`},labelAlign:{type:String,default:`left`},separator:{type:String,default:`:`},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),slots:Object,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:a}=h(e),s=t(()=>e.size||a?.value?.Descriptions?.size||`medium`),c=i(`Descriptions`,`-descriptions`,b,v,e,n),l=t(()=>{let{bordered:t}=e,n=s.value,{common:{cubicBezierEaseInOut:r},self:{titleTextColor:i,thColor:a,thColorModal:o,thColorPopover:l,thTextColor:u,thFontWeight:d,tdTextColor:f,tdColor:p,tdColorModal:m,tdColorPopover:h,borderColor:_,borderColorModal:v,borderColorPopover:y,borderRadius:b,lineHeight:x,[g(`fontSize`,n)]:S,[g(t?`thPaddingBordered`:`thPadding`,n)]:C,[g(t?`tdPaddingBordered`:`tdPadding`,n)]:w}}=c.value;return{"--n-title-text-color":i,"--n-th-padding":C,"--n-td-padding":w,"--n-font-size":S,"--n-bezier":r,"--n-th-font-weight":d,"--n-line-height":x,"--n-th-text-color":u,"--n-td-text-color":f,"--n-th-color":a,"--n-th-color-modal":o,"--n-th-color-popover":l,"--n-td-color":p,"--n-td-color-modal":m,"--n-td-color-popover":h,"--n-border-radius":b,"--n-border-color":_,"--n-border-color-modal":v,"--n-border-color-popover":y}}),u=r?o(`descriptions`,t(()=>{let t=``,{bordered:n}=e;return n&&(t+=`a`),t+=s.value[0],t}),l,e):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender,compitableColumn:m(e,[`columns`,`column`]),inlineThemeDisabled:r,mergedSize:s}},render(){let e=this.$slots.default,t=e?c(e()):[];t.length;let{contentClass:i,labelClass:a,compitableColumn:o,labelPlacement:s,labelAlign:l,mergedSize:u,bordered:d,title:f,cssVars:p,mergedClsPrefix:m,separator:h,onRender:g}=this;g?.();let v=t.filter(e=>S(e)),b=v.reduce((e,t,r)=>{let c=t.props||{},l=v.length-1===r,u=[`label`in c?c.label:y(t,`label`)],f=[y(t)],p=c.span||1,g=e.span;e.span+=p;let _=c.labelStyle||c[`label-style`]||this.labelStyle,b=c.contentStyle||c[`content-style`]||this.contentStyle;if(s===`left`)d?e.row.push(n(`th`,{class:[`${m}-descriptions-table-header`,a],colspan:1,style:_},u),n(`td`,{class:[`${m}-descriptions-table-content`,i],colspan:l?(o-g)*2+1:p*2-1,style:b},f)):e.row.push(n(`td`,{class:`${m}-descriptions-table-content`,colspan:l?(o-g)*2:p*2},n(`span`,{class:[`${m}-descriptions-table-content__label`,a],style:_},[...u,h&&n(`span`,{class:`${m}-descriptions-separator`},h)]),n(`span`,{class:[`${m}-descriptions-table-content__content`,i],style:b},f)));else{let t=l?(o-g)*2:p*2;e.row.push(n(`th`,{class:[`${m}-descriptions-table-header`,a],colspan:t,style:_},u)),e.secondRow.push(n(`td`,{class:[`${m}-descriptions-table-content`,i],colspan:t,style:b},f))}return(e.span>=o||l)&&(e.span=0,e.row.length&&(e.rows.push(e.row),e.row=[]),s!==`left`&&e.secondRow.length&&(e.rows.push(e.secondRow),e.secondRow=[])),e},{span:0,row:[],secondRow:[],rows:[]}).rows.map(e=>n(`tr`,{class:`${m}-descriptions-table-row`},e));return n(`div`,{style:p,class:[`${m}-descriptions`,this.themeClass,`${m}-descriptions--${s}-label-placement`,`${m}-descriptions--${l}-label-align`,`${m}-descriptions--${u}-size`,d&&`${m}-descriptions--bordered`]},f||this.$slots.header?n(`div`,{class:`${m}-descriptions-header`},f||_(this,`header`)):null,n(`div`,{class:`${m}-descriptions-table-wrapper`},n(`table`,{class:`${m}-descriptions-table`},n(`tbody`,null,s===`top`&&n(`tr`,{class:`${m}-descriptions-table-row`,style:{visibility:`collapse`}},r(o*2,n(`td`,null))),b))))}}),w={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},T=e({name:`DescriptionsItem`,[x]:!0,props:w,slots:Object,render(){return null}});export{C as n,T as t};