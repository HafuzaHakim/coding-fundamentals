function getBonus(myTile, opponentTile) {
  if (myTile === opponentTile) {
    return false;
  }

  const distance = Math.abs(myTile - opponentTile);

  if (distance > 6) {
    return false;
  } else {
    return true;
  }
}
