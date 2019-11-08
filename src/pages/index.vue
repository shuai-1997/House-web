<template>
	<div class="index">
		<my-header ></my-header>
		<div class="banner">
			<img src="../assets/image/banner.png"/>
			<div class="search-input">
				<el-input v-model="search"  placeholder="输入小区或商圈名开始找房哦！" icon=""></el-input>
				<img src="../assets/image/seach.jpg"/>
			</div>
		</div>
		<ul class="nav">
			<router-link to='/resoldApartment' tag="li"><img src="../assets/image/index_03.png"/><i>二手房</i></router-link>
			<router-link to='/newHouse' tag="li"><img src="../assets/image/index_05.png"/><i>新房</i></router-link>
			<router-link to='/let' tag="li"><img src="../assets/image/index_07.png"/><i>租房</i></router-link>
			<router-link to='/publishHouse' tag="li"><img src="../assets/image/index_09.png"/><i>卖房</i></router-link>
			<router-link to='/publishRentout' tag="li"><img src="../assets/image/index_09.png"/><i>出租</i></router-link>
		</ul>
		<div class="banner1">
			<img src="../assets/image/banner2.png"/>
		</div>
		<main>
			<div class="title">
				<h1>热门房源</h1>
				<h5>Hot house</h5>
			</div>
			<div class="content">
				<div class="content-child">
					<div class="content-img">
						<img src="../assets/image/img1.jpg"/>
					</div>
					<div class="content-li">
						<h2>文化部中间层 一层带院子 </h2>
						<p class="price"><span>2室一厅96平方米</span><i>1105万 </i></p>
						<p class="address"><span>红庙北里</span><i>14268元/平</i></p>
						<div class="label">
							<span>学区房</span><span>独家</span>
						</div>	
					</div>
				</div>
				<div class="content-child">
					<div class="content-img">
						<img src="../assets/image/img1.jpg"/>
					</div>
					<div class="content-li">
						<h2>文化部中间层 一层带院子 </h2>
						<p class="price"><span>2室一厅96平方米</span><i>1105万 </i></p>
						<p class="address"><span>红庙北里</span><i>14268元/平</i></p>
						<div class="label">
							<span>学区房</span><span>独家</span>
						</div>	
					</div>
				</div>
			</div>
		</main>
		<div class="hot-attention">
			<el-tabs :stretch="true" v-model="activeName" >
		    <el-tab-pane label="热门关注" name="first">
		    	<div class="double-ul">
		    		<ul>
			    		<router-link to="/" tag="li">北京二手房</router-link>
			    		<router-link to="/" tag="li">北京二手房价</router-link>
			    		<router-link to="/" tag="li">海淀日租房</router-link>
			    		<router-link to="/" tag="li">朝阳新房</router-link>
			    	</ul>
			    	<ul>
			    		<router-link to="/" tag="li">北京找房无忧</router-link>
			    		<router-link to="/" tag="li">青年家园</router-link>
			    		<router-link to="/" tag="li">免税房源</router-link>
			    		<router-link to="/" tag="li">满五年唯一免税</router-link>
			    	</ul>
		    	</div>
		    	
		    </el-tab-pane>
		    <el-tab-pane label="友情链接" name="second">
		    	
		    </el-tab-pane>
		 </el-tabs>
		</div>
		
		<my-foot-black></my-foot-black>
	</div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      activeName: 'first'
    }
  }
}
</script>

<style lang="less" scoped="scoped">
	.index{
		
		.banner{
			margin-top: 1rem;
			position: relative;
			.search-input{
				position: absolute;
				bottom: .1rem;
				padding: 0 0.2rem;
				width: 100%;

				img{
					position: absolute;
					width: 30px;
					right: .3rem;
					bottom: .06rem;
				}

			}
		}
		.nav{
			display: flex;
			justify-content:space-around;
			align-items: center;
			background:#FF8A00;
			padding: 0.2rem .1rem .1rem .1rem;
			li{
				width: 13%;
				text-align: center;
				i{
					color: #fff;

					line-height: .6rem;
					font-style: normal;
					font-size: 0.26rem;
				}
			}
		}
		main{
			.title{
				padding:0.2rem;
				 background:#FF8A00 ;
				 color:#FFFFFF;
				h1{
					font-size: .34rem;
				}
				h5{
					font-size: .24rem;
				}
			}
			
			.content{
				div:last-child{
					border-bottom: none;
				}
				.content-child{
					border-bottom: 2px solid #FB8484;
					padding:0.2rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.content-img{
						width: 26%;
					}
					
					.content-li{
						width: 70%;
						h2{
							font-size: .28rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							
						}
						p{
							display: flex;
							justify-content: space-between;
							line-height: .5rem;
							i{
								font-style: normal;
							}
						}
						
						.price{
							i{
								color: #FF8A00;
								font-weight: bold;
							}
						}
						.address{
							color: #bbb;
						}
						.label{
							margin-top: .05rem;
							span{
							 background: #F4F7F9;
							 padding: 0.06rem;
							 border-radius: 0.03rem;
							 margin: 5px;
							 color: #849AAE;	
							}
						}
					}
				}
				
			}
		}
		.hot-attention{
			padding: 0 .2rem;
		}
		.double-ul{
			display: flex;
			
			ul{
				flex: 1;
				li{
					height: .6rem;
				}
			}
		}
		
	}
</style>