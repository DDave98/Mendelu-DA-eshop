import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export const DetailProduct = () =>
{
    const { id } = useParams(); // Získá ID z URL

    return (
        <div className="container">
            <h1>Detail Product - {id}</h1>
            <p>kategorie: {products[id].category}</p>
            <p>Popis: {products[id].description}</p>
            <img src={products[id].photo} alt={products[id].title} />
            <p>Název: {products[id].title}</p>
            <p>Cena: {products[id].price}</p>
        </div>
    )
}