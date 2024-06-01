import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

export default function Response(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('company/categories/productName/:productid')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);
    return(
        <>
        <div className='container'>
        <h1>Product List</h1>
            <ul>
                {products.map(company => (
                    <li key={company.companyId}>
                        <h3>{company.companyName}</h3>
                        <p>Price: {company.price}</p>
                      
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}