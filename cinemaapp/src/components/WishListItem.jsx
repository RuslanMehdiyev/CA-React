function WishListItem({ item, remove }) {
  return (
    <div className="whish-list-item">
      <img src={item.Poster} alt="" />
      <div>
        <h1>{item.Title}</h1>
        <h4>Year: {item.Year}</h4>
        <i
          className="fa-solid fa-heart-crack heart"
          title="Remove"
          onClick={() => remove(item.imdbID)}
        ></i>
      </div>
    </div>
  );
}

export default WishListItem;
