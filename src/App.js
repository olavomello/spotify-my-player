import React, { useState, useEffect } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [music, setMusic] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  let [playingId, setplayingId] = useState(0);
  let [time, setTime] = useState("00:00:00 / 00:00:00");

  // Fakeplaylist **
  const playlist = [
    {
      id: 0,
      name: "Eastbound",
      url:
        "https://api.freeplaymusic.com/media/downloadable/files/link_samples/media/volume/tracks/Soundtrack_Rock_Volume_5/e/a/eastbound.mp3",
      cover:
        "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/EastboundAndDown_314237900-PMRS1002-SR._V402163731_SX1080_.jpg",
    },
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
      name: "I Can Smell Your Creativity",
      url:
        "https://api.freeplaymusic.com/media/downloadable/files/link_samples/media/volume/tracks/Sports_News_Volume_2/i/_/i_can_smell_your_creativity_1.mp3",
      cover:
        "https://api.freeplaymusic.com/media/playlist/image/s/p/sports_center.jpg",
    },
    {
      id: 4,
      name: "Always Leaving",
      url:
        "https://api.freeplaymusic.com/media/downloadable/files/link_samples/media/volume/tracks/Classic_Country_Volume_1/a/l/always_leaving.mp3",
      cover:
        "https://townsquare.media/site/623/files/2015/05/willie-nelson-always-on-my-mind-song-no-1-630x420.jpg?w=980&q=75",
    },
    {
      id: 5,
      name: "Photos and Memories",
      url:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Photos-and-Memories.mp3",
      cover:
        "https://www.wonderplugin.com/wp-content/uploads/2014/03/Sunrise100.jpg",
    },
  ];

  // Funcs
  useEffect(() => {
    PlayerPlay();
  }, [playingId]);

  // Format
  function timeFormat(sec) {
    let sec_num = parseInt(sec, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  }

  // Start time ticker
  function timerStart() {
    var tInter = setInterval(() => {
      try {
        const mp3Player = document.getElementById("mp3Player");
        let timeNow = Math.round(mp3Player.currentTime);
        let timeTotal = Math.round(mp3Player.duration);
        setTime(timeFormat(timeNow) + " / " + timeFormat(timeTotal));

        // Progressbar
        const progressBar = document.getElementById("ProgressBarNow");
        let porc = Math.round((timeNow / timeTotal) * 100);
        progressBar.style.width = porc + "%";

        // Jump to next music
        if (porc >= 100) {
          PlayerNext();
        }
      } catch (ex) {
        clearInterval(tInter);
        setTime("00:00:00 / 00:00:00");
      }
    }, 1000);
  }

  function PlayerPlay(id) {
    setMusic(playlist[playingId]);
    setLoading(false);
    setIsPlaying(true);
    timerStart();

    // Set active music
    playlist.map((m, index) => {
      var music_active = document.getElementById("music-" + index);
      if (index === playingId) {
        music_active.className = "active";
      } else {
        music_active.className = "";
      }
    });
  }
  function PlayerStop() {
    setIsPlaying(false);
    setLoading(false);
  }
  function PlayerSet(id) {
    setplayingId(id);
  }
  function PlayerPrev() {
    playingId--;
    if (playingId < 0) playingId = playlist.length - 1;

    setplayingId(playingId);
  }
  function PlayerNext() {
    playingId++;
    if (playingId > playlist.length - 1) playingId = 0;

    setplayingId(playingId);
  }

  return (
    <div className="App">
      <div className={isCompact ? "Player Compact" : "Player Full"}>
        <header>
          <h4>My Spotify Player</h4>
        </header>
        <aside>
          <div className="Playing">
            <h5>{isPlaying ? "Playing..." : "Stopped"}</h5>
            {isPlaying ? (
              <div className="Cover">
                <img src={music.cover} />
              </div>
            ) : (
              ""
            )}
            <h2>{isPlaying ? <FontAwesomeIcon icon="music" /> : ""}</h2>
            <h1>{isPlaying ? music.name : isLoading ? "Loading..." : ""}</h1>
            <h6>{isPlaying ? time : ""}</h6>
            <div className="Reflex"></div>
            {isPlaying ? (
              <div className="ProgressBar" id="ProgressBar">
                <div id="ProgressBarNow"></div>
              </div>
            ) : (
              ""
            )}
            {isPlaying ? <audio id="mp3Player" src={music.url} autoPlay /> : ""}
          </div>
          <div className="Nav">
            <button className="prev" title="Prev" onClick={(e) => PlayerPrev()}>
              <FontAwesomeIcon icon="backward" />
            </button>
            {!isPlaying ? (
              <button
                className="play"
                title="Play"
                onClick={(e) => PlayerPlay(playingId)}
              >
                <FontAwesomeIcon icon="play" />
              </button>
            ) : (
              <button
                className="stop"
                title="Stop"
                onClick={(e) => PlayerStop()}
              >
                <FontAwesomeIcon icon="stop" />
              </button>
            )}
            <button className="next" title="Next" onClick={(e) => PlayerNext()}>
              <FontAwesomeIcon icon="forward" />
            </button>
          </div>
          <div className="Playlist">
            <ol>
              {playlist.map((m, index) => (
                <li key={index} id={`music-` + index}>
                  <button onClick={(e) => PlayerSet(m.id)}>{m.name}</button>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <div className="Footer">
          <button onClick={(e) => setIsCompact(!isCompact)}>||</button>
        </div>
      </div>
    </div>
  );
}

export default App;
