import {useEffect, useState} from 'react'
import { TopYearContainer } from './style'
import GameLine from '../../layout/gameCardLine/'

export default function Index({popularGames}) {

    const [currentPages, setCurrentPages] = useState(1)

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log('foi')
                    setTimeout(() => {
                    setCurrentPages((currentPageInState) => currentPageInState + 1)
                    }, 100)
                }
            })
        })

        window.scrollTo(0, 0)

        Observer.observe(document.querySelector('div#sentinel'))

        return () => Observer.disconnect()
    }, [])


    useEffect(() => {}, [])

    if(popularGames.data) {
        var popularGamesFiltered = popularGames.data.filter((game, index) => {
            if (index < currentPages * 10){
                return game
            }
    
            return null
        })
    }

  return (
    <TopYearContainer>

            <h1>Top Free To Play Games for PC and Browser in October 2022</h1>
            <p>Below, you can find our ongoing Top Free To Play Games in October 2022. Our ranking is based on our users preferences during this calendar month and all results are updated daily. You can also use the menu to explore even more Top 10's for your favorite platforms.</p>
            <div className='line'></div>

            {popularGamesFiltered && (
                <>
                    {popularGamesFiltered.map((game, index) => (
                        <span key={index}>
                            {index <= 29 && (
                                <GameLine gameData={game} number={index + 1} key={index}/>
                            )}
                        </span>
                        ))}
                </>
            )}
            <div id='sentinel'></div>

    </TopYearContainer>
  )
}
