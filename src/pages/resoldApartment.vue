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
						<li v-for="(d,i) in citys" :class="res.Area==d.cityname&&filtrateClass" @click="AreaClick(d)">{{d.cityname}}</li>
					</ul> 
				</div>
				<div class="price" slot="1">
					<my-radio-button v-model='res.price' :data="htmltxt.totalPrice"></my-radio-button>
					<mt-button type="primary"  size="large"  @click="priceClick()">确定</mt-button>
				</div>
				<div class="bedroomNum" slot="2">
					<p @click="res.bedroomNum=[]" :class="res.bedroomcount.length==0?filtrateClass:''">不限</p>
					<mt-checklist
					  align="right"
					  v-model="res.bedroomcount"
					  :options="htmltxt.bedroomNum">
					</mt-checklist>
					<mt-button type="primary"  size="large"  @click="bedroomNumClick()">确定</mt-button>
					
				</div>
				<div class="more" slot="3">
					
					<p>朝向</p>
					<my-checkbox-button v-model='res.direction' :data="htmltxt.orientation" ref="orientation"></my-checkbox-button>
				
					<p>面积</p>
					<my-radio-button v-model='res.acreage' :data="htmltxt.acreage" ref='acreage'></my-radio-button>
				
				
					<p>楼龄</p>
					<my-radio-button v-model='res.age' :data="htmltxt.age" ref='age'></my-radio-button>
					
					<p>装修状态</p>
					<my-checkbox-button v-model='res.fitment' :data="htmltxt.fitment" ref='fitment'></my-checkbox-button>
					<div class="sormButton">
						<div >
							<mt-button type="default"  size="large"  @click="clear()">清空条件</mt-button>
							
						</div>
						<div>
							<mt-button type="primary"  size="large"  @click="moreClick()">确定</mt-button>
							
						</div>	
						

					</div>
				</div>
				<div class="sort" slot="4">
					<ul>
						<li @click="sort(-1)">价格由高到低</li>
						<li @click="sort(1)">价格由低到高</li>
					</ul>
				</div>
				
			</my-filtrate>
		</div>
		<mt-loadmore  :auto-fill='false'  topDropText="释放刷新" :bottom-method="loadBottom"    ref="loadmore">
		<ul class="houseList" id="houseList">
				<div v-for='(item,index) in list' :key='index'>
					<router-link :to="{name:'resoldApartmentDetails',query:item}" tag="li">
						<div class="list-left">
							<img :src="item.imgArr[0]"/>
						</div>
						<div class="list-right">
							<h5>{{item.name}}</h5>
							<p><span>{{item.acreage}}m<sup>2</sup></span> <span>{{item.houseType}}</span> <span>{{item.direction}}</span> <span>{{item.fitment}}</span></p>
							<p><i>{{item.price}}万</i> <span>{{fixd(item.price,item.acreage)}}元/m<sup>2</sup></sub></span></p>
						</div>
					</router-link>
				</div>
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
				list:[],
				size:4,//每次查询几条
				current:0,//第几次查询
				topStatus: '',
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
				citys:[],
				filtrateClass:"filtrate-active",
				res:{
					Area:"", //区域
					price:[], // 总价格
					bedroomcount:[], //卧室数量
					sort:1, //排序   其中 1 为升序排列，而-1是用于降序排列.
					direction:['南'], //方向：东南西北
					acreage:{max:50,min:0}, //面积
					age:{max:5,min:0}, //楼龄
					fitment:["毛坯"]//装修状况
				},
				flag:{
					pricePlan:true,
					bedroomNum:true,
					bedroomcountFlag:false,//判断是否选择了几居
					priceFlag:false,//判断是否选择了价格
					AreaFlag:false,//判断是否选择了区域
					moreFlag:false,//判断是否选择了更多
					sortFlag:false,//判断排序
				},
				htmltxt:{
					totalPrice:[
						{txt:"不限",value:{minPrice:0,maxPrice:0}},
						{txt:"20万以下",value:{minPrice:0,maxPrice:20}},
						{txt:"20-30万",value:{minPrice:20,maxPrice:30}},
						{txt:"30-40万",value:{minPrice:30,maxPrice:40}},
						{txt:"40-50万",value:{minPrice:40,maxPrice:50}},
						{txt:"50-60万",value:{minPrice:50,maxPrice:60}},
						{txt:"60-70万",value:{minPrice:60,maxPrice:70}},
						{txt:"70-80万",value:{minPrice:70,maxPrice:80}},
						{txt:"80-90万",value:{minPrice:80,maxPrice:90}},
						{txt:"90-100万",value:{minPrice:90,maxPrice:100}},
						{txt:"100-150万",value:{minPrice:100,maxPrice:150}},
						{txt:"150万以上",value:{minPrice:150,maxPrice:0}},

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
					{txt:"50m以下",value:{max:50,min:0}},
					{txt:"50-70m",value:{min:50,max:70}},
					{txt:"70-90m",value:{min:70,max:90}},
					{txt:"90-130m",value:{min:90,max:130}},
					{txt:"130-150m",value:{min:130,max:150}},
					{txt:"150-200m",value:{min:150,max:200}},
					{txt:"200-300m",value:{min:200,max:300}},
					],
					age:[
					{txt:"5年以内",value:{max:5,min:0}},
					{txt:"5-10年",value:{max:10,min:5}},
					{txt:"10-20年",value:{max:20,min:10}},
					{txt:"20年以上",value:{max:0,min:20}},
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
			
				let Data= await this.$http.get("http://127.0.0.1:3000/city?pid="+this.city.id)
				this.citys=Data.data
			console.log(1)
				this.submit("first")
				
				let box=document.getElementById("houseList")
				
				box.style.height=document.documentElement.clientHeight -260+"px"
		},
		methods:{
			AreaClick(value){
				if(!value){
					this.flag.AreaFlag=false
					this.res.Area=""
					this.$refs.ppp.$data.activeFlag=''
					return
				}
				if(this.res.Area==value.cityname){
					this.flag.AreaFlag=false
					this.res.Area=""
				}else{
					this.flag.AreaFlag=true
					this.res.Area=value.cityname
					this.$refs.ppp.$data.activeFlag=''
				}
				this.submit("first")
			},
			bedroomNumClick(){
				this.$refs.ppp.$data.activeFlag=''
				this.flag.bedroomcountFlag=true
				this.submit("first")
			},
			clear(){
				 
				this.$refs.acreage.res=[]
				this.$refs.orientation.res=[]
				this.$refs.age.res=[]
				this.$refs.fitment.res=[]
				this.res.acreage=[]
				this.res.orientation=[]
				this.res.age=[]
				this.res.fitment=[]
				this.flag.moreFlag=false
			},
			priceClick(){
				
				this.$refs.ppp.$data.activeFlag=''
				this.flag.priceFlag=true
				this.submit("first")
			},
			moreClick(){
				this.flag.moreFlag=true
				this.$refs.ppp.$data.activeFlag=''
				this.submit("first")
			},
			sort(value){
				
				this.res.sort=value
				this.$refs.ppp.$data.activeFlag=''
				this.submit("first")
			},
			fixd(m,n){
				return Math.round(m*1000/n)
			},
			query(){
				let query={}
				if(this.flag.AreaFlag){
					query.Area=this.res.Area
				}
					
				if(this.flag.moreFlag){
					query.direction={$in:this.res.direction}
					query.fitment={$in:this.res.fitment}
					if(this.res.acreage.min==0&&this.res.acreage.max!=0){
						query.acreage={$lt:this.res.acreage.max}
					}
					if(this.res.acreage.min!=0&&this.res.acreage.max==0){
						query.acreage={$gt:this.res.acreage.min}
					}
					if(this.res.acreage.min!=0&&this.res.acreage.max!=0){
						query.acreage={$gt:this.res.acreage.min,$lt:this.res.acreage.max}
					}
					
					
					if(this.res.age.min==0&&this.res.age.max!=0){
						query.age={$lt:this.res.age.max}
					}
					if(this.res.age.min!=0&&this.res.age.max==0){
						query.age={$gt:this.res.age.min}
					}
					if(this.res.age.min!=0&&this.res.age.max!=0){
						query.age={$gt:this.res.age.min,$lt:this.res.age.max}
					}
				}
				if(this.flag.sortFlag){
					query.sort=this.res.sort
				}
				if(this.flag.priceFlag){
					if(this.res.price.minPrice==0&&this.res.price.maxPrice!=0){
						query.price={$lt:this.res.price.maxPrice}
					}
					if(this.res.price.minPrice!=0&&this.res.price.maxPrice==0){
						query.price={$gt:this.res.price.minPrice}
					}
					if(this.res.price.minPrice!=0&&this.res.price.maxPrice!=0){
						query.price={$gt:this.res.price.minPrice,$lt:this.res.price.maxPrice}
					}
				}
				if(this.flag.bedroomcountFlag){
					query.bedroomcount={$in:this.res.bedroomcount} 
				}
				console.log(query)
				return query
			},
			loadBottom() {
				this.submit("add")
  				this.$refs.loadmore.onBottomLoaded();
//				let box=document.getElementById("houseList")
//				box.offsetHeight
  				
				
			},
			async submit(flag){
				if (flag=="first") {
					console.log("first")
					this.current=0
				}
				this.current++
				let query =this.query()
				let res=await this.$http.post("/filtrateSecond",[query,{
						size:this.size,
						current:this.current
					},{price:this.res.sort}])
				
				if(flag=="first"){
					this.list = res.data
				}else if(flag=="add"){
					this.list = this.list.concat(res.data);
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