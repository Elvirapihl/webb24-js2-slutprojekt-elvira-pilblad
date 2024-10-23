import fs from 'fs/promises';
// Kanske inte behövs, kolla på det längre fram
async function getAllProducts() {
    const rawdata = await fs.readFile('./src/products.json');
    return JSON.parse(rawdata);
}
export{getAllProducts};