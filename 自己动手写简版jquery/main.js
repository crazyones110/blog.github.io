function getSiblings(node) {
    let children = node.parentNode.children;
    let siblings = { length: 0 };
    for (let i = 0; i < children.length; ++i) {
        if (children[i] !== node) {
            siblings[siblings.length++] = children[i];
        }
    }
    return siblings;
}
//[a:true,b:true,c:false]
//{a:true.b:false,c:true}
function addClass(node, classes) {
    let temp = { true: "add", false: "remove" };
    for (key in classes) {
        node.classList[temp[classes[key]]](key);
    }
    // classes.forEach(value => node.classList.add(value));
}
// console.log(getSiblings(x));
// addClass(x, {a:true,b:false,c:true});
var fan = {}
fan.getSiblings = function (node) {
    let children = node.parentNode.children;
    let siblings = { length: 0 };
    for (let i = 0; i < children.length; ++i) {
        if (children[i] !== node) {
            siblings[siblings.length++] = children[i];
        }
    }
    return siblings;
}
fan.addClass = function (node, classes) {
    let temp = { true: "add", false: "remove" };
    for (key in classes) {
        node.classList[temp[classes[key]]](key);
    }
}
// console.log(fan.getSiblings(x));
// fan.addClass(x,{a:true,b:false,c:true});
Node.prototype.getSiblings = function () {
    let children = this.parentNode.children;
    let siblings = { length: 0 };
    for (let i = 0; i < children.length; ++i) {
        if (children[i] !== this) {
            siblings[siblings.length++] = children[i];
        }
    }
    return siblings;
}
Node.prototype.addClass = function (classes) {
    let temp = { true: "add", false: "remove" };
    for (key in classes) {
        this.classList[temp[classes[key]]](key);
    }
}
// console.log(x.getSiblings.call(x));
// x.addClass.call(x,{a:true,b:false,c:true});
// function jQuery(node) {
//     return {
//         getSiblings: function () {
//             let children = node.parentNode.children;
//             let siblings = { length: 0 };
//             for (let i = 0; i < children.length; ++i) {
//                 if (children[i] !== node) {
//                     siblings[siblings.length++] = children[i];
//                 }
//             }
//             return siblings;
//         },
//         addClass:function(classes){
//             let temp = { true: "add", false: "remove" };
//             for (key in classes) {
//             node.classList[temp[classes[key]]](key);
//             }
//         }
//     }
// }
// window.$ = jQuery;
// var node = $(x);
// console.log(node.getSiblings.call(undefined));
// node.addClass.call(undefined,{a:true,b:false,c:true});

//{a:true, b:false, c:true}
function jQuery(nodeOrSelector) {
    let nodes = {length:0}
    if(typeof nodeOrSelector === "string"){
        let dnodes = document.querySelectorAll(nodeOrSelector);
        for(let i = 0; i<dnodes.length; ++i){
            nodes[nodes.length++] = dnodes[i]
        }
    }
    else if(nodeOrSelector instanceof Node){
        nodes[nodes.length++] = Node;
    }
    nodes.addClass = function(classes){
        let temp = {true: "add", false: "remove"};
        for(let i = 0;i<nodes.length;++i){
            for(key in classes){
                nodes[i].classList[temp[classes[key]]](key);
            }
        }
    }
    nodes.text = function(newText){
        let arr = [];
        for(let i = 0;i<nodes.length;++i){
            if(newText === undefined)
                arr.push(nodes[i].textContent);
            else
                nodes[i].textContent = newText;                                     
        }
        return arr;
    }
    return nodes;
}
window.$ = jQuery;
var $nodes = $("ul>li");
console.log($nodes);
$nodes.addClass({a:true, b:false, c:true});
console.log($nodes.text("222"));
console.log($nodes.text());
