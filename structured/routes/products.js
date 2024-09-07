import { Router } from "express";

const product = Router();


product.get("details", (req, res)=>{
    res.send("Here is details");
});

product.post('/create-product/', (req, res)=>{
    res.send("PRoduct created Succesfully");
});

// and many more routes related to products

export default product;