import WishListItem from "./WishListItem";
function WishList({ setModal, wish, allData, remove }) {
  return (
    <div className="overlay">
      <div className="wishlist">
        <h1 style={{ color: "orangered" }}>Favorites</h1>
        <button onClick={() => setModal(false)} className="closeModal">
          X
        </button>
        {!wish.length && <h1>Favorites list is empty</h1>}
        {wish.map((a, key) => {
          let data = allData.find((movieData) => movieData.imdbID === a.id);
          return <WishListItem key={key} item={data} remove={remove} />;
        })}
      </div>
    </div>
  );
}

export default WishList;
