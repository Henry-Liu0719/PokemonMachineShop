import{_ as b,m,f as u,r as _,o as e,c as o,a as t,b as i,w as c,F as p,g as h,d as x,e as l,t as a}from"./index-LmU9Rl5N.js";import{p as f}from"./pokemonStore-vILL5LYo.js";import{p as g}from"./productStore-jAEnRjEX.js";import{_ as v}from"./Animation - 1710557059960-SOXLnD8x.js";import"./axios-G2rPRu76.js";const k="/PokemonMachineShop/assets/pokemonAttributs-SK6yeAAh.png",w="/PokemonMachineShop/assets/pokemonBalls-Kqrw4W43.png",L={data(){return{shuffledProducts:[]}},computed:{...m(g,["products"]),...m(f,["typeNameList","isAttributesLoading","isProductsLoading"])},mounted(){this.exportTypeNamesList(),this.getAllProducts()},methods:{...u(f,["exportTypeNamesList"]),...u(g,["getAllProducts"])},watch:{products(){this.shuffledProducts=this.products.products.slice().sort(()=>.5-Math.random()).slice(0,3)}}},P={class:"position-relative"},A=t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url('/src/assets/pngwing.png')","background-position":"center center",opacity:"0.2"}},null,-1),N={class:"container d-flex flex-column",style:{"min-height":"100vh"}},S={class:"row justify-content-center my-auto"},V={class:"col-md-4 text-center",style:{"z-index":"1"}},j=t("h2",null,"歡迎來到寶可夢招式機商店！",-1),B=t("p",{class:"text-muted mb-0"},"在我們的商店裡，你可以找到各種強大的寶可夢招式機，這些招式將幫助你的寶可夢在戰鬥中更加強大。無論是火焰、水流、雷電，還是其他超能力，我們都擁有最新、最強大的招式供你選擇。",-1),q={class:"container my-7"},M={class:"row"},O=t("div",{class:"col-md-6"},[t("img",{src:k,alt:"",class:"img-fluid"})],-1),T={class:"col-md-4 m-auto text-center vl-parent"},$=t("h4",{class:"mt-4"},"根據屬性篩選",-1),C=t("img",{src:v,alt:"",class:"img-fluid"},null,-1),F=x('<div class="row flex-row-reverse justify-content-between mt-4"><div class="col-md-6"><img src="'+w+'" alt="" class="img-fluid"></div><div class="col-md-4 m-auto text-center"><h4 class="mt-4">根據神奇寶貝搜尋(開發中)</h4><p class="text-muted">輸入神奇寶貝的名稱立即搜尋</p></div></div>',1),K={class:"container vl-parent"},z=t("img",{src:v,alt:"",class:"img-fluid"},null,-1),D={class:"row mt-5"},E={class:"card border-0 mb-4"},H=["src"],U={class:"card-body text-center"},W={class:"d-flex justify-content-between"},G={class:"card-text text-muted mb-0"};function I(n,J,Q,R,y,X){const d=_("router-link"),r=_("loadingOverlay");return e(),o("body",null,[t("div",P,[A,t("div",N,[t("div",S,[t("div",V,[j,B,i(d,{class:"btn btn-dark rounded-0 mt-6",to:"products"},{default:c(()=>[l("瀏覽產品")]),_:1})])])])]),t("div",q,[t("div",M,[O,t("div",T,[$,i(r,{active:n.isAttributesLoading,"is-full-page":!1},{default:c(()=>[C]),_:1},8,["active"]),(e(!0),o(p,null,h(Object.entries(n.typeNameList),s=>(e(),o("button",{key:s[0],class:"m-2 py-2 d-inline btn btn-outline-primary"},[i(d,{to:{path:"products",query:{category:s[1]}}},{default:c(()=>[l(a(s[1]),1)]),_:2},1032,["to"])]))),128))])]),F]),t("div",K,[i(r,{active:n.isProductsLoading,"is-full-page":!1},{default:c(()=>[z]),_:1},8,["active"]),t("div",D,[(e(!0),o(p,null,h(y.shuffledProducts,s=>(e(),o("div",{class:"col-md-4 mt-md-4",key:s.id},[t("div",E,[t("img",{src:s.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,H),t("div",U,[t("h4",null,[i(d,{to:{path:"product",query:{id:s.id}}},{default:c(()=>[l(a(s.content)+" "+a(s.unit),1)]),_:2},1032,["to"])]),t("div",W,[t("p",G,a(s.description),1)])])])]))),128))])])])}const ot=b(L,[["render",I]]);export{ot as default};
