<template>
	<div class="countDown">
		<button v-if="flag" @click="count()">
			发送验证码
		</button>
		<button v-else>
			({{CountDown}}秒)重发
		</button>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				CountDown:5,
				flag:true,
				time:""
			}
		},
		methods:{
			count(){
				this.flag=false
				this.time=setInterval(()=>{
					this.CountDown--
					if (this.CountDown<=0) {
						this.flag=true
						clearInterval(this.time)
						
					} 
				},1000)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.countDown{
		
		button{
			font-size: .20rem;
			border:1px #ccc solid ;
			border-radius: 0.05rem;
			padding: 0.1rem;
			background: #fff;
		}
	}
</style>