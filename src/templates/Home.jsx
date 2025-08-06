import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import "./Home.css";
import FeaturedWork from "../utilities/FeaturedWork";
import { Link } from "react-router-dom";
import Posts from "./Posts";

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
						<Posts />
						{/* <section id="Work">
							<h2>Featured Work</h2>
							<div className="work">
								<FeaturedWork
									ids={restData.acf.featured_work}
								/>
							</div>
							<div className="content-width">
								<article className="cta">
									<h3>
										Want to see my User Experience &amp;
										Graphic Design work?
									</h3>
									<Link to="/work">View All Work</Link>
								</article>
							</div>
						</section> */}
					</main>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Home;
