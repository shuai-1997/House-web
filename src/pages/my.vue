<template>
	<div class="my">
		<div class="back" >
			<i class="el-icon-arrow-left" @click="$router.back()">	</i>
		</div>
		<div class="header">
			
			<div class="user">
				<!--<img src="../assets/image/user.jpg"/>-->
			</div>
			<div class="name">
				<p>
					独行
				</p>
			</div>

			
		</div>
		<ul class="nav">
			<router-link to="/history" tag='li'> 我的收藏</router-link>
			<li>浏览记录</li>
			<li>我的订单</li>
			<li>我要卖房</li>
			<li>我要出租</li>
			<li>看房清单</li>
			<li>装修报价</li>
			<li>我的贷款</li>
			<li>帮你买房</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped="scoped">
	.my{
		.back{
			 margin-left: .2rem;
			i{
				line-height: 1rem;
				font-size: .42rem;
				
			}
			
		}
		.header{
			  display: flex;
			  height: 2rem;
			 align-items: center;
			.user{
				flex: 2;
				img{
					width: 100%;
				}
			}
			.name{
				flex:5;
			}
		}
		.nav{
			display: flex;
			justify-content: space-around;
			flex-wrap:wrap ;
			li{
				width: 26%;
				padding-top: 1rem;
				text-align: center;
				
			}
			li:nth-child(1){
				background: url(../assets/image/nav1.png) no-repeat;
				background-size: 8rem;
				background-position-x:0.46rem ;
				/*background-position-y:.1rem ;*/
				
			}
			li:nth-child(2){
				background: url(../assets/image/nav1.png) no-repeat;
				background-size: 8rem;
				background-position-x:-2.9rem ;
				/*background-position-y:-0.2rem ;*/
				
			}
			li:nth-child(3){
				background: url(../assets/image/nav1.png) no-repeat;
				background-size: 8rem;
				background-position-x:-6.2rem ;
				/*background-position-y:-0.3rem ;*/
				
			}
			li:nth-child(4){
				
				background: url(../assets/image/nav2.png) no-repeat;
				background-size: 9rem;
				background-position-x:-0.1rem ;
				/*background-position-y:.2rem ;*/
				
			}
			li:nth-child(5){
				
				background: url(../assets/image/nav2.png) no-repeat;
				background-size: 9rem;
				background-position-x:-3.4rem ;
				/*background-position-y:-0.3rem ;*/
				
			}
			li:nth-child(6){
				
				background: url(../assets/image/nav2.png) no-repeat;
				background-size: 9rem;
				background-position-x:-6.7rem ;
				/*background-position-y:-0.3rem ;*/
				
			}
			li:nth-child(7){
				
				background: url(../assets/image/nav3.png) no-repeat;
				background-size: 9rem;
				/*background-position-x:-0.1rem ;*/
				/*background-position-y:-0.3rem ;*/
				
			}
			li:nth-child(8){
				
				background: url(../assets/image/nav3.png) no-repeat;
				background-size: 9rem;
				background-position-x:-3.4rem ;
				/*background-position-y:-0.3rem ;*/
				
			}
			li:nth-child(9){
				
				background: url(../assets/image/nav3.png) no-repeat;
				background-size: 9rem;
				background-position-x:-6.8rem ;
				/*background-position-y:-0.3rem ;*/
				
				
			}
		}
	}
</style>