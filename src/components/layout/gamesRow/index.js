import React from 'react'
import { GamesRow} from './style'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import GameCard from '../gameCard'

export default function Index({gamesData, gameId}) {

    const gameRowGames = gamesData.data.filter((game, index) => {
        if(index <= 21 && game.id !== gameId) {
            return game
        }
        return null
    })

    function shuffleArray(arr) {
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

    const gameRowData = shuffleArray(gameRowGames)

  return (
    <GamesRow>
        <h2>{gamesData.Title}</h2>


        <Swiper
        slidesPerGroup={2}
        slidesPerView={4}
        speed={500}
        modules={[Navigation]}
        navigation
        >
            {gameRowData.map( (game, index)=> (
                <SwiperSlide key={index}>

                    <GameCard id={game.id} thumb={game.thumbnail} title={game.title} platform={game.platform}/>

                </SwiperSlide>
            ))}
        </Swiper>
    </GamesRow>
  )
}
