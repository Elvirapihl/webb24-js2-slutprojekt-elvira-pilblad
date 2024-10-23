export function ProductCards({image, productname, price,stock,cart,setCart, onHandleStock}){
    function handleCart(){
        //console.log(cart)
        setCart([...cart, { productname, price, stock, image }]);

        if (stock > 0){
            onHandleStock({image, productname, price, stock});
        }
        //console.log(handleCart);
    };
    return(
        <div className="productBox">
            <img src={image} alt=""/>
            <h2>{productname}</h2>
            <p>Pris: {price} kr</p>
            <p>Lagersaldo: {stock} st</p>
            <button className="buyButton" onClick={handleCart} disabled={stock === 0}>Köp</button>
        </div>
    )
    
}