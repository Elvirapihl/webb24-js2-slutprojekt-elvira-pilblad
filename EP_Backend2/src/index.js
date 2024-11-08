import express from "express";
import cors from "cors";
import * as db from "./productsDB.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/productslist', async (req, res) =>{
    const products = await db.getAllProducts()
    res.json(products);
})
app.post('/api/productslist/set', async(req, res) => {

    let items = await db.getAllProducts();
    console.log(req.body);
    
    items = await db.updateStock(req.body)

    res.json([db.updateStock]);
});

app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});