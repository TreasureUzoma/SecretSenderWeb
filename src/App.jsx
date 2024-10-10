import HomePage from "./HomePage";
import Terms from "./Terms";
import Privacy from "./Privacy";
import About from "./About";
import Message from "./Message";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Message />} />
            </Routes>
        </Router>
    );
}

export default App;
