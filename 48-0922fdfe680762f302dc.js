(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{896:function(e,t,n){"use strict";var s=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(139)),a=s(n(25)),i=s(n(26)),o=s(n(30)),r=s(n(27)),c=s(n(28)),u=s(n(29)),d=s(n(0)),m=s(n(1)),f=s(n(3)),h=s(n(873)),p=s(n(52)),g=n(84),b=s(n(82)),y=s(n(906)),v=s(n(83));function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,u.default)(e);if(t){var l=(0,u.default)(this).constructor;n=Reflect.construct(s,arguments,l)}else n=s.apply(this,arguments);return(0,c.default)(this,n)}}var E=f.default.bind(y.default),C=Object.keys(g.availableDisclosureHeights),D=Object.keys(g.availableDisclosureWidths),_=function(e){(0,r.default)(n,e);var t=k(n);function n(e){var s;return(0,a.default)(this,n),(s=t.call(this,e)).disclose=s.disclose.bind((0,o.default)(s)),s.dismiss=s.dismiss.bind((0,o.default)(s)),s.closeDisclosure=s.closeDisclosure.bind((0,o.default)(s)),s.goBack=s.goBack.bind((0,o.default)(s)),s.maximize=s.maximize.bind((0,o.default)(s)),s.minimize=s.minimize.bind((0,o.default)(s)),s.generateOptions=s.generateOptions.bind((0,o.default)(s)),s.handleSelectChange=s.handleSelectChange.bind((0,o.default)(s)),s.renderFormButton=s.renderFormButton.bind((0,o.default)(s)),s.renderForm=s.renderForm.bind((0,o.default)(s)),s.getId=s.getId.bind((0,o.default)(s)),s.state={id:"disclosureDimensions",disclosureHeight:C[0],disclosureWidth:D[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,disclosureCount:null},s}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,g.getActiveDisclosureCount)()})}))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,s){var l=s;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:l,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,l.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var n=this,s=this.props,l=s.disclosureType,a=s.nestedIndex,i=s.renderHeaderAdapter,o=a+1;return function(){n.props.disclosureManager.disclose({preferredType:l,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:d.default.createElement(M,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:i})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(C,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(D,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,s=t.identifier,l=t.renderHeaderAdapter,a=this.state,i=a.hasPendingAction,o=a.hasLoadingOverlay,r=a.hasError,c=a.disclosureCount;if(r)throw new Error("Test Error");return d.default.createElement(p.default,{id:s,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:E("header")},"Content Component")},l?d.default.createElement(g.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(s),collapsibleMenuView:d.default.createElement(h.default,null,d.default.createElement(h.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(h.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",s),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),d.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),d.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),d.default.createElement("div",{className:E("content-form")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,d.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:g.closeMostRecentDisclosure},"Global Close (".concat(c,")")),i&&d.default.createElement(b.default,{description:"Test Action"}),o&&d.default.createElement(v.default,{isOpen:!0,backgroundStyle:"light"}))}}]),n}(d.default.Component);_.propTypes={disclosureManager:g.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},_.defaultProps={nestedIndex:0};var M=(0,g.withDisclosureManager)(_),x=M;t.default=x},906:function(e,t,n){e.exports={header:"DisclosureComponentCommon-test-module__header___3XNkp","content-form":"DisclosureComponentCommon-test-module__content-form___3YiZK","select-field":"DisclosureComponentCommon-test-module__select-field___3vveU"}},907:function(e,t,n){e.exports={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___xWS2p","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___1mbSh"}},938:function(e,t,n){"use strict";var s=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(0)),a=s(n(3)),i=s(n(285)),o=s(n(896)),r=s(n(907)),c=a.default.bind(r.default),u=function(){return l.default.createElement("div",{role:"main",className:c("content-wrapper")},l.default.createElement(i.default,null,l.default.createElement(o.default,{identifier:"root-component",disclosureType:"modal",renderHeaderAdapter:!0})))};t.default=u}}]);
//# sourceMappingURL=48-0922fdfe680762f302dc.js.map