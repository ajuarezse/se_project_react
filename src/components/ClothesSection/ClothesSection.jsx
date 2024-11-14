import ItemCard from "../ItemCard/ItemCard";
//import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes__header">
        <p className="clothes__section-title">Your Items</p>
        <button
          className="clothes__section-add-button"
          type="button"
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section-items">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id || item.id}
              item={item}
              //TODO - pass as prop
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
