import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultTitle from '../../components/events/results-title';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = (props) => {
  const router = useRouter();
  // const filterData = router.query.slug;
  // if (!filterData) {
  //   return <p className='center'>Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;


  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert >
          <p className='center'>Invalid filter. Please adjust your values!</p>;
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );

  }

  const date = new Date(props.date.numYear, props.date.numMonth - 1);

  const filteredEvents = props.events;

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>No events found for {props.date.numMonth - 1}/{props.date.numYear}</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }



  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;


  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return {
      props: {
        hasError: true
      }
      // notFound: true,
      // redirect: {
      //   destination: '/events',
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

  return {
    props: {
      events: filteredEvents,
      date: {
        numYear,
        numMonth
      }
    }
  };
}

export default FilteredEventsPage;
