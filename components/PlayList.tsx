'use client';
import { FeaturedPlaylists } from '@/types/featured-playlist-type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PlayList = () => {
  const [playlist, setPlaylist] = useState<FeaturedPlaylists>();
  useEffect(() => {
    async function fetchFeaturedPlaylists() {
      const url = 'https://seungpotify/featured-playlists';
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const featuredPlaylistData: FeaturedPlaylists = await res.json();
        console.log(featuredPlaylistData);
        setPlaylist(featuredPlaylistData);
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchFeaturedPlaylists();
  }, []);
  return (
    <>
      <h1>Playlist</h1>
      <ul>
        {playlist?.playlists.items.map((list) => (
          <li key={`${list.id}`}>
            <Image
              className="rounded-md"
              src={`${list.images[0].url}`}
              alt={`${list.name}`}
              width={64}
              height={64}
            />
            <div>
              <span>{list.name}</span>
              <span>{list.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayList;
