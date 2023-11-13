import { useCallback } from "react";
import UserCard from "../components/UserCard";
import { useSelector } from "react-redux";
import { useAnalyticsQuery } from "../redux/user";

const Dashboard = () => {
  const user = useSelector((state)=>state.user.user)

  const {data,isLoading}= useAnalyticsQuery()
  console.log(data)

  return (
    <div className="dashboard4">
      <img className="dashboard-child" alt="" src="/group-14.svg" />
      <b className="hello-olatunji">Hello, </b>
      <div className="frame-parent">
        <UserCard imageCode="/frame-3.svg" value={data?.data.total_number_of_users} entityCode="Users" />
        <UserCard
          imageCode="/frame-31.svg"
          entityCode="Coupons"
          propWidth="90px"
          value={data?.data.total_number_of_coupons}
        />
        <UserCard
          imageCode="/frame-32.svg"
          entityCode="Services"
          propWidth="71px"
          value={data?.data.total_number_of_services}
        />
        <UserCard
          imageCode="/frame-33.svg"
          entityCode="Jobs"
          propWidth="71px"
          value={data?.data.total_number_of_jobs}
        />
        <UserCard
          imageCode="/frame-34.svg"
          entityCode="Bookings"
          propWidth="86px"
          value={data?.data.total_number_of_bookings}

        />
        <UserCard
          imageCode="/frame-35.svg"
          entityCode="Applications"
          propWidth="103px"
          value={data?.data.total_number_of_applications}
        />
       
      </div>
      <div className="area"></div>
    </div>
  );
};

export default Dashboard;