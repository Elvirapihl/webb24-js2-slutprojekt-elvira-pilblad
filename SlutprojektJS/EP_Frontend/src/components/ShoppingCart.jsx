import {updateStock} from "../utils/fetchProducts.js";

export function ShoppingCart({setChangePage, cart, setCart, products, setProducts, setCartItems}){

    let totalPrice = 0;
    for (const cartProduct of cart){
        totalPrice = totalPrice + cartProduct.price;
    }
    

    function handleBuy(paymentConfirmation){
        setChangePage(paymentConfirmation)
        updateStock(cart);
        setCart([]);
        setCartItems([]);
    }

    function handleClearCart(productPage){
        const updatedProducts = products.map(product => {

            const cartItem = cart.find(items => items.productname === product.productname);
            if (cartItem) {
                return { ...product, stock: product.stock + cartItem.stock}; 
            }
            return product;
        });
        

        
        setCart([]);
        setCartItems([]);
        setProducts(updatedProducts); 
        setChangePage(productPage);
    }

    return(
        <div className="cart">
            <h2> Kundvagn </h2>
            {cart.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        cart.map((product, index) => (
          <p key={`${product.productname} - ${index}`}>
            {product.productname}: {product.price} SEK
          </p>
        ))
      )}
      <p> Totalpris: {totalPrice} SEK</p>

            <button onClick={() => handleBuy("success")}> Genomför köp </button>
            <button onClick={() => handleClearCart("browsing")}> Töm kundvagn </button>

        </div>
    )
}