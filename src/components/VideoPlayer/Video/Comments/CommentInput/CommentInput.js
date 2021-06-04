import React, {useState} from 'react'
import "./CommentInput.css"

function CommentInput(props) {

    const [commentInput, setCommentInput] = useState("")

    const handleInput = (e) => {
        setCommentInput(e.target.value)
    }

    return (
        <div className="videoplayer__video__comments__commentinput">
            <div className="videoplayer__video__comments__commentinput__top">
                <h3>{props.numberofcomments} Comments</h3>
            </div>
            <div className="videoplayer__video__comments__commentinput__bottom">
                <div className="videoplayer__video__comments__commentinput__profilepic-container">
                    <img src={props.imgurl} />
                </div>
                <input type="text" onChange={handleInput} value={commentInput} placeholder="Add a public comment" className="videoplayer__video__comments__commentinput__input"/>
                <button className="videoplayer__video__comments__commentinput__button">Comment</button>
            </div>
        </div>
    )
}

export default CommentInput
