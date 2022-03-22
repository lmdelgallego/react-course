import { useRef } from 'react';
import Card from '../ui/Card';

import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='5'
            required
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type='submit'>Create Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
