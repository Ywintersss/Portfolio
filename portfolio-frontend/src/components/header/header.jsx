import './header.css'
import { Bars3, Bars3Icon } from '@heroicons/react/24/solid'
import React from "react";

export default function Header(){
    return(
        <header>
            <nav>
                <button className='menu'>
                    <Bars3Icon />
                </button>
                <a href="#">About Me</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Work Experience</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

