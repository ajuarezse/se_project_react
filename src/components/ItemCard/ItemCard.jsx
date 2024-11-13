import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  console.log("ItemCard: currentUser:", currentUser, "item:", item);
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item);
  };
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {currentUser && (
        <button className={itemLikeButtonClassName} onClick={handleLike}>
          {isliked ? "Unlike" : "Like"}
        </button>
      )}
    </li>
  );
}

export default ItemCard;
