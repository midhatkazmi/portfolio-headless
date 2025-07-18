import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";
import "./Contact.css";

const Contact = () => {
	const restPath = restBase + "pages/26";
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

	// const copyEmail = () => {
	// 	const email = document.getElementById("Email");
	// 	navigator.clipboard.writeText(email.innerHTML);
	// };

	return (
		<>
			{isLoaded ? (
				<>
					<title>{`${restData.title.rendered} | Portfolio Headless`}</title>
					<article id={`post-${restData.id}`} className="contact">
						{/* <h1>{restData.title.rendered}</h1> */}
						<div
							className="entry-content"
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
					</article>
					{/* <a id="Email" href="mailto:hello@midhatkazmi.com">
						hello@midhatkazmi.com
					</a> */}
					{/* <button onClick={copyEmail} type="button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							role="img"
							aria-label="Clipboard Icon"
						>
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v80q0 17-11.5 28.5T640-640H320q-17 0-28.5-11.5T280-680v-80h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
						</svg>
					</button> */}
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Contact;
