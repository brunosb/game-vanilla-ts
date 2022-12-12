import backgroundLayer1Img from "./assets/background/layer-1.png";
import backgroundLayer2Img from "./assets/background/layer-2.png";
import backgroundLayer3Img from "./assets/background/layer-3.png";
import backgroundLayer4Img from "./assets/background/layer-4.png";
import backgroundLayer5Img from "./assets/background/layer-5.png";
import { Layer } from "./Layer";

export class Background {
  layers: Layer[];
  constructor(
    private ctx: CanvasRenderingContext2D | null,
    private gameSpeed: number,
    private gameFrame: number
  ) {
    const layer1 = new Layer(
      this.ctx,
      backgroundLayer1Img,
      0.2,
      this.gameSpeed,
      this.gameFrame
    );
    const layer2 = new Layer(
      this.ctx,
      backgroundLayer2Img,
      0.4,
      this.gameSpeed,
      this.gameFrame
    );
    const layer3 = new Layer(
      this.ctx,
      backgroundLayer3Img,
      0.6,
      this.gameSpeed,
      this.gameFrame
    );
    const layer4 = new Layer(
      this.ctx,
      backgroundLayer4Img,
      0.8,
      this.gameSpeed,
      this.gameFrame
    );
    const layer5 = new Layer(
      this.ctx,
      backgroundLayer5Img,
      1,
      this.gameSpeed,
      this.gameFrame
    );

    this.layers = [layer1, layer2, layer3, layer4, layer5];
  }

  public draw() {
    this.layers.forEach((layer) => {
      layer.update();
      layer.draw();
    });
  }
}
