(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{4360:function(e,t,r){Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,5888))},5888:function(e,t,r){"use strict";r.r(t),r.d(t,{NewMemoryForm:function(){return x}});var a=r(7437),l=r(6655),n=r(2265);function s(){let[e,t]=(0,n.useState)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{onChange:function(e){let{files:r}=e.target;if(!r)return;let a=URL.createObjectURL(r[0]);t(a)},type:"file",name:"coverUrl",id:"media",className:"invisible h-0 w-0"}),e&&(0,a.jsx)("img",{src:e,alt:"",className:"aspect-video  w-full rounded-lg object-cover"})]})}var i=r(1490),o=r(9222);let c=o.Z.create({baseURL:"http://192.168.0.80:3333"});var u=r(4033);function x(){let e=(0,u.useRouter)();async function t(t){t.preventDefault();let r=new FormData(t.currentTarget),a=r.get("coverUrl"),l="";if(a){let e=new FormData;e.set("file",a);let t=await c.post("/upload",e);l=t.data.fileUrl}let n=i.Z.get("token");await c.post("/memories",{coverUrl:l,content:r.get("content"),isPublic:r.get("isPublic")},{headers:{Authorization:"Bearer ".concat(n)}}),console.log(r.get("createdAt")),e.push("/")}return(0,a.jsxs)("form",{onSubmit:t,className:"flex flex-1 flex-col gap-2 py-16 ",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("label",{htmlFor:"media",className:"flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100",children:[(0,a.jsx)(l.Z,{className:"h-4 w-4"}),"Anexar m\xeddia"]}),(0,a.jsxs)("label",{htmlFor:"isPublic",className:"flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100",children:[(0,a.jsx)("input",{type:"checkbox",name:"isPublic",id:"isPublic",className:"h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"}),"Tornar Memoria publica"]})]}),(0,a.jsx)(s,{}),(0,a.jsx)("textarea",{name:"content",spellCheck:!1,className:"w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0",placeholder:"Fique livre para adicionar fotos, v\xeddeos e relatos sobre essa experi\xeancia que voc\xea quer lembrar para sempre."}),(0,a.jsx)("button",{type:"submit",className:"br-green-500 inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600",children:"Salvar"})]})}}},function(e){e.O(0,[685,265,971,596,744],function(){return e(e.s=4360)}),_N_E=e.O()}]);