import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featureEvents = await getFeaturedEvents();
  return {
    props: {
      events: featureEvents
    }
  };
}

export default HomePage;
