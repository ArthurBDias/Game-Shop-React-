import React from 'react'
import FeaturedGames from '../../layout/featuredGames'
import { Home } from './style'

export default function index({gameData}) {
  return (
    <Home>
      <FeaturedGames FeaturedGamesData={gameData[5]}/>
    </Home>
  )
}
