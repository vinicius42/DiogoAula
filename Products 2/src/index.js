const express = require("express");
const {v4: uuidv4} = require("uuid");
const app = express();
const cors = require("cors");

const products = [];

app.use(express.json());
app.use(cors());

function checkIfProductAlreadyExists(req, res, next){
    const { codeProduct } = req;

    const code = products.find(codeProd => codeProd.codeProduct === codeProduct);

    if(!code){
        return res.status(404).json({error: "Product code not found"})
    }

    req.code = code;

    return next();
};

app.get("/products", checkIfProductAlreadyExists, (req, res) =>{
    const { code } = req;
    
    if(code === code.codeProduct){
        return res.status(404).json({error: "Product code already exists"})
    }

    return res.json(products);
});

app.get("/products/:id", (req, res) =>{
    const { id } = req.params;

    const productId = products.find(productId => productId.id === id);

    if(!productId){
        res.status(404).json({error: "Product not found"})
    };

    return res.status(200).json(productId);
})

app.post("/products", (req, res) =>{
    const { name, code, description, price, quantity } = req.body;

    const productAlreadyExists = products.find(product => product.code === code);
    
    if(productAlreadyExists){
        res.status(404).json({error: "Product already exists"})
    }

    products.push({
        id: uuidv4(),
        name,
        code,
        description,
        price,
        quantity
    });

    return res.status(201).json(products);
});

app.put("/products/:id", (req, res) => {
    const { description, quantity, price } = req.body;
    const { id } = req.params;

    const productFind = products.find(prodId => prodId.id === id);

    if(!productFind){
        return res.status(404).json({error: "Product not found"})
    };

    productFind.description = description;
    productFind.quantity = quantity;
    productFind.price = price;

    return res.status(200).json(productFind);
});

app.delete("/products/:id", checkIfProductAlreadyExists, (req, res) => {
    const { id } = req.params;

    const prodIndex = products.findIndex(prodId => prodId.id === id);

    if(prodIndex === -1){
        return res.status(404).json({error: "Product not found"})
    };

    products.splice(prodIndex, 1);

    return res.status(200).json({message: "Product deleted"});
});


app.listen("3333")

