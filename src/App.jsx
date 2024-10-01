import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Leftmenu from './left-menu'
import Rightmenu from './right-menu'
import Center from './center'
import CreatePost from './create';
import Videos from './videos';


function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/instagram' element={
        <div className='home'>
      <Leftmenu />
      <Center />
      <Rightmenu />
      </div>}/>
      <Route path='/create' element={
       <div className='home'>
      <Leftmenu />
      <CreatePost />
      <Rightmenu />
       </div>
      } />
        <Route path='/videos' element={
       <div className='home'>
      <Leftmenu />
      <Videos />
      <Rightmenu />
       </div>
      } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
