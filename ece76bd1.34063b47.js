(window.webpackJsonp=window.webpackJsonp||[]).push([[90,16],{156:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(169),c=t(179),l=t(173),s=t(0),i=t.n(s),o=t(157),m=t.n(o),u=t(22),d=t(174);const h=[{num:1,title:"Beginner's Guide",iconName:"baby",description:i.a.createElement(i.a.Fragment,null,"Start here to learn the fundamentals."),link:"beginner"},{num:2,title:"Learning Path",iconName:"school",description:i.a.createElement(i.a.Fragment,null,"Learn our strategies gradually, level by level."),link:"learning_path"},{num:3,title:"Reference Document",iconName:"list-ul",description:i.a.createElement(i.a.Fragment,null,"Look up something specific."),link:"reference"}];function b({num:e,title:a,iconName:t,description:n,link:c}){const l=`fa fa-${t} fa-stack-1x fa-inverse`,s=`fa fa-circle fa-stack-2x accent${e}`;return i.a.createElement("div",{className:Object(r.a)("col col--4",m.a.feature)},l&&i.a.createElement("div",{className:"text--center"},i.a.createElement("br",null),i.a.createElement("a",{href:Object(d.a)(`docs/${c}`)},i.a.createElement("span",{className:"fa-stack fa-3x"},i.a.createElement("i",{className:s}),i.a.createElement("i",{className:l}))),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("h3",{className:"text--center"},i.a.createElement("a",{href:Object(d.a)(`docs/${c}`)},a)),i.a.createElement("p",{className:"text--center"},n))}a.default=function(){const e=Object(u.default)(),{siteConfig:a={}}=e;return i.a.createElement(c.a,{title:"Home",description:"Description will go into a meta tag in <head />"},i.a.createElement("header",{className:Object(r.a)("hero hero--primary",m.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("img",{src:Object(d.a)("img/hyphenated_circle.png")}),i.a.createElement("h1",{className:"hero__title"},a.title),i.a.createElement("p",{className:"hero__subtitle"},"Strategies for ",i.a.createElement("a",{href:"https://boardgamegeek.com/boardgame/98778/hanabi",target:"_blank",rel:"noopener noreferrer"},"Hanabi"),", a cooperative card game of logic and reasoning."),i.a.createElement("div",{className:m.a.buttons},i.a.createElement(l.a,{className:Object(r.a)("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(d.a)("docs/about")},"Learn More")))),i.a.createElement("main",null,h&&h.length>0&&i.a.createElement("section",{className:m.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},h.map(((e,a)=>i.a.createElement(b,Object(n.a)({key:a},e)))))))))}},180:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(177),l=t.n(c),s=t(170),i=t(22);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(s.useHistory)(),m=Object(i.default)().siteConfig,u=(void 0===m?{}:m).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(100),t.e(103)]).then(t.bind(null,186)),t.e(67).then(t.t.bind(null,185,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);