"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[704],{3704:function(e,t,s){s.r(t);var n=s(74165),a=s(15861),r=s(4942),o=s(1413),i=s(29439),l=s(72791),d=s(31243),c=s(9085),m=(s(5462),s(57689)),u=s(78983),h=s(80184);t.default=function(){var e=(0,m.s0)(),t=(0,l.useState)({admissionNumber:"",studentName:"",currentClass:"",currentSection:"",fathersName:"",mothersName:"",dateOfJoining:""}),s=(0,i.Z)(t,2),p=s[0],x=s[1],f=function(e){var t=e.target,s=t.name,n=t.value;x((0,o.Z)((0,o.Z)({},p),{},(0,r.Z)({},s,n)))},b=function(e){var t=new Date(e),s=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2);return[t.getFullYear(),s,n].join("-")},j=(0,m.TH)(),g=j.state.dataToPass;console.log(g),(0,l.useEffect)((function(){var t;if(null!==(t=j.state)&&void 0!==t&&t.dataToPass){var s=j.state.dataToPass;d.Z.get("http://100.20.130.76:8000/api/student/?admission_number="+s,{headers:{"Content-Type":"application/json"}}).then((function(t){if(t.data.results.length>0){var n=t.data.results[0];c.Am.success("Data get successfully!",{position:c.Am.POSITION.TOP_CENTER,timeout:3e3}),x({admissionNumber:n.admission_number,studentName:n.student_name,currentClass:n.current_class,currentSection:n.current_section,fathersName:n.fathers_name,mothersName:n.mothers_name,dateOfJoining:b(n.date_of_joining)})}else console.error("No data in this admission number:",s),e("/Tcwithdraw"),c.Am.error("No data in this admission number!",{position:c.Am.POSITION.TOP_CENTER,timeout:3e3})})).catch((function(e){console.error("Error fetching data:",e)}))}}),[j.state,e]);var N=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var s,a,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(s=new FormData).append("admission_number",p.admissionNumber),s.append("student_name",p.studentName),s.append("current_class",p.currentClass),s.append("current_section",p.currentSection),s.append("fathers_name",p.fathersName),s.append("mothers_name",p.mothersName),s.append("date_of_joining",p.dateOfJoining),s.append("date_of_withdraw",p.dateOfWithdraw),s.append("remarks",p.remark),t.next=13,d.Z.post("http://100.20.130.76:8000/api/tc_withdraw/",s,{headers:{"Content-Type":"application/json"}});case 13:return a=t.sent,console.log("Response from server:",a.data),t.next=17,d.Z.delete("http://100.20.130.76:8000/api/tc_withdraw/student_delete/",{data:{admission_no:p.admissionNumber,student_name:p.studentName},headers:{"Content-Type":"application/json"}});case 17:r=t.sent,console.log("Response from second API:",r.data),e("/Tcwithdraw"),c.Am.success("Data submit successfully!",{position:c.Am.POSITION.TOP_CENTER,timeout:3e3}),t.next=27;break;case 23:t.prev=23,t.t0=t.catch(0),console.error("Error submitting data:",t.t0),c.Am.error("Data not Submit!",{position:c.Am.POSITION.TOP_CENTER,timeout:3e3});case 27:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Tcwithdraw Lists"}),(0,h.jsxs)(u.xH,{style:{borderRadius:0,marginBottom:20},children:[(0,h.jsx)(u.bn,{component:"h5",style:{backgroundColor:"rgb(198, 197, 192)",borderRadius:0},children:"Student Details"}),(0,h.jsx)(u.sl,{children:(0,h.jsxs)(u.lx,{className:"row g-3",children:[(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Admission No"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Admission No",className:"in",name:"admissionNumber",value:p.admissionNumber,readonly:!0})]}),(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Student Name"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Student Name",className:"in",name:"studentName",value:p.studentName,readonly:!0})]}),(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Class"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Class",className:"in",name:"currentClass",value:p.currentClass,readonly:!0})]}),(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Section"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Section",className:"in",name:"currentSection",value:p.currentSection,readonly:!0})]})]})})]}),(0,h.jsxs)(u.xH,{style:{borderRadius:0,marginBottom:20},children:[(0,h.jsx)(u.bn,{component:"h5",style:{backgroundColor:"rgb(198, 197, 192)",borderRadius:0},children:"Other Details"}),(0,h.jsx)(u.sl,{children:(0,h.jsxs)(u.lx,{className:"row g-3",children:[(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Father's Name"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Father's Name",className:"in",name:"fathersName",value:p.fathersName,readonly:!0})]}),(0,h.jsxs)(u.b7,{xs:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Mother's Name"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Enter Mother's Name",className:"in",name:"mothersName",value:p.mothersName,readonly:!0})]}),(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Data of Joining"}),(0,h.jsx)(u.jO,{type:"date",style:{borderRadius:0},className:"in",name:"dateOfJoining",value:p.dateOfJoining,readonly:!0})]})]})})]}),(0,h.jsxs)(u.xH,{style:{borderRadius:0,marginBottom:30},children:[(0,h.jsx)(u.bn,{component:"h5",style:{backgroundColor:"rgb(198, 197, 192)",borderRadius:0},children:"Details"}),(0,h.jsx)(u.sl,{children:(0,h.jsxs)(u.lx,{className:"row g-3",children:[(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Data of Withdraw*"}),(0,h.jsx)(u.jO,{type:"date",style:{borderRadius:0},className:"in",name:"dateOfWithdraw",onChange:f})]}),(0,h.jsxs)(u.b7,{md:4,children:[(0,h.jsx)(u.L8,{htmlFor:"inputEmail4",style:{color:"rgb(15, 176, 235)",fontWeight:"500",fontSize:"16px"},children:"Remark*"}),(0,h.jsx)(u.jO,{type:"text",style:{borderRadius:0},placeholder:"Remark",className:"in",name:"remark",onChange:f})]})]})})]}),(0,h.jsx)("div",{className:"d-grid gap-2 col-3 mx-auto",style:{borderRadius:0,marginBottom:30},children:(0,h.jsx)(u.u5,{color:"info",onClick:N,children:"Submit"})})]})}}}]);
//# sourceMappingURL=704.9a4e08ce.chunk.js.map