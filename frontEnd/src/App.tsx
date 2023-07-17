
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import { RouteApp } from './routes';
import './index.css'
import { Header } from './page/Header/Header';

function App() {
  

  return (

			<BrowserRouter>


				  <RouteApp/>
				  <Header/>
				  



			</BrowserRouter>




  );
}

export default App
