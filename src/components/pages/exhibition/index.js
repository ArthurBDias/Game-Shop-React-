import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getGameDetails } from '../../../api/request'

import { Exhibition } from './style'
import Loading from '../../layout/loading'

export default function Index() {

    const {id} = useParams()

    const [gameData, setGameData] = useState()

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(id)
            setGameData(Data)
        }


        loadData()
    }, [id])

  return (
    <Exhibition>
        {gameData ? (
            <div>
            <h1>{gameData.title}</h1>
            <button onClick={() => {window.history.back()}}>Go back</button>
            </div>

        ) : (

            <Loading/>

        )}
    </Exhibition>
  )
}
