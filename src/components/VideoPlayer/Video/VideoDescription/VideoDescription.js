import React from 'react'
import "./VideoDescription.css"

function VideoDescription(props) {
    return (
        <div className="videoplayer__video__videodescription">
            <div className="videoplayer__video__subscribe">
                <div className="videoplayer__video__subscribe__left">
                    <div className="videoplayer__video__subscribe__profile-pic-container">
                        <img src={props.profilepic} />
                    </div>
                    <div className="videoplayer__video__subscribe__channelname-subscribers-container">
                        <h3>{props.channelname}</h3>
                        <h3>{props.subscribers} subscribers</h3>
                    </div>
                </div>
                <div className="videoplayer__video__subscribe__right">
                    <button className="videoplayer__video__subscribe__subscribe-button">Subscribe</button>
                </div>
            </div>
            <div className="videoplayer__video__videodescription__description">
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default VideoDescription
