import React from 'react'
import "./SidebarItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarItem(props) {
    
    const icon = <FontAwesomeIcon icon={props.icon}/>
    return (
        <a href="#"><div className="sidebar__item" id={props.active}>
            <div className="sidebar__item--icon-container sidebar__item--item" id={props.activeIcon}>
                {icon}
            </div> 
            <div className="sidebar__item--text-container sidebar__item--item">
                <h6 className="sidebar__item--text">{props.title}</h6>
            </div>
        </div></a>
    )
}

export default SidebarItem
