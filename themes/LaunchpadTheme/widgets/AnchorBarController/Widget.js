// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"themes/LaunchpadTheme/widgets/AnchorBarController/DockableItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-attr dojo/_base/fx ./BaseIconItem".split(" "),function(t,g,e,f,l,d){return t([d],{visible:!0,postCreate:function(){this.inherited(arguments);e.add(this.iconItemNode,"dockable");f.set(this.domNode,"settingid",this.config.id)},hideAnim:function(){var d=this.domNode.style,f=[],q={};window.isRTL?q["margin-right"]=0:q["margin-left"]=0;e.remove(this.iconItemStatus,
"selected");f.push(l.animateProperty({node:this.domNode,duration:500,properties:q,onEnd:g.hitch(this,function(){d.display="none";this.visible=!1})}));f.push(l.animateProperty({node:this.iconItemNode,duration:500,properties:{width:1}}));f.push(l.animateProperty({node:this.imgNode,duration:500,properties:{width:1}}));return f},showAnim:function(d){var f=this.domNode.style,h=this.iconItemNode.style,n=this.imgNode.style,m=[],r=this.size,a={};d={start:function(){f.display="";return 0},end:d};window.isRTL?
a["margin-right"]=d:a["margin-left"]=d;m.push(l.animateProperty({node:this.domNode,duration:500,properties:a,onEnd:g.hitch(this,function(){this.isOpen&&e.add(this.iconItemStatus,"selected");this.visible=!0})}));m.push(l.animateProperty({node:this.iconItemNode,duration:500,properties:{width:{start:function(){h.width="1px";return 1},end:r}}}));m.push(l.animateProperty({node:this.imgNode,duration:500,properties:{width:{start:function(){n.width="1px";return 1},end:20}}}));return m}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/BaseIconItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/dom-class dojo/dom-style dojo/on dojo/keys dojo/mouse dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/popup dijit/TooltipDialog dojo/text!./BaseIconItem.html".split(" "),
function(t,g,e,f,l,d,h,p,q,n,m,r,a,k){return t([n,m,q],{baseClass:"jimu-anchorbar-iconitem jimu-float-leading",templateString:k,config:null,backgroundIndex:-1,isOpen:!1,panelIndex:-1,size:40,postCreate:function(){this.inherited(arguments);this.tooltipDialog=new a({content:this.config.label,"class":"launchpad-tooltip"});window.isRTL&&this.config.mirrorIconForRTL&&f.add(this.imgNode,"jimu-flipx");e.setAttr(this.iconItemNode,"tabindex",this.itemTabIndex);e.setAttr(this.iconItemNode,"aria-label",this.config.label);
f.add(this.iconItemNode,"icon-item-background"+this.getBackgroundColorIndex());this.own(d(this.iconItemNode,p.enter,g.hitch(this,function(){window.appInfo.isRunInMobile||r.open({parent:this,popup:this.tooltipDialog,around:this.iconItemNode,orient:["above-centered"],onCancel:g.hitch(this,function(){r.close(this.tooltipDialog)})})})));this.own(d(this.iconItemNode,p.leave,g.hitch(this,function(){window.appInfo.isRunInMobile||r.close(this.tooltipDialog)})))},getConfigForPanel:function(){var a=g.clone(this.config);
a.backgroundColor=this.getColor();a.panel.position=this._initPosition();a.panel.position.index=this.panelIndex;return a},_initPosition:function(){return{top:window.appInfo.isRunInMobile?20:120,left:10,width:350,height:480,margin:10}},_onNodeClick:function(){f.toggle(this.iconItemStatus,"selected");f.toggle(this.iconItemNode,"selected");this.isOpen=f.contains(this.iconItemNode,"selected");this.isOpen||(this.panelIndex=-1);this.emit("nodeClick",{target:this})},_onNodeKeydown:function(a){a.keyCode!==
h.ENTER&&a.keyCode!==h.SPACE||this._onNodeClick()},isGroup:function(){return this.config.widgets&&1<this.config.widgets.length?!0:!1},isOpenAtStart:function(){return this.config&&!0===this.config.openAtStart},setOpened:function(a){a?(this.iconItemStatus&&f.add(this.iconItemStatus,"selected"),this.iconItemNode&&f.add(this.iconItemNode,"selected"),this.isOpen=!0):(this.iconItemStatus&&f.remove(this.iconItemStatus,"selected"),this.iconItemNode&&f.remove(this.iconItemNode,"selected"),this.isOpen=!1,this.panelIndex=
-1)},getPanelIndex:function(){return this.panelIndex},setPanelIndex:function(a){this.panelIndex=a},getColor:function(){return l.get(this.iconItemNode,"background-color")||"#FFFFFF"},getBackgroundColorIndex:function(){return this.backgroundIndex%6}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/GroupItems":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/fx dojo/on dojo/keys dijit/Tooltip jimu/utils dojo/Evented dojo/dom-style dojo/dom-class dojo/dom-geometry dojo/dnd/move dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./GroupItems.html ./BaseIconItem".split(" "),
function(t,g,e,f,l,d,h,p,q,n,m,r,a,k,c,x,y,w){return t([c,x,n],{baseClass:"jimu-anchorbar-controller-group",templateString:y,config:null,dockableItem:null,backgroundColor:null,itemList:[],box:null,postMixInProperties:function(){this.headerNls=window.jimuNls.panelHeader},postCreate:function(){this.inherited(arguments);g.forEach(this.config.widgets,function(a,c){c=new w({config:a,backgroundIndex:c,itemTabIndex:0});c.placeAt(this.containerNode);this.own(d(c,"nodeClick",e.hitch(this,this._onIconClick)));
this.itemList.push(c);q.addTooltipByDomNode(p,c.iconItemNode,a.label)},this);r.add(this.colorfulHeader,"icon-item-background"+this.dockableItem.getBackgroundColorIndex());this.own(d(this.domNode,"keydown",e.hitch(this,function(a){if(!f.hasClass(a.target,"close-icon")&&a.keyCode===h.ESCAPE)this.closeNode.focus();else if(a.keyCode===h.TAB&&f.hasClass(a.target,"icon-item")){var c;a.shiftKey||a.target.parentNode.nextElementSibling?a.shiftKey&&!a.target.parentNode.previousElementSibling&&(c=this.itemList[this.itemList.length-
1]):c=this.itemList[0];c&&(a.preventDefault(),c.iconItemNode.focus())}})))},startup:function(){this.inherited(arguments);this.box=a.getMarginBox(this.domNode);this.makeMoveable(this.titleNode,this.box)},getItemList:function(){return this.itemList},makeMoveable:function(c,f){var b;this.disableMoveable();b=a.getMarginBox(jimuConfig.layoutId);b.l-=.5*f.w;b.w+=f.w;this.moveable=new k.boxConstrainedMoveable(this.domNode,{box:b,handle:c||this.titleNode,within:!0});this.own(d(this.moveable,"Moving",e.hitch(this,
this.onMoving)));this.own(d(this.moveable,"MoveStop",e.hitch(this,this.onMoveStop)))},getItemNum:function(){return this.config.widgets.length},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},onMoving:function(a){m.set(a.node,"opacity",.9)},onMoveStop:function(a){m.set(a.node,"opacity",1)},open:function(){l.wipeIn({node:this.domNode,duration:400}).play();setTimeout(e.hitch(this,function(){this.itemList[0].iconItemNode.focus()}),405)},close:function(){l.wipeOut({node:this.domNode,
duration:400}).play();this.dockableItem.setOpened(!1)},closeImmedaite:function(){m.set(this.domNode,"display","none");this.dockableItem.setOpened(!1)},_onCloseBtnClicked:function(){this.close();this.emit("groupCloseBtnClicked")},_onCloseBtnKeydown:function(a){a.keyCode===h.ENTER||a.keyCode===h.SPACE?this._onCloseBtnClicked():a.keyCode===h.TAB&&a.shiftKey&&a.preventDefault()},_onIconClick:function(a){this.emit("groupItemClicked",e.mixin({group:this},a))},setPosition:function(a){m.set(this.domNode,
{top:"number"===typeof a.top?a.top+"px":"auto",left:"number"===typeof a.left?a.left+"px":"auto",right:"number"===typeof a.right?a.right+"px":"auto"})}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/PopupMoreNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/dom-style dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(t,g,e,f,l,d,h,p,q,n,m,r){return t([q,n],{baseClass:"jimu-anchorbar-more-pupup jimu-main-background",
templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',margin:4,nodes:[],forIcon:null,postCreate:function(){this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new m({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup()},setForIcon:function(a){this.forIcon=a},
setNodes:function(a){this.nodes=a;this.oldGridParam=null;this.resize()},resize:function(){var a=this._calculateGridParam(),k;null!==a?(f.setStyle(this.domNode,r.getPositionStyle(a.position)),this.nodeWidth=a.cellSize-this.margin,this.clearPages(),this.createPages(a),e.forEach(p(".icon-node",this.domNode),g.hitch(this,function(c,k){this.setItemNodePosition(c,k,a)})),this.oldGridParam=a,k=p("div.close",this.domNode)[0],f.setStyle(k,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=
null,f.setStyle(this.domNode,r.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0)},setItemNodePosition:function(a,k,c){var d;d=0===k%c.cols?0:this.margin/2;k=k%(c.rows*c.cols)<c.cols?0:this.margin/2;c={};"number"===typeof this.nodeWidth&&(c.width=this.nodeWidth+"px",c.height=this.nodeWidth+"px");"number"===typeof d&&(window.isRTL?c.marginRight=d+"px":c.marginLeft=d+"px");"number"===typeof k&&(c.marginTop=k+"px");f.setStyle(a,c)},clearPages:function(){e.forEach(this.pages,
function(a){this.viewStack.removeView(a.pageNode)},this);d.empty(this.pointsNode);this.pages=[]},createPages:function(a){var k,c,f,e;k=Math.ceil(this.nodes.length/(a.rows*a.cols));for(c=0;c<k;c++)f=d.create("div",{"class":"page"}),this.createPageItems(c,f,a),this.viewStack.addView(f),1<k&&(e=d.create("div",{"class":"point"},this.pointsNode),this.own(l(e,"click",g.hitch(this,this._onPageNodeClick,c)))),this.pages.push({pageNode:f,pointNode:e});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},
_selectPage:function(a){1<this.pages.length&&(p(".point",this.domNode).removeClass("point-selected"),f.addClass(this.pages[a].pointNode,"point-selected"));this.viewStack.switchView(this.pages[a].pageNode)},createPageItems:function(a,d,c){var f,k,e;f=this.nodes.length;k=c.rows*c.cols;c=(a+1)*k;e=c-f;c=Math.min(c,f);for(a*=k;a<c;a++)this.createItemNode(a,d);for(a=f;a<f+e;a++)this.createEmptyItemNode(d)},createItemNode:function(a,f){var c;f=d.create("div",{"class":"icon-node jimu-float-leading"},f);
c=(this.nodeWidth-this.nodes[a].size)/2;h.set(this.nodes[a].domNode,{position:"absolute",left:c+"px",top:c+"px","margin-left":""});this.nodes[a].placeAt(f)},createEmptyItemNode:function(a){return d.create("div",{"class":"icon-node jimu-float-leading"},a)},createCloseBtn:function(){var a;a=d.create("div",{"class":"close"},this.domNode);d.create("div",{"class":"close-inner"},a);l(a,"click",g.hitch(this,function(){this.hide()}));return a},hide:function(){f.setStyle(this.domNode,"display","none");this.forIcon&&
this.forIcon.setOpened(!1)},show:function(){f.setStyle(this.domNode,"display","block")},_calculateGridParam:function(){var a,d,c,e,g=!1,h=!0;a=f.getContentBox(jimuConfig.mapId);d=Math.min(a.w,a.h)-40;if(240<=d)e=80;else{e=Math.floor(d/3);if(10>e)return null;g=!0;60>e&&(h=!1)}d=Math.floor((a.h-40)/e);c=Math.floor((a.w-40)/e);d=4<d?4:d;d=3>d?3:d;c=3>d?3:4<c?4:c;return{rows:d,cols:c,cellSize:e,iconScaled:g,showLabel:h,position:{top:(a.h-e*d)/2,bottom:(a.h-e*d)/2,left:(a.w-e*c)/2,right:(a.w-e*c)/2,width:e*
c-this.margin*(c-1)/2,height:e*d-this.margin*(d-1)/2,zIndex:111}}}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/LaunchpadTheme/widgets/AnchorBarController/BaseIconItem.html":'\x3cdiv\x3e\r\n  \x3cdiv role\x3d"button" class\x3d"icon-item" data-dojo-attach-point\x3d"iconItemNode"\r\n       data-dojo-attach-event\x3d"onclick:_onNodeClick,onkeydown:_onNodeKeydown"\x3e\r\n    \x3cimg class\x3d"icon" src\x3d"${config.icon}" data-dojo-attach-point\x3d"imgNode"/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"status" data-dojo-attach-point\x3d"iconItemStatus"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/GroupItems.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title jimu-panel-title jimu-main-background jimu-corner-top" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"color-header" data-dojo-attach-point\x3d"colorfulHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"widget-icon"\x3e\r\n      \x3cimg class\x3d"icon" src\x3d"${config.icon}"/\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode"\x3e\r\n      ${config.label}\r\n    \x3c/div\x3e\r\n    \x3cdiv role\x3d"button" tabindex\x3d"0" aria-label\x3d"${headerNls.closeWindow}" class\x3d"close-icon jimu-float-trailing" data-dojo-attach-point\x3d"closeNode"\r\n      data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked,onkeydown:_onCloseBtnKeydown"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-panel-content jimu-corner-bottom" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/Widget.html":'\x3cdiv aria-label\x3d"${label}"\x3e\r\n  \x3cdiv class\x3d"docker jimu-main-background jimu-corner-all"\x3e\r\n    \x3cdiv role\x3d"button" aria-label\x3d"${previousNls}" class\x3d"previousBtn jimu-corner-left" data-dojo-attach-point\x3d"previousButton"\r\n      data-dojo-attach-event\x3d"onclick:_previous,onkeydown:_previousKeyDown"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"seperatorLeft" data-dojo-attach-point\x3d"seperatorLeft"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"iconList" data-dojo-attach-point\x3d"widgetList"\x3e\r\n      \x3cdiv class\x3d"iconGroup" data-dojo-attach-point\x3d"iconGroupNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"seperatorRight" data-dojo-attach-point\x3d"seperatorRight"\x3e\x3c/div\x3e\r\n    \x3cdiv role\x3d"button" aria-label\x3d"${nextNls}" class\x3d"nextBtn jimu-corner-right" data-dojo-attach-point\x3d"nextButton"\r\n      data-dojo-attach-event\x3d"onclick:_next,onkeydown:_nextKeyDown"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/css/style.css":".jimu-anchorbar-iconitem .icon-item{width: 40px; height: 40px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; text-align: center; cursor: pointer;}.jimu-anchorbar-iconitem .icon-item.dockable{margin-top: -20px;}.jimu-anchorbar-iconitem .icon-item:hover{}.jimu-anchorbar-iconitem .icon-item.selected{margin-top: -5px;}.jimu-anchorbar-iconitem .icon-item.dockable.selected{margin-top: -25px;}.jimu-anchorbar-iconitem .status{margin-top: 4px; width: 4px; height: 4px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; display: none;}.jimu-anchorbar-iconitem .status.selected{display: block; margin: 5px 18px;}.jimu-anchorbar-iconitem .icon-item .icon{width: 24px; height: 24px; margin-top: 8px; cursor: pointer;}.jimu-panel-content .jimu-anchorbar-iconitem{margin: 10px;}.jimu-anchorbar-controller .docker{position: relative; height: 30px;}.jimu-anchorbar-controller .docker .iconList{position: absolute; left: 30px; right: 30px;}.jimu-anchorbar-controller.mobile .docker .iconList{left: 0; right: 0;}.jimu-anchorbar-controller .docker .iconList .iconGroup{position: absolute; top: 0; left: 0; height: 30px;}.jimu-rtl .jimu-anchorbar-controller .docker .iconList .iconGroup{right: 0; left: auto;}.jimu-anchorbar-controller .docker .previousBtn{position: absolute; left: 0; width: 30px; height: 30px; cursor: pointer; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .previousBtn{display: none;}.jimu-rtl .jimu-anchorbar-controller .docker .previousBtn{left: auto; right: 0;}.jimu-anchorbar-controller .docker .nextBtn{position: absolute; right: 0; width: 30px; height: 30px; cursor: pointer; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .nextBtn{display: none;}.jimu-rtl .jimu-anchorbar-controller .docker .nextBtn{right: auto; left: 0;}.jimu-anchorbar-controller .docker .seperatorLeft{position: absolute; left: 30px; top: 2px; width: 1px; height: 26px; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .seperatorLeft{display: none;}.jimu-anchorbar-controller .docker .seperatorRight{position: absolute; right: 30px; top: 2px; width: 1px; height: 26px; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .seperatorRight{display: none;}.jimu-anchorbar-controller-group{position: absolute; height: auto;}.jimu-anchorbar-controller-group .color-header{height: 2px; width: 100%;}.jimu-anchorbar-controller-group .title{position: relative; height: 30px; width: 100%; cursor: move;}.jimu-anchorbar-controller-group .title .widget-icon{position: absolute; left: 4px; top: 8px; width: 24px; height: 24px; cursor: default;}.jimu-anchorbar-controller-group .title .widget-icon .icon{width: 16px; height: 16px;}.jimu-rtl .jimu-anchorbar-controller-group .title .widget-icon{right: 4px;}.jimu-anchorbar-controller-group .title-label{overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 28px; position: absolute; left: 48px; right: 96px;}.jimu-rtl .jimu-anchorbar-controller-group .title-label{right: 48px; left: 96px;}.jimu-anchorbar-controller-group .title .close-icon{width: 24px; height: 28px; cursor: pointer; background: transparent url(images/x.png) center no-repeat;}.jimu-anchorbar-controller-group .jimu-panel-content{background-color: #ffffff; overflow: hidden;}.jimu-anchorbar-controller-group .jimu-widgets-controller-item{margin: 5px 10px; display: inline; float: left;}.jimu-rtl .jimu-anchorbar-controller-group .jimu-widgets-controller-item{float: right;}.jimu-anchorbar-more-pupup{position: absolute; border-radius: 2px; z-index: 111;}.jimu-anchorbar-more-pupup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-anchorbar-more-pupup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0; right: 0; text-align: center; background-color: #bababa;}.jimu-anchorbar-more-pupup .points-inner{display: inline-block; overflow: hidden;}.jimu-anchorbar-more-pupup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-rtl .jimu-anchorbar-more-pupup .point{float: right; margin-right: 5px; margin-left: 0;}.jimu-anchorbar-more-pupup .point-selected{background-color: #485566;}.jimu-anchorbar-more-pupup .page{position: relative; overflow: hidden;}.jimu-anchorbar-more-pupup .close{position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #697a8c; cursor: pointer;}.jimu-rtl .jimu-anchorbar-more-pupup .close{left: -04.46428571428571%; right: auto;}.jimu-anchorbar-more-pupup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-rtl .jimu-anchorbar-more-pupup .close-inner{margin-right: 10%; margin-left: 0;}.jimu-anchorbar-more-pupup .icon-node{background-color: #697a8c; cursor: pointer; position: relative;}.jimu-anchorbar-more-pupup .jimu-anchorbar-iconitem .icon-item.dockable{margin-top: 0;}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.jimu-rtl .jimu-more-icon-cover{right: 0; left: auto;}",
"*now":function(t){t(['dojo/i18n!*preload*themes/LaunchpadTheme/widgets/AnchorBarController/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/dom-construct dojo/fx dojo/on dojo/keys dijit/Tooltip jimu/utils dojo/query dojo/aspect jimu/BaseWidget jimu/PoolControllerMixin ./DockableItem ./GroupItems ./PopupMoreNodes".split(" "),function(t,g,e,f,l,d,h,p,q,n,m,r,a,k,c,x,y,w,A,B){return t([x,y],{baseClass:"jimu-anchorbar-controller",visibleIcons:0,iconList:[],enableNext:!1,enablePrevious:!1,currentMode:1,iconMargin:8,
groupList:[],openedIds:[],currentStyle:"default",constructor:function(){this.previousNls=window.jimuNls.common.previous;this.nextNls=window.jimuNls.common.next},postCreate:function(){this.inherited(arguments);this.iconList=[];this.groupList=[];this.openedIds=[];this.currentStyle=this.appConfig.theme.styles[0];this.allConfigs=this.getAllConfigs();e.forEach(this.allConfigs,function(b,a){this._createItem(b,a)},this);f.setAttr(this.previousButton,"tabindex",this.tabIndex);f.setAttr(this.nextButton,"tabindex",
this.tabIndex)},_createItem:function(b,z){var u,c;u=new w({config:b,backgroundIndex:z,itemTabIndex:this.tabIndex});u.placeAt(this.iconGroupNode);this.iconList.push(u);u.isGroup()?(c=new A({config:b,dockableItem:u}),z=window.appInfo.isRunInMobile?jimuConfig.layoutId:jimuConfig.mapId,c.placeAt(z),d.set(c.domNode,"display","none"),this.own(n(c,"groupItemClicked",g.hitch(this,function(b){this._onDockableNodeClick(b.target)}))),this.own(n(c,"groupCloseBtnClicked",g.hitch(this,function(){u.iconItemNode.focus()}))),
this.own(n(u,"nodeClick",g.hitch(this,function(b){this._onGroupNodeClick(b.target,c)}))),this.groupList.push(c)):this.own(n(u,"nodeClick",g.hitch(this,function(b){this._onDockableNodeClick(b.target)})));a.addTooltipByDomNode(r,u.iconItemNode,b.label);return u},startup:function(){this.inherited(arguments);this.resize();e.some(this.iconList,function(b,a){if(b.isOpenAtStart())return window.appInfo.isRunInMobile||this._makeIconVisible(a),b._onNodeClick(),!0},this)},destroy:function(){this.inherited(arguments);
e.forEach(this.groupList,function(b){b.destroy()})},onAction:function(b,a){"highLight"===b&&a&&(a=k('div[settingid\x3d"'+a.widgetId+'"]',this.domNode)[0],this._highLight(a));"removeHighLight"===b&&this._removeHighLight()},onOpen:function(){0===this.iconList.length&&"config"!==this.appConfig.mode&&this.widgetManager.closeWidget(this)},onAppConfigChanged:function(b){this.currentStyle=b.theme.styles[0]},setOpenedIds:function(b){var a;0!==b.length&&e.forEach(b,function(b){a=this._getIconItemById(b);null!==
a&&a._onNodeClick()},this)},getOpenedIds:function(){this.inherited(arguments);return e.filter(this.openedIds,function(b){return"undefined"!==typeof b})},_highLight:function(b){this.hlDiv&&this._removeHighLight();if(b&&"none"!==d.get(b,"display")){var a=d.get(b,"margin-left"),c=l.getMarginBox(b),a={position:"absolute",left:c.l+a+"px",top:c.t+"px",width:"40px",height:"40px"};"style2"!==this.currentStyle&&(a["margin-top"]="-20px");this.hlDiv=p.create("div",{style:a,"class":"icon-highlight"},b,"before")}},
_removeHighLight:function(){this.hlDiv&&(p.destroy(this.hlDiv),this.hlDiv=null)},clearIconGroupNode:function(){for(;this.iconGroupNode.firstChild;)this.iconGroupNode.removeChild(this.iconGroupNode.firstChild)},resize:function(){window.appInfo.isRunInMobile?(1===this.currentMode&&(this.currentMode=2,h.add(this.domNode,"mobile"),this.clearIconGroupNode(),this.lastVisibleIcons=0),this.popupMore&&this.popupMore.hide(),this.switchToMobileStyle()):(2===this.currentMode&&(this.currentMode=1,h.remove(this.domNode,
"mobile"),this.clearIconGroupNode(),this.lastVisibleIcons=0,d.set(this.iconGroupNode,"width",80*this.allConfigs.length+"px"),e.forEach(this.iconList,function(b){b.placeAt(this.iconGroupNode)},this)),this.switchToNormalStyle());this._resizeOpenedPanel()},switchToMobileStyle:function(){var b;b=l.getContentBox(jimuConfig.mapId).w;d.set(this.iconGroupNode,"width",Math.max(b,80*this.allConfigs.length)+"px");this.visibleIcons=Math.floor(b/48);this.visibleIcons>=this.iconList.length&&(this.visibleIcons=
this.iconList.length);this.visibleIcons!==this.lastVisibleIcons?(this.lastVisibleIcons=this.visibleIcons,this.clearIconGroupNode(),this._reArrangeIconItems(b)):this._adjustIconMargin(b)},_reArrangeIconItems:function(b){var a,c,f=[],v;c=(a=this.visibleIcons<this.iconList.length)?this.visibleIcons-1:this.visibleIcons;this.iconMargin=Math.floor((b-40*this.visibleIcons)/(this.visibleIcons+1));e.forEach(this.iconList,function(b,a){v={display:"",position:"",left:"",top:""};d.set(b.iconItemNode,{width:"40px",
height:"40px"});d.set(b.imgNode,{width:"20px",height:"20px"});a<c?(window.isRTL?v["margin-right"]=this.iconMargin+"px":v["margin-left"]=this.iconMargin+"px",d.set(b.domNode,v),b.placeAt(this.iconGroupNode)):(d.set(b.domNode,v),f.push(b))},this);a&&(b=this._createIconItemForMore(),v={},window.isRTL?v["margin-right"]=this.iconMargin+"px":v["margin-left"]=this.iconMargin+"px",d.set(b.domNode,v),b.placeAt(this.iconGroupNode),this.own(n(b,"nodeClick",g.hitch(this,function(b){this._onShowMoreNodeClick(b.target,
f)}))))},_createIconItemForMore:function(){return new w({config:{id:"show_more_widget_icons",label:this.nls.more,icon:this.folderUrl+"images/more_icon.png"},backgroundIndex:this.visibleIcons})},_adjustIconMargin:function(b){var a={};this.iconMargin=Math.floor((b-40*this.visibleIcons)/(this.visibleIcons+1));window.isRTL?a["margin-right"]=this.iconMargin+"px":a["margin-left"]=this.iconMargin+"px";k("div.jimu-anchorbar-iconitem",this.iconGroupNode).forEach(function(b){d.set(b,a)},this)},switchToNormalStyle:function(){var b,
a,c=0;b=l.getContentBox(jimuConfig.mapId);a=Math.floor(b.w/2);a>48*this.allConfigs.length+60&&(a=48*this.allConfigs.length+60);d.set(this.domNode,{width:a+"px",left:Math.floor((b.w-a)/2)+"px"});b=a-60;this.visibleIcons=Math.floor(b/48);this.visibleIcons>this.iconList.length&&(this.visibleIcons=this.iconList.length);e.some(this.iconList,function(b,a){if(b.visible)return c=a,!0});a=c+this.visibleIcons-1;a>=this.iconList.length&&(a=this.iconList.length-1,c=a-this.visibleIcons+1);this.iconMargin=Math.floor((b-
40*this.visibleIcons)/(this.visibleIcons+1));this._adjustIconStyle(c,a)},_previous:function(){var b=-1,a=-1,c=[];this.enablePrevious&&(e.some(this.iconList,function(a,c){if(a.visible)return b=c-1,!0},this),0<=b&&(a=b+this.visibleIcons,c=c.concat(this.iconList[a].hideAnim(this.iconMargin),this.iconList[b].showAnim(this.iconMargin)),q.combine(c).play(),this.enableNext=!0,h.add(this.nextButton,"enabled"),f.setAttr(this.nextButton,"aria-disabled","false"),0===b&&(this.enablePrevious=!1,h.remove(this.previousButton,
"enabled"),f.setAttr(this.previousButton,"aria-disabled","true"))))},_previousKeyDown:function(b){!this.enablePrevious||b.keyCode!==m.ENTER&&b.keyCode!==m.SPACE||this._previous()},_next:function(){var b=-1,a=-1,c=[];this.enableNext&&(e.some(this.iconList,function(a,c){if(a.visible)return b=c,!0},this),0<=b&&(a=b+this.visibleIcons,c=c.concat(this.iconList[b].hideAnim(this.iconMargin),this.iconList[a].showAnim(this.iconMargin)),q.combine(c).play(),this.enablePrevious=!0,h.add(this.previousButton,"enabled"),
f.setAttr(this.previousButton,"aria-disabled","false"),a===this.iconList.length-1&&(this.enableNext=!1,h.remove(this.nextButton,"enabled"),f.setAttr(this.nextButton,"aria-disabled","true"))))},_nextKeyDown:function(b){!this.enableNext||b.keyCode!==m.ENTER&&b.keyCode!==m.SPACE||this._next()},_getGroupPanelPosition:function(b,a){var c={};b=l.position(b.iconItemNode);var d=l.getContentBox(jimuConfig.mapId);c.top=b.y-a.h-8;c.left=window.isRTL?b.x<a.w+8?8:b.x-a.w+b.w:b.x+a.w+8>d.w?d.w-a.w-8:b.x;return c},
_getOffPanelPosition:function(b,a){var c={},d=l.position(b.iconItemNode),e=l.getContentBox(jimuConfig.mapId);c.bottom=e.h-(d.y+8)+20;window.isRTL?c.right=d.x<a.w+8?e.w-a.w-8:d.x-a.w:c.left=d.x+a.w+8>e.w?e.w-a.w-8:d.x;b.config.position&&(c.relativeTo=b.config.position.relativeTo);return c},_createPopupMoreNodes:function(){this.popupMore||(this._createCoverNode(),this.popupMore=new B,this.popupMore.placeAt(jimuConfig.mapId),c.after(this.popupMore,"show",g.hitch(this,function(){d.set(this.moreIconPaneCoverNode,
"display","")}),!0),c.after(this.popupMore,"hide",g.hitch(this,function(){d.set(this.moreIconPaneCoverNode,"display","none")}),!0))},_onShowMoreNodeClick:function(b,a){this._createPopupMoreNodes();b.isOpen?(this.popupMore.setForIcon(b),this.popupMore.setNodes(a),this.popupMore.show()):this.popupMore.hide()},_getIconItemById:function(a){var b=null;e.some(this.iconList,function(c){if(c.config.id===a)return b=c,!0});null===b&&e.some(this.groupList,function(c){return e.some(c.getItemList(),function(c){if(c.config.id===
a)return b=c,!0})});return b},_addToOpenedIds:function(a){-1===this.openedIds.indexOf(a)&&this.openedIds.push(a)},_removeFromOpenedIds:function(a){a=this.openedIds.indexOf(a);-1!==a&&(this.openedIds[a]=void 0)},_onGroupNodeClick:function(a,c){var b;a.isOpen?(b=this._getGroupPanelPosition(a,c.box),c.setPosition(b),c.open(),this._addToOpenedIds(a.config.id)):(c.close(),this._removeFromOpenedIds(a.config.id))},_onDockableNodeClick:function(a){var b,d;!1===a.config.inPanel?a.isOpen?this.widgetManager.loadWidget(a.config).then(g.hitch(this,
function(b){this._addToOpenedIds(a.config.id);var d=this._getOffPanelPosition(a,this.widgetManager.getWidgetMarginBox(b));d.zIndex=100;b.setPosition(d,this.containerNode);this.widgetManager.openWidget(b);this.own(c.after(b,"onClose",g.hitch(this,function(){a.setOpened(!1);this._removeFromOpenedIds(a.config.id);a.iconItemNode.focus()})))})):(this.widgetManager.closeWidget(a.config.id),this._removeFromOpenedIds(a.config.id)):(b=a.config.id+"_panel",a.isOpen?(a.setPanelIndex(this._calPanelIndex()),d=
a.getConfigForPanel(),this.panelManager.showPanel(d).then(g.hitch(this,function(b){b.setPosition(d.panel.position);c.after(b,"onClose",g.hitch(this,function(){a.setOpened(!1);this._removeFromOpenedIds(a.config.id);a.iconItemNode.focus()}))})),this.popupMore&&this.popupMore.hide(),this._addToOpenedIds(a.config.id)):(this.panelManager.closePanel(b),this._removeFromOpenedIds(a.config.id)))},_calPanelIndex:function(){var a=[],c,d;e.forEach(this.iconList,function(b){!b.isGroup()&&!1!==b.config.inPanel&&
b.isOpen&&a.push(b.getPanelIndex())});e.forEach(this.groupList,function(b){e.forEach(b.getItemList(),function(b){!1!==b.config.inPanel&&b.isOpen&&a.push(b.getPanelIndex())})});if(0===a.length)return 0;a.sort(function(a,b){return a-b});if(0<a[0])return 0;c=0;for(d=a.length-1;c<d;c++)if(1<a[c+1]-a[c])return a[c]+1;return a[d]+1},_createCoverNode:function(){this.moreIconPaneCoverNode=p.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)},_resizeOpenedPanel:function(){var a;e.forEach(this.iconList,
function(b){if(!b.isGroup()&&!1!==b.config.inPanel&&b.isOpen&&(a=this.panelManager.getPanelById(b.config.id+"_panel")))a.onWindowResize()},this);e.forEach(this.groupList,function(b){e.forEach(b.getItemList(),function(b){if(!1!==b.config.inPanel&&b.isOpen&&(a=this.panelManager.getPanelById(b.config.id+"_panel")))a.onWindowResize()},this)},this)},_makeIconVisible:function(a){var b;this.visibleIcons!==this.iconList.length&&(a-=Math.floor(this.visibleIcons/2),a=0<=a?a:0,b=a+this.visibleIcons-1,b>=this.iconList.length&&
(b=this.iconList.length-1,a=b-this.visibleIcons+1),this._adjustIconStyle(a,b))},_adjustIconStyle:function(a,c){var b;e.forEach(this.iconList,function(e,f){e.visible=f>=a&&f<=c;b={position:"",left:"",top:"",display:e.visible?"":"none"};window.isRTL?b["margin-right"]=this.iconMargin+"px":b["margin-left"]=this.iconMargin+"px";d.set(e.domNode,b);d.set(e.iconItemNode,{width:"40px",height:"40px"});d.set(e.imgNode,{width:"20px",height:"20px"})},this);c<this.allConfigs.length-1?(h.add(this.nextButton,"enabled"),
this.enableNext=!0):(h.remove(this.nextButton,"enabled"),this.enableNext=!1);0<a?(this.enablePrevious=!0,h.add(this.previousButton,"enabled")):(this.enablePrevious=!1,h.remove(this.previousButton,"enabled"))}})});