var n = 1;
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
        
        /* 加点动画吧 */
        #code{
          animation:swoop 1s ease-in-out;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
        }
        @keyframes swoop{
          0%{
            transform: scale(0.5);
          }
          70%{
            transform: scale(1.2);
          }
          100%{
            transform: scale(1);
          }
        }

        /* 不玩了，我来介绍一下我自己吧 */
        `
var result = Prism.highlight(str, Prism.languages.css, 'css')
// console.log(result)
console.log(typeof result);
var interval = setInterval(() => {

  // Returns a highlighted HTML string

  code.innerHTML = str.substring(0, n)
  // code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
  styleSheet.innerHTML = str.substring(0, n)
  n++;
  if (n > str.length) {
    clearInterval(interval)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
  }
}, 10)
