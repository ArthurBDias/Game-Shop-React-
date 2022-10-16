import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Main from '../components/layout/main'

import Home from '../components/pages/home'
import Exhibition from '../components/pages/exhibition'

import Loading from '../components/layout/loading'


export default function RoutesElements({gameData}) {
/* 
    const Private = (element) => {
        if(true){
            return element
        }

        return 'rota privada'
    } */

  return (
    <>
        {gameData ? (
            <Router>
                <Header>
        
                </Header>
        
                <Main>
                    <Routes>
                        <Route path={'/'} element={<Home gameData={gameData}/>}/>
                        <Route path={'/exhibition/:id'} element={<Exhibition/>}/>

                    </Routes>
                </Main>
        
                <Footer>
        
                </Footer>
            </Router>
        ) :
        
        (
            <Loading/>
        )}
    </>
  )
}
