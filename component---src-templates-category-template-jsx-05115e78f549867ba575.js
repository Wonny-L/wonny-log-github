(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("Wbzz"),c=a("wd/R"),i=a.n(c),p=(a("/3mp"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,c=this.props.data.node.fields,p=c.slug,l=c.categorySlug;return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__meta"},s.a.createElement("time",{className:"post__meta-time",dateTime:i()(a).format("MMMM D, YYYY")},i()(a).format("MMMM YYYY")),s.a.createElement("span",{className:"post__meta-divider"}),s.a.createElement("span",{className:"post__meta-category",key:l},s.a.createElement(o.Link,{to:l,className:"post__meta-category-link"},n))),s.a.createElement("h2",{className:"post__title"},s.a.createElement(o.Link,{className:"post__title-link",to:p},t)),s.a.createElement("p",{className:"post__description"},r),s.a.createElement(o.Link,{className:"post__readmore",to:p},"Read"))},t}(s.a.Component));t.a=p},nz5Z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("TJpk"),c=a.n(o),i=a("ntAx"),p=a("kfNp"),l=a("1Jpo"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach((function(t){e.push(s.a.createElement(l.a,{data:t,key:t.node.fields.slug}))})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},s.a.createElement("div",{className:"page"},s.a.createElement("h1",{className:"page__title"},t),s.a.createElement("div",{className:"page__body"},e))))},t}(s.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return s.a.createElement(i.a,null,s.a.createElement("div",null,s.a.createElement(c.a,{title:t+" - "+e}),s.a.createElement(p.a,this.props),s.a.createElement(m,this.props)))},t}(s.a.Component),u=(t.default=d,"2285735343")}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-05115e78f549867ba575.js.map