import {useState, useEffect} from 'react'
import { FeaturedGames, FeaturedImage, FeaturedInfo} from './style'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

import Loading from '../loading'

import {getGameDetails} from '../../../api/request'

export default function Index({FeaturedGamesData}) {

  const [featuredData, setFeaturedData] = useState([])

  const ids = [FeaturedGamesData.data[0].id, FeaturedGamesData.data[1].id, FeaturedGamesData.data[2].id, FeaturedGamesData.data[3].id, FeaturedGamesData.data[4].id]

  useEffect(()=> {

    async function loadData(){
      var Data = []
      for(let i = 0; i <= ids.length; i++){
        if(ids[i]){
          const MakeRequest = await getGameDetails(ids[i])

          if(MakeRequest){
            Data = [...Data, MakeRequest]
            setFeaturedData(Data)
          }
        }      
    }
  }
    loadData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FeaturedGames>

      <h2>{FeaturedGamesData.Title}</h2>


      {featuredData.length >=5 ? (
        <Swiper
        speed={500}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
        >
        {console.log(featuredData)}
         
          {featuredData.map((Game, index) => (
             <SwiperSlide key={index}>
              <FeaturedImage imageURL={Game.screenshots[1].image}>
                <FeaturedInfo>
                  <h3>{Game.title}</h3>
                 
                  <button>See More</button>
                </FeaturedInfo>
              </FeaturedImage>
            </SwiperSlide>
          ))}

      </Swiper>
      ) : (
        <Loading/>
      )}   
     
    </FeaturedGames>
  )
}
