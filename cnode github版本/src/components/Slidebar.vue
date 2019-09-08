<template>
    <div id="app">
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="loading">
        </div>
        <div v-else id="content">
            <div class="user_info">
                <img :src="userinfo.avatar_url" alt="">
                <p>积分{{userinfo.score}}</p>
            </div>
            <div class="recent_topics">
                <h3>最近发起话题</h3>
                <ul>
                    <li v-for="topic in topicLimitBy5">
                        <router-link :to="{
                            name:'postContent',
                            params:{
                                userid: topic.id
                            }
                        }">
                            {{topic.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="recent_topics">
                <h3>最近回复话题</h3>
                <ul>
                    <li v-for="topic in replyLimitBy5">
                        <router-link :to="{
                            name:'postContent',
                            params:{
                                userid: topic.id
                            }
                        }">
                            {{topic.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Slidebar',
    data(){
        return{
            loading: false,
            userinfo: {}
        }
    },
    methods:{
        getUserinfo(){
            console.log(`userid: ${this.$route.params.userid}`)
            console.log(`loginName: ${this.$route.params.loginName}`)
            //下面这一句是不行的，因为来到这个组件的路由是/topic/:userid
            //this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginName}`)
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.userid}`)
            .then(res=>{
                console.log(res.data.data.author.loginname)
                this.$http.get(`https://cnodejs.org/api/v1/user/${res.data.data.author.loginname}`)
                .then(res=>{
                    this.loading = false
                    this.userinfo = res.data.data
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    beforeMount(){
        this.loading = true
        this.getUserinfo()
    },
    computed:{
        topicLimitBy5(){
            if(this.userinfo.recent_topics){
                return this.userinfo.recent_topics.slice(0,5)
            }
        },
        replyLimitBy5(){
            if(this.userinfo.recent_replies){
                return this.userinfo.recent_replies.slice(0,5)
            }
        },
    }
}
</script>
<style scoped>
#content>div{
    margin-bottom: 15px;
}
#content>div:nth-child(2n){
    border: 2px solid red;
}
#content>div:nth-child(2n+1){
    border: 2px solid blue;
}

</style>
