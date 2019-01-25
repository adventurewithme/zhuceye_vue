<template>
  <div class="code_body">
    <div class="body">
      <p class="f14_f">中盛普惠旗下高端服务平台</p>
      <img src="../assets/hui.png" alt class="img_hui">
      <div class="code_w">
        <p class="f18_d">专属二维码</p>
        <p class="f24_d">诚信·合规·创新·高效</p>
        <p class="f14_3">- 专注高效 坚守合规 用心服务 -</p>
        <div class="code_img" @click="code_long()" id="qrcode"></div>
        <!-- <div class="code_img" @longtap="code_long()" id="qrcode"></div> -->
        <p class="f18_d">长按扫码/保存图片</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
var QRCode = require('qrcode')
export default {
  name: "register",

  mounted() {
    var img_url=window.location.href.split('=')[1];
    console.log(unescape(img_url),'url');
    QRCode.toDataURL(unescape(img_url))
  .then(url => {
   var qrbox = document.querySelector("#qrcode");
   const img = new Image();
   img.src=url;
   qrbox.appendChild(img);
  })
  .catch(err => {
    console.error(err)
  })
  },
  methods: {
    code_long(){
      var that=this;
      // that.$router.push('/loseefficacy')

    }
  }
};
</script>
<style>
.img_hui {
  width: 2.8rem;
  height: .84rem;
  margin-top: .4rem;
}
.f14_f {
  font-size:.28rem;
  color: #fff;
}
.code_body .body {
  /* padding: .42rem .6rem; */
  padding: .42rem 0;
  box-sizing: border-box;
}
.code_body .f14_f {
  letter-spacing: .24rem;
  line-height: .4rem;
}
.code_body .code_w {
  width: 84%;
  height:8.34rem;
  background: url(../assets/bgs.png) no-repeat;
  background-size: 100% 100%;
  margin-top: .6rem;
  margin-left: 8%;
  padding: .64rem 0 0 0;
  box-sizing: border-box;
  color: #D2AF6B;
}
.code_w .f18_d{
  font-size: .36rem;
  line-height: .5rem;
}
.code_w .f24_d{
  font-size: .48rem;
  margin-top: .48rem;
  line-height: .66rem;
}
.code_w .f14_3{
  font-size: .28rem;
  color: #353442;
  line-height: .4rem;
  margin-top: .24rem;
}
.code_w .code_img{
  width: 3rem;
  height: 3rem;
  margin:1.12rem auto .5rem;
  background: #353442;
}
.code_w .code_img img{
  width: 100%;
}
</style>
