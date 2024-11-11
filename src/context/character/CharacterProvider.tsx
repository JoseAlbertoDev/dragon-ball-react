import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { CharacterContext } from './CharacterContext';
import { CharacterDTO, DetailedCharacterDTO } from '../../domain/character/character.model';
import { findCharactersByIds } from '../../domain/character/character.repository';

export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [characterList, _setCharacterList] = useState<CharacterDTO[]>([]);
  const [detailedCharacterList, setDetailedCharacterList] = useState<DetailedCharacterDTO[]>([]);
  const [character, setCharacter] = useState<DetailedCharacterDTO | undefined>(undefined);

  const setCharacterList = useCallback(
    async (tempCharacterList: CharacterDTO[]) => {
      _setCharacterList(() => tempCharacterList);
      const charactersIds = tempCharacterList.map((character) => character.id);
      findCharactersByIds(charactersIds).then((tempDetailedList) => {
        setDetailedCharacterList(tempDetailedList);
      });
    },
    [setDetailedCharacterList, _setCharacterList]
  );

  return (
    <CharacterContext.Provider
      value={{
        characterList,
        setCharacterList,
        detailedCharacterList,
        setDetailedCharacterList,
        character,
        setCharacter,
      }}>
      {children}
    </CharacterContext.Provider>
  );
};
