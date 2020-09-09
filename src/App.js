import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faStop,
  faForward,
  faBackward,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

library.add(faPlay, faStop, faForward, faBackward, faMusic);

function App() {
  return (
    <div className="App">
      <div className="Player">
        <header>
          <h4>My Spotify Player</h4>
        </header>
        <aside>
          <div className="Playing">
            <h5>Stopped</h5>
            <h2>
              <FontAwesomeIcon icon="music" />
            </h2>
            <h1>Música A</h1>
            <h6>00:00:00</h6>
            <div className="Reflex"></div>
          </div>
          <div className="Nav">
            <button className="prev">
              <FontAwesomeIcon icon="backward" />
            </button>
            <button className="play">
              <FontAwesomeIcon icon="play" />
            </button>
            <button className="stop">
              <FontAwesomeIcon icon="stop" />
            </button>
            <button className="next">
              <FontAwesomeIcon icon="forward" />
            </button>
          </div>
          <div className="Playlist">
            <ol>
              <li>Música A</li>
              <li>Música B</li>
              <li>Música C</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
