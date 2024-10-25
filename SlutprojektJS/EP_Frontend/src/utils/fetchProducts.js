//'http://localhost:3000/api/productslist'
export async function fetchProducts() {
    const url = 'http://localhost:3000/api/productslist';

    const res = await fetch (url);
    const data = await res.json();

    //console.log(data);

    return data;
}

export async function updateStock(products){
  
    
    const url = `http://localhost:3000/api/productslist/set`; 
    
    for(let i = 0 ; i<products.length ; i++){
       delete products[i].image
       delete products[i].price
       delete products[i].product
    }
    console.log(products);

    // Kolla i postman vad du skickar med i requesten som body ("strings")
    // Se till att det du skickar med här som body har exakt samma format, dvs en array med strings  
    // Utgå ifrån Parametern products (som kommer från ditt cart state) och se till att du plockar ut produktnamnen och lägger in i en array.

    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    console.log("done setting the amount");
    
   // const data = await res.json();
   // console.log(data);
   // return data;
    
}
