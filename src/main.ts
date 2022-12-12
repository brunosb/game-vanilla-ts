import { Player } from "./player";
import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

// const player = new Player(ctx);

let gameSpeed = 5;

function animate() {
  ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // player.draw();
  requestAnimationFrame(animate);
}

animate();
