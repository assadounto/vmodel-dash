import logo from './logo.svg';
import './App.css';

function App() {
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
      </Routes>

     </BrowserRouter>

  );
}

export default App;
