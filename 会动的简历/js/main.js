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
      background: rgb(222, 222 ,222);
      font-size: 16px;
  }
  #code{
      border: 1px solid red;
      padding: 16px;
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
var n = 1;
var interval = setInterval(() => {

  // Returns a highlighted HTML string

  code.innerHTML = str.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
  styleSheet.innerHTML = str.substring(0, n)
  n++;
  if (n > str.length) {
    clearInterval(interval)
    addPaper()
    displayPaper(str)
  }
}, 10)
function addPaper() {
  var paper = document.createElement("div")
  paper.id = "paper"
  document.body.appendChild(paper)
}
let n2 = 1
function displayPaper(prevStr) {
  var str2 = `
  #paper{
    width: 200px;
    height: 200px;
    background-color: red;
  }
  `
  var interval2 = setInterval(() => {
    code.innerHTML = prevStr
    code.innerHTML = code.innerHTML + str2.substring(0, n2)
    styleSheet.innerHTML = code.innerHTML
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
    n2++
    if(n2 > str2.length){
      clearInterval(interval2)
    }
  }, 10);
}
