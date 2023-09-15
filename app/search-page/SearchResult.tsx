//parent component로부터 props로 데이터를 넘겨받자.
import Image from 'next/image';

//TODO: 타입 내부에 적기.

const SearchResult = (input) => {
  const searchResult = input.searchResult?.data;
  const albums = searchResult?.albums.items;
  const playlists = searchResult?.playlists.items;
  const artists = searchResult?.artists.items;
  const tracks = searchResult?.tracks.items;

  console.log(searchResult);
  return (
    <>
      <article className="flex h-24 px-6">
        <div className="w-2/5">
          <h1 className="mb-2 text-2xl font-bold ">상위 결과</h1>
        </div>
        <div className="w-3/5">
          <h1 className="mb-2 text-2xl font-bold">곡</h1>
          <div className="bg-black ">
            {tracks?.slice(0, 5).map((track) => (
              <div className="relative flex flex-row px-2 py-3" key={track.id}>
                <Image
                  className="mr-3"
                  src={track.album.images[0]?.url}
                  width={40}
                  height={40}
                  alt="track image"
                />
                <div>
                  <p className="font-bold">{track.name}</p>
                  <p className="text-sm font-semibold text-[#B3B3B3]">{track.artists[0]?.name}</p>
                </div>
                <div className="absolute text-right top-5 text-[#B3B3B3] text-sm right-10">
                  {Math.floor(track.duration_ms / 60000)}:{' '}
                  {((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default SearchResult;
