const fs = require('fs');
const path = require('path');

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'items.json'
);

const getProductsFromFile = cb => {
    fs.readFile(filePath, (err, fileContents) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContents));
        }
    });
};

module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}

