import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer>
				<p>
					<small>
						&copy; 2016&ndash;{new Date().getFullYear()}{" "}
						<Link to="/">Midhat Kazmi</Link> | All Rights Reserved
					</small>
				</p>
				<p>
					<small>
						Designed +{" "}
						<a
							href="https://www.github.com/midhatkazmi/portfolio-headless"
							target="_blank"
							rel="noopener noreferrer"
						>
							coded
						</a>{" "}
						with the help of chai. &#9749;
					</small>
				</p>
			</footer>
		</>
	);
}

export default Footer;
