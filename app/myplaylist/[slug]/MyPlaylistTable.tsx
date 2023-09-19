'use client';

import Image from 'next/image';
import {
  usePlaylistInfoContext,
  usePlaylistSlug,
} from '@/app/myplaylist/[slug]/PlaylistTrackProvider';
import firebaseDB from '@/app/firebase/firebasedb';

import { setDoc, doc } from 'firebase/firestore';

import Button from '@/components/Button';

//TODO: 저장하기 버튼 누를 필요없이 자동업데이트 되도록. Create는 Library +버튼으로 , 여기는 track read & update 하는 곳.
const MyPlaylistTable = () => {
  const { playlistTracks, setPlaylistTracks, playlistName, setPlaylistName } =
    usePlaylistInfoContext();

  const slug = usePlaylistSlug();
  function deleteTrack(track) {
    const nPlaylistTracks = playlistTracks.filter((items) => items.id !== track.id);
    setPlaylistTracks(nPlaylistTracks);
  }

  async function updatePlaylist() {
    console.log('update function');
    try {
      await setDoc(doc(firebaseDB, 'playlists', `${slug}`), {
        playlistName: playlistName,
        tracks: playlistTracks,
      });
    } catch (e) {
      console.log("couldn't update Playlist", e);
    }
  }
  // useTryCatchAPI(
  //   setDoc(doc(firebaseDB, 'playlists', `${slug}`), {
  //     playlistName: playlistName,
  //     tracks: playlistTracks,
  //   })
  return (
    <article>
      <div className="flex items-center gap-2 mb-3">
        <input
          className="text-3xl font-bold placeholder-white bg-transparent border-none"
          type="text"
          required
          placeholder="Playlist Title"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Button className="px-2 py-1 text-xs text-bold w-30" onClick={updatePlaylist}>
          저장하기
        </Button>
      </div>
      {playlistTracks.map((track) => (
        <div className="relative flex flex-row px-2 py-3" key={track.id}>
          <Image className="mr-3" src={track.img} width={40} height={40} alt="track image" />
          <div>
            <p className="font-bold">{track.name}</p>
            <p className="text-sm font-semibold text-[#B3B3B3]">{track.artist}</p>
          </div>
          <div className="absolute text-right top-5 text-[#B3B3B3] text-sm right-48">
            {Math.floor(track.duration / 60000)}:
            {((track.duration % 60000) / 1000).toFixed(0).padStart(2, '0')}
          </div>

          <button className="absolute right-10 top-5" onClick={() => deleteTrack(track)}>
            삭제하기
          </button>
        </div>
      ))}
    </article>
  );
};

export default MyPlaylistTable;
