import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import RegisterForm from './pages/Auth/RegisterForm.tsx'
import LoginForm from './pages/Auth/LoginForm.tsx'
import About from './pages/About.tsx'
import BoxesMain from './pages/Boxes/BoxesMain.tsx'
import CreateBoxe from './pages/CreateNewBoxe.tsx'
import { TrainerContextProvider } from './Routes/DresseurRoute.tsx'
import BoxDetails from './pages/Boxes/BoxDetails.tsx'
import CreatePokemon from './pages/Pokemon/CreatePokemon.tsx'
import ProtectedRoute from './Routes/ProtectedRoute.tsx'
import PokemonDetails from './pages/Pokemon/PokemonDetails.tsx'
import UserDetailsPage from "./pages/Auth/UserDetails.tsx";

const router = createBrowserRouter([
  {
      path:"/",
      element:<Layout />,
      children:[
          {
              path:"/login",
              element:<LoginForm />
          },
          {
              path:"/register",
              element:<RegisterForm />
          },
          {
              path:"/about",
              element:<About />
          },
          {
            path: "/",
            element: <ProtectedRoute />,
            children: [
              {
                path: "/my-boxes",
                element:<BoxesMain />
              },
              {
                path:"/new-box",
                element: <CreateBoxe />
              },
              {
                path:"boxes/:boxeId",
                element: <BoxDetails />
              },
              {
                path: "/boxes/:trainerId/new-pokemon",
                element: <CreatePokemon />
              },
              {
                path: "pokemons/:pokemonId",
                element: <PokemonDetails />
              },
                {
                    path: "/user-details",
                    element: <UserDetailsPage/>

                },
            ],
          },
      ],
  },
]);

export default function App() {

  return (
    <TrainerContextProvider>
      <RouterProvider router={router} />
    </TrainerContextProvider>
  )
}

