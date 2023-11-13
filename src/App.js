import AdminLayout from "./layout/AdminLayout";
import PrivateRoute from "./layout/PrivateRoute";
import "./assets/stylesheets/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { setuser } from "./redux/login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Users from "./pages/Users";
function App() {
    const dispatch= useDispatch()

   useEffect(()=>{
    dispatch(setuser(JSON.parse(localStorage.getItem('user'))))
   },[])

  const isAuthenticated= localStorage.getItem('token') !== null;
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage/>} />
        <Route
          path="/admin/*"
          element={
               
                isAuthenticated? 
               
              <AdminLayout>
                <Routes>
                   <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/users" element={<Users/>}/>
                  <Route path="/services" element={<h3>swervices coming soon</h3>} />
                  <Route path="/bookings" element={<h3>bookings coming soon</h3>} /> 
                  <Route path="/coupons" element={<h3>coupons coming soon</h3>} /> 
                  <Route path="/reports" element={<h3>reports coming soon</h3>} /> 
                  <Route path="/ads" element={<h3>ads coming soon</h3>} /> 
                </Routes>
              </AdminLayout>:<LoginPage/>
          }
        />
          <Route path="/login" element={<LoginPage/>} />
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
