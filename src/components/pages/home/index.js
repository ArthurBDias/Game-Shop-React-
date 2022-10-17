import React from 'react'
import { Home } from './style'

import GamesRow from '../../layout/gamesRow'
import FeaturedGames from '../../layout/featuredGames'
import PanelGame from '../../layout/panelGame'

import Loading from '../../layout/loading'


export default function index({gameData}) {
  return (
   <>
    {gameData ? (
       <Home>
    
        <FeaturedGames FeaturedGamesData={gameData[5]}/>
  
        <GamesRow gamesData={gameData[0]}/>
  
        <GamesRow gamesData={gameData[1]}/>

        <PanelGame gameId={gameData[5].data[6].id}/>
  
        <GamesRow gamesData={gameData[2]}/>
  
        <GamesRow gamesData={gameData[3]}/>
  
        <GamesRow gamesData={gameData[4]}/>
 
     </Home>

    ) : (
      <Loading/>
    )}
   </>
  )
}
