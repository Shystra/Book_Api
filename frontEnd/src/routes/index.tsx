import {Route, Routes} from 'react-router-dom'
import { Home } from '../page/Home/Home'






export const RouteApp = () => {

	return(
				<Routes>
					<Route path='/' element={<Home/>} />









				</Routes>
	)
}
