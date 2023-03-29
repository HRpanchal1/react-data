import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
// import ComponentExample from './01ComponentExample';
// import HeaderCompo from './commonComponent/02headerfile.jsx';

import MainRoutes from './mainroutes';
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <div>Hello world!</div>,
//     },
//     {
//       path: "about",
//       element: <div>About us page data</div>,
//     },
//   ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={MainRoutes} />
        {/* <RouterProvider router={router} /> */}

    {/* <MainRoutes></MainRoutes> */}
        {/* <HeaderCompo />
        <ComponentExample /> */}
    </>
);
