import React, {useContext} from 'react'
import ToggleThemeContext from '../../../contexts/ToggleThemeContext'
import {Header, IconContainer, NavigateContainer, ProfileContainer} from './style'
import { Link } from 'react-router-dom'

import './styles.css'

import {FaSearch, FaCartArrowDown} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'


export default function Index() {

  const {toggleTheme} = useContext(ToggleThemeContext)


  return (
    <Header>
      <IconContainer>
          <h2 className='logo'><Link to='/'>Free to Fun</Link></h2>
      </IconContainer>

      <NavigateContainer>
        <ul>
          <li onClick={() => {document.querySelector('.categories_menu').classList.toggle('active')}} className='categories'>
            <span >Categories</span>

            <ul className='categories_menu'>

              <Link to={'/categories/shooter'}>Shooter</Link>
              <Link to={'/categories/mmorpg'}>MMORPG</Link>
              <Link to={'/categories/card'}>Card Games</Link>
              <Link to={'/categories/fantasy'}>Fantasy</Link>
              <Link to={'/categories/strategy'}>Strategy</Link>
              <Link to={'/categories/Anime'}>Anime</Link>
              <Link to={'/categories/moba'}>MOBA</Link>
              <Link to={'/categories/racing'}>Racing</Link>
              <Link to={'/categories/sports'}>Sports</Link>
              <Link to={'/categories/fighting'}>Fighting</Link>
              <Link to={'/categories/battle-royale'}>Battle Royale</Link>

              
            </ul>

          </li>
          <li onClick={() => {toggleTheme()}}>Top 2022</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </NavigateContainer>

      <ProfileContainer>
        <Link to={'/search'}><FaSearch/></Link>

        <Link to={''}><CgProfile className='uper-size'/></Link>

        <span><FaCartArrowDown/></span>
      </ProfileContainer>
    </Header>
  )
}
