import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { NavigationBar, Products, Cart, Checkout } from './components';
import { commerce } from './components/lib/commerce';

const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });

        setCart(response.cart);
    };

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    };

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (

        <Router>
            <div style={{ display: 'flex' }}>
                <CssBaseline />
                <NavigationBar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
                <Routes>
                    <Route exact path="/">
                        <Route products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
                    </Route>
                    <Route exact path="/Cart">
                        <Route cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                    </Route>
                    <Route path="/Checkout" exact>
                        <Route cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>
                </Routes>
            </div>


            <div >

                <NavigationBar totalItems={cart.total_items}/>
                <Routes>

                    <Route path='/' element={<Products products = {products} />} />
                    <Route path='/cart' element={<Cart cart={cart}

                                                       handleRemoveFromCart ={handleRemoveFromCart}
                                                       handleEmptyCart ={handleEmptyCart}  />} />



                </Routes>
            </div>
        </Router>
    );
};

export default App;
