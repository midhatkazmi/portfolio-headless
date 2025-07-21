import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";

const Home = () => {
	const restPath = restBase + "pages/9";
	const [restData, setData] = useState([]);
	const [isLoaded, setLoadStatus] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(restPath);
			if (response.ok) {
				const data = await response.json();
				setData(data);
				setLoadStatus(true);
			} else {
				setLoadStatus(false);
			}
		};
		fetchData();
	}, [restPath]);

	return (
		<>
			{isLoaded ? (
				<>
					{/* <title>{`${restData.title.rendered} | Mindset Headless`}</title> */}
					<title>Midhat Kazmi | Front-End Web Developer</title>
					<div id={`post-${restData.id}`}>
						{/* <h1>{restData.title.rendered}</h1> */}
						<div
							className="entry-content"
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
					</div>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Home;
