import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import About from './Components/About/About';
import People from './Components/People/People';
import TvShow from './Components/TvShow/TvShow';
import MoviesDetails from './Components/MoviesDetails/MoviesDetails';
import PeopleDetails from './Components/PeopleDetails/PeopleDetails';
import TvDetails from './Components/TvDetails/TvDetails';
import UserContextProvider from './Components/UserContext/UserContext';


function App() {
  let router = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'movie', element: <Movie /> },
        { path: 'tvshow', element: <TvShow /> },
        { path: 'people', element: <People /> },
        { path: 'about', element: <About /> },
        { path: 'movie', element: <Movie /> },
        { path: 'moviesdetails/:id', element: <MoviesDetails /> },
        { path: 'peopledetails/:id', element: <PeopleDetails /> },
        { path: 'tvdetails/:id', element: <TvDetails /> },
      ]
    }
  ])
  return <>
    <UserContextProvider>
      <RouterProvider router={router} ></RouterProvider>
    </UserContextProvider>


  </>
}

export default App;
