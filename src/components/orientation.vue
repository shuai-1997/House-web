<template>
	<div class="orientation" >
		<div class="" @click="fade()">
			<i class="el-icon-location" ></i>
				{{city.cityname}}
		</div>
		
		<transition name="fade">
			<div class="panel" v-if="flag" >
				<p v-for='i in citys' @click="data(i)">{{i.cityname}}</p>
			</div>
		</transition>
		
	</div>
</template>

<script>
	import { mapActions , mapState,mapGetters,mapMutations } from "vuex"
	export default{
		
		computed:{
			...mapState(['city']),
			
		},
		data(){
			return{
				flag:false,
				pid:"1",
				citys:[],
				
			}
		},
		props:['employ'],
		methods:{
			...mapMutations(["changeCity"]),
			async data(i){
				console.log(i)
				if(i.type=="2"){
					this.changeCity(i)
					this.flag=false
					
				}else{
					this.pid=i.id
					let citydata =await this.$http.get("http://127.0.0.1:3000/city?pid="+this.pid)
					if(citydata.data.length==1){
					
						
						
						this.changeCity(i)
						this.flag=false
					}else{
						this.citys=citydata.data
					}
					
				}
			},
			async fade(){
				console.log(this.employ)
				if (this.employ) {
					this.flag=!this.flag
					let citydata =await this.$http.get("http://127.0.0.1:3000/city?pid=1")
					this.citys=citydata.data
				} 
				
			}
		}
		
	}
</script>

<style lang="less" scoped="scoped">
.orientation{
	i{
	font-size: .36rem;
	display: block;
	}
	.panel{
		
		height: 3rem;
		/*width: 2rem;*/
		background: #FFF;
		border-radius: 0.1rem;
		position: absolute;
		overflow-y: scroll;
		padding: .2rem;
		p{
		color: #000000;
		cursor: pointer;
		font-size: .16rem;
		
		}
	}
	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
		transition: opacity 0.4s; 
	}
	.fade-leave-active{
		transition: opacity 0.4s; 
		
	}
	.fade-leave-to{
		opacity: 0;
		
	}
	
}

</style>