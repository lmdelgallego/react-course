export const getAllEvents = async () => {
  const response = await fetch('https://goalcoach-a4187.firebaseio.com/events.json');
  const data = await response.json();

  return Object.keys(data).map((key) => {
    return {
      ...data[key],
      id: key,
    };
  });
}

export const getFeaturedEvents = async () => {
  const allEvent = await getAllEvents();
  return allEvent.filter((event) => event.isFeatured);
}

export const getEventById = async (id) => {
  const allEvent = await getAllEvents();
  return allEvent.find((event) => event.id === id);
}


export const getFilteredEvents = async ({ year, month }) => {
  const allEvent = await getAllEvents();
  return allEvent.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

}