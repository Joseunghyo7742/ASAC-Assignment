'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from '@/app/create-playlist/SearchResult';
import { PlaylistTrackProvider } from '@/app/create-playlist/PlaylistTrackProvider';
import MyPlaylistTable from '@/app/create-playlist/MyPlaylistTable';



const page = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  const CLIENT_ID = 'fa2cfe7869ff48e5b6267e74c530c493'; //env에 넣자
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SP_CLIENT_SECRET;
  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    })
      .then((response) => {
        const data = response.data;
        setAccessToken(data.access_token);
      })
      .catch((error) => console.log("Couldn't get Token", error));
  }, [CLIENT_ID, CLIENT_SECRET]);

  //search
  async function search(searchInput) {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${searchInput}&type=track%2Calbum%2Cplaylist%2Cartist&offset=10&limit=15`,
        headers: { Authorization: 'Bearer  ' + accessToken },
      });
      setSearchResult(response);
    } catch (error) {
      console.log('Could not get search result', error);
    }
  }

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>.</Header>
      <div className="px-6">
        <PlaylistTrackProvider>
          <main className="mb-4 overflow-y-auto hover:overflow-y-scroll h-80">
            <MyPlaylistTable />
          </main>
          <section className="mt-3">
            <h1 className="mb-2 text-2xl font-bold">플레이스트에 추가할 곡을 찾아보세요</h1>
            <input
                className="px-2 mb-3 text-white"
                placeholder="search"
                onChange={(e) => {
                  search(e.target.value);
                }}
              />
            <SearchResult searchResult={searchResult} />
          </section>
        </PlaylistTrackProvider>
      </div>
    </div>
  );
};

export default page;
