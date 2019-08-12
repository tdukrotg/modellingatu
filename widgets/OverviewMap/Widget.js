// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"esri/dijit/OverviewMap":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/has dojo/dom-class dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledMapServiceLayer ../layers/DynamicMapServiceLayer ../layers/VectorTileLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../kernel ../config ../domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),
function(k,f,d,p,n,m,g,z,A,w,y,r,t,h,b,c,a,l,x,B,q,D,C,v,E,F){k=k([A,w],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:E,constructor:function(e,a){f.mixin(this,F.widgets.overviewMap);e=e||{};if(e.map){var c={};a&&(this._detached=!0,c=p.coords(a,!0));this.map=e.map;this.baseLayer=e.baseLayer;this.width=e.width||c.w||this.map.width/4;this.height=e.height||c.h||this.map.height/4;this.attachTo=e.attachTo||"top-right";this.expandFactor=e.expandFactor||2;this.color=e.color||
"#000000";this.opacity=e.opacity||.5;this.maximizeButton=!!e.maximizeButton;this.visible=!!e.visible;if(this.map.loaded)this._initialSetup();else var b=d.connect(this.map,"onLoad",this,function(){d.disconnect(b);b=null;this._initialSetup()});this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);(!this.domNode.parentNode||9>n("ie")&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode);
this._detached?(g.set(this._body,"display","block"),g.set(this._controllerDiv,"display","none"),g.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():d.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||m.add(this._maximizerDiv,"ovwDisabledButton"),m.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),
m.add(this._controllerDiv,"ovwShow"),m.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show()));g.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(e){!e||0>=e.w||0>=e.h||this._resize(e.w,e.h)},show:function(){if(!this.visible){var e=this._controllerDiv;e.title=this.NLS_hide;m.remove(e,"ovwShow");m.add(e,
"ovwHide");v.show(this._body);v.show(this._maximizerDiv);this._initialize();this.visible=!0}},hide:function(){if(this.visible){var e=this._controllerDiv;e.title=this.NLS_show;m.remove(e,"ovwHide");m.add(e,"ovwShow");this._maximized&&this._maximizeHandler();v.hide(this._body);v.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var e=this.baseLayer||this._mainMapLayer,u=this.map.spatialReference,g=e.spatialReference;
if(g.wkid!==u.wkid&&g.wkt!==u.wkt)console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);else{u=e.declaredClass;if(e instanceof h)if(-1!==u.indexOf("VETiledLayer"))this.baseLayer=new q({resourceInfo:e.getResourceInfo(),culture:e.culture,mapStyle:e.mapStyle,bingMapsKey:e.bingMapsKey});else if(-1!==u.indexOf("OpenStreetMapLayer"))this.baseLayer=new B({tileServers:e.tileServers});else if(-1!==u.indexOf("WebTiledLayer")){var u=e.initialExtent,g=e.fullExtent,v=e.tileInfo;this.baseLayer=new e.constructor(e.urlTemplate,
{initialExtent:u&&new u.constructor(u.toJson()),fullExtent:g&&new g.constructor(g.toJson()),tileInfo:v&&new v.constructor(v.toJson()),tileServers:e.tileServers&&e.tileServers.slice(0)})}else this.baseLayer=new a(e.url,{resourceInfo:e.getResourceInfo()});else if(e instanceof b)-1!==u.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new x(e.url):(this.baseLayer=new l(e.url),this.baseLayer.setImageFormat("png24"));else if(e instanceof c)this.baseLayer=new a("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
{});else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return}!this._detached&&this.visible&&this._controllerDiv&&(e=function(){this.visible=!1;this.show()},this.baseLayer.loaded?e.call(this):d.connect(this.baseLayer,"onLoad",this,e))}}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var e=this._maximizerDiv;this._maximized?(e.title=this.NLS_maximize,m.remove(e,"ovwRestore"),
m.add(e,"ovwMaximize"),this._resize(this.width,this.height)):(e.title=this.NLS_restore,m.remove(e,"ovwMaximize"),m.add(e,"ovwRestore"),this._resize(this.map.width,this.map.height));this._maximized=!this._maximized},_resize:function(e,a){g.set(this._body,{width:e+"px",height:a+"px"});e=C.defaults.map.panDuration;a=this.overviewMap;C.defaults.map.panDuration=0;a&&(a.resize(!0),a.centerAt(this._focusExtent.getCenter()));C.defaults.map.panDuration=e},_initialize:function(){if(this.overviewMap)this._activate();
else{var a,c;c=9>n("ie")?this._body.firstChild:this._body.firstElementChild;this.overviewMap=a=new y(c,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});d.connect(a,"onLoad",this,function(){this._map_resize_override=f.hitch(a,this._map_resize_override);a.disableMapNavigation();this._activate()});a.addLayer(this.baseLayer)}},_activate:function(){var a=this.map,c=this.overviewMap;this._moveableHandle=new z(this._focusDiv);this._soeConnect=d.connect(a,
"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=d.connect(a,"onPan",this,this._updateFocus);this._oecConnect=d.connect(c,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=d.connect(c,"onPan",this,this._ovwPanHandler);this._ozsConnect=d.connect(c,"onZoomStart",this,function(){v.hide(this._focusDiv)});this._ozeConnect=d.connect(c,"onZoomEnd",this,function(){v.show(this._focusDiv)});this._omsConnect=d.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);
this._syncOverviewMap(a.extent,null,null,null)},_deactivate:function(){d.disconnect(this._soeConnect);d.disconnect(this._ufoConnect);d.disconnect(this._oecConnect);d.disconnect(this._opaConnect);d.disconnect(this._ozsConnect);d.disconnect(this._ozeConnect);d.disconnect(this._omsConnect);this._moveableHandle&&(this._moveableHandle.destroy(),this._moveableHandle=null)},_syncOverviewMap:function(a,c,b,l){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=a,this.overviewMap.setExtent(a.expand(this.expandFactor),
!0))},_updateFocus:function(a){this._suspendPanHandling||(this._focusExtent=a,this._drawFocusDiv(a))},_drawFocusDiv:function(a,c){var b=this.overviewMap,e=b.toScreen(new r(a.xmin,a.ymax,b.spatialReference)),b=b.toScreen(new r(a.xmax,a.ymin,b.spatialReference));a=b.x-e.x;var b=b.y-e.y,l=!0;a>this.overviewMap.width&&b>this.overviewMap.height&&(l=!1);g.set(this._focusDiv,{left:e.x+(c?c.x:0)+"px",top:e.y+(c?c.y:0)+"px",width:a+"px",height:b+"px",display:l?"block":"none"})},_moveStopHandler:function(a){var c=
this._moveableHandle.node.style;a=this._focusExtent;var b=this.overviewMap,c=b.toMap(new t(parseInt(c.left,10),parseInt(c.top,10))),e=new r(a.xmin,a.ymax,b.spatialReference);this._focusExtent=a.offset(c.x-e.x,c.y-e.y);this._maximized?this._maximizeHandler():b.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(a,c){this._drawFocusDiv(this._focusExtent,
c)}});n("extend-esri")&&f.setObject("dijit.OverviewMap",k,D);return k})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),function(k,f,d,p,n,m,g,z,A,w,y,r,t,h,b){k=k(t,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(c){try{if(c=
f.mixin({bingMapsKey:null,culture:"en-US"},c||{}),this.url=w.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=w.urlToObject(this.url),this.spatialReference=new y({wkid:102100}),this.tileInfo=new r({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},
{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,
scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=
this.fullExtent=new h(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new y({wkid:102100})),f.mixin(this,c),this.hasAttributionData=this.showAttribution,this._initLayer=f.hitch(this,this._initLayer),this._errorHandler=f.hitch(this,this._errorHandler),this._getTileInfo=f.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");}catch(a){throw this.onError(a),a;}},_unsetMap:function(c,a){this.inherited("_unsetMap",arguments)},
_getTileInfo:function(){if(this.mapStyle){var c=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var l=this.resourceInfo;!this.loaded&&l?this._initLayer(l):b({url:c,content:f.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(c,a){if(200!==c.statusCode)a=Error(),
a.code=c.statusCode,a.message=c.statusDescription,a.details=c.errorDetails,a.authenticationResultCode=c.authenticationResultCode,this.onError(a);else try{this.resourceInfo=d.toJson(c);var b=c.resourceSets[0].resources[0],h=b.imageUrl.replace("{","${");this.tileServers=p.map(b.imageUrlSubdomains,function(a){var c=w.getProtocolForWebResource();return g.substitute(h,{subdomain:a}).replace("http:",c)});this._tsLength=this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=
this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var B=this.loadCallback;B&&(delete this.loadCallback,B(this))}}catch(q){this.onError(q)}},getAttributionData:function(){var c=new z,a=d.fromJson(this.resourceInfo),b;this.hasAttributionData&&a&&(b=f.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));b?c.callback({contributors:b}):(a=Error("Layer does not have attribution data"),a.log=n.isDebug,c.errback(a));return c},getTileUrl:function(c,
a,b){return g.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(c,a,b),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(c,a,b){var l="",d,h;for(h=c;0<h;h--)c="0",d=1<<h-1,0!=(b&d)&&c++,0!=(a&d)&&(c++,c++),l+=c;return l},setMapStyle:function(c){this.mapStyle=c;this._getTileInfo()},setCulture:function(c){this.culture=c;this._getTileInfo()},setBingMapsKey:function(c){this.bingMapsKey=c},onMapStyleChange:function(){}});f.mixin(k,{MAP_STYLE_AERIAL:"aerial",
MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});m("extend-esri")&&f.setObject("virtualearth.VETiledLayer",k,A);return k})},"widgets/OverviewMap/utils":function(){define("dojo/_base/lang dojo/_base/array dojo/string dojo/Deferred esri/lang esri/request dojo/_base/url esri/layers/TileInfo jimu/portalUtils esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/virtualearth/VETiledLayer esri/layers/OpenStreetMapLayer esri/layers/ImageParameters".split(" "),
function(k,f,d,p,n,m,g,z,A,w,y,r,t,h,b){var c={TYPE:{BASE_MAP:"baseMap",ARCGIS_TILED_MAP:"tiledMapService",ARCGIS_DYNAMIC_MAP_SERVICE:"dynamicMapService",ARCGIS_IMAGE_SERVICE:"imageService",OSM:"openStreetMap",BING_ROAD:"bingMapsRoad",BING_AERIAL:"bingMapsAerial",BING_HYBRID:"bingMapsHybrid"},createBaseLayer:function(a,l,d){var g=new p,q=null,x=a.url,f=a.type;a=a.veLayerInfo;f===c.TYPE.BASE_MAP?g.resolve({layer:"BaseMap"}):f===c.TYPE.ARCGIS_TILED_MAP?c.valid.isArcGISLayersValid(x,l,f).then(function(a){a&&
!0===a.res?(q=new w(x),g.resolve({layer:q})):g.resolve({layer:null,err:a.err})},function(a){g.resolve({res:!1,err:a})}):f===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?c.valid.isArcGISLayersValid(x,l,f).then(function(a){if(a&&!0===a.res){a=a.info;var c={};a&&a.supportedImageFormatTypes&&-1!==a.supportedImageFormatTypes.indexOf("PNG24")&&(c.imageParameters=new b,c.imageParameters.format="png24");q=new y(x,c);g.resolve({layer:q})}else g.resolve({layer:null,err:a.err})},function(a){g.resolve({res:!1,err:a})}):
f===c.TYPE.ARCGIS_IMAGE_SERVICE?c.valid.isArcGISLayersValid(x,l,f).then(function(a){a&&!0===a.res?(q=new r(x,{}),g.resolve({layer:q})):g.resolve({layer:null,err:a.err})},function(a){g.resolve({res:!1,err:a})}):f===c.TYPE.OSM?(q=new h(x,{}),g.resolve({layer:q})):f!==c.TYPE.BING_ROAD&&f!==c.TYPE.BING_AERIAL&&f!==c.TYPE.BING_HYBRID||!a?g.resolve({layer:null}):(l=c.layers.getBingMapKey(d),l&&a.isKeyInPortal||(l="__invalidKey",console.error("OverviewMap Error: BingMapsKey must be provided")),q=new t({bingMapsKey:l,
mapStyle:c.layers._getVEStyle(f)}),g.resolve({layer:q}));return g},layers:{_getLayerInfoSR:function(a){return a.spatialReference||a.extent&&a.extent.spatialReference},_getTileServers:function(a){var c=[],b=new g(a.url);if(a.subDomains&&0<a.subDomains.length&&1<b.authority.split(".").length){var h;f.forEach(a.subDomains,function(a){-1<b.authority.indexOf("${subDomain}")?h=b.scheme+"://"+d.substitute(b.authority,{subDomain:a})+"/":-1<b.authority.indexOf("{subDomain}")&&(h=b.scheme+"://"+b.authority.replace(/\{subDomain\}/gi,
a)+"/");c.push(h)},this)}return c&&0<c.length?c:null},_getVEStyle:function(a){switch(a){case c.TYPE.BING_AERIAL:return t.MAP_STYLE_AERIAL;case c.TYPE.BING_HYBRID:return t.MAP_STYLE_AERIAL_WITH_LABELS;case c.TYPE.BING_ROAD:return t.MAP_STYLE_ROAD;default:return t.MAP_STYLE_AERIAL}},fetchLayerInfo:function(a){var c=new p;m({url:a,handleAs:"json",callbackParamName:"callback",timeout:15E3,content:{f:"json"}}).then(k.hitch(this,function(a){c.resolve(a)}),function(a){c.reject(a)});return c},getBingMapKey:function(a){return(a=
window.portalSelf||a&&A.getPortal(a.appConfig.portalUrl))&&a.bingKey?a.bingKey:""}},valid:{baseLayerVerification:function(a,b){var d=new p,h=b.spatialReference;c.createBaseLayer(a,b).then(function(a){if(a.layer){var b=c.layers._getLayerInfoSR(a.layer);c.valid.sameSpatialReference(h,b)||"BaseMap"===a.layer?d.resolve({res:!0}):d.resolve({res:!1})}else d.resolve({res:!1,err:a.err})},function(a){d.resolve({res:!1,err:a})});return d},ArcGISLayersTypeVerification:function(a,b,d){a=a.toLowerCase();if(0<
a.indexOf("/featureserver")||0<a.indexOf("/mapserver"))if(!b||"string"!==typeof b.type||"Feature Layer"!==b.type&&"Table"!==b.type){if(0<a.indexOf("/featureserver"))return!1;if(0<a.indexOf("/mapserver"))return b.tileInfo?d===c.TYPE.ARCGIS_TILED_MAP||d===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1:d===c.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1}else return!1;else if(0<a.indexOf("/imageserver"))return d===c.TYPE.ARCGIS_IMAGE_SERVICE?!0:!1},isArcGISLayersValid:function(a,b,d){var h=new p;c.layers.fetchLayerInfo(a).then(function(g){var f=
null,l=null,f=c.layers._getLayerInfoSR(g),l=b&&b.spatialReference;f&&l&&c.valid.sameSpatialReference(l,f)?!0===c.valid.ArcGISLayersTypeVerification(a,g,d)?h.resolve({res:!0,info:g}):h.resolve({res:!1,err:"layerType"}):f&&l&&!c.valid.sameSpatialReference(l,f)?h.resolve({res:!1,err:"wkid"}):h.resolve({res:!1})},function(a){h.resolve({res:!1,err:a})});return h},tileInfoStr:function(a){try{return new z(JSON.parse(a)),!0}catch(l){return l}},isHaveBingKey:function(){return c.layers.getBingMapKey()?!0:!1},
sameSpatialReference:function(a,b){var c=[102113,102100,3857,4326];return a&&b&&n.isDefined(a.wkid)&&n.isDefined(b.wkid)&&-1!==c.indexOf(a.wkid)&&-1!==c.indexOf(b.wkid)||a&&b&&(n.isDefined(a.wkid)&&n.isDefined(b.wkid)&&a.wkid===b.wkid||n.isDefined(a.latestWkid)&&n.isDefined(b.wkid)&&a.latestWkid===b.wkid||n.isDefined(a.wkid)&&n.isDefined(b.latestWkid)&&a.wkid===b.latestWkid||n.isDefined(a.latestWkid)&&n.isDefined(b.latestWkid)&&a.latestWkid===b.latestWkid)||a&&b&&n.isDefined(a.wkt)&&n.isDefined(b.wkt)&&
a.wkt===b.wkt?!0:!1}}};return c})},"widgets/OverviewMap/a11y/Widget":function(){define("dojo/_base/lang dojo/on dojo/_base/html jimu/utils dojo/aspect dojo/keys".split(" "),function(k,f,d,p,n,m){return{a11y_init:function(){d.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);d.setAttr(this.overviewMapDijit._maximizerDiv,"tabindex",0);"LaunchpadTheme"===window.getAppConfig().theme.name&&(this._a11y_isLaunchpadTheme=!0);this._a11y_isLaunchpadTheme?(this._a11y_index||(this._a11y_index=d.getAttr(this.domNode,
"tabindex"),d.removeAttr(this.domNode,"tabindex")),this._a11y_index&&d.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",parseInt(this._a11y_index,10)),p.initFirstFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)):(d.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",0),p.initFirstFocusNode(this.domNode,this.overviewMapDijit._controllerDiv));p.initLastFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)},a11y_initEvents:function(){this._a11y_RAW_DOM_NODE_HEIGHT=d.getStyle(this.domNode,
"height");this._closedBy508Controller=this._openedBy508Enter=!1;this._initToShow=!!this.config.overviewMap.visible;this.own(f(this.domNode,"keydown",k.hitch(this,function(g){var f=g.target;!1===this._initToShow&&g.keyCode===m.ENTER&&d.hasClass(f,this.baseClass)&&(this._openedBy508Enter=!0);!0===this._a11y_isLaunchpadTheme||g.keyCode!==m.TAB||d.hasClass(f,this.baseClass)||(g.preventDefault(),d.hasClass(f,"ovwController")?this.overviewMapDijit._maximizerDiv.focus():d.hasClass(f,"ovwMaximizer")&&this.overviewMapDijit._controllerDiv.focus())})));
this.own(f(this.domNode,"focus",k.hitch(this,function(){!0===this._closedBy508Controller||this._a11y_isLaunchpadTheme||!1===this._initToShow&&p.isInNavMode()&&!this._openedBy508Enter&&10>=d.getStyle(this.domNode,"height")&&this.overviewMapDijit.show()})));this.own(f(this.domNode,"blur",k.hitch(this,function(){!1===this._initToShow&&p.isInNavMode()&&!this._openedBy508Enter&&!0!==this._a11y_isLaunchpadTheme&&setTimeout(k.hitch(this,function(){d.isDescendant(document.activeElement,this.domNode)||this.overviewMapDijit.hide()}),
10)})));this.own(f(this.overviewMapDijit._controllerDiv,"keydown",k.hitch(this,function(d){d.keyCode===m.ENTER&&(this.overviewMapDijit.visible?(this.overviewMapDijit.hide(),this._openedBy508Enter=!1,this._closedBy508Controller=!0,!0!==this._a11y_isLaunchpadTheme?this.domNode.focus():this.overviewMapDijit._controllerDiv.focus()):(this.overviewMapDijit.show(),!1===this._initToShow&&(this._openedBy508Enter=!0,this._closedBy508Controller=!1),!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit._maximizerDiv.focus()))})));
this.own(f(this.overviewMapDijit._maximizerDiv,"keydown",k.hitch(this,function(d){d.keyCode===m.ENTER&&this.overviewMapDijit._maximizeHandler();!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit.visible&&d.keyCode===m.ESCAPE&&(this.overviewMapDijit.hide(),this.overviewMapDijit._controllerDiv.focus())})))},a11y_forLaunchpadThemeStyle:function(){this.own(n.after(this.overviewMapDijit,"_maximizeHandler",k.hitch(this,function(){var f=this.overviewMapDijit.overviewMap.container.parentElement||this.overviewMapDijit.overviewMap.container.parentNode,
k=f.parentElement||f.parentNode;this.overviewMapDijit._maximized?(d.addClass(f,"a11y_maximized"),d.addClass(k,"a11y_maximized")):(d.removeClass(f,"a11y_maximized"),d.removeClass(k,"a11y_maximized"))}),this))}}})},"widgets/OverviewMap/_build-generate_module":function(){define(["dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"*now":function(k){k(['dojo/i18n!*preload*widgets/OverviewMap/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/aspect jimu/BaseWidget esri/dijit/OverviewMap jimu/utils ./utils dojo/dom-style ./a11y/Widget".split(" "),function(k,f,d,p,n,m,g,z,A,w,y,r,t){k=k([z],{baseClass:"jimu-widget-overview",overviewMapDijit:null,_showDijit:!1,_handles:null,startup:function(){this._handles=[];this.inherited(arguments);this.createOverviewMap();this.map&&this.own(n(this.map,"layer-add",f.hitch(this,this._onMainMapBasemapChange)))},
setPosition:function(h){this.position=h;d.place(this.domNode,this.map.id);this._processAttachTo(this.config,h);this.started&&this._updateDomPosition(this.config.overviewMap.attachTo)},_processAttachTo:function(d,b){"undefined"===typeof d.overviewMap&&(d.overviewMap={});"undefined"===typeof d.overviewMap.attachTo&&b&&(void 0!==b.top&&void 0!==b.left?d.overviewMap.attachTo=window.isRTL?"top-right":"top-left":void 0!==b.top&&void 0!==b.right?d.overviewMap.attachTo=window.isRTL?"top-left":"top-right":
void 0!==b.bottom&&void 0!==b.left?d.overviewMap.attachTo=window.isRTL?"bottom-right":"bottom-left":void 0!==b.bottom&&void 0!==b.right&&(d.overviewMap.attachTo=window.isRTL?"bottom-left":"bottom-right"))},_updateDomPosition:function(h){if(this.overviewMapDijit){var b={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto",zIndex:this.position&&this.position.zIndex||0},c=this._getOverviewPositionByAttach(h);f.mixin(b,c);b=w.getPositionStyle(b);b.position="absolute";r.set(this.domNode,b);r.set(this.overviewMapDijit.domNode,
b);if(this.overviewMapDijit.domNode){d.removeClass(this.overviewMapDijit.domNode,["ovwTL","ovwTR","ovwBL","ovwBR"]);b="";switch(h){case "top-left":b="ovwTL";break;case "top-right":b="ovwTR";break;case "bottom-left":b="ovwBL";break;case "bottom-right":b="ovwBR";break;default:b="ovwTL"}d.addClass(this.overviewMapDijit.domNode,b);d.addClass(this.domNode,b)}}},createOverviewMap:function(d){var b=f.clone(this.config.overviewMap);b.map=this.map;void 0!==d&&(b.visible=d);var c=b.visible;b.visible=!1;b.maximizeButton=
"maximizeButton"in b?b.maximizeButton:!0;b.width=200;b.height=200;b.expandFactor=2;b.attachTo=this.config.overviewMap.attachTo;this._getBaseLayerMap().then(f.hitch(this,function(a){a&&a.layer&&"string"!==typeof a.layer?b.baseLayer=a.layer:b.baseLayer&&delete b.baseLayer;this.overviewMapDijit=new A(b);this._handles.push(g.after(this.overviewMapDijit,"show",f.hitch(this,"_afterOverviewShow")));this._handles.push(g.after(this.overviewMapDijit,"hide",f.hitch(this,"_afterOverviewHide")));this.overviewMapDijit.startup();
this._updateDomPosition(b.attachTo);this.domNode.appendChild(this.overviewMapDijit.domNode);this.a11y_init();this.a11y_initEvents();this.a11y_forLaunchpadThemeStyle();c&&this.overviewMapDijit.show()}))},_getOverviewPositionByAttach:function(d){var b={};"top-left"===d?(b.left=0,b.top=0):"top-right"===d?(b.right=0,b.top=0):"bottom-left"===d?(b.bottom=0,b.left=0):"bottom-right"===d&&(b.bottom=0,b.right=0);window.isRTL&&(isFinite(b.left)?(b.right=b.left,delete b.left):(b.left=b.right,delete b.right));
return b},_onMainMapBasemapChange:function(d){d.layer&&d.layer._basemapGalleryLayerType&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onPositionChange:function(d){this.position=d;this.config.overviewMap.attachTo||(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},_destroyOverviewMap:function(){p.forEach(this._handles,function(d){d&&"function"===typeof d.remove&&d.remove()});this.overviewMapDijit&&this.overviewMapDijit.destroy&&(this.overviewMapDijit.destroy(),
this.overviewMapDijit=null,d.empty(this.domNode))},onReceiveData:function(d){"BasemapGallery"===d&&(this._destroyOverviewMap(),this.createOverviewMap(this._showDijit))},onOpen:function(){this._destroyOverviewMap();this.createOverviewMap(this._showDijit)},onClose:function(){this._destroyOverviewMap()},_afterOverviewHide:function(){this._showDijit=!1;r.set(this.domNode,{width:"auto",height:"auto"})},_afterOverviewShow:function(){this._showDijit=!0;r.set(this.domNode,{width:this.overviewMapDijit.width+
"px",height:this.overviewMapDijit.height+"px"})},_getBaseLayerMap:function(){var d=new m;this.config.overviewMap&&this.config.overviewMap.baseLayer?y.createBaseLayer(this.config.overviewMap.baseLayer,this.map,this).then(function(b){d.resolve(b)}):d.resolve(null);return d}});k.extend(t);return k});