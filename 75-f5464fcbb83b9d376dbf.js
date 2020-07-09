(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1008:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(17),o=n.n(a),r=n(24),i=n.n(r),p=(n(0),n(279)),c={};function l(e){var t=e.components,n=i()(e,["components"]);return Object(p.mdx)("wrapper",o()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"how-to-use-translated-strings"},"How To Use Translated Strings"),Object(p.mdx)("blockquote",null,Object(p.mdx)("p",{parentName:"blockquote"},"Please review Terra's ",Object(p.mdx)("a",o()({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/getting-started/terra-ui/internationalization/internationalization-intro"}),"Internationalization"),"\ndocumentation to ensure your application is configured to support i18n.")),Object(p.mdx)("p",null,"Every child of ",Object(p.mdx)("a",o()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/application-base"}),"ApplicationBase")," has access to the\napplication's translated strings. Please review Terra's ",Object(p.mdx)("a",o()({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/getting-started/terra-ui/internationalization/building-components-which-include-translations"}),"recommended consumption guides"),"\nfor more information."),Object(p.mdx)("p",null,"Additionally, ApplicateBase provides react-intl's APIs through the ",Object(p.mdx)("a",o()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/contexts/application-intl-context"}),"ApplicationIntlContext"),"\nfor consumers seeking a modern Context implementation."),Object(p.mdx)("pre",null,Object(p.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\n\nconst ExampleComponent = () => {\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  return (\n    <div>\n      <p>This button requires multiple translated strings to render appropriately.</p>\n      <button\n        aria-label={applicationIntl.formatMessage({ id: 'example-component.button-label'})}\n      >\n        {applicationIntl.formatMessage({ id: 'example-component.button-text'})}\n      </button>\n    </div>\n  );\n});\n\nexport default ExampleComponent;\n")),Object(p.mdx)("blockquote",null,Object(p.mdx)("p",{parentName:"blockquote"},"Accessing react-intl's ",Object(p.mdx)("a",o()({parentName:"p"},{href:"https://reactjs.org/docs/legacy-context.html"}),"legacy context value")," directly is ",Object(p.mdx)("strong",{parentName:"p"},"not recommended"),".\nThis API is deprecated and not provided by react-intl v3.x. Terra's recommended usage patterns are supported by versions 2.x and 3.x of react-intl.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=75-f5464fcbb83b9d376dbf.js.map