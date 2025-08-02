import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'

export function HomePage({ cart }) {
    /*
    //Asynchronous code = code that does not finish right away.
    fetch('http://localhost:3000/api/products').then((response) => {
        return response.json()
    }).then((data) => {
            console.log(data);
    })
    */

    // with the help of Axios, useState and useEffect we now take data from the backend instead of products.js file.
    const [products, setProducts] = useState([]);
    
    // axios = cleaner way to request to the backend.
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="./home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}
