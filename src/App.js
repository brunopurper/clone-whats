import React from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" />
          <div className="header-buttons">
              <div className="header-btn">
                <DonutLargeIcon style={{color: '#919191'}}/>
              </div>
              <div className="header-btn">
                <ChatIcon style={{color: '#919191'}}/>
              </div>
              <div className="header-btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontsize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou iniciar uma nova conversa"></input>
          </div>
        </div>

        <div className="chatlist">
          ...
        </div>
      </div>
      <div className="contentarea">
        ...
      </div>
    </div>
  );
}