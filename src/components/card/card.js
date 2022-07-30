import React from "react";
import './card.css';
const addFavorites = (favorites,setFavorites, character)=> {
    setFavorites(favoritos=> {
        const filter=favoritos.filter(favorito=> favorito.id != character.id)
        return [...filter,character]
    })
}
const removeFavorites = (setFavorites,character)=> {
    setFavorites(favoritos=> {
        const filter=favoritos.filter(favorito=> favorito.id != character.id)
        return [...filter]
    })
}
export const Card = (props)=> {
    return (
        <div className='card'>
            <div className='card-title'>
                <h1>{props.character.name}</h1>
                <img src= {props.character.image} className='image' alt=""/>

            </div>
            <div className= 'card-body'>

                <p>{props.character.origin.name}</p>
                {props.favorite

                    ? <button onClick={() => removeFavorites( props.setFavorites, props.character)}
                              className='btn'> Remover de favoritos</button>
                    :< button onClick={() => addFavorites(props.favorites, props.setFavorites, props.character)}
                             className='btn'> Agregar a favoritos</button>
                }
            </div>
        </div>
    )
}