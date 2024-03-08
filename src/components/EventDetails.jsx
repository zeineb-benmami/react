import { useCallback, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import eventsData from "../events.json";
function EventDetails() {
  const { state } = useLocation();
  const { eventName } = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    const foundEvent = eventsData.find((e) => e.name === eventName);
    setEvent(foundEvent || {});
  }, [eventName]);

  const src =
    event.nbTickets === 0 ? "/images/sold_out.png" : `/images/${event.img}`;

  const handleLike = useCallback(() => {
    setEvent((prevEvent) => ({ ...prevEvent, like: !prevEvent.like }));
  }, []);

  const msg = event.like ? "Dislike" : "Like";

  return (
    <div style={{ display: "flex", marginLeft: "2rem" }}>
      <img src={`/images/${event.img}`} height={250} />
      <div style={{ marginLeft: "2rem" }}>
        <h2>{event.name}</h2>
        <h5>Description</h5>
        <p style={{ marginLeft: "2rem" }}> {event.description} </p>
        <h5>price</h5>
        <p style={{ marginLeft: "2rem" }}> {event.price} DT</p>
      </div>
    </div>
  );
}

export default EventDetails;
