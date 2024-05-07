import Image from "next/image";
import releaseRadarImg from "~/assets/release-radar.jpg";

export function ReleaseRadar() {
	return (
		<a href="#" className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2">
			<Image src={releaseRadarImg} className="w-full" width={120} height={120} alt="Release Radar" />

			<strong className="font-semibold">Release Radar</strong>

			<span className="text-sm text-zinc-400">Catch all the latest music from artist you follow</span>
		</a>
	);
}
