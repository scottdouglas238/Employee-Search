(this["webpackJsonpemployee-search"]=this["webpackJsonpemployee-search"]||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(12),s=a(13),m=a(14),i=a(17),u=a(16);a(23);var h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",{className:"heading"},"Employee Directory"),r.a.createElement("p",{className:"intro"},"Click on carrots to filter by heading or use the search box to narrow your results."))};a(24);var p=function(e){return r.a.createElement("form",null,r.a.createElement("input",{className:"searchBar",value:e.search,onChange:e.handleInputChange,name:"search",type:"text"}))};a(25);var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{className:"personImage",alt:e.name,src:e.img})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob))},E=(a(26),a(15)),f=a.n(E),g=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",sortTriangle:"",employees:[],sorted:[],alphabetical:!1},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(c.a)({},n,r))},e.sortByName=function(){var t=e.state.employees,a=e.state.alphabetical;a?a&&e.setState({alphabetical:!1,sortTriangle:"\u25bc",employees:t.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a>n?-1:a<n?1:0}))}):e.setState({alphabetical:!0,sortTriangle:"\u25b2",employees:t.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0}))})},e.filterEmployees=function(t){var a=e.state.search;if(!a)return!0;for(var n in t)if(t[n].toLowerCase().includes(a.toLowerCase()))return!0;return!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){var a=t.data;e.setState({employees:a.results.map((function(e){return{id:e.login.uuid,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,image:e.picture.medium,dob:e.dob.date}}))})}))}},{key:"render",value:function(){var e=this.state.employees;return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("p",null,this.state.search),r.a.createElement(p,{search:this.state.search,handleInputChange:this.handleInputChange}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-striped "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{onClick:this.sortByName,scope:"col",id:"cursor"},"Name ",this.state.sortTriangle),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,e.length&&e.filter(this.filterEmployees).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement(d,{id:e.id,img:e.image,name:e.name,phone:e.phone,email:e.email,dob:e.dob}))})))))))}}]),a}(n.Component);a(44);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9250941a.chunk.js.map