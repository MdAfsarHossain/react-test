import './App.css'
import HomeLayout from './pages/HomeLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as ReactDOM from "react-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 120,
    },
  },
});

const router = createBrowserRouter([

  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  /*
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
  */
])


// function App() {
//   return (
//     <>
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router} />;
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//     </>
//   )
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default App;
