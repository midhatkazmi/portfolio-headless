import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedWork from "../utilities/FeaturedWork";
import { Link } from "react-router-dom";
import Contact from "./Contact";

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
					<main>
						<title>Midhat Kazmi | Designer + Developer</title>
						<section
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></section>
						<section className="tools">
							<h2 className="screen-reader-text">Tools I Use</h2>
						</section>
						{/* <section id="Work">
							<h2>Featured Work</h2>
							<FeaturedWork ids={restData.acf.featured_work} />
							<Link className="link-btn" to="/work">
								View All Work
							</Link>
						</section> */}
						<Contact />
					</main>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Home;
