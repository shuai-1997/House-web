<template>
	<div class="letDetails">
		<div class="header">
			<i class="el-icon-arrow-left" @click="$router.back()"></i>
			<i class="el-icon-star-off"></i>
		</div>
		<mt-swipe :auto="0" style="height:4rem;">
		  <mt-swipe-item v-for="item in data.imgArr"><img :src="item"/></mt-swipe-item>
		  
		</mt-swipe>
		<h2>{{data.name}}</h2>
		<ul class="nav">
			<li>
				<p>{{data.price}}元/月</p>
				<span>月付</span>
			</li>
			<li>
				<p>{{data.housetype}}</p>
				<span>户型</span>
			</li>
			<li>
				<p><i>{{data.houseArea}}m</i><sup>2</sup></p>
				<span>面积</span>
			</li>
		</ul>
		<h3>基本信息</h3>
		<div class="info">
			
			<div class="onerow">
				<p><span>方式</span>{{data.type}}</p>
				<p><span>朝向</span>{{data.direction}}</p>
			</div>
			<div class="onerow">
				<p><span>层数</span>{{data.floor}}</p>
				<p><span>装修</span>简装修</p>
			</div>
			<div class="onerow">
				<p><span>看房</span>随时看房</p>
				<p><span>入住</span>随时入住</p>
			</div>
		</div>
		<h3>配套服务</h3>
		<ul class="serve">
			
			<li>
				<img src="../assets/image/inco (1).jpg" :class="!data.facility.includes('热水器')&&removeImg"/>
				<p>热水器</p>
			</li>
			<li>
				<img src="../assets/image/inco (2).jpg" :class="!data.facility.includes('热点')&&removeImg"/>
				<p>热点</p>
			</li>
			<li>
				<img src="../assets/image/inco (3).jpg" :class="!data.facility.includes('电视')&&removeImg"/>
				<p>电视</p>
			</li>
			<li>
				<img src="../assets/image/inco (4).jpg" :class="!data.facility.includes('洗衣机')&&removeImg"/>
				<p>洗衣机</p>
			</li>
			<li>
				<img src="../assets/image/inco (5).jpg" :class="!data.facility.includes('暖气')&&removeImg"/>
				<p>暖气</p>
			</li>
			<li>
				<img src="../assets/image/inco (6).jpg" :class="!data.facility.includes('空调')&&removeImg"/>
				<p>空调</p>
			</li>
			<li>
				<img src="../assets/image/inco (7).jpg" :class="!data.facility.includes('床')&&removeImg"/>
				<p>床</p>
			</li>
			<li>
				<img src="../assets/image/inco (8).jpg" :class="!data.facility.includes('冰箱')&&removeImg"/>
				<p>冰箱</p>
			</li>
		</ul>
		<h3>房源描述</h3>
		<p class="description">{{data.introduce}}</p>
		<div class="footer">
			<div class="btn">
			 	<mt-button size="large" type="primary">在线咨询</mt-button>	
			</div>
			<div class="btn">
			  	<mt-button size="large" type="danger">打电话</mt-button>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				data:{},
				removeImg:"removeImg"
			}
		},
		created(){
			this.data=this.$route.query
		}
	}
</script>

<style lang="less" scoped="scoped">
.letDetails{
	.removeImg{
		opacity: .1;
	}
	.header{
			width: 100%;
			position: absolute;
			top: 0;left: 0;
			
			display: flex;
			justify-content: space-between;
			z-index: 1;
		
			i{
				font-size: 0.5rem;
				color: #FFFFFF;
				padding: 0.2rem;
			}
		}
		h2{
			text-align: center;
			font-size: .36rem;
			line-height: 1rem;
		}
		.nav{
			display: flex;
			justify-content: space-around;
			p{
				color: red;
				sup{
				font-size: 0.10rem;

				}
				i{
					font-style: normal;
				}
			}
			span{
				color: #ADADAD;
				font-size: 0.2rem;
				 
			}
		}
		h3{
				font-size: 0.25rem;
				padding: .2rem;
				
			}
		.info{
			
			padding:0 .2rem;
			span{
				color: #adadad;
				padding-right: 5px;
			}
			
			.onerow{
				display: flex;
				justify-content: space-around;
				line-height: 0.6rem;
				align-items: flex-end;
				p{
					flex: 1;
					sup{
						font-size: 0.1rem;
					}
					i{
						font-style: normal;
					}
				}
			}
		}
		.serve{
			margin:0 0.2rem;

			display:flex;
			flex-wrap: wrap;
			
			li{
				width: 20%;
				text-align: center;
				img{
					width: 40%;
				}
			}
		}
		.description{
			text-indent: 2em;
			margin-bottom: 1.6rem;
			padding: 0 0.2rem;
		}
		.footer{
			background: #ffffff;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: .1rem .2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.btn{
				flex: 1;
				padding: 0.2rem
			}
			
		}

}
	
</style>