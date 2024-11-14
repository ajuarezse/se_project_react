import "./ItemCard.css";
import notLikedIcon from "../../assets/notLiked.svg";
import likedIcon from "../../assets/Liked.svg";

function ItemCard({ item, onCardClick, onCardLike, currentUser, isLoggedIn }) {
  //console.log("ItemCard: currentUser:", currentUser, "item:", item);
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const isOwner = currentUser?._id === item.isOwner;
  //const itemLikeButtonClassName = `card__like-button ${
  //  isLiked ? "card__like-button_active" : ""
  //}`;

  const buttonIcon = isLiked ? likedIcon : notLikedIcon;
  const handleCardClick = () => {
    if (isLoggedIn && isOwner) {
      onCardClick(item);
    }
  };

  const handleLike = () => {
    onCardLike(item);
  };
  return (
    <li className="card">
      <h2 className="card__name">
        {item.name}
        <button
          className="card__like-button"
          onClick={handleLike}
          disabled={!isLoggedIn || isOwner}
        >
          <img
            src={buttonIcon}
            alt={isLiked ? "Unlike" : "Like"}
            className="card__like-icon"
          />
        </button>
      </h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
