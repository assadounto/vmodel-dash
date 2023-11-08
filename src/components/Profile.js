
import logout from "../assets/svgs/basil_logout-solid.svg"
import settings from "../assets/svgs/Group.svg"
const Profile = () => {
  return (
    <div className="profile">
      <div className="basilsettings-outline-parent">
        <img
          className="basilsettings-outline-icon"
          alt=""
          src={settings}
        />
        <div className="settings">Settings</div>
      </div>
      <div className="basillogout-solid-parent">
        <img
          className="basilsettings-outline-icon"
          alt=""
          src={logout}
        />
        <div className="settings">Sign Out</div>
      </div>
    </div>
  );
};

export default Profile;
