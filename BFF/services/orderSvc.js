const { default: axios } = require("axios");
const { OrderSvcBaseUrl } = require("../config/apiconfig");

class OrderSvc {
    constructor(){
        this.url = OrderSvcBaseUrl
        console.log(this.url);
    }

    async getAll(){
        console.log(this.url);
        const response = await axios.get(`${this.url}/`);
        return response.data;
    }

    async findOne(id){
        const response = await axios.get(`${this.url}/${id}`);
        return response.data;
    }

    async createOrder(ProductId, UserId, Quantity, Cost){
        try{
            const response = await axios.post(`${this.url}/`, {
                ProductId, UserId, Quantity, Cost
            });
            return response.data;
        } catch (e) {
            throw new Error("Unable to create order")
        }
    }

    async deleteOrder(){
        const response = await axios.delete(`${this.url}/`);
        return response;
    }
}

module.exports = new OrderSvc();