"use strict";
(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[302],{

/***/ 66554:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=exports.SingleSignOn=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireWildcard(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _Check=_interopRequireDefault(__webpack_require__(84734));var _Layout=__webpack_require__(35395);var _Button=__webpack_require__(64459);var _Main=__webpack_require__(80117);var _Stack=__webpack_require__(9524);var _Typography=__webpack_require__(33483);var _ToggleInput=__webpack_require__(53575);var _Select=__webpack_require__(2632);var _Grid=__webpack_require__(39272);var _reactIntl=__webpack_require__(97132);var _isEqual=_interopRequireDefault(__webpack_require__(18446));var _utils=__webpack_require__(26595);var _hooks=__webpack_require__(63376);var _permissions=_interopRequireDefault(__webpack_require__(46114));var _schema=_interopRequireDefault(__webpack_require__(46718));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var ssoPermissions=_objectSpread(_objectSpread({},_permissions["default"].settings.sso),{},{readRoles:_permissions["default"].settings.roles.read});var SingleSignOn=function SingleSignOn(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRBAC=(0,_helperPlugin.useRBAC)(ssoPermissions),isLoadingForPermissions=_useRBAC.isLoading,_useRBAC$allowedActio=_useRBAC.allowedActions,canUpdate=_useRBAC$allowedActio.canUpdate,canReadRoles=_useRBAC$allowedActio.canReadRoles;var _useSettingsForm=(0,_hooks.useSettingsForm)((0,_utils.getRequestUrl)('providers/options'),_schema["default"],function(){},['autoRegister','defaultRole']),_useSettingsForm2=(0,_slicedToArray2["default"])(_useSettingsForm,3),_useSettingsForm2$=_useSettingsForm2[0],formErrors=_useSettingsForm2$.formErrors,initialData=_useSettingsForm2$.initialData,isLoading=_useSettingsForm2$.isLoading,modifiedData=_useSettingsForm2$.modifiedData,showHeaderButtonLoader=_useSettingsForm2$.showHeaderButtonLoader,// eslint-disable-next-line no-unused-vars
dispatch=_useSettingsForm2[1],_useSettingsForm2$2=_useSettingsForm2[2],handleChange=_useSettingsForm2$2.handleChange,handleSubmit=_useSettingsForm2$2.handleSubmit;var _useRolesList=(0,_hooks.useRolesList)(canReadRoles),roles=_useRolesList.roles;(0,_helperPlugin.useFocusWhenNavigate)();var showLoader=isLoadingForPermissions||isLoading;(0,_react.useEffect)(function(){if(formErrors.defaultRole){var selector="[name=\"defaultRole\"]";document.querySelector(selector).focus();}},[formErrors]);var isHeaderButtonDisabled=(0,_isEqual["default"])(initialData,modifiedData);return/*#__PURE__*/_react["default"].createElement(_Layout.Layout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"SSO"}),/*#__PURE__*/_react["default"].createElement(_Main.Main,{tabIndex:-1},/*#__PURE__*/_react["default"].createElement("form",{onSubmit:function onSubmit(e){if(isHeaderButtonDisabled){e.preventDefault();return;}handleSubmit(e);}},/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{"data-testid":"save-button",disabled:isHeaderButtonDisabled,loading:showHeaderButtonLoader,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),type:"submit",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:formatMessage({id:'Settings.sso.title',defaultMessage:'Single Sign-On'}),subtitle:formatMessage({id:'Settings.sso.description',defaultMessage:'Configure the settings for the Single Sign-On feature.'})}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,showLoader?/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null):/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'global.settings',defaultMessage:'Settings'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,m:6,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!canUpdate,checked:modifiedData.autoRegister,hint:formatMessage({id:'Settings.sso.form.registration.description',defaultMessage:'Create new user on SSO login if no account exists'}),label:formatMessage({id:'Settings.sso.form.registration.label',defaultMessage:'Auto-registration'}),name:"autoRegister",offLabel:formatMessage({id:'app.components.ToggleCheckbox.off-label',defaultMessage:'Off'}),onLabel:formatMessage({id:'app.components.ToggleCheckbox.on-label',defaultMessage:'On'}),onChange:function onChange(e){handleChange({target:{name:'autoRegister',value:e.target.checked}});}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,m:6,s:12},/*#__PURE__*/_react["default"].createElement(_Select.Select,{disabled:!canUpdate,hint:formatMessage({id:'Settings.sso.form.defaultRole.description',defaultMessage:'It will attach the new authenticated user to the selected role'}),error:formErrors.defaultRole?formatMessage({id:formErrors.defaultRole.id,defaultMessage:formErrors.defaultRole.id}):'',label:formatMessage({id:'Settings.sso.form.defaultRole.label',defaultMessage:'Default role'}),name:"defaultRole",onChange:function onChange(value){handleChange({target:{name:'defaultRole',value:value}});},placeholder:formatMessage({id:'components.InputSelect.option.placeholder',defaultMessage:'Choose here'}),value:modifiedData.defaultRole},roles.map(function(_ref){var id=_ref.id,name=_ref.name;return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:id,value:id.toString()},name);})))))))));};exports.SingleSignOn=SingleSignOn;var ProtectedSSO=function ProtectedSSO(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:ssoPermissions.main},/*#__PURE__*/_react["default"].createElement(SingleSignOn,null));};var _default=ProtectedSSO;exports["default"]=_default;

/***/ }),

/***/ 46718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _helperPlugin=__webpack_require__(68547);var yup=_interopRequireWildcard(__webpack_require__(53209));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var schema=yup.object().shape({autoRegister:yup.bool().required(_helperPlugin.translatedErrors.required),defaultRole:yup.mixed().when('autoRegister',function(value,initSchema){return value?initSchema.required(_helperPlugin.translatedErrors.required):initSchema.nullable();})});var _default=schema;exports["default"]=_default;

/***/ })

}]);