import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  openEditProfileModal,
  handleSignOut,
}) {
  console.log(clothingItems);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          openEditProfileModal={openEditProfileModal}
          handleSignOut={handleSignOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
