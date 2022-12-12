import shadowDogImg from "./assets/player/shadow_dog.png";

type States =
  | "idle"
  | "jump"
  | "fall"
  | "run"
  | "dizzy"
  | "sit"
  | "roll"
  | "bite"
  | "ko"
  | "getHit";

type AnimationState = {
  name: States;
  frames: number;
};

type Frames = {
  loc: {
    x: number;
    y: number;
  }[];
};

export class Player {
  playerImage: HTMLImageElement;
  spriteWidth: number = 575;
  spriteHeight: number = 523;
  staggerFrames: number = 5;
  spriteAnimations: Map<AnimationState["name"], Frames>;
  playerState: States;

  constructor(
    private ctx: CanvasRenderingContext2D | null,
    private gameFrame: number
  ) {
    this.spriteAnimations = new Map();
    this.playerImage = new Image();
    this.playerImage.src = shadowDogImg;
    this.playerState = "idle";
    this.createSpriteAnimations();
  }

  public createSpriteAnimations() {
    const animationStates = [
      { name: "idle", frames: 7 },
      { name: "jump", frames: 7 },
      { name: "fall", frames: 7 },
      { name: "run", frames: 9 },
      { name: "dizzy", frames: 11 },
      { name: "sit", frames: 5 },
      { name: "roll", frames: 7 },
      { name: "bite", frames: 7 },
      { name: "ko", frames: 12 },
      { name: "getHit", frames: 4 },
    ] as AnimationState[];

    animationStates.forEach((state, index) => {
      let frames = {
        loc: [],
      } as Frames;

      for (let j = 0; j < state.frames; j++) {
        frames.loc.push({
          x: j * this.spriteWidth,
          y: index * this.spriteHeight,
        });
      }

      this.spriteAnimations.set(state.name, frames);
    });
  }

  public draw() {
    let position =
      Math.floor(this.gameFrame / this.staggerFrames) %
      (this.spriteAnimations.get(this.playerState)?.loc?.length || 0);

    let frameX = this.spriteWidth * position;
    let frameY =
      this.spriteAnimations.get(this.playerState)?.loc[position].y || 0;

    this.ctx?.drawImage(
      this.playerImage,
      frameX,
      frameY,
      this.spriteWidth,
      this.spriteHeight,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight
    );

    this.gameFrame++;
  }
}
