import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./app/pages/Auth/ForgotPassword";
import Dashboard from "./app/pages/Dashboard/Dashboard";
import EmailActivation from "./app/pages/Auth/EmailActivation";
import Login from "./app/pages/Auth/Login";
import Register from "./app/pages/Auth/Register";
import CompanyRegister from "./app/pages/Auth/Company/Register";
import CompanyLogin from "./app/pages/Auth/Company/Login";
import CompanyDashboard from "./app/pages/Auth/Company/Dashboard/Index";
import Logout from "./app/pages/Auth/Logout";
import LandingPage from "./app/pages/LandingPage/LandingPage";
import BuisnessPricing from './app/pages/Auth/BuisnessPricing';
import CandidatePricing from "./app/pages/Auth/CandidatePricing";


const App = () => {

  
  return (
    
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Provider store={ store }>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/dashboard" element={<Dashboard />} />
        <Route path="/companies/login" element={<CompanyLogin />} />
        <Route path="/companies/register" element={<CompanyRegister />} />
        <Route path="/companies/dashboard" element={<CompanyDashboard />} />
        <Route path="/users/logout" element={<Logout />} />
        <Route path="/users/forgot-password" element={<ForgotPassword />} />
        <Route path="/users/user-email-activation/:randomString1/:token/:randomString2" element={<EmailActivation />} />
        <Route path="/users/buisness/pricing" element={<BuisnessPricing/>} />
        <Route path="/users/candidate/pricing" element={<CandidatePricing/>}/>
      </Routes>
      </Provider>
    </Router>
  )
  
}
export default App;