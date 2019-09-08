<template>
    <div id="app">
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="loading">
        </div>
        <div v-else id="content">
            <div class="header">
                <div class="bread"></div>
                <div class="header-body">
                    <img :src="userinfo.avatar_url" alt="avatar">
                    <span>{{userinfo.loginname}}</span>
                    <p>{{userinfo.score}}积分</p>
                    <p>{{userinfo.githubUsername}}</p>
                    <p>注册时间{{userinfo.create_at | dateFormatter}}</p>
                </div>
            </div>
            <div class="recent_topics">
                <p>最近创建的话题</p>
                <ul>
                    <li v-for="topic in userinfo.recent_topics">
                        <router-link :to="{
                            name: 'postContent',
                            params:{
                                userid: topic.id
                            }
                        }">
                            {{topic.title}}
                        </router-link>
                        <span>{{topic.last_reply_at | dateFormatter}}</span>
                    </li>
                </ul>
            </div>
            <div class="recent_replies">
                <p>最近参与的话题</p>
                <ul>
                    <li v-for="topic in userinfo.recent_replies">
                        <router-link :to="{
                            name: 'postContent',
                            params:{
                                userid: topic.id
                            }
                        }">
                            {{topic.title}}
                        </router-link>
                        <span>{{topic.last_reply_at | dateFormatter}}</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Userinfo',
    data(){
        return{
            loading: false,
            userinfo: {}
        }
    },
    methods:{
        getUserinfo(){
            this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginName}`)
            .then(res=>{
                this.loading = false
                this.userinfo = res.data.data
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    beforeMount(){
        this.loading = true
        this.getUserinfo()
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
