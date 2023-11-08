import AdminLayout from "./layout/AdminLayout";
import PrivateRoute from "./layout/PrivateRoute";
import "./assets/stylesheets/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
 
  const isAuthenticated= true

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute
            element={
              <AdminLayout>
                <Routes>
                   <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/users" element={<h3>userpage coming soon</h3>} />
                  <Route path="/services" element={<h3>swervices coming soon</h3>} />
                  <Route path="/bookings" element={<h3>bookings coming soon</h3>} /> 
                  <Route path="/coupons" element={<h3>coupons coming soon</h3>} /> 
                  <Route path="/reports" element={<h3>reports coming soon</h3>} /> 
                  <Route path="/ads" element={<h3>ads coming soon</h3>} /> 
                </Routes>
              </AdminLayout>
            }
            isAuthenticated={isAuthenticated}
          />
          }
        />
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
