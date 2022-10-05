import React, {useContext} from 'react'
import ToggleThemeContext from '../contexts/ToggleThemeContext'

export default function Test() {

    const {toggleTheme} = useContext(ToggleThemeContext)
    
  return (
    <div onClick={() => {toggleTheme()}}>test</div>
  )
}

