import React from "react";
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Page_1 from "./components/page/page_1";
import Page_2 from "./components/page/page_2";
import Page_3 from "./components/page/page_3";
import Page_4 from "./components/page/page_4";
import Page_5 from "./components/page/page_5";
import Page from "./components/page/page";


function App() {
  return (
      <div className='App'>
          <Routes>
              <Route path='/' element={<Page_1/>}/>
              <Route path='/page' element={<Page/>}/>
              <Route path='/page2' element={<Page_2/>}/>
              <Route path='/page3' element={<Page_3/>}/>
              <Route path='/page4' element={<Page_4/>}/>
              <Route path='/page5' element={<Page_5/>}/>
          </Routes>
      </div>
  );
}

export default App;
