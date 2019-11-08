<template>
	<div class="header">
		<div class="back" @click="$router.back()">
			<i class="el-icon-arrow-left"></i>
			
		</div>
		<div class="title">
			<slot></slot>
		</div>
		<div class="header-right">
			<router-link to="/my" tag="div">
				<i class="el-icon-user-solid"></i>
				我的
			</router-link>
		</div>
	</div>
</template>

<script>
	import orientation from "./orientation"
	export default {
		components:{
			"my-orientation":orientation
		}
	}
</script>

<style lang="less" scoped="scoped">
	.header{
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FF8A00;
		padding: .5rem;
		.back{
			i{
				font-size: .4rem;
				color: white;
			}			
		}
		.header-right{
			div{
				color: #fff;
				text-align: center;
				i{
					font-size: .36rem;
					display: block;
				}
			}
		}
		.title{
			text-align: center;
			color: white;
			font-size: 0.32rem;
			
		}
		
	}
</style>