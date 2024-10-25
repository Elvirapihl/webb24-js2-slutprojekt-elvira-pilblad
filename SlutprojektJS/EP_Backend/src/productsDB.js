import fs from 'fs/promises';

// Kanske inte behövs, kolla på det längre fram
async function getAllProducts() {
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}
async function updateStock(products){

    const rawdata = await fs.readFile('./src/products.json');
    let dbItems= JSON.parse(rawdata);
    
    //console.log(dbItems);


    // För varje namn i products behöver du leta upp matchande produkt i dbItems och sätta stock till stock minus ett

    for(const productString of products ){
        console.log(productString, 'yttre');

        for(const productOb of dbItems){
            console.log(productOb.stock, 'inre');
            if (productOb.productname === productString) {
                // Uppdatera lagersaldo, till exempel minska lagret med 1
                productOb.stock--;
                console.log("match");
                break;
            }
        }

    }
    await fs.writeFile('./src/products.json', JSON.stringify(dbItems, null, 2));
    //console.log(dbItems);
    // for (let i = 0; i < products.length; i++) {
    //     dbItems[i].stock = dbItems[i].stock - products[i].stock;
    // } 

    // await fs.writeFile('./src/products.json', JSON.stringify(dbItems, null, 2));
}
export{getAllProducts, updateStock};