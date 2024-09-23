import HomePage from "./HomePage";
import Terms from "./Terms";
import Privacy from "./Privacy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    );
}

export default App;
