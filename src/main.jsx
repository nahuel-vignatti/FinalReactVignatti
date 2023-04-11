import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ItemRoot from "./routes/itemRoot";
import Cart from "./routes/cart";
import "./index.css";
import Layout from "./components/Layout";
import Checkout from "./routes/checkout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomProvider from "./context";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcMYCmhtmuOP81BLhG1bV-LKvRUTljQBA",
  authDomain: "ecommerce-pimpaji.firebaseapp.com",
  projectId: "ecommerce-pimpaji",
  storageBucket: "ecommerce-pimpaji.appspot.com",
  messagingSenderId: "637967178245",
  appId: "1:637967178245:web:041a349ca27490c332da6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
