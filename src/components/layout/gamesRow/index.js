import {useState, useEffect} from 'react'
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

    const [itemsPerView, setItemsPerView] = useState(0)

    const setView = () => {
        if(window.innerWidth >= 1920){
            setItemsPerView(4.5)
        }
        else if(window.innerWidth >= 1600){
            setItemsPerView(4)
        }
        else if(window.innerWidth >= 950){
            setItemsPerView(3.5)
        }

        else if(window.innerWidth >= 768){
            setItemsPerView(3)
        }

        else if(window.innerWidth >= 460){
            setItemsPerView(2.5)
        }

        else{
            setItemsPerView(2)
        }
        
    }
    
    useEffect(() =>{
        setView()
    }, [])

    window.addEventListener('resize', setView)

  return (
    <GamesRow>
        <h2>{gamesData.Title}</h2>


        <Swiper
        slidesPerGroup={2}
        slidesPerView={itemsPerView}
        speed={500}
        modules={[Navigation]}
        navigation={itemsPerView > 3 ? true : false}  
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
