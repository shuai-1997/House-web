<template>
	<div class="newHouse">
		<my-header :employ="false" ></my-header>
		<div class="main">	
			<my-filtrate :filtrate="filtrate" ref="bbb">
				<div class="area" slot="0">
					<ul class="area-left">
						<li class="filtrate-active">区域</li>
					</ul>
					
					<ul class="area-right">
						<li :class="res.Area==''&&filtrateClass" @click="AreaClick()">不限</li>
						<li v-for="(d,i) in citys" :class="res.Area==d.cityname&&filtrateClass" @click="AreaClick(d)">{{d.cityname}}</li>
					</ul> 
				</div>
				<div class="price" slot="1">
					<my-radio-button v-model='res.rental' :data="htmltxt.rental"></my-radio-button>
					<mt-button type="primary"  size="large"  @click="priceClick()">确定</mt-button>
				</div>
				<div class="bedroomNum" slot="2">

					<mt-checklist
					  align="right"
					  v-model="res.type"
					  :options="htmltxt.type">
					</mt-checklist>
					<mt-button type="primary"  size="large"  @click="typeClick()">确定</mt-button>
					
				</div>
				<div class="more" slot="3">
					
					<p>朝向</p>
					<my-checkbox-button v-model='res.orientation' :data="htmltxt.orientation" ref="orientation"></my-checkbox-button>
					
					<p>户型</p>
					<my-checkbox-button v-model='res.bedroomNum' :data="htmltxt.bedroomNum" ref='bedroomNum'></my-checkbox-button>
					<div class="sormButton">
						<div >
							<mt-button type="default"  size="large"  @click="clear()">清空条件</mt-button>
						</div>
						<div>
							<mt-button type="primary"  size="large"  @click="moreClick()">确定</mt-button>
							
						</div>	
						

					</div>
				</div>
				<div class="sorts" slot="4">
					<ul>
						<li @click="sort(-1)">价格由高到低</li>
						<li @click="sort(1)">价格由低到高</li>

					</ul>
				</div>
				
			</my-filtrate>
		</div>
		<mt-loadmore  :auto-fill='false'  topDropText="释放刷新" :bottom-method="loadBottom"    ref="loadmore">
		  <ul class="houseList" id="houseList" style="height: 11rem;">
			<router-link   :to="{name:'letDetails',query:item}" tag="div" v-for='item in list'>
				<li >
			
					<div class="list-left">
						<img :src="item.imgArr[0]"/>
					</div>
					<div class="list-right">
						<h5>{{item.name}}</h5>
						<p><span class="el-icon-location-information"></span>{{item.address}}</p>
						<p class="label"><span>个人房源</span> <span>随时入住</span></p>
						<p><i>{{item.price}}元/月</i></p>
					</div>
				</li>
			</router-link>
		  </ul>
		</mt-loadmore>
		
	</div>
</template>

<script>
	import { mapActions , mapState , mapGetters , mapMutations } from "vuex"
	import { Loadmore } from 'mint-ui';


	export default{
		computed:{
			...mapState(['city']),
			
		},
		data(){
			return{
				citys:[],
				list:[],
				size:4,//每次查询几条
				current:0,//第几次查询
				topStatus: '',
				filtrate:[
				{name:"区域",index:"0",icon:""},
				{name:"租金",index:"1",icon:""},
				{name:"出租类型",index:"2",icon:""},
				{name:"更多",index:"3",icon:""},
				{name:"排序",index:"4",icon:"el-icon-sort"}
				],
				
				filtrateClass:"filtrate-active",
				res:{
					Area:"", //区域
					rental:[], // 租金
					type:[], //出租类型
					houseType:"",//户型
					sort:1, //排序   其中 1 为升序排列，而-1是用于降序排列.
					orientation:[], //方向：东南西北
					bedroomNum:[], //卧室数量
				},
				flag:{
					pricePlan:true,
					bedroomNum:true, 
					AreaFlag:false,//判断是否选择了区域
					rentalFlag:false,//判断价格
					typeFlag:false,//判断出租类型
					sortFlag:false,//判断排序
					moreFlag:false//判断是否选择了更多
					
				},
				htmltxt:{
					rental:[
						{txt:"不限",value:{minPrice:0,maxPrice:0}},
						{txt:"500元以下",value:{minPrice:0,maxPrice:500}},
						{txt:"500-1000元",value:{minPrice:500,maxPrice:1000}},
						{txt:"1000-1500元",value:{minPrice:1000,maxPrice:1500}},
						{txt:"1500-2000元",value:{minPrice:1500,maxPrice:2000}},
						{txt:"2000-3000元",value:{minPrice:2000,maxPrice:3000}},
						{txt:"3000-4000元",value:{minPrice:3000,maxPrice:4000}},
						{txt:"4000-5000元",value:{minPrice:4000,maxPrice:5000}},
						
						{txt:"5000元以上",value:{minPrice:5000,maxPrice:0}},
					],
					type:[	
						{label:"整租",value:"整租"},
						{label:"合租",value:"合租"},
						{label:"单间",value:"单间"},
						{label:"商铺",value:"商铺"},
						
						
					],
					orientation:[
					{txt:"东",value:"东"},
					{txt:"南",value:"南"},
					{txt:"西",value:"西"},
					{txt:"北",value:"北"},
					{txt:"南北通透",value:"南北通透"},
					{txt:"东西向",value:"东西向"},
					
					],
					fitment:[
						{txt:"毛坯",value:"毛坯"},
						{txt:"精装修",value:"精装修"},
						{txt:"简装修",value:"简装修"},
					],
					bedroomNum:[
						
						{txt:"一居",value:1},
						{txt:"两居",value:2},
						{txt:"三居",value:3},
						{txt:"四居",value:4},
						{txt:"五居",value:5},
						{txt:"五居以上",value:6},
						
						
					]
					
				}
				
				
				
			}
		},
		
		async created(){
				console.log(this.city)
				let Data= await this.$http.get("http://127.0.0.1:3000/city?pid="+this.city.id)
				this.citys=Data.data
				console.log(this.citys)
				this.submit("first")
				console.log()
				let box=document.getElementById("houseList")
				console.log(document.documentElement.clientHeight)
				box.style.height=document.documentElement.clientHeight -160+"px"
		},
		
		methods:{
			query(){
				let query={}
				if(this.flag.AreaFlag){
					query.Area=this.res.Area
				}
				if(this.flag.moreFlag){
					query.direction={$in:this.res.orientation}
					query.bedroomcount={$in:this.res.bedroomNum}
				}
				if(this.flag.sortFlag){
					query.sort=this.res.sort
				}
				if(this.flag.rentalFlag){
					if(this.res.rental.minPrice==0&&this.res.rental.maxPrice!=0){
						query.price={$lt:this.res.rental.maxPrice}
					}
					if(this.res.rental.minPrice!=0&&this.res.rental.maxPrice==0){
						query.price={$gt:this.res.rental.minPrice}
					}
					if(this.res.rental.minPrice!=0&&this.res.rental.maxPrice!=0){
						query.price={$gt:this.res.rental.minPrice,$lt:this.res.rental.maxPrice}
					}
				}
				if(this.flag.typeFlag){
					query.type={$in:this.res.type} 
				}
				return query
			},
			async submit(flag){
				if (flag=="first") {
					console.log("first")
					this.current=0
				}
				this.current++
				let query =this.query()
				let res=await this.$http.post("/filtrateLet",[query,{
						size:this.size,
						current:this.current
					},{price:this.res.sort}])
				
				if(flag=="first"){
					this.list = res.data
				}else if(flag=="add"){
					this.list = this.list.concat(res.data);
				}
			},
			sort1(){
				
				this.res.sort=1
				this.$refs.bbb.$data.activeFlag=''
				
			},
			sort(value){
				
				this.res.sort=value
				this.$refs.bbb.$data.activeFlag=''
				
			},
			loadBottom() {
				this.submit("add")
  				this.$refs.loadmore.onBottomLoaded();
//				let box=document.getElementById("houseList")
//				box.offsetHeight
  				console.log()
				
			},
			
			
			AreaClick(value){
				if(!value){
					this.flag.AreaFlag=false
					this.res.Area=""
					this.$refs.bbb.$data.activeFlag=''
					return
				}
				if(this.res.Area==value.cityname){
					this.flag.AreaFlag=false
					this.res.Area=""
				}else{
					this.flag.AreaFlag=true
					this.res.Area=value.cityname
					this.$refs.bbb.$data.activeFlag=''
				}
				this.submit("first")
			},
			typeClick(){
				this.flag.typeFlag=true
				this.$refs.bbb.$data.activeFlag=''
				this.submit("first")
			},
			
			
			priceClick(value){
				this.$refs.bbb.$data.activeFlag=''
				this.flag.rentalFlag=true
				this.submit("first")
			},
			clear(){
				this.$refs.bedroomNum.res=[]
				this.$refs.orientation.res=[]
				this.res.bedroomNum=[]
				this.res.orientation=[]
				this.flag.moreFlag=false
			},
			moreClick(){
				this.flag.moreFlag=true
				this.$refs.bbb.$data.activeFlag=''
				this.submit("first")
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
.newHouse{
	
	.main{
		/*margin-top: 1rem;*/
		position: fixed;
		width: 100%;
		top: 1rem;
		background: #fff;
		z-index: 2;
	}
	.filtrate-active{
		color: #FF8A00;
	}
	.sorts{
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
		margin-top:1.5rem;
		/*height: 11rem;*/
		overflow: scroll;
		/*margin: 0 0.2rem;*/
		li{
			margin: .2rem 0;
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
					font-size: .3rem;
					line-height: .4rem;
					
				}
				p{
					line-height: .5rem;
				}
				.label{
					color: #777777;
					line-height: .4rem;
					span{
						color: #ADADAD;
						font-size: 0.18rem;
						padding: 0.05rem;
						background: #EEEEEE;
						border-radius: 0.05rem;
						
						
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