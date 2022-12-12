import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import { Card } from './components/Card/Card';
import {Actions,ComedyMovies,HorrorMovies,originals} from '../src/urls'
import { Navbar } from './components/Header/Navbar';




function App() {
  return (
    <>
    <Navbar/>
    <Banner url={HorrorMovies}/>
    <Card url={originals} title='netflix Originals'/>
    <Card  url={Actions} title='Actions' isSmall/>
    <Card  url={ComedyMovies} title='Comedy' isSmall/>
    <Card  url={HorrorMovies} title='Horror Movies' isSmall/>
    
    </>
  );
}

export default App;
