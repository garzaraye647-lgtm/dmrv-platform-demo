import{$ as e,C as t,E as n,H as r,St as i,U as a,W as o,_ as s,b as c,d as l,g as u,ht as d,j as f,k as p,ut as m,v as h,vt as g,w as _,y as v}from"./vue.runtime.esm-bundler-CoGLJnd5.js";import{t as ee}from"./svg-icon-SV4-T3K_.js";import{B as y,C as b,Ct as x,In as S,It as C,Jt as w,L as T,Ln as E,Lt as D,Nn as O,P as k,Pn as A,R as j,Rn as M,Rt as N,U as P,Vt as F,Yt as I,_ as L,a as R,jt as z,k as B,kt as V,r as H,t as te,u as U,wt as W,zn as G}from"./Tabs-CcQUUH2_.js";import{n as K,t as q}from"./Grid-DaJkDKhd.js";import{n as ne,t as J}from"./Space-BQ6-PZzZ.js";import{n as re,t as ie}from"./_plugin-vue_export-helper-byWINnAL.js";import{t as Y}from"./Alert-BLk10GbO.js";import{t as X}from"./Table-SxByEiAd.js";import{r as ae,t as oe}from"./index-BG778Gjx.js";import{t as se}from"./dmrv-export-BNFvqJB_.js";import{n as ce}from"./dmrv-import-BOeIE0bC.js";var Z=!1;function le(){if(w&&window.CSS&&!Z&&(Z=!0,`registerProperty`in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}function ue(e){let{textColor3:t,infoColor:n,errorColor:r,successColor:i,warningColor:a,textColor1:o,textColor2:s,railColor:c,fontWeightStrong:l,fontSize:u}=e;return Object.assign(Object.assign({},oe),{contentFontSize:u,titleFontWeight:l,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${n}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${a}`,iconColor:t,iconColorInfo:n,iconColorError:r,iconColorSuccess:i,iconColorWarning:a,titleTextColor:o,contentTextColor:s,metaTextColor:t,lineColor:c})}var de={name:`Timeline`,common:b,self:ue},fe=A(`steps`,`
 width: 100%;
 display: flex;
`,[A(`step`,`
 position: relative;
 display: flex;
 flex: 1;
 `,[E(`disabled`,`cursor: not-allowed`),E(`clickable`,`
 cursor: pointer;
 `),O(`&:last-child`,[A(`step-splitor`,`display: none;`)])]),A(`step-splitor`,`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),A(`step-content`,`flex: 1;`,[A(`step-content-header`,`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S(`title`,`
 white-space: nowrap;
 flex: 0;
 `)]),S(`description`,`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),A(`step-indicator`,`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[A(`step-indicator-slot`,`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[S(`index`,`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()]),A(`icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()]),A(`base-icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[B()])])]),E(`vertical`,`flex-direction: column;`,[M(`show-description`,[O(`>`,[A(`step`,`padding-bottom: 8px;`)])]),O(`>`,[A(`step`,`margin-bottom: 16px;`,[O(`&:last-child`,`margin-bottom: 0;`),O(`>`,[A(`step-indicator`,[O(`>`,[A(`step-splitor`,`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),A(`step-content`,[S(`description`,`margin-top: 8px;`)])])])])]),E(`content-bottom`,[M(`vertical`,[O(`>`,[A(`step`,`flex-direction: column`,[O(`>`,[A(`step-line`,`display: flex;`,[O(`>`,[A(`step-splitor`,`
 margin-top: 0;
 align-self: center;
 `)])])]),O(`>`,[A(`step-content`,`margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);`,[A(`step-content-header`,`
 margin-left: 0;
 `),A(`step-content__description`,`
 margin-left: 0;
 `)])])])])])])]);function pe(e,t){return typeof e!=`object`||!e||Array.isArray(e)?null:(e.props||={},e.props.internalIndex=t+1,e)}function me(e){return e.map((e,t)=>pe(e,t))}var he=Object.assign(Object.assign({},y.props),{current:Number,status:{type:String,default:`process`},size:{type:String,default:`medium`},vertical:Boolean,contentPlacement:{type:String,default:`right`},"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),ge=I(`n-steps`),_e=n({name:`Steps`,props:he,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,mergedRtlRef:r}=W(e),i=P(`Steps`,r,n);return a(ge,{props:e,mergedThemeRef:y(`Steps`,`-steps`,fe,ae,e,n),mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:i}},render(){let{mergedClsPrefix:e}=this;return p(`div`,{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`,this.contentPlacement===`bottom`&&`${e}-steps--content-bottom`]},me(C(ne(this))))}}),Q=n({name:`Step`,props:{status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},slots:Object,setup(e){let t=f(ge,null);t||N(`step`,"`n-step` must be placed inside `n-steps`.");let{inlineThemeDisabled:n}=W(),{props:r,mergedThemeRef:i,mergedClsPrefixRef:a,stepsSlots:o}=t,s=d(r,`vertical`),c=d(r,`contentPlacement`),l=u(()=>{let{status:t}=e;if(t)return t;{let{internalIndex:t}=e,{current:n}=r;if(n===void 0)return`process`;if(t<n)return`finish`;if(t===n)return r.status||`process`;if(t>n)return`wait`}return`process`}),p=u(()=>{let{value:e}=l,{size:t}=r,{common:{cubicBezierEaseInOut:n},self:{stepHeaderFontWeight:a,[G(`stepHeaderFontSize`,t)]:o,[G(`indicatorIndexFontSize`,t)]:s,[G(`indicatorSize`,t)]:c,[G(`indicatorIconSize`,t)]:u,[G(`indicatorTextColor`,e)]:d,[G(`indicatorBorderColor`,e)]:f,[G(`headerTextColor`,e)]:p,[G(`splitorColor`,e)]:m,[G(`indicatorColor`,e)]:h,[G(`descriptionTextColor`,e)]:g}}=i.value;return{"--n-bezier":n,"--n-description-text-color":g,"--n-header-text-color":p,"--n-indicator-border-color":f,"--n-indicator-color":h,"--n-indicator-icon-size":u,"--n-indicator-index-font-size":s,"--n-indicator-size":c,"--n-indicator-text-color":d,"--n-splitor-color":m,"--n-step-header-font-size":o,"--n-step-header-font-weight":a}}),m=n?x(`step`,u(()=>{let{value:e}=l,{size:t}=r;return`${e[0]}${t[0]}`}),p,r):void 0;return{stepsSlots:o,mergedClsPrefix:a,vertical:s,mergedStatus:l,handleStepClick:u(()=>{if(e.disabled)return;let{onUpdateCurrent:t,"onUpdate:current":n}=r;return t||n?()=>{t&&D(t,e.internalIndex),n&&D(n,e.internalIndex)}:void 0}),cssVars:n?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender,contentPlacement:c}},render(){let{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:r,contentPlacement:i,vertical:a}=this,o=z(this.$slots.default,t=>{let n=t||this.description;return n?p(`div`,{class:`${e}-step-content__description`},n):null}),s=p(`div`,{class:`${e}-step-splitor`}),c=p(`div`,{class:`${e}-step-indicator`,key:i},p(`div`,{class:`${e}-step-indicator-slot`},p(T,null,{default:()=>z(this.$slots.icon,t=>{let{mergedStatus:n,stepsSlots:r}=this;return n===`finish`||n===`error`?n===`finish`?p(j,{clsPrefix:e,key:`finish`},{default:()=>V(r[`finish-icon`],()=>[p(re,null)])}):n===`error`?p(j,{clsPrefix:e,key:`error`},{default:()=>V(r[`error-icon`],()=>[p(k,null)])}):null:t||p(`div`,{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),a?s:null),u=p(`div`,{class:`${e}-step-content`},p(`div`,{class:`${e}-step-content-header`},p(`div`,{class:`${e}-step-content-header__title`},V(this.$slots.title,()=>[this.title])),!a&&i===`right`?s:null),o),d;return d=!a&&i===`bottom`?p(l,null,p(`div`,{class:`${e}-step-line`},c,s),u):p(l,null,c,u),t?.(),p(`div`,{class:[`${e}-step`,r&&`${e}-step--disabled`,!r&&n&&`${e}-step--clickable`,this.themeClass,o&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},d)}}),ve=1.25,ye=A(`timeline`,`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ve};
`,[E(`horizontal`,`
 flex-direction: row;
 `,[O(`>`,[A(`timeline-item`,`
 flex-shrink: 0;
 padding-right: 40px;
 `,[E(`dashed-line-type`,[O(`>`,[A(`timeline-item-timeline`,[S(`line`,`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),O(`>`,[A(`timeline-item-content`,`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[O(`>`,[S(`meta`,`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),A(`timeline-item-timeline`,`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[S(`line`,`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),E(`right-placement`,[A(`timeline-item`,[A(`timeline-item-content`,`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),A(`timeline-item-timeline`,`
 width: var(--n-icon-size);
 right: 0;
 `)])]),E(`left-placement`,[A(`timeline-item`,[A(`timeline-item-content`,`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),A(`timeline-item-timeline`,`
 left: 0;
 `)])]),A(`timeline-item`,`
 position: relative;
 `,[O(`&:last-child`,[A(`timeline-item-timeline`,[S(`line`,`
 display: none;
 `)]),A(`timeline-item-content`,[S(`meta`,`
 margin-bottom: 0;
 `)])]),A(`timeline-item-content`,[S(`title`,`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),S(`content`,`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),S(`meta`,`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),E(`dashed-line-type`,[A(`timeline-item-timeline`,[S(`line`,`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),A(`timeline-item-timeline`,`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ve} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[S(`circle`,`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),S(`icon`,`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),S(`line`,`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),be=Object.assign(Object.assign({},y.props),{horizontal:Boolean,itemPlacement:{type:String,default:`left`},size:{type:String,default:`medium`},iconSize:Number}),xe=I(`n-timeline`),Se=n({name:`Timeline`,props:be,setup(e,{slots:t}){let{mergedClsPrefixRef:n}=W(e);return a(xe,{props:e,mergedThemeRef:y(`Timeline`,`-timeline`,ye,de,e,n),mergedClsPrefixRef:n}),()=>{let{value:r}=n;return p(`div`,{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},t)}}}),Ce=n({name:`TimelineItem`,props:{time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:`default`},type:{type:String,default:`default`}},slots:Object,setup(e){let t=f(xe);t||N(`timeline-item`,"`n-timeline-item` must be placed inside `n-timeline`."),le();let{inlineThemeDisabled:n}=W(),r=u(()=>{let{props:{size:n,iconSize:r},mergedThemeRef:i}=t,{type:a}=e,{self:{titleTextColor:o,contentTextColor:s,metaTextColor:c,lineColor:l,titleFontWeight:u,contentFontSize:d,[G(`iconSize`,n)]:f,[G(`titleMargin`,n)]:p,[G(`titleFontSize`,n)]:m,[G(`circleBorder`,a)]:h,[G(`iconColor`,a)]:g},common:{cubicBezierEaseInOut:_}}=i.value;return{"--n-bezier":_,"--n-circle-border":h,"--n-icon-color":g,"--n-content-font-size":d,"--n-content-text-color":s,"--n-line-color":l,"--n-meta-text-color":c,"--n-title-font-size":m,"--n-title-font-weight":u,"--n-title-margin":p,"--n-title-text-color":o,"--n-icon-size":F(r)||f}}),i=n?x(`timeline-item`,u(()=>{let{props:{size:n,iconSize:r}}=t,{type:i}=e;return`${n[0]}${r||`a`}${i[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:r,themeClass:i?.themeClass,onRender:i?.onRender}},render(){let{mergedClsPrefix:e,color:t,onRender:n,$slots:r}=this;return n?.(),p(`div`,{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},p(`div`,{class:`${e}-timeline-item-timeline`},p(`div`,{class:`${e}-timeline-item-timeline__line`}),z(r.icon,n=>n?p(`div`,{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},n):p(`div`,{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),p(`div`,{class:`${e}-timeline-item-content`},z(r.header,t=>t||this.title?p(`div`,{class:`${e}-timeline-item-content__title`},t||this.title):null),p(`div`,{class:`${e}-timeline-item-content__content`},V(r.default,()=>[this.content])),p(`div`,{class:`${e}-timeline-item-content__meta`},V(r.footer,()=>[this.time]))))}}),we={class:`flex items-center justify-between`},Te={key:0,class:`grid gap-12px lg:grid-cols-5`},Ee={class:`mt-4px font-medium`},De={class:`mt-4px font-medium`},Oe={class:`mt-4px font-medium`},ke={class:`mt-2px text-12px text-gray-400`},Ae={key:1,class:`text-13px text-red-500`},je={class:`text-13px text-gray-500`},Me={class:`mt-8px text-24px font-bold`},Ne={class:`mt-4px text-12px text-gray-400`},Pe={class:`calc-steps-scroll`},Fe={class:`font-mono`},$=`方法学和减排量计算引擎数据.xlsx`,Ie=ie(n({name:`calculation`,__name:`index`,setup(n){let a=m(`chain`),u=m(null),d=m(null),f=m(``),p=m(``),y=m(`RECH-V5.0-RUN-001`),b=m(`等待输入快照`),x=m(1),S=[{label:`公式来源`,value:`Excel`,sub:$},{label:`Basic data`,value:`39 x 11`,sub:`参数与输入表`},{label:`ER sheet`,value:`169 x 22`,sub:`减排量计算链`},{label:`公式数量`,value:`80`,sub:`Basic data 10 / ER sheet 70`},{label:`最终 ERy`,value:`37,751.21`,sub:`tCO2e/yr，ER sheet!A4`},{label:`核证状态`,value:`待确认`,sub:`VVB/甲方确认`}],C=[{key:`ERy`,meaning:`最终减排量`,input:`ER sheet!A9 与扣减率 B2`,formula:`=A9*(1-B2)`,cell:`ER sheet!A4`,output:`37,751.21`,status:`待核证`},{key:`ERy_raw`,meaning:`扣减前减排量`,input:`(BEy - AEy) * HEind - LEy`,formula:`=((B9-C9)*D9)-E9`,cell:`ER sheet!A9`,output:`39,738.11`,status:`已计算`},{key:`BEy`,meaning:`基线排放`,input:`MIN(BEadj, BAUy)`,formula:`=B26`,cell:`ER sheet!B9`,output:`64,457.39`,status:`已计算`},{key:`AEy`,meaning:`项目活动排放`,input:`项目燃料、NCV、EF、数量`,formula:`=B103`,cell:`ER sheet!C9`,output:`19,261.80`,status:`已计算`},{key:`HEind`,meaning:`霍桑效应调整指数`,input:`使用率/监测修正`,formula:`=B118`,cell:`ER sheet!D9`,output:`0.90`,status:`已计算`},{key:`LEy`,meaning:`泄漏排放`,input:`泄漏源 1 + 泄漏源 2`,formula:`=B140`,cell:`ER sheet!E9`,output:`937.91`,status:`已计算`},{key:`BEadj`,meaning:`不确定性调整后基线排放`,input:`BEunc 与 DAFNetZero`,formula:`=D31*(1-E31)`,cell:`ER sheet!C31`,output:`64,457.39`,status:`可追溯`},{key:`BEunc`,meaning:`未调整基线排放`,input:`Nb,p,y、Up,y、Pb,adj、NCV、EF、fNRB、炉具数量`,formula:`=E41*F41*G41*H41*(I41*J41+K41)*L41`,cell:`ER sheet!D41`,output:`67,262.22`,status:`可追溯`},{key:`Pb,adj`,meaning:`统计/上限修正后基线燃料消耗`,input:`B-KPT 与 PCAP 上限`,formula:`=MIN(G60,(H60*I60/J60))`,cell:`ER sheet!F60`,output:`0.0204`,status:`可追溯`}],w=[{name:`HNb`,value:`6`,unit:`person`,source:`Basic data!C2`,status:`已接入`},{name:`BKPT per capita wood`,value:`3.4`,unit:`kg/person.day`,source:`Basic data!C3`,status:`已接入`},{name:`Baseline efficiency`,value:`0.1`,unit:`%`,source:`Basic data!C4`,status:`已接入`},{name:`Project stove efficiency`,value:`0.3492`,unit:`%`,source:`Basic data!C5`,status:`已接入`},{name:`Pb,mean`,value:`0.0204`,unit:`tonnes/household/day`,source:`Basic data!C6 = C3*C2/1000`,status:`已计算`},{name:`Nb,p,y`,value:`365`,unit:`days`,source:`Basic data!C7`,status:`已接入`},{name:`fNRB,b,y`,value:`0.49`,unit:`%`,source:`Basic data!C8`,status:`待业务复核`},{name:`Pp,mean`,value:`0.0058419244`,unit:`tonnes/household/day`,source:`Basic data!C9 = C4/C5*C6`,status:`已计算`},{name:`Up,y`,value:`0.9`,unit:`/`,source:`Basic data!C10`,status:`已接入`},{name:`Ndisseminated,y`,value:`10000`,unit:`unit`,source:`Basic data!C12`,status:`已接入`}],T=[{module:`BKPT`,content:`50 户、3 天称重、2.096 kg/person/day、4.24% 精度`,risk:`扩展资料接口已预留`},{module:`基线调研`,content:`样本户、燃料 Mix、Stove Stacking、30 天回忆`,risk:`结构化样本数据待接入`},{module:`SUM/CSM`,content:`251101214U、2min 间隔、约 92 天温度点`,risk:`设备样本数据已接入`},{module:`炉灶台账`,content:`Ward 分发数据、QR、用户、GPS、照片 URL`,risk:`Ward 1/2/3/4/5/8 共 2543 条分发记录`}],E=[{field:`ERy final`,page:`37,751.21`,excel:`ER sheet!A4`,diff:`=A9*(1-B2)`},{field:`ERy raw`,page:`39,738.11`,excel:`ER sheet!A9`,diff:`=((B9-C9)*D9)-E9`},{field:`BEy`,page:`64,457.39`,excel:`ER sheet!B9`,diff:`=B26`},{field:`AEy`,page:`19,261.80`,excel:`ER sheet!C9`,diff:`=B103`},{field:`HEind`,page:`0.90`,excel:`ER sheet!D9`,diff:`=B118`},{field:`LEy`,page:`937.91`,excel:`ER sheet!E9`,diff:`=B140`},{field:`V5-V4 gap`,page:`12,305.46`,excel:`Basic data!C32`,diff:`=C31-C30`}],D=m([{type:`info`,title:`计算引擎接入`,content:`${$} 已作为 RECH 公式与参数来源。`,time:`2026-07-03 22:30`},{type:`info`,title:`输入快照创建`,content:`从 Basic data、ER sheet、BKPT、基线、SUM 和炉灶台账读取核算输入。`,time:`2026-07-02 09:30`},{type:`warning`,title:`参数待复核`,content:`fNRB,b,y 按 Basic data!C8 = 0.49 进入参数库，需按业务口径复核。`,time:`2026-07-02 10:10`},{type:`info`,title:`公式链加载`,content:`ER sheet!A4 / A9 / B9 / C9 / D9 / E9 已纳入结果分解。`,time:`2026-07-02 10:18`},{type:`info`,title:`重新计算`,content:`生成 RECH-V5.0-RUN-001 核算运行。`,time:`2026-07-02 10:24`},{type:`warning`,title:`核证确认`,content:`ERfinal 需 VVB 或甲方确认后完成最终锁定。`,time:`2026-07-02 10:30`},{type:`warning`,title:`导出核查包清单`,content:`已导出核算清单和审计记录。`,time:`2026-07-02 10:45`}]),O=[{severity:`info`,issue:`Basic data 已接入`,suggestion:`39 行 x 11 列，含 HNb、Pb,mean、fNRB、Up,y、Ndisseminated 等参数`},{severity:`info`,issue:`ER sheet 已接入`,suggestion:`169 行 x 22 列，含 ERy、BEy、AEy、HEind、LEy 公式链`},{severity:`info`,issue:`公式链可追溯`,suggestion:`Basic data 10 个公式，ER sheet 70 个公式，关键单元格已映射到页面`},{severity:`warning`,issue:`基线结构化样本待接入`,suggestion:`保留接口与字段，接入后生成 HNb 等输入`},{severity:`info`,issue:`SUM 设备样本可用`,suggestion:`用于设备趋势和输入引用`},{severity:`warning`,issue:`ERfinal 待核证确认`,suggestion:`经 VVB/甲方确认后生成最终版本`}],k=[{key:`ERy final`,value:`37,751.21`,unit:`tCO2e/yr`,status:`待核证`},{key:`ERy before deduction`,value:`39,738.11`,unit:`tCO2e/yr`,status:`已计算`},{key:`BEy`,value:`64,457.39`,unit:`tCO2e/yr`,status:`已计算`},{key:`AEy`,value:`19,261.80`,unit:`tCO2e/yr`,status:`已计算`},{key:`HEind`,value:`0.90`,unit:`/`,status:`已计算`},{key:`LEy`,value:`937.91`,unit:`tCO2e/yr`,status:`已计算`},{key:`V5-V4 gap`,value:`12,305.46 / 48.36%`,unit:`tCO2e/yr`,status:`已计算`}];function A(e){return e.includes(`待`)||e.includes(`未`)?`warning`:e.includes(`禁用`)?`error`:e.includes(`已`)?`success`:`info`}function j(){return new Date().toISOString().slice(0,16).replace(`T`,` `)}function M(e,t,n){D.value=[{type:e,title:t,content:n,time:j()},...D.value]}function N(){f.value=``,u.value?.click()}async function P(e){let t=e.target,n=t.files?.[0];if(t.value=``,n)try{d.value=await ce(n),M(`info`,`导入计算引擎 Excel`,`${d.value.fileName} 已解析，Basic data!C8=${d.value.fnrbValue??`未读取到`}。`)}catch(e){d.value=null,f.value=e?.message||`RECH 计算引擎文件解析失败`,M(`error`,`计算引擎导入失败`,f.value)}}function F(){p.value=`RECH-INPUT-${new Date().toISOString().slice(0,10).replaceAll(`-`,``)}`,b.value=`输入快照已生成，待复算`,T[0].risk=`BKPT 扩展资料已按预留接口进入输入快照`,M(`info`,`生成输入快照`,`${p.value} 已汇总 BKPT、基线、SUM 和炉灶台账核算输入。`)}function I(){p.value||F(),x.value+=1,y.value=`RECH-V5.0-RUN-${String(x.value).padStart(3,`0`)}`,b.value=`复算完成，待核证确认`,M(`success`,`重新计算`,`${y.value} 已按 ${$} 的公式链完成复算记录。`)}function z(){b.value=`已提交核证确认`,M(`warning`,`提交核证确认`,`ERfinal 已进入甲方/VVB 确认流程。`)}function B(){se(`rech-v5-verification-package.json`,{packageName:`RECH V5.0 核算包`,generatedAt:new Date().toISOString(),snapshotVersion:p.value||`未生成输入快照`,calculationRunId:y.value,status:b.value,sourceWorkbook:$,importSummary:d.value,keyCells:d.value?.keyCells||null,chainRows:C,params:w,inputRefs:T,validationRows:O,resultRows:k,comparisonRows:E,auditRows:D.value,limitation:`该文件用于 RECH 输入、处理、输出、审计和核证材料流转。`}),M(`warning`,`导出 RECH 核算包`,`${y.value} 核算包已导出。`)}return(n,m)=>{let x=ee;return r(),h(g(J),{vertical:``,size:16},{default:e(()=>[s(`div`,we,[m[7]||=s(`div`,null,[s(`h1`,{class:`text-22px font-bold`},`RECH V5.0 核算工作台`),s(`div`,{class:`mt-4px text-13px text-gray-500`},`按方法学组织输入、参数、计算输出、Excel 对照和审计记录。`)],-1),_(g(J),null,{default:e(()=>[_(g(L),{type:`warning`},{default:e(()=>[...m[1]||=[t(`待核证确认`,-1)]]),_:1}),_(g(U),{size:`small`,secondary:``,onClick:N},{icon:e(()=>[_(x,{icon:`mdi:file-excel-outline`})]),default:e(()=>[m[2]||=t(` 导入计算引擎 Excel `,-1)]),_:1}),_(g(U),{size:`small`,type:`primary`,onClick:F},{default:e(()=>[...m[3]||=[t(`生成输入快照`,-1)]]),_:1}),_(g(U),{size:`small`,secondary:``,onClick:I},{default:e(()=>[...m[4]||=[t(`重新计算`,-1)]]),_:1}),_(g(U),{size:`small`,secondary:``,onClick:z},{default:e(()=>[...m[5]||=[t(`提交核证确认`,-1)]]),_:1}),_(g(U),{size:`small`,secondary:``,onClick:B},{default:e(()=>[...m[6]||=[t(`导出核算包`,-1)]]),_:1})]),_:1}),s(`input`,{ref_key:`rechFileInput`,ref:u,class:`hidden`,type:`file`,accept:`.xlsx,.xls`,onChange:P},null,544)]),_(g(Y),{type:`warning`,bordered:!1},{default:e(()=>[m[8]||=t(` 公式来源：`,-1),s(`strong`,null,i($)),m[9]||=t(`。本页面按 Basic data 与 ER sheet 展示 RECH V5.0 参数、公式链、输入快照和 Excel 对照；最终结果进入甲方/VVB 核证确认流程。 `,-1)]),_:1}),p.value||b.value!==`等待输入快照`?(r(),h(g(Y),{key:0,type:`info`,bordered:!1},{default:e(()=>[t(` 当前快照：`+i(p.value||`未生成`)+`；运行编号：`+i(y.value)+`；状态：`+i(b.value)+`。 `,1)]),_:1})):v(``,!0),d.value||f.value?(r(),h(g(R),{key:1,bordered:!1,size:`small`},{default:e(()=>[d.value?(r(),c(`div`,Te,[s(`div`,null,[m[10]||=s(`div`,{class:`text-12px text-gray-500`},`文件`,-1),s(`div`,Ee,i(d.value.fileName),1)]),s(`div`,null,[m[13]||=s(`div`,{class:`text-12px text-gray-500`},`工作表`,-1),_(g(J),{class:`mt-4px`,size:4},{default:e(()=>[_(g(L),{size:`small`,type:d.value.hasBasicData?`success`:`warning`},{default:e(()=>[...m[11]||=[t(`Basic data`,-1)]]),_:1},8,[`type`]),_(g(L),{size:`small`,type:d.value.hasErSheet?`success`:`warning`},{default:e(()=>[...m[12]||=[t(`ER sheet`,-1)]]),_:1},8,[`type`])]),_:1})]),s(`div`,null,[m[14]||=s(`div`,{class:`text-12px text-gray-500`},`Basic data!C8 / fNRB,b,y`,-1),s(`div`,De,i(d.value.fnrbValue??`未读取到`),1)]),s(`div`,null,[m[15]||=s(`div`,{class:`text-12px text-gray-500`},`规模与公式`,-1),s(`div`,Oe,i(d.value.basicDataSize)+` / `+i(d.value.erSheetSize),1),s(`div`,ke,`公式 `+i(d.value.basicFormulaCount+d.value.erFormulaCount)+` 个`,1)]),s(`div`,null,[m[17]||=s(`div`,{class:`text-12px text-gray-500`},`导入状态`,-1),_(g(L),{class:`mt-4px`,size:`small`,type:`warning`},{default:e(()=>[...m[16]||=[t(`已解析，待 Excel 对照复核`,-1)]]),_:1})])])):(r(),c(`div`,Ae,i(f.value),1))]),_:1})):v(``,!0),_(g(q),{cols:`s:2 m:3 l:6`,responsive:`screen`,"x-gap":16,"y-gap":16},{default:e(()=>[(r(),c(l,null,o(S,t=>_(g(K),{key:t.label},{default:e(()=>[_(g(R),{bordered:!1,size:`small`},{default:e(()=>[s(`div`,je,i(t.label),1),s(`div`,Me,i(t.value),1),s(`div`,Ne,i(t.sub),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),_(g(R),{bordered:!1,size:`small`,title:`Excel 工作簿来源`},{default:e(()=>[_(g(q),{cols:`s:1 m:3`,responsive:`screen`,"x-gap":16,"y-gap":12},{default:e(()=>[_(g(K),null,{default:e(()=>[s(`div`,{class:`source-box`},[m[18]||=s(`div`,{class:`text-12px text-gray-500`},`工作簿`,-1),s(`div`,{class:`mt-4px font-medium`},i($)),m[19]||=s(`div`,{class:`mt-4px text-12px text-gray-400`},`由方法学简化整理，作为平台计算引擎来源。`,-1)])]),_:1}),_(g(K),null,{default:e(()=>[...m[20]||=[s(`div`,{class:`source-box`},[s(`div`,{class:`text-12px text-gray-500`},`Basic data`),s(`div`,{class:`mt-4px font-medium`},`39 行 x 11 列，10 个公式`),s(`div`,{class:`mt-4px text-12px text-gray-400`},`HNb、Pb,mean、fNRB、Up,y、Ndisseminated。`)],-1)]]),_:1}),_(g(K),null,{default:e(()=>[...m[21]||=[s(`div`,{class:`source-box`},[s(`div`,{class:`text-12px text-gray-500`},`ER sheet`),s(`div`,{class:`mt-4px font-medium`},`169 行 x 22 列，70 个公式`),s(`div`,{class:`mt-4px text-12px text-gray-400`},`ERy、BEy、AEy、HEind、LEy 公式链。`)],-1)]]),_:1})]),_:1})]),_:1}),_(g(R),{bordered:!1,size:`small`,title:`计算流程`,class:`calc-steps-card`},{default:e(()=>[s(`div`,Pe,[_(g(_e),{class:`calc-steps`,current:2,status:`process`},{default:e(()=>[_(g(Q),{title:`输入数据快照`,description:`BKPT / 基线 / SUM / 炉灶台账`}),_(g(Q),{title:`参数与规则校验`,description:`fNRB、NCV、EF、阈值、证据状态`}),_(g(Q),{title:`核算模块计算`,description:`输入输出可审计，算法可替换`}),_(g(Q),{title:`Excel 对比`,description:`与甲方计算引擎逐项比对`}),_(g(Q),{title:`审核锁定`,description:`VVB 或甲方确认后生成正式版本`})]),_:1})])]),_:1}),_(g(R),{bordered:!1,size:`small`},{default:e(()=>[_(g(te),{value:a.value,"onUpdate:value":m[0]||=e=>a.value=e,type:`line`,animated:``},{default:e(()=>[_(g(H),{name:`chain`,tab:`公式链`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[22]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`字段`),s(`th`,null,`含义`),s(`th`,null,`Excel 单元格`),s(`th`,null,`公式`),s(`th`,null,`输出`),s(`th`,null,`状态`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(C,n=>s(`tr`,{key:n.key},[s(`td`,null,[s(`code`,null,i(n.key),1)]),s(`td`,null,i(n.meaning),1),s(`td`,null,[s(`code`,null,i(n.cell),1)]),s(`td`,null,[s(`code`,null,i(n.formula),1)]),s(`td`,null,i(n.output),1),s(`td`,null,[_(g(L),{size:`small`,type:A(n.status)},{default:e(()=>[t(i(n.status),1)]),_:2},1032,[`type`])])])),64))])]),_:1})]),_:1}),_(g(H),{name:`params`,tab:`参数库`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[23]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`参数`),s(`th`,null,`值`),s(`th`,null,`单位`),s(`th`,null,`来源`),s(`th`,null,`状态`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(w,n=>s(`tr`,{key:n.name},[s(`td`,null,[s(`code`,null,i(n.name),1)]),s(`td`,Fe,i(n.value),1),s(`td`,null,i(n.unit),1),s(`td`,null,i(n.source),1),s(`td`,null,[_(g(L),{size:`small`,type:A(n.status)},{default:e(()=>[t(i(n.status),1)]),_:2},1032,[`type`])])])),64))])]),_:1})]),_:1}),_(g(H),{name:`inputs`,tab:`输入引用`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[24]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`模块`),s(`th`,null,`输入内容`),s(`th`,null,`状态说明`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(T,e=>s(`tr`,{key:e.module},[s(`td`,null,i(e.module),1),s(`td`,null,i(e.content),1),s(`td`,null,i(e.risk),1)])),64))])]),_:1})]),_:1}),_(g(H),{name:`validation`,tab:`前置校验`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[25]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`级别`),s(`th`,null,`问题`),s(`th`,null,`建议`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(O,n=>s(`tr`,{key:n.issue},[s(`td`,null,[_(g(L),{size:`small`,type:n.severity===`error`?`error`:n.severity===`warning`?`warning`:`info`},{default:e(()=>[t(i(n.severity),1)]),_:2},1032,[`type`])]),s(`td`,null,i(n.issue),1),s(`td`,null,i(n.suggestion),1)])),64))])]),_:1})]),_:1}),_(g(H),{name:`results`,tab:`结果分解`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[26]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`结果项`),s(`th`,null,`测算值`),s(`th`,null,`单位`),s(`th`,null,`状态`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(k,n=>s(`tr`,{key:n.key},[s(`td`,null,[s(`code`,null,i(n.key),1)]),s(`td`,null,i(n.value),1),s(`td`,null,i(n.unit),1),s(`td`,null,[_(g(L),{size:`small`,type:A(n.status)},{default:e(()=>[t(i(n.status),1)]),_:2},1032,[`type`])])])),64))])]),_:1})]),_:1}),_(g(H),{name:`compare`,tab:`Excel对比`},{default:e(()=>[_(g(X),{bordered:!1,"single-line":!1,size:`small`},{default:e(()=>[m[27]||=s(`thead`,null,[s(`tr`,null,[s(`th`,null,`字段`),s(`th`,null,`平台值`),s(`th`,null,`Excel 单元格`),s(`th`,null,`公式`)])],-1),s(`tbody`,null,[(r(),c(l,null,o(E,e=>s(`tr`,{key:e.field},[s(`td`,null,[s(`code`,null,i(e.field),1)]),s(`td`,null,i(e.page),1),s(`td`,null,i(e.excel),1),s(`td`,null,i(e.diff),1)])),64))])]),_:1})]),_:1}),_(g(H),{name:`audit`,tab:`审计日志`},{default:e(()=>[_(g(Se),null,{default:e(()=>[(r(!0),c(l,null,o(D.value,e=>(r(),h(g(Ce),{key:`${e.time}-${e.title}`,type:e.type,title:e.title,content:e.content,time:e.time},null,8,[`type`,`title`,`content`,`time`]))),128))]),_:1})]),_:1})]),_:1},8,[`value`])]),_:1})]),_:1})}}}),[[`__scopeId`,`data-v-db9930de`]]);export{Ie as default};