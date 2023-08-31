import React from "react";
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Page_1 from "./components/page/page_1";
import Page_2 from "./components/page/page_2";
import Page_3 from "./components/page/page_3";


function App() {
  return (
      <div className='App'>
          <Routes>
              <Route path='/' element={<Page_1/>}/>
              <Route path='/page2' element={<Page_2/>}/>
              <Route path='/page3' element={<Page_3/>}/>
          </Routes>
      </div>
  );
}

export default App;
