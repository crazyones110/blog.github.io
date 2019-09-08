    <template>
        <div class="header">
            <img src="../assets/cnodejs_light.svg">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">新手入门</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">关于</a></li>
                <li><a href="#">注册</a></li>
                <li><a href="#">登陆</a></li>
            </ul>
        </div>
    </template>

    <script>
    export default {
        name: 'Header'
    }
    </script>

    <style scoped>
        .header{
            background-color: rgb(68, 68, 68);
            height: 50px;
            display: flex;
            align-items: center;
        }
        ul{
            margin-left: auto;
            margin-right: 260px;
            list-style: none;
            display: flex;
            align-items: center;
        }
        ul>li{
            padding-left: 30px;
        }
        a{
            text-decoration: none;
            color: rgb(204, 204, 204);
        }
        a:hover{
            color: white;
        }
        img{
            max-height: 50px;
            max-width: 150px;
            margin-left: 250px;
        }
    </style>