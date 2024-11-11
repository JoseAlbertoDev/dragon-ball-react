import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [title, setTitle] = useState<string>('');

  return <AppContext.Provider value={{ title, setTitle }}>{children}</AppContext.Provider>;
};
