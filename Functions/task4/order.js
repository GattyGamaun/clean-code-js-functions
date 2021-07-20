module.exports = class Order {
    getPriceOfAvailableProducts() {
        this.updateProducts();
        return this.getOrderPrice();
    }

    setProducts(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    updateProducts() {
        this.products.forEach((product, index) => {
            this.removeProduct(product, index);
        });
    }

    removeProduct(product, index) {
        if (this.isProductNotAvailable(product)) {
            this.products.splice(index, 1);
        }
    }

    isProductNotAvailable(product) {
        return !product.isAvailable;
    }

    getOrderPrice() {
        let orderPrice = 0;
        for (const product of this.products) {
            orderPrice += product.productPrice;
        }
        return orderPrice;
    }
};
