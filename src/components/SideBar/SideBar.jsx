import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser.avatar}
        alt="default avatar"
      />
      <p className="sidebar__username">{currentUser?.name}</p>
    </div>
  );
}

export default SideBar;
