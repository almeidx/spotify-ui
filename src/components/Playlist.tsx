import { Play } from "lucide-react";
import Image from "next/image";
import albumImg from "~/assets/album.jpg";

export function Playlist() {
	return (
		<a
			href="#"
			className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group"
		>
			<Image
				src={albumImg}
				width={104}
				height={104}
				alt="Cover image of the beerbongs & bentleys album, by Post Malone"
			/>

			<strong>beerbongs & bentleys</strong>

			<button
				className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible"
				type="button"
			>
				<Play />
			</button>
		</a>
	);
}
