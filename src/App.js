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

// Fontaweson
library.add(faPlay, faStop, faForward, faBackward, faMusic);

// Funcs
function PlayerPrev() {
  console.log("Player : Prev");
}
function PlayerPlay() {
  console.log("Player : Play");
}
function PlayerStop() {
  console.log("Player : Stop");
}
function PlayerNext() {
  console.log("Player : Next");
}
/*
function PlayerPause(){
  console.log("Player : Pause");
}
*/
function PlayerInit() {
  let list = "";

  // Fakeplaylist **
  let playlist = [
    {
      name: "Music 1",
      url: "https://music1.com",
      cover: "https://music1.com/cover.jpg",
    },
    {
      name: "Music 2",
      url: "https://music2.com",
      cover: "https://music2.com/cover.jpg",
    },
    {
      name: "Music 3",
      url: "https://music3.com",
      cover: "https://music3.com/cover.jpg",
    },
  ];

  // Read and apply playlist
  playlist.map((row) => {
    console.log(row);
    list += "<li>" + row.name + "</li>";
  });
}

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
            <h1>Loading...</h1>
            <h6>00:00:00</h6>
            <div className="Reflex"></div>
          </div>
          <div className="Nav">
            <button className="prev" title="Anterior" onClick={PlayerPrev}>
              <FontAwesomeIcon icon="backward" />
            </button>
            <button className="play" title="Play" onClick={PlayerPlay}>
              <FontAwesomeIcon icon="play" />
            </button>
            <button className="stop" title="Stop" onClick={PlayerStop}>
              <FontAwesomeIcon icon="stop" />
            </button>
            <button className="next" title="Próxima" onClick={PlayerNext}>
              <FontAwesomeIcon icon="forward" />
            </button>
          </div>
          <div className="Playlist">
            <ol></ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
