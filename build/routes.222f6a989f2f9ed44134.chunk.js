webpackJsonp([0],{279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(44),a=n(5),f=r(a),p=n(281),s=n(282),d=r(s),y=function(e,t){return{count:e.counter}},b=function(e,t){return{add:function(){e((0,p.increment)())},minus:function(){e((0,p.decrement)())}}},m=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.add,r=e.minus;return f.default.createElement(d.default,{count:t,onAdd:n,onMinus:r})}}]),t}(f.default.Component);m.defaultProps={},m.propTypes={children:a.PropTypes.element,count:a.PropTypes.number,add:a.PropTypes.func,minus:a.PropTypes.func},t.default=(0,l.connect)(y,b)(m)},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decrement=t.increment=void 0;var r=n(130);t.increment=function(){return{type:r.INCREMENT,payload:{}}},t.decrement=function(){return{type:r.DECREMENT,payload:{}}}},282:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),u=r(o),c=function(e){var t=e.count,n=e.onAdd,r=e.onMinus;return u.default.createElement("div",null,u.default.createElement("div",null,t),u.default.createElement("br",null),u.default.createElement("button",{onClick:n}," + "),u.default.createElement("br",null),u.default.createElement("button",{onClick:r}," - "))};c.propTypes={count:o.PropTypes.number,onAdd:o.PropTypes.func,onMinus:o.PropTypes.func},t.default=c}});