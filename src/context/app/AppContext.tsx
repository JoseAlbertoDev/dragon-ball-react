import { createContext } from 'react';
import { CharacterDTO } from '../../domain/character/character.model';

export interface Context {
  title: string;
  setTitle: (title: string) => void;
  characterList: CharacterDTO[];
  setCharacterList: (characterList: CharacterDTO[]) => void;
}

export const AppContext = createContext<Context | undefined>(undefined);
