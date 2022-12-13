import Enemy2Image from "./assets/enemy/enemy2.png";
export class Enemy2 {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  image: HTMLImageElement = new Image();
  spriteWidth: number;
  spriteHeight: number;
  staggerFrames: number;
  gameFrame: number;
  flapSpeed: number;
  angle: number;
  angleSpeed: number;
  curve: number;
  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.speed = Math.random() * 4 + 1;
    this.image.src = Enemy2Image;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * ((ctx?.canvas.width || 1) - this.width);
    this.y = Math.random() * ((ctx?.canvas.height || 1) - this.height);
    this.staggerFrames = 0;
    this.gameFrame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }

  public update() {
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) {
      this.x = this.ctx?.canvas.width || 1;
    }

    if (this.gameFrame % this.flapSpeed === 0) {
      this.staggerFrames > 4 ? (this.staggerFrames = 0) : this.staggerFrames++;
    }
  }

  public draw() {
    this.ctx?.drawImage(
      this.image,
      this.staggerFrames * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.gameFrame++;
  }
}
