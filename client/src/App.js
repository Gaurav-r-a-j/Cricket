import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports'
import Match from './pages/Match/Match'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';




const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Header/>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/sport/:sports_name',
        element:<Sports/>
      },
      {
        path:'/event/:event_name',
        element:<Match/>
      },

    ]
  },
  
])




function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
