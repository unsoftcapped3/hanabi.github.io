"use strict";(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6187],{433:function(e,t,l){l.d(t,{Z:function(){return n}});var r=l(7294),a=l(4334),i="tabItem_Ymn6";function n(e){var t=e.children,l=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,n),hidden:l},t)}},2808:function(e,t,l){l.d(t,{Z:function(){return E}});var r=l(3117),a=l(7294),i=l(4334),n=l(3735),s=l(6775),c=l(4423),o=l(636),u=l(9200);function m(e){return function(e){var t,l;return null!=(t=null==(l=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,l=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(l);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,l])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,l=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),n=function(e){var t=e.queryString,l=void 0!==t&&t,r=e.groupId;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:l,groupId:r});return[(0,c._X)(n),(0,a.useCallback)((function(e){if(n){var t=new URLSearchParams(i.location.search);t.set(n,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[n,i])]}function f(e){var t,l,r,i,n=e.defaultValue,s=e.queryString,c=void 0!==s&&s,o=e.groupId,m=h(e),f=(0,a.useState)((function(){return function(e){var t,l=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!d({value:l,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:m})})),p=f[0],y=f[1],v=g({queryString:c,groupId:o}),x=v[0],b=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:o}.groupId),l=(0,u.Nk)(t),r=l[0],i=l[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),E=w[0],k=w[1],N=function(){var e=null!=x?x:E;return d({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){N&&y(N)}),[N]),{selectedValue:p,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),b(e),k(e)}),[b,k,m]),tabValues:m}}var p=l(5730),y="tabList__CuJ",v="tabItem_LNqP";function x(e){var t=e.className,l=e.block,s=e.selectedValue,c=e.selectValue,o=e.tabValues,u=[],m=(0,n.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,l=u.indexOf(t),r=o[l].value;r!==s&&(m(t),c(r))},d=function(e){var t,l=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;l=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var i,n=u.indexOf(e.currentTarget)-1;l=null!=(i=u[n])?i:u[u.length-1]}null==(t=l)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},t)},o.map((function(e){var t=e.value,l=e.label,n=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:h},n,{className:(0,i.Z)("tabs__item",v,null==n?void 0:n.className,{"tabs__item--active":s===t})}),null!=l?l:t)})))}function b(e){var t=e.lazy,l=e.children,r=e.selectedValue,i=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){var n=i.find((function(e){return e.props.value===r}));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y)},a.createElement(x,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function E(e){var t=(0,p.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},2274:function(e,t,l){l.r(t),l.d(t,{assets:function(){return Qe},contentTitle:function(){return Ze},default:function(){return Fe},frontMatter:function(){return Ve},metadata:function(){return De},toc:function(){return ze}});var r,a,i,n,s,c,o,u,m,h,d,g,f,p,y,v,x,b,w,E,k,N,O,T,H=l(3117),q=l(102),j=l(7294),I=l(3905),S=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},C.apply(this,arguments)}function _(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var B,A,P,V,Z,D,Q,z,L,F,M,X,G,R,U,W,Y,J,K,$,ee,te,le=function(e){var t=e.title,l=e.titleId,H=_(e,S);return j.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 866 378",width:866,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,r||(r=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-1_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red3.svg"})),i||(i=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow5.svg"})),n||(n=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green5.svg"})),s||(s=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),c||(c=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple4.svg"})),j.createElement("svg",C({height:100,width:90,x:464,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",C({height:100,width:70,x:554,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,m||(m=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",C({height:100,width:70,x:632,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,h||(h=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",C({height:100,width:70,x:710,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,d||(d=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),g||(g=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),f||(f=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red4.svg"})),j.createElement("svg",C({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),p||(p=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green3.svg",y:125})),y||(y=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),v||(v=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red5.svg",y:125})),x||(x=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),b||(b=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/purple5.svg",y:125})),w||(w=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),E||(E=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue5.svg",y:125})),j.createElement("svg",C({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":l},H),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red2.svg",y:250})),N||(N=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/red1.svg",y:250})),O||(O=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow4.svg",y:250})),T||(T=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/yellow3.svg",y:250})))},re=["title","titleId"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},ae.apply(this,arguments)}function ie(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var ne,se,ce,oe,ue,me,he,de,ge,fe,pe,ye,ve,xe,be,we,Ee,ke,Ne,Oe,Te,He,qe,je=function(e){var t=e.title,l=e.titleId,r=ie(e,re);return j.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 866 378",width:866,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,B||(B=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-2_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),A||(A=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red3.svg"})),P||(P=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow4.svg"})),V||(V=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green4.svg"})),Z||(Z=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue4.svg"})),D||(D=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple4.svg"})),j.createElement("svg",ae({height:100,width:90,x:464,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),Q||(Q=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),z||(z=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",ae({height:100,width:70,x:554,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,L||(L=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",ae({height:100,width:70,x:632,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,F||(F=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),M||(M=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:-3})),X||(X=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow5.svg"})),G||(G=j.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),R||(R=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/green5.svg"})),j.createElement("svg",ae({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),U||(U=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red4.svg",y:125})),W||(W=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),Y||(Y=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/blue2.svg",y:125})),J||(J=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:125})),j.createElement("svg",ae({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),K||(K=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple2.svg",y:250})),$||($=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple1.svg",y:250})),ee||(ee=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow4.svg",y:250})),te||(te=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/red5.svg",y:250})))},Ie=["title","titleId"];function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},Se.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var _e=function(e){var t=e.title,l=e.titleId,r=Ce(e,Ie);return j.createElement("svg",Se({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 866 375",width:866,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,ne||(ne=j.createElement("defs",null,j.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-3_yml__a"},j.createElement("feFlood",{floodColor:"#0ff"})))),se||(se=j.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red2.svg"})),ce||(ce=j.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow5.svg"})),oe||(oe=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green5.svg"})),ue||(ue=j.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue5.svg"})),me||(me=j.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple5.svg"})),j.createElement("svg",Se({height:100,width:90,x:464,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),he||(he=j.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),de||(de=j.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),j.createElement("svg",Se({height:100,width:70,x:554,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,ge||(ge=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Se({height:100,width:70,x:632,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,fe||(fe=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Se({height:100,width:70,x:710,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,pe||(pe=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Se({height:100,width:70,x:788,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,ye||(ye=j.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),j.createElement("svg",Se({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),ve||(ve=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/purple2.svg",y:125})),xe||(xe=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue1.svg",y:125})),be||(be=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/red5.svg",y:125})),we||(we=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:125})),j.createElement("svg",Se({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":l},r),t?j.createElement("title",{id:l},t):null,j.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),Ee||(Ee=j.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),ke||(ke=j.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/purple1.svg",y:250})),Ne||(Ne=j.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/yellow4.svg",y:250})),Oe||(Oe=j.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/blue3.svg",y:250})),Te||(Te=j.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),He||(He=j.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/red3.svg",y:170})),qe||(qe=j.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},Be=l(2808),Ae=l(433),Pe=["components"],Ve={id:"level-8",title:"Level 8 Challenge Questions"},Ze=void 0,De={unversionedId:"challenge-questions/level-8",id:"challenge-questions/level-8",title:"Level 8 Challenge Questions",description:"These questions are for level 8 strategies.",source:"@site/docs/challenge-questions/level-8.mdx",sourceDirName:"challenge-questions",slug:"/challenge-questions/level-8",permalink:"/docs/challenge-questions/level-8",draft:!1,editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/challenge-questions/level-8.mdx",tags:[],version:"current",frontMatter:{id:"level-8",title:"Level 8 Challenge Questions"},sidebar:"mainSidebar",previous:{title:"Level 2 Challenge Questions",permalink:"/docs/challenge-questions/level-2"},next:{title:"Convention Attribution",permalink:"/docs/convention-attribution"}},Qe={},ze=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2}],Le={toc:ze};function Fe(e){var t=e.components,l=(0,q.Z)(e,Pe);return(0,I.kt)("wrapper",(0,H.Z)({},Le,l,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("p",null,"These questions are for ",(0,I.kt)("a",{parentName:"p",href:"../level-8"},"level 8")," strategies."),(0,I.kt)("h2",{id:"question-1"},"Question 1"),(0,I.kt)(Be.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(Ae.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"There are 3 cards left in the deck, and no clues available. All remaining useful cards are gotten."),(0,I.kt)("li",{parentName:"ul"},"Bob knows the identity of all of his clued cards."),(0,I.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,I.kt)(Ae.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"It might be tempting for Alice to play her red 4 to allow Bob to play his red 5. However, doing this will lose the game."),(0,I.kt)("li",{parentName:"ul"},"This is because the limiting factor is Bob's ability to play all of his 5s before the end of the game. For this to happen, the team needs clues in order to stall. Discarding gives back a clue, but playing the 4 does not."),(0,I.kt)("li",{parentName:"ul"},"Thus, it is correct for Alice to discard on this turn, holding on to the red 4 for later.")))),(0,I.kt)(le,{mdxType:"Question1"}),(0,I.kt)("h2",{id:"question-2"},"Question 2"),(0,I.kt)(Be.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(Ae.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"There are 5 cards left in the deck, and 3 clues available. The only clued cards are Alice's 5s."),(0,I.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,I.kt)(Ae.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"It might be tempting for Alice to clue red to Cathy, which would be a ",(0,I.kt)("em",{parentName:"li"},"Finesse")," on the red 4. However, doing so would risk losing the game."),(0,I.kt)("li",{parentName:"ul"},"This is because it is possible that Alice will draw the blue 5 and the purple 5. If she did, then she would have to play 4 cards in total. If Alice clues on this turn, then it would be impossible to play all 4 cards (because the game will end."),(0,I.kt)("li",{parentName:"ul"},"Instead, it is correct for Alice to play yellow 5 or green 5, letting Bob save the red 5, and Cathy getting the red 4.")))),(0,I.kt)(je,{mdxType:"Question2"}),(0,I.kt)("h2",{id:"question-3"},"Question 3"),(0,I.kt)(Be.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(Ae.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"There are 2 cards left in the deck, and 3 clues available. No one has any clued cards."),(0,I.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,I.kt)(Ae.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Alice sees the red 3 in Cathy's hand and the red 5 in Bob's hand."),(0,I.kt)("li",{parentName:"ul"},"If Alice has the red 4 in her hand, then the situation is simple: the team will clue the red cards and then play them."),(0,I.kt)("li",{parentName:"ul"},"On the other hand, it is possible that both red 4s are still in the deck. In this case, there would be no time to play the 5 after playing the 4."),(0,I.kt)("li",{parentName:"ul"},"Thus, Alice should discard. She is guaranteed to either have had a red 4 in her hand, or to draw one of the copies.",(0,I.kt)("ul",{parentName:"li"},(0,I.kt)("li",{parentName:"ul"},"(For the purposes of this example, we assume that it is extremely unlikely for Alice to be discarding the red 4, since the team would have likely ",(0,I.kt)("em",{parentName:"li"},"Chop Moved")," it earlier on.)"))),(0,I.kt)("li",{parentName:"ul"},"After Alice discards, Bob can ",(0,I.kt)("em",{parentName:"li"},"Finesse")," the red 3 by cluing Alice's red 4, and then the red 5 can play in the subsequent round.")))),(0,I.kt)(_e,{mdxType:"Question3"}))}Fe.isMDXComponent=!0},3905:function(e,t,l){l.d(t,{kt:function(){return h}});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=o(l),d=a,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return l?r.createElement(g,n(n({ref:t},m),{},{components:l})):r.createElement(g,n({ref:t},m))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,n=new Array(i);n[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var o=2;o<i;o++)n[o]=l[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);