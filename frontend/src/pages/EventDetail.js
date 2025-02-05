import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useRouteLoaderData('event-details');
  const event = data.event;
  return <EventItem event={event} />;
};

export default EventDetail;

export async function loader({ request, params }) {
  const response = await fetch("http://localhost:8080/events/" + params.eventId);

  if (!response.ok) {
    throw Response(
      JSON.stringify(
        { message: "Could not fetch details for the selected event" },
        { status: 500 },
      ),
    );
  } else {
    return response;
  }
}
