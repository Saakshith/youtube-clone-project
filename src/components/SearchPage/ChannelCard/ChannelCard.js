import React from 'react'
import "./ChannelCard.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faBell} from '@fortawesome/free-solid-svg-icons'

function ChannelCard(props) {
    library.add(faBell)

    return (
        <div className="searchpage__channelcard">
            <div className="searchpage__channelcard--profile-pic-container">
                <img src={props.profilepic} className="searchpage__channelcard--profile-pic"/>
            </div>
            <div className="searchpage__channelcard--info-container">
                <h1>{props.channelname}</h1>
                <h5><span>{props.subscribers} subscribers</span> • <span>{props.videos} videos</span></h5>
                <h5>{props.description}</h5>
            </div>
            <div className="searchpage__channelcard--subscribe-section">
                <button className="searchpage__channelcard--subscribe-section--subscribe-button">Subscribe</button>
                <FontAwesomeIcon icon={"bell"} id={props.bellactive}/>
            </div>
        </div>
    )
}

export default ChannelCard
