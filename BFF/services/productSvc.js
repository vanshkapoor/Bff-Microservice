const { default: axios } = require("axios");
const { ProductSvcBaseUrl } = require("../config/apiconfig");

class ProductSvc {
    constructor(){
        this.url = ProductSvcBaseUrl;
        console.log(this.url);
    }

    async getAll(){
        console.log("URL: ", this.url);
        const response = await axios.get(`${this.url}/`);
        return response.data;
    }

    async findOne(id){
        const response = await axios.get(`${this.url}/${id}`);
        return response.data;
    }

    async createProduct(ProductName, ProductQuantity){
        const response = await axios.post(`${this.url}/`, {
            ProductName, ProductQuantity
        });
        return response.data;
    }

    async updateQuantity(ProductId, ProductQuantity){
        try {
            await axios.post(`${this.url}/${ProductId}/quantity`, {
                ProductQuantity
            });
            return;
        } catch(e) {
            throw new Error("Product quantity update failed")
        }
    }
}

module.exports = new ProductSvc();