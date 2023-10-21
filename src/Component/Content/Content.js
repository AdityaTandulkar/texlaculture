import React from 'react'
import './Content.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Companies from '../Companies/Companies';
import Supporttickets from '../Supporttickets/Supporttickets';
import Useradmins from '../Useradmins/Useradmins';



export default function Content() {
  return (
    <div id='content'>
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/companies' element={<Companies />}></Route>
            <Route path='/supporttickets' element={<Supporttickets />}></Route>
            <Route path='/useradmins' element={<Useradmins />}></Route>
        </Routes>
    </div>
  )
}
