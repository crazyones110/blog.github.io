<template>
    <div>
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="loading">
        </div>
        <div class="body">
            <ul>
                <li>
                    <ul>
                        <li>全部</li>
                        <li>精华</li>
                        <li>分享</li>
                        <li>问答</li>
                        <li>招聘</li>
                    </ul>
                </li>
                <li v-for="post in posts">
                    <img :src="post.author.avatar_url" alt="avatar">
                    <span>{{post.reply_count}}</span>
                    <span>/</span>
                    <span>{{post.visit_count}}</span>
                    <span :class="{put_top: post.top === true,
                    put_good: post.good === true,
                    common_tab: post.top !== true && post.good !== true}">
                    {{post | tabFormatter}}
                    </span>
                    <router-link :to='{name: "postContent",params: {userid:post.id}}'>
                        <span>{{post.title}}</span>
                    </router-link>
                    <span>{{post.last_reply_at | dateFormatter}}</span>
                </li>
            </ul>
        </div>
        <pagination :style="{width: '80%', margin: '0 auto',height: '30px'}" 
        @pageChange="handlePageChange"></pagination>
    </div>
</template>

<script>
import pagination from "./Pagination"
export default {
    name: 'Postlist',
    data(){
        return{
            loading: false,
            posts: [],
            isActive: false,
            isNotActive: false,
            page: 1
        }
    },
    components:{
        pagination
    },
    methods:{
        getData(){
            this.$http.get("https://cnodejs.org/api/v1/topics",{
                params: {
                    page: this.page,
                    limit: 20
                }
            }).then(res=>{
                console.log(res)
                this.loading = false
                this.posts = res.data.data
                console.log(this.posts)
            }).catch(err=>{
                //处理返回失败后的问题
                console.log(err)
            })
        },
        handlePageChange(value){
            this.page = value
            this.getData()
        }
    },
    beforeMount(){
        this.loading = true
        this.getData()
    }
}
</script>

<style scoped>
    .put_good,.put_top{
        background-color: rgb(128,189,1);
        color: white;
    }
    .common_tab{
        background-color: rgb(229,229,229);
        color: rgb(153,172,200);
    }
    .body>ul>li:first-child>ul{
        display: flex;
        align-items: center;
        background-color: rgb(246,246,246);
        height: 40px;
    }
</style>