(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[3650],{

/***/ 80117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(41706);
  } else {}
  

/***/ }),

/***/ 41706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=109)}({0:function(n,e,t){n.exports=t(17)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(23),o=t(24),i=t(20),a=t(25);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},109:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return v})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(6),i=t.n(o),a=t(5),u=t.n(a),s=t(3),c=t.n(s),f=t(1),d=t.n(f),p=t(0),l=t.n(p),m=t(2),b=t.n(m),h=["labelledBy"],y=b.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(n){var e=n.labelledBy,t=u()(n,h),r=e||"main-content-title";return d.a.createElement(y,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:l.a.string};var x,g=t(4),O=b()(g.Box)(x||(x=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return d.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},17:function(n,e,t){"use strict";var r=t(18);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},18:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},20:function(n,e,t){var r=t(19);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return p}));var r,o=t(3),i=t.n(o),a=t(0),u=t.n(a),s=t(2),c=t.n(s),f=t(7),d={color:!0},p=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(n,e,t){var r=t(22);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],d="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var p=t.spaces[r]||r;return"".concat(n,": ").concat(p,";")}}}})}));

/***/ }),

/***/ 82203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.PaginationFooter=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Box=__webpack_require__(94117);var _Flex=__webpack_require__(40264);var _helperPlugin=__webpack_require__(68547);var PaginationFooter=function PaginationFooter(_ref){var pagination=_ref.pagination;return/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingTop:6},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{alignItems:"flex-end",justifyContent:"space-between"},/*#__PURE__*/_react["default"].createElement(_helperPlugin.PageSizeURLQuery,null),/*#__PURE__*/_react["default"].createElement(_helperPlugin.PaginationURLQuery,{pagination:pagination})));};exports.PaginationFooter=PaginationFooter;PaginationFooter.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}};PaginationFooter.propTypes={pagination:_propTypes["default"].shape({page:_propTypes["default"].number,pageCount:_propTypes["default"].number,pageSize:_propTypes["default"].number,total:_propTypes["default"].number})};

/***/ }),

/***/ 79909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.useAssets=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=__webpack_require__(67294);var _reactQuery=__webpack_require__(68960);var _LiveRegions=__webpack_require__(67422);var _helperPlugin=__webpack_require__(68547);var _reactIntl=__webpack_require__(97132);var _utils=__webpack_require__(78763);var useAssets=function useAssets(_ref){var skipWhen=_ref.skipWhen;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,_helperPlugin.useNotification)();var _useNotifyAT=(0,_LiveRegions.useNotifyAT)(),notifyStatus=_useNotifyAT.notifyStatus;var _useQueryParams=(0,_helperPlugin.useQueryParams)(),_useQueryParams2=(0,_slicedToArray2["default"])(_useQueryParams,1),rawQuery=_useQueryParams2[0].rawQuery;var dataRequestURL=(0,_utils.getRequestUrl)('files');var getAssets=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils.axiosInstance.get("".concat(dataRequestURL).concat(rawQuery));case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data;return _context.abrupt("return",data);case 5:case"end":return _context.stop();}}},_callee);}));return function getAssets(){return _ref2.apply(this,arguments);};}();var _useQuery=(0,_reactQuery.useQuery)(["assets",rawQuery],getAssets,{enabled:!skipWhen,staleTime:0,cacheTime:0}),data=_useQuery.data,error=_useQuery.error,isLoading=_useQuery.isLoading;(0,_react.useEffect)(function(){if(data){notifyStatus(formatMessage({id:'list.asset.at.finished',defaultMessage:'The assets have finished loading.'}));}},[data,notifyStatus,formatMessage]);(0,_react.useEffect)(function(){if(error){toggleNotification({type:'warning',message:{id:'notification.error'}});}},[error,toggleNotification]);return{data:data,error:error,isLoading:isLoading};};exports.useAssets=useAssets;

/***/ }),

/***/ 90873:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.useBulkRemoveAsset=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _reactQuery=__webpack_require__(68960);var _helperPlugin=__webpack_require__(68547);var _removeAssetQuery=__webpack_require__(9709);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var bulkRemoveQuery=function bulkRemoveQuery(assetIds){var promises=assetIds.map(function(assetId){return(0,_removeAssetQuery.removeAssetRequest)(assetId);});return Promise.all(promises);};var useBulkRemoveAsset=function useBulkRemoveAsset(){var toggleNotification=(0,_helperPlugin.useNotification)();var queryClient=(0,_reactQuery.useQueryClient)();var mutation=(0,_reactQuery.useMutation)(bulkRemoveQuery,{onSuccess:function onSuccess(){// Coupled with the cache of useAssets
queryClient.refetchQueries(['assets'],{active:true});queryClient.refetchQueries(['asset-count'],{active:true});toggleNotification({type:'success',message:{id:'modal.remove.success-label',defaultMessage:'The asset has been successfully removed.'}});},onError:function onError(error){toggleNotification({type:'warning',message:error.message});}});var removeAssets=function removeAssets(assetIds){return mutation.mutateAsync(assetIds);};return _objectSpread(_objectSpread({},mutation),{},{removeAssets:removeAssets});};exports.useBulkRemoveAsset=useBulkRemoveAsset;

/***/ }),

/***/ 91338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.MediaLibrary=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(35395);var _Main=__webpack_require__(80117);var _Button=__webpack_require__(64459);var _Plus=_interopRequireDefault(__webpack_require__(80768));var _Box=__webpack_require__(94117);var _BaseCheckbox=__webpack_require__(46458);var _UploadAssetDialog=__webpack_require__(91386);var _EditAssetDialog=__webpack_require__(80898);var _AssetList=__webpack_require__(97234);var _SortPicker=_interopRequireDefault(__webpack_require__(38069));var _useAssets2=__webpack_require__(79909);var _utils=__webpack_require__(78763);var _Filters=__webpack_require__(82817);var _PaginationFooter=__webpack_require__(82203);var _useMediaLibraryPermissions=__webpack_require__(87004);var _BulkDeleteButton=__webpack_require__(26156);var _EmptyAssets=__webpack_require__(43290);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}// useState
var BoxWithHeight=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"MediaLibrary__BoxWithHeight",componentId:"sc-1gb6n0n-0"})(["height:","rem;display:flex;align-items:center;"],32/16);var MediaLibrary=function MediaLibrary(){var _data$pagination;var _useMediaLibraryPermi=(0,_useMediaLibraryPermissions.useMediaLibraryPermissions)(),canRead=_useMediaLibraryPermi.canRead,canCreate=_useMediaLibraryPermi.canCreate,canUpdate=_useMediaLibraryPermi.canUpdate,canCopyLink=_useMediaLibraryPermi.canCopyLink,canDownload=_useMediaLibraryPermi.canDownload,isLoadingPermissions=_useMediaLibraryPermi.isLoading;var _useQueryParams=(0,_helperPlugin.useQueryParams)(),_useQueryParams2=(0,_slicedToArray2["default"])(_useQueryParams,2),query=_useQueryParams2[0].query,setQuery=_useQueryParams2[1];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useAssets=(0,_useAssets2.useAssets)({skipWhen:!canRead}),data=_useAssets.data,isLoading=_useAssets.isLoading,error=_useAssets.error;var handleChangeSort=function handleChangeSort(value){setQuery({sort:value});};var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),showUploadAssetDialog=_useState2[0],setShowUploadAssetDialog=_useState2[1];var _useState3=(0,_react.useState)(undefined),_useState4=(0,_slicedToArray2["default"])(_useState3,2),assetToEdit=_useState4[0],setAssetToEdit=_useState4[1];var _useSelectionState=(0,_helperPlugin.useSelectionState)('id',[]),_useSelectionState2=(0,_slicedToArray2["default"])(_useSelectionState,2),selected=_useSelectionState2[0],_useSelectionState2$=_useSelectionState2[1],selectOne=_useSelectionState2$.selectOne,selectAll=_useSelectionState2$.selectAll;var toggleUploadAssetDialog=function toggleUploadAssetDialog(){return setShowUploadAssetDialog(function(prev){return!prev;});};(0,_helperPlugin.useFocusWhenNavigate)();var loading=isLoadingPermissions||isLoading;var assets=data===null||data===void 0?void 0:data.results;var assetCount=(data===null||data===void 0?void 0:(_data$pagination=data.pagination)===null||_data$pagination===void 0?void 0:_data$pagination.total)||0;var isFiltering=Boolean(query._q||query.filters);return/*#__PURE__*/_react["default"].createElement(_Layout.Layout,null,/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":loading},/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{title:formatMessage({id:(0,_utils.getTrad)('plugin.name'),defaultMessage:'Media Library'}),subtitle:formatMessage({id:(0,_utils.getTrad)(assetCount>0?'header.content.assets-multiple':'header.content.assets.assets-single'),defaultMessage:'0 assets'},{number:assetCount}),primaryAction:canCreate?/*#__PURE__*/_react["default"].createElement(_Button.Button,{startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null),onClick:toggleUploadAssetDialog},formatMessage({id:(0,_utils.getTrad)('header.actions.add-assets'),defaultMessage:'Add new assets'})):undefined}),/*#__PURE__*/_react["default"].createElement(_Layout.ActionLayout,{startActions:/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,canUpdate&&/*#__PURE__*/_react["default"].createElement(BoxWithHeight,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:true,borderColor:"neutral200"},/*#__PURE__*/_react["default"].createElement(_BaseCheckbox.BaseCheckbox,{"aria-label":formatMessage({id:(0,_utils.getTrad)('bulk.select.label'),defaultMessage:'Select all assets'}),indeterminate:(assets===null||assets===void 0?void 0:assets.length)>0&&selected.length>0&&selected.length!==(assets===null||assets===void 0?void 0:assets.length),value:(assets===null||assets===void 0?void 0:assets.length)>0&&selected.length===(assets===null||assets===void 0?void 0:assets.length),onChange:function onChange(){return selectAll(assets);}})),canRead&&/*#__PURE__*/_react["default"].createElement(_SortPicker["default"],{onChangeSort:handleChangeSort}),canRead&&/*#__PURE__*/_react["default"].createElement(_Filters.Filters,null)),endActions:/*#__PURE__*/_react["default"].createElement(_helperPlugin.SearchURLQuery,{label:formatMessage({id:(0,_utils.getTrad)('search.label'),defaultMessage:'Search for an asset'})})}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,selected.length>0&&/*#__PURE__*/_react["default"].createElement(_BulkDeleteButton.BulkDeleteButton,{selectedAssets:selected,onSuccess:selectAll}),loading&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null),error&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.AnErrorOccurred,null),!canRead&&/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoPermissions,null),canRead&&assets&&assets.length===0&&/*#__PURE__*/_react["default"].createElement(_EmptyAssets.EmptyAssets,{action:canCreate&&!isFiltering?/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null),onClick:toggleUploadAssetDialog},formatMessage({id:(0,_utils.getTrad)('header.actions.add-assets'),defaultMessage:'Add new assets'})):undefined,content:// eslint-disable-next-line no-nested-ternary
isFiltering?formatMessage({id:(0,_utils.getTrad)('list.assets-empty.title-withSearch'),defaultMessage:'There are no assets with the applied filters'}):canCreate?formatMessage({id:(0,_utils.getTrad)('list.assets.empty'),defaultMessage:'Upload your first assets...'}):formatMessage({id:(0,_utils.getTrad)('list.assets.empty.no-permissions'),defaultMessage:'The asset list is empty'})}),canRead&&assets&&assets.length>0&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_AssetList.AssetList,{assets:assets,onEditAsset:setAssetToEdit,onSelectAsset:selectOne,selectedAssets:selected}),(data===null||data===void 0?void 0:data.pagination)&&/*#__PURE__*/_react["default"].createElement(_PaginationFooter.PaginationFooter,{pagination:data.pagination})))),showUploadAssetDialog&&/*#__PURE__*/_react["default"].createElement(_UploadAssetDialog.UploadAssetDialog,{onClose:toggleUploadAssetDialog,trackedLocation:"upload"}),assetToEdit&&/*#__PURE__*/_react["default"].createElement(_EditAssetDialog.EditAssetDialog,{onClose:function onClose(){return setAssetToEdit(undefined);},asset:assetToEdit,canUpdate:canUpdate,canCopyLink:canCopyLink,canDownload:canDownload,trackedLocation:"upload"}));};exports.MediaLibrary=MediaLibrary;

/***/ }),

/***/ 26156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.BulkDeleteButton=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Typography=__webpack_require__(33483);var _Button=__webpack_require__(64459);var _Stack=__webpack_require__(9524);var _Trash=_interopRequireDefault(__webpack_require__(18568));var _helperPlugin=__webpack_require__(68547);var _useBulkRemoveAsset2=__webpack_require__(90873);var _getTrad=_interopRequireDefault(__webpack_require__(6955));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var BulkDeleteButton=function BulkDeleteButton(_ref){var selectedAssets=_ref.selectedAssets,onSuccess=_ref.onSuccess;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),showConfirmDialog=_useState2[0],setShowConfirmDialog=_useState2[1];var _useBulkRemoveAsset=(0,_useBulkRemoveAsset2.useBulkRemoveAsset)(),isLoading=_useBulkRemoveAsset.isLoading,removeAssets=_useBulkRemoveAsset.removeAssets;var handleConfirmRemove=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return removeAssets(selectedAssets.map(function(_ref3){var id=_ref3.id;return id;}));case 2:onSuccess();case 3:case"end":return _context.stop();}}},_callee);}));return function handleConfirmRemove(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{horizontal:true,spacing:2,paddingBottom:5},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"epsilon",textColor:"neutral600"},formatMessage({id:(0,_getTrad["default"])('list.assets.selected'),defaultMessage:'{number, plural, =0 {No asset} one {1 asset} other {# assets}} selected'},{number:selectedAssets.length})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"danger-light",size:"S",startIcon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null),onClick:function onClick(){return setShowConfirmDialog(true);}},formatMessage({id:'global.delete',defaultMessage:'Delete'}))),/*#__PURE__*/_react["default"].createElement(_helperPlugin.ConfirmDialog,{isConfirmButtonLoading:isLoading,isOpen:showConfirmDialog,onToggleDialog:function onToggleDialog(){return setShowConfirmDialog(false);},onConfirm:handleConfirmRemove}));};exports.BulkDeleteButton=BulkDeleteButton;BulkDeleteButton.propTypes={selectedAssets:_propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,onSuccess:_propTypes["default"].func.isRequired};

/***/ }),

/***/ 82817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.Filters=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _Button=__webpack_require__(64459);var _helperPlugin=__webpack_require__(68547);var _Filter=_interopRequireDefault(__webpack_require__(23980));var _reactIntl=__webpack_require__(97132);var _FilterList=_interopRequireDefault(__webpack_require__(82708));var _FilterPopover=_interopRequireDefault(__webpack_require__(6229));var _displayedFilters=_interopRequireDefault(__webpack_require__(65326));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Filters=function Filters(){var _query$filters;var buttonRef=(0,_react.useRef)(null);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),isVisible=_useState2[0],setVisible=_useState2[1];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useQueryParams=(0,_helperPlugin.useQueryParams)(),_useQueryParams2=(0,_slicedToArray2["default"])(_useQueryParams,2),query=_useQueryParams2[0].query,setQuery=_useQueryParams2[1];var filters=(query===null||query===void 0?void 0:(_query$filters=query.filters)===null||_query$filters===void 0?void 0:_query$filters.$and)||[];var toggleFilter=function toggleFilter(){return setVisible(function(prev){return!prev;});};var handleRemoveFilter=function handleRemoveFilter(nextFilters){setQuery({filters:{$and:nextFilters},page:1});};var handleSubmit=function handleSubmit(filters){setQuery({filters:{$and:filters},page:1});};return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"tertiary",ref:buttonRef,startIcon:/*#__PURE__*/_react["default"].createElement(_Filter["default"],null),onClick:toggleFilter,size:"S"},formatMessage({id:'app.utils.filters',defaultMessage:'Filters'})),isVisible&&/*#__PURE__*/_react["default"].createElement(_FilterPopover["default"],{displayedFilters:_displayedFilters["default"],filters:filters,onSubmit:handleSubmit,onToggle:toggleFilter,source:buttonRef}),/*#__PURE__*/_react["default"].createElement(_FilterList["default"],{appliedFilters:filters,filtersSchema:_displayedFilters["default"],onRemoveFilter:handleRemoveFilter}));};exports.Filters=Filters;

/***/ }),

/***/ 16466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactHelmet=__webpack_require__(15482);var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _utils=__webpack_require__(78763);var _MediaLibrary=__webpack_require__(91338);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var App=function App(){var _useQueryParams=(0,_helperPlugin.useQueryParams)(),_useQueryParams2=(0,_slicedToArray2["default"])(_useQueryParams,2),rawQuery=_useQueryParams2[0].rawQuery,setQuery=_useQueryParams2[1];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var title=formatMessage({id:(0,_utils.getTrad)('plugin.name'),defaultMessage:'Media Library'});(0,_react.useEffect)(function(){if(!rawQuery){setQuery({sort:'updatedAt:DESC',page:1,pageSize:10});}},[rawQuery,setQuery]);if(rawQuery){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet,{title:title}),/*#__PURE__*/_react["default"].createElement(_MediaLibrary.MediaLibrary,null));}return null;};var _default=App;exports["default"]=_default;

/***/ })

}]);