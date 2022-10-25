import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getGameDetails, getCategoryGames } from '../../../api/request'

import { Exhibition, GameBillboard, BackImage, GameInformation, GameInfoCard, GameDesc, GameMinimumRequirements, GameScreenshots, ScreenshotImage} from './style'
import Loading from '../../layout/loading'
import Button from '../../layout/button'
import GamesRow from '../../layout/gamesRow'

import {FaAngleLeft} from 'react-icons/fa'

import ResrveBackground from '../../../assets/image/reserve-background.png'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'


export default function Index() {

    const {id} = useParams()

    const [gameData, setGameData] = useState()
    const [categoryGames, setCategoryGames] = useState([])


    useEffect(() => {
        async function loadData() {
            const GameData = await getGameDetails(id)
            setGameData(GameData)

            let CategoryData = await getCategoryGames(GameData.genre.toLowerCase().replace(' game', '').replace(' RPG', '').replace(' ', '-'))

            if(CategoryData){
                setCategoryGames({Title: `Games Like ${GameData.title}`, data: CategoryData})

            }else{
                CategoryData = await getCategoryGames('action')
                setCategoryGames({Title: `Games Like ${GameData.title}`, data: CategoryData})

            }
        }

        window.scrollTo(0, 0)
        loadData()
    }, [id])

  return (
    <Exhibition>
        
        <button onClick={() => {window.history.back()}} className='return' ><FaAngleLeft/></button>

        {gameData ? (
            <>
            <GameBillboard>

            <BackImage url={gameData.screenshots[gameData.screenshots.length - 1] ? gameData.screenshots[gameData.screenshots.length - 1].image : ResrveBackground}/>

                <GameInformation>
                   <GameInfoCard>
          
                        <h2>{gameData.title}</h2>


                        <img src={gameData.thumbnail} alt='Game Thumb'/>
                    
                        <p><b>Genre:</b> {gameData.genre}</p>

                        <p><b>Developer:</b> {gameData.developer}</p>

                        <p><b>Platform:</b> {gameData.platform}</p>

                        <p><b>Publisher:</b> {gameData.publisher}</p>

                        <p><b>Release Date:</b> {gameData.release_date}</p>

                        <div className='buttons'>
                            <Button text='Play Now' url={gameData.game_url}/>
                            <Button text='Interest List' color={'#4A27E3'}/>
                        </div>

                   </GameInfoCard>

                   <GameDesc>
                        <h2>More About {gameData.title}</h2>

                        <p>{gameData.description}</p>
                   </GameDesc>
                   
                </GameInformation>
                 
            </GameBillboard>

            <GameMinimumRequirements>
                <h2>Minimum System Requirements (Windows)</h2>

                <div className='flex_container'>
                    {gameData.platform === 'Windows' ? (
                        <>
                        <div className='colunm'>
                            <div className='requirements_info'>
                                <h3>Processor</h3>
                                <p>{gameData.minimum_system_requirements.processor}</p>
                            </div>

                            <div className='requirements_info'>
                                <h3>Memory</h3>
                                <p>{gameData.minimum_system_requirements.memory}</p>
                            </div>

                            <div className='requirements_info'>
                                <h3>Graphics</h3>
                                <p>{gameData.minimum_system_requirements.graphics}</p>
                            </div>
                        </div>

                        <div className='colunm'>
                            <div className='requirements_info'>
                                <h3>Operational System</h3>
                                <p>{gameData.minimum_system_requirements.os}</p>
                            </div>

                            <div className='requirements_info'>
                                <h3>Storage</h3>
                                <p>{gameData.minimum_system_requirements.storage}</p>
                            </div>

                            <div className='requirements_info'>
                                <h3>Additional Notes</h3>
                                <p>Specifications may change during development</p>
                            </div>
                        </div>
                        </>
                    ) : (
                        <>

                        <div className='browser_requirements'>
                            <p>Forge of Empires is a browser based game and should run smoothly on practically any PC with a updated web-browser.</p>
                            <p>If you have old hardware or software, you may still be able to play Forge of Empires, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Internet Explorer.</p>
                        </div>

                        </>
                    )}

                    
                   
                </div>

            </GameMinimumRequirements>


            {gameData.screenshots.length >= 1 && (
                <GameScreenshots>
                    <h2>Screenshots: </h2>

                    <Swiper
                     speed={500}
                     modules={[Navigation]}
                     navigation
                    >
                        {gameData.screenshots.map((screenshot, index) => (
                          <SwiperSlide key={index}>
                              <ScreenshotImage url={screenshot.image}>

                            </ScreenshotImage>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                </GameScreenshots>
            )}

            {categoryGames.data ? (
                <div>
                    <GamesRow gamesData={categoryGames} gameId={gameData.id}/>
                </div>
            ) :
            (<></>)}

         
            </>

        ) : (

            <Loading/>
        )}
    </Exhibition>
  )
}
