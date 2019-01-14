<template>
  <div class="hello">
    <!-- body -->
    <div class="body">
      <img src="../assets/logox.png" alt class="logo">
      <img src="../assets/c.png" alt class="huo_img">
      <div>
        <img src="../assets/bg1.png" alt class="color_img">
      </div>
      <div class="form">
        <input type="text" name id placeholder="请输入您的姓名" v-model="name">
        <input type="text" placeholder="请输入您的员工编号" v-model="number">
        <input type="button" value="生成" class="submit" @click="submit(name,number)">
        <p class="f12_f">注意：</p>
        <p class="f12_f">1、如果生成二维码失败，请联系您的主管开通。</p>
        <p class="f12_f">2、二维码超过有效期，请重新生成。</p>
      </div>
      <img src="../assets/logo1.png" alt class="logo1">
    </div>
    <!-- body end -->
    <!-- window -->
    <div class="window" v-show="window">
      <div class="window_info">
        <div class="info" v-show="code_none_400">
          <p class="f16_3">二维码生成失败</p>
          <p class="f16_3">请联系推广人员</p>
        </div>
        <p class="f16_3" v-show="code_400">{{code_400_message}}</p>
        <p class="f16_d" @click="close()">确定</p>
      </div>
    </div>
    <div class="f16_3 success_info" v-show='code_none'>{{success}}</div>
    <!-- window end -->
  </div>
</template>

<script>
const pings = "http://marketing.zspuhui.com";
console.log(process.env.NODE_ENV);
import axios from "axios";
import Vue from "vue";
import { setTimeout, setInterval, clearInterval } from "timers";
import "./js/rem.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      window: false,
      name: "",
      number: "",
      code_url: "",
      code_none:false,
      success:'',
      code_none_400:false,
      code_400:false,
      code_400_message:''
    };
  },
  methods: {
    // 生成
    submit(name, number) {
      var params = new FormData();
      const that = this;
      params.append("userNo", "1001");
      if(number==''){
        that.code_none=true;
        that.success='请输入员工编号';
        setTimeout(function(){
          that.code_none=false;
        },1000)
      }else{
      axios
        .get(
          process.env.NODE_ENV === "production"
            ? pings +
                "/a/qrcode/qrcodeMarket/getMarketQrcode"
            : "/marketing_war_exploded/a/qrcode/qrcodeMarket/getMarketQrcode",
          { params: { userNo: number } }
        )
        .then(res => {
          var statusCode = res.data.data.stausCode;
          var list = res.data.data;
          if (statusCode == 200) {
            that.code_url = res.data.data.data.content;
            that.$router.push("/code?url=" + escape(res.data.data.data.content));
          }else if(res.data.data.errorCode==10){
            that.code_400=true;
            that.code_400_message=res.data.data.errorMessage;
           that.window=true;
          }else if(res.data.data.errorCode==20){
            that.code_none_400=true;
            that.window=true;
          }
          console.log(res.data.data)
        })
        .catch(res => {
          console.log(res,'aaa')
          that.code_none_400=true;
          that.window=true;
        });

      }
    },
    close() {
      var that = this;
      that.code_400=false;
      that.code_none_400=false;
      that.code_400_message='';
      that.window=false;
      // that.$router.push("/code");
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.body {
  position: absolute;
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  top: 0;
  left: 0;
  background: url(../assets/bg.png) no-repeat;
  background-size: 100% 100%;
}
.logo {
  width: 2.12rem;
  height: 0.72rem;
  margin: 0.32rem;
  float: left;
}
.huo_img {
  width: 5.52rem;
  height: 0.64rem;
  margin-top: 30px;
}
.color_img {
  width: 0.52rem;
  height: 0.1rem;
  margin: 0.24rem 0 0 1rem;
  float: left;
}
.form {
  width: 100%;
  padding: 1.22rem 1rem 0;
  box-sizing: border-box;
  text-align: left;
}
input {
  background: #fff;
  width: 100%;
  height: 0.8rem;
  border: none;
  border-radius: 0.06rem;
  margin-top: 0.3rem;
  padding: 0 0.24rem;
  box-sizing: border-box;
  font-size: 0.28rem;
}
.submit {
  height: 0.88rem;
  color: #fff;
  font-size: 0.32rem;
  background: #cfad6a;
  margin-top: 0.8rem;
  margin-bottom: 0.2rem;
}
.f12_f {
  font-size: 0.24rem;
  color: #fff;
  line-height: 0.34rem;
}
.f16_3 {
  font-size: 0.32rem;
  color: #353442;
}
.f16_d {
  font-size: 0.32rem;
  color: #d2af6b;
}
.logo1 {
  position: absolute;
  width: 1.4rem;
  height: 1.94rem;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
}
.window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 1rem;
  box-sizing: border-box;
}
.window_info {
  width: 100%;
  background: #fff;
  border-radius: 0.24rem;
  margin-top: 4rem;
  padding-top: 0.4rem;
}
.window_info .f16_3 {
  line-height: 0.44rem;
}
.window_info .f16_d {
  margin-top: 0.4rem;
  border-top: 1px solid #f2f2f2;
  line-height: 0.92rem;
}
.success_info{
  position: fixed;
  z-index: 20;
  padding: .2rem .3rem;
  color: #fff;
  background: rgba(0,0,0,.8);
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: .2rem;
}
@media screen and (min-height: 800px) {
  .body {
    background: url(../assets/bj2x.png) no-repeat;
    background-size: 100% 100%;
  }
}
</style>
