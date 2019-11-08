<template>
	<div class="history">
		<div class="header">
			<i class="el-icon-arrow-left" @click="$router.back()">	</i>
			<div class="title">
				<div :class="flag?active:''" @click="flag=true">
					收藏
				</div>
				<div :class="flag?'':active" @click="flag=false">
					浏览
				</div>
			</div>
			<i class="el-icon-edit"></i>
		</div>
		
		
		<div class="plan houseList" v-if="flag"  >
			<router-link to="/newHouseDateils" tag="li" >
				<div class="list-left">
					<span class="label">二手房</span>
					<img src="../assets/image/banner-lun (1).jpg"/>
				</div>
				<div class="list-right">
					<h5>周口万达广场</h5>
					<p>售价待定</p>
					<p><span>川汇区</span></p>
					
				</div>
				<div class="price">
					72万
				</div>
			</router-link>
		</div>
		
		
		
		<div class="plan">
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:true,
				active:"title-active"
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
.history{
	.header{
		height: 1rem;
		margin: 0 .2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		 border-bottom:1px solid #999 ;
		.title{
			display: flex;
			div{
				padding: .1rem .3rem;
			}
			div:nth-child(1){
				border-bottom: 1px #aaa solid;
				border-left: 1px #aaa solid;
				border-top: 1px #aaa solid;
				-webkit-border-top-left-radius: 0.3rem;
				-webkit-border-bottom-left-radius: 0.3rem ;
			}
			div:nth-child(2){
				border-bottom: 1px #aaa solid;
				border-right: 1px #aaa solid;
				border-top: 1px #aaa solid;
				-webkit-border-top-right-radius: 0.3rem ;
				-webkit-border-bottom-right-radius: 0.3rem ;
			}
			.title-active{
				background: #333;
				color: #fff;
			}
		}
	}
	.houseList{
		margin: 0.1rem 0.2rem;
		.label{
			position: absolute;
			padding: .1rem;
			background: #000;
			opacity: .7;
			font-size: .18rem;
			color: #fff;
		}
		li{
			display: flex;
			align-items: center;
			height: 1.7rem;
			.list-left{
				padding-right: .2rem;
				width:40%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.list-right{
				width:45%;
				h5{
					line-height: .5rem;
					
				}
				p{
					color: #777777;
					line-height: .5rem;
					span{
						margin: 0 0.1rem;
					}
				}
			}
			.price{
				width: 15%;
				font-size: 0.36rem;
				color: red;
			}
		}
	}
}
</style>