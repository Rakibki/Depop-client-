import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvaider from "./providers/AuthProvaider.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto max-w-[1200px] overflow-">
      <AuthProvaider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvaider>
      <ToastContainer />
    </div>
  </React.StrictMode>
);
