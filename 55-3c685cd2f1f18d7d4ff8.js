(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1024:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return v}));var t=n(17),o=n.n(t),a=n(24),p=n.n(a),l=n(0),i=n.n(l),c=n(279),u=n(857),d=n.n(u),s=function(){return Object(c.mdx)(d.a,{rows:[{name:"children",type:function(){var e={};function r(r){var n=r.components,t=p()(r,["components"]);return Object(c.mdx)("wrapper",o()({},e,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"node"))}return r.isMDXComponent=!0,r({})},required:!1,defaultValue:"none",description:function(){var e={};function r(r){var n=r.components,t=p()(r,["components"]);return Object(c.mdx)("wrapper",o()({},e,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown\nby these components during their render lifecycle will be caught by the ApplicationErrorBoundary."))}return r.isMDXComponent=!0,r({})}}]})},m=n(913),f=n.n(m),E={};function x(e){var r=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",o()({},E,n,{components:r,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\nimport ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary/ApplicationErrorBoundary';\nimport styles from './ApplicationErrorBoundaryExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ErrorThrowingComponent = () => {\n  const [throwError, setThrowError] = useState(false);\n\n  if (throwError) {\n    throw new Error('whoops');\n  }\n\n  return (\n    <>\n      <p>Press the button below to trigger an error.</p>\n      <button type=\"button\" onClick={() => { setThrowError(true); }}>Trigger Error</button>\n    </>\n  );\n};\n\nconst ApplicationErrorBoundaryExampleWrapper = ({ children }) => {\n  const [refresh, setRefresh] = useState(false);\n\n  return (\n    <div className={cx('example')}>\n      <button type=\"button\" onClick={() => { setRefresh(!refresh); }}>Refresh Component</button>\n      <ApplicationErrorBoundary>\n        {children}\n      </ApplicationErrorBoundary>\n    </div>\n  );\n};\n\nApplicationErrorBoundaryExampleWrapper.propTypes = {\n  children: PropTypes.node,\n};\n\nconst ApplicationErrorBoundaryExample = () => (\n  <ApplicationErrorBoundaryExampleWrapper>\n    <ErrorThrowingComponent />\n  </ApplicationErrorBoundaryExampleWrapper>\n);\n\nexport default ApplicationErrorBoundaryExample;\n\n")))}x.isMDXComponent=!0;var y=n(862),b=n.n(y),h=function(e){var r=e.title,n=e.description,t=e.isExpanded;return i.a.createElement(b.a,{title:r||"Application Error Boundary Example",description:n,example:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(x,null),isExpanded:t})},w={};function v(e){var r=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",o()({},w,n,{components:r,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"applicationerrorboundary"},"ApplicationErrorBoundary"),Object(c.mdx)("p",null,"The ApplicationErrorBoundary catches exceptions thrown during its children's render lifecycle and renders the error for the user's benefit. The ApplicationErrorBoundary can be rendered at various levels of an application to isolate errors to various parts of the component tree."),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",o()({parentName:"pre"},{className:"language-jsx"}),"import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary';\n")),Object(c.mdx)("h2",{id:"props"},"Props"),Object(c.mdx)(s,{mdxType:"PropsTable"}),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(h,{mdxType:"ApplicationErrorBoundaryExample"}))}v.isMDXComponent=!0},913:function(e,r,n){"use strict";var t=n(12),o=n(4);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(n(74)),p=t(n(0)),l=o(n(1)),i=o(n(3)),c=o(n(283)),u=o(n(914)),d=i.default.bind(u.default),s=function(){var e=(0,p.useState)(!1),r=(0,a.default)(e,2),n=r[0],t=r[1];if(n)throw new Error("whoops");return p.default.createElement(p.default.Fragment,null,p.default.createElement("p",null,"Press the button below to trigger an error."),p.default.createElement("button",{type:"button",onClick:function(){t(!0)}},"Trigger Error"))},m=function(e){var r=e.children,n=(0,p.useState)(!1),t=(0,a.default)(n,2),o=t[0],l=t[1];return p.default.createElement("div",{className:d("example")},p.default.createElement("button",{type:"button",onClick:function(){l(!o)}},"Refresh Component"),p.default.createElement(c.default,null,r))};m.propTypes={children:l.default.node};var f=function(){return p.default.createElement(m,null,p.default.createElement(s,null))};r.default=f},914:function(e,r,n){e.exports={example:"ApplicationErrorBoundaryExample-module__example___12II9"}}}]);
//# sourceMappingURL=55-3c685cd2f1f18d7d4ff8.js.map