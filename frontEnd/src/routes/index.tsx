import {Route, Routes} from 'react-router-dom';


import { Header } from '../page/Header/Header';
import { Navbar } from '../page/Navbar/Navbar';






export const RouteApp = () => {

	return(
				<Routes>
					<Route path='/' element={<Navbar/>} />
					{/* <Route path='/header' element={<Header/>}/> */}
					
					{/* <Route path='/hero-text' element={<Header/>}/> */}









				</Routes>
				
	)
}
