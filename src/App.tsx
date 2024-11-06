import { FC } from 'react';
import './App.css';
import '/node_modules/primeflex/primeflex.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { AppProvider } from './context/app/AppProvider';
/**
 * TODO: usando la api de dragon ball https://web.dragonball-api.com/
 * 1. Crear un componente que muestre un personaje de dragon ball
 *  a. Mostrar imagen, nombre y transformaciones
 * 2. Crear un componente que muestre una lista de personajes de dragon ball
 *  a. Estilizar el listado
 * 3. Crear un componente que muestre un personaje de dragon ball y que permita agregarlo a un listado de personajes favoritos
 *  a. Desde listado o desde detalle
 *
 *
 * R1: debe tener al menos un provider con toda la data de los personajes incluyendo el detalle de estos
 * R2: debe tener al menos un consumer que permita acceder a la data de los personajes en una ruta separada
 * EXTRA: montar un buscador de personajes
 * EXTRA2: cachear la data de los personajes
 */

const App: FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
