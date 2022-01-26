import React from "react";
import { Card, Button } from 'react-bootstrap';

const CatThumbnail = ({ imageUrl, actionLink }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="text-center">
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CatThumbnail;