 import React, { Component } from 'react'
import './CSS/page4.css'
export default class page4 extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
                <div className="logo">My Website</div>
                <ul id="navList">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                 <div className='menu' onClick={()=>this.menuClick()}>&#9776</div>
            </nav>
        </header>
        <section>
            <h1>Welcome to Responsive Webpage</h1>
            <p>This is an example</p>
        </section>
        <footer>
            copyright @ 2025 Alln rights reserved.
        </footer>
      </div>
    )
  }
}
