import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./normalize-fwd.css";
import "./style.css";
import "./dark.css";
import "./responsive.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
