<template>
	<div class="newHouse">
		<my-header></my-header>
		<div class="main">
			  <el-carousel :interval="4000" width="100%" height="190px">
			    <el-carousel-item v-for="(i,item) in Carousel" :key="item">
			      <img :src="i" height="100%"  />
			    </el-carousel-item>
			  </el-carousel>
			
			<my-filtrate :filtrate="filtrate" ref="qqq">
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
					<ul class="price-left">
						<li :class="flag.pricePlan?filtrateClass:''" @click="flag.pricePlan=true">单价</li>
						<li :class="flag.pricePlan?'':filtrateClass" @click="flag.pricePlan=false">总价</li>
					</ul>
					<div class="price-right">
						<ul class="unitPricePlan" v-if="flag.pricePlan">
							<li v-for="(d,i) in htmltxt.unitPrice" :class="res.unitPrice.txt==d.txt&&filtrateClass" @click="priceClick(d)">{{d.txt}}</li>
						</ul>
						<ul class="totalPricePlan" v-else>
							<li v-for="(d,i) in htmltxt.totalPrice" :class="res.totalPrice.txt==d.txt&&filtrateClass" @click="priceClick(d)">{{d.txt}}</li>
						</ul>
					</div> 
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
					
					<p>类型</p>
					<my-checkbox-button v-model='res.type' :data="htmltxt.type"></my-checkbox-button>
				
					<p>面积</p>
					<my-checkbox-button v-model='res.acreage' :data="htmltxt.acreage"></my-checkbox-button>
				
				
					<p>销售状态</p>
					<my-checkbox-button v-model='res.state' :data="htmltxt.state"></my-checkbox-button>
					
					<p>装修状态</p>
					<my-checkbox-button v-model='res.fitment' :data="htmltxt.fitment"></my-checkbox-button>
					<div class="sormButton">
						<div >
							<mt-button type="default"  size="large"  @click="$refs.qqq.$data.activeFlag=''">清空条件</mt-button>
							
						</div>
						<div>
							<mt-button type="primary"  size="large"  @click="$refs.qqq.$data.activeFlag=''">确定</mt-button>
							
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
			<router-link to="/newHouseDateils" tag="li">
				<div class="list-left">
					<img src="../assets/image/banner-lun (1).jpg"/>
				</div>
				<div class="list-right">
					<h5>周口万达广场</h5>
					<p>售价待定</p>
					<p><span>川汇区</span> <i>4.2分</i> <i>8条评论</i></p>
					<p>开盘时间：2019:10:10</p>
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
					totalPrice:{txt:"不限",minPrice:0,maxPrice:0}, // 总价格
					unitPrice:{txt:"不限",minPrice:0,maxPrice:0},  //单价
					bedroomNum:[], //卧室数量
					sort:"", //排序   其中 1 为升序排列，而-1是用于降序排列.
					type:"", //类型：写字楼，商铺 住宅
					acreage:"", //面积
					state:"", //销售状态
					SellingTime:"", //开售时间
					fitment:"" //装修状况
				},
				flag:{
					pricePlan:true,
					bedroomNum:true
					
				},
				htmltxt:{
					totalPrice:[
						{txt:"不限",minPrice:0,maxPrice:0},
						{txt:"20万以下",minPrice:"min",maxPrice:200000},
						{txt:"20-30万",minPrice:200000,maxPrice:300000},
						{txt:"30-40万",minPrice:300000,maxPrice:400000},
						{txt:"40-50万",minPrice:400000,maxPrice:500000},
						{txt:"50-60万",minPrice:500000,maxPrice:600000},
						{txt:"60-70万",minPrice:600000,maxPrice:700000}

					],
					unitPrice:[
						{txt:"不限",minPrice:null,maxPrice:null},
						{txt:"3000元/平以下",minPrice:null,maxPrice:3000},
						{txt:"3000-4000元/平",minPrice:3000,maxPrice:4000},
						{txt:"4000-5000元/平",minPrice:4000,maxPrice:5000},
						{txt:"5000-6000元/平",minPrice:5000,maxPrice:6000},
						{txt:"6000-7000元/平",minPrice:6000,maxPrice:7000},
						{txt:"7000-8000元/平",minPrice:7000,maxPrice:8000},
						{txt:"8000-10000元/平",minPrice:8000,maxPrice:10000},
						{txt:"10000元/平以上",minPrice:10000,maxPrice:null},
					],
					bedroomNum:[
						
						{label:"一居",value:1},
						{label:"两居",value:2},
						{label:"三居",value:3},
						{label:"四居",value:4},
						{label:"五居",value:5},
						{label:"五居以上",value:6},
						
						
					],
					type:[
					{txt:"写字楼",value:"写字楼"},
					{txt:"商铺",value:"商铺"},
					{txt:"住宅",value:"住宅"},
					{txt:"别墅",value:"别墅"},
					
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
					state:[
					{txt:"在售",value:"在售"},
					{txt:"待售",value:"在售"},
					{txt:"售完",value:"在售"},
					],
					fitment:[
						{txt:"毛坯",value:"毛坯"},
						{txt:"非毛坯",value:"非毛坯"},
					]
					
				}
				
				
				
			}
		},
		
		async created(){
			let Data= await this.$http.get("http://127.0.0.1:3000/city?pid=3")
			this.city=Data.data
			console.log(this.$refs.qqq)
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
					line-height: .4rem;
					
				}
				p{
					color: #777777;
					line-height: .4rem;
					i{
						font-size: .20rem;
						background: #F6F6F6;
						padding: .05rem;
						border-radius: 0.04rem;
						font-style: normal;
					}
				}
			}
		}
	}
	.price{
		
		display: flex;
		.price-left{
			flex: 1;
			li{
				text-align: center;
				line-height: .6rem;
				border-bottom: 1px solid #ccc;

			}
			
		}
		.price-right{
			flex: 1;
			ul{
				li{
				text-align: center;
				line-height: .6rem;
				border-bottom: 1px solid #ccc;
				
				border-left: 1px solid #ccc;
					
				
			}
			}
			
			
		}
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