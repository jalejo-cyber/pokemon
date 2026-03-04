const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

canvas.width = 256
canvas.height = 256

const tileSize = 16

const map = [
[1,1,1,1,1,1,1,1,1,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1]
]

const colors = {
0:"#7cfc00",
1:"#228B22"
}

let player = {
x:4,
y:4
}

function drawMap(){

for(let y=0;y<map.length;y++){
for(let x=0;x<map[y].length;x++){

ctx.fillStyle = colors[map[y][x]]

ctx.fillRect(
x*tileSize,
y*tileSize,
tileSize,
tileSize
)

}
}

}

function drawPlayer(){

ctx.fillStyle="red"

ctx.fillRect(
player.x*tileSize,
player.y*tileSize,
tileSize,
tileSize
)

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

drawMap()
drawPlayer()

}

draw()

document.addEventListener("keydown",function(e){

if(e.key=="ArrowUp") player.y--
if(e.key=="ArrowDown") player.y++
if(e.key=="ArrowLeft") player.x--
if(e.key=="ArrowRight") player.x++

draw()

})
