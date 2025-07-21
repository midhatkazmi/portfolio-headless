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
					<title>{`${restData.title.rendered} | Midhat Kazmi`}</title>
					<section className="about">
						<div
							className="content-width"
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
					</section>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Page;
