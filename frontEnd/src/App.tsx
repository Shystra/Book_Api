import { useState } from 'react'
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import { RouteApp } from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (

			<BrowserRouter>


				<RouteApp/>



			</BrowserRouter>




  );
}

export default App
