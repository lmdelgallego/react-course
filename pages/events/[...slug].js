import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultTitle from '../../components/events/results-title';
import { Fragment } from 'react';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;


  if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
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

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>No events found for {filteredYear}/{filteredMonth}</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
