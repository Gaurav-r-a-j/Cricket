import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <span>News</span>
        <p className='news'>Lorem ipsum dolor sit amet.</p>
      </div>
      <hr />
      <div className="bottom d-flex-center">
        <span id='left_scroll' class="material-symbols-outlined ">navigate_before</span>
        <span id='right_scroll' class="material-symbols-outlined ">navigate_next</span>

        <div className="gameOptions">
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
        <GameOption />
          

        </div>
      </div>
    </div>
  )
}


export const GameOption = () => {

  return (
    <div className="game d-flex-center">
      <span class="material-symbols-outlined">
        sports_cricket
      </span>
      <span>Cricket</span>
    </div>
  )
}

export default Header