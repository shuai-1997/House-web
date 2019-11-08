<template>
	<div class="header">
		<div class="logo">
			<img src="../assets/image/logo.jpg"/>
		</div>
		
		<div class="header-right">
			<router-link to="/my" tag="div">
				<i class="el-icon-user-solid"></i>
				我的
			</router-link>
			<my-orientation :employ="employ"></my-orientation>
		</div>
	</div>
</template>

<script>
	import orientation from "./orientation"
	export default {
		props:{
			employ:{
				type:Boolean,
				default:true
			}
		},
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
		.logo{
			width: 2.3rem;
		}
		.header-right{
			display: flex;
			justify-content: space-between;
			align-items: center;
			div{
				width: 1rem;
				color: #fff;
				text-align: center;
				i{
					font-size: .36rem;
					display: block;
				}
			}
		}
	}
</style>