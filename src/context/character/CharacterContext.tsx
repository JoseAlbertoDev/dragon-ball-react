import { createContext } from 'react';
import { CharacterDTO, DetailedCharacterDTO } from '../../domain/character/character.model';

export interface Context {
  characterList: CharacterDTO[];
  setCharacterList: (characters: CharacterDTO[]) => void;
  detailedCharacterList: DetailedCharacterDTO[];
  setDetailedCharacterList: (characters: DetailedCharacterDTO[]) => void;
  character?: DetailedCharacterDTO;
  setCharacter: (characterId: number) => void;
}

export const CharacterContext = createContext<Context | undefined>(undefined);
