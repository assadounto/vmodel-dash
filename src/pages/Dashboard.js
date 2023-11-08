import { useCallback } from "react";
import UserCard from "../components/UserCard";


const Dashboard = () => {


  return (
    <div className="dashboard4">
      <img className="dashboard-child" alt="" src="/group-14.svg" />
      <b className="hello-olatunji">Hello, Olatunji</b>
      <div className="frame-parent">
        <UserCard imageCode="/frame-3.svg" entityCode="Users" />
        <UserCard
          imageCode="/frame-31.svg"
          entityCode="Coupons"
          propWidth="90px"
        />
        <UserCard
          imageCode="/frame-32.svg"
          entityCode="Services"
          propWidth="71px"
        />
        <UserCard
          imageCode="/frame-33.svg"
          entityCode="Jobs"
          propWidth="71px"
        />
        <UserCard
          imageCode="/frame-34.svg"
          entityCode="Bookings"
          propWidth="86px"
        />
        <UserCard
          imageCode="/frame-35.svg"
          entityCode="Applications"
          propWidth="103px"
        />
       
      </div>
      <div className="area"></div>
    </div>
  );
};

export default Dashboard;