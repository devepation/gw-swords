class Player { 
  constructor(id, name) {
    this.id = id
    this.name = name
    this.health = 100
    this.pos = {x: 0, y: 0}
    this.kills = 0
    this.speed = 300
    this.mouseDown = false
    this.mousePos = {x:0,y:0,viewport:{width:1920,height:1080}}
    this.hitbox = {swordPos:{x:undefined,y:undefined},hitPos:{x:undefined,y:undefined}}
    this.size = 75
    this.radius = this.calcRadius()
    this.lastMove = Date.now()
  }

  move(controller) {
  //  console.log(this.id+" => ("+this.pos.x+", "+this.pos.y+")")
  if(Date.now() - this.lastMove > 5000) this.lastMove = (Date.now() - 1000) 
    var since =( Date.now() - this.lastMove ) / 1000
    
    var go = since * this.speed

    if(this.pos.x <= -2500) controller.left = false
    if(this.pos.x >= 2500) controller.right = false
    if(this.pos.y <= -2500) controller.up = false
    if(this.pos.y >= 2500) controller.down = false

    if(controller.up) this.pos.y -= go
    if(controller.down) this.pos.y += go
    if(controller.right) this.pos.x += go
    if(controller.left) this.pos.x -= go

    this.lastMove = Date.now()

    return this
  }
  calcRadius() {
    return this.size / 2
  }
}

module.exports = Player