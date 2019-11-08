<template>
	<div class="resoldApartmentDetails">
		<div class="header">
			<i class="el-icon-arrow-left" @click="$router.back()"></i>
			<i class="el-icon-star-off"></i>
		</div>
		<mt-swipe :auto="0" style="height:4rem;">
		  <mt-swipe-item><img src="../assets/image/banner-lun (1).jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/image/banner-lun (2).jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/image/banner-lun (5).jpg"/></mt-swipe-item>
		</mt-swipe>
		<h2>{{data.name}}</h2>
		<ul class="nav">
			<li>
				<p>{{data.price}}万</p>
				<span>总价</span>
			</li>
			<li>
				<p>{{data.houseType}}</p>
				<span>户型</span>
			</li>
			<li>
				<p><i>{{data.acreage}}m</i><sup>2</sup></p>
				<span>面积</span>
			</li>
		</ul>
		<div class="info">
			<h3>基本信息</h3>
			<div class="onerow">
				<p><span>单价</span><i>5087元/m</i><sup>2</sup> </p>
				
				<p><span>楼层</span>{{data.floor}}层</p>
			</div>
			<div class="onerow">
				<p><span>朝向</span>{{data.direction}}</p>
				<p><span>发布</span>{{formattingDate(data.time)}}</p>
			</div>
			<p class="row"><span>首付</span>约{{data.downPayment}}万，月供2253元</p>
			<p class="row"><span>小区</span>{{data.name}}</p>
			<p class="row"><span>接电时间：</span>09:00-22:00</p>
		</div>
		<div class="evaluate">
			<h3>业主自评</h3>
			<p>{{data.introduce}}</p>
		</div>
		<div class="footer">
			<div class="ren">
				<p>{{data.appellation}}</p>
				<span>业主</span>
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
	export default{
		data(){
			return{
				data:{},
				removeImg:"removeImg"
			}
		},
		created(){
			this.data=this.$route.query
		},
		methods:{
			formattingDate(time){
    		time=new Date(time)
    		let  year= time.getFullYear()
    		let mouth=time.getMonth()+1
    		let day=time.getDate()
    		return year+"/"+mouth+"/"+day
    	},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.resoldApartmentDetails{
		img{
			width: 100%;
			height: auto;
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
				span{
					color: #ADADAD;
				}
			}
			.btn{
				flex: 2;
				padding: 0.2rem
			}
			
		}
		.evaluate{
			margin-bottom:1.2rem ;
			padding:0 0.2rem;
			h3{
				font-size: 0.3rem;
				line-height: .8rem;
			}
			p{
				text-indent: 2em;
				line-height: .5rem;
			}
		}
		.info{
			
			padding: .2rem;
			span{
				color: #adadad;
				padding-right: 5px;
			}
			h3{
				font-size: 0.3rem;
				
			}
			.row{
				line-height: 0.6rem;
				
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
	}
	
</style>