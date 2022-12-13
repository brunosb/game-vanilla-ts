import { Background } from "./background";
import { Enemy1 } from "./enemy1";
import { Enemy2 } from "./enemy2";
import { Enemy3 } from "./enemy3";
import { Enemy4 } from "./enemy4";
import { Player } from "./player";
import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;

const CANVAS_WIDTH: number = (canvas.width = 800);
const CANVAS_HEIGHT: number = (canvas.height = 700);
let gameSpeed: number = 5;
let gameFrame: number = 0;

const numberOfEnemies: number = 50;
const enemiesArray1 = [] as Enemy1[];
const enemiesArray2 = [] as Enemy2[];
const enemiesArray3 = [] as Enemy3[];
const enemiesArray4 = [] as Enemy4[];

window.addEventListener("load", () => {
  const background = new Background(ctx, gameSpeed);
  const player = new Player(ctx);

  for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray1.push(new Enemy1(ctx));
    enemiesArray2.push(new Enemy2(ctx));
    enemiesArray3.push(new Enemy3(ctx));
    enemiesArray4.push(new Enemy4(ctx));
  }

  function animate() {
    ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    background.draw();
    //player.draw();
    enemiesArray4.forEach((enemy) => {
      enemy.update();
      enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate);
  }

  animate();
});
