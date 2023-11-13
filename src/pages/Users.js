import { useState, useCallback, useEffect } from "react";
import Profile from "../components/Profile";
import PortalPopup from "../components/PortalPop";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import Table from "../components/UsersTable";
import { useGetUsersQuery } from "../redux/user";
const Users = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const { data } = useGetUsersQuery(1);

  const keys = ['email', 'username', 'display_name', 'firstName', 'last_name', 'country'];

  // Function to convert object array to 2D array
  const convertObjectArrayTo2DArray = (data, keys) => {
    return data.map(item => keys.map(key => item[key] || ''));
  };

  const tableData = data ? convertObjectArrayTo2DArray(data.results, keys) : [];

  console.log('data:', data);
  console.log('keys:', keys);
  console.log('tableData:', tableData);
  return (
    <>
    <div className="dashboard4">

   
      <div className="frame-parent">
        <UserCard
          imageCode="/frame-31.svg"
          entityCode="Users"
          propWidth="90px"
         value={'147'}
        />
        <UserCard
          imageCode="/frame-32.svg"
          entityCode="Admins"
          propWidth="71px"
          value={"147"}
        />
        <UserCard
          imageCode="/frame-33.svg"
          entityCode="Banned"
          propWidth="71px"
          value={'37'}
        />
        </div>
        {/* {data && (
          <Table data={tableData} keys={keys} />
        )}     */}
          </div>
    </>
  );
};

export default Users;
