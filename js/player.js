export function createPlayer(spawnX, spawnY) {
  return {
    x: spawnX,
    y: spawnY,
    radius: 18,
    speed: 260,
    color: '#4fb3ff',
    health: 100,
    maxHealth: 100,
    attackRange: 50,
    attackDamage: 25,
    attackCooldown: 0.35,
    attackTimer: 0,
  };
}

export function updatePlayer(player, move, deltaSeconds, bounds) {
  player.x += move.x * player.speed * deltaSeconds;
  player.y += move.y * player.speed * deltaSeconds;

  player.x = Math.max(player.radius, Math.min(bounds.width - player.radius, player.x));
  player.y = Math.max(player.radius, Math.min(bounds.height - player.radius, player.y));

  if (player.attackTimer > 0) {
    player.attackTimer = Math.max(0, player.attackTimer - deltaSeconds);
  }
}

export function canAttack(player) {
  return player.attackTimer <= 0;
}

export function triggerAttack(player) {
  player.attackTimer = player.attackCooldown;
}
