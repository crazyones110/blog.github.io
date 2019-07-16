window.jQuery = function (nodeOrSelector) {
    let nodes = { length: 0 };
    if (nodeOrSelector instanceof Node) {
        nodes[0] = nodeOrSelector;
    } else {
        let queryNodes = document.querySelectorAll(nodeOrSelector);
        for (let i = 0; i < queryNodes.length; ++i) {
            nodes[length++] = queryNodes[i];
        }
    }
    nodes.addClass = () => { };
    nodes.text = () => { };
    return nodes;
}
window.$ = window.jQuery;
window.jQuery.ajax = function({url,method, body, success, fail}){
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.send(body);
        request.addEventListener("load", function(){
            if(request.readyState === 4){
                if(request.status >=200 && request.status < 300){
                    resolve.call(undefined, request.responseText);
                }else if(request.status >= 300){
                    reject.call(undefined, request);
                }
            }
        })
    });
}
let obj = {a:1,b:2};
button.addEventListener("click",()=>{
    jQuery.ajax({
        url:"/xxx",
        method:"post",
        body:JSON.stringify(obj),
    }).then((responseText)=>{
        console.log(responseText);
    },(request)=>{
        console.log(request);
    });
});
