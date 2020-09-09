import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faStop,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

library.add(faPlay, faStop, faForward, faBackward);

function App() {
  return (
    <div className="App">
      <div className="Player">
        <header>
          <h4>My Spotify Player</h4>
        </header>
        <aside>
          <div className="Playing">
            <h1>Música A</h1>
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
