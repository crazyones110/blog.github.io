import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article"
import Postlist from "../components/Postlist"
import Header from "../components/Header"
import Userinfo from "../components/Userinfo"
import Slidebar from "../components/Slidebar"
import { userInfo } from 'os'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: "postContent",
      path: "/topic/:userid",
      components: {
        main: Article,
        Slidebar: Slidebar
      }
    },
    {
      path: "/",
      components: {
        main: Postlist
      }
    },
    {
      name: "userinfo",
      path: "/user/:loginName",
      components: {
        main: Userinfo
      }
    }
  ]
})
