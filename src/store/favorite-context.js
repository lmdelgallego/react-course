import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setFavorites((prevFavorites) => prevFavorites.concat[meetup]);
  };
  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((meetup) => meetup.id !== meetupId));
  };
  const itemIsFavoriteHandler = (meetupId) => favorites.some((meetup) => meetup.id === meetupId);

  const context = {
    favorites,
    totalFavorites: favorites.length,
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
