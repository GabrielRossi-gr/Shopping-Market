import { useEffect } from "react";
import Card from "../Components/Card";
import findAll from "../services/product.service";
import {useQuery} from "react-query"
import { ProductProps } from "../Interfaces/Product";
const Home = () => {

	// useEffect(() => {
	// 	findAll().then((res) => console.log(res))
	// })

	const { 
		data: products,
		error,
		isLoading,
		 
	} = useQuery<ProductProps[], Error>("queryProducts", async() => {
		return await findAll()
	})

	return (
		<div className="h-full w-full flex flex-col items-center justify-center gap-16">
			<div className="grid w-11/12 grid-cols-4 gap-4 overflow-x-auto pt-[75px] pb-[30px]">
				{products?.map((product: ProductProps) => {
					return(
						<Card key={product.id} item={product}/>
					)
				})}
			</div>
		</div>
	);
}

export default Home