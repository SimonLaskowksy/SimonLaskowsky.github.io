import './App.css';
import React,{useState} from 'react';

function App(prop) {
  let [isLight, setLight] = useState(true);
  let layout = "ciemny";
  if(isLight){ layout = "jasny"}
  return (
    <div className={layout}>
      <div className="portfolio">
        <a onClick={()=>{
          setLight(!isLight)
        }} href="">PORTFOLIO</a>
        <div className="menu">
          <div className="przycisk">
            <a href="#">glowna</a> 
          </div>
          <div className="przycisk">
            <a href="#">o mnie</a> 
          </div>
          <div className="przycisk">
            <a href="#">projekty</a> 
          </div>
          <div className="przycisk">
            <a href="#">kontakt</a> 
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="prawo">
          <div class="imie">{prop.name}</div>
          <div>{

          prop.opis.length >300 ? prop.opis.substring(0,300) + " " + "czytaj wiecej" : prop.opis
          
          }</div>
        </div>
        <div className="lewo">
          <img src={prop.imgSrc} alt="fotaelo"/>
        </div>
      </div>
    </div>
  );


}

export default App;
