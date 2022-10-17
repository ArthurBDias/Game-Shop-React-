import {useState, useEffect} from 'react'
import { getGameDetails } from '../../../api/request'

import { PanelGame } from './style'

export default function Index({gameId}) {

    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(gameId)
            setGameData(Data)
        }

        loadData()
    }, [])

  return (
    <PanelGame>
        {gameData && (
            <div className='background'>
                {console.log(gameData)}
                <h2>Most Accessed:</h2>
            </div>
        )}
    </PanelGame>
  )
}
