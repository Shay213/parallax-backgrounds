export default class Layer{
  constructor(imgSrc, speedModifier, gameSpeed){
    this.x = 0
    this.y = 0
    this.width = 2400
    this.height = 700
    this.x2 = this.width
    this.img = new Image()

    this.img.src = imgSrc
    this.gameSpeed = gameSpeed
    this.speedModifier = speedModifier
    this.speed = gameSpeed * this.speedModifier
  }

  update(){
    this.speed = this.gameSpeed * this.speedModifier

    if(this.x <= -this.width) this.x = this.width + this.x2 - this.speed
    else this.x -= this.speed

    if(this.x2 <= -this.width) this.x2 = this.width + this.x - this.speed
    else this.x2 -= this.speed
  }

  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x2, this.y, this.width, this.height)
  }
}