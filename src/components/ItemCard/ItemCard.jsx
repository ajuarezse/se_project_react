import "./ItemCard.css";
import notLikedIcon from "../../assets/notLiked.svg";
import likedIcon from "../../assets/Liked.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function getOptimizedImageUrl(url) {
  if (!url) return "";
  const cleanUrl = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${cleanUrl}&w=324&h=326&fit=cover`;
}

function ItemCard({ item, onCardLike, isLoggedIn, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = Array.isArray(item.likes)
    ? item.likes.some((id) => id === currentUser?._id)
    : false;
  const isOwner = currentUser?._id === item.owner;

  const buttonIcon = isLiked ? likedIcon : notLikedIcon;
  const cardClassName = `${isLoggedIn ? "card__name" : "card__name-inactive"}`;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    console.log("onCardLike in ItemCard called with:", {
      id: item._id,
      isLiked: isLiked,
    });
    onCardLike({ id: item._id, isLiked: isLiked });
  };

  return (
    <li className="card">
      <h2 className={cardClassName}>
        {item.name}
        {isLoggedIn ? (
          <button className="card__like-button" onClick={handleLike}>
            <img
              src={buttonIcon}
              alt={isLiked ? "Unlike" : "Like"}
              className="card__like-icon"
            />
          </button>
        ) : (
          ""
        )}
      </h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={getOptimizedImageUrl(item.imageUrl)}
        alt={item.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/fallback-image.png";
        }}
      />
    </li>
  );
}

export default ItemCard;
