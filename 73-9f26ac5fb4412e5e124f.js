(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1006:function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return d}));var t=o(17),a=o.n(t),r=o(24),l=o.n(r),s=(o(0),o(279)),i={};function d(n){var e=n.components,o=l()(n,["components"]);return Object(s.mdx)("wrapper",a()({},i,o,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"how-to-show-modal-content"},"How To Show Modal Content"),Object(s.mdx)("p",null,"The ",Object(s.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/components/modal-manager"}),"ModalManager")," should be used to manage modal content presentation."),Object(s.mdx)("p",null,"A ModalManager should be rendered around content that requires modal disclosure capabilities. Multiple components can be wrapped with a single\nModalManager; every wrapped component (and their descendents) will communicate with the same ModalManager instance through the\n",Object(s.mdx)("a",a()({parentName:"p"},{href:"/terra-application/components/terra-application/application/reference/contexts/disclosure-manager-context"}),"DisclosureManagerContext"),"."),Object(s.mdx)("p",null,"Components rendered within the ModalManager's modal will be able to access the same Contexts as the ModalManager itself.\nAdditional Context providers rendered within the ModalManager's children will not be available to the modal components."),Object(s.mdx)("p",null,"The rendering of a ModalManager is typically an application-level concern. However, additional ModalManagers may be rendered to re-establish\nthe contexts available to disclosed contents. Before rendering a ModalManager yourself, please ensure that the application isn't already providing\na ModalManager that suits your component's needs."),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ApplicationBase from 'terra-application/lib/application-base';\nimport ModalManager from 'terra-application/lib/modal-manager';\n\nimport ComponentWithModal from './ComponentWithModal';\n\nconst ExampleApp = () => (\n  <ApplicationBase>\n    <ModalManager>\n      <ComponentWithModal />\n    </ModalManager>\n  </ApplicationBase>\n);\n\nexport default ExampleComponent;\n")),Object(s.mdx)("p",null,"Components rendered within a ModalManager should access the value provided by the DisclosureManagerContext. That value contains APIs used\nto communicate with the ModalManager and disclose additional content."),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: <ModalContentComponent />,\n          },\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")),Object(s.mdx)("p",null,"Components that need more control over the presentation of the modal have access to additional APIs that are returned upon a successful disclosure."),Object(s.mdx)("pre",null,Object(s.mdx)("code",a()({parentName:"pre"},{className:"language-jsx"}),"import React, { useContext, useRef } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n  const modalDismissRef = useRef();\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: (\n              <ModalContentComponent\n                onSubmit={() => {\n                  if (modalDismissRef.current) {\n                    modalDismissRef.current();\n                    modalDismissRef.current = undefined;\n                  }\n                }}\n              />\n            ),\n          },\n        }).then(({ dismissDisclosure }) => {\n          modalDismissRef.current = dismissDisclosure;\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=73-9f26ac5fb4412e5e124f.js.map