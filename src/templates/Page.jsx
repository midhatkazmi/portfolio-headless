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
							{restData.acf.tool.map((toolIndex) => (
								<figure
									key={toolIndex.name}
									style={{
										backgroundColor:
											toolIndex.background_color,
									}}
								>
									<figcaption>{toolIndex.name}</figcaption>
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
