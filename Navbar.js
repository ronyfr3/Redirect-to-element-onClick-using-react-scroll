import React from 'react'
import {Link} from 'react-scroll'

// REACT_SCROLL PROPS

// to="target"
// spy={true}
// smooth={true}
// hashSpy={true}
// offset={50}
// duration={500}
// delay={1000}
// isDynamic={true}
// onSetActive={this.handleSetActive}
// onSetInactive={this.handleSetInactive}
// ignoreCancelEvents={false}

export default function Navbar() {
    return(
        <nav>
             <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                <li>
                   <Link 
                       activeClass="active" 
                       to="home"
                       spy={true}
                       smooth={true}
                       >
                       Home
                    </Link>
                </li>
                <li>
                   <Link
                       to="about"
                       spy={true}
                       smooth={true}>
                       About
                    </Link>
                </li>
                <li>
                   <Link 
                       to="contact"
                       spy={true}
                       smooth={true}>
                       Contact
                    </Link>
                </li>

            </ul>
        </nav>
        )
}