import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader } from "./pages/Events";
import EventDetail, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import Error from "./pages/Error";
import EventsRoot from "./pages/EventsRoot";
import { action as eventAction } from "./components/EventForm";

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
          { path: "new", element: <NewEvent />, action: eventAction },
          {
            path: ":eventId",
            loader: eventDetailsLoader,
            id: "event-details",
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEvent /> , action: eventAction },
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
