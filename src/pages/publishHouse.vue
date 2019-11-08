<template>
	<div class="publishHouse">
		<my-header-title>发布房源</my-header-title>
		<div class="main">
			
			<my-upload  action="http://127.0.0.1:3000/upload" v-model="info.imgArr"></my-upload>
			
			<mt-field label="小区名称" v-model="info.name"></mt-field>
			<div class="houseType" @click="fade()">
				<span>城市</span>
				{{info.Area}}
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="houseType" @click="flag=true">
				<span>户型</span>
				{{info.houseType}}
				<i class="el-icon-arrow-right"></i>
			</div>
			<mt-field label="建筑面积" placeholder="填写建筑面积" type="number" v-model="info.acreage"></mt-field>
			<mt-field label="详细地址" placeholder="请填写详细地址" type="text" v-model="info.address"></mt-field>
			<mt-field label="楼层" placeholder="楼层" type="number" v-model="info.floor"></mt-field>
			<mt-field label="朝向" placeholder="朝向" type="text" v-model="info.direction"></mt-field>
			<mt-field label="房龄" placeholder="房龄" type="number" v-model="info.age"></mt-field>
			
			<mt-field label="售价" placeholder="单位 万元" type="text" v-model="info.price"></mt-field>
			<mt-field label="称呼" placeholder="称呼" type="text" rows="4" v-model="info.appellation"></mt-field>
			<mt-field label="手机号" placeholder="联系方式" type="tel" rows="4" v-model="info.tel"></mt-field>
			<mt-field label="首付" placeholder="单位 万元" type="text" rows="4" v-model="info.downPayment"></mt-field>
			<div class="facility">
				装修状态
				<my-radio-button v-model='info.fitment' :data="fitment"></my-radio-button>
				
			</div>
			<mt-field label="房源介绍" placeholder="请描述一下您的房子" type="textarea" rows="4" v-model="info.introduce"></mt-field>
			<button class="submit" @click="submit">提交</button>
			<transition name="up"> 
				<div class="picker1" v-if="flag">
					<div class="plan">
						<mt-picker :slots="slots"  @change="onValuesChange" ></mt-picker>
					</div>
					<div class="button">
						<button @click="flag=false">确认</button>
					</div>
				</div>
			</transition>
			<transition name="fade">
				<div class="panel" v-if="flagcity" >
					
					<p v-for='i in citys' @click="data(i)">{{i.cityname}}</p>
				</div>
			</transition>
			
		</div>
	</div>
	
</template>

<script>
	import { MessageBox } from 'mint-ui'
	export default{
		data(){
			return{
				
				pid:"1",
				
				citys:[],

				
				fitment:[
			       	{txt:"毛坯",value:"毛坯"},
					{txt:"精装修",value:"精装修"},
					{txt:"简装修",value:"简装修"},
					
			       	],
				info:{
					imgArr:[],
					Area:"中国",
					name:"",
					houseType:"",
					bedroomcount:"",
					acreage:"",//面积
					floor:"",  //楼层
					direction:"", //朝向
					price:"",
					appellation:"",//称呼
					tel:"",	
					downPayment:"", //首付
					introduce:"", //评价
					age:"",
					fitment:"" ,//装修状态
					address:''//详细地址
		
				},
				flag:false,
				flagcity:false,
				showToolbar:true,
				 slots: [
						{
						  flex: 1,
						  values: ['1', '2', '3', '4', '5', '6'],
						  className: 'slot1',
						  textAlign: 'center'
						}, {
							
						  divider: true,
						  content: '室',
						  className: 'slot2',
						 
						}, {
						  flex: 1,
						  values: ['1', '2', '3'],
						  className: 'slot3',
						  textAlign: 'center'
						 },
						 {
						 	
						  divider: true,
						  content: '厅',
						  className: 'slot4',
						 
						  
						}
						, {
						  flex: 1,
						  values: ['1', '2', '3'],
						  className: 'slot3',
						  textAlign: 'center'
						},
						{
						
						  divider: true,
						  content: '卫',
						  className: 'slot4',
						 
						}
				]
			}
		},
		 methods: {
		    onValuesChange(picker, values) {
		    	let arr=picker.getValues()
		    	this.info.bedroomcount=arr[0];
		    	this.info.houseType=arr[0]+"室"+arr[1]+"厅"+arr[2]+"卫"
		      /*if (values[0] > values[1]) {
		        picker.setSlotValue(1, values[0]);
		      }*/
    		},
    		async data(i){
				if(i.type=="2"){
					this.info.Area=i.cityname
					this.flagcity=false
				}else{
					this.pid=i.id
					let citydata =await this.$http.get("http://127.0.0.1:3000/city?pid="+this.pid)
					this.citys=citydata.data
				}
			},
			async fade(){
				console.log(1)
				this.flagcity=!this.flagcity
				let citydata =await this.$http.get("http://127.0.0.1:3000/city?pid=1")
				this.citys=citydata.data
				console.log(this.citys)
			},
			async submit(){
				let res=await this.$http.post("/publishHouse",this.info)
				if(res.data.state==1){
					let a= MessageBox({
					  message: '房屋发布成功!',
					  showCancelButton: true,
					  confirmButtonText:"返回首页",
					  cancelButtonText:"继续发布"
					}).then(action => {
						if (action=="confirm") {
							this.$router.push("/")
						} else{
							
							
						}
						 
					})
//					console.log(a)
				}
			}
			
    	}
 		 
	}
</script>

<style lang="less" scoped="scoped">
	.publishHouse{
		.main{
			
			margin-top: 1rem;
			padding: .2rem;
			.facility{
				margin: 0.1rem 0.2rem ;
			}
			.houseType{
				padding:.2rem ;
				border-top: 0.5px solid #ccc;
				display: flex;
				justify-content: space-between;
			}
			.picker1{
				
				width: 100%;
				position: fixed;
				z-index: 10;
				bottom: 0;
				left: 0;
				background: #ADADAD;
				display: flex;
				align-items: center;
				justify-content: space-around;
				.plan{
					
					flex: 2;
					padding: 0.2rem;
					
				}
				.button{
					flex: 1;
				
					padding: .2rem;
					z-index: 100;
					button{
						
						background: red;
						color: #FFF;
						width: 100%;
						text-align: center;
						padding: 0.05rem 0.5rem;
						border: none;
						border-radius: .2rem;
					}
				}
			}
			.submit{
				background: red;
				color: #FFF;
				width: 100%;
				text-align: center;
				padding: 0.2rem 0;
				border: none;
				border-radius: .2rem;
				
				
			}
			
		}
		.up-enter{
			transform: translateY(100%);
		}
		.up-enter-active{
			transition: all 1s; 
		}
		.up-leave-active{
			transition: all 1s; 	
		}
		.up-leave-to{
			transform: translateY(100%);
		}
		.fade-enter{
		opacity: 0;
		}
		.fade-enter-active{
			transition: opacity 0.4s; 
		}
		.fade-leave-active{
			transition: opacity 0.4s; 
			
		}
		.fade-leave-to{
			opacity: 0;
			
		}
		.panel{
		
			height: 3rem;
			/*width: 2rem;*/
			background: #eee;
			border-radius: 0.1rem;
			position: fixed;
			top: 2rem;
			right: 1rem;
			overflow-y: scroll;
			padding:.2rem;
			width: 1.5rem;
			p{
				text-align: center;
				color: #000000;
				cursor: pointer;
				font-size: .24rem;
				
			}
		}
	}
</style>