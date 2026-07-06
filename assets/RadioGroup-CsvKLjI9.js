import{E as e,U as t,g as n,ht as r,j as i,k as a,ut as o}from"./vue.runtime.esm-bundler-CoGLJnd5.js";import{B as s,Ct as c,In as l,It as u,Ln as d,Lt as f,Nn as p,Pn as m,Qt as h,Rn as g,St as _,U as v,Yt as y,nn as b,wt as x,zn as S}from"./Tabs-CcQUUH2_.js";import{n as C}from"./Space-DBBkG8v2.js";import{m as w}from"./index-ChRE0XAA.js";var T={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},E=y(`n-radio-group`);function D(e){let t=i(E,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:a}=x(e),s=_(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return n?n.mergedSize.value:a?.value?.Radio?.size||`medium`},mergedDisabled(n){return!!(e.disabled||t?.disabledRef.value||n?.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:l}=s,u=o(null),d=o(null),p=o(e.defaultChecked),m=h(r(e,`checked`),p),g=b(()=>t?t.valueRef.value===e.value:m.value),v=b(()=>{let{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),y=o(!1);function S(){if(t){let{doUpdateValue:n}=t,{value:r}=e;f(n,r)}else{let{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=s;t&&f(t,!0),n&&f(n,!0),r(),i(),p.value=!0}}function C(){l.value||g.value||S()}function w(){C(),u.value&&(u.value.checked=g.value)}function T(){y.value=!1}function D(){y.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:n,inputRef:u,labelRef:d,mergedName:v,mergedDisabled:l,renderSafeChecked:g,focus:y,mergedSize:c,handleRadioInputChange:w,handleRadioInputBlur:T,handleRadioInputFocus:D}}var O=m(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[l(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[d(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),d(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),d(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[m(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),l(`splitor`,{height:`var(--n-height)`})]),m(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[m(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),l(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),p(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[l(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),p(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[l(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),g(`disabled`,`
 cursor: pointer;
 `,[p(`&:hover`,[l(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),g(`checked`,{color:`var(--n-button-text-color-hover)`})]),d(`focus`,[p(`&:not(:active)`,[l(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),d(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),d(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function k(e,t,n){let r=[],i=!1;for(let o=0;o<e.length;++o){let s=e[o],c=s.type?.name;c===`RadioButton`&&(i=!0);let l=s.props;if(c!==`RadioButton`){r.push(s);continue}if(o===0)r.push(s);else{let e=r[r.length-1].props,i=t===e.value,o=e.disabled,c=t===l.value,u=l.disabled,d=(i?2:0)+ +!o,f=(c?2:0)+ +!u,p={[`${n}-radio-group__splitor--disabled`]:o,[`${n}-radio-group__splitor--checked`]:i},m={[`${n}-radio-group__splitor--disabled`]:u,[`${n}-radio-group__splitor--checked`]:c},h=d<f?m:p;r.push(a(`div`,{class:[`${n}-radio-group__splitor`,h]}),s)}}return{children:r,isButtonGroup:i}}var A=e({name:`RadioGroup`,props:Object.assign(Object.assign({},s.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){let i=o(null),{mergedSizeRef:a,mergedDisabledRef:l,nTriggerFormChange:u,nTriggerFormInput:d,nTriggerFormBlur:p,nTriggerFormFocus:m}=_(e),{mergedClsPrefixRef:g,inlineThemeDisabled:y,mergedRtlRef:b}=x(e),C=s(`Radio`,`-radio-group`,O,w,e,g),T=o(e.defaultValue),D=h(r(e,`value`),T);function k(t){let{onUpdateValue:n,"onUpdate:value":r}=e;n&&f(n,t),r&&f(r,t),T.value=t,u(),d()}function A(e){let{value:t}=i;t&&(t.contains(e.relatedTarget)||m())}function j(e){let{value:t}=i;t&&(t.contains(e.relatedTarget)||p())}t(E,{mergedClsPrefixRef:g,nameRef:r(e,`name`),valueRef:D,disabledRef:l,mergedSizeRef:a,doUpdateValue:k});let M=v(`Radio`,b,g),N=n(()=>{let{value:e}=a,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:i,buttonBoxShadow:o,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:u,buttonTextColor:d,buttonTextColorActive:f,buttonTextColorHover:p,opacityDisabled:m,[S(`buttonHeight`,e)]:h,[S(`fontSize`,e)]:g}}=C.value;return{"--n-font-size":g,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":i,"--n-button-box-shadow":o,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":u,"--n-button-text-color":d,"--n-button-text-color-hover":p,"--n-button-text-color-active":f,"--n-height":h,"--n-opacity-disabled":m}}),P=y?c(`radio-group`,n(()=>a.value[0]),N,e):void 0;return{selfElRef:i,rtlEnabled:M,mergedClsPrefix:g,mergedValue:D,handleFocusout:j,handleFocusin:A,cssVars:y?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:t,mergedClsPrefix:n,handleFocusin:r,handleFocusout:i}=this,{children:o,isButtonGroup:s}=k(u(C(this)),t,n);return(e=this.onRender)==null||e.call(this),a(`div`,{onFocusin:r,onFocusout:i,ref:`selfElRef`,class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,s&&`${n}-radio-group--button-group`],style:this.cssVars},o)}});export{T as n,D as r,A as t};