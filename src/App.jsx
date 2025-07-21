import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop";
import Home from "./templates/Home";
import Contact from "./templates/Contact";
import Page from "./templates/Page";
import Posts from "./templates/Posts";
import Post from "./templates/Post";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

function App() {
	return (
		<>
			<ScrollToTop />
			<Header />
			{/* <main> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<Page pageID="13" />} />
				<Route path="/work" element={<Posts />} />
				<Route path="/work/:slug" element={<Post />} />
			</Routes>
			{/* </main> */}
			<Footer />
		</>
	);
}

export default App;
