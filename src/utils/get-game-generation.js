export const getGameGen = game =>
  ["ORAS", "XY"].includes(game)
    ? 6
    : ["Sword", "Shield"].includes(game)
    ? 8
    : 7;
