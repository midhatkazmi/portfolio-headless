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
						<section className="stack">
							<figure>
								<img
									src="./../src/assets/img/logos/git-logo.svg"
									alt="Git Logo"
								/>
								<figcaption>Git</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/html-logo.svg"
									alt="Hypertext Markup Language Logo"
								/>
								<figcaption>
									<abbr
										tabIndex="0"
										title="Hypertext Markup Language"
									>
										HTML5
									</abbr>
								</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/css-logo.svg"
									alt="Cascading Style Sheets Logo"
								/>
								<figcaption>
									<abbr
										tabIndex="0"
										title="Cascading Styles Sheets"
									>
										CSS3
									</abbr>
								</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/sass-logo.svg"
									alt="Syntactically Awesome Style Sheets Logo"
								/>
								<figcaption>
									<abbr
										tabIndex="0"
										title="Syn&shy;tactically Awesome/Sassy Cascading Styles Sheets"
									>
										SASS/SCSS
									</abbr>
								</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/python-logo.svg"
									alt="Python Logo"
								/>
								<figcaption>Python</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/javascript-logo.svg"
									alt="JavaScript Logo"
								/>
								<figcaption>JavaScript</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/react-logo.svg"
									alt="React Logo"
								/>
								<figcaption>React</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/php-logo.svg"
									alt="Hypertext Preprocessor Logo"
								/>
								<figcaption>
									<abbr
										tabIndex="0"
										title="Hypertext Pre&shy;processor"
									>
										PHP
									</abbr>
								</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/mysql-logo.svg"
									alt="My Sequal Query Language Logo"
								/>
								<figcaption>
									<abbr
										tabIndex="0"
										title="My Sequel Query Language"
									>
										MySQL
									</abbr>
								</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/wordpress-logo.svg"
									alt="WordPress Logo"
								/>
								<figcaption>WordPress</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/woocommerce-logo.svg"
									alt="WooCommerce Logo"
								/>
								<figcaption>Woo&shy;Commerce</figcaption>
							</figure>
							<figure>
								<img
									src="./../src/assets/img/logos/shopify-logo.svg"
									alt="Shopify Logo"
								/>
								<figcaption>Liquid</figcaption>
							</figure>
						</section>
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
