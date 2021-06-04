import React from 'react'
import "./ActualVideo.css"

function ActualVideo({vidId}) {

    return (
        <div className="videoplayer__video__actualvideo">
            <iframe
                src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            >

            </iframe>
        </div>
    )
}

export default ActualVideo
