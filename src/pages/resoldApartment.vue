<template>
	<div class="newHouse">
		<my-header></my-header>
		<div class="main">
			
			  <el-carousel :interval="4000" width="100%" height="190px">
			    <el-carousel-item v-for="(i,item) in Carousel" :key="item">
			      <img :src="i" height="100%"  />
			    </el-carousel-item>
			  </el-carousel>
			
			<my-filtrate :filtrate="filtrate" ref="ppp">
				<div class="area" slot="0">
					<ul class="area-left">
						<li class="filtrate-active">区域</li>
					</ul>
					
					<ul class="area-right">
						<li :class="res.Area==''&&filtrateClass" @click="res.Area=''">不限</li>
						<li v-for="(d,i) in city" :class="res.Area==d.cityname&&filtrateClass" @click="AreaClick(d)">{{d.cityname}}</li>
					</ul> 
				</div>
				<div class="price" slot="1">
					<my-checkbox-button v-model='res.totalPrice' :data="htmltxt.totalPrice"></my-checkbox-button>
					<mt-button type="primary"  size="large"  @click="$refs.qqq.$data.activeFlag=''">确定</mt-button>
				</div>
				<div class="bedroomNum" slot="2">
					<p @click="res.bedroomNum=[]" :class="res.bedroomNum.length==0?filtrateClass:''">不限</p>
					<mt-checklist
					  align="right"
					  v-model="res.bedroomNum"
					  :options="htmltxt.bedroomNum">
					</mt-checklist>
				</div>
				<div class="more" slot="3">
					
					<p>朝向</p>
					<my-checkbox-button v-model='res.orientation' :data="htmltxt.orientation"></my-checkbox-button>
				
					<p>面积</p>
					<my-checkbox-button v-model='res.acreage' :data="htmltxt.acreage"></my-checkbox-button>
				
				
					<p>楼龄</p>
					<my-checkbox-button v-model='res.age' :data="htmltxt.age"></my-checkbox-button>
					
					<p>装修状态</p>
					<my-checkbox-button v-model='res.fitment' :data="htmltxt.fitment"></my-checkbox-button>
					<div class="sormButton">
						<div >
							<mt-button type="default"  size="large"  @click="$refs.ppp.$data.activeFlag=''">清空条件</mt-button>
							
						</div>
						<div>
							<mt-button type="primary"  size="large"  @click="$refs.ppp.$data.activeFlag=''">确定</mt-button>
							
						</div>	
						

					</div>
				</div>
				<div class="sort" slot="4">
					<ul>
						<li @click="res.sort=-1">价格由高到低</li>
						<li @click="res.sort=1">价格由低到高</li>
					</ul>
				</div>
				
			</my-filtrate>
		</div>
		<ul class="houseList">
			<router-link to="/resoldApartmentDetails" tag="li">
				<div class="list-left">
					<img src="../assets/image/banner-lun (1).jpg"/>
				</div>
				<div class="list-right">
					<h5>周口万达广场</h5>
					<p><span>151m<sup>2</sup></span> <span>3室2厅</span> <span>南北</span> <span>新地阳光城</span></p>
					<p><i>72万</i> <span>3679元/m<sup>2</sup></sub></span></p>
				</div>
			</router-link>
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				Carousel:[
				require("../assets/image/banner-lun (1).jpg"),
				require("../assets/image/banner-lun (2).jpg"),
				require("../assets/image/banner-lun (3).jpg"),
				require("../assets/image/banner-lun (5).jpg"),
				require("../assets/image/banner-lun (1).png")
				],
				filtrate:[
				{name:"区域",index:"0",icon:""},
				{name:"价格",index:"1",icon:""},
				{name:"户型",index:"2",icon:""},
				{name:"更多",index:"3",icon:""},
				{name:"排序",index:"4",icon:"el-icon-sort"}
				],
				city:[],
				filtrateClass:"filtrate-active",
				res:{
					Area:"", //区域
					totalPrice:[], // 总价格
					bedroomNum:[], //卧室数量
					sort:"", //排序   其中 1 为升序排列，而-1是用于降序排列.
					orientation:"", //方向：东南西北
					acreage:"", //面积
					age:[], //楼龄
					fitment:"" //装修状况
				},
				flag:{
					pricePlan:true,
					bedroomNum:true
					
				},
				htmltxt:{
					totalPrice:[
						{txt:"不限",value:{minPrice:0,maxPrice:0}},
						{txt:"20万以下",value:{minPrice:"min",maxPrice:200000}},
						{txt:"20-30万",value:{minPrice:200000,maxPrice:300000}},
						{txt:"30-40万",value:{minPrice:300000,maxPrice:400000}},
						{txt:"40-50万",value:{minPrice:400000,maxPrice:500000}},
						{txt:"50-60万",value:{minPrice:500000,maxPrice:600000}},
						{txt:"60-70万",value:{minPrice:600000,maxPrice:700000}},
						{txt:"70-80万",value:{minPrice:700000,maxPrice:800000}},
						{txt:"80-90万",value:{minPrice:800000,maxPrice:900000}},
						{txt:"90-100万",value:{minPrice:900000,maxPrice:1000000}},
						{txt:"100-150万",value:{minPrice:1000000,maxPrice:1500000}},
						{txt:"150万以上",value:{minPrice:1500000,maxPrice:""}},

					],
					bedroomNum:[
						
						{label:"一居",value:1},
						{label:"两居",value:2},
						{label:"三居",value:3},
						{label:"四居",value:4},
						{label:"五居",value:5},
						{label:"五居以上",value:6},
						
						
					],
					orientation:[
					{txt:"东",value:"东"},
					{txt:"南",value:"南"},
					{txt:"西",value:"西"},
					{txt:"北",value:"北"},
					{txt:"南北通透",value:"南北通透"},
					{txt:"东西向",value:"东西向"},
					
					],
					
					acreage:[
					{txt:"50m以下",value:{max:50}},
					{txt:"50-70m",value:{min:50,max:70}},
					{txt:"70-90m",value:{min:70,max:90}},
					{txt:"90-130m",value:{min:90,max:130}},
					{txt:"130-150m",value:{min:130,max:150}},
					{txt:"150-200m",value:{min:150,max:200}},
					{txt:"200-300m",value:{min:200,max:300}},
					],
					age:[
					{txt:"5年以内",value:"5年以内"},
					{txt:"5-10年",value:"5-10年"},
					{txt:"10-20年",value:"10-20年"},
					{txt:"20年以上",value:"20年以上"},
					],
					fitment:[
						{txt:"毛坯",value:"毛坯"},
						{txt:"精装修",value:"精装修"},
						{txt:"简装修",value:"简装修"},
					]
					
				}
				
				
				
			}
		},
		
		async created(){
			let Data= await this.$http.get("http://127.0.0.1:3000/city?pid=3")
			this.city=Data.data
			console.log(this.$refs.ppp)
		},
		methods:{
			AreaClick(value){
				if(this.res.Area==value.cityname){
					this.res.Area=""
				}else{
					this.res.Area=value.cityname
				}
				
			},
			priceClick(value){
				
				if(this.flag.pricePlan){
					this.res.unitPrice=value
				}else{
					this.res.totalPrice=value
				}
			},
			
		}
	}
</script>

<style lang="less" scoped="scoped">
.newHouse{
	.main{
		margin-top: 1rem;
	}
	.filtrate-active{
		color: #FF8A00;
	}
	.sort{
		li{
			line-height: .6rem;
			text-align: center;
			border-bottom:1px solid #ccc;
		}
	}
	.more{
		p{
			line-height: .6rem;
		}
		.sormButton{
			width: 100%;
			display: flex;
			div{
				flex: 1;
				padding: .2rem;
			}
		}
	}
	.houseList{
		margin: 0 0.2rem;
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
					font-size: .32rem;
					line-height: .4rem;
					
				}
				p{
					color: #777777;
					line-height: .4rem;
					span{
						color: #ADADAD;
						font-size: 0.2rem;
						padding: .1rem;
						sup{
							font-size: .1rem;
						}
					}
					i{
						color: red;
						font-size: .30rem;
						
						padding: .05rem;
						
						font-style: normal;
					}
				}
			}
		}
	}
	.price{
		
		
		
		
	}
	.area{
		height: 4rem;
		display: flex;
		overflow: scroll;
		ul{
			flex: 1;
			li{
				text-align: center;
				line-height: .6rem;
				border-bottom: 1px solid #ccc;

			}
		}
		.area-right{
				li{
				border-left: 1px solid #ccc;
					
				}
			
		}
	}
	.bedroomNum{
		p{
			padding-top: .1rem;
			padding-left: 22px;
			line-height: .4rem;
			
		}
	}
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>