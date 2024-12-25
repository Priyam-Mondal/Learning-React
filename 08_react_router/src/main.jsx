import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './Layout';
import { Home, About, Contact, User, Github, gitDataLoader } from './components'; // Centralized imports

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> }, 
//       { path: '/about', element: <About /> }, // About route
//       { path: '/contact', element: <Contact /> }, // Contact route
//     ],
//   },
// ]);


// another way of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
        loader={gitDataLoader}
        path='github' 
        element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
