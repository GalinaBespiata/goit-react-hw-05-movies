"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[245],{639:function(e,t,n){n.d(t,{k:function(){return u}});var r=n(87),a="FilmItem_trendFilm__n9shB",s=n(184),c=function(e){var t=e.id,n=e.name,c=e.location;return(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{state:{from:null!==c&&void 0!==c?c:"/"},to:"/movies/".concat(t),children:(0,s.jsx)("p",{className:a,children:n})})})},i="FilmsWrap_filmsWrap__oA9TV",u=function(e){var t=e.films,n=e.location;return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,r=e.name;return(0,s.jsx)(c,{location:n,id:t,name:r},t)}))})})}},245:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),u=n(912),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=004aa31770cc2729c6dd319813b8b5dc&language=en-US&page=1&include_adult=false&query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,name:e.title}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(639),m=n(87),f="SearchForm_formEl__qU18Y",d="SearchForm_inputEl__4pco6",p="SearchForm_labelName__yWZR5",h="SearchForm_btn__TXrR3",v=n(184),_=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1],s=(0,m.lr)(),c=(0,a.Z)(s,2)[1];return(0,v.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),c({query:n}),r("")},children:[(0,v.jsxs)("label",{children:[(0,v.jsx)("span",{className:p,children:"What film do you search"}),(0,v.jsx)("input",{className:d,value:n,type:"text",name:"film",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){r(e.target.value)}})]}),(0,v.jsx)("button",{className:h,type:"submit",children:"Search"})]})},x=n(689),j=n(323);function b(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],u=(0,i.useState)(null),f=(0,a.Z)(u,2)[1],d=(0,i.useState)([]),p=(0,a.Z)(d,2),h=p[0],b=p[1],g=(0,m.lr)(),Z=(0,a.Z)(g,1)[0].get("query"),y=(0,x.TH)();return(0,i.useEffect)((function(){if(Z){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,o(Z);case 4:t=e.sent,b(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(e.t0.message);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e(Z)}}),[Z]),(0,v.jsxs)("div",{children:[n&&(0,v.jsx)(j.a,{}),(0,v.jsx)(_,{}),h.length>0&&(0,v.jsx)(l.k,{films:h,location:y})]})}}}]);
//# sourceMappingURL=245.1dcbdfa3.chunk.js.map