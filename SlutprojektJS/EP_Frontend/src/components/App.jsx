import { NavBar } from "./NavBar";
import { ProductContainer } from "./ProductContainer";
import { ShoppingCart } from "./ShoppingCart";
import { Error } from "./Error.jsx";
import { PaymentConfirmed } from "./PaymentConfirmed.jsx";
import { useEffect, useState } from "react";
import { fetchProducts} from "../utils/fetchProducts.js";

export function App(){

    const [changePage, setChangePage] = useState('browsing');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() =>{
        fetchProducts()
            .then((productsPar)=>{ 
                //console.log(productsPar);
                setProducts(productsPar); 
                setChangePage('browsing') })
                //.then(updateStock) något sånt här tror jag(Oklart)
            .catch(()=>{ setChangePage('error')} );
    }, [])
    
    const handlepurchase = (items) => {
        const updateStock = products.map(product => product.productname === items.productname ?{...product, stock: product.stock -1} :product ); 
        setProducts(updateStock);
        setCart([...cartItems, items]);
    };

    return(
        <>
        <header>
        <NavBar setChangePage={setChangePage} cartItems={cartItems}/>
        </header>
        <main>
         {changePage == 'browsing' && <ProductContainer products={products} setCart={setCart} cart={cart} onPurchase={handlepurchase}/>}   
         {changePage == 'buying' && <ShoppingCart setChangePage={setChangePage} cart={cart} cartItems={cartItems} setCart={setCart} setProducts={setProducts} products={products} setCartItems={setCartItems}/> }  
         {changePage == 'error' && <Error /> }
         {changePage == 'success' && <PaymentConfirmed setChangePage={setChangePage}/>}
     </main>
        </>
    )
}