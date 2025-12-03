import { useState, useRef, useEffect } from "react";

export default function ProfileCard({
  img,
  name,
  albumName,
  audio,
  playMusic,
}) {
  const playingTrack = useRef();
  const imgUrl = new URL(`../assets/covers/${img}`, import.meta.url).href;
  const audioUrl = new URL(`../assets/musics/${audio}`, import.meta.url).href;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-black">
      <img
        src={imgUrl}
        alt={name}
        className="w-full  object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-3">{name}</h2>
      <button onClick={() => playMusic(audioUrl)}>Play</button>
    </div>
  );
}
