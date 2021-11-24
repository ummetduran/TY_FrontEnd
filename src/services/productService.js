import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:4445/product")
    }
    getProductById(productId){
        return axios.get("http://localhost:4445/product/"+productId)
    }

}