import{_,m as h,a as i,r as n,o as v,c as b,b as t,d as e,w as a,e as g,F as f,f as k,t as y}from"./index-ISSCsJ85.js";import{c}from"./cartStore-zZ1h7vi0.js";import{u as w}from"./utilStore-KXDmPgAh.js";import"./axios-G2rPRu76.js";const x="/PokemonMachineShop/assets/Pikachu-ap4C8B4N.png",M={data(){return{keyWord:""}},mounted(){this.getCart()},methods:{...h(c,["getCart"]),searchMachine(){this.$router.push({path:"/products",query:{keyWord:this.keyWord}})}},computed:{...i(c,["carts"]),...i(w,["favorites"])}},N=t("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},null,-1),V={class:"navbar navbar-expand navbar-light text-white p-4 border-bottom border-black border-3 mb-0 mb-lg-7 position-relative relative1 h-100",style:{"background-color":"#FB0404"}},C=t("div",{class:"bg-white position-absolute top-100 start-50 border border-3 border-black z-1",style:{transform:"translate(-50%, -50%)",width:"5rem",height:"5rem","border-radius":"100%"}},null,-1),S=t("span",{class:"m-2"},[t("strong",null,"回首頁")],-1),A=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse justify-content-end col-4",id:"navbarNavAltMarkup"},W={class:"navbar-nav"},F=t("span",null,[t("strong",null,"產品列表")],-1),j=t("span",null,[t("strong",null,"訂單查詢")],-1),K=t("i",{class:"bi bi-cart2"},null,-1),q={class:"badge text-bg-secondary"},E=t("div",{class:"bg-light py-4"},[t("div",{class:"container"})],-1),P={class:"bg-dark py-5"},R={class:"container"},$={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},z={class:"mb-md-0 mb-1 col-2"},D=t("span",null,[t("strong",null,"回首頁")],-1),H=t("span",null,[t("strong",null,"產品列表")],-1),O=k('<div class="mb-md-0 mb-1 col-5"><p class="mb-0">hugnminliu@gmail.com</p><p class="mb-0">本網站僅供個人作品使用，不提供任何商業用途</p><p class="mb-0">2024 All Rights Reserved. | made by 貢波波夫</p></div><div class="mb-md-0 mb-1 col-5"><div class="col-md3" style="width:10%;"><img src="'+x+'" alt="" class="img-fluid"></div></div>',2);function T(d,l,U,X,r,m){const s=n("router-link"),p=n("v-field"),u=n("router-view");return v(),b(f,null,[N,t("nav",V,[C,e(s,{class:"nav-item nav-link me-4 active",to:"/"},{default:a(()=>[S]),_:1}),e(p,{type:"text",class:"form-control w-25",id:"ContactMail","aria-describedby":"emailHelp",placeholder:"搜尋招式名稱、內容，EX:投擲",name:"email",required:"",onKeyup:g(m.searchMachine,["enter"]),modelValue:r.keyWord,"onUpdate:modelValue":l[0]||(l[0]=o=>r.keyWord=o)},null,8,["onKeyup","modelValue"]),A,t("div",B,[t("div",W,[e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"products"},{default:a(()=>[F]),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"searchOrder"},{default:a(()=>[j]),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"cart"},{default:a(()=>{var o;return[t("span",null,[K,t("span",q,y((o=d.carts.carts)==null?void 0:o.length),1)])]}),_:1})])])]),e(u),E,t("div",P,[t("div",R,[t("div",$,[t("div",z,[e(s,{class:"nav-item nav-link me-4 active m-2",to:"/"},{default:a(()=>[D]),_:1}),e(s,{class:"nav-item nav-link me-4 text-white m-2",to:"products"},{default:a(()=>[H]),_:1})]),O])])])],64)}const Q=_(M,[["render",T]]);export{Q as default};