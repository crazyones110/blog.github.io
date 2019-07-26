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
var str2 = `
  #paper{
    height: 100%;
    background-color: black;
    position: fixed;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 50%;
  }
  .content{
    width: 100%;
    height: 100%;
    background-color: white;
  }
  `
writeCode("", str, () => {
  addPaper(() => {
    writeCode(str, str2)
  })
})

function writeCode(prefix, str, fn) {
  let n = 1
  let interval = setInterval(() => {
    code.innerHTML = Prism.highlight(prefix + str.substring(0, n), Prism.languages.css, 'css')
    styleSheet.innerHTML = prefix + str.substring(0, n)
    code.scrollTop = code.scrollHeight
    n++;
    if (n > str.length) {
      clearInterval(interval)
      fn()
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
  fn()
}

