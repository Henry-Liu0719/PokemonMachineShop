import{_ as E,a as b,p as v,m as w,l as P,S as C,r as p,o as n,c,d,e as l,b as e,t as i,F as h,g as u,i as m,s as T,n as M}from"./index-lRXAGCD2.js";import{S as A,a as O,A as V,P as q,N as B}from"./autoplay-Ui5_rJjE.js";import{p as L}from"./productStore-FSqwMRSe.js";import{_ as S}from"./Animation - 1710557059960-SOXLnD8x.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"popovgo",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_POKEMON_API:x}=I,R={components:{Swiper:A,SwiperSlide:O},data(){return{modules:[V,q,B],autoplayConfig:{delay:1e3,disableOnInteraction:!1},paginationConfig:{clickable:!0},shuffledProducts:[],pokemon:{},imagesUrl:[],learnedMachines:[],isPokemonLoading:!0}},mounted(){window.scrollTo({top:0,behavior:"smooth"}),this.init()},computed:{...b(L,["isProductsLoading","allProducts"]),...b(v,["typeNameList","typeColorList"])},methods:{...w(L,["getAllProducts","isProductLoading"]),...w(v,["exportTypeNamesList","createTypeColorList"]),async init(){this.createTypeColorList(),await this.getAllProducts(),this.exportTypeNamesList(),await this.getPokemon(),this.getLearnedMachines()},async getPokemon(){this.isPokemonLoading=!0;try{const s=await P.get(`${x}/pokemon/${this.$route.query.id}`);this.pokemon=s.data,this.imagesUrl.push(s.data.sprites.front_default),this.imagesUrl.push(s.data.sprites.back_default),this.imagesUrl.push(s.data.sprites.front_female),this.imagesUrl.push(s.data.sprites.back_female),this.imagesUrl.push(s.data.sprites.front_shiny),this.imagesUrl.push(s.data.sprites.back_shiny),this.imagesUrl.push(s.data.sprites.front_shiny_female),this.imagesUrl.push(s.data.sprites.back_shiny_female),this.imagesUrl=this.imagesUrl.filter(a=>a);const r=await P.get(`${x}/pokemon-species/${this.$route.query.id}`);this.pokemon.description=r.data.flavor_text_entries[0].flavor_text,r.data.flavor_text_entries.forEach(a=>{a.language.name==="zh-Hant"&&(this.pokemon.description=a.flavor_text)})}catch(s){console.dir(s),C.fire({icon:"false",title:"讀取寶可夢失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3})}finally{this.isPokemonLoading=!1}},getLearnedMachines(){this.learnedMachines=[],this.allProducts.products.forEach(s=>{var r;(r=s.pokemons)==null||r.forEach(a=>{a.name===this.$route.query.pokemonName&&this.learnedMachines.push(s)})})}}},D={class:"container"},z=e("img",{src:S,alt:"讀取中",class:"img-fluid"},null,-1),F={class:"row align-items-center"},H={class:"col-12 col-md-5 col-xl-4"},K=["src"],j={class:"col-12 col-md-6 col-xl-4 row ms-3"},$={"aria-label":"breadcrumb",class:"col-12"},G={class:"breadcrumb px-0 mb-0 py-3"},J=e("li",{class:"breadcrumb-item"},[e("a",{class:"text-muted",href:"./index.html"},"首頁")],-1),Q={class:"breadcrumb-item active","aria-current":"page"},W={class:"col-6"},X={class:"fw-bold h1 mb-1"},Y={class:"col-6"},Z={class:"h4"},ee=e("strong",null,"圖鑑編號：",-1),se=e("br",null,null,-1),te={class:"h4"},oe=e("strong",null,"身高：",-1),ie=e("br",null,null,-1),ae={class:"h4"},ne=e("strong",null,"體重：",-1),le=e("br",null,null,-1),re=e("div",{class:"row align-items-center"},[e("div",{class:"col-6"})],-1),ce={class:"col-12 col-xl-3"},de={class:"text-muted"},pe={class:"row mt-5 vl-parent"},me=e("h3",null,"該寶可夢可學習的招式機清單",-1),_e=e("img",{src:S,alt:"讀取中",class:"img-fluid"},null,-1),he={class:"card border-0 mb-4"},ue=["src"],ge={class:"card-body text-center bg-light"},fe={class:"d-flex justify-content-between"},ye={class:"card-text text-muted mb-0"};function ke(s,r,a,be,o,ve){var f,y,k;const g=p("loadingOverlay"),N=p("swiper-slide"),U=p("swiper"),_=p("RouterLink");return n(),c("div",D,[d(g,{active:o.isPokemonLoading,"is-full-page":!0},{default:l(()=>[z]),_:1},8,["active"]),e("div",F,[e("div",H,[d(U,{spaceBetween:30,centeredSlides:!0,autoplay:o.autoplayConfig,pagination:o.paginationConfig,navigation:!0,modules:o.modules,class:"mySwiper"},{default:l(()=>[(n(!0),c(h,null,u(o.imagesUrl,t=>(n(),T(N,{key:t},{default:l(()=>[e("img",{src:t,class:"d-block w-100",alt:""},null,8,K)]),_:2},1024))),128))]),_:1},8,["autoplay","pagination","modules"])]),e("div",j,[e("nav",$,[e("ol",G,[J,e("li",Q,i(s.$route.query.pokemonName),1)])]),e("div",W,[e("h2",X,i(s.$route.query.pokemonName),1),(n(!0),c(h,null,u(o.pokemon.types,t=>(n(),c("span",{key:t.slot,class:"btn btn-dark w-50 py-2 border-0",style:M({"background-color":s.typeColorList[t.type.name]})},[d(_,{to:{path:"products",query:{category:s.typeNameList[t.type.name]}},class:"h4",style:{"text-decoration":"none"}},{default:l(()=>[m(i(s.typeNameList[t.type.name]),1)]),_:2},1032,["to"])],4))),128))]),e("div",Y,[e("p",Z,[ee,se,m(i((f=o.pokemon)==null?void 0:f.id),1)]),e("p",te,[oe,ie,m(i(((y=o.pokemon)==null?void 0:y.height)/10)+" 公尺",1)]),e("p",ae,[ne,le,m(i(((k=o.pokemon)==null?void 0:k.weight)/10)+" 公斤",1)])]),re]),e("div",ce,[e("p",de,i(o.pokemon.description),1)])]),e("div",pe,[me,d(g,{active:s.isProductsLoading,"is-full-page":!0},{default:l(()=>[_e]),_:1},8,["active"]),(n(!0),c(h,null,u(o.learnedMachines,t=>(n(),c("div",{class:"col-12 col-sm-4 col-md-3 col-lg-2 mt-md-4",key:t.id},[e("div",he,[d(_,{to:{path:"product",query:{id:t.id}}},{default:l(()=>[e("img",{src:t.imageUrl,class:"card-img-top rounded-100 rounded border border-1 border-secondary",alt:"pokemon.name"},null,8,ue)]),_:2},1032,["to"]),e("div",ge,[d(_,{to:{path:"pokemon",query:{id:o.pokemon.id}},class:"page-link text-primary"},{default:l(()=>[e("h4",null,i(t.unit),1)]),_:2},1032,["to"]),e("div",fe,[e("p",ye,i(t.title),1)])])])]))),128))])])}const Se=E(R,[["render",ke]]);export{Se as default};