'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
  const [artistData, setArtistData] = useState(null);
  const CLIENT_ID = 'fa2cfe7869ff48e5b6267e74c530c493';
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_SP_CLIENT_SECRET;
  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }).then((response) => console.log(response));
  }, []);

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>hehe</Header>
    </div>
  );
};

export default page;
