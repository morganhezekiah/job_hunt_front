import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./app/pages/Auth/ForgotPassword";
import Dashboard from "./app/pages/Dashboard";
import EmailActivation from "./app/pages/Auth/EmailActivation";


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
        {/* <Route path="/" element={<Login />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} /> */}
        <Route path="/users/dashboard" element={<Dashboard />} />
        {/* <Route path="/users/forgot-password" element={<ForgotPassword />} />
        <Route path="/users/user-email-activation/:randomString1/:token/:randomString2" element={<EmailActivation />} /> */}
      </Routes>
      </Provider>
    </Router>
  )
  
}
export default App;