export const getAllEvents = async () => {
  const response = await fetch('https://goalcoach-a4187.firebaseio.com/events.json');
  const data = await response.json();

  const events = Object.keys(data).map((key) => {
    return {
      ...data[key],
      id: key,
    };
  });

  console.log('events', events);

  return events;
}

export const getFeaturedEvents = async () => {
  const allEvent = await getAllEvents();
  return allEvent.filter((event) => event.isFeatured);
}