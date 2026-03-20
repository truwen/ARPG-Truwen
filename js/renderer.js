function drawHealthBar(ctx, x, y, width, height, current, max, color) {
  ctx.fillStyle = '#00000066';
  ctx.fillRect(x, y, width, height);

  const pct = max > 0 ? current / max : 0;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width * pct, height);

  ctx.strokeStyle = '#111927';
  ctx.strokeRect(x, y, width, height);
}

export function renderGame(ctx, state) {
  const { canvas } = ctx;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#222a3b';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const player = state.player;
  const enemy = state.enemy;

  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();

  if (enemy.health > 0) {
    ctx.fillStyle = enemy.color;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    ctx.fill();

    drawHealthBar(ctx, enemy.x - 24, enemy.y - enemy.radius - 14, 48, 7, enemy.health, enemy.maxHealth, '#ff6b6b');
  }

  drawHealthBar(ctx, 14, 14, 190, 14, player.health, player.maxHealth, '#5ad17a');

  ctx.fillStyle = '#dce4f5';
  ctx.font = '16px Arial';
  ctx.fillText(`Player HP: ${player.health}/${player.maxHealth}`, 14, 52);

  if (enemy.health <= 0) {
    ctx.fillText('Enemy defeated!', 14, 76);
  }

  if (player.health <= 0) {
    ctx.fillStyle = '#ff9ca8';
    ctx.font = 'bold 28px Arial';
    ctx.fillText('You were defeated', canvas.width / 2 - 110, canvas.height / 2);
  }
}
