import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedWork from "../utilities/FeaturedWork";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Page from "./Page";
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
					<main>
						<title>Midhat Kazmi | Designer + Developer</title>
						<section
							className="content-width"
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></section>
						<section className="tools">
							<h2 className="screen-reader-text">Tools I Use</h2>
							{restData.acf.logos.map((tool) => (
								<figure key={tool.name}>
									<div
										dangerouslySetInnerHTML={{
											__html: tool.logo,
										}}
									></div>
									<figcaption>
										{tool.abbreviation === "" ? (
											tool.name
										) : (
											<abbr
												tabIndex={0}
												title={tool.abbreviation}
											>
												{tool.name}
											</abbr>
										)}
									</figcaption>
								</figure>
							))}
						</section>
						{/* <section id="Work">
							<h2>Featured Work</h2>
							<FeaturedWork ids={restData.acf.featured_work} />
							<Link className="link-btn" to="/work">
								View All Work
							</Link>
						</section> */}
						<Posts />
						<Page pageID={13} />
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
