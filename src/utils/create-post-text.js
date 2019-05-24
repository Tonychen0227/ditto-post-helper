export const createPostTitle = ({ dittoNature, deposit }) => {
  const genderLetter = deposit.gender === "Male" ? "M" : "F";
  const ditto = dittoNature.includes("HP")
    ? dittoNature.split(" ")[1]
    : dittoNature;

  return `[${ditto}] ${deposit.species}, ${genderLetter}, ${deposit.level}`;
};

export const createPostText = ({ dittoNature, player, deposit }) => {
  const gen = ["ORAS", "XY"].includes(player.game) ? 6 : 7;
  const dittoType = dittoNature.replace("HP ", "");

  return `[${gen}]

  * Ditto Requested: ${dittoType}
 
  ---
 
 * Pokémon Deposited: ${deposit.species}
 * Nickname: ${deposit.nickname}
 * Pokeball: ${deposit.ball}
 * Gender: ${deposit.gender}
 * Level: ${deposit.level}
 
 ---
 
 * IGN: ${player.inGameName}
 * GTS Message: ${player.gtsMessage}
 * Game Version: ${player.game}
 * Game Language: ${player.language}
 * Trainer Description: ${player.trainerDescription}
 * 3DS Region: ${player.consoleRegion}`;
};
