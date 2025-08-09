import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { restBase } from "./Utilities";
import FeaturedImage from "./FeaturedImage";

const FeaturedWork = ({ ids }) => {
	// Update the restPath to query the Work post type
	// Only include posts that match the ids passed in: https://developer.wordpress.org/rest-api/reference/posts/#arguments
	// Make sure to get the featured image data too
	const restPath =
		restBase + `posts?include=${ids}&_embed&acf_format=standard`;
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
				<div className="work">
					{/* 
                Map through the restData which should contain your 4 Work posts.
                Output the title and featured image of each post wrapped in an article tag.
                Use the provided component to output the featured image.
                After the Loop, add a link to the React app's Work page.
                */}
					{restData.map((post) => (
						<article key={post.id}>
							{post.featured_media !== 0 && post._embedded && (
								<FeaturedImage
									featuredImageObject={
										post._embedded["wp:featuredmedia"][0]
									}
								/>
							)}
							<div>
								<ul>
									<li className="category">
										{post.acf.categories}
									</li>
									{post.acf.tools !== false &&
										post.acf?.tools?.map((tool_name, i) => (
											<li key={i}>{tool_name.tool}</li>
										))}
								</ul>
								<h3>{post.title.rendered}</h3>
								<div
									className="excerpt"
									dangerouslySetInnerHTML={{
										__html: post.excerpt.rendered,
									}}
								></div>
								<p>
									<Link to={`/work/${post.slug}`}>
										Read More &rarr;
									</Link>
								</p>
							</div>
						</article>
					))}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default FeaturedWork;
