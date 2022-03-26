import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorite-context';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        date: props.date,
        location: props.location,
        image: props.image,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorite' : 'To Favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
