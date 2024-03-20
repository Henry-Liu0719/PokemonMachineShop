import{a}from"./axios-G2rPRu76.js";import{k as h,S as o}from"./index-ISSCsJ85.js";var c={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gopopov",VITE_POKEMON_API:"https://pokeapi.co/api/v2",BASE_URL:"/PokemonMachineShop/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_POKEMON_API:n}=c,u=h("pokemon",{state:()=>({summarizedProductList:[],productList:[],products:[],machines:[],machineList:[],moveUrlList:[],moveList:[],typeUrlList:[],typeList:[],typeNameList:{},isAttributesLoading:!0}),actions:{async summarizeProductList(){await this.getMachines(),await this.getMachineList(),this.createSummarizedProductList(),this.addMachineName(),this.addCost(),this.addId(),this.addMachinePhoto(),await this.getMoveUrlList(),await this.getMoveList(),this.addMoveName(),this.addMoveText(),await this.createTypeUrlList(),await this.getTypeList(),this.getTypeNamesList(),this.addMoveType(),this.addLearnedByPokemon(),this.createProductList()},async exportTypeNamesList(){await this.createTypeUrlList(),await this.getTypeList(),this.getTypeNamesList()},async getMachines(){try{const t=await a.get(`${n}/item-category/37`);this.machines=t.data.items||[]}catch(t){console.dir(t)}},async getMachineList(){try{await Promise.all(this.machines.map(async(t,s)=>{const e=await a.get(t.url);e.data.flavor_text_entries.length&&this.machineList.push(e.data)})),this.machineList=this.machineList.sort(function(t,s){return t.id<s.id?-1:1})}catch(t){console.dir(t)}},async getMoveUrlList(){try{await Promise.all(this.machineList.map(async(t,s)=>{const e=await a.get(t.machines[0].machine.url);e.data&&this.moveUrlList.push(e.data)}))}catch(t){console.dir(t)}},async getMoveList(){try{await Promise.all(this.moveUrlList.map(async(t,s)=>{const e=await a.get(t.move.url);e.data&&this.moveList.push(e.data)})),this.moveList=this.moveList.sort(function(t,s){return t.machines[0].machine.url<s.machines[0].machine.url?-1:1})}catch(t){console.dir(t)}},async createTypeUrlList(){try{(await a.get(`${n}/type`)).data.results.forEach((s,e)=>{this.typeUrlList.push({url:s.url}),this.typeUrlList[e].name=s.name})}catch(t){o.fire({position:"top-end",icon:"false",title:"讀取屬性清單失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(t),this.isAttributesLoading=!1}},async getTypeList(){try{await Promise.all(this.typeUrlList.map(async(t,s)=>{const e=await a.get(t.url);e.data&&this.typeList.push(e.data),this.isAttributesLoading=!1}))}catch(t){o.fire({position:"top-end",icon:"false",title:"讀取屬性清單失敗，請聯繫管理員",showConfirmButton:!1,timer:1e3}),console.dir(t),this.isAttributesLoading=!1}},getTypeNamesList(){const t=[];this.typeList.forEach(i=>{t.push(i.names)});const s=[];t.forEach(i=>{s.push(i.filter(r=>r.language.name==="zh-Hant")[0].name||i[0].name)});const e=[];t.forEach(i=>{e.push(i.filter(r=>r.language.name==="en")[0].name||i[0].name)}),e.forEach((i,r)=>{this.typeNameList[i.toLowerCase()]=s[r]}),delete this.typeNameList["???"]},createSummarizedProductList(){this.machineList.forEach(t=>{this.summarizedProductList.push({})})},addMoveText(){const t=[];this.moveList.forEach(e=>{t.push(e.flavor_text_entries)});const s=[];t.forEach(e=>{s.push(e.filter(i=>i.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,i)=>{this.summarizedProductList[i].text=e.flavor_text})},addMoveName(){const t=[];this.moveList.forEach(e=>{t.push(e.names)});const s=[];t.forEach(e=>{s.push(e.filter(i=>i.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,i)=>{this.summarizedProductList[i].move_name=e.name})},addMoveType(){this.moveList.forEach((t,s)=>{this.summarizedProductList[s].type=this.typeNameList[t.type.name.toLowerCase()]})},addLearnedByPokemon(){this.moveList.forEach((t,s)=>{this.summarizedProductList[s].learned_by_pokemon=t.learned_by_pokemon})},stringifyLearnedByPokemon(t){const s=[];return t.forEach(e=>{s.push(JSON.stringify(e))}),s},addMachineName(){const t=[];this.machineList.forEach(e=>{t.push(e.names)});const s=[];t.forEach(e=>{s.push(e.filter(i=>i.language.name==="zh-Hant")[0]||e[0])}),s.forEach((e,i)=>{this.summarizedProductList[i].machine_name=e.name})},addCost(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].cost=t.cost})},addId(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].id=t.name})},addMachinePhoto(){this.machineList.forEach((t,s)=>{this.summarizedProductList[s].photo=t.sprites.default})},createProductList(){this.summarizedProductList.forEach(t=>{this.productList.push({origin_price:t.cost||9999,content:t.id,imagesUrl:this.stringifyLearnedByPokemon(t.learned_by_pokemon),title:t.machine_name,category:t.move_name,imageUrl:t.photo,description:t.text,unit:t.type,price:t.cost*.8||9999,is_enabled:1})})}}});export{u as p};