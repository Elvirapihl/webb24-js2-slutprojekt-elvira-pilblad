//'http://localhost:3000/api/productslist'
export async function fetchProducts() {
    const url = 'http://localhost:3000/api/productslist';

    const res = await fetch (url);
    const data = await res.json();

    //console.log(data);

    return data;
}
