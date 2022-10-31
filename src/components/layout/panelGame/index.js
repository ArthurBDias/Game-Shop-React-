import {useState, useEffect, useContext} from 'react'
import { getGameDetails } from '../../../api/request'

import { PanelGame, Background, GameInfo } from './style'
import Button from '../button'

import {Link} from 'react-router-dom'

import {MdMonitor} from 'react-icons/md'
import {FaChrome} from 'react-icons/fa'

import { AuthContext } from '../../../contexts/AuthUserContext'

export default function Index({gameId}) {

  const {cart, AddCart} = useContext(AuthContext)


    function ItemCart() {
        console.log('foi')
        AddCart({
            title:'teste',
            id: '511'
          })
          console.log(cart)
    }

    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(gameId)
            setGameData(Data)
        }

        loadData()
    }, [gameId])

  return (
    <PanelGame onClick={ItemCart}>
        {gameData && (
            <Background url={gameData.screenshots[0].image}>
                
                <GameInfo>

                    <h3>{gameData.title}</h3>

                    <Link to={`/exhibition/${gameData.id}`}>
                        <img src={gameData.thumbnail} alt='Game Thumb'/>
                    </Link>

                    <p className='desc'>{gameData.description}</p>

                    <p><span>Platform</span> {gameData.platform} {gameData.platform === "Windows" ? (<MdMonitor/>): (<FaChrome/>)}</p>
                    
                    <p><span>Genre</span> {gameData.genre}</p>

                    <p><span>Developer</span> {gameData.developer}</p>

                    <p><span>Release Date</span> {gameData.release_date}</p>

                    <div className='buttons'>
                        <Button text='Play Now' url={gameData.game_url}/>

                        <Button text='Interest List' color={'#4A27E3'} type='internal'/>
                    </div>

                   

                </GameInfo>
            </Background>
        )}
    </PanelGame>
  )
}
//interest list 

