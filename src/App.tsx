import {createBrowserRouter, RouterProvider} from "react-router-dom"

import  Header from "./App/Components/Header";
import Home from "./App/View/Home";

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Header/>
					<Home/>
				</>
				
			)
	}])

  return (
		<div className="flex justify-center items-center bg-gray-200 h-screen">
			<RouterProvider router={route}></RouterProvider>
		</div>

	);
}

export default App
