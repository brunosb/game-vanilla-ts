import { Background } from "./background";
import { Player } from "./player";
import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;

const CANVAS_WIDTH: number = (canvas.width = 800);
const CANVAS_HEIGHT: number = (canvas.height = 700);
let gameSpeed: number = 10;
let gameFrame: number = 0;

window.addEventListener("load", () => {
  const background = new Background(ctx, gameSpeed, gameFrame);
  const player = new Player(ctx, gameFrame);

  function animate() {
    ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    background.draw();
    player.draw();
    gameFrame++;
    requestAnimationFrame(animate);
  }

  animate();
});
