<template>
	<div class="filtrate">
		<ul class="nav">
			<li v-for="(d,i) in filtrate" :key="i"  @click="click(d)" :class="d.index==activeFlag&&activeClass">
				{{d.name}}
				<img class="arrows" src="../assets/image/white.png" v-if="d.index==activeFlag" />
				<div class="icon" v-if="d.icon=='el-icon-sort'">
					<i v-if="d.index!=activeFlag" :class="d.icon"></i>
					<i v-else :class="d.icon" style="color:#FF8A00 ;"></i>
					
				</div>
				<div class="icon" v-else>
					<i v-if="d.index!=activeFlag" class="el-icon-caret-bottom"></i>
					<i v-else class="el-icon-caret-top" style="color:#FF8A00 ;"></i>
				</div>
				
			</li>
			
		</ul>
		
		<div class="gray" v-if="activeFlag!=''"></div>
		<div class="plan" v-for="(d,i) in filtrate"  v-if="d.index==activeFlag">
			
			
			<slot :name="d.index" ></slot>

			
		</div>

	</div>
</template>

<script>
 export default{
 	data(){
 		return{
 			activeFlag:"",
 			activeClass:"active",

 		}
 	},
 	cereated(){
 		
 	},
 	props:["filtrate"],
 	methods:{
 		click(d){
 			if (this.activeFlag==d.index) {
 				this.activeFlag=""
 			} else{
 				this.activeFlag=d.index
 			}
 		}
 	}
 }
</script>

<style lang="less" scoped="scoped">
.filtrate{
	position: relative;
	height: .6rem;
}
ul{
	list-style: none;
	padding: 0;
	margin: 0;

	
}
.gray{
	width: 100%;
	height: .2rem;
	position: absolute;
	background:rgba(0,0,0,0.2);
}
.active{
	color: #FF8A00;
}
.nav{
	display: flex;
	justify-content: space-around;
	li{
		position: relative;
		line-height: .6rem;
		i{
			color: #ccc;
		}
		.arrows{
			position: absolute;
			width: .3rem;
			bottom: -0.35rem;
			right:0.4rem;
			z-index: 1;
		}
		.icon{
			display: inline-block;
		}
		
	}
}
.plan{

	height: 4rem;	
	overflow: scroll;
	margin-top: .2rem;
	width: 100%;
	padding: 0 .2rem;
	position:absolute;
	z-index: 10;
	background: #fff;
	
}
</style>