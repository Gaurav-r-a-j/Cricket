import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar d-flex-spaceb">
            <div className="left d-flex-spaceb gap1">
                <img src="https://dubaiexch247.com/images/logos/dubaiexch247.png" alt="" />
                <div className="search d-flex-center">
                    <input type="search" name="" id="" placeholder='Search' />
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>


            <div className="right d-flex-spaceb gap1">
                <ul className='d-flex-center gap1'>
                    <li> pinned </li>
                    <li>My Market</li>
                    <li>Account</li>
                </ul>

                <div className="deposit d-flex-center">
                    <h2> Deposit</h2>
                    <div className="mExchange">
                        <div className="mudra ">
                            <span className="material-symbols-outlined">
                                currency_exchange
                            </span>
                            <span> 12</span>
                        </div>
                        <div className="exchange">
                            <span>Ex</span>
                            <span> 0.0</span>
                        </div>
                    </div>
                </div>

                <div className="customerSupport">
                    <span className='redSpot'></span>
                    <span className="material-symbols-outlined">
                        support_agent
                    </span>
                </div>

                <div className="notification">
                    <span className='redSpot'>1</span>
                    <span className="material-symbols-outlined">
                        notifications
                    </span>
                </div>

                <div className="settings">
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </div>

            </div>

        </nav>
    )
}

export default Navbar