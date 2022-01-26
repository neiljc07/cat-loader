import React, { useEffect } from 'react';
import Dropdown from './components/Dropdown';
import * as CatService from './services/cat.api';
import { useSelector, useDispatch } from 'react-redux';
import { FILL_BREEDS } from './constants/action-types';

function selectCallback(event) {
  const value = event.target.value;

  console.log(value);
}

function App() {
  const options = useSelector((state) => state.breeds);
  const dispatch = useDispatch();

  useEffect(() => {
    CatService.getBreeds()
      .then((result) => {
        dispatch({
          type: FILL_BREEDS,
          payload: result.data
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">
      <Dropdown 
        options={options} 
        value={"id"} 
        label={"name"} 
        defaultLabel="Breed"
        callback={selectCallback} />
    </div>
  );
}

export default App;
