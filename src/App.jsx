/* Κεντρικό component της εφαρμογής.
Είναι υπεύθυνο για τη δρομολόγηση (Routing) μεταξύ όλων των σελίδων χρησιμοποιώντας το React Router.
Ανάλογα με τη διαδρομή (URL), εμφανίζεται η αντίστοιχη σελίδα της εφαρμογής (Επιβάτης, Οδηγός, Υπάλληλος κτλ.) */


import './App.css'
import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash/Splash";
import ChooseRole from './pages/ChooseRole/ChooseRole';
import Passenger from "./pages/Passenger/Passenger";
import Driver from "./pages/Driver/Driver";
import Employee from "./pages/Employee/Employee";
import DrivingAssistance from "./pages/DrivingAssistance/DrivingAssistance";
import ClimateControl from "./pages/ClimateControl/ClimateControl";
import CleaningRobot from "./pages/CleaningRobot/CleaningRobot";
import RoofControl from "./pages/RoofControl/RoofControl";
import LiveView from "./pages/LiveView/LiveView";
import Attractions from "./pages/Attractions/Attractions";
import CoffeeOrdering from "./pages/CoffeeOrdering/CoffeeOrdering";
import WalkingTour from "./pages/WalkingTour/WalkingTour";

function App() {
  return (
    <Routes>
      {/* Αρχική οθόνη */}
      <Route path="/" element={<Splash />} />

      {/* Οθόνη επιλογής ρόλου */}
      <Route path="/choose-role" element={<ChooseRole />} />

      {/* Σελίδες επιβάτη */}
      <Route path="/passenger" element={<Passenger />} />
      <Route path="/live-view" element={<LiveView />} />
      <Route path="/attractions" element={<Attractions />} />
      <Route path="/coffee-ordering" element={<CoffeeOrdering />} />
      <Route path="/walking-tour" element={<WalkingTour />} />
      
      {/* Σελίδες οδηγού */}
      <Route path="/driver" element={<Driver />} />
      <Route path="/driving-assistance" element={<DrivingAssistance />} />
      <Route path="/climate-control" element={<ClimateControl />} />

      {/* Σελίδες υπαλλήλου */}
      <Route path="/employee" element={<Employee />} />
      <Route path="/cleaning-robot" element={<CleaningRobot />} />
      <Route path="/roof-control" element={<RoofControl />} />

    </Routes>
  );
}

export default App;