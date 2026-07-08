import{E as e,g as t,k as n}from"./vue.runtime.esm-bundler-CoGLJnd5.js";import{B as r,Bn as i,Ct as a,Ln as o,Nn as s,Pn as c,Rn as l,U as u,Vn as d,wt as f,zn as p}from"./Tabs-CcQUUH2_.js";import{n as m}from"./index-BG778Gjx.js";var h=s([c(`table`,`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[s(`th`,`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[s(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),s(`td`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[s(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[s(`tr`,[s(`&:last-child`,[s(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),o(`single-line`,[s(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),s(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o(`single-column`,[s(`tr`,[s(`&:not(:last-child)`,[s(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),o(`striped`,[s(`tr:nth-of-type(even)`,[s(`td`,`background-color: var(--n-td-color-striped)`)])]),l(`bottom-bordered`,[s(`tr`,[s(`&:last-child`,[s(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),i(c(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[s(`th`,`
 background-color: var(--n-th-color-modal);
 `),s(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),d(c(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[s(`th`,`
 background-color: var(--n-th-color-popover);
 `),s(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),g=e({name:`Table`,props:Object.assign(Object.assign({},r.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:o,mergedComponentPropsRef:s}=f(e),c=t(()=>e.size||s?.value?.Table?.size||`medium`),l=r(`Table`,`-table`,h,m,e,n),d=u(`Table`,o,n),g=t(()=>{let e=c.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:i,thColor:a,thColorModal:o,thColorPopover:s,thTextColor:u,tdTextColor:d,borderRadius:f,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[p(`fontSize`,e)]:x,[p(`tdPadding`,e)]:S,[p(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=l.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":i,"--n-td-text-color":d,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":f,"--n-font-size":x,"--n-th-color":a,"--n-th-color-modal":o,"--n-th-color-popover":s,"--n-th-font-weight":m,"--n-th-text-color":u,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),_=i?a(`table`,t(()=>c.value[0]),g,e):void 0;return{rtlEnabled:d,mergedClsPrefix:n,cssVars:i?void 0:g,themeClass:_?.themeClass,onRender:_?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),n(`table`,{class:[`${t}-table`,this.themeClass,{[`${t}-table--rtl`]:this.rtlEnabled,[`${t}-table--bottom-bordered`]:this.bottomBordered,[`${t}-table--bordered`]:this.bordered,[`${t}-table--single-line`]:this.singleLine,[`${t}-table--single-column`]:this.singleColumn,[`${t}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{g as t};