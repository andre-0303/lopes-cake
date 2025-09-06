import express from "express";
import cors from "cors";
import { db } from "./src/lib/lib.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
    try {
        const products = await db.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});