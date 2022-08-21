import loadingGif from "./assets/loading.gif";

const Loading = () => {
	return (
		<div className="w-100 mt-20">
			<img
				src={loadingGif}
				width="180"
				className="text-center mx-auto"
				alt=""
			/>
		</div>
	);
};

export default Loading;
