import { Main } from './style'
import { useContext } from 'react'
import {AuthContext} from '../../../contexts/AuthUserContext'
import { useEffect } from 'react'

export default function Index({children}) {

  const {cart, AddCart} = useContext(AuthContext)

    useEffect(() => {
      AddCart({
        title:'teste',
        id: '511'
      })
      console.log(cart)
      
    }, [])
  

  return (
    <Main>{children}</Main>
  )
}
