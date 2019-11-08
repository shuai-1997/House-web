<template>
	<div class="checkButton">
		<div  class="button" :class="res.includes(d.value)&&classActive" v-for="(d,i) in data" @click="but(d)">{{d.txt}}</div>
	</div>
</template>

<script>
	export default {
		props:["data","value"],
		data(){
			return{
				res:[],
				classActive:"active"
			}
		},
		created(){
			
		},
		methods:{
			but(value){
				if (this.res.includes(value.value)) {
				 this.res=this.res.filter(i=>i!=value.value)
						
					
				} else{
					this.res.push(value.value)
				}
				console.log(this.res)
				this.$emit("input",this.res)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
.checkButton{
	display:flex;
	justify-content: space-around;
	flex-wrap: wrap;
	 div{
	 
	 	font-size: .18rem;
	 	width: 20%;
	 	display: inline-block;
	 	text-align: center;
		background: none;
		padding: .1rem;
		border: 1px solid #ccc;
		border-radius: .1rem;
		margin: .1rem;
		
		
	}
	.active{
		border: 1px solid #FF8A00;
	}
}
</style>