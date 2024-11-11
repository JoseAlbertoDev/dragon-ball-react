import { useContext } from "react";
import { CharacterContext, Context } from "./CharacterContext";

type CharacterHook = () => Context;

export const useCharacter: CharacterHook = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error("useCharacter context used outside provider.");
  }

  return context;
};
