import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'

export function HomePage({ cart, loadCart }) {
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
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    
    // axios = cleaner way to request to the backend.
    /*
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            });
    }, []);
    */

    // async and await
    // we can also use fetchAppData instead of getHomeData. both are the same thing.
    useEffect(() => {
        const getHomeData = async () => {
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';

            const response = await axios.get(urlPath);
            setProducts(response.data);
        };

        getHomeData();
    }, [search]);

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="./home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
