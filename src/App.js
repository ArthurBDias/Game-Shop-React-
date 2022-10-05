import requestData from './api/request'
import {useEffect, useState} from 'react'
import usePersistenceState from './utilis/usePersistenceState';

import GlobalStyle from './assets/style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import ToggleThemeContext from './contexts/ToggleThemeContext';
import dark from './assets/style/themes/dark'
import light from './assets/style/themes/light'

import Test from './components/test';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
    const MakeRequest =  await requestData.MovieData()
    if(MakeRequest){
      console.log(MakeRequest)
    }}
    loadData()

  }, [])

  let darkThemeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [theme, setTheme] = usePersistenceState('theme', darkThemeSystem ? dark : light)
  const toggleTheme = () => theme.title==='dark' ? setTheme(light) : setTheme(dark)

  return (
    <>
      <ToggleThemeContext.Provider value={{toggleTheme, theme}}>
        <ThemeProvider theme={theme}>

          <GlobalStyle/>
    <Test/>
        </ThemeProvider>
      </ToggleThemeContext.Provider>
    </>
  );
}

export default App;
