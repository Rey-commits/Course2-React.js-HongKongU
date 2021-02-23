/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </div>
            )
        });


        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );
    }
}

export default Menu;