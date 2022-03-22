import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const addMeetupHandler = (meetup) => {
    fetch('https://goalcoach-a4187.firebaseio.com/meetups.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetup),
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
