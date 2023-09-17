//parent component로부터 props로 데이터를 넘겨받자.
import Image from 'next/image';
import usePlaylistTrackContext from '@/app/create-playlist/PlaylistTrackProvider';
//TODO: 타입 내부에 적기.

const SearchResult = ({ searchResult }) => {
  const results = searchResult?.data.tracks.items;
  const { playlistTracks, setPlaylistTracks } = usePlaylistTrackContext();

  function addTrack(track) {
    if (playlistTracks.every((item) => item.id !== track.id)) {
      setPlaylistTracks([
        ...playlistTracks,
        {
          id: track.id,
          img: track.album.images[0]?.url,
          name: track.name,
          artist: track.artists[0]?.name,
          duration: track.duration_ms,
        },
      ]);
    }
  }
//TODO: search bar input 값 없을 때 아무것도 안띄우도록.
//TODO: search component 통합.
  return (
    <>
      <article className="h-24">
        <div className="w-full">
          <div className="">
            {results?.map((track) => (
              <div className="relative flex flex-row px-2 py-3 " key={track.id}>
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
                <div className="absolute text-right top-5 text-[#B3B3B3] text-sm right-48">
                  {Math.floor(track.duration_ms / 60000)}:{' '}
                  {((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
                </div>
                <button className="absolute right-10 top-5" onClick={() => addTrack(track)}>
                  추가하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default SearchResult;
