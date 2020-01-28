import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path='/'>
            <MovieList />
          </Route>

          <Route path='/movies/:id'>
            <Movie />
          </Route>

        </Switch>


      </div>
    </div>
  );
};

export default App;
