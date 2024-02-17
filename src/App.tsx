import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './ui/HomeLayout';
import SelectPreferences from './features/game/SelectPreferences';
import ShowPreferences from './features/game/ShowPreferences';
import CreateGame from './features/game/CreateGame';
import { loader as preferencesLoader } from './features/game/ShowPreferences';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <SelectPreferences />,
      },
      {
        path: 'showPreferences',
        element: <ShowPreferences />,
        loader: preferencesLoader,
      },
      {
        path: 'startGame',
        element: <CreateGame />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </>
  );
}

export default App;
