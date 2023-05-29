import React, {useState, useEffect} from 'react'
import Products from './components/Products/Products'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {commerce} from "./components/lib/commerce";
function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});
    const fetchProduct = async ()=>{
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () =>{
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }
    const AddToCart = async (productId,quantity)=>{
        const item = await commerce.cart.add(productId,quantity);
    }
    useEffect(()=>{
        fetchProduct()
        fetchCart()
},[])
    console.log(products);
  return (
    <div className="App">
        <NavigationBar/>
        <Products products={products} onAddToCard ={AddToCart}/>
    </div>
  );
}

export default App;
