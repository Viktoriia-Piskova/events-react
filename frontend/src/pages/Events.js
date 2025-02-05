import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const Events = () => {
  const data = useLoaderData();
  const events = data.events;

  return (
    <div>
      <h1>Events</h1>
      <ul>{<EventsList events={events} />}</ul>
    </div>
  );
};

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
