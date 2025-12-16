import { useState, useEffect } from "react";
import Loading from "../utilities/Loading";
import { restBase } from "../utilities/Utilities";

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

	const copyEmail = () => {
		// const email = document.getElementById("Email");
		// navigator.clipboard.writeText(email.innerHTML);
		navigator.clipboard.writeText("hello@midhatkazmi.com");
	};

	return (
		<>
			{isLoaded ? (
				<>
					{/* <main className="contact"> */}
					{/* <title>{`${restData.title.rendered} | Midhat Kazmi`}</title> */}
					<section id="Contact" className="contact content-width">
						<div
							dangerouslySetInnerHTML={{
								__html: restData.content.rendered,
							}}
						></div>
						<ul>
							<li>
								<a href="mailto:hello@midhatkazmi.com">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										role="img"
										aria-label="Mail Icon"
									>
										<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" />
									</svg>
									<div>Email</div>
								</a>
								<button onClick={copyEmail} type="button">
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
								</button>
							</li>
							<li>
								<a
									href="https://www.github.com/midhatkazmi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="512"
										height="512"
										viewBox="0 0 512 512"
										role="img"
										aria-label="GitHub Logo"
									>
										<path
											d="M204.7,10.5c-68,15.2-123.8,52.9-162.1,109.9C-24.5,221.1-11.1,356,74.5,442c25.6,25.9,64.7,50.8,94.1,60.4
				c10.9,3.6,12.3,3.6,17.2,0.2c5.4-3.6,5.6-4.5,5.6-30.1v-26.3l-19.6,1.1c-23,1.1-40.8-2.9-51.5-12c-3.8-3.1-11.1-13.8-16.3-23.6
				c-8.5-16.5-14.7-24.1-32.1-39.5c-5.8-5.1-6-5.4-2-8.3c9.6-7.1,29-0.2,41.3,14.5c21.4,26.1,29.7,33,41.9,35.7
				c10.9,2.2,21,1.3,36.1-3.1c2-0.7,4.7-5.4,6-10.7c1.3-5.1,4.9-12.9,7.8-17.2l5.4-7.8l-18.1-3.6c-37.9-7.8-61.3-21.4-76.7-44.6
				c-14.3-21.4-19-39.9-19.2-74.5c0-32.6,3.6-45.9,17.6-64.2c6.2-8,6.9-10.5,5.1-15.2c-3.3-8-2.5-41.9,1.1-52.2
				c2.9-7.6,4.5-8.9,10.5-9.6c10-1.1,28.8,5.4,47.7,16.1l16.3,9.4l14.3-3.3c20.3-4.7,81.2-4.5,99.5,0l13.8,3.6l12.9-7.8
				c17.2-10.3,39-18.3,50-18.3c8.7,0,8.7,0.2,12.3,11.6c3.8,13.2,4.5,37,1.1,48.4c-1.8,6.7-1.3,8.7,3.6,15.2
				c24.3,32.1,27,85.4,6.5,129.1c-13.8,28.8-43,48.8-82.3,56.2l-18.7,3.6l6.9,12.3l7.1,12.5l0.7,49.7l0.9,49.7l5.6,3.6
				c5.1,3.3,6.2,3.3,16.9-0.4c17.8-6,48.4-22.5,65.1-35.2c99.5-74.5,131.6-208.1,76.5-319.1C452.9,82.8,391.8,32.6,321.8,13.9
				C291.2,5.9,233.7,4.1,204.7,10.5z"
										/>
									</svg>
									<div>GitHub</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										role="img"
										aria-label="Northeast Arrow Icon"
									>
										<path d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/midhatkazmi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="512"
										height="512"
										viewBox="0 0 512 512"
										role="img"
										aria-label="LinkedIn Logo"
									>
										<path
											d="M474.9,0H38.6C17.7,0,0,16.5,0,36.8v438.3
				C0,495.5,11.6,512,32.5,512h436.3c20.9,0,43.2-16.5,43.2-36.9V36.8C512,16.5,495.8,0,474.9,0z M195,195H264v35.1h0.8
				c10.5-18.9,41.5-38.2,79.9-38.2c73.7,0,94.2,39.1,94.2,111.5v135.3h-73.1v-122c0-32.4-12.9-60.9-43.2-60.9
				c-36.8,0-54.3,24.9-54.3,65.8v117.1H195V195z M73.1,438.9h73.1V195H73.1V438.9z M155.4,109.7c0,25.2-20.4,45.7-45.7,45.7
				C84.5,155.4,64,135,64,109.7S84.5,64,109.7,64C135,64,155.4,84.5,155.4,109.7z"
										/>
									</svg>
									<div>LinkedIn</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 -960 960 960"
										width="24px"
										role="img"
										aria-label="Northeast Arrow Icon"
									>
										<path d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z" />
									</svg>
								</a>
							</li>
						</ul>
					</section>
					{/* </main> */}
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Contact;
