import { NavBar } from "./NavBar";
import { ProductContainer } from "./ProductContainer";
import { ShoppingCart } from "./ShoppingCart";
import { Error } from "./Error.jsx";
import { PaymentConfirmed } from "./PaymentConfirmed.jsx";
import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts.js";

export function App(){

    const [changePage, setChangePage] = useState('browsing');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const handleStock = (productItem) => {
        setCartItems([...cartItems, productItem]);
    };

    useEffect(() =>{
        fetchProducts()
            .then((productsPar)=>{ 
                
                setProducts(productsPar); 
                setChangePage('browsing') })
            .catch(()=>{ setChangePage('error')} );
    }, [])
   
    return(
        <>
        <header>
        <NavBar setChangePage={setChangePage} cartItems={cartItems}/>
        </header>
        <main>
         {changePage == 'browsing' && <ProductContainer products={products} setCart={setCart} cart={cart} onHandleStock={handleStock}/>}   
         {changePage == 'buying' && <ShoppingCart setChangePage={setChangePage} cart={cart} cartItems={cartItems} setCart={setCart} setProducts={setProducts} products={products} setCartItems={setCartItems}/> }  
         {changePage == 'error' && <Error /> }
         {changePage == 'success' && <PaymentConfirmed setChangePage={setChangePage}/>}
     </main>
        </>
    )
}