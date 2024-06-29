const ProductSvcBaseUrl = `${process.env.PRODUCT_SVC_BASE_URL}/api/v1/products` || "http://localhost:3001/api/v1/products";
const OrderSvcBaseUrl = `${process.env.ORDER_SVC_BASE_URL}/api/v1/orders` || "http://localhost:3002/api/v1/orders";

module.exports = {
    ProductSvcBaseUrl,
    OrderSvcBaseUrl
}