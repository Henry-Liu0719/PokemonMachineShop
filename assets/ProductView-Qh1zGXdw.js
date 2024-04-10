import{_ as g,m as u,p as m,a as p,r as h,o as d,c as a,b as t,d as c,e as n,t as e,s as v,h as _,l as w,v as k,F as C,g as L,i as T,n as N}from"./index-RUF9gL7e.js";import{c as b}from"./cartStore-xvW-lkNm.js";import{p as f}from"./productStore-jRED4_f4.js";import{_ as S}from"./Animation - 1710557059960-SOXLnD8x.js";const P={data(){return{productId:"",num:1,pokemonStrings:[],chineseTypeColorList:{},pokemons:[]}},mounted(){this.productId=this.$route.query.id,this.getProduct(this.$route.query.id),this.createTypeColorList()},methods:{...u(b,["addToCart"]),...u(m,["exportTypeNamesList","createTypeColorList"]),...u(f,["getProduct"])},computed:{...p(b,["isUpdating"]),...p(m,["typeNameList","typeColorList"]),...p(f,["isProductLoading","product"])},watch:{num(){this.num=this.num<1?1:this.num},typeColorList(){this.chineseTypeColorList={格鬥:"#8f191b",飛行:"#81b9ef",一般:"#9fa19f",幽靈:"#704170",鋼:"#60a1b8",火:"#e62829",岩石:"#afa981",草:"#3fa129",水:"#2980ef",電:"#fac000",地面:"#915121",毒:"#9141cb",蟲:"#b3c163",妖精:"#ef70ef",冰:"#3fd8ff",惡:"#44685e",龍:"#5060e1",超能力:"#f05388",暗:"#50413f"}},product(){this.pokemonStrings=[...this.product.imagesUrl]}}},q={class:"container"},V={class:"row align-items-center vl-parent"},x=t("img",{src:S,alt:"讀取中",class:"img-fluid"},null,-1),B={class:"col-md-7"},E={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},U={class:"carousel-inner"},$={class:"carousel-item active"},D=["src"],O=t("div",{class:"carousel-item"},[t("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})],-1),M=t("div",{class:"carousel-item"},[t("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",class:"d-block w-100",alt:"..."})],-1),j={class:"col-md-5"},z={"aria-label":"breadcrumb"},F={class:"breadcrumb bg-white px-0 mb-0 py-3"},H=t("li",{class:"breadcrumb-item"},[t("a",{class:"text-muted",href:"./index.html"},"首頁")],-1),I={class:"breadcrumb-item"},J={class:"breadcrumb-item active","aria-current":"page"},Q={class:"fw-bold h1 mb-1"},W={class:"h4 fw-bold"},A={class:"h4 fw-bold"},G={class:"h4 fw-bold"},K={class:"h4 fw-bold"},R={class:"mb-0 text-muted text-end"},X={key:0},Y={class:"h4 fw-bold text-end"},Z={class:"row align-items-center"},tt={class:"col-6"},ot={class:"input-group my-3 bg-light rounded border"},st={class:"input-group-prepend"},et={class:"btn btn-outline-dark border-1 py-2",type:"button",id:"button-addon1"},it={class:"input-group-append"},rt={class:"btn btn-outline-dark border-1 py-2",type:"button",id:"button-addon2"},dt={class:"col-6"},at={class:"row my-5"},ct={class:"col-md-4"},nt={class:"row mt-5"},lt=t("h3",null,"可學習該招式機的寶可夢清單",-1),ut={key:0,class:"card border-0 mb-4"},pt=["src"],mt={class:"card-body text-center"};function ht(o,i,_t,bt,r,ft){const y=h("loadingOverlay"),l=h("router-link");return d(),a("div",q,[t("div",V,[c(y,{active:o.isProductLoading,"is-full-page":!0},{default:n(()=>[x]),_:1},8,["active"]),t("div",B,[t("div",E,[t("div",U,[t("div",$,[t("img",{src:o.product.imageUrl,class:"d-block w-50",alt:""},null,8,D)]),O,M])])]),t("div",j,[t("nav",z,[t("ol",F,[H,t("li",I,[c(l,{class:"text-muted",to:"products"},{default:n(()=>[T("產品列表")]),_:1})]),t("li",J,e(o.product.title)+" "+e(o.product.unit),1)])]),t("h2",Q,e(o.product.unit),1),t("span",{class:"btn btn-dark py-2 border-0 w-25",style:v([{"background-color":r.chineseTypeColorList[o.product.category]},{"pointer-events":"none",cursor:"default"}])},e(o.product.category),5),t("p",W,"威力："+e(o.product.power||"無"),1),t("p",A,"命中率："+e(o.product.accuracy||"無"),1),t("p",G,"攻擊種類："+e(o.product.price=="physical"?"物理":"特殊"),1),t("p",K,"PP："+e(o.product.pp||"無"),1),t("p",R,[o.product.price!=o.product.origin_price?(d(),a("del",X,"NT$"+e(o.product.origin_price),1)):_("",!0)]),t("p",Y,"NT$"+e(o.product.price),1),t("div",Z,[t("div",tt,[t("div",ot,[t("div",st,[t("button",et,[t("i",{class:"bi bi-dash",onClick:i[0]||(i[0]=s=>r.num--)})])]),w(t("input",{type:"number",class:"form-control border-1 text-center shadow-none bg-light m-0 p-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":i[1]||(i[1]=s=>r.num=s),min:"0",readonly:""},null,512),[[k,r.num]]),t("div",it,[t("button",rt,[t("i",{class:"bi bi-plus",onClick:i[2]||(i[2]=s=>r.num++)})])])])]),t("div",dt,[t("a",{onClick:i[3]||(i[3]=s=>o.addToCart(o.product.id,r.num)),class:"text-nowrap btn btn-primary w-100 py-2"},"加到購物車")])])])]),t("div",at,[t("div",ct,[t("p",null,e(o.product.description),1)])]),t("div",nt,[lt,(d(!0),a(C,null,L(o.product.pokemons,s=>(d(),a("div",{class:N(["col-12 col-sm-4 col-md-3 col-lg-2 mt-md-4",{"d-none":!s.name}]),key:s.id},[s.name?(d(),a("div",ut,[c(l,{to:{path:"pokemon",query:{id:s.id,pokemonName:s.name}}},{default:n(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded-100 rounded border border-1 border-secondary",alt:"pokemon.name"},null,8,pt)]),_:2},1032,["to"]),t("div",mt,[c(l,{to:{path:"pokemon",query:{id:s.id,pokemonName:s.name}}},{default:n(()=>[t("h4",null,e(s.name),1)]),_:2},1032,["to"])])])):_("",!0)],2))),128))])])}const kt=g(P,[["render",ht]]);export{kt as default};
