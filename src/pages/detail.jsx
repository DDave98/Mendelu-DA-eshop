import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export const DetailProduct = () =>
{
    const { id } = useParams(); // Získá ID z URL
    const product = products[id-1];
    return (
        <div className="container" style={{margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Detail Product - {id}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px'}}>
                <img 
                    src={product.photo} 
                    alt={product.title} 
                    style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
                />
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#555' }}>{product.title}</h2>
                    <p style={{ fontSize: '18px', color: '#777' }}>Kategorie: <strong>{product.category}</strong></p>
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>{product.description}</p>
                    <p style={{ fontSize: '20px', color: '#333', fontWeight: 'bold' }}>Cena: {product.price} Kč</p>
                    <p>Vlastnosti: </p>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index} style={{ fontSize: '16px', color: '#555', textAlign: 'left' }}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}