import React, {useState, useEffect} from 'react'
import "./Video.css"
import ActualVideo from "./ActualVideo/ActualVideo"
import VideoContent from "./VideoContent/VideoContent"
import VideoDescription from "./VideoDescription/VideoDescription"
import Comments from './Comments/Comments'

function Video({vidId}) {

    const [vidContent, setVidContent] = useState([])
    
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${vidId}&key=AIzaSyBCL8keOPvJ2lhTooQr0nB2B71i_2P_Vvw`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.items[0].snippet.title)
            setVidContent(data.items[0])
        })       
    }, [])

    return vidContent.snippet ? (
        <div className="videoplayer__video">
            <ActualVideo 
                vidId={vidId}
            />
            <VideoContent 
                hashtag1={vidContent.snippet.tags[0]}
                hashtag2={vidContent.snippet.tags[1]}
                hashtag3={vidContent.snippet.tags[2]}
                videoTitle={vidContent.snippet.title}
                views={vidContent.statistics.viewCount}
                published={vidContent.snippet.publishedAt}
                likes={vidContent.statistics.likeCount}
                dislikes={vidContent.statistics.dislikeCount}
            />
            <VideoDescription 
                profilepic={vidContent.snippet.thumbnails.default.url}
                channelname={vidContent.channelTitle}
                subscribers={"50M"}
                description={vidContent.snippet.description}
            />
            <Comments 
                numberofcomments={vidContent.statistics.commentCount}
                vidId={vidId}
            />
        </div>
    ): "Hello"
}

export default Video
