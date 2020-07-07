(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(1)),r=i(n(3)),p=i(n(857));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(p.default),c={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},d=function(e){var t=e.rows;return a.default.createElement("table",{className:l("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:l("tr")},a.default.createElement("th",{className:l("th")},"Prop Name"),a.default.createElement("th",{className:l("th")},"Type"),a.default.createElement("th",{className:l("th")},"Is Required"),a.default.createElement("th",{className:l("th")},"Default Value"),a.default.createElement("th",{className:l("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:l(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:l(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:l(["td","props-td"])},e.type()),a.default.createElement("td",{className:l(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:l(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:l(["td","props-td"])},e.description()))}))))};d.propTypes=c;var s=d;t.default=s},857:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},944:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(18),o=n.n(a),r=n(24),p=n.n(r),i=(n(0),n(281)),l=n(856),c=n.n(l),d=function(){return Object(i.mdx)(c.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The components to render within ApplicationBase."))}return t.isMDXComponent=!0,t({})}},{name:"locale",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The locale name to be used to load translated messages.\nIf the ",Object(i.mdx)("inlineCode",{parentName:"p"},"locale")," prop is not provided, the preferred language from the browser will be used."))}return t.isMDXComponent=!0,t({})}},{name:"customTranslatedMessages",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"custom"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Custom translations for the current locale."))}return t.isMDXComponent=!0,t({})}},{name:"translationsLoadingPlaceholder",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The component to render while the translation files are being retrieved.\nNOTE: Absolutely no locale-dependent logic should be\nutilized in this placeholder."))}return t.isMDXComponent=!0,t({})}},{name:"themeName",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"The name of the theme to apply to the application using terra-theme-provider."))}return t.isMDXComponent=!0,t({})}},{name:"fitToParentIsDisabled",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"By default, the elements rendered by ApplicationBase are fit to the Application's parent using 100% height.\nIf ",Object(i.mdx)("inlineCode",{parentName:"p"},"fitToParentIsDisabled")," is provided, the Application will render at its intrinsic content height and\noverflow potentially overflow its parent."))}return t.isMDXComponent=!0,t({})}},{name:"unloadPromptIsDisabled",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(i.mdx)("wrapper",o()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"By default, NavigationPrompts rendered within ApplicationBase will cause the user to be prompted during\nthe window's beforeUnload event. If ",Object(i.mdx)("inlineCode",{parentName:"p"},"unloadPromptIsDisabled")," is provided, the user will ",Object(i.mdx)("strong",{parentName:"p"},"not")," be prompted\nbefore continuing with the unload event, even if NavigationPrompts are present."))}return t.isMDXComponent=!0,t({})}}]})},s={};function m(e){var t=e.components,n=p()(e,["components"]);return Object(i.mdx)("wrapper",o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"applicationbase"},"ApplicationBase"),Object(i.mdx)("p",null,"The ApplicationBase component is the entrypoint into the Terra application framework. Applications must render ApplicationBase around the their content to provide the content with ApplicationBase's features."),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},"ApplicationBase renders the Base component (from ",Object(i.mdx)("inlineCode",{parentName:"p"},"terra-base"),") around its children. Components rendered within ApplicationBase should not render a separate Base instance.")),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import ApplicationBase from 'terra-application/lib/application-base';\n")),Object(i.mdx)("h2",{id:"props"},"Props"),Object(i.mdx)(d,{mdxType:"PropsTable"}),Object(i.mdx)("h2",{id:"features"},"Features"),Object(i.mdx)("h3",{id:"i18n"},"I18n"),Object(i.mdx)("p",null,"ApplicationBase exposes a prop to define the application's locale and dynamically retrieve the translated strings for that locale. Children of ApplicationBase can access translated strings by using ",Object(i.mdx)("a",o()({parentName:"p"},{href:"https://github.com/formatjs/formatjs/blob/master/website/docs/react-intl/components.md"}),"react-intl's")," provided components or by using the ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/contexts/application-intl-context"}),"ApplicationIntlContext"),"."),Object(i.mdx)("p",null,"Consumers of ApplicationBase should review Terra's ",Object(i.mdx)("a",o()({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/aggregate-translations"}),"translation aggregation")," instructions to ensure ApplicationBase can retrieve the application's translations successfully."),Object(i.mdx)("h3",{id:"theming"},"Theming"),Object(i.mdx)("p",null,"ApplicationBase exposes props to define the application's theme."),Object(i.mdx)("p",null,"ApplicationBase renders a theme context provider around its children. Children can access the current theme by using the ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/contexts/theme-context"}),"ThemeContext"),"."),Object(i.mdx)("h3",{id:"breakpoints"},"Breakpoints"),Object(i.mdx)("p",null,"ApplicationBase renders an ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/contexts/active-breakpoint-context"}),"ActiveBreakpointContext.Provider")," around its children. Children can access the current active breakpoint value by using the ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/contexts/active-breakpoint-context"}),"ActiveBreakpointContext"),"."),Object(i.mdx)("h3",{id:"exception-handling"},"Exception Handling"),Object(i.mdx)("p",null,"ApplicationBase renders an ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/application-error-boundary"}),"ApplicationErrorBoundary")," around its children. If the children throw exceptions during React lifecycle functions, ApplicationBase will catch the exceptions and render a styled error component in place of the children."),Object(i.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),Object(i.mdx)("p",null,"ApplicationBase renders an ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/application-loading-overlay-provider"}),"ApplicationLoadingOverlayProvider")," around its children. Any ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/application-loading-overlay"}),"ApplicationLoadingOverlay")," components rendered by children will result in loading overlays being rendered by ApplicationBase."),Object(i.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),Object(i.mdx)("p",null,"ApplicationBase monitors its children for the presence of rendered ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/navigation-prompt"}),"NavigationPrompts"),". ApplicationBase will ensure that the user is prompted using a browser-native confirmation dialog prior to any window unload event if any ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/navigation-prompt"}),"NavigationPrompts")," are rendered at the time of the unload request."),Object(i.mdx)("h3",{id:"code-splitting"},"Code Splitting"),Object(i.mdx)("p",null,"ApplicationNavigation renders a ",Object(i.mdx)("a",o()({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#reactlazy"}),"Suspense")," component around its children. If any child components or their descendants are lazy loaded using ",Object(i.mdx)("a",o()({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#reactlazy"}),"React.lazy"),", a sensible fallback will be rendered while the component is being retrieved. The fallback will render below the ApplicationNavigation header and allow the header to remain interactable."),Object(i.mdx)("h3",{id:"modal-presentation"},"Modal Presentation"),Object(i.mdx)("p",null,"ApplicationBase renders a ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/components/modal-manager"}),"ModalManager")," around its children. Children can access modal disclosure APIs by using the ",Object(i.mdx)("a",o()({parentName:"p"},{href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"}),"DisclosureManagerContext"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=50-54d4b390c02c7a7677b1.js.map