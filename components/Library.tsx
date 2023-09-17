'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firebaseDB from '@/app/firebase/firebasedb';
import { useRouter } from 'next/navigation';

const Library = () => {
  const router = useRouter();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function getPlaylists() {
      try {
        const userPlaylists = await getDocs(collection(firebaseDB, 'playlists'));
        console.log("userPlaylist",userPlaylists)
      } catch (e) {
        console.log('Fail to get user playlists in the library ', e);
      }
    }
    getPlaylists();
  }, []);

  async function createPlaylist() {
    try {
      console.log('createPlaylist');
      const docRef = await addDoc(collection(firebaseDB, 'playlists'), {
        playlistName: '',
        tracks: [],
      });
      console.log('Document written with ID:', docRef.id);
      //? 코드리뷰 받고 싶은 곳.
      router.push(`/myplaylist/${docRef.id}`);
    } catch (e) {
      console.error('error adding document', e);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} /> {/*아이콘 */}
          <p className="font-medium text-neutral-400 text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={createPlaylist}
          size={20}
          className="transition cursor-pointer text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex px-3 mt-4 felx-col gap-y-2">List of Songs!</div>
    </div>
  );
};

export default Library;
