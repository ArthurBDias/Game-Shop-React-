import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { getCategoryGames } from '../../../api/request'

import { CategoryExhibition } from './style'
import GameList from '../../layout/gameList'
import Loading from '../../layout/loading'


export default function Index() {

    const {category} = useParams()

    const [categoryData, setCategoryData] = useState()

    window.scrollTo(0, 0)

    useEffect(() => {
        async function loadData(){
            const Data = await getCategoryGames(category)
            setCategoryData(Data)
        }

        loadData()
    } ,[category])


  return (
    <CategoryExhibition>
        {categoryData ? (
            <GameList gameList={categoryData} title='test'/>
        ) : (
            <Loading/>
        )}
    </CategoryExhibition>
  )
}
