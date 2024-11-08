export async function fetchProducts() {
    const url = 'http://localhost:3000/api/productslist';

    const res = await fetch (url);
    const data = await res.json();


    return data;
}

export async function updateStock(products){
  
    
    const url = `http://localhost:3000/api/productslist/set`; 
    

    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(products),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      res.json();
    
}