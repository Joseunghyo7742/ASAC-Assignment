'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { doc, addDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firebaseDB from '@/app/firebase/firebasedb';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

const Library = () => {
  const router = useRouter();
  //꼭 state로 관리를 해줘야 하는지.
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    async function getPlaylists() {
      try {
        //? 더 괜찮은 방식이 없을까? 한번에 collection 내의 문서를 담고 싶다.
        const userPlaylists = await getDocs(collection(firebaseDB, 'playlists'));
        const playlistData = [];
        userPlaylists.forEach((playlist) => {
          playlistData.push({id:playlist.id,data:playlist.data()});
        });
        setPlaylists(playlistData);
        console.log(playlistData)
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
  async function deletePlaylist(targetId) {
    console.log("delete function", targetId)
    try {
      await deleteDoc(doc(firebaseDB, 'playlists', `${targetId}`));
      //!이게 최선의 방식일까 
      setPlaylists(prevPlaylists => prevPlaylists.filter(playlist => playlist.id !== targetId));
    } catch (e) {
      console.error("couldn't delete", e);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} /> {/* 아이콘 */}
          <p className="font-medium text-neutral-400 text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={createPlaylist}
          size={20}
          className="transition cursor-pointer text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex flex-col justify-center px-3 mt-4 gap-y-2">
        {playlists.map((playlist) => (
          <Link className="flex " key={playlist.id} href={`/myplaylist/${playlist.id}`}>
            <Image
              className="mr-3"
              src={playlist.data.tracks[0]?.img}
              width={40}
              height={40}
              alt="playlist image [0]"
            />
            <div>
              <p>{playlist.data.playlistName}</p>
            </div>
            <Button
              onClick={() => deletePlaylist(playlist.id)}
              className="py-1 text-xs text-bold w-30"
            >
              삭제하기
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;
