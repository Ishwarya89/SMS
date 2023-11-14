"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[613],{79613:function(e,r,n){n.r(r);var t=n(29439),i=n(72791),l=n(31243),c=n(24846),o=n(74251),s=n(79519),a=n(93400),d=n(98240),h=n(17256),u=n(78983),x=n(57689),p=n(80184);r.default=function(){var e=(0,i.useState)(0),r=(0,t.Z)(e,2),n=r[0],j=r[1],m=(0,i.useState)(10),f=(0,t.Z)(m,2),v=f[0],g=f[1],y=(0,i.useState)([]),C=(0,t.Z)(y,2),_=C[0],b=C[1],Z=(0,i.useState)([]),L=(0,t.Z)(Z,2),w=L[0],A=L[1],S=(0,i.useState)(0),k=(0,t.Z)(S,2),F=k[0],H=k[1],V=(0,i.useState)(1),R=(0,t.Z)(V,2),M=R[0],z=R[1],E=(0,i.useState)(!1),N=(0,t.Z)(E,2),T=N[0],G=N[1],U=(0,i.useState)(""),D=(0,t.Z)(U,2),P=D[0],B=D[1],Y=(0,i.useState)(""),O=(0,t.Z)(Y,2),W=O[0],I=O[1],K=(0,x.s0)();function X(){K("/EditFees")}(0,i.useEffect)((function(){l.Z.get("https://jsonplaceholder.typicode.com/users",{headers:{"Content-Type":"application/json"}}).then((function(e){b(e.data),A(e.data),H(e.data.total)})).catch((function(e){return console.error(e)}))}),[v,n]);var q=function(e,r){var n=w.filter((function(n){var t=!e||n.name===e,i=!r||n.name===r;return t&&i}));b(n)};return(0,p.jsxs)("div",{children:[(0,p.jsx)(u.sl,{children:(0,p.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,p.jsxs)("div",{className:"d-flex justify-content align-items-center",children:[(0,p.jsxs)(u.u5,{style:{marginRight:5,marginBottom:5,backgroundColor:"#1985AC"},color:"info",onClick:function(){K("/AddFees")},children:[(0,p.jsx)(c.Z,{icon:o.H,size:"l"}),"Add Fees"]}),(0,p.jsxs)(u.u5,{onClick:function(){return G(!T)},style:{marginRight:5,marginBottom:5,width:130,backgroundColor:"#1985AC",color:"black",border:"none"},children:[(0,p.jsx)(c.Z,{icon:s._,size:"l"})," Download"]}),(0,p.jsxs)(u.Tk,{visible:T,onClose:function(){return G(!1)},children:[(0,p.jsx)(u.p0,{children:(0,p.jsx)(u.fl,{children:"Download SCV"})}),(0,p.jsx)(u.sD,{children:(0,p.jsxs)(u.lx,{className:"row g-2 ",style:{},children:[(0,p.jsxs)(u.b7,{xs:3,style:{marginLeft:75},children:[(0,p.jsx)(u.L8,{htmlFor:"inputState",style:{fontWeight:"500",fontSize:"16px",width:200,marginRight:0},children:"Academic Year"}),(0,p.jsxs)(u.LX,{id:"academicFilter",value:W,onChange:function(e){I(e.target.value),q(P,e.target.value)},children:[(0,p.jsx)("option",{value:""}),(0,p.jsx)("option",{value:"Leanne Graham",children:"Leanne Graham"}),(0,p.jsx)("option",{value:"2021-2022",children:"2021-2022"}),(0,p.jsx)("option",{value:"2022-2023",children:"2022-2023"})]})]}),(0,p.jsxs)(u.b7,{xs:3,style:{marginLeft:70},children:[(0,p.jsx)(u.L8,{htmlFor:"inputState",style:{fontWeight:"500",fontSize:"16px"},children:"Class"}),(0,p.jsxs)(u.LX,{id:"classFilter",value:P,onChange:function(e){B(e.target.value),q(e.target.value,W)},children:[(0,p.jsx)("option",{value:""}),(0,p.jsx)("option",{value:"Leanne Graham",children:"Leanne Graham"}),(0,p.jsx)("option",{value:"UKG",children:"UKG"}),(0,p.jsx)("option",{value:"1",children:"1"}),(0,p.jsx)("option",{value:"2",children:"2"}),(0,p.jsx)("option",{value:"3",children:"3"}),(0,p.jsx)("option",{value:"4",children:"4"}),(0,p.jsx)("option",{value:"5",children:"5"}),(0,p.jsx)("option",{value:"6",children:"6"}),(0,p.jsx)("option",{value:"7",children:"7"}),(0,p.jsx)("option",{value:"8",children:"8"}),(0,p.jsx)("option",{value:"9",children:"9"}),(0,p.jsx)("option",{value:"10",children:"10"})]})]})]})}),(0,p.jsx)(u.Ym,{children:(0,p.jsxs)(u.u5,{color:"secondary",onClick:function(){l.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{}}).then((function(e){var r=e.data.map((function(e){return"".concat(e.id,", ").concat(e.title,", ").concat(e.body)})),n=new Blob([r.join("\n")],{type:"text/csv"}),t=window.URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download="fee_structure.csv",document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}))},children:[(0,p.jsx)(c.Z,{icon:s._,size:"l"}),"Download"]})})]})]}),(0,p.jsx)("div",{className:"d-flex justify-content align-items-center",children:(0,p.jsxs)(u.YR,{className:"mb-1",shape:"rounded-0",children:[(0,p.jsx)(u.jO,{type:"text",shape:"rounded-0",style:{borderRadius:0},placeholder:"Enter Website",onChange:function(e){var r=w.filter((function(r){return r.student_name&&r.student_name.toLowerCase().includes(e.target.value.toLowerCase())||r.admission_number&&r.admission_number.toString().toLowerCase().includes(e.target.value.toLowerCase())}));b(r)}}),(0,p.jsxs)(u.u5,{shape:"rounded-0",style:{backgroundColor:"#1985AC",color:"white",border:"none"},children:[(0,p.jsx)(c.Z,{icon:a.j,size:"l"})," search"]})]})})]})}),(0,p.jsxs)(u.xH,{children:[(0,p.jsxs)(u.bn,{children:[(0,p.jsx)("i",{className:"fa fa-align-justify"})," Fees Details"]}),(0,p.jsx)(u.sl,{children:(0,p.jsxs)(u.Sx,{responsive:!0,hover:!0,size:"sm",striped:!0,children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{scope:"col",children:"Academic Year"}),(0,p.jsx)("th",{scope:"col",children:"Class"}),(0,p.jsx)("th",{scope:"col",children:"Material Fee"}),(0,p.jsx)("th",{scope:"col",children:"1 Tution Fee"}),(0,p.jsx)("th",{scope:"col",children:"1 Transport Fee"}),(0,p.jsx)("th",{scope:"col",children:"1 ECA"}),(0,p.jsx)("th",{scope:"col",children:"2 Tution Fee"}),(0,p.jsx)("th",{scope:"col",children:"2 Transport Fee"}),(0,p.jsx)("th",{scope:"col",children:"2 ECA"}),(0,p.jsx)("th",{scope:"col",children:"3 Tution Fee"}),(0,p.jsx)("th",{scope:"col",children:"3 Transport Fee"}),(0,p.jsx)("th",{scope:"col",children:"3 ECA"}),(0,p.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,p.jsx)("tbody",{children:_.map((function(e,r){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:e.name}),(0,p.jsx)("td",{children:e.name}),(0,p.jsx)("td",{children:e.current_class}),(0,p.jsx)("td",{children:e.current_section}),(0,p.jsx)("td",{children:e.fathers_name}),(0,p.jsx)("td",{children:e.admission_number}),(0,p.jsx)("td",{children:e.student_name}),(0,p.jsx)("td",{children:e.current_class}),(0,p.jsx)("td",{children:e.current_section}),(0,p.jsx)("td",{children:e.fathers_name}),(0,p.jsx)("td",{children:e.fathers_name}),(0,p.jsxs)("td",{children:[(0,p.jsx)(c.Z,{icon:d.l,size:"l",style:{marginRight:8,color:"rgb(15, 176, 235)"},onClick:X}),(0,p.jsx)(c.Z,{icon:h.N,size:"l",style:{marginRight:8,color:"red"}})]})]},r)}))})]})})]}),(0,p.jsx)(u.rb,{children:(0,p.jsxs)("div",{style:{display:"flex"},children:[(0,p.jsx)(u.E7,{itemClass:"page-item",linkClass:"page-link",activePage:M,itemsCountPerPage:v,totalItemsCount:F,onSelect:function(e){console.log("active page is ".concat(e)),z(e),j((e-1)*v)}}),(0,p.jsx)("label",{style:{textAlign:"center",marginLeft:"10px",color:"#000000"}}),(0,p.jsxs)("select",{style:{marginLeft:5,marginBottom:15,height:34},name:"limitPerPage",value:v,onChange:function(e){var r=parseInt(e.target.value,10);g(r),z(1),j(0)},children:[(0,p.jsx)("option",{value:"10",children:"10"}),(0,p.jsx)("option",{value:"20",children:"20"}),(0,p.jsx)("option",{value:"50",children:"50"}),(0,p.jsx)("option",{value:"100",children:"100"})]})]})})]})}},98240:function(e,r,n){n.d(r,{l:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},93400:function(e,r,n){n.d(r,{j:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z' class='ci-primary'/>"]},17256:function(e,r,n){n.d(r,{N:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},74251:function(e,r,n){n.d(r,{H:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400' class='ci-primary'/>"]},79519:function(e,r,n){n.d(r,{_:function(){return t}});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='356.117 316.117 333.49 293.49 272 354.98 272 56 240 56 240 354.98 178.51 293.49 155.883 316.117 256 416.236 356.117 316.117' class='ci-primary'/><rect width='480' height='32' x='16' y='464' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]}}]);
//# sourceMappingURL=613.3ca78369.chunk.js.map