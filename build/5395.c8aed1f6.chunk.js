(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[5395],{

/***/ 35395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(58779);
  } else {}
  

/***/ }),

/***/ 58779:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,n){ true?module.exports=n(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(e,n){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=96)}({0:function(e,n,t){e.exports=t(17)()},1:function(n,t){n.exports=e},10:function(e,n,t){var r=t(23),o=t(24),i=t(20),a=t(25);e.exports=function(e,n){return r(e)||o(e,n)||i(e,n)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},13:function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,n,t){"use strict";var r=t(18);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},18:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=n},20:function(e,n,t){var r=t(19);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,n){e.exports=function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,n){e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,n,t){"use strict";t.r(n),t.d(n,"Box",(function(){return f}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),d=t(7),l={color:!0},f=c.a.div.withConfig({shouldForwardProp:function(e,n){return!l[e]&&n(e)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n}),(function(e){var n=e.theme,t=e.background;return n.colors[t]}),(function(e){var n=e.theme,t=e.color;return n.colors[t]}),(function(e){var n=e.theme,t=e.padding;return Object(d.a)("padding",t,n)}),(function(e){var n=e.theme,t=e.paddingTop;return Object(d.a)("padding-top",t,n)}),(function(e){var n=e.theme,t=e.paddingRight;return Object(d.a)("padding-right",t,n)}),(function(e){var n=e.theme,t=e.paddingBottom;return Object(d.a)("padding-bottom",t,n)}),(function(e){var n=e.theme,t=e.paddingLeft;return Object(d.a)("padding-left",t,n)}),(function(e){var n=e.theme,t=e.marginLeft;return Object(d.a)("margin-left",t,n)}),(function(e){var n=e.theme,t=e.marginRight;return Object(d.a)("margin-right",t,n)}),(function(e){var n=e.theme,t=e.marginTop;return Object(d.a)("margin-top",t,n)}),(function(e){var n=e.theme,t=e.marginBottom;return Object(d.a)("margin-bottom",t,n)}),(function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var n=e.theme,t=e.hasRadius,r=e.borderRadius;return t?n.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var n=e.borderColor;return e.theme.colors[n]}),(function(e){var n=e.theme,t=e.borderColor,r=e.borderStyle,o=e.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(n.colors[t])}),(function(e){var n=e.theme,t=e.shadow;return n.shadows[t]}),(function(e){return e.pointerEvents}),(function(e){var n=e._hover,t=e.theme;return n?n(t):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var n=e.left;return e.theme.spaces[n]||n}),(function(e){var n=e.right;return e.theme.spaces[n]||n}),(function(e){var n=e.top;return e.theme.spaces[n]||n}),(function(e){var n=e.bottom;return e.theme.spaces[n]||n}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var n=e.width;return e.theme.spaces[n]||n}),(function(e){var n=e.maxWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.minWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.height;return e.theme.spaces[n]||n}),(function(e){var n=e.maxHeight;return e.theme.spaces[n]||n}),(function(e){var n=e.minHeight;return e.theme.spaces[n]||n}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},47:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(1),o=function(e,n){Object(r.useEffect)((function(){var t=new ResizeObserver(n);return Array.isArray(e)?e.map((function(e){return t.observe(e.current)})):t.observe(e.current),function(){t.disconnect()}}),[])}},49:function(e,n,t){"use strict";t.r(n),t.d(n,"Grid",(function(){return w})),t.d(n,"GridItem",(function(){return j}));var r,o=t(6),i=t.n(o),a=t(5),u=t.n(a),s=t(3),c=t.n(s),d=t(1),l=t.n(d),f=t(2),p=t.n(f),g=t(0),h=t.n(g),m=Object(d.createContext)({gap:0,gridCols:12}),v=t(4),y=t(7),b=["gap","gridCols"],x=p()(v.Box)(r||(r=c()(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  ","\n"])),(function(e){return e.gridCols}),(function(e){var n=e.theme,t=e.gap;return Object(y.a)("gap",t,n)})),w=function(e){var n=e.gap,t=e.gridCols,r=u()(e,b);return l.a.createElement(m.Provider,{value:{gap:n,gridCols:t}},l.a.createElement(x,i()({gap:n,gridCols:t},r)))};w.defaultProps={gap:0,gridCols:12},w.propTypes={gap:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),gridCols:h.a.number};var O,S=["col","xs","s"],T=p.a.div(O||(O=c()(["\n  grid-column: span ",";\n  max-width: 100%;\n\n  "," {\n    grid-column: span ",";\n  }\n\n  "," {\n    grid-column: span ",";\n  }\n"])),(function(e){return e.col}),(function(e){return e.theme.mediaQueries.tablet}),(function(e){return e.s}),(function(e){return e.theme.mediaQueries.mobile}),(function(e){return e.xs})),j=function(e){var n=e.col,t=e.xs,r=e.s,o=u()(e,S),i=Object(d.useContext)(m),a=i.gap,s=i.gridCols;return l.a.createElement(T,{gap:a,gridCols:s,col:n,xs:t,s:r},l.a.createElement(v.Box,o))};j.defaultProps={col:void 0,s:void 0,xs:void 0},j.propTypes={col:h.a.number,s:h.a.number,xs:h.a.number}},5:function(e,n,t){var r=t(22);e.exports=function(e,n){if(null==e)return{};var t,o,i=r(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,n,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);n.a=function(e,n,t){var r=n;if(Array.isArray(n)||"object"!==a()(n)||(r=[null==n?void 0:n.desktop,null==n?void 0:n.tablet,null==n?void 0:n.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],d=u[2],l="".concat(e,": ").concat(t.spaces[s],";");return void 0!==c&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(t.spaces[c],";\n        }")),void 0!==d&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(t.spaces[d],";\n        }")),l}var f=t.spaces[r]||r;return"".concat(e,": ").concat(f,";")}}},8:function(e,n,t){"use strict";t.r(n),t.d(n,"Typography",(function(){return l}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},l=t.n(s).a.span.withConfig({shouldForwardProp:function(e,n){return!d[e]&&n(e)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(e){var n=e.theme,t=e.fontWeight;return n.fontWeights[t]}),(function(e){var n=e.theme,t=e.fontSize;return n.fontSizes[t]}),(function(e){var n=e.theme,t=e.lineHeight;return n.lineHeights[t]}),(function(e){var n=e.theme,t=e.textColor;return n.colors[t||"neutral800"]}),(function(e){return e.textTransform}),(function(e){return e.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(e){var n=e.variant,t=e.theme;switch(n){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));l.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},l.propTypes={fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(c)}},9:function(e,n,t){"use strict";t.r(n),t.d(n,"Flex",(function(){return f}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),d=t(4),l={direction:!0},f=c()(d.Box).withConfig({shouldForwardProp:function(e,n){return!l[e]&&n(e)}})(r||(r=i()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap}));f.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},f.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}},96:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return m})),t.d(n,"ActionLayout",(function(){return O})),t.d(n,"ContentLayout",(function(){return S})),t.d(n,"HeaderLayout",(function(){return L})),t.d(n,"BaseHeaderLayout",(function(){return M})),t.d(n,"TwoColsLayout",(function(){return F})),t.d(n,"GridLayout",(function(){return q}));var r,o,i=t(3),a=t.n(i),u=t(1),s=t.n(u),c=t(0),d=t.n(c),l=t(2),f=t.n(l),p=t(4),g=f()(p.Box)(r||(r=a()(["\n  display: grid;\n  grid-template-columns: ",";\n"])),(function(e){return e.hasSideNav?"auto 1fr":"1fr"})),h=f()(p.Box)(o||(o=a()(["\n  overflow-x: hidden;\n"]))),m=function(e){var n=e.sideNav,t=e.children;return s.a.createElement(g,{hasSideNav:Boolean(n)},n,s.a.createElement(h,{paddingBottom:10},t))};m.defaultProps={sideNav:void 0},m.propTypes={children:d.a.node.isRequired,sideNav:d.a.node};var v,y,b=t(9),x=f()(b.Flex)(v||(v=a()(["\n  & > * + * {\n    margin-left: ",";\n  }\n\n  margin-left: ",";\n"])),(function(e){return e.theme.spaces[2]}),(function(e){return e.pullRight?"auto":void 0})),w=f()(x)(y||(y=a()(["\n  flex-shrink: 0;\n"]))),O=function(e){var n=e.startActions,t=e.endActions;return n||t?s.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},s.a.createElement(p.Box,{paddingBottom:4},s.a.createElement(b.Flex,{justifyContent:"space-between",alignItems:"flex-start"},n&&s.a.createElement(x,{wrap:"wrap"},n),t&&s.a.createElement(w,{pullRight:!0},t)))):null};O.defaultProps={endActions:void 0,startActions:void 0},O.propTypes={endActions:d.a.node,startActions:d.a.node};var S=function(e){var n=e.children;return s.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},n)};S.propTypes={children:d.a.node.isRequired};var T,j=t(5),E=t.n(j),_=t(6),C=t.n(_),R=t(10),A=t.n(R),B=t(8),z=t(47),P=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],k=function(){var e=Object(u.useRef)(null),n=Object(u.useState)(null),t=A()(n,2),r=t[0],o=t[1],i=function(e){var n=Object(u.useRef)(null),t=Object(u.useState)(!0),r=A()(t,2),o=r[0],i=r[1],a=function(e){var n=A()(e,1)[0];i(n.isIntersecting)};return Object(u.useEffect)((function(){var t=n.current,r=new IntersectionObserver(a,e);return t&&r.observe(n.current),function(){t&&r.disconnect()}}),[n,e]),[n,o]}({root:null,rootMargin:"0px",threshold:0}),a=A()(i,2),s=a[0],c=a[1];return Object(z.a)(s,(function(){s.current&&o(s.current.getBoundingClientRect())})),Object(u.useEffect)((function(){e.current&&o(e.current.getBoundingClientRect())}),[e]),{containerRef:s,isVisible:c,baseHeaderLayoutRef:e,headerSize:r}},L=function(e){var n=k(),t=n.containerRef,r=n.isVisible,o=n.baseHeaderLayoutRef,i=n.headerSize;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{height:null==i?void 0:i.height},ref:t},r&&s.a.createElement(M,C()({ref:o},e))),!r&&s.a.createElement(M,C()({},e,{sticky:!0,width:null==i?void 0:i.width})))};L.displayName="HeaderLayout";var H=f()(p.Box)(T||(T=a()(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: ","px;\n  z-index: 4;\n  box-shadow: ",";\n"])),(function(e){return e.width}),(function(e){return e.theme.shadows.tableShadow})),M=s.a.forwardRef((function(e,n){var t=e.navigationAction,r=e.primaryAction,o=e.secondaryAction,i=e.subtitle,a=e.title,u=e.sticky,c=e.width,d=E()(e,P);return u?s.a.createElement(H,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:c,"data-strapi-header-sticky":!0},s.a.createElement(b.Flex,{justifyContent:"space-between"},s.a.createElement(b.Flex,null,t&&s.a.createElement(p.Box,{paddingRight:3},t),s.a.createElement(p.Box,null,s.a.createElement(B.Typography,C()({variant:"beta",as:"h1"},d),a),s.a.createElement(B.Typography,{variant:"pi",textColor:"neutral600"},i)),o?s.a.createElement(p.Box,{paddingLeft:4},o):null),s.a.createElement(b.Flex,null,r?s.a.createElement(p.Box,{paddingLeft:2},r):void 0))):s.a.createElement(p.Box,{ref:n,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:t?6:8,background:"neutral100","data-strapi-header":!0},t?s.a.createElement(p.Box,{paddingBottom:2},t):null,s.a.createElement(b.Flex,{justifyContent:"space-between"},s.a.createElement(b.Flex,null,s.a.createElement(B.Typography,C()({as:"h1",variant:"alpha"},d),a),o?s.a.createElement(p.Box,{paddingLeft:4},o):null),r),s.a.createElement(B.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},i))}));M.displayName="BaseHeaderLayout",M.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},M.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,sticky:d.a.bool,subtitle:d.a.string,title:d.a.string.isRequired,width:d.a.number},L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},L.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,subtitle:d.a.string,title:d.a.string.isRequired};var I,W=t(49),F=function(e){var n=e.startCol,t=e.endCol;return s.a.createElement(W.Grid,{gap:4},s.a.createElement(W.GridItem,{col:9,s:12},s.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},n)),s.a.createElement(W.GridItem,{col:3,s:12},s.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},t)))};F.propTypes={endCol:d.a.node.isRequired,startCol:d.a.node.isRequired};var q=f.a.div(I||(I=a()(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: ",";\n"])),(function(e){return e.theme.spaces[4]}));q.propTypes={children:d.a.node.isRequired}}})}));

/***/ })

}]);