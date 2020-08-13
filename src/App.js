import React, {useState, useEffect} from "react";
import "./App.css";
import PhotoDetail from './PhotoDetail'
import axios from 'axios'




 function App() {
  
  const [photoDay, setphotoDay] = useState([]);
  const [PhotoDayFull, setphotoDayFull] = useState([])

  

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=58bwGTwMVgC02X0bACatqRmFJNhYiuMn3cVpDNfD&date=2012-03-14')
    .then (res => {
      setphotoDay(res.data)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
    .finally( () => {
    })
  },[])

  const Header = ({data}) => (
    <div className = 'header'>
      <h2> 
        <button>-</button> 
        {data.date} 
        <button>+</button> 
      </h2>
      <h3>
        {data.title}
      </h3>
    </div>
  )

  return (
    <div className="App">
      <h1>
      Astronomy Picture of the Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      {
        <Header data={photoDay} />
      }
      <div>
        <img src={photoDay.hdurl} alt='nasa'></img>
        {
           <PhotoDetail PhotoDayFull= {photoDay} />
        }
      </div>
    </div>
  );
}
// function  close(props){
//   return <div>
//     <p>{props.explanation}</p>
//     </div>
// }
export default App;
