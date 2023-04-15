import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react';
import Image from 'next/image';
import albumImg from '~/assets/album.jpg';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={albumImg}
          width={56}
          height={56}
          alt="Cover image of the beerbongs & bentleys album, by Post Malone"
        />

        <div className="flex flex-col">
          <strong className="font-normal">rockstar</strong>
          <span className="text-xs text-zinc-400">Post Malone, 21 Savage</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6 text-zinc-200">
          <Shuffle size={20} />

          <SkipBack size={20} />

          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} />

          <Repeat size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span>0:58</span>

          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>

          <span>3:38</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />

        <div className="flex items-center gap-2">
          <Volume size={20} />

          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>

        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
