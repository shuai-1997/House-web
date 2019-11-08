<template>
	<div class="login">
		<my-header></my-header>
		<div class="main">
			<div class="path">
				登录
			</div>
			<el-tabs :stretch="true" v-model="activeName" >
			    <el-tab-pane label="普通登录" name="first">
			    	<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="" class="demo-ruleForm">
					  <el-form-item label="" prop="pass">
					    <el-input type="tel" v-model="ruleForm.pass" placeholder="请输入手机号" autocomplete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="" prop="checkPass">
					    <el-input type="password" v-model="ruleForm.checkPass" placeholder="请输入密码" autocomplete="off"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">登录</el-button>
					  </el-form-item>
					</el-form>
			    </el-tab-pane>
			    <el-tab-pane label="验证码快捷登录" name="second">
			    	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="" class="demo-ruleForm">
					  <el-form-item label="" prop="pass">
					  	<div class="yanzheng">
					  		<el-input type="tel" v-model="ruleForm2.pass" placeholder="请输入手机号" autocomplete="off" style="width: 80%;"></el-input>
					    	<count-down></count-down>
					  	</div>
					    
					  </el-form-item>
					  <el-form-item label="" prop="checkPass">
					    <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请输入密码" autocomplete="off"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm2('ruleForm2')" style="width:100%;">验证并登录</el-button>
					  </el-form-item>
					</el-form>
			   
			    	
			    </el-tab-pane>
			 </el-tabs>
			 <div class="login-foot">
			 	<router-link to="/register" tag='p'>立即注册</router-link>
			 	<router-link to="/findpwd" tag='p'>忘记密码</router-link>
			 </div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      
	      //two
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      
	      
      return {
        activeName: 'first',
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        
        
        //two
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
     
    }
  };
</script>

<style scoped="scoped" lang="less">
	.main{
		background: #fff;
		margin-top: 1rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
	}
	.yanzheng{
		display: flex;
		justify-content:  space-between;
		align-items: center;
		padding-right: .1rem;
	}
	.login-foot{
		display: flex;
		justify-content: space-between;
		p:nth-child(1){
			color: #ff8a00;
		} 
		 
		
	}
	.path{
		font-size: 0.24rem;
		font-weight: bold;
		line-height: .8rem;
		text-align: center;
	}
</style>