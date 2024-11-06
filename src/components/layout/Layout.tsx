import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useApp } from "../../context/app/useApp.hook";

export const Layout: FC = () => {
  const { title } = useApp();
  return (
    <div className="h-screen w-full">
      <h2>Dragon Ball - {title}</h2>
      <Outlet />
    </div>
  );
};
