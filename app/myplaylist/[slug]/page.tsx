'use client';
import { useEffect, useState } from 'react';

import axios from 'axios';

import MyPlaylistTable from '@/app/myplaylist/[slug]/MyPlaylistTable';
import { PlaylistTrackProvider } from '@/app/myplaylist/[slug]/PlaylistTrackProvider';
import SearchResult from '@/app/myplaylist/[slug]/SearchResult';
import Header from '@/components/Header';

const page = ({ params }: { params: { slug: string } }) => {
  const [accessToken, setAccessToken] = useState('');

  //access Token
  const CLIENT_ID = process.env.NEXT_PUBLIC_SP_CLIENT_ID; //env에 넣자
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
  }, []);
  //바뀌지않는 값을 ependencyㅔ 너흘 필요가 없다. 여기가 오히려 context

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>.</Header>
      <div className="px-6">
        <PlaylistTrackProvider playlistSlug={params.slug}>
          <main className="mb-4 overflow-y-auto hover:overflow-y-scroll h-80">
            <MyPlaylistTable />
          </main>
          <section className="mt-3"></section>
        </PlaylistTrackProvider>
      </div>
    </div>
  );
};

export default page;
