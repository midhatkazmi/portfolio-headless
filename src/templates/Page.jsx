import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import "./Page.css";

const Page = ({ pageID }) => {
	const restPath = restBase + `pages/${pageID}`;
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
					<title>{`${restData.title.rendered} | Portfolio Headless`}</title>
					<article id={`post-${restData.id}`} className="page">
						{/* <h1>{restData.title.rendered}</h1> */}
						<div
							className="entry-content"
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
					</article>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Page;
