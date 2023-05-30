import React, {useState, useEffect} from 'react'
import Products from './components/Products/Products'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {commerce} from "./components/lib/commerce";
import Cart from './components/Cart/Cart'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import cartItem from "./components/Cart/CartItem/CartItem";

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});
    const fetchProduct = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async ()=>{
        setCart(await commerce.cart.retrieve());
    };
const handelAddToCart = async (productId, quantity)=>{
        const cart = await commerce.cart.add(productId,quantity);
        setCart(cart)

}

const handleUpgradeCartQty = async (productId, quantity)=>{
    const {cart} = await commerce.cart.update(productId,{quantity})
    setCart(cart)
}
    const handleRemoveFromCart = async (lineItemId) => {
        const {cart} = await commerce.cart.remove(lineItemId);

        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart);


    };

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, []);
    console.log(cart);
    return (
        <Router>
        <div >

            <NavigationBar totalItems={cart.total_items}/>
            <Routes>

                <Route path='/' element={<Products products = {products} onAddToCart = {handelAddToCart}/>} />
                <Route path='/cart' element={<Cart cart={cart}
                                                   handleUpgradeCartQty ={handleUpgradeCartQty()}
                                                                                handleRemoveFromCart ={handleRemoveFromCart()}
                                                                                handleEmptyCart ={handleEmptyCart()}  />} />



            </Routes>
        </div>
        </Router>


    );
}

export default App;
