(this.webpackJsonpmovie_web_service=this.webpackJsonpmovie_web_service||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(17),s=c.n(r),a=c(12),j=c(2),o=c(8),l=c.n(o),d=c(11),b=c(9),u=c(1);var h=function(){var e=Object(j.f)().id,t=Object(n.useState)(!0),c=Object(b.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([]),a=Object(b.a)(s,2),o=a[0],h=a[1],x=function(){var t=Object(d.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,h(c.data.movie),r(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(o),Object(n.useEffect)((function(){x()}),[]),Object(u.jsx)("div",{children:i?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(".concat(o.background_image_original,")")},children:Object(u.jsxs)("div",{style:{padding:"60px 30px",height:"100vh",position:"ralative"},children:[Object(u.jsx)("div",{style:{width:"300px",float:"left"},children:Object(u.jsx)("img",{src:o.medium_cover_image,alt:o.title,style:{border:"5px solid white",borderRadius:"4px"}})}),Object(u.jsxs)("div",{style:{float:"left"},children:[Object(u.jsx)("h1",{style:{color:"white"},children:o.title}),Object(u.jsx)("h3",{style:{color:"white"},children:o.year}),o.genres.map((function(e){return Object(u.jsx)("h4",{style:{color:"white"},children:e},o.id)})),Object(u.jsxs)("h4",{style:{color:"white"},children:["\u2665 rating : ",o.rating]})]}),Object(u.jsx)("div",{style:{float:"inline-end",position:"absolute",top:"450px"},children:Object(u.jsx)("h4",{style:{color:"white"},children:o.description_full})})]})}),Object(u.jsx)("div",{})]})})};var x=function(e){var t=e.id,c=e.coverImg,n=e.title,i=e.summary,r=e.genres;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsx)("h2",{children:Object(u.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(u.jsx)("p",{children:i}),Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]})};var O=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(b.a)(r,2),a=s[0],j=s[1],o=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(u.jsx)("div",{children:c?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsx)("div",{children:a.map((function(e){return Object(u.jsx)(x,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/movie/:id",children:Object(u.jsx)(h,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(O,{})})]})})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4530b2e8.chunk.js.map