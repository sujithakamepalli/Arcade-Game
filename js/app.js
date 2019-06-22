// the following function shows the  enemy property
var Enemy = function(x, y, spd) {
  this.x = x;
  this.y = y;
  this.spd = spd;
  this.sprite = 'images/enemy-bug.png';
};
// declearing the enemy update function
Enemy.prototype.update = function(dt) {
  this.x = this.x + (this.spd * dt);

  if (this.x > 500) {
    this.x = 0;
    spd = 40 * Math.floor(Math.random() * 100);

  }
// checkCollisions conditions for player
  if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 75 && player.y + 65 > this.y) {
    swal("Alas ! you lost");
    player.x = 300;
    player.y = 300;
  }
};
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// the following function shows the player property
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
}
// declearing the player update function
var player = new Player(200, 390);
Player.prototype.update = function(dt) {}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
var allEnemies = [];
var enemypos = [80, 150, 220];
var spd = [100, 150, 80];
for (var i = 0; i < enemypos.length; i++) {
  var enemy = new Enemy(0, enemypos[i], spd[i]);
  allEnemies.push(enemy);
}
// the following function shows the range for the arrow condition for moment of the player
Player.prototype.handleInput = function(change) {
  if (change == 'left' && this.x > 30) {
    this.x = this.x - 100;
  }
  else if (change == 'right' && this.x < 400) {
    this.x = this.x + 100;
  }
  else if (change == 'up' && this.y > 0) {
    this.y = this.y - 100;
  }
  else if (change == 'down' && this.y < 400) {
    this.y = this.y + 100;
  }
  if (this.y < 60) {
    swal({
        html: true,
        title: "you won the game",
        type: 'success',
        confirmButtonText: 'Do you want to play again!!'
      },
      function() {
        location.reload()
      }
    );
  }
}
// object creation for player
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
