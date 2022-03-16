import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
