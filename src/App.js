import React, { useState } from "react";
import { Media, Player, controls } from "react-media-player";
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

function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [playingName, setPlayingName] = useState(0);

  // Fakeplaylist **
  let playlist = [
    {
      id: 1,
      name: "In the Moment of Inspiration",
      url:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/In-the-Moment-of-Inspiration.mp3",
      cover:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Evening100.jpg",
    },
    {
      id: 2,
      name: "Peaceful Dawn",
      url:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Peaceful-Dawn.mp3",
      cover:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Island100.jpg",
    },
    {
      id: 3,
      name: "Photos and Memories",
      url:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Photos-and-Memories.mp3",
      cover:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Sunrise100.jpg",
    },
  ];

  // Funcs
  function PlayerSet(id) {
    console.log("Musica : " + id);
    setPlayingName("Musica : " + id);
  }
  function PlayerPrev() {
    console.log("Player : Prev");
  }
  function PlayerPlay() {
    console.log("Player : Play");
    setPlaying(true);
  }
  function PlayerStop() {
    console.log("Player : Stop");
    setPlaying(false);
  }
  function PlayerNext() {
    console.log("Player : Next");
  }

  return (
    <div className="App">
      <div className="Player">
        <header>
          <h4>My Spotify Player</h4>
        </header>
        <aside>
          <div className="Playing">
            <h5>{isPlaying ? "Playing" : "Stopped"}</h5>
            <h2>
              <FontAwesomeIcon icon="music" />
            </h2>
            <h1>{isPlaying ? playingName : "Loading..."}</h1>
            <h6>00:00:00</h6>
            <div className="Reflex"></div>
          </div>
          <div className="Nav">
            <button className="prev" title="Anterior" onClick={PlayerPrev}>
              <FontAwesomeIcon icon="backward" />
            </button>
            {!isPlaying ? (
              <button className="play" title="Play" onClick={PlayerPlay}>
                <FontAwesomeIcon icon="play" />
              </button>
            ) : (
              <button className="stop" title="Stop" onClick={PlayerStop}>
                <FontAwesomeIcon icon="stop" />
              </button>
            )}
            <button className="next" title="Próxima" onClick={PlayerNext}>
              <FontAwesomeIcon icon="forward" />
            </button>
          </div>
          <div className="Playlist">
            <ol>
              {playlist.map((row) => (
                <li>
                  <button>{row.name}</button>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
