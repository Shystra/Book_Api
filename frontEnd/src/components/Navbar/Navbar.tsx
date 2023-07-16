// import './Navbar.module.css';
// import { Link, useNavigate } from 'react-router-dom';
import teste from '../../assets/teste.png';
import {BiSearchAlt2} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Navbar.css';

export const Navbar = () => {

	return(

		<nav className='app__navbar'>
				<div className='app__navbar-logo'>
					<img src={teste} alt='app logo'/>
				</div>

				<ul className='app__navbar-links'>
					<li className='p__cormorant'>Books<a href='#books'></a></li>
						<li className='p__cormorant'>Authors<a href='#authors'></a></li>
							<li className='p__cormorant'>What to Read?<a href='#to_read'></a></li>
						<li className='p__cormorant'>Gift Ideas<a href='#gift_ideas'></a></li>
					<li className='p__cormorant'>About Us<a href='#about_us'></a></li>
				</ul>
				<div className='app__navbar-links_icons'>
					<a href='' target='_blank' rel='noopener'><BiSearchAlt2/></a>
					<a href='' target='_blank' rel='noopener'><BsBookmark/></a>
					<a href='' target='_blank' rel='noopener'><AiOutlineShoppingCart/></a>

				</div>

			</nav>













	)

}





