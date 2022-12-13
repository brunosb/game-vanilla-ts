import Enemy1Image from "./assets/enemy/enemy1.png";
export class Enemy1 {
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
  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.speed = Math.random() * 4 - 2;
    this.image.src = Enemy1Image;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * ((ctx?.canvas.width || 1) - this.width);
    this.y = Math.random() * ((ctx?.canvas.height || 1) - this.height);
    this.staggerFrames = 0;
    this.gameFrame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  public update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

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
