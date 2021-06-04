import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import VideoCard from './VideoCard/VideoCard'

function Main() {

    const [trendingVideos, setTrendingVideos] = useState([])
    
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&part=status&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyBCL8keOPvJ2lhTooQr0nB2B71i_2P_Vvw`)
        .then(res => res.json())
        .then(data => {
            setTrendingVideos(data.items)
            console.log(data.items)
        })
    }, [])

    return (
        <div className="main main__flex">
            {trendingVideos.map((trendingVideo) => {
                return (
                    <Link to={`/video/${trendingVideo.id}`}><VideoCard 
                        thumbnail={trendingVideo.snippet.thumbnails.medium.url}
                        profilepic={""}
                        videotitle = {trendingVideo.snippet.title}
                        channelname = {trendingVideo.snippet.channelTitle}
                        views = {trendingVideo.statistics.viewCount}
                        time = {trendingVideo.snippet.publishedAt}
                    /></Link>
                )
            })}
        </div>
    )
}

export default Main
