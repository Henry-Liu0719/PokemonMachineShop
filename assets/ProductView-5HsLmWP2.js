import{_ as w,m as u,p as _,a as p,r as b,o as d,c as a,b as t,d as c,e as n,t as e,s as k,h as f,l as C,v as L,F as T,g as N,i as S,n as P}from"./index-1BOxTqVS.js";import{c as g}from"./cartStore-SkugQs_N.js";import{p as y}from"./productStore-3Se7VwP2.js";import{_ as q}from"./Animation - 1710557059960-SOXLnD8x.js";const V={data(){return{productId:"",num:1,pokemonStrings:[],chineseTypeColorList:{},pokemons:[]}},mounted(){this.productId=this.$route.query.id,this.getProduct(this.$route.query.id),this.createTypeColorList()},methods:{...u(g,["addToCart"]),...u(_,["exportTypeNamesList","createTypeColorList"]),...u(y,["getProduct"])},computed:{...p(g,["isUpdating"]),...p(_,["typeNameList","typeColorList"]),...p(y,["isProductLoading","product"])},watch:{num(){this.num=this.num<1?1:this.num},typeColorList(){this.chineseTypeColorList={格鬥:"#8f191b",飛行:"#81b9ef",一般:"#9fa19f",幽靈:"#704170",鋼:"#60a1b8",火:"#e62829",岩石:"#afa981",草:"#3fa129",水:"#2980ef",電:"#fac000",地面:"#915121",毒:"#9141cb",蟲:"#b3c163",妖精:"#ef70ef",冰:"#3fd8ff",惡:"#44685e",龍:"#5060e1",超能力:"#f05388",暗:"#50413f"}},product(){this.pokemonStrings=[...this.product.imagesUrl]}}},x={class:"container"},B={class:"row align-items-center vl-parent"},E=t("img",{src:q,alt:"讀取中",class:"img-fluid"},null,-1),U={class:"col-md-7"},$={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},D={class:"carousel-inner"},O={class:"carousel-item active"},M=["src"],j=t("div",{class:"carousel-item"},[t("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})],-1),z=t("div",{class:"carousel-item"},[t("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})],-1),F={class:"col-md-5"},H={"aria-label":"breadcrumb"},I={class:"breadcrumb bg-white px-0 mb-0 py-3"},J=t("li",{class:"breadcrumb-item"},[t("a",{class:"text-muted",href:"./index.html"},"首頁")],-1),Q={class:"breadcrumb-item"},W={class:"breadcrumb-item active","aria-current":"page"},A={class:"fw-bold h1 mb-1"},G={class:"h4 fw-bold"},K={class:"h4 fw-bold"},R={class:"h4 fw-bold"},X={class:"h4 fw-bold"},Y={class:"mb-0 text-muted text-end"},Z={key:0},tt={class:"h4 fw-bold text-end"},ot={class:"row align-items-center"},st={class:"col-6"},et={class:"input-group my-3 bg-light rounded border"},it={class:"input-group-prepend"},rt={class:"btn btn-outline-dark border-1 py-2",type:"button",id:"button-addon1"},dt={class:"input-group-append"},at={class:"btn btn-outline-dark border-1 py-2",type:"button",id:"button-addon2"},ct={class:"col-6"},nt={class:"row my-5"},lt={class:"col-md-4"},ut={class:"row mt-5"},pt=t("h3",null,"可學習該招式機的寶可夢清單",-1),mt={key:0,class:"card border-0 mb-4"},ht=["src"],_t={class:"card-body text-center"};function bt(o,i,ft,gt,r,yt){var m,h;const v=b("loadingOverlay"),l=b("router-link");return d(),a("div",x,[t("div",B,[c(v,{active:o.isProductLoading,"is-full-page":!0},{default:n(()=>[E]),_:1},8,["active"]),t("div",U,[t("div",$,[t("div",D,[t("div",O,[t("img",{src:o.product.imageUrl,class:"d-block w-50",alt:""},null,8,M)]),j,z])])]),t("div",F,[t("nav",H,[t("ol",I,[J,t("li",Q,[c(l,{class:"text-muted",to:"products"},{default:n(()=>[S("產品列表")]),_:1})]),t("li",W,e(o.product.title)+" "+e(o.product.unit),1)])]),t("h2",A,e(o.product.unit),1),t("span",{class:"btn btn-dark py-2 border-0 w-25",style:k([{"background-color":r.chineseTypeColorList[o.product.category]},{"pointer-events":"none",cursor:"default"}])},e(o.product.category),5),t("p",G,"威力："+e(o.product.power||"無"),1),t("p",K,"命中率："+e(o.product.accuracy||"無"),1),t("p",R,"攻擊種類："+e(o.product.damage_class=="physical"?"物理":"特殊"),1),t("p",X,"PP："+e(o.product.pp||"無"),1),t("p",Y,[o.product.price!=o.product.origin_price?(d(),a("del",Z,"NT$"+e((m=o.product.origin_price)==null?void 0:m.toLocaleString()),1)):f("",!0)]),t("p",tt,"NT$"+e((h=o.product.price)==null?void 0:h.toLocaleString()),1),t("div",ot,[t("div",st,[t("div",et,[t("div",it,[t("button",rt,[t("i",{class:"bi bi-dash",onClick:i[0]||(i[0]=s=>r.num--)})])]),C(t("input",{type:"number",class:"form-control border-1 text-center shadow-none bg-light m-0 p-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":i[1]||(i[1]=s=>r.num=s),min:"0",readonly:""},null,512),[[L,r.num]]),t("div",dt,[t("button",at,[t("i",{class:"bi bi-plus",onClick:i[2]||(i[2]=s=>r.num++)})])])])]),t("div",ct,[t("a",{onClick:i[3]||(i[3]=s=>o.addToCart(o.product.id,r.num)),class:"text-nowrap btn btn-primary w-100 py-2"},"加到購物車")])])])]),t("div",nt,[t("div",lt,[t("p",null,e(o.product.description),1)])]),t("div",ut,[pt,(d(!0),a(T,null,N(o.product.pokemons,s=>(d(),a("div",{class:P(["col-12 col-sm-4 col-md-3 col-lg-2 mt-md-4",{"d-none":!s.name}]),key:s.id},[s.name?(d(),a("div",mt,[c(l,{to:{path:"pokemon",query:{id:s.id,pokemonName:s.name}}},{default:n(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded-100 rounded border border-1 border-secondary",alt:"pokemon.name"},null,8,ht)]),_:2},1032,["to"]),t("div",_t,[c(l,{to:{path:"pokemon",query:{id:s.id,pokemonName:s.name}}},{default:n(()=>[t("h4",null,e(s.name),1)]),_:2},1032,["to"])])])):f("",!0)],2))),128))])])}const Lt=w(V,[["render",bt]]);export{Lt as default};
