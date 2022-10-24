import React from 'react'
import { GameLineContainer, GameLine } from './style'

export default function Index({gameData, number}) {
  return (
    <GameLineContainer>
        {gameData && (
            <GameLine>
                <div>
                    <h3>{number}</h3>
                    <img src={gameData.thumbnail} alt='thumb'/>
                </div>

                <div>
                    <h2>{gameData.title}</h2>
                    <p>{gameData.short_description}</p>
                </div>

            </GameLine>
        )}
    </GameLineContainer>
  )
}
