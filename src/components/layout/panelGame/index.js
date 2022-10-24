import {useState, useEffect} from 'react'
import { getGameDetails } from '../../../api/request'

import { PanelGame, Background, GameInfo } from './style'
import Button from '../button'

import {Link} from 'react-router-dom'

import {MdMonitor} from 'react-icons/md'
import {FaChrome} from 'react-icons/fa'

export default function Index({gameId}) {

    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(gameId)
            setGameData(Data)
        }

        loadData()
    }, [gameId])

  return (
    <PanelGame>
        {gameData && (
            <Background url={gameData.screenshots[0].image}>
                
                <GameInfo>

                    <h3>{gameData.title}</h3>

                    <p className='desc'>{gameData.description}</p>

                    <p><b>Platform</b> <br/> {gameData.platform} {gameData.platform === "Windows" ? (<MdMonitor/>): (<FaChrome/>)}</p>
                    
                    <p><b>Genre</b> <br/> {gameData.genre}, Developer: {gameData.developer}</p>

                    <p><b>Release Date</b> <br/> {gameData.release_date}</p>

                    <Button text='Play Now' url={gameData.game_url}/>

                    <Button text='Interest List' color={'#4A27E3'}/>

                    <Link to={`/exhibition/${gameData.id}`}>
                        <img src={gameData.thumbnail} alt='Game Thumb'/>
                    </Link>

                </GameInfo>
            </Background>
        )}
    </PanelGame>
  )
}
//interest list 

