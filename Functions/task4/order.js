module.exports = class Order {
    getPriceOfAvailableProducts() {
        const products = this.getAvailableProducts();
        return this.getOrderPrice(products);
    }

    setProducts(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    getAvailableProducts() {
        return this.products.filter(product => product.isAvailable);
    }

    getOrderPrice(products) {
        let orderPrice = 0;
        for (const product of products) {
            orderPrice += product.productPrice;
        }
        return orderPrice;
    }
};
