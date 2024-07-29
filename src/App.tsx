import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OnboardingForm from "./Flows/OnboardingForm";
import { Feeds } from "./Flows/Feeds";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/feeds"
          element={
            <div className="feeds">
              <Feeds />
            </div>
          }
        />
        <Route
          path="/onboarding"
          element={
            <div className="App">
              <OnboardingForm />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="App">
              <OnboardingForm />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
