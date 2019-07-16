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
window.jQuery.ajax = (method, url, payload, successFn, failFn) => {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = (e) => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText);
            } else if (request.status >= 300) {
                failFn.call(undefined, request);
            }
        }
    }
    request.send(payload);
}
button.onclick = (e)=>{
    $.ajax(
        "post",
        "/xxx",
        "a=3&b=5",
        (responseText)=>{},
        (request)=>{}
    );
}