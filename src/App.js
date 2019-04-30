import React, {Component} from 'react';
import './App.css';

import SearchBar from './components/searchBar'
import VideoPlay from './components/videoPlay'
import VideoList from './components/video_list';

class App extends Component {
  render() {
    return(
      <div className="App">
      <header className="App-header">
       <div className="menu">
         <ui className="nav">
           <li><a href="/">Home</a></li>
            <li><a href="/Favorite Videos/">Favorite Videos</a></li>
            <li><a href="/KidsOnly/">Kids Only</a></li>
         </ui>
       </div>
       </header>

       <section className="searchBar">
         <SearchBar />
       </section >
        <section className="main">
         <VideoPlay />
         <VideoList/>
        </section>   
        </div>
    )
  }
}

export default App;