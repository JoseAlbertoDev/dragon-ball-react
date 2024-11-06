import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ROUTES } from "./routes";
import { Layout } from "../components/layout/Layout";

const routes: RouteObject[] = [
  {
    path: ROUTES.LIST,
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { CharacterList } = await import(
            "../components/character/list/CharacterList"
          );
          return {
            element: <CharacterList title="List" />,
          };
        },
      },
      {
        path: ROUTES.DETAIL,
        async lazy() {
          const { CharacterDetail } = await import(
            "../components/character/detail/CharacterDetail"
          );
          return {
            element: <CharacterDetail title="Detail" />,
          };
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
