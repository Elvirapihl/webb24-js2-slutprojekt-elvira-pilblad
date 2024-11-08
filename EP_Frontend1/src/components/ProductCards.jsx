export function ProductCards({image, productname, price,stock,cart,setCart, onHandleStock}){


    function handleCart(){
        const numberOfProductNamesInCart = cart.filter(item => item.productname === productname).length;
        
        if (numberOfProductNamesInCart < stock){
            setCart([...cart, { productname, price, stock, image }]);
            onHandleStock({image, productname, price, stock});
        } else{
            alert("Produkten är slut i lager");
        }

    };
    return(
        <div className="productBox">
            <img src={image} alt=""/>
            <h2>{productname}</h2>
            <p>Pris: {price} kr</p>
            <p>Lagersaldo: {stock} st</p>
            <button className="buyButton" onClick={handleCart} disabled={stock === 0}>Lägg i kundvagn</button>
        </div>
    )
    
}