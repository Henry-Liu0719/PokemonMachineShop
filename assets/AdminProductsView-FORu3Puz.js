import{a as o}from"./axios-G2rPRu76.js";import{_ as L,o as m,c as p,b as l,F as g,g as f,t as y}from"./index-AlI_uR_g.js";var P={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gopokemon",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:c,VITE_PATH:h,VITE_POKEMON_API:d}=P,_={data(){return{summarizedProductList:[],productList:[],products:[],machines:[],machineList:[],moveUrlList:[],moveList:[],typeUrlList:[],typeList:[],typeNameList:{},pokemons:{},speciesUrlList:[],speciesList:[],speciesNameList:{},pokemonCount:1025}},mounted(){this.summarizeProductList()},methods:{async summarizeProductList(){await this.login(),await this.getMachines(),await this.getMachineList(),this.createSummarizedProductList(),await this.getMoveUrlList(),await this.getMoveList(),this.addMoveItemsFirst(),this.addMoveName(),this.addMoveText(),this.addMachineName(),this.addCost(),this.addId(),this.addMachinePhoto(),await this.createTypeUrlList(),await this.getTypeList(),this.getTypeNamesList(),await this.createSpeciesUrlList(),await this.getSpeciesList(),this.getSpeciesNamesList(),await this.getPokemons(),this.addMoveType(),this.addLearnedByPokemon(),this.updateLearnedByPokemon(),this.updatePokemonNames(),this.createProductList(),console.log("summarizedProductList",this.summarizedProductList),console.log("productList",this.productList)},async getMachines(){try{const s=await o.get(`${d}/item-category/37`);this.machines=s.data.items||[]}catch(s){console.dir(s)}},async getMachineList(){try{await Promise.all(this.machines.map(async(s,t)=>{const e=await o.get(s.url);e.data.flavor_text_entries.length&&this.machineList.push(e.data)})),this.machineList=this.machineList.sort(function(s,t){return s.id<t.id?-1:1})}catch(s){console.dir(s)}},async getMoveUrlList(){try{await Promise.all(this.machineList.map(async(s,t)=>{const e=await o.get(s.machines[0].machine.url);e.data&&this.moveUrlList.push(e.data)}))}catch(s){console.dir(s)}},async getMoveList(){try{await Promise.all(this.moveUrlList.map(async(s,t)=>{const e=await o.get(s.move.url);e.data&&this.moveList.push(e.data)})),this.moveList=this.moveList.sort(function(s,t){return s.machines[0].machine.url<t.machines[0].machine.url?-1:1})}catch(s){console.dir(s)}},async createTypeUrlList(){try{(await o.get(`${d}/type`)).data.results.forEach((t,e)=>{this.typeUrlList.push({url:t.url}),this.typeUrlList[e].name=t.name})}catch(s){console.dir(s)}},async getTypeList(){try{await Promise.all(this.typeUrlList.map(async(s,t)=>{const e=await o.get(s.url);e.data&&this.typeList.push(e.data)}))}catch(s){console.dir(s)}},getTypeNamesList(){const s=[];this.typeList.forEach(a=>{s.push(a.names)});const t=[];s.forEach(a=>{t.push(a.filter(i=>i.language.name==="zh-Hant")[0].name||a[0].name)});const e=[];s.forEach(a=>{e.push(a.filter(i=>i.language.name==="en")[0].name||a[0].name)}),e.forEach((a,i)=>{this.typeNameList[a.toLowerCase()]=t[i]})},createSummarizedProductList(){this.machineList.forEach(s=>{this.summarizedProductList.push({})})},addMoveItemsFirst(){this.moveList.forEach((s,t)=>{const{accuracy:e,power:a,pp:i,damage_class:r}=s;this.summarizedProductList[t]={accuracy:e,power:a,pp:i,damage_class:r}})},addMoveText(){const s=[];this.moveList.forEach((e,a)=>{s.push(e.flavor_text_entries)});const t=[];s.forEach(e=>{t.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),t.forEach((e,a)=>{this.summarizedProductList[a].text=e.flavor_text})},addMoveName(){const s=[];this.moveList.forEach(e=>{s.push(e.names)});const t=[];s.forEach(e=>{t.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),t.forEach((e,a)=>{this.summarizedProductList[a].move_name=e.name})},addMoveType(){this.moveList.forEach((s,t)=>{this.summarizedProductList[t].type=this.typeNameList[s.type.name.toLowerCase()]})},addLearnedByPokemon(){this.moveList.forEach((s,t)=>{this.summarizedProductList[t].learned_by_pokemon=s.learned_by_pokemon})},stringifyLearnedByPokemon(s){const t=[];return s.forEach(e=>{t.push(JSON.stringify(e))}),t},addMachineName(){const s=[];this.machineList.forEach(e=>{s.push(e.names)});const t=[];s.forEach(e=>{t.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),t.forEach((e,a)=>{this.summarizedProductList[a].machine_name=e.name})},addCost(){this.machineList.forEach((s,t)=>{this.summarizedProductList[t].cost=s.cost})},addId(){this.machineList.forEach((s,t)=>{this.summarizedProductList[t].id=s.name})},addMachinePhoto(){this.moveList.forEach((s,t)=>{this.summarizedProductList[t].photo=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-${s.type.name}.png`})},async getAllProducts(){const s=await o.get(`${c}/api/${h}/products/all`);this.products=s.data.products,console.log("this.products",this.products)},async deleteAllProducts(){await this.getAllProducts();const s=[];for(let e=0;e<this.products.length;e++)s.push(o.delete(`${c}/api/${h}/admin/product/${this.products[e].id}`));const t=await Promise.all(s);console.log(t)},async postProducts(s,t=!1){if(t===!1){const e=[];for(let i=s.length-1;i<s.length;i++)e.push(o.post(`${c}/api/${h}/admin/product`,{data:s[i]}));const a=await Promise.all(e);console.log(a),console.log(!1)}else{const e=[];for(let i=t;i<=t;i++)e.push(o.post(`${c}/api/${h}/admin/product`,{data:s[i]}));const a=await Promise.all(e);console.log(a),console.log(t)}},createProductList(){this.summarizedProductList.forEach(s=>{this.productList.push({origin_price:s.cost||9999,content:s.id,pokemons:s.learned_by_pokemon,imagesUrl:this.stringifyLearnedByPokemon(s.learned_by_pokemon),title:s.machine_name,category:s.type,imageUrl:s.photo,description:s.text,unit:s.move_name,price:s.cost*.8||9999,is_enabled:1,accuracy:s.accuracy,power:s.power,pp:s.pp,damage_class:s.damage_class.name})})},updateLearnedByPokemon(){this.summarizedProductList.forEach(s=>{s.learned_by_pokemon.forEach(t=>{var e,a,i,r,n;t.speciesUrl=(a=(e=this.pokemons[t.name])==null?void 0:e.species)==null?void 0:a.url,t.imageUrl=(r=(i=this.pokemons[t.name])==null?void 0:i.sprites)==null?void 0:r.front_default,t.id=(n=this.pokemons[t.name])==null?void 0:n.id})})},async getPokemons(){const s=[];for(let e=1;e<=this.pokemonCount;e++)s.push(o.get(`${d}/pokemon/${e}`));(await Promise.all(s)).forEach(e=>{this.pokemons[e.data.name]=e.data,this.pokemons[e.data.name].chineseName=this.speciesNameList[e.data.name]})},async createSpeciesUrlList(){try{(await o.get(`${d}/pokemon-species?offset=0&limit=${this.pokemonCount}`)).data.results.forEach((t,e)=>{this.speciesUrlList.push({url:t.url}),this.speciesUrlList[e].name=t.name})}catch(s){console.dir(s)}},async getSpeciesList(){try{await Promise.all(this.speciesUrlList.map(async(s,t)=>{const e=await o.get(s.url);e.data&&this.speciesList.push(e.data)}))}catch(s){console.dir(s)}},getSpeciesNamesList(){const s=[];this.speciesList.forEach(a=>{s.push(a.names)});const t=[];s.forEach(a=>{t.push(a.filter(i=>i.language.name==="zh-Hant")[0].name||a[0].name)});const e=[];s.forEach(a=>{e.push(a.filter(i=>i.language.name==="en")[0].name||a[0].name)}),console.log("engNameArr",e),e.forEach((a,i)=>{this.speciesNameList[a.toLowerCase()]=t[i]})},updatePokemonNames(){this.summarizedProductList.forEach(s=>{s.learned_by_pokemon.forEach(t=>{t.name=this.speciesNameList[t.name]})})},async login(){try{const s=await o.post(`${c}/admin/signin`,{username:"hungminliu@gmail.com",password:"gopopov"}),{token:t,expired:e}=s.data;document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="true"&&(document.cookie=`loginToken=${t}; expires=${new Date(e)}; path=/`);const a=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");o.defaults.headers.common.Authorization=a}catch(s){console.dir(s)}}}},k={class:"row"},E=["onClick"];function v(s,t,e,a,i,r){return m(),p("div",null,[l("button",{class:"btn btn-danger",onClick:t[0]||(t[0]=n=>r.deleteAllProducts())},"deleteAllProducts"),l("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=n=>r.postProducts(i.productList))},"postAllProducts"),l("div",k,[(m(!0),p(g,null,f(i.productList,(n,u)=>(m(),p("button",{key:n.id,class:"btn btn-primary col-2",onClick:w=>r.postProducts(i.productList,u)},y(u)+" postProducts",9,E))),128))])])}const z=L(_,[["render",v]]);export{z as default};
