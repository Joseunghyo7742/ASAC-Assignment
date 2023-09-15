'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import SearchResult from '@/app/search-page/SearchResult';

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
        console.log('access_token setted:', data.access_token);
      })
      .catch((error) => console.log("Couldn't get Token", error));
  }, []);

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
      <Header>
        <TextField
          className="text-white "
          id="standard-basic"
          variant="standard"
          onChange={(e)=>{
            search(e.target.value)
          }}
        />
      </Header>
      <main>
        <SearchResult searchResult={searchResult}/>
      </main>
    </div>
  );
};

export default page;
