(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1003:function(e,t,n){e.exports={header:"DisclosureComponentCommon-test-module__header___3XNkp","content-form":"DisclosureComponentCommon-test-module__content-form___3YiZK","select-field":"DisclosureComponentCommon-test-module__select-field___3vveU"}},1004:function(e,t,n){e.exports={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___xWS2p","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___1mbSh"}},1036:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),l=a(n(3)),i=a(n(287)),o=a(n(993)),r=a(n(1004)),c=l.default.bind(r.default),d=function(){return s.default.createElement("div",{role:"main",className:c("content-wrapper")},s.default.createElement(i.default,null,s.default.createElement(o.default,{identifier:"root-component",disclosureType:"modal",renderHeaderAdapter:!0})))};t.default=d},993:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(140)),l=a(n(25)),i=a(n(26)),o=a(n(30)),r=a(n(27)),c=a(n(28)),d=a(n(29)),u=a(n(0)),m=a(n(1)),f=a(n(3)),h=a(n(916)),p=a(n(53)),g=n(84),b=a(n(82)),y=a(n(1003)),v=a(n(111));function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var s=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var k=f.default.bind(y.default),C=Object.keys(g.availableDisclosureHeights),_=Object.keys(g.availableDisclosureWidths),D=function(e){(0,r.default)(n,e);var t=E(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,o.default)(a)),a.dismiss=a.dismiss.bind((0,o.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,o.default)(a)),a.goBack=a.goBack.bind((0,o.default)(a)),a.maximize=a.maximize.bind((0,o.default)(a)),a.minimize=a.minimize.bind((0,o.default)(a)),a.generateOptions=a.generateOptions.bind((0,o.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,o.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,o.default)(a)),a.renderForm=a.renderForm.bind((0,o.default)(a)),a.getId=a.getId.bind((0,o.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:C[0],disclosureWidth:_[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1},a}return(0,i.default)(n,[{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var s=a;return u.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:s,value:e},e)}))}},{key:"handleSelectChange",value:function(e){this.setState((0,s.default)({},e.target.name,e.target.value))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,s=a.disclosureType,l=a.nestedIndex,i=a.renderHeaderAdapter,o=l+1;return function(){n.props.disclosureManager.disclose({preferredType:s,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:u.default.createElement(x,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:i})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return u.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return u.default.createElement("form",null,u.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),u.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(C,"height")),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),u.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(_,"width")),u.default.createElement("br",null),u.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,s=t.renderHeaderAdapter,l=this.state,i=l.hasPendingAction,o=l.hasLoadingOverlay;if(l.hasError)throw new Error("Test Error");return u.default.createElement(p.default,{id:a,className:"nested-component",fill:!0,header:u.default.createElement("h2",{className:k("header")},"Content Component")},s?u.default.createElement(g.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:u.default.createElement(h.default,null,u.default.createElement(h.default.Item,{text:"Header Button 1",key:"button_1"}),u.default.createElement(h.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,u.default.createElement("p",null,"id:"," ",a),u.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),u.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),u.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),u.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),u.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),u.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),u.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),u.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),u.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),u.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),u.default.createElement("div",{className:k("content-form")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?u.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?u.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?u.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?u.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?u.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,i&&u.default.createElement(b.default,{description:"Test Action"}),o&&u.default.createElement(v.default,{isOpen:!0,backgroundStyle:"light"}))}}]),n}(u.default.Component);D.propTypes={disclosureManager:g.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},D.defaultProps={nestedIndex:0};var x=(0,g.withDisclosureManager)(D),M=x;t.default=M}}]);
//# sourceMappingURL=53-7238cfc22dfe9bc08af3.js.map