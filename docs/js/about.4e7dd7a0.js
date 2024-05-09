"use strict";(self["webpackChunkexships_homepage"]=self["webpackChunkexships_homepage"]||[]).push([[594],{22:function(e,t,l){l.r(t),l.d(t,{default:function(){return ue}});var n=l(6768),i=l(5130),a=l(4232),o=l(2586);const s=(0,o.G)("v-alert-title");var r=l(8088),d=l(7852),u=l(9669),c=l(2886),p=l(9262),v=l(2191),b=l(2542),m=l(7018),y=l(4581),f=l(5296),g=l(9788),k=l(8184),C=l(2067),F=l(3240),_=l(4663),S=l(7664),h=l(2428),x=l(144),I=l(4587),w=l(1247);const z=["success","info","warning","error"],V=(0,I.j)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:y.TX,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>z.includes(e)},...(0,p.u)(),...(0,v.r)(),...(0,b.X)(),...(0,m.s)(),...(0,g.M)(),...(0,k.S)(),...(0,F.S)(),...(0,_.X)(),...(0,S.yx)(),...(0,h.gI)({variant:"flat"})},"VAlert"),A=(0,w.RW)()({name:"VAlert",props:V(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:i}=t;const a=(0,C.q)(e,"modelValue"),o=(0,n.EW)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),p=(0,n.EW)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:y}=(0,S.NX)(e),{colorClasses:_,colorStyles:I,variantClasses:w}=(0,h.rn)(p),{densityClasses:z}=(0,v.Q)(e),{dimensionStyles:V}=(0,b.S)(e),{elevationClasses:A}=(0,m.j)(e),{locationStyles:W}=(0,g.z)(e),{positionClasses:X}=(0,k.J)(e),{roundedClasses:D}=(0,F.v)(e),{textColorClasses:B,textColorStyles:T}=(0,c.aH)((0,x.lW)(e,"borderColor")),{t:L}=(0,f.Ym)(),j=(0,n.EW)((()=>({"aria-label":L(e.closeLabel),onClick(e){a.value=!1,l("click:close",e)}})));return()=>{const t=!(!i.prepend&&!o.value),l=!(!i.title&&!e.title),c=!(!i.close&&!e.closable);return a.value&&(0,n.bF)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},y.value,_.value,z.value,A.value,X.value,D.value,w.value,e.class],style:[I.value,V.value,W.value,e.style],role:"alert"},{default:()=>[(0,h.wN)(!1,"v-alert"),e.border&&(0,n.bF)("div",{key:"border",class:["v-alert__border",B.value],style:T.value},null),t&&(0,n.bF)("div",{key:"prepend",class:"v-alert__prepend"},[i.prepend?(0,n.bF)(d.K,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},i.prepend):(0,n.bF)(u.w,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),(0,n.bF)("div",{class:"v-alert__content"},[l&&(0,n.bF)(s,{key:"title"},{default:()=>[i.title?.()??e.title]}),i.text?.()??e.text,i.default?.()]),i.append&&(0,n.bF)("div",{key:"append",class:"v-alert__append"},[i.append()]),c&&(0,n.bF)("div",{key:"close",class:"v-alert__close"},[i.close?(0,n.bF)(d.K,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[i.close?.({props:j.value})]}):(0,n.bF)(r.D,(0,n.v6)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},j.value),null)])]})}}});var W=l(6450),X=l(3524),D=l(8332),B=l(8374),T=l(9728),L=l(3813),j=l(6756),E=l(6938),N=l(7254),K=l(8477),$=l(8201),O=l(2858),R=l(4600),M=l(9094);const J=(0,I.j)({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...(0,p.u)(),...(0,v.r)(),...(0,_.X)(),...(0,S.yx)()},"VTimeline"),G=(0,w.RW)()({name:"VTimeline",props:J(),setup(e,t){let{slots:l}=t;const{themeClasses:i}=(0,S.NX)(e),{densityClasses:a}=(0,v.Q)(e),{rtlClasses:o}=(0,f.IA)();(0,O.Uh)({VTimelineDivider:{lineColor:(0,x.lW)(e,"lineColor")},VTimelineItem:{density:(0,x.lW)(e,"density"),lineInset:(0,x.lW)(e,"lineInset")}});const s=(0,n.EW)((()=>{const t=e.side?e.side:"default"!==e.density?"end":null;return t&&`v-timeline--side-${t}`})),r=(0,n.EW)((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return t;case"start":return t[0];case"end":return t[1];default:return null}}));return(0,R.C)((()=>(0,n.bF)(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,r.value,{"v-timeline--inset-line":!!e.lineInset},i.value,a.value,s.value,o.value,e.class],style:[{"--v-timeline-line-thickness":(0,M.Dg)(e.lineThickness)},e.style]},l))),{}}});var Q=l(3378);const U=(0,I.j)({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:y.TX,iconColor:String,lineColor:String,...(0,p.u)(),...(0,F.S)(),...(0,Q.k)(),...(0,m.s)()},"VTimelineDivider"),q=(0,w.RW)()({name:"VTimelineDivider",props:U(),setup(e,t){let{slots:l}=t;const{sizeClasses:i,sizeStyles:a}=(0,Q.X)(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:s}=(0,c.z6)((0,x.lW)(e,"dotColor")),{roundedClasses:r}=(0,F.v)(e,"v-timeline-divider__dot"),{elevationClasses:p}=(0,m.j)(e),{backgroundColorClasses:v,backgroundColorStyles:b}=(0,c.z6)((0,x.lW)(e,"lineColor"));return(0,R.C)((()=>(0,n.bF)("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[(0,n.bF)("div",{class:["v-timeline-divider__before",v.value],style:b.value},null),!e.hideDot&&(0,n.bF)("div",{key:"dot",class:["v-timeline-divider__dot",p.value,r.value,i.value],style:a.value},[(0,n.bF)("div",{class:["v-timeline-divider__inner-dot",s.value,r.value],style:o.value},[l.default?(0,n.bF)(d.K,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):(0,n.bF)(u.w,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),(0,n.bF)("div",{class:["v-timeline-divider__after",v.value],style:b.value},null)]))),{}}}),H=(0,I.j)({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:y.TX,iconColor:String,lineInset:[Number,String],...(0,p.u)(),...(0,b.X)(),...(0,m.s)(),...(0,F.S)(),...(0,Q.k)(),...(0,_.X)()},"VTimelineItem"),Y=(0,w.RW)()({name:"VTimelineItem",props:H(),setup(e,t){let{slots:l}=t;const{dimensionStyles:i}=(0,b.S)(e),a=(0,x.IJ)(0),o=(0,x.KR)();return(0,n.wB)(o,(e=>{e&&(a.value=e.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width??0)}),{flush:"post"}),(0,R.C)((()=>(0,n.bF)("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":(0,M.Dg)(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${(0,M.Dg)(e.lineInset)})`:(0,M.Dg)(0)},e.style]},[(0,n.bF)("div",{class:"v-timeline-item__body",style:i.value},[l.default?.()]),(0,n.bF)(q,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),"compact"!==e.density&&(0,n.bF)("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&l.opposite?.()])]))),{}}}),Z={key:0},P=["textContent"],ee=(0,n.Lk)("br",null,null,-1),te=["textContent"],le={key:1},ne=["textContent"],ie=(0,n.Lk)("br",null,null,-1),ae=["textContent"];function oe(e,t,l,o,s,r){const d=(0,n.g2)("v-subheader");return(0,n.uX)(),(0,n.Wv)(W.E,null,{default:(0,n.k6)((()=>[(0,n.bF)(K.Y,null,{default:(0,n.k6)((()=>[(0,n.bF)(X.z,{image:"https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg"},{prepend:(0,n.k6)((()=>[(0,n.bF)(D.Z,{variant:"text",onClick:t[0]||(t[0]=(0,i.D$)((t=>e.drawer=!e.drawer),["stop"]))})])),_:1}),(0,n.bF)($.e,{modelValue:e.drawer,"onUpdate:modelValue":t[1]||(t[1]=t=>e.drawer=t)},{default:(0,n.k6)((()=>[(0,n.bF)(E.x8,null,{default:(0,n.k6)((()=>[(0,n.bF)(N.g,{"prepend-icon":"mdi-ferry",title:"Home",value:"home",to:"/"}),(0,n.bF)(N.g,{"prepend-icon":"mdi-badge-account-horizontal-outline",title:"About",value:"about",onClick:r.hideDrawer,to:"/about"},null,8,["onClick"]),(0,n.bF)(N.g,{"prepend-icon":"mdi-domain",title:"Company",value:"company",to:"/company"}),(0,n.bF)(N.g,{"prepend-icon":"mdi-forum",title:"Contact",value:"contact",to:"/contact"})])),_:1})])),_:1},8,["modelValue"]),(0,n.bF)(L.I,{fluid:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("会社沿革")])),_:1}),(0,n.bF)(j.L,{"no-gutters":""},{default:(0,n.k6)((()=>[r.isMobile()?((0,n.uX)(),(0,n.CE)("div",Z,[(0,n.bF)(G,{side:"end"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.items,(e=>((0,n.uX)(),(0,n.Wv)(Y,{key:e.id,"dot-color":e.color,size:e.size},{default:(0,n.k6)((()=>[(0,n.bF)(A,{color:e.color,icon:e.icon,value:!0},{default:(0,n.k6)((()=>[(0,n.Lk)("strong",{class:"text-pre-wrap",textContent:(0,a.v_)(e.title)},null,8,P),ee,(0,n.Lk)("span",{textContent:(0,a.v_)(e.message),class:"text-pre-wrap"},null,8,te)])),_:2},1032,["color","icon"])])),_:2},1032,["dot-color","size"])))),128))])),_:1})])):((0,n.uX)(),(0,n.CE)("div",le,[(0,n.bF)(G,{direction:"horizontal"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.items,(e=>((0,n.uX)(),(0,n.Wv)(Y,{key:e.id,"dot-color":e.color,size:e.size},{default:(0,n.k6)((()=>[(0,n.bF)(A,{color:e.color,icon:e.icon,value:!0},{default:(0,n.k6)((()=>[(0,n.Lk)("strong",{class:"text-pre-wrap",textContent:(0,a.v_)(e.title)},null,8,ne),ie,(0,n.Lk)("span",{textContent:(0,a.v_)(e.message),class:"text-pre-wrap"},null,8,ae)])),_:2},1032,["color","icon"])])),_:2},1032,["dot-color","size"])))),128))])),_:1})]))])),_:1}),(0,n.bF)(j.L,{"no-gutters":""},{default:(0,n.k6)((()=>[(0,n.bF)(B.J,{"append-icon":"mdi-open-in-new",class:"mx-auto",href:"https://twitter.com/KeitaKozuka","max-width":"360","prepend-icon":"mdi-alpha-x-box",rel:"noopener",subtitle:"DMからお気軽にお問い合わせください",target:"_blank",title:"代表のX"})])),_:1}),(0,n.bF)(j.L,{class:"pa-4"},{default:(0,n.k6)((()=>[(0,n.bF)(B.J,{"append-icon":"mdi-open-in-new",class:"mx-auto",href:"https://www.facebook.com/keita.kozuka","max-width":"360","prepend-icon":"mdi-facebook",rel:"noopener",subtitle:"DMからお気軽にお問い合わせください",target:"_blank",title:"代表のFacebook"})])),_:1})])),_:1}),(0,n.bF)(T.O,{color:"primary",app:""},{default:(0,n.k6)((()=>[(0,n.eW)(" © 2020 - 2024 exships LLC. ")])),_:1})])),_:1})])),_:1})}var se={data:()=>({items:[{id:1,color:"primary",icon:"mdi-account",size:"small",title:"創業前",message:"超大手結婚アプリ開発\n超大手住宅アプリ開発\n超大手受験アプリ開発\n大手クラウドソーシングアプリ開発"},{id:2,color:"red darken-1",icon:"mdi-domain",size:"large",title:"設立",message:"個人事業主から法人成り\n合同会社エクスシップス設立"},{id:3,color:"primary",icon:"mdi-plus",size:"default",title:"社員雇用開始",message:"コロナ禍もありリモートワーク制度導入\nDjangoでホームページ運用開始"},{id:4,color:"red darken-1",icon:"mdi-devices",size:"large",title:"実績",message:"地域活性化アプリ自社開発\n大手小売店アプリ開発\n大手ペイメントアプリ開発"},{id:5,color:"primary",icon:"mdi-airplane",size:"large",title:"現在",message:"Vueでホームページをリプレイス\nFlutter学習を支援\nITによる社会のさらなる発展を目指します"}],drawer:null}),methods:{hideDrawer:function(){this.drawer=!1},isMobile:function(){var e=window.navigator.userAgent.toLowerCase();return-1!=e.indexOf("iphone")||-1!=e.indexOf("ipad")||-1!=e.indexOf("android")||-1!=e.indexOf("mobile")}}},re=l(1241);const de=(0,re.A)(se,[["render",oe]]);var ue=de},8374:function(e,t,l){l.d(t,{J:function(){return T}});var n=l(6768),i=l(9262),a=l(2858),o=l(1247),s=l(4600);const r=(0,o.RW)()({name:"VCardActions",props:(0,i.u)(),setup(e,t){let{slots:l}=t;return(0,a.Uh)({VBtn:{slim:!0,variant:"text"}}),(0,s.C)((()=>(0,n.bF)("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}});var d=l(2586);const u=(0,d.G)("v-card-subtitle");var c=l(1606),p=l(3416),v=l(7852),b=l(9669),m=l(2191),y=l(4581),f=l(4587);const g=(0,f.j)({appendAvatar:String,appendIcon:y.TX,prependAvatar:String,prependIcon:y.TX,subtitle:[String,Number],title:[String,Number],...(0,i.u)(),...(0,m.r)()},"VCardItem"),k=(0,o.RW)()({name:"VCardItem",props:g(),setup(e,t){let{slots:l}=t;return(0,s.C)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),i=!(!t&&!l.prepend),a=!(!e.appendAvatar&&!e.appendIcon),o=!(!a&&!l.append),s=!(null==e.title&&!l.title),r=!(null==e.subtitle&&!l.subtitle);return(0,n.bF)("div",{class:["v-card-item",e.class],style:e.style},[i&&(0,n.bF)("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?(0,n.bF)(v.K,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):(0,n.bF)(n.FK,null,[e.prependAvatar&&(0,n.bF)(p.y,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&(0,n.bF)(b.w,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),(0,n.bF)("div",{class:"v-card-item__content"},[s&&(0,n.bF)(c.r,{key:"title"},{default:()=>[l.title?.()??e.title]}),r&&(0,n.bF)(u,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),o&&(0,n.bF)("div",{key:"append",class:"v-card-item__append"},[l.append?(0,n.bF)(v.K,{key:"append-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):(0,n.bF)(n.FK,null,[e.appendIcon&&(0,n.bF)(b.w,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&(0,n.bF)(p.y,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}});var C=l(697),F=l(5126),_=l(9923),S=l(2542),h=l(7018),x=l(773),I=l(9788),w=l(8184),z=l(3240),V=l(6314),A=l(4663),W=l(7664),X=l(2428),D=l(759);const B=(0,f.j)({appendAvatar:String,appendIcon:y.TX,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y.TX,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...(0,_.r)(),...(0,i.u)(),...(0,m.r)(),...(0,S.X)(),...(0,h.s)(),...(0,x.gi)(),...(0,I.M)(),...(0,w.S)(),...(0,z.S)(),...(0,V.WC)(),...(0,A.X)(),...(0,W.yx)(),...(0,X.gI)({variant:"elevated"})},"VCard"),T=(0,o.RW)()({name:"VCard",directives:{Ripple:D.n},props:B(),setup(e,t){let{attrs:l,slots:i}=t;const{themeClasses:a}=(0,W.NX)(e),{borderClasses:o}=(0,_.M)(e),{colorClasses:d,colorStyles:u,variantClasses:c}=(0,X.rn)(e),{densityClasses:p}=(0,m.Q)(e),{dimensionStyles:b}=(0,S.S)(e),{elevationClasses:y}=(0,h.j)(e),{loaderClasses:f}=(0,x.pn)(e),{locationStyles:g}=(0,I.z)(e),{positionClasses:A}=(0,w.J)(e),{roundedClasses:D}=(0,z.v)(e),B=(0,V.iE)(e,l),T=(0,n.EW)((()=>!1!==e.link&&B.isLink.value)),L=(0,n.EW)((()=>!e.disabled&&!1!==e.link&&(e.link||B.isClickable.value)));return(0,s.C)((()=>{const t=T.value?"a":e.tag,l=!(!i.title&&null==e.title),s=!(!i.subtitle&&null==e.subtitle),m=l||s,_=!!(i.append||e.appendAvatar||e.appendIcon),S=!!(i.prepend||e.prependAvatar||e.prependIcon),h=!(!i.image&&!e.image),I=m||S||_,w=!(!i.text&&null==e.text);return(0,n.bo)((0,n.bF)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},a.value,o.value,d.value,p.value,y.value,f.value,A.value,D.value,c.value,e.class],style:[u.value,b.value,g.value,e.style],href:B.href.value,onClick:L.value&&B.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[h&&(0,n.bF)("div",{key:"image",class:"v-card__image"},[i.image?(0,n.bF)(v.K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},i.image):(0,n.bF)(F.y,{key:"image-img",cover:!0,src:e.image},null)]),(0,n.bF)(x.E2,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:i.loader}),I&&(0,n.bF)(k,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),w&&(0,n.bF)(C.O,{key:"text"},{default:()=>[i.text?.()??e.text]}),i.default?.(),i.actions&&(0,n.bF)(r,null,{default:i.actions}),(0,X.wN)(L.value,"v-card")]}),[[(0,n.gN)("ripple"),L.value&&e.ripple]])})),{}}})},697:function(e,t,l){l.d(t,{O:function(){return i}});var n=l(2586);const i=(0,n.G)("v-card-text")},1606:function(e,t,l){l.d(t,{r:function(){return i}});var n=l(2586);const i=(0,n.G)("v-card-title")}}]);
//# sourceMappingURL=about.4e7dd7a0.js.map