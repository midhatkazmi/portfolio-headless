import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";

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
					<main className="about">
						<title>{`${restData.title.rendered} | Midhat Kazmi`}</title>
						<section>
							<div
								className="content-width"
								dangerouslySetInnerHTML={{
									__html: restData.content.rendered,
								}}
							></div>
							{restData.acf.tool.map((badge) => (
								<figure
									className="badge"
									key={badge.name}
									style={{
										backgroundColor: badge.background_color,
										color: badge.text_color,
									}}
								>
									<div
										style={{ fill: badge.text_color }}
										dangerouslySetInnerHTML={{
											__html: badge.logo,
										}}
									></div>
									<figcaption>{badge.name}</figcaption>
								</figure>
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

export default Page;
