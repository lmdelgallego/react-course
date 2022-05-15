import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetailPage = ({ event, ...props }) => {

  if (!event) {
    return <div className="center"><p>Loading...</p></div>;
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
    },
    revalidate: 30
  };
}

export const getStaticPaths = async () => {

  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id
      }
    }
  });

  return {
    paths,
    fallback: true
  }
}

export default EventDetailPage;
