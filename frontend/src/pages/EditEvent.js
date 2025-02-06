import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEvent = () => {
  const data = useRouteLoaderData("event-details");
  const event = data.event;

  return <EventForm event={event} method={"PATCH"} />;
};

export default EditEvent;
