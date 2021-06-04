import React, {useState, useEffect} from 'react'
import "./Comments.css"
import CommentInput from "./CommentInput/CommentInput"
import CommentCard from "./CommentCard/CommentCard"

function Comments({numberofcomments, vidId}) {

    const [commentContent, setCommentContent] = useState([])

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&order=relevance&videoId=${vidId}&key=AIzaSyBCL8keOPvJ2lhTooQr0nB2B71i_2P_Vvw`)
        .then(res => res.json())
        .then(data => {
            setCommentContent(data.items)
        })
    }, [])

    return (
        <div className="videoplayer__video__comments">
            <CommentInput 
                numberofcomments={numberofcomments}
                imgurl="https://unsplash.it/90/90"
            />

            {commentContent.map(comment => {
                return(
                    <CommentCard 
                        imgurl= {comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        name={comment.snippet.topLevelComment.snippet.authorDisplayName}
                        time={comment.snippet.topLevelComment.snippet.publishedAt}
                        comment={comment.snippet.topLevelComment.snippet.textOriginal}
                        likes={comment.snippet.topLevelComment.snippet.likeCount}
                    />
                ) 
            })}
            
        </div>
    )
}

export default Comments
