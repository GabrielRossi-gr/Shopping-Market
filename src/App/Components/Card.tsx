import { Product } from "../Interfaces/Product"
import Button from "./Button"

const Card = ({ item }:Product) => {
	return (
		<div className="bg-white p-4 w-60 rounded-2xl">
			
			<div className="">
				<img 
					// src={item.image}
					src="public/assets/ReactIcon.png"
					>
				</img>
			</div>

			<div className="px-2 py-3">
				<div className="flex justify-normal"> 
					<h3>{item.name}</h3>
				</div>

				<div className="flex justify-normal">
					<span>R$  {item.price}</span>
				</div>
			</div>

			<Button variant={"primary"}> 
				Adicionar no Carrinho
			</Button>
		</div>
	)
}

export default Card 