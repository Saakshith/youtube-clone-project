import React, {useState} from 'react'
import 'C:/Saakshith/MERN_Projects/youtube_clone/frontend/src/components/Header/HeaderStyle.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header({input, handleInput, fetchData}) {
    library.add(faBars, faSearch, faMicrophone, faVideo, faTh, faBell, faUserCircle)

    const hamburgerClick = () => {
        const hamburgerMenu = document.getElementsByClassName('header__left--hamburgerMenu--link')[0]
        const sidebar = document.getElementsByClassName('sidebar')[0]
        const main = document.getElementsByClassName('main')[0]
        const searchpage = document.getElementsByClassName('searchpage')[0]

        hamburgerMenu.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar__active')
            main ? main.classList.toggle('main__flex') : searchpage.classList.toggle('searchpage__flex')           
        })
    }

    return (
        <div className="header">
            <div className="header__left header__lmr">
                <div className="header__left--hamburgerMenu">
                    <a className="header__left--hamburgerMenu--link" onClick={hamburgerClick}><FontAwesomeIcon icon={"bars"} /></a>
                </div>
                <Link to="/"><div className="header__left--logo">
                    <img src="https://www.youtube.com/img/branding/desktop/bhm/shanee_dark.png" height="56" alt="Logo" />
                </div></Link>
            </div>
            <div className="header__middle header__lmr">
                <form className="header__middle--searchBar" onSubmit={fetchData}>
                    <input placeholder="Search" className="header__middle--searchBar--bar" onChange={handleInput} value={input}/>
                    <Link to={`/search/${input}`}><button type="submit" className="header__middle--searchBar--barIconContainer" onClick={fetchData}>
                        <FontAwesomeIcon icon={"search"}/>
                    </button></Link>
                </form> 
                <div className="header__middle--voiceIcon">
                    <a><FontAwesomeIcon icon={"microphone"}/></a>
                </div>
            </div>
            <div className="header__right header__lmr">
                <div className="header__right--icon-container">
                    <a><FontAwesomeIcon icon={"video"} /></a>
                </div>
                <div className="header__right--icon-container">
                    <a><FontAwesomeIcon icon={"th"} /></a>
                </div>
                <div className="header__right--icon-container">
                    <a><FontAwesomeIcon icon={"bell"} /></a>
                </div>
                <div className="header__right--icon-container">
                    <a><FontAwesomeIcon icon={"user-circle"} /></a>
                </div>
            </div>
        </div>
    )
}

export default Header
