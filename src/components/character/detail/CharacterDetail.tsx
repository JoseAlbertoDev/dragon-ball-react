import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApp } from "../../../context/app/useApp.hook";
import { TitleProps } from "../../models/props.model";

export const CharacterDetail: FC<TitleProps> = ({ title }) => {
  const { characterId } = useParams();
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  return <div>Detail - {characterId}</div>;
};
