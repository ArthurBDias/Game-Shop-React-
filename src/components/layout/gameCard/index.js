import React from 'react'
import { GameCard} from './style'
import { Link } from 'react-router-dom'

export default function Index({id, thumb, title}) {
  return (
    <GameCard>
        <Link to={`/exhibition/${id}`}>
            <img src={thumb} alt=''/>
            <h3>{title}</h3>
        </Link>
    </GameCard>
  )
}
