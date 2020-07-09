(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1026:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n(17),l=n.n(a),o=n(24),r=n.n(o),m=n(0),c=n.n(m),d=n(279),i=n(917),u=n.n(i),p={};function s(e){var t=e.components,n=r()(e,["components"]);return Object(d.mdx)("wrapper",l()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",l()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className)}>\n      <h1>\n        Themed block\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}s.isMDXComponent=!0;var f=n(862),h=n.n(f),_=function(e){var t=e.title,n=e.description,a=e.isExpanded;return c.a.createElement(h.a,{title:t||"Themed Component",description:n,example:c.a.createElement(u.a,null),exampleSrc:c.a.createElement(s,null),isExpanded:a})},b={};function x(e){var t=e.components,n=r()(e,["components"]);return Object(d.mdx)("wrapper",l()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"themecontext"},"ThemeContext"),Object(d.mdx)("p",null,"The ThemeContext defines an interface for access to the framework's current theme."),Object(d.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),Object(d.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"Note: An ThemeContextProvider is rendered by ",Object(d.mdx)("a",l()({parentName:"p"},{href:"/tbiethman/terra-application/components/terra-application/application/reference/components/application-base"}),"ApplicationBase"),".\nAny components rendered within ApplicationBase can access a ThemeContext without rendering additional providers.")),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)(_,{description:"This example pulls the current theme from the theme context and adds the theme class name to apply theme variables.",isExpanded:!0,mdxType:"ThemedComponent"}),Object(d.mdx)("h2",{id:"context-value"},"Context Value"),Object(d.mdx)("p",null,"The ThemeContext provides an object with the following values:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",l()({parentName:"tr"},{align:null}),"Key Name"),Object(d.mdx)("th",l()({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",l()({parentName:"tr"},{align:null}),"Is Required"),Object(d.mdx)("th",l()({parentName:"tr"},{align:null}),"DefaultValue"),Object(d.mdx)("th",l()({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",l()({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"className")),Object(d.mdx)("td",l()({parentName:"tr"},{align:null}),"String"),Object(d.mdx)("td",l()({parentName:"tr"},{align:null}),"optional"),Object(d.mdx)("td",l()({parentName:"tr"},{align:null}),"undefined"),Object(d.mdx)("td",l()({parentName:"tr"},{align:null}),"The current application theme className. The default theme is indicated as undefined or empty string.")))))}x.isMDXComponent=!0},862:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=u(n(1)),r=u(n(3)),m=n(110),c=u(n(863)),d=u(n(190)),i=u(n(864));function u(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,o=void 0;try{for(var r,m=e[Symbol.iterator]();!(a=(r=m.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==m.return||m.return()}finally{if(l)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=r.default.bind(i.default),_={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){var t=e.example,n=e.exampleSrc,a=e.title,o=e.description,r=e.isExpanded,i=s((0,l.useState)(r),2),u=i[0],p=i[1],f=s((0,l.useState)(!1),2),_=f[0],b=f[1],x=l.default.useContext(m.ThemeContext);return l.default.createElement("div",{className:h("template",x.className)},l.default.createElement("div",{className:h("header")},a&&l.default.createElement("h2",{className:h("title")},a)),l.default.createElement("div",{className:h("content",{"dynamic-content":_})},o&&l.default.createElement("div",{className:h("description")},o),t),n&&l.default.createElement("div",{className:h("footer")},l.default.createElement("div",{className:h("button-container")},l.default.createElement("button",{type:"button",className:h("bg-toggle"),onClick:function(){return b(!_)}},"Toggle Background"),l.default.createElement("button",{type:"button",className:h("code-toggle"),onClick:function(){return p(!u)}},l.default.createElement(c.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:h("chevron")}))),u&&l.default.createElement("div",{className:h("code")},n)))};b.propTypes=_,b.defaultProps={isExpanded:!1};var x=b;t.default=x},863:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(21));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=m;t.default=c},864:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},917:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),o=a(n(3)),r=n(110),m=a(n(918)),c=o.default.bind(m.default),d=function(){var e=l.default.useContext(r.ThemeContext);return l.default.createElement("div",{className:c("themed",e.className)},l.default.createElement("h1",null,"Themed block"),l.default.createElement("div",{className:c("themed-block")}))};t.default=d},918:function(e,t,n){e.exports={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___2reTL","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___2l4wU",themed:"ThemedComponent-module__themed___2Z_8D","themed-block":"ThemedComponent-module__themed-block___3Ntus"}}}]);
//# sourceMappingURL=49-4281e85e2836cabd437e.js.map