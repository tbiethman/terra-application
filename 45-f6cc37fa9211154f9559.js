(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1010:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(921)).default;t.default=l},871:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationPage=t.default=void 0;var u=l(a(74)),r=l(a(0)),o=l(a(67)),i=l(a(3)),d=l(a(53)),c=n(a(83)),f=a(188),s=l(a(861)),m=l(a(868)),p=l(a(872)),v=i.default.bind(p.default),E=["medium","large","huge","enormous"],g=function(e){var t=e.activePageKey,a=e.onRequestActivatePage,n=e.items,l=r.default.useContext(f.ActiveBreakpointContext),u="tiny"===l||"small"===l;return r.default.createElement(d.default,{header:r.default.createElement(m.default,{title:"Side Nav (?)"}),fill:!0},r.default.createElement(c.default,{dividerStyle:"standard",role:"listbox","aria-label":"It's Side Navigation"},n.map((function(e){return r.default.createElement(c.Item,{key:e.key,hasChevron:u,isSelectable:!0,isSelected:t===e.key,onSelect:function(){a(e.key)}},r.default.createElement("div",{style:{padding:"1rem"}},e.text))}))))},y=function(e){var t=e.sidebar,a=e.activePageKey,n=e.children,l=e.onRequestActivatePage,o=r.default.useState(!1),i=(0,u.default)(o,2),d=i[0],c=i[1],s=r.default.useContext(f.ActiveBreakpointContext),m=r.default.useRef(),p=r.default.useRef({}),y=r.default.useRef();function _(e){e!==a&&l(e)}return r.default.useLayoutEffect((function(){c(!0)}),[]),r.default.useLayoutEffect((function(){var e=p.current[a];if(m.current&&!m.current.contains(null==e?void 0:e.element)){var t;if(y.current)p.current[y.current].scrollOffset=(null===(t=p.current[y.current].element.querySelector("#application-page-main"))||void 0===t?void 0:t.scrollTop)||0,m.current.removeChild(p.current[y.current].element);if(null==e?void 0:e.element){m.current.appendChild(e.element);var n=e.element.querySelector("#application-page-main");n&&(n.scrollTop=e.scrollOffset||0),y.current=a,setTimeout((function(){document.body.focus()}),0)}else y.current=void 0}}),[a]),r.default.useEffect((function(){if(!a){var e=r.default.Children.map(n,(function(e){return e.props.pageKey}));Object.keys(p.current).filter((function(t){return!e.includes(t)})).forEach((function(e){delete p.current[e]})),E.indexOf(s)>=0&&l(e[0])}}),[a,s,n,l]),r.default.createElement("div",{className:v("side-nav-container",{"side-nav-is-open":!a})},r.default.createElement("div",{className:v("side-nav-sidebar")},t||r.default.createElement(g,{activePageKey:a,onRequestActivatePage:_,items:r.default.Children.map(n,(function(e){return{key:e.props.pageKey,text:e.props.description}}))})),r.default.createElement("div",{ref:m,className:v("side-nav-body")},d&&r.default.Children.map(n,(function(e){var t,n=null===(t=p.current[e.props.pageKey])||void 0===t?void 0:t.element;return n||((n=document.createElement("div")).style.position="relative",n.style.height="100%",n.style.width="100%",n.id="side-nav-".concat(e.props.pageKey),p.current[e.props.pageKey]={element:n}),r.default.cloneElement(e,{isActive:e.props.pageKey===a,onRequestActivatePage:_,portalElement:n})}))))};y.propTypes={};t.NavigationPage=function(e){e.isActive;var t,a=e.children,n=e.render,l=e.onRequestActivatePage,u=e.portalElement,i=r.default.useContext(f.ActiveBreakpointContext);t=n?n():a;var d=E.indexOf(i)<0;return o.default.createPortal(r.default.createElement(s.default,null,r.default.cloneElement(t,{onRequestClose:d?function(){l(void 0)}:void 0})),u)};var _=y;t.default=_},872:function(e,t,a){e.exports={"side-nav-container":"SideNavigationPageContainer-module__side-nav-container___vId34","side-nav-sidebar":"SideNavigationPageContainer-module__side-nav-sidebar___2Yyyg","side-nav-is-open":"SideNavigationPageContainer-module__side-nav-is-open___3ZUK5","side-nav-body":"SideNavigationPageContainer-module__side-nav-body___2PMyC"}},883:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=t.default=void 0;var u=l(a(74)),r=n(a(0)),o=l(a(1)),i=l(a(3)),d=l(a(142)),c=a(188),f=l(a(111)),s=a(187),m=a(84),p=l(a(866)),v=l(a(925)),E=i.default.bind(v.default),g=function(e){var t=e.name,a=e.onSubmit,n=e.content,l=(0,r.useContext)(c.ActiveBreakpointContext),o=(0,r.useContext)(s.ApplicationIntlContext),i=(0,r.useContext)(m.DisclosureManagerContext),v=(0,r.useState)(!1),g=(0,u.default)(v,2),y=g[0],_=g[1],h=(0,r.useState)(!1),b=(0,u.default)(h,2),P=b[0],S=b[1];if((0,r.useEffect)((function(){if(!P){var e=setTimeout((function(){S(!0)}),2e3);return function(){clearTimeout(e)}}}),[P]),!P)return r.default.createElement(r.default.Fragment,null,r.default.createElement(m.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(f.default,{isOpen:!0,backgroundStyle:"clear"}));if(y)throw new Error("Modal Page failed to render");return r.default.createElement(r.default.Fragment,null,r.default.createElement(m.DisclosureManagerHeaderAdapter,{title:t}),r.default.createElement(d.default,null,n||r.default.createElement("div",{className:E("modal-content")},r.default.createElement("h2",null,t),r.default.createElement("h3",null,"Modal Dismissal"),r.default.createElement("p",null,"This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed."),r.default.createElement("button",{type:"button",onClick:function(){i.registerDismissCheck(),a()}},"Done"),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,l)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,o.locale)),r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework."),r.default.createElement("button",{type:"button",onClick:function(){_(!0)}},"Throw Error"),r.default.createElement(p.default,null))))};t.ModalContent=g,g.propTypes={name:o.default.string,onSubmit:o.default.func};var y=function(e){var t=e.modalContent,a=(0,r.useContext)(m.DisclosureManagerContext),n=(0,r.useRef)();return r.default.createElement("div",null,r.default.createElement("h3",null,"Modal Presenter"),r.default.createElement("p",null,"This component uses the DisclosureManagerContext to present a modal."),r.default.createElement("button",{type:"button",onClick:function(){a.disclose({preferredType:"modal",size:"large",content:{key:"modal_component_demo",component:r.default.createElement(g,{name:"Modal Component Demo",onSubmit:function(){n.current&&(n.current(),n.current=void 0)},content:t})}}).then((function(e){var t=e.dismissDisclosure;n.current=t}))}},"Show Modal"))};t.default=y},887:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(74)),r=n(a(0)),o=l(a(1)),i=l(a(3)),d=a(188),c=l(a(111)),f=a(187),s=a(110),m=l(a(883)),p=l(a(866)),v=l(a(898)),E=l(a(899)),g=l(a(966)),y=i.default.bind(g.default),_=function(e){var t=e.pageName,a=(0,r.useState)(!1),n=(0,u.default)(a,2),l=n[0],o=n[1],i=(0,r.useContext)(d.ActiveBreakpointContext),g=(0,r.useContext)(f.ApplicationIntlContext),_=r.default.useContext(s.ThemeContext);return(0,r.useEffect)((function(){if(!l){var e=setTimeout((function(){o(!0)}),window.TEST_APP_TIMEOUT);return function(){clearTimeout(e)}}}),[l]),l?r.default.createElement("div",{className:y("page-content",_.className)},r.default.createElement("h1",null,t),r.default.createElement("h3",null,"Configuration Properties"),r.default.createElement("p",null,"Active Breakpoint:"," ",r.default.createElement("span",null,i)),r.default.createElement("p",null,"Intl Locale:"," ",r.default.createElement("span",null,g.locale)),r.default.createElement(E.default,null),r.default.createElement(v.default,null),r.default.createElement(m.default,null),r.default.createElement(p.default,null),r.default.createElement("h3",null,"Themeing"),r.default.createElement("p",null,"The div below uses the theme context to apply styling."),r.default.createElement("div",{className:y("themed-block")})):r.default.createElement(c.default,{isOpen:!0,backgroundStyle:"clear"})};_.propTypes={pageName:o.default.string};var h=_;t.default=h},893:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(74)),u=n(a(0)),r=n(a(865)),o=n(a(877)),i=n(a(897)),d=n(a(883)),c=n(a(866)),f=n(a(898)),s=n(a(899)),m=n(a(861)),p=n(a(954)),v=function e(t){var a=t.index,n=t.prefix,v=t.onRequestClose,E=u.default.useState((new Date).toLocaleString()),g=(0,l.default)(E,1)[0],y=u.default.useState(!1),_=(0,l.default)(y,2),h=(_[0],_[1],u.default.useState(!1)),b=(0,l.default)(h,2),P=b[0],S=b[1],C=u.default.useState(!1),x=(0,l.default)(C,2),k=x[0],w=x[1],M=u.default.useState(Math.random()),I=(0,l.default)(M,2),T=I[0],O=I[1];u.default.useEffect((function(){if(k){var e=setInterval((function(){O(Math.random())}),1e3);return function(){clearInterval(e)}}}),[k]);var N=[{key:"action-print",text:"Print",icon:u.default.createElement(o.default,null),onSelect:function(){return alert("Page ".concat(a," Printing"))}},{key:"action-tag",text:"Tag",icon:u.default.createElement(i.default,null),onSelect:function(){return alert("Page ".concat(a," Tagging"))}}];return u.default.createElement(r.default,{title:"".concat(n," - Page ").concat(a),onRequestClose:v,actions:N},u.default.createElement("div",{style:{padding:"1.5rem"}},u.default.createElement("h1",null,"Page"," ",a),u.default.createElement("p",null,"Initialized:"," ",g),u.default.createElement("button",{type:"button",onClick:function(){S(!0)}},"Show Page"," ",a+1),u.default.createElement("br",null),u.default.createElement("button",{type:"button",onClick:function(){w(!0)}},"Show Simple Page"),u.default.createElement("br",null),u.default.createElement(s.default,null),u.default.createElement(d.default,{modalContent:u.default.createElement(m.default,null,u.default.createElement(e,{prefix:"Modal",index:0}))}),u.default.createElement(c.default,null),u.default.createElement(f.default,null),P&&u.default.createElement(e,{prefix:n,index:a+1,onRequestClose:function(){S(!1)}}),k&&u.default.createElement(p.default,{onRequestClose:function(){w(!1)},simplePageState:T})))};t.default=v},898:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(74)),r=n(a(0)),o=l(a(111)),i=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),a=t[0],n=t[1],l=(0,r.useRef)();return(0,r.useEffect)((function(){return function(){window.clearTimeout(l.current)}}),[]),r.default.createElement("div",null,r.default.createElement("h3",null,"Loading Overlay Presenter"),r.default.createElement("p",null,"This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds."),r.default.createElement("p",null,r.default.createElement("button",{disabled:a,type:"button",onClick:function(){n(!0),l.current=setTimeout((function(){n(!1)}),2e3)}},"Show Loading Overlay")),r.default.createElement(o.default,{isOpen:a,backgroundStyle:"light"}))};t.default=i},899:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(74)),r=n(a(0)),o=function(){var e=(0,r.useState)(!1),t=(0,u.default)(e,2),a=t[0],n=t[1];if(a)throw new Error("Page threw an error to test the application's error handling");return r.default.createElement("div",null,r.default.createElement("h3",null,"Error Handling"),r.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework"),r.default.createElement("button",{type:"button",onClick:function(){n(!0)}},"Throw Error"))};o.propTypes={};var i=o;t.default=i},900:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(74)),r=l(a(0)),o=n(a(871)),i=l(a(893)),d=l(a(955)),c=l(a(873)),f=function(){var e=r.default.useState(),t=(0,u.default)(e,2),a=t[0],n=t[1];return r.default.createElement(o.default,{sidebar:r.default.createElement(d.default,{selectedItemKey:a,onSelectItem:function(e){n(e)}}),activeItemKey:a,itemKeys:["item-1","item-2","item-3"],onChangeActiveItem:function(e){n(e)}},r.default.createElement(o.NavigationPage,{pageKey:"item-1",render:function(){return r.default.createElement(i.default,{prefix:"Item 1",index:0})}}),r.default.createElement(o.NavigationPage,{pageKey:"item-2",render:function(){return r.default.createElement(i.default,{prefix:"Item 2",index:0})}}),r.default.createElement(o.NavigationPage,{pageKey:"item-3"},r.default.createElement(i.default,{prefix:"Item 3",index:0})),r.default.createElement(o.NavigationPage,{pageKey:"chart-summary"},r.default.createElement(c.default,null)))};t.default=f},921:function(e,t,a){"use strict";var n=a(4),l=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(0)),r=n(a(859)),o=a(187),i=n(a(286)),d=a(110),c=n(a(922));window.TEST_APP_TIMEOUT=1e3;var f=function(){var e=(0,u.useContext)(o.ApplicationIntlContext),t=u.default.useContext(d.ThemeContext);return u.default.createElement(r.default,{locale:e.locale,themeName:t.className},u.default.createElement(i.default,null,u.default.createElement(c.default,null)))};t.default=f},922:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(74)),r=l(a(12)),o=n(a(0)),i=l(a(923)),d=l(a(281)),c=a(84),f=a(883),s=l(a(926)),m=l(a(900)),p=l(a(962)),v=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(a(965))}))})),E=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(a(967))}))})),g=o.default.lazy((function(){return Promise.resolve().then((function(){return(0,r.default)(a(968))}))})),y={name:"Demo User",initials:"DU"},_=function(){var e,t=(0,o.useContext)(c.DisclosureManagerContext),a=(0,o.useState)("page_0"),n=(0,u.default)(a,2),l=n[0],r=n[1],_=(0,o.useState)(!1),h=(0,u.default)(_,2),b=h[0],P=h[1],S=(0,o.useRef)(),C=(0,o.useRef)([{key:"page_0",text:"Page Layout"},{key:"page_00",text:"Side Nav Layout"},{key:"page_000",text:"Workspace Layout"}]);if(b)return o.default.createElement("div",null,o.default.createElement("p",null,"Logged Out"),o.default.createElement("button",{type:"button",onClick:function(){P(!1)}},"Reset"));switch(l){case"page_0":e=o.default.createElement(s.default,null);break;case"page_00":e=o.default.createElement(m.default,null);break;case"page_000":e=o.default.createElement(p.default,null);break;case"page_1":e=o.default.createElement(v,null);break;case"page_2":e=o.default.createElement(E,null);break;case"page_3":e=o.default.createElement(g,null);break;default:e=null}return o.default.createElement(d.default,{titleConfig:{title:"Terra Application Demo"},userConfig:y,navigationItems:C.current,activeNavigationItemKey:l,onSelectNavigationItem:function(e){r(e)},extensionItems:[{key:"extension_1",icon:o.default.createElement(i.default,null),text:"Extension 1"}],onSelectExtensionItem:function(e){"extension_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"extension_1_modal",component:o.default.createElement(f.ModalContent,{name:"Extension Modal",onSubmit:function(){S.current&&(S.current(),S.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;S.current=t}))},utilityItems:[{key:"utility_1",text:"Utility Item 1"}],onSelectUtilityItem:function(e){"utility_1"===e&&t.disclose({preferredType:"modal",size:"large",content:{key:"utility_1_modal",component:o.default.createElement(f.ModalContent,{name:"Utility Modal",onSubmit:function(){S.current&&(S.current(),S.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;S.current=t}))},onSelectLogout:function(){P(!0)}},e)};t.default=_},923:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),l=u(a(21));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=r({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},925:function(e,t,a){e.exports={"modal-content":"ModalPresenter-module__modal-content___SFKI1"}},926:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(861)),r=n(a(893)),o=function(){return l.default.createElement(u.default,null,l.default.createElement(r.default,{prefix:"Item 1",index:0}))};t.default=o},954:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(865)),r=n(a(877)),o=function(e){var t=e.onRequestClose,a=e.simplePageState;return l.default.createElement(u.default,{title:"Simple Page",actions:[{key:"simple-page-print",icon:l.default.createElement(r.default,null),text:"Print",onSelect:function(){alert("Simple Page Print")}}],onRequestClose:t},l.default.createElement("div",{style:{padding:"1.5rem"}},l.default.createElement("p",null,"I am a simple page with props driven by the previous page."),l.default.createElement("div",null,l.default.createElement("span",null,"Prop value: "),a)))};t.default=o},955:function(e,t,a){"use strict";var n=a(12),l=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(a(0)),r=l(a(53)),o=n(a(83)),i=l(a(868)),d=a(188),c=function(e){var t=e.selectedItemKey,a=e.onSelectItem,n=u.default.useContext(d.ActiveBreakpointContext),l="tiny"===n||"small"===n;return u.default.createElement(r.default,{header:u.default.createElement(i.default,{title:"Side Nav"}),fill:!0},u.default.createElement(o.default,{dividerStyle:"standard",role:"listbox","aria-label":"SingleSelectList-label"},u.default.createElement(o.Item,{key:"item-1",hasChevron:l,isSelectable:!0,isSelected:"item-1"===t,onSelect:function(){a("item-1")}},u.default.createElement("div",{style:{padding:"1rem"}},"Item 1")),u.default.createElement(o.Item,{key:"item-2",hasChevron:l,isSelectable:!0,isSelected:"item-2"===t,onSelect:function(){a("item-2")}},u.default.createElement("div",{style:{padding:"1rem"}},"Item 2")),u.default.createElement(o.Item,{key:"item-3",hasChevron:l,isSelectable:!0,isSelected:"item-3"===t,onSelect:function(){a("item-3")}},u.default.createElement("div",{style:{padding:"1rem"}},"Item 3")),u.default.createElement(o.Item,{key:"chart-summary",hasChevron:l,isSelectable:!0,isSelected:"chart-summary"===t,onSelect:function(){a("chart-summary")}},u.default.createElement("div",{style:{padding:"1rem"}},"Chart Summary"))))};t.default=c},962:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(963)),r=n(a(900)),o=function(){return l.default.createElement(u.default,null,l.default.createElement(r.default,null))};t.default=o},963:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(3)),r=n(a(964)),o=u.default.bind(r.default),i=function(e){var t=e.workspace,a=e.children;return l.default.createElement("div",{className:o("workspace-layout")},l.default.createElement("div",{className:o("workspace-body")},a),l.default.createElement("div",{className:o("workspace-container")},t))};t.default=i},964:function(e,t,a){e.exports={"workspace-layout":"WorkspaceLayout-module__workspace-layout___1nRUZ","workspace-container":"WorkspaceLayout-module__workspace-container___wuILT","workspace-body":"WorkspaceLayout-module__workspace-body___2SAQY"}},965:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(887)),r=function(){return l.default.createElement(u.default,{pageName:"Page 1",pageKey:"page_1"})};t.default=r},966:function(e,t,a){e.exports={"clinical-lowlight-theme":"AppPage-module__clinical-lowlight-theme___wXa7X","orion-fusion-theme":"AppPage-module__orion-fusion-theme___2TpWf","page-content":"AppPage-module__page-content___3ZftJ","themed-block":"AppPage-module__themed-block___2us1N"}},967:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(887)),r=function(){return l.default.createElement(u.default,{pageName:"Page 2",pageKey:"page_2"})};t.default=r},968:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),u=n(a(887)),r=function(){return l.default.createElement(u.default,{pageName:"Page 3",pageKey:"page_3"})};t.default=r}}]);
//# sourceMappingURL=45-f6cc37fa9211154f9559.js.map