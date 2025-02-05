import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import Error from "./pages/Error";
import EventsRoot from "./pages/EventsRoot";
import { loader } from "./pages/Events";
import { loader as eventDetailsLoader } from "./pages/EventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: loader },
          { path: "new", element: <NewEvent /> },
          {
            path: ":eventId",
            loader: eventDetailsLoader,
            id: 'event-details',
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
