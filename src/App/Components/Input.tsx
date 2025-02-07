import {tv} from "tailwind-variants";

const inputVariants = tv({
	base: "rouded bg-gray-200 w-full px-1 py-0.4 outline-none",
});

const Input = () => {
	return (
		<div>
			<input 
				className={inputVariants.base }
				placeholder="Search...">
			</input>
		</div>
	);
} 


export default Input