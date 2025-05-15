import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export const DetailProduct = () => {
    const { id } = useParams(); // Získá ID z URL
    const product = products.find(prod => prod.id == id); 

    return (
        <div className="container" style={{ margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Detail Product - {id}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
                <img
                    src={product?.image}
                    alt={product?.name}
                    style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#555' }}>{product?.name}</h2>

                    <h3 style={{ marginTop: '20px', color: '#444' }}>Všechny parametry:</h3>
                    <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                        {Object.entries(product).map(([key, value], index) => (
                            <li key={index} style={{ fontSize: '16px', color: '#555' }}>
                                <strong>{key}:</strong>{' '}
                                {Array.isArray(value)
                                    ? (
                                        <ul style={{ paddingLeft: '20px' }}>
                                            {value.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )
                                    : typeof value === 'object' && value !== null
                                        ? JSON.stringify(value)
                                        : value.toString()}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
