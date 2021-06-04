import React, {useState} from 'react'
import 'C:/Saakshith/MERN_Projects/youtube_clone/frontend/src/index.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import SearchPage from './components/SearchPage/SearchPage'
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import VideoCard from "./components/Main/VideoCard/VideoCard"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {GoogleLogin} from "react-google-login"

function App() {

  // const responseGoogle = (res) => {
  //   console.log(res)
  // }

  const [input, setInput] = useState("")
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${input}&type=channel&type=playlist&type=live&type=video&key=AIzaSyBCL8keOPvJ2lhTooQr0nB2B71i_2P_Vvw`

  const handleInput = (e) => {
      setInput(e.target.value)
  }
  
  const [cardData, setCardData] = useState([])

  const fetchData = () => {
    fetch(url)
        .then(res => (res.json()))
        .then(data => {
          setCardData(data.items)
        })
  }

  const mapCardData = cardData.map((item) => {
    return(
        <Link to={`/video/${item.id.videoId}`}><VideoCard
            key = {item.id.videoId}
            videotitle = {item.snippet.title}
            channelname = {item.snippet.channelTitle}
            description = {item.snippet.description}
            thumbnail = {item.snippet.thumbnails.high.url}
        /></Link>
    )
  })

  return (
    <div className="app">
      <Router>
      {/* <GoogleLogin
        clientId={"540447040707-f5b65i712a9ffj924c4ekglte4q4jtf4.apps.googleusercontent.com"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText="SIGN IN"
      />  */}
      <Header fetchData={fetchData} input={input} handleInput={handleInput}/>
        <Switch>
          <Route path="/" exact>
            <div className="bottom">
              <Sidebar /> 
              <Main />
            </div>
          </Route>
          <Route path="/search/:searchTerm" exact>
            <div className="bottom">
              <Sidebar />
              <SearchPage mapCardData={mapCardData}/>
            </div>
          </Route>
          <Route path="/video/:videoId">
              <VideoPlayer/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
