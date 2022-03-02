import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./app/pages/Auth/ForgotPassword";
import Dashboard from "./app/pages/Dashboard/Dashboard";
import EmailActivation from "./app/pages/Auth/EmailActivation";
<<<<<<< HEAD
import Login from "./app/pages/Auth/Login";
import Register from "./app/pages/Auth/Register";
import Logout from "./app/pages/Auth/Logout";
import LandingPage from "./app/pages/LandingPage/LandingPage";
=======
import LandingPage  from "./app/pages/LandingPage";
import Login from './app/pages/Auth/Login'
>>>>>>> 794576fed6636589861a9ff3346a8e0efa70e69a


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
<<<<<<< HEAD
        <Route path="/" element={<LandingPage />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/dashboard" element={<Dashboard />} />
        <Route path="/users/logout" element={<Logout />} />
        <Route path="/users/forgot-password" element={<ForgotPassword />} />
        <Route path="/users/user-email-activation/:randomString1/:token/:randomString2" element={<EmailActivation />} />
=======
         <Route path="/" element={<Login />} />
        {/* <Route path="/users/login" element={<Login />} /> */}
        <Route path="/users/register" element={<Dashboard/>} />  
        <Route path="/users/dashboard" element={<LandingPage/>} />
        {/* <Route path="/users/forgot-password" element={<ForgotPassword />} />
        <Route path="/users/user-email-activation/:randomString1/:token/:randomString2" element={<EmailActivation />} /> */}
>>>>>>> 794576fed6636589861a9ff3346a8e0efa70e69a
      </Routes>
      </Provider>
    </Router>
  )
  
}
export default App;