let canvas = document.getElementById("canvasId")
let ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let labda = {
    x: canvas.width/2,
    y: 100,
    vx: 2,
    vy: 0,
    rad: 50
}

setInterval(function(){
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    if(labda.y > canvas.height){
        
    }
}, 1);