(this["webpackJsonpgoit-react-hw-10"]=this["webpackJsonpgoit-react-hw-10"]||[]).push([[4],{82:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},83:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},84:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(){var e,n=r(t);if(o()){var a=r(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u(this,e)}}n.d(e,"a",(function(){return c}))},85:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},95:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(82),a=n(83),u=n(85),c=n(84),i=n(0),l=n.n(i),f=n(8),s=n(23),p={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},b=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return(t=e.call.apply(e,[this].concat(u))).state={email:"",password:""},t.handleChange=function(e){var n=e.target,o=n.name,a=n.value;t.setState(Object(r.a)({},o,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onLogin(t.state),t.setState({name:"",email:"",password:""})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return l.a.createElement("div",null,l.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"),l.a.createElement("form",{onSubmit:this.handleSubmit,style:p.form,autoComplete:"off"},l.a.createElement("label",{style:p.label},"\u041f\u043e\u0447\u0442\u0430",l.a.createElement("input",{type:"email",name:"email",value:e,onChange:this.handleChange})),l.a.createElement("label",{style:p.label},"\u041f\u0430\u0440\u043e\u043b\u044c",l.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange})),l.a.createElement("button",{type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))}}]),n}(i.Component),y={onLogin:s.a.logIn};e.default=Object(f.b)(null,y)(b)}}]);
//# sourceMappingURL=4.00fcf878.chunk.js.map