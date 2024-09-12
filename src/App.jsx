import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstantConsultation from "./InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./components/BookingConsultation";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/instant-consultation" element={<BookingConsultation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
