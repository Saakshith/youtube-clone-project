import React from 'react'
import SidebarItem from './SidebarItem/SidebarItem'
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    library.add(faHome, faFire, faPhotoVideo, faImages, faHistory, faPlayCircle, faClock, faThumbsUp, faBook, 
                faAngleDown, faUserCircle, faFilm, faGamepad, faSatelliteDish, faTshirt, faLightbulb, faTrophy, faCog, faFlag, faQuestionCircle, faExclamationTriangle
               )

    return (
        <div className="sidebar">
            <SidebarItem 
                icon="home"
                title="Home"
                active="sidebar__item--active"
                activeIcon="sidebar__item--icon--active"
            />
            <SidebarItem 
                icon="fire"
                title="Trending"
            />
            <SidebarItem 
                icon="photo-video"
                title="Subscriptions"
            />
            <hr />
            <SidebarItem 
                icon="book"
                title="Library"
            />
            <SidebarItem 
                icon="history"
                title="History"
            />
            <SidebarItem 
                icon="play-circle"
                title="Your Videos"
            />
            <SidebarItem 
                icon="clock"
                title="Watch Later"
            />
            <SidebarItem 
                icon="thumbs-up"
                title="Liked Videos"
            />
            <SidebarItem 
                icon="angle-down"
                title="Show More"
            />
            <hr />
            <h3 className="sidebar__subtitle">Subscriptions</h3>
            <SidebarItem 
                icon="user-circle"
                title="Cocomelon"
            />
            <SidebarItem 
                icon="user-circle"
                title="Peppa Pig"
            />
            <SidebarItem 
                icon="user-circle"
                title="Wendy Pretend Play"
            />
            <SidebarItem 
                icon="user-circle"
                title="Diana and Roma"
            />
            <SidebarItem 
                icon="user-circle"
                title="Mr Beast"
            />
            <SidebarItem 
                icon="angle-down"
                title="Show 68 More"
            />
            <hr />
            <h3 className="sidebar__subtitle">More From Youtube</h3>
            {/* <SidebarItem 
                icon=""
                title="Youtube Premium"
            /> */}
            <SidebarItem 
                icon="film"
                title="Movies And Shows"
            />
            <SidebarItem 
                icon="gamepad"
                title="Gaming"
            />
            <SidebarItem 
                icon="satellite-dish"
                title="Live"
            />
            <SidebarItem 
                icon="tshirt"
                title="Fashion & Beauty"
            />
            <SidebarItem 
                icon="lightbulb"
                title="Learning"
            />
            <SidebarItem 
                icon="trophy"
                title="Sports"
            />
            <hr />
            <SidebarItem 
                icon="cog"
                title="Settings"
            />
            <SidebarItem 
                icon="flag"
                title="Report History"
            />
            <SidebarItem 
                icon="question-circle"
                title="Help"
            />
            <SidebarItem 
                icon="exclamation-triangle"
                title="Send Feedback"
            />
            <h3 className="sidebar__subtitle">© 2021 Google LLC</h3>
        </div>
    )
}

export default Sidebar
