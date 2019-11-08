<template>
	<div class="radiobutton">
		<div  class="button" :class="res==d.value&&classActive" v-for="(d,i) in data" @click="but(d)">{{d.txt}}</div>
	</div>
</template>

<script>
	export default {
		props:["data","value"],
		data(){
			return{
				res:"",
				classActive:"active"
			}
		},
		created(){
			
		},
		methods:{
			but(value){
				this.res=value.value
				
				this.$emit("input",this.res)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
.radiobutton{
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