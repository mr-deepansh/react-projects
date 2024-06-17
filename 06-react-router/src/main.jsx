import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {   Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Github, { githubInfoLoader } from './Components/Github/Github';
import User from './Components/User/User';
import NotFound from './NotFound/NotFound.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact us",
//         element: <Contact/>
//       },
//       {
//         path: "github",
//         element: <Github/>
//       },
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route path='gitHub'element={<Github />} loader={githubInfoLoader} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router} />
  </React.StrictMode>,
);
