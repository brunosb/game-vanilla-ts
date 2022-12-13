export class Layer {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  image: HTMLImageElement = new Image();
  constructor(
    private ctx: CanvasRenderingContext2D | null,
    private imageSrc: string,
    private speedModifier: number,
    private gameSpeed: number
  ) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.speed = this.gameSpeed * this.speedModifier;
    this.image.src = this.imageSrc;
  }

  public update() {
    this.speed = this.gameSpeed * this.speedModifier;
    if (this.x <= -this.width) this.x = 0;
    this.x -= this.speed;
  }

  public draw() {
    this.ctx?.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.ctx?.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}
