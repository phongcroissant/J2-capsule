import { useState, useRef } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Player from "./components/Player";
import { tracks } from "./data/tracks";
import { albums } from "./data/albums";

function App() {
  const { isPlaying, setIsPlaying } = useState(false);
  const playingTrack = useRef();
  const results = tracks.map((track) => {
    const match = albums.find((album) => album.name === track.album);
    return match ? { ...track, ...match } : null;
  });
  console.log(tracks);

  function playMusic(audioUrl) {
    // Si un son est déjà en cours, on l'arrête
    if (playingTrack.current) {
      playingTrack.current.pause();
      playingTrack.current.currentTime = 0;
    }

    // Crée un nouvel audio et le stocke dans la ref
    playingTrack.current = new Audio(audioUrl);
    playingTrack.current.play();
  }
  function chooseRandomMUsic() {
    const randomIndex = Math.floor(Math.random() * results.length);
    const randomTrack = results[randomIndex];
    console.log(randomTrack);

    playMusic(
      new URL(`./assets/musics/${randomTrack.audio}`, import.meta.url).href
    );
  }

  return (
    <>
      <h1 className="text-center m-5 underline">Popify</h1>
      <button onClick={() => chooseRandomMUsic()}>Aléatoire</button>
      <div className="p-6 grid grid-cols-4 gap-6">
        {results.map((result) => (
          <ProfileCard
            key={result.title}
            img={result.img}
            name={result.title}
            albumName={result.album}
            audio={result.audio}
            playMusic={playMusic}
          />
        ))}
      </div>
      {isPlaying && <Player />}
    </>
  );
}

export default App;
