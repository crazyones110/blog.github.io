<template>
    <div id="Pagination">
        <div class="buttonGroup">
            <button @click="changePage">首页</button>
            <button @click="changePage">上一页</button>
            <button class="btnClass" v-if="btnGroups[0] >= 2">{{btnDot}}
            </button><button v-for="page in btnGroups" @click="changePage(page)" 
            :class="[{currentBtn: currentPage === page}, btnClass]">
                {{page}}
            </button><button class="btnClass">{{btnDot}}</button>
            <button @click="changePage">下一页</button>
            <button @click="changePage">尾页</button>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
export default {
    name: 'Pagination',
    data(){
        return {
            btnGroups: [1, 2, 3, 4, 5],
            btnDot: "....",
            currentPage: 1,
            btnClass: "btnClass"
        }
    },
    methods:{
        changePage(page){
            //那么此时page是DOM的event，或者是btnGroups里的......
            if(typeof page !== "number" && typeof page !== "string"){
                const btn = page.currentTarget
                switch(btn.innerText){
                    case "首页":
                        this.btnGroups = [1, 2, 3, 4, 5]
                        this.changePage(1)
                        break
                    case "上一页":
                        if(this.currentPage !== 1){
                            this.changePage(this.currentPage - 1)
                        }
                        break
                    case "下一页":
                        this.changePage(this.currentPage + 1)
                        break
                }
                return
            }

            this.currentPage = page
            if(page === this.btnGroups[4]){
                this.btnGroups.splice(5, 0, this.btnGroups[4] + 1)
                this.btnGroups.shift()
            }else if(page === this.btnGroups[0] && this.btnGroups[0] !== 1){
                this.btnGroups.splice(4, 1)
                this.btnGroups.unshift(this.btnGroups[0] - 1)
            }
            this.$emit("pageChange", this.currentPage)
        }
    }
    
}
</script>
<style scoped>
    .btnClass{
        background-color: white;
        outline: none;
        border: 1px solid black;
        color: black;
        cursor: pointer;
    }
    .btnClass:hover{
        background-color: #eee;
    }
    .btnClass.currentBtn{
        background-color: black;
        color: white;
    }
</style>
