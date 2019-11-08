<template>
	<div class="upload">
		<div id="add">
			<img class="icon" src="../assets/imgicon.jpg"/>
			<input type="file" name="" id="fs" multiple="multiple" @change="change($event)"  value="" />
		</div>
		<ul id="box">
				<!--<li>
					<div class="cover">
						
					</div>
					<img src="../../build/logo.png"/>
				</li>-->
		</ul>
		
	</div>
</template>

<script>
	export default {
		props:["action"],
		data(){
			return{
				imgArr:[]
			}
		},
		
		methods:{
			change(e) {
				let info=e.target.files
				let peg=/^image\//
				for (let i=0 ;i<info.length;i++) {
					if (peg.test(info[i].type)==false){
						alert("非图片文件，无法上传")
						continue
					}
					let readfs=new FileReader()
					readfs.readAsDataURL(info[i])
					readfs.onload=()=>{
						console.log(this.action)
						let img = new Image
						img.src=readfs.result
						let li=document.createElement("li")
						li.style.border="cornflowerblue solid 2px"
						li.style.width="1rem"
						li.style.height="1rem"
						li.style.margin="0.2rem"
						let coverDiv=document.createElement("div")
						coverDiv.setAttribute("class","cover")
						li.appendChild(coverDiv)
						li.appendChild(img)
						box.appendChild(li)
						let xhr=new XMLHttpRequest
						xhr.open("POST",this.action,true)
						xhr.upload.onprogress=  (e)=> {
							var b=(e.loaded/e.total)*100 //进度百分比
							coverDiv.style.height=(100-b)+"%"
							
						}
						xhr.onload=()=>{
							if (xhr.status==200) {
								this.imgArr.push(this.$URL+xhr.responseText)
							}
						}
						let data =new FormData
						data.append("file",info[i])
						xhr.send(data)
					}
				}
				this.$emit("input",this.imgArr)
			}
		}
		
	}
</script>

<style scoped="scoped">
ul{
display: flex;
justify-content: center;
list-style: none;
flex-wrap: wrap;

}
#box li{
	position: relative;
	margin: 0.2rem;
	height: 1rem;
	width: 1rem;
	
}

.cover{
	position: absolute;
	height: 1rem;
	width: 1rem;
	background: #111;
	opacity: 0.5;
	bottom: 0;
	left: 0;
}

.icon{
	display: inline-block;
	width: 100%;
	height: auto;
	text-align: center;
	opacity: .5;
}
#add{
	border: 1px #adadad dashed;
	margin: 0.2rem;
	padding: 0.2rem;
	position: relative;
	width: 1rem;
	height: 1rem;
	margin: 0 auto;
	
	/*height: 2rem;*/
}
input{
	position: absolute;
	display: inline-block;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
}

#box{
	
}
.upload{
	width: 100%;
	/*display: flex;*/
	/*justify-content: center;*/
	/*flex-wrap: wrap;*/
}
</style>