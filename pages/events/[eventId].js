import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getEventById, getAllEvents } from '../../helpers/api-util';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetailPage = ({ event, ...props }) => {

  if (!event) {
    return <ErrorAlert><p>Event not found</p></ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event
    }
  };
}

export const getStaticPaths = async () => {

  const events = await getAllEvents();

  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export default EventDetailPage;
