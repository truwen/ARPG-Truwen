export function createEnemy(spawnX, spawnY) {
  return {
    x: spawnX,
    y: spawnY,
    radius: 16,
    speed: 145,
    color: '#ff5b70',
    health: 100,
    maxHealth: 100,
    contactDamage: 12,
    contactCooldown: 0.75,
    contactTimer: 0,
  };
}

export function updateEnemy(enemy, player, deltaSeconds) {
  if (enemy.health <= 0) {
    return;
  }

  const dx = player.x - enemy.x;
  const dy = player.y - enemy.y;
  const distance = Math.hypot(dx, dy) || 1;

  enemy.x += (dx / distance) * enemy.speed * deltaSeconds;
  enemy.y += (dy / distance) * enemy.speed * deltaSeconds;

  if (enemy.contactTimer > 0) {
    enemy.contactTimer = Math.max(0, enemy.contactTimer - deltaSeconds);
  }
}
