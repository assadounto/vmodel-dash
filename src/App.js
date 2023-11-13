
import "./assets/stylesheets/App.scss"
import LoginPage from "./pages/LoginPage";
import Users from "./pages/Users";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes,Navigate, useNavigate } from "react-router-dom";

function App() {
  const Authenticated = localStorage.getItem('token') !== null;
  console.log(Authenticated)

  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/services" element={<h3>Services coming soon</h3>} />
                <Route path="/bookings" element={<h3>Bookings coming soon</h3>} />
                <Route path="/coupons" element={<h3>Coupons coming soon</h3>} />
                <Route path="/reports" element={<h3>Reports coming soon</h3>} />
                <Route path="/ads" element={<h3>Ads coming soon</h3>} />
              </Routes>
            </AdminLayout>
          }
        />

        
      </Routes>

     </BrowserRouter>

  );
}

export default App;
