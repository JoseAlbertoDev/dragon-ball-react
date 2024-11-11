import { FC, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useApp } from '../../context/app/useApp.hook';
import { useCharacter } from '../../context/character/useCharacter.hook';
import { findAllCharacters } from '../../domain/character/character.repository';

export const Layout: FC = () => {
  const { title } = useApp();
  const { characterList, setCharacterList } = useCharacter();

  const loadData = useCallback(async () => {
    if (!characterList.length) {
      const tempCharacters = await findAllCharacters();
      setCharacterList(tempCharacters);
    }
  }, [characterList, setCharacterList]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="h-screen w-full surface-100">
      <div className="p-4">
        <h2 className="m-0">Dragon Ball - {title}</h2>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
