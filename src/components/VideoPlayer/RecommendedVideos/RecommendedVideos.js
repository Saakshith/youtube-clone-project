import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./ReccomendedVideos.css"
import VideoCard from "../../Main/VideoCard/VideoCard"

function RecommendedVideos({vidId}) {
    const [reccomendedVideos, setReccomendedVideos] = useState([])
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&relatedToVideoId=${vidId}&type=video&key=AIzaSyBCL8keOPvJ2lhTooQr0nB2B71i_2P_Vvw`)
        .then(res => res.json())
        .then(data => {
            setReccomendedVideos(data.items)
        })
    }, [])
    
    return (
        <div className="videoplayer__recommendedvideos">

            {reccomendedVideos.map((reccomendedVideo) => {
                return(
                    <Link to={`/video/${reccomendedVideo.id.videoId}`}><VideoCard 
                        thumbnail={reccomendedVideo.snippet.thumbnails.medium.url}
                        profilepic="https://th.bing.com/th/id/R82e4fab40b34abdfa7f62a183e95e96f?rik=J473MWQ4FV4Mag&riu=http%3a%2f%2fdpegb9ebondhq.cloudfront.net%2fproduct_photos%2f27070293%2fprofile_small.jpg&ehk=kEEEwRPlWCHrEqT4ffdbmGgk6ja5Z4%2fNJbm6KTkkzuI%3d&risl=&pid=ImgRaw"
                        videotitle = {reccomendedVideo.snippet.title}
                        channelname = {reccomendedVideo.snippet.channelTitle}
                        views = "35M"
                        time = {reccomendedVideo.snippet.publishTime}
                    /></Link>
                )
            })}
            
        </div>
    )
}

export default RecommendedVideos
