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
        const updateStock = products.map(product => product.productname === productItem.productname ?{...product, stock: product.stock-1} :product ); 
        setProducts(updateStock);
        setCartItems([...cartItems, productItem]);
    };
    //console.log(cart);


    useEffect(() =>{
        fetchProducts()
            .then((productsPar)=>{ 
                //console.log(productsPar);
                setProducts(productsPar); 
                setChangePage('browsing') })
            .catch(()=>{ setChangePage('error')} );
    }, [])
    //const status = 'browsing';
    //console.log(setCart);

    return(
        <>
        <header>
        <NavBar setChangePage={setChangePage} cartItems={cartItems}/>
        </header>
        <main>
         {changePage == 'browsing' && <ProductContainer products={products} setCart={setCart} cart={cart} onHandleStock={handleStock}/>}   
         {changePage == 'buying' && <ShoppingCart setChangePage={setChangePage} cart={cart} cartItems={cartItems} setCart={setCart} setProducts={setProducts} products={products} setCartItems={setCartItems}/> }  
         {changePage == 'error' && <Error/> }
         {changePage == 'success' && <PaymentConfirmed setChangePage={setChangePage}/>}
     </main>
        </>
    )
}