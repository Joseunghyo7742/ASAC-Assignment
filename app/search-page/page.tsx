'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const page = () => {
  const [artistData, setArtistData] = useState(null);
  const [accessToken, setAccessToken] = useState('');
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
    })
      .then((response) => {
        const data = response.data;
        setAccessToken(data.access_token);
        console.log("access_token setted:",data.access_token); 
      })
      .catch((error) => console.log("Couldn't get Token", error));
  }, []);

  //search artist
  async function getArtistId(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      try {
        const response = await axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02?si=a36d801854884b0a',
          headers: {"Authorization": 'Bearer  '+  accessToken},
        });
        setArtistData(response);
        console.log("get artist",response);
      } catch (error) {
        console.log('Could not get artist data', error);
      }
    }
  }

  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <TextField
          className="text-white"
          id="standard-basic"
          variant="standard"
          onKeyDown={(e) => {
            getArtistId(e);
          }}
        />
      </Header>
    </div>
  );
};

export default page;
