(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1002:function(e,t,n){"use strict";var l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(140)),i=l(n(25)),s=l(n(26)),o=l(n(30)),r=l(n(27)),u=l(n(28)),d=l(n(29)),c=l(n(0)),f=l(n(1)),p=l(n(3)),m=l(n(916)),h=l(n(53)),v=n(84),g=l(n(82)),y=l(n(111)),b=l(n(1003));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var E=p.default.bind(b.default),D=Object.keys(v.availableDisclosureHeights),C=Object.keys(v.availableDisclosureWidths),k=function(e){(0,r.default)(n,e);var t=_(n);function n(e){var l;return(0,i.default)(this,n),(l=t.call(this,e)).disclose=l.disclose.bind((0,o.default)(l)),l.dismiss=l.dismiss.bind((0,o.default)(l)),l.closeDisclosure=l.closeDisclosure.bind((0,o.default)(l)),l.goBack=l.goBack.bind((0,o.default)(l)),l.maximize=l.maximize.bind((0,o.default)(l)),l.minimize=l.minimize.bind((0,o.default)(l)),l.generateOptions=l.generateOptions.bind((0,o.default)(l)),l.handleSelectChange=l.handleSelectChange.bind((0,o.default)(l)),l.renderFormButton=l.renderFormButton.bind((0,o.default)(l)),l.renderForm=l.renderForm.bind((0,o.default)(l)),l.getId=l.getId.bind((0,o.default)(l)),l.state={id:"disclosureDimensions",disclosureHeight:D[0],disclosureWidth:C[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1},l}return(0,s.default)(n,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var a=l;return c.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:a,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,a.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,a=l.disclosureType,i=l.nestedIndex,s=l.renderHeaderAdapter,o=i+1;return function(){n.props.disclosureManager.disclose({preferredType:a,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:c.default.createElement(P,{identifier:"DemoContainer-".concat(o),nestedIndex:o,disclosureType:a,renderHeaderAdapter:s})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return c.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return c.default.createElement("form",null,c.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),c.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(D,"height")),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),c.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(C,"width")),c.default.createElement("br",null),c.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,l=t.identifier,a=t.renderHeaderAdapter,i=this.state,s=i.hasPendingAction,o=i.hasLoadingOverlay;if(i.hasError)throw new Error("Test Error");return c.default.createElement(h.default,{id:l,className:"nested-component",fill:!0,header:c.default.createElement("h2",{className:E("content-wrapper")},"Content Component")},a?c.default.createElement(v.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(l),collapsibleMenuView:c.default.createElement(m.default,null,c.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),c.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,c.default.createElement("p",null,"id:"," ",l),c.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),c.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),c.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),c.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),c.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),c.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),c.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),c.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),c.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),c.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),c.default.createElement("div",{className:E("form-wrapper")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?c.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?c.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?c.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?c.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?c.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,s&&c.default.createElement(g.default,{description:"Test Action"}),o&&c.default.createElement(y.default,{isOpen:!0,backgroundStyle:"light"}))}}]),n}(c.default.Component);k.propTypes={disclosureManager:v.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},k.defaultProps={nestedIndex:0};var P=(0,v.withDisclosureManager)(k),S=P;t.default=S},1003:function(e,t,n){e.exports={"content-wrapper":"DisclosureComponent-module__content-wrapper___3RZ1E","form-wrapper":"DisclosureComponent-module__form-wrapper___1DfL-"}},1004:function(e,t,n){"use strict";var l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(1005)).default;t.default=a},1005:function(e,t,n){"use strict";var l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17)),i=l(n(24)),s=l(n(0)),o=l(n(1)),r=l(n(1006)),u=n(82),d=l(n(297)),c={children:o.default.node,panelBehavior:o.default.oneOf(["overlay","squish"]),disclosureAccessory:o.default.element,navigationPromptResolutionOptions:u.navigationPromptResolutionOptionsShape},f=function(e){var t=e.navigationPromptResolutionOptions,n=(0,i.default)(e,["navigationPromptResolutionOptions"]);return s.default.createElement(r.default,(0,a.default)({},n,{withDisclosureContainer:function(e){return s.default.createElement(d.default,{navigationPromptResolutionOptions:t},e)}}))};f.propTypes=c,f.defaultProps=r.default.defaultProps;var p=f;t.default=p},1006:function(e,t,n){"use strict";var l=n(4),a=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.disclosureType=void 0;var i,s=l(n(17)),o=l(n(24)),r=l(n(25)),u=l(n(26)),d=l(n(30)),c=l(n(27)),f=l(n(28)),p=l(n(29)),m=l(n(140)),h=l(n(0)),v=l(n(1)),g=l(n(75)),y=l(n(53)),b=a(n(196)),_=l(n(296)),E=l(n(1007));function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,p.default)(e);if(t){var a=(0,p.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,f.default)(this,n)}}t.disclosureType="panel";var C={children:v.default.node,panelBehavior:v.default.oneOf(["overlay","squish"]),disclosureAccessory:v.default.element,withDisclosureContainer:v.default.func},k=(i={},(0,m.default)(i,b.availableDisclosureSizes.TINY,"small"),(0,m.default)(i,b.availableDisclosureSizes.SMALL,"small"),(0,m.default)(i,b.availableDisclosureSizes.MEDIUM,"large"),(0,m.default)(i,b.availableDisclosureSizes.LARGE,"large"),(0,m.default)(i,b.availableDisclosureSizes.HUGE,"large"),i),P=function(e){(0,c.default)(n,e);var t=D(n);function n(e){var l;return(0,r.default)(this,n),(l=t.call(this,e)).renderSlidePanel=l.renderSlidePanel.bind((0,d.default)(l)),l}return(0,u.default)(n,[{key:"renderSlidePanel",value:function(e){var t,n,l,a=this.props,i=(a.children,a.panelBehavior),r=a.disclosureAccessory,u=(a.withDisclosureContainer,(0,o.default)(a,["children","panelBehavior","disclosureAccessory","withDisclosureContainer"]));(e.disclosure.size===b.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(t=!0),n=e.disclosure.dimensions?(l=e.disclosure.dimensions).width>480||l.height>600?"large":"small":k[e.disclosure.size];var d=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],c=(e.disclosureComponentData[d]||{}).headerAdapterData;return h.default.createElement(E.default,(0,s.default)({},u,{fill:!0,panelBehavior:i,isFullscreen:t,panelSize:n,isOpen:e.disclosure.isOpen,panelContent:h.default.createElement(y.default,{fill:!0,header:h.default.createElement(h.default.Fragment,null,c?h.default.createElement(g.default,{title:c.title,onClose:e.closeDisclosure,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0,onMaximize:e.maximizeDisclosure,onMinimize:e.minimizeDisclosure},c.collapsibleMenuView):void 0,r)},h.default.createElement(_.default,{items:e.disclosure.components,isAnimated:!0})),mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,t=e.withDisclosureContainer,n=e.children;return h.default.createElement(b.default,{withDisclosureContainer:t,supportedDisclosureTypes:["panel"],render:this.renderSlidePanel},n)}}]),n}(h.default.Component);P.propTypes=C,P.defaultProps={panelBehavior:"overlay"};var S=P;t.default=S},1007:function(e,t,n){"use strict";var l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.SlidePanelPositions=t.default=void 0;var a=l(n(17)),i=l(n(24)),s=l(n(25)),o=l(n(26)),r=l(n(30)),u=l(n(27)),d=l(n(28)),c=l(n(29)),f=l(n(0)),p=l(n(1)),m=l(n(9)),h=l(n(3)),v=l(n(6)),g=l(n(1008));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var b=h.default.bind(g.default),_={START:"start",END:"end"};t.SlidePanelPositions=_;var E={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},D={panelBehavior:"overlay",panelPosition:_.END,panelSize:"small"},C=function(e){(0,u.default)(n,e);var t=y(n);function n(e){var l;return(0,s.default)(this,n),(l=t.call(this,e)).setPanelNode=l.setPanelNode.bind((0,r.default)(l)),l.mainNode=f.default.createRef(),l}return(0,o.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,l=e.mainContent,s=e.panelContent,o=e.panelBehavior,r=e.panelPosition,u=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,h=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),v=this.context,g=(0,m.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},v.className),h.className),y=f.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},s),E=f.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":n,ref:this.mainNode},l),D=r===_.START?f.default.createElement(f.default.Fragment,null,y,E):f.default.createElement(f.default.Fragment,null,E,y);return f.default.createElement("div",(0,a.default)({},h,{className:g,"data-slide-panel-panel-behavior":o,"data-slide-panel-panel-position":r,"data-slide-panel-panel-size":u}),D)}}]),n}(f.default.Component);C.propTypes=E,C.defaultProps=D,C.contextType=v.default;var k=C;t.default=k},1008:function(e,t,n){e.exports={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3ceMF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___1Gbzu","slide-panel":"SlidePanel-module__slide-panel___ITIbM",main:"SlidePanel-module__main___2oo1I",panel:"SlidePanel-module__panel___22lWd","is-open":"SlidePanel-module__is-open___3OdYE","is-fullscreen":"SlidePanel-module__is-fullscreen___32Wbh",fill:"SlidePanel-module__fill___2g_EL"}},1009:function(e,t,n){e.exports={"content-wrapper":"SlidePanelManagerDefault-test-module__content-wrapper___3axJy","disclosure-accessory":"SlidePanelManagerDefault-test-module__disclosure-accessory___1fIIv"}},1034:function(e,t,n){"use strict";var l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(3)),s=l(n(1002)),o=l(n(1004)),r=l(n(1009)),u=i.default.bind(r.default),d=function(){return a.default.createElement("div",{role:"main",className:u("content-wrapper")},a.default.createElement(o.default,null,a.default.createElement(s.default,{identifier:"root-component",disclosureType:"panel",renderHeaderAdapter:!0})))};t.default=d}}]);
//# sourceMappingURL=46-98a4955f9e9aefaae6ad.js.map