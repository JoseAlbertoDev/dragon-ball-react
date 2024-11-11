import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../context/app/useApp.hook';
import { TitleProps } from '../../models/props.model';
import { useCharacter } from '../../../context/character/useCharacter.hook';
import { ROUTES } from '../../../router/routes';

export const CharacterDetail: FC<TitleProps> = ({ title }) => {
  const { setTitle } = useApp();
  const { character } = useCharacter();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(ROUTES.LIST, { replace: true });
  };

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  if (character) {
    return (
      <div className="flex flex-column gap-4">
        <div className="flex flex-1 justify-content-end">
          <button onClick={handleBackClick}>Go back</button>
        </div>
        <div className="flex gap-4">
          <div className="w-20rem h-15rem flex justify-content-center">
            <img src={character.image} className="h-full"></img>
          </div>
          <div className="flex flex-1 border-1 border-round-md p-4 border-orange-300 shadow-2">
            <div className="flex flex-column">
              <div className="flex gap-4">
                <span className="font-semibold text-blue-700">Name:</span> {character.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Character detail not found</div>;
};
