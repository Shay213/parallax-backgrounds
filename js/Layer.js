export default class Layer{
  constructor(imgSrc, speedModifier, initialGameSpeed){
    this.x = 0
    this.y = 0
    this.width = 2400
    this.height = 700
    this.x2 = this.width
    this.img = new Image()

    this.img.src = imgSrc
    this.speedModifier = speedModifier
    this.speed = initialGameSpeed * this.speedModifier
    this.distanceMoved = 0
  }

  update(gameSpeed){
    this.speed = gameSpeed * this.speedModifier
    
    this.distanceMoved += this.speed
    this.x = -this.distanceMoved % this.width
  }

  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
}