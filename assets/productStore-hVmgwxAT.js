import{a as e}from"./axios-G2rPRu76.js";import{p as c,S as a}from"./index-AlI_uR_g.js";var n={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gopokemon",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:i,VITE_PATH:r}=n,p=c("product",{state:()=>({products:[],allProducts:[],product:{},carts:{},tempProduct:{},productModal:null,isProductsLoading:!0,isProductLoading:!0,isUpdating:!0,isCartAdded:!1,cartAddedMessage:"",qty:1,orderData:{data:{user:{name:"test",email:"test@gmail.com",tel:"0912346768",address:"kaohsiung"},message:"這是留言"}}}),actions:{openModal(t){this.tempProduct=t,this.$refs.userModal.open()},async getAllProducts(){this.isProductsLoading=!0;try{const t=await e.get(`${i}/api/${r}/products/all`);console.log(t.data),this.isProductsLoading=!1,this.allProducts=t.data}catch(t){a.fire({position:"top-end",icon:"false",title:"讀取所有產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(t),this.isProductsLoading=!1}},async getProducts(t="",o=!1,d=""){this.isProductsLoading=!0,e.get(`${i}/api/${r}/products?page=${t}&category=${d}`).then(s=>{this.isProductsLoading=!1,this.products=s.data,o!==!1&&window.scrollTo({top:o,behavior:"smooth"})}).catch(s=>{a.fire({position:"top-end",icon:"false",title:"讀取產品清單失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(s),this.isProductsLoading=!1})},async getProduct(t){this.isProductLoading=!0;try{const o=await e.get(`${i}/api/${r}/product/${t}`);console.log(o.data.product),this.product=o.data.product,this.isProductLoading=!1}catch(o){a.fire({position:"top-end",icon:"false",title:"讀取單一產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(o),this.isProductLoading=!1}}}});export{p};