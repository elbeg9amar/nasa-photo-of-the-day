
import React, {useState, useEffect} from "react";
import "./App.css";
// import PhotoDetail from './PhotoDetail'
import axios from 'axios'

  export default function PhotoDetail (props) {
    const {photoDayFull, close} = props
    const [detail, setDetail] = useState('')

    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=58bwGTwMVgC02X0bACatqRmFJNhYiuMn3cVpDNfD&date=2012-03-14')
        .then (res => {
            setDetail(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally( () => {
        })
    },[photoDayFull])

    return (
        <div className='info'>
          <p>Copyright to {detail.copyright}</p>
          <p>{detail.explanation} </p>
        </div>
      )
}