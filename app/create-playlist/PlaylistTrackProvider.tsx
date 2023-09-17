'use client';
import { createContext, useContext, useState } from 'react';

export const PlaylistTrackContext = createContext(null);

export const PlaylistTrackProvider = ({ children }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  return (
    <PlaylistTrackContext.Provider value={{ playlistTracks, setPlaylistTracks }}>
      {children}
    </PlaylistTrackContext.Provider>
  );
};

export default function usePlaylistTrackContext() {
  const context = useContext(PlaylistTrackContext);
  if (!context) {
    throw new Error('playlist Track Context could not be made');
  }
  return context;
}
