(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),m=n.n(l),u=(n(12),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:t.props.time,timer:null},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()}),console.log(e.toLocaleTimeString())}),1e3);this.setState({timer:e})}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){var t=this.state.timer;t&&clearInterval(t)}},{key:"render",value:function(){var t=this.state.time;return Object(u.jsx)(u.Fragment,{children:t})}}]),n}(m.a.Component);var p=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:null},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=new Date,n=this.state,c=n.isClockVisible,a=n.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),Object(u.jsxs)("p",{children:["Current time:"," ",c&&Object(u.jsx)(b,{time:e.toLocaleTimeString(),name:a})]}),Object(u.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show Clock"}),Object(u.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(u.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){t.setState({clockName:Math.ceil(5*Math.random())})},children:"Set random name"})]})}}]),n}(m.a.Component);a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.16d35186.chunk.js.map