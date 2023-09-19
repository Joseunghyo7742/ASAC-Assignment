'use client';
import { useState } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';

import SearchResult from '@/app/myplaylist/[slug]/SearchResult';

const Search = () => {
  const [searchResult, setSearchResult] = useState(null);
  //React toolkit read access_token
  const accessToken = useSelector((state) => (state.userReducer.user.ACCESS_TOKEN));

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
    <>
      <h1 className="mb-2 text-2xl font-bold">플레이스트에 추가할 곡을 찾아보세요</h1>
      <input
        className="px-2 mb-3 text-white"
        placeholder="search"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      <SearchResult searchResult={searchResult} />
    </>
  );
};

export default Search;
