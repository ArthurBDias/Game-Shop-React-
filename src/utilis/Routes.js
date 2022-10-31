import {Routes, Route, Navigate} from 'react-router-dom'
import {useContext} from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Main from '../components/layout/main'

import Home from '../components/pages/home'
import GameExhibition from '../components/pages/gameExhibition'
import CategoryExhibition from '../components/pages/categoryExhibition'
import TopYear from '../components/pages/topYear'
import Contact from '../components/pages/contactUs'
import Search from '../components/pages/search'
import Profile from '../components/pages/profile'
import Login from '../components/pages/login'

import Loading from '../components/layout/loading'

import {AuthContext} from '../contexts/AuthUserContext';

export default function RoutesElements({gameData}) {

    const { isLogged, loading} = useContext(AuthContext)

    const Private = ({children}) => {
        if(loading){
            return <Loading/>
        }

        if(!isLogged){
            return <Navigate to='/login'/>
        }

        return children
    }  

  return (
    <>
        {gameData ? (
            <>
                <Header>
        
                </Header>
        
                <Main>
                    <Routes>

                        <Route path={'/'} element={<Home gameData={gameData}/>}/>
                        <Route path={'/exhibition/:id'} element={<GameExhibition/>}/>
                        <Route path={'/categories/:category'} element={<CategoryExhibition/>}/>
                        <Route path={'/top'} element={<TopYear popularGames={gameData[5]}/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/search'} element={<Search/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/profile'} element={<Private><Profile/></Private>}/>

                    </Routes>
                </Main>
        
                <Footer>
        
                </Footer>
            </>
        ) :
        
        (
            <Loading/>
        )}
    </>
  )
}
