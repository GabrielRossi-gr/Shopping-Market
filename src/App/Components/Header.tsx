import Input from "./Input";

const Header = () => {
	return(
		<header className="flex fixed justify-center top-0 right-0 w-full bg-white h-[52px]">
			<div className="flex items-center justify-between w-11/12">
				<div>
					<a href="/">
						<img
							className="w-10 h-9"
							src="public/assets/ReactIcon.png"
							alt="Company Logo"
						>

						</img>
					</a>
				</div>
				<div className="w-4/5">
					<Input/>
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};


export default Header;