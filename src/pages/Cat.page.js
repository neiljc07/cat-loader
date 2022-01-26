import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function Cat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedCat = useSelector((state) => {
    return state.cats.find(cat => cat.id === id);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2">
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
      </div>
    </div>
  );
}

export default Cat;