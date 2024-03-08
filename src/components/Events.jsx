import Event from "./Event";
// import events from "../events.json"
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { deleteEventAPI, get } from "../services/eventServices";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getEvents } from "../redux/actions";
import { getEventsReducer } from "../reduxToolkit/Slices/eventSlice";
function Events() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});
  // const [events,setEvents] = useState([])
  const events = useSelector((state) => state.event.events);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searchParams.get("name"));
    console.log(searchParams.get("id"));

    fetchEvents();
    console.log(events);
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  }, []);

  const fetchEvents = async () => {
    // get()
    //     .then((result) => { setEvents(result.data); console.log(result) })
    //     .catch((error)=>console.log(error))
    try {
      const result = await get();
      dispatch(getEvents(result.data));
      // setEvents(result.data)
    } catch (error) {
      console.log(error);
    }

    //setEvents(result);
    //console.log(result)
  };

  const [show, setShow] = useState(false);
  const Buy = (event) => {
    setShow(true);
    event.nbTickets--;
    event.nbParticipants++;
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const deleteE = async (id) => {
    await deleteEventAPI(id);
    dispatch(deleteEvent(id));
  };
  return (
    <Container>
      <Row>
        {showWelcome && (
          <Alert variant="success"> Hey welcome to ESPRIT events</Alert>
        )}
        {events != undefined &&
          events.map((element, index) => {
            return (
              <Col key={index} md={4}>
                <Event event={element} Buy={Buy} deleteE={deleteE} />
              </Col>
            );
          })}
        {show && <Alert variant="success">You have booked an event</Alert>}
      </Row>
    </Container>
  );
}

export default Events;
