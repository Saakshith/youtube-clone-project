import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./SearchPage.css"
import VideoCard from "../Main/VideoCard/VideoCard"
import 'C:/Saakshith/MERN_Projects/youtube_clone/frontend/src/components/Header/HeaderStyle.css'

function SearchPage({mapCardData}) {
    return (
        <div className="searchpage searchpage__flex">
            {mapCardData}
        </div>
    )
}

export default SearchPage
