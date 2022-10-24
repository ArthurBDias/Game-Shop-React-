import React from 'react'
import { TopYearContainer } from './style'
import GameLine from '../../layout/gameCardLine/'

export default function index({popularGames}) {
    console.log(popularGames)
  return (
    <TopYearContainer>

            <h1>Top Free To Play Games for PC and Browser in October 2022</h1>
            <p>Below, you can find our ongoing Top Free To Play Games in October 2022. Our ranking is based on our users preferences during this calendar month and all results are updated daily. You can also use the menu to explore even more Top 10's for your favorite platforms.</p>
            <div className='line'></div>

            {popularGames.data && (
                <>
                    {popularGames.data.map((game, index) => (
                        <>
                            {index <= 9 && (
                                <GameLine gameData={game} number={index + 1} />
                            )}
                        </>
                    ))}
                </>
            )}
    </TopYearContainer>
  )
}
