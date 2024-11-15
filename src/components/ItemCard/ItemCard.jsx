import "./ItemCard.css";
import notLikedIcon from "../../assets/notLiked.svg";
import likedIcon from "../../assets/Liked.svg";

function ItemCard({ item, onCardLike, currentUser, isLoggedIn, onCardClick }) {
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const isOwner = currentUser?._id === item.owner;

  const buttonIcon = isLiked ? likedIcon : notLikedIcon;
  const handleCardClick = () => {
    onCardClick(item);
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
