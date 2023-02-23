(function(){"use strict";var e={1238:function(e,t,n){var o=n(9242),a=n(3396);function i(e,t,n,o,i,l){const r=(0,a.up)("MSauth");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r)])}const l={class:"container"},r={key:0},c={key:1},s=(0,a._)("h2",{style:{"font-family":"sans-serif",color:"#6a5acd","text-align":"center","font-weight":"bold",margin:"25px"}}," You are logged in as an administrator ",-1);function u(e,t,n,o,i,u){const d=(0,a.up)("CrudOperation");return(0,a.wg)(),(0,a.iD)("div",l,[e.authenticated?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>o.logout&&o.logout(...e)),style:{float:"right",margin:"5px",display:"block"}}," Logout "),s])):((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>o.login&&o.login(...e)),style:{margin:"20px",float:"right"}}," Admin Login ")])),(0,a.Wm)(d,{isAthenticated:e.authenticated},null,8,["isAthenticated"])])}var d=n(3095);const p={auth:{clientId:"c9869064-dd4e-4245-a1a6-e655c72a3e06",authority:"https://login.microsoftonline.com/a320d17d-ed3d-4f13-9043-96e69f4481fb",redirectUri:"http://localhost:8080"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}},h={scopes:["user.read"]},m=new d.x(p);var g=n(4870),f=n(7139);const y={key:0},v=(0,a._)("h2",{style:{"font-family":"sans-serif",color:"gray","text-align":"center","font-weight":"bold",margin:"25px"}}," Welcome to my App ",-1),w={key:0,class:"loading-ring"},k={class:"card-content"},b=(0,a._)("p",null,"Lorem ipsum dolor sit amet.",-1),_={key:1},I={key:0,class:"loading-ring"},D={key:2,type:"submit",style:{color:"white",margin:"10px"}},C={key:0},S=(0,a._)("tr",null,[(0,a._)("th",null,"Sr. No."),(0,a._)("th",null,"Name"),(0,a._)("th",{colspan:"3"},"Actions")],-1),O=[S],x=["onUpdate:modelValue","onKeyup"],T=["onClick"],j=["onClick"];function A(e,t,n,i,l,r){return(0,a.wg)(),(0,a.iD)("div",null,[n.isAthenticated?((0,a.wg)(),(0,a.iD)("div",_,[i.loading?((0,a.wg)(),(0,a.iD)("div",I,"Loading...")):(0,a.kq)("",!0),(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>i.createItem&&i.createItem(...e)),["prevent"]))},[n.isAthenticated?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.search=e),placeholder:"Search",style:{width:"80%"}},null,512)),[[o.nr,i.search]]):(0,a.kq)("",!0),n.isAthenticated?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,class:"create-input",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>i.newItem.name=e),placeholder:"Name",style:{width:"80%"}},null,512)),[[o.nr,i.newItem.name]]):(0,a.kq)("",!0),n.isAthenticated?((0,a.wg)(),(0,a.iD)("button",D," Create ")):(0,a.kq)("",!0)],32),(0,a._)("table",null,[i.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("thead",C,O)),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredItems,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,f.zw)(t+1),1),(0,a._)("td",null,(0,f.zw)(e.name),1),(0,a._)("td",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t=>e.name=t,onKeyup:(0,o.D2)((t=>i.updateItem(e)),["enter"]),ref_for:!0,ref:"myInput"},null,40,x),[[o.nr,e.name]])]),(0,a._)("td",null,[(0,a._)("button",{onClick:t=>i.updateItem(e)},(0,f.zw)(i.loading?"loading":"Update"),9,T)]),(0,a._)("td",null,[(0,a._)("button",{onClick:t=>i.deleteItem(e)},(0,f.zw)(i.loading?"loading":"Delete"),9,j)])])))),128))])])])):((0,a.wg)(),(0,a.iD)("div",y,[v,(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Search by name","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),i.loading?((0,a.wg)(),(0,a.iD)("div",w,"Loading...")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredItems,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"card",key:e._id},[(0,a._)("div",k,[(0,a._)("h2",null,(0,f.zw)(t+1),1),(0,a._)("h5",null,(0,f.zw)(e.name),1),b])])))),128))])]))])}n(7658);var q={props:["isAthenticated"],setup(){const e=(0,g.iH)([]),t=(0,g.iH)({name:""}),n=(0,g.iH)(!1),o=(0,g.iH)(""),i=async()=>{n.value=!0;const t=await fetch("https://admin-app-be.vercel.app/myCollection");e.value=await t.json(),n.value=!1},l=(0,a.Fl)((()=>{let t=e.value.filter((e=>e.name.includes(o.value)));return t})),r=async()=>{n.value=!0;const o=await fetch("https://admin-app-be.vercel.app/myCollection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.value)}),a=await o.json();e.value.push(a),t.value={name:""},n.value=!1},c=async e=>{await fetch(`https://admin-app-be.vercel.app/myCollection/${e._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("Update Success"),i()},s=async e=>{n.value=!0;try{await fetch(`https://admin-app-be.vercel.app/myCollection/${e._id}`,{method:"DELETE"})}catch(t){throw new t}n.value=!1,i()};return(0,a.bv)((()=>{i()})),{items:e,newItem:t,loading:n,getItems:i,createItem:r,updateItem:c,deleteItem:s,filteredItems:l,search:o}}},U=n(89);const L=(0,U.Z)(q,[["render",A]]);var z=L,H={components:{CrudOperation:z},setup(){const e=(0,g.qj)({authenticated:!1}),t=async()=>{try{await m.loginPopup(h);const t=await m.acquireTokenSilent(h);sessionStorage.setItem("accessToken",t.accessToken),e.authenticated=!0,console.log(m,"myMSALObj"),console.log(t.accessToken)}catch(t){console.error(t)}},n=async()=>{try{await m.logout(),sessionStorage.removeItem("accessToken"),e.authenticated=!1}catch(t){console.error(t)}};return(0,a.bv)((async()=>{const t=await m.acquireTokenSilent(h);sessionStorage.getItem("accessToken")===t.accessToken?(console.log(m),e.authenticated=!0,console.log(e.authenticated)):(e.authenticated=!1,console.log(e.authenticated))})),{...(0,g.BK)(e),login:t,logout:n}}};const K=(0,U.Z)(H,[["render",u]]);var M=K,N={components:{MSauth:M}};const P=(0,U.Z)(N,[["render",i]]);var V=P;(0,o.ri)(V).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<l&&(l=i));if(r){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,l=o[0],r=o[1],c=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var u=c(n)}for(t&&t(o);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkadmin_app"]=self["webpackChunkadmin_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1238)}));o=n.O(o)})();
//# sourceMappingURL=app.40f3e376.js.map