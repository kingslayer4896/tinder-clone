import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize = "large"/>
            </IconButton>

            <img className="header_logo" src="https://www.clipartmax.com/png/full/479-4799995_tinder-logo-png-a-university-of-kansas-student-has-tinder-icon.png" alt="" />

            <IconButton>
                <ForumIcon fontSize = "large"/>
            </IconButton>
        </div>
    )
}

export default Header
