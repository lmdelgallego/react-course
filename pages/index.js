import Head from 'next/head';
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {

  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name='description' content='Find a lot of great events.' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featureEvents = await getFeaturedEvents();
  return {
    props: {
      events: featureEvents
    },
    revalidate: 1800
  };
}

export default HomePage;
