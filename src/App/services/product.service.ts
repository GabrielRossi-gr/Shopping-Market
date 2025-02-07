import http from "../../http-common"
import { ProductProps } from "../Interfaces/Product"

const findAll = async () => {
	 const response = await http.get<ProductProps[]>("products");
	 return response.data
}

const searchName = async (name: string) => {
	const response = await http.get<ProductProps[]>(`products?name=${name}`);
	return response.data
}



export default findAll