import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function SideBar({ openEditProfileModal, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <div className="sidebar">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="default avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__directory">
        <button
          type="button"
          className="sidebar__button"
          onClick={openEditProfileModal}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__button"
          onClick={handleSignOut}
        >
          Log out
        </button>
      </div>
    </>
  );
}

export default SideBar;
