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
y:4,
direction:0,
frame:0
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

const playerSprite = new Image()
playerSprite.src = "assets/red.png"

function drawPlayer(){

ctx.drawImage(
playerSprite,
player.frame*16,
player.direction*16,
16,
16,
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

if(e.key=="ArrowUp"){
player.y--
player.direction = 3
}

if(e.key=="ArrowDown"){
player.y++
player.direction = 0
}

if(e.key=="ArrowLeft"){
player.x--
player.direction = 1
}

if(e.key=="ArrowRight"){
player.x++
player.direction = 2
}

player.frame = (player.frame + 1) % 2

draw()

})
