import './App.css'
import HomeLayout from './pages/HomeLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'product',
        element: <Product />,
      },
    ]
  }
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
