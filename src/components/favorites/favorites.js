import './favorites.css';
import React from "react";
import {Card} from "../card/card";

export const Favorites=(props)=>{
    return(
        <div>
            <h1 className='favorites-text'>Favoritos</h1>
            <div className="characters">
                {
                    props.favorites.length > 0
                        ? props.favorites.map(favorite=> <Card favorite={true} setFavorites= {props.setFavorites}  key={favorite.id} character={favorite}></Card>)
                        :null
                }
            </div>
            <hr/>
        </div>

    );
}