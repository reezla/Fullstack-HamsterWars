import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Start from './components/Start/Start'
import Play from './components/Play/Play'
import HamsterGallery from './components/Gallery/HamsterGallery'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          
          <nav>
            <h1>Hamster Wars</h1>

            <nav className="navMenu">
              <Link to="/">Start</Link>
              <Link className="playButton" to="/play">Play</Link>
              <Link to="/gallery">Gallery</Link>
            </nav>            
            
          </nav>
        </header>
        
        <main>
          <Switch>
            <Route path="/" exact><Start/></Route>
            <Route path="/play"><Play/></Route>
            <Route path="/gallery" ><HamsterGallery/></Route>
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;
 /* 
<ul className="navMenu">
                <h4>Start</h4>
                <h4 className="playButton">Play</h4>
                <h4>Gallery</h4>
            </ul>
 */