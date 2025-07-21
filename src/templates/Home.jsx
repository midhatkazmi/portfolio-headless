import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import "./Home.css";

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
					<main className="home">
						<title>Midhat Kazmi | Front-End Web Developer</title>
						<div
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
					</main>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Home;
