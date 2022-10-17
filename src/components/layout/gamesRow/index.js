import React from 'react'
import { GamesRow} from './style'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import GameCard from '../gameCard'

export default function Index({gamesData}) {

    const gameRowData = gamesData.data.filter((game, index)=> {
        if(index <= 21) {
            return game
        }
    })

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
