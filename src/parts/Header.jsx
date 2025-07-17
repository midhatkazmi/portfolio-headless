import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../assets/img/logo.svg";

function Header() {
	const [navVisible, setNavVisible] = useState(false);
	const [darkTheme, setDarkTheme] = useState(false);

	function toggleNav() {
		setNavVisible(function (prevState) {
			if (prevState === false) {
				return true;
			} else {
				return false;
			}
		});
	}

	function toggleTheme() {
		setDarkTheme(function (prevState) {
			if (prevState === false) {
				return true;
			} else {
				return false;
			}
		});
	}

	useEffect(() => {
		const root = document.getElementById("root");

		if (darkTheme === true) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [darkTheme]);

	return (
		<>
			<header>
				<div className="bar">
					<Link className="logotype" to="/">
						<img src={logo} alt="Midhat Kazmi Logo" />
						<div>Midhat Kazmi</div>
					</Link>

					<div className="buttons">
						<button onClick={toggleTheme} type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								role="img"
								aria-label="Sun Icon"
							>
								<path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
							</svg>
						</button>

						<button onClick={toggleNav} type="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								role="img"
								aria-label={
									navVisible === false
										? "Nav Icon"
										: "Close Icon"
								}
							>
								<path
									d={
										navVisible === false
											? "M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
											: "M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
									}
								/>
							</svg>
						</button>
					</div>
				</div>

				<nav className={navVisible === false ? "hidden" : "visible"}>
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
		</>
	);
}

export default Header;
