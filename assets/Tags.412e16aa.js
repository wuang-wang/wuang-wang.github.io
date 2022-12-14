import{C as B}from"./Common.f053b974.js";import{P as $}from"./PageHeader.e61e1364.js";import{_ as T,d as y,u as k,H as w,X as A,a0 as C,R as x,i as f,o as r,c,D as v,x as D,h as i,q as N,g as R,t as p,F as m,r as V,b as h,f as d,w as L,s as S,B as b,e as z}from"./app.e5164416.js";import{r as F}from"./resolveTime.bbe121e0.js";const H=l=>{const s={},t=[];for(const e of l){if(!e.info.date)continue;const o=F(e.info.date,"year");s[o]?s[o].push(e):s[o]=[e]}for(const e in s)t.unshift({year:e,data:s[e]});return t},M=(l,s)=>s===""?l:l.filter(t=>t.info.tags?t.info.tags.includes(s):!1),Y=["onClick"],q={key:0},E={key:1},W=y({__name:"TagList",props:{currentTag:{type:String,default:""}},setup(l){const s=k(),t=w(),e=A(),{tagsWithColor:o}=C(),{posts:g}=x(),u=f(()=>[{name:s.value.showAllTagsText,path:e.value.path,tagColor:null,pages:[]},...o.value]);return(_,n)=>(r(!0),c(m,null,v(i(u),(a,P)=>(r(),c("span",{key:P,class:D(["article-tag",[a.name===l.currentTag&&"active",a.path===i(e).path&&"tag-all"]]),style:N([a.tagColor?{backgroundColor:a.tagColor}:{}]),onClick:I=>i(t).push(a.path)},[R(p(a.name)+" ",1),a.path==i(e).path?(r(),c("sup",q,p(i(g).length),1)):(r(),c("sup",E,p(a.pages.length),1))],14,Y))),128))}});var X=T(W,[["__file","TagList.vue"]]);const j={class:"year"},G={class:"title"},J={key:0,class:"subtitle"},K=h("hr",null,null,-1),O=y({__name:"TagPostList",props:{data:{type:Array,default:()=>[]}},setup(l){return(s,t)=>{const e=V("RouterLink");return r(!0),c(m,null,v(l.data,(o,g)=>(r(),c("section",{key:g},[h("span",j,p(o.year),1),(r(!0),c(m,null,v(o.data,(u,_)=>(r(),c("div",{key:_,class:"item"},[d(e,{to:u.path},{default:L(()=>[h("p",G,p(u.info.title),1),u.info.subtitle?(r(),c("p",J,p(u.info.subtitle),1)):S("",!0)]),_:2},1032,["to"]),K]))),128))]))),128)}}});var Q=T(O,[["__file","TagPostList.vue"]]);const U={class:"tags-wrapper"},Z=y({__name:"Tags",setup(l){const s=b(),t=k(),{posts:e}=x(),{tags:o}=C(),g=f(()=>{const n=o.value.find(a=>a.path===s.path);return n?n.name:t.value.showAllTagsText}),u=f(()=>{const n=g.value===t.value.showAllTagsText?"":g.value;return H(M(e.value,n))}),_=f(()=>{var a;const n=t.value.pages&&t.value.pages.tags?t.value.pages.tags:{};return n.title===void 0&&(n.title=(a=t.value.pageText)==null?void 0:a.tags),n});return(n,a)=>(r(),z(B,null,{page:L(()=>[d($,{"page-info":i(_)},null,8,["page-info"]),h("div",U,[d(X,{"current-tag":i(g)},null,8,["current-tag"]),d(Q,{data:i(u)},null,8,["data"])])]),_:1}))}});var ot=T(Z,[["__file","Tags.vue"]]);export{ot as default};
