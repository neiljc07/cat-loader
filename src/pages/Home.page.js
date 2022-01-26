import React, { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import * as CatService from '../services/cat.api';
import { useSelector, useDispatch } from 'react-redux';
import { APPEND_CATS, FILL_BREEDS, FILL_CATS } from '../constants/action-types';
import CatThumbnail from '../components/CatThumbnail';
import { Alert, Button } from 'react-bootstrap';

function Home() {
  // Initialize state variables and functions
  const breeds = useSelector((state) => state.breeds);
  const cats = useSelector((state) => state.cats);

  const [selectedBreed, setSelectedBreed] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadButtonDisabled, setIsLoadButtonDisabled] = useState(true);
  const [isLoadButtonHidden, setIsLoadButtonHidden] = useState(false);

  const dispatch = useDispatch();

  // Retrieve the value of the dropdown from the api on page load
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

  // Initialize the callback function when the user selects from the dropdown
  const selectCallback = (event) => {
    const value = event.target.value;
    setSelectedBreed(value);
    setCurrentPage(0);
    getByBreed(value, 0, false);
  };

  const loadMoreCallback = () => {
    setCurrentPage(currentPage + 1);
    getByBreed(selectedBreed, currentPage + 1, true);
  };

  const getByBreed = (breed, page, appendResult) => {
    setIsLoading(true);
    CatService.getByBreed(breed, page, 10)
      .then((result) => {
        // First Load, fill the array
        if ( ! appendResult) {
          dispatch({
            type: FILL_CATS,
            payload: result.data
          });

          setIsLoadButtonDisabled(false);
        }
        // Load More, append to existing results
        else {
          dispatch({
            type: APPEND_CATS,
            payload: result.data
          });
        }

        if(result.data.length === 0) {
          setIsLoadButtonHidden(true);
        } else {
          setIsLoadButtonHidden(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => { setIsLoading(false) });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Cat Browser</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Dropdown 
            label={'Breed'}
            options={breeds} 
            value={'id'} 
            text={'name'} 
            defaultLabel={'Breed'}
            callback={selectCallback} 
            disabled={isLoading}  />
        </div>
      </div>

      <div className="row">
        {cats.length > 0 && cats.map((cat, index) => {
          return (
            <div className="col-md-3 col-sm-6 col-12" key={cat.id}>
              <CatThumbnail 
                imageUrl={cat.url}
                actionLink={'#'} />
            </div>
          )
        })}

        {cats.length == 0 && 
          <div className="col">
            <Alert variant="danger">There are no cats available.</Alert>
          </div>
        }
      </div>

      {!isLoadButtonHidden &&
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <Button 
              variant="success" 
              disabled={isLoading || isLoadButtonDisabled}
              onClick={loadMoreCallback}>
                {isLoading ? 'Loading Cats...' : 'Load More' }
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
