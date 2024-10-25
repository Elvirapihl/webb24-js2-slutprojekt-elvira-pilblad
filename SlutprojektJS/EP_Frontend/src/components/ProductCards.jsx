export function ProductCards({image, productname, price,stock,cart,setCart, onPurchase}){
    function handleCart(){


        const existingItem = cart.find(items => items.product === productname);
            
            if (stock > 0) {
                if (existingItem) {
                    
                    setCart(prevCart => {
                        const updatedCart = prevCart.map(items =>
                            items.productname === productname
                                ? { ...items, stock: items.stock + 1 }
                                : items
                        );
                        
                        return updatedCart;
                    });
                } else {
                    setCart(prevCart => {
                        const updatedCart = [
                            ...prevCart,
                            { productname, stock: 1, price, image }
                        ];
                        
                        return updatedCart;
                    });
                }
                onPurchase({ image, productname, price, stock });
            
        }
        //console.log(cart)
        /*setCart([...cart, { productname, price, stock, image }]);

        if (stock > 0){
            handlepurchase({image, productname, price, stock});
        }*/
        //console.log(handleCart);
    };
    return(
        <div className="productBox">
            <img src={image} alt={productname}/>
            <h2>{productname}</h2>
            <p>Pris: {price} kr</p>
            <p>Lagersaldo: {stock} st</p>
            <button className="buyButton" onClick={handleCart} disabled={stock === 0}>Köp</button>
        </div>
    )
    
}


/**




 */