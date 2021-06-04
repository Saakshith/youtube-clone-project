import React from 'react'
import './VideoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function VideoCard(props) {
    library.add(faEllipsisV)

    return (
        <div className="main__videocard">
            <div className="main__videocard--thumbnail-container">
                <img src={props.thumbnail} className="main__videocard--thumbnail"/>
            </div>
            <div className="main__videocard--info-container">
                <div className="main__videocard--info-container--profile-pic-container">
                    <img src={props.profilepic} className="main__videocard--info-container--profile-pic" />
                </div>
                <div className="main__videocard--info-container--content-container">
                    <div className="main__videocard--info-container--content-container--title-container">
                        <h3 className="main__videocard--info-container--content-container--title">{props.videotitle}</h3>
                    </div>
                    <div className="main__videocard--info-container--content-container--channel-name-container">
                        <h5 className="main__videocard--info-container--content-container--channel-name">{props.channelname}</h5>
                    </div>
                    <div className="main__videocard--info-container--content-container--views-time-container">
                        <h5 className="main__videocard--info-container--content-container--views-time"><span>{props.views} views</span> • <span>{props.time} ago</span></h5>
                    </div>
                    <div className="main__videocard--info-container--content-container--description-container">
                        <h5 className="main__videocard--info-container--content-container--description">{props.description}</h5>
                    </div>
                </div>
                <div className="main__videocard--info-container--morevert-container">
                    <FontAwesomeIcon icon={"ellipsis-v"} />
                </div>
            </div>
        </div>
    )
}

export default VideoCard
