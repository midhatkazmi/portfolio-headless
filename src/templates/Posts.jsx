import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import FeaturedImage from "../utilities/FeaturedImage";
import "./Posts.css";

const Posts = () => {
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

	return (
		<>
			{isLoaded ? (
				<>
					<title>Work | Midhat Kazmi</title>
					<section className="posts">
						<h1>My Work</h1>
						{restData.map((post) => (
							<article key={post.id} id={`post-${post.id}`}>
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
									{/* <Link to={`/work/${post.slug}`}> */}
									<h2>{post.title.rendered}</h2>
									{/* </Link> */}
									<div
										className="entry-content"
										dangerouslySetInnerHTML={{
											__html: post.excerpt.rendered,
										}}
									></div>
								</div>
								{/* <div
									dangerouslySetInnerHTML={{
										__html: post.acf.project_tools,
									}}
								></div> */}
							</article>
						))}
					</section>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Posts;
