import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Sidebar } from '~/components/Sidebar.tsx';
import { Footer } from '~/components/Footer.tsx';
import { ReleaseRadar } from '~/components/ReleaseRadar.tsx';
import { Playlist } from '~/components/Playlist.tsx';
import { repeatComponent } from '~/utils/repeatComponent.tsx';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">{repeatComponent(Playlist, 6)}</div>

          <h2 className="font-semibold text-2xl mt-10">Made for Almeida</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">{repeatComponent(ReleaseRadar, 6)}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
