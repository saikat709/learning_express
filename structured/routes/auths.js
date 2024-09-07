import { Router } from "express";

// const router = require('express').Router()   if not module type

const router = Router();

router.get('/a', (req, res)=>{
    res.send("abd...")
});

// and many more routes

export default router;