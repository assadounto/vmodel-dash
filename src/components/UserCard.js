import { useMemo } from "react";


const UserCard = ({ imageCode, entityCode, propWidth ,value}) => {
  const usersStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="frame-wrapper">
      <div className="frame-group">
        <img className="frame-child" alt="" src={imageCode} />
        <div className="users-parent">
          <div className="users1" style={usersStyle}>
            {entityCode}
          </div>
          <b className="b">{value}</b>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
