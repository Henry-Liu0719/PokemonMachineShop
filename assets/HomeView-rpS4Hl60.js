import{_ as S,a as g,p as f,m as y,r as l,o as a,c as n,b as t,d as e,e as o,F as v,g as b,w as L,h as C,n as N,i as w,t as m}from"./index-lRXAGCD2.js";import{p as x}from"./productStore-FSqwMRSe.js";import{S as A,a as O,A as V,P as M,N as j}from"./autoplay-Ui5_rJjE.js";import{_ as p}from"./Animation - 1710557059960-SOXLnD8x.js";const B="/PokemonMachineShop/assets/Gotcha-aUVtrOSU.png",W="/PokemonMachineShop/assets/pokemonAttributs-rX01EvUQ.png",q="/PokemonMachineShop/assets/pokemonBalls-Kqrw4W43.png",T="/PokemonMachineShop/assets/Eves-xOO3L-xw.png",U="/PokemonMachineShop/assets/diffBalls-AYxtOJ5s.png",z="/PokemonMachineShop/assets/trainers-CvuHOo7H.png",E={components:{Swiper:A,SwiperSlide:O},data(){return{modules:[V,M,j],autoplayConfig:{delay:5e3,disableOnInteraction:!0},paginationConfig:{clickable:!0},shuffledProducts:[],searchWord:""}},computed:{...g(x,["allProducts","isProductsLoading"]),...g(f,["typeNameList","isAttributesLoading","typeColorList"])},mounted(){this.init()},methods:{async init(){this.createTypeColorList(),await this.getAllProducts(),this.exportTypeNamesList()},...y(f,["exportTypeNamesList","createTypeColorList"]),...y(x,["getAllProducts"])},watch:{allProducts(){this.shuffledProducts=this.allProducts.products.slice().sort(()=>.5-Math.random()).slice(0,6)}}},H={class:"bg-light mt-lg-6 fs-5"},K={class:"position-relative bg-light"},F={class:"container d-flex flex-column",style:{"min-height":"50vh"}},R={class:"row justify-content-center my-auto"},D=t("img",{src:B,alt:"背景图像",style:{opacity:"0.15"},class:"w-50"},null,-1),G={class:"col-md-6 text-center position-absolute",style:{"z-index":"1"}},I=t("h2",null,"歡迎來到寶可夢招式機商店！",-1),J=t("p",{class:"text-muted mb-0"},"在我們的商店裡，你可以找到各種強大的寶可夢招式機，這些招式將幫助你的寶可夢在戰鬥中更加強大。無論是火、水、雷，還是其他屬性，我們都擁有最新、最強大的招式供你選擇。",-1),Q=t("div",{class:"my-auto"},"前往產品列表",-1),X=t("svg",{width:"13px",height:"10px",viewBox:"0 0 13 10"},[t("path",{d:"M1,5 L11,5"}),t("polyline",{points:"8 1 12 5 8 9"})],-1),Y={class:"container my-7"},Z={class:"row"},$=t("div",{class:"col-md-6"},[t("img",{src:W,alt:"寶可夢屬性",class:"img-fluid"})],-1),tt={class:"col-md-4 mx-auto text-center vl-parent"},st=t("h4",{class:"mt-4"},"根據屬性篩選",-1),et=t("img",{src:p,alt:"讀取中",class:"img-fluid"},null,-1),ot={class:"row flex-row-reverse justify-content-between mt-4"},it=t("div",{class:"col-md-6"},[t("img",{src:q,alt:"搜尋最愛的寶可夢",class:"img-fluid"})],-1),at={class:"col-md-4 m-auto text-center"},nt=t("h4",{class:"mt-4"},"搜尋最愛的寶可夢",-1),lt={class:"container"},ct={class:"row mt-5 vl-parent bg-light"},dt={key:0,src:p,alt:"讀取中",class:"img-fluid w-auto opacity-0"},rt=t("img",{src:p,alt:"讀取中",class:"img-fluid bg-light z-1"},null,-1),mt={class:"card border-0 mb-4 bg-light"},ut=["src","alt"],pt={class:"card-body text-center bg-light"},_t={class:"d-flex justify-content-between"},ht={class:"card-text text-muted mb-0"},gt={class:"container"},ft=t("div",{class:"row justify-content-between mt-4 ms-6"},[t("div",{class:"col-md-6"},[t("img",{src:T,alt:"各種各樣的寶可夢招式",class:"img-fluid"})]),t("div",{class:"col-md-4 m-auto text-center"},[t("h4",{class:"mt-4"},"多樣性"),t("p",{class:"text-muted"},"我們擁有各種各樣的寶可夢招式，涵蓋了所有屬性和戰鬥風格，無論你是喜歡攻擊、防守還是特殊技能，你都能找到適合你寶可夢的招式。")])],-1),yt=t("div",{class:"row justify-content-between mt-4 ms-6"},[t("div",{class:"col-md-6"},[t("img",{src:U,alt:"品質保證",class:"img-fluid"})]),t("div",{class:"col-md-4 m-auto text-center"},[t("h4",{class:"mt-4"},"品質保證"),t("p",{class:"text-muted"},"我們的招式機經過嚴格的測試和品質控制，確保每一個招式的威力和可靠性都是最高水準的。你可以放心購買，讓你的寶可夢在戰鬥中保持領先優勢。")])],-1),vt=t("div",{class:"row justify-content-between mt-4 ms-6"},[t("div",{class:"col-md-6"},[t("img",{src:z,alt:"專業服務",class:"img-fluid"})]),t("div",{class:"col-md-4 m-auto text-center"},[t("h4",{class:"mt-4"},"專業服務"),t("p",{class:"text-muted"},"我們擁有專業的寶可夢訓練師團隊，隨時為你提供專業的建議和支持。無論是選擇適合你寶可夢的招式，還是戰鬥策略的制定，我們都會竭盡全力為你服務。")])],-1);function bt(c,d,wt,xt,i,kt){var h;const r=l("RouterLink"),_=l("loadingOverlay"),k=l("v-field"),u=l("swiper-slide"),P=l("swiper");return a(),n("body",H,[t("div",K,[t("div",F,[t("div",R,[D,t("div",G,[I,J,e(r,{class:"btn rounded-0 mt-6 popov-btn w-auto",to:"products"},{default:o(()=>[Q,X]),_:1})])])])]),t("div",Y,[t("div",Z,[$,t("div",tt,[st,e(_,{active:c.isAttributesLoading,"is-full-page":!1},{default:o(()=>[et]),_:1},8,["active"]),(a(!0),n(v,null,b(Object.entries(c.typeNameList),s=>(a(),n("button",{type:"button",key:s[0],class:"m-2 py-2 d-inline btn btn-dark w-25 border-0",style:N({"background-color":c.typeColorList[s[0]]})},[e(r,{to:{path:"products",query:{category:s[1]}},class:"h4",style:{"text-decoration":"none"}},{default:o(()=>[w(m(s[1]),1)]),_:2},1032,["to"])],4))),128))])]),t("div",ot,[it,t("div",at,[nt,e(k,{type:"text",name:"keyWord",class:"form-control",placeholder:"搜尋寶可夢，可輸入名稱或者圖鑑編號。",required:"",onKeyup:d[0]||(d[0]=L(s=>{this.$router.push({path:"pokemons",query:{searchWord:i.searchWord}})},["enter"])),modelValue:i.searchWord,"onUpdate:modelValue":d[1]||(d[1]=s=>i.searchWord=s)},null,8,["modelValue"])])])]),t("div",lt,[t("div",ct,[((h=i.shuffledProducts)==null?void 0:h.length)===0?(a(),n("img",dt)):C("",!0),e(_,{active:c.isProductsLoading,"is-full-page":!1},{default:o(()=>[rt]),_:1},8,["active"]),(a(!0),n(v,null,b(i.shuffledProducts,s=>(a(),n("div",{class:"col-12 col-md-4 col-lg-2 mt-md-4",key:s.id},[t("div",mt,[e(r,{to:{path:"product",query:{id:s.id}}},{default:o(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded border border-1 border-secondary",alt:s.description},null,8,ut)]),_:2},1032,["to"]),t("div",pt,[t("h4",null,[e(r,{to:{path:"product",query:{id:s.id}},style:{"text-decoration":"none"}},{default:o(()=>[w(m(s.content)+" "+m(s.unit),1)]),_:2},1032,["to"])]),t("div",_t,[t("p",ht,m(s.description),1)])])])]))),128))])]),t("div",gt,[e(P,{spaceBetween:100,centeredSlides:!0,autoplay:i.autoplayConfig,pagination:i.paginationConfig,navigation:!0,modules:i.modules,class:"mySwiper mb-4 p-5"},{default:o(()=>[e(u,null,{default:o(()=>[ft]),_:1}),e(u,null,{default:o(()=>[yt]),_:1}),e(u,null,{default:o(()=>[vt]),_:1})]),_:1},8,["autoplay","pagination","modules"])])])}const Nt=S(E,[["render",bt]]);export{Nt as default};