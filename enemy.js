class enemy {
    constructor(game) {
        this.game = game;
        // dX, dY, size, deg
        this.location = [];
    }
    draw() {
        this.randomEnemy();
        this.update();
        for (let i = 0; i < this.location.length; i++) {
            this.game.ctx.drawImage(imageEnemy, 0, 0, 140, 140, this.location[i][0], this.location[i][1], this.location[i][2], this.location[i][2]);
        }
    }
    randomEnemy() {
        // max number of enemy: 25
        if (this.location.length > 25) return;
        // 40 <= size <= 150
        let size = 40 + Math.random() * 110;
        let dX = -2 * size + Math.random() * (g_width + 4 * size);
        let dY = -2 * size + Math.random() * (g_height + 4 * size);
        let deg = Math.atan2(dY - g_height / 2, dX - g_width / 2);
        if (-size < dY && dY < g_height + size && -size < dX && dX < g_width + size) {
            this.randomEnemy();
        } else {
            this.location.push([dX, dY, size, deg]);
        }
    }
    update() {
        for (let i = 0; i < this.location.length; i++) {
            this.location[i][0] += -1 / 10 * Math.cos(this.location[i][3]);
            this.location[i][1] += -1 / 10 * Math.sin(this.location[i][3]);
        }
        this.die();
    }
    die() {
        for (let i = 0; i < this.location.length; i++) {
            for (let j = 0; j < this.game.bullet.location.length; j++) {
                let eX = this.location[i][0] + this.location[i][2] / 2;
                let eY = this.location[i][1] + this.location[i][2] / 2;
                let bX = this.game.bullet.location[j][0] + imageBullet.width / 2;
                let bY = this.game.bullet.location[j][1] + imageBullet.height / 2;
                let dist = Math.sqrt((bX - eX) * (bX - eX) + (bY - eY) * (bY - eY));
                if (dist < this.location[i][2] / 2) {
                    this.game.g_score++;
                    this.game.explosion.location.push([eX, eY, this.location[i][2], 0]);
                    this.location.splice(i, 1);
                    this.game.bullet.location.splice(j, 1);
                }
            }
        }
    }
}