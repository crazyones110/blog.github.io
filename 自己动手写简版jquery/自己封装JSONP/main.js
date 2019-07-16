window.jQuery = (nodeOrSelector) => {
    let nodes = { length: 0 };
    if (nodeOrSelector instanceof Node) {
        nodes[length++] = nodeOrSelector;
    } else {
        let queryNodes = document.querySelectorAll(nodeOrSelector);
        for (let i = 0; i < queryNodes.length; ++i) {
            nodes[length++] = queryNodes[i];
        }
    }
    nodes.addClass = () => { }
    nodes.text = () => { }
    return nodes;
}
window.$ = window.jQuery;
$.JSONP = ({ url, success, fail }) => {
    let script = document.createElement("script");
    document.body.appendChild(script);
    let stringName = "";
    let count = 3;
    while (count--) {
        stringName += String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
    }
    let functionName = stringName + parseInt((Math.random() * 10000));
    script.src = url + "?callback=" + functionName;
    window[functionName] = success;
    script.onload = (e) => {
        success(data);
        console.log("JSONP发送成功");
        script.remove();
        delete window[functionName];
    }
    script.onerror = (e) => {
        fail();
        console.log("JSONP发送失败");
        script.remove();
        delete window[functionName];
    }
}
button.addEventListener("click",()=>{
    $.JSONP({
        url: "https://fan.com",
        success: (data)=>{
            console.log(data);
        },
        fail: ()=>{
            console.log("JSONP请求失败");
        }
    })
})
// $(button).addClass();