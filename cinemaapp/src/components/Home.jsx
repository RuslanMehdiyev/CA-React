function Home({ item, add, remove, check }) {
  return (
    <div className="card">
      <img src={item.Poster} alt="" />
      <p>{item.Title}</p>
      <p>{item.Year}</p>
      {check ? (
        <i
          style={{ background: "black" }}
          className="fa-solid fa-heart-crack heart"
          onClick={() => remove(item.imdbID)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart heart"
          onClick={() => add(item.imdbID)}
        ></i>
      )}
    </div>
  );
}

export default Home;
<i class="fa-solid fa-heart-crack"></i>;
