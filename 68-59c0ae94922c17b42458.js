(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1014:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(17),i=n.n(a),l=n(24),o=n.n(l),r=(n(0),n(279)),c={};function s(e){var t=e.components,n=o()(e,["components"]);return Object(r.mdx)("wrapper",i()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"portaled-workflow-proposal"},"Portaled Workflow Proposal"),Object(r.mdx)("h2",{id:"reminders"},"Reminders"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Need inert for accessibility, focus trap has problems"),Object(r.mdx)("li",{parentName:"ul"},"Replay focus on launch point for portaled contents")),Object(r.mdx)("h2",{id:"portal-components"},"Portal Components"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Modal (Modal Manager)"),Object(r.mdx)("li",{parentName:"ol"},"Popup (Hookshot, Select(?), Date Picker)"),Object(r.mdx)("li",{parentName:"ol"},"Notification Dialog"),Object(r.mdx)("li",{parentName:"ol"},"Blocking Overlay"),Object(r.mdx)("li",{parentName:"ol"},"Framework Dialog")),Object(r.mdx)("h2",{id:"z-index-ranges"},"Z-Index Ranges"),Object(r.mdx)("p",null,"  0 ----------\x3e 1000 ------------------\x3e 2000 -------------------\x3e 3000 --------------\x3e 4000\n(Root)         (Modal)           (Notification Dialog)      (Blocking Overlay)    (Framework Dialog)"),Object(r.mdx)("h2",{id:"types-of-portaled-elements"},"Types of Portaled Elements"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Fixed")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Element presents at a fixed z-index. Framework logic is in place to prevent duplicate presentation (layered elements)."),Object(r.mdx)("li",{parentName:"ul"},"Components include: Blocking Overlay, Notification Dialog, Framework Dialog")),Object(r.mdx)("ol",{start:2},Object(r.mdx)("li",{parentName:"ol"},"Relative")),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Element presents at a dynamic z-index relative to and higher than a parent portal, resulting in a layered display"),Object(r.mdx)("li",{parentName:"ul"},"Components include: Modal, Popup")),Object(r.mdx)("h2",{id:"component-deep-dives"},"Component Deep Dives"),Object(r.mdx)("h3",{id:"modal"},"Modal"),Object(r.mdx)("p",null,"Type: Relative (min 1000)"),Object(r.mdx)("p",null,"Intended Usage:"),Object(r.mdx)("p",null,"The Modal component allows a component to present modal content within the same component context.\nThe Modal is considered an extension of the content that renders it, not a wholly separate entity.\nmanaged by the framework. The removal of the presenting component will result in the dismissal of the presented Modal.\nModal presentation should be reproducible and originate from user interaction, not automatically from async actions."),Object(r.mdx)("p",null,"Features:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Always closes on escape key press"),Object(r.mdx)("li",{parentName:"ul"},"Never closes on outside click"),Object(r.mdx)("li",{parentName:"ul"},"Always includes ActionHeader with modalTitle and close button (executing onRequestClose callback)"),Object(r.mdx)("li",{parentName:"ul"},"Always includes ActionFooter with 'Close' button (executing onRequestClose callback)"),Object(r.mdx)("li",{parentName:"ul"},"Provides z-index context for nested portal content"),Object(r.mdx)("li",{parentName:"ul"},"Modals presented within a Modal will result in stacked modal presentation"),Object(r.mdx)("li",{parentName:"ul"},"Subsequent Modals presented at the same index will be automatically closed"),Object(r.mdx)("li",{parentName:"ul"},"NavigationPrompt integration with close actions"),Object(r.mdx)("li",{parentName:"ul"},"Content within modal is functionally equivalent to root level content and can render the same components without issue")),Object(r.mdx)("p",null,"API:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"<Modal\n  modalTitle={'Example Title'}  // doubles as aria-label (?)\n  role=\"dialog\"                 // might be able to default this\n  size={'TBD'}                  // Size API from disclosure API, or something new?\n  isOpen={modalIsOpen}\n  onRequestClose={() => {\n    setModalIsOpen(false);\n  }}\n>\n  <div>Modal Content</div>\n</Modal>\n")),Object(r.mdx)("p",null,"Outstanding Questions:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"How do we handle the display of notification banners within these content-driven modals?"),Object(r.mdx)("li",{parentName:"ul"},"How do we get global modal banners (like the Demographics banner) injected into this content-driven modal?",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"We could have a separate context that components can provide with a banner, any Modals open within that context present the content."),Object(r.mdx)("li",{parentName:"ul"},'Need to investigate more with what Matt\'s talked about with a more generic "Concept" context.'))),Object(r.mdx)("li",{parentName:"ul"},"Would we need additional props for additional header/footer actions?",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"I'm assuming this is yes, but left them out for the time being."),Object(r.mdx)("li",{parentName:"ul"},"Footer actions get interesting when combined with the default Close button.")))),Object(r.mdx)("p",null,"Benefits:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"One modal to rule them all"),Object(r.mdx)("li",{parentName:"ul"},"Greatly simplified modal experience for our consumers"),Object(r.mdx)("li",{parentName:"ul"},"Strict enforcement of UX/accessibility standards for modals"),Object(r.mdx)("li",{parentName:"ul"},"Context chain is persisted")),Object(r.mdx)("p",null,"Drawbacks:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Divergent from existing ModalManager design")),Object(r.mdx)("h3",{id:"popup"},"Popup"),Object(r.mdx)("p",null,"Type: Relative (min 0)"),Object(r.mdx)("p",null,"Intended Usage:"),Object(r.mdx)("p",null,"The Popup component's intended usage is very similar to that of the Modal. The Popup should be used\nto present transient, positioned content."),Object(r.mdx)("p",null,"Features:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Always close on escape"),Object(r.mdx)("li",{parentName:"ul"},"Always close on outside click"),Object(r.mdx)("li",{parentName:"ul"},"Positions z-index relative to parent portals"),Object(r.mdx)("li",{parentName:"ul"},"Does not provide z-index context for nested portal content. Popup is a portal endstate."),Object(r.mdx)("li",{parentName:"ul"},"Subsequent Popups presented at the same index will be automatically closed")),Object(r.mdx)("h3",{id:"notification-dialog"},"Notification Dialog"),Object(r.mdx)("p",null,"Type: Fixed (2000)"),Object(r.mdx)("p",null,"Intended Usage:"),Object(r.mdx)("p",null,"The Notification Dialog shows a modal view with a restricted presentation API."),Object(r.mdx)("p",null,"Users call an imperative API to add data to a queue. Notification Dialogs are presented with data from that queue until the queue is\nempty. This prevents multiple dialogs from being presented at any given time."),Object(r.mdx)("p",null,"Features:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Never close on escape"),Object(r.mdx)("li",{parentName:"ul"},"Never close on outside click"),Object(r.mdx)("li",{parentName:"ul"},"Does not provide z-index context for nested portal content. Notification Dialog is a portal endstate."),Object(r.mdx)("li",{parentName:"ul"},"Always includes header/footer with fixed actions.")),Object(r.mdx)("p",null,"API:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"// custom hook to assign id's/cleanup dialogs automatically when presenter components unmount\n// Class components could call global methods directly, but they'd have more work to do to clean up\nconst useNotifications = () => {\n  const idRef = useRef(uuidv4());\n\n  useEffect(() => () => {\n    // Cleanup on unmount if they're still hanging around\n    TerraApplication.notifications.removeDialog(idRef.current);\n  })\n\n  const notificationsAPI = useMemo(() => ({\n    showDialog: (options) => {\n      return TerraApplication.notifications.showDialog({ ...options, id: idRef.current });\n    }\n  }), [])\n\n  return notificationsAPI;\n}\n\nconst ExampleComponent = () => {\n  const notifications = useNotifications();\n\n  const submitRequest = () => { /* do the thing */ };\n\n  const onFormSubmit = async () => {\n    const userSelection = await notifications.showDialog({\n      variant: 'warning',\n      startMessage: 'Are you sure you want to do that?',\n      buttonOrder: 'acceptFirst',                         // We can probably default this globally somehow\n      acceptActionText: 'Yes',                            // Likely have defaults for this text as well. Ideally the consumer would only \n      rejectActionText: 'No',\n    });\n    \n    if (userSelection === 'accept') {\n      submitRequest();\n    }\n  }\n\n  return (\n    <button onClick={onFormSubmit}>Submit</button>\n  );\n}\n")),Object(r.mdx)("p",null,"Outstanding Questions:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Would the queue order need to be managed/manipulated based on notification type (error > warning)?"),Object(r.mdx)("li",{parentName:"ul"},"What types of custom content do we need to support? Popups/selects?"),Object(r.mdx)("li",{parentName:"ul"},"Do we truly need to support custom variants or can we lock this down?")),Object(r.mdx)("p",null,"Benefits:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"More control over presentation and display of application notifications"),Object(r.mdx)("li",{parentName:"ul"},"Rigid styling to enforce UX/accessibility patterns")),Object(r.mdx)("p",null,"Drawbacks:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Context chain is not persisted, unlike today. Depending on the custom content requirements, this might not be a big deal."),Object(r.mdx)("li",{parentName:"ul"},"Imperative API isn't typical React")),Object(r.mdx)("h3",{id:"blocking-overlay"},"Blocking Overlay"),Object(r.mdx)("p",null,"Type: Fixed (3000)"),Object(r.mdx)("p",null,"Intended Usage:"),Object(r.mdx)("p",null,"The Blocking Overlay is an overlay component used to block user input into the application. The Blocking Overlay covers the entirety of the application,\nincluding all portaled content (besides the Framework Dialog)."),Object(r.mdx)("p",null,"Blocking Overlay presentation should be originate from user interaction, not present automatically from async actions. Usage should generally be discouraged\nin favor of scratchpad/non-junk service usage."),Object(r.mdx)("p",null,"Features:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Never close on escape"),Object(r.mdx)("li",{parentName:"ul"},"Never close on outside click (what outside click)"),Object(r.mdx)("li",{parentName:"ul"},"Does not provide z-index context for nested portal content. Blocking Overlay is a portal endstate."),Object(r.mdx)("li",{parentName:"ul"},"Includes timeout logic to allow user to dismiss overlay after period of time")),Object(r.mdx)("p",null,"API:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),'\nconst cancelablePromise = (promise) => {\n  let isCanceled = false;\n\n  const wrappedPromise = new Promise((resolve, reject) => {\n    promise.then((val) => {\n      if (isCanceled) {\n        reject({ isCanceled: true }); \n        return;\n      }\n\n      resolve(val);\n    });\n\n    promise.catch(error) => {\n      if (isCanceled) {\n        reject({ isCanceled: true }); \n        return;\n      }\n\n      reject(error);\n    }\n  });\n\n  return {\n    promise: wrappedPromise,\n    cancel: () => { isCanceled = true; }\n  }\n}\n\nconst ExampleComponent = () => {\n  const [isSaving, setIsSaving] = useState(false);\n  const saveRequestRef = useRef();\n\n  function cleanupLongRequest() {\n    setIsSaving(false);\n    if (saveRequestRef.current) {\n      saveRequestRef.current.cancel();\n      saveRequestRef.current = undefined;\n    }\n    // Work on fixing services\n  }\n\n  function startSaving() {\n    setIsSaving(true);\n\n    saveRequestRef.current = cancelablePromise(saveRequest());\n    \n    saveRequestRef.current.promise.then(() => {\n      setIsSaving(false);\n      saveRequestRef.current = undefined;\n    }).catch((error) => {\n      setIsSaving(false);\n      saveRequestRef.current = undefined;\n\n      if (error?.isCancelled) { return; }\n\n      console.error(\'Yo something broke\');\n    })\n  }\n\n  return (\n    <div>\n      <BlockingOverlay\n        isOpen={isSaving}\n        timeoutMessage="This sure is taking a while. Cancel?"\n        timeoutButtonText="Cancel"\n        onTimeout={() => {\n          cleanupLongRequest();\n        }}\n      />\n      <button onClick={startSaving}>Save</button>\n    </div>\n  )\n}\n\n// OR\n\nconst useBlockingOverlay = () => {\n  const idRef = useRef(uuidv4());\n  const cleanupRef = useRef();\n\n  const api = useMemo(() => ({\n    show: (promise, options) => {\n      const wrappedPromise = cancelablePromise(promise);\n\n      TerraApplication.blockingOverlay.show(idRef.current, options, wrappedPromise.cancel);\n\n      cleanupRef.current = () => {\n        wrappedPromise.cancel();\n        TerraApplication.blockingOverlay.hide(idRef.current);\n      };\n\n      return {\n        promise: wrappedPromise.promise.then((val) => {\n          TerraApplication.blockingOverlay.hide(idRef.current);\n          cleanupRef.current = undefined;\n\n          return val;\n        }).reject((error) => {\n          TerraApplication.blockingOverlay.hide(idRef.current);\n          cleanupRef.current = undefined;\n\n          return error;\n        }),\n        cancel: () => {\n          wrappedPromise.cancel();\n          TerraApplication.blockingOverlay.hide(idRef.current);\n          cleanupRef.current = undefined;\n        },\n      };\n    },\n  }), []);\n\n  useLayoutEffect(() => () => {\n    if (cleanupRef.current) {\n      cleanupRef.current();\n    }\n  }, []);\n\n  return api;\n}\n\nconst ExampleComponent = () => {\n  const [isSaving, setIsSaving] = useState(false);\n  const blockingOverlay = useBlockingOverlay();\n\n  function startSaving() {\n    setIsSaving(true);\n\n    blockingOverlay.show(saveRequest(), {\n      timeoutMessage="This sure is taking a while. Cancel?"\n      timeoutButtonText="Cancel"\n    }).promise.then(() => {\n      setIsSaving(false);\n      // refresh or something\n    }).catch((error) => {\n      setIsSaving(false);\n      saveRequestRef.current = undefined;\n\n      if (error?.isCancelled) { return; }\n\n      console.error(\'Yo something broke\');\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={startSaving}>Save</button>\n    </div>\n  );\n}\n')),Object(r.mdx)("h3",{id:"framework-dialog"},"Framework Dialog"),Object(r.mdx)("p",null,"Type: Fixed (4000)"),Object(r.mdx)("p",null,"Intended Usage: "),Object(r.mdx)("p",null,"The Framework Dialog is functionally and visually very similar to the Notification Dialog. The biggest difference between the two\nare consumer access. Only terra-application/orion-application may present a Framework Dialog, and even then in very specific circumstances.\nPrimary use case I can think of right now is the pending lock dialog that we wish to present. "),Object(r.mdx)("p",null,"The Framework Dialog would have the highest z-index and present over all other portaled contents, including the Blocking Overlay."),Object(r.mdx)("p",null,"API:"),Object(r.mdx)("p",null,"Similar to Notification Dialog, just entirely local to a framework component."),Object(r.mdx)("h1",{id:"composition-layers"},"Composition Layers"),Object(r.mdx)("p",null,"ApplicationBase"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Ideally no DOM added here, just context/API\nApplicationContainer"),Object(r.mdx)("li",{parentName:"ul"},"AppConcept banner/content"),Object(r.mdx)("li",{parentName:"ul"},"More than one (ApplicationContainer, NavigationApplicationContainer, EmbeddedApplicationContainer)\nPageContainer"),Object(r.mdx)("li",{parentName:"ul"},"Defines presentation region for Pages"),Object(r.mdx)("li",{parentName:"ul"},"More than one (PageContainer, NavigationPageContainer)\nPage"),Object(r.mdx)("li",{parentName:"ul"},"Fundamental concept for composable application design"),Object(r.mdx)("li",{parentName:"ul"},"Can be presented within Modal (Page API is subset of Modal API)\nModal"),Object(r.mdx)("li",{parentName:"ul"},"Superset of Page API + modal specific API (foot actions)"),Object(r.mdx)("li",{parentName:"ul"},"Can be presented from any layer within ApplicationBase")),Object(r.mdx)("pre",null,Object(r.mdx)("code",i()({parentName:"pre"},{className:"language-jsx"}),"<ApplicationBase>\n  <ApplicationContainer>\n    <PageContainer>\n      <Page>\n        <Page>\n          ...\n  <Modal>\n    <Modal>\n      ...\n")),Object(r.mdx)("h1",{id:"todo"},"TODO"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Application Concept",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"(X) Determine ideal placement locations",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"The concept will be rendered by the Application Variants (Navigation/Embedded)"))),Object(r.mdx)("li",{parentName:"ul"},"Define API for specifying page/modal concept banners (are they the same? are they different?)"))),Object(r.mdx)("li",{parentName:"ul"},"ApplicationPage",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"(X) Investigate scroll position replay"),Object(r.mdx)("li",{parentName:"ul"},"(X) Move 'main' to Page"),Object(r.mdx)("li",{parentName:"ul"},"(X) Investigate NotificationBanner integration"),Object(r.mdx)("li",{parentName:"ul"},"(X) Breadcrumbs prototype"),Object(r.mdx)("li",{parentName:"ul"},"Investigate accessibility impact"),Object(r.mdx)("li",{parentName:"ul"},"Determine actions API"),Object(r.mdx)("li",{parentName:"ul"},"Better Back button?"),Object(r.mdx)("li",{parentName:"ul"},"Hide header for embedded workflows?"))),Object(r.mdx)("li",{parentName:"ul"},"ApplicationPageContainer",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"Workspace region (resizable)"))),Object(r.mdx)("li",{parentName:"ul"},"SideNavigationPageContainer",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"Determine side nav API/data persistance expectations"),Object(r.mdx)("li",{parentName:"ul"},"Determine default side nav design"))),Object(r.mdx)("li",{parentName:"ul"},"ApplicationModal",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"(X) Investigate NotificationBanner integration"),Object(r.mdx)("li",{parentName:"ul"},"(X) Consume Application Concept API"),Object(r.mdx)("li",{parentName:"ul"},"Determine stacking patterns (stack or hide previous)"),Object(r.mdx)("li",{parentName:"ul"},"Inert implementation",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"If we hide the previous modals, inert isn't necessary beyond base level content"))),Object(r.mdx)("li",{parentName:"ul"},"Determine sizing API"),Object(r.mdx)("li",{parentName:"ul"},"Determine header/footer actions API",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"This should match the ApplicationPage's action API if we want to integrate"))))),Object(r.mdx)("li",{parentName:"ul"},"Notification Dialog",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"Investigate imperative API implementation"),Object(r.mdx)("li",{parentName:"ul"},"Investigate dialog queue"))),Object(r.mdx)("li",{parentName:"ul"},"Notification Banner",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"))),Object(r.mdx)("li",{parentName:"ul"},"Blocking Overlay",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"(X) Prototype implementation"),Object(r.mdx)("li",{parentName:"ul"},"Investigate multi-phase presentation"),Object(r.mdx)("li",{parentName:"ul"},"Investigate duplicate calls"),Object(r.mdx)("li",{parentName:"ul"},"Fix inert implementation for modal/other layer integration"))),Object(r.mdx)("li",{parentName:"ul"},"Framework Dialog",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},"Prototype implementation")))),Object(r.mdx)("p",null,"TODO 7/2"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"PageHeader actions dropdown"),Object(r.mdx)("li",{parentName:"ul"},"PageHeader actions launch Popup"),Object(r.mdx)("li",{parentName:"ul"},"Accordian Side Navigation"),Object(r.mdx)("li",{parentName:"ul"},"Full mounts for Primary/Side Nav pages")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=68-59c0ae94922c17b42458.js.map