const g_width = window.innerWidth;
const g_height = window.innerHeight;
var rungame = true;
const score = document.getElementById("score");
const g_start = document.getElementById("start");
const FPS = 300;

// image
const imageSun = new Image();
imageSun.src = "./images/sun.png";
const imageShip = new Image();
imageShip.src = "./images/ship.png";
const imageBullet = new Image();
imageBullet.src = "./images/bullet.png";
const imageEnemy = new Image();
imageEnemy.src = "./images/enemy.png";
const imageExplosion = new Image();
imageExplosion.src = "./images/explosion.png";