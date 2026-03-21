function isCollidingCircle(a, b, extraRange = 0) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const distance = Math.hypot(dx, dy);
  return distance <= a.radius + b.radius + extraRange;
}

export function resolvePlayerAttack(player, enemy) {
  if (enemy.health <= 0) {
    return false;
  }

  const inRange = isCollidingCircle(player, enemy, player.attackRange);
  if (!inRange) {
    return false;
  }

  enemy.health = Math.max(0, enemy.health - player.attackDamage);
  return true;
}

export function resolveEnemyContactDamage(enemy, player) {
  if (enemy.health <= 0 || enemy.contactTimer > 0) {
    return false;
  }

  if (!isCollidingCircle(enemy, player)) {
    return false;
  }

  player.health = Math.max(0, player.health - enemy.contactDamage);
  enemy.contactTimer = enemy.contactCooldown;
  return true;
}
