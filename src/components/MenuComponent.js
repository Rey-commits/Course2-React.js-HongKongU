/* eslint-disable no-unused-vars */
import React from 'react';
import { Media} from 'reactstrap'
import DishCard from "./DishCard"
import dishes from "./DishList"

function createDishList(dish){
    return (
        <DishCard 
            id={dish.id}
            name={dish.name}
            image={dish.image}
            category={dish.category}
            label={dish.label}
            price={dish.price}
            description={dish.description}
        />

    )
}
function Menu(){
    
    return ( 
        
        <div className="container">
            <div className="row">
                <Media list>{dishes.map(createDishList)}</Media>        
            </div>

        </div>
    )
}

export default Menu;