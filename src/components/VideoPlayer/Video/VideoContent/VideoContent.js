import React from 'react'
import "./VideoContent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons"
import {faThumbsDown} from "@fortawesome/free-solid-svg-icons"
import {faShare} from "@fortawesome/free-solid-svg-icons"
import {faSave} from "@fortawesome/free-solid-svg-icons"
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons"

function VideoContent(props) {
    library.add(faThumbsUp, faThumbsDown, faShare, faSave, faEllipsisH)

    return (
        <div className="videoplayer__video__videocontent">
            <div className="videoplayer__video__videocontent__hashtags-container">
                <h5 className="videoplayer__video__videocontent__hashtags">#{props.hashtag1}</h5>
                <h5  className="videoplayer__video__videocontent__hashtags">#{props.hashtag2}</h5>
                <h5  className="videoplayer__video__videocontent__hashtags">#{props.hashtag3}</h5>
            </div>
            <div className="videoplayer__video__videocontent__title-container">
                <h2 className="videoplayer__video__videocontent__title">{props.videoTitle}</h2>
            </div>
            <div className="videoplayer__video__videocontent__buttonsViews-container">
                <div className="videoplayer__video__videocontent__views-time-container">
                    <h5><span>{props.views} views</span> • <span>{props.published}</span></h5>
                </div>
                <div className="videoplayer__video__videocontent__buttons-container">
                    <div className="videoplayer__video__videocontent__likes-dislikes-container">
                        <h5><span><FontAwesomeIcon icon="thumbs-up"/> {props.likes}</span></h5>
                        <h5><span><FontAwesomeIcon icon="thumbs-down"/> {props.dislikes}</span></h5>
                    </div>
                    <div className="videoplayer__video__videocontent__rest-of-buttons-container">
                        <h5><span><FontAwesomeIcon icon="share"/> Share</span></h5>
                        <h5><span><FontAwesomeIcon icon="save"/> Save</span></h5>
                        <h5><span><FontAwesomeIcon icon="ellipsis-h"/></span></h5>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default VideoContent
