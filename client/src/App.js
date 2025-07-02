import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import FitnessHistory from './components/Dashboard/FitnessHistory';
import CalorieCalculator from './components/Dashboard/CalorieCalculator';
import AddRecord from './components/Dashboard/AddRecord';
import Profile from './components/Dashboard/Profile';
import PaymentsPage from './components/Dashboard/PaymentPage';
import SlotBooking from './components/Dashboard/SlotBooking';
import AvailableSlots from './components/Dashboard/AvailableSlots';
import ReservedSlots from './components/Dashboard/ReservedSlots';
import Invoice from './components/Dashboard/Invoice';
import InvoicesList from './components/Dashboard/InvoicesList';
import BMICalculator from './components/Dashboard/BMICalculator';
import DietPlan from './components/Dashboard/DietPlan';
import Stopwatch from './components/Dashboard/Stopwatch';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fitness-history" element={<FitnessHistory />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator />} />
          <Route path="/add-record" element={<AddRecord />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paymentpage" element={<PaymentsPage />} />
          <Route path="/invoice/:invoiceId" element={<Invoice />} />
          <Route path="/invoices" element={<InvoicesList />} />
          <Route path="/availableslots" element={<AvailableSlots />} />
          <Route path="/bookslots" element={<SlotBooking />} />
          <Route path="/reservedslots" element={<ReservedSlots />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/dietplan" element={<DietPlan />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
