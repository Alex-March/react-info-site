import React from "react";

export default function Main() {
  return (
    <main>
      <div className='content'>
        <h1>Fun facts about React</h1>
        <ul className='list'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <img
        className='shady-react'
        src='./src\images\reactjs-icon_3.png'
        alt='react background logo'
      />
    </main>
  );
}
