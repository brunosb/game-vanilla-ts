import Enemy3Image from "./assets/enemy/enemy3.png";
export class Enemy3 {
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
  // curve: number;
  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.speed = Math.random() * 4 + 1;
    this.image.src = Enemy3Image;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.x = Math.random() * ((ctx?.canvas.width || 1) - this.width);
    this.y = Math.random() * ((ctx?.canvas.height || 1) - this.height);
    this.staggerFrames = 0;
    this.gameFrame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = Math.random() * 100;
    this.angleSpeed = Math.random() * 0.5 + 0.5;
    // this.curve = Math.random() * 200 + 50;
  }

  public update() {
    this.x =
      ((this.ctx?.canvas.width || 0) / 2) *
        Math.cos((this.angle * Math.PI) / 200) +
      ((this.ctx?.canvas.width || 0) / 2 - this.width / 2);
    this.y =
      ((this.ctx?.canvas.height || 0) / 2) *
        Math.sin((this.angle * Math.PI) / 300) +
      ((this.ctx?.canvas.height || 0) / 2 - this.height / 2);

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
