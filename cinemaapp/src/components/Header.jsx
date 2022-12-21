function Header({ setSearchValue, callFetch, badge, setModal }) {
  return (
    <header className="header">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass srcI"></i>
        <input
          autoFocus
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={callFetch}>Search</button>
      </div>
      <div style={{ position: "relative" }}>
        <h5
          className={badge > 0 ? "badge wish-list" : "wish-list"}
          data-count={badge}
          onClick={() => setModal(true)}
        >
          Favorites <i className="fa-regular fa-heart heart"></i>
        </h5>
      </div>
    </header>
  );
}

export default Header;
