import React from 'react'
import './navbarclient.css'
export default function NavBarClient() {
    return (
        <div className='navBarClient'>
            <span className='client_home_logo'>Happy Travelling</span>
            <div className="nav_link_row">
                <div className="nav_link">
                    TimeTable
                </div>
                <div className="nav_link">
                    Payment
                </div>
            </div>
        </div>
    )
}
