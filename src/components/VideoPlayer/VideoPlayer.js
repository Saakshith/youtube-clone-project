import React, { useState, useEffect } from 'react'
import "./VideoPlayer.css"
import Video from "./Video/Video"
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos"

function VideoPlayer() {
    const vidId = window.location.href.substr(window.location.href.length - 11)

    return (
        <div className="videoplayer">
            <Video vidId={vidId}/>
            <RecommendedVideos vidId={vidId}/>
        </div>
    )
}

export default VideoPlayer
