import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from './AppContext';
import { CharacterDTO } from '../../domain/character/character.model';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title, setTitle] = useState<string>('');
  const [character, setCharacters] = useState<CharacterDTO[]>([]);

  return (
    <AppContext.Provider
      value={{ title, setTitle, characterList: character, setCharacterList: setCharacters }}>
      {children}
    </AppContext.Provider>
  );
};
