<template>
    <div id="article">
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="loading">
        </div>
        <div v-else>
            <div>
                <div class="topic_header">
                    <h3>{{post.title}}</h3>
                </div>
                <ul class="topic_attr">
                    <li>发布于{{post.create_at | dateFormatter}}</li>
                    <li>作者{{post.author.loginname}}</li>
                    <li>{{post.visit_count}}次浏览</li>
                    <li>来自{{post | tabFormatter}}</li>
                </ul>
            </div>
            <div class="content">
                <div v-html="post.content" class="topic_content" :style="{
                    maxWidth:'80%',overflow:'hidden'}"></div>
            </div>
            <div class="reply">
                <div class="reply_count">{{post.reply_count}}回复</div>
                <ul>
                    <li v-for="(reply, index) in post.replies">
                        <router-link :to="{name:'userinfo', params:{loginName: reply.author.loginname}}">
                            <img :src="reply.author.avatar_url" :style="imgStyle">
                        </router-link>
                        <span>{{reply.author.loginname}}</span>
                        <span>{{index + 1}}楼</span>
                        <span> {{reply.create_at | dateFormatter}}</span>
                        <div v-html="reply.content"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header"
import Postlist from "./Postlist"
export default {
    name: 'Article',
    data(){
        return{
            loading: false,
            post: {},
            imgStyle: {
                maxWidth: "32px",
                maxHeight: "32px"
            }
        }
    },
    methods:{
        getArticleData(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.userid}`)
            .then(res=>{
                this.post = res.data.data
                this.loading = false
            })
            .catch(err=>{
                console.log(err)
            })
            
        }
    },
    beforeMount(){
        this.loading = true
        this.getArticleData()
    },
    watch:{
        /* 
        实际上就是$route: function(newVal, oldVal){}
        还可以$route: {func(new,old), deep:true,immediate: true}
        */
        $route(to, from){
            this.getArticleData()
        }
    }
}
</script>
<style scoped>
    /* @import url('../assets/markdown-github.css'); */
    ul.topic_attr{
        display: flex;
        justify-content: flex-start;
        list-style: none;
    }
    .topic_attr>li::before{
        /* content: counter() */
    }
    .content{
        width: 80%;
        margin: 0 auto;
    }
    .reply_count{
        background-color: #ddd;
    }
    img{
        max-width: 800px;
    }
</style>
