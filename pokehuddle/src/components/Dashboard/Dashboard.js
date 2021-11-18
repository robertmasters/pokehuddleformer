import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SideBar from './SideBar'
import Home from '../Pages/Home'
import FavoritePokemon from '../Pages/FavoritePokemon'
import Leaderboards from '../Pages/Leaderboards'
import PersonalNotes from '../Pages/PersonalNotes'
import Photos from '../Pages/Photos'
import Research from '../Pages/Research';
import './DashboardStyles/Dashboard.css'
import Header from '../LoginRegister/Header';

function Dashboard() {

    return (
        <div className= "dash-container">
            <Header />

            <div className= "center-content">
                <div className= "sidebar">
                    <SideBar />
                </div>
                <Switch>
                    <Route path = '/test/home' component = {Home} />
                    <Route path = '/test/research' component = {Research} />
                    <Route path = '/test/favoritepokemon' component = {FavoritePokemon} />
                    <Route path = '/test/leaderboards' component = {Leaderboards} />
                    <Route path = '/test/personalnotes' component = {PersonalNotes} />
                    <Route path = '/test/photos' component = {Photos} />
                    <Route component = {Home} />
                </Switch>
            </div>
        </div>
    );
}

export default Dashboard;
