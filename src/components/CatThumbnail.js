import React from "react";
import { Card, Button } from 'react-bootstrap';

const CatThumbnail = ({ imageUrl, data, callback }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="text-center">
        <Button variant="primary" onClick={() => { callback(data) }}>View Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CatThumbnail;