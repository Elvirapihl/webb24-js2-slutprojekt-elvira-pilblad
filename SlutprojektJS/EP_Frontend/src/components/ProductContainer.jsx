import { ProductCards } from "./ProductCards";

/*const products = [
{
    productname: 'Tandborste',
    price: '20',
    stock: '2'
},
{
    productname: 'Tandkräm',
    price: '35',
    stock: '5'
},
{
    productname: 'Nocco',
    price: '18',
    stock: '10'
},
{
    productname: 'Kaffe',
    price: '12',
    stock: '6'
},
{
    productname: 'Drickyogurt',
    price: '15',
    stock: '0'
}
];*/

export function ProductContainer({products, setCart, cart, onHandleStock}){
    //console.log(cart);
    //console.log(onHandleStock);

    return(
        <div className="productsList">
            {products.map(
                ({ image, productname, price, stock}, id ) => <ProductCards key={id} 
                image={image} 
                productname={productname} 
                price={price} 
                stock={stock} 
                setCart={setCart}
                cart={cart}
                onHandleStock={onHandleStock} />)}

        </div>
        
    
    )
    
}