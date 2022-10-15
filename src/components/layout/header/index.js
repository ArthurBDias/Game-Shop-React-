import React from 'react'
import {Header, IconContainer, NavigateContainer, ProfileContainer} from './style'
import { Link } from 'react-router-dom'

import './styles.css'

import {FaSearch, FaCartArrowDown} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'


export default function index() {
  return (
    <Header>
      <IconContainer>
          <h2 className='logo'><Link to='/'>Free to Fun</Link></h2>
      </IconContainer>

      <NavigateContainer>
        <ul>
          <li>Categories</li>
          <li>Top 2022</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </NavigateContainer>

      <ProfileContainer>
        <Link to={''}><FaSearch/></Link>

        <Link to={''}><CgProfile className='uper-size'/></Link>

        <span><FaCartArrowDown/></span>
      </ProfileContainer>
    </Header>
  )
}
