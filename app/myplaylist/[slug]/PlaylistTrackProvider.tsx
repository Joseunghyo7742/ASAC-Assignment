'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import firebaseDB from '@/app/firebase/firebasedb';

export const PlaylistInfoContext = createContext(null);
export const PlaylistSlugContext = createContext(null);

export const PlaylistTrackProvider = ({ children, playlistSlug }) => {
  const slug  = playlistSlug;
  console.log('slug in Provider',slug);

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName]= useState("");
  useEffect(() => {
    async function getCurrentPlaylist() {
      try {
        //단일 문서 불러오기온 후 전역 변수에 넣어주기 
        const playlistInfo = (await getDoc(doc(firebaseDB, 'playlists', `${slug}`))).data();
        console.log("get Current playlist", playlistInfo)
        setPlaylistTracks(playlistInfo.tracks)
        setPlaylistName(playlistInfo.playlistName)
      } catch (e) {
        console.log('Error getting current playlist');
      }
    }
    getCurrentPlaylist();
  }, [playlistSlug]);

  return (
    <PlaylistInfoContext.Provider value={{ playlistTracks, setPlaylistTracks,playlistName, setPlaylistName }}>
      <PlaylistSlugContext.Provider value={slug}>{children}</PlaylistSlugContext.Provider>
    </PlaylistInfoContext.Provider>
  );
};

export function usePlaylistSlug() {
  const context = useContext(PlaylistSlugContext);
  if (!context) {
    throw new Error('slug context could not be made');
  }
  return context;
}
export function usePlaylistInfoContext() {
  const context = useContext(PlaylistInfoContext);
  if (!context) {
    throw new Error('playlist Track Context could not be made');
  }
  return context;
}
