import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import App from "./App.jsx";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostListProvider from "./store/PostListProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>
);