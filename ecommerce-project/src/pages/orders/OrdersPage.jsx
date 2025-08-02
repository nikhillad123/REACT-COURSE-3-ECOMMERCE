import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'

import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid'


export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    /*
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);
    */

    useEffect(() => {
        const getOrderData = async () => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        };

        getOrderData();
    }, []);

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="./orders-favicon.png" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
            </div>
        </>
    );
}