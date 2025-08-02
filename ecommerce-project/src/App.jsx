import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/trackings/TrackingPage'
import { ErrorPage } from './pages/errors/ErrorPage'
import axios from 'axios'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  /*
  useEffect(() => {
         axios.get('/api/cart-items?expand=product')
            .then((response) => {
                setCart(response.data);
            });
    }, []);
    */

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<ErrorPage cart={cart} />} />
    </Routes>
  )
}

export default App
