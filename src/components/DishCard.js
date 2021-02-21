import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle  } from 'reactstrap';

function DishCard(props) {
    return (
        <div key={props.id} className="col-12 col-md-5 m-1">
                <Card tag="li">
                  <CardImg width="100%" src={props.image} alt={props.name}/>
                  <CardImgOverlay>
                      <CardTitle>{props.name}</CardTitle>
                     
                  </CardImgOverlay>
                </Card>
              </div>

    )
}

export default DishCard;