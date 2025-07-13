import { Route, Routes, Link, NavLink } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Home from "./templates/Home";
import Posts from "./templates/Posts";
import Post from "./templates/Post";
import Contact from "./templates/Contact";
import Page from "./templates/Page";
import { useState } from "react";

function App() {
	return (
		<>
			<ScrollToTop />
			<header id="masthead" className="site-header">
				<div className="bar">
					{/* <div className="site-branding"> */}
					{/* <p className="site-title"> */}
					<Link to="/">Midhat Kazmi</Link>
					{/* </p> */}
					{/* </div> */}
					<div className="buttons">
						<button id="Theme-Btn" type="button">
							<svg
								className="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								role="img"
								aria-label="Sun Icon"
							>
								<path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Z" />
							</svg>
						</button>
						<button id="Nav-Btn" type="button">
							<svg
								className="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								role="img"
								aria-label="Nav Icon"
							>
								<path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
							</svg>
						</button>
					</div>
				</div>
				<nav id="Nav" className="site-navigation">
					<ul>
						<li>
							<NavLink to="/" end>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/work">Work</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main id="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work" element={<Posts />} />
					<Route path="/work/:slug" element={<Post />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<Page pageID="13" />} />
				</Routes>
			</main>
			<footer>
				{/* <nav className="site-navigation">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
					</nav> */}
				<section>
					<h2>Drop me a line.</h2>
					<p>
						Email me at{" "}
						<a href="mailto:hello@midhatkazmi.com">
							hello@midhatkazmi.com
						</a>
						.
					</p>
					<button type="button">
						<svg
							className="icon"
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							role="img"
							aria-label="Clipboard Icon"
						>
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v80q0 17-11.5 28.5T640-640H320q-17 0-28.5-11.5T280-680v-80h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
						</svg>
						<div>Copy Email</div>
					</button>
					<div className="socials">
						<a
							href="mailto:hello@midhatkazmi.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								className="logo"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								role="img"
								aria-label="Email Icon"
							>
								<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" />
							</svg>
						</a>
						<a
							href="https://github.com/midhatkazmi/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								className="logo"
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
						</a>
						<a
							href="https://linkedin.com/in/midhatkazmi/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								className="logo"
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
						</a>
					</div>
					<p>Powered by chai. &#9749;</p>
				</section>
				<p className="copyright">
					<small>
						&copy; 2016&ndash;2025 <a href="/">Midhat Kazmi</a> |
						All Rights Reserved
					</small>
				</p>
			</footer>
		</>
	);
}

export default App;
