import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'

import App from "./App.jsx";
import ExplorePage from "./pages/ExplorePage";
// import LiveMusicPage from './pages/LiveMusicPage';
import MusicVenuePage from "./pages/MusicVenuePage";
// import ReviewPage from './pages/ReviewPage';
// import ErrorPage from './pages/ErrorPage';
import UserAuthPage from "./pages/UserAuthPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <ExplorePage />,
      },
      {
        path: "/:venueId",
        element: <MusicVenuePage />,
      },
      {
        path: "/auth",
        element: <UserAuthPage />,
      } /*, {
        path: '/live-music',
        element: <LiveMusicPage />
      }, {
        path: '/music-venue',
        element: <MusicVenuePage />
      }, {
        path: '/reviews',
        element: <ReviewPage />
      }*/,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
