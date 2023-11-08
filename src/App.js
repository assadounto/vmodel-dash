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
                   <Route index element={<Dashboard/>} />
                  {/* <Route path="/vendors" element={<VendorPage/>} />
                  <Route path="/reviews" element={<ReviewsPage/>} />
                  <Route path="/users" element={<UsersPage/>} />  */}
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
