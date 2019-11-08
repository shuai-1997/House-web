<template>
	<div class="newHouseDateils">
		<div class="header">
			<i class="el-icon-arrow-left" @click="$router.back()"></i>
			<i class="el-icon-star-off"></i>
		</div>
		<mt-swipe :auto="0" style="height:4rem;">
		  <mt-swipe-item><img src="../assets/image/banner-lun (1).jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/image/banner-lun (2).jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/image/banner-lun (5).jpg"/></mt-swipe-item>
		</mt-swipe>
		<h2>周口万达广场</h2>
		<div class="info">
			<h3>基本信息</h3>
			<p>价格：均价6000元/平方米</p>
			<p>开盘时间：2019/9/7</p>
			<p>物业类别：普通住宅，标准写字楼，购物中心，综合体</p>
			<p>销售状态：在售</p>
			<p>装修状况：毛坯</p>
			<p>楼盘地址：周口开元大道与五一路交汇处</p>
			<p>兽楼处地址：开元大道与五一路交汇处东南角</p>
			<p>产权年限：标准写字楼产权为40年，购物中心产权40年，综合体产权为40年，普通住宅产权为70年</p>
			<h3>小区规划</h3>
			<p>占地面积：166013.8m <sup>2</sup></p>
			<p>建筑面积：593000m <sup>2</sup></p>
			<p>绿化率：30%</p>
			<p>楼栋总数：21</p>
			<p>物业费详情：待定</p>
		</div>
		
		<ul class="houseType">
			<h3>主力户型</h3>
			<li>
				<div class="list-left">
					<img src="../assets/image/houseType.jpg"/>
				</div>
				<div class="list-right">
					<h5>两室一厅</h5>
					<p>117m<sup>2</sup></p>
					<p>价格：6000元/平方米</p>
					
				</div>
			</li>
		</ul>
		<div class="footer">
			<div class="ren">
				<i class="el-icon-star-off"></i>
				<span>收藏</span>
			</div>
			<div class="btn">
			 	<mt-button size="large" type="primary" >在线咨询</mt-button>	
			</div>
			<div class="btn">
			  	<mt-button size="large" type="danger">打电话</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.newHouseDateils{
		img{
			width: 100%;
			height: auto;
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
			padding: 0 0.2rem;
			font-size: .36rem;
			line-height: 1rem;
		}
		.info{
			padding: 0 0.2rem;
			h3{
				font-size: .30rem;
				padding-top: .2rem;
			}
			p{
				line-height: .6rem;
			}
		}
		.houseType{
			margin: 0 0.2rem;
			margin-bottom: 1.2rem;
			h3{
				font-size: .30rem;

				line-height: .8rem;
			}
			li{
				display: flex;
				height: 1.7rem;
				.list-left{
					padding-right: .2rem;
					flex: 1;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.list-right{
					flex: 2;
					h5{
						line-height: .4rem;
						
					}
					p{
						color: #777777;
						line-height: .4rem;
						
					}
				}
			}
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
			.ren{
				
				flex: 1;
				padding: 0.2rem;
				i{
					font-size: .32rem;
				}
				span{
					color: #ADADAD;
					font-size: .32rem;
				}
			}
			.btn{
				flex: 2;
				padding: 0.2rem
			}
			
		}
	}
</style>