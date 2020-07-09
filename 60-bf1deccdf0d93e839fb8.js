(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1030:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(17),o=n.n(a),r=n(24),i=n.n(r),l=(n(0),n(279)),d=n(857),p=n.n(d),m=function(){return Object(l.mdx)(p.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within\nthese child components will be registered to this NavigationPromptCheckpoint instance."))}return t.isMDXComponent=!0,t({})}},{name:"onPromptChange",type:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=i()(t,["components"]);return Object(l.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.\nThis can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.\nThe function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty\nArray will be provided when no prompts are registered."),Object(l.mdx)("p",null,"Function Example:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{}),"(arrayOfPrompts) => {\n  arrayOfPrompts.forEach((prompt) => {\n    console.log(prompt.description);\n    console.log(prompt.metaData);\n  })\n  this.myLocalPromptRegistry = arrayOfPrompts;\n}\n")))}return t.isMDXComponent=!0,t({})}}]})},c={};function s(e){var t=e.components,n=i()(e,["components"]);return Object(l.mdx)("wrapper",o()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"navigationpromptcheckpoint"},"NavigationPromptCheckpoint"),Object(l.mdx)("p",null,"The NavigationPromptCheckpoint serves as a registration gateway for ",Object(l.mdx)("a",o()({parentName:"p"},{href:"/components/terra-application/application/reference/components/navigation-prompt"}),"NavigationPrompts"),"\nrendered within it. Any NavigationPrompt rendered within the context of a NavigationPromptCheckpoint will register itself with the NavigationPromptCheckpoint\n(and any other anscestor checkpoints). The component that implements the NavigationPromptCheckpoint can use the presence of registered NavigationPrompts to\ninfluence its navigational workflows as necessary."),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import { NavigationPromptCheckpoint } from 'terra-application/lib/navigation-prompt';\n")),Object(l.mdx)("h2",{id:"props"},"Props"),Object(l.mdx)(m,{mdxType:"NavigationPromptCheckpointProps"}),Object(l.mdx)("h2",{id:"details"},"Details"),Object(l.mdx)("p",null,"Any component that navigates between stateful child components should render NavigationPromptCheckpoints around those children.\nEach NavigationPrompt rendered by a child will be registered to the NavigationPromptCheckpoints above it in the component tree.\nThe implementer of each NavigationPromptCheckpoint can use the registered data to prompt the user before navigating or prevent navigation altogether."),Object(l.mdx)("h3",{id:"onpromptchange"},Object(l.mdx)("inlineCode",{parentName:"h3"},"onPromptChange")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," function prop is used to communicate NavigationPrompt registrations to the implementer of a NavigationPromptCheckpoint.\nThe function is called with an array of objects containing each registered NavigationPrompt's ",Object(l.mdx)("inlineCode",{parentName:"p"},"description")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"metaData")," properties."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"Note: The ",Object(l.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop will be called after each NavigationPrompt registration and removal.\nIt may be called more than once with the same array of NavigationPrompt data. Calls to ",Object(l.mdx)("inlineCode",{parentName:"p"},"setState")," within onPromptChange\nshould be performed only when necessary to minimize component updates.")),Object(l.mdx)("h3",{id:"resolveprompts"},Object(l.mdx)("inlineCode",{parentName:"h3"},"resolvePrompts")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function can be accessed from the ref to a NavigationPromptCheckpoint. Calling ",Object(l.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," results in a\nPromise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action.\nIf the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action,\nthe dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and\nthe returned Promise will be resolved."),Object(l.mdx)("p",null,Object(l.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," accepts either an Object or function argument. The Object should contain the text strings used to render the NotificationDialog.\nThe function should return an Object containing the text strings used to render the NotificationDialog. Additionally, the function will receive\nan array of registered NavigationPrompts as an argument. The array of prompts can be used to create dynamic strings based on the current set of registered prompts."),Object(l.mdx)("p",null,"The keys expected in the resolvePrompts Object or return value include:"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",o()({parentName:"tr"},{align:null}),"Key"),Object(l.mdx)("th",o()({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",o()({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"title")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The title of the NotificationDialog.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"startMessage")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The starting message of the NotificationDialog.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"content")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"Node"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The content of the NotificationDialog.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"endMessage")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The ending message of the NotificationDialog.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"acceptButtonText")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The text to render within the NotificationDialog's accept button.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"rejectButtonText")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"The text to render within the NotificationDialog's reject button.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"buttonOrder")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"A string indicating which action should be rendered first, required. Supported values include: ",Object(l.mdx)("inlineCode",{parentName:"td"},"acceptFirst"),", ",Object(l.mdx)("inlineCode",{parentName:"td"},"rejectFirst"),".")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"emphasizedAction")),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",o()({parentName:"tr"},{align:null}),"A string indicating which action should be rendered as emphasized. Supported values include: ",Object(l.mdx)("inlineCode",{parentName:"td"},"accept"),", ",Object(l.mdx)("inlineCode",{parentName:"td"},"reject"),", and ",Object(l.mdx)("inlineCode",{parentName:"td"},"none"),". Defaults to ",Object(l.mdx)("inlineCode",{parentName:"td"},"none"),".")))),Object(l.mdx)("p",null,"A utility function called ",Object(l.mdx)("inlineCode",{parentName:"p"},"getUnsavedChangesPromptOptions")," allows direct consumers of the NavigationPromptCheckpoint\nto match the prompt messaging provided by the components within ",Object(l.mdx)("inlineCode",{parentName:"p"},"terra-application"),"."),Object(l.mdx)("pre",null,Object(l.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext, useRef } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\nimport { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from 'terra-application/lib/navigation-prompt';\n\nconst ExampleComponent = () => {\n  const checkpointRef = useRef();\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  function resolvePrompts() {\n    checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => { ... });\n  }\n\n  return (\n    <NavigationPromptCheckpoint\n      ref={checkpointRef}\n    >\n      {...}\n    </NavigationPromptCheckpoint>\n  );\n}\n")))}s.isMDXComponent=!0},857:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=p(n(1)),i=p(n(3)),l=n(110),d=p(n(858));function p(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}var c=i.default.bind(d.default),s={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},u=function(e){var t=e.rows,n=(0,o.useContext)(l.ThemeContext);return o.default.createElement("table",{className:c("table",n.className)},o.default.createElement("thead",null,o.default.createElement("tr",{className:c("tr")},o.default.createElement("th",{className:c("th")},"Prop Name"),o.default.createElement("th",{className:c("th")},"Type"),o.default.createElement("th",{className:c("th")},"Is Required"),o.default.createElement("th",{className:c("th")},"Default Value"),o.default.createElement("th",{className:c("th")},"Description"))),o.default.createElement("tbody",null,t.map((function(e){return o.default.createElement("tr",{className:c("tr","props-tr"),key:e.name},o.default.createElement("td",{className:c(["td","strong","props-td"])},e.name),o.default.createElement("td",{className:c(["td","props-td"])},e.type()),o.default.createElement("td",{className:c(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),o.default.createElement("td",{className:c(["td","props-td"])},e.defaultValue),o.default.createElement("td",{className:c(["td","props-td"])},e.description()))}))))};u.propTypes=s;var b=u;t.default=b},858:function(e,t,n){e.exports={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3s97-","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___1kDLT",a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}}}]);
//# sourceMappingURL=60-bf1deccdf0d93e839fb8.js.map