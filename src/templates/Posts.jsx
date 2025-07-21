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
					<main className="work">
						<title>Work | Midhat Kazmi</title>
						<section>
							<h1>My Work</h1>
							{/* have button selector here like movie that changes what posts are being mapped */}
							{restData.map((post) => (
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
										<h2>{post.title.rendered}</h2>
										<Link to={`/work/${post.slug}`}>
											View Project &rarr;
										</Link>
										<div
											className="entry-content"
											dangerouslySetInnerHTML={{
												__html: post.excerpt.rendered,
											}}
										></div>
										{/* {post.acf.featured_work && <div>true</div>} */}
										{/* check if tools is TRUE, then loop through */}
										{/* <div>{post.acf.tools.name}</div> */}
										{/* {post.acf.tools.length > 0 && */}
										{/* // console.log(post.acf.tools[0][0].name)} */}
										{/* post.acf.tools[0].name} */}
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
