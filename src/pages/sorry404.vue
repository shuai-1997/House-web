<template>
	<div class="sorry">
		
		<img src="../assets/image/back.jpg"/>
		<div class="link" @click="$router.back()">
			<el-link type="warning">返回上一页</el-link>
		</div>
		
			
	</div>
</template>

<script>
</script>

<style>
	.sorry{
		width: 100%;
		height: 100%;
		background:url(../assets/image/b1.jpg);
		display: flex;
		align-items:center;
	}
	.link{
		position: fixed;
		top: 60%;
		left: 46%;
	}
</style>