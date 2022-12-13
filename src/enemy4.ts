import Enemy4Image from "./assets/enemy/enemy4.png";
export class Enemy4 {
  x: number;
  y: number;
  newX: number;
  newY: number;
  width: number;
  height: number;
  speed: number;
  image: HTMLImageElement = new Image();
  spriteWidth: number;
  spriteHeight: number;
  staggerFrames: number;
  gameFrame: number;
  flapSpeed: number;
  interval: number;
  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.speed = Math.random() * 4 + 1;
    this.image.src = Enemy4Image;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * ((ctx?.canvas.width || 1) - this.width);
    this.y = Math.random() * ((ctx?.canvas.height || 1) - this.height);
    this.newX = Math.random() * (ctx?.canvas.width || 1);
    this.newY = Math.random() * (ctx?.canvas.height || 1);
    this.staggerFrames = 0;
    this.gameFrame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  public update() {
    if (this.gameFrame % this.interval === 0) {
      this.newX = Math.random() * ((this.ctx?.canvas.width || 1) - this.width);
      this.newY =
        Math.random() * ((this.ctx?.canvas.height || 1) - this.height);
    }

    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 70;
    this.y -= dy / 70;

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
