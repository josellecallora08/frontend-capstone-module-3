import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstantConsultation from "./InstantConsultationBooking/InstantConsultation";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InstantConsultation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
