import { HomeIcon, Search, Library } from 'lucide-react';
import { repeatComponent } from '~/utils/repeatComponent.tsx';
import { WindowControls } from './WindowsControls.tsx';

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <WindowControls />

      <nav className="space-y-5 mt-10">
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-400">
        {repeatComponent(
          () => (
            <a href="#" className="hover:text-zinc-100">
              My Playlist
            </a>
          ),
          15,
        )}
      </nav>
    </aside>
  );
}
