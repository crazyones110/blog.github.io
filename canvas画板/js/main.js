var using = false//是否按下
var eraserEnabled = false
var lastPoint = { x: undefined, y: undefined }
var canvas = document.getElementById("canvas");
var actions = document.getElementById("actions")
var context = canvas.getContext("2d");
autoSetSize()
listenToUser()

canvas.ontouchstart = function (a) {
    console.log(a)//a.touches[0].clientX
}

function autoSetSize() {
    setSize()
    window.onresize = function () {
        setSize()
    }
}
function setSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)//起点
    context.lineWidth = 5
    context.lineTo(x2, y2)//终点
    context.stroke()
    context.closePath()
}
function drawCircle(x, y, radius) {
    context.beginPath()
    // context.fillStyle = "red"
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
    context.closePath()
}


function listenToUser() {
    eraser.onclick = function () {
        eraserEnabled = true
        actions.className = "actions eraserEnabled"
    }
    brush.onclick = function () {
        eraserEnabled = false
        actions.className = "actions"
    }
    if ("ontouchstart" in document.documentElement) {
        canvas.ontouchstart = function (a) {
            using = true
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            lastPoint.x = x
            lastPoint.y = y
        }
        canvas.ontouchmove = function (a) {
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            if (using) {
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 20, 20)
                }
                else {
                    var newPoint = { x: x, y: y }
                    // drawCircle(x, y, 1)
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                    lastPoint = newPoint
                }

            }
        }
        canvas.ontouchend = function () {
            using = false
        }
    } else {
        canvas.onmousedown = function (a) {
            using = true
            var x = a.clientX
            var y = a.clientY
            lastPoint.x = x
            lastPoint.y = y
            // drawCircle(x, y, 1)
        }
        canvas.onmousemove = function (a) {
            var x = a.clientX
            var y = a.clientY
            if (using) {
                if (eraserEnabled) {
                    context.clearRect(x - 5, y - 5, 20, 20)
                }
                else {
                    var newPoint = { x: x, y: y }
                    // drawCircle(x, y, 1)
                    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                    lastPoint = newPoint
                }

            }
        }
        canvas.onmouseup = function () {
            using = false
        }
    }
}
