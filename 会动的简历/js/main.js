var str = `
  /*
  面试官你好，我是范路平
  我将以动画的形式介绍我自己

  只用文字介绍太单调了
  我就用代码来介绍吧

  首先准备一些样式
  */

  *{
      transition: all 1s;
  }
  html{
      background-color: #ddd;
      font-size: 16px;
  }
  #code{
      border: 1px solid red;
      padding: 16px;
      width: 100vw;
  }
  /* 接下来我要加入代码高亮 */
  .token.selector{
    color: #690;
  }       
  .token.property{
    color: #905
  }  
  .token.function{
    color: #dd4a68;
  }
  .token.atrule{
    color: #07a;
  }          
  .token.comment{
    color: slategray;
  } 
  
  /* 加点动画吧 */
  #code{
    
  }
  /* 不玩了，我来介绍一下我自己吧 */
  /* 我需要一张白纸 */
  `
var str2 = `
  #paper{
    width: 50vw;
    height: 100vh;
    background-color: #ddd;
  }
  #code{
    width: 50vw;
    border: none;
  }
  `
var mdStr = `
# 自我介绍

我叫范路平 1997年1月生日 

本科毕业于浙江工业大学，硕士毕业于东南大学，希望应聘前端开发岗位

# 技能介绍

熟悉Javascript, CSS, Vue, React

熟悉Python，有过Django开发经验

# 项目介绍

  1. 自定义轮播组件
  2. 个人简历
  3. 会动的简历
  4. canvas画板

# 联系方式

  - QQ 346793033
  - Email crazyones110@gmail.com
  - 手机 13296728685

# 兴趣爱好

兴趣广泛，喜欢看书，打球，跑步

身体素质好，坚持健身两年半，有较强的抗压能力

985毕业，服从上级管理

热爱沟通，人际交往能力优秀

喜爱和同学同事合作，同时也有较强的钻研能力
`
var str3 = `
  /* 
  接下来借助一个优秀的开源库，marked.js
  将markdown转为html
  */
  /*
  然后给我的markdown加上呼吸特效
  */
  #paper>pre{
    animation: breathe 300ms ease-in-out;
  }
`
writeCode("", str, code, () => {
  addPaper(() => {
    writeCode(str, str2, code, ()=>{
      writeMd("", mdStr, ()=>{
        writeCode(str + str2, str3, code, ()=>{
          highlightMd()
        })
      })
    })
  })
})

function writeCode(prefix, str, selector, fn) {
  let n = 1
  let interval = setInterval(() => {
    selector.innerHTML = Prism.highlight(prefix + str.substring(0, n), Prism.languages.css, 'css')
    styleSheet.innerHTML = prefix + str.substring(0, n)
    selector.scrollTop = selector.scrollHeight
    // $(code).scrollTop(code.scrollHeight)
    // window.scrollBy(0, 10)
    // window.scrollTo(0, code.scrollHeight)
    // code.scrollTop = code.scrollHeight - code.clientHeight
    // code.scrollIntoView(false);
    n++;
    if (n > str.length) {
      clearInterval(interval)
      fn && fn()
    }
  }, 10);
}

function addPaper(fn) {
  var paper = document.createElement("div")
  paper.id = "paper"
  document.body.appendChild(paper)
  var content = document.createElement("pre")
  content.className = "content"
  paper.appendChild(content)
  fn && fn()
}
function writeMd(prefix, str, fn){
  let n = 1
  let paperPre = document.querySelector("#paper>pre")
  console.log(paperPre)
  let interval = setInterval(() => {
    // paperPre.innerHTML = Prism.highlight(prefix + str.substring(0, n), Prism.languages.md, 'md')
    paperPre.innerHTML = prefix + str.substring(0, n)
    // styleSheet.innerHTML = prefix + str.substring(0, n)
    paperPre.scrollTop = paper.scrollHeight
    // $(code).scrollTop(code.scrollHeight)
    // window.scrollBy(0, 10)
    // window.scrollTo(0, code.scrollHeight)
    // code.scrollTop = code.scrollHeight - code.clientHeight
    // code.scrollIntoView(false);
    n++;
    if (n > str.length) {
      clearInterval(interval)
      fn && fn()
    }
  }, 10);
}
function highlightMd(fn){
  let paperPre = document.querySelector("#paper>pre")
  paperPre.innerHTML = marked(paperPre.innerHTML)
  fn && fn()
}

