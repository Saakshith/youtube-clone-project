import React from 'react'
import "./CommentCard.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'

function CommentCard(props) {
    library.add(faThumbsUp, faThumbsDown, faEllipsisV)

    return (
        <div className="videoplayer__video__comments__commentcard">
            <div className="videoplayer__video__comments__commentcard__left-right-container">
                <div className="videoplayer__video__comments__commentcard__left">
                    <div className="videoplayer__video__comments__commentcard__profilepic__container">
                        <img src={props.imgurl} />
                    </div>
                </div>
                <div className="videoplayer__video__comments__commentcard__right">
                    <div className="videoplayer__video__comments__commentcard__nametime-container">
                        <span className="videoplayer__video__comments__commentcard__name">{props.name}</span>
                        <span className="videoplayer__video__comments__commentcard__time">{props.time} ago</span>
                    </div>
                    <div className="videoplayer__video__comments__commentcard__comment-container">
                        <h4>{props.comment}</h4>
                    </div>
                    <div className="videoplayer__video__comments__commentcard__buttons-container">
                        <span className="videoplayer__video__comments__commentcard__buttons-container__like-button"><FontAwesomeIcon icon="thumbs-up" /> {props.likes}</span>
                        <span className="videoplayer__video__comments__commentcard__buttons-container__dislike-button"><FontAwesomeIcon icon="thumbs-down" /></span>
                        <span className="videoplayer__video__comments__commentcard__buttons-container__reply-button">Reply</span>
                    </div>
                </div>
            </div>
            <div className="videoplayer__video__comments__commentcard__very-left">
                <FontAwesomeIcon icon="ellipsis-v" />
            </div>
        </div>
    )
}

export default CommentCard
