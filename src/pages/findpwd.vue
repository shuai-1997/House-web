<template>
	<div class="login">
		<my-header></my-header>
		<div class="main">
			<div class="path">
				找回密码
			</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="" class="demo-ruleForm">
			  <el-form-item label="" prop="pass">
			  	<div class="yanzheng">
			    	<el-input type="text" placeholder="请输入手机号" v-model="ruleForm.pass" autocomplete="off" style="width: 80%;"></el-input>
					<count-down></count-down>
			    </div>
			  </el-form-item>
			  <el-form-item label="" prop="checkPass">
			    <el-input type="text" placeholder="请输入手机验证码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="" prop="age">
			    <el-input type="password" placeholder="输入新密码" v-model.number="ruleForm.age"></el-input>
			  </el-form-item>
			   <el-form-item label="" prop="age">
			    <el-input type="password" placeholder="确认新密码" v-model.number="ruleForm.age"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">提交</el-button>
			  </el-form-item>
			</el-form>
			
			   
	    	
			
			 <div class="login-foot">
			 	<router-link to="/login" tag='p'>前往登录</router-link>
			 	<router-link to="/register" tag='p'>立即注册</router-link>
			 </div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
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
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
	.main{
		background: #fff;
		margin-top: 1.2rem;
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