import{a as e}from"./axios-G2rPRu76.js";import{k as c,S as i}from"./index-ISSCsJ85.js";var n={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gopopov",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:a,VITE_PATH:r}=n,p=c("product",{state:()=>({products:[],allProducts:[],product:{},carts:{},tempProduct:{},productModal:null,isProductsLoading:!0,isProductLoading:!0,isUpdating:!0,isCartAdded:!1,cartAddedMessage:"",qty:1,orderData:{data:{user:{name:"test",email:"test@gmail.com",tel:"0912346768",address:"kaohsiung"},message:"這是留言"}}}),actions:{openModal(t){this.tempProduct=t,this.$refs.userModal.open()},async getAllProducts(){this.isProductsLoading=!0,e.get(`${a}/api/${r}/products/all`).then(t=>{console.log(t.data),this.isProductsLoading=!1,this.allProducts=t.data}).catch(t=>{i.fire({position:"top-end",icon:"false",title:"讀取產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(t),this.isProductsLoading=!1})},async getProducts(t="",o=!1,d=""){this.isProductsLoading=!0,e.get(`${a}/api/${r}/products?page=${t}&category=${d}`).then(s=>{this.isProductsLoading=!1,this.products=s.data,o!==!1&&window.scrollTo({top:o,behavior:"smooth"})}).catch(s=>{i.fire({position:"top-end",icon:"false",title:"讀取產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(s),this.isProductsLoading=!1})},getProduct(t){this.isProductLoading=!0,e.get(`${a}/api/${r}/product/${t}`).then(o=>{this.product=o.data.product,this.isProductLoading=!1}).catch(o=>{i.fire({position:"top-end",icon:"false",title:"讀取產品失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(o),this.isProductLoading=!1})}}});export{p};
