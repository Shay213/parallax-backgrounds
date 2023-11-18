import Layer from "./Layer.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 10

const layers = [
  new Layer('assets/backgroundLayers/layer-1.png', 0.2, gameSpeed),
  new Layer('assets/backgroundLayers/layer-2.png', 0.4, gameSpeed),
  new Layer('assets/backgroundLayers/layer-3.png', 0.6, gameSpeed),
  new Layer('assets/backgroundLayers/layer-4.png', 0.8, gameSpeed),
  new Layer('assets/backgroundLayers/layer-5.png', 1, gameSpeed),
]

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  layers.forEach(layer => {
    layer.update()
    layer.draw(ctx)
  })

  requestAnimationFrame(animate)
}

animate()