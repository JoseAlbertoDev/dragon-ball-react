import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useApp } from '../../../context/app/useApp.hook';
import { TitleProps } from '../../models/props.model';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../../../context/character/useCharacter.hook';
import { CharacterListElement } from './CharacterListElement';
import { CharacterDTO } from '../../../domain/character/character.model';

export const CharacterList: FC<TitleProps> = ({ title }) => {
  const { setTitle } = useApp();
  const { characterList, setCharacter } = useCharacter();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  const handleCharacterClick = (characterId: number) => {
    setCharacter(characterId);
    navigate(`/${characterId}`);
  };

  const handleFilterChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event?.currentTarget?.value;
    setFilter(newValue);
  };

  const filteredCharacters: CharacterDTO[] =
    filter != ''
      ? characterList.filter((character) =>
          character.name.toLowerCase().includes(filter.toLowerCase())
        )
      : characterList;

  return (
    <div className="flex flex-column">
      <div className="flex flex-1 justify-content-end p-4 gap-2">
        <label>Buscador</label>
        <input type="text" value={filter} onChange={handleFilterChanged}></input>
      </div>
      {!filteredCharacters.length ? (
        <div className="flex flex-1 justify-content-center">
          <h5>No characters with that name.</h5>;
        </div>
      ) : (
        <div className="flex flex-1 justify-content-evenly">
          {filteredCharacters.map((character) => (
            <CharacterListElement
              key={character.id}
              onClick={() => handleCharacterClick(character.id)}
              character={character}></CharacterListElement>
          ))}
        </div>
      )}
    </div>
  );
};
