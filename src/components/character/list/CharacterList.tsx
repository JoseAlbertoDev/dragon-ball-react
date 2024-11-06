import { FC, useEffect } from 'react';
import { useApp } from '../../../context/app/useApp.hook';
import { TitleProps } from '../../models/props.model';
import { findAllCharacters } from '../../../domain/character/character.repository';
import { useNavigate } from 'react-router-dom';

export const CharacterList: FC<TitleProps> = ({ title }) => {
  const { setTitle, setCharacterList, characterList } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(title);
    const characterRequest = async () => {
      if (!characterList || !characterList.length) {
        const charactersListTmp = await findAllCharacters();
        setCharacterList(charactersListTmp);
      }
    };

    characterRequest().catch((error) => console.log(error));
  }, [title, setTitle, setCharacterList, characterList]);

  const handleCharacterClick = (characterId: number) => {
    console.log(characterId);

    navigate(`/${characterId}`);
  };

  return (
    <div>
      Listado{' '}
      {characterList.map((character) => (
        <p
          className="cursor-pointer"
          onClick={() => handleCharacterClick(character.id)}
          key={character.id}>
          {character.id} - {character.name}
        </p>
      ))}
    </div>
  );
};
