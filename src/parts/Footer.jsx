import { Link } from "react-router-dom";
import "./Footer.css";

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
					<small>Powered by chai. &#9749;</small>
				</p>
			</footer>
		</>
	);
}

export default Footer;
