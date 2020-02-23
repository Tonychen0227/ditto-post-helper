import { getGameGen } from "./get-game-generation";

export const createPostTitle = ({ dittoNature, deposit }) => {
  const genderLetter = deposit.gender === "Male" ? "M" : "F";
  const ditto = dittoNature.includes("HP")
    ? dittoNature.split(" ")[1]
    : dittoNature;

  return `[${ditto}] ${deposit.species}, ${genderLetter}, ${deposit.level}`;
};

export const createPostText = ({ dittoNature, player, deposit }) => {
  const gen = getGameGen(player.game);
  const dittoType = dittoNature.replace("HP ", "");

  return `[${gen}]

 - Ditto Requested: ${dittoType}
 
 ---
 
 - Pokémon Deposited: ${deposit.species}
 - Nickname: ${deposit.nickname}
 - Pokeball: ${deposit.ball}
 - Gender: ${deposit.gender}
 - Level: ${deposit.level}
 
 ---
 
 - IGN: ${player.inGameName}
 - GTS Message: ${player.gtsMessage}
 - Game Version: ${player.game}
 - Game Language: ${player.language}
 - Trainer Description: ${player.trainerDescription}`;
};
