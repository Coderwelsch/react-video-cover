(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),a=n(0),i=n.n(a),s=n(155),l=n.n(s),u=n(156),c=n.n(u),f=n(148),p=n(154),d=n(147),h=n.n(d),m=n(149),b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={forceFallback:!1,remeasureOnWindowResize:!1,isResizing:!1},t.resizeNotifier=function(){},t}return o()(t,e),t.prototype.render=function(){var e,t=this,n={src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4#t=5",ref:function(e){t.videoRef=e},onClick:function(){t.videoRef&&t.videoRef.paused?t.videoRef.play():t.videoRef&&t.videoRef.pause()},title:"click to play/pause"};return i.a.createElement(f.a,null,i.a.createElement("div",{className:h.a.ResizableExample},i.a.createElement("div",{className:h.a.Input},i.a.createElement("input",{type:"checkbox",checked:this.state.forceFallback,onClick:function(){t.setState({forceFallback:!t.state.forceFallback})}}),i.a.createElement("span",null,"Force IE-Fallback in non-IE Browsers")),i.a.createElement("div",{className:h.a.Input},i.a.createElement("input",{type:"checkbox",checked:this.state.remeasureOnWindowResize,onClick:function(){t.setState({remeasureOnWindowResize:!t.state.remeasureOnWindowResize})}}),i.a.createElement("span",null,"Remeasure on window resize")),i.a.createElement("div",{className:h.a.Input},i.a.createElement("div",{className:l()(h.a.RefreshIcon,(e={},e[h.a.active]=this.state.isResizing,e)),onClick:function(){t.setState({isResizing:!0}),setTimeout(function(){return t.setState({isResizing:!1})},400),t.resizeNotifier()}},i.a.createElement(m.b,null)),i.a.createElement("span",null,"When using the IE-Fallback click this button to notify that a resize has happened. Without the IE Fallback this is not necessary and will do nothing.")),i.a.createElement("div",null,"The box below is resizable on the bottom right corner."),i.a.createElement(c.a,{className:h.a.ResizableBox,handleColor:"#50514F"},i.a.createElement("div",{style:{overflow:"hidden",width:"100%",height:"100%"}},i.a.createElement(p.a,{videoOptions:n,forceFallback:this.state.forceFallback,remeasureOnWindowResize:this.state.remeasureOnWindowResize,onFallbackDidMount:function(e){t.resizeNotifier=e},onFallbackWillUnmount:function(){t.resizeNotifier=function(){}}})))))},t}(a.Component);t.default=b},155:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},156:function(e,t,n){var r;r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=u(a),s=u(n(3)),l=u(n(8));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={height:r.props.initialHeight,width:r.props.initialWidth},r.handleChange=function(e,t){r.setState({width:Math.max(e,r.props.minWidth),height:Math.max(t,r.props.minHeight)})},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.state,t=e.width,n=e.height,o=r({margin:50,position:"relative"},this.props.style,{width:t,height:n});return i.default.createElement("div",{style:o,className:this.props.className},this.props.children,i.default.createElement(l.default,{onChange:this.handleChange,width:t,height:n,style:this.props.handleStyle,className:this.props.handleClassName,handleColor:this.props.handleColor}))}}]),t}();f.propTypes={initialHeight:s.default.number,initialWidth:s.default.number,minHeight:s.default.number,minWidth:s.default.number,children:s.default.node,style:s.default.object,className:s.default.string,handleStyle:s.default.object,handleClassName:s.default.string,handleColor:s.default.string},f.defaultProps={initialHeight:300,initialWidth:300,minHeight:100,minWidth:100},t.default=f},function(t,n){t.exports=e},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(4)()},function(e,t,n){"use strict";var r=n(5),o=n(6),a=n(7);e.exports=function(){function e(e,t,n,r,i,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,a,i,s,l){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,s,l],f=0;(u=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=l(a),s=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleDragStart=function(e){r.dragStartMousePositionX=e.screenX,r.dragStartHandlePositionX=r.props.width,r.dragStartMousePositionY=e.screenY,r.dragStartHandlePositionY=r.props.height,r.dragListener=document.addEventListener("mouseup",r.handleDragEnd),r.dragEndListener=document.addEventListener("mousemove",r.handleDrag)},r.handleDragEnd=function(){document.removeEventListener("mousemove",r.handleDrag),document.removeEventListener("mouseup",r.handleDragEnd),r.dragListener=null,r.dragEndListener=null},r.handleDrag=function(e){var t=r.dragStartHandlePositionX+e.screenX-r.dragStartMousePositionX,n=r.dragStartHandlePositionY+e.screenY-r.dragStartMousePositionY;r.props.onChange(t,n),e.preventDefault()},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){this.dragStartMousePositionX=0,this.dragStartHandlePositionX=0,this.dragStartMousePositionY=0,this.dragStartHandlePositionY=0}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd)}},{key:"render",value:function(){var e=r({position:"absolute",bottom:0,right:0,cursor:"se-resize",width:0,height:0,borderStyle:"solid",borderWidth:"0 0 20px 20px",borderColor:"transparent transparent "+this.props.handleColor+" transparent"},this.props.style);return i.default.createElement("div",{className:this.props.className,style:e,onMouseDown:this.handleDragStart})}}]),t}();c.propTypes={width:s.default.number.isRequired,height:s.default.number.isRequired,onChange:s.default.func.isRequired,style:s.default.object,handleColor:s.default.string,className:s.default.string},c.defaultProps={handleColor:"black"},t.default=c}])},e.exports=r(n(0))}}]);
//# sourceMappingURL=component---src-pages-resizable-js-9f63fa90ddaf76e47ab8.js.map