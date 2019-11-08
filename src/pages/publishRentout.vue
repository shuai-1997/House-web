<template>
	<div class="publishRentout">
		<my-header-title>发布出租信息</my-header-title>
		<div class="main">
			<div class="img">
				<my-upload action="http://127.0.0.1:3000/upload" v-model="info.imgArr"></my-upload>
			</div>
			<div class="type">
				<button :class="info.type=='整租'&&classActive" @click="info.type='整租'">整租</button>
				<button :class="info.type=='合租'&&classActive" @click="info.type='合租'">合租</button>
				<button :class="info.type=='商铺'&&classActive" @click="info.type='商铺'">商铺</button>
				<button :class="info.type=='单间'&&classActive" @click="info.type='单间'">单间</button>
			</div>
			<div class="houseType" @click="fade()">
				<span>城市</span>
				{{info.Area}}
				<i class="el-icon-arrow-right"></i>
			</div>
			<mt-field label="小区名称" v-model="info.name" type="text"></mt-field>
			<div class="houseType" @click="flag=true">
				<span>户型</span>
				{{info.houseType}}
				<i class="el-icon-arrow-right"></i>
			</div>
			<mt-field label="建筑面积" placeholder="填写建筑面积" type="number" v-model="info.houseArea"></mt-field>
			<mt-field label="楼层" placeholder="楼层" type="number" v-model="info.floor"></mt-field>
			<mt-field label="朝向" placeholder="朝向" type="text" v-model="info.direction"></mt-field>
			<mt-field label="租金" placeholder="租金" type="text" v-model="info.price"></mt-field>
			<div class="facility">
				配套设施
				<my-checkbox-button v-model='info.facility' :data="facility"></my-checkbox-button>
				
			</div>
			<mt-field label="称呼" placeholder="称呼" type="text" rows="4" v-model="info.appellation"></mt-field>
			<mt-field label="手机号" placeholder="联系方式" type="tel" rows="4" v-model="info.tel"></mt-field>
			<mt-field label="详细地址" placeholder="请填写详细地址" type="text" v-model="info.address"></mt-field>
			<mt-field label="房源介绍" placeholder="请描述一下您的房子" type="textarea" rows="4" v-model="info.introduce"></mt-field>
			
		</div>
		<transition name="fade">
				<div class="panel" v-if="flagcity" >
					
					<p v-for='i in citys' @click="data(i)">{{i.cityname}}</p>
				</div>
		</transition>
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
		<div class="submit">
			<button @click="submit()">发布</button>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui'
export default {
	
    data() {
      return {
      	pid:"1",
		citys:[],
      	flag:false,
		flagcity:false,
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
				  values: ['0','1', '2', '3'],
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
				  values: ['0','1', '2', '3'],
				  className: 'slot3',
				  textAlign: 'center'
				},
				{
				
				  divider: true,
				  content: '卫',
				  className: 'slot4',
				 
				}
		],
      	classActive:"active",
        dialogImageUrl: '',
        dialogVisible: false,
        imgArr:[],
       facility:[
       	{txt:"床",value:"床"},
		{txt:"宽带",value:"宽带"},
		{txt:"电视",value:"电视"},
		{txt:"洗衣机",value:"洗衣机"},
		{txt:"冰箱",value:"冰箱"},
		{txt:"空调",value:"空调"},
		{txt:"暖气",value:"暖气"},
		{txt:"热水器",value:"热水器"},
       	],

        info:{
        	imgArr:[],
        	type:"",
        	name:"",
        	housetype:"",
        	floor:"",
        	houseArea:"",
        	direction:"",
        	price:"",
        	appellation:"",
        	tel:"",
        	bedroomcount:Number,//卧室数量
        	introduce:"",
			address:'',//详细地址
        	Area:"中国",
        	facility:[] //配套设置
        }
      };
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
			console.log(this.info)
			let res=await this.$http.post("/let",this.info)
			if(res.data.state==1){
				MessageBox({
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
			}
		}
    }
  }
</script>

<style lang="less" scoped="scoped">
	.publishRentout{
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
		.active{
			background: #FF8A00;
			color: #fff;
		}
		.main{
			margin-top:1.2rem ;
			.img{
				/*width: 1rem;
				height: 1rem;*/
			}
			.type{
				margin: .2rem;
				display: flex;
				justify-content: space-around;
				button{
					border: none;
					padding: 0.1rem 0.2rem;
					border-radius: .1rem;
					
				}
			}
			.facility{
				margin: .2rem;
				border-top: 0.5px solid #eee;
				padding: 0.2rem 0;
			}
			
		}
		.submit{
			margin: .2rem;
			
				button{
					width: 100%;
					background: red;
					border: none;
					border-radius: 0.2rem;
					color: #fff;
					padding: 0.2rem 0;
				}
			}
		.houseType{
				padding:.2rem ;
				border-top: 0.5px solid #ccc;
				display: flex;
				justify-content: space-between;
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