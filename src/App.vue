<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
     <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
// import Vue from 'vue'
export default {
  name: "app",
  components: {
    HelloWorld
  },
  // mounted() {

  //   axios.post(
  //     "/authentication/registerMsg",
  //     { mobile: 138001383000 },
  //     {
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   ).then(res=>{
  //     console.log(res)
  //   })
  //   .catch(err=>{
  //     console.log(err.response,'aaa')
  //   })
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
