const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(parser.json());
app.use(cors());

const products = [{
    id: 1,
    name: 'pizza',
    description: 'pepperoni',
    price: 12.99,
    //size: [Size.SMALL, Size.MEDIUM, Size.LARGE],
    toppings: [],
    imagePath: '../../images/pizza.jpg',
    imageDescription: 'Photo by <a href="https://unsplash.com/@karthikgarikapati?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karthik Garikapati</a> on <a href="https://unsplash.com/license?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
},
    {
        id: 2,
    name: 'pasta',
    description: 'penne noodles and season beef',
    price: 15.99,
    //size: [Size.SMALL, Size.MEDIUM, Size.LARGE],
    toppings: [],
    imagePath: '../../images/ben-lei-flFd8L7_B3g-unsplash.jpg',
    imageDescription: 'Photo by <a href="https://unsplash.com/@bleiplays33?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Lei</a> on <a href="https://unsplash.com/s/photos/pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }];
app.get("/products", (req, res) => res.send(products));
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p.id === +id);

    if (product) res.send(product);

    res.status(404).send(`Product with id = ${id} dosen't exist`);
});

app.listen(PORT, () => console.log('Server running: ' + PORT));