import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import * as ReactDOM from "react-dom/client";
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route,} from "react-router-dom";

export default function App () {

  const [darkmodenav,setdarkmodenav]= useState("bg-white")
  const [darkmodecards,setdarkmodecards]= useState("")
  const [searchedtext,setsearchedtext]= useState("")
  const [progress,setprogress]= useState(0)

  const handledarkmode = () => {
    if (darkmodenav === "bg-white") {
        setdarkmodenav("navbar-dark bg-dark")
        setdarkmodecards("bg-dark text-white")
      document.body.style.backgroundColor = "#2c3e50";
    } else {
      setdarkmodenav("bg-white")
        setdarkmodecards("")
      document.body.style.backgroundColor = "white";
    }
  };
  const apikey=process.env.REACT_APP_NEWS_API

  const handlesearchvalue = (event) => {
    setsearchedtext(event.target.value)
  }
   const setProgress=(prog)=>{
    setprogress(prog)
   }


    return (
      <div>
        <div style={{overflow:'visible', width:'100vw'}}>
          <BrowserRouter>
          <LoadingBar color='#f11946' progress={progress} height={3} />
          <Navbar
          darkmode={handledarkmode}
          navblack={darkmodenav}
          handlesearch={handlesearchvalue}
          searchedvalue={searchedtext}
        />
           <Routes>
          <Route path='/' element={<News key={"jtgf"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} headline={""} />} />
          <Route path='/business' element={<News key={"yif"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} category={'business'} headline={" Business"} />} />
          <Route path='/sports' element={<News key={"68r6"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} category={'sports'} headline={" Sports"} />} />
          <Route path='/entertainment' element={<News key={"97t87r"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} category={'entertainment'} headline={" Entertainment"} />} />
          <Route path='/science' element={<News key={"976t597"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} category={'science'} headline={" Science"} />} />
          <Route path='/technology' element={<News key={"6r6"} apikey={apikey} progress={setProgress} krdeblackcard={darkmodecards} category={'technology'} headline={" Technology"} />} />
        </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
}
