import Layer from "./Layer.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 15

const layer1 = new Layer('assets/backgroundLayers/layer-1.png', 1, gameSpeed)
const layer2 = new Layer('assets/backgroundLayers/layer-2.png', 1, gameSpeed)
const layer3 = new Layer('assets/backgroundLayers/layer-3.png', 1, gameSpeed)
const layer4 = new Layer('assets/backgroundLayers/layer-4.png', 1, gameSpeed)
const layer5 = new Layer('assets/backgroundLayers/layer-5.png', 1, gameSpeed)

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  layer4.draw(ctx)
  layer4.update()

  requestAnimationFrame(animate)
}

animate()