"use strict";
(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[6430],{

/***/ 15991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=__webpack_require__(67294);var DataManagerContext=/*#__PURE__*/(0,_react.createContext)();var _default=DataManagerContext;exports["default"]=_default;

/***/ }),

/***/ 16374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(44769);var _helperPlugin=__webpack_require__(68547);var _DataManagerProvider=_interopRequireDefault(__webpack_require__(69075));var _pluginId=_interopRequireDefault(__webpack_require__(60937));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */ // Utils
// Containers
var View=/*#__PURE__*/(0,_react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(5395), __webpack_require__.e(2482), __webpack_require__.e(2689)]).then(__webpack_require__.bind(__webpack_require__, 22689));});var App=function App(){return/*#__PURE__*/_react["default"].createElement(_DataManagerProvider["default"],null,/*#__PURE__*/_react["default"].createElement(_react.Suspense,{fallback:/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"/plugins/".concat(_pluginId["default"]),component:View,exact:true}),/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{component:_helperPlugin.NotFound}))));};var _default=App;exports["default"]=_default;

/***/ }),

/***/ 39772:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.SUBMIT_NAVIGATION_SUCCEEDED=exports.SUBMIT_NAVIGATION_ERROR=exports.SUBMIT_NAVIGATION=exports.RESET_NAVIGATION_DATA=exports.RELOAD_PLUGIN=exports.GET_NAVIGATION_DATA_SUCCEEDED=exports.GET_NAVIGATION_DATA=exports.GET_LIST_DATA_SUCCEEDED=exports.GET_LIST_DATA=exports.GET_CONTENT_TYPE_ITEMS_SUCCEEDED=exports.GET_CONTENT_TYPE_ITEMS=exports.GET_CONFIG_SUCCEEDED=exports.GET_CONFIG=exports.CHANGE_NAVIGATION_POPUP_VISIBILITY=exports.CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY=exports.CHANGE_NAVIGATION_DATA=void 0;var GET_LIST_DATA="GET_LIST_DATA";exports.GET_LIST_DATA=GET_LIST_DATA;var GET_LIST_DATA_SUCCEEDED="GET_LIST_DATA_SUCCEEDED";exports.GET_LIST_DATA_SUCCEEDED=GET_LIST_DATA_SUCCEEDED;var GET_NAVIGATION_DATA="GET_NAVIGATION_DATA";exports.GET_NAVIGATION_DATA=GET_NAVIGATION_DATA;var GET_NAVIGATION_DATA_SUCCEEDED="GET_NAVIGATION_DATA_SUCCEEDED";exports.GET_NAVIGATION_DATA_SUCCEEDED=GET_NAVIGATION_DATA_SUCCEEDED;var CHANGE_NAVIGATION_DATA="CHANGE_NAVIGATION_DATA";exports.CHANGE_NAVIGATION_DATA=CHANGE_NAVIGATION_DATA;var RESET_NAVIGATION_DATA="RESET_NAVIGATION_DATA";exports.RESET_NAVIGATION_DATA=RESET_NAVIGATION_DATA;var CHANGE_NAVIGATION_POPUP_VISIBILITY="CHANGE_NAVIGATION_POPUP_VISIBILITY";exports.CHANGE_NAVIGATION_POPUP_VISIBILITY=CHANGE_NAVIGATION_POPUP_VISIBILITY;var CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY="CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY";exports.CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY=CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY;var GET_CONTENT_TYPE_ITEMS="GET_CONTENT_TYPE_ITEMS";exports.GET_CONTENT_TYPE_ITEMS=GET_CONTENT_TYPE_ITEMS;var GET_CONTENT_TYPE_ITEMS_SUCCEEDED="GET_CONTENT_TYPE_ITEMS_SUCCEEDED";exports.GET_CONTENT_TYPE_ITEMS_SUCCEEDED=GET_CONTENT_TYPE_ITEMS_SUCCEEDED;var GET_CONFIG="GET_CONFIG";exports.GET_CONFIG=GET_CONFIG;var GET_CONFIG_SUCCEEDED="GET_CONFIG_SUCCEEDED";exports.GET_CONFIG_SUCCEEDED=GET_CONFIG_SUCCEEDED;var SUBMIT_NAVIGATION="SUBMIT_NAVIGATION";exports.SUBMIT_NAVIGATION=SUBMIT_NAVIGATION;var SUBMIT_NAVIGATION_SUCCEEDED="SUBMIT_NAVIGATION_SUCCEEDED";exports.SUBMIT_NAVIGATION_SUCCEEDED=SUBMIT_NAVIGATION_SUCCEEDED;var SUBMIT_NAVIGATION_ERROR="SUBMIT_NAVIGATION_ERROR";exports.SUBMIT_NAVIGATION_ERROR=SUBMIT_NAVIGATION_ERROR;var RELOAD_PLUGIN="RELOAD_PLUGIN";exports.RELOAD_PLUGIN=RELOAD_PLUGIN;

/***/ }),

/***/ 69075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(87030);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(44769);var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _DataManagerContext=_interopRequireDefault(__webpack_require__(15991));var _getTrad=_interopRequireDefault(__webpack_require__(47452));var _pluginId=_interopRequireDefault(__webpack_require__(60937));var _init=_interopRequireDefault(__webpack_require__(80281));var _reducer=_interopRequireWildcard(__webpack_require__(83908));var _actions=__webpack_require__(39772);var _parsers=__webpack_require__(20599);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var DataManagerProvider=function DataManagerProvider(_ref){var children=_ref.children;var _useReducer=(0,_react.useReducer)(_reducer["default"],_reducer.initialState,_init["default"]),_useReducer2=(0,_slicedToArray2["default"])(_useReducer,2),reducerState=_useReducer2[0],dispatch=_useReducer2[1];var toggleNotification=(0,_helperPlugin.useNotification)();var _useAppInfos=(0,_helperPlugin.useAppInfos)(),autoReload=_useAppInfos.autoReload;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var items=reducerState.items,config=reducerState.config,activeItem=reducerState.activeItem,initialData=reducerState.initialData,changedActiveItem=reducerState.changedActiveItem,navigationPopupOpened=reducerState.navigationPopupOpened,navigationItemPopupOpened=reducerState.navigationItemPopupOpened,isLoading=reducerState.isLoading,isLoadingForDataToBeSet=reducerState.isLoadingForDataToBeSet,isLoadingForDetailsDataToBeSet=reducerState.isLoadingForDetailsDataToBeSet,isLoadingForAdditionalDataToBeSet=reducerState.isLoadingForAdditionalDataToBeSet,isLoadingForSubmit=reducerState.isLoadingForSubmit,error=reducerState.error;var _useLocation=(0,_reactRouterDom.useLocation)(),pathname=_useLocation.pathname;var formatMessageRef=(0,_react.useRef)();formatMessageRef.current=formatMessage;var getLayoutSettingRef=(0,_react.useRef)();getLayoutSettingRef.current=function(settingName){return(0,_lodash.get)({},["settings",settingName],"");};var isInDevelopmentMode=autoReload;var abortController=new AbortController();var signal=abortController.signal;var getDataRef=(0,_react.useRef)();var menuViewMatch=(0,_reactRouterDom.useRouteMatch)("/plugins/".concat(_pluginId["default"],"/:id"));var activeId=(0,_lodash.get)(menuViewMatch,"params.id",null);var getNavigation=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(id,cfg){var _activeItem;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(!(activeId||id)){_context.next=7;break;}dispatch({type:_actions.GET_NAVIGATION_DATA});_context.next=5;return(0,_helperPlugin.request)("/".concat(_pluginId["default"],"/").concat(activeId||id),{method:"GET",signal:signal});case 5:_activeItem=_context.sent;dispatch({type:_actions.GET_NAVIGATION_DATA_SUCCEEDED,activeItem:_objectSpread(_objectSpread({},_activeItem),{},{items:(0,_parsers.prepareItemToViewPayload)(_activeItem.items,null,cfg)})});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context["catch"](0);console.error({err:_context.t0});toggleNotification({type:'warning',message:{id:(0,_getTrad["default"])('notification.error')}});case 13:case"end":return _context.stop();}}},_callee,null,[[0,9]]);}));return function getNavigation(_x,_x2){return _ref2.apply(this,arguments);};}();getDataRef.current=/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id){var _config,_items;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;dispatch({type:_actions.GET_CONFIG});_context2.next=4;return(0,_helperPlugin.request)("/".concat(_pluginId["default"],"/config"),{method:"GET",signal:signal});case 4:_config=_context2.sent;dispatch({type:_actions.GET_CONFIG_SUCCEEDED,config:_config});dispatch({type:_actions.GET_LIST_DATA});_context2.next=9;return(0,_helperPlugin.request)("/".concat(_pluginId["default"]),{method:"GET",signal:signal});case 9:_items=_context2.sent;dispatch({type:_actions.GET_LIST_DATA_SUCCEEDED,items:_items});if(!(id||!(0,_lodash.isEmpty)(_items))){_context2.next=14;break;}_context2.next=14;return getNavigation(id||(0,_lodash.first)(_items).id,_config);case 14:_context2.next=20;break;case 16:_context2.prev=16;_context2.t0=_context2["catch"](0);console.error({err:_context2.t0});toggleNotification({type:'warning',message:{id:(0,_getTrad["default"])('notification.error')}});case 20:case"end":return _context2.stop();}}},_callee2,null,[[0,16]]);}));return function(_x3){return _ref3.apply(this,arguments);};}();(0,_react.useEffect)(function(){getDataRef.current();},[]);(0,_react.useEffect)(function(){// We need to set the modifiedData after the data has been retrieved
// and also on pathname change
if(!isLoading){getNavigation();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading,pathname]);(0,_react.useEffect)(function(){if(!autoReload){toggleNotification({type:'info',message:{id:(0,_getTrad["default"])('notification.info.autoreaload-disable')}});}},[autoReload]);var getContentTypeItems=/*#__PURE__*/function(){var _ref5=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref4){var modelUID,query,url,queryParams,contentTypeItems,fetchedContentType,isArray;return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:modelUID=_ref4.modelUID,query=_ref4.query;dispatch({type:_actions.GET_CONTENT_TYPE_ITEMS});url="/navigation/content-type-items/".concat(modelUID);queryParams=new URLSearchParams();queryParams.append('_publicationState','preview');if(query){queryParams.append('_q',query);}_context3.next=8;return(0,_helperPlugin.request)("".concat(url,"?").concat(queryParams.toString()),{method:"GET",signal:signal});case 8:contentTypeItems=_context3.sent;fetchedContentType=(0,_lodash.find)(config.contentTypes,function(ct){return ct.uid===modelUID;});isArray=Array.isArray(contentTypeItems);dispatch({type:_actions.GET_CONTENT_TYPE_ITEMS_SUCCEEDED,contentTypeItems:(isArray?contentTypeItems:[contentTypeItems]).map(function(item){return _objectSpread(_objectSpread({},item),{},{__collectionUid:(0,_lodash.get)(fetchedContentType,'collectionUid',modelUID)});})});case 12:case"end":return _context3.stop();}}},_callee3);}));return function getContentTypeItems(_x4){return _ref5.apply(this,arguments);};}();var handleChangeSelection=function handleChangeSelection(id){getNavigation(id,config);};var handleChangeNavigationPopupVisibility=function handleChangeNavigationPopupVisibility(visible){dispatch({type:_actions.CHANGE_NAVIGATION_POPUP_VISIBILITY,navigationPopupOpened:visible});};var handleChangeNavigationItemPopupVisibility=function handleChangeNavigationItemPopupVisibility(visible){dispatch({type:_actions.CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY,navigationItemPopupOpened:visible});};var handleChangeNavigationData=function handleChangeNavigationData(payload,forceClosePopups){dispatch({type:_actions.CHANGE_NAVIGATION_DATA,changedActiveItem:payload,forceClosePopups:forceClosePopups});};var handleResetNavigationData=function handleResetNavigationData(){dispatch({type:_actions.RESET_NAVIGATION_DATA,activeItem:activeItem});};var handleSubmitNavigation=/*#__PURE__*/function(){var _ref6=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(formatMessage){var payload,nagivationId,method,navigation,_args4=arguments;return _regenerator["default"].wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:payload=_args4.length>1&&_args4[1]!==undefined?_args4[1]:{};_context4.prev=1;dispatch({type:_actions.SUBMIT_NAVIGATION});nagivationId=payload.id?"/".concat(payload.id):"";method=payload.id?"PUT":"POST";_context4.next=7;return(0,_helperPlugin.request)("/".concat(_pluginId["default"]).concat(nagivationId),{method:method,signal:signal,body:payload});case 7:navigation=_context4.sent;dispatch({type:_actions.SUBMIT_NAVIGATION_SUCCEEDED,navigation:_objectSpread(_objectSpread({},navigation),{},{items:(0,_parsers.prepareItemToViewPayload)(navigation.items,null,config)})});toggleNotification({type:'success',message:{id:(0,_getTrad["default"])('notification.navigation.submit')}});_context4.next=19;break;case 12:_context4.prev=12;_context4.t0=_context4["catch"](1);dispatch({type:_actions.SUBMIT_NAVIGATION_ERROR,error:_context4.t0.response.payload.data});console.error({err:_context4.t0.response});if(!(_context4.t0.response.payload.data&&_context4.t0.response.payload.data.errorTitles)){_context4.next=18;break;}return _context4.abrupt("return",toggleNotification({type:'warning',message:{id:formatMessage((0,_getTrad["default"])('notification.navigation.error'),_objectSpread(_objectSpread({},_context4.t0.response.payload.data),{},{errorTitles:_context4.t0.response.payload.data.errorTitles.join(' and ')}))}}));case 18:toggleNotification({type:'warning',message:{id:(0,_getTrad["default"])('notification.error')}});case 19:case"end":return _context4.stop();}}},_callee4,null,[[1,12]]);}));return function handleSubmitNavigation(_x5){return _ref6.apply(this,arguments);};}();return/*#__PURE__*/_react["default"].createElement(_DataManagerContext["default"].Provider,{value:{items:items,activeItem:activeItem,initialData:initialData,changedActiveItem:changedActiveItem,config:config,navigationPopupOpened:navigationPopupOpened,navigationItemPopupOpened:navigationItemPopupOpened,isLoading:isLoading||isLoadingForDataToBeSet||isLoadingForDetailsDataToBeSet,isLoadingForAdditionalDataToBeSet:isLoadingForAdditionalDataToBeSet,isLoadingForSubmit:isLoadingForSubmit,handleChangeNavigationPopupVisibility:handleChangeNavigationPopupVisibility,handleChangeNavigationItemPopupVisibility:handleChangeNavigationItemPopupVisibility,handleChangeSelection:handleChangeSelection,handleChangeNavigationData:handleChangeNavigationData,handleResetNavigationData:handleResetNavigationData,handleSubmitNavigation:handleSubmitNavigation,getContentTypeItems:getContentTypeItems,isInDevelopmentMode:isInDevelopmentMode,error:error}},isLoading?/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null):children);};DataManagerProvider.propTypes={children:_propTypes["default"].node.isRequired};var _default=/*#__PURE__*/(0,_react.memo)(DataManagerProvider);exports["default"]=_default;

/***/ }),

/***/ 80281:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;function init(initialState){return initialState;}var _default=init;exports["default"]=_default;

/***/ }),

/***/ 83908:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.initialState=exports["default"]=void 0;var _immer=_interopRequireDefault(__webpack_require__(66312));var _actions=__webpack_require__(39772);var initialState={items:[],activeItem:undefined,changedActiveItem:undefined,navigationPopupOpened:false,navigationItemPopupOpened:false,config:{},isLoading:true,isLoadingForDataToBeSet:false,isLoadingForDetailsDataToBeSet:false,isLoadingForAdditionalDataToBeSet:false,isLoadingForSubmit:false,error:undefined};exports.initialState=initialState;var reducer=function reducer(state,action){return(0,_immer["default"])(state,function(draftState){switch(action.type){case _actions.GET_CONFIG:{draftState.isLoadingForDetailsDataToBeSet=true;draftState.config={};break;}case _actions.GET_CONFIG_SUCCEEDED:{draftState.isLoadingForDetailsDataToBeSet=false;draftState.config=action.config;break;}case _actions.GET_LIST_DATA:{draftState.items=[];draftState.isLoadingForDataToBeSet=true;break;}case _actions.GET_LIST_DATA_SUCCEEDED:{draftState.items=action.items;draftState.isLoading=false;draftState.isLoadingForDataToBeSet=false;break;}case _actions.GET_NAVIGATION_DATA:{draftState.activeItem=undefined;draftState.changedActiveItem=undefined;draftState.isLoadingForDetailsDataToBeSet=true;break;}case _actions.GET_NAVIGATION_DATA_SUCCEEDED:{var activeItem=action.activeItem||{};draftState.activeItem=activeItem;draftState.changedActiveItem=activeItem;draftState.isLoadingForDetailsDataToBeSet=false;break;}case _actions.CHANGE_NAVIGATION_DATA:{draftState.changedActiveItem=action.changedActiveItem;draftState.navigationPopupOpened=action.forceClosePopups?false:state.navigationPopupOpened;draftState.navigationItemPopupOpened=action.forceClosePopups?false:state.navigationItemPopupOpened;break;}case _actions.RESET_NAVIGATION_DATA:{draftState.changedActiveItem=action.activeItem||{};break;}case _actions.GET_CONTENT_TYPE_ITEMS:{draftState.isLoadingForAdditionalDataToBeSet=true;break;}case _actions.GET_CONTENT_TYPE_ITEMS_SUCCEEDED:{draftState.isLoadingForAdditionalDataToBeSet=false;draftState.config.contentTypeItems=action.contentTypeItems;break;}case _actions.CHANGE_NAVIGATION_POPUP_VISIBILITY:{draftState.navigationPopupOpened=action.navigationPopupOpened;break;}case _actions.CHANGE_NAVIGATION_ITEM_POPUP_VISIBILITY:{draftState.navigationItemPopupOpened=action.navigationItemPopupOpened;break;}case _actions.SUBMIT_NAVIGATION:{draftState.isLoadingForSubmit=true;draftState.error=undefined;break;}case _actions.SUBMIT_NAVIGATION_SUCCEEDED:{draftState.activeItem=action.navigation||{};draftState.changedActiveItem=action.navigation||{};draftState.isLoadingForSubmit=false;break;}case _actions.SUBMIT_NAVIGATION_ERROR:{draftState.isLoadingForSubmit=false;draftState.error=action.error;break;}case _actions.RELOAD_PLUGIN:{return initialState;}default:return draftState;}});};var _default=reducer;exports["default"]=_default;

/***/ }),

/***/ 6881:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports.navigationItemType=exports.navigationItemAdditionalFields=void 0;var navigationItemType={INTERNAL:"INTERNAL",EXTERNAL:"EXTERNAL",WRAPPER:"WRAPPER"};exports.navigationItemType=navigationItemType;var navigationItemAdditionalFields={AUDIENCE:'audience'};exports.navigationItemAdditionalFields=navigationItemAdditionalFields;

/***/ }),

/***/ 20599:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.validateNavigationStructure=exports.usedContentTypes=exports.transformToRESTPayload=exports.transformItemToViewPayload=exports.transformItemToRESTPayload=exports.prepareItemToViewPayload=exports.isRelationPublished=exports.isRelationCorrect=exports.extractRelatedItemLabel=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _uuid=__webpack_require__(50432);var _lodash=__webpack_require__(96486);var _enums=__webpack_require__(6881);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var transformItemToRESTPayload=function transformItemToRESTPayload(item){var parent=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined;var master=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var config=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var parentAttachedToMenu=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;var id=item.id,title=item.title,_item$type=item.type,type=_item$type===void 0?_enums.navigationItemType.INTERNAL:_item$type,_item$updated=item.updated,updated=_item$updated===void 0?false:_item$updated,_item$removed=item.removed,removed=_item$removed===void 0?false:_item$removed,uiRouterKey=item.uiRouterKey,menuAttached=item.menuAttached,path=item.path,externalPath=item.externalPath,related=item.related,relatedType=item.relatedType,order=item.order,_item$audience=item.audience,audience=_item$audience===void 0?[]:_item$audience,_item$items=item.items,items=_item$items===void 0?[]:_item$items,collapsed=item.collapsed,isSingle=item.isSingle;var isExternal=type===_enums.navigationItemType.EXTERNAL;var isWrapper=type===_enums.navigationItemType.WRAPPER;var _config$contentTypes=config.contentTypes,contentTypes=_config$contentTypes===void 0?[]:_config$contentTypes;var parsedRelated=Number(related);var relatedId=isExternal||isWrapper||isNaN(parsedRelated)?(related===null||related===void 0?void 0:related.value)||related:parsedRelated;var relatedContentType=relatedType?(0,_lodash.find)(contentTypes,function(ct){return ct.uid===relatedType;}):undefined;var itemAttachedToMenu=menuAttached&&parentAttachedToMenu;return{id:id,parent:parent,master:master,title:title,type:type,updated:updated,removed:removed,order:order,uiRouterKey:uiRouterKey,collapsed:collapsed,menuAttached:itemAttachedToMenu,audience:audience.map(function(audienceItem){return(0,_lodash.isObject)(audienceItem)?audienceItem.value:audienceItem;}),path:isExternal?undefined:path,externalPath:isExternal?externalPath:undefined,related:isExternal||isWrapper?undefined:[{refId:isSingle&&!relatedId?1:relatedId,ref:relatedContentType?relatedContentType.uid:relatedType,field:relatedContentType&&relatedContentType.relatedField?relatedContentType.relatedField:'navigation'}],items:items.map(function(iItem){return transformItemToRESTPayload(iItem,id,master,config,itemAttachedToMenu);})};};exports.transformItemToRESTPayload=transformItemToRESTPayload;var transformToRESTPayload=function transformToRESTPayload(payload){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var id=payload.id,name=payload.name,visible=payload.visible,items=payload.items;return{id:id,name:name,visible:visible,items:items.map(function(item){return transformItemToRESTPayload(item,null,id,config);})};};exports.transformToRESTPayload=transformToRESTPayload;var linkRelations=function linkRelations(item,config){var _config$contentTypeIt=config.contentTypeItems,contentTypeItems=_config$contentTypeIt===void 0?[]:_config$contentTypeIt,_config$contentTypes2=config.contentTypes,contentTypes=_config$contentTypes2===void 0?[]:_config$contentTypes2;var type=item.type,related=item.related,relatedType=item.relatedType,relatedRef=item.relatedRef,isSingle=item.isSingle;var relation={related:undefined,relatedRef:undefined,relatedType:undefined};if(isSingle&&relatedType){var relatedContentType=contentTypes.find(function(_){return relatedType===_.uid;})||{};var _item$singleRelatedIt=item.singleRelatedItem,singleRelatedItem=_item$singleRelatedIt===void 0?{}:_item$singleRelatedIt;return _objectSpread(_objectSpread({},item),{},{relatedType:relatedType,relatedRef:_objectSpread(_objectSpread(_objectSpread({},singleRelatedItem),(0,_lodash.omit)(relatedContentType,'collectionName')),{},{isSingle:isSingle,__collectionUid:relatedContentType.uid})});}// we got empty array after remove object in relation
// from API we got related as array but on edit it is primitive type
if(type!==_enums.navigationItemType.INTERNAL||!related||(0,_lodash.isObject)(related)&&(0,_lodash.isEmpty)(related)){return _objectSpread(_objectSpread({},item),relation);}var relatedItem=(0,_lodash.isArray)(related)?(0,_lodash.last)(related):related;var parsedRelated=Number(related);var relatedId=isNaN(parsedRelated)?related:parsedRelated;var relationNotChanged=relatedRef&&relatedItem?relatedRef.id===relatedItem:false;if(relationNotChanged){return item;}var shouldFindRelated=((0,_lodash.isNumber)(related)||(0,_uuid.validate)(related)||(0,_lodash.isString)(related))&&!relatedRef;var shouldBuildRelated=!relatedRef||relatedRef&&relatedRef.id!==relatedId;if(shouldBuildRelated&&!shouldFindRelated){var _relatedContentType=(0,_lodash.find)(contentTypes,function(ct){return ct.uid===relatedItem.__contentType;},{});var uid=_relatedContentType.uid,labelSingular=_relatedContentType.labelSingular,_isSingle=_relatedContentType.isSingle;relation={related:relatedItem.id,relatedRef:_objectSpread(_objectSpread({},relatedItem),{},{__collectionUid:uid,isSingle:_isSingle,labelSingular:labelSingular}),relatedType:uid};}else if(shouldFindRelated){var _relatedRef=(0,_lodash.find)(contentTypeItems,function(cti){return cti.id===relatedId;});var _relatedContentType2=(0,_lodash.find)(contentTypes,function(ct){return ct.uid===relatedType;});var _uid=_relatedContentType2.uid,contentTypeName=_relatedContentType2.contentTypeName,_labelSingular=_relatedContentType2.labelSingular,_isSingle2=_relatedContentType2.isSingle;relation={relatedRef:_objectSpread(_objectSpread({},_relatedRef),{},{__collectionUid:_uid,__contentType:contentTypeName,isSingle:_isSingle2,labelSingular:_labelSingular})};}else{return _objectSpread({},item);}return _objectSpread(_objectSpread({},item),relation);};var reOrderItems=function reOrderItems(){var items=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return(0,_lodash.orderBy)(items,['order'],['asc']).map(function(item,n){var order=n+1;return _objectSpread(_objectSpread({},item),{},{order:order,updated:item.updated||order!==item.order});});};var transformItemToViewPayload=function transformItemToViewPayload(payload){var items=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var config=arguments.length>2?arguments[2]:undefined;if(!payload.viewParentId){if(payload.viewId){var updatedRootLevel=items.map(function(item){if(item.viewId===payload.viewId){return linkRelations(_objectSpread({},payload),config);}return _objectSpread({},item);});return reOrderItems(updatedRootLevel);}return[].concat((0,_toConsumableArray2["default"])(reOrderItems(items)),[linkRelations(_objectSpread(_objectSpread({},payload),{},{order:items.length+1,viewId:(0,_uuid.v4)()}),config)]);}var updatedLevel=items.map(function(item){var branchItems=item.items||[];if(payload.viewParentId===item.viewId){if(!payload.viewId){return _objectSpread(_objectSpread({},item),{},{items:[].concat((0,_toConsumableArray2["default"])(reOrderItems(branchItems)),[linkRelations(_objectSpread(_objectSpread({},payload),{},{order:branchItems.length+1,viewId:(0,_uuid.v4)()}),config)])});}var updatedBranchItems=branchItems.map(function(iItem){if(iItem.viewId===payload.viewId){return linkRelations(payload,config);}return _objectSpread({},iItem);});return _objectSpread(_objectSpread({},item),{},{items:reOrderItems(updatedBranchItems)});}return _objectSpread(_objectSpread({},item),{},{items:transformItemToViewPayload(payload,item.items,config)});});return reOrderItems(updatedLevel);};exports.transformItemToViewPayload=transformItemToViewPayload;var prepareItemToViewPayload=function prepareItemToViewPayload(){var items=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var viewParentId=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var config=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return reOrderItems(items.map(function(item,n){var viewId=(0,_uuid.v4)();return _objectSpread(_objectSpread({},linkRelations(_objectSpread(_objectSpread({viewId:viewId,viewParentId:viewParentId},item),{},{order:item.order||n+1,updated:item.updated||(0,_lodash.isNil)(item.order)}),config)),{},{items:prepareItemToViewPayload(item.items,viewId,config)});}));};exports.prepareItemToViewPayload=prepareItemToViewPayload;var extractRelatedItemLabel=function extractRelatedItemLabel(){var item=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var fields=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var config=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if((0,_lodash.get)(item,'isSingle',false)){return(0,_lodash.get)(item,'labelSingular','');}var _config$contentTypes3=config.contentTypes,contentTypes=_config$contentTypes3===void 0?[]:_config$contentTypes3;var __collectionUid=item.__collectionUid;var contentType=contentTypes.find(function(_){return _.uid===__collectionUid;});var _fields$default=fields["default"],defaultFields=_fields$default===void 0?[]:_fields$default;return(0,_lodash.get)(fields,"".concat(contentType?contentType.uid:__collectionUid),defaultFields).map(function(_){return item[_];}).filter(function(_){return _;})[0]||'';};exports.extractRelatedItemLabel=extractRelatedItemLabel;var usedContentTypes=function usedContentTypes(){var items=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return items.flatMap(function(item){var used=item.items?usedContentTypes(item.items):[];if(item.relatedRef){return[item.relatedRef].concat((0,_toConsumableArray2["default"])(used));}return used;});};exports.usedContentTypes=usedContentTypes;var isRelationCorrect=function isRelationCorrect(_ref){var related=_ref.related,type=_ref.type;var isRelationDefined=!(0,_lodash.isNil)(related);return type!==_enums.navigationItemType.INTERNAL||type===_enums.navigationItemType.INTERNAL&&isRelationDefined;};exports.isRelationCorrect=isRelationCorrect;var isRelationPublished=function isRelationPublished(_ref2){var relatedRef=_ref2.relatedRef,_ref2$relatedType=_ref2.relatedType,relatedType=_ref2$relatedType===void 0?{}:_ref2$relatedType,type=_ref2.type,isCollection=_ref2.isCollection;if(isCollection){return relatedType.available||relatedRef.available;}if(type===_enums.navigationItemType.INTERNAL){var isHandledByPublshFlow=relatedRef?'published_at'in relatedRef:false;if(isHandledByPublshFlow){return(0,_lodash.get)(relatedRef,'published_at',true);}}return true;};exports.isRelationPublished=isRelationPublished;var validateNavigationStructure=function validateNavigationStructure(){var items=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return items.map(function(item){return(item.removed||isRelationCorrect({related:item.related,type:item.type})||item.isSingle&&isRelationCorrect({related:item.relatedType,type:item.type}))&&validateNavigationStructure(item.items);}).filter(function(item){return!item;}).length===0;};exports.validateNavigationStructure=validateNavigationStructure;

/***/ }),

/***/ 47452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _pluginId=_interopRequireDefault(__webpack_require__(60937));var getTrad=function getTrad(id){return"".concat(_pluginId["default"],".").concat(id);};var _default=getTrad;exports["default"]=_default;

/***/ }),

/***/ 50432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "NIL", ({enumerable:true,get:function get(){return _nil["default"];}}));Object.defineProperty(exports, "parse", ({enumerable:true,get:function get(){return _parse["default"];}}));Object.defineProperty(exports, "stringify", ({enumerable:true,get:function get(){return _stringify["default"];}}));Object.defineProperty(exports, "v1", ({enumerable:true,get:function get(){return _v["default"];}}));Object.defineProperty(exports, "v3", ({enumerable:true,get:function get(){return _v2["default"];}}));Object.defineProperty(exports, "v4", ({enumerable:true,get:function get(){return _v3["default"];}}));Object.defineProperty(exports, "v5", ({enumerable:true,get:function get(){return _v4["default"];}}));Object.defineProperty(exports, "validate", ({enumerable:true,get:function get(){return _validate["default"];}}));Object.defineProperty(exports, "version", ({enumerable:true,get:function get(){return _version["default"];}}));var _v=_interopRequireDefault(__webpack_require__(11826));var _v2=_interopRequireDefault(__webpack_require__(41420));var _v3=_interopRequireDefault(__webpack_require__(31792));var _v4=_interopRequireDefault(__webpack_require__(25547));var _nil=_interopRequireDefault(__webpack_require__(89155));var _version=_interopRequireDefault(__webpack_require__(50057));var _validate=_interopRequireDefault(__webpack_require__(54021));var _stringify=_interopRequireDefault(__webpack_require__(97596));var _parse=_interopRequireDefault(__webpack_require__(21057));

/***/ }),

/***/ 13347:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */function md5(bytes){if(typeof bytes==='string'){var msg=unescape(encodeURIComponent(bytes));// UTF8 escape
bytes=new Uint8Array(msg.length);for(var i=0;i<msg.length;++i){bytes[i]=msg.charCodeAt(i);}}return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes),bytes.length*8));}/*
 * Convert an array of little-endian words to an array of bytes
 */function md5ToHexEncodedArray(input){var output=[];var length32=input.length*32;var hexTab='0123456789abcdef';for(var i=0;i<length32;i+=8){var x=input[i>>5]>>>i%32&0xff;var hex=parseInt(hexTab.charAt(x>>>4&0x0f)+hexTab.charAt(x&0x0f),16);output.push(hex);}return output;}/**
 * Calculate output length with padding and bit length
 */function getOutputLength(inputLength8){return(inputLength8+64>>>9<<4)+14+1;}/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */function wordsToMd5(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[getOutputLength(len)-1]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936);d=md5ff(d,a,b,c,x[i+1],12,-389564586);c=md5ff(c,d,a,b,x[i+2],17,606105819);b=md5ff(b,c,d,a,x[i+3],22,-1044525330);a=md5ff(a,b,c,d,x[i+4],7,-176418897);d=md5ff(d,a,b,c,x[i+5],12,1200080426);c=md5ff(c,d,a,b,x[i+6],17,-1473231341);b=md5ff(b,c,d,a,x[i+7],22,-45705983);a=md5ff(a,b,c,d,x[i+8],7,1770035416);d=md5ff(d,a,b,c,x[i+9],12,-1958414417);c=md5ff(c,d,a,b,x[i+10],17,-42063);b=md5ff(b,c,d,a,x[i+11],22,-1990404162);a=md5ff(a,b,c,d,x[i+12],7,1804603682);d=md5ff(d,a,b,c,x[i+13],12,-40341101);c=md5ff(c,d,a,b,x[i+14],17,-1502002290);b=md5ff(b,c,d,a,x[i+15],22,1236535329);a=md5gg(a,b,c,d,x[i+1],5,-165796510);d=md5gg(d,a,b,c,x[i+6],9,-1069501632);c=md5gg(c,d,a,b,x[i+11],14,643717713);b=md5gg(b,c,d,a,x[i],20,-373897302);a=md5gg(a,b,c,d,x[i+5],5,-701558691);d=md5gg(d,a,b,c,x[i+10],9,38016083);c=md5gg(c,d,a,b,x[i+15],14,-660478335);b=md5gg(b,c,d,a,x[i+4],20,-405537848);a=md5gg(a,b,c,d,x[i+9],5,568446438);d=md5gg(d,a,b,c,x[i+14],9,-1019803690);c=md5gg(c,d,a,b,x[i+3],14,-187363961);b=md5gg(b,c,d,a,x[i+8],20,1163531501);a=md5gg(a,b,c,d,x[i+13],5,-1444681467);d=md5gg(d,a,b,c,x[i+2],9,-51403784);c=md5gg(c,d,a,b,x[i+7],14,1735328473);b=md5gg(b,c,d,a,x[i+12],20,-1926607734);a=md5hh(a,b,c,d,x[i+5],4,-378558);d=md5hh(d,a,b,c,x[i+8],11,-2022574463);c=md5hh(c,d,a,b,x[i+11],16,1839030562);b=md5hh(b,c,d,a,x[i+14],23,-35309556);a=md5hh(a,b,c,d,x[i+1],4,-1530992060);d=md5hh(d,a,b,c,x[i+4],11,1272893353);c=md5hh(c,d,a,b,x[i+7],16,-155497632);b=md5hh(b,c,d,a,x[i+10],23,-1094730640);a=md5hh(a,b,c,d,x[i+13],4,681279174);d=md5hh(d,a,b,c,x[i],11,-358537222);c=md5hh(c,d,a,b,x[i+3],16,-722521979);b=md5hh(b,c,d,a,x[i+6],23,76029189);a=md5hh(a,b,c,d,x[i+9],4,-640364487);d=md5hh(d,a,b,c,x[i+12],11,-421815835);c=md5hh(c,d,a,b,x[i+15],16,530742520);b=md5hh(b,c,d,a,x[i+2],23,-995338651);a=md5ii(a,b,c,d,x[i],6,-198630844);d=md5ii(d,a,b,c,x[i+7],10,1126891415);c=md5ii(c,d,a,b,x[i+14],15,-1416354905);b=md5ii(b,c,d,a,x[i+5],21,-57434055);a=md5ii(a,b,c,d,x[i+12],6,1700485571);d=md5ii(d,a,b,c,x[i+3],10,-1894986606);c=md5ii(c,d,a,b,x[i+10],15,-1051523);b=md5ii(b,c,d,a,x[i+1],21,-2054922799);a=md5ii(a,b,c,d,x[i+8],6,1873313359);d=md5ii(d,a,b,c,x[i+15],10,-30611744);c=md5ii(c,d,a,b,x[i+6],15,-1560198380);b=md5ii(b,c,d,a,x[i+13],21,1309151649);a=md5ii(a,b,c,d,x[i+4],6,-145523070);d=md5ii(d,a,b,c,x[i+11],10,-1120210379);c=md5ii(c,d,a,b,x[i+2],15,718787259);b=md5ii(b,c,d,a,x[i+9],21,-343485551);a=safeAdd(a,olda);b=safeAdd(b,oldb);c=safeAdd(c,oldc);d=safeAdd(d,oldd);}return[a,b,c,d];}/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */function bytesToWords(input){if(input.length===0){return[];}var length8=input.length*8;var output=new Uint32Array(getOutputLength(length8));for(var i=0;i<length8;i+=8){output[i>>5]|=(input[i/8]&0xff)<<i%32;}return output;}/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */function safeAdd(x,y){var lsw=(x&0xffff)+(y&0xffff);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xffff;}/*
 * Bitwise rotate a 32-bit number to the left.
 */function bitRotateLeft(num,cnt){return num<<cnt|num>>>32-cnt;}/*
 * These functions implement the four basic operations the algorithm uses.
 */function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b);}function md5ff(a,b,c,d,x,s,t){return md5cmn(b&c|~b&d,a,b,x,s,t);}function md5gg(a,b,c,d,x,s,t){return md5cmn(b&d|c&~d,a,b,x,s,t);}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t);}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t);}var _default=md5;exports["default"]=_default;

/***/ }),

/***/ 89155:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _default='00000000-0000-0000-0000-000000000000';exports["default"]=_default;

/***/ }),

/***/ 21057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _validate=_interopRequireDefault(__webpack_require__(54021));function parse(uuid){if(!(0,_validate["default"])(uuid)){throw TypeError('Invalid UUID');}var v;var arr=new Uint8Array(16);// Parse ########-....-....-....-............
arr[0]=(v=parseInt(uuid.slice(0,8),16))>>>24;arr[1]=v>>>16&0xff;arr[2]=v>>>8&0xff;arr[3]=v&0xff;// Parse ........-####-....-....-............
arr[4]=(v=parseInt(uuid.slice(9,13),16))>>>8;arr[5]=v&0xff;// Parse ........-....-####-....-............
arr[6]=(v=parseInt(uuid.slice(14,18),16))>>>8;arr[7]=v&0xff;// Parse ........-....-....-####-............
arr[8]=(v=parseInt(uuid.slice(19,23),16))>>>8;arr[9]=v&0xff;// Parse ........-....-....-....-############
// (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
arr[10]=(v=parseInt(uuid.slice(24,36),16))/0x10000000000&0xff;arr[11]=v/0x100000000&0xff;arr[12]=v>>>24&0xff;arr[13]=v>>>16&0xff;arr[14]=v>>>8&0xff;arr[15]=v&0xff;return arr;}var _default=parse;exports["default"]=_default;

/***/ }),

/***/ 38213:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;exports["default"]=_default;

/***/ }),

/***/ 68181:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=rng;// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;var rnds8=new Uint8Array(16);function rng(){// lazy load so that environments that need to polyfill have a chance to do so
if(!getRandomValues){// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
getRandomValues=typeof crypto!=='undefined'&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!=='undefined'&&typeof msCrypto.getRandomValues==='function'&&msCrypto.getRandomValues.bind(msCrypto);if(!getRandomValues){throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');}}return getRandomValues(rnds8);}

/***/ }),

/***/ 5666:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s,x,y,z){switch(s){case 0:return x&y^~x&z;case 1:return x^y^z;case 2:return x&y^x&z^y&z;case 3:return x^y^z;}}function ROTL(x,n){return x<<n|x>>>32-n;}function sha1(bytes){var K=[0x5a827999,0x6ed9eba1,0x8f1bbcdc,0xca62c1d6];var H=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];if(typeof bytes==='string'){var msg=unescape(encodeURIComponent(bytes));// UTF8 escape
bytes=[];for(var i=0;i<msg.length;++i){bytes.push(msg.charCodeAt(i));}}else if(!Array.isArray(bytes)){// Convert Array-like to Array
bytes=Array.prototype.slice.call(bytes);}bytes.push(0x80);var l=bytes.length/4+2;var N=Math.ceil(l/16);var M=new Array(N);for(var _i=0;_i<N;++_i){var arr=new Uint32Array(16);for(var j=0;j<16;++j){arr[j]=bytes[_i*64+j*4]<<24|bytes[_i*64+j*4+1]<<16|bytes[_i*64+j*4+2]<<8|bytes[_i*64+j*4+3];}M[_i]=arr;}M[N-1][14]=(bytes.length-1)*8/Math.pow(2,32);M[N-1][14]=Math.floor(M[N-1][14]);M[N-1][15]=(bytes.length-1)*8&0xffffffff;for(var _i2=0;_i2<N;++_i2){var W=new Uint32Array(80);for(var t=0;t<16;++t){W[t]=M[_i2][t];}for(var _t=16;_t<80;++_t){W[_t]=ROTL(W[_t-3]^W[_t-8]^W[_t-14]^W[_t-16],1);}var a=H[0];var b=H[1];var c=H[2];var d=H[3];var e=H[4];for(var _t2=0;_t2<80;++_t2){var s=Math.floor(_t2/20);var T=ROTL(a,5)+f(s,b,c,d)+e+K[s]+W[_t2]>>>0;e=d;d=c;c=ROTL(b,30)>>>0;b=a;a=T;}H[0]=H[0]+a>>>0;H[1]=H[1]+b>>>0;H[2]=H[2]+c>>>0;H[3]=H[3]+d>>>0;H[4]=H[4]+e>>>0;}return[H[0]>>24&0xff,H[0]>>16&0xff,H[0]>>8&0xff,H[0]&0xff,H[1]>>24&0xff,H[1]>>16&0xff,H[1]>>8&0xff,H[1]&0xff,H[2]>>24&0xff,H[2]>>16&0xff,H[2]>>8&0xff,H[2]&0xff,H[3]>>24&0xff,H[3]>>16&0xff,H[3]>>8&0xff,H[3]&0xff,H[4]>>24&0xff,H[4]>>16&0xff,H[4]>>8&0xff,H[4]&0xff];}var _default=sha1;exports["default"]=_default;

/***/ }),

/***/ 97596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _validate=_interopRequireDefault(__webpack_require__(54021));/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */var byteToHex=[];for(var i=0;i<256;++i){byteToHex.push((i+0x100).toString(16).substr(1));}function stringify(arr){var offset=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
var uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+'-'+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+'-'+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+'-'+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+'-'+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();// Consistency check for valid UUID.  If this throws, it's likely due to one
// of the following:
// - One or more input array values don't map to a hex octet (leading to
// "undefined" in the uuid)
// - Invalid input values for the RFC `version` or `variant` fields
if(!(0,_validate["default"])(uuid)){throw TypeError('Stringified UUID is invalid');}return uuid;}var _default=stringify;exports["default"]=_default;

/***/ }),

/***/ 11826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _rng=_interopRequireDefault(__webpack_require__(68181));var _stringify=_interopRequireDefault(__webpack_require__(97596));// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;var _clockseq;// Previous uuid creation time
var _lastMSecs=0;var _lastNSecs=0;// See https://github.com/uuidjs/uuid for API details
function v1(options,buf,offset){var i=buf&&offset||0;var b=buf||new Array(16);options=options||{};var node=options.node||_nodeId;var clockseq=options.clockseq!==undefined?options.clockseq:_clockseq;// node and clockseq need to be initialized to random values if they're not
// specified.  We do this lazily to minimize issues related to insufficient
// system entropy.  See #189
if(node==null||clockseq==null){var seedBytes=options.random||(options.rng||_rng["default"])();if(node==null){// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
node=_nodeId=[seedBytes[0]|0x01,seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]];}if(clockseq==null){// Per 4.2.2, randomize (14 bit) clockseq
clockseq=_clockseq=(seedBytes[6]<<8|seedBytes[7])&0x3fff;}}// UUID timestamps are 100 nano-second units since the Gregorian epoch,
// (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
// time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
// (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
var msecs=options.msecs!==undefined?options.msecs:Date.now();// Per 4.2.1.2, use count of uuid's generated during the current clock
// cycle to simulate higher resolution clock
var nsecs=options.nsecs!==undefined?options.nsecs:_lastNSecs+1;// Time since last uuid creation (in msecs)
var dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/10000;// Per 4.2.1.2, Bump clockseq on clock regression
if(dt<0&&options.clockseq===undefined){clockseq=clockseq+1&0x3fff;}// Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
// time interval
if((dt<0||msecs>_lastMSecs)&&options.nsecs===undefined){nsecs=0;}// Per 4.2.1.2 Throw error if too many uuids are requested
if(nsecs>=10000){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");}_lastMSecs=msecs;_lastNSecs=nsecs;_clockseq=clockseq;// Per 4.1.4 - Convert from unix epoch to Gregorian epoch
msecs+=12219292800000;// `time_low`
var tl=((msecs&0xfffffff)*10000+nsecs)%0x100000000;b[i++]=tl>>>24&0xff;b[i++]=tl>>>16&0xff;b[i++]=tl>>>8&0xff;b[i++]=tl&0xff;// `time_mid`
var tmh=msecs/0x100000000*10000&0xfffffff;b[i++]=tmh>>>8&0xff;b[i++]=tmh&0xff;// `time_high_and_version`
b[i++]=tmh>>>24&0xf|0x10;// include version
b[i++]=tmh>>>16&0xff;// `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
b[i++]=clockseq>>>8|0x80;// `clock_seq_low`
b[i++]=clockseq&0xff;// `node`
for(var n=0;n<6;++n){b[i+n]=node[n];}return buf||(0,_stringify["default"])(b);}var _default=v1;exports["default"]=_default;

/***/ }),

/***/ 41420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _v=_interopRequireDefault(__webpack_require__(46667));var _md=_interopRequireDefault(__webpack_require__(13347));var v3=(0,_v["default"])('v3',0x30,_md["default"]);var _default=v3;exports["default"]=_default;

/***/ }),

/***/ 46667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.URL=exports.DNS=void 0;exports["default"]=_default;var _stringify=_interopRequireDefault(__webpack_require__(97596));var _parse=_interopRequireDefault(__webpack_require__(21057));function stringToBytes(str){str=unescape(encodeURIComponent(str));// UTF8 escape
var bytes=[];for(var i=0;i<str.length;++i){bytes.push(str.charCodeAt(i));}return bytes;}var DNS='6ba7b810-9dad-11d1-80b4-00c04fd430c8';exports.DNS=DNS;var URL='6ba7b811-9dad-11d1-80b4-00c04fd430c8';exports.URL=URL;function _default(name,version,hashfunc){function generateUUID(value,namespace,buf,offset){if(typeof value==='string'){value=stringToBytes(value);}if(typeof namespace==='string'){namespace=(0,_parse["default"])(namespace);}if(namespace.length!==16){throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');}// Compute hash of namespace and value, Per 4.3
// Future: Use spread syntax when supported on all platforms, e.g. `bytes =
// hashfunc([...namespace, ... value])`
var bytes=new Uint8Array(16+value.length);bytes.set(namespace);bytes.set(value,namespace.length);bytes=hashfunc(bytes);bytes[6]=bytes[6]&0x0f|version;bytes[8]=bytes[8]&0x3f|0x80;if(buf){offset=offset||0;for(var i=0;i<16;++i){buf[offset+i]=bytes[i];}return buf;}return(0,_stringify["default"])(bytes);}// Function#name is not settable on some platforms (#270)
try{generateUUID.name=name;// eslint-disable-next-line no-empty
}catch(err){}// For CommonJS default export support
generateUUID.DNS=DNS;generateUUID.URL=URL;return generateUUID;}

/***/ }),

/***/ 31792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _rng=_interopRequireDefault(__webpack_require__(68181));var _stringify=_interopRequireDefault(__webpack_require__(97596));function v4(options,buf,offset){options=options||{};var rnds=options.random||(options.rng||_rng["default"])();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
rnds[6]=rnds[6]&0x0f|0x40;rnds[8]=rnds[8]&0x3f|0x80;// Copy bytes to buffer, if provided
if(buf){offset=offset||0;for(var i=0;i<16;++i){buf[offset+i]=rnds[i];}return buf;}return(0,_stringify["default"])(rnds);}var _default=v4;exports["default"]=_default;

/***/ }),

/***/ 25547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _v=_interopRequireDefault(__webpack_require__(46667));var _sha=_interopRequireDefault(__webpack_require__(5666));var v5=(0,_v["default"])('v5',0x50,_sha["default"]);var _default=v5;exports["default"]=_default;

/***/ }),

/***/ 54021:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _regex=_interopRequireDefault(__webpack_require__(38213));function validate(uuid){return typeof uuid==='string'&&_regex["default"].test(uuid);}var _default=validate;exports["default"]=_default;

/***/ }),

/***/ 50057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _validate=_interopRequireDefault(__webpack_require__(54021));function version(uuid){if(!(0,_validate["default"])(uuid)){throw TypeError('Invalid UUID');}return parseInt(uuid.substr(14,1),16);}var _default=version;exports["default"]=_default;

/***/ })

}]);