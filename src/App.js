import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Solutions from "./Pages/Solutions";
import "./style/style.css";
import SolutionDetail from "./Pages/SolutionDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/Solutions">
          <Route index element={<Solutions />} />
        </Route>
        <Route path="/solutiondetail/:id">
          <Route index element={<SolutionDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
