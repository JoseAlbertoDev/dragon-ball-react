import { useContext } from "react";
import { AppContext, Context } from "./AppContext";

type AppHook = () => Context;

export const useApp: AppHook = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp context used outside provider.");
  }

  return context;
};
