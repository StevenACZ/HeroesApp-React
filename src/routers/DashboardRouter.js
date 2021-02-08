import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/heroe/:heroeId" component={ HeroScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRouter
