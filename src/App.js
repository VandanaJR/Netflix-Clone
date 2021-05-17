import React from 'react'
import {Switch , Route } from 'react-router-dom'
import './App.css'
import SideNav from './component/sidenav/sidenav'
import MobileNav from './component/mobile-nav/mobile-nav'
import HomePage from './pages/homepage/homepage'
import MoviesPage from './pages/moviespage/moviespage'
import SeriesPage from './pages/seriespage/seriespage'
import DetailsPage from './pages/detailspage/detailspage'
import SearchPage from './pages/searchpage/searchpage'



function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      
      <Switch>
        <Route exact path='/'component={HomePage}/>
        <Route exact path='/movies' component={MoviesPage}/>
        <Route exact path='/series' component={SeriesPage}/>
        <Route exact path='/search' component={SearchPage}/>
        <Route path='/' component={DetailsPage}/>
      </Switch>
      <MobileNav></MobileNav>
    </div>
  );
}

export default App;

