import React, {useContext, useState, useEffect} from 'react'


import ToggleThemeContext from '../../../contexts/ToggleThemeContext'
import { AuthContext } from '../../../contexts/AuthUserContext'

import {Header, IconContainer, NavigateContainer, ProfileContainer, MobileMenu, Cart} from './style'
import { Link, Navigate } from 'react-router-dom'
import ErrorMessage from '../errorMessage'

import './styles.css'

import {FaSearch, FaCartArrowDown} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {HiMenu} from 'react-icons/hi'


export default function Index() {

  const {toggleTheme} = useContext(ToggleThemeContext)

  const {isLogged, Logout, cart, RemoveItemCart, ClearCart} = useContext(AuthContext)

  const [cartItems, setCartItems] = useState()

  const [cartErrorVisible, setCartErrorVisible] = useState(false)

  const [widthState, setWidthState] = useState(2.5)

    const setView = () => {
        setWidthState(window.innerWidth)       
    }
    
    useEffect(() =>{
        setView()
    }, [])

    window.addEventListener('resize', setView)

    useEffect(() => {
      setCartItems(JSON.parse(cart))
    }, [cart])

    const VisibleCart = () =>{
      if(!isLogged){
        setCartErrorVisible(true)
      }
      else{
        document.querySelector('#cart').classList.toggle('active')
      }
    }

  return (
    <Header>
      <IconContainer>
          <h2 className='logo'><Link to='/'>Free to Fun</Link></h2>
      </IconContainer>

      { widthState >= 1125 ? (
        <>
        <NavigateContainer>
        <ul>
          <li onClick={() => {document.querySelector('.categories_menu').classList.toggle('active')}} className='categories'>
            <span >Categories</span>

            <ul className='categories_menu'>

              <Link to={'/categories/shooter'}>Shooter</Link>
              <Link to={'/categories/MMORPG'}>MMORPG</Link>
              <Link to={'/categories/card'}>Card Games</Link>
              <Link to={'/categories/fantasy'}>Fantasy</Link>
              <Link to={'/categories/strategy'}>Strategy</Link>
              <Link to={'/categories/anime'}>Anime</Link>
              <Link to={'/categories/moba'}>MOBA</Link>
              <Link to={'/categories/racing'}>Racing</Link>
              <Link to={'/categories/sports'}>Sports</Link>
              <Link to={'/categories/fighting'}>Fighting</Link>
              <Link to={'/categories/battle-royale'}>Battle Royale</Link>

              
            </ul>

          </li>
          <li><Link to={'/top'}>Top 2022</Link></li>
          <li><Link to={'/contact'}>Contact us</Link></li>
          <li onClick={() => {toggleTheme()}}>About us</li>
        </ul>
      </NavigateContainer>

      <ProfileContainer>

        {!isLogged ? (
          <Link to={'/login'} className='login_link'>Login</Link>
        ) : (
          <CgProfile onClick={() => Logout()}/>
        )}

        <Link to={'/search'}><FaSearch/></Link>

        <span className='cart'>
          <FaCartArrowDown onClick={VisibleCart}/>

          <Cart id='cart'>
 
              {isLogged ? (
                <>
                {cartItems.length >= 1 ? (
                <div className='cart_container'>
                  {cartItems.map((item) => (
                      <div className='cart_item'>
                        <Link to={`/exhibition/${item.id}`}>
                        <img src={item.thumb} alt='thumb'/>
                        <h3>{item.title}</h3>
                        </Link>

                        <button onClick={() => RemoveItemCart(item.id)}>Remove</button>
                      </div>
                  ))}
                  <button className='clear_cart' onClick={() => ClearCart()}>Clear Cart</button>
              </div>
              ) : (
                <p className='no_games_message'>There are no saved games</p>
              )} 
              </>
              ) : (
                <></>
              )}    
           
          </Cart>

        </span>

      </ProfileContainer>

        </>

      ) : (

      <MobileMenu>

      <HiMenu onClick={() => {document.querySelector('.menu_mobile').classList.toggle('active')}}/>

      <div className='menu_mobile'>
          <NavigateContainer>
              <ul>
                <li onClick={() => {document.querySelector('.categories_menu').classList.toggle('active')}} className='categories'>
                  <span >Categories</span>

                    <ul className='categories_menu'>

                      <Link to={'/categories/shooter'}>Shooter</Link>
                      <Link to={'/categories/MMORPG'}>MMORPG</Link>
                      <Link to={'/categories/card'}>Card Games</Link>
                      <Link to={'/categories/fantasy'}>Fantasy</Link>
                      <Link to={'/categories/strategy'}>Strategy</Link>
                      <Link to={'/categories/anime'}>Anime</Link>
                      <Link to={'/categories/moba'}>MOBA</Link>
                      <Link to={'/categories/racing'}>Racing</Link>
                      <Link to={'/categories/sports'}>Sports</Link>
                      <Link to={'/categories/fighting'}>Fighting</Link>
                      <Link to={'/categories/battle-royale'}>Battle Royale</Link>

                      
                    </ul>

                </li>
                <li><Link to={'/top'}>Top 2022</Link></li>
                <li><Link to={'/contact'}>Contact us</Link></li>
                <li onClick={() => {toggleTheme()}}>About us</li>
              </ul>
          </NavigateContainer>

          <ProfileContainer>
              <Link to={'/search'}><FaSearch/></Link>

              <Link to={'/profile'}><CgProfile className='uper-size'/></Link>

              <span onClick={() => {document.querySelector('.cart_container').classList.toggle('active')}}><FaCartArrowDown/></span>
          </ProfileContainer>

      </div>
      </MobileMenu>
      )}


    <ErrorMessage title='Error' message={`User not logged in, Please create an account or login.`} visible={cartErrorVisible} setVisible={setCartErrorVisible} ActionButton={<Link to='/login' onClick={() => setCartErrorVisible(false)}>OK</Link>}/>

    </Header>
  )
}
