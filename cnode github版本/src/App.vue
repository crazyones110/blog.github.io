<template>
  <div id="app">
    <Header></Header>
    <router-view name="main"></router-view>
    <router-view name="Slidebar"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header"
import Postlist from "./components/Postlist"
import Article from "./components/Article"
import Userinfo from "./components/Userinfo"

export default {
  name: 'App',
  components:{
    Header,Postlist,Article,Userinfo
  }
}
</script>

<style>

</style>
