import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Card } from "react-bootstrap";
import * as CatService from '../services/cat.api';
import { SET_ERROR } from "../constants/action-types";
import { GENERIC_ERROR } from "../constants/messages";

function Cat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedCat, setSelectedCat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const backErrorCallback = () => {
    navigate('/', { replace: true });

    // Reset Errors
    dispatch({
      type: SET_ERROR,
      payload: null
    });
};

  useEffect(() => {
    // If the app can't find the cat object in app state
    // Try it via api call
    if (!selectedCat) {
      CatService.getById(id)
        .then((result) => {
          setSelectedCat(result.data)
        })
        .catch((err) => {
          dispatch({
            type: SET_ERROR,
            payload: GENERIC_ERROR
          });

          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isError &&
            <Button 
              variant="primary" 
              className="mb-2" 
              onClick={backErrorCallback}>
                Back
            </Button>
          }

          {isLoading &&
            <Alert variant="info">Loading...</Alert>
          }

          {selectedCat && 
            <div>
              <Button 
                variant="primary" 
                className="mb-2" 
                onClick={() => { navigate(`/?breed=${selectedCat.breeds[0].id}`, { replace: true }) }}>
                  Back
              </Button>

              <Card>
                <Card.Img variant="top" src={selectedCat.url} />
                <Card.Body>
                  <h4>{selectedCat.breeds[0].name}</h4>
                  <h5>Origin: {selectedCat.breeds[0].origin}</h5>
                  <h6>{selectedCat.breeds[0].temperament}</h6>
                  <p>{selectedCat.breeds[0].description}</p>
                </Card.Body>
              </Card>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Cat;