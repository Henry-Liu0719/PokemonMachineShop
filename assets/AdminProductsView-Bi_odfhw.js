import{a as i}from"./axios-G2rPRu76.js";import{_ as l,o as u,c as p,a as L}from"./index-LmU9Rl5N.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gopopov",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:r,VITE_PATH:c,VITE_POKEMON_API:d}=f,g={data(){return{summarizedProductList:[],productList:[],products:[],machines:[],machineList:[],moveUrlList:[],moveList:[],typeUrlList:[],typeList:[],typeNameList:{}}},mounted(){this.summarizeProductList()},methods:{async summarizeProductList(){await this.getMachines(),await this.getMachineList(),this.createSummarizedProductList(),this.addMachineName(),this.addCost(),this.addId(),this.addMachinePhoto(),await this.getMoveUrlList(),await this.getMoveList(),this.addMoveName(),this.addMoveText(),await this.createTypeUrlList(),await this.getTypeList(),this.getTypeNamesList(),this.addMoveType(),this.addLearnedByPokemon(),this.createProductList(),console.log("productList",this.productList)},async getMachines(){try{const t=await i.get(`${d}/item-category/37`);this.machines=t.data.items||[]}catch(t){console.dir(t)}},async getMachineList(){try{await Promise.all(this.machines.map(async(t,s)=>{const e=await i.get(t.url);e.data.flavor_text_entries.length&&this.machineList.push(e.data)})),this.machineList=this.machineList.sort(function(t,s){return t.id<s.id?-1:1})}catch(t){console.dir(t)}},async getMoveUrlList(){try{await Promise.all(this.machineList.map(async(t,s)=>{const e=await i.get(t.machines[0].machine.url);e.data&&this.moveUrlList.push(e.data)}))}catch(t){console.dir(t)}},async getMoveList(){try{await Promise.all(this.moveUrlList.map(async(t,s)=>{const e=await i.get(t.move.url);e.data&&this.moveList.push(e.data)})),this.moveList=this.moveList.sort(function(t,s){return t.machines[0].machine.url<s.machines[0].machine.url?-1:1})}catch(t){console.dir(t)}},async createTypeUrlList(){try{(await i.get(`${d}/type`)).data.results.forEach((s,e)=>{this.typeUrlList.push({url:s.url}),this.typeUrlList[e].name=s.name})}catch(t){console.dir(t)}},async getTypeList(){try{await Promise.all(this.typeUrlList.map(async(t,s)=>{const e=await i.get(t.url);e.data&&this.typeList.push(e.data)}))}catch(t){console.dir(t)}},getTypeNamesList(){const t=[];this.typeList.forEach(a=>{t.push(a.names)});const s=[];t.forEach(a=>{s.push(a.filter(o=>o.language.name==="zh-Hant")[0].name||a[0].name)});const e=[];t.forEach(a=>{e.push(a.filter(o=>o.language.name==="en")[0].name||a[0].name)}),e.forEach((a,o)=>{this.typeNameList[a.toLowerCase()]=s[o]})},createSummarizedProductList(){this.machineList.forEach(t=>{this.summarizedProductList.push({})})},addMoveText(){const t=[];this.moveList.forEach(e=>{t.push(e.flavor_text_entries)});const s=[];t.forEach(e=>{s.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,a)=>{this.summarizedProductList[a].text=e.flavor_text})},addMoveName(){const t=[];this.moveList.forEach(e=>{t.push(e.names)});const s=[];t.forEach(e=>{s.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,a)=>{this.summarizedProductList[a].move_name=e.name})},addMoveType(){this.moveList.forEach((t,s)=>{this.summarizedProductList[s].type=this.typeNameList[t.type.name.toLowerCase()]})},addLearnedByPokemon(){this.moveList.forEach((t,s)=>{this.summarizedProductList[s].learned_by_pokemon=t.learned_by_pokemon})},stringifyLearnedByPokemon(t){const s=[];return t.forEach(e=>{s.push(JSON.stringify(e))}),s},addMachineName(){const t=[];this.machineList.forEach(e=>{t.push(e.names)});const s=[];t.forEach(e=>{s.push(e.filter(a=>a.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,a)=>{this.summarizedProductList[a].machine_name=e.name})},addCost(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].cost=t.cost})},addId(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].id=t.name})},addMachinePhoto(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].photo=t.sprites.default})},getAllProducts(){i.get(`${r}/api/${c}/products/all`).then(t=>{}).catch(t=>{console.dir(t)})},deleteAllProducts(){i.get(`${r}/api/${c}/products/all`).then(e=>{console.log(e);const a=[];e.data.products.forEach(o=>{a.push(o.id)}),t(a)}).catch(e=>{console.dir(e)});function t(e){i.post(`${r}/admin/signin`,{username:"hungminliu@gmail.com",password:"gopopov"}).then(a=>{const{token:o,expired:n}=a.data;document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="true"&&(document.cookie=`loginToken=${o}; expires=${new Date(n)}; path=/`);const h=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");i.defaults.headers.common.Authorization=h,console.log(a),e.forEach(m=>{s(m)})}).catch(a=>{alert(a.response.data.error.message)})}function s(e){i.delete(`${r}/api/${c}/admin/product/${e}`).then(a=>{console.log(a)}).catch(a=>{console.dir(a)})}},createProductList(){this.summarizedProductList.forEach(t=>{this.productList.push({origin_price:t.cost||9999,content:t.id,imagesUrl:this.stringifyLearnedByPokemon(t.learned_by_pokemon),title:t.machine_name,category:t.type,imageUrl:t.photo,description:t.text,unit:t.move_name,price:t.cost*.8||9999,is_enabled:1})})}}};function y(t,s,e,a,o,n){return u(),p("div",null,[L("button",{class:"btn btn-danger",onClick:s[0]||(s[0]=h=>n.deleteAllProducts())},"deleteAllProducts")])}const _=l(g,[["render",y]]);export{_ as default};
