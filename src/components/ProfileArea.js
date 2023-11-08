import { useState, useMemo, useCallback } from "react";
import Profile from "./Profile";
import PortalPopup from "./PortalPop";
import arrow from "../assets/svgs/gridicons_dropdown.svg"
import user from "../assets/svgs/ellipse-15.svg"

const ProfileArea = ({ frameDivPosition, frameDivTop, frameDivLeft }) => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  const openProfile = useCallback(() => {
    setProfileOpen(true);
  }, []);

  const closeProfile = useCallback(() => {
    setProfileOpen(false);
  }, []);

  return (
    <>
      <div className="ellipse-parent" style={frameDivStyle}>
        <img className="component-child" alt="" src={user} />
        <div className="olatunji-parent" onClick={openProfile}>
          <div className="olatunji">Olatunji</div>
          <div className="view-profile-parent">
            <div className="view-profile">View Profile</div>
            <img
              className="gridiconsdropdown"
              alt=""
              src={arrow}
            />
          </div>
        </div>
      </div>
      {isProfileOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeProfile}
        >
          <Profile onClose={closeProfile} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileArea;
