export default function NotFound() {
	return (
		<div className="min-h-screen bg-zinc-800 text-zinc-50 tracking-wide flex flex-col items-center justify-center text-center">
			<div>
				<span className="my-0 ml-0 mr-5 inline-block border-r border-solid border-white py-2 pl-0 pr-6 align-top text-2xl font-bold text-white">
					404
				</span>

				<div className="inline-block h-12 text-left align-middle leading-[49px]">
					<p className="m-0 p-0 text-sm font-normal leading-[inherit] text-white">Page not found</p>
				</div>
			</div>
		</div>
	);
}
