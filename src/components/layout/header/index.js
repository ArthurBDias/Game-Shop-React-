import React, {useContext, useState, useEffect} from 'react'
import ToggleThemeContext from '../../../contexts/ToggleThemeContext'
import {Header, IconContainer, NavigateContainer, ProfileContainer, MobileMenu} from './style'
import { Link } from 'react-router-dom'

import './styles.css'

import {FaSearch, FaCartArrowDown} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {HiMenu} from 'react-icons/hi'


export default function Index() {

  const {toggleTheme} = useContext(ToggleThemeContext)

  const [widthState, setWidthState] = useState(2.5)

    const setView = () => {
        setWidthState(window.innerWidth)       
    }
    
    useEffect(() =>{
        setView()
    }, [])

    window.addEventListener('resize', setView)



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
        <Link to={'/search'}><FaSearch/></Link>

        <Link to={'/profile'}><CgProfile className='uper-size'/></Link>

        <span><FaCartArrowDown/></span>
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

              <span><FaCartArrowDown/></span>
          </ProfileContainer>

      </div>
      </MobileMenu>
      )}




      

    </Header>
  )
}
