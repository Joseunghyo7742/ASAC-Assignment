import MyPlaylistTable from '@/app/myplaylist/[slug]/MyPlaylistTable';
import { PlaylistTrackProvider } from '@/app/myplaylist/[slug]/PlaylistTrackProvider';
import Search from '@/app/myplaylist/[slug]/Search';
import Header from '@/components/Header';

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>.</Header>
      <div className="px-6">
        <PlaylistTrackProvider playlistSlug={params.slug}>
          <main className="mb-4 overflow-y-auto hover:overflow-y-scroll h-80">
            <MyPlaylistTable />
          </main>
          <section className="mt-3">
            <Search />
          </section>
        </PlaylistTrackProvider>
      </div>
    </div>
  );
};

export default page;
