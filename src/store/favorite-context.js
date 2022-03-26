import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const context = {
    favorites,
    totalFavorites: favorites.length,
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
