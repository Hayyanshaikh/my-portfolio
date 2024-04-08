import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes/routes';

const router = createBrowserRouter(routes);
const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;