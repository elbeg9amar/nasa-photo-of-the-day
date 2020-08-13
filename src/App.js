import React, {useState, useEffect} from "react";
import "./App.css";
import imgDetail from './imgDetail'
import axios from 'axios'




 function App() {
  
  const [photoDay, setphotoDay] = useState([]);
  // const [PhotoDayFull, setphotoDayFull] = useState([])

 

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

  const Detail = ( {info} ) => (
    <div className='info'>
      <p>Copyright to {info.copyright}</p>
      <button onClick = { () => 
      info.explanation}
      >More</button>
    </div>
  )
  const PhotoDetail = ({data}) => (
    <div>
      <p>{data.explanation}</p>
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
          <Detail info={photoDay}/>
        }
      </div>
    </div>
  );
}

export default App;
