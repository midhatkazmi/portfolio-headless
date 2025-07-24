import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedImage from "../utilities/FeaturedImage";
import "./Posts.css";

const Posts = () => {
	// what if buttons change chained string?
	// e.g. "posts?${category=categoryNum}&_embed"
	const restPath = restBase + "posts?_embed";
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

	const [showAll, setShowAll] = useState(true);
	const [categoryNum, setCategoryNum] = useState(null);

	function allBtn() {
		setShowAll(true);
		setCategoryNum(null);
	}

	function devBtn() {
		setShowAll(false);
		setCategoryNum(3);
	}

	function uxBtn() {
		setShowAll(false);
		setCategoryNum(25);
	}

	function designBtn() {
		setShowAll(false);
		setCategoryNum(4);
	}

	const filteredPosts =
		showAll === true
			? restData
			: restData.filter((post) => post.categories.includes(categoryNum));

	return (
		<>
			{isLoaded ? (
				<>
					<main className="work">
						<title>Work | Midhat Kazmi</title>
						<section>
							<h1>My Work</h1>
							<div className="buttons">
								<button
									className={showAll === true ? "active" : ""}
									type="button"
									onClick={allBtn}
								>
									All
								</button>
								<button
									className={
										categoryNum === 3 ? "active" : ""
									}
									type="button"
									onClick={devBtn}
								>
									Development
								</button>
								<button
									className={
										categoryNum === 25 ? "active" : ""
									}
									type="button"
									onClick={uxBtn}
								>
									User Experience
								</button>
								<button
									className={
										categoryNum === 4 ? "active" : ""
									}
									type="button"
									onClick={designBtn}
								>
									Design
								</button>
							</div>
							{filteredPosts.map((post) => (
								<article key={post.id}>
									{post.featured_media !== 0 &&
										post._embedded && (
											<FeaturedImage
												featuredImageObject={
													post._embedded[
														"wp:featuredmedia"
													][0]
												}
											/>
										)}
									<div>
										<h2
											dangerouslySetInnerHTML={{
												__html: post.title.rendered,
											}}
										></h2>
										{showAll === true && (
											<div>{post.acf.categories}</div>
										)}
										<div
											dangerouslySetInnerHTML={{
												__html: post.excerpt.rendered,
											}}
										></div>
										<ul>
											{post.acf?.tools?.map(
												(tool_name, i) => (
													<li key={i}>
														{tool_name.tool}
													</li>
												)
											)}
										</ul>
										<Link to={`/work/${post.slug}`}>
											View Project &rarr;
										</Link>
									</div>
								</article>
							))}
						</section>
					</main>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Posts;
