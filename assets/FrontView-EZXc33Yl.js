import{_ as b,m as c,a as d,r as n,o as g,c as f,b as t,d as e,w as a,e as k,F as y,f as w,t as m}from"./index-AlI_uR_g.js";import{c as _}from"./cartStore-xlRbm9jc.js";import{f as p}from"./favoriteStore-CIQg13ks.js";import"./axios-G2rPRu76.js";const x={data(){return{keyWord:""}},mounted(){this.getCart(),this.getFavorites()},methods:{...c(_,["getCart"]),...c(p,["getFavorites"]),searchMachine(){this.$router.push({path:"/products",query:{keyWord:this.keyWord}})}},computed:{...d(_,["carts"]),...d(p,["favorites"])},watch:{favorites(){}}},V=t("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"},null,-1),F={class:"navbar navbar-expand navbar-light text-white p-4 border-bottom border-black border-3 mb-0 mb-md-3 mb-lg-1 position-relative relative1 h-100",style:{"background-color":"#FB0404"}},N=t("div",{class:"bg-white position-absolute top-100 start-50 border border-3 border-black z-1",style:{transform:"translate(-50%, -50%)",width:"5rem",height:"5rem","border-radius":"100%"}},null,-1),M=t("span",{class:"m-2"},[t("strong",null,"回首頁")],-1),S=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),W={class:"collapse navbar-collapse justify-content-end col-4",id:"navbarNavAltMarkup"},A={class:"navbar-nav"},B=t("span",null,[t("strong",null,"寶可夢列表")],-1),C=t("span",null,[t("strong",null,"產品列表")],-1),j=t("span",null,[t("strong",null,"訂單查詢")],-1),K=t("i",{class:"bi bi-heart"},null,-1),q={class:"badge text-bg-secondary"},$=t("i",{class:"bi bi-cart2"},null,-1),z={class:"badge text-bg-secondary"},D=t("div",{class:"bg-light py-4"},[t("div",{class:"container"})],-1),E={class:"bg-dark py-5"},O={class:"container"},T={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},U={class:"mb-md-0 mb-1 col-2"},G=t("span",null,[t("strong",null,"回首頁")],-1),H=t("span",null,[t("strong",null,"產品列表")],-1),I=w('<div class="mb-md-0 mb-1 col-5"><p class="mb-0">hugnminliu@gmail.com</p><p class="mb-0">本網站僅作為個人練習使用，無任何商業用途</p><p class="mb-0">2024 made by 貢波波夫</p></div><div class="mb-md-0 mb-1 col-5"><div class="col-md3" style="width:10%;"></div></div>',2);function J(l,i,L,P,r,v){const s=n("router-link"),u=n("v-field"),h=n("router-view");return g(),f(y,null,[V,t("nav",F,[N,e(s,{class:"nav-item nav-link me-4 active",to:"/"},{default:a(()=>[M]),_:1}),e(u,{type:"text",class:"form-control w-25",placeholder:"搜尋產品，可輸入招式名稱、內容、寶可夢。",required:"",onKeyup:k(v.searchMachine,["enter"]),modelValue:r.keyWord,"onUpdate:modelValue":i[0]||(i[0]=o=>r.keyWord=o)},null,8,["onKeyup","modelValue"]),S,t("div",W,[t("div",A,[e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"pokemons"},{default:a(()=>[B]),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"products"},{default:a(()=>[C]),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"searchOrder"},{default:a(()=>[j]),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"favorites"},{default:a(()=>{var o;return[t("span",null,[K,t("span",q,m((o=l.favorites)==null?void 0:o.length),1)])]}),_:1}),e(s,{class:"nav-item nav-link me-1 text-white m-1",to:"cart"},{default:a(()=>{var o;return[t("span",null,[$,t("span",z,m((o=l.carts.carts)==null?void 0:o.length),1)])]}),_:1})])])]),e(h),D,t("div",E,[t("div",O,[t("div",T,[t("div",U,[e(s,{class:"nav-item nav-link me-4 active m-2",to:"/"},{default:a(()=>[G]),_:1}),e(s,{class:"nav-item nav-link me-4 text-white m-2",to:"products"},{default:a(()=>[H]),_:1})]),I])])])],64)}const Z=b(x,[["render",J]]);export{Z as default};