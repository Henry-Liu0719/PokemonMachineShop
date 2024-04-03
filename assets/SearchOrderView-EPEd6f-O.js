import{_ as B,k as C,S as I,r,o as n,c,d as i,w as V,b as e,F as N,g as P,n as a,t,h as R}from"./index-TDYzlyc-.js";import{_ as D}from"./Animation - 1710557059960-SOXLnD8x.js";var U={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"popovgo",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:A,VITE_PATH:F}=U,H={data(){return{orderId:"",carts:{},order:{},isOrderLoading:!1}},mounted(){},methods:{minLength(d){return/^-/.test(d)?d.length===20?!0:"訂單號碼長度為20碼":"訂單號碼為「-」開頭"},getOrder(d){this.isOrderLoading=!0,C.get(`${A}/api/${F}/order/${d}`).then(o=>{o.data.order?(this.order=o.data.order,this.carts=this.order.products):I.fire({icon:"warning",title:"查無該筆訂單",showConfirmButton:!1,timer:1e3})}).catch(o=>{I.fire({icon:"false",title:"讀取產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(o)}).finally(()=>{this.isOrderLoading=!1})}},computed:{}},M={class:"container mt-md-5 mt-3 mb-7"},z=e("img",{src:D,alt:"讀取中",class:"img-fluid"},null,-1),q=e("div",{class:"col-md-10"},[e("label",{for:"orderId",class:"mb-0 form-label"},[e("h3",{class:"fw-bold mb-4 pt-3"},"查詢訂單")])],-1),J={class:"mt-0"},K={class:"mb-0"},G=e("span",null,"訂單號碼範例: -Nu7z07B4SbgJwRufeFo",-1),Q=["disabled"],W={key:0,class:"row mt-3 flex-row-reverse"},X={class:"col-lg-8 col-sm-6"},Y={class:"table"},Z=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"border-0 ps-0"},"品名"),e("th",{scope:"col",class:"border-0"},"數量"),e("th",{scope:"col",class:"border-0"},"單價"),e("th",{scope:"col",class:"border-0"})])],-1),$={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},ee=["src"],se={class:"mb-0 fw-bold ms-3 d-inline-block"},te={class:"border-0 align-middle",style:{"max-width":"160px"}},oe={class:"input-group pe-5"},le=["value"],de={class:"border-0 align-middle"},re={class:"mb-0 ms-auto"},ne={class:"col-lg-4 col-sm-6"},ce={class:"border p-4 mb-4"},ie=e("h3",{class:"fw-bold mb-4"},"訂單詳情",-1),ae={class:"d-flex justify-content-between mt-4"},_e=e("p",{class:"mb-0 h4 fw-bold me-1"},"訂單日期",-1),me={class:"d-flex justify-content-between mt-4"},he=e("p",{class:"mb-0 h4 fw-bold me-1"},"訂單金額",-1),be={class:"d-flex justify-content-between mt-4"},pe=e("p",{class:"mb-0 h4 fw-bold me-1"},"完成付款",-1),fe={class:"d-flex justify-content-between mt-4"},ue=e("p",{class:"mb-0 h4 fw-bold me-1"},"收件人",-1),we={class:"mb-0 h4 fw-bold"},ge={class:"d-flex justify-content-between mt-4"},ve=e("p",{class:"mb-0 h4 fw-bold me-1"},"電話",-1),ye={class:"mb-0 h4 fw-bold"},xe={class:"d-flex justify-content-between mt-4"},Oe=e("p",{class:"mb-0 h4 fw-bold me-1"},"地址",-1),ke={class:"mb-0 h4 fw-bold"},je={class:"d-flex justify-content-between mt-4"},Ie=e("p",{class:"mb-0 h4 fw-bold me-1"},"Email",-1),Ve={class:"mb-0 h4 fw-bold"},Ee={class:"d-flex justify-content-between mt-4"},Le=e("p",{class:"mb-0 h4 fw-bold me-1"},"備註",-1),Se={class:"mb-0 h4 fw-bold"};function Te(d,o,Be,Ce,s,_){var m,h,b,p,f,u,w,g,v,y,x,O,k;const E=r("loadingOverlay"),L=r("v-field"),S=r("error-message"),T=r("v-form");return n(),c("div",M,[i(E,{active:s.isOrderLoading,"is-full-page":!0},{default:V(()=>[z]),_:1},8,["active"]),q,e("div",J,[i(T,null,{default:V(({errors:l})=>[e("div",K,[i(L,{type:"email",class:a(["form-control-lg col-12",{"is-invalid":l.訂單號碼}]),id:"orderId","aria-describedby":"emailHelp",placeholder:"輸入訂單號碼，為「-」開頭的20碼英文數字",name:"訂單號碼",rules:_.minLength,modelValue:this.orderId,"onUpdate:modelValue":o[0]||(o[0]=j=>this.orderId=j)},null,8,["class","rules","modelValue"]),i(S,{name:"訂單號碼",class:"invalid-feedback"}),G]),e("button",{type:"button",class:"btn btn-dark mt-4 p-2 px-4",onClick:o[1]||(o[1]=j=>_.getOrder(this.orderId)),disabled:this.orderId===""||Object.keys(l).length>0},"送出查詢",8,Q)]),_:1}),((m=Object.keys(s.order))==null?void 0:m.length)!==0?(n(),c("div",W,[e("div",X,[e("table",Y,[Z,e("tbody",null,[(n(!0),c(N,null,P(s.carts,l=>(n(),c("tr",{key:l.id,class:"border-bottom border-top"},[e("th",$,[e("img",{src:l.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,ee),e("p",se,t(l.product.title)+" "+t(l.product.unit),1)]),e("td",te,[e("div",oe,[e("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:l.qty,readonly:""},null,8,le)])]),e("td",de,[e("p",re,"NT$"+t(l.total),1)])]))),128))])])]),e("div",ne,[e("div",ce,[ie,e("div",ae,[_e,e("p",{class:a(["mb-0 h4 fw-bold",{"d-none":Object.keys(s.order).length==0}])},t(new Date(((h=s.order)==null?void 0:h.create_at)*1e3).toLocaleString()),3)]),e("div",me,[he,e("p",{class:a(["mb-0 h4 fw-bold",{"d-none":Object.keys(s.order).length==0}])},"NT$"+t((b=s.order)==null?void 0:b.total),3)]),e("div",be,[pe,e("p",{class:a(["mb-0 h4 fw-bold",{"d-none":Object.keys(s.order).length==0}])},t((p=s.order)!=null&&p.is_paid?"是":"否"),3)]),e("div",fe,[ue,e("p",we,t((u=(f=s.order)==null?void 0:f.user)==null?void 0:u.name),1)]),e("div",ge,[ve,e("p",ye,t((g=(w=s.order)==null?void 0:w.user)==null?void 0:g.tel),1)]),e("div",xe,[Oe,e("p",ke,t((y=(v=s.order)==null?void 0:v.user)==null?void 0:y.address),1)]),e("div",je,[Ie,e("p",Ve,t((O=(x=s.order)==null?void 0:x.user)==null?void 0:O.email),1)]),e("div",Ee,[Le,e("p",Se,t((k=s.order)==null?void 0:k.message),1)])])])])):R("",!0)])])}const Re=B(H,[["render",Te]]);export{Re as default};
