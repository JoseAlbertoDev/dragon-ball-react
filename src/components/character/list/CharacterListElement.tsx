import { FC } from 'react';
import { CharacterDTO } from '../../../domain/character/character.model';

interface Props {
  character: CharacterDTO;
  onClick: () => void;
}

export const CharacterListElement: FC<Props> = ({ character, onClick }) => {
  return (
    <div
      className="flex flex-column gap-4 w-15rem p-4 fadein border-2 border-round-md bg-orange-50 border-orange-300 shadow-2 hover:shadow-4 cursor-pointer"
      onClick={onClick}>
      <header className="font-semibold text-blue-700">{character.name}</header>
      <div className="h-15rem flex justify-content-center">
        <img className="h-full" src={character.image}></img>
      </div>
      <footer className="h-7rem overflow-y-scroll">
        <span className="text-blue-700 text-xs">{character.description}</span>
      </footer>
    </div>
  );
};
