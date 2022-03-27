import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorite-context';

const FavoritesPage = () => {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.favorites.length === 0) {
    content = <p>You got no favorites yet. Star adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
