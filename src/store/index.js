import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		city:{
			cityname: "中国",
			id: "1",
			pid: "0",
			type: "2"
		}
			
	},
	mutations:{
		changeshoppcar(state,arr){
			console.log(arr)
			if(arr[1]=="add"){
				state.shoppcar[arr[0]].count++
			}else if(arr[1]=="sub"){
				state.shoppcar[arr[0]].count--
				if(state.shoppcar[arr[0]].count==0){
					state.shoppcar.splice(arr[0],1)
				}
			}
		},
		changeCity(state,value){
			state.city=value
		},
		info(){
			console.log("恭喜")
		}
	},
	getters:{
		max(state){
			let pricearr=state.shoppcar.map(i=>i=i.price)
			return Math.max(...pricearr)
		},
		sum(state){
		return	state.shoppcar.reduce((a,i,t)=>a+i.count,0)
		}
	},
	actions:{
		jia(store,obj){
			store.commit('changeshoppcar',obj)
			store.commit('info')
			
		}
		
	}
})