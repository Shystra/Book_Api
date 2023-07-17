// import './Navbar.module.css';
// import { Link, useNavigate } from 'react-router-dom';
import teste from '../../assets/teste.png';
import {BiSearchAlt2} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'

import './Navbar.css';
import { Header } from '../Header/Header';

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return(

		<nav className='app__navbar'>
				<div className='app__navbar-logo'>
					<img src={teste} alt='app logo'/>
				</div>

				<ul className='app__navbar-links'>
					<li className='p__cormorant'><a href='#books'>Books</a></li>
						<li className='p__cormorant'><a href='#authors'>Authors</a></li>
							<li className='p__cormorant'><a href='#to_read'>What to Read?</a></li>
						<li className='p__cormorant'><a href='#gift_ideas'>Gift Ideas</a></li>
					<li className='p__cormorant'><a href='#about_us'>About Us</a></li>
				</ul>
				<div className='app__navbar-links_icons'>
					<a href='' target='_blank' rel='noopener'><BiSearchAlt2/></a>
					<a href='' target='_blank' rel='noopener'><BsBookmark/></a>
					<a href='' target='_blank' rel='noopener'><AiOutlineShoppingCart/></a>

				</div>
				<button className='app__navbar-links_login'>Login</button>

				<div className='app__navbar-smallscreen'>
      <GiHamburgerMenu
      color="#fff"
      fontSize={27}
      onClick={() => setToggleMenu(true)}/>

    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <CgClose
      fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
       <ul className='app__navbar-smallscreen_links'>
        <li className='p__cormorant'><a  href='#books'  onClick={() => setToggleMenu(false)}>Books</a></li>

        <li className='p__cormorant'><a href='#authors' onClick={() => setToggleMenu(false)}>Authors</a></li>

        <li className='p__cormorant'><a href='#to_read' onClick={() => setToggleMenu(false)}>What to Read?</a></li>

        <li className='p__cormorant'><a href='#gift_ideas' onClick={() => setToggleMenu(false)}>Gift Ideas</a></li>

        <li className='p__cormorant'><a href='#about_us' onClick={() => setToggleMenu(false)}>About Us</a></li>


      </ul>
    </div>
    )}

				</div>
		
			</nav>
 













	)

}





