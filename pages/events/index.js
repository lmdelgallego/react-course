import React, { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventSearch/>
      <EventList items={events}/>
    </Fragment>
  );
};

export default AllEventsPage;
