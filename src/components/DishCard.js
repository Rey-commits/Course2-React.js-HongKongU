import React from "react";
import { Media } from 'reactstrap';

function DishCard(props) {
    return (
        <div key={props.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={props.image} alt={props.name}/>
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{props.name}</Media>
                    <p>{props.description}</p>
                  </Media>
                </Media>
              </div>

    )
}

export default DishCard;