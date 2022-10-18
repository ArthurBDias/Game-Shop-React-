import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getGameDetails } from '../../../api/request'

import { Exhibition, GameBillboard, BackImage, GameInformation, GameInfoCard, GameDesc} from './style'
import Loading from '../../layout/loading'
import Button from '../../layout/button'

import {FaAngleLeft} from 'react-icons/fa'

export default function Index() {

    const {id} = useParams()

    const [gameData, setGameData] = useState()

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(id)
            setGameData(Data)
        }

        window.scrollTo(0, 0)
        loadData()
    }, [id])

  return (
    <Exhibition>
        
        <button onClick={() => {window.history.back()}} className='return' ><FaAngleLeft/></button>

        {gameData ? (
            <GameBillboard>

            <BackImage url={gameData.screenshots[gameData.screenshots.length - 1] ? gameData.screenshots[gameData.screenshots.length - 1].image : ''}/>

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

        ) : (

            <Loading/>
        )}
    </Exhibition>
  )
}
